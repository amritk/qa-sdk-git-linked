// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from '../resource';
import { APIPromise } from '../api-promise';
import type { RequestOptions } from '../internal/request-options';
import { path as __scalarPath } from '../internal/utils/path';

export class AccessShortLivedCertificateCas extends APIResource {
  /**
   * Lists short-lived certificate CAs and their public keys.
   *
   * @param {string} accountID
   * @param {AccessShortLivedCertificateCaCAsListCasParams} [query] - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<unknown>} List short-lived certificate CAs response
   *
   * @example
   * ```ts
   * const response = await client.accessShortLivedCertificateCas.cAsListCas('accountId', {
   *   per_page: 100,
   * });
   * ```
   */
  cAsListCas(
    accountID: string,
    query: AccessShortLivedCertificateCaCAsListCasParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<unknown> {
    return this._client.get(__scalarPath`/accounts/${accountID}/access/apps/ca`, { query, ...options });
  }

  /**
   * Deletes a short-lived certificate CA.
   *
   * @param {string} appID
   * @param {AccessShortLivedCertificateCaCAsDeleteAParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<unknown>} Delete a short-lived certificate CA response
   *
   * @example
   * ```ts
   * const response = await client.accessShortLivedCertificateCas.cAsDeleteA('appId', {
   *   account_id: {},
   * });
   * ```
   */
  cAsDeleteA(
    appID: string,
    params: AccessShortLivedCertificateCaCAsDeleteAParams,
    options?: RequestOptions,
  ): APIPromise<unknown> {
    const { account_id } = params;
    return this._client.delete(__scalarPath`/accounts/${account_id}/access/apps/${appID}/ca`, options);
  }

  /**
   * Fetches a short-lived certificate CA and its public key.
   *
   * @param {string} appID
   * @param {AccessShortLivedCertificateCaCAsGetAParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<unknown>} Get a short-lived certificate CA response
   *
   * @example
   * ```ts
   * const response = await client.accessShortLivedCertificateCas.cAsGetA('appId', {
   *   account_id: {},
   * });
   * ```
   */
  cAsGetA(
    appID: string,
    params: AccessShortLivedCertificateCaCAsGetAParams,
    options?: RequestOptions,
  ): APIPromise<unknown> {
    const { account_id } = params;
    return this._client.get(__scalarPath`/accounts/${account_id}/access/apps/${appID}/ca`, options);
  }

  /**
   * Generates a new short-lived certificate CA and public key.
   *
   * @param {string} appID
   * @param {AccessShortLivedCertificateCaCAsCreateAParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<unknown>} Create a short-lived certificate CA response
   *
   * @example
   * ```ts
   * const response = await client.accessShortLivedCertificateCas.cAsCreateA('appId', {
   *   account_id: {},
   * });
   * ```
   */
  cAsCreateA(
    appID: string,
    params: AccessShortLivedCertificateCaCAsCreateAParams,
    options?: RequestOptions,
  ): APIPromise<unknown> {
    const { account_id } = params;
    return this._client.post(__scalarPath`/accounts/${account_id}/access/apps/${appID}/ca`, options);
  }
}

export interface AccessShortLivedCertificateCaCAsListCasParams {
  /**
   * Number of results per page.
   * @default 100
   * @maximum 1000
   */
  per_page?: number;
}

export interface AccessShortLivedCertificateCaCAsDeleteAParams {
  account_id: string;
}

export interface AccessShortLivedCertificateCaCAsGetAParams {
  account_id: string;
}

export interface AccessShortLivedCertificateCaCAsCreateAParams {
  account_id: string;
}
export declare namespace AccessShortLivedCertificateCas {
  export {
    type AccessShortLivedCertificateCaCAsListCasParams as AccessShortLivedCertificateCaCAsListCasParams,
    type AccessShortLivedCertificateCaCAsDeleteAParams as AccessShortLivedCertificateCaCAsDeleteAParams,
    type AccessShortLivedCertificateCaCAsGetAParams as AccessShortLivedCertificateCaCAsGetAParams,
    type AccessShortLivedCertificateCaCAsCreateAParams as AccessShortLivedCertificateCaCAsCreateAParams,
  };
}
