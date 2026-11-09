// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from '../resource';
import { APIPromise } from '../api-promise';
import type { RequestOptions } from '../internal/request-options';
import { path as __scalarPath } from '../internal/utils/path';

export class AIGateway extends APIResource {
  /**
   * Retrieve the current credit balance, payment method info, and top-up configuration.
   *
   * @param {string} accountID - Cloudflare account ID.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<unknown>} Credit balance retrieved.
   *
   * @example
   * ```ts
   * const response = await client.aiGateway.aigBillingGetCreditBalance('accountId');
   * ```
   */
  aigBillingGetCreditBalance(accountID: string, options?: RequestOptions): APIPromise<unknown> {
    return this._client.get(__scalarPath`/accounts/${accountID}/ai-gateway/billing/credit-balance`, options);
  }

  /**
   * Retrieve a list of past invoices with pagination, optionally filtered by type.
   *
   * @param {string} accountID - Cloudflare account ID.
   * @param {AIGatewayAigBillingGetInvoiceHistoryParams} [query] - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<unknown>} Invoice history retrieved.
   *
   * @example
   * ```ts
   * const response = await client.aiGateway.aigBillingGetInvoiceHistory('accountId', {
   *   type: 'all',
   * });
   * ```
   */
  aigBillingGetInvoiceHistory(
    accountID: string,
    query: AIGatewayAigBillingGetInvoiceHistoryParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<unknown> {
    return this._client.get(__scalarPath`/accounts/${accountID}/ai-gateway/billing/invoice-history`, {
      query,
      ...options,
    });
  }

  /**
   * Retrieve a preview of the upcoming invoice including line items and tax.
   *
   * @param {string} accountID - Cloudflare account ID.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<unknown>} Invoice preview retrieved.
   *
   * @example
   * ```ts
   * const response = await client.aiGateway.aigBillingGetInvoicePreview('accountId');
   * ```
   */
  aigBillingGetInvoicePreview(accountID: string, options?: RequestOptions): APIPromise<unknown> {
    return this._client.get(__scalarPath`/accounts/${accountID}/ai-gateway/billing/invoice-preview`, options);
  }

  /**
   * Remove the spending limit for the account.
   *
   * @param {string} accountID - Cloudflare account ID.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<unknown>} Spending limit deleted.
   *
   * @example
   * ```ts
   * const response = await client.aiGateway.aigBillingDeleteSpendingLimit('accountId');
   * ```
   */
  aigBillingDeleteSpendingLimit(accountID: string, options?: RequestOptions): APIPromise<unknown> {
    return this._client.delete(
      __scalarPath`/accounts/${accountID}/ai-gateway/billing/spending-limit`,
      options,
    );
  }

  /**
   * Retrieve the current spending limit configuration for the account.
   *
   * @param {string} accountID - Cloudflare account ID.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<unknown>} Spending limit configuration retrieved.
   *
   * @example
   * ```ts
   * const response = await client.aiGateway.aigBillingGetSpendingLimit('accountId');
   * ```
   */
  aigBillingGetSpendingLimit(accountID: string, options?: RequestOptions): APIPromise<unknown> {
    return this._client.get(__scalarPath`/accounts/${accountID}/ai-gateway/billing/spending-limit`, options);
  }

  /**
   * Deprecated: spending limits can no longer be created, enabled, or modified and this endpoint always responds 403. Use the new AI Gateway spend limits instead: https://developers.cloudflare.com/ai-gateway/features/spend-limits/. Existing limits can be removed via DELETE /spending-limit.
   *
   * @param {string} accountID - Cloudflare account ID.
   * @param {AIGatewayAigBillingSetSpendingLimitParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<unknown>} Spending limit created.
   *
   * @example
   * ```ts
   * const response = await client.aiGateway.aigBillingSetSpendingLimit('accountId', {
   *   amount: 10000,
   *   duration: 'monthly',
   *   strategy: 'fixed',
   * });
   * ```
   *
   * @deprecated
   */
  aigBillingSetSpendingLimit(
    accountID: string,
    body: AIGatewayAigBillingSetSpendingLimitParams,
    options?: RequestOptions,
  ): APIPromise<unknown> {
    return this._client.post(__scalarPath`/accounts/${accountID}/ai-gateway/billing/spending-limit`, {
      body,
      ...options,
    });
  }

  /**
   * Create a credit top-up for the given account, charged to the account's default payment method.
   *
   * @param {string} accountID - Cloudflare account ID.
   * @param {AIGatewayAigBillingCreateTopupParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<unknown>} Top-up initiated successfully.
   *
   * @example
   * ```ts
   * const response = await client.aiGateway.aigBillingCreateTopup('accountId', {
   *   amount: 5000,
   * });
   * ```
   */
  aigBillingCreateTopup(
    accountID: string,
    body: AIGatewayAigBillingCreateTopupParams,
    options?: RequestOptions,
  ): APIPromise<unknown> {
    return this._client.post(__scalarPath`/accounts/${accountID}/ai-gateway/billing/topup`, {
      body,
      ...options,
    });
  }

  /**
   * Remove the auto top-up configuration for the account.
   *
   * @param {string} accountID - Cloudflare account ID.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<unknown>} Auto top-up configuration deleted.
   *
   * @example
   * ```ts
   * const response = await client.aiGateway.aigBillingDeleteTopupConfig('accountId');
   * ```
   */
  aigBillingDeleteTopupConfig(accountID: string, options?: RequestOptions): APIPromise<unknown> {
    return this._client.delete(__scalarPath`/accounts/${accountID}/ai-gateway/billing/topup/config`, options);
  }

  /**
   * Retrieve the current auto top-up threshold, amount, and any error state.
   *
   * @param {string} accountID - Cloudflare account ID.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<unknown>} Auto top-up configuration retrieved.
   *
   * @example
   * ```ts
   * const response = await client.aiGateway.aigBillingGetTopupConfig('accountId');
   * ```
   */
  aigBillingGetTopupConfig(accountID: string, options?: RequestOptions): APIPromise<unknown> {
    return this._client.get(__scalarPath`/accounts/${accountID}/ai-gateway/billing/topup/config`, options);
  }

  /**
   * Configure auto top-up with a balance threshold and top-up amount.
   *
   * @param {string} accountID - Cloudflare account ID.
   * @param {AIGatewayAigBillingSetTopupConfigParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<unknown>} Auto top-up configuration saved.
   *
   * @example
   * ```ts
   * const response = await client.aiGateway.aigBillingSetTopupConfig('accountId', {
   *   amount: 5000,
   *   threshold: 500,
   * });
   * ```
   */
  aigBillingSetTopupConfig(
    accountID: string,
    body: AIGatewayAigBillingSetTopupConfigParams,
    options?: RequestOptions,
  ): APIPromise<unknown> {
    return this._client.post(__scalarPath`/accounts/${accountID}/ai-gateway/billing/topup/config`, {
      body,
      ...options,
    });
  }

  /**
   * Determine whether an account can self-serve a credit top-up, and if not, why. The dashboard forwards the account's payment-method list in the body; the reason logic is owned here.
   *
   * @param {string} accountID - Cloudflare account ID.
   * @param {AIGatewayAigBillingTopupEligibilityParams} [body] - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<unknown>} Eligibility determined.
   *
   * @example
   * ```ts
   * const response = await client.aiGateway.aigBillingTopupEligibility('accountId');
   * ```
   */
  aigBillingTopupEligibility(
    accountID: string,
    body: AIGatewayAigBillingTopupEligibilityParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<unknown> {
    return this._client.post(__scalarPath`/accounts/${accountID}/ai-gateway/billing/topup/eligibility`, {
      body,
      ...options,
    });
  }

  /**
   * Retrieve the minimum and maximum allowed top-up amounts (in cents) for this account.
   *
   * @param {string} accountID - Cloudflare account ID.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<unknown>} Top-up limits retrieved.
   *
   * @example
   * ```ts
   * const response = await client.aiGateway.aigBillingGetTopupLimits('accountId');
   * ```
   */
  aigBillingGetTopupLimits(accountID: string, options?: RequestOptions): APIPromise<unknown> {
    return this._client.get(__scalarPath`/accounts/${accountID}/ai-gateway/billing/topup/limits`, options);
  }

  /**
   * Get the payment processing status of a top-up by its invoice ID.
   *
   * @param {string} accountID - Cloudflare account ID.
   * @param {AIGatewayAigBillingCheckTopupStatusParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<unknown>} Top-up status retrieved.
   *
   * @example
   * ```ts
   * const response = await client.aiGateway.aigBillingCheckTopupStatus('accountId', {
   *   payment_intent_id: 'in_1abc',
   * });
   * ```
   */
  aigBillingCheckTopupStatus(
    accountID: string,
    body: AIGatewayAigBillingCheckTopupStatusParams,
    options?: RequestOptions,
  ): APIPromise<unknown> {
    return this._client.post(__scalarPath`/accounts/${accountID}/ai-gateway/billing/topup/status`, {
      body,
      ...options,
    });
  }

  /**
   * Retrieve aggregated usage meter event summaries for the given time range.
   *
   * @param {string} accountID - Cloudflare account ID.
   * @param {AIGatewayAigBillingGetUsageHistoryParams} query - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<unknown>} Usage history retrieved.
   *
   * @example
   * ```ts
   * const response = await client.aiGateway.aigBillingGetUsageHistory('accountId', {
   *   value_grouping_window: 'day',
   * });
   * ```
   */
  aigBillingGetUsageHistory(
    accountID: string,
    query: AIGatewayAigBillingGetUsageHistoryParams,
    options?: RequestOptions,
  ): APIPromise<unknown> {
    return this._client.get(__scalarPath`/accounts/${accountID}/ai-gateway/billing/usage-history`, {
      query,
      ...options,
    });
  }
}

export interface AIGatewayAigBillingGetInvoiceHistoryParams {
  /**
   * Filter invoice type: auto, manual, or all.
   * @default all
   */
  type?: 'auto' | 'all' | 'manual';
}

export interface AIGatewayAigBillingSetSpendingLimitParams {
  /**
   * Spending limit amount in cents (min 100).
   * @minimum 100
   */
  amount: number;
  /**
   * Spending limit duration.
   */
  duration: 'daily' | 'weekly' | 'monthly';
  /**
   * Spending limit strategy.
   */
  strategy: 'fixed' | 'sliding';
}

export interface AIGatewayAigBillingCreateTopupParams {
  /**
   * Top-up amount in cents (min 1000).
   * @minimum 1000
   */
  amount: number;
}

export interface AIGatewayAigBillingSetTopupConfigParams {
  /**
   * Auto top-up amount in cents (min 1000).
   * @minimum 1000
   */
  amount: number;
  /**
   * Balance threshold in cents that triggers auto top-up (min 500).
   * @minimum 500
   */
  threshold: number;
}

export interface AIGatewayAigBillingTopupEligibilityParams {
  /**
   * Account-level payment methods, forwarded by the dashboard.
   * @maxItems 100
   */
  payment_methods?: Array<AIGatewayAigBillingTopupEligibilityParams.PaymentMethod>;
}

export namespace AIGatewayAigBillingTopupEligibilityParams {
  export interface PaymentMethod {
    /**
     * Whether this is the account default payment method.
     */
    default?: boolean;
    /**
     * Last 4 digits, for display copy only.
     */
    last_four?: string;
    /**
     * Payment-method type. Absent or unrecognized is treated as non-card (does not error). Known values: PAYPAL, CREDIT_CARD, APPLE_PAY, GOOGLE_PAY, ACH_DIRECT_DEBIT, SEPA_DEBIT, CASHAPP, LINK, CRYPTO.
     */
    type?: string;
  }
}

export interface AIGatewayAigBillingCheckTopupStatusParams {
  /**
   * Stripe invoice ID to check status for.
   */
  payment_intent_id: string;
}

export interface AIGatewayAigBillingGetUsageHistoryParams {
  /**
   * Grouping window for usage data.
   */
  value_grouping_window: 'day' | 'hour';
  /**
   * Start time as Unix timestamp in milliseconds.
   */
  start_time?: number | null;
  /**
   * End time as Unix timestamp in milliseconds.
   */
  end_time?: number | null;
}
export declare namespace AIGateway {
  export {
    type AIGatewayAigBillingGetInvoiceHistoryParams as AIGatewayAigBillingGetInvoiceHistoryParams,
    type AIGatewayAigBillingSetSpendingLimitParams as AIGatewayAigBillingSetSpendingLimitParams,
    type AIGatewayAigBillingCreateTopupParams as AIGatewayAigBillingCreateTopupParams,
    type AIGatewayAigBillingSetTopupConfigParams as AIGatewayAigBillingSetTopupConfigParams,
    type AIGatewayAigBillingTopupEligibilityParams as AIGatewayAigBillingTopupEligibilityParams,
    type AIGatewayAigBillingCheckTopupStatusParams as AIGatewayAigBillingCheckTopupStatusParams,
    type AIGatewayAigBillingGetUsageHistoryParams as AIGatewayAigBillingGetUsageHistoryParams,
  };
}
