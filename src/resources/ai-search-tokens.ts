// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from '../resource';
import { APIPromise } from '../api-promise';
import type { RequestOptions } from '../internal/request-options';
import { path as __scalarPath } from '../internal/utils/path';

export class AISearchTokens extends APIResource {
  /**
   * List stored AI Search credentials in the account without exposing their secrets.
   *
   * @param {string} accountID
   * @param {AISearchTokenListParams} [query] - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<AISearchTokenListResponse>} List of tokens.
   *
   * @example
   * ```ts
   * const aiSearchToken = await client.aiSearchTokens.list('c3dc5f0b34a14ff8e1b3ec04895e1b22', {
   *   page: 1,
   *   per_page: 20,
   * });
   * ```
   */
  list(
    accountID: string,
    query: AISearchTokenListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AISearchTokenListResponse> {
    return this._client.get(__scalarPath`/accounts/${accountID}/ai-search/tokens`, { query, ...options });
  }

  /**
   * Create a stored Cloudflare credential for an AI Search instance to access its data source.
   *
   * @param {string} accountID
   * @param {AISearchTokenCreateParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<AISearchTokenCreateResponse>} Token created.
   *
   * @example
   * ```ts
   * const aiSearchToken = await client.aiSearchTokens.create('c3dc5f0b34a14ff8e1b3ec04895e1b22', {
   *   cf_api_id: 'a1b2c3d4e5f6',
   *   cf_api_key: 'abc123',
   *   legacy: true,
   *   name: 'my-token',
   * });
   * ```
   */
  create(
    accountID: string,
    body: AISearchTokenCreateParams,
    options?: RequestOptions,
  ): APIPromise<AISearchTokenCreateResponse> {
    return this._client.post(__scalarPath`/accounts/${accountID}/ai-search/tokens`, { body, ...options });
  }

  /**
   * Permanently delete a stored AI Search credential. Credentials in use by an instance cannot be deleted.
   *
   * @param {string} id
   * @param {AISearchTokenDeleteParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<AISearchTokenDeleteResponse>} Token deleted.
   *
   * @example
   * ```ts
   * const aiSearchToken = await client.aiSearchTokens.delete('62af0db3-c410-40b2-9ee3-0e93f6dd1de0', {
   *   account_id: 'c3dc5f0b34a14ff8e1b3ec04895e1b22',
   * });
   * ```
   */
  delete(
    id: string,
    params: AISearchTokenDeleteParams,
    options?: RequestOptions,
  ): APIPromise<AISearchTokenDeleteResponse> {
    const { account_id } = params;
    return this._client.delete(__scalarPath`/accounts/${account_id}/ai-search/tokens/${id}`, options);
  }

  /**
   * Retrieve a stored AI Search credential without exposing its secret.
   *
   * @param {string} id
   * @param {AISearchTokenFetchParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<AISearchTokenFetchResponse>} Token details.
   *
   * @example
   * ```ts
   * const aiSearchToken = await client.aiSearchTokens.fetch('62af0db3-c410-40b2-9ee3-0e93f6dd1de0', {
   *   account_id: 'c3dc5f0b34a14ff8e1b3ec04895e1b22',
   * });
   * ```
   */
  fetch(
    id: string,
    params: AISearchTokenFetchParams,
    options?: RequestOptions,
  ): APIPromise<AISearchTokenFetchResponse> {
    const { account_id } = params;
    return this._client.get(__scalarPath`/accounts/${account_id}/ai-search/tokens/${id}`, options);
  }

  /**
   * Replace a stored AI Search credential and invalidate cached credentials for instances that use it.
   *
   * @param {string} id
   * @param {AISearchTokenUpdateParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<AISearchTokenUpdateResponse>} Returns the updated token.
   *
   * @example
   * ```ts
   * const aiSearchToken = await client.aiSearchTokens.update('62af0db3-c410-40b2-9ee3-0e93f6dd1de0', {
   *   account_id: 'c3dc5f0b34a14ff8e1b3ec04895e1b22',
   *   cf_api_id: 'a1b2c3d4e5f6',
   *   cf_api_key: 'abc123',
   *   legacy: true,
   *   name: 'my-token',
   * });
   * ```
   */
  update(
    id: string,
    params: AISearchTokenUpdateParams,
    options?: RequestOptions,
  ): APIPromise<AISearchTokenUpdateResponse> {
    const { account_id, ...body } = params;
    return this._client.put(__scalarPath`/accounts/${account_id}/ai-search/tokens/${id}`, {
      body,
      ...options,
    });
  }
}

export interface AISearchTokenListParams {
  /**
   * Page number (1-indexed).
   * @default 1
   * @minimum 1
   * @maximum 100
   */
  page?: number;
  /**
   * Number of results per page.
   * @default 20
   * @minimum 1
   * @maximum 100
   */
  per_page?: number;
  /**
   * Filter tokens whose name contains this string (case-insensitive).
   * @maxLength 256
   */
  search?: string;
}

export interface AISearchTokenListResponse {
  result: Array<AISearchTokenListResponse.Result>;
  result_info: AISearchTokenListResponse.ResultInfo;
  success: true;
}

export namespace AISearchTokenListResponse {
  export interface Result {
    cf_api_id: string;
    /**
     * @format date-time
     */
    created_at: string;
    /**
     * @format uuid
     */
    id: string;
    /**
     * @format date-time
     */
    modified_at: string;
    name: string;
    created_by?: string | null;
    /**
     * @default true
     */
    enabled?: boolean;
    /**
     * @default true
     */
    legacy?: boolean;
    modified_by?: string | null;
  }

  export interface ResultInfo {
    count: number;
    page: number;
    per_page: number;
    total_count: number;
  }
}

export interface AISearchTokenCreateParams {
  cf_api_id: string;
  cf_api_key: string;
  name: string;
  /**
   * @default true
   */
  legacy?: boolean;
}

export interface AISearchTokenCreateResponse {
  result: AISearchTokenCreateResponse.Result;
  success: true;
}

export namespace AISearchTokenCreateResponse {
  export interface Result {
    cf_api_id: string;
    /**
     * @format date-time
     */
    created_at: string;
    /**
     * @format uuid
     */
    id: string;
    /**
     * @format date-time
     */
    modified_at: string;
    name: string;
    created_by?: string | null;
    /**
     * @default true
     */
    enabled?: boolean;
    /**
     * @default true
     */
    legacy?: boolean;
    modified_by?: string | null;
  }
}

export interface AISearchTokenDeleteParams {
  account_id: string;
}

export interface AISearchTokenDeleteResponse {
  result: Record<string, unknown>;
  success: true;
}

export interface AISearchTokenFetchParams {
  account_id: string;
}

export interface AISearchTokenFetchResponse {
  result: AISearchTokenFetchResponse.Result;
  success: true;
}

export namespace AISearchTokenFetchResponse {
  export interface Result {
    cf_api_id: string;
    /**
     * @format date-time
     */
    created_at: string;
    /**
     * @format uuid
     */
    id: string;
    /**
     * @format date-time
     */
    modified_at: string;
    name: string;
    created_by?: string | null;
    /**
     * @default true
     */
    enabled?: boolean;
    /**
     * @default true
     */
    legacy?: boolean;
    modified_by?: string | null;
  }
}

export interface AISearchTokenUpdateParams {
  /**
   * Path param
   */
  account_id: string;
  /**
   * Body param
   */
  cf_api_id: string;
  /**
   * Body param
   */
  cf_api_key: string;
  /**
   * Body param
   * @default true
   */
  legacy?: boolean;
  /**
   * Body param
   */
  name: string;
}

export interface AISearchTokenUpdateResponse {
  result: AISearchTokenUpdateResponse.Result;
  success: true;
}

export namespace AISearchTokenUpdateResponse {
  export interface Result {
    cf_api_id: string;
    /**
     * @format date-time
     */
    created_at: string;
    /**
     * @format uuid
     */
    id: string;
    /**
     * @format date-time
     */
    modified_at: string;
    name: string;
    created_by?: string | null;
    /**
     * @default true
     */
    enabled?: boolean;
    /**
     * @default true
     */
    legacy?: boolean;
    modified_by?: string | null;
  }
}
export declare namespace AISearchTokens {
  export {
    type AISearchTokenListResponse as AISearchTokenListResponse,
    type AISearchTokenCreateResponse as AISearchTokenCreateResponse,
    type AISearchTokenDeleteResponse as AISearchTokenDeleteResponse,
    type AISearchTokenFetchResponse as AISearchTokenFetchResponse,
    type AISearchTokenUpdateResponse as AISearchTokenUpdateResponse,
    type AISearchTokenListParams as AISearchTokenListParams,
    type AISearchTokenCreateParams as AISearchTokenCreateParams,
    type AISearchTokenDeleteParams as AISearchTokenDeleteParams,
    type AISearchTokenFetchParams as AISearchTokenFetchParams,
    type AISearchTokenUpdateParams as AISearchTokenUpdateParams,
  };
}
