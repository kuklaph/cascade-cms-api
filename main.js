// https://github.com/kuklaph/cascade-cms-api

import * as Requests from "./types/types.js";
export * as Types from "./types/types.js";

/**
 * Creates a configured instance of the Cascade API with methods to perform API requests.
 * @param {Object} config
 * @param {string} config.apiKey - Your generated API key from Cascade
 * @param {string} config.url - Your domain specific Cascade API URL
 * @param {number} [timeout=30000] - Optional. Default is 30000 eg 30 seconds. Make sure to use milliseconds
 */
export function CascadeAPI({ apiKey, url }, timeout = 30000) {
  const withRetry = async (
    callback,
    {
      callbackOpts = [],
      initialDelay = 1000,
      triesLeft = 2,
      isExpo = true,
      factor = 2,
    } = {}
  ) => {
    return new Promise((resolve, reject) => {
      let attempt = 1;
      let currentDelay = initialDelay;
      let lastResult;

      const retry = async () => {
        if (triesLeft <= 0) {
          return reject(lastResult);
        }

        try {
          lastResult = await callback(...callbackOpts);
          if (lastResult?.timeout) {
            console.log(
              `Attempt ${attempt} timeout, retrying in ${currentDelay}ms...`
            );

            setTimeout(retry, currentDelay);

            if (isExpo) {
              currentDelay *= factor;
            }

            triesLeft--;
            attempt++;
          } else {
            return resolve(lastResult);
          }
        } catch (error) {
          return reject(error);
        }
      };

      retry();
    });
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
          timeout: true,
        };
      } else {
        // Handle other Fetch errors
        return {
          success: false,
          message: error.message,
          timeout: false,
        };
      }
    }
  };
  const sendRequest = async (endPoint, requestParams) => {
    if (!apiKey || !url) {
      throw new Error(`Missing API key or cascade URL`);
    }
    const headers = {
      Authorization: `Bearer ${apiKey}`,
    };
    requestParams.headers = headers;
    requestParams.url = url + endPoint;

    return withFetch(requestParams);
  };
  const handleRequest = async (endPoint, opts, retryOnTimeout) => {
    try {
      const requestParams = {
        method: "POST",
        data: JSON.stringify(opts),
      };
      const request = await withRetry(sendRequest, {
        callbackOpts: [endPoint, requestParams],
        triesLeft: retryOnTimeout ? 3 : 1,
      });
      
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
     * @param {boolean} retryOnTimeout - Should the request retry on timeout
     * @return {Promise<Requests.ReadResponse>}
     */
    read(opts, retryOnTimeout = true) {
      return handleRequest("read", opts, retryOnTimeout);
    },

    /**
     * removal operation.
     *
     * @param {Requests.RemoveRequest} opts - The starting object container.
     * @param {boolean} retryOnTimeout - Should the request retry on timeout
     * @return {Promise<Requests.RemoveResponse>}
     */
    remove(opts, retryOnTimeout = true) {
      return handleRequest("delete", opts, retryOnTimeout);
    },

    /**
     * edit operation.
     *
     * @param {Requests.EditRequest} opts - The starting object container.
     * @param {boolean} retryOnTimeout - Should the request retry on timeout
     * @return {Promise<Requests.EditResponse>}
     */
    edit(opts, retryOnTimeout = true) {
      return handleRequest("edit", opts, retryOnTimeout);
    },

    /**
     * create operation.
     *
     * @param {Requests.CreateRequest} opts - The starting object container.
     * @param {boolean} retryOnTimeout - Should the request retry on timeout
     * @return {Promise<Requests.CreateResponse>}
     */
    create(opts, retryOnTimeout = true) {
      return handleRequest("create", opts, retryOnTimeout);
    },

    /**
     * move operation.
     *
     * @param {Requests.MoveRequest} opts - The starting object container.
     * @param {boolean} retryOnTimeout - Should the request retry on timeout
     * @return {Promise<Requests.MoveResponse>}
     */
    move(opts, retryOnTimeout = true) {
      return handleRequest("move", opts, retryOnTimeout);
    },

    /**
     * search operation.
     *
     * @param {Requests.SearchRequest} opts - The starting object container.
     * @param {boolean} retryOnTimeout - Should the request retry on timeout
     * @return {Promise<Requests.SearchResponse>}
     */
    search(opts, retryOnTimeout = true) {
      return handleRequest("search", opts, retryOnTimeout);
    },

    /**
     * copy operation.
     *
     * @param {Requests.CopyRequest} opts - The starting object container.
     * @param {boolean} retryOnTimeout - Should the request retry on timeout
     * @return {Promise<Requests.CopyResponse>}
     */
    copy(opts, retryOnTimeout = true) {
      return handleRequest("copy", opts, retryOnTimeout);
    },

    /**
     * siteCopy operation.
     *
     * @param {Requests.SiteCopyRequest} opts - The starting object container.
     * @param {boolean} retryOnTimeout - Should the request retry on timeout
     * @return {Promise<Requests.SiteCopyResponse>}
     */
    siteCopy(opts, retryOnTimeout = true) {
      return handleRequest("siteCopy", opts, retryOnTimeout);
    },

    /**
     * readAccessRights operation.
     *
     * @param {Requests.ReadAccessRightsRequest} opts - The starting object container.
     * @param {boolean} retryOnTimeout - Should the request retry on timeout
     * @return {Promise<Requests.ReadAccessRightsResponse>}
     */
    readAccessRights(opts, retryOnTimeout = true) {
      return handleRequest("readAccessRights", opts, retryOnTimeout);
    },

    /**
     * editAccessRights operation.
     *
     * @param {Requests.EditAccessRightsRequest} opts - The starting object container.
     * @param {boolean} retryOnTimeout - Should the request retry on timeout
     * @return {Promise<Requests.EditAccessRightsResponse>}
     */
    editAccessRights(opts, retryOnTimeout = true) {
      return handleRequest("editAccessRights", opts, retryOnTimeout);
    },

    /**
     * readWorkflowSettings operation.
     *
     * @param {Requests.ReadWorkflowSettingsRequest} opts - The starting object container.
     * @param {boolean} retryOnTimeout - Should the request retry on timeout
     * @return {Promise<Requests.ReadWorkflowSettingsResponse>}
     */
    readWorkflowSettings(opts, retryOnTimeout = true) {
      return handleRequest("readWorkflowSettings", opts, retryOnTimeout);
    },

    /**
     * editWorkflowSettings operation.
     *
     * @param {Requests.EditWorkflowSettingsRequest} opts - The starting object container.
     * @param {boolean} retryOnTimeout - Should the request retry on timeout
     * @return {Promise<Requests.EditWorkflowSettingsResponse>}
     */
    editWorkflowSettings(opts, retryOnTimeout = true) {
      return handleRequest("editWorkflowSettings", opts, retryOnTimeout);
    },

    /**
     * listSubscribers operation.
     *
     * @param {Requests.ListSubscribersRequest} opts - The starting object container.
     * @param {boolean} retryOnTimeout - Should the request retry on timeout
     * @return {Promise<Requests.ListSubscribersResponse>}
     */
    listSubscribers(opts, retryOnTimeout = true) {
      return handleRequest("listSubscribers", opts, retryOnTimeout);
    },

    /**
     * listMessages operation.
     *
     * @param {Requests.ListMessagesRequest} opts - The starting object container.
     * @param {boolean} retryOnTimeout - Should the request retry on timeout
     * @return {Promise<Requests.ListMessagesResponse>}
     */
    listMessages(opts, retryOnTimeout = true) {
      return handleRequest("listMessages", opts, retryOnTimeout);
    },

    /**
     * markMessage operation.
     *
     * @param {Requests.MarkMessageRequest} opts - The starting object container.
     * @param {boolean} retryOnTimeout - Should the request retry on timeout
     * @return {Promise<Requests.MarkMessageResponse>}
     */
    markMessage(opts, retryOnTimeout = true) {
      return handleRequest("markMessage", opts, retryOnTimeout);
    },

    /**
     * deleteMessage operation.
     *
     * @param {Requests.DeleteMessageRequest} opts - The starting object container.
     * @param {boolean} retryOnTimeout - Should the request retry on timeout
     * @return {Promise<Requests.DeleteMessageResponse>}
     */
    deleteMessage(opts, retryOnTimeout = true) {
      return handleRequest("deleteMessage", opts, retryOnTimeout);
    },

    /**
     * checkOut operation.
     *
     * @param {Requests.CheckOutRequest} opts - The starting object container.
     * @param {boolean} retryOnTimeout - Should the request retry on timeout
     * @return {Promise<Requests.CheckOutResponse>}
     */
    checkOut(opts, retryOnTimeout = true) {
      return handleRequest("checkOut", opts, retryOnTimeout);
    },

    /**
     * checkIn operation.
     *
     * @param {Requests.CheckInRequest} opts - The starting object container.
     * @param {boolean} retryOnTimeout - Should the request retry on timeout
     * @return {Promise<Requests.CheckInResponse>}
     */
    checkIn(opts, retryOnTimeout = true) {
      return handleRequest("checkIn", opts, retryOnTimeout);
    },

    /**
     * listSites operation.
     *
     * @param {Requests.ListSitesRequest} opts - The starting object container.
     * @param {boolean} retryOnTimeout - Should the request retry on timeout
     * @return {Promise<Requests.ListSitesResponse>}
     */
    listSites(opts, retryOnTimeout = true) {
      return handleRequest("listSites", opts, retryOnTimeout);
    },

    /**
     * readAudits operation.
     *
     * @param {Requests.ReadAuditsRequest} opts - The starting object container.
     * @param {boolean} retryOnTimeout - Should the request retry on timeout
     * @return {Promise<Requests.ReadAuditsResponse>}
     */
    readAudits(opts, retryOnTimeout = true) {
      return handleRequest("readAudits", opts, retryOnTimeout);
    },

    /**
     * readWorkflowInformation operation.
     *
     * @param {Requests.ReadWorkflowInformationRequest} opts - The starting object container.
     * @param {boolean} retryOnTimeout - Should the request retry on timeout
     * @return {Promise<Requests.ReadWorkflowInformationResponse>}
     */
    readWorkflowInformation(opts, retryOnTimeout = true) {
      return handleRequest("readWorkflowInformation", opts, retryOnTimeout);
    },

    /**
     * performWorkflowTransition operation.
     *
     * @param {Requests.PerformWorkflowTransitionRequest} opts - The starting object container.
     * @param {boolean} retryOnTimeout - Should the request retry on timeout
     * @return {Promise<Requests.PerformWorkflowTransitionResponse>}
     */
    performWorkflowTransition(opts, retryOnTimeout = true) {
      return handleRequest("performWorkflowTransition", opts, retryOnTimeout);
    },

    /**
     * readPreferences operation.
     *
     * @param {Requests.ReadPreferencesRequest} opts - The starting object container.
     * @param {boolean} retryOnTimeout - Should the request retry on timeout
     * @return {Promise<Requests.ReadPreferencesResponse>}
     */
    readPreferences(opts, retryOnTimeout = true) {
      return handleRequest("readPreferences", opts, retryOnTimeout);
    },

    /**
     * publishUnpublish operation.
     *
     * @param {Requests.PublishUnpublishRequest} opts - The starting object container.
     * @param {boolean} retryOnTimeout - Should the request retry on timeout
     * @return {Promise<Requests.PublishUnpublishResponse>}
     */
    publishUnpublish(opts, retryOnTimeout = true) {
      return handleRequest("publish", opts, retryOnTimeout);
    },
  };
}
