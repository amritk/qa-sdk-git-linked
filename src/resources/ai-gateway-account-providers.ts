// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from '../resource';
import { APIPromise } from '../api-promise';
import type { RequestOptions } from '../internal/request-options';
import { path as __scalarPath } from '../internal/utils/path';

export class AIGatewayAccountProviders extends APIResource {
  /**
   * Lists all AI Gateway evaluator types configured for the account.
   *
   * @param {string} accountID
   * @param {AIGatewayAccountProviderAigConfigListParams} [query] - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<AIGatewayAccountProviderAigConfigListResponse>} List objects
   *
   * @example
   * ```ts
   * const aiGatewayAccountProvider = await client.aiGatewayAccountProviders.aigConfigList(
   *   '3ebbcb006d4d46d7bb6a8c7f14676cb0',
   *   {
   *     page: 1,
   *     per_page: 20,
   *   },
   * );
   * ```
   */
  aigConfigList(
    accountID: string,
    query: AIGatewayAccountProviderAigConfigListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AIGatewayAccountProviderAigConfigListResponse> {
    return this._client.get(__scalarPath`/accounts/${accountID}/ai-gateway/custom-providers`, {
      query,
      ...options,
    });
  }

  /**
   * Creates a new AI Gateway.
   *
   * @param {string} accountID
   * @param {AIGatewayAccountProviderAigConfigCreateParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<AIGatewayAccountProviderAigConfigCreateResponse>} Returns the created Object
   *
   * @example
   * ```ts
   * const aiGatewayAccountProvider = await client.aiGatewayAccountProviders.aigConfigCreate(
   *   '3ebbcb006d4d46d7bb6a8c7f14676cb0',
   *   {
   *     base_url: 'https://example.com',
   *     name: '',
   *     slug: '',
   *   },
   * );
   * ```
   */
  aigConfigCreate(
    accountID: string,
    body: AIGatewayAccountProviderAigConfigCreateParams,
    options?: RequestOptions,
  ): APIPromise<AIGatewayAccountProviderAigConfigCreateResponse> {
    return this._client.post(__scalarPath`/accounts/${accountID}/ai-gateway/custom-providers`, {
      body,
      ...options,
    });
  }

  /**
   * Deletes an AI Gateway dataset.
   *
   * @param {string} id
   * @param {AIGatewayAccountProviderAigConfigDeleteParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<AIGatewayAccountProviderAigConfigDeleteResponse>} Returns the Object if it was successfully deleted
   *
   * @example
   * ```ts
   * const aiGatewayAccountProvider = await client.aiGatewayAccountProviders.aigConfigDelete(
   *   '7c9e6679-7425-40de-944b-e07fc1f90ae7',
   *   {
   *     account_id: '3ebbcb006d4d46d7bb6a8c7f14676cb0',
   *   },
   * );
   * ```
   */
  aigConfigDelete(
    id: string,
    params: AIGatewayAccountProviderAigConfigDeleteParams,
    options?: RequestOptions,
  ): APIPromise<AIGatewayAccountProviderAigConfigDeleteResponse> {
    const { account_id } = params;
    return this._client.delete(
      __scalarPath`/accounts/${account_id}/ai-gateway/custom-providers/${id}`,
      options,
    );
  }

  /**
   * Retrieves details for a specific AI Gateway dataset.
   *
   * @param {string} id
   * @param {AIGatewayAccountProviderAigConfigFetchParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<AIGatewayAccountProviderAigConfigFetchResponse>} Returns a single object if found
   *
   * @example
   * ```ts
   * const aiGatewayAccountProvider = await client.aiGatewayAccountProviders.aigConfigFetch(
   *   '7c9e6679-7425-40de-944b-e07fc1f90ae7',
   *   {
   *     account_id: '3ebbcb006d4d46d7bb6a8c7f14676cb0',
   *   },
   * );
   * ```
   */
  aigConfigFetch(
    id: string,
    params: AIGatewayAccountProviderAigConfigFetchParams,
    options?: RequestOptions,
  ): APIPromise<AIGatewayAccountProviderAigConfigFetchResponse> {
    const { account_id } = params;
    return this._client.get(__scalarPath`/accounts/${account_id}/ai-gateway/custom-providers/${id}`, options);
  }

  /**
   * Updates an existing AI Gateway dataset.
   *
   * @param {string} id
   * @param {AIGatewayAccountProviderAigConfigUpdateParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<AIGatewayAccountProviderAigConfigUpdateResponse>} Returns the updated Object
   *
   * @example
   * ```ts
   * const aiGatewayAccountProvider = await client.aiGatewayAccountProviders.aigConfigUpdate(
   *   '7c9e6679-7425-40de-944b-e07fc1f90ae7',
   *   {
   *     account_id: '3ebbcb006d4d46d7bb6a8c7f14676cb0',
   *   },
   * );
   * ```
   */
  aigConfigUpdate(
    id: string,
    params: AIGatewayAccountProviderAigConfigUpdateParams,
    options?: RequestOptions,
  ): APIPromise<AIGatewayAccountProviderAigConfigUpdateResponse> {
    const { account_id, ...body } = params;
    return this._client.patch(__scalarPath`/accounts/${account_id}/ai-gateway/custom-providers/${id}`, {
      body,
      ...options,
    });
  }
}

export interface AIGatewayAccountProviderAigConfigListParams {
  /**
   * @default 1
   * @minimum 1
   */
  page?: number;
  /**
   * @default 20
   * @minimum 1
   * @maximum 100
   */
  per_page?: number;
  beta?: boolean;
  enable?: boolean;
  /**
   * Search by id, name, slug
   */
  search?: string;
}

export interface AIGatewayAccountProviderAigConfigListResponse {
  result: Array<AIGatewayAccountProviderAigConfigListResponse.Result>;
  success: boolean;
}

export namespace AIGatewayAccountProviderAigConfigListResponse {
  export interface Result {
    /**
     * @format uri
     */
    base_url: string;
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
    /**
     * @pattern ^[a-zA-Z0-9_-]+$
     */
    slug: string;
    beta?: boolean;
    curl_example?: string;
    description?: string;
    enable?: boolean;
    /**
     * @maxLength 8192
     */
    headers?: string;
    js_example?: string;
    link?: string;
    logo?: string;
    position?: number;
  }
}

export interface AIGatewayAccountProviderAigConfigCreateParams {
  /**
   * @format uri
   */
  base_url: string;
  name: string;
  /**
   * @pattern ^[a-zA-Z0-9_-]+$
   */
  slug: string;
  beta?: boolean;
  curl_example?: string;
  description?: string;
  enable?: boolean;
  /**
   * @maxLength 8192
   */
  headers?: string;
  js_example?: string;
  link?: string;
  position?: number;
}

export interface AIGatewayAccountProviderAigConfigCreateResponse {
  result: AIGatewayAccountProviderAigConfigCreateResponse.Result;
  success: boolean;
}

export namespace AIGatewayAccountProviderAigConfigCreateResponse {
  export interface Result {
    /**
     * @format uri
     */
    base_url: string;
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
    /**
     * @pattern ^[a-zA-Z0-9_-]+$
     */
    slug: string;
    beta?: boolean;
    curl_example?: string;
    description?: string;
    enable?: boolean;
    /**
     * @maxLength 8192
     */
    headers?: string;
    js_example?: string;
    link?: string;
    logo?: string;
    position?: number;
  }
}

export interface AIGatewayAccountProviderAigConfigDeleteParams {
  account_id: string;
}

export interface AIGatewayAccountProviderAigConfigDeleteResponse {
  result: AIGatewayAccountProviderAigConfigDeleteResponse.Result;
  success: boolean;
}

export namespace AIGatewayAccountProviderAigConfigDeleteResponse {
  export interface Result {
    /**
     * @format uri
     */
    base_url: string;
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
    /**
     * @pattern ^[a-zA-Z0-9_-]+$
     */
    slug: string;
    beta?: boolean;
    curl_example?: string;
    description?: string;
    enable?: boolean;
    /**
     * @maxLength 8192
     */
    headers?: string;
    js_example?: string;
    link?: string;
    logo?: string;
    position?: number;
  }
}

export interface AIGatewayAccountProviderAigConfigFetchParams {
  account_id: string;
}

export interface AIGatewayAccountProviderAigConfigFetchResponse {
  result: AIGatewayAccountProviderAigConfigFetchResponse.Result;
  success: boolean;
}

export namespace AIGatewayAccountProviderAigConfigFetchResponse {
  export interface Result {
    /**
     * @format uri
     */
    base_url: string;
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
    /**
     * @pattern ^[a-zA-Z0-9_-]+$
     */
    slug: string;
    beta?: boolean;
    curl_example?: string;
    description?: string;
    enable?: boolean;
    /**
     * @maxLength 8192
     */
    headers?: string;
    js_example?: string;
    link?: string;
    logo?: string;
    position?: number;
  }
}

export interface AIGatewayAccountProviderAigConfigUpdateParams {
  /**
   * Path param
   */
  account_id: string;
  /**
   * Body param
   * @format uri
   */
  base_url?: string;
  /**
   * Body param
   */
  beta?: boolean;
  /**
   * Body param
   */
  curl_example?: string;
  /**
   * Body param
   */
  description?: string;
  /**
   * Body param
   */
  enable?: boolean;
  /**
   * Body param
   * @maxLength 8192
   */
  headers?: string;
  /**
   * Body param
   */
  js_example?: string;
  /**
   * Body param
   */
  link?: string;
  /**
   * Body param
   */
  logo?: string;
  /**
   * Body param
   */
  name?: string;
  /**
   * Body param
   */
  position?: number;
  /**
   * Body param
   * @pattern ^[a-zA-Z0-9_-]+$
   */
  slug?: string;
}

export interface AIGatewayAccountProviderAigConfigUpdateResponse {
  result: AIGatewayAccountProviderAigConfigUpdateResponse.Result;
  success: boolean;
}

export namespace AIGatewayAccountProviderAigConfigUpdateResponse {
  export interface Result {
    /**
     * @format uri
     */
    base_url: string;
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
    /**
     * @pattern ^[a-zA-Z0-9_-]+$
     */
    slug: string;
    beta?: boolean;
    curl_example?: string;
    description?: string;
    enable?: boolean;
    /**
     * @maxLength 8192
     */
    headers?: string;
    js_example?: string;
    link?: string;
    logo?: string;
    position?: number;
  }
}
export declare namespace AIGatewayAccountProviders {
  export {
    type AIGatewayAccountProviderAigConfigListResponse as AIGatewayAccountProviderAigConfigListResponse,
    type AIGatewayAccountProviderAigConfigCreateResponse as AIGatewayAccountProviderAigConfigCreateResponse,
    type AIGatewayAccountProviderAigConfigDeleteResponse as AIGatewayAccountProviderAigConfigDeleteResponse,
    type AIGatewayAccountProviderAigConfigFetchResponse as AIGatewayAccountProviderAigConfigFetchResponse,
    type AIGatewayAccountProviderAigConfigUpdateResponse as AIGatewayAccountProviderAigConfigUpdateResponse,
    type AIGatewayAccountProviderAigConfigListParams as AIGatewayAccountProviderAigConfigListParams,
    type AIGatewayAccountProviderAigConfigCreateParams as AIGatewayAccountProviderAigConfigCreateParams,
    type AIGatewayAccountProviderAigConfigDeleteParams as AIGatewayAccountProviderAigConfigDeleteParams,
    type AIGatewayAccountProviderAigConfigFetchParams as AIGatewayAccountProviderAigConfigFetchParams,
    type AIGatewayAccountProviderAigConfigUpdateParams as AIGatewayAccountProviderAigConfigUpdateParams,
  };
}
