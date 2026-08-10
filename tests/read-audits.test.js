import { afterEach, describe, expect, mock, test } from "bun:test";
import { CascadeAPI } from "../main.js";

const originalFetch = globalThis.fetch;

afterEach(() => {
  globalThis.fetch = originalFetch;
});

function mockSuccessfulFetch() {
  const fetchMock = mock(async () => ({
    ok: true,
    json: async () => ({ success: true }),
  }));
  globalThis.fetch = fetchMock;
  return fetchMock;
}

describe("readAudits", () => {
  test("posts an asset target at the top level of the flat endpoint body", async () => {
    const fetchMock = mockSuccessfulFetch();
    const api = CascadeAPI({
      apiKey: "test-api-key",
      url: "https://tenant.cascadecms.com/api/v1/",
    });
    const request = {
      identifier: {
        id: "asset-123",
        type: "page",
      },
      auditParameters: {
        auditType: "edit",
        startDate: "Jul 1, 2026 12:00:00 AM",
        endDate: "Aug 5, 2026 11:59:59 PM",
      },
    };

    await api.readAudits(request);

    expect(fetchMock).toHaveBeenCalledWith(
      "https://tenant.cascadecms.com/api/v1/readAudits",
      {
        method: "POST",
        headers: {
          Authorization: "Bearer test-api-key",
        },
        body: JSON.stringify(request),
      },
    );
  });

  test.each(["username", "groupname", "rolename"])(
    "preserves a nested %s target",
    async (targetField) => {
      const fetchMock = mockSuccessfulFetch();
      const api = CascadeAPI({
        apiKey: "test-api-key",
        url: "https://tenant.cascadecms.com/api/v1/",
      });
      const request = {
        auditParameters: {
          [targetField]: "Sample Target",
        },
      };

      await api.readAudits(request);

      expect(fetchMock.mock.calls[0][0]).toBe(
        "https://tenant.cascadecms.com/api/v1/readAudits",
      );
      expect(JSON.parse(fetchMock.mock.calls[0][1].body)).toEqual(request);
    },
  );
});
