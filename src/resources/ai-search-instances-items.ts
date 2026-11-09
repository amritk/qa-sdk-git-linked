// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from '../resource';
import { APIPromise } from '../api-promise';
import type { RequestOptions } from '../internal/request-options';
import { buildHeaders } from '../internal/headers';
import { multipartFormRequestOptions } from '../internal/uploads';
import { path as __scalarPath } from '../internal/utils/path';
import type { Uploadable } from '../core/uploads';

export class AISearchInstancesItems extends APIResource {
  /**
   * Lists indexed items in an AI Search instance.
   *
   * @param {string} id - AI Search instance ID. Lowercase alphanumeric, hyphens, and underscores.
   * @param {AISearchInstancesItemNamespaceListParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<AISearchInstancesItemNamespaceListResponse>} Returns the AI Search items.
   *
   * @example
   * ```ts
   * const aiSearchInstancesItem = await client.aiSearchInstancesItems.namespaceList('my-ai-search', {
   *   account_id: 'c3dc5f0b34a14ff8e1b3ec04895e1b22',
   *   name: 'name',
   *   page: 1,
   *   per_page: 20,
   *   sort_by: 'status',
   * });
   * ```
   */
  namespaceList(
    id: string,
    params: AISearchInstancesItemNamespaceListParams,
    options?: RequestOptions,
  ): APIPromise<AISearchInstancesItemNamespaceListResponse> {
    const { account_id, name, ...query } = params;
    return this._client.get(
      __scalarPath`/accounts/${account_id}/ai-search/namespaces/${name}/instances/${id}/items`,
      { query, ...options },
    );
  }

  /**
   * Uploads a file to a managed AI Search instance via multipart/form-data.
   *
   * @param {string} id - AI Search instance ID. Lowercase alphanumeric, hyphens, and underscores.
   * @param {AISearchInstancesItemNamespaceUploadParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<AISearchInstancesItemNamespaceUploadResponse>} Item uploaded successfully.
   *
   * @example
   * ```ts
   * const aiSearchInstancesItem = await client.aiSearchInstancesItems.namespaceUpload('my-ai-search', {
   *   account_id: 'c3dc5f0b34a14ff8e1b3ec04895e1b22',
   *   name: 'name',
   *   file: new File(['file'], 'file'),
   *   wait_for_completion: false,
   * });
   * ```
   */
  namespaceUpload(
    id: string,
    params: AISearchInstancesItemNamespaceUploadParams,
    options?: RequestOptions,
  ): APIPromise<AISearchInstancesItemNamespaceUploadResponse> {
    const { account_id, name, ...body } = params;
    return this._client.post(
      __scalarPath`/accounts/${account_id}/ai-search/namespaces/${name}/instances/${id}/items`,
      multipartFormRequestOptions({ body, ...options }, this._client),
    );
  }

  /**
   * Creates or updates an indexed item in an AI Search instance.
   *
   * @param {string} id - AI Search instance ID. Lowercase alphanumeric, hyphens, and underscores.
   * @param {AISearchInstancesItemNamespaceCreateOrUpdateParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<AISearchInstancesItemNamespaceCreateOrUpdateResponse>} Returns a AI Search Item detail.
   *
   * @example
   * ```ts
   * const aiSearchInstancesItem = await client.aiSearchInstancesItems.namespaceCreateOrUpdate('my-ai-search', {
   *   account_id: 'c3dc5f0b34a14ff8e1b3ec04895e1b22',
   *   name: 'name',
   *   key: '',
   *   next_action: 'INDEX',
   *   wait_for_completion: false,
   * });
   * ```
   */
  namespaceCreateOrUpdate(
    id: string,
    params: AISearchInstancesItemNamespaceCreateOrUpdateParams,
    options?: RequestOptions,
  ): APIPromise<AISearchInstancesItemNamespaceCreateOrUpdateResponse> {
    const { account_id, name, ...body } = params;
    return this._client.put(
      __scalarPath`/accounts/${account_id}/ai-search/namespaces/${name}/instances/${id}/items`,
      { body, ...options },
    );
  }

  /**
   * Deletes a file from a managed AI Search instance and triggers a reindex.
   *
   * @param {string} itemID
   * @param {AISearchInstancesItemNamespaceDeleteParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<AISearchInstancesItemNamespaceDeleteResponse>} Item deleted successfully.
   *
   * @example
   * ```ts
   * const aiSearchInstancesItem = await client.aiSearchInstancesItems.namespaceDelete('itemId', {
   *   id: 'my-ai-search',
   *   account_id: 'c3dc5f0b34a14ff8e1b3ec04895e1b22',
   *   name: 'name',
   * });
   * ```
   */
  namespaceDelete(
    itemID: string,
    params: AISearchInstancesItemNamespaceDeleteParams,
    options?: RequestOptions,
  ): APIPromise<AISearchInstancesItemNamespaceDeleteResponse> {
    const { id, account_id, name } = params;
    return this._client.delete(
      __scalarPath`/accounts/${account_id}/ai-search/namespaces/${name}/instances/${id}/items/${itemID}`,
      options,
    );
  }

  /**
   * Retrieves a specific indexed item from an AI Search instance.
   *
   * @param {string} itemID
   * @param {AISearchInstancesItemNamespaceGetParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<AISearchInstancesItemNamespaceGetResponse>} Returns a AI Search Item detail.
   *
   * @example
   * ```ts
   * const aiSearchInstancesItem = await client.aiSearchInstancesItems.namespaceGet('itemId', {
   *   id: 'my-ai-search',
   *   account_id: 'c3dc5f0b34a14ff8e1b3ec04895e1b22',
   *   name: 'name',
   * });
   * ```
   */
  namespaceGet(
    itemID: string,
    params: AISearchInstancesItemNamespaceGetParams,
    options?: RequestOptions,
  ): APIPromise<AISearchInstancesItemNamespaceGetResponse> {
    const { id, account_id, name } = params;
    return this._client.get(
      __scalarPath`/accounts/${account_id}/ai-search/namespaces/${name}/instances/${id}/items/${itemID}`,
      options,
    );
  }

  /**
   * Syncs an item to an AI Search instance index.
   *
   * @param {string} itemID
   * @param {AISearchInstancesItemNamespaceSyncParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<AISearchInstancesItemNamespaceSyncResponse>} Returns a AI Search Item detail.
   *
   * @example
   * ```ts
   * const aiSearchInstancesItem = await client.aiSearchInstancesItems.namespaceSync('itemId', {
   *   id: 'my-ai-search',
   *   account_id: 'c3dc5f0b34a14ff8e1b3ec04895e1b22',
   *   name: 'name',
   *   next_action: 'INDEX',
   *   wait_for_completion: false,
   * });
   * ```
   */
  namespaceSync(
    itemID: string,
    params: AISearchInstancesItemNamespaceSyncParams,
    options?: RequestOptions,
  ): APIPromise<AISearchInstancesItemNamespaceSyncResponse> {
    const { id, account_id, name, ...body } = params;
    return this._client.patch(
      __scalarPath`/accounts/${account_id}/ai-search/namespaces/${name}/instances/${id}/items/${itemID}`,
      { body, ...options },
    );
  }

  /**
   * Lists chunks for a specific item in an AI Search instance, including their text content.
   *
   * @param {string} itemID
   * @param {AISearchInstancesItemNamespaceListChunksParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<AISearchInstancesItemNamespaceListChunksResponse>} Returns the AI Search item chunks with text content.
   *
   * @example
   * ```ts
   * const aiSearchInstancesItem = await client.aiSearchInstancesItems.namespaceListChunks('itemId', {
   *   id: 'my-ai-search',
   *   account_id: 'c3dc5f0b34a14ff8e1b3ec04895e1b22',
   *   name: 'name',
   *   limit: 20,
   *   offset: 0,
   * });
   * ```
   */
  namespaceListChunks(
    itemID: string,
    params: AISearchInstancesItemNamespaceListChunksParams,
    options?: RequestOptions,
  ): APIPromise<AISearchInstancesItemNamespaceListChunksResponse> {
    const { id, account_id, name, ...query } = params;
    return this._client.get(
      __scalarPath`/accounts/${account_id}/ai-search/namespaces/${name}/instances/${id}/items/${itemID}/chunks`,
      { query, ...options },
    );
  }

  /**
   * Downloads the raw file content for a specific item from the managed AI Search instance storage.
   *
   * @param {string} itemID
   * @param {AISearchInstancesItemNamespaceGetContentParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<Response>} Raw file content.
   *
   * @example
   * ```ts
   * const response = await client.aiSearchInstancesItems.namespaceGetContent('itemId', {
   *   id: 'my-ai-search',
   *   account_id: 'c3dc5f0b34a14ff8e1b3ec04895e1b22',
   *   name: 'name',
   * });
   * ```
   */
  namespaceGetContent(
    itemID: string,
    params: AISearchInstancesItemNamespaceGetContentParams,
    options?: RequestOptions,
  ): APIPromise<Response> {
    const { id, account_id, name } = params;
    return this._client.get(
      __scalarPath`/accounts/${account_id}/ai-search/namespaces/${name}/instances/${id}/items/${itemID}/download`,
      {
        ...options,
        headers: buildHeaders([{ Accept: 'application/octet-stream' }, options?.headers]),
        __binaryResponse: true,
      },
    );
  }

  /**
   * Lists processing logs for a specific item in an AI Search instance.
   *
   * @param {string} itemID
   * @param {AISearchInstancesItemNamespaceLogsParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<AISearchInstancesItemNamespaceLogsResponse>} Returns the AI Search item logs.
   *
   * @example
   * ```ts
   * const aiSearchInstancesItem = await client.aiSearchInstancesItems.namespaceLogs('itemId', {
   *   id: 'my-ai-search',
   *   account_id: 'c3dc5f0b34a14ff8e1b3ec04895e1b22',
   *   name: 'name',
   *   limit: 50,
   * });
   * ```
   */
  namespaceLogs(
    itemID: string,
    params: AISearchInstancesItemNamespaceLogsParams,
    options?: RequestOptions,
  ): APIPromise<AISearchInstancesItemNamespaceLogsResponse> {
    const { id, account_id, name, ...query } = params;
    return this._client.get(
      __scalarPath`/accounts/${account_id}/ai-search/namespaces/${name}/instances/${id}/items/${itemID}/logs`,
      { query, ...options },
    );
  }
}

export interface AISearchInstancesItemNamespaceListParams {
  /**
   * Path param
   */
  account_id: string;
  /**
   * Path param: Namespace name
   */
  name: string;
  /**
   * Query param
   * @default 1
   * @minimum 1
   */
  page?: number;
  /**
   * Query param
   * @default 20
   * @minimum 0
   * @maximum 50
   */
  per_page?: number;
  /**
   * Query param
   * @maxLength 256
   */
  search?: string;
  /**
   * Query param: Sort order for items. "status" (default) sorts by status priority then last_seen_at. "modified_at" sorts by file modification time (most recent first), falling back to created_at.
   */
  sort_by?: 'status' | 'modified_at';
  /**
   * Query param
   */
  status?: 'queued' | 'running' | 'completed' | 'error' | 'skipped' | 'outdated';
  /**
   * Query param: Filter items by source_id. Use "builtin" for uploaded files, or a source identifier like "web-crawler:https://example.com".
   * @maxLength 512
   */
  source?: string;
  /**
   * Query param: JSON-encoded metadata filter using Vectorize filter syntax. Examples: {"folder":"reports/"}, {"timestamp":{"$gte":1700000000000}}, {"folder":{"$in":["docs/","reports/"]}}
   * @maxLength 2048
   */
  metadata_filter?: string;
  /**
   * Query param: Filter items by their unique ID. Returns at most one item.
   * @maxLength 64
   */
  item_id?: string;
  /**
   * Query param: Filter items by their exact key (object key / filename). Keys are unique per source, so combine with `source` to disambiguate across data sources.
   * @maxLength 1024
   */
  key?: string;
}

export interface AISearchInstancesItemNamespaceListResponse {
  result: Array<AISearchInstancesItemNamespaceListResponse.Result>;
  result_info: AISearchInstancesItemNamespaceListResponse.ResultInfo;
  success: boolean;
}

export namespace AISearchInstancesItemNamespaceListResponse {
  export interface Result {
    checksum: string;
    chunks_count: number | null;
    /**
     * @format date-time
     */
    created_at: string;
    file_size: number | null;
    id: string;
    key: string;
    /**
     * @format date-time
     */
    last_seen_at: string;
    /**
     * Built-in, configured filterable, and retained source metadata for the item.
     */
    metadata: Record<string, string | number | boolean> | null;
    namespace: string;
    next_action: 'INDEX' | 'DELETE' | null;
    /**
     * Identifies which data source this item belongs to. "builtin" for uploaded files, "{type}:{source}" for external sources, null for legacy items.
     */
    source_id: string | null;
    status: 'queued' | 'running' | 'completed' | 'error' | 'skipped' | 'outdated';
    error?: string;
  }

  export interface ResultInfo {
    count: number;
    page: number;
    total_count: number;
    /**
     * @default 20
     * @minimum 5
     * @maximum 50
     */
    per_page?: number;
  }
}

export interface AISearchInstancesItemNamespaceUploadParams {
  /**
   * Path param
   */
  account_id: string;
  /**
   * Path param: Namespace name
   */
  name: string;
  /**
   * Body param: The file to upload. Filename must not exceed 128 characters.
   */
  file: Uploadable;
  /**
   * Body param: JSON string of custom metadata key-value pairs.
   */
  metadata?: string;
  /**
   * Body param: Wait for indexing to fully complete before responding. On RAGs with vector indexing enabled, this additionally waits for Vectorize ingestion confirmation (up to 40s) so the returned item reflects a queryable state. On timeout the item is returned in `running` state and the background alarm continues polling. Defaults to false.
   */
  wait_for_completion?: boolean;
}

export interface AISearchInstancesItemNamespaceUploadResponse {
  result: AISearchInstancesItemNamespaceUploadResponse.Result;
  success: boolean;
}

export namespace AISearchInstancesItemNamespaceUploadResponse {
  export interface Result {
    checksum: string;
    chunks_count: number | null;
    /**
     * @format date-time
     */
    created_at: string;
    file_size: number | null;
    id: string;
    key: string;
    /**
     * @format date-time
     */
    last_seen_at: string;
    /**
     * Built-in, configured filterable, and retained source metadata for the item.
     */
    metadata: Record<string, string | number | boolean> | null;
    namespace: string;
    next_action: 'INDEX' | 'DELETE' | null;
    /**
     * Identifies which data source this item belongs to. "builtin" for uploaded files, "{type}:{source}" for external sources, null for legacy items.
     */
    source_id: string | null;
    status: 'queued' | 'running' | 'completed' | 'error' | 'skipped' | 'outdated';
    error?: string;
    /**
     * @maxItems 10
     */
    warnings?: Array<Result.Warning | Result.Warning2>;
  }

  export namespace Result {
    export interface Warning {
      code: 'custom_metadata_value_not_indexed';
      expected_type: 'text' | 'number' | 'boolean' | 'datetime';
      /**
       * @maxLength 512
       */
      field: string;
    }

    export interface Warning2 {
      code: 'custom_metadata_field_not_filterable';
      /**
       * @maxLength 512
       */
      field: string;
    }
  }
}

export interface AISearchInstancesItemNamespaceCreateOrUpdateParams {
  /**
   * Path param
   */
  account_id: string;
  /**
   * Path param: Namespace name
   */
  name: string;
  /**
   * Body param: Item key / filename. Must not exceed 128 characters.
   */
  key: string;
  /**
   * Body param
   */
  next_action: 'INDEX';
  /**
   * Body param: Wait for indexing to fully complete before responding. On RAGs with vector indexing enabled, this additionally waits for Vectorize ingestion confirmation (up to 40s) so the returned item reflects a queryable state. On timeout the item is returned in `running` state and the background alarm continues polling. Defaults to false.
   */
  wait_for_completion?: boolean;
}

export interface AISearchInstancesItemNamespaceCreateOrUpdateResponse {
  result: AISearchInstancesItemNamespaceCreateOrUpdateResponse.Result;
  success: boolean;
}

export namespace AISearchInstancesItemNamespaceCreateOrUpdateResponse {
  export interface Result {
    checksum: string;
    chunks_count: number | null;
    /**
     * @format date-time
     */
    created_at: string;
    file_size: number | null;
    id: string;
    key: string;
    /**
     * @format date-time
     */
    last_seen_at: string;
    /**
     * Built-in, configured filterable, and retained source metadata for the item.
     */
    metadata: Record<string, string | number | boolean> | null;
    namespace: string;
    next_action: 'INDEX' | 'DELETE' | null;
    /**
     * Identifies which data source this item belongs to. "builtin" for uploaded files, "{type}:{source}" for external sources, null for legacy items.
     */
    source_id: string | null;
    status: 'queued' | 'running' | 'completed' | 'error' | 'skipped' | 'outdated';
    error?: string;
  }
}

export interface AISearchInstancesItemNamespaceDeleteParams {
  /**
   * AI Search instance ID. Lowercase alphanumeric, hyphens, and underscores.
   * @minLength 1
   * @maxLength 64
   * @pattern ^[a-z0-9_]+(?:-[a-z0-9_]+)*$
   */
  id: string;
  account_id: string;
  /**
   * Namespace name
   */
  name: string;
}

export interface AISearchInstancesItemNamespaceDeleteResponse {
  result: AISearchInstancesItemNamespaceDeleteResponse.Result;
  success: boolean;
}

export namespace AISearchInstancesItemNamespaceDeleteResponse {
  export interface Result {
    key: string;
  }
}

export interface AISearchInstancesItemNamespaceGetParams {
  /**
   * AI Search instance ID. Lowercase alphanumeric, hyphens, and underscores.
   * @minLength 1
   * @maxLength 64
   * @pattern ^[a-z0-9_]+(?:-[a-z0-9_]+)*$
   */
  id: string;
  account_id: string;
  /**
   * Namespace name
   */
  name: string;
}

export interface AISearchInstancesItemNamespaceGetResponse {
  result: AISearchInstancesItemNamespaceGetResponse.Result;
  success: boolean;
}

export namespace AISearchInstancesItemNamespaceGetResponse {
  export interface Result {
    checksum: string;
    chunks_count: number | null;
    /**
     * @format date-time
     */
    created_at: string;
    file_size: number | null;
    id: string;
    key: string;
    /**
     * @format date-time
     */
    last_seen_at: string;
    /**
     * Built-in, configured filterable, and retained source metadata for the item.
     */
    metadata: Record<string, string | number | boolean> | null;
    namespace: string;
    next_action: 'INDEX' | 'DELETE' | null;
    /**
     * Identifies which data source this item belongs to. "builtin" for uploaded files, "{type}:{source}" for external sources, null for legacy items.
     */
    source_id: string | null;
    status: 'queued' | 'running' | 'completed' | 'error' | 'skipped' | 'outdated';
    error?: string;
  }
}

export interface AISearchInstancesItemNamespaceSyncParams {
  /**
   * Path param: AI Search instance ID. Lowercase alphanumeric, hyphens, and underscores.
   * @minLength 1
   * @maxLength 64
   * @pattern ^[a-z0-9_]+(?:-[a-z0-9_]+)*$
   */
  id: string;
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
  next_action: 'INDEX';
  /**
   * Body param: Wait for indexing to fully complete before responding. On RAGs with vector indexing enabled, this additionally waits for Vectorize ingestion confirmation (up to 40s) so the returned item reflects a queryable state. On timeout the item is returned in `running` state and the background alarm continues polling. Defaults to false.
   */
  wait_for_completion?: boolean;
}

export interface AISearchInstancesItemNamespaceSyncResponse {
  result: AISearchInstancesItemNamespaceSyncResponse.Result;
  success: boolean;
}

export namespace AISearchInstancesItemNamespaceSyncResponse {
  export interface Result {
    checksum: string;
    chunks_count: number | null;
    /**
     * @format date-time
     */
    created_at: string;
    file_size: number | null;
    id: string;
    key: string;
    /**
     * @format date-time
     */
    last_seen_at: string;
    /**
     * Built-in, configured filterable, and retained source metadata for the item.
     */
    metadata: Record<string, string | number | boolean> | null;
    namespace: string;
    next_action: 'INDEX' | 'DELETE' | null;
    /**
     * Identifies which data source this item belongs to. "builtin" for uploaded files, "{type}:{source}" for external sources, null for legacy items.
     */
    source_id: string | null;
    status: 'queued' | 'running' | 'completed' | 'error' | 'skipped' | 'outdated';
    error?: string;
  }
}

export interface AISearchInstancesItemNamespaceListChunksParams {
  /**
   * Path param: AI Search instance ID. Lowercase alphanumeric, hyphens, and underscores.
   * @minLength 1
   * @maxLength 64
   * @pattern ^[a-z0-9_]+(?:-[a-z0-9_]+)*$
   */
  id: string;
  /**
   * Path param
   */
  account_id: string;
  /**
   * Path param: Namespace name
   */
  name: string;
  /**
   * Query param
   * @default 20
   * @minimum 1
   * @maximum 100
   */
  limit?: number;
  /**
   * Query param
   * @default 0
   * @minimum 0
   */
  offset?: number;
}

export interface AISearchInstancesItemNamespaceListChunksResponse {
  result: Array<AISearchInstancesItemNamespaceListChunksResponse.Result>;
  result_info: AISearchInstancesItemNamespaceListChunksResponse.ResultInfo;
  success: boolean;
}

export namespace AISearchInstancesItemNamespaceListChunksResponse {
  export interface Result {
    id: string;
    item: Result.Item;
    text: string;
    end_byte?: number;
    start_byte?: number;
  }

  export namespace Result {
    export interface Item {
      key: string;
      metadata?: Record<string, unknown>;
      timestamp?: number;
    }
  }

  export interface ResultInfo {
    count: number;
    limit: number;
    offset: number;
    total: number;
  }
}

export interface AISearchInstancesItemNamespaceGetContentParams {
  /**
   * AI Search instance ID. Lowercase alphanumeric, hyphens, and underscores.
   * @minLength 1
   * @maxLength 64
   * @pattern ^[a-z0-9_]+(?:-[a-z0-9_]+)*$
   */
  id: string;
  account_id: string;
  /**
   * Namespace name
   */
  name: string;
}

export interface AISearchInstancesItemNamespaceLogsParams {
  /**
   * Path param: AI Search instance ID. Lowercase alphanumeric, hyphens, and underscores.
   * @minLength 1
   * @maxLength 64
   * @pattern ^[a-z0-9_]+(?:-[a-z0-9_]+)*$
   */
  id: string;
  /**
   * Path param
   */
  account_id: string;
  /**
   * Path param: Namespace name
   */
  name: string;
  /**
   * Query param
   * @default 50
   * @minimum 1
   * @maximum 100
   */
  limit?: number;
  /**
   * Query param
   * @maxLength 512
   */
  cursor?: string;
}

export interface AISearchInstancesItemNamespaceLogsResponse {
  result: Array<AISearchInstancesItemNamespaceLogsResponse.Result>;
  result_info: AISearchInstancesItemNamespaceLogsResponse.ResultInfo;
  success: boolean;
}

export namespace AISearchInstancesItemNamespaceLogsResponse {
  export interface Result {
    action: string;
    chunkCount: number | null;
    errorType: string | null;
    fileKey: string;
    message: string | null;
    processingTimeMs: number | null;
    /**
     * @format date-time
     */
    timestamp: string;
  }

  export interface ResultInfo {
    count: number;
    cursor: string | null;
    per_page: number;
    truncated: boolean;
  }
}
export declare namespace AISearchInstancesItems {
  export {
    type AISearchInstancesItemNamespaceListResponse as AISearchInstancesItemNamespaceListResponse,
    type AISearchInstancesItemNamespaceUploadResponse as AISearchInstancesItemNamespaceUploadResponse,
    type AISearchInstancesItemNamespaceCreateOrUpdateResponse as AISearchInstancesItemNamespaceCreateOrUpdateResponse,
    type AISearchInstancesItemNamespaceDeleteResponse as AISearchInstancesItemNamespaceDeleteResponse,
    type AISearchInstancesItemNamespaceGetResponse as AISearchInstancesItemNamespaceGetResponse,
    type AISearchInstancesItemNamespaceSyncResponse as AISearchInstancesItemNamespaceSyncResponse,
    type AISearchInstancesItemNamespaceListChunksResponse as AISearchInstancesItemNamespaceListChunksResponse,
    type AISearchInstancesItemNamespaceLogsResponse as AISearchInstancesItemNamespaceLogsResponse,
    type AISearchInstancesItemNamespaceListParams as AISearchInstancesItemNamespaceListParams,
    type AISearchInstancesItemNamespaceUploadParams as AISearchInstancesItemNamespaceUploadParams,
    type AISearchInstancesItemNamespaceCreateOrUpdateParams as AISearchInstancesItemNamespaceCreateOrUpdateParams,
    type AISearchInstancesItemNamespaceDeleteParams as AISearchInstancesItemNamespaceDeleteParams,
    type AISearchInstancesItemNamespaceGetParams as AISearchInstancesItemNamespaceGetParams,
    type AISearchInstancesItemNamespaceSyncParams as AISearchInstancesItemNamespaceSyncParams,
    type AISearchInstancesItemNamespaceListChunksParams as AISearchInstancesItemNamespaceListChunksParams,
    type AISearchInstancesItemNamespaceGetContentParams as AISearchInstancesItemNamespaceGetContentParams,
    type AISearchInstancesItemNamespaceLogsParams as AISearchInstancesItemNamespaceLogsParams,
  };
}
