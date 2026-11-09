// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from '../resource';
import { APIPromise } from '../api-promise';
import type { RequestOptions } from '../internal/request-options';
import { path as __scalarPath } from '../internal/utils/path';

export class AccessApplicationScopedPolicies extends APIResource {
  /**
   * Lists Access policies configured for an application. Returns both exclusively scoped and reusable policies used by the application.
   *
   * @param {string} appID - The application ID.
   * @param {AccessApplicationScopedPolicyListAppParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<unknown>} List Access application policies response
   *
   * @example
   * ```ts
   * const response = await client.accessApplicationScopedPolicies.listApp('appId', {
   *   account_id: {},
   *   per_page: 200,
   * });
   * ```
   */
  listApp(
    appID: string,
    params: AccessApplicationScopedPolicyListAppParams,
    options?: RequestOptions,
  ): APIPromise<unknown> {
    const { account_id, ...query } = params;
    return this._client.get(__scalarPath`/accounts/${account_id}/access/apps/${appID}/policies`, {
      query,
      ...options,
    });
  }

  /**
   * Creates a policy applying exclusive to a single application that defines the users or groups who can reach it. We recommend creating a reusable policy instead and subsequently referencing its ID in the application's 'policies' array.
   *
   * @param {string} appID - The application ID.
   * @param {AccessApplicationScopedPolicyCreateAnParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<unknown>} Create an Access application policy response.
   *
   * @example
   * ```ts
   * const response = await client.accessApplicationScopedPolicies.createAn('appId', {
   *   account_id: {},
   *   body: {},
   * });
   * ```
   */
  createAn(
    appID: string,
    params: AccessApplicationScopedPolicyCreateAnParams,
    options?: RequestOptions,
  ): APIPromise<unknown> {
    const { account_id, body } = params;
    return this._client.post(__scalarPath`/accounts/${account_id}/access/apps/${appID}/policies`, {
      body,
      ...options,
    });
  }

  /**
   * Deletes an Access policy specific to an application. To delete a reusable policy, use the /accounts/{account_id}/policies/{uid} endpoint.
   *
   * @param {string} policyID - The policy ID.
   * @param {AccessApplicationScopedPolicyDeleteAnParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<unknown>} Delete an Access application policy response.
   *
   * @example
   * ```ts
   * const response = await client.accessApplicationScopedPolicies.deleteAn('policyId', {
   *   app_id: {},
   *   account_id: {},
   * });
   * ```
   */
  deleteAn(
    policyID: string,
    params: AccessApplicationScopedPolicyDeleteAnParams,
    options?: RequestOptions,
  ): APIPromise<unknown> {
    const { app_id, account_id } = params;
    return this._client.delete(
      __scalarPath`/accounts/${account_id}/access/apps/${app_id}/policies/${policyID}`,
      options,
    );
  }

  /**
   * Fetches a single Access policy configured for an application. Returns both exclusively owned and reusable policies used by the application.
   *
   * @param {string} policyID - The policy ID.
   * @param {AccessApplicationScopedPolicyRetrieveAnParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<unknown>} Get an Access policy response.
   *
   * @example
   * ```ts
   * const response = await client.accessApplicationScopedPolicies.retrieveAn('policyId', {
   *   app_id: {},
   *   account_id: {},
   * });
   * ```
   */
  retrieveAn(
    policyID: string,
    params: AccessApplicationScopedPolicyRetrieveAnParams,
    options?: RequestOptions,
  ): APIPromise<unknown> {
    const { app_id, account_id } = params;
    return this._client.get(
      __scalarPath`/accounts/${account_id}/access/apps/${app_id}/policies/${policyID}`,
      options,
    );
  }

  /**
   * Updates an Access policy specific to an application. To update a reusable policy, use the /accounts/{account_id}/policies/{uid} endpoint.
   *
   * @param {string} policyID - The policy ID.
   * @param {AccessApplicationScopedPolicyUpdateAnParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<unknown>} Update an Access application policy response.
   *
   * @example
   * ```ts
   * const response = await client.accessApplicationScopedPolicies.updateAn('policyId', {
   *   app_id: {},
   *   account_id: {},
   *   body: {},
   * });
   * ```
   */
  updateAn(
    policyID: string,
    params: AccessApplicationScopedPolicyUpdateAnParams,
    options?: RequestOptions,
  ): APIPromise<unknown> {
    const { app_id, account_id, body } = params;
    return this._client.put(
      __scalarPath`/accounts/${account_id}/access/apps/${app_id}/policies/${policyID}`,
      { body, ...options },
    );
  }

  /**
   * Converts an application-scoped policy to a reusable policy. The policy will no longer be exclusively scoped to the application. Further updates to the policy should go through the /accounts/{account_id}/policies/{uid} endpoint.
   *
   * @param {string} policyID - The policy ID.
   * @param {AccessApplicationScopedPolicyConvertReusableParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<unknown>} Convert an Access application policy to a reusable policy
   *
   * @example
   * ```ts
   * const response = await client.accessApplicationScopedPolicies.convertReusable('policyId', {
   *   app_id: {},
   *   account_id: {},
   * });
   * ```
   */
  convertReusable(
    policyID: string,
    params: AccessApplicationScopedPolicyConvertReusableParams,
    options?: RequestOptions,
  ): APIPromise<unknown> {
    const { app_id, account_id } = params;
    return this._client.put(
      __scalarPath`/accounts/${account_id}/access/apps/${app_id}/policies/${policyID}/make_reusable`,
      options,
    );
  }
}

export interface AccessApplicationScopedPolicyListAppParams {
  /**
   * Path param
   */
  account_id: string;
  /**
   * Query param: Number of results per page.
   * @default 200
   * @maximum 1000
   */
  per_page?: number;
}

export interface AccessApplicationScopedPolicyCreateAnParams {
  /**
   * Path param
   */
  account_id: string;
  /**
   * Body param
   */
  body: unknown;
}

export interface AccessApplicationScopedPolicyDeleteAnParams {
  /**
   * The application ID.
   */
  app_id: string;
  account_id: string;
}

export interface AccessApplicationScopedPolicyRetrieveAnParams {
  /**
   * The application ID.
   */
  app_id: string;
  account_id: string;
}

export interface AccessApplicationScopedPolicyUpdateAnParams {
  /**
   * Path param: The application ID.
   */
  app_id: string;
  /**
   * Path param
   */
  account_id: string;
  /**
   * Body param
   */
  body: unknown;
}

export interface AccessApplicationScopedPolicyConvertReusableParams {
  /**
   * The application ID.
   */
  app_id: string;
  account_id: string;
}
export declare namespace AccessApplicationScopedPolicies {
  export {
    type AccessApplicationScopedPolicyListAppParams as AccessApplicationScopedPolicyListAppParams,
    type AccessApplicationScopedPolicyCreateAnParams as AccessApplicationScopedPolicyCreateAnParams,
    type AccessApplicationScopedPolicyDeleteAnParams as AccessApplicationScopedPolicyDeleteAnParams,
    type AccessApplicationScopedPolicyRetrieveAnParams as AccessApplicationScopedPolicyRetrieveAnParams,
    type AccessApplicationScopedPolicyUpdateAnParams as AccessApplicationScopedPolicyUpdateAnParams,
    type AccessApplicationScopedPolicyConvertReusableParams as AccessApplicationScopedPolicyConvertReusableParams,
  };
}
