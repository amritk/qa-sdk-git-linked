// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from '../resource';
import { APIPromise } from '../api-promise';
import type { RequestOptions } from '../internal/request-options';
import { path as __scalarPath } from '../internal/utils/path';

export class IndicatorTypes extends APIResource {
  /**
   * Lists indicator types across multiple datasets
   *
   * @param {string} accountID - Account ID.
   * @param {IndicatorTypeListListParams} [query] - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<IndicatorTypeListListResponse>} Returns a list of indicator types.
   *
   * @example
   * ```ts
   * const indicatorType = await client.indicatorTypes.listList('accountId');
   * ```
   */
  listList(
    accountID: string,
    query: IndicatorTypeListListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<IndicatorTypeListListResponse> {
    return this._client.get(__scalarPath`/accounts/${accountID}/cloudforce-one/events/indicator-types`, {
      query,
      ...options,
    });
  }

  /**
   * This Method is deprecated. Please use /events/dataset/:dataset_id/indicatorTypes instead.
   *
   * @param {string} accountID - Account ID.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<IndicatorTypeListLegacyListResponse>} Returns a list of indicator types.
   *
   * @example
   * ```ts
   * const indicatorType = await client.indicatorTypes.listLegacyList('accountId');
   * ```
   *
   * @deprecated
   */
  listLegacyList(
    accountID: string,
    options?: RequestOptions,
  ): APIPromise<IndicatorTypeListLegacyListResponse> {
    return this._client.get(
      __scalarPath`/accounts/${accountID}/cloudforce-one/events/indicatorTypes`,
      options,
    );
  }
}

export interface IndicatorTypeListListParams {
  /**
   * Dataset UUIDs to query, or one standalone scope value: 'all'/'*', 'analytics' for isAnalytics=true datasets, or 'operational' for isAnalytics=false datasets. If not provided, queries all accessible datasets.
   */
  datasetIds?: Array<string>;
}

export interface IndicatorTypeListListResponse {
  items: IndicatorTypeListListResponse.Items;
  type: string;
}

export namespace IndicatorTypeListListResponse {
  export interface Items {
    type: string;
  }
}

export interface IndicatorTypeListLegacyListResponse {
  items: IndicatorTypeListLegacyListResponse.Items;
  type: string;
}

export namespace IndicatorTypeListLegacyListResponse {
  export interface Items {
    type: string;
  }
}
export declare namespace IndicatorTypes {
  export {
    type IndicatorTypeListListResponse as IndicatorTypeListListResponse,
    type IndicatorTypeListLegacyListResponse as IndicatorTypeListLegacyListResponse,
    type IndicatorTypeListListParams as IndicatorTypeListListParams,
  };
}
