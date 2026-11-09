// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from '../resource';
import { APIPromise } from '../api-promise';
import type { RequestOptions } from '../internal/request-options';
import { path as __scalarPath } from '../internal/utils/path';

export class AutoRagJobs extends APIResource {
  /**
   * Lists jobs for an AutoRAG.
   *
   * @param {string} id - rag id
   * @param {AutoRagJobAutoragConfigListParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<AutoRagJobAutoragConfigListResponse>} Returns a list of AutoRAG Jobs
   *
   * @example
   * ```ts
   * const autoRagJob = await client.autoRagJobs.autoragConfigList('my-rag', {
   *   account_id: 'c3dc5f0b34a14ff8e1b3ec04895e1b22',
   *   page: 1,
   *   per_page: 20,
   * });
   * ```
   */
  autoragConfigList(
    id: string,
    params: AutoRagJobAutoragConfigListParams,
    options?: RequestOptions,
  ): APIPromise<AutoRagJobAutoragConfigListResponse> {
    const { account_id, ...query } = params;
    return this._client.get(__scalarPath`/accounts/${account_id}/autorag/rags/${id}/jobs`, {
      query,
      ...options,
    });
  }

  /**
   * Returns details for an AutoRAG job.
   *
   * @param {string} jobID
   * @param {AutoRagJobAutoragConfigGetParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<AutoRagJobAutoragConfigGetResponse>} Returns a AutoRAG Job Details
   *
   * @example
   * ```ts
   * const autoRagJob = await client.autoRagJobs.autoragConfigGet('jobId', {
   *   id: 'my-rag',
   *   account_id: 'c3dc5f0b34a14ff8e1b3ec04895e1b22',
   * });
   * ```
   */
  autoragConfigGet(
    jobID: string,
    params: AutoRagJobAutoragConfigGetParams,
    options?: RequestOptions,
  ): APIPromise<AutoRagJobAutoragConfigGetResponse> {
    const { id, account_id } = params;
    return this._client.get(__scalarPath`/accounts/${account_id}/autorag/rags/${id}/jobs/${jobID}`, options);
  }

  /**
   * Lists logs for an AutoRAG job.
   *
   * @param {string} jobID
   * @param {AutoRagJobAutoragConfigListLogsParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<AutoRagJobAutoragConfigListLogsResponse>} Returns a list of AutoRAG Job Logs
   *
   * @example
   * ```ts
   * const autoRagJob = await client.autoRagJobs.autoragConfigListLogs('jobId', {
   *   id: 'my-rag',
   *   account_id: 'c3dc5f0b34a14ff8e1b3ec04895e1b22',
   *   page: 1,
   *   per_page: 20,
   * });
   * ```
   */
  autoragConfigListLogs(
    jobID: string,
    params: AutoRagJobAutoragConfigListLogsParams,
    options?: RequestOptions,
  ): APIPromise<AutoRagJobAutoragConfigListLogsResponse> {
    const { id, account_id, ...query } = params;
    return this._client.get(__scalarPath`/accounts/${account_id}/autorag/rags/${id}/jobs/${jobID}/logs`, {
      query,
      ...options,
    });
  }
}

export interface AutoRagJobAutoragConfigListParams {
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

export interface AutoRagJobAutoragConfigListResponse {
  result: Array<AutoRagJobAutoragConfigListResponse.Result>;
  result_info: AutoRagJobAutoragConfigListResponse.ResultInfo;
  success: boolean;
}

export namespace AutoRagJobAutoragConfigListResponse {
  export interface Result {
    id: string;
    source: 'user' | 'schedule';
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

export interface AutoRagJobAutoragConfigGetParams {
  /**
   * rag id
   * @minLength 1
   * @maxLength 32
   * @pattern ^[a-z0-9_]+(?:-[a-z0-9_]+)*$
   */
  id: string;
  account_id: string;
}

export interface AutoRagJobAutoragConfigGetResponse {
  result: AutoRagJobAutoragConfigGetResponse.Result;
  success: boolean;
}

export namespace AutoRagJobAutoragConfigGetResponse {
  export interface Result {
    id: string;
    source: 'user' | 'schedule';
    end_reason?: string;
    ended_at?: string;
    last_seen_at?: string;
    started_at?: string;
  }
}

export interface AutoRagJobAutoragConfigListLogsParams {
  /**
   * Path param: rag id
   * @minLength 1
   * @maxLength 32
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

export interface AutoRagJobAutoragConfigListLogsResponse {
  result: Array<AutoRagJobAutoragConfigListLogsResponse.Result>;
  result_info: AutoRagJobAutoragConfigListLogsResponse.ResultInfo;
  success: boolean;
}

export namespace AutoRagJobAutoragConfigListLogsResponse {
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
export declare namespace AutoRagJobs {
  export {
    type AutoRagJobAutoragConfigListResponse as AutoRagJobAutoragConfigListResponse,
    type AutoRagJobAutoragConfigGetResponse as AutoRagJobAutoragConfigGetResponse,
    type AutoRagJobAutoragConfigListLogsResponse as AutoRagJobAutoragConfigListLogsResponse,
    type AutoRagJobAutoragConfigListParams as AutoRagJobAutoragConfigListParams,
    type AutoRagJobAutoragConfigGetParams as AutoRagJobAutoragConfigGetParams,
    type AutoRagJobAutoragConfigListLogsParams as AutoRagJobAutoragConfigListLogsParams,
  };
}
