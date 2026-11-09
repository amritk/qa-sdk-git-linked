// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from '../resource';
import { APIPromise } from '../api-promise';
import type { RequestOptions } from '../internal/request-options';
import { path as __scalarPath } from '../internal/utils/path';

export class NotificationDestinationsWithPagerDuty extends APIResource {
  /**
   * Deletes all the PagerDuty Services connected to the account.
   *
   * @param {string} accountID
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<unknown>} Delete PagerDuty Services response
   *
   * @example
   * ```ts
   * const response = await client.notificationDestinationsWithPagerDuty.deleteServices('accountId');
   * ```
   */
  deleteServices(accountID: string, options?: RequestOptions): APIPromise<unknown> {
    return this._client.delete(
      __scalarPath`/accounts/${accountID}/alerting/v3/destinations/pagerduty`,
      options,
    );
  }

  /**
   * Get a list of all configured PagerDuty services.
   *
   * @param {string} accountID
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<unknown>} List PagerDuty services response
   *
   * @example
   * ```ts
   * const response = await client.notificationDestinationsWithPagerDuty.listServices('accountId');
   * ```
   */
  listServices(accountID: string, options?: RequestOptions): APIPromise<unknown> {
    return this._client.get(__scalarPath`/accounts/${accountID}/alerting/v3/destinations/pagerduty`, options);
  }

  /**
   * Creates a new token for integrating with PagerDuty.
   *
   * @param {string} accountID
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<unknown>} Token for PagerDuty integration
   *
   * @example
   * ```ts
   * const response = await client.notificationDestinationsWithPagerDuty.connect('accountId');
   * ```
   */
  connect(accountID: string, options?: RequestOptions): APIPromise<unknown> {
    return this._client.post(
      __scalarPath`/accounts/${accountID}/alerting/v3/destinations/pagerduty/connect`,
      options,
    );
  }

  /**
   * Links PagerDuty with the account using the integration token.
   *
   * @param {string} tokenID
   * @param {NotificationDestinationsWithPagerDutyConnectTokenParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<unknown>} Create a Notification policy response
   *
   * @example
   * ```ts
   * const response = await client.notificationDestinationsWithPagerDuty.connectToken('tokenId', {
   *   account_id: {},
   * });
   * ```
   */
  connectToken(
    tokenID: string,
    params: NotificationDestinationsWithPagerDutyConnectTokenParams,
    options?: RequestOptions,
  ): APIPromise<unknown> {
    const { account_id } = params;
    return this._client.get(
      __scalarPath`/accounts/${account_id}/alerting/v3/destinations/pagerduty/connect/${tokenID}`,
      options,
    );
  }
}

export interface NotificationDestinationsWithPagerDutyConnectTokenParams {
  account_id: string;
}
export declare namespace NotificationDestinationsWithPagerDuty {
  export {
    type NotificationDestinationsWithPagerDutyConnectTokenParams as NotificationDestinationsWithPagerDutyConnectTokenParams,
  };
}
