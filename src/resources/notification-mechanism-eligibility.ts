// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from '../resource';
import { APIPromise } from '../api-promise';
import type { RequestOptions } from '../internal/request-options';
import { path as __scalarPath } from '../internal/utils/path';

export class NotificationMechanismEligibility extends APIResource {
  /**
   * Get a list of all delivery mechanism types for which an account is eligible.
   *
   * @param {string} accountID
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<unknown>} Get delivery mechanism eligibility response
   *
   * @example
   * ```ts
   * const response = await client.notificationMechanismEligibility.listDelivery('accountId');
   * ```
   */
  listDelivery(accountID: string, options?: RequestOptions): APIPromise<unknown> {
    return this._client.get(__scalarPath`/accounts/${accountID}/alerting/v3/destinations/eligible`, options);
  }
}
