// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from '../resource';
import { APIPromise } from '../api-promise';
import type { RequestOptions } from '../internal/request-options';
import { path as __scalarPath } from '../internal/utils/path';

export class AutoRagRagSearch extends APIResource {
  /**
   * Runs an AI Search query against an AutoRAG.
   *
   * @param {string} id - rag id
   * @param {AutoRagRagSearchAutoragConfigAIParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<AutoRagRagSearchAutoragConfigAIResponse>} Returns the log details
   *
   * @example
   * ```ts
   * const autoRagRagSearch = await client.autoRagRagSearch.autoragConfigAI('my-rag', {
   *   account_id: 'c3dc5f0b34a14ff8e1b3ec04895e1b22',
   *   max_num_results: 10,
   *   query: '',
   *   ranking_options: {},
   *   rewrite_query: false,
   *   stream: false,
   * });
   * ```
   */
  autoragConfigAI(
    id: string,
    params: AutoRagRagSearchAutoragConfigAIParams,
    options?: RequestOptions,
  ): APIPromise<AutoRagRagSearchAutoragConfigAIResponse> {
    const { account_id, ...body } = params;
    return this._client.post(__scalarPath`/accounts/${account_id}/autorag/rags/${id}/ai-search`, {
      body,
      ...options,
    });
  }

  /**
   * Searches an AutoRAG.
   *
   * @param {string} id - rag id
   * @param {AutoRagRagSearchSearchParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<AutoRagRagSearchSearchResponse>} Returns the log details
   *
   * @example
   * ```ts
   * const autoRagRagSearch = await client.autoRagRagSearch.search('my-rag', {
   *   account_id: 'c3dc5f0b34a14ff8e1b3ec04895e1b22',
   *   max_num_results: 10,
   *   query: '',
   *   ranking_options: {},
   *   rewrite_query: false,
   * });
   * ```
   */
  search(
    id: string,
    params: AutoRagRagSearchSearchParams,
    options?: RequestOptions,
  ): APIPromise<AutoRagRagSearchSearchResponse> {
    const { account_id, ...body } = params;
    return this._client.post(__scalarPath`/accounts/${account_id}/autorag/rags/${id}/search`, {
      body,
      ...options,
    });
  }
}

export interface AutoRagRagSearchAutoragConfigAIParams {
  /**
   * Path param
   */
  account_id: string;
  /**
   * Body param
   */
  filters?: AutoRagRagSearchAutoragConfigAIParams.Filters | AutoRagRagSearchAutoragConfigAIParams.Filters2;
  /**
   * Body param
   * @default 10
   * @minimum 1
   * @maximum 50
   */
  max_num_results?: number;
  /**
   * Body param
   */
  model?:
    | '@cf/meta/llama-3.3-70b-instruct-fp8-fast'
    | '@cf/meta/llama-3.1-8b-instruct-fast'
    | '@cf/meta/llama-3.1-8b-instruct-fp8'
    | '@cf/meta/llama-4-scout-17b-16e-instruct'
    | '@cf/qwen/qwen3-30b-a3b-fp8'
    | '@cf/deepseek-ai/deepseek-r1-distill-qwen-32b'
    | '@cf/moonshotai/kimi-k2-instruct'
    | 'anthropic/claude-3-7-sonnet'
    | 'anthropic/claude-sonnet-4'
    | 'anthropic/claude-opus-4'
    | 'anthropic/claude-3-5-haiku'
    | 'cerebras/qwen-3-235b-a22b-instruct'
    | 'cerebras/qwen-3-235b-a22b-thinking'
    | 'cerebras/llama-3.3-70b'
    | 'cerebras/llama-4-maverick-17b-128e-instruct'
    | 'cerebras/llama-4-scout-17b-16e-instruct'
    | 'cerebras/gpt-oss-120b'
    | 'google-ai-studio/gemini-2.5-flash'
    | 'google-ai-studio/gemini-2.5-pro'
    | 'grok/grok-4'
    | 'groq/llama-3.3-70b-versatile'
    | 'groq/llama-3.1-8b-instant'
    | 'openai/gpt-5'
    | 'openai/gpt-5-mini'
    | 'openai/gpt-5-nano'
    | '';
  /**
   * Body param
   */
  query: string;
  /**
   * Body param
   * @default {}
   */
  ranking_options?: AutoRagRagSearchAutoragConfigAIParams.RankingOptions;
  /**
   * Body param
   */
  reranking?: AutoRagRagSearchAutoragConfigAIParams.Reranking;
  /**
   * Body param
   * @default false
   */
  rewrite_query?: boolean;
  /**
   * Body param
   * @default false
   */
  stream?: boolean;
  /**
   * Body param
   */
  system_prompt?: string;
}

export namespace AutoRagRagSearchAutoragConfigAIParams {
  export interface Filters {
    key: string;
    type: 'eq' | 'ne' | 'gt' | 'gte' | 'lt' | 'lte';
    value: string | number | boolean;
  }

  export interface Filters2 {
    filters: Array<Filters2.Filter>;
    type: 'and' | 'or';
  }

  export namespace Filters2 {
    export interface Filter {
      key: string;
      type: 'eq' | 'ne' | 'gt' | 'gte' | 'lt' | 'lte';
      value: string | number | boolean;
    }
  }

  export interface RankingOptions {
    ranker?: string;
    /**
     * @default 0.4
     * @minimum 0
     * @maximum 1
     */
    score_threshold?: number;
  }

  export interface Reranking {
    /**
     * @default false
     */
    enabled?: boolean;
    model?: '@cf/baai/bge-reranker-base' | '';
  }
}

export interface AutoRagRagSearchAutoragConfigAIResponse {
  result: AutoRagRagSearchAutoragConfigAIResponse.Result;
  success: boolean;
}

export namespace AutoRagRagSearchAutoragConfigAIResponse {
  export interface Result {
    response: string;
    search_query: string;
    data?: Array<Result.Data>;
    /**
     * @default false
     */
    has_more?: boolean;
    next_page?: string | null;
    object?: string;
  }

  export namespace Result {
    export interface Data {
      score: number;
      attributes?: Record<string, unknown>;
      content?: Array<Data.Content>;
      file_id?: string;
      filename?: string;
    }

    export namespace Data {
      export interface Content {
        text?: string;
        type?: string;
      }
    }
  }
}

export interface AutoRagRagSearchSearchParams {
  /**
   * Path param
   */
  account_id: string;
  /**
   * Body param
   */
  filters?: AutoRagRagSearchSearchParams.Filters | AutoRagRagSearchSearchParams.Filters2;
  /**
   * Body param
   * @default 10
   * @minimum 1
   * @maximum 50
   */
  max_num_results?: number;
  /**
   * Body param
   */
  query: string;
  /**
   * Body param
   * @default {}
   */
  ranking_options?: AutoRagRagSearchSearchParams.RankingOptions;
  /**
   * Body param
   */
  reranking?: AutoRagRagSearchSearchParams.Reranking;
  /**
   * Body param
   * @default false
   */
  rewrite_query?: boolean;
}

export namespace AutoRagRagSearchSearchParams {
  export interface Filters {
    key: string;
    type: 'eq' | 'ne' | 'gt' | 'gte' | 'lt' | 'lte';
    value: string | number | boolean;
  }

  export interface Filters2 {
    filters: Array<Filters2.Filter>;
    type: 'and' | 'or';
  }

  export namespace Filters2 {
    export interface Filter {
      key: string;
      type: 'eq' | 'ne' | 'gt' | 'gte' | 'lt' | 'lte';
      value: string | number | boolean;
    }
  }

  export interface RankingOptions {
    ranker?: string;
    /**
     * @default 0.4
     * @minimum 0
     * @maximum 1
     */
    score_threshold?: number;
  }

  export interface Reranking {
    /**
     * @default false
     */
    enabled?: boolean;
    model?: '@cf/baai/bge-reranker-base' | '';
  }
}

export interface AutoRagRagSearchSearchResponse {
  result: AutoRagRagSearchSearchResponse.Result;
  success: boolean;
}

export namespace AutoRagRagSearchSearchResponse {
  export interface Result {
    search_query: string;
    data?: Array<Result.Data>;
    /**
     * @default false
     */
    has_more?: boolean;
    next_page?: string | null;
    object?: string;
  }

  export namespace Result {
    export interface Data {
      score: number;
      attributes?: Record<string, unknown>;
      content?: Array<Data.Content>;
      file_id?: string;
      filename?: string;
    }

    export namespace Data {
      export interface Content {
        text?: string;
        type?: string;
      }
    }
  }
}
export declare namespace AutoRagRagSearch {
  export {
    type AutoRagRagSearchAutoragConfigAIResponse as AutoRagRagSearchAutoragConfigAIResponse,
    type AutoRagRagSearchSearchResponse as AutoRagRagSearchSearchResponse,
    type AutoRagRagSearchAutoragConfigAIParams as AutoRagRagSearchAutoragConfigAIParams,
    type AutoRagRagSearchSearchParams as AutoRagRagSearchSearchParams,
  };
}
