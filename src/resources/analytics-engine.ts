// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from '../resource';
import { APIPromise } from '../api-promise';
import type { RequestOptions } from '../internal/request-options';
import { buildHeaders } from '../internal/headers';
import { path as __scalarPath } from '../internal/utils/path';

export class AnalyticsEngine extends APIResource {
  /**
   * Executes a SQL query against Workers Analytics Engine data. Pass the SQL query as a query parameter. The response uses newline-delimited JSON (NDJSON) by default, or a single JSON object when the query includes a FORMAT JSON clause. Use the POST method for longer queries that may exceed URL length limits.
   *
   * @param {string} accountID
   * @param {AnalyticsEngineSQLQueryGetParams} query - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   *
   * @example
   * ```ts
   * await client.analyticsEngine.sqlQueryGet('accountId', {
   *   query:
   *     "SELECT blob1, count() FROM my_dataset WHERE timestamp > NOW() - INTERVAL '1' DAY GROUP BY blob1 ORDER BY count() DESC LIMIT 10",
   * });
   * ```
   */
  sqlQueryGet(
    accountID: string,
    query: AnalyticsEngineSQLQueryGetParams,
    options?: RequestOptions,
  ): APIPromise<void> {
    return this._client.get(__scalarPath`/accounts/${accountID}/analytics_engine/sql`, {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Executes a SQL query against Workers Analytics Engine data. Pass the SQL query in the request body as plain text. The response uses newline-delimited JSON (NDJSON) by default, or a single JSON object when the query includes a FORMAT JSON clause. Prefer this method for longer queries that may exceed URL length limits.
   *
   * @param {string} accountID
   * @param {AnalyticsEngineSQLQueryPostParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   *
   * @example
   * ```ts
   * await client.analyticsEngine.sqlQueryPost('accountId', {
   *   body: 'body',
   * });
   * ```
   */
  sqlQueryPost(
    accountID: string,
    params: AnalyticsEngineSQLQueryPostParams,
    options?: RequestOptions,
  ): APIPromise<void> {
    const { '': value, body } = params;
    return this._client.post(__scalarPath`/accounts/${accountID}/analytics_engine/sql`, {
      body,
      query: { '': value },
      ...options,
      headers: buildHeaders([{ 'Content-Type': 'text/plain', Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface AnalyticsEngineSQLQueryGetParams {
  ''?: string;
  /**
   * Supply a SQL query to run against your Analytics Engine datasets. Use only SELECT statements. The service validates the query against a restricted SQL grammar before execution.
   */
  query: string;
}

export interface AnalyticsEngineSQLQueryPostParams {
  /**
   * Query param
   */
  ''?: string;
  /**
   * Body param
   */
  body: string;
}
export declare namespace AnalyticsEngine {
  export {
    type AnalyticsEngineSQLQueryGetParams as AnalyticsEngineSQLQueryGetParams,
    type AnalyticsEngineSQLQueryPostParams as AnalyticsEngineSQLQueryPostParams,
  };
}
