// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from '../resource';
import { APIPromise } from '../api-promise';
import type { RequestOptions } from '../internal/request-options';
import { path as __scalarPath } from '../internal/utils/path';

export class AccessServiceTokens extends APIResource {
  /**
   * Lists all service tokens.
   *
   * @param {string} accountID
   * @param {AccessServiceTokenListParams} [query] - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<unknown>} List service tokens response
   *
   * @example
   * ```ts
   * const response = await client.accessServiceTokens.list('accountId');
   * ```
   */
  list(
    accountID: string,
    query: AccessServiceTokenListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<unknown> {
    return this._client.get(__scalarPath`/accounts/${accountID}/access/service_tokens`, {
      query,
      ...options,
    });
  }

  /**
   * Generates a new service token. **Note:** This is the only time you can get the Client Secret. If you lose the Client Secret, you will have to rotate the Client Secret or create a new service token.
   *
   * @param {string} accountID
   * @param {AccessServiceTokenCreateAParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<unknown>} Create a service token response
   *
   * @example
   * ```ts
   * const response = await client.accessServiceTokens.createA('accountId', {
   *   name: {},
   * });
   * ```
   */
  createA(
    accountID: string,
    body: AccessServiceTokenCreateAParams,
    options?: RequestOptions,
  ): APIPromise<unknown> {
    return this._client.post(__scalarPath`/accounts/${accountID}/access/service_tokens`, {
      body,
      ...options,
    });
  }

  /**
   * Deletes a service token.
   *
   * @param {string} serviceTokenID
   * @param {AccessServiceTokenDeleteAParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<unknown>} Delete a service token response
   *
   * @example
   * ```ts
   * const response = await client.accessServiceTokens.deleteA('serviceTokenId', {
   *   account_id: {},
   * });
   * ```
   */
  deleteA(
    serviceTokenID: string,
    params: AccessServiceTokenDeleteAParams,
    options?: RequestOptions,
  ): APIPromise<unknown> {
    const { account_id } = params;
    return this._client.delete(
      __scalarPath`/accounts/${account_id}/access/service_tokens/${serviceTokenID}`,
      options,
    );
  }

  /**
   * Fetches a single service token.
   *
   * @param {string} serviceTokenID
   * @param {AccessServiceTokenRetrieveAParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<unknown>} Get a service token response
   *
   * @example
   * ```ts
   * const response = await client.accessServiceTokens.retrieveA('serviceTokenId', {
   *   account_id: {},
   * });
   * ```
   */
  retrieveA(
    serviceTokenID: string,
    params: AccessServiceTokenRetrieveAParams,
    options?: RequestOptions,
  ): APIPromise<unknown> {
    const { account_id } = params;
    return this._client.get(
      __scalarPath`/accounts/${account_id}/access/service_tokens/${serviceTokenID}`,
      options,
    );
  }

  /**
   * Updates a configured service token.
   *
   * @param {string} serviceTokenID
   * @param {AccessServiceTokenUpdateAParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<unknown>} Update a service token response
   *
   * @example
   * ```ts
   * const response = await client.accessServiceTokens.updateA('serviceTokenId', {
   *   account_id: {},
   * });
   * ```
   */
  updateA(
    serviceTokenID: string,
    params: AccessServiceTokenUpdateAParams,
    options?: RequestOptions,
  ): APIPromise<unknown> {
    const { account_id, ...body } = params;
    return this._client.put(__scalarPath`/accounts/${account_id}/access/service_tokens/${serviceTokenID}`, {
      body,
      ...options,
    });
  }

  /**
   * Refreshes the expiration of a service token.
   *
   * @param {string} serviceTokenID
   * @param {AccessServiceTokenRefreshAParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<unknown>} Refresh a service token response
   *
   * @example
   * ```ts
   * const response = await client.accessServiceTokens.refreshA('serviceTokenId', {
   *   account_id: {},
   * });
   * ```
   */
  refreshA(
    serviceTokenID: string,
    params: AccessServiceTokenRefreshAParams,
    options?: RequestOptions,
  ): APIPromise<unknown> {
    const { account_id } = params;
    return this._client.post(
      __scalarPath`/accounts/${account_id}/access/service_tokens/${serviceTokenID}/refresh`,
      options,
    );
  }

  /**
   * Generates a new Client Secret for a service token and revokes the old one.
   *
   * @param {string} serviceTokenID
   * @param {AccessServiceTokenRotateAParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<unknown>} Rotate a service token response
   *
   * @example
   * ```ts
   * const response = await client.accessServiceTokens.rotateA('serviceTokenId', {
   *   account_id: {},
   * });
   * ```
   */
  rotateA(
    serviceTokenID: string,
    params: AccessServiceTokenRotateAParams,
    options?: RequestOptions,
  ): APIPromise<unknown> {
    const { account_id, ...body } = params;
    return this._client.post(
      __scalarPath`/accounts/${account_id}/access/service_tokens/${serviceTokenID}/rotate`,
      { body, ...options },
    );
  }
}

export interface AccessServiceTokenListParams {
  /**
   * The name of the service token.
   */
  name?: string;
  /**
   * Search for service tokens by other listed query parameters.
   */
  search?: string;
}

export interface AccessServiceTokenCreateAParams {
  name: unknown;
  client_secret_version?: unknown;
  duration?: unknown;
  enabled?: unknown;
  previous_client_secret_expires_at?: unknown;
}

export interface AccessServiceTokenDeleteAParams {
  account_id: string;
}

export interface AccessServiceTokenRetrieveAParams {
  account_id: string;
}

export interface AccessServiceTokenUpdateAParams {
  /**
   * Path param
   */
  account_id: string;
  /**
   * Body param
   */
  client_secret_version?: unknown;
  /**
   * Body param
   */
  duration?: unknown;
  /**
   * Body param
   */
  enabled?: unknown;
  /**
   * Body param
   */
  name?: unknown;
  /**
   * Body param
   */
  previous_client_secret_expires_at?: unknown;
}

export interface AccessServiceTokenRefreshAParams {
  account_id: string;
}

export interface AccessServiceTokenRotateAParams {
  /**
   * Path param
   */
  account_id: string;
  /**
   * Body param: The expiration of the previous `client_secret`. If not provided, it defaults to the current timestamp in order to immediately expire the previous secret.
   * @format date-time
   */
  previous_client_secret_expires_at?: string;
}
export declare namespace AccessServiceTokens {
  export {
    type AccessServiceTokenListParams as AccessServiceTokenListParams,
    type AccessServiceTokenCreateAParams as AccessServiceTokenCreateAParams,
    type AccessServiceTokenDeleteAParams as AccessServiceTokenDeleteAParams,
    type AccessServiceTokenRetrieveAParams as AccessServiceTokenRetrieveAParams,
    type AccessServiceTokenUpdateAParams as AccessServiceTokenUpdateAParams,
    type AccessServiceTokenRefreshAParams as AccessServiceTokenRefreshAParams,
    type AccessServiceTokenRotateAParams as AccessServiceTokenRotateAParams,
  };
}
