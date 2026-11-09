// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from '../resource';
import { APIPromise } from '../api-promise';
import type { RequestOptions } from '../internal/request-options';
import { path as __scalarPath } from '../internal/utils/path';

export class AIGatewayLogs extends APIResource {
  /**
   * Deletes gateway log entries matching the specified criteria.
   *
   * @param {string} gatewayID - gateway id
   * @param {AIGatewayLogAigConfigDeleteParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<AIGatewayLogAigConfigDeleteResponse>} Returns if the delete was successful
   *
   * @example
   * ```ts
   * const aiGatewayLog = await client.aiGatewayLogs.aigConfigDelete('my-gateway', {
   *   account_id: '0d37909e38d3e99c29fa2cd343ac421a',
   *   order_by: 'created_at',
   *   order_by_direction: 'asc',
   *   limit: 10000,
   * });
   * ```
   */
  aigConfigDelete(
    gatewayID: string,
    params: AIGatewayLogAigConfigDeleteParams,
    options?: RequestOptions,
  ): APIPromise<AIGatewayLogAigConfigDeleteResponse> {
    const { account_id, order_by, order_by_direction, filters, limit } = params;
    return this._client.delete(__scalarPath`/accounts/${account_id}/ai-gateway/gateways/${gatewayID}/logs`, {
      query: { order_by, order_by_direction, filters, limit },
      ...options,
    });
  }

  /**
   * Lists request/response log entries for the AI gateway with filtering and pagination.
   *
   * @param {string} gatewayID - gateway id
   * @param {AIGatewayLogAigConfigListParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<AIGatewayLogAigConfigListResponse>} Returns a list of Gateway Logs
   *
   * @example
   * ```ts
   * const aiGatewayLog = await client.aiGatewayLogs.aigConfigList('my-gateway', {
   *   account_id: '0d37909e38d3e99c29fa2cd343ac421a',
   *   page: 1,
   *   per_page: 20,
   *   order_by: 'created_at',
   *   order_by_direction: 'desc',
   * });
   * ```
   */
  aigConfigList(
    gatewayID: string,
    params: AIGatewayLogAigConfigListParams,
    options?: RequestOptions,
  ): APIPromise<AIGatewayLogAigConfigListResponse> {
    const { account_id, ...query } = params;
    return this._client.get(__scalarPath`/accounts/${account_id}/ai-gateway/gateways/${gatewayID}/logs`, {
      query,
      ...options,
    });
  }

  /**
   * Retrieves detailed information for a specific AI Gateway log entry.
   *
   * @param {string} id
   * @param {AIGatewayLogAigConfigGetDetailParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<AIGatewayLogAigConfigGetDetailResponse>} Returns the log details
   *
   * @example
   * ```ts
   * const aiGatewayLog = await client.aiGatewayLogs.aigConfigGetDetail('id', {
   *   gateway_id: 'my-gateway',
   *   account_id: '0d37909e38d3e99c29fa2cd343ac421a',
   * });
   * ```
   */
  aigConfigGetDetail(
    id: string,
    params: AIGatewayLogAigConfigGetDetailParams,
    options?: RequestOptions,
  ): APIPromise<AIGatewayLogAigConfigGetDetailResponse> {
    const { gateway_id, account_id } = params;
    return this._client.get(
      __scalarPath`/accounts/${account_id}/ai-gateway/gateways/${gateway_id}/logs/${id}`,
      options,
    );
  }

  /**
   * Updates metadata for an AI Gateway log entry.
   *
   * @param {string} id
   * @param {AIGatewayLogAigConfigPatchParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<AIGatewayLogAigConfigPatchResponse>} Returns the log details
   *
   * @example
   * ```ts
   * const aiGatewayLog = await client.aiGatewayLogs.aigConfigPatch('id', {
   *   gateway_id: 'my-gateway',
   *   account_id: '0d37909e38d3e99c29fa2cd343ac421a',
   * });
   * ```
   */
  aigConfigPatch(
    id: string,
    params: AIGatewayLogAigConfigPatchParams,
    options?: RequestOptions,
  ): APIPromise<AIGatewayLogAigConfigPatchResponse> {
    const { gateway_id, account_id, ...body } = params;
    return this._client.patch(
      __scalarPath`/accounts/${account_id}/ai-gateway/gateways/${gateway_id}/logs/${id}`,
      { body, ...options },
    );
  }

  /**
   * Retrieves the original request payload for an AI Gateway log entry.
   *
   * @param {string} id
   * @param {AIGatewayLogAigConfigGetRequestParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<AIGatewayLogAigConfigGetRequestResponse>} Returns the request body from a specific log
   *
   * @example
   * ```ts
   * const aiGatewayLog = await client.aiGatewayLogs.aigConfigGetRequest('id', {
   *   gateway_id: 'my-gateway',
   *   account_id: '0d37909e38d3e99c29fa2cd343ac421a',
   * });
   * ```
   */
  aigConfigGetRequest(
    id: string,
    params: AIGatewayLogAigConfigGetRequestParams,
    options?: RequestOptions,
  ): APIPromise<AIGatewayLogAigConfigGetRequestResponse> {
    const { gateway_id, account_id } = params;
    return this._client.get(
      __scalarPath`/accounts/${account_id}/ai-gateway/gateways/${gateway_id}/logs/${id}/request`,
      options,
    );
  }

  /**
   * Retrieves the response payload for an AI Gateway log entry.
   *
   * @param {string} id
   * @param {AIGatewayLogAigConfigGetResponseParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<AIGatewayLogAigConfigGetResponseResponse>} Returns the response body from a specific log
   *
   * @example
   * ```ts
   * const aiGatewayLog = await client.aiGatewayLogs.aigConfigGetResponse('id', {
   *   gateway_id: 'my-gateway',
   *   account_id: '0d37909e38d3e99c29fa2cd343ac421a',
   * });
   * ```
   */
  aigConfigGetResponse(
    id: string,
    params: AIGatewayLogAigConfigGetResponseParams,
    options?: RequestOptions,
  ): APIPromise<AIGatewayLogAigConfigGetResponseResponse> {
    const { gateway_id, account_id } = params;
    return this._client.get(
      __scalarPath`/accounts/${account_id}/ai-gateway/gateways/${gateway_id}/logs/${id}/response`,
      options,
    );
  }
}

export interface AIGatewayLogAigConfigDeleteParams {
  /**
   * Path param
   */
  account_id: string;
  /**
   * Query param
   * @default created_at
   */
  order_by?:
    | 'created_at'
    | 'provider'
    | 'model'
    | 'model_type'
    | 'success'
    | 'cached'
    | 'cost'
    | 'tokens_in'
    | 'tokens_out'
    | 'duration'
    | 'feedback';
  /**
   * Query param
   * @default asc
   */
  order_by_direction?: 'asc' | 'desc';
  /**
   * Query param
   */
  filters?: Array<AIGatewayLogAigConfigDeleteParams.Filter>;
  /**
   * Query param
   * @default 10000
   * @minimum 1
   * @maximum 10000
   */
  limit?: number;
}

export namespace AIGatewayLogAigConfigDeleteParams {
  export interface Filter {
    key:
      | 'id'
      | 'created_at'
      | 'request_content_type'
      | 'response_content_type'
      | 'request_type'
      | 'success'
      | 'cached'
      | 'provider'
      | 'model'
      | 'model_type'
      | 'cost'
      | 'tokens'
      | 'tokens_in'
      | 'tokens_out'
      | 'duration'
      | 'feedback'
      | 'event_id'
      | 'metadata.key'
      | 'metadata.value'
      | 'authentication'
      | 'wholesale'
      | 'compatibilityMode'
      | 'dlp_action'
      | 'user_agent';
    operator: 'eq' | 'neq' | 'contains' | 'lt' | 'gt';
    value: Array<string | null | number | boolean>;
  }
}

export interface AIGatewayLogAigConfigDeleteResponse {
  success: boolean;
}

export interface AIGatewayLogAigConfigListParams {
  /**
   * Path param
   */
  account_id: string;
  /**
   * Query param
   */
  search?: string;
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
   * @maximum 50
   */
  per_page?: number;
  /**
   * Query param
   * @default created_at
   */
  order_by?: 'created_at' | 'provider' | 'model' | 'model_type' | 'success' | 'cached';
  /**
   * Query param
   * @default desc
   */
  order_by_direction?: 'asc' | 'desc';
  /**
   * Query param
   */
  filters?: Array<AIGatewayLogAigConfigListParams.Filter>;
  /**
   * Query param
   */
  meta_info?: boolean;
  /**
   * Query param
   */
  direction?: 'asc' | 'desc';
  /**
   * Query param
   * @format date-time
   */
  start_date?: string;
  /**
   * Query param
   * @format date-time
   */
  end_date?: string;
  /**
   * Query param
   */
  min_cost?: number;
  /**
   * Query param
   */
  max_cost?: number;
  /**
   * Query param
   */
  min_tokens_in?: number;
  /**
   * Query param
   */
  max_tokens_in?: number;
  /**
   * Query param
   */
  min_tokens_out?: number;
  /**
   * Query param
   */
  max_tokens_out?: number;
  /**
   * Query param
   */
  min_total_tokens?: number;
  /**
   * Query param
   */
  max_total_tokens?: number;
  /**
   * Query param
   */
  min_duration?: number;
  /**
   * Query param
   */
  max_duration?: number;
  /**
   * Query param
   */
  feedback?: -1 | 0 | 1;
  /**
   * Query param
   */
  success?: boolean;
  /**
   * Query param
   */
  cached?: boolean;
  /**
   * Query param
   */
  model?: string;
  /**
   * Query param
   */
  model_type?: string;
  /**
   * Query param
   */
  provider?: string;
  /**
   * Query param
   */
  request_content_type?: string;
  /**
   * Query param
   */
  response_content_type?: string;
}

export namespace AIGatewayLogAigConfigListParams {
  export interface Filter {
    key:
      | 'id'
      | 'created_at'
      | 'request_content_type'
      | 'response_content_type'
      | 'request_type'
      | 'success'
      | 'cached'
      | 'provider'
      | 'model'
      | 'model_type'
      | 'cost'
      | 'tokens'
      | 'tokens_in'
      | 'tokens_out'
      | 'duration'
      | 'feedback'
      | 'event_id'
      | 'metadata.key'
      | 'metadata.value'
      | 'authentication'
      | 'wholesale'
      | 'compatibilityMode'
      | 'dlp_action'
      | 'user_agent';
    operator: 'eq' | 'neq' | 'contains' | 'lt' | 'gt';
    value: Array<string | null | number | boolean>;
  }
}

export interface AIGatewayLogAigConfigListResponse {
  result: Array<AIGatewayLogAigConfigListResponse.Result>;
  result_info: AIGatewayLogAigConfigListResponse.ResultInfo;
  success: boolean;
}

export namespace AIGatewayLogAigConfigListResponse {
  export interface Result {
    cached: boolean;
    /**
     * @format date-time
     */
    created_at: string;
    duration: number;
    id: string;
    model: string;
    path: string;
    provider: string;
    success: boolean;
    tokens_in: number | null;
    tokens_out: number | null;
    cost?: number;
    custom_cost?: boolean;
    metadata?: string;
    model_type?: string;
    request_content_type?: string;
    request_type?: string;
    response_content_type?: string;
    status_code?: number;
    step?: number;
  }

  export interface ResultInfo {
    count?: number;
    max_cost?: number;
    max_duration?: number;
    max_tokens_in?: number;
    max_tokens_out?: number;
    max_total_tokens?: number;
    min_cost?: number;
    min_duration?: number;
    min_tokens_in?: number;
    min_tokens_out?: number;
    min_total_tokens?: number;
    page?: number;
    per_page?: number;
    total_count?: number;
  }
}

export interface AIGatewayLogAigConfigGetDetailParams {
  /**
   * gateway id
   * @minLength 1
   * @maxLength 64
   * @pattern ^[a-z0-9_]+(?:-[a-z0-9_]+)*$
   */
  gateway_id: string;
  account_id: string;
}

export interface AIGatewayLogAigConfigGetDetailResponse {
  result: AIGatewayLogAigConfigGetDetailResponse.Result;
  success: boolean;
}

export namespace AIGatewayLogAigConfigGetDetailResponse {
  export interface Result {
    cached: boolean;
    /**
     * @format date-time
     */
    created_at: string;
    duration: number;
    id: string;
    model: string;
    path: string;
    provider: string;
    success: boolean;
    tokens_in: number | null;
    tokens_out: number | null;
    cost?: number;
    custom_cost?: boolean;
    metadata?: string;
    model_type?: string;
    request_content_type?: string;
    request_head?: string;
    request_head_complete?: boolean;
    request_size?: number;
    request_type?: string;
    response_content_type?: string;
    response_head?: string;
    response_head_complete?: boolean;
    response_size?: number;
    status_code?: number;
    step?: number;
  }
}

export interface AIGatewayLogAigConfigPatchParams {
  /**
   * Path param: gateway id
   * @minLength 1
   * @maxLength 64
   * @pattern ^[a-z0-9_]+(?:-[a-z0-9_]+)*$
   */
  gateway_id: string;
  /**
   * Path param
   */
  account_id: string;
  /**
   * Body param
   * @minimum -1
   * @maximum 1
   */
  feedback?: number | null;
  /**
   * Body param
   */
  metadata?: Record<string, string | number | boolean> | null;
  /**
   * Body param
   * @minimum 0
   * @maximum 100
   */
  score?: number | null;
}

export interface AIGatewayLogAigConfigPatchResponse {
  result: Record<string, unknown>;
  success: boolean;
}

export interface AIGatewayLogAigConfigGetRequestParams {
  /**
   * gateway id
   * @minLength 1
   * @maxLength 64
   * @pattern ^[a-z0-9_]+(?:-[a-z0-9_]+)*$
   */
  gateway_id: string;
  account_id: string;
}

export type AIGatewayLogAigConfigGetRequestResponse = Record<string, unknown>;

export interface AIGatewayLogAigConfigGetResponseParams {
  /**
   * gateway id
   * @minLength 1
   * @maxLength 64
   * @pattern ^[a-z0-9_]+(?:-[a-z0-9_]+)*$
   */
  gateway_id: string;
  account_id: string;
}

export type AIGatewayLogAigConfigGetResponseResponse = Record<string, unknown>;
export declare namespace AIGatewayLogs {
  export {
    type AIGatewayLogAigConfigDeleteResponse as AIGatewayLogAigConfigDeleteResponse,
    type AIGatewayLogAigConfigListResponse as AIGatewayLogAigConfigListResponse,
    type AIGatewayLogAigConfigGetDetailResponse as AIGatewayLogAigConfigGetDetailResponse,
    type AIGatewayLogAigConfigPatchResponse as AIGatewayLogAigConfigPatchResponse,
    type AIGatewayLogAigConfigGetRequestResponse as AIGatewayLogAigConfigGetRequestResponse,
    type AIGatewayLogAigConfigGetResponseResponse as AIGatewayLogAigConfigGetResponseResponse,
    type AIGatewayLogAigConfigDeleteParams as AIGatewayLogAigConfigDeleteParams,
    type AIGatewayLogAigConfigListParams as AIGatewayLogAigConfigListParams,
    type AIGatewayLogAigConfigGetDetailParams as AIGatewayLogAigConfigGetDetailParams,
    type AIGatewayLogAigConfigPatchParams as AIGatewayLogAigConfigPatchParams,
    type AIGatewayLogAigConfigGetRequestParams as AIGatewayLogAigConfigGetRequestParams,
    type AIGatewayLogAigConfigGetResponseParams as AIGatewayLogAigConfigGetResponseParams,
  };
}
