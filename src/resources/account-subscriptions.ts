// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from '../resource';
import { APIPromise } from '../api-promise';
import type { RequestOptions } from '../internal/request-options';
import { path as __scalarPath } from '../internal/utils/path';

export class AccountSubscriptions extends APIResource {
  /**
   * Creates multiple subscriptions for an account in a single request.
   *
   * @param {string} accountID
   * @param {AccountSubscriptionBulkCreateParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<unknown>} Create Subscriptions response
   *
   * @example
   * ```ts
   * const response = await client.accountSubscriptions.bulkCreate('accountId', {});
   * ```
   */
  bulkCreate(
    accountID: string,
    params: AccountSubscriptionBulkCreateParams,
    options?: RequestOptions,
  ): APIPromise<unknown> {
    const { idemp_key, ...body } = params;
    return this._client.post(__scalarPath`/accounts/${accountID}/bulk/subscriptions`, {
      body,
      query: { idemp_key },
      ...options,
    });
  }
}

export interface AccountSubscriptionBulkCreateParams {
  /**
   * Query param
   */
  idemp_key?: string;
  /**
   * Body param
   */
  coupon_code?: string;
  /**
   * Body param
   * @format int64
   */
  payment_hold_id?: number;
  /**
   * Body param
   */
  subscriptions?: Array<unknown>;
  /**
   * Body param
   */
  user_is_on_session?: boolean;
}
export declare namespace AccountSubscriptions {
  export { type AccountSubscriptionBulkCreateParams as AccountSubscriptionBulkCreateParams };
}
