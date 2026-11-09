// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from '../resource';
import { APIPromise } from '../api-promise';
import type { RequestOptions } from '../internal/request-options';
import { path as __scalarPath } from '../internal/utils/path';

export class NotificationWebhooks extends APIResource {
  /**
   * Gets a list of all configured webhook destinations.
   *
   * @param {string} accountID
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<unknown>} List webhooks response
   *
   * @example
   * ```ts
   * const response = await client.notificationWebhooks.list('accountId');
   * ```
   */
  list(accountID: string, options?: RequestOptions): APIPromise<unknown> {
    return this._client.get(__scalarPath`/accounts/${accountID}/alerting/v3/destinations/webhooks`, options);
  }

  /**
   * Creates a new webhook destination.
   *
   * @param {string} accountID
   * @param {NotificationWebhookCreateAParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<unknown>} Create a webhook response
   *
   * @example
   * ```ts
   * const response = await client.notificationWebhooks.createA('accountId', {
   *   name: {},
   *   url: {},
   * });
   * ```
   */
  createA(
    accountID: string,
    body: NotificationWebhookCreateAParams,
    options?: RequestOptions,
  ): APIPromise<unknown> {
    return this._client.post(__scalarPath`/accounts/${accountID}/alerting/v3/destinations/webhooks`, {
      body,
      ...options,
    });
  }

  /**
   * Delete a configured webhook destination.
   *
   * @param {string} webhookID
   * @param {NotificationWebhookDeleteAParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<unknown>} Delete a webhook response
   *
   * @example
   * ```ts
   * const response = await client.notificationWebhooks.deleteA('webhookId', {
   *   account_id: {},
   * });
   * ```
   */
  deleteA(
    webhookID: string,
    params: NotificationWebhookDeleteAParams,
    options?: RequestOptions,
  ): APIPromise<unknown> {
    const { account_id } = params;
    return this._client.delete(
      __scalarPath`/accounts/${account_id}/alerting/v3/destinations/webhooks/${webhookID}`,
      options,
    );
  }

  /**
   * Get details for a single webhooks destination.
   *
   * @param {string} webhookID
   * @param {NotificationWebhookRetrieveAParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<unknown>} Get a webhook response
   *
   * @example
   * ```ts
   * const response = await client.notificationWebhooks.retrieveA('webhookId', {
   *   account_id: {},
   * });
   * ```
   */
  retrieveA(
    webhookID: string,
    params: NotificationWebhookRetrieveAParams,
    options?: RequestOptions,
  ): APIPromise<unknown> {
    const { account_id } = params;
    return this._client.get(
      __scalarPath`/accounts/${account_id}/alerting/v3/destinations/webhooks/${webhookID}`,
      options,
    );
  }

  /**
   * Update a webhook destination.
   *
   * @param {string} webhookID
   * @param {NotificationWebhookUpdateAParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<unknown>} Update a webhook response
   *
   * @example
   * ```ts
   * const response = await client.notificationWebhooks.updateA('webhookId', {
   *   account_id: {},
   *   name: {},
   *   url: {},
   * });
   * ```
   */
  updateA(
    webhookID: string,
    params: NotificationWebhookUpdateAParams,
    options?: RequestOptions,
  ): APIPromise<unknown> {
    const { account_id, ...body } = params;
    return this._client.put(
      __scalarPath`/accounts/${account_id}/alerting/v3/destinations/webhooks/${webhookID}`,
      { body, ...options },
    );
  }
}

export interface NotificationWebhookCreateAParams {
  name: unknown;
  url: unknown;
  secret?: unknown;
}

export interface NotificationWebhookDeleteAParams {
  account_id: string;
}

export interface NotificationWebhookRetrieveAParams {
  account_id: string;
}

export interface NotificationWebhookUpdateAParams {
  /**
   * Path param
   */
  account_id: string;
  /**
   * Body param
   */
  name: unknown;
  /**
   * Body param
   */
  secret?: unknown;
  /**
   * Body param
   */
  url: unknown;
}
export declare namespace NotificationWebhooks {
  export {
    type NotificationWebhookCreateAParams as NotificationWebhookCreateAParams,
    type NotificationWebhookDeleteAParams as NotificationWebhookDeleteAParams,
    type NotificationWebhookRetrieveAParams as NotificationWebhookRetrieveAParams,
    type NotificationWebhookUpdateAParams as NotificationWebhookUpdateAParams,
  };
}
