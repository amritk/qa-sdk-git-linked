// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from '../resource';
import { APIPromise } from '../api-promise';
import type { RequestOptions } from '../internal/request-options';
import { buildHeaders } from '../internal/headers';
import { path as __scalarPath } from '../internal/utils/path';

export class DomainSearch extends APIResource {
  /**
   * Return matches for string queries based on ID
   *
   * @param {string} accountID
   * @param {DomainSearchListAccountsAccountBrandProtectionMatchesParams} [query] - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<unknown>} OK
   *
   * @example
   * ```ts
   * const response = await client.domainSearch.listAccountsAccountBrandProtectionMatches('accountId');
   * ```
   */
  listAccountsAccountBrandProtectionMatches(
    accountID: string,
    query: DomainSearchListAccountsAccountBrandProtectionMatchesParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<unknown> {
    return this._client.get(__scalarPath`/accounts/${accountID}/brand-protection/matches`, {
      query,
      ...options,
    });
  }

  /**
   * Return matches as CSV for string queries based on ID
   *
   * @param {string} accountID
   * @param {DomainSearchListAccountsAccountBrandProtectionMatchesDownloadParams} [query] - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<unknown>} OK
   *
   * @example
   * ```ts
   * const response = await client.domainSearch.listAccountsAccountBrandProtectionMatchesDownload('accountId');
   * ```
   */
  listAccountsAccountBrandProtectionMatchesDownload(
    accountID: string,
    query: DomainSearchListAccountsAccountBrandProtectionMatchesDownloadParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<unknown> {
    return this._client.get(__scalarPath`/accounts/${accountID}/brand-protection/matches/download`, {
      query,
      ...options,
    });
  }

  /**
   * Return a success message after deleting saved string queries by ID
   *
   * @param {string} accountID
   * @param {DomainSearchDeleteAccountsAccountIDBrandProtectionQueriesParams} [params] - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns No Content
   *
   * @example
   * ```ts
   * await client.domainSearch.deleteAccountsAccountIDBrandProtectionQueries('accountId');
   * ```
   */
  deleteAccountsAccountIDBrandProtectionQueries(
    accountID: string,
    params: DomainSearchDeleteAccountsAccountIDBrandProtectionQueriesParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<void> {
    const { id, tag, scan } = params ?? {};
    return this._client.delete(__scalarPath`/accounts/${accountID}/brand-protection/queries`, {
      query: { id, tag, scan },
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Return string queries based on ID
   *
   * @param {string} accountID
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   *
   * @example
   * ```ts
   * await client.domainSearch.listAccountsAccountBrandProtectionQueries('accountId');
   * ```
   */
  listAccountsAccountBrandProtectionQueries(accountID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.get(__scalarPath`/accounts/${accountID}/brand-protection/queries`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Update a saved query's tag, scan setting, or string_matches (pattern). When string_matches is provided, the query parameters and hash are updated. At least one of tag, scan, or string_matches is required.
   *
   * @param {string} accountID
   * @param {DomainSearchPatchAccountsAccountIDBrandProtectionQueriesParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   *
   * @example
   * ```ts
   * await client.domainSearch.patchAccountsAccountIDBrandProtectionQueries('accountId', {});
   * ```
   */
  patchAccountsAccountIDBrandProtectionQueries(
    accountID: string,
    body: DomainSearchPatchAccountsAccountIDBrandProtectionQueriesParams,
    options?: RequestOptions,
  ): APIPromise<void> {
    return this._client.patch(__scalarPath`/accounts/${accountID}/brand-protection/queries`, {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Return a success message after creating new saved string queries
   *
   * @param {string} accountID
   * @param {DomainSearchPostAccountsAccountIDBrandProtectionQueriesParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns No Content
   *
   * @example
   * ```ts
   * await client.domainSearch.postAccountsAccountIDBrandProtectionQueries('accountId', {
   *   body: {},
   * });
   * ```
   */
  postAccountsAccountIDBrandProtectionQueries(
    accountID: string,
    params: DomainSearchPostAccountsAccountIDBrandProtectionQueriesParams,
    options?: RequestOptions,
  ): APIPromise<void> {
    const { id, tag, scan, body } = params;
    return this._client.post(__scalarPath`/accounts/${accountID}/brand-protection/queries`, {
      body,
      query: { id, tag, scan },
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Return a success message after creating new saved string queries in bulk
   *
   * @param {string} accountID
   * @param {DomainSearchPostAccountsAccountIDBrandProtectionQueriesBulkParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns No Content
   *
   * @example
   * ```ts
   * await client.domainSearch.postAccountsAccountIDBrandProtectionQueriesBulk('accountId', {});
   * ```
   */
  postAccountsAccountIDBrandProtectionQueriesBulk(
    accountID: string,
    body: DomainSearchPostAccountsAccountIDBrandProtectionQueriesBulkParams,
    options?: RequestOptions,
  ): APIPromise<void> {
    return this._client.post(__scalarPath`/accounts/${accountID}/brand-protection/queries/bulk`, {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Hide a matched domain from the default view of a saved query's results. Dismissal is scoped to the calling account.
   *
   * @param {number} domainID
   * @param {DomainSearchPostAccountsAccountIDBrandProtectionQueriesQueryIDMatchesIDDismissParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   *
   * @example
   * ```ts
   * await client.domainSearch.postAccountsAccountIDBrandProtectionQueriesQueryIDMatchesIDDismiss(1, {
   *   account_id: 'accountId',
   *   query_id: 1,
   * });
   * ```
   */
  postAccountsAccountIDBrandProtectionQueriesQueryIDMatchesIDDismiss(
    domainID: number,
    params: DomainSearchPostAccountsAccountIDBrandProtectionQueriesQueryIDMatchesIDDismissParams,
    options?: RequestOptions,
  ): APIPromise<void> {
    const { account_id, query_id } = params;
    return this._client.post(
      __scalarPath`/accounts/${account_id}/brand-protection/queries/${query_id}/matches/${domainID}/dismiss`,
      { ...options, headers: buildHeaders([{ Accept: '*/*' }, options?.headers]) },
    );
  }

  /**
   * Restore a previously dismissed matched domain to the default view. Dismissal is scoped to the calling account.
   *
   * @param {number} domainID
   * @param {DomainSearchPostAccountsAccountIDBrandProtectionQueriesQueryIDMatchesIDUndismissParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   *
   * @example
   * ```ts
   * await client.domainSearch.postAccountsAccountIDBrandProtectionQueriesQueryIDMatchesIDUndismiss(1, {
   *   account_id: 'accountId',
   *   query_id: 1,
   * });
   * ```
   */
  postAccountsAccountIDBrandProtectionQueriesQueryIDMatchesIDUndismiss(
    domainID: number,
    params: DomainSearchPostAccountsAccountIDBrandProtectionQueriesQueryIDMatchesIDUndismissParams,
    options?: RequestOptions,
  ): APIPromise<void> {
    const { account_id, query_id } = params;
    return this._client.post(
      __scalarPath`/accounts/${account_id}/brand-protection/queries/${query_id}/matches/${domainID}/undismiss`,
      { ...options, headers: buildHeaders([{ Accept: '*/*' }, options?.headers]) },
    );
  }

  /**
   * Return new string queries
   *
   * @param {string} accountID
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   *
   * @example
   * ```ts
   * await client.domainSearch.search('accountId');
   * ```
   */
  search(accountID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.post(__scalarPath`/accounts/${accountID}/brand-protection/search`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Return the total number of saved string queries
   *
   * @param {string} accountID
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   *
   * @example
   * ```ts
   * await client.domainSearch.listAccountsAccountBrandProtectionTotalQueries('accountId');
   * ```
   */
  listAccountsAccountBrandProtectionTotalQueries(
    accountID: string,
    options?: RequestOptions,
  ): APIPromise<void> {
    return this._client.get(__scalarPath`/accounts/${accountID}/brand-protection/total-queries`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface DomainSearchListAccountsAccountBrandProtectionMatchesParams {
  id?: string;
  offset?: number;
  limit?: number;
  include_domain_id?: boolean;
  include_dismissed?: boolean;
}

export interface DomainSearchListAccountsAccountBrandProtectionMatchesDownloadParams {
  id?: string;
  offset?: number;
  limit?: number;
  include_domain_id?: boolean;
  include_dismissed?: boolean;
}

export interface DomainSearchDeleteAccountsAccountIDBrandProtectionQueriesParams {
  id?: string;
  tag?: string;
  scan?: boolean;
}

export interface DomainSearchPatchAccountsAccountIDBrandProtectionQueriesParams {
  /**
   * The query ID to update (required when updating tag or scan)
   */
  id?: number;
  /**
   * Whether to scan matches
   */
  scan?: boolean;
  /**
   * Updated pattern match constraints. When provided, replaces the existing string_matches.
   */
  string_matches?: Array<DomainSearchPatchAccountsAccountIDBrandProtectionQueriesParams.StringMatch>;
  /**
   * Query tag. Required as identifier when updating string_matches.
   */
  tag?: string;
}

export namespace DomainSearchPatchAccountsAccountIDBrandProtectionQueriesParams {
  export interface StringMatch {
    /**
     * The pattern to match against
     */
    pattern: string;
    /**
     * Maximum Levenshtein edit distance for fuzzy matching
     */
    max_edit_distance?: number;
  }
}

export interface DomainSearchPostAccountsAccountIDBrandProtectionQueriesParams {
  /**
   * Query param
   */
  id?: string;
  /**
   * Query param
   */
  tag?: string;
  /**
   * Query param
   */
  scan?: boolean;
  /**
   * Body param
   */
  body: unknown;
}

export type DomainSearchPostAccountsAccountIDBrandProtectionQueriesBulkParams = unknown;

export interface DomainSearchPostAccountsAccountIDBrandProtectionQueriesQueryIDMatchesIDDismissParams {
  /**
   * @minLength 1
   */
  account_id: string;
  /**
   * @minimum 0
   */
  query_id: number;
}

export interface DomainSearchPostAccountsAccountIDBrandProtectionQueriesQueryIDMatchesIDUndismissParams {
  /**
   * @minLength 1
   */
  account_id: string;
  /**
   * @minimum 0
   */
  query_id: number;
}
export declare namespace DomainSearch {
  export {
    type DomainSearchListAccountsAccountBrandProtectionMatchesParams as DomainSearchListAccountsAccountBrandProtectionMatchesParams,
    type DomainSearchListAccountsAccountBrandProtectionMatchesDownloadParams as DomainSearchListAccountsAccountBrandProtectionMatchesDownloadParams,
    type DomainSearchDeleteAccountsAccountIDBrandProtectionQueriesParams as DomainSearchDeleteAccountsAccountIDBrandProtectionQueriesParams,
    type DomainSearchPatchAccountsAccountIDBrandProtectionQueriesParams as DomainSearchPatchAccountsAccountIDBrandProtectionQueriesParams,
    type DomainSearchPostAccountsAccountIDBrandProtectionQueriesParams as DomainSearchPostAccountsAccountIDBrandProtectionQueriesParams,
    type DomainSearchPostAccountsAccountIDBrandProtectionQueriesBulkParams as DomainSearchPostAccountsAccountIDBrandProtectionQueriesBulkParams,
    type DomainSearchPostAccountsAccountIDBrandProtectionQueriesQueryIDMatchesIDDismissParams as DomainSearchPostAccountsAccountIDBrandProtectionQueriesQueryIDMatchesIDDismissParams,
    type DomainSearchPostAccountsAccountIDBrandProtectionQueriesQueryIDMatchesIDUndismissParams as DomainSearchPostAccountsAccountIDBrandProtectionQueriesQueryIDMatchesIDUndismissParams,
  };
}
