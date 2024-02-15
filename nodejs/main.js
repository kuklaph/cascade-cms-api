import axios from "axios";
import * as Requests from "./types.js";
export * as Types from "./types.js";
export function CascadeAPI({ apiKey, url }) {
  const timeout = 30000;
  const withAxios = async (requestParams) => {
    try {
      requestParams.timeout = timeout;
      const request = await axios(requestParams);
      return request.data;
    } catch (error) {
      if (error.code === "ECONNABORTED") {
        return {
          success: false,
          message: "Request timed out",
        };
      } else {
        // Handle other Axios errors
        return {
          success: false,
          message: error.message,
        };
      }
    }
  };
  const withFetch = async (requestParams) => {
    const { url, data, headers, method } = requestParams;

    const fetchPromise = fetch(url, {
      method,
      headers,
      body: data,
    });

    // Creating a promise that rejects in <n> milliseconds
    const timeoutPromise = new Promise((_, reject) => {
      const id = setTimeout(() => {
        clearTimeout(id);
        reject(new Error("Request timed out"));
      }, timeout);
    });

    try {
      const response = await Promise.race([fetchPromise, timeoutPromise]);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      } else {
        return await response.json();
      }
    } catch (error) {
      if (error.message === "Request timed out") {
        // Handle Fetch timeout specifically
        return {
          success: false,
          message: "Request timed out",
        };
      } else {
        // Handle other Fetch errors
        return {
          success: false,
          message: error.message,
        };
      }
    }
  };
  const call = (endPoint, requestParams) => {
    if (!apiKey || !url) {
      throw new Error(`Missing API key or cascade URL`);
    }
    const headers = {
      Authorization: `Bearer ${apiKey}`,
    };
    requestParams.headers = headers;
    requestParams.url = url + endPoint;
    return withAxios(requestParams);
    // return withFetch(requestParams);
  };
  const handleRequest = async (endPoint, opts, method = "POST") => {
    try {
      const requestParams = {
        method,
        data: JSON.stringify(opts),
      };
      const request = await call(endPoint, requestParams);
      if (!request.success) {
        throw new Error(`Request Failed. Request Response: ${request.message}`);
      }
      return request;
    } catch (error) {
      throw error;
    }
  };
  return {
    /**
     * read operation.
     *
     * @param {Requests.ReadRequest} opts - The starting object container.
     * @return {Promise<Requests.ReadResponse>}
     */
    read(opts) {
      return handleRequest("read", opts);
    },

    /**
     * removal operation.
     *
     * @param {Requests.RemoveRequest} opts - The starting object container.
     * @return {Promise<Requests.RemoveResponse>}
     */
    remove(opts) {
      return handleRequest("delete", opts);
    },

    /**
     * edit operation.
     *
     * @param {Requests.EditRequest} opts - The starting object container.
     * @return {Promise<Requests.EditResponse>}
     */
    edit(opts) {
      return handleRequest("edit", opts);
    },

    /**
     * create operation.
     *
     * @param {Requests.CreateRequest} opts - The starting object container.
     * @return {Promise<Requests.CreateResponse>}
     */
    create(opts) {
      return handleRequest("create", opts);
    },

    /**
     * move operation.
     *
     * @param {Requests.MoveRequest} opts - The starting object container.
     * @return {Promise<Requests.MoveResponse>}
     */
    move(opts) {
      return handleRequest("move", opts);
    },

    /**
     * search operation.
     *
     * @param {Requests.SearchRequest} opts - The starting object container.
     * @return {Promise<Requests.SearchResponse>}
     */
    search(opts) {
      return handleRequest("search", opts);
    },

    /**
     * copy operation.
     *
     * @param {Requests.CopyRequest} opts - The starting object container.
     * @return {Promise<Requests.CopyResponse>}
     */
    copy(opts) {
      return handleRequest("copy", opts);
    },

    /**
     * siteCopy operation.
     *
     * @param {Requests.SiteCopyRequest} opts - The starting object container.
     * @return {Promise<Requests.SiteCopyResponse>}
     */
    siteCopy(opts) {
      return handleRequest("siteCopy", opts);
    },

    /**
     * readAccessRights operation.
     *
     * @param {Requests.ReadAccessRightsRequest} opts - The starting object container.
     * @return {Promise<Requests.ReadAccessRightsResponse>}
     */
    readAccessRights(opts) {
      return handleRequest("readAccessRights", opts);
    },

    /**
     * editAccessRights operation.
     *
     * @param {Requests.EditAccessRightsRequest} opts - The starting object container.
     * @return {Promise<Requests.EditAccessRightsResponse>}
     */
    editAccessRights(opts) {
      return handleRequest("editAccessRights", opts);
    },

    /**
     * readWorkflowSettings operation.
     *
     * @param {Requests.ReadWorkflowSettingsRequest} opts - The starting object container.
     * @return {Promise<Requests.ReadWorkflowSettingsResponse>}
     */
    readWorkflowSettings(opts) {
      return handleRequest("readWorkflowSettings", opts);
    },

    /**
     * editWorkflowSettings operation.
     *
     * @param {Requests.EditWorkflowSettingsRequest} opts - The starting object container.
     * @return {Promise<Requests.EditWorkflowSettingsResponse>}
     */
    editWorkflowSettings(opts) {
      return handleRequest("editWorkflowSettings", opts);
    },

    /**
     * listSubscribers operation.
     *
     * @param {Requests.ListSubscribersRequest} opts - The starting object container.
     * @return {Promise<Requests.ListSubscribersResponse>}
     */
    listSubscribers(opts) {
      return handleRequest("listSubscribers", opts);
    },

    /**
     * listMessages operation.
     *
     * @param {Requests.ListMessagesRequest} opts - The starting object container.
     * @return {Promise<Requests.ListMessagesResponse>}
     */
    listMessages(opts) {
      return handleRequest("listMessages", opts);
    },

    /**
     * markMessage operation.
     *
     * @param {Requests.MarkMessageRequest} opts - The starting object container.
     * @return {Promise<Requests.MarkMessageResponse>}
     */
    markMessage(opts) {
      return handleRequest("markMessage", opts);
    },

    /**
     * deleteMessage operation.
     *
     * @param {Requests.DeleteMessageRequest} opts - The starting object container.
     * @return {Promise<Requests.DeleteMessageResponse>}
     */
    deleteMessage(opts) {
      return handleRequest("deleteMessage", opts);
    },

    /**
     * checkOut operation.
     *
     * @param {Requests.CheckOutRequest} opts - The starting object container.
     * @return {Promise<Requests.CheckOutResponse>}
     */
    checkOut(opts) {
      return handleRequest("checkOut", opts);
    },

    /**
     * checkIn operation.
     *
     * @param {Requests.CheckInRequest} opts - The starting object container.
     * @return {Promise<Requests.CheckInResponse>}
     */
    checkIn(opts) {
      return handleRequest("checkIn", opts);
    },

    /**
     * listSites operation.
     *
     * @param {Requests.ListSitesRequest} opts - The starting object container.
     * @return {Promise<Requests.ListSitesResponse>}
     */
    listSites(opts) {
      return handleRequest("listSites", opts);
    },

    /**
     * readAudits operation.
     *
     * @param {Requests.ReadAuditsRequest} opts - The starting object container.
     * @return {Promise<Requests.ReadAuditsResponse>}
     */
    readAudits(opts) {
      return handleRequest("readAudits", opts);
    },

    /**
     * readWorkflowInformation operation.
     *
     * @param {Requests.ReadWorkflowInformationRequest} opts - The starting object container.
     * @return {Promise<Requests.ReadWorkflowInformationResponse>}
     */
    readWorkflowInformation(opts) {
      return handleRequest("readWorkflowInformation", opts);
    },

    /**
     * performWorkflowTransition operation.
     *
     * @param {Requests.PerformWorkflowTransitionRequest} opts - The starting object container.
     * @return {Promise<Requests.PerformWorkflowTransitionResponse>}
     */
    performWorkflowTransition(opts) {
      return handleRequest("performWorkflowTransition", opts);
    },

    /**
     * readPreferences operation.
     *
     * @param {Requests.ReadPreferencesRequest} opts - The starting object container.
     * @return {Promise<Requests.ReadPreferencesResponse>}
     */
    readPreferences(opts) {
      return handleRequest("readPreferences", opts);
    },

    /**
     * publishUnpublish operation.
     *
     * @param {Requests.PublishUnpublishRequest} opts - The starting object container.
     * @return {Promise<Requests.PublishUnpublishResponse>}
     */
    publishUnpublish(opts) {
      return handleRequest("publish", opts);
    },
  };
}
