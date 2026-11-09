// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from '../resource';
import { APIPromise } from '../api-promise';
import type { RequestOptions } from '../internal/request-options';
import { buildHeaders } from '../internal/headers';
import { path as __scalarPath } from '../internal/utils/path';

export class LogoMatch extends APIResource {
  /**
   * Return matches for logo queries based on ID
   *
   * @param {string} accountID
   * @param {LogoMatchListAccountsAccountBrandProtectionMatchesParams} [query] - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<unknown>} OK
   *
   * @example
   * ```ts
   * const response = await client.logoMatch.listAccountsAccountBrandProtectionMatches('accountId');
   * ```
   */
  listAccountsAccountBrandProtectionMatches(
    accountID: string,
    query: LogoMatchListAccountsAccountBrandProtectionMatchesParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<unknown> {
    return this._client.get(__scalarPath`/accounts/${accountID}/brand-protection/logo-matches`, {
      query,
      ...options,
    });
  }

  /**
   * Return matches as CSV for logo queries based on ID
   *
   * @param {string} accountID
   * @param {LogoMatchListAccountsAccountBrandProtectionMatchesDownloadParams} [query] - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<unknown>} OK
   *
   * @example
   * ```ts
   * const response = await client.logoMatch.listAccountsAccountBrandProtectionMatchesDownload('accountId');
   * ```
   */
  listAccountsAccountBrandProtectionMatchesDownload(
    accountID: string,
    query: LogoMatchListAccountsAccountBrandProtectionMatchesDownloadParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<unknown> {
    return this._client.get(__scalarPath`/accounts/${accountID}/brand-protection/logo-matches/download`, {
      query,
      ...options,
    });
  }

  /**
   * Return all saved logo queries
   *
   * @param {string} accountID
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   *
   * @example
   * ```ts
   * await client.logoMatch.listAccountsAccountBrandProtection('accountId');
   * ```
   */
  listAccountsAccountBrandProtection(accountID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.get(__scalarPath`/accounts/${accountID}/brand-protection/logos`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Return new saved logo queries created from image files
   *
   * @param {string} accountID
   * @param {LogoMatchPostAccountsAccountIDBrandProtectionParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<unknown>} Created
   *
   * @example
   * ```ts
   * const response = await client.logoMatch.postAccountsAccountIDBrandProtection('accountId', {
   *   body: {},
   * });
   * ```
   */
  postAccountsAccountIDBrandProtection(
    accountID: string,
    params: LogoMatchPostAccountsAccountIDBrandProtectionParams,
    options?: RequestOptions,
  ): APIPromise<unknown> {
    const { tag, match_type, threshold, body } = params;
    return this._client.post(__scalarPath`/accounts/${accountID}/brand-protection/logos`, {
      body,
      query: { tag, match_type, threshold },
      ...options,
      headers: buildHeaders([{ 'Content-Type': 'application/x-www-form-urlencoded' }, options?.headers]),
    });
  }

  /**
   * Return a success message after deleting saved logo queries by ID
   *
   * @param {string} logoID
   * @param {LogoMatchDeleteAccountsAccountIDBrandProtectionIDParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns No Content
   *
   * @example
   * ```ts
   * await client.logoMatch.deleteAccountsAccountIDBrandProtectionID('logoId', {
   *   account_id: 'accountId',
   * });
   * ```
   */
  deleteAccountsAccountIDBrandProtectionID(
    logoID: string,
    params: LogoMatchDeleteAccountsAccountIDBrandProtectionIDParams,
    options?: RequestOptions,
  ): APIPromise<void> {
    const { account_id } = params;
    return this._client.delete(__scalarPath`/accounts/${account_id}/brand-protection/logos/${logoID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Return saved logo queries based on ID
   *
   * @param {string} logoID
   * @param {LogoMatchRetrieveAccountsAccountBrandProtectionParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   *
   * @example
   * ```ts
   * await client.logoMatch.retrieveAccountsAccountBrandProtection('logoId', {
   *   account_id: 'accountId',
   * });
   * ```
   */
  retrieveAccountsAccountBrandProtection(
    logoID: string,
    params: LogoMatchRetrieveAccountsAccountBrandProtectionParams,
    options?: RequestOptions,
  ): APIPromise<void> {
    const { account_id } = params;
    return this._client.get(__scalarPath`/accounts/${account_id}/brand-protection/logos/${logoID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Return new logo queries created from image files
   *
   * @param {string} accountID
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   *
   * @example
   * ```ts
   * await client.logoMatch.postAccountsAccountIDBrandProtectionScan('accountId');
   * ```
   */
  postAccountsAccountIDBrandProtectionScan(accountID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.post(__scalarPath`/accounts/${accountID}/brand-protection/scan-logo`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Return new logo queries created from URLs
   *
   * @param {string} accountID
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   *
   * @example
   * ```ts
   * await client.logoMatch.postAccountsAccountIDBrandProtectionScanPage('accountId');
   * ```
   */
  postAccountsAccountIDBrandProtectionScanPage(
    accountID: string,
    options?: RequestOptions,
  ): APIPromise<void> {
    return this._client.post(__scalarPath`/accounts/${accountID}/brand-protection/scan-page`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface LogoMatchListAccountsAccountBrandProtectionMatchesParams {
  logo_id?: Array<string>;
  offset?: string;
  limit?: string;
}

export interface LogoMatchListAccountsAccountBrandProtectionMatchesDownloadParams {
  logo_id?: Array<string>;
  offset?: string;
  limit?: string;
}

export interface LogoMatchPostAccountsAccountIDBrandProtectionParams {
  /**
   * Query param
   */
  tag?: string;
  /**
   * Query param
   */
  match_type?: string;
  /**
   * Query param
   */
  threshold?: number;
  /**
   * Body param
   */
  body: unknown;
}

export interface LogoMatchDeleteAccountsAccountIDBrandProtectionIDParams {
  /**
   * @minLength 1
   */
  account_id: string;
}

export interface LogoMatchRetrieveAccountsAccountBrandProtectionParams {
  /**
   * @minLength 1
   */
  account_id: string;
}
export declare namespace LogoMatch {
  export {
    type LogoMatchListAccountsAccountBrandProtectionMatchesParams as LogoMatchListAccountsAccountBrandProtectionMatchesParams,
    type LogoMatchListAccountsAccountBrandProtectionMatchesDownloadParams as LogoMatchListAccountsAccountBrandProtectionMatchesDownloadParams,
    type LogoMatchPostAccountsAccountIDBrandProtectionParams as LogoMatchPostAccountsAccountIDBrandProtectionParams,
    type LogoMatchDeleteAccountsAccountIDBrandProtectionIDParams as LogoMatchDeleteAccountsAccountIDBrandProtectionIDParams,
    type LogoMatchRetrieveAccountsAccountBrandProtectionParams as LogoMatchRetrieveAccountsAccountBrandProtectionParams,
  };
}
