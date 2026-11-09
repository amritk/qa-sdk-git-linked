// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from '../resource';
import { APIPromise } from '../api-promise';
import type { RequestOptions } from '../internal/request-options';
import { path as __scalarPath } from '../internal/utils/path';

export class AccountBilling extends APIResource {
  /**
   * Gets bad debt information for an account, including outstanding invoices and total debt amount.
   *
   * @param {string} accountID
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<unknown>} Get Account Bad Debt response
   *
   * @example
   * ```ts
   * const response = await client.accountBilling.listBadDebt('accountId');
   * ```
   */
  listBadDebt(accountID: string, options?: RequestOptions): APIPromise<unknown> {
    return this._client.get(__scalarPath`/accounts/${accountID}/billing/bad-debt`, options);
  }

  /**
   * Gets the credit balance and eligibility for an account.
   *
   * @param {string} accountID
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<unknown>} Get Account Credits response
   *
   * @example
   * ```ts
   * const response = await client.accountBilling.listCredits('accountId');
   * ```
   */
  listCredits(accountID: string, options?: RequestOptions): APIPromise<unknown> {
    return this._client.get(__scalarPath`/accounts/${accountID}/billing/credits`, options);
  }

  /**
   * Creates a Stripe payment intent for adding or updating a payment method on the account's billing profile. Returns a client secret for frontend payment method collection.
   *
   * @param {string} accountID
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<unknown>} Create Payment Intent response
   *
   * @example
   * ```ts
   * const response = await client.accountBilling.createPaymentIntent('accountId');
   * ```
   */
  createPaymentIntent(accountID: string, options?: RequestOptions): APIPromise<unknown> {
    return this._client.post(__scalarPath`/accounts/${accountID}/billing/profile/payment-method`, options);
  }

  /**
   * Gets unpaid invoice information for an account.
   *
   * @param {string} accountID
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<unknown>} Get Unpaid Invoices response
   *
   * @example
   * ```ts
   * const response = await client.accountBilling.listUnpaidInvoices('accountId');
   * ```
   */
  listUnpaidInvoices(accountID: string, options?: RequestOptions): APIPromise<unknown> {
    return this._client.get(__scalarPath`/accounts/${accountID}/billing/unpaid-invoice`, options);
  }

  /**
   * Creates a Stripe setup intent for adding a payment method to an account. Returns a client secret for frontend payment method collection.
   *
   * @param {string} accountID
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<unknown>} Create Setup Intent response
   *
   * @example
   * ```ts
   * const response = await client.accountBilling.createSetupIntent('accountId');
   * ```
   */
  createSetupIntent(accountID: string, options?: RequestOptions): APIPromise<unknown> {
    return this._client.post(__scalarPath`/accounts/${accountID}/client-secret`, options);
  }
}
