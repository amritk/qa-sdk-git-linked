// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from '../resource';
import { APIPromise } from '../api-promise';
import type { RequestOptions } from '../internal/request-options';
import { path as __scalarPath } from '../internal/utils/path';

export class AccessIdPFederationGrants extends APIResource {
  /**
   * Lists the IdP federation grants owned by the account.
   *
   * @param {string} accountID
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<unknown>} List IdP federation grants response
   *
   * @example
   * ```ts
   * const response = await client.accessIdPFederationGrants.idpList('accountId');
   * ```
   */
  idpList(accountID: string, options?: RequestOptions): APIPromise<unknown> {
    return this._client.get(__scalarPath`/accounts/${accountID}/access/idp_federation_grants`, options);
  }

  /**
   * Creates an IdP federation grant for the specified identity provider, making it
   * available for federation to other accounts in the same Cloudflare organization.
   *
   * The account must belong to a Cloudflare organization. One-time pin and
   * Cloudflare-managed identity providers cannot be federated. An account
   * can federate at most five identity providers at a time.
   *
   *
   * @param {string} accountID
   * @param {AccessIdPFederationGrantIdPCreateParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<unknown>} Create IdP federation grant response
   *
   * @example
   * ```ts
   * const response = await client.accessIdPFederationGrants.idpCreate('accountId', {});
   * ```
   */
  idpCreate(
    accountID: string,
    body: AccessIdPFederationGrantIdPCreateParams,
    options?: RequestOptions,
  ): APIPromise<unknown> {
    return this._client.post(__scalarPath`/accounts/${accountID}/access/idp_federation_grants`, {
      body,
      ...options,
    });
  }

  /**
   * Deletes an IdP federation grant. The identity provider remains in the account,
   * but it is no longer available for federation to other accounts.
   *
   *
   * @param {string} grantID - UID of the IdP federation grant.
   * @param {AccessIdPFederationGrantIdPDeleteParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<unknown>} Delete IdP federation grant response
   *
   * @example
   * ```ts
   * const response = await client.accessIdPFederationGrants.idpDelete('grantId', {
   *   account_id: {},
   * });
   * ```
   */
  idpDelete(
    grantID: string,
    params: AccessIdPFederationGrantIdPDeleteParams,
    options?: RequestOptions,
  ): APIPromise<unknown> {
    const { account_id } = params;
    return this._client.delete(
      __scalarPath`/accounts/${account_id}/access/idp_federation_grants/${grantID}`,
      options,
    );
  }

  /**
   * Retrieves a single IdP federation grant by its UID.
   *
   * @param {string} grantID - UID of the IdP federation grant.
   * @param {AccessIdPFederationGrantIdPGetParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<unknown>} Get IdP federation grant response
   *
   * @example
   * ```ts
   * const response = await client.accessIdPFederationGrants.idpGet('grantId', {
   *   account_id: {},
   * });
   * ```
   */
  idpGet(
    grantID: string,
    params: AccessIdPFederationGrantIdPGetParams,
    options?: RequestOptions,
  ): APIPromise<unknown> {
    const { account_id } = params;
    return this._client.get(
      __scalarPath`/accounts/${account_id}/access/idp_federation_grants/${grantID}`,
      options,
    );
  }
}

export type AccessIdPFederationGrantIdPCreateParams = unknown;

export interface AccessIdPFederationGrantIdPDeleteParams {
  account_id: string;
}

export interface AccessIdPFederationGrantIdPGetParams {
  account_id: string;
}
export declare namespace AccessIdPFederationGrants {
  export {
    type AccessIdPFederationGrantIdPCreateParams as AccessIdPFederationGrantIdPCreateParams,
    type AccessIdPFederationGrantIdPDeleteParams as AccessIdPFederationGrantIdPDeleteParams,
    type AccessIdPFederationGrantIdPGetParams as AccessIdPFederationGrantIdPGetParams,
  };
}
