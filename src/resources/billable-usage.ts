// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from '../resource';
import { APIPromise } from '../api-promise';
import type { RequestOptions } from '../internal/request-options';
import { path as __scalarPath } from '../internal/utils/path';

export class BillableUsage extends APIResource {
  /**
   * Returns billable usage data for the account.
   * When no query parameters are provided, returns usage for the current
   * billing period.
   *
   *
   * @param {string} accountID
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<unknown>} Indicates account usage data was successfully retrieved.
   *
   * @example
   * ```ts
   * const response = await client.billableUsage.listV1Account('accountId');
   * ```
   */
  listV1Account(accountID: string, options?: RequestOptions): APIPromise<unknown> {
    return this._client.get(__scalarPath`/accounts/${accountID}/billable-usage`, options);
  }

  /**
   * Returns high-level usage information for the account, including coverage,
   * and subscription metadata.
   *
   *
   * @param {string} accountID
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<unknown>} Indicates account usage data was successfully retrieved.
   *
   * @example
   * ```ts
   * const response = await client.billableUsage.listV1AccountInfo('accountId');
   * ```
   */
  listV1AccountInfo(accountID: string, options?: RequestOptions): APIPromise<unknown> {
    return this._client.get(__scalarPath`/accounts/${accountID}/billable-usage/info`, options);
  }
}
