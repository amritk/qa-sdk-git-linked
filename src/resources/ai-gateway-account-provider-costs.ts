// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from '../resource';
import { APIPromise } from '../api-promise';
import type { RequestOptions } from '../internal/request-options';
import { path as __scalarPath } from '../internal/utils/path';

export class AIGatewayAccountProviderCosts extends APIResource {
  /**
   * Lists all AI Gateway evaluator types configured for the account.
   *
   * @param {string} accountID
   * @param {AIGatewayAccountProviderCostAigConfigListParams} [query] - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<AIGatewayAccountProviderCostAigConfigListResponse>} List objects
   *
   * @example
   * ```ts
   * const aiGatewayAccountProviderCost = await client.aiGatewayAccountProviderCosts.aigConfigList(
   *   '3ebbcb006d4d46d7bb6a8c7f14676cb0',
   *   {
   *     page: 1,
   *     per_page: 20,
   *     model_rule: 'equals',
   *     cost_type: 'tokens',
   *   },
   * );
   * ```
   */
  aigConfigList(
    accountID: string,
    query: AIGatewayAccountProviderCostAigConfigListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AIGatewayAccountProviderCostAigConfigListResponse> {
    return this._client.get(__scalarPath`/accounts/${accountID}/ai-gateway/custom-providers/costs`, {
      query,
      ...options,
    });
  }

  /**
   * Creates a new AI Gateway.
   *
   * @param {string} accountID
   * @param {AIGatewayAccountProviderCostAigConfigCreateParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<AIGatewayAccountProviderCostAigConfigCreateResponse>} Returns the created Object
   *
   * @example
   * ```ts
   * const aiGatewayAccountProviderCost = await client.aiGatewayAccountProviderCosts.aigConfigCreate(
   *   '3ebbcb006d4d46d7bb6a8c7f14676cb0',
   *   {
   *     account_provider_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
   *     cost_type: 'tokens',
   *     model: '',
   *     model_rule: 'equals',
   *   },
   * );
   * ```
   */
  aigConfigCreate(
    accountID: string,
    body: AIGatewayAccountProviderCostAigConfigCreateParams,
    options?: RequestOptions,
  ): APIPromise<AIGatewayAccountProviderCostAigConfigCreateResponse> {
    return this._client.post(__scalarPath`/accounts/${accountID}/ai-gateway/custom-providers/costs`, {
      body,
      ...options,
    });
  }

  /**
   * Deletes an AI Gateway dataset.
   *
   * @param {string} id
   * @param {AIGatewayAccountProviderCostAigConfigDeleteParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<AIGatewayAccountProviderCostAigConfigDeleteResponse>} Returns the Object if it was successfully deleted
   *
   * @example
   * ```ts
   * const aiGatewayAccountProviderCost = await client.aiGatewayAccountProviderCosts.aigConfigDelete(
   *   '7c9e6679-7425-40de-944b-e07fc1f90ae7',
   *   {
   *     account_id: '3ebbcb006d4d46d7bb6a8c7f14676cb0',
   *   },
   * );
   * ```
   */
  aigConfigDelete(
    id: string,
    params: AIGatewayAccountProviderCostAigConfigDeleteParams,
    options?: RequestOptions,
  ): APIPromise<AIGatewayAccountProviderCostAigConfigDeleteResponse> {
    const { account_id } = params;
    return this._client.delete(
      __scalarPath`/accounts/${account_id}/ai-gateway/custom-providers/costs/${id}`,
      options,
    );
  }

  /**
   * Retrieves details for a specific AI Gateway dataset.
   *
   * @param {string} id
   * @param {AIGatewayAccountProviderCostAigConfigFetchParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<AIGatewayAccountProviderCostAigConfigFetchResponse>} Returns a single object if found
   *
   * @example
   * ```ts
   * const aiGatewayAccountProviderCost = await client.aiGatewayAccountProviderCosts.aigConfigFetch(
   *   '7c9e6679-7425-40de-944b-e07fc1f90ae7',
   *   {
   *     account_id: '3ebbcb006d4d46d7bb6a8c7f14676cb0',
   *   },
   * );
   * ```
   */
  aigConfigFetch(
    id: string,
    params: AIGatewayAccountProviderCostAigConfigFetchParams,
    options?: RequestOptions,
  ): APIPromise<AIGatewayAccountProviderCostAigConfigFetchResponse> {
    const { account_id } = params;
    return this._client.get(
      __scalarPath`/accounts/${account_id}/ai-gateway/custom-providers/costs/${id}`,
      options,
    );
  }

  /**
   * Updates an existing AI Gateway dataset.
   *
   * @param {string} id
   * @param {AIGatewayAccountProviderCostAigConfigUpdateParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<AIGatewayAccountProviderCostAigConfigUpdateResponse>} Returns the updated Object
   *
   * @example
   * ```ts
   * const aiGatewayAccountProviderCost = await client.aiGatewayAccountProviderCosts.aigConfigUpdate(
   *   '7c9e6679-7425-40de-944b-e07fc1f90ae7',
   *   {
   *     account_id: '3ebbcb006d4d46d7bb6a8c7f14676cb0',
   *     cost_type: 'tokens',
   *     model_rule: 'equals',
   *   },
   * );
   * ```
   */
  aigConfigUpdate(
    id: string,
    params: AIGatewayAccountProviderCostAigConfigUpdateParams,
    options?: RequestOptions,
  ): APIPromise<AIGatewayAccountProviderCostAigConfigUpdateResponse> {
    const { account_id, ...body } = params;
    return this._client.patch(__scalarPath`/accounts/${account_id}/ai-gateway/custom-providers/costs/${id}`, {
      body,
      ...options,
    });
  }
}

export interface AIGatewayAccountProviderCostAigConfigListParams {
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
  enable?: boolean;
  /**
   * @format uuid
   */
  account_provider_id?: string;
  /**
   * @default equals
   */
  model_rule?: 'equals' | 'starts-with' | 'contains';
  /**
   * @default tokens
   */
  cost_type?: string;
  /**
   * Search by model, changed_by
   */
  search?: string;
}

export interface AIGatewayAccountProviderCostAigConfigListResponse {
  result: Array<AIGatewayAccountProviderCostAigConfigListResponse.Result>;
  success: boolean;
}

export namespace AIGatewayAccountProviderCostAigConfigListResponse {
  export interface Result {
    /**
     * @format uuid
     */
    account_provider_id: string;
    /**
     * @format date-time
     */
    created_at: string;
    /**
     * @format uuid
     */
    id: string;
    model: string;
    /**
     * @format date-time
     */
    modified_at: string;
    /**
     * @default manual
     */
    changed_by?: string;
    cost_in?: number;
    cost_out?: number;
    /**
     * @default tokens
     */
    cost_type?: string;
    enable?: boolean;
    /**
     * @default equals
     */
    model_rule?: 'equals' | 'starts-with' | 'contains';
    token_pricing?: string;
    weight?: number;
  }
}

export interface AIGatewayAccountProviderCostAigConfigCreateParams {
  /**
   * @format uuid
   */
  account_provider_id: string;
  model: string;
  cost_in?: number;
  cost_out?: number;
  /**
   * @default tokens
   */
  cost_type?: string;
  enable?: boolean;
  /**
   * @default equals
   */
  model_rule?: 'equals' | 'starts-with' | 'contains';
  token_pricing?: AIGatewayAccountProviderCostAigConfigCreateParams.TokenPricing;
}

export namespace AIGatewayAccountProviderCostAigConfigCreateParams {
  export interface TokenPricing {
    input_audio_tokens?: number;
    input_cache_creation_tokens?: number;
    input_cached_tokens?: number;
    input_image_count?: number;
    input_image_tokens?: number;
    input_text_tokens?: number;
    input_tokens?: number;
    input_video_tokens?: number;
    output_image_count?: number;
    output_reasoning_tokens?: number;
    output_tokens?: number;
    total_tokens?: number;
  }
}

export interface AIGatewayAccountProviderCostAigConfigCreateResponse {
  result: AIGatewayAccountProviderCostAigConfigCreateResponse.Result;
  success: boolean;
}

export namespace AIGatewayAccountProviderCostAigConfigCreateResponse {
  export interface Result {
    /**
     * @format uuid
     */
    account_provider_id: string;
    /**
     * @format date-time
     */
    created_at: string;
    /**
     * @format uuid
     */
    id: string;
    model: string;
    /**
     * @format date-time
     */
    modified_at: string;
    /**
     * @default manual
     */
    changed_by?: string;
    cost_in?: number;
    cost_out?: number;
    /**
     * @default tokens
     */
    cost_type?: string;
    enable?: boolean;
    /**
     * @default equals
     */
    model_rule?: 'equals' | 'starts-with' | 'contains';
    token_pricing?: string;
    weight?: number;
  }
}

export interface AIGatewayAccountProviderCostAigConfigDeleteParams {
  account_id: string;
}

export interface AIGatewayAccountProviderCostAigConfigDeleteResponse {
  result: AIGatewayAccountProviderCostAigConfigDeleteResponse.Result;
  success: boolean;
}

export namespace AIGatewayAccountProviderCostAigConfigDeleteResponse {
  export interface Result {
    /**
     * @format uuid
     */
    account_provider_id: string;
    /**
     * @format date-time
     */
    created_at: string;
    /**
     * @format uuid
     */
    id: string;
    model: string;
    /**
     * @format date-time
     */
    modified_at: string;
    /**
     * @default manual
     */
    changed_by?: string;
    cost_in?: number;
    cost_out?: number;
    /**
     * @default tokens
     */
    cost_type?: string;
    enable?: boolean;
    /**
     * @default equals
     */
    model_rule?: 'equals' | 'starts-with' | 'contains';
    token_pricing?: string;
    weight?: number;
  }
}

export interface AIGatewayAccountProviderCostAigConfigFetchParams {
  account_id: string;
}

export interface AIGatewayAccountProviderCostAigConfigFetchResponse {
  result: AIGatewayAccountProviderCostAigConfigFetchResponse.Result;
  success: boolean;
}

export namespace AIGatewayAccountProviderCostAigConfigFetchResponse {
  export interface Result {
    /**
     * @format uuid
     */
    account_provider_id: string;
    /**
     * @format date-time
     */
    created_at: string;
    /**
     * @format uuid
     */
    id: string;
    model: string;
    /**
     * @format date-time
     */
    modified_at: string;
    /**
     * @default manual
     */
    changed_by?: string;
    cost_in?: number;
    cost_out?: number;
    /**
     * @default tokens
     */
    cost_type?: string;
    enable?: boolean;
    /**
     * @default equals
     */
    model_rule?: 'equals' | 'starts-with' | 'contains';
    token_pricing?: string;
    weight?: number;
  }
}

export interface AIGatewayAccountProviderCostAigConfigUpdateParams {
  /**
   * Path param
   */
  account_id: string;
  /**
   * Body param
   */
  cost_in?: number;
  /**
   * Body param
   */
  cost_out?: number;
  /**
   * Body param
   * @default tokens
   */
  cost_type?: string;
  /**
   * Body param
   */
  enable?: boolean;
  /**
   * Body param
   */
  model?: string;
  /**
   * Body param
   * @default equals
   */
  model_rule?: 'equals' | 'starts-with' | 'contains';
  /**
   * Body param
   */
  token_pricing?: AIGatewayAccountProviderCostAigConfigUpdateParams.TokenPricing;
}

export namespace AIGatewayAccountProviderCostAigConfigUpdateParams {
  export interface TokenPricing {
    input_audio_tokens?: number;
    input_cache_creation_tokens?: number;
    input_cached_tokens?: number;
    input_image_count?: number;
    input_image_tokens?: number;
    input_text_tokens?: number;
    input_tokens?: number;
    input_video_tokens?: number;
    output_image_count?: number;
    output_reasoning_tokens?: number;
    output_tokens?: number;
    total_tokens?: number;
  }
}

export interface AIGatewayAccountProviderCostAigConfigUpdateResponse {
  result: AIGatewayAccountProviderCostAigConfigUpdateResponse.Result;
  success: boolean;
}

export namespace AIGatewayAccountProviderCostAigConfigUpdateResponse {
  export interface Result {
    /**
     * @format uuid
     */
    account_provider_id: string;
    /**
     * @format date-time
     */
    created_at: string;
    /**
     * @format uuid
     */
    id: string;
    model: string;
    /**
     * @format date-time
     */
    modified_at: string;
    /**
     * @default manual
     */
    changed_by?: string;
    cost_in?: number;
    cost_out?: number;
    /**
     * @default tokens
     */
    cost_type?: string;
    enable?: boolean;
    /**
     * @default equals
     */
    model_rule?: 'equals' | 'starts-with' | 'contains';
    token_pricing?: string;
    weight?: number;
  }
}
export declare namespace AIGatewayAccountProviderCosts {
  export {
    type AIGatewayAccountProviderCostAigConfigListResponse as AIGatewayAccountProviderCostAigConfigListResponse,
    type AIGatewayAccountProviderCostAigConfigCreateResponse as AIGatewayAccountProviderCostAigConfigCreateResponse,
    type AIGatewayAccountProviderCostAigConfigDeleteResponse as AIGatewayAccountProviderCostAigConfigDeleteResponse,
    type AIGatewayAccountProviderCostAigConfigFetchResponse as AIGatewayAccountProviderCostAigConfigFetchResponse,
    type AIGatewayAccountProviderCostAigConfigUpdateResponse as AIGatewayAccountProviderCostAigConfigUpdateResponse,
    type AIGatewayAccountProviderCostAigConfigListParams as AIGatewayAccountProviderCostAigConfigListParams,
    type AIGatewayAccountProviderCostAigConfigCreateParams as AIGatewayAccountProviderCostAigConfigCreateParams,
    type AIGatewayAccountProviderCostAigConfigDeleteParams as AIGatewayAccountProviderCostAigConfigDeleteParams,
    type AIGatewayAccountProviderCostAigConfigFetchParams as AIGatewayAccountProviderCostAigConfigFetchParams,
    type AIGatewayAccountProviderCostAigConfigUpdateParams as AIGatewayAccountProviderCostAigConfigUpdateParams,
  };
}
