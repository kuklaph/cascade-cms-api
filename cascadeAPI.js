import * as Requests from "./types";
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
  async read(
    opts,
    // Apps Script Specific
    muteHttpExceptions = false
  ) {
    const endPoint = `read`;
    const requestParams = {
      method: "POST",
      muteHttpExceptions,
      payload: JSON.stringify(opts),
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
  async remove( // Delete
    opts,
    // Apps Script Specific
    muteHttpExceptions = false
  ) {
    const endPoint = `delete`;
    const requestParams = {
      method: "POST",
      muteHttpExceptions,
      payload: JSON.stringify(opts),
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
  async edit(
    opts,
    // Apps Script Specific
    muteHttpExceptions = false
  ) {
    const endPoint = `edit`;
    const requestParams = {
      method: "POST",
      muteHttpExceptions,
      payload: JSON.stringify(opts),
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
  async create(
    opts,
    // Apps Script Specific
    muteHttpExceptions = false
  ) {
    const endPoint = `create`;
    const requestParams = {
      method: "POST",
      muteHttpExceptions,
      payload: JSON.stringify(opts),
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
  async move(
    opts,
    // Apps Script Specific
    muteHttpExceptions = false
  ) {
    const endPoint = `move`;
    const requestParams = {
      method: "POST",
      muteHttpExceptions,
      payload: JSON.stringify(opts),
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
  async search(
    opts,
    // Apps Script Specific
    muteHttpExceptions = false
  ) {
    const endPoint = "search";
    const requestParams = {
      method: "POST",
      muteHttpExceptions,
      payload: JSON.stringify(opts),
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
  async copy(
    opts,
    // Apps Script Specific
    muteHttpExceptions = false
  ) {
    const endPoint = "copy";
    const requestParams = {
      method: "POST",
      muteHttpExceptions,
      payload: JSON.stringify(opts),
    };
    const request = await this.call(endPoint, requestParams);
    if (!request.success) {
      throw `Request Failed. Request Response: ${request.message}`;
    }
    return request.matches;
  }

  /**
   * siteCopy operation.
   *
   * @param {Requests.siteCopyRequest} opts
   * @param {Boolean} [muteHttpExceptions]
   * @return {Requests.siteCopyResponse}
   */
  async siteCopy(
    opts,
    // Apps Script Specific
    muteHttpExceptions = false
  ) {
    const endPoint = "siteCopy";
    const requestParams = {
      method: "POST",
      muteHttpExceptions,
      payload: JSON.stringify(opts),
    };
    const request = await this.call(endPoint, requestParams);
    if (!request.success) {
      throw `Request Failed. Request Response: ${request.message}`;
    }
    return request.matches;
  }

  /**
   * readAccessRights operation.
   *
   * @param {Requests.readAccessRightsRequest} opts
   * @param {Boolean} [muteHttpExceptions]
   * @return {Requests.readAccessRightsResponse}
   */
  async readAccessRights(
    opts,
    // Apps Script Specific
    muteHttpExceptions = false
  ) {
    const endPoint = "readAccessRights";
    const requestParams = {
      method: "POST",
      muteHttpExceptions,
      payload: JSON.stringify(opts),
    };
    const request = await this.call(endPoint, requestParams);
    if (!request.success) {
      throw `Request Failed. Request Response: ${request.message}`;
    }
    return request.matches;
  }

  /**
   * editAccessRights operation.
   *
   * @param {Requests.editAccessRightsRequest} opts
   * @param {Boolean} [muteHttpExceptions]
   * @return {Requests.editAccessRightsResponse}
   */
  async editAccessRights(
    opts,
    // Apps Script Specific
    muteHttpExceptions = false
  ) {
    const endPoint = "editAccessRights";
    const requestParams = {
      method: "POST",
      muteHttpExceptions,
      payload: JSON.stringify(opts),
    };
    const request = await this.call(endPoint, requestParams);
    if (!request.success) {
      throw `Request Failed. Request Response: ${request.message}`;
    }
    return request.matches;
  }

  /**
   * readWorkflowSettings operation.
   *
   * @param {Requests.readWorkflowSettingsRequest} opts
   * @param {Boolean} [muteHttpExceptions]
   * @return {Requests.readWorkflowSettingsResponse}
   */
  async readWorkflowSettings(
    opts,
    // Apps Script Specific
    muteHttpExceptions = false
  ) {
    const endPoint = "readWorkflowSettings";
    const requestParams = {
      method: "POST",
      muteHttpExceptions,
      payload: JSON.stringify(opts),
    };
    const request = await this.call(endPoint, requestParams);
    if (!request.success) {
      throw `Request Failed. Request Response: ${request.message}`;
    }
    return request.matches;
  }

  /**
   * editWorkflowSettings operation.
   *
   * @param {Requests.editWorkflowSettingsRequest} opts
   * @param {Boolean} [muteHttpExceptions]
   * @return {Requests.editWorkflowSettingsResponse}
   */
  async editWorkflowSettings(
    opts,
    // Apps Script Specific
    muteHttpExceptions = false
  ) {
    const endPoint = "editWorkflowSettings";
    const requestParams = {
      method: "POST",
      muteHttpExceptions,
      payload: JSON.stringify(opts),
    };
    const request = await this.call(endPoint, requestParams);
    if (!request.success) {
      throw `Request Failed. Request Response: ${request.message}`;
    }
    return request.matches;
  }

  /**
   * listSubscribers operation.
   *
   * @param {Requests.listSubscribersRequest} opts
   * @param {Boolean} [muteHttpExceptions]
   * @return {Requests.listSubscribersResponse}
   */
  async listSubscribers(
    opts,
    // Apps Script Specific
    muteHttpExceptions = false
  ) {
    const endPoint = "listSubscribers";
    const requestParams = {
      method: "POST",
      muteHttpExceptions,
      payload: JSON.stringify(opts),
    };
    const request = await this.call(endPoint, requestParams);
    if (!request.success) {
      throw `Request Failed. Request Response: ${request.message}`;
    }
    return request.matches;
  }

  /**
   * listMessages operation.
   *
   * @param {Requests.listMessagesRequest} opts
   * @param {Boolean} [muteHttpExceptions]
   * @return {Requests.listMessagesResponse}
   */
  async listMessages(
    opts,
    // Apps Script Specific
    muteHttpExceptions = false
  ) {
    const endPoint = "listMessages";
    const requestParams = {
      method: "POST",
      muteHttpExceptions,
      payload: JSON.stringify(opts),
    };
    const request = await this.call(endPoint, requestParams);
    if (!request.success) {
      throw `Request Failed. Request Response: ${request.message}`;
    }
    return request.matches;
  }

  /**
   * markMessage operation.
   *
   * @param {Requests.markMessageRequest} opts
   * @param {Boolean} [muteHttpExceptions]
   * @return {Requests.markMessageResponse}
   */
  async markMessage(
    opts,
    // Apps Script Specific
    muteHttpExceptions = false
  ) {
    const endPoint = "markMessage";
    const requestParams = {
      method: "POST",
      muteHttpExceptions,
      payload: JSON.stringify(opts),
    };
    const request = await this.call(endPoint, requestParams);
    if (!request.success) {
      throw `Request Failed. Request Response: ${request.message}`;
    }
    return request.matches;
  }

  /**
   * deleteMessage operation.
   *
   * @param {Requests.deleteMessageRequest} opts
   * @param {Boolean} [muteHttpExceptions]
   * @return {Requests.deleteMessageResponse}
   */
  async deleteMessage(
    opts,
    // Apps Script Specific
    muteHttpExceptions = false
  ) {
    const endPoint = "deleteMessage";
    const requestParams = {
      method: "POST",
      muteHttpExceptions,
      payload: JSON.stringify(opts),
    };
    const request = await this.call(endPoint, requestParams);
    if (!request.success) {
      throw `Request Failed. Request Response: ${request.message}`;
    }
    return request.matches;
  }

  /**
   * checkOut operation.
   *
   * @param {Requests.checkOutRequest} opts
   * @param {Boolean} [muteHttpExceptions]
   * @return {Requests.checkOutResponse}
   */
  async checkOut(
    opts,
    // Apps Script Specific
    muteHttpExceptions = false
  ) {
    const endPoint = "checkOut";
    const requestParams = {
      method: "POST",
      muteHttpExceptions,
      payload: JSON.stringify(opts),
    };
    const request = await this.call(endPoint, requestParams);
    if (!request.success) {
      throw `Request Failed. Request Response: ${request.message}`;
    }
    return request.matches;
  }

  /**
   * checkIn operation.
   *
   * @param {Requests.checkInRequest} opts
   * @param {Boolean} [muteHttpExceptions]
   * @return {Requests.checkInResponse}
   */
  async checkIn(
    opts,
    // Apps Script Specific
    muteHttpExceptions = false
  ) {
    const endPoint = "checkIn";
    const requestParams = {
      method: "POST",
      muteHttpExceptions,
      payload: JSON.stringify(opts),
    };
    const request = await this.call(endPoint, requestParams);
    if (!request.success) {
      throw `Request Failed. Request Response: ${request.message}`;
    }
    return request.matches;
  }

  /**
   * listSites operation.
   *
   * @param {Requests.listSitesRequest} opts
   * @param {Boolean} [muteHttpExceptions]
   * @return {Requests.listSitesResponse}
   */
  async listSites(
    opts,
    // Apps Script Specific
    muteHttpExceptions = false
  ) {
    const endPoint = "listSites";
    const requestParams = {
      method: "POST",
      muteHttpExceptions,
      payload: JSON.stringify(opts),
    };
    const request = await this.call(endPoint, requestParams);
    if (!request.success) {
      throw `Request Failed. Request Response: ${request.message}`;
    }
    return request.matches;
  }

  /**
   * readAudits operation.
   *
   * @param {Requests.readAuditsRequest} opts
   * @param {Boolean} [muteHttpExceptions]
   * @return {Requests.readAuditsResponse}
   */
  async readAudits(
    opts,
    // Apps Script Specific
    muteHttpExceptions = false
  ) {
    const endPoint = "readAudits";
    const requestParams = {
      method: "POST",
      muteHttpExceptions,
      payload: JSON.stringify(opts),
    };
    const request = await this.call(endPoint, requestParams);
    if (!request.success) {
      throw `Request Failed. Request Response: ${request.message}`;
    }
    return request.matches;
  }

  /**
   * readWorkflowInformation operation.
   *
   * @param {Requests.readWorkflowInformationRequest} opts
   * @param {Boolean} [muteHttpExceptions]
   * @return {Requests.readWorkflowInformationResponse}
   */
  async readWorkflowInformation(
    opts,
    // Apps Script Specific
    muteHttpExceptions = false
  ) {
    const endPoint = "readWorkflowInformation";
    const requestParams = {
      method: "POST",
      muteHttpExceptions,
      payload: JSON.stringify(opts),
    };
    const request = await this.call(endPoint, requestParams);
    if (!request.success) {
      throw `Request Failed. Request Response: ${request.message}`;
    }
    return request.matches;
  }

  /**
   * performWorkflowTransition operation.
   *
   * @param {Requests.performWorkflowTransitionRequest} opts
   * @param {Boolean} [muteHttpExceptions]
   * @return {Requests.performWorkflowTransitionResponse}
   */
  async performWorkflowTransition(
    opts,
    // Apps Script Specific
    muteHttpExceptions = false
  ) {
    const endPoint = "performWorkflowTransition";
    const requestParams = {
      method: "POST",
      muteHttpExceptions,
      payload: JSON.stringify(opts),
    };
    const request = await this.call(endPoint, requestParams);
    if (!request.success) {
      throw `Request Failed. Request Response: ${request.message}`;
    }
    return request.matches;
  }

  /**
   * readPreferences operation.
   *
   * @param {Requests.readPreferencesRequest} opts
   * @param {Boolean} [muteHttpExceptions]
   * @return {Requests.readPreferencesResponse}
   */
  async readPreferences(
    opts,
    // Apps Script Specific
    muteHttpExceptions = false
  ) {
    const endPoint = "readPreferences";
    const requestParams = {
      method: "POST",
      muteHttpExceptions,
      payload: JSON.stringify(opts),
    };
    const request = await this.call(endPoint, requestParams);
    if (!request.success) {
      throw `Request Failed. Request Response: ${request.message}`;
    }
    return request.matches;
  }

  //   For Apps Script

  async call(endPoint, requestParams) {
    const headers = {
      Authorization: `Bearer ${this.apiKey}`,
    };
    requestParams.headers = headers;
    log("info", { request: true }, requestParams);
    const request = await UrlFetchApp.fetch(this.url + endPoint, requestParams);
    const parsed = JSON.parse(request);
    log("info", { request: true }, parsed);
    return parsed;
  }

  // For NodeJS

  // async call(endPoint, requestParams) {
  //   const headers = {
  //     Authorization: `Bearer ${this.apiKey}`,
  //   };
  //   requestParams.headers = headers;
  //   log("info", { request: true }, requestParams);
  //   const request = await .fetch(this.url + endPoint, requestParams);
  //   const parsed = JSON.parse(request);
  //   log("info", { request: true }, parsed);
  //   return parsed;
  // }
}
