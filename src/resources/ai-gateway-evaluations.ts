// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from '../resource';
import { APIPromise } from '../api-promise';
import type { RequestOptions } from '../internal/request-options';
import { path as __scalarPath } from '../internal/utils/path';

export class AIGatewayEvaluations extends APIResource {
  /**
   * Lists all available evaluator types for scoring AI gateway responses.
   *
   * @param {string} accountID
   * @param {AIGatewayEvaluationAigConfigListEvaluatorsParams} [query] - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<AIGatewayEvaluationAigConfigListEvaluatorsResponse>} Returns a list of Evaluators
   *
   * @example
   * ```ts
   * const aiGatewayEvaluation = await client.aiGatewayEvaluations.aigConfigListEvaluators(
   *   '0d37909e38d3e99c29fa2cd343ac421a',
   *   {
   *     page: 1,
   *     per_page: 20,
   *     order_by: 'mandatory',
   *     order_by_direction: 'desc',
   *   },
   * );
   * ```
   */
  aigConfigListEvaluators(
    accountID: string,
    query: AIGatewayEvaluationAigConfigListEvaluatorsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AIGatewayEvaluationAigConfigListEvaluatorsResponse> {
    return this._client.get(__scalarPath`/accounts/${accountID}/ai-gateway/evaluation-types`, {
      query,
      ...options,
    });
  }

  /**
   * Lists all AI Gateway evaluator types configured for the account.
   *
   * @param {string} gatewayID - gateway id
   * @param {AIGatewayEvaluationAigConfigListParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<AIGatewayEvaluationAigConfigListResponse>} List objects
   *
   * @example
   * ```ts
   * const aiGatewayEvaluation = await client.aiGatewayEvaluations.aigConfigList('my-gateway', {
   *   account_id: '3ebbcb006d4d46d7bb6a8c7f14676cb0',
   *   page: 1,
   *   per_page: 20,
   * });
   * ```
   */
  aigConfigList(
    gatewayID: string,
    params: AIGatewayEvaluationAigConfigListParams,
    options?: RequestOptions,
  ): APIPromise<AIGatewayEvaluationAigConfigListResponse> {
    const { account_id, ...query } = params;
    return this._client.get(
      __scalarPath`/accounts/${account_id}/ai-gateway/gateways/${gatewayID}/evaluations`,
      { query, ...options },
    );
  }

  /**
   * Creates a new AI Gateway.
   *
   * @param {string} gatewayID - gateway id
   * @param {AIGatewayEvaluationAigConfigCreateParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<AIGatewayEvaluationAigConfigCreateResponse>} Returns the created Object
   *
   * @example
   * ```ts
   * const aiGatewayEvaluation = await client.aiGatewayEvaluations.aigConfigCreate('my-gateway', {
   *   account_id: '3ebbcb006d4d46d7bb6a8c7f14676cb0',
   *   dataset_ids: [''],
   *   evaluation_type_ids: [''],
   *   name: '',
   * });
   * ```
   */
  aigConfigCreate(
    gatewayID: string,
    params: AIGatewayEvaluationAigConfigCreateParams,
    options?: RequestOptions,
  ): APIPromise<AIGatewayEvaluationAigConfigCreateResponse> {
    const { account_id, ...body } = params;
    return this._client.post(
      __scalarPath`/accounts/${account_id}/ai-gateway/gateways/${gatewayID}/evaluations`,
      { body, ...options },
    );
  }

  /**
   * Deletes an AI Gateway dataset.
   *
   * @param {string} id
   * @param {AIGatewayEvaluationAigConfigDeleteParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<AIGatewayEvaluationAigConfigDeleteResponse>} Returns the Object if it was successfully deleted
   *
   * @example
   * ```ts
   * const aiGatewayEvaluation = await client.aiGatewayEvaluations.aigConfigDelete('id', {
   *   account_id: '3ebbcb006d4d46d7bb6a8c7f14676cb0',
   *   gateway_id: 'my-gateway',
   * });
   * ```
   */
  aigConfigDelete(
    id: string,
    params: AIGatewayEvaluationAigConfigDeleteParams,
    options?: RequestOptions,
  ): APIPromise<AIGatewayEvaluationAigConfigDeleteResponse> {
    const { account_id, gateway_id } = params;
    return this._client.delete(
      __scalarPath`/accounts/${account_id}/ai-gateway/gateways/${gateway_id}/evaluations/${id}`,
      options,
    );
  }

  /**
   * Retrieves details for a specific AI Gateway dataset.
   *
   * @param {string} id
   * @param {AIGatewayEvaluationAigConfigFetchParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<AIGatewayEvaluationAigConfigFetchResponse>} Returns a single object if found
   *
   * @example
   * ```ts
   * const aiGatewayEvaluation = await client.aiGatewayEvaluations.aigConfigFetch('id', {
   *   account_id: '3ebbcb006d4d46d7bb6a8c7f14676cb0',
   *   gateway_id: 'my-gateway',
   * });
   * ```
   */
  aigConfigFetch(
    id: string,
    params: AIGatewayEvaluationAigConfigFetchParams,
    options?: RequestOptions,
  ): APIPromise<AIGatewayEvaluationAigConfigFetchResponse> {
    const { account_id, gateway_id } = params;
    return this._client.get(
      __scalarPath`/accounts/${account_id}/ai-gateway/gateways/${gateway_id}/evaluations/${id}`,
      options,
    );
  }
}

export interface AIGatewayEvaluationAigConfigListEvaluatorsParams {
  /**
   * @default 1
   * @minimum 1
   */
  page?: number;
  /**
   * @default 20
   * @minimum 5
   * @maximum 50
   */
  per_page?: number;
  /**
   * @default mandatory
   */
  order_by?: string;
  /**
   * @default desc
   */
  order_by_direction?: 'asc' | 'desc';
}

export interface AIGatewayEvaluationAigConfigListEvaluatorsResponse {
  result: Array<AIGatewayEvaluationAigConfigListEvaluatorsResponse.Result>;
  result_info: AIGatewayEvaluationAigConfigListEvaluatorsResponse.ResultInfo;
  success: boolean;
}

export namespace AIGatewayEvaluationAigConfigListEvaluatorsResponse {
  export interface Result {
    /**
     * @format date-time
     */
    created_at: string;
    description: string;
    enable: boolean;
    id: string;
    mandatory: boolean;
    /**
     * @format date-time
     */
    modified_at: string;
    name: string;
    type: string;
  }

  export interface ResultInfo {
    count: number;
    page: number;
    per_page: number;
    total_count: number;
  }
}

export interface AIGatewayEvaluationAigConfigListParams {
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
  processed?: boolean;
  /**
   * Query param: Search by id, name
   */
  search?: string;
}

export interface AIGatewayEvaluationAigConfigListResponse {
  result: Array<AIGatewayEvaluationAigConfigListResponse.Result>;
  success: boolean;
}

export namespace AIGatewayEvaluationAigConfigListResponse {
  export interface Result {
    /**
     * @format date-time
     */
    created_at: string;
    datasets: Array<Result.Dataset>;
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
    processed: boolean;
    results: Array<Result.Result>;
    total_logs: number;
  }

  export namespace Result {
    export interface Dataset {
      account_id: string;
      account_tag: string;
      /**
       * @format date-time
       */
      created_at: string;
      enable: boolean;
      filters: Array<Dataset.Filter>;
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

    export namespace Dataset {
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

    export interface Result {
      /**
       * @format date-time
       */
      created_at: string;
      evaluation_id: string;
      evaluation_type_id: string;
      id: string;
      /**
       * @format date-time
       */
      modified_at: string;
      result: string;
      status: number;
      status_description: string;
      total_logs: number;
    }
  }
}

export interface AIGatewayEvaluationAigConfigCreateParams {
  /**
   * Path param
   */
  account_id: string;
  /**
   * Body param
   * @minItems 1
   * @maxItems 5
   */
  dataset_ids: Array<string>;
  /**
   * Body param
   */
  evaluation_type_ids: Array<string>;
  /**
   * Body param
   */
  name: string;
}

export interface AIGatewayEvaluationAigConfigCreateResponse {
  result: AIGatewayEvaluationAigConfigCreateResponse.Result;
  success: boolean;
}

export namespace AIGatewayEvaluationAigConfigCreateResponse {
  export interface Result {
    /**
     * @format date-time
     */
    created_at: string;
    datasets: Array<Result.Dataset>;
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
    processed: boolean;
    results: Array<Result.Result>;
    total_logs: number;
  }

  export namespace Result {
    export interface Dataset {
      account_id: string;
      account_tag: string;
      /**
       * @format date-time
       */
      created_at: string;
      enable: boolean;
      filters: Array<Dataset.Filter>;
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

    export namespace Dataset {
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

    export interface Result {
      /**
       * @format date-time
       */
      created_at: string;
      evaluation_id: string;
      evaluation_type_id: string;
      id: string;
      /**
       * @format date-time
       */
      modified_at: string;
      result: string;
      status: number;
      status_description: string;
      total_logs: number;
    }
  }
}

export interface AIGatewayEvaluationAigConfigDeleteParams {
  account_id: string;
  /**
   * gateway id
   * @minLength 1
   * @maxLength 64
   * @pattern ^[a-z0-9_]+(?:-[a-z0-9_]+)*$
   */
  gateway_id: string;
}

export interface AIGatewayEvaluationAigConfigDeleteResponse {
  result: AIGatewayEvaluationAigConfigDeleteResponse.Result;
  success: boolean;
}

export namespace AIGatewayEvaluationAigConfigDeleteResponse {
  export interface Result {
    /**
     * @format date-time
     */
    created_at: string;
    datasets: Array<Result.Dataset>;
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
    processed: boolean;
    results: Array<Result.Result>;
    total_logs: number;
  }

  export namespace Result {
    export interface Dataset {
      account_id: string;
      account_tag: string;
      /**
       * @format date-time
       */
      created_at: string;
      enable: boolean;
      filters: Array<Dataset.Filter>;
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

    export namespace Dataset {
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

    export interface Result {
      /**
       * @format date-time
       */
      created_at: string;
      evaluation_id: string;
      evaluation_type_id: string;
      id: string;
      /**
       * @format date-time
       */
      modified_at: string;
      result: string;
      status: number;
      status_description: string;
      total_logs: number;
    }
  }
}

export interface AIGatewayEvaluationAigConfigFetchParams {
  account_id: string;
  /**
   * gateway id
   * @minLength 1
   * @maxLength 64
   * @pattern ^[a-z0-9_]+(?:-[a-z0-9_]+)*$
   */
  gateway_id: string;
}

export interface AIGatewayEvaluationAigConfigFetchResponse {
  result: AIGatewayEvaluationAigConfigFetchResponse.Result;
  success: boolean;
}

export namespace AIGatewayEvaluationAigConfigFetchResponse {
  export interface Result {
    /**
     * @format date-time
     */
    created_at: string;
    datasets: Array<Result.Dataset>;
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
    processed: boolean;
    results: Array<Result.Result>;
    total_logs: number;
  }

  export namespace Result {
    export interface Dataset {
      account_id: string;
      account_tag: string;
      /**
       * @format date-time
       */
      created_at: string;
      enable: boolean;
      filters: Array<Dataset.Filter>;
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

    export namespace Dataset {
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

    export interface Result {
      /**
       * @format date-time
       */
      created_at: string;
      evaluation_id: string;
      evaluation_type_id: string;
      id: string;
      /**
       * @format date-time
       */
      modified_at: string;
      result: string;
      status: number;
      status_description: string;
      total_logs: number;
    }
  }
}
export declare namespace AIGatewayEvaluations {
  export {
    type AIGatewayEvaluationAigConfigListEvaluatorsResponse as AIGatewayEvaluationAigConfigListEvaluatorsResponse,
    type AIGatewayEvaluationAigConfigListResponse as AIGatewayEvaluationAigConfigListResponse,
    type AIGatewayEvaluationAigConfigCreateResponse as AIGatewayEvaluationAigConfigCreateResponse,
    type AIGatewayEvaluationAigConfigDeleteResponse as AIGatewayEvaluationAigConfigDeleteResponse,
    type AIGatewayEvaluationAigConfigFetchResponse as AIGatewayEvaluationAigConfigFetchResponse,
    type AIGatewayEvaluationAigConfigListEvaluatorsParams as AIGatewayEvaluationAigConfigListEvaluatorsParams,
    type AIGatewayEvaluationAigConfigListParams as AIGatewayEvaluationAigConfigListParams,
    type AIGatewayEvaluationAigConfigCreateParams as AIGatewayEvaluationAigConfigCreateParams,
    type AIGatewayEvaluationAigConfigDeleteParams as AIGatewayEvaluationAigConfigDeleteParams,
    type AIGatewayEvaluationAigConfigFetchParams as AIGatewayEvaluationAigConfigFetchParams,
  };
}
