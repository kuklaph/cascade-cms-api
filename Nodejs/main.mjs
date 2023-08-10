import withAxios from "./withAxios.mjs";
// import withFetch from "./withFetch.mjs";
import * as Requests from "./types.mjs";

export default function CascadeAPI({ apiKey, url }) {
  const call = async (endPoint, requestParams) => {
    try {
      if (!apiKey || !url) {
        throw `Missing API key or cascade URL`;
      }
      const headers = {
        Authorization: `Bearer ${apiKey}`,
      };
      requestParams.headers = headers;
      requestParams.url = url + endPoint;
      return await withAxios(requestParams);
      // return await withFetch(requestParams);
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
    async read(opts) {
      const endPoint = `read`;
      const requestParams = {
        method: "POST",
        data: JSON.stringify(opts),
      };
      const request = await call(endPoint, requestParams);
      if (!request.success) {
        throw `Request Failed. Request Response: ${request.message}`;
      }
      return request;
    },

    /**
     * removal operation.
     *
     * @param {Requests.removeRequest} opts - The starting object container.
     * @return {Promise<Requests.removeResponse>}
     */
    async remove(opts) {
      // Delete
      const endPoint = `delete`;
      const requestParams = {
        method: "POST",
        data: JSON.stringify(opts),
      };
      const request = await call(endPoint, requestParams);
      if (!request.success) {
        throw `Request Failed. Request Response: ${request.message}`;
      }
      return request;
    },

    /**
     * edit operation.
     *
     * @param {Requests.editRequest} opts - The starting object container.
     * @return {Promise<Requests.editResponse>}
     */
    async edit(opts) {
      const endPoint = `edit`;
      const requestParams = {
        method: "POST",
        data: JSON.stringify(opts),
      };
      const request = await call(endPoint, requestParams);
      if (!request.success) {
        throw `Request Failed. Request Response: ${request.message}`;
      }
      return request;
    },

    /**
     * create operation.
     *
     * @param {Requests.createRequest} opts - The starting object container.
     * @return {Promise<Requests.createResponse>}
     */
    async create(opts) {
      const endPoint = `create`;
      const requestParams = {
        method: "POST",
        data: JSON.stringify(opts),
      };
      const request = await call(endPoint, requestParams);
      if (!request.success) {
        throw `Request Failed. Request Response: ${request.message}`;
      }
      return request;
    },

    /**
     * move operation.
     *
     * @param {Requests.moveRequest} opts - The starting object container.
     * @return {Promise<Requests.moveResponse>}
     */
    async move(opts) {
      const endPoint = `move`;
      const requestParams = {
        method: "POST",
        data: JSON.stringify(opts),
      };
      const request = await call(endPoint, requestParams);
      if (!request.success) {
        throw `Request Failed. Request Response: ${request.message}`;
      }
      return request;
    },

    /**
     * search operation.
     *
     * @param {Requests.searchRequest} opts - The starting object container.
     * @return {Promise<Requests.searchResponse>}
     */
    async search(opts) {
      const endPoint = "search";
      const requestParams = {
        method: "POST",
        data: JSON.stringify(opts),
      };
      const request = await call(endPoint, requestParams);
      if (!request.success) {
        throw `Request Failed. Request Response: ${request.message}`;
      }
      return request;
    },

    /**
     * copy operation.
     *
     * @param {Requests.copyRequest} opts - The starting object container.
     * @return {Promise<Requests.copyResponse>}
     */
    async copy(opts) {
      const endPoint = "copy";
      const requestParams = {
        method: "POST",
        data: JSON.stringify(opts),
      };
      const request = await call(endPoint, requestParams);
      if (!request.success) {
        throw `Request Failed. Request Response: ${request.message}`;
      }
      return request;
    },

    /**
     * siteCopy operation.
     *
     * @param {Requests.siteCopyRequest} opts - The starting object container.
     * @return {Promise<Requests.siteCopyResponse>}
     */
    async siteCopy(opts) {
      const endPoint = "siteCopy";
      const requestParams = {
        method: "POST",
        data: JSON.stringify(opts),
      };
      const request = await call(endPoint, requestParams);
      if (!request.success) {
        throw `Request Failed. Request Response: ${request.message}`;
      }
      return request;
    },

    /**
     * readAccessRights operation.
     *
     * @param {Requests.readAccessRightsRequest} opts - The starting object container.
     * @return {Promise<Requests.readAccessRightsResponse>}
     */
    async readAccessRights(opts) {
      const endPoint = "readAccessRights";
      const requestParams = {
        method: "POST",
        data: JSON.stringify(opts),
      };
      const request = await call(endPoint, requestParams);
      if (!request.success) {
        throw `Request Failed. Request Response: ${request.message}`;
      }
      return request;
    },

    /**
     * editAccessRights operation.
     *
     * @param {Requests.editAccessRightsRequest} opts - The starting object container.
     * @return {Promise<Requests.editAccessRightsResponse>}
     */
    async editAccessRights(opts) {
      const endPoint = "editAccessRights";
      const requestParams = {
        method: "POST",
        data: JSON.stringify(opts),
      };
      const request = await call(endPoint, requestParams);
      if (!request.success) {
        throw `Request Failed. Request Response: ${request.message}`;
      }
      return request;
    },

    /**
     * readWorkflowSettings operation.
     *
     * @param {Requests.readWorkflowSettingsRequest} opts - The starting object container.
     * @return {Promise<Requests.readWorkflowSettingsResponse>}
     */
    async readWorkflowSettings(opts) {
      const endPoint = "readWorkflowSettings";
      const requestParams = {
        method: "POST",
        data: JSON.stringify(opts),
      };
      const request = await call(endPoint, requestParams);
      if (!request.success) {
        throw `Request Failed. Request Response: ${request.message}`;
      }
      return request;
    },

    /**
     * editWorkflowSettings operation.
     *
     * @param {Requests.editWorkflowSettingsRequest} opts - The starting object container.
     * @return {Promise<Requests.editWorkflowSettingsResponse>}
     */
    async editWorkflowSettings(opts) {
      const endPoint = "editWorkflowSettings";
      const requestParams = {
        method: "POST",
        data: JSON.stringify(opts),
      };
      const request = await call(endPoint, requestParams);
      if (!request.success) {
        throw `Request Failed. Request Response: ${request.message}`;
      }
      return request;
    },

    /**
     * listSubscribers operation.
     *
     * @param {Requests.listSubscribersRequest} opts - The starting object container.
     * @return {Promise<Requests.listSubscribersResponse>}
     */
    async listSubscribers(opts) {
      const endPoint = "listSubscribers";
      const requestParams = {
        method: "POST",
        data: JSON.stringify(opts),
      };
      const request = await call(endPoint, requestParams);
      if (!request.success) {
        throw `Request Failed. Request Response: ${request.message}`;
      }
      return request;
    },

    /**
     * listMessages operation.
     *
     * @param {Requests.listMessagesRequest} opts - The starting object container.
     * @return {Promise<Requests.listMessagesResponse>}
     */
    async listMessages(opts) {
      const endPoint = "listMessages";
      const requestParams = {
        method: "POST",
        data: JSON.stringify(opts),
      };
      const request = await call(endPoint, requestParams);
      if (!request.success) {
        throw `Request Failed. Request Response: ${request.message}`;
      }
      return request;
    },

    /**
     * markMessage operation.
     *
     * @param {Requests.markMessageRequest} opts - The starting object container.
     * @return {Promise<Requests.markMessageResponse>}
     */
    async markMessage(opts) {
      const endPoint = "markMessage";
      const requestParams = {
        method: "POST",
        data: JSON.stringify(opts),
      };
      const request = await call(endPoint, requestParams);
      if (!request.success) {
        throw `Request Failed. Request Response: ${request.message}`;
      }
      return request;
    },

    /**
     * deleteMessage operation.
     *
     * @param {Requests.deleteMessageRequest} opts - The starting object container.
     * @return {Promise<Requests.deleteMessageResponse>}
     */
    async deleteMessage(opts) {
      const endPoint = "deleteMessage";
      const requestParams = {
        method: "POST",
        data: JSON.stringify(opts),
      };
      const request = await call(endPoint, requestParams);
      if (!request.success) {
        throw `Request Failed. Request Response: ${request.message}`;
      }
      return request;
    },

    /**
     * checkOut operation.
     *
     * @param {Requests.checkOutRequest} opts - The starting object container.
     * @return {Promise<Requests.checkOutResponse>}
     */
    async checkOut(opts) {
      const endPoint = "checkOut";
      const requestParams = {
        method: "POST",
        data: JSON.stringify(opts),
      };
      const request = await call(endPoint, requestParams);
      if (!request.success) {
        throw `Request Failed. Request Response: ${request.message}`;
      }
      return request;
    },

    /**
     * checkIn operation.
     *
     * @param {Requests.checkInRequest} opts - The starting object container.
     * @return {Promise<Requests.checkInResponse>}
     */
    async checkIn(opts) {
      const endPoint = "checkIn";
      const requestParams = {
        method: "POST",
        data: JSON.stringify(opts),
      };
      const request = await call(endPoint, requestParams);
      if (!request.success) {
        throw `Request Failed. Request Response: ${request.message}`;
      }
      return request;
    },

    /**
     * listSites operation.
     *
     * @param {Requests.listSitesRequest} opts - The starting object container.
     * @return {Promise<Requests.listSitesResponse>}
     */
    async listSites(opts) {
      const endPoint = "listSites";
      const requestParams = {
        method: "POST",
        data: JSON.stringify(opts),
      };
      const request = await call(endPoint, requestParams);
      if (!request.success) {
        throw `Request Failed. Request Response: ${request.message}`;
      }
      return request;
    },

    /**
     * readAudits operation.
     *
     * @param {Requests.readAuditsRequest} opts - The starting object container.
     * @return {Promise<Requests.readAuditsResponse>}
     */
    async readAudits(opts) {
      const endPoint = "readAudits";
      const requestParams = {
        method: "POST",
        data: JSON.stringify(opts),
      };
      const request = await call(endPoint, requestParams);
      if (!request.success) {
        throw `Request Failed. Request Response: ${request.message}`;
      }
      return request;
    },

    /**
     * readWorkflowInformation operation.
     *
     * @param {Requests.readWorkflowInformationRequest} opts - The starting object container.
     * @return {Promise<Requests.readWorkflowInformationResponse>}
     */
    async readWorkflowInformation(opts) {
      const endPoint = "readWorkflowInformation";
      const requestParams = {
        method: "POST",
        data: JSON.stringify(opts),
      };
      const request = await call(endPoint, requestParams);
      if (!request.success) {
        throw `Request Failed. Request Response: ${request.message}`;
      }
      return request;
    },

    /**
     * performWorkflowTransition operation.
     *
     * @param {Requests.performWorkflowTransitionRequest} opts - The starting object container.
     * @return {Promise<Requests.performWorkflowTransitionResponse>}
     */
    async performWorkflowTransition(opts) {
      const endPoint = "performWorkflowTransition";
      const requestParams = {
        method: "POST",
        data: JSON.stringify(opts),
      };
      const request = await call(endPoint, requestParams);
      if (!request.success) {
        throw `Request Failed. Request Response: ${request.message}`;
      }
      return request;
    },

    /**
     * readPreferences operation.
     *
     * @param {Requests.readPreferencesRequest} opts - The starting object container.
     * @return {Promise<Requests.readPreferencesResponse>}
     */
    async readPreferences(opts) {
      const endPoint = "readPreferences";
      const requestParams = {
        method: "POST",
        data: JSON.stringify(opts),
      };
      const request = await call(endPoint, requestParams);
      if (!request.success) {
        throw `Request Failed. Request Response: ${request.message}`;
      }
      return request;
    },

    /**
     * publishUnpublish operation.
     *
     * @param {Requests.publishUnpublishRequest} opts - The starting object container.
     * @return {Promise<Requests.publishUnpublishResponse>}
     */
    async publishUnpublish(opts) {
      const endPoint = "publish";
      const requestParams = {
        method: "POST",
        data: JSON.stringify(opts),
      };
      const request = await call(endPoint, requestParams);
      if (!request.success) {
        throw `Request Failed. Request Response: ${request.message}`;
      }
      return request;
    },
  };
}
