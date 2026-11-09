// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from '../resource';
import { APIPromise } from '../api-promise';
import type { RequestOptions } from '../internal/request-options';
import { path as __scalarPath } from '../internal/utils/path';

export class NotificationSilences extends APIResource {
  /**
   * Gets a list of silences for an account.
   *
   * @param {string} accountID
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<unknown>} List Silences response
   *
   * @example
   * ```ts
   * const response = await client.notificationSilences.list('accountId');
   * ```
   */
  list(accountID: string, options?: RequestOptions): APIPromise<unknown> {
    return this._client.get(__scalarPath`/accounts/${accountID}/alerting/v3/silences`, options);
  }

  /**
   * Creates a new silence for an account.
   *
   * @param {string} accountID
   * @param {NotificationSilenceCreateParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<unknown>} Create Silences response
   *
   * @example
   * ```ts
   * const response = await client.notificationSilences.create('accountId', {
   *   body: [{}],
   * });
   * ```
   */
  create(
    accountID: string,
    params: NotificationSilenceCreateParams,
    options?: RequestOptions,
  ): APIPromise<unknown> {
    const { body } = params;
    return this._client.post(__scalarPath`/accounts/${accountID}/alerting/v3/silences`, { body, ...options });
  }

  /**
   * Updates existing silences for an account.
   *
   * @param {string} accountID
   * @param {NotificationSilenceUpdateParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<unknown>} Update Silences response
   *
   * @example
   * ```ts
   * const response = await client.notificationSilences.update('accountId', {
   *   body: [{}],
   * });
   * ```
   */
  update(
    accountID: string,
    params: NotificationSilenceUpdateParams,
    options?: RequestOptions,
  ): APIPromise<unknown> {
    const { body } = params;
    return this._client.put(__scalarPath`/accounts/${accountID}/alerting/v3/silences`, { body, ...options });
  }

  /**
   * Deletes an existing silence for an account.
   *
   * @param {string} silenceID
   * @param {NotificationSilenceDeleteParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<unknown>} Delete Silence response
   *
   * @example
   * ```ts
   * const response = await client.notificationSilences.delete('silenceId', {
   *   account_id: {},
   * });
   * ```
   */
  delete(
    silenceID: string,
    params: NotificationSilenceDeleteParams,
    options?: RequestOptions,
  ): APIPromise<unknown> {
    const { account_id } = params;
    return this._client.delete(
      __scalarPath`/accounts/${account_id}/alerting/v3/silences/${silenceID}`,
      options,
    );
  }

  /**
   * Gets a specific silence for an account.
   *
   * @param {string} silenceID
   * @param {NotificationSilenceRetrieveParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<unknown>} Get Silence response
   *
   * @example
   * ```ts
   * const response = await client.notificationSilences.retrieve('silenceId', {
   *   account_id: {},
   * });
   * ```
   */
  retrieve(
    silenceID: string,
    params: NotificationSilenceRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<unknown> {
    const { account_id } = params;
    return this._client.get(__scalarPath`/accounts/${account_id}/alerting/v3/silences/${silenceID}`, options);
  }
}

export interface NotificationSilenceCreateParams {
  body: Array<unknown>;
}

export interface NotificationSilenceUpdateParams {
  body: Array<unknown>;
}

export interface NotificationSilenceDeleteParams {
  account_id: string;
}

export interface NotificationSilenceRetrieveParams {
  account_id: string;
}
export declare namespace NotificationSilences {
  export {
    type NotificationSilenceCreateParams as NotificationSilenceCreateParams,
    type NotificationSilenceUpdateParams as NotificationSilenceUpdateParams,
    type NotificationSilenceDeleteParams as NotificationSilenceDeleteParams,
    type NotificationSilenceRetrieveParams as NotificationSilenceRetrieveParams,
  };
}
