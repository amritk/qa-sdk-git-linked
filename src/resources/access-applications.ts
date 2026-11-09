// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from '../resource';
import { APIPromise } from '../api-promise';
import type { RequestOptions } from '../internal/request-options';
import { path as __scalarPath } from '../internal/utils/path';

export class AccessApplications extends APIResource {
  /**
   * Lists all Access applications in an account.
   *
   * @param {string} accountID
   * @param {AccessApplicationListParams} [query] - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<unknown>} List Access applications response
   *
   * @example
   * ```ts
   * const response = await client.accessApplications.list('accountId');
   * ```
   */
  list(
    accountID: string,
    query: AccessApplicationListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<unknown> {
    return this._client.get(__scalarPath`/accounts/${accountID}/access/apps`, { query, ...options });
  }

  /**
   * Adds a new application to Access.
   *
   * @param {string} accountID
   * @param {AccessApplicationCreateAnParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<AccessApplicationCreateAnResponse>} Add an Access application response
   *
   * @example
   * ```ts
   * const accessApplication = await client.accessApplications.createAn('accountId', {});
   * ```
   */
  createAn(
    accountID: string,
    body: AccessApplicationCreateAnParams,
    options?: RequestOptions,
  ): APIPromise<AccessApplicationCreateAnResponse> {
    return this._client.post(__scalarPath`/accounts/${accountID}/access/apps`, { body, ...options });
  }

  /**
   * Deletes an application from Access.
   *
   * @param {string} appID
   * @param {AccessApplicationDeleteAnParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<unknown>} Delete an Access application response
   *
   * @example
   * ```ts
   * const response = await client.accessApplications.deleteAn('appId', {
   *   account_id: {},
   * });
   * ```
   */
  deleteAn(
    appID: string,
    params: AccessApplicationDeleteAnParams,
    options?: RequestOptions,
  ): APIPromise<unknown> {
    const { account_id } = params;
    return this._client.delete(__scalarPath`/accounts/${account_id}/access/apps/${appID}`, options);
  }

  /**
   * Fetches information about an Access application.
   *
   * @param {string} appID
   * @param {AccessApplicationRetrieveAnParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<unknown>} Get an Access application response
   *
   * @example
   * ```ts
   * const response = await client.accessApplications.retrieveAn('appId', {
   *   account_id: {},
   * });
   * ```
   */
  retrieveAn(
    appID: string,
    params: AccessApplicationRetrieveAnParams,
    options?: RequestOptions,
  ): APIPromise<unknown> {
    const { account_id } = params;
    return this._client.get(__scalarPath`/accounts/${account_id}/access/apps/${appID}`, options);
  }

  /**
   * Updates an Access application.
   *
   * @param {string} appID
   * @param {AccessApplicationUpdateAnParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<AccessApplicationUpdateAnResponse>} Update an Access application response
   *
   * @example
   * ```ts
   * const accessApplication = await client.accessApplications.updateAn('appId', {
   *   account_id: {},
   *   body: {},
   * });
   * ```
   */
  updateAn(
    appID: string,
    params: AccessApplicationUpdateAnParams,
    options?: RequestOptions,
  ): APIPromise<AccessApplicationUpdateAnResponse> {
    const { account_id, body } = params;
    return this._client.put(__scalarPath`/accounts/${account_id}/access/apps/${appID}`, { body, ...options });
  }

  /**
   * Revokes all tokens issued for an application.
   *
   * @param {string} appID
   * @param {AccessApplicationRevokeServiceTokensParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<unknown>} Revoke application tokens response
   *
   * @example
   * ```ts
   * const response = await client.accessApplications.revokeServiceTokens('appId', {
   *   account_id: {},
   * });
   * ```
   */
  revokeServiceTokens(
    appID: string,
    params: AccessApplicationRevokeServiceTokensParams,
    options?: RequestOptions,
  ): APIPromise<unknown> {
    const { account_id } = params;
    return this._client.post(
      __scalarPath`/accounts/${account_id}/access/apps/${appID}/revoke_tokens`,
      options,
    );
  }

  /**
   * Updates Access application settings.
   *
   * @param {string} appID
   * @param {AccessApplicationPatchUpdateSettingsParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<unknown>} Update Access application settings response
   *
   * @example
   * ```ts
   * const response = await client.accessApplications.patchUpdateSettings('appId', {
   *   account_id: {},
   *   body: {},
   * });
   * ```
   */
  patchUpdateSettings(
    appID: string,
    params: AccessApplicationPatchUpdateSettingsParams,
    options?: RequestOptions,
  ): APIPromise<unknown> {
    const { account_id, body } = params;
    return this._client.patch(__scalarPath`/accounts/${account_id}/access/apps/${appID}/settings`, {
      body,
      ...options,
    });
  }

  /**
   * Updates Access application settings.
   *
   * @param {string} appID
   * @param {AccessApplicationPutUpdateSettingsParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<unknown>} Update Access application settings response
   *
   * @example
   * ```ts
   * const response = await client.accessApplications.putUpdateSettings('appId', {
   *   account_id: {},
   *   body: {},
   * });
   * ```
   */
  putUpdateSettings(
    appID: string,
    params: AccessApplicationPutUpdateSettingsParams,
    options?: RequestOptions,
  ): APIPromise<unknown> {
    const { account_id, body } = params;
    return this._client.put(__scalarPath`/accounts/${account_id}/access/apps/${appID}/settings`, {
      body,
      ...options,
    });
  }

  /**
   * Tests if a specific user has permission to access an application.
   *
   * @param {string} appID
   * @param {AccessApplicationTestPoliciesParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<unknown>} Test Access policies response
   *
   * @example
   * ```ts
   * const response = await client.accessApplications.testPolicies('appId', {
   *   account_id: {},
   * });
   * ```
   */
  testPolicies(
    appID: string,
    params: AccessApplicationTestPoliciesParams,
    options?: RequestOptions,
  ): APIPromise<unknown> {
    const { account_id } = params;
    return this._client.get(
      __scalarPath`/accounts/${account_id}/access/apps/${appID}/user_policy_checks`,
      options,
    );
  }
}

export interface AccessApplicationListParams {
  /**
   * The name of the app.
   */
  name?: string;
  /**
   * The domain of the app.
   */
  domain?: string;
  /**
   * The aud of the app.
   */
  aud?: string;
  /**
   * Target Criteria attributes in key=value format.
   */
  target_attributes?: string;
  /**
   * True for only exact string matches against passed name/domain query parameters.
   */
  exact?: boolean;
  /**
   * Search for apps by other listed query parameters.
   */
  search?: string;
}

export type AccessApplicationCreateAnParams = unknown;

export type AccessApplicationCreateAnResponse = unknown &
  AccessApplicationCreateAnResponse.AccessApplicationCreateAnResponseItem;

export namespace AccessApplicationCreateAnResponse {
  export interface AccessApplicationCreateAnResponseItem {
    result?: unknown;
  }
}

export interface AccessApplicationDeleteAnParams {
  account_id: string;
}

export interface AccessApplicationRetrieveAnParams {
  account_id: string;
}

export interface AccessApplicationUpdateAnParams {
  /**
   * Path param
   */
  account_id: string;
  /**
   * Body param
   */
  body: unknown;
}

export type AccessApplicationUpdateAnResponse = unknown &
  AccessApplicationUpdateAnResponse.AccessApplicationUpdateAnResponseItem;

export namespace AccessApplicationUpdateAnResponse {
  export interface AccessApplicationUpdateAnResponseItem {
    result?: unknown;
  }
}

export interface AccessApplicationRevokeServiceTokensParams {
  account_id: string;
}

export interface AccessApplicationPatchUpdateSettingsParams {
  /**
   * Path param
   */
  account_id: string;
  /**
   * Body param
   */
  body: unknown;
}

export interface AccessApplicationPutUpdateSettingsParams {
  /**
   * Path param
   */
  account_id: string;
  /**
   * Body param
   */
  body: unknown;
}

export interface AccessApplicationTestPoliciesParams {
  account_id: string;
}
export declare namespace AccessApplications {
  export {
    type AccessApplicationCreateAnResponse as AccessApplicationCreateAnResponse,
    type AccessApplicationUpdateAnResponse as AccessApplicationUpdateAnResponse,
    type AccessApplicationListParams as AccessApplicationListParams,
    type AccessApplicationCreateAnParams as AccessApplicationCreateAnParams,
    type AccessApplicationDeleteAnParams as AccessApplicationDeleteAnParams,
    type AccessApplicationRetrieveAnParams as AccessApplicationRetrieveAnParams,
    type AccessApplicationUpdateAnParams as AccessApplicationUpdateAnParams,
    type AccessApplicationRevokeServiceTokensParams as AccessApplicationRevokeServiceTokensParams,
    type AccessApplicationPatchUpdateSettingsParams as AccessApplicationPatchUpdateSettingsParams,
    type AccessApplicationPutUpdateSettingsParams as AccessApplicationPutUpdateSettingsParams,
    type AccessApplicationTestPoliciesParams as AccessApplicationTestPoliciesParams,
  };
}
