// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from '../resource';
import { APIPromise } from '../api-promise';
import type { RequestOptions } from '../internal/request-options';
import { path as __scalarPath } from '../internal/utils/path';

export class AccessJitRequestLogs extends APIResource {
  /**
   * Lists account-wide Access JIT request logs reconstructed from request lifecycle events.
   *
   * @param {string} accountID
   * @param {AccessJitRequestLogListParams} [query] - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<unknown>} Access JIT request logs response
   *
   * @example
   * ```ts
   * const response = await client.accessJitRequestLogs.list('accountId', {
   *   per_page: 25,
   * });
   * ```
   */
  list(
    accountID: string,
    query: AccessJitRequestLogListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<unknown> {
    return this._client.get(__scalarPath`/accounts/${accountID}/access/logs/jit_requests`, {
      query,
      ...options,
    });
  }

  /**
   * Gets an account-scoped Access JIT request summary and its lifecycle events in chronological order.
   *
   * @param {string} knockRequestID
   * @param {AccessJitRequestLogRetrieveParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<unknown>} Access JIT request log detail response
   *
   * @example
   * ```ts
   * const response = await client.accessJitRequestLogs.retrieve('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
   *   account_id: {},
   * });
   * ```
   */
  retrieve(
    knockRequestID: string,
    params: AccessJitRequestLogRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<unknown> {
    const { account_id } = params;
    return this._client.get(
      __scalarPath`/accounts/${account_id}/access/logs/jit_requests/${knockRequestID}`,
      options,
    );
  }
}

export interface AccessJitRequestLogListParams {
  /**
   * Number of results per page.
   * @default 25
   * @maximum 1000
   */
  per_page?: number;
  status?: unknown;
  /**
   * Case-insensitive search over request ID, requester email, application audience, and application hostname.
   */
  search?: string;
  /**
   * The earliest request timestamp to query. Defaults to 366 days before the current time.
   * @format date-time
   */
  since?: string;
  /**
   * The latest request timestamp to query. Defaults to the current time.
   * @format date-time
   */
  until?: string;
}

export interface AccessJitRequestLogRetrieveParams {
  account_id: string;
}
export declare namespace AccessJitRequestLogs {
  export {
    type AccessJitRequestLogListParams as AccessJitRequestLogListParams,
    type AccessJitRequestLogRetrieveParams as AccessJitRequestLogRetrieveParams,
  };
}
