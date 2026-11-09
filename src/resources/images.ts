// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from '../resource';
import { APIPromise } from '../api-promise';
import type { RequestOptions } from '../internal/request-options';
import { buildHeaders } from '../internal/headers';
import { multipartFormRequestOptions } from '../internal/uploads';
import { path as __scalarPath } from '../internal/utils/path';
import type { Uploadable } from '../core/uploads';

export class Images extends APIResource {
  /**
   * List images for an account.
   *
   * @param {string} accountID - Account identifier.
   * @param {ImageListListParams} [query] - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<ImageListListResponse>} Upload an image response
   *
   * @example
   * ```ts
   * const image = await client.images.listList('accountId', {
   *   per_page: 1000,
   *   sort_order: 'desc',
   * });
   * ```
   */
  listList(
    accountID: string,
    query: ImageListListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ImageListListResponse> {
    return this._client.get(__scalarPath`/accounts/${accountID}/v1/images`, { query, ...options });
  }

  /**
   * Upload a new image.
   *
   * @param {string} accountID - Account identifier.
   * @param {ImagePostUploadParams} [body] - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<ImagePostUploadResponse>} Upload an image response
   *
   * @example
   * ```ts
   * const image = await client.images.postUpload('accountId');
   * ```
   */
  postUpload(
    accountID: string,
    body: ImagePostUploadParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ImagePostUploadResponse> {
    return this._client.post(
      __scalarPath`/accounts/${accountID}/v1/images`,
      multipartFormRequestOptions({ body, ...options }, this._client),
    );
  }

  /**
   * Delete an image.
   *
   * @param {string} imageID - Image identifier.
   * @param {ImageDeleteDeleteParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<ImageDeleteDeleteResponse>} Delete image response
   *
   * @example
   * ```ts
   * const image = await client.images.deleteDelete('imageId', {
   *   accountId: 'accountId',
   * });
   * ```
   */
  deleteDelete(
    imageID: string,
    params: ImageDeleteDeleteParams,
    options?: RequestOptions,
  ): APIPromise<ImageDeleteDeleteResponse> {
    const { accountId } = params;
    return this._client.delete(__scalarPath`/accounts/${accountId}/v1/images/${imageID}`, options);
  }

  /**
   * Get image metadata.
   *
   * @param {string} imageID - Image identifier.
   * @param {ImageRetrieveGetParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<ImageRetrieveGetResponse>} Image details response
   *
   * @example
   * ```ts
   * const image = await client.images.retrieveGet('imageId', {
   *   accountId: 'accountId',
   * });
   * ```
   */
  retrieveGet(
    imageID: string,
    params: ImageRetrieveGetParams,
    options?: RequestOptions,
  ): APIPromise<ImageRetrieveGetResponse> {
    const { accountId } = params;
    return this._client.get(__scalarPath`/accounts/${accountId}/v1/images/${imageID}`, options);
  }

  /**
   * Update an image's metadata.
   *
   * @param {string} imageID - Image identifier.
   * @param {ImagePatchEditParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<ImagePatchEditResponse>} Edit image response
   *
   * @example
   * ```ts
   * const image = await client.images.patchEdit('imageId', {
   *   accountId: 'accountId',
   * });
   * ```
   */
  patchEdit(
    imageID: string,
    params: ImagePatchEditParams,
    options?: RequestOptions,
  ): APIPromise<ImagePatchEditResponse> {
    const { accountId, ...body } = params;
    return this._client.patch(__scalarPath`/accounts/${accountId}/v1/images/${imageID}`, {
      body,
      ...options,
    });
  }

  /**
   * Upload an image to a specific image ID.
   *
   * @param {string} imageID - Image identifier.
   * @param {ImagePutDirectUploadParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<ImagePutDirectUploadResponse>} Upload an image response
   *
   * @example
   * ```ts
   * const image = await client.images.putDirectUpload('imageId', {
   *   accountId: 'accountId',
   * });
   * ```
   */
  putDirectUpload(
    imageID: string,
    params: ImagePutDirectUploadParams,
    options?: RequestOptions,
  ): APIPromise<ImagePutDirectUploadResponse> {
    const { accountId, ...body } = params;
    return this._client.put(
      __scalarPath`/accounts/${accountId}/v1/images/${imageID}`,
      multipartFormRequestOptions({ body, ...options }, this._client),
    );
  }

  /**
   * Get image as a blob.
   *
   * @param {string} imageID - Image identifier.
   * @param {ImageListGetBlobParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<Response>} Get image response
   *
   * @example
   * ```ts
   * const response = await client.images.listGetBlob('imageId', {
   *   accountId: 'accountId',
   * });
   * ```
   */
  listGetBlob(
    imageID: string,
    params: ImageListGetBlobParams,
    options?: RequestOptions,
  ): APIPromise<Response> {
    const { accountId } = params;
    return this._client.get(__scalarPath`/accounts/${accountId}/v1/images/${imageID}/blob`, {
      ...options,
      headers: buildHeaders([{ Accept: 'image/*' }, options?.headers]),
      __binaryResponse: true,
    });
  }

  /**
   * List images for an account.
   *
   * @param {string} accountID - Account identifier.
   * @param {ImageListAccountsAccountV2Params} [query] - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<ImageListAccountsAccountV2Response>} Upload an image response
   *
   * @example
   * ```ts
   * const image = await client.images.listAccountsAccountV2('accountId', {
   *   per_page: 1000,
   *   sort_order: 'desc',
   * });
   * ```
   */
  listAccountsAccountV2(
    accountID: string,
    query: ImageListAccountsAccountV2Params | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ImageListAccountsAccountV2Response> {
    return this._client.get(__scalarPath`/accounts/${accountID}/v2/images`, { query, ...options });
  }

  /**
   * Create an authenticated direct upload URL for an image.
   *
   * @param {string} accountID - Account identifier.
   * @param {ImagePostDirectUploadLinkParams} [body] - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<ImagePostDirectUploadLinkResponse>} Create an authenticated direct upload url response
   *
   * @example
   * ```ts
   * const image = await client.images.postDirectUploadLink('accountId');
   * ```
   */
  postDirectUploadLink(
    accountID: string,
    body: ImagePostDirectUploadLinkParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ImagePostDirectUploadLinkResponse> {
    return this._client.post(
      __scalarPath`/accounts/${accountID}/v2/images/direct_upload`,
      multipartFormRequestOptions({ body, ...options }, this._client),
    );
  }

  /**
   * Get the current transformation flows configuration for a zone.
   *
   * @param {string} zoneID - Zone identifier.
   * @param {ImageListFlowsGetParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<ImageListFlowsGetResponse>} Get flows config
   *
   * @example
   * ```ts
   * const image = await client.images.listFlowsGet('zoneId', {
   *   accountId: 'accountId',
   * });
   * ```
   */
  listFlowsGet(
    zoneID: string,
    params: ImageListFlowsGetParams,
    options?: RequestOptions,
  ): APIPromise<ImageListFlowsGetResponse> {
    const { accountId } = params;
    return this._client.get(__scalarPath`/accounts/${accountId}/zones/${zoneID}/v1/images/flows`, options);
  }

  /**
   * Replace the entire transformation flows configuration for a zone.
   *
   * @param {string} zoneID - Zone identifier.
   * @param {ImagePutFlowsUpdateParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<ImagePutFlowsUpdateResponse>} Update flows config
   *
   * @example
   * ```ts
   * const image = await client.images.putFlowsUpdate('zoneId', {
   *   accountId: 'accountId',
   *   flows: [
   *     {
   *       enabled: false,
   *       provider: 'fastly',
   *       type: 'provider',
   *       version: 0,
   *     },
   *   ],
   *   version: 2,
   * });
   * ```
   */
  putFlowsUpdate(
    zoneID: string,
    params: ImagePutFlowsUpdateParams,
    options?: RequestOptions,
  ): APIPromise<ImagePutFlowsUpdateResponse> {
    const { accountId, ...body } = params;
    return this._client.put(__scalarPath`/accounts/${accountId}/zones/${zoneID}/v1/images/flows`, {
      body,
      ...options,
    });
  }
}

export interface ImageListListParams {
  /**
   * Number of items per page
   * @default 1000
   * @minimum 10
   * @maximum 10000
   */
  per_page?: number;
  /**
   * Continuation token for a next page. List images V2 returns continuation_token
   */
  continuation_token?: string;
  /**
   * Internal user ID set within the creator field. Setting to empty string will return images where creator field is not set
   */
  creator?: string;
  /**
   * Sorting order by upload time
   * @default desc
   */
  sort_order?: 'asc' | 'desc';
}

export interface ImageListListResponse {
  result: ImageListListResponse.Result;
  success: boolean;
}

export namespace ImageListListResponse {
  export interface Result {
    /**
     * Continuation token for a next page. List images V2 returns continuation_token
     */
    continuation_token: string | null;
    images: Array<Result.Image>;
  }

  export namespace Result {
    export interface Image {
      filename: string;
      id: string;
      meta: Record<string, unknown>;
      requireSignedURLs: boolean;
      /**
       * @format date-time
       */
      uploaded: string;
      variants: Array<string>;
      creator?: string;
    }
  }
}

export interface ImagePostUploadParams {
  /**
   * Can set the creator field with an internal user ID.
   */
  creator?: string;
  /**
   * An image binary data. Only needed when type is uploading a file.
   */
  file?: Uploadable;
  /**
   * Optional Image Custom ID. Up to 1024 chars. Can include any number of subpaths, and utf8 characters. Cannot start nor end with a / (forward slash). Cannot be a UUID.
   */
  id?: string;
  /**
   * User modifiable key-value store. Can use used for keeping references to another system of record for managing images.
   */
  metadata?: Record<string, unknown>;
  /**
   * Indicates whether the image requires a signature token for the access.
   * @default false
   */
  requireSignedURLs?: boolean;
  /**
   * A URL to fetch an image from origin. Only needed when type is uploading from a URL.
   */
  url?: string;
}

export interface ImagePostUploadResponse {
  result: ImagePostUploadResponse.Result;
  success: boolean;
}

export namespace ImagePostUploadResponse {
  export interface Result {
    filename: string;
    id: string;
    meta: Record<string, unknown>;
    requireSignedURLs: boolean;
    /**
     * @format date-time
     */
    uploaded: string;
    variants: Array<string>;
    creator?: string;
  }
}

export interface ImageDeleteDeleteParams {
  /**
   * Account identifier.
   */
  accountId: string;
}

export interface ImageDeleteDeleteResponse {
  result: Record<string, unknown>;
  success: boolean;
}

export interface ImageRetrieveGetParams {
  /**
   * Account identifier.
   */
  accountId: string;
}

export interface ImageRetrieveGetResponse {
  result: ImageRetrieveGetResponse.Result;
  success: boolean;
}

export namespace ImageRetrieveGetResponse {
  export interface Result {
    filename: string;
    id: string;
    meta: Record<string, unknown>;
    requireSignedURLs: boolean;
    /**
     * @format date-time
     */
    uploaded: string;
    variants: Array<string>;
    creator?: string;
  }
}

export interface ImagePatchEditParams {
  /**
   * Path param: Account identifier.
   */
  accountId: string;
  /**
   * Body param: Image creator
   */
  creator?: string;
  /**
   * Body param: Image metadata
   */
  metadata?: unknown | null;
  /**
   * Body param: Required signed url
   */
  requireSignedURLs?: boolean;
}

export interface ImagePatchEditResponse {
  result: Record<string, unknown>;
  success: boolean;
}

export interface ImagePutDirectUploadParams {
  /**
   * Path param: Account identifier.
   */
  accountId: string;
  /**
   * Body param: An image binary data. Only needed when type is uploading a file.
   */
  file?: Uploadable;
  /**
   * Body param: A URL to fetch an image from origin. Only needed when type is uploading from a URL.
   */
  url?: string;
}

export interface ImagePutDirectUploadResponse {
  result: ImagePutDirectUploadResponse.Result;
  success: boolean;
}

export namespace ImagePutDirectUploadResponse {
  export interface Result {
    filename: string;
    id: string;
    meta: Record<string, unknown>;
    requireSignedURLs: boolean;
    /**
     * @format date-time
     */
    uploaded: string;
    variants: Array<string>;
    creator?: string;
  }
}

export interface ImageListGetBlobParams {
  /**
   * Account identifier.
   */
  accountId: string;
}

export interface ImageListAccountsAccountV2Params {
  /**
   * Number of items per page
   * @default 1000
   * @minimum 10
   * @maximum 10000
   */
  per_page?: number;
  /**
   * Continuation token for a next page. List images V2 returns continuation_token
   */
  continuation_token?: string;
  /**
   * Internal user ID set within the creator field. Setting to empty string will return images where creator field is not set
   */
  creator?: string;
  /**
   * Sorting order by upload time
   * @default desc
   */
  sort_order?: 'asc' | 'desc';
}

export interface ImageListAccountsAccountV2Response {
  result: ImageListAccountsAccountV2Response.Result;
  success: boolean;
}

export namespace ImageListAccountsAccountV2Response {
  export interface Result {
    /**
     * Continuation token for a next page. List images V2 returns continuation_token
     */
    continuation_token: string | null;
    images: Array<Result.Image>;
  }

  export namespace Result {
    export interface Image {
      filename: string;
      id: string;
      meta: Record<string, unknown>;
      requireSignedURLs: boolean;
      /**
       * @format date-time
       */
      uploaded: string;
      variants: Array<string>;
      creator?: string;
    }
  }
}

export interface ImagePostDirectUploadLinkParams {
  /**
   * The date after which the upload will not be accepted. Minimum: Now + 2 minutes.
   */
  expiry?: string;
  /**
   * Optional Image Custom ID. Up to 1024 chars. Can include any number of subpaths, and utf8 characters. Cannot start nor end with a / (forward slash). Cannot be a UUID.
   */
  id?: string;
  /**
   * User modifiable key-value store. Can use used for keeping references to another system of record for managing images.
   */
  metadata?: Record<string, unknown>;
  /**
   * Indicates whether the image requires a signature token for the access.
   * @default false
   */
  requireSignedURLs?: boolean;
}

export interface ImagePostDirectUploadLinkResponse {
  result: ImagePostDirectUploadLinkResponse.Result;
  success: boolean;
}

export namespace ImagePostDirectUploadLinkResponse {
  export interface Result {
    /**
     * Image id
     */
    id: string;
    /**
     * Url a future image should be uploaded to
     */
    uploadURL: string;
  }
}

export interface ImageListFlowsGetParams {
  /**
   * Account identifier.
   */
  accountId: string;
}

export interface ImageListFlowsGetResponse {
  result: ImageListFlowsGetResponse.Result;
  success: boolean;
}

export namespace ImageListFlowsGetResponse {
  export interface Result {
    /**
     * @maxItems 10
     */
    flows: Array<Result.Flow | Result.Flow2>;
    version: 2;
    etag?: string;
  }

  export namespace Result {
    export interface Flow {
      enabled: boolean;
      provider: 'fastly';
      type: 'provider';
      version: number;
    }

    export interface Flow2 {
      enabled: boolean;
      name: string;
      transformations: Array<Flow2.Transformation>;
      trigger: Flow2.Trigger | Flow2.Trigger2 | Flow2.Trigger3 | Flow2.Trigger4 | Flow2.Trigger5;
      type: 'custom';
    }

    export namespace Flow2 {
      export interface Transformation {
        key: string;
        value: string;
      }

      export interface Trigger {
        /**
         * @minItems 1
         */
        triggers: Array<unknown | null>;
        type: 'and';
      }

      export interface Trigger2 {
        /**
         * @minItems 1
         */
        triggers: Array<unknown | null>;
        type: 'or';
      }

      export interface Trigger3 {
        paths: Array<string>;
        type: 'path';
      }

      export interface Trigger4 {
        extensions: Array<string>;
        type: 'extension';
      }

      export interface Trigger5 {
        params: Array<Trigger5.Param>;
        type: 'query-param';
      }

      export namespace Trigger5 {
        export interface Param {
          key: string;
          value: string;
        }
      }
    }
  }
}

export interface ImagePutFlowsUpdateParams {
  /**
   * Path param: Account identifier.
   */
  accountId: string;
  /**
   * Body param
   */
  etag?: string;
  /**
   * Body param
   * @maxItems 10
   */
  flows: Array<ImagePutFlowsUpdateParams.Flow | ImagePutFlowsUpdateParams.Flow2>;
  /**
   * Body param
   */
  version: 2;
}

export namespace ImagePutFlowsUpdateParams {
  export interface Flow {
    enabled: boolean;
    provider: 'fastly';
    type: 'provider';
    version: number;
  }

  export interface Flow2 {
    enabled: boolean;
    name: string;
    transformations: Array<Flow2.Transformation>;
    trigger: Flow2.Trigger | Flow2.Trigger2 | Flow2.Trigger3 | Flow2.Trigger4 | Flow2.Trigger5;
    type: 'custom';
  }

  export namespace Flow2 {
    export interface Transformation {
      key: string;
      value: string;
    }

    export interface Trigger {
      /**
       * @minItems 1
       */
      triggers: Array<unknown | null>;
      type: 'and';
    }

    export interface Trigger2 {
      /**
       * @minItems 1
       */
      triggers: Array<unknown | null>;
      type: 'or';
    }

    export interface Trigger3 {
      paths: Array<string>;
      type: 'path';
    }

    export interface Trigger4 {
      extensions: Array<string>;
      type: 'extension';
    }

    export interface Trigger5 {
      params: Array<Trigger5.Param>;
      type: 'query-param';
    }

    export namespace Trigger5 {
      export interface Param {
        key: string;
        value: string;
      }
    }
  }
}

export interface ImagePutFlowsUpdateResponse {
  result: ImagePutFlowsUpdateResponse.Result;
  success: boolean;
}

export namespace ImagePutFlowsUpdateResponse {
  export interface Result {
    /**
     * @maxItems 10
     */
    flows: Array<Result.Flow | Result.Flow2>;
    version: 2;
    etag?: string;
  }

  export namespace Result {
    export interface Flow {
      enabled: boolean;
      provider: 'fastly';
      type: 'provider';
      version: number;
    }

    export interface Flow2 {
      enabled: boolean;
      name: string;
      transformations: Array<Flow2.Transformation>;
      trigger: Flow2.Trigger | Flow2.Trigger2 | Flow2.Trigger3 | Flow2.Trigger4 | Flow2.Trigger5;
      type: 'custom';
    }

    export namespace Flow2 {
      export interface Transformation {
        key: string;
        value: string;
      }

      export interface Trigger {
        /**
         * @minItems 1
         */
        triggers: Array<unknown | null>;
        type: 'and';
      }

      export interface Trigger2 {
        /**
         * @minItems 1
         */
        triggers: Array<unknown | null>;
        type: 'or';
      }

      export interface Trigger3 {
        paths: Array<string>;
        type: 'path';
      }

      export interface Trigger4 {
        extensions: Array<string>;
        type: 'extension';
      }

      export interface Trigger5 {
        params: Array<Trigger5.Param>;
        type: 'query-param';
      }

      export namespace Trigger5 {
        export interface Param {
          key: string;
          value: string;
        }
      }
    }
  }
}
export declare namespace Images {
  export {
    type ImageListListResponse as ImageListListResponse,
    type ImagePostUploadResponse as ImagePostUploadResponse,
    type ImageDeleteDeleteResponse as ImageDeleteDeleteResponse,
    type ImageRetrieveGetResponse as ImageRetrieveGetResponse,
    type ImagePatchEditResponse as ImagePatchEditResponse,
    type ImagePutDirectUploadResponse as ImagePutDirectUploadResponse,
    type ImageListAccountsAccountV2Response as ImageListAccountsAccountV2Response,
    type ImagePostDirectUploadLinkResponse as ImagePostDirectUploadLinkResponse,
    type ImageListFlowsGetResponse as ImageListFlowsGetResponse,
    type ImagePutFlowsUpdateResponse as ImagePutFlowsUpdateResponse,
    type ImageListListParams as ImageListListParams,
    type ImagePostUploadParams as ImagePostUploadParams,
    type ImageDeleteDeleteParams as ImageDeleteDeleteParams,
    type ImageRetrieveGetParams as ImageRetrieveGetParams,
    type ImagePatchEditParams as ImagePatchEditParams,
    type ImagePutDirectUploadParams as ImagePutDirectUploadParams,
    type ImageListGetBlobParams as ImageListGetBlobParams,
    type ImageListAccountsAccountV2Params as ImageListAccountsAccountV2Params,
    type ImagePostDirectUploadLinkParams as ImagePostDirectUploadLinkParams,
    type ImageListFlowsGetParams as ImageListFlowsGetParams,
    type ImagePutFlowsUpdateParams as ImagePutFlowsUpdateParams,
  };
}
