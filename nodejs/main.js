import axios from "axios";
import * as Requests from "./types.js";

export default function CascadeAPI({ apiKey, url }) {
  const timeout = 5000;
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
      throw `Missing API key or cascade URL`;
    }
    const headers = {
      Authorization: `Bearer ${apiKey}`,
    };
    requestParams.headers = headers;
    requestParams.url = url + endPoint;
    return withAxios(requestParams);
    // return  withFetch(requestParams);
  };
  const handleRequest = async (endPoint, opts, method = "POST") => {
    try {
      const requestParams = {
        method,
        data: JSON.stringify(opts),
      };
      const request = await call(endPoint, requestParams);
      if (!request.success) {
        throw `Request Failed. Request Response: ${request.message}`;
      }
      return request;
    } catch (error) {
      console.error(error);
    }
  };
  return {
    /**
     * read operation.
     *
     * @param {Requests.readRequest} opts - The starting object container.
     * @return {Promise<Requests.readResponse>}
     */
    read(opts) {
      return handleRequest("read", opts);
    },

    /**
     * removal operation.
     *
     * @param {Requests.removeRequest} opts - The starting object container.
     * @return {Promise<Requests.removeResponse>}
     */
    remove(opts) {
      return handleRequest("delete", opts);
    },

    /**
     * edit operation.
     *
     * @param {Requests.editRequest} opts - The starting object container.
     * @return {Promise<Requests.editResponse>}
     */
    edit(opts) {
      return handleRequest("edit", opts);
    },

    /**
     * create operation.
     *
     * @param {Requests.createRequest} opts - The starting object container.
     * @return {Promise<Requests.createResponse>}
     */
    create(opts) {
      return handleRequest("create", opts);
    },

    /**
     * move operation.
     *
     * @param {Requests.moveRequest} opts - The starting object container.
     * @return {Promise<Requests.moveResponse>}
     */
    move(opts) {
      return handleRequest("move", opts);
    },

    /**
     * search operation.
     *
     * @param {Requests.searchRequest} opts - The starting object container.
     * @return {Promise<Requests.searchResponse>}
     */
    search(opts) {
      return handleRequest("search", opts);
    },

    /**
     * copy operation.
     *
     * @param {Requests.copyRequest} opts - The starting object container.
     * @return {Promise<Requests.copyResponse>}
     */
    copy(opts) {
      return handleRequest("copy", opts);
    },

    /**
     * siteCopy operation.
     *
     * @param {Requests.siteCopyRequest} opts - The starting object container.
     * @return {Promise<Requests.siteCopyResponse>}
     */
    siteCopy(opts) {
      return handleRequest("siteCopy", opts);
    },

    /**
     * readAccessRights operation.
     *
     * @param {Requests.readAccessRightsRequest} opts - The starting object container.
     * @return {Promise<Requests.readAccessRightsResponse>}
     */
    readAccessRights(opts) {
      return handleRequest("readAccessRights", opts);
    },

    /**
     * editAccessRights operation.
     *
     * @param {Requests.editAccessRightsRequest} opts - The starting object container.
     * @return {Promise<Requests.editAccessRightsResponse>}
     */
    editAccessRights(opts) {
      return handleRequest("editAccessRights", opts);
    },

    /**
     * readWorkflowSettings operation.
     *
     * @param {Requests.readWorkflowSettingsRequest} opts - The starting object container.
     * @return {Promise<Requests.readWorkflowSettingsResponse>}
     */
    readWorkflowSettings(opts) {
      return handleRequest("readWorkflowSettings", opts);
    },

    /**
     * editWorkflowSettings operation.
     *
     * @param {Requests.editWorkflowSettingsRequest} opts - The starting object container.
     * @return {Promise<Requests.editWorkflowSettingsResponse>}
     */
    editWorkflowSettings(opts) {
      return handleRequest("editWorkflowSettings", opts);
    },

    /**
     * listSubscribers operation.
     *
     * @param {Requests.listSubscribersRequest} opts - The starting object container.
     * @return {Promise<Requests.listSubscribersResponse>}
     */
    listSubscribers(opts) {
      return handleRequest("listSubscribers", opts);
    },

    /**
     * listMessages operation.
     *
     * @param {Requests.listMessagesRequest} opts - The starting object container.
     * @return {Promise<Requests.listMessagesResponse>}
     */
    listMessages(opts) {
      return handleRequest("listMessages", opts);
    },

    /**
     * markMessage operation.
     *
     * @param {Requests.markMessageRequest} opts - The starting object container.
     * @return {Promise<Requests.markMessageResponse>}
     */
    markMessage(opts) {
      return handleRequest("markMessage", opts);
    },

    /**
     * deleteMessage operation.
     *
     * @param {Requests.deleteMessageRequest} opts - The starting object container.
     * @return {Promise<Requests.deleteMessageResponse>}
     */
    deleteMessage(opts) {
      return handleRequest("deleteMessage", opts);
    },

    /**
     * checkOut operation.
     *
     * @param {Requests.checkOutRequest} opts - The starting object container.
     * @return {Promise<Requests.checkOutResponse>}
     */
    checkOut(opts) {
      return handleRequest("checkOut", opts);
    },

    /**
     * checkIn operation.
     *
     * @param {Requests.checkInRequest} opts - The starting object container.
     * @return {Promise<Requests.checkInResponse>}
     */
    checkIn(opts) {
      return handleRequest("checkIn", opts);
    },

    /**
     * listSites operation.
     *
     * @param {Requests.listSitesRequest} opts - The starting object container.
     * @return {Promise<Requests.listSitesResponse>}
     */
    listSites(opts) {
      return handleRequest("listSites", opts);
    },

    /**
     * readAudits operation.
     *
     * @param {Requests.readAuditsRequest} opts - The starting object container.
     * @return {Promise<Requests.readAuditsResponse>}
     */
    readAudits(opts) {
      return handleRequest("readAudits", opts);
    },

    /**
     * readWorkflowInformation operation.
     *
     * @param {Requests.readWorkflowInformationRequest} opts - The starting object container.
     * @return {Promise<Requests.readWorkflowInformationResponse>}
     */
    readWorkflowInformation(opts) {
      return handleRequest("readWorkflowInformation", opts);
    },

    /**
     * performWorkflowTransition operation.
     *
     * @param {Requests.performWorkflowTransitionRequest} opts - The starting object container.
     * @return {Promise<Requests.performWorkflowTransitionResponse>}
     */
    performWorkflowTransition(opts) {
      return handleRequest("performWorkflowTransition", opts);
    },

    /**
     * readPreferences operation.
     *
     * @param {Requests.readPreferencesRequest} opts - The starting object container.
     * @return {Promise<Requests.readPreferencesResponse>}
     */
    readPreferences(opts) {
      return handleRequest("readPreferences", opts);
    },

    /**
     * publishUnpublish operation.
     *
     * @param {Requests.publishUnpublishRequest} opts - The starting object container.
     * @return {Promise<Requests.publishUnpublishResponse>}
     */
    publishUnpublish(opts) {
      return handleRequest("publish", opts);
    },
  };
}
