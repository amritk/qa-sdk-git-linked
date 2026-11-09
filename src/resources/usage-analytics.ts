// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from '../resource';
import { APIPromise } from '../api-promise';
import type { RequestOptions } from '../internal/request-options';
import { path as __scalarPath } from '../internal/utils/path';

export class UsageAnalytics extends APIResource {
  /**
   * Retrieve billing usage analytics for an account. Returns time-series data for all billable product metrics including Stream, Media (Images), Rate Limiting, Load Balancing, Argo, Workers, Workers KV, Image Resizing, and Spectrum.
   *
   *
   * @param {string} accountID
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<unknown>} Usage analytics response.
   *
   * @example
   * ```ts
   * const response = await client.usageAnalytics.listAccountBilling('accountId');
   * ```
   */
  listAccountBilling(accountID: string, options?: RequestOptions): APIPromise<unknown> {
    return this._client.get(__scalarPath`/accounts/${accountID}/billing/usage`, options);
  }
}
