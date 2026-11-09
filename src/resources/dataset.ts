// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from '../resource';
import { APIPromise } from '../api-promise';
import type { RequestOptions } from '../internal/request-options';
import { path as __scalarPath } from '../internal/utils/path';

export class Dataset extends APIResource {
  /**
   * Lists all threat event datasets configured in Cloudforce One.
   *
   * @param {string} accountID - Account ID.
   * @param {DatasetListListParams} [query] - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<DatasetListListResponse>} Returns a list of dataset in an account.
   *
   * @example
   * ```ts
   * const dataset = await client.dataset.listList('accountId');
   * ```
   */
  listList(
    accountID: string,
    query: DatasetListListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<DatasetListListResponse> {
    return this._client.get(__scalarPath`/accounts/${accountID}/cloudforce-one/events/dataset`, {
      query,
      ...options,
    });
  }

  /**
   * Creates a new threat event dataset in Cloudforce One for organizing related threat events.
   *
   * @param {string} accountID - Account ID.
   * @param {DatasetCreateParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<DatasetCreateResponse>} Returns dataset information.
   *
   * @example
   * ```ts
   * const dataset = await client.dataset.create('accountId', {
   *   isPublic: false,
   *   name: 'x',
   * });
   * ```
   */
  create(
    accountID: string,
    body: DatasetCreateParams,
    options?: RequestOptions,
  ): APIPromise<DatasetCreateResponse> {
    return this._client.post(__scalarPath`/accounts/${accountID}/cloudforce-one/events/dataset/create`, {
      body,
      ...options,
    });
  }

  /**
   * Soft-deletes a dataset given a datasetId.
   *
   * @param {string} datasetID - Dataset ID to delete
   * @param {DatasetDeleteDeleteParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<DatasetDeleteDeleteResponse>} Returns the uuid and name of the deleted dataset.
   *
   * @example
   * ```ts
   * const dataset = await client.dataset.deleteDelete('datasetId', {
   *   account_id: 'accountId',
   * });
   * ```
   */
  deleteDelete(
    datasetID: string,
    params: DatasetDeleteDeleteParams,
    options?: RequestOptions,
  ): APIPromise<DatasetDeleteDeleteResponse> {
    const { account_id } = params;
    return this._client.delete(
      __scalarPath`/accounts/${account_id}/cloudforce-one/events/dataset/${datasetID}`,
      options,
    );
  }

  /**
   * Retrieves details for a specific threat event dataset.
   *
   * @param {string} datasetID - Dataset ID.
   * @param {DatasetRetrieveReadParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<DatasetRetrieveReadResponse>} Returns a dataset.
   *
   * @example
   * ```ts
   * const dataset = await client.dataset.retrieveRead('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
   *   account_id: 'accountId',
   * });
   * ```
   */
  retrieveRead(
    datasetID: string,
    params: DatasetRetrieveReadParams,
    options?: RequestOptions,
  ): APIPromise<DatasetRetrieveReadResponse> {
    const { account_id } = params;
    return this._client.get(
      __scalarPath`/accounts/${account_id}/cloudforce-one/events/dataset/${datasetID}`,
      options,
    );
  }

  /**
   * Partially updates a threat event dataset in Cloudforce One, modifying specific fields without replacing the entire dataset configuration.
   *
   * @param {string} datasetID - Dataset ID.
   * @param {DatasetPatchUpdateParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<DatasetPatchUpdateResponse>} Returns dataset information.
   *
   * @example
   * ```ts
   * const dataset = await client.dataset.patchUpdate('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
   *   account_id: 'accountId',
   *   isPublic: false,
   *   name: 'x',
   * });
   * ```
   */
  patchUpdate(
    datasetID: string,
    params: DatasetPatchUpdateParams,
    options?: RequestOptions,
  ): APIPromise<DatasetPatchUpdateResponse> {
    const { account_id, ...body } = params;
    return this._client.patch(
      __scalarPath`/accounts/${account_id}/cloudforce-one/events/dataset/${datasetID}`,
      { body, ...options },
    );
  }

  /**
   * Updates an existing dataset
   *
   * @param {string} datasetID - Dataset ID.
   * @param {DatasetPostUpdateParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<DatasetPostUpdateResponse>} Returns dataset information.
   *
   * @example
   * ```ts
   * const dataset = await client.dataset.postUpdate('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
   *   account_id: 'accountId',
   *   isPublic: false,
   *   name: 'x',
   * });
   * ```
   */
  postUpdate(
    datasetID: string,
    params: DatasetPostUpdateParams,
    options?: RequestOptions,
  ): APIPromise<DatasetPostUpdateResponse> {
    const { account_id, ...body } = params;
    return this._client.post(
      __scalarPath`/accounts/${account_id}/cloudforce-one/events/dataset/${datasetID}`,
      { body, ...options },
    );
  }
}

export interface DatasetListListParams {
  /**
   * When true, include soft-deleted datasets in the response. Each item includes a `deletedAt` field (ISO 8601 or null). Default: false.
   */
  includeDeleted?: boolean;
}

export type DatasetListListResponse = Array<DatasetListListResponse.DatasetListListResponseItem>;

export namespace DatasetListListResponse {
  export interface DatasetListListResponseItem {
    /**
     * Effective indicator mutation capability after account/dataset authorization and dataset storage capability are applied. API Gateway method permissions are separate and must also allow the requested operation.
     */
    indicatorWriteMode: 'read_only' | 'create_only' | 'full';
    isAnalytics: boolean;
    isPublic: boolean;
    name: string;
    uuid: string;
    deletedAt?: string;
  }
}

export interface DatasetCreateParams {
  /**
   * If true, then anyone can search the dataset. If false, then its limited to the account.
   */
  isPublic: boolean;
  /**
   * Used to describe the dataset within the account context.
   * @minLength 1
   */
  name: string;
}

export interface DatasetCreateResponse {
  isAnalytics: boolean;
  isPublic: boolean;
  name: string;
  uuid: string;
}

export interface DatasetDeleteDeleteParams {
  /**
   * Account ID.
   */
  account_id: string;
}

export interface DatasetDeleteDeleteResponse {
  name: string;
  uuid: string;
}

export interface DatasetRetrieveReadParams {
  /**
   * Account ID.
   */
  account_id: string;
}

export interface DatasetRetrieveReadResponse {
  isAnalytics: boolean;
  isPublic: boolean;
  name: string;
  uuid: string;
}

export interface DatasetPatchUpdateParams {
  /**
   * Path param: Account ID.
   */
  account_id: string;
  /**
   * Body param: If true, then anyone can search the dataset. If false, then its limited to the account.
   */
  isPublic: boolean;
  /**
   * Body param: Used to describe the dataset within the account context.
   * @minLength 1
   */
  name: string;
}

export interface DatasetPatchUpdateResponse {
  isAnalytics: boolean;
  isPublic: boolean;
  name: string;
  uuid: string;
}

export interface DatasetPostUpdateParams {
  /**
   * Path param: Account ID.
   */
  account_id: string;
  /**
   * Body param: If true, then anyone can search the dataset. If false, then its limited to the account.
   */
  isPublic: boolean;
  /**
   * Body param: Used to describe the dataset within the account context.
   * @minLength 1
   */
  name: string;
}

export interface DatasetPostUpdateResponse {
  isAnalytics: boolean;
  isPublic: boolean;
  name: string;
  uuid: string;
}
export declare namespace Dataset {
  export {
    type DatasetListListResponse as DatasetListListResponse,
    type DatasetCreateResponse as DatasetCreateResponse,
    type DatasetDeleteDeleteResponse as DatasetDeleteDeleteResponse,
    type DatasetRetrieveReadResponse as DatasetRetrieveReadResponse,
    type DatasetPatchUpdateResponse as DatasetPatchUpdateResponse,
    type DatasetPostUpdateResponse as DatasetPostUpdateResponse,
    type DatasetListListParams as DatasetListListParams,
    type DatasetCreateParams as DatasetCreateParams,
    type DatasetDeleteDeleteParams as DatasetDeleteDeleteParams,
    type DatasetRetrieveReadParams as DatasetRetrieveReadParams,
    type DatasetPatchUpdateParams as DatasetPatchUpdateParams,
    type DatasetPostUpdateParams as DatasetPostUpdateParams,
  };
}
