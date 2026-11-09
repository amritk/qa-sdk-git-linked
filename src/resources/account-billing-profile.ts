// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from '../resource';
import { APIPromise } from '../api-promise';
import type { RequestOptions } from '../internal/request-options';
import { buildHeaders } from '../internal/headers';
import { path as __scalarPath } from '../internal/utils/path';

export class AccountBillingProfile extends APIResource {
  /**
   * Deletes the billing profile for an account.
   *
   * @param {string} accountID
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns Delete Billing Profile response
   *
   * @example
   * ```ts
   * await client.accountBillingProfile.delete('accountId');
   * ```
   */
  delete(accountID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(__scalarPath`/accounts/${accountID}/billing/profile`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Gets the current billing profile for the account.
   *
   * @param {string} accountID
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<unknown>} Billing Profile Details response
   *
   * @example
   * ```ts
   * const response = await client.accountBillingProfile.list('accountId');
   * ```
   */
  list(accountID: string, options?: RequestOptions): APIPromise<unknown> {
    return this._client.get(__scalarPath`/accounts/${accountID}/billing/profile`, options);
  }

  /**
   * Updates the billing email addresses and preferred locale for an account.
   *
   * @param {string} accountID
   * @param {AccountBillingProfileUpdateEmailParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<unknown>} Update Billing Email response
   *
   * @example
   * ```ts
   * const response = await client.accountBillingProfile.updateEmail('accountId', {});
   * ```
   */
  updateEmail(
    accountID: string,
    body: AccountBillingProfileUpdateEmailParams,
    options?: RequestOptions,
  ): APIPromise<unknown> {
    return this._client.patch(__scalarPath`/accounts/${accountID}/billing/profile`, { body, ...options });
  }

  /**
   * Creates a billing profile for an account.
   *
   * @param {string} accountID
   * @param {AccountBillingProfileCreateParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<unknown>} Create Billing Profile response
   *
   * @example
   * ```ts
   * const response = await client.accountBillingProfile.create('accountId', {});
   * ```
   */
  create(
    accountID: string,
    body: AccountBillingProfileCreateParams,
    options?: RequestOptions,
  ): APIPromise<unknown> {
    return this._client.post(__scalarPath`/accounts/${accountID}/billing/profile`, { body, ...options });
  }

  /**
   * Updates the billing profile for an account.
   *
   * @param {string} accountID
   * @param {AccountBillingProfileUpdateParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<unknown>} Update Billing Profile response
   *
   * @example
   * ```ts
   * const response = await client.accountBillingProfile.update('accountId', {});
   * ```
   */
  update(
    accountID: string,
    body: AccountBillingProfileUpdateParams,
    options?: RequestOptions,
  ): APIPromise<unknown> {
    return this._client.put(__scalarPath`/accounts/${accountID}/billing/profile`, { body, ...options });
  }
}

export interface AccountBillingProfileUpdateEmailParams {
  billing_email?: string;
  preferred_locale?: string;
  secondary_billing_email?: string;
}

export type AccountBillingProfileCreateParams = unknown;

export type AccountBillingProfileUpdateParams = unknown;
export declare namespace AccountBillingProfile {
  export {
    type AccountBillingProfileUpdateEmailParams as AccountBillingProfileUpdateEmailParams,
    type AccountBillingProfileCreateParams as AccountBillingProfileCreateParams,
    type AccountBillingProfileUpdateParams as AccountBillingProfileUpdateParams,
  };
}
