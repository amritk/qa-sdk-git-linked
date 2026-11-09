// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from '../resource';
import { APIPromise } from '../api-promise';
import type { RequestOptions } from '../internal/request-options';
import { path as __scalarPath } from '../internal/utils/path';

export class Rules extends APIResource {
  /**
   * Delete all rules in an account.
   *
   * @param {string} accountID
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<unknown>} All rules deleted.
   *
   * @example
   * ```ts
   * const response = await client.rules.cloudforceOneDeleteAll('accountId');
   * ```
   */
  cloudforceOneDeleteAll(accountID: string, options?: RequestOptions): APIPromise<unknown> {
    return this._client.delete(__scalarPath`/accounts/${accountID}/cloudforce-one/rules`, options);
  }

  /**
   * Returns all rules for an account with optional filtering.
   *
   * @param {string} accountID
   * @param {RuleCloudforceOneListParams} [query] - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<unknown>} List of rules.
   *
   * @example
   * ```ts
   * const response = await client.rules.cloudforceOneList('accountId', {
   *   limit: 50,
   *   offset: 0,
   * });
   * ```
   */
  cloudforceOneList(
    accountID: string,
    query: RuleCloudforceOneListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<unknown> {
    return this._client.get(__scalarPath`/accounts/${accountID}/cloudforce-one/rules`, { query, ...options });
  }

  /**
   * Create a new detection rule.
   *
   * @param {string} accountID
   * @param {RuleCloudforceOneCreateParams} [body] - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<unknown>} Rule created (non-email customer accounts).
   *
   * @example
   * ```ts
   * const response = await client.rules.cloudforceOneCreate('accountId');
   * ```
   */
  cloudforceOneCreate(
    accountID: string,
    body: RuleCloudforceOneCreateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<unknown> {
    return this._client.post(__scalarPath`/accounts/${accountID}/cloudforce-one/rules`, { body, ...options });
  }

  /**
   * Remove regex patterns from per-account exemption rules. Missing keys leave that type untouched; non-existent patterns are silently skipped.
   *
   * @param {string} accountID
   * @param {RuleCloudforceOneRemoveAccountExemptionsParams} [body] - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<unknown>} Full exemption state after the subtraction.
   *
   * @example
   * ```ts
   * const response = await client.rules.cloudforceOneRemoveAccountExemptions('accountId');
   * ```
   */
  cloudforceOneRemoveAccountExemptions(
    accountID: string,
    body: RuleCloudforceOneRemoveAccountExemptionsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<unknown> {
    return this._client.delete(__scalarPath`/accounts/${accountID}/cloudforce-one/rules/exemptions`, {
      body,
      ...options,
    });
  }

  /**
   * Get all exemption rule patterns for the account, grouped by type.
   *
   * @param {string} accountID
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<unknown>} Exemption rules grouped by type.
   *
   * @example
   * ```ts
   * const response = await client.rules.cloudforceOneGetExemptions('accountId');
   * ```
   */
  cloudforceOneGetExemptions(accountID: string, options?: RequestOptions): APIPromise<unknown> {
    return this._client.get(__scalarPath`/accounts/${accountID}/cloudforce-one/rules/exemptions`, options);
  }

  /**
   * Add regex patterns to per-account exemption rules (union semantics). Missing keys leave that type untouched; duplicates are silently deduped.
   *
   * @param {string} accountID
   * @param {RuleCloudforceOneAddAccountExemptionsParams} [body] - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<unknown>} Full exemption state after the union.
   *
   * @example
   * ```ts
   * const response = await client.rules.cloudforceOneAddAccountExemptions('accountId');
   * ```
   */
  cloudforceOneAddAccountExemptions(
    accountID: string,
    body: RuleCloudforceOneAddAccountExemptionsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<unknown> {
    return this._client.post(__scalarPath`/accounts/${accountID}/cloudforce-one/rules/exemptions`, {
      body,
      ...options,
    });
  }

  /**
   * Replace existing exemption patterns with new values. Each key maps to an array of {old_pattern, new_pattern} entries. Missing keys leave that type untouched. Fails if any old pattern is not found or any new pattern already exists.
   *
   * @param {string} accountID
   * @param {RuleCloudforceOneUpdateAccountExemptionsParams} [body] - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<unknown>} Full exemption state after the updates.
   *
   * @example
   * ```ts
   * const response = await client.rules.cloudforceOneUpdateAccountExemptions('accountId');
   * ```
   */
  cloudforceOneUpdateAccountExemptions(
    accountID: string,
    body: RuleCloudforceOneUpdateAccountExemptionsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<unknown> {
    return this._client.put(__scalarPath`/accounts/${accountID}/cloudforce-one/rules/exemptions`, {
      body,
      ...options,
    });
  }

  /**
   * Get DFP managed rule metadata (name and description) from YARA rules.
   *
   * @param {string} accountID
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<RuleCloudforceOneGetManagedResponse>} Managed rules metadata.
   *
   * @example
   * ```ts
   * const rule = await client.rules.cloudforceOneGetManaged('accountId');
   * ```
   */
  cloudforceOneGetManaged(
    accountID: string,
    options?: RequestOptions,
  ): APIPromise<RuleCloudforceOneGetManagedResponse> {
    return this._client.get(__scalarPath`/accounts/${accountID}/cloudforce-one/rules/managed`, options);
  }

  /**
   * Search rules using hybrid, vector, keyword, or exact retrieval, backed by AI Search with a SQL fallback.
   *
   * @param {string} accountID
   * @param {RuleSearchParams} query - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<unknown>} Hybrid and semantic rule search results.
   *
   * @example
   * ```ts
   * const response = await client.rules.search('accountId', {
   *   limit: 50,
   *   offset: 0,
   *   query: 'obfuscated proxy worker',
   *   mode: 'hybrid',
   * });
   * ```
   */
  search(accountID: string, query: RuleSearchParams, options?: RequestOptions): APIPromise<unknown> {
    return this._client.get(__scalarPath`/accounts/${accountID}/cloudforce-one/rules/search`, {
      query,
      ...options,
    });
  }

  /**
   * Get statistics about rules for the dashboard.
   *
   * @param {string} accountID
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<unknown>} Dashboard statistics.
   *
   * @example
   * ```ts
   * const response = await client.rules.cloudforceOneGetStats('accountId');
   * ```
   */
  cloudforceOneGetStats(accountID: string, options?: RequestOptions): APIPromise<unknown> {
    return this._client.get(__scalarPath`/accounts/${accountID}/cloudforce-one/rules/stats`, options);
  }

  /**
   * Returns structured email rules.
   *
   * @param {string} accountID
   * @param {RuleCloudforceOneListEmailParams} [query] - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<unknown>} List of rules.
   *
   * @example
   * ```ts
   * const response = await client.rules.cloudforceOneListEmail('accountId', {
   *   limit: 50,
   *   offset: 0,
   * });
   * ```
   */
  cloudforceOneListEmail(
    accountID: string,
    query: RuleCloudforceOneListEmailParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<unknown> {
    return this._client.get(__scalarPath`/accounts/${accountID}/cloudforce-one/rules/structured`, {
      query,
      ...options,
    });
  }

  /**
   * Create a structured email rule.
   *
   * @param {string} accountID
   * @param {RuleCloudforceOneCreateEmailParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<unknown>} Email rule created.
   *
   * @example
   * ```ts
   * const response = await client.rules.cloudforceOneCreateEmail('accountId', {
   *   condition: {},
   *   enabled: true,
   *   name: 'x',
   *   strings: [],
   * });
   * ```
   */
  cloudforceOneCreateEmail(
    accountID: string,
    body: RuleCloudforceOneCreateEmailParams,
    options?: RequestOptions,
  ): APIPromise<unknown> {
    return this._client.post(__scalarPath`/accounts/${accountID}/cloudforce-one/rules/structured`, {
      body,
      ...options,
    });
  }
}

export interface RuleCloudforceOneListParams {
  /**
   * Selects namespaces. Repeat the parameter to select multiple namespaces (for example, namespace=foo&namespace=bar).
   */
  namespace?: string | Array<string>;
  /**
   * Selects paths with exact-match semantics. Omit the parameter to return rules from all paths. Pass an empty string (path=) to return only rules with an empty or uncategorized path. Pass a value (for example, path=yara) to match that exact path. Repeat the parameter (for example, path=yara&path=expr) to OR-match multiple paths with SQL `IN (...)` semantics. The `recursive` flag affects only customer-account namespace selection.
   */
  path?: string | Array<string>;
  /**
   * For customer accounts, true enables descendant matching for namespaces. Paths always use exact matching.
   */
  recursive?: 'true' | 'false';
  search?: string;
  /**
   * Limits rules to the specified public visibility.
   */
  is_public?: 'true' | 'false';
  /**
   * @default 50
   * @minimum 1
   * @maximum 100
   */
  limit?: number;
  /**
   * @default 0
   * @minimum 0
   */
  offset?: number | null;
}

export type RuleCloudforceOneCreateParams = unknown;

export type RuleCloudforceOneRemoveAccountExemptionsParams = unknown;

export type RuleCloudforceOneAddAccountExemptionsParams = unknown;

export type RuleCloudforceOneUpdateAccountExemptionsParams = unknown;

export interface RuleCloudforceOneGetManagedResponse {
  metadata: RuleCloudforceOneGetManagedResponse.Metadata;
  rules: Array<RuleCloudforceOneGetManagedResponse.Rule>;
}

export namespace RuleCloudforceOneGetManagedResponse {
  export interface Metadata {
    fetched_at: string;
    total_rules: number;
  }

  export interface Rule {
    description: string;
    name: string;
  }
}

export interface RuleSearchParams {
  /**
   * Selects namespaces. Repeat the parameter to select multiple namespaces (for example, namespace=foo&namespace=bar).
   */
  namespace?: string | Array<string>;
  /**
   * Selects paths with exact-match semantics. Omit the parameter to return rules from all paths. Pass an empty string (path=) to return only rules with an empty or uncategorized path. Pass a value (for example, path=yara) to match that exact path. Repeat the parameter (for example, path=yara&path=expr) to OR-match multiple paths with SQL `IN (...)` semantics. The `recursive` flag affects only customer-account namespace selection.
   */
  path?: string | Array<string>;
  /**
   * For customer accounts, true enables descendant matching for namespaces. Paths always use exact matching.
   */
  recursive?: 'true' | 'false';
  search?: string;
  /**
   * Limits rules to the specified public visibility.
   */
  is_public?: 'true' | 'false';
  /**
   * @default 50
   * @minimum 1
   * @maximum 100
   */
  limit?: number;
  /**
   * @default 0
   * @minimum 0
   */
  offset?: number | null;
  /**
   * Natural-language or keyword search query.
   * @minLength 1
   * @maxLength 500
   */
  query: string;
  /**
   * Retrieval strategy used for the query.
   * @default hybrid
   */
  mode?: 'exact' | 'hybrid' | 'vector' | 'keyword';
  /**
   * Limits results to the specified rule language.
   */
  language?: 'yara' | 'js';
}

export interface RuleCloudforceOneListEmailParams {
  /**
   * @default 50
   * @minimum 1
   * @maximum 100
   */
  limit?: number;
  /**
   * @default 0
   * @minimum 0
   */
  offset?: number | null;
  search?: string;
}

export interface RuleCloudforceOneCreateEmailParams {
  condition: unknown;
  /**
   * @minLength 1
   * @maxLength 255
   */
  name: string;
  /**
   * @maxLength 1000
   */
  description?: string;
  /**
   * @default true
   */
  enabled?: boolean;
  /**
   * @maxItems 50
   */
  meta?: Array<unknown>;
  /**
   * @default []
   * @maxItems 50
   */
  strings?: Array<RuleCloudforceOneCreateEmailParams.String>;
}

export namespace RuleCloudforceOneCreateEmailParams {
  export interface String {
    /**
     * @minLength 1
     * @maxLength 128
     * @pattern ^[a-zA-Z_][a-zA-Z0-9_]*$
     */
    identifier: string;
    type: 'string_match';
    /**
     * @minLength 1
     * @maxLength 10000
     */
    value: string;
    /**
     * @default text
     */
    match_type?: 'text' | 'hex' | 'regex';
    /**
     * @default []
     */
    modifiers?: Array<'nocase' | 'wide' | 'ascii' | 'fullword'>;
  }
}
export declare namespace Rules {
  export {
    type RuleCloudforceOneGetManagedResponse as RuleCloudforceOneGetManagedResponse,
    type RuleCloudforceOneListParams as RuleCloudforceOneListParams,
    type RuleCloudforceOneCreateParams as RuleCloudforceOneCreateParams,
    type RuleCloudforceOneRemoveAccountExemptionsParams as RuleCloudforceOneRemoveAccountExemptionsParams,
    type RuleCloudforceOneAddAccountExemptionsParams as RuleCloudforceOneAddAccountExemptionsParams,
    type RuleCloudforceOneUpdateAccountExemptionsParams as RuleCloudforceOneUpdateAccountExemptionsParams,
    type RuleSearchParams as RuleSearchParams,
    type RuleCloudforceOneListEmailParams as RuleCloudforceOneListEmailParams,
    type RuleCloudforceOneCreateEmailParams as RuleCloudforceOneCreateEmailParams,
  };
}
