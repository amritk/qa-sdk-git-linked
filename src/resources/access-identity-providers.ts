// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from '../resource';
import { APIPromise } from '../api-promise';
import type { RequestOptions } from '../internal/request-options';
import { path as __scalarPath } from '../internal/utils/path';

export class AccessIdentityProviders extends APIResource {
  /**
   * Lists all configured identity providers.
   *
   * @param {string} accountID
   * @param {AccessIdentityProviderListParams} [query] - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<unknown>} List Access identity providers response
   *
   * @example
   * ```ts
   * const response = await client.accessIdentityProviders.list('accountId', {
   *   per_page: 200,
   * });
   * ```
   */
  list(
    accountID: string,
    query: AccessIdentityProviderListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<unknown> {
    return this._client.get(__scalarPath`/accounts/${accountID}/access/identity_providers`, {
      query,
      ...options,
    });
  }

  /**
   * Adds a new identity provider to Access.
   *
   * @param {string} accountID
   * @param {AccessIdentityProviderCreateAnParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<unknown>} Add an Access identity provider response
   *
   * @example
   * ```ts
   * const response = await client.accessIdentityProviders.createAn('accountId', {});
   * ```
   */
  createAn(
    accountID: string,
    body: AccessIdentityProviderCreateAnParams,
    options?: RequestOptions,
  ): APIPromise<unknown> {
    return this._client.post(__scalarPath`/accounts/${accountID}/access/identity_providers`, {
      body,
      ...options,
    });
  }

  /**
   * Deletes an identity provider from Access.
   *
   * @param {string} identityProviderID
   * @param {AccessIdentityProviderDeleteAnParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<unknown>} Delete an Access identity provider response
   *
   * @example
   * ```ts
   * const response = await client.accessIdentityProviders.deleteAn('identityProviderId', {
   *   account_id: {},
   * });
   * ```
   */
  deleteAn(
    identityProviderID: string,
    params: AccessIdentityProviderDeleteAnParams,
    options?: RequestOptions,
  ): APIPromise<unknown> {
    const { account_id } = params;
    return this._client.delete(
      __scalarPath`/accounts/${account_id}/access/identity_providers/${identityProviderID}`,
      options,
    );
  }

  /**
   * Fetches a configured identity provider.
   *
   * @param {string} identityProviderID
   * @param {AccessIdentityProviderRetrieveAnParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<unknown>} Get an Access identity provider response
   *
   * @example
   * ```ts
   * const response = await client.accessIdentityProviders.retrieveAn('identityProviderId', {
   *   account_id: {},
   * });
   * ```
   */
  retrieveAn(
    identityProviderID: string,
    params: AccessIdentityProviderRetrieveAnParams,
    options?: RequestOptions,
  ): APIPromise<unknown> {
    const { account_id } = params;
    return this._client.get(
      __scalarPath`/accounts/${account_id}/access/identity_providers/${identityProviderID}`,
      options,
    );
  }

  /**
   * Updates a configured identity provider.
   *
   * @param {string} identityProviderID
   * @param {AccessIdentityProviderUpdateAnParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<unknown>} Update an Access identity provider response
   *
   * @example
   * ```ts
   * const response = await client.accessIdentityProviders.updateAn('identityProviderId', {
   *   account_id: {},
   *   body: {},
   * });
   * ```
   */
  updateAn(
    identityProviderID: string,
    params: AccessIdentityProviderUpdateAnParams,
    options?: RequestOptions,
  ): APIPromise<unknown> {
    const { account_id, body } = params;
    return this._client.put(
      __scalarPath`/accounts/${account_id}/access/identity_providers/${identityProviderID}`,
      { body, ...options },
    );
  }

  /**
   * Creates a new SAML encryption certificate set and assigns it to the specified
   * SAML Identity Provider. This endpoint is idempotent - if the IdP already has
   * a certificate set assigned, the existing certificate set is returned with a 200 status.
   *
   * **Workflow for enabling SAML encryption:**
   * 1. Call this endpoint to create and assign a certificate set to the IdP
   * 2. Update the IdP configuration (PUT `/identity_providers/{id}`) with:
   *    - `config.enable_encryption: true`
   *    - `saml_certificate_set_id: <uid from step 1>`
   * 3. Configure the certificate's public key in your external SAML Identity Provider
   *
   *
   * @param {string} identityProviderID
   * @param {AccessIdentityProviderCreateSamlCertificateForParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<unknown>} IdP already has a certificate set assigned (idempotent)
   *
   * @example
   * ```ts
   * const response = await client.accessIdentityProviders.createSamlCertificateFor('identityProviderId', {
   *   account_id: {},
   * });
   * ```
   */
  createSamlCertificateFor(
    identityProviderID: string,
    params: AccessIdentityProviderCreateSamlCertificateForParams,
    options?: RequestOptions,
  ): APIPromise<unknown> {
    const { account_id } = params;
    return this._client.post(
      __scalarPath`/accounts/${account_id}/access/identity_providers/${identityProviderID}/saml_certificate`,
      options,
    );
  }

  /**
   * Lists SCIM Group resources synced to Cloudflare via the System for Cross-domain Identity Management (SCIM).
   *
   * @param {string} identityProviderID
   * @param {AccessIdentityProviderListScimGroupResourcesParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<unknown>} List SCIM Group resources response
   *
   * @example
   * ```ts
   * const response = await client.accessIdentityProviders.listScimGroupResources('identityProviderId', {
   *   account_id: {},
   *   per_page: 100,
   * });
   * ```
   */
  listScimGroupResources(
    identityProviderID: string,
    params: AccessIdentityProviderListScimGroupResourcesParams,
    options?: RequestOptions,
  ): APIPromise<unknown> {
    const { account_id, ...query } = params;
    return this._client.get(
      __scalarPath`/accounts/${account_id}/access/identity_providers/${identityProviderID}/scim/groups`,
      { query, ...options },
    );
  }

  /**
   * Lists SCIM User resources synced to Cloudflare via the System for Cross-domain Identity Management (SCIM).
   *
   * @param {string} identityProviderID
   * @param {AccessIdentityProviderListScimUserResourcesParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<unknown>} List SCIM User resources response
   *
   * @example
   * ```ts
   * const response = await client.accessIdentityProviders.listScimUserResources('identityProviderId', {
   *   account_id: {},
   *   per_page: 100,
   * });
   * ```
   */
  listScimUserResources(
    identityProviderID: string,
    params: AccessIdentityProviderListScimUserResourcesParams,
    options?: RequestOptions,
  ): APIPromise<unknown> {
    const { account_id, ...query } = params;
    return this._client.get(
      __scalarPath`/accounts/${account_id}/access/identity_providers/${identityProviderID}/scim/users`,
      { query, ...options },
    );
  }
}

export interface AccessIdentityProviderListParams {
  /**
   * Indicates to Access to only retrieve identity providers that have the System for Cross-Domain Identity Management (SCIM) enabled.
   */
  scim_enabled?: string;
  /**
   * Number of results per page.
   * @default 200
   * @maximum 1000
   */
  per_page?: number;
}

export type AccessIdentityProviderCreateAnParams = unknown;

export interface AccessIdentityProviderDeleteAnParams {
  account_id: string;
}

export interface AccessIdentityProviderRetrieveAnParams {
  account_id: string;
}

export interface AccessIdentityProviderUpdateAnParams {
  /**
   * Path param
   */
  account_id: string;
  /**
   * Body param
   */
  body: unknown;
}

export interface AccessIdentityProviderCreateSamlCertificateForParams {
  account_id: string;
}

export interface AccessIdentityProviderListScimGroupResourcesParams {
  /**
   * Path param
   */
  account_id: string;
  /**
   * Query param
   */
  cf_resource_id?: unknown;
  /**
   * Query param
   */
  idp_resource_id?: unknown;
  /**
   * Query param
   */
  name?: unknown;
  /**
   * Query param: Number of results per page.
   * @default 100
   * @maximum 100
   */
  per_page?: number;
}

export interface AccessIdentityProviderListScimUserResourcesParams {
  /**
   * Path param
   */
  account_id: string;
  /**
   * Query param
   */
  cf_resource_id?: unknown;
  /**
   * Query param
   */
  idp_resource_id?: unknown;
  /**
   * Query param
   */
  username?: unknown;
  /**
   * Query param
   */
  email?: unknown;
  /**
   * Query param
   */
  name?: unknown;
  /**
   * Query param: Number of results per page.
   * @default 100
   * @maximum 100
   */
  per_page?: number;
}
export declare namespace AccessIdentityProviders {
  export {
    type AccessIdentityProviderListParams as AccessIdentityProviderListParams,
    type AccessIdentityProviderCreateAnParams as AccessIdentityProviderCreateAnParams,
    type AccessIdentityProviderDeleteAnParams as AccessIdentityProviderDeleteAnParams,
    type AccessIdentityProviderRetrieveAnParams as AccessIdentityProviderRetrieveAnParams,
    type AccessIdentityProviderUpdateAnParams as AccessIdentityProviderUpdateAnParams,
    type AccessIdentityProviderCreateSamlCertificateForParams as AccessIdentityProviderCreateSamlCertificateForParams,
    type AccessIdentityProviderListScimGroupResourcesParams as AccessIdentityProviderListScimGroupResourcesParams,
    type AccessIdentityProviderListScimUserResourcesParams as AccessIdentityProviderListScimUserResourcesParams,
  };
}
