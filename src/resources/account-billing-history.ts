// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from '../resource';
import { APIPromise } from '../api-promise';
import type { RequestOptions } from '../internal/request-options';
import { path as __scalarPath } from '../internal/utils/path';

export class AccountBillingHistory extends APIResource {
  /**
   * Gets the billing history for an account.
   *
   * @param {string} accountID
   * @param {AccountBillingHistoryListParams} [query] - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<unknown>} Get Account Billing History response
   *
   * @example
   * ```ts
   * const response = await client.accountBillingHistory.list('accountId', {
   *   page: 1,
   *   per_page: 20,
   * });
   * ```
   */
  list(
    accountID: string,
    query: AccountBillingHistoryListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<unknown> {
    return this._client.get(__scalarPath`/accounts/${accountID}/billing/history`, { query, ...options });
  }
}

export interface AccountBillingHistoryListParams {
  /**
   * Page number of paginated results.
   * @default 1
   * @minimum 1
   */
  page?: number;
  /**
   * Number of items per page.
   * @default 20
   * @minimum 1
   */
  per_page?: number;
  /**
   * Filter billing history by status.
   */
  status?: string;
}
export declare namespace AccountBillingHistory {
  export { type AccountBillingHistoryListParams as AccountBillingHistoryListParams };
}
