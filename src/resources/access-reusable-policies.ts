// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from '../resource';
import { APIPromise } from '../api-promise';
import type { RequestOptions } from '../internal/request-options';
import { path as __scalarPath } from '../internal/utils/path';

export class AccessReusablePolicies extends APIResource {
  /**
   * Lists Access reusable policies.
   *
   * @param {string} accountID
   * @param {AccessReusablePolicyListParams} [query] - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<unknown>} List Access reusable policies response.
   *
   * @example
   * ```ts
   * const response = await client.accessReusablePolicies.list('accountId', {
   *   per_page: 100,
   * });
   * ```
   */
  list(
    accountID: string,
    query: AccessReusablePolicyListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<unknown> {
    return this._client.get(__scalarPath`/accounts/${accountID}/access/policies`, { query, ...options });
  }

  /**
   * Creates a new Access reusable policy.
   *
   * @param {string} accountID
   * @param {AccessReusablePolicyCreateAnParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<unknown>} Create an Access reusable policy response.
   *
   * @example
   * ```ts
   * const response = await client.accessReusablePolicies.createAn('accountId', {});
   * ```
   */
  createAn(
    accountID: string,
    body: AccessReusablePolicyCreateAnParams,
    options?: RequestOptions,
  ): APIPromise<unknown> {
    return this._client.post(__scalarPath`/accounts/${accountID}/access/policies`, { body, ...options });
  }

  /**
   * Deletes an Access reusable policy.
   *
   * @param {string} policyID
   * @param {AccessReusablePolicyDeleteAnParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<unknown>} Delete an Access reusable policy response.
   *
   * @example
   * ```ts
   * const response = await client.accessReusablePolicies.deleteAn('policyId', {
   *   account_id: {},
   * });
   * ```
   */
  deleteAn(
    policyID: string,
    params: AccessReusablePolicyDeleteAnParams,
    options?: RequestOptions,
  ): APIPromise<unknown> {
    const { account_id } = params;
    return this._client.delete(__scalarPath`/accounts/${account_id}/access/policies/${policyID}`, options);
  }

  /**
   * Fetches a single Access reusable policy.
   *
   * @param {string} policyID
   * @param {AccessReusablePolicyRetrieveAnParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<unknown>} Get an Access reusable policy response.
   *
   * @example
   * ```ts
   * const response = await client.accessReusablePolicies.retrieveAn('policyId', {
   *   account_id: {},
   * });
   * ```
   */
  retrieveAn(
    policyID: string,
    params: AccessReusablePolicyRetrieveAnParams,
    options?: RequestOptions,
  ): APIPromise<unknown> {
    const { account_id } = params;
    return this._client.get(__scalarPath`/accounts/${account_id}/access/policies/${policyID}`, options);
  }

  /**
   * Updates a Access reusable policy.
   *
   * @param {string} policyID
   * @param {AccessReusablePolicyUpdateAnParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<unknown>} Update an Access reusable policy response.
   *
   * @example
   * ```ts
   * const response = await client.accessReusablePolicies.updateAn('policyId', {
   *   account_id: {},
   *   body: {},
   * });
   * ```
   */
  updateAn(
    policyID: string,
    params: AccessReusablePolicyUpdateAnParams,
    options?: RequestOptions,
  ): APIPromise<unknown> {
    const { account_id, body } = params;
    return this._client.put(__scalarPath`/accounts/${account_id}/access/policies/${policyID}`, {
      body,
      ...options,
    });
  }
}

export interface AccessReusablePolicyListParams {
  /**
   * Number of results per page.
   * @default 100
   * @maximum 1000
   */
  per_page?: number;
}

export type AccessReusablePolicyCreateAnParams = unknown;

export interface AccessReusablePolicyDeleteAnParams {
  account_id: string;
}

export interface AccessReusablePolicyRetrieveAnParams {
  account_id: string;
}

export interface AccessReusablePolicyUpdateAnParams {
  /**
   * Path param
   */
  account_id: string;
  /**
   * Body param
   */
  body: unknown;
}
export declare namespace AccessReusablePolicies {
  export {
    type AccessReusablePolicyListParams as AccessReusablePolicyListParams,
    type AccessReusablePolicyCreateAnParams as AccessReusablePolicyCreateAnParams,
    type AccessReusablePolicyDeleteAnParams as AccessReusablePolicyDeleteAnParams,
    type AccessReusablePolicyRetrieveAnParams as AccessReusablePolicyRetrieveAnParams,
    type AccessReusablePolicyUpdateAnParams as AccessReusablePolicyUpdateAnParams,
  };
}
