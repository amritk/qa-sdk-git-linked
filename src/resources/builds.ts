// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from '../resource';
import { APIPromise } from '../api-promise';
import type { RequestOptions } from '../internal/request-options';
import { path as __scalarPath } from '../internal/utils/path';

export class Builds extends APIResource {
  /**
   * Retrieve builds associated with one or more Worker version IDs.
   *
   * @param {string} accountID
   * @param {BuildListVersionParams} query - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<BuildListVersionResponse>} Builds retrieved successfully
   *
   * @example
   * ```ts
   * const build = await client.builds.listVersion('accountId', {
   *   version_ids: {},
   * });
   * ```
   */
  listVersion(
    accountID: string,
    query: BuildListVersionParams,
    options?: RequestOptions,
  ): APIPromise<BuildListVersionResponse> {
    return this._client.get(__scalarPath`/accounts/${accountID}/builds/builds`, { query, ...options });
  }

  /**
   * Retrieve the most recent builds for multiple worker scripts
   *
   * @param {string} accountID
   * @param {BuildListLatestScriptsParams} query - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<BuildListLatestScriptsResponse>} Latest builds retrieved successfully
   *
   * @example
   * ```ts
   * const build = await client.builds.listLatestScripts('accountId', {
   *   external_script_ids: {},
   * });
   * ```
   */
  listLatestScripts(
    accountID: string,
    query: BuildListLatestScriptsParams,
    options?: RequestOptions,
  ): APIPromise<BuildListLatestScriptsResponse> {
    return this._client.get(__scalarPath`/accounts/${accountID}/builds/builds/latest`, { query, ...options });
  }

  /**
   * Retrieve status, outcome, timestamps, trigger settings, and source metadata for a build UUID.
   *
   * @param {string} buildUUID
   * @param {BuildRetrieveParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<BuildRetrieveResponse>} Build retrieved successfully
   *
   * @example
   * ```ts
   * const build = await client.builds.retrieve('buildUuid', {
   *   account_id: 'accountId',
   * });
   * ```
   */
  retrieve(
    buildUUID: string,
    params: BuildRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<BuildRetrieveResponse> {
    const { account_id } = params;
    return this._client.get(__scalarPath`/accounts/${account_id}/builds/builds/${buildUUID}`, options);
  }

  /**
   * Cancel a queued or running build.
   *
   * @param {string} buildUUID
   * @param {BuildCancelByUUIDParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<BuildCancelByUUIDResponse>} Build canceled successfully
   *
   * @example
   * ```ts
   * const build = await client.builds.cancelByUUID('buildUuid', {
   *   account_id: 'accountId',
   * });
   * ```
   */
  cancelByUUID(
    buildUUID: string,
    params: BuildCancelByUUIDParams,
    options?: RequestOptions,
  ): APIPromise<BuildCancelByUUIDResponse> {
    const { account_id } = params;
    return this._client.put(__scalarPath`/accounts/${account_id}/builds/builds/${buildUUID}/cancel`, options);
  }

  /**
   * Retrieve cursor-paginated log lines for a build UUID.
   *
   * @param {string} buildUUID
   * @param {BuildListLogsParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<BuildListLogsResponse>} Build logs retrieved successfully
   *
   * @example
   * ```ts
   * const build = await client.builds.listLogs('buildUuid', {
   *   account_id: 'accountId',
   * });
   * ```
   */
  listLogs(
    buildUUID: string,
    params: BuildListLogsParams,
    options?: RequestOptions,
  ): APIPromise<BuildListLogsResponse> {
    const { account_id, ...query } = params;
    return this._client.get(__scalarPath`/accounts/${account_id}/builds/builds/${buildUUID}/logs`, {
      query,
      ...options,
    });
  }
}

export interface BuildListVersionParams {
  version_ids: unknown;
}

export type BuildListVersionResponse = unknown & BuildListVersionResponse.BuildListVersionResponseItem;

export namespace BuildListVersionResponse {
  export interface BuildListVersionResponseItem {
    result?: unknown;
  }
}

export interface BuildListLatestScriptsParams {
  external_script_ids: unknown;
}

export type BuildListLatestScriptsResponse = unknown &
  BuildListLatestScriptsResponse.BuildListLatestScriptsResponseItem;

export namespace BuildListLatestScriptsResponse {
  export interface BuildListLatestScriptsResponseItem {
    result?: unknown;
  }
}

export interface BuildRetrieveParams {
  account_id: string;
}

export type BuildRetrieveResponse = unknown & BuildRetrieveResponse.BuildRetrieveResponseItem;

export namespace BuildRetrieveResponse {
  export interface BuildRetrieveResponseItem {
    result?: unknown;
  }
}

export interface BuildCancelByUUIDParams {
  account_id: string;
}

export type BuildCancelByUUIDResponse = unknown & BuildCancelByUUIDResponse.BuildCancelByUUIDResponseItem;

export namespace BuildCancelByUUIDResponse {
  export interface BuildCancelByUUIDResponseItem {
    result?: unknown;
  }
}

export interface BuildListLogsParams {
  /**
   * Path param
   */
  account_id: string;
  /**
   * Query param
   */
  cursor?: unknown;
}

export type BuildListLogsResponse = unknown & BuildListLogsResponse.BuildListLogsResponseItem;

export namespace BuildListLogsResponse {
  export interface BuildListLogsResponseItem {
    result?: unknown;
  }
}
export declare namespace Builds {
  export {
    type BuildListVersionResponse as BuildListVersionResponse,
    type BuildListLatestScriptsResponse as BuildListLatestScriptsResponse,
    type BuildRetrieveResponse as BuildRetrieveResponse,
    type BuildCancelByUUIDResponse as BuildCancelByUUIDResponse,
    type BuildListLogsResponse as BuildListLogsResponse,
    type BuildListVersionParams as BuildListVersionParams,
    type BuildListLatestScriptsParams as BuildListLatestScriptsParams,
    type BuildRetrieveParams as BuildRetrieveParams,
    type BuildCancelByUUIDParams as BuildCancelByUUIDParams,
    type BuildListLogsParams as BuildListLogsParams,
  };
}
