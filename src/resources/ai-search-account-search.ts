// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from '../resource';
import { APIPromise } from '../api-promise';
import type { RequestOptions } from '../internal/request-options';
import { path as __scalarPath } from '../internal/utils/path';

export class AISearchAccountSearch extends APIResource {
  /**
   * Performs a chat completion request against multiple AI Search instances in parallel, merging retrieved content as context for generating a response.
   *
   * @param {string} name - Namespace name
   * @param {AISearchAccountSearchNamespaceMultiInstanceChatCompletionParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<AISearchAccountSearchNamespaceMultiInstanceChatCompletionResponse>} Returns the chat completion result with merged chunks from all instances.
   *
   * @example
   * ```ts
   * const aiSearchAccountSearch = await client.aiSearchAccountSearch.namespaceMultiInstanceChatCompletion(
   *   'name',
   *   {
   *     account_id: 'c3dc5f0b34a14ff8e1b3ec04895e1b22',
   *     ai_search_options: {
   *       instance_ids: ['my-ai-search'],
   *     },
   *     messages: [
   *       {
   *         content: '',
   *         role: 'system',
   *       },
   *     ],
   *   },
   * );
   * ```
   */
  namespaceMultiInstanceChatCompletion(
    name: string,
    params: AISearchAccountSearchNamespaceMultiInstanceChatCompletionParams,
    options?: RequestOptions,
  ): APIPromise<AISearchAccountSearchNamespaceMultiInstanceChatCompletionResponse> {
    const { account_id, ...body } = params;
    return this._client.post(
      __scalarPath`/accounts/${account_id}/ai-search/namespaces/${name}/chat/completions`,
      { body, ...options },
    );
  }

  /**
   * Performs a semantic search query against multiple AI Search instances in parallel, merging the retrieved results into a single ranked response.
   *
   * @param {string} name - Namespace name
   * @param {AISearchAccountSearchSearchParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<AISearchAccountSearchSearchResponse>} Returns the merged search results from all instances.
   *
   * @example
   * ```ts
   * const aiSearchAccountSearch = await client.aiSearchAccountSearch.search('name', {
   *   account_id: 'c3dc5f0b34a14ff8e1b3ec04895e1b22',
   *   ai_search_options: {
   *     instance_ids: ['my-ai-search'],
   *   },
   * });
   * ```
   */
  search(
    name: string,
    params: AISearchAccountSearchSearchParams,
    options?: RequestOptions,
  ): APIPromise<AISearchAccountSearchSearchResponse> {
    const { account_id, ...body } = params;
    return this._client.post(__scalarPath`/accounts/${account_id}/ai-search/namespaces/${name}/search`, {
      body,
      ...options,
    });
  }
}

export interface AISearchAccountSearchNamespaceMultiInstanceChatCompletionParams {
  /**
   * Path param
   */
  account_id: string;
  /**
   * Body param
   */
  ai_search_options: AISearchAccountSearchNamespaceMultiInstanceChatCompletionParams.AISearchOptions;
  /**
   * Body param
   * @minItems 1
   */
  messages: Array<AISearchAccountSearchNamespaceMultiInstanceChatCompletionParams.Message>;
  /**
   * Body param: A Workers AI model ID or an AI Gateway model ID compatible with the OpenAI Chat Completions API. An empty string uses the configured or default model.
   */
  model?: string;
  /**
   * Body param
   */
  stream?: boolean;
}

export namespace AISearchAccountSearchNamespaceMultiInstanceChatCompletionParams {
  export interface AISearchOptions {
    /**
     * @minItems 1
     */
    instance_ids: Array<string>;
    cache?: AISearchOptions.Cache;
    /**
     * Metadata added to AI Gateway logs for requests triggered by this operation. Accepts up to 2 string, number, or boolean entries. Keys 'ai-search', 'task', 'origin', and keys beginning with 'cf.' are reserved.
     */
    custom_metadata?: Record<string, string | number | boolean>;
    query_rewrite?: AISearchOptions.QueryRewrite;
    reranking?: AISearchOptions.Reranking;
    retrieval?: AISearchOptions.Retrieval;
  }

  export namespace AISearchOptions {
    export interface Cache {
      cache_threshold?: 'super_strict_match' | 'close_enough' | 'flexible_friend' | 'anything_goes';
      enabled?: boolean;
    }

    export interface QueryRewrite {
      enabled?: boolean;
      /**
       * A Workers AI model ID or an AI Gateway model ID compatible with the OpenAI Chat Completions API. An empty string uses the configured or default model.
       */
      model?: string;
      rewrite_prompt?: string;
    }

    export interface Reranking {
      enabled?: boolean;
      /**
       * @default 0.4
       * @minimum 0
       * @maximum 1
       */
      match_threshold?: number;
      model?: string;
    }

    export interface Retrieval {
      /**
       * Metadata fields to boost search results by. Overrides the instance-level boost_by config. Direction defaults to 'asc' for numeric/datetime fields, 'exists' for text/boolean fields. Fields must match 'timestamp' or a defined custom_metadata field.
       * @maxItems 3
       */
      boost_by?: Array<Retrieval.BoostBy>;
      /**
       * @default 0
       * @minimum 0
       * @maximum 3
       */
      context_expansion?: number;
      filters?: Record<string, unknown>;
      fusion_method?: 'max' | 'rrf';
      /**
       * Controls which documents are candidates for BM25 scoring. 'and' restricts candidates to documents containing all query terms; 'or' includes any document containing at least one term, ranked by BM25 relevance. When omitted, falls back to the instance-level retrieval_options.keyword_match_mode, then to 'and'.
       */
      keyword_match_mode?: 'and' | 'or';
      /**
       * @default 0.4
       * @minimum 0
       * @maximum 1
       */
      match_threshold?: number;
      /**
       * @default 10
       * @minimum 1
       * @maximum 50
       */
      max_num_results?: number;
      retrieval_type?: 'vector' | 'keyword' | 'hybrid';
      /**
       * @default true
       */
      return_on_failure?: boolean;
    }

    export namespace Retrieval {
      export interface BoostBy {
        /**
         * Metadata field name to boost by. Use 'timestamp' for document freshness, or any custom_metadata field. Numeric and datetime fields support all four directions (asc, desc, exists, not_exists); text/boolean fields only support exists/not_exists.
         * @minLength 1
         * @maxLength 64
         */
        field: string;
        /**
         * Boost direction. 'desc' = higher values rank higher (e.g. newer timestamps). 'asc' = lower values rank higher. 'exists' = boost chunks that have the field. 'not_exists' = boost chunks that lack the field. Optional — defaults to 'asc' for numeric/datetime fields, 'exists' for text/boolean fields.
         */
        direction?: 'asc' | 'desc' | 'exists' | 'not_exists';
      }
    }
  }

  export interface Message {
    content: string | Array<Message.Content | Message.Content2 | Message.Content3> | null;
    role: 'system' | 'developer' | 'user' | 'assistant' | 'tool';
  }

  export namespace Message {
    export interface Content {
      /**
       * @minLength 1
       */
      text: string;
      type: 'text';
    }

    export interface Content2 {
      image_url: Content2.ImageURL;
      type: 'image_url';
    }

    export namespace Content2 {
      export interface ImageURL {
        /**
         * @minLength 1
         * @maxLength 20971520
         */
        url: string;
      }
    }

    export interface Content3 {
      file: Content3.File;
      type: 'file';
    }

    export namespace Content3 {
      export interface File {
        /**
         * @minLength 1
         * @maxLength 255
         */
        filename: string;
        /**
         * @minLength 1
         * @maxLength 13981144
         */
        file_data?: string;
        file_id?: string;
      }
    }
  }
}

export interface AISearchAccountSearchNamespaceMultiInstanceChatCompletionResponse {
  choices: Array<AISearchAccountSearchNamespaceMultiInstanceChatCompletionResponse.Choice>;
  chunks: Array<AISearchAccountSearchNamespaceMultiInstanceChatCompletionResponse.Chunk>;
  errors?: Array<AISearchAccountSearchNamespaceMultiInstanceChatCompletionResponse.Error>;
  id?: string;
  model?: string;
  object?: string;
  [k: string]: unknown;
}

export namespace AISearchAccountSearchNamespaceMultiInstanceChatCompletionResponse {
  export interface Choice {
    message: Choice.Message;
    index?: number;
  }

  export namespace Choice {
    export interface Message {
      content: string | Array<Message.Content | Message.Content2 | Message.Content3> | null;
      role: 'system' | 'developer' | 'user' | 'assistant' | 'tool';
      [k: string]: unknown;
    }

    export namespace Message {
      export interface Content {
        /**
         * @minLength 1
         */
        text: string;
        type: 'text';
      }

      export interface Content2 {
        image_url: Content2.ImageURL;
        type: 'image_url';
      }

      export namespace Content2 {
        export interface ImageURL {
          /**
           * @minLength 1
           * @maxLength 20971520
           */
          url: string;
        }
      }

      export interface Content3 {
        file: Content3.File;
        type: 'file';
      }

      export namespace Content3 {
        export interface File {
          /**
           * @minLength 1
           * @maxLength 255
           */
          filename: string;
          /**
           * @minLength 1
           * @maxLength 13981144
           */
          file_data?: string;
          file_id?: string;
        }
      }
    }
  }

  export interface Chunk {
    id: string;
    instance_id: string;
    /**
     * @minimum 0
     * @maximum 1
     */
    score: number;
    text: string;
    type: string;
    item?: Chunk.Item;
    scoring_details?: Chunk.ScoringDetails;
  }

  export namespace Chunk {
    export interface Item {
      key: string;
      metadata?: Record<string, unknown>;
      timestamp?: number;
    }

    export interface ScoringDetails {
      fusion_method?: 'rrf' | 'max';
      keyword_rank?: number;
      /**
       * @minimum 0
       */
      keyword_score?: number;
      /**
       * @minimum 0
       * @maximum 1
       */
      reranking_score?: number;
      vector_rank?: number;
      /**
       * @minimum 0
       * @maximum 1
       */
      vector_score?: number;
    }
  }

  export interface Error {
    instance_id: string;
    message: string;
  }
}

export interface AISearchAccountSearchSearchParams {
  /**
   * Path param
   */
  account_id: string;
  /**
   * Body param
   */
  ai_search_options: AISearchAccountSearchSearchParams.AISearchOptions;
  /**
   * Body param: OpenAI-compatible message array. For multimodal queries, set the last user message's `content` to an array of typed parts: `[{type:'text', text:'…'}, {type:'image_url', image_url:{url:'…'}}]`. Image inputs require the RAG's embedding_model to declare 'image' in supported_modalities.
   * @minItems 1
   */
  messages?: Array<AISearchAccountSearchSearchParams.Message>;
  /**
   * Body param: A simple text query string. Alternative to 'messages' — provide either this or 'messages', not both.
   * @minLength 1
   */
  query?: string;
}

export namespace AISearchAccountSearchSearchParams {
  export interface AISearchOptions {
    /**
     * @minItems 1
     */
    instance_ids: Array<string>;
    cache?: AISearchOptions.Cache;
    /**
     * Metadata added to AI Gateway logs for requests triggered by this operation. Accepts up to 2 string, number, or boolean entries. Keys 'ai-search', 'task', 'origin', and keys beginning with 'cf.' are reserved.
     */
    custom_metadata?: Record<string, string | number | boolean>;
    query_rewrite?: AISearchOptions.QueryRewrite;
    reranking?: AISearchOptions.Reranking;
    retrieval?: AISearchOptions.Retrieval;
  }

  export namespace AISearchOptions {
    export interface Cache {
      cache_threshold?: 'super_strict_match' | 'close_enough' | 'flexible_friend' | 'anything_goes';
      enabled?: boolean;
    }

    export interface QueryRewrite {
      enabled?: boolean;
      /**
       * A Workers AI model ID or an AI Gateway model ID compatible with the OpenAI Chat Completions API. An empty string uses the configured or default model.
       */
      model?: string;
      rewrite_prompt?: string;
    }

    export interface Reranking {
      enabled?: boolean;
      /**
       * @default 0.4
       * @minimum 0
       * @maximum 1
       */
      match_threshold?: number;
      model?: string;
    }

    export interface Retrieval {
      /**
       * Metadata fields to boost search results by. Overrides the instance-level boost_by config. Direction defaults to 'asc' for numeric/datetime fields, 'exists' for text/boolean fields. Fields must match 'timestamp' or a defined custom_metadata field.
       * @maxItems 3
       */
      boost_by?: Array<Retrieval.BoostBy>;
      /**
       * @default 0
       * @minimum 0
       * @maximum 3
       */
      context_expansion?: number;
      filters?: Record<string, unknown>;
      fusion_method?: 'max' | 'rrf';
      /**
       * Controls which documents are candidates for BM25 scoring. 'and' restricts candidates to documents containing all query terms; 'or' includes any document containing at least one term, ranked by BM25 relevance. When omitted, falls back to the instance-level retrieval_options.keyword_match_mode, then to 'and'.
       */
      keyword_match_mode?: 'and' | 'or';
      /**
       * @default 0.4
       * @minimum 0
       * @maximum 1
       */
      match_threshold?: number;
      /**
       * @default 10
       * @minimum 1
       * @maximum 50
       */
      max_num_results?: number;
      retrieval_type?: 'vector' | 'keyword' | 'hybrid';
      /**
       * @default true
       */
      return_on_failure?: boolean;
    }

    export namespace Retrieval {
      export interface BoostBy {
        /**
         * Metadata field name to boost by. Use 'timestamp' for document freshness, or any custom_metadata field. Numeric and datetime fields support all four directions (asc, desc, exists, not_exists); text/boolean fields only support exists/not_exists.
         * @minLength 1
         * @maxLength 64
         */
        field: string;
        /**
         * Boost direction. 'desc' = higher values rank higher (e.g. newer timestamps). 'asc' = lower values rank higher. 'exists' = boost chunks that have the field. 'not_exists' = boost chunks that lack the field. Optional — defaults to 'asc' for numeric/datetime fields, 'exists' for text/boolean fields.
         */
        direction?: 'asc' | 'desc' | 'exists' | 'not_exists';
      }
    }
  }

  export interface Message {
    content: string | Array<Message.Content | Message.Content2 | Message.Content3> | null;
    role: 'system' | 'developer' | 'user' | 'assistant' | 'tool';
  }

  export namespace Message {
    export interface Content {
      /**
       * @minLength 1
       */
      text: string;
      type: 'text';
    }

    export interface Content2 {
      image_url: Content2.ImageURL;
      type: 'image_url';
    }

    export namespace Content2 {
      export interface ImageURL {
        /**
         * @minLength 1
         * @maxLength 20971520
         */
        url: string;
      }
    }

    export interface Content3 {
      file: Content3.File;
      type: 'file';
    }

    export namespace Content3 {
      export interface File {
        /**
         * @minLength 1
         * @maxLength 255
         */
        filename: string;
        /**
         * @minLength 1
         * @maxLength 13981144
         */
        file_data?: string;
        file_id?: string;
      }
    }
  }
}

export interface AISearchAccountSearchSearchResponse {
  result: AISearchAccountSearchSearchResponse.Result;
  success: boolean;
}

export namespace AISearchAccountSearchSearchResponse {
  export interface Result {
    chunks: Array<Result.Chunk>;
    query_kind: 'text' | 'image' | 'multimodal';
    errors?: Array<Result.Error>;
    search_query?: string;
  }

  export namespace Result {
    export interface Chunk {
      id: string;
      instance_id: string;
      /**
       * @minimum 0
       * @maximum 1
       */
      score: number;
      text: string;
      type: string;
      item?: Chunk.Item;
      scoring_details?: Chunk.ScoringDetails;
    }

    export namespace Chunk {
      export interface Item {
        key: string;
        metadata?: Record<string, unknown>;
        timestamp?: number;
      }

      export interface ScoringDetails {
        fusion_method?: 'rrf' | 'max';
        keyword_rank?: number;
        /**
         * @minimum 0
         */
        keyword_score?: number;
        /**
         * @minimum 0
         * @maximum 1
         */
        reranking_score?: number;
        vector_rank?: number;
        /**
         * @minimum 0
         * @maximum 1
         */
        vector_score?: number;
      }
    }

    export interface Error {
      instance_id: string;
      message: string;
    }
  }
}
export declare namespace AISearchAccountSearch {
  export {
    type AISearchAccountSearchNamespaceMultiInstanceChatCompletionResponse as AISearchAccountSearchNamespaceMultiInstanceChatCompletionResponse,
    type AISearchAccountSearchSearchResponse as AISearchAccountSearchSearchResponse,
    type AISearchAccountSearchNamespaceMultiInstanceChatCompletionParams as AISearchAccountSearchNamespaceMultiInstanceChatCompletionParams,
    type AISearchAccountSearchSearchParams as AISearchAccountSearchSearchParams,
  };
}
