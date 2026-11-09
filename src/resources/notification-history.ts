// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from '../resource';
import { APIPromise } from '../api-promise';
import type { RequestOptions } from '../internal/request-options';
import { path as __scalarPath } from '../internal/utils/path';

export class NotificationHistory extends APIResource {
  /**
   * Gets a list of history records for notifications sent to an account. The records are displayed for last `x` number of days based on the zone plan (free = 30, pro = 30, biz = 30, ent = 90).
   *
   * @param {string} accountID
   * @param {NotificationHistoryListParams} [query] - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<unknown>} List History response
   *
   * @example
   * ```ts
   * const response = await client.notificationHistory.list('accountId', {
   *   page: 1,
   * });
   * ```
   */
  list(
    accountID: string,
    query: NotificationHistoryListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<unknown> {
    return this._client.get(__scalarPath`/accounts/${accountID}/alerting/v3/history`, { query, ...options });
  }
}

export interface NotificationHistoryListParams {
  per_page?: unknown;
  before?: unknown;
  /**
   * Page number of paginated results.
   * @default 1
   * @minimum 1
   */
  page?: number;
  /**
   * Limit the returned results to history records newer than the specified date. This must be a timestamp that conforms to RFC3339.
   * @format date-time
   */
  since?: string;
}
export declare namespace NotificationHistory {
  export { type NotificationHistoryListParams as NotificationHistoryListParams };
}
