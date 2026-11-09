// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from '../resource';
import { APIPromise } from '../api-promise';
import type { RequestOptions } from '../internal/request-options';
import { multipartFormRequestOptions } from '../internal/uploads';
import { path as __scalarPath } from '../internal/utils/path';

export class RequestForInformationRfi extends APIResource {
  /**
   * Lists Cloudforce One intelligence requests with filtering and pagination.
   *
   * @param {string} accountID
   * @param {RequestForInformationRfiCloudforceOneListParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<RequestForInformationRfiCloudforceOneListResponse>} List requests response.
   *
   * @example
   * ```ts
   * const requestForInformationRfi = await client.requestForInformationRfi.cloudforceOneList('accountId', {});
   * ```
   */
  cloudforceOneList(
    accountID: string,
    body: RequestForInformationRfiCloudforceOneListParams,
    options?: RequestOptions,
  ): APIPromise<RequestForInformationRfiCloudforceOneListResponse> {
    return this._client.post(__scalarPath`/accounts/${accountID}/cloudforce-one/requests`, {
      body,
      ...options,
    });
  }

  /**
   * Retrieves constant values used in Cloudforce One requests, including valid statuses and types.
   *
   * @param {string} accountID
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<RequestForInformationRfiCloudforceOneConstantsResponse>} Get request constants response.
   *
   * @example
   * ```ts
   * const requestForInformationRfi = await client.requestForInformationRfi.cloudforceOneConstants('accountId');
   * ```
   */
  cloudforceOneConstants(
    accountID: string,
    options?: RequestOptions,
  ): APIPromise<RequestForInformationRfiCloudforceOneConstantsResponse> {
    return this._client.get(__scalarPath`/accounts/${accountID}/cloudforce-one/requests/constants`, options);
  }

  /**
   * Creating a request adds the request into the Cloudforce One queue for analysis. In addition to the content, a short title, type, priority, and releasability should be provided. If one is not provided, a default will be assigned.
   *
   * @param {string} accountID
   * @param {RequestForInformationRfiCloudforceOneNewParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<RequestForInformationRfiCloudforceOneNewResponse>} Create request response.
   *
   * @example
   * ```ts
   * const requestForInformationRfi = await client.requestForInformationRfi.cloudforceOneNew('accountId', {});
   * ```
   */
  cloudforceOneNew(
    accountID: string,
    body: RequestForInformationRfiCloudforceOneNewParams,
    options?: RequestOptions,
  ): APIPromise<RequestForInformationRfiCloudforceOneNewResponse> {
    return this._client.post(__scalarPath`/accounts/${accountID}/cloudforce-one/requests/new`, {
      body,
      ...options,
    });
  }

  /**
   * Retrieves quota usage for Cloudforce One standard requests.
   *
   * @param {string} accountID
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<RequestForInformationRfiCloudforceOneQuotaResponse>} Get request quota response.
   *
   * @example
   * ```ts
   * const requestForInformationRfi = await client.requestForInformationRfi.cloudforceOneQuota('accountId');
   * ```
   */
  cloudforceOneQuota(
    accountID: string,
    options?: RequestOptions,
  ): APIPromise<RequestForInformationRfiCloudforceOneQuotaResponse> {
    return this._client.get(__scalarPath`/accounts/${accountID}/cloudforce-one/requests/quota`, options);
  }

  /**
   * Lists available request types for Cloudforce One intelligence requests.
   *
   * @param {string} accountID
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<RequestForInformationRfiCloudforceOneTypesResponse>} Get request types response.
   *
   * @example
   * ```ts
   * const requestForInformationRfi = await client.requestForInformationRfi.cloudforceOneTypes('accountId');
   * ```
   */
  cloudforceOneTypes(
    accountID: string,
    options?: RequestOptions,
  ): APIPromise<RequestForInformationRfiCloudforceOneTypesResponse> {
    return this._client.get(__scalarPath`/accounts/${accountID}/cloudforce-one/requests/types`, options);
  }

  /**
   * Deletes a Cloudforce One intelligence request and all associated data.
   *
   * @param {string} requestID
   * @param {RequestForInformationRfiCloudforceOneDeleteParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<unknown>} Delete request response.
   *
   * @example
   * ```ts
   * const response = await client.requestForInformationRfi.cloudforceOneDelete('requestId', {
   *   account_id: {},
   * });
   * ```
   */
  cloudforceOneDelete(
    requestID: string,
    params: RequestForInformationRfiCloudforceOneDeleteParams,
    options?: RequestOptions,
  ): APIPromise<unknown> {
    const { account_id } = params;
    return this._client.delete(
      __scalarPath`/accounts/${account_id}/cloudforce-one/requests/${requestID}`,
      options,
    );
  }

  /**
   * Retrieves details for a specific Cloudforce One intelligence request.
   *
   * @param {string} requestID
   * @param {RequestForInformationRfiCloudforceOneGetParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<RequestForInformationRfiCloudforceOneGetResponse>} Get request response.
   *
   * @example
   * ```ts
   * const requestForInformationRfi = await client.requestForInformationRfi.cloudforceOneGet('requestId', {
   *   account_id: {},
   * });
   * ```
   */
  cloudforceOneGet(
    requestID: string,
    params: RequestForInformationRfiCloudforceOneGetParams,
    options?: RequestOptions,
  ): APIPromise<RequestForInformationRfiCloudforceOneGetResponse> {
    const { account_id } = params;
    return this._client.get(
      __scalarPath`/accounts/${account_id}/cloudforce-one/requests/${requestID}`,
      options,
    );
  }

  /**
   * Updating a request alters the request in the Cloudforce One queue. This API may be used to update any attributes of the request after the initial submission. Only fields that you choose to update need to be add to the request body.
   *
   * @param {string} requestID
   * @param {RequestForInformationRfiCloudforceOneUpdateParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<RequestForInformationRfiCloudforceOneUpdateResponse>} Update request response.
   *
   * @example
   * ```ts
   * const requestForInformationRfi = await client.requestForInformationRfi.cloudforceOneUpdate('requestId', {
   *   account_id: {},
   *   body: {},
   * });
   * ```
   */
  cloudforceOneUpdate(
    requestID: string,
    params: RequestForInformationRfiCloudforceOneUpdateParams,
    options?: RequestOptions,
  ): APIPromise<RequestForInformationRfiCloudforceOneUpdateResponse> {
    const { account_id, body } = params;
    return this._client.put(__scalarPath`/accounts/${account_id}/cloudforce-one/requests/${requestID}`, {
      body,
      ...options,
    });
  }

  /**
   * Lists assets attached to a Cloudforce One intelligence request.
   *
   * @param {string} requestID
   * @param {RequestForInformationRfiCloudforceOneAssetListParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<RequestForInformationRfiCloudforceOneAssetListResponse>} List request assets response.
   *
   * @example
   * ```ts
   * const requestForInformationRfi = await client.requestForInformationRfi.cloudforceOneAssetList('requestId', {
   *   account_id: {},
   *   body: {},
   * });
   * ```
   */
  cloudforceOneAssetList(
    requestID: string,
    params: RequestForInformationRfiCloudforceOneAssetListParams,
    options?: RequestOptions,
  ): APIPromise<RequestForInformationRfiCloudforceOneAssetListResponse> {
    const { account_id, body } = params;
    return this._client.post(
      __scalarPath`/accounts/${account_id}/cloudforce-one/requests/${requestID}/asset`,
      { body, ...options },
    );
  }

  /**
   * Uploads a new asset to a Cloudforce One intelligence request.
   *
   * @param {string} requestID
   * @param {RequestForInformationRfiCloudforceOneAssetNewParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<RequestForInformationRfiCloudforceOneAssetNewResponse>} Create request asset response.
   *
   * @example
   * ```ts
   * const requestForInformationRfi = await client.requestForInformationRfi.cloudforceOneAssetNew('requestId', {
   *   account_id: {},
   *   body: {},
   * });
   * ```
   */
  cloudforceOneAssetNew(
    requestID: string,
    params: RequestForInformationRfiCloudforceOneAssetNewParams,
    options?: RequestOptions,
  ): APIPromise<RequestForInformationRfiCloudforceOneAssetNewResponse> {
    const { account_id, body } = params;
    return this._client.post(
      __scalarPath`/accounts/${account_id}/cloudforce-one/requests/${requestID}/asset/new`,
      multipartFormRequestOptions({ body, ...options }, this._client),
    );
  }

  /**
   * Removes an asset from a Cloudforce One intelligence request.
   *
   * @param {string} assetID
   * @param {RequestForInformationRfiCloudforceOneAssetDeleteParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<unknown>} Delete request asset response.
   *
   * @example
   * ```ts
   * const response = await client.requestForInformationRfi.cloudforceOneAssetDelete('assetId', {
   *   account_id: {},
   *   request_id: {},
   * });
   * ```
   */
  cloudforceOneAssetDelete(
    assetID: string,
    params: RequestForInformationRfiCloudforceOneAssetDeleteParams,
    options?: RequestOptions,
  ): APIPromise<unknown> {
    const { account_id, request_id } = params;
    return this._client.delete(
      __scalarPath`/accounts/${account_id}/cloudforce-one/requests/${request_id}/asset/${assetID}`,
      options,
    );
  }

  /**
   * Retrieves an asset attached to a Cloudforce One intelligence request.
   *
   * @param {string} assetID
   * @param {RequestForInformationRfiCloudforceOneAssetGetParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<RequestForInformationRfiCloudforceOneAssetGetResponse>} Get request asset response.
   *
   * @example
   * ```ts
   * const requestForInformationRfi = await client.requestForInformationRfi.cloudforceOneAssetGet('assetId', {
   *   account_id: {},
   *   request_id: {},
   * });
   * ```
   */
  cloudforceOneAssetGet(
    assetID: string,
    params: RequestForInformationRfiCloudforceOneAssetGetParams,
    options?: RequestOptions,
  ): APIPromise<RequestForInformationRfiCloudforceOneAssetGetResponse> {
    const { account_id, request_id } = params;
    return this._client.get(
      __scalarPath`/accounts/${account_id}/cloudforce-one/requests/${request_id}/asset/${assetID}`,
      options,
    );
  }

  /**
   * Updates an asset in a Cloudforce One intelligence request.
   *
   * @param {string} assetID
   * @param {RequestForInformationRfiCloudforceOneAssetUpdateParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<RequestForInformationRfiCloudforceOneAssetUpdateResponse>} Update request asset response.
   *
   * @example
   * ```ts
   * const requestForInformationRfi = await client.requestForInformationRfi.cloudforceOneAssetUpdate('assetId', {
   *   account_id: {},
   *   request_id: {},
   *   body: {},
   * });
   * ```
   */
  cloudforceOneAssetUpdate(
    assetID: string,
    params: RequestForInformationRfiCloudforceOneAssetUpdateParams,
    options?: RequestOptions,
  ): APIPromise<RequestForInformationRfiCloudforceOneAssetUpdateResponse> {
    const { account_id, request_id, body } = params;
    return this._client.put(
      __scalarPath`/accounts/${account_id}/cloudforce-one/requests/${request_id}/asset/${assetID}`,
      { body, ...options },
    );
  }

  /**
   * Lists messages in a Cloudforce One intelligence request conversation.
   *
   * @param {string} requestID
   * @param {RequestForInformationRfiCloudforceOneMessageListParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<RequestForInformationRfiCloudforceOneMessageListResponse>} List request messages response.
   *
   * @example
   * ```ts
   * const requestForInformationRfi = await client.requestForInformationRfi.cloudforceOneMessageList('requestId', {
   *   account_id: {},
   *   body: {},
   * });
   * ```
   */
  cloudforceOneMessageList(
    requestID: string,
    params: RequestForInformationRfiCloudforceOneMessageListParams,
    options?: RequestOptions,
  ): APIPromise<RequestForInformationRfiCloudforceOneMessageListResponse> {
    const { account_id, body } = params;
    return this._client.post(
      __scalarPath`/accounts/${account_id}/cloudforce-one/requests/${requestID}/message`,
      { body, ...options },
    );
  }

  /**
   * Adds a message to a Cloudforce One intelligence request conversation.
   *
   * @param {string} requestID
   * @param {RequestForInformationRfiCloudforceOneMessageNewParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<RequestForInformationRfiCloudforceOneMessageNewResponse>} Create request message response.
   *
   * @example
   * ```ts
   * const requestForInformationRfi = await client.requestForInformationRfi.cloudforceOneMessageNew('requestId', {
   *   account_id: {},
   *   body: {},
   * });
   * ```
   */
  cloudforceOneMessageNew(
    requestID: string,
    params: RequestForInformationRfiCloudforceOneMessageNewParams,
    options?: RequestOptions,
  ): APIPromise<RequestForInformationRfiCloudforceOneMessageNewResponse> {
    const { account_id, body } = params;
    return this._client.post(
      __scalarPath`/accounts/${account_id}/cloudforce-one/requests/${requestID}/message/new`,
      { body, ...options },
    );
  }

  /**
   * Removes a message from a Cloudforce One intelligence request thread.
   *
   * @param {number} messageID
   * @param {RequestForInformationRfiCloudforceOneMessageDeleteParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<unknown>} Delete request message response.
   *
   * @example
   * ```ts
   * const response = await client.requestForInformationRfi.cloudforceOneMessageDelete(1, {
   *   account_id: {},
   *   request_id: {},
   * });
   * ```
   */
  cloudforceOneMessageDelete(
    messageID: number,
    params: RequestForInformationRfiCloudforceOneMessageDeleteParams,
    options?: RequestOptions,
  ): APIPromise<unknown> {
    const { account_id, request_id } = params;
    return this._client.delete(
      __scalarPath`/accounts/${account_id}/cloudforce-one/requests/${request_id}/message/${messageID}`,
      options,
    );
  }

  /**
   * Updates a message in a Cloudforce One intelligence request thread.
   *
   * @param {number} messageID
   * @param {RequestForInformationRfiCloudforceOneMessageUpdateParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<RequestForInformationRfiCloudforceOneMessageUpdateResponse>} Update request message response.
   *
   * @example
   * ```ts
   * const requestForInformationRfi = await client.requestForInformationRfi.cloudforceOneMessageUpdate(1, {
   *   account_id: {},
   *   request_id: {},
   *   body: {},
   * });
   * ```
   */
  cloudforceOneMessageUpdate(
    messageID: number,
    params: RequestForInformationRfiCloudforceOneMessageUpdateParams,
    options?: RequestOptions,
  ): APIPromise<RequestForInformationRfiCloudforceOneMessageUpdateResponse> {
    const { account_id, request_id, body } = params;
    return this._client.put(
      __scalarPath`/accounts/${account_id}/cloudforce-one/requests/${request_id}/message/${messageID}`,
      { body, ...options },
    );
  }
}

export type RequestForInformationRfiCloudforceOneListParams = unknown;

export type RequestForInformationRfiCloudforceOneListResponse = unknown &
  RequestForInformationRfiCloudforceOneListResponse.RequestForInformationRfiCloudforceOneListResponseItem;

export namespace RequestForInformationRfiCloudforceOneListResponse {
  export interface RequestForInformationRfiCloudforceOneListResponseItem {
    result?: Array<unknown>;
  }
}

export type RequestForInformationRfiCloudforceOneConstantsResponse = unknown &
  RequestForInformationRfiCloudforceOneConstantsResponse.RequestForInformationRfiCloudforceOneConstantsResponseItem;

export namespace RequestForInformationRfiCloudforceOneConstantsResponse {
  export interface RequestForInformationRfiCloudforceOneConstantsResponseItem {
    result?: unknown;
  }
}

export type RequestForInformationRfiCloudforceOneNewParams = unknown;

export type RequestForInformationRfiCloudforceOneNewResponse = unknown &
  RequestForInformationRfiCloudforceOneNewResponse.RequestForInformationRfiCloudforceOneNewResponseItem;

export namespace RequestForInformationRfiCloudforceOneNewResponse {
  export interface RequestForInformationRfiCloudforceOneNewResponseItem {
    result?: unknown;
  }
}

export type RequestForInformationRfiCloudforceOneQuotaResponse = unknown &
  RequestForInformationRfiCloudforceOneQuotaResponse.RequestForInformationRfiCloudforceOneQuotaResponseItem;

export namespace RequestForInformationRfiCloudforceOneQuotaResponse {
  export interface RequestForInformationRfiCloudforceOneQuotaResponseItem {
    result?: unknown;
  }
}

export type RequestForInformationRfiCloudforceOneTypesResponse = unknown &
  RequestForInformationRfiCloudforceOneTypesResponse.RequestForInformationRfiCloudforceOneTypesResponseItem;

export namespace RequestForInformationRfiCloudforceOneTypesResponse {
  export interface RequestForInformationRfiCloudforceOneTypesResponseItem {
    result?: unknown;
  }
}

export interface RequestForInformationRfiCloudforceOneDeleteParams {
  account_id: string;
}

export interface RequestForInformationRfiCloudforceOneGetParams {
  account_id: string;
}

export type RequestForInformationRfiCloudforceOneGetResponse = unknown &
  RequestForInformationRfiCloudforceOneGetResponse.RequestForInformationRfiCloudforceOneGetResponseItem;

export namespace RequestForInformationRfiCloudforceOneGetResponse {
  export interface RequestForInformationRfiCloudforceOneGetResponseItem {
    result?: unknown;
  }
}

export interface RequestForInformationRfiCloudforceOneUpdateParams {
  /**
   * Path param
   */
  account_id: string;
  /**
   * Body param
   */
  body: unknown;
}

export type RequestForInformationRfiCloudforceOneUpdateResponse = unknown &
  RequestForInformationRfiCloudforceOneUpdateResponse.RequestForInformationRfiCloudforceOneUpdateResponseItem;

export namespace RequestForInformationRfiCloudforceOneUpdateResponse {
  export interface RequestForInformationRfiCloudforceOneUpdateResponseItem {
    result?: unknown;
  }
}

export interface RequestForInformationRfiCloudforceOneAssetListParams {
  /**
   * Path param
   */
  account_id: string;
  /**
   * Body param
   */
  body: unknown;
}

export type RequestForInformationRfiCloudforceOneAssetListResponse = unknown &
  RequestForInformationRfiCloudforceOneAssetListResponse.RequestForInformationRfiCloudforceOneAssetListResponseItem;

export namespace RequestForInformationRfiCloudforceOneAssetListResponse {
  export interface RequestForInformationRfiCloudforceOneAssetListResponseItem {
    result?: Array<unknown>;
  }
}

export interface RequestForInformationRfiCloudforceOneAssetNewParams {
  /**
   * Path param
   */
  account_id: string;
  /**
   * Body param
   */
  body: unknown;
}

export type RequestForInformationRfiCloudforceOneAssetNewResponse = unknown &
  RequestForInformationRfiCloudforceOneAssetNewResponse.RequestForInformationRfiCloudforceOneAssetNewResponseItem;

export namespace RequestForInformationRfiCloudforceOneAssetNewResponse {
  export interface RequestForInformationRfiCloudforceOneAssetNewResponseItem {
    result?: unknown;
  }
}

export interface RequestForInformationRfiCloudforceOneAssetDeleteParams {
  account_id: string;
  request_id: string;
}

export interface RequestForInformationRfiCloudforceOneAssetGetParams {
  account_id: string;
  request_id: string;
}

export type RequestForInformationRfiCloudforceOneAssetGetResponse = unknown &
  RequestForInformationRfiCloudforceOneAssetGetResponse.RequestForInformationRfiCloudforceOneAssetGetResponseItem;

export namespace RequestForInformationRfiCloudforceOneAssetGetResponse {
  export interface RequestForInformationRfiCloudforceOneAssetGetResponseItem {
    result?: Array<unknown>;
  }
}

export interface RequestForInformationRfiCloudforceOneAssetUpdateParams {
  /**
   * Path param
   */
  account_id: string;
  /**
   * Path param
   */
  request_id: string;
  /**
   * Body param
   */
  body: unknown;
}

export type RequestForInformationRfiCloudforceOneAssetUpdateResponse = unknown &
  RequestForInformationRfiCloudforceOneAssetUpdateResponse.RequestForInformationRfiCloudforceOneAssetUpdateResponseItem;

export namespace RequestForInformationRfiCloudforceOneAssetUpdateResponse {
  export interface RequestForInformationRfiCloudforceOneAssetUpdateResponseItem {
    result?: unknown;
  }
}

export interface RequestForInformationRfiCloudforceOneMessageListParams {
  /**
   * Path param
   */
  account_id: string;
  /**
   * Body param
   */
  body: unknown;
}

export type RequestForInformationRfiCloudforceOneMessageListResponse = unknown &
  RequestForInformationRfiCloudforceOneMessageListResponse.RequestForInformationRfiCloudforceOneMessageListResponseItem;

export namespace RequestForInformationRfiCloudforceOneMessageListResponse {
  export interface RequestForInformationRfiCloudforceOneMessageListResponseItem {
    result?: Array<unknown>;
  }
}

export interface RequestForInformationRfiCloudforceOneMessageNewParams {
  /**
   * Path param
   */
  account_id: string;
  /**
   * Body param
   */
  body: unknown;
}

export type RequestForInformationRfiCloudforceOneMessageNewResponse = unknown &
  RequestForInformationRfiCloudforceOneMessageNewResponse.RequestForInformationRfiCloudforceOneMessageNewResponseItem;

export namespace RequestForInformationRfiCloudforceOneMessageNewResponse {
  export interface RequestForInformationRfiCloudforceOneMessageNewResponseItem {
    result?: unknown;
  }
}

export interface RequestForInformationRfiCloudforceOneMessageDeleteParams {
  account_id: string;
  request_id: string;
}

export interface RequestForInformationRfiCloudforceOneMessageUpdateParams {
  /**
   * Path param
   */
  account_id: string;
  /**
   * Path param
   */
  request_id: string;
  /**
   * Body param
   */
  body: unknown;
}

export type RequestForInformationRfiCloudforceOneMessageUpdateResponse = unknown &
  RequestForInformationRfiCloudforceOneMessageUpdateResponse.RequestForInformationRfiCloudforceOneMessageUpdateResponseItem;

export namespace RequestForInformationRfiCloudforceOneMessageUpdateResponse {
  export interface RequestForInformationRfiCloudforceOneMessageUpdateResponseItem {
    result?: unknown;
  }
}
export declare namespace RequestForInformationRfi {
  export {
    type RequestForInformationRfiCloudforceOneListResponse as RequestForInformationRfiCloudforceOneListResponse,
    type RequestForInformationRfiCloudforceOneConstantsResponse as RequestForInformationRfiCloudforceOneConstantsResponse,
    type RequestForInformationRfiCloudforceOneNewResponse as RequestForInformationRfiCloudforceOneNewResponse,
    type RequestForInformationRfiCloudforceOneQuotaResponse as RequestForInformationRfiCloudforceOneQuotaResponse,
    type RequestForInformationRfiCloudforceOneTypesResponse as RequestForInformationRfiCloudforceOneTypesResponse,
    type RequestForInformationRfiCloudforceOneGetResponse as RequestForInformationRfiCloudforceOneGetResponse,
    type RequestForInformationRfiCloudforceOneUpdateResponse as RequestForInformationRfiCloudforceOneUpdateResponse,
    type RequestForInformationRfiCloudforceOneAssetListResponse as RequestForInformationRfiCloudforceOneAssetListResponse,
    type RequestForInformationRfiCloudforceOneAssetNewResponse as RequestForInformationRfiCloudforceOneAssetNewResponse,
    type RequestForInformationRfiCloudforceOneAssetGetResponse as RequestForInformationRfiCloudforceOneAssetGetResponse,
    type RequestForInformationRfiCloudforceOneAssetUpdateResponse as RequestForInformationRfiCloudforceOneAssetUpdateResponse,
    type RequestForInformationRfiCloudforceOneMessageListResponse as RequestForInformationRfiCloudforceOneMessageListResponse,
    type RequestForInformationRfiCloudforceOneMessageNewResponse as RequestForInformationRfiCloudforceOneMessageNewResponse,
    type RequestForInformationRfiCloudforceOneMessageUpdateResponse as RequestForInformationRfiCloudforceOneMessageUpdateResponse,
    type RequestForInformationRfiCloudforceOneListParams as RequestForInformationRfiCloudforceOneListParams,
    type RequestForInformationRfiCloudforceOneNewParams as RequestForInformationRfiCloudforceOneNewParams,
    type RequestForInformationRfiCloudforceOneDeleteParams as RequestForInformationRfiCloudforceOneDeleteParams,
    type RequestForInformationRfiCloudforceOneGetParams as RequestForInformationRfiCloudforceOneGetParams,
    type RequestForInformationRfiCloudforceOneUpdateParams as RequestForInformationRfiCloudforceOneUpdateParams,
    type RequestForInformationRfiCloudforceOneAssetListParams as RequestForInformationRfiCloudforceOneAssetListParams,
    type RequestForInformationRfiCloudforceOneAssetNewParams as RequestForInformationRfiCloudforceOneAssetNewParams,
    type RequestForInformationRfiCloudforceOneAssetDeleteParams as RequestForInformationRfiCloudforceOneAssetDeleteParams,
    type RequestForInformationRfiCloudforceOneAssetGetParams as RequestForInformationRfiCloudforceOneAssetGetParams,
    type RequestForInformationRfiCloudforceOneAssetUpdateParams as RequestForInformationRfiCloudforceOneAssetUpdateParams,
    type RequestForInformationRfiCloudforceOneMessageListParams as RequestForInformationRfiCloudforceOneMessageListParams,
    type RequestForInformationRfiCloudforceOneMessageNewParams as RequestForInformationRfiCloudforceOneMessageNewParams,
    type RequestForInformationRfiCloudforceOneMessageDeleteParams as RequestForInformationRfiCloudforceOneMessageDeleteParams,
    type RequestForInformationRfiCloudforceOneMessageUpdateParams as RequestForInformationRfiCloudforceOneMessageUpdateParams,
  };
}
