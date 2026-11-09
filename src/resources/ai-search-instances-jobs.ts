// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from '../resource';
import { APIPromise } from '../api-promise';
import type { RequestOptions } from '../internal/request-options';
import { path as __scalarPath } from '../internal/utils/path';

export class AISearchInstancesJobs extends APIResource {
  /**
   * Lists indexing jobs for an AI Search instance.
   *
   * @param {string} id - AI Search instance ID. Lowercase alphanumeric, hyphens, and underscores.
   * @param {AISearchInstancesJobListParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<AISearchInstancesJobListResponse>} Returns a list of AI Search Jobs.
   *
   * @example
   * ```ts
   * const aiSearchInstancesJob = await client.aiSearchInstancesJobs.list('my-ai-search', {
   *   account_id: 'c3dc5f0b34a14ff8e1b3ec04895e1b22',
   *   page: 1,
   *   per_page: 20,
   * });
   * ```
   */
  list(
    id: string,
    params: AISearchInstancesJobListParams,
    options?: RequestOptions,
  ): APIPromise<AISearchInstancesJobListResponse> {
    const { account_id, ...query } = params;
    return this._client.get(__scalarPath`/accounts/${account_id}/ai-search/instances/${id}/jobs`, {
      query,
      ...options,
    });
  }

  /**
   * Creates a new indexing job for an AI Search instance.
   *
   * @param {string} id - AI Search instance ID. Lowercase alphanumeric, hyphens, and underscores.
   * @param {AISearchInstancesJobCreateParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<AISearchInstancesJobCreateResponse>} Returns the AI Search job id.
   *
   * @example
   * ```ts
   * const aiSearchInstancesJob = await client.aiSearchInstancesJobs.create('my-ai-search', {
   *   account_id: 'c3dc5f0b34a14ff8e1b3ec04895e1b22',
   * });
   * ```
   */
  create(
    id: string,
    params: AISearchInstancesJobCreateParams,
    options?: RequestOptions,
  ): APIPromise<AISearchInstancesJobCreateResponse> {
    const { account_id, ...body } = params;
    return this._client.post(__scalarPath`/accounts/${account_id}/ai-search/instances/${id}/jobs`, {
      body,
      ...options,
    });
  }

  /**
   * Retrieves details for a specific AI Search indexing job.
   *
   * @param {string} jobID
   * @param {AISearchInstancesJobRetrieveParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<AISearchInstancesJobRetrieveResponse>} Returns a AI Search Job Details.
   *
   * @example
   * ```ts
   * const aiSearchInstancesJob = await client.aiSearchInstancesJobs.retrieve('jobId', {
   *   id: 'my-ai-search',
   *   account_id: 'c3dc5f0b34a14ff8e1b3ec04895e1b22',
   * });
   * ```
   */
  retrieve(
    jobID: string,
    params: AISearchInstancesJobRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<AISearchInstancesJobRetrieveResponse> {
    const { id, account_id } = params;
    return this._client.get(
      __scalarPath`/accounts/${account_id}/ai-search/instances/${id}/jobs/${jobID}`,
      options,
    );
  }

  /**
   * Cancel an in-progress indexing job for an AI Search instance.
   *
   * @param {string} jobID
   * @param {AISearchInstancesJobChangeStatusParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<AISearchInstancesJobChangeStatusResponse>} Returns the updated AI Search Job.
   *
   * @example
   * ```ts
   * const aiSearchInstancesJob = await client.aiSearchInstancesJobs.changeStatus('jobId', {
   *   id: 'my-ai-search',
   *   account_id: 'c3dc5f0b34a14ff8e1b3ec04895e1b22',
   *   action: 'cancel',
   * });
   * ```
   */
  changeStatus(
    jobID: string,
    params: AISearchInstancesJobChangeStatusParams,
    options?: RequestOptions,
  ): APIPromise<AISearchInstancesJobChangeStatusResponse> {
    const { id, account_id, ...body } = params;
    return this._client.patch(__scalarPath`/accounts/${account_id}/ai-search/instances/${id}/jobs/${jobID}`, {
      body,
      ...options,
    });
  }

  /**
   * Lists log entries for an AI Search indexing job.
   *
   * @param {string} jobID
   * @param {AISearchInstancesJobListLogsParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<AISearchInstancesJobListLogsResponse>} Returns a list of AI Search Job Logs.
   *
   * @example
   * ```ts
   * const aiSearchInstancesJob = await client.aiSearchInstancesJobs.listLogs('jobId', {
   *   id: 'my-ai-search',
   *   account_id: 'c3dc5f0b34a14ff8e1b3ec04895e1b22',
   *   page: 1,
   *   per_page: 20,
   * });
   * ```
   */
  listLogs(
    jobID: string,
    params: AISearchInstancesJobListLogsParams,
    options?: RequestOptions,
  ): APIPromise<AISearchInstancesJobListLogsResponse> {
    const { id, account_id, ...query } = params;
    return this._client.get(
      __scalarPath`/accounts/${account_id}/ai-search/instances/${id}/jobs/${jobID}/logs`,
      { query, ...options },
    );
  }

  /**
   * Lists indexing jobs for an AI Search instance.
   *
   * @param {string} id - AI Search instance ID. Lowercase alphanumeric, hyphens, and underscores.
   * @param {AISearchInstancesJobNamespaceListParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<AISearchInstancesJobNamespaceListResponse>} Returns a list of AI Search Jobs.
   *
   * @example
   * ```ts
   * const aiSearchInstancesJob = await client.aiSearchInstancesJobs.namespaceList('my-ai-search', {
   *   account_id: 'c3dc5f0b34a14ff8e1b3ec04895e1b22',
   *   name: 'name',
   *   page: 1,
   *   per_page: 20,
   * });
   * ```
   */
  namespaceList(
    id: string,
    params: AISearchInstancesJobNamespaceListParams,
    options?: RequestOptions,
  ): APIPromise<AISearchInstancesJobNamespaceListResponse> {
    const { account_id, name, ...query } = params;
    return this._client.get(
      __scalarPath`/accounts/${account_id}/ai-search/namespaces/${name}/instances/${id}/jobs`,
      { query, ...options },
    );
  }

  /**
   * Creates a new indexing job for an AI Search instance.
   *
   * @param {string} id - AI Search instance ID. Lowercase alphanumeric, hyphens, and underscores.
   * @param {AISearchInstancesJobNamespaceCreateParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<AISearchInstancesJobNamespaceCreateResponse>} Returns the AI Search job id.
   *
   * @example
   * ```ts
   * const aiSearchInstancesJob = await client.aiSearchInstancesJobs.namespaceCreate('my-ai-search', {
   *   account_id: 'c3dc5f0b34a14ff8e1b3ec04895e1b22',
   *   name: 'name',
   * });
   * ```
   */
  namespaceCreate(
    id: string,
    params: AISearchInstancesJobNamespaceCreateParams,
    options?: RequestOptions,
  ): APIPromise<AISearchInstancesJobNamespaceCreateResponse> {
    const { account_id, name, ...body } = params;
    return this._client.post(
      __scalarPath`/accounts/${account_id}/ai-search/namespaces/${name}/instances/${id}/jobs`,
      { body, ...options },
    );
  }

  /**
   * Retrieves details for a specific AI Search indexing job.
   *
   * @param {string} jobID
   * @param {AISearchInstancesJobNamespaceGetParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<AISearchInstancesJobNamespaceGetResponse>} Returns a AI Search Job Details.
   *
   * @example
   * ```ts
   * const aiSearchInstancesJob = await client.aiSearchInstancesJobs.namespaceGet('jobId', {
   *   id: 'my-ai-search',
   *   account_id: 'c3dc5f0b34a14ff8e1b3ec04895e1b22',
   *   name: 'name',
   * });
   * ```
   */
  namespaceGet(
    jobID: string,
    params: AISearchInstancesJobNamespaceGetParams,
    options?: RequestOptions,
  ): APIPromise<AISearchInstancesJobNamespaceGetResponse> {
    const { id, account_id, name } = params;
    return this._client.get(
      __scalarPath`/accounts/${account_id}/ai-search/namespaces/${name}/instances/${id}/jobs/${jobID}`,
      options,
    );
  }

  /**
   * Cancel an in-progress indexing job for an AI Search instance.
   *
   * @param {string} jobID
   * @param {AISearchInstancesJobNamespaceChangeStatusParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<AISearchInstancesJobNamespaceChangeStatusResponse>} Returns the updated AI Search Job.
   *
   * @example
   * ```ts
   * const aiSearchInstancesJob = await client.aiSearchInstancesJobs.namespaceChangeStatus('jobId', {
   *   id: 'my-ai-search',
   *   account_id: 'c3dc5f0b34a14ff8e1b3ec04895e1b22',
   *   name: 'name',
   *   action: 'cancel',
   * });
   * ```
   */
  namespaceChangeStatus(
    jobID: string,
    params: AISearchInstancesJobNamespaceChangeStatusParams,
    options?: RequestOptions,
  ): APIPromise<AISearchInstancesJobNamespaceChangeStatusResponse> {
    const { id, account_id, name, ...body } = params;
    return this._client.patch(
      __scalarPath`/accounts/${account_id}/ai-search/namespaces/${name}/instances/${id}/jobs/${jobID}`,
      { body, ...options },
    );
  }

  /**
   * Lists log entries for an AI Search indexing job.
   *
   * @param {string} jobID
   * @param {AISearchInstancesJobNamespaceListLogsParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<AISearchInstancesJobNamespaceListLogsResponse>} Returns a list of AI Search Job Logs.
   *
   * @example
   * ```ts
   * const aiSearchInstancesJob = await client.aiSearchInstancesJobs.namespaceListLogs('jobId', {
   *   id: 'my-ai-search',
   *   account_id: 'c3dc5f0b34a14ff8e1b3ec04895e1b22',
   *   name: 'name',
   *   page: 1,
   *   per_page: 20,
   * });
   * ```
   */
  namespaceListLogs(
    jobID: string,
    params: AISearchInstancesJobNamespaceListLogsParams,
    options?: RequestOptions,
  ): APIPromise<AISearchInstancesJobNamespaceListLogsResponse> {
    const { id, account_id, name, ...query } = params;
    return this._client.get(
      __scalarPath`/accounts/${account_id}/ai-search/namespaces/${name}/instances/${id}/jobs/${jobID}/logs`,
      { query, ...options },
    );
  }
}

export interface AISearchInstancesJobListParams {
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
   * @minimum 0
   * @maximum 50
   */
  per_page?: number;
}

export interface AISearchInstancesJobListResponse {
  result: Array<AISearchInstancesJobListResponse.Result>;
  result_info: AISearchInstancesJobListResponse.ResultInfo;
  success: boolean;
}

export namespace AISearchInstancesJobListResponse {
  export interface Result {
    id: string;
    source: 'user' | 'schedule';
    description?: string;
    end_reason?: string;
    ended_at?: string;
    last_seen_at?: string;
    started_at?: string;
  }

  export interface ResultInfo {
    count: number;
    page: number;
    per_page: number;
    total_count: number;
  }
}

export interface AISearchInstancesJobCreateParams {
  /**
   * Path param
   */
  account_id: string;
  /**
   * Body param
   * @maxLength 255
   */
  description?: string;
}

export interface AISearchInstancesJobCreateResponse {
  result: AISearchInstancesJobCreateResponse.Result;
  success: boolean;
}

export namespace AISearchInstancesJobCreateResponse {
  export interface Result {
    id: string;
    source: 'user' | 'schedule';
    description?: string;
    end_reason?: string;
    ended_at?: string;
    last_seen_at?: string;
    started_at?: string;
  }
}

export interface AISearchInstancesJobRetrieveParams {
  /**
   * AI Search instance ID. Lowercase alphanumeric, hyphens, and underscores.
   * @minLength 1
   * @maxLength 64
   * @pattern ^[a-z0-9_]+(?:-[a-z0-9_]+)*$
   */
  id: string;
  account_id: string;
}

export interface AISearchInstancesJobRetrieveResponse {
  result: AISearchInstancesJobRetrieveResponse.Result;
  success: boolean;
}

export namespace AISearchInstancesJobRetrieveResponse {
  export interface Result {
    id: string;
    source: 'user' | 'schedule';
    description?: string;
    end_reason?: string;
    ended_at?: string;
    last_seen_at?: string;
    started_at?: string;
  }
}

export interface AISearchInstancesJobChangeStatusParams {
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
   * Body param
   */
  action: 'cancel';
}

export interface AISearchInstancesJobChangeStatusResponse {
  result: AISearchInstancesJobChangeStatusResponse.Result;
  success: boolean;
}

export namespace AISearchInstancesJobChangeStatusResponse {
  export interface Result {
    id: string;
    source: 'user' | 'schedule';
    description?: string;
    end_reason?: string;
    ended_at?: string;
    last_seen_at?: string;
    started_at?: string;
  }
}

export interface AISearchInstancesJobListLogsParams {
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
   * Query param
   * @default 1
   * @minimum 1
   */
  page?: number;
  /**
   * Query param
   * @default 20
   * @minimum 0
   * @maximum 500
   */
  per_page?: number;
}

export interface AISearchInstancesJobListLogsResponse {
  result: Array<AISearchInstancesJobListLogsResponse.Result>;
  result_info: AISearchInstancesJobListLogsResponse.ResultInfo;
  success: boolean;
}

export namespace AISearchInstancesJobListLogsResponse {
  export interface Result {
    created_at: number;
    id: number;
    message: string;
    message_type: number;
  }

  export interface ResultInfo {
    count: number;
    page: number;
    per_page: number;
    total_count: number;
  }
}

export interface AISearchInstancesJobNamespaceListParams {
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
}

export interface AISearchInstancesJobNamespaceListResponse {
  result: Array<AISearchInstancesJobNamespaceListResponse.Result>;
  result_info: AISearchInstancesJobNamespaceListResponse.ResultInfo;
  success: boolean;
}

export namespace AISearchInstancesJobNamespaceListResponse {
  export interface Result {
    id: string;
    source: 'user' | 'schedule';
    description?: string;
    end_reason?: string;
    ended_at?: string;
    last_seen_at?: string;
    started_at?: string;
  }

  export interface ResultInfo {
    count: number;
    page: number;
    per_page: number;
    total_count: number;
  }
}

export interface AISearchInstancesJobNamespaceCreateParams {
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
   * @maxLength 255
   */
  description?: string;
}

export interface AISearchInstancesJobNamespaceCreateResponse {
  result: AISearchInstancesJobNamespaceCreateResponse.Result;
  success: boolean;
}

export namespace AISearchInstancesJobNamespaceCreateResponse {
  export interface Result {
    id: string;
    source: 'user' | 'schedule';
    description?: string;
    end_reason?: string;
    ended_at?: string;
    last_seen_at?: string;
    started_at?: string;
  }
}

export interface AISearchInstancesJobNamespaceGetParams {
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

export interface AISearchInstancesJobNamespaceGetResponse {
  result: AISearchInstancesJobNamespaceGetResponse.Result;
  success: boolean;
}

export namespace AISearchInstancesJobNamespaceGetResponse {
  export interface Result {
    id: string;
    source: 'user' | 'schedule';
    description?: string;
    end_reason?: string;
    ended_at?: string;
    last_seen_at?: string;
    started_at?: string;
  }
}

export interface AISearchInstancesJobNamespaceChangeStatusParams {
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
  action: 'cancel';
}

export interface AISearchInstancesJobNamespaceChangeStatusResponse {
  result: AISearchInstancesJobNamespaceChangeStatusResponse.Result;
  success: boolean;
}

export namespace AISearchInstancesJobNamespaceChangeStatusResponse {
  export interface Result {
    id: string;
    source: 'user' | 'schedule';
    description?: string;
    end_reason?: string;
    ended_at?: string;
    last_seen_at?: string;
    started_at?: string;
  }
}

export interface AISearchInstancesJobNamespaceListLogsParams {
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
   * @default 1
   * @minimum 1
   */
  page?: number;
  /**
   * Query param
   * @default 20
   * @minimum 0
   * @maximum 500
   */
  per_page?: number;
}

export interface AISearchInstancesJobNamespaceListLogsResponse {
  result: Array<AISearchInstancesJobNamespaceListLogsResponse.Result>;
  result_info: AISearchInstancesJobNamespaceListLogsResponse.ResultInfo;
  success: boolean;
}

export namespace AISearchInstancesJobNamespaceListLogsResponse {
  export interface Result {
    created_at: number;
    id: number;
    message: string;
    message_type: number;
  }

  export interface ResultInfo {
    count: number;
    page: number;
    per_page: number;
    total_count: number;
  }
}
export declare namespace AISearchInstancesJobs {
  export {
    type AISearchInstancesJobListResponse as AISearchInstancesJobListResponse,
    type AISearchInstancesJobCreateResponse as AISearchInstancesJobCreateResponse,
    type AISearchInstancesJobRetrieveResponse as AISearchInstancesJobRetrieveResponse,
    type AISearchInstancesJobChangeStatusResponse as AISearchInstancesJobChangeStatusResponse,
    type AISearchInstancesJobListLogsResponse as AISearchInstancesJobListLogsResponse,
    type AISearchInstancesJobNamespaceListResponse as AISearchInstancesJobNamespaceListResponse,
    type AISearchInstancesJobNamespaceCreateResponse as AISearchInstancesJobNamespaceCreateResponse,
    type AISearchInstancesJobNamespaceGetResponse as AISearchInstancesJobNamespaceGetResponse,
    type AISearchInstancesJobNamespaceChangeStatusResponse as AISearchInstancesJobNamespaceChangeStatusResponse,
    type AISearchInstancesJobNamespaceListLogsResponse as AISearchInstancesJobNamespaceListLogsResponse,
    type AISearchInstancesJobListParams as AISearchInstancesJobListParams,
    type AISearchInstancesJobCreateParams as AISearchInstancesJobCreateParams,
    type AISearchInstancesJobRetrieveParams as AISearchInstancesJobRetrieveParams,
    type AISearchInstancesJobChangeStatusParams as AISearchInstancesJobChangeStatusParams,
    type AISearchInstancesJobListLogsParams as AISearchInstancesJobListLogsParams,
    type AISearchInstancesJobNamespaceListParams as AISearchInstancesJobNamespaceListParams,
    type AISearchInstancesJobNamespaceCreateParams as AISearchInstancesJobNamespaceCreateParams,
    type AISearchInstancesJobNamespaceGetParams as AISearchInstancesJobNamespaceGetParams,
    type AISearchInstancesJobNamespaceChangeStatusParams as AISearchInstancesJobNamespaceChangeStatusParams,
    type AISearchInstancesJobNamespaceListLogsParams as AISearchInstancesJobNamespaceListLogsParams,
  };
}
