// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from '../resource';
import { APIPromise } from '../api-promise';
import type { RequestOptions } from '../internal/request-options';
import { path as __scalarPath } from '../internal/utils/path';

export class AccessMTLSAuthentication extends APIResource {
  /**
   * Lists all mTLS root certificates.
   *
   * @param {string} accountID
   * @param {AccessMTLSAuthenticationMTLSListMTLSCertificatesParams} [query] - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<unknown>} List mTLS certificates response
   *
   * @example
   * ```ts
   * const response = await client.accessMTLSAuthentication.mtlsListMTLSCertificates('accountId', {
   *   per_page: 50,
   * });
   * ```
   */
  mtlsListMTLSCertificates(
    accountID: string,
    query: AccessMTLSAuthenticationMTLSListMTLSCertificatesParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<unknown> {
    return this._client.get(__scalarPath`/accounts/${accountID}/access/certificates`, { query, ...options });
  }

  /**
   * Adds a new mTLS root certificate to Access.
   *
   * @param {string} accountID
   * @param {AccessMTLSAuthenticationMTLSAddAnMTLSCertificateParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<unknown>} Add an mTLS certificate response
   *
   * @example
   * ```ts
   * const response = await client.accessMTLSAuthentication.mtlsAddAnMTLSCertificate('accountId', {
   *   certificate:
   *     '-----BEGIN CERTIFICATE-----\nMIIGAjCCA+qgAwIBAgIJAI7kymlF7CWT...N4RI7KKB7nikiuUf8vhULKy5IX10\nDrUtmu/B\n-----END CERTIFICATE-----',
   *   name: {},
   * });
   * ```
   */
  mtlsAddAnMTLSCertificate(
    accountID: string,
    body: AccessMTLSAuthenticationMTLSAddAnMTLSCertificateParams,
    options?: RequestOptions,
  ): APIPromise<unknown> {
    return this._client.post(__scalarPath`/accounts/${accountID}/access/certificates`, { body, ...options });
  }

  /**
   * List all mTLS hostname settings for this account.
   *
   * @param {string} accountID
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<unknown>} List mTLS hostname settings response
   *
   * @example
   * ```ts
   * const response = await client.accessMTLSAuthentication.mtlsListMTLSCertificatesHostnameSettings('accountId');
   * ```
   */
  mtlsListMTLSCertificatesHostnameSettings(accountID: string, options?: RequestOptions): APIPromise<unknown> {
    return this._client.get(__scalarPath`/accounts/${accountID}/access/certificates/settings`, options);
  }

  /**
   * Updates an mTLS certificate's hostname settings.
   *
   * @param {string} accountID
   * @param {AccessMTLSAuthenticationMTLSUpdateAnMTLSCertificateSettingsParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<unknown>} Update an mTLS certificates hostname settings response
   *
   * @example
   * ```ts
   * const response = await client.accessMTLSAuthentication.mtlsUpdateAnMTLSCertificateSettings('accountId', {
   *   settings: [{}],
   * });
   * ```
   */
  mtlsUpdateAnMTLSCertificateSettings(
    accountID: string,
    body: AccessMTLSAuthenticationMTLSUpdateAnMTLSCertificateSettingsParams,
    options?: RequestOptions,
  ): APIPromise<unknown> {
    return this._client.put(__scalarPath`/accounts/${accountID}/access/certificates/settings`, {
      body,
      ...options,
    });
  }

  /**
   * Deletes an mTLS certificate.
   *
   * @param {string} certificateID
   * @param {AccessMTLSAuthenticationMTLSDeleteAnMTLSCertificateParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<unknown>} Delete an mTLS certificate response
   *
   * @example
   * ```ts
   * const response = await client.accessMTLSAuthentication.mtlsDeleteAnMTLSCertificate('certificateId', {
   *   account_id: {},
   * });
   * ```
   */
  mtlsDeleteAnMTLSCertificate(
    certificateID: string,
    params: AccessMTLSAuthenticationMTLSDeleteAnMTLSCertificateParams,
    options?: RequestOptions,
  ): APIPromise<unknown> {
    const { account_id } = params;
    return this._client.delete(
      __scalarPath`/accounts/${account_id}/access/certificates/${certificateID}`,
      options,
    );
  }

  /**
   * Fetches a single mTLS certificate.
   *
   * @param {string} certificateID
   * @param {AccessMTLSAuthenticationMTLSGetAnMTLSCertificateParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<unknown>} Get an mTLS certificate response
   *
   * @example
   * ```ts
   * const response = await client.accessMTLSAuthentication.mtlsGetAnMTLSCertificate('certificateId', {
   *   account_id: {},
   * });
   * ```
   */
  mtlsGetAnMTLSCertificate(
    certificateID: string,
    params: AccessMTLSAuthenticationMTLSGetAnMTLSCertificateParams,
    options?: RequestOptions,
  ): APIPromise<unknown> {
    const { account_id } = params;
    return this._client.get(
      __scalarPath`/accounts/${account_id}/access/certificates/${certificateID}`,
      options,
    );
  }

  /**
   * Updates a configured mTLS certificate.
   *
   * @param {string} certificateID
   * @param {AccessMTLSAuthenticationMTLSUpdateAnMTLSCertificateParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<unknown>} Update an mTLS certificate response
   *
   * @example
   * ```ts
   * const response = await client.accessMTLSAuthentication.mtlsUpdateAnMTLSCertificate('certificateId', {
   *   account_id: {},
   *   associated_hostnames: {},
   * });
   * ```
   */
  mtlsUpdateAnMTLSCertificate(
    certificateID: string,
    params: AccessMTLSAuthenticationMTLSUpdateAnMTLSCertificateParams,
    options?: RequestOptions,
  ): APIPromise<unknown> {
    const { account_id, ...body } = params;
    return this._client.put(__scalarPath`/accounts/${account_id}/access/certificates/${certificateID}`, {
      body,
      ...options,
    });
  }
}

export interface AccessMTLSAuthenticationMTLSListMTLSCertificatesParams {
  /**
   * Number of results per page.
   * @default 50
   * @maximum 1000
   */
  per_page?: number;
}

export interface AccessMTLSAuthenticationMTLSAddAnMTLSCertificateParams {
  /**
   * The certificate content.
   */
  certificate: string;
  name: unknown;
  associated_hostnames?: unknown;
}

export interface AccessMTLSAuthenticationMTLSUpdateAnMTLSCertificateSettingsParams {
  settings: Array<unknown>;
}

export interface AccessMTLSAuthenticationMTLSDeleteAnMTLSCertificateParams {
  account_id: string;
}

export interface AccessMTLSAuthenticationMTLSGetAnMTLSCertificateParams {
  account_id: string;
}

export interface AccessMTLSAuthenticationMTLSUpdateAnMTLSCertificateParams {
  /**
   * Path param
   */
  account_id: string;
  /**
   * Body param
   */
  associated_hostnames: unknown;
  /**
   * Body param
   */
  name?: unknown;
}
export declare namespace AccessMTLSAuthentication {
  export {
    type AccessMTLSAuthenticationMTLSListMTLSCertificatesParams as AccessMTLSAuthenticationMTLSListMTLSCertificatesParams,
    type AccessMTLSAuthenticationMTLSAddAnMTLSCertificateParams as AccessMTLSAuthenticationMTLSAddAnMTLSCertificateParams,
    type AccessMTLSAuthenticationMTLSUpdateAnMTLSCertificateSettingsParams as AccessMTLSAuthenticationMTLSUpdateAnMTLSCertificateSettingsParams,
    type AccessMTLSAuthenticationMTLSDeleteAnMTLSCertificateParams as AccessMTLSAuthenticationMTLSDeleteAnMTLSCertificateParams,
    type AccessMTLSAuthenticationMTLSGetAnMTLSCertificateParams as AccessMTLSAuthenticationMTLSGetAnMTLSCertificateParams,
    type AccessMTLSAuthenticationMTLSUpdateAnMTLSCertificateParams as AccessMTLSAuthenticationMTLSUpdateAnMTLSCertificateParams,
  };
}
