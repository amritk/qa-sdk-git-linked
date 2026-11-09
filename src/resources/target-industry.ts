// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from '../resource';
import { APIPromise } from '../api-promise';
import type { RequestOptions } from '../internal/request-options';
import { path as __scalarPath } from '../internal/utils/path';

export class TargetIndustry extends APIResource {
  /**
   * Lists all target industries for a specific dataset
   *
   * @param {string} datasetID - Dataset UUID.
   * @param {TargetIndustryListListDatasetParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<TargetIndustryListListDatasetResponse>} Returns a list of target industries for the dataset.
   *
   * @example
   * ```ts
   * const targetIndustry = await client.targetIndustry.listListDataset('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
   *   account_id: 'accountId',
   * });
   * ```
   */
  listListDataset(
    datasetID: string,
    params: TargetIndustryListListDatasetParams,
    options?: RequestOptions,
  ): APIPromise<TargetIndustryListListDatasetResponse> {
    const { account_id } = params;
    return this._client.get(
      __scalarPath`/accounts/${account_id}/cloudforce-one/events/dataset/${datasetID}/targetIndustries`,
      options,
    );
  }

  /**
   * Retrieves the catalog of industry classifications used in Cloudforce One threat intelligence.
   *
   * @param {string} accountID - Account ID.
   * @param {TargetIndustryListListParams} [query] - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<TargetIndustryListListResponse>} Returns a list of target industries.
   *
   * @example
   * ```ts
   * const targetIndustry = await client.targetIndustry.listList('accountId');
   * ```
   */
  listList(
    accountID: string,
    query: TargetIndustryListListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<TargetIndustryListListResponse> {
    return this._client.get(__scalarPath`/accounts/${accountID}/cloudforce-one/events/targetIndustries`, {
      query,
      ...options,
    });
  }

  /**
   * Lists all target industries from industry map catalog
   *
   * @param {string} accountID - Account ID.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<TargetIndustryListListCompleteResponse>} Returns all target industries from industry map catalog.
   *
   * @example
   * ```ts
   * const targetIndustry = await client.targetIndustry.listListComplete('accountId');
   * ```
   */
  listListComplete(
    accountID: string,
    options?: RequestOptions,
  ): APIPromise<TargetIndustryListListCompleteResponse> {
    return this._client.get(
      __scalarPath`/accounts/${accountID}/cloudforce-one/events/targetIndustries/catalog`,
      options,
    );
  }
}

export interface TargetIndustryListListDatasetParams {
  /**
   * Account ID.
   */
  account_id: string;
}

export interface TargetIndustryListListDatasetResponse {
  items: TargetIndustryListListDatasetResponse.Items;
  type: string;
}

export namespace TargetIndustryListListDatasetResponse {
  export interface Items {
    type: string;
  }
}

export interface TargetIndustryListListParams {
  /**
   * Array of dataset IDs to query target industries from. If not provided, uses the default dataset.
   */
  datasetIds?: Array<string>;
}

export interface TargetIndustryListListResponse {
  items: TargetIndustryListListResponse.Items;
  type: string;
}

export namespace TargetIndustryListListResponse {
  export interface Items {
    type: string;
  }
}

export interface TargetIndustryListListCompleteResponse {
  items: TargetIndustryListListCompleteResponse.Items;
  type: string;
}

export namespace TargetIndustryListListCompleteResponse {
  export interface Items {
    type: string;
  }
}
export declare namespace TargetIndustry {
  export {
    type TargetIndustryListListDatasetResponse as TargetIndustryListListDatasetResponse,
    type TargetIndustryListListResponse as TargetIndustryListListResponse,
    type TargetIndustryListListCompleteResponse as TargetIndustryListListCompleteResponse,
    type TargetIndustryListListDatasetParams as TargetIndustryListListDatasetParams,
    type TargetIndustryListListParams as TargetIndustryListListParams,
  };
}
