/**
 * Creates a configured instance of the Cascade API with methods to perform API requests.
 * @param {Object} config
 * @param {string} config.apiKey - Your generated API key from Cascade
 * @param {string} config.url - Your domain specific Cascade API URL
 * @param {number} [timeout=30000] - Optional. Default is 30000 eg 30 seconds. Make sure to use milliseconds
 */
export function CascadeAPI(
  {
    apiKey,
    url,
  }: {
    apiKey: string;
    url: string;
  },
  timeout?: number
): {
  /**
   * read operation.
   *
   * @param {Requests.ReadRequest} opts - The starting object container.
   * @param {boolean} retryOnTimeout - Should the request retry on timeout
   * @return {Promise<Requests.ReadResponse>}
   */
  read(
    opts: Requests.ReadRequest,
    retryOnTimeout?: boolean
  ): Promise<Requests.ReadResponse>;
  /**
   * removal operation.
   *
   * @param {Requests.RemoveRequest} opts - The starting object container.
   * @param {boolean} retryOnTimeout - Should the request retry on timeout
   * @return {Promise<Requests.RemoveResponse>}
   */
  remove(
    opts: Requests.RemoveRequest,
    retryOnTimeout?: boolean
  ): Promise<Requests.RemoveResponse>;
  /**
   * edit operation.
   *
   * @param {Requests.EditRequest} opts - The starting object container.
   * @param {boolean} retryOnTimeout - Should the request retry on timeout
   * @return {Promise<Requests.EditResponse>}
   */
  edit(
    opts: Requests.EditRequest,
    retryOnTimeout?: boolean
  ): Promise<Requests.EditResponse>;
  /**
   * create operation.
   *
   * @param {Requests.CreateRequest} opts - The starting object container.
   * @param {boolean} retryOnTimeout - Should the request retry on timeout
   * @return {Promise<Requests.CreateResponse>}
   */
  create(
    opts: Requests.CreateRequest,
    retryOnTimeout?: boolean
  ): Promise<Requests.CreateResponse>;
  /**
   * move operation.
   *
   * @param {Requests.MoveRequest} opts - The starting object container.
   * @param {boolean} retryOnTimeout - Should the request retry on timeout
   * @return {Promise<Requests.MoveResponse>}
   */
  move(
    opts: Requests.MoveRequest,
    retryOnTimeout?: boolean
  ): Promise<Requests.MoveResponse>;
  /**
   * search operation.
   *
   * @param {Requests.SearchRequest} opts - The starting object container.
   * @param {boolean} retryOnTimeout - Should the request retry on timeout
   * @return {Promise<Requests.SearchResponse>}
   */
  search(
    opts: Requests.SearchRequest,
    retryOnTimeout?: boolean
  ): Promise<Requests.SearchResponse>;
  /**
   * copy operation.
   *
   * @param {Requests.CopyRequest} opts - The starting object container.
   * @param {boolean} retryOnTimeout - Should the request retry on timeout
   * @return {Promise<Requests.CopyResponse>}
   */
  copy(
    opts: Requests.CopyRequest,
    retryOnTimeout?: boolean
  ): Promise<Requests.CopyResponse>;
  /**
   * siteCopy operation.
   *
   * @param {Requests.SiteCopyRequest} opts - The starting object container.
   * @param {boolean} retryOnTimeout - Should the request retry on timeout
   * @return {Promise<Requests.SiteCopyResponse>}
   */
  siteCopy(
    opts: Requests.SiteCopyRequest,
    retryOnTimeout?: boolean
  ): Promise<Requests.SiteCopyResponse>;
  /**
   * readAccessRights operation.
   *
   * @param {Requests.ReadAccessRightsRequest} opts - The starting object container.
   * @param {boolean} retryOnTimeout - Should the request retry on timeout
   * @return {Promise<Requests.ReadAccessRightsResponse>}
   */
  readAccessRights(
    opts: Requests.ReadAccessRightsRequest,
    retryOnTimeout?: boolean
  ): Promise<Requests.ReadAccessRightsResponse>;
  /**
   * editAccessRights operation.
   *
   * @param {Requests.EditAccessRightsRequest} opts - The starting object container.
   * @param {boolean} retryOnTimeout - Should the request retry on timeout
   * @return {Promise<Requests.EditAccessRightsResponse>}
   */
  editAccessRights(
    opts: Requests.EditAccessRightsRequest,
    retryOnTimeout?: boolean
  ): Promise<Requests.EditAccessRightsResponse>;
  /**
   * readWorkflowSettings operation.
   *
   * @param {Requests.ReadWorkflowSettingsRequest} opts - The starting object container.
   * @param {boolean} retryOnTimeout - Should the request retry on timeout
   * @return {Promise<Requests.ReadWorkflowSettingsResponse>}
   */
  readWorkflowSettings(
    opts: Requests.ReadWorkflowSettingsRequest,
    retryOnTimeout?: boolean
  ): Promise<Requests.ReadWorkflowSettingsResponse>;
  /**
   * editWorkflowSettings operation.
   *
   * @param {Requests.EditWorkflowSettingsRequest} opts - The starting object container.
   * @param {boolean} retryOnTimeout - Should the request retry on timeout
   * @return {Promise<Requests.EditWorkflowSettingsResponse>}
   */
  editWorkflowSettings(
    opts: Requests.EditWorkflowSettingsRequest,
    retryOnTimeout?: boolean
  ): Promise<Requests.EditWorkflowSettingsResponse>;
  /**
   * listSubscribers operation.
   *
   * @param {Requests.ListSubscribersRequest} opts - The starting object container.
   * @param {boolean} retryOnTimeout - Should the request retry on timeout
   * @return {Promise<Requests.ListSubscribersResponse>}
   */
  listSubscribers(
    opts: Requests.ListSubscribersRequest,
    retryOnTimeout?: boolean
  ): Promise<Requests.ListSubscribersResponse>;
  /**
   * listMessages operation.
   *
   * @param {Requests.ListMessagesRequest} opts - The starting object container.
   * @param {boolean} retryOnTimeout - Should the request retry on timeout
   * @return {Promise<Requests.ListMessagesResponse>}
   */
  listMessages(
    opts: Requests.ListMessagesRequest,
    retryOnTimeout?: boolean
  ): Promise<Requests.ListMessagesResponse>;
  /**
   * markMessage operation.
   *
   * @param {Requests.MarkMessageRequest} opts - The starting object container.
   * @param {boolean} retryOnTimeout - Should the request retry on timeout
   * @return {Promise<Requests.MarkMessageResponse>}
   */
  markMessage(
    opts: Requests.MarkMessageRequest,
    retryOnTimeout?: boolean
  ): Promise<Requests.MarkMessageResponse>;
  /**
   * deleteMessage operation.
   *
   * @param {Requests.DeleteMessageRequest} opts - The starting object container.
   * @param {boolean} retryOnTimeout - Should the request retry on timeout
   * @return {Promise<Requests.DeleteMessageResponse>}
   */
  deleteMessage(
    opts: Requests.DeleteMessageRequest,
    retryOnTimeout?: boolean
  ): Promise<Requests.DeleteMessageResponse>;
  /**
   * checkOut operation.
   *
   * @param {Requests.CheckOutRequest} opts - The starting object container.
   * @param {boolean} retryOnTimeout - Should the request retry on timeout
   * @return {Promise<Requests.CheckOutResponse>}
   */
  checkOut(
    opts: Requests.CheckOutRequest,
    retryOnTimeout?: boolean
  ): Promise<Requests.CheckOutResponse>;
  /**
   * checkIn operation.
   *
   * @param {Requests.CheckInRequest} opts - The starting object container.
   * @param {boolean} retryOnTimeout - Should the request retry on timeout
   * @return {Promise<Requests.CheckInResponse>}
   */
  checkIn(
    opts: Requests.CheckInRequest,
    retryOnTimeout?: boolean
  ): Promise<Requests.CheckInResponse>;
  /**
   * listSites operation.
   *
   * @param {Requests.ListSitesRequest} opts - The starting object container.
   * @param {boolean} retryOnTimeout - Should the request retry on timeout
   * @return {Promise<Requests.ListSitesResponse>}
   */
  listSites(
    opts: Requests.ListSitesRequest,
    retryOnTimeout?: boolean
  ): Promise<Requests.ListSitesResponse>;
  /**
   * readAudits operation.
   *
   * @param {Requests.ReadAuditsRequest} opts - The starting object container.
   * @param {boolean} retryOnTimeout - Should the request retry on timeout
   * @return {Promise<Requests.ReadAuditsResponse>}
   */
  readAudits(
    opts: Requests.ReadAuditsRequest,
    retryOnTimeout?: boolean
  ): Promise<Requests.ReadAuditsResponse>;
  /**
   * readWorkflowInformation operation.
   *
   * @param {Requests.ReadWorkflowInformationRequest} opts - The starting object container.
   * @param {boolean} retryOnTimeout - Should the request retry on timeout
   * @return {Promise<Requests.ReadWorkflowInformationResponse>}
   */
  readWorkflowInformation(
    opts: Requests.ReadWorkflowInformationRequest,
    retryOnTimeout?: boolean
  ): Promise<Requests.ReadWorkflowInformationResponse>;
  /**
   * performWorkflowTransition operation.
   *
   * @param {Requests.PerformWorkflowTransitionRequest} opts - The starting object container.
   * @param {boolean} retryOnTimeout - Should the request retry on timeout
   * @return {Promise<Requests.PerformWorkflowTransitionResponse>}
   */
  performWorkflowTransition(
    opts: Requests.PerformWorkflowTransitionRequest,
    retryOnTimeout?: boolean
  ): Promise<Requests.PerformWorkflowTransitionResponse>;
  /**
   * readPreferences operation.
   *
   * @param {Requests.ReadPreferencesRequest} opts - The starting object container.
   * @param {boolean} retryOnTimeout - Should the request retry on timeout
   * @return {Promise<Requests.ReadPreferencesResponse>}
   */
  readPreferences(
    opts: Requests.ReadPreferencesRequest,
    retryOnTimeout?: boolean
  ): Promise<Requests.ReadPreferencesResponse>;
  /**
   * publishUnpublish operation.
   *
   * @param {Requests.PublishUnpublishRequest} opts - The starting object container.
   * @param {boolean} retryOnTimeout - Should the request retry on timeout
   * @return {Promise<Requests.PublishUnpublishResponse>}
   */
  publishUnpublish(
    opts: Requests.PublishUnpublishRequest,
    retryOnTimeout?: boolean
  ): Promise<Requests.PublishUnpublishResponse>;
};
export * as Types from "./types.d.ts";
import * as Requests from "./types.d.ts";
