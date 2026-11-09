// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from '../resource';
import { APIPromise } from '../api-promise';
import type { RequestOptions } from '../internal/request-options';
import { path as __scalarPath } from '../internal/utils/path';

export class McpPortalAnalytics extends APIResource {
  /**
   * Returns daily or monthly tool-call counts for a portal.
   *
   * @param {string} portalID
   * @param {McpPortalAnalyticAPIToolCallTimeseriesParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<McpPortalAnalyticAPIToolCallTimeseriesResponse>} Per-day tool/call counts across all servers in a portal over the selected window
   *
   * @example
   * ```ts
   * const mcpPortalAnalytic = await client.mcpPortalAnalytics.apiToolCallTimeseries('portalId', {
   *   account_id: 'a86a8f5c339544d7bdc89926de14fb8c',
   *   granularity: 'daily',
   *   aggregate: 'false',
   *   tz: 'utc',
   * });
   * ```
   */
  apiToolCallTimeseries(
    portalID: string,
    params: McpPortalAnalyticAPIToolCallTimeseriesParams,
    options?: RequestOptions,
  ): APIPromise<McpPortalAnalyticAPIToolCallTimeseriesResponse> {
    const { account_id, ...query } = params;
    return this._client.get(
      __scalarPath`/accounts/${account_id}/access/ai-controls/mcp/analytics/portals/${portalID}/tool-calls/timeseries`,
      { query, ...options },
    );
  }

  /**
   * Returns daily or monthly tool-call counts for a server.
   *
   * @param {string} serverID
   * @param {McpPortalAnalyticAPIServerToolCallTimeseriesParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<McpPortalAnalyticAPIServerToolCallTimeseriesResponse>} Per-day tool/call counts for a single server over the selected window
   *
   * @example
   * ```ts
   * const mcpPortalAnalytic = await client.mcpPortalAnalytics.apiServerToolCallTimeseries('serverId', {
   *   account_id: 'a86a8f5c339544d7bdc89926de14fb8c',
   *   granularity: 'daily',
   *   aggregate: 'false',
   *   tz: 'utc',
   * });
   * ```
   */
  apiServerToolCallTimeseries(
    serverID: string,
    params: McpPortalAnalyticAPIServerToolCallTimeseriesParams,
    options?: RequestOptions,
  ): APIPromise<McpPortalAnalyticAPIServerToolCallTimeseriesResponse> {
    const { account_id, ...query } = params;
    return this._client.get(
      __scalarPath`/accounts/${account_id}/access/ai-controls/mcp/analytics/servers/${serverID}/tool-calls/timeseries`,
      { query, ...options },
    );
  }

  /**
   * Returns daily or monthly tool-call counts across the account.
   *
   * @param {string} accountID
   * @param {McpPortalAnalyticAPIAccountToolCallTimeseriesParams} [query] - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<McpPortalAnalyticAPIAccountToolCallTimeseriesResponse>} Per-day tool/call counts across the whole account over the selected window
   *
   * @example
   * ```ts
   * const mcpPortalAnalytic = await client.mcpPortalAnalytics.apiAccountToolCallTimeseries(
   *   'a86a8f5c339544d7bdc89926de14fb8c',
   *   {
   *     granularity: 'daily',
   *     aggregate: 'false',
   *     tz: 'utc',
   *   },
   * );
   * ```
   */
  apiAccountToolCallTimeseries(
    accountID: string,
    query: McpPortalAnalyticAPIAccountToolCallTimeseriesParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<McpPortalAnalyticAPIAccountToolCallTimeseriesResponse> {
    return this._client.get(
      __scalarPath`/accounts/${accountID}/access/ai-controls/mcp/analytics/tool-calls/timeseries`,
      { query, ...options },
    );
  }
}

export interface McpPortalAnalyticAPIToolCallTimeseriesParams {
  /**
   * Path param
   */
  account_id: string;
  /**
   * Query param
   * @default daily
   */
  granularity?: 'daily' | 'monthly';
  /**
   * Query param
   * @default false
   */
  aggregate?: 'true' | 'false';
  /**
   * Query param
   * @default utc
   * @pattern ^(utc|Z|\+(?:(?:0\d|1[0-3]):[0-5]\d|14:00)|-(?:(?:0\d|1[01]):[0-5]\d|12:00))$
   */
  tz?: string;
  /**
   * Query param: Daily trailing-window size; defaults to 7 and is ignored for monthly
   * @minimum 1
   * @maximum 179
   */
  days?: number;
}

export interface McpPortalAnalyticAPIToolCallTimeseriesResponse {
  result: McpPortalAnalyticAPIToolCallTimeseriesResponse.Result;
  success: boolean;
}

export namespace McpPortalAnalyticAPIToolCallTimeseriesResponse {
  export interface Result {
    aggregate: boolean;
    end: number;
    granularity: 'daily' | 'monthly';
    series: Array<Result.Series>;
    start: number;
    total: number;
    /**
     * @pattern ^(utc|Z|\+(?:(?:0\d|1[0-3]):[0-5]\d|14:00)|-(?:(?:0\d|1[01]):[0-5]\d|12:00))$
     */
    tz: string;
  }

  export namespace Result {
    export interface Series {
      count: number;
      day: string;
    }
  }
}

export interface McpPortalAnalyticAPIServerToolCallTimeseriesParams {
  /**
   * Path param
   */
  account_id: string;
  /**
   * Query param
   * @default daily
   */
  granularity?: 'daily' | 'monthly';
  /**
   * Query param
   * @default false
   */
  aggregate?: 'true' | 'false';
  /**
   * Query param
   * @default utc
   * @pattern ^(utc|Z|\+(?:(?:0\d|1[0-3]):[0-5]\d|14:00)|-(?:(?:0\d|1[01]):[0-5]\d|12:00))$
   */
  tz?: string;
  /**
   * Query param: Daily trailing-window size; defaults to 7 and is ignored for monthly
   * @minimum 1
   * @maximum 179
   */
  days?: number;
}

export interface McpPortalAnalyticAPIServerToolCallTimeseriesResponse {
  result: McpPortalAnalyticAPIServerToolCallTimeseriesResponse.Result;
  success: boolean;
}

export namespace McpPortalAnalyticAPIServerToolCallTimeseriesResponse {
  export interface Result {
    aggregate: boolean;
    end: number;
    granularity: 'daily' | 'monthly';
    series: Array<Result.Series>;
    start: number;
    total: number;
    /**
     * @pattern ^(utc|Z|\+(?:(?:0\d|1[0-3]):[0-5]\d|14:00)|-(?:(?:0\d|1[01]):[0-5]\d|12:00))$
     */
    tz: string;
  }

  export namespace Result {
    export interface Series {
      count: number;
      day: string;
    }
  }
}

export interface McpPortalAnalyticAPIAccountToolCallTimeseriesParams {
  /**
   * @default daily
   */
  granularity?: 'daily' | 'monthly';
  /**
   * @default false
   */
  aggregate?: 'true' | 'false';
  /**
   * @default utc
   * @pattern ^(utc|Z|\+(?:(?:0\d|1[0-3]):[0-5]\d|14:00)|-(?:(?:0\d|1[01]):[0-5]\d|12:00))$
   */
  tz?: string;
  /**
   * Daily trailing-window size; defaults to 7 and is ignored for monthly
   * @minimum 1
   * @maximum 179
   */
  days?: number;
}

export interface McpPortalAnalyticAPIAccountToolCallTimeseriesResponse {
  result: McpPortalAnalyticAPIAccountToolCallTimeseriesResponse.Result;
  success: boolean;
}

export namespace McpPortalAnalyticAPIAccountToolCallTimeseriesResponse {
  export interface Result {
    aggregate: boolean;
    end: number;
    granularity: 'daily' | 'monthly';
    series: Array<Result.Series>;
    start: number;
    total: number;
    /**
     * @pattern ^(utc|Z|\+(?:(?:0\d|1[0-3]):[0-5]\d|14:00)|-(?:(?:0\d|1[01]):[0-5]\d|12:00))$
     */
    tz: string;
  }

  export namespace Result {
    export interface Series {
      count: number;
      day: string;
    }
  }
}
export declare namespace McpPortalAnalytics {
  export {
    type McpPortalAnalyticAPIToolCallTimeseriesResponse as McpPortalAnalyticAPIToolCallTimeseriesResponse,
    type McpPortalAnalyticAPIServerToolCallTimeseriesResponse as McpPortalAnalyticAPIServerToolCallTimeseriesResponse,
    type McpPortalAnalyticAPIAccountToolCallTimeseriesResponse as McpPortalAnalyticAPIAccountToolCallTimeseriesResponse,
    type McpPortalAnalyticAPIToolCallTimeseriesParams as McpPortalAnalyticAPIToolCallTimeseriesParams,
    type McpPortalAnalyticAPIServerToolCallTimeseriesParams as McpPortalAnalyticAPIServerToolCallTimeseriesParams,
    type McpPortalAnalyticAPIAccountToolCallTimeseriesParams as McpPortalAnalyticAPIAccountToolCallTimeseriesParams,
  };
}
