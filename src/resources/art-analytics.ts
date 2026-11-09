// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from '../resource';
import { APIPromise } from '../api-promise';
import type { RequestOptions } from '../internal/request-options';
import { path as __scalarPath } from '../internal/utils/path';

export class ArtAnalytics extends APIResource {
  /**
   * Returns aggregate summary stats for a dataset. Includes current-period and previous-period totals for trend comparison.
   *
   *
   * @param {string} dataset - Dataset name to query. Examples: `access-logins`, `gateway-http`, `gateway-dns`, `gateway-http`, `shadow-it`.
   * @param {ArtAnalyticQuerySummaryParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<unknown>} Summary query result.
   *
   * @example
   * ```ts
   * const response = await client.artAnalytics.querySummary('access-logins', {
   *   account_id: 'accountId',
   *   body: {},
   * });
   * ```
   */
  querySummary(
    dataset: string,
    params: ArtAnalyticQuerySummaryParams,
    options?: RequestOptions,
  ): APIPromise<unknown> {
    const { account_id, body } = params;
    return this._client.post(__scalarPath`/accounts/${account_id}/analytics/query/${dataset}/summary`, {
      body,
      ...options,
    });
  }

  /**
   * Returns time-bucketed analytics data for a dataset. Includes time slots, each containing the requested stats, group-by dimensions, and resolution-controlled bucket size (e.g. `hour`, `day`).
   *
   *
   * @param {string} dataset - Dataset name to query. Examples: `access-logins`, `gateway-http`, `gateway-dns`, `gateway-http`, `shadow-it`.
   * @param {ArtAnalyticQueryTimeseriesParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<unknown>} Timeseries query result.
   *
   * @example
   * ```ts
   * const response = await client.artAnalytics.queryTimeseries('shadow_it', {
   *   account_id: 'accountId',
   *   body: {},
   * });
   * ```
   */
  queryTimeseries(
    dataset: string,
    params: ArtAnalyticQueryTimeseriesParams,
    options?: RequestOptions,
  ): APIPromise<unknown> {
    const { account_id, body } = params;
    return this._client.post(__scalarPath`/accounts/${account_id}/analytics/query/${dataset}/timeseries`, {
      body,
      ...options,
    });
  }

  /**
   * Returns the top N results for a dataset by a specified stat. Includes an array of result rows, each containing the requested stats and group-by dimensions.
   *
   *
   * @param {string} dataset - Dataset name to query. Examples: `access-logins`, `gateway-http`, `gateway-dns`, `gateway-http`, `shadow-it`.
   * @param {ArtAnalyticQueryTopNParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<unknown>} Top-N query result.
   *
   * @example
   * ```ts
   * const response = await client.artAnalytics.queryTopN('gateway-http', {
   *   account_id: 'accountId',
   *   body: {},
   * });
   * ```
   */
  queryTopN(
    dataset: string,
    params: ArtAnalyticQueryTopNParams,
    options?: RequestOptions,
  ): APIPromise<unknown> {
    const { account_id, body } = params;
    return this._client.post(__scalarPath`/accounts/${account_id}/analytics/query/${dataset}/top-n`, {
      body,
      ...options,
    });
  }
}

export interface ArtAnalyticQuerySummaryParams {
  /**
   * Path param
   */
  account_id: string;
  /**
   * Body param
   */
  body: unknown;
}

export interface ArtAnalyticQueryTimeseriesParams {
  /**
   * Path param
   */
  account_id: string;
  /**
   * Body param
   */
  body: unknown;
}

export interface ArtAnalyticQueryTopNParams {
  /**
   * Path param
   */
  account_id: string;
  /**
   * Body param
   */
  body: unknown;
}
export declare namespace ArtAnalytics {
  export {
    type ArtAnalyticQuerySummaryParams as ArtAnalyticQuerySummaryParams,
    type ArtAnalyticQueryTimeseriesParams as ArtAnalyticQueryTimeseriesParams,
    type ArtAnalyticQueryTopNParams as ArtAnalyticQueryTopNParams,
  };
}
