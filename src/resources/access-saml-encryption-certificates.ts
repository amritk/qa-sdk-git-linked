// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from '../resource';
import { APIPromise } from '../api-promise';
import type { RequestOptions } from '../internal/request-options';
import { buildHeaders } from '../internal/headers';
import { path as __scalarPath } from '../internal/utils/path';

export class AccessSamlEncryptionCertificates extends APIResource {
  /**
   * Returns a paginated list of the organization's SAML encryption certificate sets.
   * Each certificate set includes the current and (if present) previous certificates.
   *
   *
   * @param {string} accountID
   * @param {AccessSamlEncryptionCertificateListSetsParams} [query] - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<unknown>} List SAML certificate sets response
   *
   * @example
   * ```ts
   * const response = await client.accessSamlEncryptionCertificates.listSets('accountId', {
   *   page: 1,
   *   per_page: 25,
   * });
   * ```
   */
  listSets(
    accountID: string,
    query: AccessSamlEncryptionCertificateListSetsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<unknown> {
    return this._client.get(__scalarPath`/accounts/${accountID}/access/saml_certificates`, {
      query,
      ...options,
    });
  }

  /**
   * Retrieves a specific SAML encryption certificate set by its UID, including both current and previous certificates if available.
   *
   * @param {string} samlCertSetID - UID of the SAML certificate set.
   * @param {AccessSamlEncryptionCertificateRetrieveSetParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<unknown>} Get SAML certificate set response
   *
   * @example
   * ```ts
   * const response = await client.accessSamlEncryptionCertificates.retrieveSet('samlCertSetId', {
   *   account_id: {},
   * });
   * ```
   */
  retrieveSet(
    samlCertSetID: string,
    params: AccessSamlEncryptionCertificateRetrieveSetParams,
    options?: RequestOptions,
  ): APIPromise<unknown> {
    const { account_id } = params;
    return this._client.get(
      __scalarPath`/accounts/${account_id}/access/saml_certificates/${samlCertSetID}`,
      options,
    );
  }

  /**
   * Downloads the current SAML encryption certificate's public key in PEM format for the specified certificate set. This endpoint is useful for providing the certificate to Identity Providers for SAML assertion encryption configuration.
   *
   * @param {string} samlCertSetID - UID of the SAML certificate set.
   * @param {AccessSamlEncryptionCertificateListPemParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<Response>} PEM certificate file
   *
   * @example
   * ```ts
   * const response = await client.accessSamlEncryptionCertificates.listPem('samlCertSetId', {
   *   account_id: {},
   * });
   * ```
   */
  listPem(
    samlCertSetID: string,
    params: AccessSamlEncryptionCertificateListPemParams,
    options?: RequestOptions,
  ): APIPromise<Response> {
    const { account_id } = params;
    return this._client.get(
      __scalarPath`/accounts/${account_id}/access/saml_certificates/${samlCertSetID}/pem`,
      {
        ...options,
        headers: buildHeaders([{ Accept: 'application/x-pem-file' }, options?.headers]),
        __binaryResponse: true,
      },
    );
  }

  /**
   * Rotates the SAML encryption certificates within the specified certificate set. This generates a new
   * certificate and moves the current certificate to the previous slot. If a previous certificate exists,
   * it will be deactivated and removed.
   *
   * This endpoint ensures zero-downtime rotation by maintaining both current and previous certificates
   * during the transition period, allowing IdPs time to update their configurations. Automated rotation
   * happens 30 days before a current certificate's expiration.
   *
   *
   * @param {string} samlCertSetID - UID of the SAML certificate set to rotate.
   * @param {AccessSamlEncryptionCertificateRotateParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<unknown>} Rotate SAML certificate response
   *
   * @example
   * ```ts
   * const response = await client.accessSamlEncryptionCertificates.rotate('samlCertSetId', {
   *   account_id: {},
   * });
   * ```
   */
  rotate(
    samlCertSetID: string,
    params: AccessSamlEncryptionCertificateRotateParams,
    options?: RequestOptions,
  ): APIPromise<unknown> {
    const { account_id } = params;
    return this._client.post(
      __scalarPath`/accounts/${account_id}/access/saml_certificates/${samlCertSetID}/rotate`,
      options,
    );
  }
}

export interface AccessSamlEncryptionCertificateListSetsParams {
  /**
   * Page number of paginated results.
   * @default 1
   * @minimum 1
   */
  page?: number;
  /**
   * Maximum number of results per page.
   * @default 25
   * @minimum 1
   * @maximum 1000
   */
  per_page?: number;
  /**
   * Filter by SAML certificate set UID. Accepts a comma-separated list of UIDs.
   */
  id?: string;
}

export interface AccessSamlEncryptionCertificateRetrieveSetParams {
  account_id: string;
}

export interface AccessSamlEncryptionCertificateListPemParams {
  account_id: string;
}

export interface AccessSamlEncryptionCertificateRotateParams {
  account_id: string;
}
export declare namespace AccessSamlEncryptionCertificates {
  export {
    type AccessSamlEncryptionCertificateListSetsParams as AccessSamlEncryptionCertificateListSetsParams,
    type AccessSamlEncryptionCertificateRetrieveSetParams as AccessSamlEncryptionCertificateRetrieveSetParams,
    type AccessSamlEncryptionCertificateListPemParams as AccessSamlEncryptionCertificateListPemParams,
    type AccessSamlEncryptionCertificateRotateParams as AccessSamlEncryptionCertificateRotateParams,
  };
}
