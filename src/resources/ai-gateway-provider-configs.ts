// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from '../resource';
import { APIPromise } from '../api-promise';
import type { RequestOptions } from '../internal/request-options';
import { path as __scalarPath } from '../internal/utils/path';

export class AIGatewayProviderConfigs extends APIResource {
  /**
   * Lists all AI Gateway evaluator types configured for the account.
   *
   * @param {string} gatewayID - gateway id
   * @param {AIGatewayProviderConfigAigListParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<AIGatewayProviderConfigAigListResponse>} List objects
   *
   * @example
   * ```ts
   * const aiGatewayProviderConfig = await client.aiGatewayProviderConfigs.aigList('my-gateway', {
   *   account_id: '3ebbcb006d4d46d7bb6a8c7f14676cb0',
   *   page: 1,
   *   per_page: 20,
   * });
   * ```
   */
  aigList(
    gatewayID: string,
    params: AIGatewayProviderConfigAigListParams,
    options?: RequestOptions,
  ): APIPromise<AIGatewayProviderConfigAigListResponse> {
    const { account_id, ...query } = params;
    return this._client.get(
      __scalarPath`/accounts/${account_id}/ai-gateway/gateways/${gatewayID}/provider_configs`,
      { query, ...options },
    );
  }

  /**
   * Creates a new AI Gateway.
   *
   * @param {string} gatewayID - gateway id
   * @param {AIGatewayProviderConfigAigCreateParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<AIGatewayProviderConfigAigCreateResponse>} Returns the created Object
   *
   * @example
   * ```ts
   * const aiGatewayProviderConfig = await client.aiGatewayProviderConfigs.aigCreate('my-gateway', {
   *   account_id: '3ebbcb006d4d46d7bb6a8c7f14676cb0',
   *   alias: '',
   *   default_config: false,
   *   provider_slug: '',
   *   rate_limit_period: 60,
   * });
   * ```
   */
  aigCreate(
    gatewayID: string,
    params: AIGatewayProviderConfigAigCreateParams,
    options?: RequestOptions,
  ): APIPromise<AIGatewayProviderConfigAigCreateResponse> {
    const { account_id, ...body } = params;
    return this._client.post(
      __scalarPath`/accounts/${account_id}/ai-gateway/gateways/${gatewayID}/provider_configs`,
      { body, ...options },
    );
  }

  /**
   * Deletes an AI Gateway dataset.
   *
   * @param {string} id
   * @param {AIGatewayProviderConfigAigDeleteParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<AIGatewayProviderConfigAigDeleteResponse>} Returns the Object if it was successfully deleted
   *
   * @example
   * ```ts
   * const aiGatewayProviderConfig = await client.aiGatewayProviderConfigs.aigDelete('id', {
   *   account_id: '3ebbcb006d4d46d7bb6a8c7f14676cb0',
   *   gateway_id: 'my-gateway',
   * });
   * ```
   */
  aigDelete(
    id: string,
    params: AIGatewayProviderConfigAigDeleteParams,
    options?: RequestOptions,
  ): APIPromise<AIGatewayProviderConfigAigDeleteResponse> {
    const { account_id, gateway_id } = params;
    return this._client.delete(
      __scalarPath`/accounts/${account_id}/ai-gateway/gateways/${gateway_id}/provider_configs/${id}`,
      options,
    );
  }

  /**
   * Updates an existing AI Gateway dataset.
   *
   * @param {string} id
   * @param {AIGatewayProviderConfigAigUpdateParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<AIGatewayProviderConfigAigUpdateResponse>} Returns the updated Object
   *
   * @example
   * ```ts
   * const aiGatewayProviderConfig = await client.aiGatewayProviderConfigs.aigUpdate('id', {
   *   account_id: '3ebbcb006d4d46d7bb6a8c7f14676cb0',
   *   gateway_id: 'my-gateway',
   *   secret: '',
   * });
   * ```
   */
  aigUpdate(
    id: string,
    params: AIGatewayProviderConfigAigUpdateParams,
    options?: RequestOptions,
  ): APIPromise<AIGatewayProviderConfigAigUpdateResponse> {
    const { account_id, gateway_id, ...body } = params;
    return this._client.put(
      __scalarPath`/accounts/${account_id}/ai-gateway/gateways/${gateway_id}/provider_configs/${id}`,
      { body, ...options },
    );
  }
}

export interface AIGatewayProviderConfigAigListParams {
  /**
   * Path param
   */
  account_id: string;
  /**
   * Query param
   * @default 1
   * @minimum 1
   */
  page?: number;
  /**
   * Query param
   * @default 20
   * @minimum 1
   * @maximum 100
   */
  per_page?: number;
}

export interface AIGatewayProviderConfigAigListResponse {
  result: Array<AIGatewayProviderConfigAigListResponse.Result>;
  success: boolean;
}

export namespace AIGatewayProviderConfigAigListResponse {
  export interface Result {
    alias: string;
    default_config: boolean;
    /**
     * gateway id
     * @minLength 1
     * @maxLength 64
     * @pattern ^[a-z0-9_]+(?:-[a-z0-9_]+)*$
     */
    gateway_id: string;
    id: string;
    /**
     * @format date-time
     */
    modified_at: string;
    provider_slug: string;
    secret_id: string;
    secret_preview: string;
    rate_limit?: number;
    /**
     * @default 60
     */
    rate_limit_period?: number;
  }
}

export interface AIGatewayProviderConfigAigCreateParams {
  /**
   * Path param
   */
  account_id: string;
  /**
   * Body param
   */
  alias: string;
  /**
   * Body param
   */
  default_config: boolean;
  /**
   * Body param
   */
  provider_slug: string;
  /**
   * Body param
   */
  rate_limit?: number;
  /**
   * Body param
   * @default 60
   */
  rate_limit_period?: number;
  /**
   * Body param
   */
  secret?: string;
  /**
   * Body param
   */
  secret_id?: string;
}

export interface AIGatewayProviderConfigAigCreateResponse {
  result: AIGatewayProviderConfigAigCreateResponse.Result;
  success: boolean;
}

export namespace AIGatewayProviderConfigAigCreateResponse {
  export interface Result {
    alias: string;
    default_config: boolean;
    /**
     * gateway id
     * @minLength 1
     * @maxLength 64
     * @pattern ^[a-z0-9_]+(?:-[a-z0-9_]+)*$
     */
    gateway_id: string;
    id: string;
    /**
     * @format date-time
     */
    modified_at: string;
    provider_slug: string;
    secret_id: string;
    secret_preview: string;
    rate_limit?: number;
    /**
     * @default 60
     */
    rate_limit_period?: number;
  }
}

export interface AIGatewayProviderConfigAigDeleteParams {
  account_id: string;
  /**
   * gateway id
   * @minLength 1
   * @maxLength 64
   * @pattern ^[a-z0-9_]+(?:-[a-z0-9_]+)*$
   */
  gateway_id: string;
}

export interface AIGatewayProviderConfigAigDeleteResponse {
  result: AIGatewayProviderConfigAigDeleteResponse.Result;
  success: boolean;
}

export namespace AIGatewayProviderConfigAigDeleteResponse {
  export interface Result {
    alias: string;
    default_config: boolean;
    /**
     * gateway id
     * @minLength 1
     * @maxLength 64
     * @pattern ^[a-z0-9_]+(?:-[a-z0-9_]+)*$
     */
    gateway_id: string;
    id: string;
    /**
     * @format date-time
     */
    modified_at: string;
    provider_slug: string;
    secret_id: string;
    secret_preview: string;
    rate_limit?: number;
    /**
     * @default 60
     */
    rate_limit_period?: number;
  }
}

export interface AIGatewayProviderConfigAigUpdateParams {
  /**
   * Path param
   */
  account_id: string;
  /**
   * Path param: gateway id
   * @minLength 1
   * @maxLength 64
   * @pattern ^[a-z0-9_]+(?:-[a-z0-9_]+)*$
   */
  gateway_id: string;
  /**
   * Body param
   */
  secret: string;
}

export interface AIGatewayProviderConfigAigUpdateResponse {
  result: AIGatewayProviderConfigAigUpdateResponse.Result;
  success: boolean;
}

export namespace AIGatewayProviderConfigAigUpdateResponse {
  export interface Result {
    alias: string;
    default_config: boolean;
    /**
     * gateway id
     * @minLength 1
     * @maxLength 64
     * @pattern ^[a-z0-9_]+(?:-[a-z0-9_]+)*$
     */
    gateway_id: string;
    id: string;
    /**
     * @format date-time
     */
    modified_at: string;
    provider_slug: string;
    secret_id: string;
    secret_preview: string;
    rate_limit?: number;
    /**
     * @default 60
     */
    rate_limit_period?: number;
  }
}
export declare namespace AIGatewayProviderConfigs {
  export {
    type AIGatewayProviderConfigAigListResponse as AIGatewayProviderConfigAigListResponse,
    type AIGatewayProviderConfigAigCreateResponse as AIGatewayProviderConfigAigCreateResponse,
    type AIGatewayProviderConfigAigDeleteResponse as AIGatewayProviderConfigAigDeleteResponse,
    type AIGatewayProviderConfigAigUpdateResponse as AIGatewayProviderConfigAigUpdateResponse,
    type AIGatewayProviderConfigAigListParams as AIGatewayProviderConfigAigListParams,
    type AIGatewayProviderConfigAigCreateParams as AIGatewayProviderConfigAigCreateParams,
    type AIGatewayProviderConfigAigDeleteParams as AIGatewayProviderConfigAigDeleteParams,
    type AIGatewayProviderConfigAigUpdateParams as AIGatewayProviderConfigAigUpdateParams,
  };
}
