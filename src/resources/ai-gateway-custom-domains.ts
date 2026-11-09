// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from '../resource';
import { APIPromise } from '../api-promise';
import type { RequestOptions } from '../internal/request-options';
import { path as __scalarPath } from '../internal/utils/path';

export class AIGatewayCustomDomains extends APIResource {
  /**
   * Lists all AI Gateway evaluator types configured for the account.
   *
   * @param {string} gatewayID - gateway id
   * @param {AIGatewayCustomDomainAigConfigListParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<AIGatewayCustomDomainAigConfigListResponse>} List objects
   *
   * @example
   * ```ts
   * const aiGatewayCustomDomain = await client.aiGatewayCustomDomains.aigConfigList('my-gateway', {
   *   account_id: '3ebbcb006d4d46d7bb6a8c7f14676cb0',
   *   page: 1,
   *   per_page: 20,
   * });
   * ```
   */
  aigConfigList(
    gatewayID: string,
    params: AIGatewayCustomDomainAigConfigListParams,
    options?: RequestOptions,
  ): APIPromise<AIGatewayCustomDomainAigConfigListResponse> {
    const { account_id, ...query } = params;
    return this._client.get(
      __scalarPath`/accounts/${account_id}/ai-gateway/gateways/${gatewayID}/custom-domains`,
      { query, ...options },
    );
  }

  /**
   * Provisions a Cloudflare-for-SaaS custom hostname and returns the CNAME target to point DNS at.
   *
   * @param {string} gatewayID - gateway id
   * @param {AIGatewayCustomDomainAigConfigCreateParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<AIGatewayCustomDomainAigConfigCreateResponse>} The created custom domain and the CNAME target to configure.
   *
   * @example
   * ```ts
   * const aiGatewayCustomDomain = await client.aiGatewayCustomDomains.aigConfigCreate('my-gateway', {
   *   account_id: '3ebbcb006d4d46d7bb6a8c7f14676cb0',
   *   domain: 'ai.acme.com',
   *   zone_id: '395566f4c8a5b9d2a5fc0d457b007c44',
   * });
   * ```
   */
  aigConfigCreate(
    gatewayID: string,
    params: AIGatewayCustomDomainAigConfigCreateParams,
    options?: RequestOptions,
  ): APIPromise<AIGatewayCustomDomainAigConfigCreateResponse> {
    const { account_id, ...body } = params;
    return this._client.post(
      __scalarPath`/accounts/${account_id}/ai-gateway/gateways/${gatewayID}/custom-domains`,
      { body, ...options },
    );
  }

  /**
   * Deletes an AI Gateway dataset.
   *
   * @param {string} hostname - the customer-owned custom hostname
   * @param {AIGatewayCustomDomainAigConfigDeleteParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<AIGatewayCustomDomainAigConfigDeleteResponse>} Returns the Object if it was successfully deleted
   *
   * @example
   * ```ts
   * const aiGatewayCustomDomain = await client.aiGatewayCustomDomains.aigConfigDelete('ai.acme.com', {
   *   account_id: '3ebbcb006d4d46d7bb6a8c7f14676cb0',
   *   gateway_id: 'my-gateway',
   * });
   * ```
   */
  aigConfigDelete(
    hostname: string,
    params: AIGatewayCustomDomainAigConfigDeleteParams,
    options?: RequestOptions,
  ): APIPromise<AIGatewayCustomDomainAigConfigDeleteResponse> {
    const { account_id, gateway_id } = params;
    return this._client.delete(
      __scalarPath`/accounts/${account_id}/ai-gateway/gateways/${gateway_id}/custom-domains/${hostname}`,
      options,
    );
  }

  /**
   * Retrieves details for a specific AI Gateway dataset.
   *
   * @param {string} hostname - the customer-owned custom hostname
   * @param {AIGatewayCustomDomainAigConfigFetchParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<AIGatewayCustomDomainAigConfigFetchResponse>} Returns a single object if found
   *
   * @example
   * ```ts
   * const aiGatewayCustomDomain = await client.aiGatewayCustomDomains.aigConfigFetch('ai.acme.com', {
   *   account_id: '3ebbcb006d4d46d7bb6a8c7f14676cb0',
   *   gateway_id: 'my-gateway',
   * });
   * ```
   */
  aigConfigFetch(
    hostname: string,
    params: AIGatewayCustomDomainAigConfigFetchParams,
    options?: RequestOptions,
  ): APIPromise<AIGatewayCustomDomainAigConfigFetchResponse> {
    const { account_id, gateway_id } = params;
    return this._client.get(
      __scalarPath`/accounts/${account_id}/ai-gateway/gateways/${gateway_id}/custom-domains/${hostname}`,
      options,
    );
  }
}

export interface AIGatewayCustomDomainAigConfigListParams {
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
  /**
   * Query param
   */
  status?: 'initializing' | 'pending_dcv' | 'active' | 'blocked' | 'error';
  /**
   * Query param: Search by hostname
   */
  search?: string;
}

export interface AIGatewayCustomDomainAigConfigListResponse {
  result: Array<AIGatewayCustomDomainAigConfigListResponse.Result>;
  success: boolean;
}

export namespace AIGatewayCustomDomainAigConfigListResponse {
  export interface Result {
    /**
     * epoch milliseconds
     */
    created_at: number;
    /**
     * gateway id
     * @minLength 1
     * @maxLength 64
     * @pattern ^[a-z0-9_]+(?:-[a-z0-9_]+)*$
     */
    gateway_id: string;
    /**
     * the customer-owned custom hostname
     * @minLength 1
     * @maxLength 253
     * @pattern ^[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?(?:\.[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?)+$
     */
    hostname: string;
    /**
     * epoch milliseconds
     */
    modified_at: number;
    ssl_hostname_id: string | null;
    status: 'initializing' | 'pending_dcv' | 'active' | 'blocked' | 'error';
  }
}

export interface AIGatewayCustomDomainAigConfigCreateParams {
  /**
   * Path param
   */
  account_id: string;
  /**
   * Body param: the customer-owned custom hostname
   * @minLength 1
   * @maxLength 253
   * @pattern ^[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?(?:\.[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?)+$
   */
  domain: string;
  /**
   * Body param
   */
  minTLS?: '1.0' | '1.1' | '1.2' | '1.3';
  /**
   * Body param: Cloudflare Zone ID owning the custom hostname
   * @pattern ^[0-9a-f]{32}$
   */
  zone_id: string;
}

export interface AIGatewayCustomDomainAigConfigCreateResponse {
  result: AIGatewayCustomDomainAigConfigCreateResponse.Result;
  success: true;
}

export namespace AIGatewayCustomDomainAigConfigCreateResponse {
  export interface Result {
    cname_target: string;
    /**
     * epoch milliseconds
     */
    created_at: number;
    gateway_id: string;
    hostname: string;
    /**
     * epoch milliseconds
     */
    modified_at: number;
    status: 'initializing' | 'pending_dcv' | 'active' | 'blocked' | 'error';
  }
}

export interface AIGatewayCustomDomainAigConfigDeleteParams {
  account_id: string;
  /**
   * gateway id
   * @minLength 1
   * @maxLength 64
   * @pattern ^[a-z0-9_]+(?:-[a-z0-9_]+)*$
   */
  gateway_id: string;
}

export interface AIGatewayCustomDomainAigConfigDeleteResponse {
  result: AIGatewayCustomDomainAigConfigDeleteResponse.Result;
  success: boolean;
}

export namespace AIGatewayCustomDomainAigConfigDeleteResponse {
  export interface Result {
    /**
     * epoch milliseconds
     */
    created_at: number;
    /**
     * gateway id
     * @minLength 1
     * @maxLength 64
     * @pattern ^[a-z0-9_]+(?:-[a-z0-9_]+)*$
     */
    gateway_id: string;
    /**
     * the customer-owned custom hostname
     * @minLength 1
     * @maxLength 253
     * @pattern ^[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?(?:\.[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?)+$
     */
    hostname: string;
    /**
     * epoch milliseconds
     */
    modified_at: number;
    ssl_hostname_id: string | null;
    status: 'initializing' | 'pending_dcv' | 'active' | 'blocked' | 'error';
  }
}

export interface AIGatewayCustomDomainAigConfigFetchParams {
  account_id: string;
  /**
   * gateway id
   * @minLength 1
   * @maxLength 64
   * @pattern ^[a-z0-9_]+(?:-[a-z0-9_]+)*$
   */
  gateway_id: string;
}

export interface AIGatewayCustomDomainAigConfigFetchResponse {
  result: AIGatewayCustomDomainAigConfigFetchResponse.Result;
  success: boolean;
}

export namespace AIGatewayCustomDomainAigConfigFetchResponse {
  export interface Result {
    /**
     * epoch milliseconds
     */
    created_at: number;
    /**
     * gateway id
     * @minLength 1
     * @maxLength 64
     * @pattern ^[a-z0-9_]+(?:-[a-z0-9_]+)*$
     */
    gateway_id: string;
    /**
     * the customer-owned custom hostname
     * @minLength 1
     * @maxLength 253
     * @pattern ^[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?(?:\.[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?)+$
     */
    hostname: string;
    /**
     * epoch milliseconds
     */
    modified_at: number;
    ssl_hostname_id: string | null;
    status: 'initializing' | 'pending_dcv' | 'active' | 'blocked' | 'error';
  }
}
export declare namespace AIGatewayCustomDomains {
  export {
    type AIGatewayCustomDomainAigConfigListResponse as AIGatewayCustomDomainAigConfigListResponse,
    type AIGatewayCustomDomainAigConfigCreateResponse as AIGatewayCustomDomainAigConfigCreateResponse,
    type AIGatewayCustomDomainAigConfigDeleteResponse as AIGatewayCustomDomainAigConfigDeleteResponse,
    type AIGatewayCustomDomainAigConfigFetchResponse as AIGatewayCustomDomainAigConfigFetchResponse,
    type AIGatewayCustomDomainAigConfigListParams as AIGatewayCustomDomainAigConfigListParams,
    type AIGatewayCustomDomainAigConfigCreateParams as AIGatewayCustomDomainAigConfigCreateParams,
    type AIGatewayCustomDomainAigConfigDeleteParams as AIGatewayCustomDomainAigConfigDeleteParams,
    type AIGatewayCustomDomainAigConfigFetchParams as AIGatewayCustomDomainAigConfigFetchParams,
  };
}
