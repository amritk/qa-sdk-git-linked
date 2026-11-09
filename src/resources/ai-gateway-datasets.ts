// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from '../resource';
import { APIPromise } from '../api-promise';
import type { RequestOptions } from '../internal/request-options';
import { path as __scalarPath } from '../internal/utils/path';

export class AIGatewayDatasets extends APIResource {
  /**
   * Lists all AI Gateway evaluator types configured for the account.
   *
   * @param {string} gatewayID - gateway id
   * @param {AIGatewayDatasetAigConfigListParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<AIGatewayDatasetAigConfigListResponse>} List objects
   *
   * @example
   * ```ts
   * const aiGatewayDataset = await client.aiGatewayDatasets.aigConfigList('my-gateway', {
   *   account_id: '3ebbcb006d4d46d7bb6a8c7f14676cb0',
   *   page: 1,
   *   per_page: 20,
   * });
   * ```
   */
  aigConfigList(
    gatewayID: string,
    params: AIGatewayDatasetAigConfigListParams,
    options?: RequestOptions,
  ): APIPromise<AIGatewayDatasetAigConfigListResponse> {
    const { account_id, ...query } = params;
    return this._client.get(__scalarPath`/accounts/${account_id}/ai-gateway/gateways/${gatewayID}/datasets`, {
      query,
      ...options,
    });
  }

  /**
   * Creates a new AI Gateway.
   *
   * @param {string} gatewayID - gateway id
   * @param {AIGatewayDatasetAigConfigCreateParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<AIGatewayDatasetAigConfigCreateResponse>} Returns the created Object
   *
   * @example
   * ```ts
   * const aiGatewayDataset = await client.aiGatewayDatasets.aigConfigCreate('my-gateway', {
   *   account_id: '3ebbcb006d4d46d7bb6a8c7f14676cb0',
   *   enable: false,
   *   filters: [
   *     {
   *       key: 'created_at',
   *       operator: 'eq',
   *       value: [''],
   *     },
   *   ],
   *   name: '',
   * });
   * ```
   */
  aigConfigCreate(
    gatewayID: string,
    params: AIGatewayDatasetAigConfigCreateParams,
    options?: RequestOptions,
  ): APIPromise<AIGatewayDatasetAigConfigCreateResponse> {
    const { account_id, ...body } = params;
    return this._client.post(
      __scalarPath`/accounts/${account_id}/ai-gateway/gateways/${gatewayID}/datasets`,
      { body, ...options },
    );
  }

  /**
   * Deletes an AI Gateway dataset.
   *
   * @param {string} id
   * @param {AIGatewayDatasetAigConfigDeleteParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<AIGatewayDatasetAigConfigDeleteResponse>} Returns the Object if it was successfully deleted
   *
   * @example
   * ```ts
   * const aiGatewayDataset = await client.aiGatewayDatasets.aigConfigDelete('id', {
   *   account_id: '3ebbcb006d4d46d7bb6a8c7f14676cb0',
   *   gateway_id: 'my-gateway',
   * });
   * ```
   */
  aigConfigDelete(
    id: string,
    params: AIGatewayDatasetAigConfigDeleteParams,
    options?: RequestOptions,
  ): APIPromise<AIGatewayDatasetAigConfigDeleteResponse> {
    const { account_id, gateway_id } = params;
    return this._client.delete(
      __scalarPath`/accounts/${account_id}/ai-gateway/gateways/${gateway_id}/datasets/${id}`,
      options,
    );
  }

  /**
   * Retrieves details for a specific AI Gateway dataset.
   *
   * @param {string} id
   * @param {AIGatewayDatasetAigConfigFetchParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<AIGatewayDatasetAigConfigFetchResponse>} Returns a single object if found
   *
   * @example
   * ```ts
   * const aiGatewayDataset = await client.aiGatewayDatasets.aigConfigFetch('id', {
   *   account_id: '3ebbcb006d4d46d7bb6a8c7f14676cb0',
   *   gateway_id: 'my-gateway',
   * });
   * ```
   */
  aigConfigFetch(
    id: string,
    params: AIGatewayDatasetAigConfigFetchParams,
    options?: RequestOptions,
  ): APIPromise<AIGatewayDatasetAigConfigFetchResponse> {
    const { account_id, gateway_id } = params;
    return this._client.get(
      __scalarPath`/accounts/${account_id}/ai-gateway/gateways/${gateway_id}/datasets/${id}`,
      options,
    );
  }

  /**
   * Updates an existing AI Gateway dataset.
   *
   * @param {string} id
   * @param {AIGatewayDatasetAigConfigUpdateParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<AIGatewayDatasetAigConfigUpdateResponse>} Returns the updated Object
   *
   * @example
   * ```ts
   * const aiGatewayDataset = await client.aiGatewayDatasets.aigConfigUpdate('id', {
   *   account_id: '3ebbcb006d4d46d7bb6a8c7f14676cb0',
   *   gateway_id: 'my-gateway',
   *   enable: false,
   *   filters: [
   *     {
   *       key: 'created_at',
   *       operator: 'eq',
   *       value: [''],
   *     },
   *   ],
   *   name: '',
   * });
   * ```
   */
  aigConfigUpdate(
    id: string,
    params: AIGatewayDatasetAigConfigUpdateParams,
    options?: RequestOptions,
  ): APIPromise<AIGatewayDatasetAigConfigUpdateResponse> {
    const { account_id, gateway_id, ...body } = params;
    return this._client.put(
      __scalarPath`/accounts/${account_id}/ai-gateway/gateways/${gateway_id}/datasets/${id}`,
      { body, ...options },
    );
  }
}

export interface AIGatewayDatasetAigConfigListParams {
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
  name?: string;
  /**
   * Query param
   */
  enable?: boolean;
  /**
   * Query param: Search by id, name, filters
   */
  search?: string;
}

export interface AIGatewayDatasetAigConfigListResponse {
  result: Array<AIGatewayDatasetAigConfigListResponse.Result>;
  success: boolean;
}

export namespace AIGatewayDatasetAigConfigListResponse {
  export interface Result {
    /**
     * @format date-time
     */
    created_at: string;
    enable: boolean;
    filters: Array<Result.Filter>;
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
    name: string;
  }

  export namespace Result {
    export interface Filter {
      key:
        | 'created_at'
        | 'request_content_type'
        | 'response_content_type'
        | 'success'
        | 'cached'
        | 'provider'
        | 'model'
        | 'cost'
        | 'tokens'
        | 'tokens_in'
        | 'tokens_out'
        | 'duration'
        | 'feedback';
      operator: 'eq' | 'contains' | 'lt' | 'gt';
      value: Array<string | number | boolean>;
    }
  }
}

export interface AIGatewayDatasetAigConfigCreateParams {
  /**
   * Path param
   */
  account_id: string;
  /**
   * Body param
   */
  enable: boolean;
  /**
   * Body param
   */
  filters: Array<AIGatewayDatasetAigConfigCreateParams.Filter>;
  /**
   * Body param
   */
  name: string;
}

export namespace AIGatewayDatasetAigConfigCreateParams {
  export interface Filter {
    key:
      | 'created_at'
      | 'request_content_type'
      | 'response_content_type'
      | 'success'
      | 'cached'
      | 'provider'
      | 'model'
      | 'cost'
      | 'tokens'
      | 'tokens_in'
      | 'tokens_out'
      | 'duration'
      | 'feedback';
    operator: 'eq' | 'contains' | 'lt' | 'gt';
    value: Array<string | number | boolean>;
  }
}

export interface AIGatewayDatasetAigConfigCreateResponse {
  result: AIGatewayDatasetAigConfigCreateResponse.Result;
  success: boolean;
}

export namespace AIGatewayDatasetAigConfigCreateResponse {
  export interface Result {
    /**
     * @format date-time
     */
    created_at: string;
    enable: boolean;
    filters: Array<Result.Filter>;
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
    name: string;
  }

  export namespace Result {
    export interface Filter {
      key:
        | 'created_at'
        | 'request_content_type'
        | 'response_content_type'
        | 'success'
        | 'cached'
        | 'provider'
        | 'model'
        | 'cost'
        | 'tokens'
        | 'tokens_in'
        | 'tokens_out'
        | 'duration'
        | 'feedback';
      operator: 'eq' | 'contains' | 'lt' | 'gt';
      value: Array<string | number | boolean>;
    }
  }
}

export interface AIGatewayDatasetAigConfigDeleteParams {
  account_id: string;
  /**
   * gateway id
   * @minLength 1
   * @maxLength 64
   * @pattern ^[a-z0-9_]+(?:-[a-z0-9_]+)*$
   */
  gateway_id: string;
}

export interface AIGatewayDatasetAigConfigDeleteResponse {
  result: AIGatewayDatasetAigConfigDeleteResponse.Result;
  success: boolean;
}

export namespace AIGatewayDatasetAigConfigDeleteResponse {
  export interface Result {
    /**
     * @format date-time
     */
    created_at: string;
    enable: boolean;
    filters: Array<Result.Filter>;
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
    name: string;
  }

  export namespace Result {
    export interface Filter {
      key:
        | 'created_at'
        | 'request_content_type'
        | 'response_content_type'
        | 'success'
        | 'cached'
        | 'provider'
        | 'model'
        | 'cost'
        | 'tokens'
        | 'tokens_in'
        | 'tokens_out'
        | 'duration'
        | 'feedback';
      operator: 'eq' | 'contains' | 'lt' | 'gt';
      value: Array<string | number | boolean>;
    }
  }
}

export interface AIGatewayDatasetAigConfigFetchParams {
  account_id: string;
  /**
   * gateway id
   * @minLength 1
   * @maxLength 64
   * @pattern ^[a-z0-9_]+(?:-[a-z0-9_]+)*$
   */
  gateway_id: string;
}

export interface AIGatewayDatasetAigConfigFetchResponse {
  result: AIGatewayDatasetAigConfigFetchResponse.Result;
  success: boolean;
}

export namespace AIGatewayDatasetAigConfigFetchResponse {
  export interface Result {
    /**
     * @format date-time
     */
    created_at: string;
    enable: boolean;
    filters: Array<Result.Filter>;
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
    name: string;
  }

  export namespace Result {
    export interface Filter {
      key:
        | 'created_at'
        | 'request_content_type'
        | 'response_content_type'
        | 'success'
        | 'cached'
        | 'provider'
        | 'model'
        | 'cost'
        | 'tokens'
        | 'tokens_in'
        | 'tokens_out'
        | 'duration'
        | 'feedback';
      operator: 'eq' | 'contains' | 'lt' | 'gt';
      value: Array<string | number | boolean>;
    }
  }
}

export interface AIGatewayDatasetAigConfigUpdateParams {
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
  enable: boolean;
  /**
   * Body param
   */
  filters: Array<AIGatewayDatasetAigConfigUpdateParams.Filter>;
  /**
   * Body param
   */
  name: string;
}

export namespace AIGatewayDatasetAigConfigUpdateParams {
  export interface Filter {
    key:
      | 'created_at'
      | 'request_content_type'
      | 'response_content_type'
      | 'success'
      | 'cached'
      | 'provider'
      | 'model'
      | 'cost'
      | 'tokens'
      | 'tokens_in'
      | 'tokens_out'
      | 'duration'
      | 'feedback';
    operator: 'eq' | 'contains' | 'lt' | 'gt';
    value: Array<string | number | boolean>;
  }
}

export interface AIGatewayDatasetAigConfigUpdateResponse {
  result: AIGatewayDatasetAigConfigUpdateResponse.Result;
  success: boolean;
}

export namespace AIGatewayDatasetAigConfigUpdateResponse {
  export interface Result {
    /**
     * @format date-time
     */
    created_at: string;
    enable: boolean;
    filters: Array<Result.Filter>;
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
    name: string;
  }

  export namespace Result {
    export interface Filter {
      key:
        | 'created_at'
        | 'request_content_type'
        | 'response_content_type'
        | 'success'
        | 'cached'
        | 'provider'
        | 'model'
        | 'cost'
        | 'tokens'
        | 'tokens_in'
        | 'tokens_out'
        | 'duration'
        | 'feedback';
      operator: 'eq' | 'contains' | 'lt' | 'gt';
      value: Array<string | number | boolean>;
    }
  }
}
export declare namespace AIGatewayDatasets {
  export {
    type AIGatewayDatasetAigConfigListResponse as AIGatewayDatasetAigConfigListResponse,
    type AIGatewayDatasetAigConfigCreateResponse as AIGatewayDatasetAigConfigCreateResponse,
    type AIGatewayDatasetAigConfigDeleteResponse as AIGatewayDatasetAigConfigDeleteResponse,
    type AIGatewayDatasetAigConfigFetchResponse as AIGatewayDatasetAigConfigFetchResponse,
    type AIGatewayDatasetAigConfigUpdateResponse as AIGatewayDatasetAigConfigUpdateResponse,
    type AIGatewayDatasetAigConfigListParams as AIGatewayDatasetAigConfigListParams,
    type AIGatewayDatasetAigConfigCreateParams as AIGatewayDatasetAigConfigCreateParams,
    type AIGatewayDatasetAigConfigDeleteParams as AIGatewayDatasetAigConfigDeleteParams,
    type AIGatewayDatasetAigConfigFetchParams as AIGatewayDatasetAigConfigFetchParams,
    type AIGatewayDatasetAigConfigUpdateParams as AIGatewayDatasetAigConfigUpdateParams,
  };
}
