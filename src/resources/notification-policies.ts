// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from '../resource';
import { APIPromise } from '../api-promise';
import type { RequestOptions } from '../internal/request-options';
import { path as __scalarPath } from '../internal/utils/path';

export class NotificationPolicies extends APIResource {
  /**
   * Get a list of all Notification policies.
   *
   * @param {string} accountID
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<unknown>} List Notification policies response
   *
   * @example
   * ```ts
   * const response = await client.notificationPolicies.list('accountId');
   * ```
   */
  list(accountID: string, options?: RequestOptions): APIPromise<unknown> {
    return this._client.get(__scalarPath`/accounts/${accountID}/alerting/v3/policies`, options);
  }

  /**
   * Creates a new Notification policy.
   *
   * @param {string} accountID
   * @param {NotificationPolicyCreateAParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<unknown>} Create a Notification policy response
   *
   * @example
   * ```ts
   * const response = await client.notificationPolicies.createA('accountId', {
   *   alert_type: {},
   *   enabled: {},
   *   mechanisms: {},
   *   name: {},
   * });
   * ```
   */
  createA(
    accountID: string,
    body: NotificationPolicyCreateAParams,
    options?: RequestOptions,
  ): APIPromise<unknown> {
    return this._client.post(__scalarPath`/accounts/${accountID}/alerting/v3/policies`, { body, ...options });
  }

  /**
   * Delete a Notification policy.
   *
   * @param {string} policyID
   * @param {NotificationPolicyDeleteAParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<unknown>} Delete a Notification policy response
   *
   * @example
   * ```ts
   * const response = await client.notificationPolicies.deleteA('policyId', {
   *   account_id: {},
   * });
   * ```
   */
  deleteA(
    policyID: string,
    params: NotificationPolicyDeleteAParams,
    options?: RequestOptions,
  ): APIPromise<unknown> {
    const { account_id } = params;
    return this._client.delete(
      __scalarPath`/accounts/${account_id}/alerting/v3/policies/${policyID}`,
      options,
    );
  }

  /**
   * Get details for a single policy.
   *
   * @param {string} policyID
   * @param {NotificationPolicyRetrieveAParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<unknown>} Get a Notification policy response
   *
   * @example
   * ```ts
   * const response = await client.notificationPolicies.retrieveA('policyId', {
   *   account_id: {},
   * });
   * ```
   */
  retrieveA(
    policyID: string,
    params: NotificationPolicyRetrieveAParams,
    options?: RequestOptions,
  ): APIPromise<unknown> {
    const { account_id } = params;
    return this._client.get(__scalarPath`/accounts/${account_id}/alerting/v3/policies/${policyID}`, options);
  }

  /**
   * Update a Notification policy.
   *
   * @param {string} policyID
   * @param {NotificationPolicyUpdateAParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<unknown>} Update a Notification policy response
   *
   * @example
   * ```ts
   * const response = await client.notificationPolicies.updateA('policyId', {
   *   account_id: {},
   * });
   * ```
   */
  updateA(
    policyID: string,
    params: NotificationPolicyUpdateAParams,
    options?: RequestOptions,
  ): APIPromise<unknown> {
    const { account_id, ...body } = params;
    return this._client.put(__scalarPath`/accounts/${account_id}/alerting/v3/policies/${policyID}`, {
      body,
      ...options,
    });
  }

  /**
   * Shows details for unsubscribing an email address from a notification policy.
   *
   * @param {string} policyID
   * @param {NotificationPolicyShowEmailUnsubscribeDetailsParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<unknown>} Show email unsubscribe details response
   *
   * @example
   * ```ts
   * const response = await client.notificationPolicies.showEmailUnsubscribeDetails('policyId', {
   *   account_id: {},
   *   email: 'user@example.com',
   *   token: 'token',
   * });
   * ```
   */
  showEmailUnsubscribeDetails(
    policyID: string,
    params: NotificationPolicyShowEmailUnsubscribeDetailsParams,
    options?: RequestOptions,
  ): APIPromise<unknown> {
    const { account_id, ...query } = params;
    return this._client.get(
      __scalarPath`/accounts/${account_id}/alerting/v3/policies/${policyID}/email/unsubscribe`,
      { query, ...options },
    );
  }

  /**
   * Unsubscribes an email address from a notification policy.
   *
   * @param {string} policyID
   * @param {NotificationPolicyUnsubscribeEmailFromParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<unknown>} Unsubscribe email from Notification policy response
   *
   * @example
   * ```ts
   * const response = await client.notificationPolicies.unsubscribeEmailFrom('policyId', {
   *   account_id: {},
   *   email: 'user@example.com',
   *   token: 'token',
   * });
   * ```
   */
  unsubscribeEmailFrom(
    policyID: string,
    params: NotificationPolicyUnsubscribeEmailFromParams,
    options?: RequestOptions,
  ): APIPromise<unknown> {
    const { account_id, email, token } = params;
    return this._client.post(
      __scalarPath`/accounts/${account_id}/alerting/v3/policies/${policyID}/email/unsubscribe`,
      { query: { email, token }, ...options },
    );
  }

  /**
   * Send a test notification for a policy to verify delivery mechanisms are working as expected.
   *
   * @param {string} policyID
   * @param {NotificationPolicyTestAParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<unknown>} Test a Notification policy response
   *
   * @example
   * ```ts
   * const response = await client.notificationPolicies.testA('policyId', {
   *   account_id: {},
   * });
   * ```
   */
  testA(
    policyID: string,
    params: NotificationPolicyTestAParams,
    options?: RequestOptions,
  ): APIPromise<unknown> {
    const { account_id, ...body } = params;
    return this._client.post(__scalarPath`/accounts/${account_id}/alerting/v3/policies/${policyID}/test`, {
      body,
      ...options,
    });
  }
}

export interface NotificationPolicyCreateAParams {
  alert_type: unknown;
  enabled: unknown;
  mechanisms: unknown;
  name: unknown;
  alert_interval?: unknown;
  description?: unknown;
  filters?: unknown;
}

export interface NotificationPolicyDeleteAParams {
  account_id: string;
}

export interface NotificationPolicyRetrieveAParams {
  account_id: string;
}

export interface NotificationPolicyUpdateAParams {
  /**
   * Path param
   */
  account_id: string;
  /**
   * Body param
   */
  alert_interval?: unknown;
  /**
   * Body param
   */
  alert_type?: unknown;
  /**
   * Body param
   */
  description?: unknown;
  /**
   * Body param
   */
  enabled?: unknown;
  /**
   * Body param
   */
  filters?: unknown;
  /**
   * Body param
   */
  mechanisms?: unknown;
  /**
   * Body param
   */
  name?: unknown;
}

export interface NotificationPolicyShowEmailUnsubscribeDetailsParams {
  /**
   * Path param
   */
  account_id: string;
  /**
   * Query param
   * @format email
   */
  email: string;
  /**
   * Query param
   */
  token: string;
}

export interface NotificationPolicyUnsubscribeEmailFromParams {
  /**
   * Path param
   */
  account_id: string;
  /**
   * Query param
   * @format email
   */
  email: string;
  /**
   * Query param
   */
  token: string;
}

export interface NotificationPolicyTestAParams {
  /**
   * Path param
   */
  account_id: string;
  /**
   * Body param: Severity level for the test alert. Defaults to INFO (1) if omitted.
   */
  severity?: 0 | 1 | 2 | 3 | 4;
  /**
   * Body param: Source identifier for the test alert.
   */
  source?: string;
  /**
   * Body param: Correlation ID for stateful test alerts. Required when state_event is set.
   */
  state_correlation_id?: string;
  /**
   * Body param: State event type for stateful test alerts. Use with state_correlation_id.
   */
  state_event?: 0 | 1 | 2;
}
export declare namespace NotificationPolicies {
  export {
    type NotificationPolicyCreateAParams as NotificationPolicyCreateAParams,
    type NotificationPolicyDeleteAParams as NotificationPolicyDeleteAParams,
    type NotificationPolicyRetrieveAParams as NotificationPolicyRetrieveAParams,
    type NotificationPolicyUpdateAParams as NotificationPolicyUpdateAParams,
    type NotificationPolicyShowEmailUnsubscribeDetailsParams as NotificationPolicyShowEmailUnsubscribeDetailsParams,
    type NotificationPolicyUnsubscribeEmailFromParams as NotificationPolicyUnsubscribeEmailFromParams,
    type NotificationPolicyTestAParams as NotificationPolicyTestAParams,
  };
}
