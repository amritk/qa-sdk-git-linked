// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from '../resource';
import { APIPromise } from '../api-promise';
import type { RequestOptions } from '../internal/request-options';
import { path as __scalarPath } from '../internal/utils/path';

export class AISearchInstances extends APIResource {
  /**
   * List all AI Search instances in the account.
   *
   * @param {string} accountID
   * @param {AISearchInstanceListParams} [query] - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<AISearchInstanceListResponse>} List of instances.
   *
   * @example
   * ```ts
   * const aiSearchInstance = await client.aiSearchInstances.list('c3dc5f0b34a14ff8e1b3ec04895e1b22', {
   *   page: 1,
   *   per_page: 20,
   *   order_by: 'created_at',
   *   order_by_direction: 'desc',
   * });
   * ```
   */
  list(
    accountID: string,
    query: AISearchInstanceListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AISearchInstanceListResponse> {
    return this._client.get(__scalarPath`/accounts/${accountID}/ai-search/instances`, { query, ...options });
  }

  /**
   * Create a new AI Search instance with the given configuration.
   *
   * @param {string} accountID
   * @param {AISearchInstanceCreateParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<AISearchInstanceCreateResponse>} Returns the new instance.
   *
   * @example
   * ```ts
   * const aiSearchInstance = await client.aiSearchInstances.create('c3dc5f0b34a14ff8e1b3ec04895e1b22', {
   *   cache: true,
   *   cache_threshold: 'close_enough',
   *   cache_ttl: 172800,
   *   chunk: true,
   *   chunk_overlap: 10,
   *   fusion_method: 'rrf',
   *   hybrid_search_enabled: false,
   *   id: 'my-ai-search',
   *   index_method: { keyword: false, vector: true },
   *   max_num_results: 10,
   *   reranking: false,
   *   rewrite_query: false,
   *   score_threshold: 0.4,
   *   sync_interval: 21600,
   * });
   * ```
   */
  create(
    accountID: string,
    body: AISearchInstanceCreateParams,
    options?: RequestOptions,
  ): APIPromise<AISearchInstanceCreateResponse> {
    return this._client.post(__scalarPath`/accounts/${accountID}/ai-search/instances`, { body, ...options });
  }

  /**
   * Permanently delete an AI Search instance and all its indexed data.
   *
   * @param {string} id
   * @param {AISearchInstanceDeleteParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<AISearchInstanceDeleteResponse>} Returns the deleted instance.
   *
   * @example
   * ```ts
   * const aiSearchInstance = await client.aiSearchInstances.delete('my-ai-search', {
   *   account_id: 'c3dc5f0b34a14ff8e1b3ec04895e1b22',
   * });
   * ```
   */
  delete(
    id: string,
    params: AISearchInstanceDeleteParams,
    options?: RequestOptions,
  ): APIPromise<AISearchInstanceDeleteResponse> {
    const { account_id } = params;
    return this._client.delete(__scalarPath`/accounts/${account_id}/ai-search/instances/${id}`, options);
  }

  /**
   * Retrieve the configuration and status of an AI Search instance.
   *
   * @param {string} id
   * @param {AISearchInstanceFetchParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<AISearchInstanceFetchResponse>} Returns the instance.
   *
   * @example
   * ```ts
   * const aiSearchInstance = await client.aiSearchInstances.fetch('my-ai-search', {
   *   account_id: 'c3dc5f0b34a14ff8e1b3ec04895e1b22',
   * });
   * ```
   */
  fetch(
    id: string,
    params: AISearchInstanceFetchParams,
    options?: RequestOptions,
  ): APIPromise<AISearchInstanceFetchResponse> {
    const { account_id } = params;
    return this._client.get(__scalarPath`/accounts/${account_id}/ai-search/instances/${id}`, options);
  }

  /**
   * Update the configuration of an AI Search instance.
   *
   * @param {string} id
   * @param {AISearchInstanceUpdateParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<AISearchInstanceUpdateResponse>} Returns the updated instance.
   *
   * @example
   * ```ts
   * const aiSearchInstance = await client.aiSearchInstances.update('my-ai-search', {
   *   account_id: 'c3dc5f0b34a14ff8e1b3ec04895e1b22',
   *   cache: true,
   *   cache_threshold: 'close_enough',
   *   cache_ttl: 172800,
   *   chunk: true,
   *   chunk_overlap: 10,
   *   fusion_method: 'rrf',
   *   index_method: { keyword: false, vector: true },
   *   max_num_results: 10,
   *   paused: false,
   *   reranking: false,
   *   rewrite_query: false,
   *   score_threshold: 0.4,
   *   summarization: false,
   *   sync_interval: 21600,
   * });
   * ```
   */
  update(
    id: string,
    params: AISearchInstanceUpdateParams,
    options?: RequestOptions,
  ): APIPromise<AISearchInstanceUpdateResponse> {
    const { account_id, ...body } = params;
    return this._client.put(__scalarPath`/accounts/${account_id}/ai-search/instances/${id}`, {
      body,
      ...options,
    });
  }

  /**
   * Performs a chat completion request against an AI Search instance, using indexed content as context for generating responses.
   *
   * @param {string} id - AI Search instance ID. Lowercase alphanumeric, hyphens, and underscores.
   * @param {AISearchInstanceChatCompletionParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<AISearchInstanceChatCompletionResponse>} Returns the chat completions results with retrieved files.
   *
   * @example
   * ```ts
   * const aiSearchInstance = await client.aiSearchInstances.chatCompletion('my-ai-search', {
   *   account_id: 'c3dc5f0b34a14ff8e1b3ec04895e1b22',
   *   messages: [
   *     {
   *       content: '',
   *       role: 'system',
   *     },
   *   ],
   * });
   * ```
   */
  chatCompletion(
    id: string,
    params: AISearchInstanceChatCompletionParams,
    options?: RequestOptions,
  ): APIPromise<AISearchInstanceChatCompletionResponse> {
    const { account_id, ...body } = params;
    return this._client.post(
      __scalarPath`/accounts/${account_id}/ai-search/instances/${id}/chat/completions`,
      { body, ...options },
    );
  }

  /**
   * Executes a semantic search query against an AI Search instance to find relevant indexed content.
   *
   * @param {string} id - AI Search instance ID. Lowercase alphanumeric, hyphens, and underscores.
   * @param {AISearchInstanceSearchParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<AISearchInstanceSearchResponse>} Returns the search results.
   *
   * @example
   * ```ts
   * const aiSearchInstance = await client.aiSearchInstances.search('my-ai-search', {
   *   account_id: 'c3dc5f0b34a14ff8e1b3ec04895e1b22',
   * });
   * ```
   */
  search(
    id: string,
    params: AISearchInstanceSearchParams,
    options?: RequestOptions,
  ): APIPromise<AISearchInstanceSearchResponse> {
    const { account_id, ...body } = params;
    return this._client.post(__scalarPath`/accounts/${account_id}/ai-search/instances/${id}/search`, {
      body,
      ...options,
    });
  }

  /**
   * Retrieve usage and indexing statistics for an AI Search instance.
   *
   * @param {string} id - AI Search instance ID. Lowercase alphanumeric, hyphens, and underscores.
   * @param {AISearchInstanceStatsParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<AISearchInstanceStatsResponse>} Returns the AI Search stats.
   *
   * @example
   * ```ts
   * const aiSearchInstance = await client.aiSearchInstances.stats('my-ai-search', {
   *   account_id: 'c3dc5f0b34a14ff8e1b3ec04895e1b22',
   * });
   * ```
   */
  stats(
    id: string,
    params: AISearchInstanceStatsParams,
    options?: RequestOptions,
  ): APIPromise<AISearchInstanceStatsResponse> {
    const { account_id } = params;
    return this._client.get(__scalarPath`/accounts/${account_id}/ai-search/instances/${id}/stats`, options);
  }

  /**
   * List all AI Search instances in the account.
   *
   * @param {string} name - Namespace name
   * @param {AISearchInstanceNamespaceListParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<AISearchInstanceNamespaceListResponse>} List of instances.
   *
   * @example
   * ```ts
   * const aiSearchInstance = await client.aiSearchInstances.namespaceList('name', {
   *   account_id: 'c3dc5f0b34a14ff8e1b3ec04895e1b22',
   *   page: 1,
   *   per_page: 20,
   *   order_by: 'created_at',
   *   order_by_direction: 'desc',
   * });
   * ```
   */
  namespaceList(
    name: string,
    params: AISearchInstanceNamespaceListParams,
    options?: RequestOptions,
  ): APIPromise<AISearchInstanceNamespaceListResponse> {
    const { account_id, ...query } = params;
    return this._client.get(__scalarPath`/accounts/${account_id}/ai-search/namespaces/${name}/instances`, {
      query,
      ...options,
    });
  }

  /**
   * Create a new AI Search instance with the given configuration.
   *
   * @param {string} name - Namespace name
   * @param {AISearchInstanceNamespaceCreateParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<AISearchInstanceNamespaceCreateResponse>} Returns the new instance.
   *
   * @example
   * ```ts
   * const aiSearchInstance = await client.aiSearchInstances.namespaceCreate('name', {
   *   account_id: 'c3dc5f0b34a14ff8e1b3ec04895e1b22',
   *   cache: true,
   *   cache_threshold: 'close_enough',
   *   cache_ttl: 172800,
   *   chunk: true,
   *   chunk_overlap: 10,
   *   fusion_method: 'rrf',
   *   hybrid_search_enabled: false,
   *   id: 'my-ai-search',
   *   index_method: { keyword: false, vector: true },
   *   max_num_results: 10,
   *   reranking: false,
   *   rewrite_query: false,
   *   score_threshold: 0.4,
   *   sync_interval: 21600,
   * });
   * ```
   */
  namespaceCreate(
    name: string,
    params: AISearchInstanceNamespaceCreateParams,
    options?: RequestOptions,
  ): APIPromise<AISearchInstanceNamespaceCreateResponse> {
    const { account_id, ...body } = params;
    return this._client.post(__scalarPath`/accounts/${account_id}/ai-search/namespaces/${name}/instances`, {
      body,
      ...options,
    });
  }

  /**
   * Permanently delete an AI Search instance and all its indexed data.
   *
   * @param {string} id
   * @param {AISearchInstanceNamespaceDeleteParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<AISearchInstanceNamespaceDeleteResponse>} Returns the deleted instance.
   *
   * @example
   * ```ts
   * const aiSearchInstance = await client.aiSearchInstances.namespaceDelete('my-ai-search', {
   *   account_id: 'c3dc5f0b34a14ff8e1b3ec04895e1b22',
   *   name: 'name',
   * });
   * ```
   */
  namespaceDelete(
    id: string,
    params: AISearchInstanceNamespaceDeleteParams,
    options?: RequestOptions,
  ): APIPromise<AISearchInstanceNamespaceDeleteResponse> {
    const { account_id, name } = params;
    return this._client.delete(
      __scalarPath`/accounts/${account_id}/ai-search/namespaces/${name}/instances/${id}`,
      options,
    );
  }

  /**
   * Retrieve the configuration and status of an AI Search instance.
   *
   * @param {string} id
   * @param {AISearchInstanceNamespaceFetchParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<AISearchInstanceNamespaceFetchResponse>} Returns the instance.
   *
   * @example
   * ```ts
   * const aiSearchInstance = await client.aiSearchInstances.namespaceFetch('my-ai-search', {
   *   account_id: 'c3dc5f0b34a14ff8e1b3ec04895e1b22',
   *   name: 'name',
   * });
   * ```
   */
  namespaceFetch(
    id: string,
    params: AISearchInstanceNamespaceFetchParams,
    options?: RequestOptions,
  ): APIPromise<AISearchInstanceNamespaceFetchResponse> {
    const { account_id, name } = params;
    return this._client.get(
      __scalarPath`/accounts/${account_id}/ai-search/namespaces/${name}/instances/${id}`,
      options,
    );
  }

  /**
   * Update the configuration of an AI Search instance.
   *
   * @param {string} id
   * @param {AISearchInstanceNamespaceUpdateParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<AISearchInstanceNamespaceUpdateResponse>} Returns the updated instance.
   *
   * @example
   * ```ts
   * const aiSearchInstance = await client.aiSearchInstances.namespaceUpdate('my-ai-search', {
   *   account_id: 'c3dc5f0b34a14ff8e1b3ec04895e1b22',
   *   name: 'name',
   *   cache: true,
   *   cache_threshold: 'close_enough',
   *   cache_ttl: 172800,
   *   chunk: true,
   *   chunk_overlap: 10,
   *   fusion_method: 'rrf',
   *   index_method: { keyword: false, vector: true },
   *   max_num_results: 10,
   *   paused: false,
   *   reranking: false,
   *   rewrite_query: false,
   *   score_threshold: 0.4,
   *   summarization: false,
   *   sync_interval: 21600,
   * });
   * ```
   */
  namespaceUpdate(
    id: string,
    params: AISearchInstanceNamespaceUpdateParams,
    options?: RequestOptions,
  ): APIPromise<AISearchInstanceNamespaceUpdateResponse> {
    const { account_id, name, ...body } = params;
    return this._client.put(
      __scalarPath`/accounts/${account_id}/ai-search/namespaces/${name}/instances/${id}`,
      { body, ...options },
    );
  }

  /**
   * Performs a chat completion request against an AI Search instance, using indexed content as context for generating responses.
   *
   * @param {string} id - AI Search instance ID. Lowercase alphanumeric, hyphens, and underscores.
   * @param {AISearchInstanceNamespaceChatCompletionParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<AISearchInstanceNamespaceChatCompletionResponse>} Returns the chat completions results with retrieved files.
   *
   * @example
   * ```ts
   * const aiSearchInstance = await client.aiSearchInstances.namespaceChatCompletion('my-ai-search', {
   *   account_id: 'c3dc5f0b34a14ff8e1b3ec04895e1b22',
   *   name: 'name',
   *   messages: [
   *     {
   *       content: '',
   *       role: 'system',
   *     },
   *   ],
   * });
   * ```
   */
  namespaceChatCompletion(
    id: string,
    params: AISearchInstanceNamespaceChatCompletionParams,
    options?: RequestOptions,
  ): APIPromise<AISearchInstanceNamespaceChatCompletionResponse> {
    const { account_id, name, ...body } = params;
    return this._client.post(
      __scalarPath`/accounts/${account_id}/ai-search/namespaces/${name}/instances/${id}/chat/completions`,
      { body, ...options },
    );
  }

  /**
   * Purges all cached search results for an AI Search instance. A new internal cache key is generated, immediately orphaning all prior cached entries.
   *
   * @param {string} id - AI Search instance ID. Lowercase alphanumeric, hyphens, and underscores.
   * @param {AISearchInstanceNamespacePurgeCacheParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<AISearchInstanceNamespacePurgeCacheResponse>} Cache purged successfully.
   *
   * @example
   * ```ts
   * const aiSearchInstance = await client.aiSearchInstances.namespacePurgeCache('my-ai-search', {
   *   account_id: 'accountId',
   *   name: 'name',
   * });
   * ```
   */
  namespacePurgeCache(
    id: string,
    params: AISearchInstanceNamespacePurgeCacheParams,
    options?: RequestOptions,
  ): APIPromise<AISearchInstanceNamespacePurgeCacheResponse> {
    const { account_id, name } = params;
    return this._client.post(
      __scalarPath`/accounts/${account_id}/ai-search/namespaces/${name}/instances/${id}/purge_cache`,
      options,
    );
  }

  /**
   * Executes a semantic search query against an AI Search instance to find relevant indexed content.
   *
   * @param {string} id - AI Search instance ID. Lowercase alphanumeric, hyphens, and underscores.
   * @param {AISearchInstanceSearch2Params} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<AISearchInstanceSearch2Response>} Returns the search results.
   *
   * @example
   * ```ts
   * const aiSearchInstance = await client.aiSearchInstances.search2('my-ai-search', {
   *   account_id: 'c3dc5f0b34a14ff8e1b3ec04895e1b22',
   *   name: 'name',
   * });
   * ```
   */
  search2(
    id: string,
    params: AISearchInstanceSearch2Params,
    options?: RequestOptions,
  ): APIPromise<AISearchInstanceSearch2Response> {
    const { account_id, name, ...body } = params;
    return this._client.post(
      __scalarPath`/accounts/${account_id}/ai-search/namespaces/${name}/instances/${id}/search`,
      { body, ...options },
    );
  }

  /**
   * Retrieve usage and indexing statistics for an AI Search instance.
   *
   * @param {string} id - AI Search instance ID. Lowercase alphanumeric, hyphens, and underscores.
   * @param {AISearchInstanceNamespaceStatsParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<AISearchInstanceNamespaceStatsResponse>} Returns the AI Search stats.
   *
   * @example
   * ```ts
   * const aiSearchInstance = await client.aiSearchInstances.namespaceStats('my-ai-search', {
   *   account_id: 'c3dc5f0b34a14ff8e1b3ec04895e1b22',
   *   name: 'name',
   * });
   * ```
   */
  namespaceStats(
    id: string,
    params: AISearchInstanceNamespaceStatsParams,
    options?: RequestOptions,
  ): APIPromise<AISearchInstanceNamespaceStatsResponse> {
    const { account_id, name } = params;
    return this._client.get(
      __scalarPath`/accounts/${account_id}/ai-search/namespaces/${name}/instances/${id}/stats`,
      options,
    );
  }
}

export interface AISearchInstanceListParams {
  /**
   * Page number (1-indexed).
   * @default 1
   * @minimum 1
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
   * Filter instances whose id contains this string (case-insensitive).
   * @maxLength 64
   */
  search?: string;
  /**
   * Filter by namespace.
   * @pattern ^[a-z0-9]([a-z0-9-]{0,26}[a-z0-9])?$
   */
  namespace?: string;
  /**
   * Field to order results by.
   * @default created_at
   */
  order_by?: 'created_at';
  /**
   * Order direction.
   * @default desc
   */
  order_by_direction?: 'asc' | 'desc';
}

export interface AISearchInstanceListResponse {
  result: Array<AISearchInstanceListResponse.Result>;
  result_info: AISearchInstanceListResponse.ResultInfo;
  success: true;
}

export namespace AISearchInstanceListResponse {
  export interface Result {
    ai_gateway_id: string | null;
    ai_search_model: string | null;
    cache: boolean;
    cache_threshold: 'super_strict_match' | 'close_enough' | 'flexible_friend' | 'anything_goes' | null;
    cache_ttl: 600 | 1800 | 3600 | 7200 | 21600 | 43200 | 86400 | 172800 | 259200 | 518400;
    chunk: boolean;
    chunk_overlap: number | null;
    chunk_size: number | null;
    /**
     * @format date-time
     */
    created_at: string;
    created_by: string | null;
    custom_metadata: Array<Result.CustomMetadata> | null;
    embedding_model: string | null;
    enable: boolean;
    engine_version: number;
    fusion_method: 'max' | 'rrf';
    hybrid_search_enabled: boolean;
    id: string;
    index_method: Result.IndexMethod;
    indexing_options: Result.IndexingOptions | null;
    /**
     * @format date-time
     */
    last_activity: string | null;
    max_num_results: number | null;
    metadata: Result.Metadata | null;
    /**
     * @format date-time
     */
    modified_at: string;
    modified_by: string | null;
    /**
     * @pattern ^[a-z0-9]([a-z0-9-]{0,26}[a-z0-9])?$
     */
    namespace: string;
    paused: boolean;
    public_endpoint_id: string | null;
    public_endpoint_params: Result.PublicEndpointParams | null;
    reranking: boolean;
    reranking_model: string | null;
    retrieval_options: Result.RetrievalOptions | null;
    rewrite_model: string | null;
    rewrite_query: boolean;
    score_threshold: number | null;
    source: string | null;
    source_params: Result.SourceParams | null;
    status: string;
    summarization: boolean;
    summarization_model: string | null;
    sync_interval: 900 | 1800 | 3600 | 7200 | 14400 | 21600 | 43200 | 86400;
    system_prompt_ai_search: string | null;
    system_prompt_index_summarization: string | null;
    system_prompt_rewrite_query: string | null;
    token_id: string | null;
    type: 'r2' | 'web-crawler' | null;
  }

  export namespace Result {
    export interface CustomMetadata {
      data_type: 'text' | 'number' | 'boolean' | 'datetime';
      field_name: string;
    }

    export interface IndexMethod {
      keyword: boolean;
      vector: boolean;
      [k: string]: unknown;
    }

    export interface IndexingOptions {
      keyword_tokenizer?: 'porter' | 'trigram';
      use_ocr?: boolean;
      [k: string]: unknown;
    }

    export interface Metadata {
      created_from_aisearch_wizard?: boolean;
      worker_domain?: string;
      [k: string]: unknown;
    }

    export interface PublicEndpointParams {
      authorized_hosts?: Array<string>;
      chat_completions_endpoint?: PublicEndpointParams.ChatCompletionsEndpoint;
      /**
       * @maxItems 1
       */
      custom_domains?: Array<string> | null;
      default_domain_enabled?: boolean;
      enabled?: boolean;
      mcp?: PublicEndpointParams.Mcp;
      rate_limit?: PublicEndpointParams.RateLimit;
      search_endpoint?: PublicEndpointParams.SearchEndpoint;
      [k: string]: unknown;
    }

    export namespace PublicEndpointParams {
      export interface ChatCompletionsEndpoint {
        disabled?: boolean;
        [k: string]: unknown;
      }

      export interface Mcp {
        description?: string;
        disabled?: boolean;
        [k: string]: unknown;
      }

      export interface RateLimit {
        /**
         * @minimum 60000
         * @maximum 3600000
         */
        period_ms?: number;
        /**
         * @minimum 1
         */
        requests?: number;
        technique?: 'fixed' | 'sliding';
        [k: string]: unknown;
      }

      export interface SearchEndpoint {
        disabled?: boolean;
        [k: string]: unknown;
      }
    }

    export interface RetrievalOptions {
      /**
       * @maxItems 3
       */
      boost_by?: Array<RetrievalOptions.BoostBy>;
      keyword_match_mode?: 'and' | 'or';
      [k: string]: unknown;
    }

    export namespace RetrievalOptions {
      export interface BoostBy {
        /**
         * @minLength 1
         * @maxLength 64
         */
        field: string;
        dataType?: 'number' | 'datetime' | 'text' | 'boolean';
        direction?: 'asc' | 'desc' | 'exists' | 'not_exists';
        [k: string]: unknown;
      }
    }

    export interface SourceParams {
      exclude_items?: Array<string>;
      include_items?: Array<string>;
      prefix?: string;
      r2_jurisdiction?: string;
      web_crawler?: SourceParams.WebCrawler;
      [k: string]: unknown;
    }

    export namespace SourceParams {
      export interface WebCrawler {
        discover_options?: WebCrawler.DiscoverOptions;
        parse_options?: WebCrawler.ParseOptions;
        parse_type?: 'sitemap' | 'discover';
        [k: string]: unknown;
      }

      export namespace WebCrawler {
        export interface DiscoverOptions {
          /**
           * @minimum 1
           * @maximum 100000
           */
          depth?: number;
          include_external_links?: boolean;
          include_subdomains?: boolean;
          /**
           * Maximum number of pages to crawl. New values are capped at 100000; instances configured before that cap may report a higher stored value, which the crawler clamps at run time.
           * @minimum 1
           * @maximum 100000
           */
          limit?: number;
          /**
           * @minimum 0
           * @maximum 604800
           */
          max_age?: number;
          source?: 'all' | 'sitemaps' | 'links';
          [k: string]: unknown;
        }

        export interface ParseOptions {
          /**
           * @maxItems 10
           */
          content_selector?: Array<ParseOptions.ContentSelector>;
          include_headers?: Record<string, string>;
          include_images?: boolean;
          /**
           * @maxItems 10
           */
          specific_sitemaps?: Array<string>;
          use_browser_rendering?: boolean;
          [k: string]: unknown;
        }

        export namespace ParseOptions {
          export interface ContentSelector {
            /**
             * @minLength 1
             * @maxLength 200
             */
            path: string;
            /**
             * @minLength 1
             * @maxLength 200
             */
            selector: string;
            [k: string]: unknown;
          }
        }
      }
    }
  }

  export interface ResultInfo {
    count: number;
    page: number;
    per_page: number;
    total_count: number;
  }
}

export interface AISearchInstanceCreateParams {
  /**
   * AI Search instance ID. Lowercase alphanumeric, hyphens, and underscores.
   * @minLength 1
   * @maxLength 64
   * @pattern ^[a-z0-9_]+(?:-[a-z0-9_]+)*$
   */
  id: string;
  ai_gateway_id?: string | null;
  /**
   * A Workers AI model ID or an AI Gateway model ID compatible with the OpenAI Chat Completions API. An empty string uses the configured or default model.
   */
  ai_search_model?: string | null;
  /**
   * @default true
   */
  cache?: boolean;
  /**
   * @default close_enough
   */
  cache_threshold?: 'super_strict_match' | 'close_enough' | 'flexible_friend' | 'anything_goes';
  /**
   * Cache entry TTL in seconds. Allowed values: 600 (10min), 1800 (30min), 3600 (1h), 7200 (2h), 21600 (6h), 43200 (12h), 86400 (24h), 172800 (48h), 259200 (72h), 518400 (6d).
   * @default 172800
   */
  cache_ttl?: 600 | 1800 | 3600 | 7200 | 21600 | 43200 | 86400 | 172800 | 259200 | 518400;
  /**
   * @default true
   */
  chunk?: boolean;
  /**
   * @default 10
   * @minimum 0
   * @maximum 30
   */
  chunk_overlap?: number;
  /**
   * @minimum 64
   */
  chunk_size?: number;
  /**
   * @maxItems 5
   */
  custom_metadata?: Array<AISearchInstanceCreateParams.CustomMetadata>;
  embedding_model?: string | null;
  /**
   * @default rrf
   */
  fusion_method?: 'max' | 'rrf';
  /**
   * Deprecated — use index_method instead.
   * @default false
   * @deprecated
   */
  hybrid_search_enabled?: boolean;
  /**
   * Controls which storage backends are used during indexing. Defaults to vector-only.
   * @default {"keyword":false,"vector":true}
   */
  index_method?: AISearchInstanceCreateParams.IndexMethod;
  indexing_options?: AISearchInstanceCreateParams.IndexingOptions | null;
  /**
   * @default 10
   * @minimum 1
   * @maximum 50
   */
  max_num_results?: number;
  metadata?: AISearchInstanceCreateParams.Metadata;
  public_endpoint_params?: AISearchInstanceCreateParams.PublicEndpointParams;
  /**
   * @default false
   */
  reranking?: boolean;
  reranking_model?: string | null;
  retrieval_options?: AISearchInstanceCreateParams.RetrievalOptions | null;
  /**
   * A Workers AI model ID or an AI Gateway model ID compatible with the OpenAI Chat Completions API. An empty string uses the configured or default model.
   */
  rewrite_model?: string | null;
  /**
   * @default false
   */
  rewrite_query?: boolean;
  /**
   * @default 0.4
   * @minimum 0
   * @maximum 1
   */
  score_threshold?: number;
  source?: string | null;
  source_params?: AISearchInstanceCreateParams.SourceParams | null;
  /**
   * Interval between automatic syncs, in seconds. Allowed values: 900 (15min), 1800 (30min), 3600 (1h), 7200 (2h), 14400 (4h), 21600 (6h), 43200 (12h), 86400 (24h).
   * @default 21600
   */
  sync_interval?: 900 | 1800 | 3600 | 7200 | 14400 | 21600 | 43200 | 86400;
  /**
   * @format uuid
   */
  token_id?: string;
  type?: 'r2' | 'web-crawler' | null;
}

export namespace AISearchInstanceCreateParams {
  export interface CustomMetadata {
    data_type: 'text' | 'number' | 'boolean' | 'datetime';
    /**
     * @minLength 1
     * @maxLength 64
     */
    field_name: string;
  }

  export interface IndexMethod {
    /**
     * Enable keyword (BM25) storage backend.
     */
    keyword: boolean;
    /**
     * Enable vector (embedding) storage backend.
     */
    vector: boolean;
  }

  export interface IndexingOptions {
    /**
     * Tokenizer used for keyword search indexing. porter provides word-level tokenization with Porter stemming (good for natural language queries). trigram enables character-level substring matching (good for partial matches, code, identifiers). Changing this triggers a full re-index. Defaults to porter.
     */
    keyword_tokenizer?: 'porter' | 'trigram';
    /**
     * Accepted and propagated for future OCR processing. Currently inert. Changing this triggers a full re-index. Defaults to false.
     */
    use_ocr?: boolean;
  }

  export interface Metadata {
    created_from_aisearch_wizard?: boolean;
    worker_domain?: string;
  }

  export interface PublicEndpointParams {
    authorized_hosts?: Array<string>;
    chat_completions_endpoint?: PublicEndpointParams.ChatCompletionsEndpoint;
    /**
     * Custom domain hostnames that alias this public endpoint. GET and create responses return the current set; on update (PUT) this field is only echoed back when supplied in the request body, otherwise it is null (omit it to leave domains unchanged).
     * @maxItems 1
     */
    custom_domains?: Array<string> | null;
    /**
     * When false, the instance is reachable only via a registered custom domain and the default <public_endpoint_id>.search.ai.cloudflare.com host returns 404. Requires at least one custom domain. Defaults to true. public_endpoint_params is replaced wholesale on update, so resend default_domain_enabled on every update to keep the default host off — omitting it resets to true.
     */
    default_domain_enabled?: boolean;
    /**
     * @default false
     */
    enabled?: boolean;
    mcp?: PublicEndpointParams.Mcp;
    rate_limit?: PublicEndpointParams.RateLimit;
    search_endpoint?: PublicEndpointParams.SearchEndpoint;
  }

  export namespace PublicEndpointParams {
    export interface ChatCompletionsEndpoint {
      /**
       * Disable chat completions endpoint for this public endpoint
       * @default false
       */
      disabled?: boolean;
    }

    export interface Mcp {
      /**
       * @default Finds exactly what you're looking for
       */
      description?: string;
      /**
       * Disable MCP endpoint for this public endpoint
       * @default false
       */
      disabled?: boolean;
    }

    export interface RateLimit {
      /**
       * @minimum 60000
       * @maximum 3600000
       */
      period_ms?: number;
      /**
       * @minimum 1
       */
      requests?: number;
      technique?: 'fixed' | 'sliding';
    }

    export interface SearchEndpoint {
      /**
       * Disable search endpoint for this public endpoint
       * @default false
       */
      disabled?: boolean;
    }
  }

  export interface RetrievalOptions {
    /**
     * Metadata fields to boost search results by. Each entry specifies a metadata field and an optional direction. Direction defaults to 'asc' for numeric/datetime fields and 'exists' for text/boolean fields. Fields must match 'timestamp' or a defined custom_metadata field.
     * @maxItems 3
     */
    boost_by?: Array<RetrievalOptions.BoostBy>;
    /**
     * Controls which documents are candidates for BM25 scoring. 'and' restricts candidates to documents containing all query terms; 'or' includes any document containing at least one term, ranked by BM25 relevance. When omitted on an update, the existing stored value is preserved; when never set, search falls back to 'and'.
     */
    keyword_match_mode?: 'and' | 'or';
  }

  export namespace RetrievalOptions {
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

  export interface SourceParams {
    /**
     * List of path patterns to exclude. Uses micromatch glob syntax: * matches within a path segment, ** matches across path segments (e.g., /admin/** matches /admin/users and /admin/settings/advanced). Most accounts are limited to 10 rules; contact support to raise it.
     * @maxItems 10
     */
    exclude_items?: Array<string>;
    /**
     * List of path patterns to include. Uses micromatch glob syntax: * matches within a path segment, ** matches across path segments (e.g., /blog/** matches /blog/post and /blog/2024/post). Most accounts are limited to 10 rules; contact support to raise it.
     * @maxItems 10
     */
    include_items?: Array<string>;
    prefix?: string;
    /**
     * @default default
     */
    r2_jurisdiction?: string;
    /**
     * @default {"parse_type":"sitemap"}
     */
    web_crawler?: SourceParams.WebCrawler;
  }

  export namespace SourceParams {
    export interface WebCrawler {
      /**
       * Options for parse_type 'discover', where Browser Run discovers URLs by link following and sitemaps. Ignored for 'sitemap'.
       */
      discover_options?: WebCrawler.DiscoverOptions;
      parse_options?: WebCrawler.ParseOptions;
      /**
       * How URLs are discovered. 'sitemap' reads XML sitemaps; 'discover' follows links recursively and requires the source to be a Verified zone on this account.
       * @default sitemap
       */
      parse_type?: 'sitemap' | 'discover';
    }

    export namespace WebCrawler {
      export interface DiscoverOptions {
        /**
         * Maximum link-follow depth from the seed URL.
         * @default 5
         * @minimum 1
         * @maximum 100000
         */
        depth?: number;
        /**
         * Follow links that point outside the source domain. Must stay `false` — discover crawls are restricted to the zone you own.
         * @default false
         */
        include_external_links?: boolean;
        /**
         * Follow links to subdomains of the source host.
         * @default false
         */
        include_subdomains?: boolean;
        /**
         * Maximum number of pages to crawl (1-100000).
         * @default 100000
         * @minimum 1
         * @maximum 100000
         */
        limit?: number;
        /**
         * Maximum content age in seconds to accept (0–604800).
         * @default 86400
         * @minimum 0
         * @maximum 604800
         */
        max_age?: number;
        /**
         * Where the crawler looks for URLs: 'sitemaps' reads sitemap XML only, 'links' follows page links only, 'all' does both.
         * @default all
         */
        source?: 'all' | 'sitemaps' | 'links';
      }

      export interface ParseOptions {
        /**
         * List of path-to-selector mappings for extracting specific content from crawled pages. Each entry pairs a URL glob pattern with a CSS selector. The first matching path wins. Only the matched HTML fragment is stored and indexed. Omit the field to disable content selection — empty arrays are rejected.
         * @minItems 1
         * @maxItems 10
         */
        content_selector?: Array<ParseOptions.ContentSelector>;
        /**
         * Up to 5 custom HTTP headers sent with each crawl request. Names must be RFC-7230 token characters (no spaces, colons, or control characters); values must be HTAB + printable ASCII (no CR/LF).
         */
        include_headers?: Record<string, string>;
        /**
         * @default false
         */
        include_images?: boolean;
        /**
         * List of specific sitemap URLs to use for crawling. Only valid when parse_type is 'sitemap'.
         * @maxItems 10
         */
        specific_sitemaps?: Array<string>;
        /**
         * @default true
         */
        use_browser_rendering?: boolean;
      }

      export namespace ParseOptions {
        export interface ContentSelector {
          /**
           * Glob pattern to match against the page URL path. Uses standard glob syntax: * matches within a segment, ** crosses directories.
           * @minLength 1
           * @maxLength 200
           */
          path: string;
          /**
           * CSS selector to extract content from pages matching the path pattern. Must not contain disallowed characters (;, `, $, {, }, \). Must target a single element; if multiple elements match, the selector is ignored and the full page is used.
           * @minLength 1
           * @maxLength 200
           */
          selector: string;
        }
      }
    }
  }
}

export interface AISearchInstanceCreateResponse {
  result: AISearchInstanceCreateResponse.Result;
  success: boolean;
}

export namespace AISearchInstanceCreateResponse {
  export interface Result {
    /**
     * @format date-time
     */
    created_at: string;
    /**
     * AI Search instance ID. Lowercase alphanumeric, hyphens, and underscores.
     * @minLength 1
     * @maxLength 64
     * @pattern ^[a-z0-9_]+(?:-[a-z0-9_]+)*$
     */
    id: string;
    /**
     * @format date-time
     */
    modified_at: string;
    ai_gateway_id?: string | null;
    /**
     * A Workers AI model ID or an AI Gateway model ID compatible with the OpenAI Chat Completions API. An empty string uses the configured or default model.
     */
    ai_search_model?: string | null;
    /**
     * @default true
     */
    cache?: boolean;
    /**
     * @default close_enough
     */
    cache_threshold?: 'super_strict_match' | 'close_enough' | 'flexible_friend' | 'anything_goes';
    /**
     * Cache entry TTL in seconds. Allowed values: 600 (10min), 1800 (30min), 3600 (1h), 7200 (2h), 21600 (6h), 43200 (12h), 86400 (24h), 172800 (48h), 259200 (72h), 518400 (6d).
     * @default 172800
     */
    cache_ttl?: 600 | 1800 | 3600 | 7200 | 21600 | 43200 | 86400 | 172800 | 259200 | 518400;
    /**
     * @default 10
     * @minimum 0
     * @maximum 30
     */
    chunk_overlap?: number;
    /**
     * @minimum 64
     */
    chunk_size?: number;
    created_by?: string | null;
    /**
     * @maxItems 5
     */
    custom_metadata?: Array<Result.CustomMetadata>;
    embedding_model?: string | null;
    /**
     * @default true
     */
    enable?: boolean;
    /**
     * @default 3
     */
    engine_version?: number;
    /**
     * @default rrf
     */
    fusion_method?: 'max' | 'rrf';
    /**
     * Deprecated — use index_method instead.
     * @default false
     * @deprecated
     */
    hybrid_search_enabled?: boolean;
    /**
     * Controls which storage backends are used during indexing. Defaults to vector-only.
     * @default {"keyword":false,"vector":true}
     */
    index_method?: Result.IndexMethod;
    indexing_options?: Result.IndexingOptions | null;
    /**
     * @format date-time
     */
    last_activity?: string | null;
    /**
     * @default 10
     * @minimum 1
     * @maximum 50
     */
    max_num_results?: number;
    metadata?: Result.Metadata;
    modified_by?: string | null;
    /**
     * @pattern ^[a-z0-9]([a-z0-9-]{0,26}[a-z0-9])?$
     */
    namespace?: string | null;
    /**
     * @default false
     */
    paused?: boolean;
    public_endpoint_id?: string | null;
    public_endpoint_params?: Result.PublicEndpointParams;
    /**
     * @default false
     */
    reranking?: boolean;
    reranking_model?: string | null;
    retrieval_options?: Result.RetrievalOptions | null;
    /**
     * A Workers AI model ID or an AI Gateway model ID compatible with the OpenAI Chat Completions API. An empty string uses the configured or default model.
     */
    rewrite_model?: string | null;
    /**
     * @default false
     */
    rewrite_query?: boolean;
    /**
     * @default 0.4
     * @minimum 0
     * @maximum 1
     */
    score_threshold?: number;
    source?: string | null;
    source_params?: Result.SourceParams | null;
    /**
     * @default waiting
     */
    status?: string;
    /**
     * Interval between automatic syncs, in seconds. Allowed values: 900 (15min), 1800 (30min), 3600 (1h), 7200 (2h), 14400 (4h), 21600 (6h), 43200 (12h), 86400 (24h).
     * @default 21600
     */
    sync_interval?: 900 | 1800 | 3600 | 7200 | 14400 | 21600 | 43200 | 86400;
    /**
     * @format uuid
     */
    token_id?: string;
    type?: 'r2' | 'web-crawler' | null;
  }

  export namespace Result {
    export interface CustomMetadata {
      data_type: 'text' | 'number' | 'boolean' | 'datetime';
      /**
       * @minLength 1
       * @maxLength 64
       */
      field_name: string;
    }

    export interface IndexMethod {
      /**
       * Enable keyword (BM25) storage backend.
       */
      keyword: boolean;
      /**
       * Enable vector (embedding) storage backend.
       */
      vector: boolean;
    }

    export interface IndexingOptions {
      /**
       * Tokenizer used for keyword search indexing. porter provides word-level tokenization with Porter stemming (good for natural language queries). trigram enables character-level substring matching (good for partial matches, code, identifiers). Changing this triggers a full re-index. Defaults to porter.
       */
      keyword_tokenizer?: 'porter' | 'trigram';
      /**
       * Accepted and propagated for future OCR processing. Currently inert. Changing this triggers a full re-index. Defaults to false.
       */
      use_ocr?: boolean;
    }

    export interface Metadata {
      created_from_aisearch_wizard?: boolean;
      worker_domain?: string;
    }

    export interface PublicEndpointParams {
      authorized_hosts?: Array<string>;
      chat_completions_endpoint?: PublicEndpointParams.ChatCompletionsEndpoint;
      /**
       * Custom domain hostnames that alias this public endpoint. GET and create responses return the current set; on update (PUT) this field is only echoed back when supplied in the request body, otherwise it is null (omit it to leave domains unchanged).
       * @maxItems 1
       */
      custom_domains?: Array<string> | null;
      /**
       * When false, the instance is reachable only via a registered custom domain and the default <public_endpoint_id>.search.ai.cloudflare.com host returns 404. Requires at least one custom domain. Defaults to true. public_endpoint_params is replaced wholesale on update, so resend default_domain_enabled on every update to keep the default host off — omitting it resets to true.
       */
      default_domain_enabled?: boolean;
      /**
       * @default false
       */
      enabled?: boolean;
      mcp?: PublicEndpointParams.Mcp;
      rate_limit?: PublicEndpointParams.RateLimit;
      search_endpoint?: PublicEndpointParams.SearchEndpoint;
    }

    export namespace PublicEndpointParams {
      export interface ChatCompletionsEndpoint {
        /**
         * Disable chat completions endpoint for this public endpoint
         * @default false
         */
        disabled?: boolean;
      }

      export interface Mcp {
        /**
         * @default Finds exactly what you're looking for
         */
        description?: string;
        /**
         * Disable MCP endpoint for this public endpoint
         * @default false
         */
        disabled?: boolean;
      }

      export interface RateLimit {
        /**
         * @minimum 60000
         * @maximum 3600000
         */
        period_ms?: number;
        /**
         * @minimum 1
         */
        requests?: number;
        technique?: 'fixed' | 'sliding';
      }

      export interface SearchEndpoint {
        /**
         * Disable search endpoint for this public endpoint
         * @default false
         */
        disabled?: boolean;
      }
    }

    export interface RetrievalOptions {
      /**
       * Metadata fields to boost search results by. Each entry specifies a metadata field and an optional direction. Direction defaults to 'asc' for numeric/datetime fields and 'exists' for text/boolean fields. Fields must match 'timestamp' or a defined custom_metadata field.
       * @maxItems 3
       */
      boost_by?: Array<RetrievalOptions.BoostBy>;
      /**
       * Controls which documents are candidates for BM25 scoring. 'and' restricts candidates to documents containing all query terms; 'or' includes any document containing at least one term, ranked by BM25 relevance. When omitted on an update, the existing stored value is preserved; when never set, search falls back to 'and'.
       */
      keyword_match_mode?: 'and' | 'or';
    }

    export namespace RetrievalOptions {
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

    export interface SourceParams {
      /**
       * List of path patterns to exclude. Uses micromatch glob syntax: * matches within a path segment, ** matches across path segments (e.g., /admin/** matches /admin/users and /admin/settings/advanced). Most accounts are limited to 10 rules; contact support to raise it.
       * @maxItems 10
       */
      exclude_items?: Array<string>;
      /**
       * List of path patterns to include. Uses micromatch glob syntax: * matches within a path segment, ** matches across path segments (e.g., /blog/** matches /blog/post and /blog/2024/post). Most accounts are limited to 10 rules; contact support to raise it.
       * @maxItems 10
       */
      include_items?: Array<string>;
      prefix?: string;
      /**
       * @default default
       */
      r2_jurisdiction?: string;
      /**
       * @default {"parse_type":"sitemap"}
       */
      web_crawler?: SourceParams.WebCrawler;
    }

    export namespace SourceParams {
      export interface WebCrawler {
        /**
         * Options for parse_type 'discover', where Browser Run discovers URLs by link following and sitemaps. Ignored for 'sitemap'.
         */
        discover_options?: WebCrawler.DiscoverOptions;
        parse_options?: WebCrawler.ParseOptions;
        /**
         * How URLs are discovered. 'sitemap' reads XML sitemaps; 'discover' follows links recursively and requires the source to be a Verified zone on this account.
         * @default sitemap
         */
        parse_type?: 'sitemap' | 'discover';
      }

      export namespace WebCrawler {
        export interface DiscoverOptions {
          /**
           * Maximum link-follow depth from the seed URL.
           * @default 5
           * @minimum 1
           * @maximum 100000
           */
          depth?: number;
          /**
           * Follow links that point outside the source domain. Must stay `false` — discover crawls are restricted to the zone you own.
           * @default false
           */
          include_external_links?: boolean;
          /**
           * Follow links to subdomains of the source host.
           * @default false
           */
          include_subdomains?: boolean;
          /**
           * Maximum number of pages to crawl (1-100000).
           * @default 100000
           * @minimum 1
           * @maximum 100000
           */
          limit?: number;
          /**
           * Maximum content age in seconds to accept (0–604800).
           * @default 86400
           * @minimum 0
           * @maximum 604800
           */
          max_age?: number;
          /**
           * Where the crawler looks for URLs: 'sitemaps' reads sitemap XML only, 'links' follows page links only, 'all' does both.
           * @default all
           */
          source?: 'all' | 'sitemaps' | 'links';
        }

        export interface ParseOptions {
          /**
           * List of path-to-selector mappings for extracting specific content from crawled pages. Each entry pairs a URL glob pattern with a CSS selector. The first matching path wins. Only the matched HTML fragment is stored and indexed. Omit the field to disable content selection — empty arrays are rejected.
           * @minItems 1
           * @maxItems 10
           */
          content_selector?: Array<ParseOptions.ContentSelector>;
          /**
           * Up to 5 custom HTTP headers sent with each crawl request. Names must be RFC-7230 token characters (no spaces, colons, or control characters); values must be HTAB + printable ASCII (no CR/LF).
           */
          include_headers?: Record<string, string>;
          /**
           * @default false
           */
          include_images?: boolean;
          /**
           * List of specific sitemap URLs to use for crawling. Only valid when parse_type is 'sitemap'.
           * @maxItems 10
           */
          specific_sitemaps?: Array<string>;
          /**
           * @default true
           */
          use_browser_rendering?: boolean;
        }

        export namespace ParseOptions {
          export interface ContentSelector {
            /**
             * Glob pattern to match against the page URL path. Uses standard glob syntax: * matches within a segment, ** crosses directories.
             * @minLength 1
             * @maxLength 200
             */
            path: string;
            /**
             * CSS selector to extract content from pages matching the path pattern. Must not contain disallowed characters (;, `, $, {, }, \). Must target a single element; if multiple elements match, the selector is ignored and the full page is used.
             * @minLength 1
             * @maxLength 200
             */
            selector: string;
          }
        }
      }
    }
  }
}

export interface AISearchInstanceDeleteParams {
  account_id: string;
}

export interface AISearchInstanceDeleteResponse {
  result: AISearchInstanceDeleteResponse.Result;
  success: boolean;
}

export namespace AISearchInstanceDeleteResponse {
  export interface Result {
    /**
     * @format date-time
     */
    created_at: string;
    /**
     * AI Search instance ID. Lowercase alphanumeric, hyphens, and underscores.
     * @minLength 1
     * @maxLength 64
     * @pattern ^[a-z0-9_]+(?:-[a-z0-9_]+)*$
     */
    id: string;
    /**
     * @format date-time
     */
    modified_at: string;
    ai_gateway_id?: string | null;
    /**
     * A Workers AI model ID or an AI Gateway model ID compatible with the OpenAI Chat Completions API. An empty string uses the configured or default model.
     */
    ai_search_model?: string | null;
    /**
     * @default true
     */
    cache?: boolean;
    /**
     * @default close_enough
     */
    cache_threshold?: 'super_strict_match' | 'close_enough' | 'flexible_friend' | 'anything_goes';
    /**
     * Cache entry TTL in seconds. Allowed values: 600 (10min), 1800 (30min), 3600 (1h), 7200 (2h), 21600 (6h), 43200 (12h), 86400 (24h), 172800 (48h), 259200 (72h), 518400 (6d).
     * @default 172800
     */
    cache_ttl?: 600 | 1800 | 3600 | 7200 | 21600 | 43200 | 86400 | 172800 | 259200 | 518400;
    /**
     * @default 10
     * @minimum 0
     * @maximum 30
     */
    chunk_overlap?: number;
    /**
     * @minimum 64
     */
    chunk_size?: number;
    created_by?: string | null;
    /**
     * @maxItems 5
     */
    custom_metadata?: Array<Result.CustomMetadata>;
    embedding_model?: string | null;
    /**
     * @default true
     */
    enable?: boolean;
    /**
     * @default 3
     */
    engine_version?: number;
    /**
     * @default rrf
     */
    fusion_method?: 'max' | 'rrf';
    /**
     * Deprecated — use index_method instead.
     * @default false
     * @deprecated
     */
    hybrid_search_enabled?: boolean;
    /**
     * Controls which storage backends are used during indexing. Defaults to vector-only.
     * @default {"keyword":false,"vector":true}
     */
    index_method?: Result.IndexMethod;
    indexing_options?: Result.IndexingOptions | null;
    /**
     * @format date-time
     */
    last_activity?: string | null;
    /**
     * @default 10
     * @minimum 1
     * @maximum 50
     */
    max_num_results?: number;
    metadata?: Result.Metadata;
    modified_by?: string | null;
    /**
     * @pattern ^[a-z0-9]([a-z0-9-]{0,26}[a-z0-9])?$
     */
    namespace?: string | null;
    /**
     * @default false
     */
    paused?: boolean;
    public_endpoint_id?: string | null;
    public_endpoint_params?: Result.PublicEndpointParams;
    /**
     * @default false
     */
    reranking?: boolean;
    reranking_model?: string | null;
    retrieval_options?: Result.RetrievalOptions | null;
    /**
     * A Workers AI model ID or an AI Gateway model ID compatible with the OpenAI Chat Completions API. An empty string uses the configured or default model.
     */
    rewrite_model?: string | null;
    /**
     * @default false
     */
    rewrite_query?: boolean;
    /**
     * @default 0.4
     * @minimum 0
     * @maximum 1
     */
    score_threshold?: number;
    source?: string | null;
    source_params?: Result.SourceParams | null;
    /**
     * @default waiting
     */
    status?: string;
    /**
     * Interval between automatic syncs, in seconds. Allowed values: 900 (15min), 1800 (30min), 3600 (1h), 7200 (2h), 14400 (4h), 21600 (6h), 43200 (12h), 86400 (24h).
     * @default 21600
     */
    sync_interval?: 900 | 1800 | 3600 | 7200 | 14400 | 21600 | 43200 | 86400;
    /**
     * @format uuid
     */
    token_id?: string;
    type?: 'r2' | 'web-crawler' | null;
  }

  export namespace Result {
    export interface CustomMetadata {
      data_type: 'text' | 'number' | 'boolean' | 'datetime';
      /**
       * @minLength 1
       * @maxLength 64
       */
      field_name: string;
    }

    export interface IndexMethod {
      /**
       * Enable keyword (BM25) storage backend.
       */
      keyword: boolean;
      /**
       * Enable vector (embedding) storage backend.
       */
      vector: boolean;
    }

    export interface IndexingOptions {
      /**
       * Tokenizer used for keyword search indexing. porter provides word-level tokenization with Porter stemming (good for natural language queries). trigram enables character-level substring matching (good for partial matches, code, identifiers). Changing this triggers a full re-index. Defaults to porter.
       */
      keyword_tokenizer?: 'porter' | 'trigram';
      /**
       * Accepted and propagated for future OCR processing. Currently inert. Changing this triggers a full re-index. Defaults to false.
       */
      use_ocr?: boolean;
    }

    export interface Metadata {
      created_from_aisearch_wizard?: boolean;
      worker_domain?: string;
    }

    export interface PublicEndpointParams {
      authorized_hosts?: Array<string>;
      chat_completions_endpoint?: PublicEndpointParams.ChatCompletionsEndpoint;
      /**
       * Custom domain hostnames that alias this public endpoint. GET and create responses return the current set; on update (PUT) this field is only echoed back when supplied in the request body, otherwise it is null (omit it to leave domains unchanged).
       * @maxItems 1
       */
      custom_domains?: Array<string> | null;
      /**
       * When false, the instance is reachable only via a registered custom domain and the default <public_endpoint_id>.search.ai.cloudflare.com host returns 404. Requires at least one custom domain. Defaults to true. public_endpoint_params is replaced wholesale on update, so resend default_domain_enabled on every update to keep the default host off — omitting it resets to true.
       */
      default_domain_enabled?: boolean;
      /**
       * @default false
       */
      enabled?: boolean;
      mcp?: PublicEndpointParams.Mcp;
      rate_limit?: PublicEndpointParams.RateLimit;
      search_endpoint?: PublicEndpointParams.SearchEndpoint;
    }

    export namespace PublicEndpointParams {
      export interface ChatCompletionsEndpoint {
        /**
         * Disable chat completions endpoint for this public endpoint
         * @default false
         */
        disabled?: boolean;
      }

      export interface Mcp {
        /**
         * @default Finds exactly what you're looking for
         */
        description?: string;
        /**
         * Disable MCP endpoint for this public endpoint
         * @default false
         */
        disabled?: boolean;
      }

      export interface RateLimit {
        /**
         * @minimum 60000
         * @maximum 3600000
         */
        period_ms?: number;
        /**
         * @minimum 1
         */
        requests?: number;
        technique?: 'fixed' | 'sliding';
      }

      export interface SearchEndpoint {
        /**
         * Disable search endpoint for this public endpoint
         * @default false
         */
        disabled?: boolean;
      }
    }

    export interface RetrievalOptions {
      /**
       * Metadata fields to boost search results by. Each entry specifies a metadata field and an optional direction. Direction defaults to 'asc' for numeric/datetime fields and 'exists' for text/boolean fields. Fields must match 'timestamp' or a defined custom_metadata field.
       * @maxItems 3
       */
      boost_by?: Array<RetrievalOptions.BoostBy>;
      /**
       * Controls which documents are candidates for BM25 scoring. 'and' restricts candidates to documents containing all query terms; 'or' includes any document containing at least one term, ranked by BM25 relevance. When omitted on an update, the existing stored value is preserved; when never set, search falls back to 'and'.
       */
      keyword_match_mode?: 'and' | 'or';
    }

    export namespace RetrievalOptions {
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

    export interface SourceParams {
      /**
       * List of path patterns to exclude. Uses micromatch glob syntax: * matches within a path segment, ** matches across path segments (e.g., /admin/** matches /admin/users and /admin/settings/advanced). Most accounts are limited to 10 rules; contact support to raise it.
       * @maxItems 10
       */
      exclude_items?: Array<string>;
      /**
       * List of path patterns to include. Uses micromatch glob syntax: * matches within a path segment, ** matches across path segments (e.g., /blog/** matches /blog/post and /blog/2024/post). Most accounts are limited to 10 rules; contact support to raise it.
       * @maxItems 10
       */
      include_items?: Array<string>;
      prefix?: string;
      /**
       * @default default
       */
      r2_jurisdiction?: string;
      /**
       * @default {"parse_type":"sitemap"}
       */
      web_crawler?: SourceParams.WebCrawler;
    }

    export namespace SourceParams {
      export interface WebCrawler {
        /**
         * Options for parse_type 'discover', where Browser Run discovers URLs by link following and sitemaps. Ignored for 'sitemap'.
         */
        discover_options?: WebCrawler.DiscoverOptions;
        parse_options?: WebCrawler.ParseOptions;
        /**
         * How URLs are discovered. 'sitemap' reads XML sitemaps; 'discover' follows links recursively and requires the source to be a Verified zone on this account.
         * @default sitemap
         */
        parse_type?: 'sitemap' | 'discover';
      }

      export namespace WebCrawler {
        export interface DiscoverOptions {
          /**
           * Maximum link-follow depth from the seed URL.
           * @default 5
           * @minimum 1
           * @maximum 100000
           */
          depth?: number;
          /**
           * Follow links that point outside the source domain. Must stay `false` — discover crawls are restricted to the zone you own.
           * @default false
           */
          include_external_links?: boolean;
          /**
           * Follow links to subdomains of the source host.
           * @default false
           */
          include_subdomains?: boolean;
          /**
           * Maximum number of pages to crawl (1-100000).
           * @default 100000
           * @minimum 1
           * @maximum 100000
           */
          limit?: number;
          /**
           * Maximum content age in seconds to accept (0–604800).
           * @default 86400
           * @minimum 0
           * @maximum 604800
           */
          max_age?: number;
          /**
           * Where the crawler looks for URLs: 'sitemaps' reads sitemap XML only, 'links' follows page links only, 'all' does both.
           * @default all
           */
          source?: 'all' | 'sitemaps' | 'links';
        }

        export interface ParseOptions {
          /**
           * List of path-to-selector mappings for extracting specific content from crawled pages. Each entry pairs a URL glob pattern with a CSS selector. The first matching path wins. Only the matched HTML fragment is stored and indexed. Omit the field to disable content selection — empty arrays are rejected.
           * @minItems 1
           * @maxItems 10
           */
          content_selector?: Array<ParseOptions.ContentSelector>;
          /**
           * Up to 5 custom HTTP headers sent with each crawl request. Names must be RFC-7230 token characters (no spaces, colons, or control characters); values must be HTAB + printable ASCII (no CR/LF).
           */
          include_headers?: Record<string, string>;
          /**
           * @default false
           */
          include_images?: boolean;
          /**
           * List of specific sitemap URLs to use for crawling. Only valid when parse_type is 'sitemap'.
           * @maxItems 10
           */
          specific_sitemaps?: Array<string>;
          /**
           * @default true
           */
          use_browser_rendering?: boolean;
        }

        export namespace ParseOptions {
          export interface ContentSelector {
            /**
             * Glob pattern to match against the page URL path. Uses standard glob syntax: * matches within a segment, ** crosses directories.
             * @minLength 1
             * @maxLength 200
             */
            path: string;
            /**
             * CSS selector to extract content from pages matching the path pattern. Must not contain disallowed characters (;, `, $, {, }, \). Must target a single element; if multiple elements match, the selector is ignored and the full page is used.
             * @minLength 1
             * @maxLength 200
             */
            selector: string;
          }
        }
      }
    }
  }
}

export interface AISearchInstanceFetchParams {
  account_id: string;
}

export interface AISearchInstanceFetchResponse {
  result: AISearchInstanceFetchResponse.Result;
  success: boolean;
}

export namespace AISearchInstanceFetchResponse {
  export interface Result {
    /**
     * @format date-time
     */
    created_at: string;
    /**
     * AI Search instance ID. Lowercase alphanumeric, hyphens, and underscores.
     * @minLength 1
     * @maxLength 64
     * @pattern ^[a-z0-9_]+(?:-[a-z0-9_]+)*$
     */
    id: string;
    /**
     * @format date-time
     */
    modified_at: string;
    ai_gateway_id?: string | null;
    /**
     * A Workers AI model ID or an AI Gateway model ID compatible with the OpenAI Chat Completions API. An empty string uses the configured or default model.
     */
    ai_search_model?: string | null;
    /**
     * @default true
     */
    cache?: boolean;
    /**
     * @default close_enough
     */
    cache_threshold?: 'super_strict_match' | 'close_enough' | 'flexible_friend' | 'anything_goes';
    /**
     * Cache entry TTL in seconds. Allowed values: 600 (10min), 1800 (30min), 3600 (1h), 7200 (2h), 21600 (6h), 43200 (12h), 86400 (24h), 172800 (48h), 259200 (72h), 518400 (6d).
     * @default 172800
     */
    cache_ttl?: 600 | 1800 | 3600 | 7200 | 21600 | 43200 | 86400 | 172800 | 259200 | 518400;
    /**
     * @default 10
     * @minimum 0
     * @maximum 30
     */
    chunk_overlap?: number;
    /**
     * @minimum 64
     */
    chunk_size?: number;
    created_by?: string | null;
    /**
     * @maxItems 5
     */
    custom_metadata?: Array<Result.CustomMetadata>;
    embedding_model?: string | null;
    /**
     * @default true
     */
    enable?: boolean;
    /**
     * @default 3
     */
    engine_version?: number;
    /**
     * @default rrf
     */
    fusion_method?: 'max' | 'rrf';
    /**
     * Deprecated — use index_method instead.
     * @default false
     * @deprecated
     */
    hybrid_search_enabled?: boolean;
    /**
     * Controls which storage backends are used during indexing. Defaults to vector-only.
     * @default {"keyword":false,"vector":true}
     */
    index_method?: Result.IndexMethod;
    indexing_options?: Result.IndexingOptions | null;
    /**
     * @format date-time
     */
    last_activity?: string | null;
    /**
     * @default 10
     * @minimum 1
     * @maximum 50
     */
    max_num_results?: number;
    metadata?: Result.Metadata;
    modified_by?: string | null;
    /**
     * @pattern ^[a-z0-9]([a-z0-9-]{0,26}[a-z0-9])?$
     */
    namespace?: string | null;
    /**
     * @default false
     */
    paused?: boolean;
    public_endpoint_id?: string | null;
    public_endpoint_params?: Result.PublicEndpointParams;
    /**
     * @default false
     */
    reranking?: boolean;
    reranking_model?: string | null;
    retrieval_options?: Result.RetrievalOptions | null;
    /**
     * A Workers AI model ID or an AI Gateway model ID compatible with the OpenAI Chat Completions API. An empty string uses the configured or default model.
     */
    rewrite_model?: string | null;
    /**
     * @default false
     */
    rewrite_query?: boolean;
    /**
     * @default 0.4
     * @minimum 0
     * @maximum 1
     */
    score_threshold?: number;
    source?: string | null;
    source_params?: Result.SourceParams | null;
    /**
     * @default waiting
     */
    status?: string;
    /**
     * Interval between automatic syncs, in seconds. Allowed values: 900 (15min), 1800 (30min), 3600 (1h), 7200 (2h), 14400 (4h), 21600 (6h), 43200 (12h), 86400 (24h).
     * @default 21600
     */
    sync_interval?: 900 | 1800 | 3600 | 7200 | 14400 | 21600 | 43200 | 86400;
    /**
     * @format uuid
     */
    token_id?: string;
    type?: 'r2' | 'web-crawler' | null;
  }

  export namespace Result {
    export interface CustomMetadata {
      data_type: 'text' | 'number' | 'boolean' | 'datetime';
      /**
       * @minLength 1
       * @maxLength 64
       */
      field_name: string;
    }

    export interface IndexMethod {
      /**
       * Enable keyword (BM25) storage backend.
       */
      keyword: boolean;
      /**
       * Enable vector (embedding) storage backend.
       */
      vector: boolean;
    }

    export interface IndexingOptions {
      /**
       * Tokenizer used for keyword search indexing. porter provides word-level tokenization with Porter stemming (good for natural language queries). trigram enables character-level substring matching (good for partial matches, code, identifiers). Changing this triggers a full re-index. Defaults to porter.
       */
      keyword_tokenizer?: 'porter' | 'trigram';
      /**
       * Accepted and propagated for future OCR processing. Currently inert. Changing this triggers a full re-index. Defaults to false.
       */
      use_ocr?: boolean;
    }

    export interface Metadata {
      created_from_aisearch_wizard?: boolean;
      worker_domain?: string;
    }

    export interface PublicEndpointParams {
      authorized_hosts?: Array<string>;
      chat_completions_endpoint?: PublicEndpointParams.ChatCompletionsEndpoint;
      /**
       * Custom domain hostnames that alias this public endpoint. GET and create responses return the current set; on update (PUT) this field is only echoed back when supplied in the request body, otherwise it is null (omit it to leave domains unchanged).
       * @maxItems 1
       */
      custom_domains?: Array<string> | null;
      /**
       * When false, the instance is reachable only via a registered custom domain and the default <public_endpoint_id>.search.ai.cloudflare.com host returns 404. Requires at least one custom domain. Defaults to true. public_endpoint_params is replaced wholesale on update, so resend default_domain_enabled on every update to keep the default host off — omitting it resets to true.
       */
      default_domain_enabled?: boolean;
      /**
       * @default false
       */
      enabled?: boolean;
      mcp?: PublicEndpointParams.Mcp;
      rate_limit?: PublicEndpointParams.RateLimit;
      search_endpoint?: PublicEndpointParams.SearchEndpoint;
    }

    export namespace PublicEndpointParams {
      export interface ChatCompletionsEndpoint {
        /**
         * Disable chat completions endpoint for this public endpoint
         * @default false
         */
        disabled?: boolean;
      }

      export interface Mcp {
        /**
         * @default Finds exactly what you're looking for
         */
        description?: string;
        /**
         * Disable MCP endpoint for this public endpoint
         * @default false
         */
        disabled?: boolean;
      }

      export interface RateLimit {
        /**
         * @minimum 60000
         * @maximum 3600000
         */
        period_ms?: number;
        /**
         * @minimum 1
         */
        requests?: number;
        technique?: 'fixed' | 'sliding';
      }

      export interface SearchEndpoint {
        /**
         * Disable search endpoint for this public endpoint
         * @default false
         */
        disabled?: boolean;
      }
    }

    export interface RetrievalOptions {
      /**
       * Metadata fields to boost search results by. Each entry specifies a metadata field and an optional direction. Direction defaults to 'asc' for numeric/datetime fields and 'exists' for text/boolean fields. Fields must match 'timestamp' or a defined custom_metadata field.
       * @maxItems 3
       */
      boost_by?: Array<RetrievalOptions.BoostBy>;
      /**
       * Controls which documents are candidates for BM25 scoring. 'and' restricts candidates to documents containing all query terms; 'or' includes any document containing at least one term, ranked by BM25 relevance. When omitted on an update, the existing stored value is preserved; when never set, search falls back to 'and'.
       */
      keyword_match_mode?: 'and' | 'or';
    }

    export namespace RetrievalOptions {
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

    export interface SourceParams {
      /**
       * List of path patterns to exclude. Uses micromatch glob syntax: * matches within a path segment, ** matches across path segments (e.g., /admin/** matches /admin/users and /admin/settings/advanced). Most accounts are limited to 10 rules; contact support to raise it.
       * @maxItems 10
       */
      exclude_items?: Array<string>;
      /**
       * List of path patterns to include. Uses micromatch glob syntax: * matches within a path segment, ** matches across path segments (e.g., /blog/** matches /blog/post and /blog/2024/post). Most accounts are limited to 10 rules; contact support to raise it.
       * @maxItems 10
       */
      include_items?: Array<string>;
      prefix?: string;
      /**
       * @default default
       */
      r2_jurisdiction?: string;
      /**
       * @default {"parse_type":"sitemap"}
       */
      web_crawler?: SourceParams.WebCrawler;
    }

    export namespace SourceParams {
      export interface WebCrawler {
        /**
         * Options for parse_type 'discover', where Browser Run discovers URLs by link following and sitemaps. Ignored for 'sitemap'.
         */
        discover_options?: WebCrawler.DiscoverOptions;
        parse_options?: WebCrawler.ParseOptions;
        /**
         * How URLs are discovered. 'sitemap' reads XML sitemaps; 'discover' follows links recursively and requires the source to be a Verified zone on this account.
         * @default sitemap
         */
        parse_type?: 'sitemap' | 'discover';
      }

      export namespace WebCrawler {
        export interface DiscoverOptions {
          /**
           * Maximum link-follow depth from the seed URL.
           * @default 5
           * @minimum 1
           * @maximum 100000
           */
          depth?: number;
          /**
           * Follow links that point outside the source domain. Must stay `false` — discover crawls are restricted to the zone you own.
           * @default false
           */
          include_external_links?: boolean;
          /**
           * Follow links to subdomains of the source host.
           * @default false
           */
          include_subdomains?: boolean;
          /**
           * Maximum number of pages to crawl (1-100000).
           * @default 100000
           * @minimum 1
           * @maximum 100000
           */
          limit?: number;
          /**
           * Maximum content age in seconds to accept (0–604800).
           * @default 86400
           * @minimum 0
           * @maximum 604800
           */
          max_age?: number;
          /**
           * Where the crawler looks for URLs: 'sitemaps' reads sitemap XML only, 'links' follows page links only, 'all' does both.
           * @default all
           */
          source?: 'all' | 'sitemaps' | 'links';
        }

        export interface ParseOptions {
          /**
           * List of path-to-selector mappings for extracting specific content from crawled pages. Each entry pairs a URL glob pattern with a CSS selector. The first matching path wins. Only the matched HTML fragment is stored and indexed. Omit the field to disable content selection — empty arrays are rejected.
           * @minItems 1
           * @maxItems 10
           */
          content_selector?: Array<ParseOptions.ContentSelector>;
          /**
           * Up to 5 custom HTTP headers sent with each crawl request. Names must be RFC-7230 token characters (no spaces, colons, or control characters); values must be HTAB + printable ASCII (no CR/LF).
           */
          include_headers?: Record<string, string>;
          /**
           * @default false
           */
          include_images?: boolean;
          /**
           * List of specific sitemap URLs to use for crawling. Only valid when parse_type is 'sitemap'.
           * @maxItems 10
           */
          specific_sitemaps?: Array<string>;
          /**
           * @default true
           */
          use_browser_rendering?: boolean;
        }

        export namespace ParseOptions {
          export interface ContentSelector {
            /**
             * Glob pattern to match against the page URL path. Uses standard glob syntax: * matches within a segment, ** crosses directories.
             * @minLength 1
             * @maxLength 200
             */
            path: string;
            /**
             * CSS selector to extract content from pages matching the path pattern. Must not contain disallowed characters (;, `, $, {, }, \). Must target a single element; if multiple elements match, the selector is ignored and the full page is used.
             * @minLength 1
             * @maxLength 200
             */
            selector: string;
          }
        }
      }
    }
  }
}

export interface AISearchInstanceUpdateParams {
  /**
   * Path param
   */
  account_id: string;
  /**
   * Body param
   */
  ai_gateway_id?: string | null;
  /**
   * Body param: A Workers AI model ID or an AI Gateway model ID compatible with the OpenAI Chat Completions API. An empty string uses the configured or default model.
   */
  ai_search_model?: string | null;
  /**
   * Body param
   * @default true
   */
  cache?: boolean;
  /**
   * Body param
   * @default close_enough
   */
  cache_threshold?: 'super_strict_match' | 'close_enough' | 'flexible_friend' | 'anything_goes';
  /**
   * Body param: Cache entry TTL in seconds. Allowed values: 600 (10min), 1800 (30min), 3600 (1h), 7200 (2h), 21600 (6h), 43200 (12h), 86400 (24h), 172800 (48h), 259200 (72h), 518400 (6d).
   * @default 172800
   */
  cache_ttl?: 600 | 1800 | 3600 | 7200 | 21600 | 43200 | 86400 | 172800 | 259200 | 518400;
  /**
   * Body param
   * @default true
   */
  chunk?: boolean;
  /**
   * Body param
   * @default 10
   * @minimum 0
   * @maximum 30
   */
  chunk_overlap?: number;
  /**
   * Body param
   * @minimum 64
   */
  chunk_size?: number;
  /**
   * Body param
   * @maxItems 5
   */
  custom_metadata?: Array<AISearchInstanceUpdateParams.CustomMetadata>;
  /**
   * Body param
   */
  embedding_model?: string | null;
  /**
   * Body param
   * @default rrf
   */
  fusion_method?: 'max' | 'rrf';
  /**
   * Body param: Controls which storage backends are used during indexing. Defaults to vector-only.
   * @default {"keyword":false,"vector":true}
   */
  index_method?: AISearchInstanceUpdateParams.IndexMethod;
  /**
   * Body param
   */
  indexing_options?: AISearchInstanceUpdateParams.IndexingOptions | null;
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
  metadata?: AISearchInstanceUpdateParams.Metadata;
  /**
   * Body param
   * @default false
   */
  paused?: boolean;
  /**
   * Body param
   */
  public_endpoint_params?: AISearchInstanceUpdateParams.PublicEndpointParams;
  /**
   * Body param
   * @default false
   */
  reranking?: boolean;
  /**
   * Body param
   */
  reranking_model?: string | null;
  /**
   * Body param
   */
  retrieval_options?: AISearchInstanceUpdateParams.RetrievalOptions | null;
  /**
   * Body param: A Workers AI model ID or an AI Gateway model ID compatible with the OpenAI Chat Completions API. An empty string uses the configured or default model.
   */
  rewrite_model?: string | null;
  /**
   * Body param
   * @default false
   */
  rewrite_query?: boolean;
  /**
   * Body param
   * @default 0.4
   * @minimum 0
   * @maximum 1
   */
  score_threshold?: number;
  /**
   * Body param
   */
  source?: string | null;
  /**
   * Body param
   */
  source_params?: AISearchInstanceUpdateParams.SourceParams | null;
  /**
   * Body param
   * @default false
   */
  summarization?: boolean;
  /**
   * Body param
   */
  summarization_model?: string | null;
  /**
   * Body param: Interval between automatic syncs, in seconds. Allowed values: 900 (15min), 1800 (30min), 3600 (1h), 7200 (2h), 14400 (4h), 21600 (6h), 43200 (12h), 86400 (24h).
   * @default 21600
   */
  sync_interval?: 900 | 1800 | 3600 | 7200 | 14400 | 21600 | 43200 | 86400;
  /**
   * Body param
   */
  system_prompt_ai_search?: string | null;
  /**
   * Body param
   */
  system_prompt_index_summarization?: string | null;
  /**
   * Body param
   */
  system_prompt_rewrite_query?: string | null;
  /**
   * Body param
   * @format uuid
   */
  token_id?: string;
}

export namespace AISearchInstanceUpdateParams {
  export interface CustomMetadata {
    data_type: 'text' | 'number' | 'boolean' | 'datetime';
    /**
     * @minLength 1
     * @maxLength 64
     */
    field_name: string;
  }

  export interface IndexMethod {
    /**
     * Enable keyword (BM25) storage backend.
     */
    keyword: boolean;
    /**
     * Enable vector (embedding) storage backend.
     */
    vector: boolean;
  }

  export interface IndexingOptions {
    /**
     * Tokenizer used for keyword search indexing. porter provides word-level tokenization with Porter stemming (good for natural language queries). trigram enables character-level substring matching (good for partial matches, code, identifiers). Changing this triggers a full re-index. Defaults to porter.
     */
    keyword_tokenizer?: 'porter' | 'trigram';
    /**
     * Accepted and propagated for future OCR processing. Currently inert. Changing this triggers a full re-index. Defaults to false.
     */
    use_ocr?: boolean;
  }

  export interface Metadata {
    created_from_aisearch_wizard?: boolean;
    worker_domain?: string;
  }

  export interface PublicEndpointParams {
    authorized_hosts?: Array<string>;
    chat_completions_endpoint?: PublicEndpointParams.ChatCompletionsEndpoint;
    /**
     * Custom domain hostnames that alias this public endpoint. GET and create responses return the current set; on update (PUT) this field is only echoed back when supplied in the request body, otherwise it is null (omit it to leave domains unchanged).
     * @maxItems 1
     */
    custom_domains?: Array<string> | null;
    /**
     * When false, the instance is reachable only via a registered custom domain and the default <public_endpoint_id>.search.ai.cloudflare.com host returns 404. Requires at least one custom domain. Defaults to true. public_endpoint_params is replaced wholesale on update, so resend default_domain_enabled on every update to keep the default host off — omitting it resets to true.
     */
    default_domain_enabled?: boolean;
    /**
     * @default false
     */
    enabled?: boolean;
    mcp?: PublicEndpointParams.Mcp;
    rate_limit?: PublicEndpointParams.RateLimit;
    search_endpoint?: PublicEndpointParams.SearchEndpoint;
  }

  export namespace PublicEndpointParams {
    export interface ChatCompletionsEndpoint {
      /**
       * Disable chat completions endpoint for this public endpoint
       * @default false
       */
      disabled?: boolean;
    }

    export interface Mcp {
      /**
       * @default Finds exactly what you're looking for
       */
      description?: string;
      /**
       * Disable MCP endpoint for this public endpoint
       * @default false
       */
      disabled?: boolean;
    }

    export interface RateLimit {
      /**
       * @minimum 60000
       * @maximum 3600000
       */
      period_ms?: number;
      /**
       * @minimum 1
       */
      requests?: number;
      technique?: 'fixed' | 'sliding';
    }

    export interface SearchEndpoint {
      /**
       * Disable search endpoint for this public endpoint
       * @default false
       */
      disabled?: boolean;
    }
  }

  export interface RetrievalOptions {
    /**
     * Metadata fields to boost search results by. Each entry specifies a metadata field and an optional direction. Direction defaults to 'asc' for numeric/datetime fields and 'exists' for text/boolean fields. Fields must match 'timestamp' or a defined custom_metadata field.
     * @maxItems 3
     */
    boost_by?: Array<RetrievalOptions.BoostBy>;
    /**
     * Controls which documents are candidates for BM25 scoring. 'and' restricts candidates to documents containing all query terms; 'or' includes any document containing at least one term, ranked by BM25 relevance. When omitted on an update, the existing stored value is preserved; when never set, search falls back to 'and'.
     */
    keyword_match_mode?: 'and' | 'or';
  }

  export namespace RetrievalOptions {
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

  export interface SourceParams {
    /**
     * List of path patterns to exclude. Uses micromatch glob syntax: * matches within a path segment, ** matches across path segments (e.g., /admin/** matches /admin/users and /admin/settings/advanced). Most accounts are limited to 10 rules; contact support to raise it.
     * @maxItems 10
     */
    exclude_items?: Array<string>;
    /**
     * List of path patterns to include. Uses micromatch glob syntax: * matches within a path segment, ** matches across path segments (e.g., /blog/** matches /blog/post and /blog/2024/post). Most accounts are limited to 10 rules; contact support to raise it.
     * @maxItems 10
     */
    include_items?: Array<string>;
    prefix?: string;
    /**
     * @default default
     */
    r2_jurisdiction?: string;
    /**
     * @default {"parse_type":"sitemap"}
     */
    web_crawler?: SourceParams.WebCrawler;
  }

  export namespace SourceParams {
    export interface WebCrawler {
      /**
       * Options for parse_type 'discover', where Browser Run discovers URLs by link following and sitemaps. Ignored for 'sitemap'.
       */
      discover_options?: WebCrawler.DiscoverOptions;
      parse_options?: WebCrawler.ParseOptions;
      /**
       * How URLs are discovered. 'sitemap' reads XML sitemaps; 'discover' follows links recursively and requires the source to be a Verified zone on this account.
       * @default sitemap
       */
      parse_type?: 'sitemap' | 'discover';
    }

    export namespace WebCrawler {
      export interface DiscoverOptions {
        /**
         * Maximum link-follow depth from the seed URL.
         * @default 5
         * @minimum 1
         * @maximum 100000
         */
        depth?: number;
        /**
         * Follow links that point outside the source domain. Must stay `false` — discover crawls are restricted to the zone you own.
         * @default false
         */
        include_external_links?: boolean;
        /**
         * Follow links to subdomains of the source host.
         * @default false
         */
        include_subdomains?: boolean;
        /**
         * Maximum number of pages to crawl (1-100000).
         * @default 100000
         * @minimum 1
         * @maximum 100000
         */
        limit?: number;
        /**
         * Maximum content age in seconds to accept (0–604800).
         * @default 86400
         * @minimum 0
         * @maximum 604800
         */
        max_age?: number;
        /**
         * Where the crawler looks for URLs: 'sitemaps' reads sitemap XML only, 'links' follows page links only, 'all' does both.
         * @default all
         */
        source?: 'all' | 'sitemaps' | 'links';
      }

      export interface ParseOptions {
        /**
         * List of path-to-selector mappings for extracting specific content from crawled pages. Each entry pairs a URL glob pattern with a CSS selector. The first matching path wins. Only the matched HTML fragment is stored and indexed. Omit the field to disable content selection — empty arrays are rejected.
         * @minItems 1
         * @maxItems 10
         */
        content_selector?: Array<ParseOptions.ContentSelector>;
        /**
         * Up to 5 custom HTTP headers sent with each crawl request. Names must be RFC-7230 token characters (no spaces, colons, or control characters); values must be HTAB + printable ASCII (no CR/LF).
         */
        include_headers?: Record<string, string>;
        /**
         * @default false
         */
        include_images?: boolean;
        /**
         * List of specific sitemap URLs to use for crawling. Only valid when parse_type is 'sitemap'.
         * @maxItems 10
         */
        specific_sitemaps?: Array<string>;
        /**
         * @default true
         */
        use_browser_rendering?: boolean;
      }

      export namespace ParseOptions {
        export interface ContentSelector {
          /**
           * Glob pattern to match against the page URL path. Uses standard glob syntax: * matches within a segment, ** crosses directories.
           * @minLength 1
           * @maxLength 200
           */
          path: string;
          /**
           * CSS selector to extract content from pages matching the path pattern. Must not contain disallowed characters (;, `, $, {, }, \). Must target a single element; if multiple elements match, the selector is ignored and the full page is used.
           * @minLength 1
           * @maxLength 200
           */
          selector: string;
        }
      }
    }
  }
}

export interface AISearchInstanceUpdateResponse {
  result: AISearchInstanceUpdateResponse.Result;
  success: boolean;
}

export namespace AISearchInstanceUpdateResponse {
  export interface Result {
    /**
     * @format date-time
     */
    created_at: string;
    /**
     * AI Search instance ID. Lowercase alphanumeric, hyphens, and underscores.
     * @minLength 1
     * @maxLength 64
     * @pattern ^[a-z0-9_]+(?:-[a-z0-9_]+)*$
     */
    id: string;
    /**
     * @format date-time
     */
    modified_at: string;
    ai_gateway_id?: string | null;
    /**
     * A Workers AI model ID or an AI Gateway model ID compatible with the OpenAI Chat Completions API. An empty string uses the configured or default model.
     */
    ai_search_model?: string | null;
    /**
     * @default true
     */
    cache?: boolean;
    /**
     * @default close_enough
     */
    cache_threshold?: 'super_strict_match' | 'close_enough' | 'flexible_friend' | 'anything_goes';
    /**
     * Cache entry TTL in seconds. Allowed values: 600 (10min), 1800 (30min), 3600 (1h), 7200 (2h), 21600 (6h), 43200 (12h), 86400 (24h), 172800 (48h), 259200 (72h), 518400 (6d).
     * @default 172800
     */
    cache_ttl?: 600 | 1800 | 3600 | 7200 | 21600 | 43200 | 86400 | 172800 | 259200 | 518400;
    /**
     * @default 10
     * @minimum 0
     * @maximum 30
     */
    chunk_overlap?: number;
    /**
     * @minimum 64
     */
    chunk_size?: number;
    created_by?: string | null;
    /**
     * @maxItems 5
     */
    custom_metadata?: Array<Result.CustomMetadata>;
    embedding_model?: string | null;
    /**
     * @default true
     */
    enable?: boolean;
    /**
     * @default 3
     */
    engine_version?: number;
    /**
     * @default rrf
     */
    fusion_method?: 'max' | 'rrf';
    /**
     * Deprecated — use index_method instead.
     * @default false
     * @deprecated
     */
    hybrid_search_enabled?: boolean;
    /**
     * Controls which storage backends are used during indexing. Defaults to vector-only.
     * @default {"keyword":false,"vector":true}
     */
    index_method?: Result.IndexMethod;
    indexing_options?: Result.IndexingOptions | null;
    /**
     * @format date-time
     */
    last_activity?: string | null;
    /**
     * @default 10
     * @minimum 1
     * @maximum 50
     */
    max_num_results?: number;
    metadata?: Result.Metadata;
    modified_by?: string | null;
    /**
     * @pattern ^[a-z0-9]([a-z0-9-]{0,26}[a-z0-9])?$
     */
    namespace?: string | null;
    /**
     * @default false
     */
    paused?: boolean;
    public_endpoint_id?: string | null;
    public_endpoint_params?: Result.PublicEndpointParams;
    /**
     * @default false
     */
    reranking?: boolean;
    reranking_model?: string | null;
    retrieval_options?: Result.RetrievalOptions | null;
    /**
     * A Workers AI model ID or an AI Gateway model ID compatible with the OpenAI Chat Completions API. An empty string uses the configured or default model.
     */
    rewrite_model?: string | null;
    /**
     * @default false
     */
    rewrite_query?: boolean;
    /**
     * @default 0.4
     * @minimum 0
     * @maximum 1
     */
    score_threshold?: number;
    source?: string | null;
    source_params?: Result.SourceParams | null;
    /**
     * @default waiting
     */
    status?: string;
    /**
     * Interval between automatic syncs, in seconds. Allowed values: 900 (15min), 1800 (30min), 3600 (1h), 7200 (2h), 14400 (4h), 21600 (6h), 43200 (12h), 86400 (24h).
     * @default 21600
     */
    sync_interval?: 900 | 1800 | 3600 | 7200 | 14400 | 21600 | 43200 | 86400;
    /**
     * @format uuid
     */
    token_id?: string;
    type?: 'r2' | 'web-crawler' | null;
  }

  export namespace Result {
    export interface CustomMetadata {
      data_type: 'text' | 'number' | 'boolean' | 'datetime';
      /**
       * @minLength 1
       * @maxLength 64
       */
      field_name: string;
    }

    export interface IndexMethod {
      /**
       * Enable keyword (BM25) storage backend.
       */
      keyword: boolean;
      /**
       * Enable vector (embedding) storage backend.
       */
      vector: boolean;
    }

    export interface IndexingOptions {
      /**
       * Tokenizer used for keyword search indexing. porter provides word-level tokenization with Porter stemming (good for natural language queries). trigram enables character-level substring matching (good for partial matches, code, identifiers). Changing this triggers a full re-index. Defaults to porter.
       */
      keyword_tokenizer?: 'porter' | 'trigram';
      /**
       * Accepted and propagated for future OCR processing. Currently inert. Changing this triggers a full re-index. Defaults to false.
       */
      use_ocr?: boolean;
    }

    export interface Metadata {
      created_from_aisearch_wizard?: boolean;
      worker_domain?: string;
    }

    export interface PublicEndpointParams {
      authorized_hosts?: Array<string>;
      chat_completions_endpoint?: PublicEndpointParams.ChatCompletionsEndpoint;
      /**
       * Custom domain hostnames that alias this public endpoint. GET and create responses return the current set; on update (PUT) this field is only echoed back when supplied in the request body, otherwise it is null (omit it to leave domains unchanged).
       * @maxItems 1
       */
      custom_domains?: Array<string> | null;
      /**
       * When false, the instance is reachable only via a registered custom domain and the default <public_endpoint_id>.search.ai.cloudflare.com host returns 404. Requires at least one custom domain. Defaults to true. public_endpoint_params is replaced wholesale on update, so resend default_domain_enabled on every update to keep the default host off — omitting it resets to true.
       */
      default_domain_enabled?: boolean;
      /**
       * @default false
       */
      enabled?: boolean;
      mcp?: PublicEndpointParams.Mcp;
      rate_limit?: PublicEndpointParams.RateLimit;
      search_endpoint?: PublicEndpointParams.SearchEndpoint;
    }

    export namespace PublicEndpointParams {
      export interface ChatCompletionsEndpoint {
        /**
         * Disable chat completions endpoint for this public endpoint
         * @default false
         */
        disabled?: boolean;
      }

      export interface Mcp {
        /**
         * @default Finds exactly what you're looking for
         */
        description?: string;
        /**
         * Disable MCP endpoint for this public endpoint
         * @default false
         */
        disabled?: boolean;
      }

      export interface RateLimit {
        /**
         * @minimum 60000
         * @maximum 3600000
         */
        period_ms?: number;
        /**
         * @minimum 1
         */
        requests?: number;
        technique?: 'fixed' | 'sliding';
      }

      export interface SearchEndpoint {
        /**
         * Disable search endpoint for this public endpoint
         * @default false
         */
        disabled?: boolean;
      }
    }

    export interface RetrievalOptions {
      /**
       * Metadata fields to boost search results by. Each entry specifies a metadata field and an optional direction. Direction defaults to 'asc' for numeric/datetime fields and 'exists' for text/boolean fields. Fields must match 'timestamp' or a defined custom_metadata field.
       * @maxItems 3
       */
      boost_by?: Array<RetrievalOptions.BoostBy>;
      /**
       * Controls which documents are candidates for BM25 scoring. 'and' restricts candidates to documents containing all query terms; 'or' includes any document containing at least one term, ranked by BM25 relevance. When omitted on an update, the existing stored value is preserved; when never set, search falls back to 'and'.
       */
      keyword_match_mode?: 'and' | 'or';
    }

    export namespace RetrievalOptions {
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

    export interface SourceParams {
      /**
       * List of path patterns to exclude. Uses micromatch glob syntax: * matches within a path segment, ** matches across path segments (e.g., /admin/** matches /admin/users and /admin/settings/advanced). Most accounts are limited to 10 rules; contact support to raise it.
       * @maxItems 10
       */
      exclude_items?: Array<string>;
      /**
       * List of path patterns to include. Uses micromatch glob syntax: * matches within a path segment, ** matches across path segments (e.g., /blog/** matches /blog/post and /blog/2024/post). Most accounts are limited to 10 rules; contact support to raise it.
       * @maxItems 10
       */
      include_items?: Array<string>;
      prefix?: string;
      /**
       * @default default
       */
      r2_jurisdiction?: string;
      /**
       * @default {"parse_type":"sitemap"}
       */
      web_crawler?: SourceParams.WebCrawler;
    }

    export namespace SourceParams {
      export interface WebCrawler {
        /**
         * Options for parse_type 'discover', where Browser Run discovers URLs by link following and sitemaps. Ignored for 'sitemap'.
         */
        discover_options?: WebCrawler.DiscoverOptions;
        parse_options?: WebCrawler.ParseOptions;
        /**
         * How URLs are discovered. 'sitemap' reads XML sitemaps; 'discover' follows links recursively and requires the source to be a Verified zone on this account.
         * @default sitemap
         */
        parse_type?: 'sitemap' | 'discover';
      }

      export namespace WebCrawler {
        export interface DiscoverOptions {
          /**
           * Maximum link-follow depth from the seed URL.
           * @default 5
           * @minimum 1
           * @maximum 100000
           */
          depth?: number;
          /**
           * Follow links that point outside the source domain. Must stay `false` — discover crawls are restricted to the zone you own.
           * @default false
           */
          include_external_links?: boolean;
          /**
           * Follow links to subdomains of the source host.
           * @default false
           */
          include_subdomains?: boolean;
          /**
           * Maximum number of pages to crawl (1-100000).
           * @default 100000
           * @minimum 1
           * @maximum 100000
           */
          limit?: number;
          /**
           * Maximum content age in seconds to accept (0–604800).
           * @default 86400
           * @minimum 0
           * @maximum 604800
           */
          max_age?: number;
          /**
           * Where the crawler looks for URLs: 'sitemaps' reads sitemap XML only, 'links' follows page links only, 'all' does both.
           * @default all
           */
          source?: 'all' | 'sitemaps' | 'links';
        }

        export interface ParseOptions {
          /**
           * List of path-to-selector mappings for extracting specific content from crawled pages. Each entry pairs a URL glob pattern with a CSS selector. The first matching path wins. Only the matched HTML fragment is stored and indexed. Omit the field to disable content selection — empty arrays are rejected.
           * @minItems 1
           * @maxItems 10
           */
          content_selector?: Array<ParseOptions.ContentSelector>;
          /**
           * Up to 5 custom HTTP headers sent with each crawl request. Names must be RFC-7230 token characters (no spaces, colons, or control characters); values must be HTAB + printable ASCII (no CR/LF).
           */
          include_headers?: Record<string, string>;
          /**
           * @default false
           */
          include_images?: boolean;
          /**
           * List of specific sitemap URLs to use for crawling. Only valid when parse_type is 'sitemap'.
           * @maxItems 10
           */
          specific_sitemaps?: Array<string>;
          /**
           * @default true
           */
          use_browser_rendering?: boolean;
        }

        export namespace ParseOptions {
          export interface ContentSelector {
            /**
             * Glob pattern to match against the page URL path. Uses standard glob syntax: * matches within a segment, ** crosses directories.
             * @minLength 1
             * @maxLength 200
             */
            path: string;
            /**
             * CSS selector to extract content from pages matching the path pattern. Must not contain disallowed characters (;, `, $, {, }, \). Must target a single element; if multiple elements match, the selector is ignored and the full page is used.
             * @minLength 1
             * @maxLength 200
             */
            selector: string;
          }
        }
      }
    }
  }
}

export interface AISearchInstanceChatCompletionParams {
  /**
   * Path param
   */
  account_id: string;
  /**
   * Body param
   */
  ai_search_options?: AISearchInstanceChatCompletionParams.AISearchOptions;
  /**
   * Body param
   * @minItems 1
   */
  messages: Array<AISearchInstanceChatCompletionParams.Message>;
  /**
   * Body param: A Workers AI model ID or an AI Gateway model ID compatible with the OpenAI Chat Completions API. An empty string uses the configured or default model.
   */
  model?: string;
  /**
   * Body param
   */
  stream?: boolean;
}

export namespace AISearchInstanceChatCompletionParams {
  export interface AISearchOptions {
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

export interface AISearchInstanceChatCompletionResponse {
  choices: Array<AISearchInstanceChatCompletionResponse.Choice>;
  chunks: Array<AISearchInstanceChatCompletionResponse.Chunk>;
  id?: string;
  model?: string;
  object?: string;
  [k: string]: unknown;
}

export namespace AISearchInstanceChatCompletionResponse {
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
}

export interface AISearchInstanceSearchParams {
  /**
   * Path param
   */
  account_id: string;
  /**
   * Body param
   */
  ai_search_options?: AISearchInstanceSearchParams.AISearchOptions;
  /**
   * Body param: OpenAI-compatible message array. For multimodal queries, set the last user message's `content` to an array of typed parts: `[{type:'text', text:'…'}, {type:'image_url', image_url:{url:'…'}}]`. Image inputs require the RAG's embedding_model to declare 'image' in supported_modalities.
   * @minItems 1
   */
  messages?: Array<AISearchInstanceSearchParams.Message>;
  /**
   * Body param: A simple text query string. Alternative to 'messages' — provide either this or 'messages', not both.
   * @minLength 1
   */
  query?: string;
}

export namespace AISearchInstanceSearchParams {
  export interface AISearchOptions {
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

export interface AISearchInstanceSearchResponse {
  result: AISearchInstanceSearchResponse.Result;
  success: boolean;
}

export namespace AISearchInstanceSearchResponse {
  export interface Result {
    chunks: Array<Result.Chunk>;
    query_kind: 'text' | 'image' | 'multimodal';
    search_query?: string;
  }

  export namespace Result {
    export interface Chunk {
      id: string;
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
  }
}

export interface AISearchInstanceStatsParams {
  account_id: string;
}

export interface AISearchInstanceStatsResponse {
  result: AISearchInstanceStatsResponse.Result;
  success: boolean;
}

export namespace AISearchInstanceStatsResponse {
  export interface Result {
    completed?: number;
    /**
     * True when status counts are unavailable (e.g. legacy stats query exceeded D1 statement-size limit). Counts are omitted in this case.
     */
    degraded?: boolean;
    /**
     * Engine-specific metadata. Present only for managed (v3) instances.
     */
    engine?: Result.Engine;
    error?: number;
    file_embed_errors?: Record<string, unknown>;
    index_source_errors?: Record<string, unknown>;
    /**
     * @format date-time
     */
    last_activity?: string;
    outdated?: number;
    queued?: number;
    running?: number;
    skipped?: number;
  }

  export namespace Result {
    export interface Engine {
      /**
       * R2 bucket storage usage in bytes.
       */
      r2?: Engine.R2;
      /**
       * Vectorize index metadata (dimensions, vector count).
       */
      vectorize?: Engine.Vectorize;
    }

    export namespace Engine {
      export interface R2 {
        metadataSizeBytes: number;
        objectCount: number;
        payloadSizeBytes: number;
      }

      export interface Vectorize {
        dimensions: number;
        vectorsCount: number;
      }
    }
  }
}

export interface AISearchInstanceNamespaceListParams {
  /**
   * Path param
   */
  account_id: string;
  /**
   * Query param: Page number (1-indexed).
   * @default 1
   * @minimum 1
   */
  page?: number;
  /**
   * Query param: Number of results per page.
   * @default 20
   * @minimum 1
   * @maximum 100
   */
  per_page?: number;
  /**
   * Query param: Filter instances whose id contains this string (case-insensitive).
   * @maxLength 64
   */
  search?: string;
  /**
   * Query param: Filter by namespace.
   * @pattern ^[a-z0-9]([a-z0-9-]{0,26}[a-z0-9])?$
   */
  namespace?: string;
  /**
   * Query param: Field to order results by.
   * @default created_at
   */
  order_by?: 'created_at';
  /**
   * Query param: Order direction.
   * @default desc
   */
  order_by_direction?: 'asc' | 'desc';
}

export interface AISearchInstanceNamespaceListResponse {
  result: Array<AISearchInstanceNamespaceListResponse.Result>;
  result_info: AISearchInstanceNamespaceListResponse.ResultInfo;
  success: true;
}

export namespace AISearchInstanceNamespaceListResponse {
  export interface Result {
    ai_gateway_id: string | null;
    ai_search_model: string | null;
    cache: boolean;
    cache_threshold: 'super_strict_match' | 'close_enough' | 'flexible_friend' | 'anything_goes' | null;
    cache_ttl: 600 | 1800 | 3600 | 7200 | 21600 | 43200 | 86400 | 172800 | 259200 | 518400;
    chunk: boolean;
    chunk_overlap: number | null;
    chunk_size: number | null;
    /**
     * @format date-time
     */
    created_at: string;
    created_by: string | null;
    custom_metadata: Array<Result.CustomMetadata> | null;
    embedding_model: string | null;
    enable: boolean;
    engine_version: number;
    fusion_method: 'max' | 'rrf';
    hybrid_search_enabled: boolean;
    id: string;
    index_method: Result.IndexMethod;
    indexing_options: Result.IndexingOptions | null;
    /**
     * @format date-time
     */
    last_activity: string | null;
    max_num_results: number | null;
    metadata: Result.Metadata | null;
    /**
     * @format date-time
     */
    modified_at: string;
    modified_by: string | null;
    /**
     * @pattern ^[a-z0-9]([a-z0-9-]{0,26}[a-z0-9])?$
     */
    namespace: string;
    paused: boolean;
    public_endpoint_id: string | null;
    public_endpoint_params: Result.PublicEndpointParams | null;
    reranking: boolean;
    reranking_model: string | null;
    retrieval_options: Result.RetrievalOptions | null;
    rewrite_model: string | null;
    rewrite_query: boolean;
    score_threshold: number | null;
    source: string | null;
    source_params: Result.SourceParams | null;
    status: string;
    summarization: boolean;
    summarization_model: string | null;
    sync_interval: 900 | 1800 | 3600 | 7200 | 14400 | 21600 | 43200 | 86400;
    system_prompt_ai_search: string | null;
    system_prompt_index_summarization: string | null;
    system_prompt_rewrite_query: string | null;
    token_id: string | null;
    type: 'r2' | 'web-crawler' | null;
  }

  export namespace Result {
    export interface CustomMetadata {
      data_type: 'text' | 'number' | 'boolean' | 'datetime';
      field_name: string;
    }

    export interface IndexMethod {
      keyword: boolean;
      vector: boolean;
      [k: string]: unknown;
    }

    export interface IndexingOptions {
      keyword_tokenizer?: 'porter' | 'trigram';
      use_ocr?: boolean;
      [k: string]: unknown;
    }

    export interface Metadata {
      created_from_aisearch_wizard?: boolean;
      worker_domain?: string;
      [k: string]: unknown;
    }

    export interface PublicEndpointParams {
      authorized_hosts?: Array<string>;
      chat_completions_endpoint?: PublicEndpointParams.ChatCompletionsEndpoint;
      /**
       * @maxItems 1
       */
      custom_domains?: Array<string> | null;
      default_domain_enabled?: boolean;
      enabled?: boolean;
      mcp?: PublicEndpointParams.Mcp;
      rate_limit?: PublicEndpointParams.RateLimit;
      search_endpoint?: PublicEndpointParams.SearchEndpoint;
      [k: string]: unknown;
    }

    export namespace PublicEndpointParams {
      export interface ChatCompletionsEndpoint {
        disabled?: boolean;
        [k: string]: unknown;
      }

      export interface Mcp {
        description?: string;
        disabled?: boolean;
        [k: string]: unknown;
      }

      export interface RateLimit {
        /**
         * @minimum 60000
         * @maximum 3600000
         */
        period_ms?: number;
        /**
         * @minimum 1
         */
        requests?: number;
        technique?: 'fixed' | 'sliding';
        [k: string]: unknown;
      }

      export interface SearchEndpoint {
        disabled?: boolean;
        [k: string]: unknown;
      }
    }

    export interface RetrievalOptions {
      /**
       * @maxItems 3
       */
      boost_by?: Array<RetrievalOptions.BoostBy>;
      keyword_match_mode?: 'and' | 'or';
      [k: string]: unknown;
    }

    export namespace RetrievalOptions {
      export interface BoostBy {
        /**
         * @minLength 1
         * @maxLength 64
         */
        field: string;
        dataType?: 'number' | 'datetime' | 'text' | 'boolean';
        direction?: 'asc' | 'desc' | 'exists' | 'not_exists';
        [k: string]: unknown;
      }
    }

    export interface SourceParams {
      exclude_items?: Array<string>;
      include_items?: Array<string>;
      prefix?: string;
      r2_jurisdiction?: string;
      web_crawler?: SourceParams.WebCrawler;
      [k: string]: unknown;
    }

    export namespace SourceParams {
      export interface WebCrawler {
        discover_options?: WebCrawler.DiscoverOptions;
        parse_options?: WebCrawler.ParseOptions;
        parse_type?: 'sitemap' | 'discover';
        [k: string]: unknown;
      }

      export namespace WebCrawler {
        export interface DiscoverOptions {
          /**
           * @minimum 1
           * @maximum 100000
           */
          depth?: number;
          include_external_links?: boolean;
          include_subdomains?: boolean;
          /**
           * Maximum number of pages to crawl. New values are capped at 100000; instances configured before that cap may report a higher stored value, which the crawler clamps at run time.
           * @minimum 1
           * @maximum 100000
           */
          limit?: number;
          /**
           * @minimum 0
           * @maximum 604800
           */
          max_age?: number;
          source?: 'all' | 'sitemaps' | 'links';
          [k: string]: unknown;
        }

        export interface ParseOptions {
          /**
           * @maxItems 10
           */
          content_selector?: Array<ParseOptions.ContentSelector>;
          include_headers?: Record<string, string>;
          include_images?: boolean;
          /**
           * @maxItems 10
           */
          specific_sitemaps?: Array<string>;
          use_browser_rendering?: boolean;
          [k: string]: unknown;
        }

        export namespace ParseOptions {
          export interface ContentSelector {
            /**
             * @minLength 1
             * @maxLength 200
             */
            path: string;
            /**
             * @minLength 1
             * @maxLength 200
             */
            selector: string;
            [k: string]: unknown;
          }
        }
      }
    }
  }

  export interface ResultInfo {
    count: number;
    page: number;
    per_page: number;
    total_count: number;
  }
}

export interface AISearchInstanceNamespaceCreateParams {
  /**
   * Path param
   */
  account_id: string;
  /**
   * Body param
   */
  ai_gateway_id?: string | null;
  /**
   * Body param: A Workers AI model ID or an AI Gateway model ID compatible with the OpenAI Chat Completions API. An empty string uses the configured or default model.
   */
  ai_search_model?: string | null;
  /**
   * Body param
   * @default true
   */
  cache?: boolean;
  /**
   * Body param
   * @default close_enough
   */
  cache_threshold?: 'super_strict_match' | 'close_enough' | 'flexible_friend' | 'anything_goes';
  /**
   * Body param: Cache entry TTL in seconds. Allowed values: 600 (10min), 1800 (30min), 3600 (1h), 7200 (2h), 21600 (6h), 43200 (12h), 86400 (24h), 172800 (48h), 259200 (72h), 518400 (6d).
   * @default 172800
   */
  cache_ttl?: 600 | 1800 | 3600 | 7200 | 21600 | 43200 | 86400 | 172800 | 259200 | 518400;
  /**
   * Body param
   * @default true
   */
  chunk?: boolean;
  /**
   * Body param
   * @default 10
   * @minimum 0
   * @maximum 30
   */
  chunk_overlap?: number;
  /**
   * Body param
   * @minimum 64
   */
  chunk_size?: number;
  /**
   * Body param
   * @maxItems 5
   */
  custom_metadata?: Array<AISearchInstanceNamespaceCreateParams.CustomMetadata>;
  /**
   * Body param
   */
  embedding_model?: string | null;
  /**
   * Body param
   * @default rrf
   */
  fusion_method?: 'max' | 'rrf';
  /**
   * Body param: Deprecated — use index_method instead.
   * @default false
   */
  hybrid_search_enabled?: boolean;
  /**
   * Body param: AI Search instance ID. Lowercase alphanumeric, hyphens, and underscores.
   * @minLength 1
   * @maxLength 64
   * @pattern ^[a-z0-9_]+(?:-[a-z0-9_]+)*$
   */
  id: string;
  /**
   * Body param: Controls which storage backends are used during indexing. Defaults to vector-only.
   * @default {"keyword":false,"vector":true}
   */
  index_method?: AISearchInstanceNamespaceCreateParams.IndexMethod;
  /**
   * Body param
   */
  indexing_options?: AISearchInstanceNamespaceCreateParams.IndexingOptions | null;
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
  metadata?: AISearchInstanceNamespaceCreateParams.Metadata;
  /**
   * Body param
   */
  public_endpoint_params?: AISearchInstanceNamespaceCreateParams.PublicEndpointParams;
  /**
   * Body param
   * @default false
   */
  reranking?: boolean;
  /**
   * Body param
   */
  reranking_model?: string | null;
  /**
   * Body param
   */
  retrieval_options?: AISearchInstanceNamespaceCreateParams.RetrievalOptions | null;
  /**
   * Body param: A Workers AI model ID or an AI Gateway model ID compatible with the OpenAI Chat Completions API. An empty string uses the configured or default model.
   */
  rewrite_model?: string | null;
  /**
   * Body param
   * @default false
   */
  rewrite_query?: boolean;
  /**
   * Body param
   * @default 0.4
   * @minimum 0
   * @maximum 1
   */
  score_threshold?: number;
  /**
   * Body param
   */
  source?: string | null;
  /**
   * Body param
   */
  source_params?: AISearchInstanceNamespaceCreateParams.SourceParams | null;
  /**
   * Body param: Interval between automatic syncs, in seconds. Allowed values: 900 (15min), 1800 (30min), 3600 (1h), 7200 (2h), 14400 (4h), 21600 (6h), 43200 (12h), 86400 (24h).
   * @default 21600
   */
  sync_interval?: 900 | 1800 | 3600 | 7200 | 14400 | 21600 | 43200 | 86400;
  /**
   * Body param
   * @format uuid
   */
  token_id?: string;
  /**
   * Body param
   */
  type?: 'r2' | 'web-crawler' | null;
}

export namespace AISearchInstanceNamespaceCreateParams {
  export interface CustomMetadata {
    data_type: 'text' | 'number' | 'boolean' | 'datetime';
    /**
     * @minLength 1
     * @maxLength 64
     */
    field_name: string;
  }

  export interface IndexMethod {
    /**
     * Enable keyword (BM25) storage backend.
     */
    keyword: boolean;
    /**
     * Enable vector (embedding) storage backend.
     */
    vector: boolean;
  }

  export interface IndexingOptions {
    /**
     * Tokenizer used for keyword search indexing. porter provides word-level tokenization with Porter stemming (good for natural language queries). trigram enables character-level substring matching (good for partial matches, code, identifiers). Changing this triggers a full re-index. Defaults to porter.
     */
    keyword_tokenizer?: 'porter' | 'trigram';
    /**
     * Accepted and propagated for future OCR processing. Currently inert. Changing this triggers a full re-index. Defaults to false.
     */
    use_ocr?: boolean;
  }

  export interface Metadata {
    created_from_aisearch_wizard?: boolean;
    worker_domain?: string;
  }

  export interface PublicEndpointParams {
    authorized_hosts?: Array<string>;
    chat_completions_endpoint?: PublicEndpointParams.ChatCompletionsEndpoint;
    /**
     * Custom domain hostnames that alias this public endpoint. GET and create responses return the current set; on update (PUT) this field is only echoed back when supplied in the request body, otherwise it is null (omit it to leave domains unchanged).
     * @maxItems 1
     */
    custom_domains?: Array<string> | null;
    /**
     * When false, the instance is reachable only via a registered custom domain and the default <public_endpoint_id>.search.ai.cloudflare.com host returns 404. Requires at least one custom domain. Defaults to true. public_endpoint_params is replaced wholesale on update, so resend default_domain_enabled on every update to keep the default host off — omitting it resets to true.
     */
    default_domain_enabled?: boolean;
    /**
     * @default false
     */
    enabled?: boolean;
    mcp?: PublicEndpointParams.Mcp;
    rate_limit?: PublicEndpointParams.RateLimit;
    search_endpoint?: PublicEndpointParams.SearchEndpoint;
  }

  export namespace PublicEndpointParams {
    export interface ChatCompletionsEndpoint {
      /**
       * Disable chat completions endpoint for this public endpoint
       * @default false
       */
      disabled?: boolean;
    }

    export interface Mcp {
      /**
       * @default Finds exactly what you're looking for
       */
      description?: string;
      /**
       * Disable MCP endpoint for this public endpoint
       * @default false
       */
      disabled?: boolean;
    }

    export interface RateLimit {
      /**
       * @minimum 60000
       * @maximum 3600000
       */
      period_ms?: number;
      /**
       * @minimum 1
       */
      requests?: number;
      technique?: 'fixed' | 'sliding';
    }

    export interface SearchEndpoint {
      /**
       * Disable search endpoint for this public endpoint
       * @default false
       */
      disabled?: boolean;
    }
  }

  export interface RetrievalOptions {
    /**
     * Metadata fields to boost search results by. Each entry specifies a metadata field and an optional direction. Direction defaults to 'asc' for numeric/datetime fields and 'exists' for text/boolean fields. Fields must match 'timestamp' or a defined custom_metadata field.
     * @maxItems 3
     */
    boost_by?: Array<RetrievalOptions.BoostBy>;
    /**
     * Controls which documents are candidates for BM25 scoring. 'and' restricts candidates to documents containing all query terms; 'or' includes any document containing at least one term, ranked by BM25 relevance. When omitted on an update, the existing stored value is preserved; when never set, search falls back to 'and'.
     */
    keyword_match_mode?: 'and' | 'or';
  }

  export namespace RetrievalOptions {
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

  export interface SourceParams {
    /**
     * List of path patterns to exclude. Uses micromatch glob syntax: * matches within a path segment, ** matches across path segments (e.g., /admin/** matches /admin/users and /admin/settings/advanced). Most accounts are limited to 10 rules; contact support to raise it.
     * @maxItems 10
     */
    exclude_items?: Array<string>;
    /**
     * List of path patterns to include. Uses micromatch glob syntax: * matches within a path segment, ** matches across path segments (e.g., /blog/** matches /blog/post and /blog/2024/post). Most accounts are limited to 10 rules; contact support to raise it.
     * @maxItems 10
     */
    include_items?: Array<string>;
    prefix?: string;
    /**
     * @default default
     */
    r2_jurisdiction?: string;
    /**
     * @default {"parse_type":"sitemap"}
     */
    web_crawler?: SourceParams.WebCrawler;
  }

  export namespace SourceParams {
    export interface WebCrawler {
      /**
       * Options for parse_type 'discover', where Browser Run discovers URLs by link following and sitemaps. Ignored for 'sitemap'.
       */
      discover_options?: WebCrawler.DiscoverOptions;
      parse_options?: WebCrawler.ParseOptions;
      /**
       * How URLs are discovered. 'sitemap' reads XML sitemaps; 'discover' follows links recursively and requires the source to be a Verified zone on this account.
       * @default sitemap
       */
      parse_type?: 'sitemap' | 'discover';
    }

    export namespace WebCrawler {
      export interface DiscoverOptions {
        /**
         * Maximum link-follow depth from the seed URL.
         * @default 5
         * @minimum 1
         * @maximum 100000
         */
        depth?: number;
        /**
         * Follow links that point outside the source domain. Must stay `false` — discover crawls are restricted to the zone you own.
         * @default false
         */
        include_external_links?: boolean;
        /**
         * Follow links to subdomains of the source host.
         * @default false
         */
        include_subdomains?: boolean;
        /**
         * Maximum number of pages to crawl (1-100000).
         * @default 100000
         * @minimum 1
         * @maximum 100000
         */
        limit?: number;
        /**
         * Maximum content age in seconds to accept (0–604800).
         * @default 86400
         * @minimum 0
         * @maximum 604800
         */
        max_age?: number;
        /**
         * Where the crawler looks for URLs: 'sitemaps' reads sitemap XML only, 'links' follows page links only, 'all' does both.
         * @default all
         */
        source?: 'all' | 'sitemaps' | 'links';
      }

      export interface ParseOptions {
        /**
         * List of path-to-selector mappings for extracting specific content from crawled pages. Each entry pairs a URL glob pattern with a CSS selector. The first matching path wins. Only the matched HTML fragment is stored and indexed. Omit the field to disable content selection — empty arrays are rejected.
         * @minItems 1
         * @maxItems 10
         */
        content_selector?: Array<ParseOptions.ContentSelector>;
        /**
         * Up to 5 custom HTTP headers sent with each crawl request. Names must be RFC-7230 token characters (no spaces, colons, or control characters); values must be HTAB + printable ASCII (no CR/LF).
         */
        include_headers?: Record<string, string>;
        /**
         * @default false
         */
        include_images?: boolean;
        /**
         * List of specific sitemap URLs to use for crawling. Only valid when parse_type is 'sitemap'.
         * @maxItems 10
         */
        specific_sitemaps?: Array<string>;
        /**
         * @default true
         */
        use_browser_rendering?: boolean;
      }

      export namespace ParseOptions {
        export interface ContentSelector {
          /**
           * Glob pattern to match against the page URL path. Uses standard glob syntax: * matches within a segment, ** crosses directories.
           * @minLength 1
           * @maxLength 200
           */
          path: string;
          /**
           * CSS selector to extract content from pages matching the path pattern. Must not contain disallowed characters (;, `, $, {, }, \). Must target a single element; if multiple elements match, the selector is ignored and the full page is used.
           * @minLength 1
           * @maxLength 200
           */
          selector: string;
        }
      }
    }
  }
}

export interface AISearchInstanceNamespaceCreateResponse {
  result: AISearchInstanceNamespaceCreateResponse.Result;
  success: boolean;
}

export namespace AISearchInstanceNamespaceCreateResponse {
  export interface Result {
    /**
     * @format date-time
     */
    created_at: string;
    /**
     * AI Search instance ID. Lowercase alphanumeric, hyphens, and underscores.
     * @minLength 1
     * @maxLength 64
     * @pattern ^[a-z0-9_]+(?:-[a-z0-9_]+)*$
     */
    id: string;
    /**
     * @format date-time
     */
    modified_at: string;
    ai_gateway_id?: string | null;
    /**
     * A Workers AI model ID or an AI Gateway model ID compatible with the OpenAI Chat Completions API. An empty string uses the configured or default model.
     */
    ai_search_model?: string | null;
    /**
     * @default true
     */
    cache?: boolean;
    /**
     * @default close_enough
     */
    cache_threshold?: 'super_strict_match' | 'close_enough' | 'flexible_friend' | 'anything_goes';
    /**
     * Cache entry TTL in seconds. Allowed values: 600 (10min), 1800 (30min), 3600 (1h), 7200 (2h), 21600 (6h), 43200 (12h), 86400 (24h), 172800 (48h), 259200 (72h), 518400 (6d).
     * @default 172800
     */
    cache_ttl?: 600 | 1800 | 3600 | 7200 | 21600 | 43200 | 86400 | 172800 | 259200 | 518400;
    /**
     * @default 10
     * @minimum 0
     * @maximum 30
     */
    chunk_overlap?: number;
    /**
     * @minimum 64
     */
    chunk_size?: number;
    created_by?: string | null;
    /**
     * @maxItems 5
     */
    custom_metadata?: Array<Result.CustomMetadata>;
    embedding_model?: string | null;
    /**
     * @default true
     */
    enable?: boolean;
    /**
     * @default 3
     */
    engine_version?: number;
    /**
     * @default rrf
     */
    fusion_method?: 'max' | 'rrf';
    /**
     * Deprecated — use index_method instead.
     * @default false
     * @deprecated
     */
    hybrid_search_enabled?: boolean;
    /**
     * Controls which storage backends are used during indexing. Defaults to vector-only.
     * @default {"keyword":false,"vector":true}
     */
    index_method?: Result.IndexMethod;
    indexing_options?: Result.IndexingOptions | null;
    /**
     * @format date-time
     */
    last_activity?: string | null;
    /**
     * @default 10
     * @minimum 1
     * @maximum 50
     */
    max_num_results?: number;
    metadata?: Result.Metadata;
    modified_by?: string | null;
    /**
     * @pattern ^[a-z0-9]([a-z0-9-]{0,26}[a-z0-9])?$
     */
    namespace?: string | null;
    /**
     * @default false
     */
    paused?: boolean;
    public_endpoint_id?: string | null;
    public_endpoint_params?: Result.PublicEndpointParams;
    /**
     * @default false
     */
    reranking?: boolean;
    reranking_model?: string | null;
    retrieval_options?: Result.RetrievalOptions | null;
    /**
     * A Workers AI model ID or an AI Gateway model ID compatible with the OpenAI Chat Completions API. An empty string uses the configured or default model.
     */
    rewrite_model?: string | null;
    /**
     * @default false
     */
    rewrite_query?: boolean;
    /**
     * @default 0.4
     * @minimum 0
     * @maximum 1
     */
    score_threshold?: number;
    source?: string | null;
    source_params?: Result.SourceParams | null;
    /**
     * @default waiting
     */
    status?: string;
    /**
     * Interval between automatic syncs, in seconds. Allowed values: 900 (15min), 1800 (30min), 3600 (1h), 7200 (2h), 14400 (4h), 21600 (6h), 43200 (12h), 86400 (24h).
     * @default 21600
     */
    sync_interval?: 900 | 1800 | 3600 | 7200 | 14400 | 21600 | 43200 | 86400;
    /**
     * @format uuid
     */
    token_id?: string;
    type?: 'r2' | 'web-crawler' | null;
  }

  export namespace Result {
    export interface CustomMetadata {
      data_type: 'text' | 'number' | 'boolean' | 'datetime';
      /**
       * @minLength 1
       * @maxLength 64
       */
      field_name: string;
    }

    export interface IndexMethod {
      /**
       * Enable keyword (BM25) storage backend.
       */
      keyword: boolean;
      /**
       * Enable vector (embedding) storage backend.
       */
      vector: boolean;
    }

    export interface IndexingOptions {
      /**
       * Tokenizer used for keyword search indexing. porter provides word-level tokenization with Porter stemming (good for natural language queries). trigram enables character-level substring matching (good for partial matches, code, identifiers). Changing this triggers a full re-index. Defaults to porter.
       */
      keyword_tokenizer?: 'porter' | 'trigram';
      /**
       * Accepted and propagated for future OCR processing. Currently inert. Changing this triggers a full re-index. Defaults to false.
       */
      use_ocr?: boolean;
    }

    export interface Metadata {
      created_from_aisearch_wizard?: boolean;
      worker_domain?: string;
    }

    export interface PublicEndpointParams {
      authorized_hosts?: Array<string>;
      chat_completions_endpoint?: PublicEndpointParams.ChatCompletionsEndpoint;
      /**
       * Custom domain hostnames that alias this public endpoint. GET and create responses return the current set; on update (PUT) this field is only echoed back when supplied in the request body, otherwise it is null (omit it to leave domains unchanged).
       * @maxItems 1
       */
      custom_domains?: Array<string> | null;
      /**
       * When false, the instance is reachable only via a registered custom domain and the default <public_endpoint_id>.search.ai.cloudflare.com host returns 404. Requires at least one custom domain. Defaults to true. public_endpoint_params is replaced wholesale on update, so resend default_domain_enabled on every update to keep the default host off — omitting it resets to true.
       */
      default_domain_enabled?: boolean;
      /**
       * @default false
       */
      enabled?: boolean;
      mcp?: PublicEndpointParams.Mcp;
      rate_limit?: PublicEndpointParams.RateLimit;
      search_endpoint?: PublicEndpointParams.SearchEndpoint;
    }

    export namespace PublicEndpointParams {
      export interface ChatCompletionsEndpoint {
        /**
         * Disable chat completions endpoint for this public endpoint
         * @default false
         */
        disabled?: boolean;
      }

      export interface Mcp {
        /**
         * @default Finds exactly what you're looking for
         */
        description?: string;
        /**
         * Disable MCP endpoint for this public endpoint
         * @default false
         */
        disabled?: boolean;
      }

      export interface RateLimit {
        /**
         * @minimum 60000
         * @maximum 3600000
         */
        period_ms?: number;
        /**
         * @minimum 1
         */
        requests?: number;
        technique?: 'fixed' | 'sliding';
      }

      export interface SearchEndpoint {
        /**
         * Disable search endpoint for this public endpoint
         * @default false
         */
        disabled?: boolean;
      }
    }

    export interface RetrievalOptions {
      /**
       * Metadata fields to boost search results by. Each entry specifies a metadata field and an optional direction. Direction defaults to 'asc' for numeric/datetime fields and 'exists' for text/boolean fields. Fields must match 'timestamp' or a defined custom_metadata field.
       * @maxItems 3
       */
      boost_by?: Array<RetrievalOptions.BoostBy>;
      /**
       * Controls which documents are candidates for BM25 scoring. 'and' restricts candidates to documents containing all query terms; 'or' includes any document containing at least one term, ranked by BM25 relevance. When omitted on an update, the existing stored value is preserved; when never set, search falls back to 'and'.
       */
      keyword_match_mode?: 'and' | 'or';
    }

    export namespace RetrievalOptions {
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

    export interface SourceParams {
      /**
       * List of path patterns to exclude. Uses micromatch glob syntax: * matches within a path segment, ** matches across path segments (e.g., /admin/** matches /admin/users and /admin/settings/advanced). Most accounts are limited to 10 rules; contact support to raise it.
       * @maxItems 10
       */
      exclude_items?: Array<string>;
      /**
       * List of path patterns to include. Uses micromatch glob syntax: * matches within a path segment, ** matches across path segments (e.g., /blog/** matches /blog/post and /blog/2024/post). Most accounts are limited to 10 rules; contact support to raise it.
       * @maxItems 10
       */
      include_items?: Array<string>;
      prefix?: string;
      /**
       * @default default
       */
      r2_jurisdiction?: string;
      /**
       * @default {"parse_type":"sitemap"}
       */
      web_crawler?: SourceParams.WebCrawler;
    }

    export namespace SourceParams {
      export interface WebCrawler {
        /**
         * Options for parse_type 'discover', where Browser Run discovers URLs by link following and sitemaps. Ignored for 'sitemap'.
         */
        discover_options?: WebCrawler.DiscoverOptions;
        parse_options?: WebCrawler.ParseOptions;
        /**
         * How URLs are discovered. 'sitemap' reads XML sitemaps; 'discover' follows links recursively and requires the source to be a Verified zone on this account.
         * @default sitemap
         */
        parse_type?: 'sitemap' | 'discover';
      }

      export namespace WebCrawler {
        export interface DiscoverOptions {
          /**
           * Maximum link-follow depth from the seed URL.
           * @default 5
           * @minimum 1
           * @maximum 100000
           */
          depth?: number;
          /**
           * Follow links that point outside the source domain. Must stay `false` — discover crawls are restricted to the zone you own.
           * @default false
           */
          include_external_links?: boolean;
          /**
           * Follow links to subdomains of the source host.
           * @default false
           */
          include_subdomains?: boolean;
          /**
           * Maximum number of pages to crawl (1-100000).
           * @default 100000
           * @minimum 1
           * @maximum 100000
           */
          limit?: number;
          /**
           * Maximum content age in seconds to accept (0–604800).
           * @default 86400
           * @minimum 0
           * @maximum 604800
           */
          max_age?: number;
          /**
           * Where the crawler looks for URLs: 'sitemaps' reads sitemap XML only, 'links' follows page links only, 'all' does both.
           * @default all
           */
          source?: 'all' | 'sitemaps' | 'links';
        }

        export interface ParseOptions {
          /**
           * List of path-to-selector mappings for extracting specific content from crawled pages. Each entry pairs a URL glob pattern with a CSS selector. The first matching path wins. Only the matched HTML fragment is stored and indexed. Omit the field to disable content selection — empty arrays are rejected.
           * @minItems 1
           * @maxItems 10
           */
          content_selector?: Array<ParseOptions.ContentSelector>;
          /**
           * Up to 5 custom HTTP headers sent with each crawl request. Names must be RFC-7230 token characters (no spaces, colons, or control characters); values must be HTAB + printable ASCII (no CR/LF).
           */
          include_headers?: Record<string, string>;
          /**
           * @default false
           */
          include_images?: boolean;
          /**
           * List of specific sitemap URLs to use for crawling. Only valid when parse_type is 'sitemap'.
           * @maxItems 10
           */
          specific_sitemaps?: Array<string>;
          /**
           * @default true
           */
          use_browser_rendering?: boolean;
        }

        export namespace ParseOptions {
          export interface ContentSelector {
            /**
             * Glob pattern to match against the page URL path. Uses standard glob syntax: * matches within a segment, ** crosses directories.
             * @minLength 1
             * @maxLength 200
             */
            path: string;
            /**
             * CSS selector to extract content from pages matching the path pattern. Must not contain disallowed characters (;, `, $, {, }, \). Must target a single element; if multiple elements match, the selector is ignored and the full page is used.
             * @minLength 1
             * @maxLength 200
             */
            selector: string;
          }
        }
      }
    }
  }
}

export interface AISearchInstanceNamespaceDeleteParams {
  account_id: string;
  /**
   * Namespace name
   */
  name: string;
}

export interface AISearchInstanceNamespaceDeleteResponse {
  result: AISearchInstanceNamespaceDeleteResponse.Result;
  success: boolean;
}

export namespace AISearchInstanceNamespaceDeleteResponse {
  export interface Result {
    /**
     * @format date-time
     */
    created_at: string;
    /**
     * AI Search instance ID. Lowercase alphanumeric, hyphens, and underscores.
     * @minLength 1
     * @maxLength 64
     * @pattern ^[a-z0-9_]+(?:-[a-z0-9_]+)*$
     */
    id: string;
    /**
     * @format date-time
     */
    modified_at: string;
    ai_gateway_id?: string | null;
    /**
     * A Workers AI model ID or an AI Gateway model ID compatible with the OpenAI Chat Completions API. An empty string uses the configured or default model.
     */
    ai_search_model?: string | null;
    /**
     * @default true
     */
    cache?: boolean;
    /**
     * @default close_enough
     */
    cache_threshold?: 'super_strict_match' | 'close_enough' | 'flexible_friend' | 'anything_goes';
    /**
     * Cache entry TTL in seconds. Allowed values: 600 (10min), 1800 (30min), 3600 (1h), 7200 (2h), 21600 (6h), 43200 (12h), 86400 (24h), 172800 (48h), 259200 (72h), 518400 (6d).
     * @default 172800
     */
    cache_ttl?: 600 | 1800 | 3600 | 7200 | 21600 | 43200 | 86400 | 172800 | 259200 | 518400;
    /**
     * @default 10
     * @minimum 0
     * @maximum 30
     */
    chunk_overlap?: number;
    /**
     * @minimum 64
     */
    chunk_size?: number;
    created_by?: string | null;
    /**
     * @maxItems 5
     */
    custom_metadata?: Array<Result.CustomMetadata>;
    embedding_model?: string | null;
    /**
     * @default true
     */
    enable?: boolean;
    /**
     * @default 3
     */
    engine_version?: number;
    /**
     * @default rrf
     */
    fusion_method?: 'max' | 'rrf';
    /**
     * Deprecated — use index_method instead.
     * @default false
     * @deprecated
     */
    hybrid_search_enabled?: boolean;
    /**
     * Controls which storage backends are used during indexing. Defaults to vector-only.
     * @default {"keyword":false,"vector":true}
     */
    index_method?: Result.IndexMethod;
    indexing_options?: Result.IndexingOptions | null;
    /**
     * @format date-time
     */
    last_activity?: string | null;
    /**
     * @default 10
     * @minimum 1
     * @maximum 50
     */
    max_num_results?: number;
    metadata?: Result.Metadata;
    modified_by?: string | null;
    /**
     * @pattern ^[a-z0-9]([a-z0-9-]{0,26}[a-z0-9])?$
     */
    namespace?: string | null;
    /**
     * @default false
     */
    paused?: boolean;
    public_endpoint_id?: string | null;
    public_endpoint_params?: Result.PublicEndpointParams;
    /**
     * @default false
     */
    reranking?: boolean;
    reranking_model?: string | null;
    retrieval_options?: Result.RetrievalOptions | null;
    /**
     * A Workers AI model ID or an AI Gateway model ID compatible with the OpenAI Chat Completions API. An empty string uses the configured or default model.
     */
    rewrite_model?: string | null;
    /**
     * @default false
     */
    rewrite_query?: boolean;
    /**
     * @default 0.4
     * @minimum 0
     * @maximum 1
     */
    score_threshold?: number;
    source?: string | null;
    source_params?: Result.SourceParams | null;
    /**
     * @default waiting
     */
    status?: string;
    /**
     * Interval between automatic syncs, in seconds. Allowed values: 900 (15min), 1800 (30min), 3600 (1h), 7200 (2h), 14400 (4h), 21600 (6h), 43200 (12h), 86400 (24h).
     * @default 21600
     */
    sync_interval?: 900 | 1800 | 3600 | 7200 | 14400 | 21600 | 43200 | 86400;
    /**
     * @format uuid
     */
    token_id?: string;
    type?: 'r2' | 'web-crawler' | null;
  }

  export namespace Result {
    export interface CustomMetadata {
      data_type: 'text' | 'number' | 'boolean' | 'datetime';
      /**
       * @minLength 1
       * @maxLength 64
       */
      field_name: string;
    }

    export interface IndexMethod {
      /**
       * Enable keyword (BM25) storage backend.
       */
      keyword: boolean;
      /**
       * Enable vector (embedding) storage backend.
       */
      vector: boolean;
    }

    export interface IndexingOptions {
      /**
       * Tokenizer used for keyword search indexing. porter provides word-level tokenization with Porter stemming (good for natural language queries). trigram enables character-level substring matching (good for partial matches, code, identifiers). Changing this triggers a full re-index. Defaults to porter.
       */
      keyword_tokenizer?: 'porter' | 'trigram';
      /**
       * Accepted and propagated for future OCR processing. Currently inert. Changing this triggers a full re-index. Defaults to false.
       */
      use_ocr?: boolean;
    }

    export interface Metadata {
      created_from_aisearch_wizard?: boolean;
      worker_domain?: string;
    }

    export interface PublicEndpointParams {
      authorized_hosts?: Array<string>;
      chat_completions_endpoint?: PublicEndpointParams.ChatCompletionsEndpoint;
      /**
       * Custom domain hostnames that alias this public endpoint. GET and create responses return the current set; on update (PUT) this field is only echoed back when supplied in the request body, otherwise it is null (omit it to leave domains unchanged).
       * @maxItems 1
       */
      custom_domains?: Array<string> | null;
      /**
       * When false, the instance is reachable only via a registered custom domain and the default <public_endpoint_id>.search.ai.cloudflare.com host returns 404. Requires at least one custom domain. Defaults to true. public_endpoint_params is replaced wholesale on update, so resend default_domain_enabled on every update to keep the default host off — omitting it resets to true.
       */
      default_domain_enabled?: boolean;
      /**
       * @default false
       */
      enabled?: boolean;
      mcp?: PublicEndpointParams.Mcp;
      rate_limit?: PublicEndpointParams.RateLimit;
      search_endpoint?: PublicEndpointParams.SearchEndpoint;
    }

    export namespace PublicEndpointParams {
      export interface ChatCompletionsEndpoint {
        /**
         * Disable chat completions endpoint for this public endpoint
         * @default false
         */
        disabled?: boolean;
      }

      export interface Mcp {
        /**
         * @default Finds exactly what you're looking for
         */
        description?: string;
        /**
         * Disable MCP endpoint for this public endpoint
         * @default false
         */
        disabled?: boolean;
      }

      export interface RateLimit {
        /**
         * @minimum 60000
         * @maximum 3600000
         */
        period_ms?: number;
        /**
         * @minimum 1
         */
        requests?: number;
        technique?: 'fixed' | 'sliding';
      }

      export interface SearchEndpoint {
        /**
         * Disable search endpoint for this public endpoint
         * @default false
         */
        disabled?: boolean;
      }
    }

    export interface RetrievalOptions {
      /**
       * Metadata fields to boost search results by. Each entry specifies a metadata field and an optional direction. Direction defaults to 'asc' for numeric/datetime fields and 'exists' for text/boolean fields. Fields must match 'timestamp' or a defined custom_metadata field.
       * @maxItems 3
       */
      boost_by?: Array<RetrievalOptions.BoostBy>;
      /**
       * Controls which documents are candidates for BM25 scoring. 'and' restricts candidates to documents containing all query terms; 'or' includes any document containing at least one term, ranked by BM25 relevance. When omitted on an update, the existing stored value is preserved; when never set, search falls back to 'and'.
       */
      keyword_match_mode?: 'and' | 'or';
    }

    export namespace RetrievalOptions {
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

    export interface SourceParams {
      /**
       * List of path patterns to exclude. Uses micromatch glob syntax: * matches within a path segment, ** matches across path segments (e.g., /admin/** matches /admin/users and /admin/settings/advanced). Most accounts are limited to 10 rules; contact support to raise it.
       * @maxItems 10
       */
      exclude_items?: Array<string>;
      /**
       * List of path patterns to include. Uses micromatch glob syntax: * matches within a path segment, ** matches across path segments (e.g., /blog/** matches /blog/post and /blog/2024/post). Most accounts are limited to 10 rules; contact support to raise it.
       * @maxItems 10
       */
      include_items?: Array<string>;
      prefix?: string;
      /**
       * @default default
       */
      r2_jurisdiction?: string;
      /**
       * @default {"parse_type":"sitemap"}
       */
      web_crawler?: SourceParams.WebCrawler;
    }

    export namespace SourceParams {
      export interface WebCrawler {
        /**
         * Options for parse_type 'discover', where Browser Run discovers URLs by link following and sitemaps. Ignored for 'sitemap'.
         */
        discover_options?: WebCrawler.DiscoverOptions;
        parse_options?: WebCrawler.ParseOptions;
        /**
         * How URLs are discovered. 'sitemap' reads XML sitemaps; 'discover' follows links recursively and requires the source to be a Verified zone on this account.
         * @default sitemap
         */
        parse_type?: 'sitemap' | 'discover';
      }

      export namespace WebCrawler {
        export interface DiscoverOptions {
          /**
           * Maximum link-follow depth from the seed URL.
           * @default 5
           * @minimum 1
           * @maximum 100000
           */
          depth?: number;
          /**
           * Follow links that point outside the source domain. Must stay `false` — discover crawls are restricted to the zone you own.
           * @default false
           */
          include_external_links?: boolean;
          /**
           * Follow links to subdomains of the source host.
           * @default false
           */
          include_subdomains?: boolean;
          /**
           * Maximum number of pages to crawl (1-100000).
           * @default 100000
           * @minimum 1
           * @maximum 100000
           */
          limit?: number;
          /**
           * Maximum content age in seconds to accept (0–604800).
           * @default 86400
           * @minimum 0
           * @maximum 604800
           */
          max_age?: number;
          /**
           * Where the crawler looks for URLs: 'sitemaps' reads sitemap XML only, 'links' follows page links only, 'all' does both.
           * @default all
           */
          source?: 'all' | 'sitemaps' | 'links';
        }

        export interface ParseOptions {
          /**
           * List of path-to-selector mappings for extracting specific content from crawled pages. Each entry pairs a URL glob pattern with a CSS selector. The first matching path wins. Only the matched HTML fragment is stored and indexed. Omit the field to disable content selection — empty arrays are rejected.
           * @minItems 1
           * @maxItems 10
           */
          content_selector?: Array<ParseOptions.ContentSelector>;
          /**
           * Up to 5 custom HTTP headers sent with each crawl request. Names must be RFC-7230 token characters (no spaces, colons, or control characters); values must be HTAB + printable ASCII (no CR/LF).
           */
          include_headers?: Record<string, string>;
          /**
           * @default false
           */
          include_images?: boolean;
          /**
           * List of specific sitemap URLs to use for crawling. Only valid when parse_type is 'sitemap'.
           * @maxItems 10
           */
          specific_sitemaps?: Array<string>;
          /**
           * @default true
           */
          use_browser_rendering?: boolean;
        }

        export namespace ParseOptions {
          export interface ContentSelector {
            /**
             * Glob pattern to match against the page URL path. Uses standard glob syntax: * matches within a segment, ** crosses directories.
             * @minLength 1
             * @maxLength 200
             */
            path: string;
            /**
             * CSS selector to extract content from pages matching the path pattern. Must not contain disallowed characters (;, `, $, {, }, \). Must target a single element; if multiple elements match, the selector is ignored and the full page is used.
             * @minLength 1
             * @maxLength 200
             */
            selector: string;
          }
        }
      }
    }
  }
}

export interface AISearchInstanceNamespaceFetchParams {
  account_id: string;
  /**
   * Namespace name
   */
  name: string;
}

export interface AISearchInstanceNamespaceFetchResponse {
  result: AISearchInstanceNamespaceFetchResponse.Result;
  success: boolean;
}

export namespace AISearchInstanceNamespaceFetchResponse {
  export interface Result {
    /**
     * @format date-time
     */
    created_at: string;
    /**
     * AI Search instance ID. Lowercase alphanumeric, hyphens, and underscores.
     * @minLength 1
     * @maxLength 64
     * @pattern ^[a-z0-9_]+(?:-[a-z0-9_]+)*$
     */
    id: string;
    /**
     * @format date-time
     */
    modified_at: string;
    ai_gateway_id?: string | null;
    /**
     * A Workers AI model ID or an AI Gateway model ID compatible with the OpenAI Chat Completions API. An empty string uses the configured or default model.
     */
    ai_search_model?: string | null;
    /**
     * @default true
     */
    cache?: boolean;
    /**
     * @default close_enough
     */
    cache_threshold?: 'super_strict_match' | 'close_enough' | 'flexible_friend' | 'anything_goes';
    /**
     * Cache entry TTL in seconds. Allowed values: 600 (10min), 1800 (30min), 3600 (1h), 7200 (2h), 21600 (6h), 43200 (12h), 86400 (24h), 172800 (48h), 259200 (72h), 518400 (6d).
     * @default 172800
     */
    cache_ttl?: 600 | 1800 | 3600 | 7200 | 21600 | 43200 | 86400 | 172800 | 259200 | 518400;
    /**
     * @default 10
     * @minimum 0
     * @maximum 30
     */
    chunk_overlap?: number;
    /**
     * @minimum 64
     */
    chunk_size?: number;
    created_by?: string | null;
    /**
     * @maxItems 5
     */
    custom_metadata?: Array<Result.CustomMetadata>;
    embedding_model?: string | null;
    /**
     * @default true
     */
    enable?: boolean;
    /**
     * @default 3
     */
    engine_version?: number;
    /**
     * @default rrf
     */
    fusion_method?: 'max' | 'rrf';
    /**
     * Deprecated — use index_method instead.
     * @default false
     * @deprecated
     */
    hybrid_search_enabled?: boolean;
    /**
     * Controls which storage backends are used during indexing. Defaults to vector-only.
     * @default {"keyword":false,"vector":true}
     */
    index_method?: Result.IndexMethod;
    indexing_options?: Result.IndexingOptions | null;
    /**
     * @format date-time
     */
    last_activity?: string | null;
    /**
     * @default 10
     * @minimum 1
     * @maximum 50
     */
    max_num_results?: number;
    metadata?: Result.Metadata;
    modified_by?: string | null;
    /**
     * @pattern ^[a-z0-9]([a-z0-9-]{0,26}[a-z0-9])?$
     */
    namespace?: string | null;
    /**
     * @default false
     */
    paused?: boolean;
    public_endpoint_id?: string | null;
    public_endpoint_params?: Result.PublicEndpointParams;
    /**
     * @default false
     */
    reranking?: boolean;
    reranking_model?: string | null;
    retrieval_options?: Result.RetrievalOptions | null;
    /**
     * A Workers AI model ID or an AI Gateway model ID compatible with the OpenAI Chat Completions API. An empty string uses the configured or default model.
     */
    rewrite_model?: string | null;
    /**
     * @default false
     */
    rewrite_query?: boolean;
    /**
     * @default 0.4
     * @minimum 0
     * @maximum 1
     */
    score_threshold?: number;
    source?: string | null;
    source_params?: Result.SourceParams | null;
    /**
     * @default waiting
     */
    status?: string;
    /**
     * Interval between automatic syncs, in seconds. Allowed values: 900 (15min), 1800 (30min), 3600 (1h), 7200 (2h), 14400 (4h), 21600 (6h), 43200 (12h), 86400 (24h).
     * @default 21600
     */
    sync_interval?: 900 | 1800 | 3600 | 7200 | 14400 | 21600 | 43200 | 86400;
    /**
     * @format uuid
     */
    token_id?: string;
    type?: 'r2' | 'web-crawler' | null;
  }

  export namespace Result {
    export interface CustomMetadata {
      data_type: 'text' | 'number' | 'boolean' | 'datetime';
      /**
       * @minLength 1
       * @maxLength 64
       */
      field_name: string;
    }

    export interface IndexMethod {
      /**
       * Enable keyword (BM25) storage backend.
       */
      keyword: boolean;
      /**
       * Enable vector (embedding) storage backend.
       */
      vector: boolean;
    }

    export interface IndexingOptions {
      /**
       * Tokenizer used for keyword search indexing. porter provides word-level tokenization with Porter stemming (good for natural language queries). trigram enables character-level substring matching (good for partial matches, code, identifiers). Changing this triggers a full re-index. Defaults to porter.
       */
      keyword_tokenizer?: 'porter' | 'trigram';
      /**
       * Accepted and propagated for future OCR processing. Currently inert. Changing this triggers a full re-index. Defaults to false.
       */
      use_ocr?: boolean;
    }

    export interface Metadata {
      created_from_aisearch_wizard?: boolean;
      worker_domain?: string;
    }

    export interface PublicEndpointParams {
      authorized_hosts?: Array<string>;
      chat_completions_endpoint?: PublicEndpointParams.ChatCompletionsEndpoint;
      /**
       * Custom domain hostnames that alias this public endpoint. GET and create responses return the current set; on update (PUT) this field is only echoed back when supplied in the request body, otherwise it is null (omit it to leave domains unchanged).
       * @maxItems 1
       */
      custom_domains?: Array<string> | null;
      /**
       * When false, the instance is reachable only via a registered custom domain and the default <public_endpoint_id>.search.ai.cloudflare.com host returns 404. Requires at least one custom domain. Defaults to true. public_endpoint_params is replaced wholesale on update, so resend default_domain_enabled on every update to keep the default host off — omitting it resets to true.
       */
      default_domain_enabled?: boolean;
      /**
       * @default false
       */
      enabled?: boolean;
      mcp?: PublicEndpointParams.Mcp;
      rate_limit?: PublicEndpointParams.RateLimit;
      search_endpoint?: PublicEndpointParams.SearchEndpoint;
    }

    export namespace PublicEndpointParams {
      export interface ChatCompletionsEndpoint {
        /**
         * Disable chat completions endpoint for this public endpoint
         * @default false
         */
        disabled?: boolean;
      }

      export interface Mcp {
        /**
         * @default Finds exactly what you're looking for
         */
        description?: string;
        /**
         * Disable MCP endpoint for this public endpoint
         * @default false
         */
        disabled?: boolean;
      }

      export interface RateLimit {
        /**
         * @minimum 60000
         * @maximum 3600000
         */
        period_ms?: number;
        /**
         * @minimum 1
         */
        requests?: number;
        technique?: 'fixed' | 'sliding';
      }

      export interface SearchEndpoint {
        /**
         * Disable search endpoint for this public endpoint
         * @default false
         */
        disabled?: boolean;
      }
    }

    export interface RetrievalOptions {
      /**
       * Metadata fields to boost search results by. Each entry specifies a metadata field and an optional direction. Direction defaults to 'asc' for numeric/datetime fields and 'exists' for text/boolean fields. Fields must match 'timestamp' or a defined custom_metadata field.
       * @maxItems 3
       */
      boost_by?: Array<RetrievalOptions.BoostBy>;
      /**
       * Controls which documents are candidates for BM25 scoring. 'and' restricts candidates to documents containing all query terms; 'or' includes any document containing at least one term, ranked by BM25 relevance. When omitted on an update, the existing stored value is preserved; when never set, search falls back to 'and'.
       */
      keyword_match_mode?: 'and' | 'or';
    }

    export namespace RetrievalOptions {
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

    export interface SourceParams {
      /**
       * List of path patterns to exclude. Uses micromatch glob syntax: * matches within a path segment, ** matches across path segments (e.g., /admin/** matches /admin/users and /admin/settings/advanced). Most accounts are limited to 10 rules; contact support to raise it.
       * @maxItems 10
       */
      exclude_items?: Array<string>;
      /**
       * List of path patterns to include. Uses micromatch glob syntax: * matches within a path segment, ** matches across path segments (e.g., /blog/** matches /blog/post and /blog/2024/post). Most accounts are limited to 10 rules; contact support to raise it.
       * @maxItems 10
       */
      include_items?: Array<string>;
      prefix?: string;
      /**
       * @default default
       */
      r2_jurisdiction?: string;
      /**
       * @default {"parse_type":"sitemap"}
       */
      web_crawler?: SourceParams.WebCrawler;
    }

    export namespace SourceParams {
      export interface WebCrawler {
        /**
         * Options for parse_type 'discover', where Browser Run discovers URLs by link following and sitemaps. Ignored for 'sitemap'.
         */
        discover_options?: WebCrawler.DiscoverOptions;
        parse_options?: WebCrawler.ParseOptions;
        /**
         * How URLs are discovered. 'sitemap' reads XML sitemaps; 'discover' follows links recursively and requires the source to be a Verified zone on this account.
         * @default sitemap
         */
        parse_type?: 'sitemap' | 'discover';
      }

      export namespace WebCrawler {
        export interface DiscoverOptions {
          /**
           * Maximum link-follow depth from the seed URL.
           * @default 5
           * @minimum 1
           * @maximum 100000
           */
          depth?: number;
          /**
           * Follow links that point outside the source domain. Must stay `false` — discover crawls are restricted to the zone you own.
           * @default false
           */
          include_external_links?: boolean;
          /**
           * Follow links to subdomains of the source host.
           * @default false
           */
          include_subdomains?: boolean;
          /**
           * Maximum number of pages to crawl (1-100000).
           * @default 100000
           * @minimum 1
           * @maximum 100000
           */
          limit?: number;
          /**
           * Maximum content age in seconds to accept (0–604800).
           * @default 86400
           * @minimum 0
           * @maximum 604800
           */
          max_age?: number;
          /**
           * Where the crawler looks for URLs: 'sitemaps' reads sitemap XML only, 'links' follows page links only, 'all' does both.
           * @default all
           */
          source?: 'all' | 'sitemaps' | 'links';
        }

        export interface ParseOptions {
          /**
           * List of path-to-selector mappings for extracting specific content from crawled pages. Each entry pairs a URL glob pattern with a CSS selector. The first matching path wins. Only the matched HTML fragment is stored and indexed. Omit the field to disable content selection — empty arrays are rejected.
           * @minItems 1
           * @maxItems 10
           */
          content_selector?: Array<ParseOptions.ContentSelector>;
          /**
           * Up to 5 custom HTTP headers sent with each crawl request. Names must be RFC-7230 token characters (no spaces, colons, or control characters); values must be HTAB + printable ASCII (no CR/LF).
           */
          include_headers?: Record<string, string>;
          /**
           * @default false
           */
          include_images?: boolean;
          /**
           * List of specific sitemap URLs to use for crawling. Only valid when parse_type is 'sitemap'.
           * @maxItems 10
           */
          specific_sitemaps?: Array<string>;
          /**
           * @default true
           */
          use_browser_rendering?: boolean;
        }

        export namespace ParseOptions {
          export interface ContentSelector {
            /**
             * Glob pattern to match against the page URL path. Uses standard glob syntax: * matches within a segment, ** crosses directories.
             * @minLength 1
             * @maxLength 200
             */
            path: string;
            /**
             * CSS selector to extract content from pages matching the path pattern. Must not contain disallowed characters (;, `, $, {, }, \). Must target a single element; if multiple elements match, the selector is ignored and the full page is used.
             * @minLength 1
             * @maxLength 200
             */
            selector: string;
          }
        }
      }
    }
  }
}

export interface AISearchInstanceNamespaceUpdateParams {
  /**
   * Path param
   */
  account_id: string;
  /**
   * Path param: Namespace name
   */
  name: string;
  /**
   * Body param
   */
  ai_gateway_id?: string | null;
  /**
   * Body param: A Workers AI model ID or an AI Gateway model ID compatible with the OpenAI Chat Completions API. An empty string uses the configured or default model.
   */
  ai_search_model?: string | null;
  /**
   * Body param
   * @default true
   */
  cache?: boolean;
  /**
   * Body param
   * @default close_enough
   */
  cache_threshold?: 'super_strict_match' | 'close_enough' | 'flexible_friend' | 'anything_goes';
  /**
   * Body param: Cache entry TTL in seconds. Allowed values: 600 (10min), 1800 (30min), 3600 (1h), 7200 (2h), 21600 (6h), 43200 (12h), 86400 (24h), 172800 (48h), 259200 (72h), 518400 (6d).
   * @default 172800
   */
  cache_ttl?: 600 | 1800 | 3600 | 7200 | 21600 | 43200 | 86400 | 172800 | 259200 | 518400;
  /**
   * Body param
   * @default true
   */
  chunk?: boolean;
  /**
   * Body param
   * @default 10
   * @minimum 0
   * @maximum 30
   */
  chunk_overlap?: number;
  /**
   * Body param
   * @minimum 64
   */
  chunk_size?: number;
  /**
   * Body param
   * @maxItems 5
   */
  custom_metadata?: Array<AISearchInstanceNamespaceUpdateParams.CustomMetadata>;
  /**
   * Body param
   */
  embedding_model?: string | null;
  /**
   * Body param
   * @default rrf
   */
  fusion_method?: 'max' | 'rrf';
  /**
   * Body param: Controls which storage backends are used during indexing. Defaults to vector-only.
   * @default {"keyword":false,"vector":true}
   */
  index_method?: AISearchInstanceNamespaceUpdateParams.IndexMethod;
  /**
   * Body param
   */
  indexing_options?: AISearchInstanceNamespaceUpdateParams.IndexingOptions | null;
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
  metadata?: AISearchInstanceNamespaceUpdateParams.Metadata;
  /**
   * Body param
   * @default false
   */
  paused?: boolean;
  /**
   * Body param
   */
  public_endpoint_params?: AISearchInstanceNamespaceUpdateParams.PublicEndpointParams;
  /**
   * Body param
   * @default false
   */
  reranking?: boolean;
  /**
   * Body param
   */
  reranking_model?: string | null;
  /**
   * Body param
   */
  retrieval_options?: AISearchInstanceNamespaceUpdateParams.RetrievalOptions | null;
  /**
   * Body param: A Workers AI model ID or an AI Gateway model ID compatible with the OpenAI Chat Completions API. An empty string uses the configured or default model.
   */
  rewrite_model?: string | null;
  /**
   * Body param
   * @default false
   */
  rewrite_query?: boolean;
  /**
   * Body param
   * @default 0.4
   * @minimum 0
   * @maximum 1
   */
  score_threshold?: number;
  /**
   * Body param
   */
  source?: string | null;
  /**
   * Body param
   */
  source_params?: AISearchInstanceNamespaceUpdateParams.SourceParams | null;
  /**
   * Body param
   * @default false
   */
  summarization?: boolean;
  /**
   * Body param
   */
  summarization_model?: string | null;
  /**
   * Body param: Interval between automatic syncs, in seconds. Allowed values: 900 (15min), 1800 (30min), 3600 (1h), 7200 (2h), 14400 (4h), 21600 (6h), 43200 (12h), 86400 (24h).
   * @default 21600
   */
  sync_interval?: 900 | 1800 | 3600 | 7200 | 14400 | 21600 | 43200 | 86400;
  /**
   * Body param
   */
  system_prompt_ai_search?: string | null;
  /**
   * Body param
   */
  system_prompt_index_summarization?: string | null;
  /**
   * Body param
   */
  system_prompt_rewrite_query?: string | null;
  /**
   * Body param
   * @format uuid
   */
  token_id?: string;
}

export namespace AISearchInstanceNamespaceUpdateParams {
  export interface CustomMetadata {
    data_type: 'text' | 'number' | 'boolean' | 'datetime';
    /**
     * @minLength 1
     * @maxLength 64
     */
    field_name: string;
  }

  export interface IndexMethod {
    /**
     * Enable keyword (BM25) storage backend.
     */
    keyword: boolean;
    /**
     * Enable vector (embedding) storage backend.
     */
    vector: boolean;
  }

  export interface IndexingOptions {
    /**
     * Tokenizer used for keyword search indexing. porter provides word-level tokenization with Porter stemming (good for natural language queries). trigram enables character-level substring matching (good for partial matches, code, identifiers). Changing this triggers a full re-index. Defaults to porter.
     */
    keyword_tokenizer?: 'porter' | 'trigram';
    /**
     * Accepted and propagated for future OCR processing. Currently inert. Changing this triggers a full re-index. Defaults to false.
     */
    use_ocr?: boolean;
  }

  export interface Metadata {
    created_from_aisearch_wizard?: boolean;
    worker_domain?: string;
  }

  export interface PublicEndpointParams {
    authorized_hosts?: Array<string>;
    chat_completions_endpoint?: PublicEndpointParams.ChatCompletionsEndpoint;
    /**
     * Custom domain hostnames that alias this public endpoint. GET and create responses return the current set; on update (PUT) this field is only echoed back when supplied in the request body, otherwise it is null (omit it to leave domains unchanged).
     * @maxItems 1
     */
    custom_domains?: Array<string> | null;
    /**
     * When false, the instance is reachable only via a registered custom domain and the default <public_endpoint_id>.search.ai.cloudflare.com host returns 404. Requires at least one custom domain. Defaults to true. public_endpoint_params is replaced wholesale on update, so resend default_domain_enabled on every update to keep the default host off — omitting it resets to true.
     */
    default_domain_enabled?: boolean;
    /**
     * @default false
     */
    enabled?: boolean;
    mcp?: PublicEndpointParams.Mcp;
    rate_limit?: PublicEndpointParams.RateLimit;
    search_endpoint?: PublicEndpointParams.SearchEndpoint;
  }

  export namespace PublicEndpointParams {
    export interface ChatCompletionsEndpoint {
      /**
       * Disable chat completions endpoint for this public endpoint
       * @default false
       */
      disabled?: boolean;
    }

    export interface Mcp {
      /**
       * @default Finds exactly what you're looking for
       */
      description?: string;
      /**
       * Disable MCP endpoint for this public endpoint
       * @default false
       */
      disabled?: boolean;
    }

    export interface RateLimit {
      /**
       * @minimum 60000
       * @maximum 3600000
       */
      period_ms?: number;
      /**
       * @minimum 1
       */
      requests?: number;
      technique?: 'fixed' | 'sliding';
    }

    export interface SearchEndpoint {
      /**
       * Disable search endpoint for this public endpoint
       * @default false
       */
      disabled?: boolean;
    }
  }

  export interface RetrievalOptions {
    /**
     * Metadata fields to boost search results by. Each entry specifies a metadata field and an optional direction. Direction defaults to 'asc' for numeric/datetime fields and 'exists' for text/boolean fields. Fields must match 'timestamp' or a defined custom_metadata field.
     * @maxItems 3
     */
    boost_by?: Array<RetrievalOptions.BoostBy>;
    /**
     * Controls which documents are candidates for BM25 scoring. 'and' restricts candidates to documents containing all query terms; 'or' includes any document containing at least one term, ranked by BM25 relevance. When omitted on an update, the existing stored value is preserved; when never set, search falls back to 'and'.
     */
    keyword_match_mode?: 'and' | 'or';
  }

  export namespace RetrievalOptions {
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

  export interface SourceParams {
    /**
     * List of path patterns to exclude. Uses micromatch glob syntax: * matches within a path segment, ** matches across path segments (e.g., /admin/** matches /admin/users and /admin/settings/advanced). Most accounts are limited to 10 rules; contact support to raise it.
     * @maxItems 10
     */
    exclude_items?: Array<string>;
    /**
     * List of path patterns to include. Uses micromatch glob syntax: * matches within a path segment, ** matches across path segments (e.g., /blog/** matches /blog/post and /blog/2024/post). Most accounts are limited to 10 rules; contact support to raise it.
     * @maxItems 10
     */
    include_items?: Array<string>;
    prefix?: string;
    /**
     * @default default
     */
    r2_jurisdiction?: string;
    /**
     * @default {"parse_type":"sitemap"}
     */
    web_crawler?: SourceParams.WebCrawler;
  }

  export namespace SourceParams {
    export interface WebCrawler {
      /**
       * Options for parse_type 'discover', where Browser Run discovers URLs by link following and sitemaps. Ignored for 'sitemap'.
       */
      discover_options?: WebCrawler.DiscoverOptions;
      parse_options?: WebCrawler.ParseOptions;
      /**
       * How URLs are discovered. 'sitemap' reads XML sitemaps; 'discover' follows links recursively and requires the source to be a Verified zone on this account.
       * @default sitemap
       */
      parse_type?: 'sitemap' | 'discover';
    }

    export namespace WebCrawler {
      export interface DiscoverOptions {
        /**
         * Maximum link-follow depth from the seed URL.
         * @default 5
         * @minimum 1
         * @maximum 100000
         */
        depth?: number;
        /**
         * Follow links that point outside the source domain. Must stay `false` — discover crawls are restricted to the zone you own.
         * @default false
         */
        include_external_links?: boolean;
        /**
         * Follow links to subdomains of the source host.
         * @default false
         */
        include_subdomains?: boolean;
        /**
         * Maximum number of pages to crawl (1-100000).
         * @default 100000
         * @minimum 1
         * @maximum 100000
         */
        limit?: number;
        /**
         * Maximum content age in seconds to accept (0–604800).
         * @default 86400
         * @minimum 0
         * @maximum 604800
         */
        max_age?: number;
        /**
         * Where the crawler looks for URLs: 'sitemaps' reads sitemap XML only, 'links' follows page links only, 'all' does both.
         * @default all
         */
        source?: 'all' | 'sitemaps' | 'links';
      }

      export interface ParseOptions {
        /**
         * List of path-to-selector mappings for extracting specific content from crawled pages. Each entry pairs a URL glob pattern with a CSS selector. The first matching path wins. Only the matched HTML fragment is stored and indexed. Omit the field to disable content selection — empty arrays are rejected.
         * @minItems 1
         * @maxItems 10
         */
        content_selector?: Array<ParseOptions.ContentSelector>;
        /**
         * Up to 5 custom HTTP headers sent with each crawl request. Names must be RFC-7230 token characters (no spaces, colons, or control characters); values must be HTAB + printable ASCII (no CR/LF).
         */
        include_headers?: Record<string, string>;
        /**
         * @default false
         */
        include_images?: boolean;
        /**
         * List of specific sitemap URLs to use for crawling. Only valid when parse_type is 'sitemap'.
         * @maxItems 10
         */
        specific_sitemaps?: Array<string>;
        /**
         * @default true
         */
        use_browser_rendering?: boolean;
      }

      export namespace ParseOptions {
        export interface ContentSelector {
          /**
           * Glob pattern to match against the page URL path. Uses standard glob syntax: * matches within a segment, ** crosses directories.
           * @minLength 1
           * @maxLength 200
           */
          path: string;
          /**
           * CSS selector to extract content from pages matching the path pattern. Must not contain disallowed characters (;, `, $, {, }, \). Must target a single element; if multiple elements match, the selector is ignored and the full page is used.
           * @minLength 1
           * @maxLength 200
           */
          selector: string;
        }
      }
    }
  }
}

export interface AISearchInstanceNamespaceUpdateResponse {
  result: AISearchInstanceNamespaceUpdateResponse.Result;
  success: boolean;
}

export namespace AISearchInstanceNamespaceUpdateResponse {
  export interface Result {
    /**
     * @format date-time
     */
    created_at: string;
    /**
     * AI Search instance ID. Lowercase alphanumeric, hyphens, and underscores.
     * @minLength 1
     * @maxLength 64
     * @pattern ^[a-z0-9_]+(?:-[a-z0-9_]+)*$
     */
    id: string;
    /**
     * @format date-time
     */
    modified_at: string;
    ai_gateway_id?: string | null;
    /**
     * A Workers AI model ID or an AI Gateway model ID compatible with the OpenAI Chat Completions API. An empty string uses the configured or default model.
     */
    ai_search_model?: string | null;
    /**
     * @default true
     */
    cache?: boolean;
    /**
     * @default close_enough
     */
    cache_threshold?: 'super_strict_match' | 'close_enough' | 'flexible_friend' | 'anything_goes';
    /**
     * Cache entry TTL in seconds. Allowed values: 600 (10min), 1800 (30min), 3600 (1h), 7200 (2h), 21600 (6h), 43200 (12h), 86400 (24h), 172800 (48h), 259200 (72h), 518400 (6d).
     * @default 172800
     */
    cache_ttl?: 600 | 1800 | 3600 | 7200 | 21600 | 43200 | 86400 | 172800 | 259200 | 518400;
    /**
     * @default 10
     * @minimum 0
     * @maximum 30
     */
    chunk_overlap?: number;
    /**
     * @minimum 64
     */
    chunk_size?: number;
    created_by?: string | null;
    /**
     * @maxItems 5
     */
    custom_metadata?: Array<Result.CustomMetadata>;
    embedding_model?: string | null;
    /**
     * @default true
     */
    enable?: boolean;
    /**
     * @default 3
     */
    engine_version?: number;
    /**
     * @default rrf
     */
    fusion_method?: 'max' | 'rrf';
    /**
     * Deprecated — use index_method instead.
     * @default false
     * @deprecated
     */
    hybrid_search_enabled?: boolean;
    /**
     * Controls which storage backends are used during indexing. Defaults to vector-only.
     * @default {"keyword":false,"vector":true}
     */
    index_method?: Result.IndexMethod;
    indexing_options?: Result.IndexingOptions | null;
    /**
     * @format date-time
     */
    last_activity?: string | null;
    /**
     * @default 10
     * @minimum 1
     * @maximum 50
     */
    max_num_results?: number;
    metadata?: Result.Metadata;
    modified_by?: string | null;
    /**
     * @pattern ^[a-z0-9]([a-z0-9-]{0,26}[a-z0-9])?$
     */
    namespace?: string | null;
    /**
     * @default false
     */
    paused?: boolean;
    public_endpoint_id?: string | null;
    public_endpoint_params?: Result.PublicEndpointParams;
    /**
     * @default false
     */
    reranking?: boolean;
    reranking_model?: string | null;
    retrieval_options?: Result.RetrievalOptions | null;
    /**
     * A Workers AI model ID or an AI Gateway model ID compatible with the OpenAI Chat Completions API. An empty string uses the configured or default model.
     */
    rewrite_model?: string | null;
    /**
     * @default false
     */
    rewrite_query?: boolean;
    /**
     * @default 0.4
     * @minimum 0
     * @maximum 1
     */
    score_threshold?: number;
    source?: string | null;
    source_params?: Result.SourceParams | null;
    /**
     * @default waiting
     */
    status?: string;
    /**
     * Interval between automatic syncs, in seconds. Allowed values: 900 (15min), 1800 (30min), 3600 (1h), 7200 (2h), 14400 (4h), 21600 (6h), 43200 (12h), 86400 (24h).
     * @default 21600
     */
    sync_interval?: 900 | 1800 | 3600 | 7200 | 14400 | 21600 | 43200 | 86400;
    /**
     * @format uuid
     */
    token_id?: string;
    type?: 'r2' | 'web-crawler' | null;
  }

  export namespace Result {
    export interface CustomMetadata {
      data_type: 'text' | 'number' | 'boolean' | 'datetime';
      /**
       * @minLength 1
       * @maxLength 64
       */
      field_name: string;
    }

    export interface IndexMethod {
      /**
       * Enable keyword (BM25) storage backend.
       */
      keyword: boolean;
      /**
       * Enable vector (embedding) storage backend.
       */
      vector: boolean;
    }

    export interface IndexingOptions {
      /**
       * Tokenizer used for keyword search indexing. porter provides word-level tokenization with Porter stemming (good for natural language queries). trigram enables character-level substring matching (good for partial matches, code, identifiers). Changing this triggers a full re-index. Defaults to porter.
       */
      keyword_tokenizer?: 'porter' | 'trigram';
      /**
       * Accepted and propagated for future OCR processing. Currently inert. Changing this triggers a full re-index. Defaults to false.
       */
      use_ocr?: boolean;
    }

    export interface Metadata {
      created_from_aisearch_wizard?: boolean;
      worker_domain?: string;
    }

    export interface PublicEndpointParams {
      authorized_hosts?: Array<string>;
      chat_completions_endpoint?: PublicEndpointParams.ChatCompletionsEndpoint;
      /**
       * Custom domain hostnames that alias this public endpoint. GET and create responses return the current set; on update (PUT) this field is only echoed back when supplied in the request body, otherwise it is null (omit it to leave domains unchanged).
       * @maxItems 1
       */
      custom_domains?: Array<string> | null;
      /**
       * When false, the instance is reachable only via a registered custom domain and the default <public_endpoint_id>.search.ai.cloudflare.com host returns 404. Requires at least one custom domain. Defaults to true. public_endpoint_params is replaced wholesale on update, so resend default_domain_enabled on every update to keep the default host off — omitting it resets to true.
       */
      default_domain_enabled?: boolean;
      /**
       * @default false
       */
      enabled?: boolean;
      mcp?: PublicEndpointParams.Mcp;
      rate_limit?: PublicEndpointParams.RateLimit;
      search_endpoint?: PublicEndpointParams.SearchEndpoint;
    }

    export namespace PublicEndpointParams {
      export interface ChatCompletionsEndpoint {
        /**
         * Disable chat completions endpoint for this public endpoint
         * @default false
         */
        disabled?: boolean;
      }

      export interface Mcp {
        /**
         * @default Finds exactly what you're looking for
         */
        description?: string;
        /**
         * Disable MCP endpoint for this public endpoint
         * @default false
         */
        disabled?: boolean;
      }

      export interface RateLimit {
        /**
         * @minimum 60000
         * @maximum 3600000
         */
        period_ms?: number;
        /**
         * @minimum 1
         */
        requests?: number;
        technique?: 'fixed' | 'sliding';
      }

      export interface SearchEndpoint {
        /**
         * Disable search endpoint for this public endpoint
         * @default false
         */
        disabled?: boolean;
      }
    }

    export interface RetrievalOptions {
      /**
       * Metadata fields to boost search results by. Each entry specifies a metadata field and an optional direction. Direction defaults to 'asc' for numeric/datetime fields and 'exists' for text/boolean fields. Fields must match 'timestamp' or a defined custom_metadata field.
       * @maxItems 3
       */
      boost_by?: Array<RetrievalOptions.BoostBy>;
      /**
       * Controls which documents are candidates for BM25 scoring. 'and' restricts candidates to documents containing all query terms; 'or' includes any document containing at least one term, ranked by BM25 relevance. When omitted on an update, the existing stored value is preserved; when never set, search falls back to 'and'.
       */
      keyword_match_mode?: 'and' | 'or';
    }

    export namespace RetrievalOptions {
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

    export interface SourceParams {
      /**
       * List of path patterns to exclude. Uses micromatch glob syntax: * matches within a path segment, ** matches across path segments (e.g., /admin/** matches /admin/users and /admin/settings/advanced). Most accounts are limited to 10 rules; contact support to raise it.
       * @maxItems 10
       */
      exclude_items?: Array<string>;
      /**
       * List of path patterns to include. Uses micromatch glob syntax: * matches within a path segment, ** matches across path segments (e.g., /blog/** matches /blog/post and /blog/2024/post). Most accounts are limited to 10 rules; contact support to raise it.
       * @maxItems 10
       */
      include_items?: Array<string>;
      prefix?: string;
      /**
       * @default default
       */
      r2_jurisdiction?: string;
      /**
       * @default {"parse_type":"sitemap"}
       */
      web_crawler?: SourceParams.WebCrawler;
    }

    export namespace SourceParams {
      export interface WebCrawler {
        /**
         * Options for parse_type 'discover', where Browser Run discovers URLs by link following and sitemaps. Ignored for 'sitemap'.
         */
        discover_options?: WebCrawler.DiscoverOptions;
        parse_options?: WebCrawler.ParseOptions;
        /**
         * How URLs are discovered. 'sitemap' reads XML sitemaps; 'discover' follows links recursively and requires the source to be a Verified zone on this account.
         * @default sitemap
         */
        parse_type?: 'sitemap' | 'discover';
      }

      export namespace WebCrawler {
        export interface DiscoverOptions {
          /**
           * Maximum link-follow depth from the seed URL.
           * @default 5
           * @minimum 1
           * @maximum 100000
           */
          depth?: number;
          /**
           * Follow links that point outside the source domain. Must stay `false` — discover crawls are restricted to the zone you own.
           * @default false
           */
          include_external_links?: boolean;
          /**
           * Follow links to subdomains of the source host.
           * @default false
           */
          include_subdomains?: boolean;
          /**
           * Maximum number of pages to crawl (1-100000).
           * @default 100000
           * @minimum 1
           * @maximum 100000
           */
          limit?: number;
          /**
           * Maximum content age in seconds to accept (0–604800).
           * @default 86400
           * @minimum 0
           * @maximum 604800
           */
          max_age?: number;
          /**
           * Where the crawler looks for URLs: 'sitemaps' reads sitemap XML only, 'links' follows page links only, 'all' does both.
           * @default all
           */
          source?: 'all' | 'sitemaps' | 'links';
        }

        export interface ParseOptions {
          /**
           * List of path-to-selector mappings for extracting specific content from crawled pages. Each entry pairs a URL glob pattern with a CSS selector. The first matching path wins. Only the matched HTML fragment is stored and indexed. Omit the field to disable content selection — empty arrays are rejected.
           * @minItems 1
           * @maxItems 10
           */
          content_selector?: Array<ParseOptions.ContentSelector>;
          /**
           * Up to 5 custom HTTP headers sent with each crawl request. Names must be RFC-7230 token characters (no spaces, colons, or control characters); values must be HTAB + printable ASCII (no CR/LF).
           */
          include_headers?: Record<string, string>;
          /**
           * @default false
           */
          include_images?: boolean;
          /**
           * List of specific sitemap URLs to use for crawling. Only valid when parse_type is 'sitemap'.
           * @maxItems 10
           */
          specific_sitemaps?: Array<string>;
          /**
           * @default true
           */
          use_browser_rendering?: boolean;
        }

        export namespace ParseOptions {
          export interface ContentSelector {
            /**
             * Glob pattern to match against the page URL path. Uses standard glob syntax: * matches within a segment, ** crosses directories.
             * @minLength 1
             * @maxLength 200
             */
            path: string;
            /**
             * CSS selector to extract content from pages matching the path pattern. Must not contain disallowed characters (;, `, $, {, }, \). Must target a single element; if multiple elements match, the selector is ignored and the full page is used.
             * @minLength 1
             * @maxLength 200
             */
            selector: string;
          }
        }
      }
    }
  }
}

export interface AISearchInstanceNamespaceChatCompletionParams {
  /**
   * Path param
   */
  account_id: string;
  /**
   * Path param: Namespace name
   */
  name: string;
  /**
   * Body param
   */
  ai_search_options?: AISearchInstanceNamespaceChatCompletionParams.AISearchOptions;
  /**
   * Body param
   * @minItems 1
   */
  messages: Array<AISearchInstanceNamespaceChatCompletionParams.Message>;
  /**
   * Body param: A Workers AI model ID or an AI Gateway model ID compatible with the OpenAI Chat Completions API. An empty string uses the configured or default model.
   */
  model?: string;
  /**
   * Body param
   */
  stream?: boolean;
}

export namespace AISearchInstanceNamespaceChatCompletionParams {
  export interface AISearchOptions {
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

export interface AISearchInstanceNamespaceChatCompletionResponse {
  choices: Array<AISearchInstanceNamespaceChatCompletionResponse.Choice>;
  chunks: Array<AISearchInstanceNamespaceChatCompletionResponse.Chunk>;
  id?: string;
  model?: string;
  object?: string;
  [k: string]: unknown;
}

export namespace AISearchInstanceNamespaceChatCompletionResponse {
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
}

export interface AISearchInstanceNamespacePurgeCacheParams {
  account_id: string;
  /**
   * Namespace name
   */
  name: string;
}

export interface AISearchInstanceNamespacePurgeCacheResponse {
  success: boolean;
}

export interface AISearchInstanceSearch2Params {
  /**
   * Path param
   */
  account_id: string;
  /**
   * Path param: Namespace name
   */
  name: string;
  /**
   * Body param
   */
  ai_search_options?: AISearchInstanceSearch2Params.AISearchOptions;
  /**
   * Body param: OpenAI-compatible message array. For multimodal queries, set the last user message's `content` to an array of typed parts: `[{type:'text', text:'…'}, {type:'image_url', image_url:{url:'…'}}]`. Image inputs require the RAG's embedding_model to declare 'image' in supported_modalities.
   * @minItems 1
   */
  messages?: Array<AISearchInstanceSearch2Params.Message>;
  /**
   * Body param: A simple text query string. Alternative to 'messages' — provide either this or 'messages', not both.
   * @minLength 1
   */
  query?: string;
}

export namespace AISearchInstanceSearch2Params {
  export interface AISearchOptions {
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

export interface AISearchInstanceSearch2Response {
  result: AISearchInstanceSearch2Response.Result;
  success: boolean;
}

export namespace AISearchInstanceSearch2Response {
  export interface Result {
    chunks: Array<Result.Chunk>;
    query_kind: 'text' | 'image' | 'multimodal';
    search_query?: string;
  }

  export namespace Result {
    export interface Chunk {
      id: string;
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
  }
}

export interface AISearchInstanceNamespaceStatsParams {
  account_id: string;
  /**
   * Namespace name
   */
  name: string;
}

export interface AISearchInstanceNamespaceStatsResponse {
  result: AISearchInstanceNamespaceStatsResponse.Result;
  success: boolean;
}

export namespace AISearchInstanceNamespaceStatsResponse {
  export interface Result {
    completed?: number;
    /**
     * True when status counts are unavailable (e.g. legacy stats query exceeded D1 statement-size limit). Counts are omitted in this case.
     */
    degraded?: boolean;
    /**
     * Engine-specific metadata. Present only for managed (v3) instances.
     */
    engine?: Result.Engine;
    error?: number;
    file_embed_errors?: Record<string, unknown>;
    index_source_errors?: Record<string, unknown>;
    /**
     * @format date-time
     */
    last_activity?: string;
    outdated?: number;
    queued?: number;
    running?: number;
    skipped?: number;
  }

  export namespace Result {
    export interface Engine {
      /**
       * R2 bucket storage usage in bytes.
       */
      r2?: Engine.R2;
      /**
       * Vectorize index metadata (dimensions, vector count).
       */
      vectorize?: Engine.Vectorize;
    }

    export namespace Engine {
      export interface R2 {
        metadataSizeBytes: number;
        objectCount: number;
        payloadSizeBytes: number;
      }

      export interface Vectorize {
        dimensions: number;
        vectorsCount: number;
      }
    }
  }
}
export declare namespace AISearchInstances {
  export {
    type AISearchInstanceListResponse as AISearchInstanceListResponse,
    type AISearchInstanceCreateResponse as AISearchInstanceCreateResponse,
    type AISearchInstanceDeleteResponse as AISearchInstanceDeleteResponse,
    type AISearchInstanceFetchResponse as AISearchInstanceFetchResponse,
    type AISearchInstanceUpdateResponse as AISearchInstanceUpdateResponse,
    type AISearchInstanceChatCompletionResponse as AISearchInstanceChatCompletionResponse,
    type AISearchInstanceSearchResponse as AISearchInstanceSearchResponse,
    type AISearchInstanceStatsResponse as AISearchInstanceStatsResponse,
    type AISearchInstanceNamespaceListResponse as AISearchInstanceNamespaceListResponse,
    type AISearchInstanceNamespaceCreateResponse as AISearchInstanceNamespaceCreateResponse,
    type AISearchInstanceNamespaceDeleteResponse as AISearchInstanceNamespaceDeleteResponse,
    type AISearchInstanceNamespaceFetchResponse as AISearchInstanceNamespaceFetchResponse,
    type AISearchInstanceNamespaceUpdateResponse as AISearchInstanceNamespaceUpdateResponse,
    type AISearchInstanceNamespaceChatCompletionResponse as AISearchInstanceNamespaceChatCompletionResponse,
    type AISearchInstanceNamespacePurgeCacheResponse as AISearchInstanceNamespacePurgeCacheResponse,
    type AISearchInstanceSearch2Response as AISearchInstanceSearch2Response,
    type AISearchInstanceNamespaceStatsResponse as AISearchInstanceNamespaceStatsResponse,
    type AISearchInstanceListParams as AISearchInstanceListParams,
    type AISearchInstanceCreateParams as AISearchInstanceCreateParams,
    type AISearchInstanceDeleteParams as AISearchInstanceDeleteParams,
    type AISearchInstanceFetchParams as AISearchInstanceFetchParams,
    type AISearchInstanceUpdateParams as AISearchInstanceUpdateParams,
    type AISearchInstanceChatCompletionParams as AISearchInstanceChatCompletionParams,
    type AISearchInstanceSearchParams as AISearchInstanceSearchParams,
    type AISearchInstanceStatsParams as AISearchInstanceStatsParams,
    type AISearchInstanceNamespaceListParams as AISearchInstanceNamespaceListParams,
    type AISearchInstanceNamespaceCreateParams as AISearchInstanceNamespaceCreateParams,
    type AISearchInstanceNamespaceDeleteParams as AISearchInstanceNamespaceDeleteParams,
    type AISearchInstanceNamespaceFetchParams as AISearchInstanceNamespaceFetchParams,
    type AISearchInstanceNamespaceUpdateParams as AISearchInstanceNamespaceUpdateParams,
    type AISearchInstanceNamespaceChatCompletionParams as AISearchInstanceNamespaceChatCompletionParams,
    type AISearchInstanceNamespacePurgeCacheParams as AISearchInstanceNamespacePurgeCacheParams,
    type AISearchInstanceSearch2Params as AISearchInstanceSearch2Params,
    type AISearchInstanceNamespaceStatsParams as AISearchInstanceNamespaceStatsParams,
  };
}
