// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from '../resource';
import { APIPromise } from '../api-promise';
import type { RequestOptions } from '../internal/request-options';
import { path as __scalarPath } from '../internal/utils/path';

export class AccessKeyConfiguration extends APIResource {
  /**
   * Gets the Access key rotation settings for an account.
   *
   * @param {string} accountID
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<unknown>} Get the Access key configuration response
   *
   * @example
   * ```ts
   * const response = await client.accessKeyConfiguration.listThe('accountId');
   * ```
   */
  listThe(accountID: string, options?: RequestOptions): APIPromise<unknown> {
    return this._client.get(__scalarPath`/accounts/${accountID}/access/keys`, options);
  }

  /**
   * Updates the Access key rotation settings for an account.
   *
   * @param {string} accountID
   * @param {AccessKeyConfigurationUpdateTheParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<unknown>} Update the Access key configuration response
   *
   * @example
   * ```ts
   * const response = await client.accessKeyConfiguration.updateThe('accountId', {
   *   key_rotation_interval_days: {},
   * });
   * ```
   */
  updateThe(
    accountID: string,
    body: AccessKeyConfigurationUpdateTheParams,
    options?: RequestOptions,
  ): APIPromise<unknown> {
    return this._client.put(__scalarPath`/accounts/${accountID}/access/keys`, { body, ...options });
  }

  /**
   * Perfoms a key rotation for an account.
   *
   * @param {string} accountID
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<unknown>} Rotate Access keys response
   *
   * @example
   * ```ts
   * const response = await client.accessKeyConfiguration.rotate('accountId');
   * ```
   */
  rotate(accountID: string, options?: RequestOptions): APIPromise<unknown> {
    return this._client.post(__scalarPath`/accounts/${accountID}/access/keys/rotate`, options);
  }
}

export interface AccessKeyConfigurationUpdateTheParams {
  key_rotation_interval_days: unknown;
}
export declare namespace AccessKeyConfiguration {
  export { type AccessKeyConfigurationUpdateTheParams as AccessKeyConfigurationUpdateTheParams };
}
