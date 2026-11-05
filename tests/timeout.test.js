import { afterEach, beforeEach, describe, expect, spyOn, test } from "bun:test";
import { CascadeAPI } from "../main.js";

const originalFetch = globalThis.fetch;
const originalSetTimeout = globalThis.setTimeout;
const originalClearTimeout = globalThis.clearTimeout;
const config = {
  apiKey: "test-api-key",
  url: "https://tenant.cascadecms.com/api/v1/",
};
const timeoutResult = {
  success: false,
  message: "Request timed out",
  timeout: true,
};
const timers = new Map();
let nextTimerId;
let consoleSpy;

// Control request deadlines and retry delays without waiting in real time.
beforeEach(() => {
  nextTimerId = 0;
  globalThis.setTimeout = (callback, delay) => {
    const id = ++nextTimerId;
    timers.set(id, { callback, delay });
    return id;
  };
  globalThis.clearTimeout = (id) => timers.delete(id);
  consoleSpy = spyOn(console, "log").mockImplementation(() => {});
});

afterEach(() => {
  globalThis.fetch = originalFetch;
  globalThis.setTimeout = originalSetTimeout;
  globalThis.clearTimeout = originalClearTimeout;
  timers.clear();
  consoleSpy.mockRestore();
});

async function runTimer(delay) {
  const entry = [...timers].find(([, timer]) => timer.delay === delay);
  expect(entry).toBeDefined();
  const [id, timer] = entry;
  timers.delete(id);
  timer.callback();
  await new Promise((resolve) => originalSetTimeout(resolve, 0));
}

describe("request timeout", () => {
  test("aborts Fetch and rejects with a timeout Error when retries are disabled", async () => {
    let requestSignal;
    globalThis.fetch = (_url, { signal }) => {
      requestSignal = signal;
      return new Promise((_, reject) => {
        signal?.addEventListener("abort", () => reject(signal.reason), { once: true });
      });
    };

    const result = CascadeAPI(config, 10).read({}, false).catch((error) => error);
    await runTimer(10);

    expect(requestSignal).toBeInstanceOf(AbortSignal);
    expect(requestSignal.aborted).toBe(true);
    // Preserve the existing final backoff before timeout rejection.
    await runTimer(1000);
    const error = await result;
    expect(error).toBeInstanceOf(Error);
    expect(error).toMatchObject(timeoutResult);
    expect(error.stack).toBeString();
    expect(timers.size).toBe(0);
  });

  test("clears the deadline at response headers while allowing the body to finish later", async () => {
    let requestSignal;
    let finishBody;
    const body = new Promise((resolve) => { finishBody = resolve; });
    globalThis.fetch = async (_url, { signal }) => {
      requestSignal = signal;
      return { ok: true, json: () => body };
    };

    const result = CascadeAPI(config, 10).read({});
    await new Promise((resolve) => originalSetTimeout(resolve, 0));

    expect(timers.size).toBe(0);
    expect(requestSignal.aborted).toBe(false);
    finishBody({ success: true });
    expect(await result).toEqual({ success: true });
  });

  test.each([
    ["HTTP", async () => ({ ok: false, status: 503 }), "HTTP error! status: 503"],
    ["network", async () => { throw new Error("Network unavailable"); }, "Network unavailable"],
    ["JSON", async () => ({ ok: true, json: async () => { throw new Error("Invalid JSON"); } }), "Invalid JSON"],
  ])("clears the deadline on a %s failure without retrying", async (_kind, fetchImpl, message) => {
    let calls = 0;
    globalThis.fetch = (...args) => {
      calls++;
      return fetchImpl(...args);
    };

    await expect(CascadeAPI(config, 10).read({})).rejects.toThrow(
      `Request Failed. Request Response: ${message}`,
    );
    expect(calls).toBe(1);
    expect(timers.size).toBe(0);
  });

  test("uses a fresh signal for a successful retry after aborting the first attempt", async () => {
    const signals = [];
    globalThis.fetch = (_url, { signal }) => {
      signals.push(signal);
      if (signals.length === 1) {
        return new Promise((_, reject) => {
          signal.addEventListener("abort", () => reject(signal.reason), { once: true });
        });
      }
      return Promise.resolve({ ok: true, json: async () => ({ success: true }) });
    };

    const result = CascadeAPI(config, 10).read({});
    await runTimer(10);
    await runTimer(1000);

    expect(await result).toEqual({ success: true });
    expect(signals).toHaveLength(2);
    expect(signals[0].aborted).toBe(true);
    expect(signals[1].aborted).toBe(false);
    expect(signals[0]).not.toBe(signals[1]);
    expect(timers.size).toBe(0);
  });

  test("preserves three default attempts and rejects with a timeout Error for a write", async () => {
    const signals = [];
    globalThis.fetch = (_url, { signal }) => {
      signals.push(signal);
      return new Promise((_, reject) => {
        signal.addEventListener("abort", () => reject(signal.reason), { once: true });
      });
    };

    const result = CascadeAPI(config, 10).create({}).catch((error) => error);
    for (const retryDelay of [1000, 2000, 4000]) {
      await runTimer(10);
      await runTimer(retryDelay);
    }

    const error = await result;
    expect(error).toBeInstanceOf(Error);
    expect(error).toMatchObject(timeoutResult);
    expect(signals).toHaveLength(3);
    expect(new Set(signals).size).toBe(3);
    expect(signals.every((signal) => signal.aborted)).toBe(true);
    expect(timers.size).toBe(0);
  });
});
