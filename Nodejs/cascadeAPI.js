import * as Requests from "./types";
import axios from "axios";
export default class CascadeAPI {
  constructor(config = { apiKey, url }) {
    this.apiKey = config.apiKey;
    this.url = config.url;
  }

  /**
   * read operation.
   *
   * @param {Requests.readRequest} opts
   * @param {Boolean} [muteHttpExceptions]
   * @return {Requests.readResponse}
   */
  async read(opts) {
    const endPoint = `read`;
    const requestParams = {
      method: "POST",
      data: JSON.stringify(opts),
    };
    const request = await this.call(endPoint, requestParams);
    if (!request.success) {
      throw `Request Failed. Request Response: ${request.message}`;
    }
    return request.asset[identifier.type];
  }

  /**
   * removal operation.
   *
   * @param {Requests.deleteRequest} opts
   * @param {Boolean} [muteHttpExceptions]
   * @return {Requests.deleteResponse}
   */
  async remove(opts) {
    // Delete
    const endPoint = `delete`;
    const requestParams = {
      method: "POST",
      data: JSON.stringify(opts),
    };
    const request = await this.call(endPoint, requestParams);
    if (!request.success) {
      throw `Request Failed. Request Response: ${request.message}`;
    }
    return request;
  }

  /**
   * edit operation.
   *
   * @param {Requests.editRequest} opts
   * @param {Boolean} [muteHttpExceptions]
   * @return {Requests.editResponse}
   */
  async edit(opts) {
    const endPoint = `edit`;
    const requestParams = {
      method: "POST",
      data: JSON.stringify(opts),
    };
    const request = await this.call(endPoint, requestParams);
    if (!request.success) {
      throw `Request Failed. Request Response: ${request.message}`;
    }
    return request;
  }

  /**
   * create operation.
   *
   * @param {Requests.createRequest} opts
   * @param {Boolean} [muteHttpExceptions]
   * @return {Requests.createResponse}
   */
  async create(opts) {
    const endPoint = `create`;
    const requestParams = {
      method: "POST",
      data: JSON.stringify(opts),
    };
    const request = await this.call(endPoint, requestParams);
    if (!request.success) {
      throw `Request Failed. Request Response: ${request.message}`;
    }
    return request;
  }

  /**
   * move operation.
   *
   * @param {Requests.moveRequest} opts
   * @param {Boolean} [muteHttpExceptions]
   * @return {Requests.moveResponse}
   */
  async move(opts) {
    const endPoint = `move`;
    const requestParams = {
      method: "POST",
      data: JSON.stringify(opts),
    };
    const request = await this.call(endPoint, requestParams);
    if (!request.success) {
      throw `Request Failed. Request Response: ${request.message}`;
    }
    return request;
  }

  /**
   * search operation.
   *
   * @param {Requests.searchRequest} opts
   * @param {Boolean} [muteHttpExceptions]
   * @return {Requests.searchResponse}
   */
  async search(opts) {
    const endPoint = "search";
    const requestParams = {
      method: "POST",
      data: JSON.stringify(opts),
    };
    const request = await this.call(endPoint, requestParams);
    if (!request.success) {
      throw `Request Failed. Request Response: ${request.message}`;
    }
    return request.matches;
  }

  /**
   * copy operation.
   *
   * @param {Requests.copyRequest} opts
   * @param {Boolean} [muteHttpExceptions]
   * @return {Requests.copyResponse}
   */
  async copy(opts) {
    const endPoint = "copy";
    const requestParams = {
      method: "POST",
      data: JSON.stringify(opts),
    };
    const request = await this.call(endPoint, requestParams);
    if (!request.success) {
      throw `Request Failed. Request Response: ${request.message}`;
    }
    return request;
  }

  /**
   * siteCopy operation.
   *
   * @param {Requests.siteCopyRequest} opts
   * @param {Boolean} [muteHttpExceptions]
   * @return {Requests.siteCopyResponse}
   */
  async siteCopy(opts) {
    const endPoint = "siteCopy";
    const requestParams = {
      method: "POST",
      data: JSON.stringify(opts),
    };
    const request = await this.call(endPoint, requestParams);
    if (!request.success) {
      throw `Request Failed. Request Response: ${request.message}`;
    }
    return request;
  }

  /**
   * readAccessRights operation.
   *
   * @param {Requests.readAccessRightsRequest} opts
   * @param {Boolean} [muteHttpExceptions]
   * @return {Requests.readAccessRightsResponse}
   */
  async readAccessRights(opts) {
    const endPoint = "readAccessRights";
    const requestParams = {
      method: "POST",
      data: JSON.stringify(opts),
    };
    const request = await this.call(endPoint, requestParams);
    if (!request.success) {
      throw `Request Failed. Request Response: ${request.message}`;
    }
    return request;
  }

  /**
   * editAccessRights operation.
   *
   * @param {Requests.editAccessRightsRequest} opts
   * @param {Boolean} [muteHttpExceptions]
   * @return {Requests.editAccessRightsResponse}
   */
  async editAccessRights(opts) {
    const endPoint = "editAccessRights";
    const requestParams = {
      method: "POST",
      data: JSON.stringify(opts),
    };
    const request = await this.call(endPoint, requestParams);
    if (!request.success) {
      throw `Request Failed. Request Response: ${request.message}`;
    }
    return request;
  }

  /**
   * readWorkflowSettings operation.
   *
   * @param {Requests.readWorkflowSettingsRequest} opts
   * @param {Boolean} [muteHttpExceptions]
   * @return {Requests.readWorkflowSettingsResponse}
   */
  async readWorkflowSettings(opts) {
    const endPoint = "readWorkflowSettings";
    const requestParams = {
      method: "POST",
      data: JSON.stringify(opts),
    };
    const request = await this.call(endPoint, requestParams);
    if (!request.success) {
      throw `Request Failed. Request Response: ${request.message}`;
    }
    return request;
  }

  /**
   * editWorkflowSettings operation.
   *
   * @param {Requests.editWorkflowSettingsRequest} opts
   * @param {Boolean} [muteHttpExceptions]
   * @return {Requests.editWorkflowSettingsResponse}
   */
  async editWorkflowSettings(opts) {
    const endPoint = "editWorkflowSettings";
    const requestParams = {
      method: "POST",
      data: JSON.stringify(opts),
    };
    const request = await this.call(endPoint, requestParams);
    if (!request.success) {
      throw `Request Failed. Request Response: ${request.message}`;
    }
    return request;
  }

  /**
   * listSubscribers operation.
   *
   * @param {Requests.listSubscribersRequest} opts
   * @param {Boolean} [muteHttpExceptions]
   * @return {Requests.listSubscribersResponse}
   */
  async listSubscribers(opts) {
    const endPoint = "listSubscribers";
    const requestParams = {
      method: "POST",
      data: JSON.stringify(opts),
    };
    const request = await this.call(endPoint, requestParams);
    if (!request.success) {
      throw `Request Failed. Request Response: ${request.message}`;
    }
    return request;
  }

  /**
   * listMessages operation.
   *
   * @param {Requests.listMessagesRequest} opts
   * @param {Boolean} [muteHttpExceptions]
   * @return {Requests.listMessagesResponse}
   */
  async listMessages(opts) {
    const endPoint = "listMessages";
    const requestParams = {
      method: "POST",
      data: JSON.stringify(opts),
    };
    const request = await this.call(endPoint, requestParams);
    if (!request.success) {
      throw `Request Failed. Request Response: ${request.message}`;
    }
    return request;
  }

  /**
   * markMessage operation.
   *
   * @param {Requests.markMessageRequest} opts
   * @param {Boolean} [muteHttpExceptions]
   * @return {Requests.markMessageResponse}
   */
  async markMessage(opts) {
    const endPoint = "markMessage";
    const requestParams = {
      method: "POST",
      data: JSON.stringify(opts),
    };
    const request = await this.call(endPoint, requestParams);
    if (!request.success) {
      throw `Request Failed. Request Response: ${request.message}`;
    }
    return request;
  }

  /**
   * deleteMessage operation.
   *
   * @param {Requests.deleteMessageRequest} opts
   * @param {Boolean} [muteHttpExceptions]
   * @return {Requests.deleteMessageResponse}
   */
  async deleteMessage(opts) {
    const endPoint = "deleteMessage";
    const requestParams = {
      method: "POST",
      data: JSON.stringify(opts),
    };
    const request = await this.call(endPoint, requestParams);
    if (!request.success) {
      throw `Request Failed. Request Response: ${request.message}`;
    }
    return request;
  }

  /**
   * checkOut operation.
   *
   * @param {Requests.checkOutRequest} opts
   * @param {Boolean} [muteHttpExceptions]
   * @return {Requests.checkOutResponse}
   */
  async checkOut(opts) {
    const endPoint = "checkOut";
    const requestParams = {
      method: "POST",
      data: JSON.stringify(opts),
    };
    const request = await this.call(endPoint, requestParams);
    if (!request.success) {
      throw `Request Failed. Request Response: ${request.message}`;
    }
    return request;
  }

  /**
   * checkIn operation.
   *
   * @param {Requests.checkInRequest} opts
   * @param {Boolean} [muteHttpExceptions]
   * @return {Requests.checkInResponse}
   */
  async checkIn(opts) {
    const endPoint = "checkIn";
    const requestParams = {
      method: "POST",
      data: JSON.stringify(opts),
    };
    const request = await this.call(endPoint, requestParams);
    if (!request.success) {
      throw `Request Failed. Request Response: ${request.message}`;
    }
    return request;
  }

  /**
   * listSites operation.
   *
   * @param {Requests.listSitesRequest} opts
   * @param {Boolean} [muteHttpExceptions]
   * @return {Requests.listSitesResponse}
   */
  async listSites(opts) {
    const endPoint = "listSites";
    const requestParams = {
      method: "POST",
      data: JSON.stringify(opts),
    };
    const request = await this.call(endPoint, requestParams);
    if (!request.success) {
      throw `Request Failed. Request Response: ${request.message}`;
    }
    return request;
  }

  /**
   * readAudits operation.
   *
   * @param {Requests.readAuditsRequest} opts
   * @param {Boolean} [muteHttpExceptions]
   * @return {Requests.readAuditsResponse}
   */
  async readAudits(opts) {
    const endPoint = "readAudits";
    const requestParams = {
      method: "POST",
      data: JSON.stringify(opts),
    };
    const request = await this.call(endPoint, requestParams);
    if (!request.success) {
      throw `Request Failed. Request Response: ${request.message}`;
    }
    return request;
  }

  /**
   * readWorkflowInformation operation.
   *
   * @param {Requests.readWorkflowInformationRequest} opts
   * @param {Boolean} [muteHttpExceptions]
   * @return {Requests.readWorkflowInformationResponse}
   */
  async readWorkflowInformation(opts) {
    const endPoint = "readWorkflowInformation";
    const requestParams = {
      method: "POST",
      data: JSON.stringify(opts),
    };
    const request = await this.call(endPoint, requestParams);
    if (!request.success) {
      throw `Request Failed. Request Response: ${request.message}`;
    }
    return request;
  }

  /**
   * performWorkflowTransition operation.
   *
   * @param {Requests.performWorkflowTransitionRequest} opts
   * @param {Boolean} [muteHttpExceptions]
   * @return {Requests.performWorkflowTransitionResponse}
   */
  async performWorkflowTransition(opts) {
    const endPoint = "performWorkflowTransition";
    const requestParams = {
      method: "POST",
      data: JSON.stringify(opts),
    };
    const request = await this.call(endPoint, requestParams);
    if (!request.success) {
      throw `Request Failed. Request Response: ${request.message}`;
    }
    return request;
  }

  /**
   * readPreferences operation.
   *
   * @param {Requests.readPreferencesRequest} opts
   * @param {Boolean} [muteHttpExceptions]
   * @return {Requests.readPreferencesResponse}
   */
  async readPreferences(opts) {
    const endPoint = "readPreferences";
    const requestParams = {
      method: "POST",
      data: JSON.stringify(opts),
    };
    const request = await this.call(endPoint, requestParams);
    if (!request.success) {
      throw `Request Failed. Request Response: ${request.message}`;
    }
    return request;
  }

  async call(endPoint, requestParams) {
    try {
      const headers = {
        Authorization: `Bearer ${this.apiKey}`,
      };
      requestParams.headers = headers;
      requestParams.url = this.url + endPoint;
      const request = await axios(requestParams);
      return request.data;
    } catch (error) {
      console.error(error);
    }
  }
}
