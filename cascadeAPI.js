export default class CascadeAPI {
  constructor(config = { apiKey, url }) {
    this.apiKey = config.apiKey;
    this.url = config.url;
  }

  /**
   * @typedef identifierObject - An object that contains: type, id?, path?, recycled?.
   * @property {"assetfactory" | "assetfactorycontainer" | "block" | "block_FEED" | "block_INDEX" | "block_TEXT" | "block_XHTML_DATADEFINITION" | "block_XML" | "block_TWITTER_FEED" | "connectorcontainer" | "twitterconnector" | "facebookconnector" | "wordpressconnector" | "googleanalyticsconnector" | "contenttype" | "contenttypecontainer" | "destination" | "editorconfiguration" | "file" | "folder" | "group" | "message" | "metadataset" | "metadatasetcontainer" | "page" | "pageconfigurationset" | "pageconfiguration" | "pageregion" | "pageconfigurationsetcontainer" | "publishset" | "publishsetcontainer" | "reference" | "role" | "datadefinition" | "datadefinitioncontainer" | "sharedfield" | "sharedfieldcontainer" | "format" | "format_XSLT" | "format_SCRIPT" | "site" | "sitedestinationcontainer" | "symlink" | "target" | "template" | "transport" | "transport_fs" | "transport_ftp" | "transport_db" | "transport_cloud" | "transportcontainer" | "user" | "workflow" | "workflowdefinition" | "workflowdefinitioncontainer" | "workflowemail" | "workflowemailcontainer"} type - REQUIRED: The type of asset to read.
   * - Example: `{type: "page"}`
   * @property {string} [id] - OPTIONAL: The ID of the asset.
   * - Example: `{type: "page", id: "1234"}`
   * @property {Object} [path] - OPTIONAL: Path object.
   * - Example: `{type: "page", id: "1234", path: {}}`
   * @property {string} [path.siteId] - OPTIONAL: The siteId of the parent site.
   * - Example: `{type: "page", id: "1234", path: {siteId: "1234"}}`
   * @property {string} [path.path] - OPTIONAL: The path to the asset.
   * - Example: `{type: "page", id: "1234", path: {siteId: "1234", path: "/some/path"}}`
   * @property {boolean} [recycled] - OPTIONAL: For reading purposes only. Ignored when editing, copying etc.
   * - Example: `{type: "page", id: "1234", path: {siteId: "1234", path: "/some/path"}, recycled: false}`
   */

  /**
   * Make a read operation on an asset.
   *
   * @param {identifierObject} identifier - An object that contains: type, id?, path?, recycled?.
   * @example
   * {
   *  type: "page",
   *  id: "1234",
   *  path: {
   *   siteId: "1234",
   *   path: "/some/path"
   *   },
   *  recycled: false
   * }
   * @return {Object} - The result of the operation
   * @example
   * {
   *  success: string,
   *  message?: string | undefined,
   *  asset: object,
   * }
   */
  async read(
    identifier,
    // Apps Script Specific
    muteHttpExceptions = false
  ) {
    const endPoint = `read`;
    const requestParams = {
      method: "POST",
      muteHttpExceptions,
      payload: JSON.stringify({ identifier }),
    };
    const request = await this.call(endPoint, requestParams);
    if (!request.success) {
      throw `Request Failed. Request Response: ${request.message}`;
    }
    return request.asset[identifier.type];
  }

  /**
   * Perform a removal operation on an asset.
   *
   * @param {identifierObject} identifier - An object that contains: type, id?, path?, recycled?.
   * @example
   * {
   *  type: "page",
   *  id: "1234",
   *  path: {
   *   siteId: "1234",
   *   path: "/some/path"
   *   },
   *  recycled: false
   * }
   * @param {Object} [deleteParameters]
   * @param {boolean} [deleteParameters.doWorkFlow]
   * @param {Object} [workflowConfiguration] - For configuring workflow
   * @param {string} workflowConfiguration.workflowName - When the workflow is instantiated this will be its name.
   * @param {string} [workflowConfiguration.workflowDefinitionId] - Which workflow definition to use? Priority: workflowDefinitionId > workflowDefinitionPath - ONE IS REQUIRED
   * @param {string} [workflowConfiguration.workflowDefinitionPath] - Which workflow definition to use? Priority: workflowDefinitionId > workflowDefinitionPath - ONE IS REQUIRED
   * @param {string} workflowConfiguration.workflowComments - The comments for this operation which will be recorded with the workflow.
   * @param {Object} [workflowConfiguration.workflowStepConfigurations] - The optional step configurations for each assignable step in the workflow.
   * NOT REQUIRED default: the defaults as defined in the workflow definition
   * @param {Object[]} [workflowConfiguration.workflowStepConfigurations.workflowStepConfiguration] - An array of workflow step configuration objects.
   * @param {string} workflowConfiguration.workflowStepConfigurations.workflowStepConfiguration[].stepIdentifier - The step's unique text identifier/name.
   * @param {string} workflowConfiguration.workflowStepConfigurations.workflowStepConfiguration[].stepAssignment - The step's assignment (user or group name).
   * @param {date} [workflowConfiguration.endDate] - Optional due date for the workflow.  If not specified, will default to 7 days from today.
   */
  async remove( // Delete
    identifier,
    deleteParameters,
    workflowConfiguration,
    // Apps Script Specific
    muteHttpExceptions = false
  ) {
    console.log(deleteParameters);
    return;
    const endPoint = `delete`;
    const requestParams = {
      method: "POST",
      muteHttpExceptions,
      payload: JSON.stringify({
        identifier,
        deleteParameters,
        workflowConfiguration,
      }),
    };
    console.log(requestParams);
    // const request = await this.call(endPoint, requestParams);
    // if (!request.success) {
    //   throw `Request Failed. Request Response: ${request.message}`;
    // }
    // return request;
  }

  /**
   *
   * @param {*} asset
   * @param {*} muteHttpExceptions
   * @returns
   */
  async edit(
    asset = {
      feedBlock: {},
      indexBlock: {},
      textBlock: {},
      xhtmlDataDefinitionBlock: {},
      xmlBlock: {},
      file: {},
      folder: {},
      page: { id, contentTypeId, xhtml, metadata: {} },
      reference: {},
      xsltFormat: {},
      scriptFormat: {},
      symlink: {},
      template: {},
    },
    // Apps Script Specific
    muteHttpExceptions = false
  ) {
    const endPoint = `read`;
    const requestParams = {
      method: "POST",
      muteHttpExceptions,
      payload: JSON.stringify({ identifier }),
    };
    const request = await this.call(endPoint, requestParams);
    if (!request.success) {
      throw `Request Failed. Request Response: ${request.message}`;
    }
    return request.asset[identifier.type];
  }

  async create() {}

  async move() {}

  /**
   * Search Cascade using a searchInformation object. Pass in an object with the specific keys.
   * @param {Object} searchInformation - Search parameters provided as a single object.
   * @param {string} searchInformation.searchTerms - The search term to be searched.
   * @param {string} [searchInformation.siteId] - Not required, if left blank all sites will be searched.
   * @param {string} [searchInformation.siteName] - Not required, if left blank all sites will be searched.
   * @param {string[]} [searchInformation.searchFields] - Array of asset fields to search:
   * ```
   * [
   * "name",
   * "path",
   * "createdBy",
   * "modifiedBy",
   * "displayName",
   * "title",
   * "summary",
   * "teaser",
   * "keywords",
   * "description",
   * "author",
   * "blob",
   * "velocityFormatContent",
   * "xml",
   * "link"
   * ]
   * ```
   * @param {string[]} [searchInformation.searchTypes] - Array of asset types to search:
   * ```
   * [
   * "page",
   * "folder",
   * "site"
   * ]
   * ```
   * @param {boolean} muteHttpExceptions - Whether or not to mute exceptions raised by UrlFetchApp
   * @return {array} matches - An array of matches found by Cascade.
   * @method
   */
  async search(
    searchInformation = {
      searchTerms,
      siteId,
      siteName,
      searchFields,
      searchTypes,
    },
    // Apps Script Specific
    muteHttpExceptions = false
  ) {
    const endPoint = "search?";
    const requestParams = {
      method: "POST",
      muteHttpExceptions,
      payload: JSON.stringify({ searchInformation }),
    };
    const request = await this.call(endPoint, requestParams);
    if (!request.success) {
      throw `Request Failed. Request Response: ${request.message}`;
    }
    return request.matches;
  }

  async copy() {}

  async siteCopy() {}

  async readAccessRights() {}

  async editAccessRights() {}

  async readWorkflowSettings() {}

  async editWorkflowSettings() {}

  async listSubscribers() {}

  async listMessages() {}

  async markMessage() {}

  async deleteMessage() {}

  async checkOut() {}

  async checkIn() {}

  async listSites() {}

  async readAudits() {}

  async readWorkflowInformation() {}

  async performWorkflowTransition() {}

  async readPreferences() {}

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
