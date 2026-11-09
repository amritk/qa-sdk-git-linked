// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from '../resource';
import { APIPromise } from '../api-promise';
import type { RequestOptions } from '../internal/request-options';
import { path as __scalarPath } from '../internal/utils/path';

export class DataSecurity extends APIResource {
  /**
   * Returns the top N integrations ranked by total content findings.
   *
   *
   * @param {string} accountID
   * @param {DataSecurityContentFindingsTopNParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<unknown>} Top integrations result.
   *
   * @example
   * ```ts
   * const response = await client.dataSecurity.contentFindingsTopN('accountId', {
   *   filters: [],
   *   from: '2024-11-01T00:00:00Z',
   *   n: 10,
   *   to: '2024-11-08T00:00:00Z',
   * });
   * ```
   */
  contentFindingsTopN(
    accountID: string,
    body: DataSecurityContentFindingsTopNParams,
    options?: RequestOptions,
  ): APIPromise<unknown> {
    return this._client.post(
      __scalarPath`/accounts/${accountID}/analytics/query/data-security/content-findings/top-n`,
      { body, ...options },
    );
  }

  /**
   * Returns aggregate current-period and previous-period totals for CASB findings.
   *
   *
   * @param {string} accountID
   * @param {DataSecurityFindingsSummaryParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<unknown>} Findings summary result.
   *
   * @example
   * ```ts
   * const response = await client.dataSecurity.findingsSummary('accountId', {
   *   filters: [],
   *   from: '2024-11-01T00:00:00Z',
   *   to: '2024-11-08T00:00:00Z',
   * });
   * ```
   */
  findingsSummary(
    accountID: string,
    body: DataSecurityFindingsSummaryParams,
    options?: RequestOptions,
  ): APIPromise<unknown> {
    return this._client.post(
      __scalarPath`/accounts/${accountID}/analytics/query/data-security/findings/summary`,
      { body, ...options },
    );
  }

  /**
   * Returns merged time-bucketed CASB findings.
   *
   *
   * @param {string} accountID
   * @param {DataSecurityFindingsTimeseriesParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<unknown>} Findings timeseries result.
   *
   * @example
   * ```ts
   * const response = await client.dataSecurity.findingsTimeseries('accountId', {
   *   filters: [],
   *   from: '2024-11-01T00:00:00Z',
   *   to: '2024-11-08T00:00:00Z',
   * });
   * ```
   */
  findingsTimeseries(
    accountID: string,
    body: DataSecurityFindingsTimeseriesParams,
    options?: RequestOptions,
  ): APIPromise<unknown> {
    return this._client.post(
      __scalarPath`/accounts/${accountID}/analytics/query/data-security/findings/timeseries`,
      { body, ...options },
    );
  }
}

export type DataSecurityContentFindingsTopNParams = unknown;

export type DataSecurityFindingsSummaryParams = unknown;

export type DataSecurityFindingsTimeseriesParams = unknown;
export declare namespace DataSecurity {
  export {
    type DataSecurityContentFindingsTopNParams as DataSecurityContentFindingsTopNParams,
    type DataSecurityFindingsSummaryParams as DataSecurityFindingsSummaryParams,
    type DataSecurityFindingsTimeseriesParams as DataSecurityFindingsTimeseriesParams,
  };
}
