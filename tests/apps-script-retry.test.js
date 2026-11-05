import { describe, expect, test } from "bun:test";
import { readFileSync } from "node:fs";
import { createContext, runInContext } from "node:vm";

const source = readFileSync(new URL("../apps-script/main.js", import.meta.url), "utf8");
const timeoutResponse = {
  success: false,
  message: "Request timed out",
  timeout: true,
};

function createAPI(responses) {
  const calls = [];
  const sleeps = [];
  const context = createContext({
    console: { log() {}, error() {} },
    Utilities: {
      sleep(delay) {
        sleeps.push(delay);
        if (sleeps.length > 3) throw new Error("Unexpected extra retry");
      },
    },
    UrlFetchApp: {
      fetch(url, options) {
        calls.push({ url, options });
        const response = responses[Math.min(calls.length - 1, responses.length - 1)];
        if (response instanceof Error) throw response;
        // Model HTTPResponse's string conversion used by the current client.
        return { toString: () => JSON.stringify(response) };
      },
    },
  });
  runInContext(source, context);
  const api = context.CascadeAPI_({
    apiKey: "test-api-key",
    url: "https://tenant.cascadecms.com/api/v1/",
  });
  return { api, calls, sleeps };
}

describe("Apps Script retries", () => {
  test.each([0, 1, 2])("returns success synchronously after %i timeouts", (failedAttempts) => {
    const recovered = { success: true, asset: { page: { id: "asset-123" } } };
    const responses = [...Array(failedAttempts).fill(timeoutResponse), recovered];
    const { api, calls, sleeps } = createAPI(responses);

    expect(api.read({ identifier: { id: "asset-123", type: "page" } })).toEqual(recovered);
    expect(calls).toHaveLength(failedAttempts + 1);
    expect(sleeps).toEqual([1000, 2000].slice(0, failedAttempts));
  });

  test("makes three attempts with exponential backoff and throws on exhaustion", () => {
    const { api, calls, sleeps } = createAPI([timeoutResponse]);

    expect(() => api.read({})).toThrow("Request Failed. Request Response: Request timed out");
    expect(calls).toHaveLength(3);
    expect(sleeps).toEqual([1000, 2000]);
  });

  test("does not retry or sleep when retries are disabled for a write", () => {
    const { api, calls, sleeps } = createAPI([timeoutResponse, { success: true }]);

    expect(() => api.create({}, false)).toThrow("Request Failed. Request Response: Request timed out");
    expect(calls).toHaveLength(1);
    expect(sleeps).toEqual([]);
  });

  test("throws the original transport error without retrying a write", () => {
    const failure = new Error("Synthetic URL Fetch timeout");
    const { api, calls, sleeps } = createAPI([failure, { success: true }]);

    let thrown;
    try {
      api.create({});
    } catch (error) {
      thrown = error;
    }
    expect(thrown).toBe(failure);
    expect(calls).toHaveLength(1);
    expect(sleeps).toEqual([]);
  });

  test("throws an API rejection without retrying it", () => {
    const { api, calls, sleeps } = createAPI([
      { success: false, message: "Permission denied" },
      { success: true },
    ]);

    expect(() => api.read({})).toThrow("Request Failed. Request Response: Permission denied");
    expect(calls).toHaveLength(1);
    expect(sleeps).toEqual([]);
  });
});
