// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from '../resource';
import { APIPromise } from '../api-promise';
import type { RequestOptions } from '../internal/request-options';
import { path as __scalarPath } from '../internal/utils/path';

export class AutoRagRag extends APIResource {
  /**
   * Lists files indexed by an AutoRAG.
   *
   * @param {string} id - rag id
   * @param {AutoRagRagAutoragConfigFilesParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<AutoRagRagAutoragConfigFilesResponse>} Returns the AI Search files
   *
   * @example
   * ```ts
   * const autoRagRag = await client.autoRagRag.autoragConfigFiles('my-rag', {
   *   account_id: 'c3dc5f0b34a14ff8e1b3ec04895e1b22',
   *   page: 1,
   *   per_page: 20,
   * });
   * ```
   */
  autoragConfigFiles(
    id: string,
    params: AutoRagRagAutoragConfigFilesParams,
    options?: RequestOptions,
  ): APIPromise<AutoRagRagAutoragConfigFilesResponse> {
    const { account_id, ...query } = params;
    return this._client.get(__scalarPath`/accounts/${account_id}/autorag/rags/${id}/files`, {
      query,
      ...options,
    });
  }

  /**
   * Starts synchronization for an AutoRAG.
   *
   * @param {string} id - rag id
   * @param {AutoRagRagAutoragConfigSyncParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<AutoRagRagAutoragConfigSyncResponse>} Returns the autorag sync status
   *
   * @example
   * ```ts
   * const autoRagRag = await client.autoRagRag.autoragConfigSync('my-rag', {
   *   account_id: 'c3dc5f0b34a14ff8e1b3ec04895e1b22',
   * });
   * ```
   */
  autoragConfigSync(
    id: string,
    params: AutoRagRagAutoragConfigSyncParams,
    options?: RequestOptions,
  ): APIPromise<AutoRagRagAutoragConfigSyncResponse> {
    const { account_id } = params;
    return this._client.patch(__scalarPath`/accounts/${account_id}/autorag/rags/${id}/sync`, options);
  }
}

export interface AutoRagRagAutoragConfigFilesParams {
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
  /**
   * Query param
   */
  search?: string;
  /**
   * Query param
   */
  status?: 'completed' | 'queued' | 'running' | 'error';
}

export interface AutoRagRagAutoragConfigFilesResponse {
  result: Array<AutoRagRagAutoragConfigFilesResponse.Result>;
  result_info: AutoRagRagAutoragConfigFilesResponse.ResultInfo;
  success: boolean;
}

export namespace AutoRagRagAutoragConfigFilesResponse {
  export interface Result {
    error: string;
    key: string;
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

export interface AutoRagRagAutoragConfigSyncParams {
  account_id: string;
}

export interface AutoRagRagAutoragConfigSyncResponse {
  result: AutoRagRagAutoragConfigSyncResponse.Result;
  success: boolean;
}

export namespace AutoRagRagAutoragConfigSyncResponse {
  export interface Result {
    job_id: string;
  }
}
export declare namespace AutoRagRag {
  export {
    type AutoRagRagAutoragConfigFilesResponse as AutoRagRagAutoragConfigFilesResponse,
    type AutoRagRagAutoragConfigSyncResponse as AutoRagRagAutoragConfigSyncResponse,
    type AutoRagRagAutoragConfigFilesParams as AutoRagRagAutoragConfigFilesParams,
    type AutoRagRagAutoragConfigSyncParams as AutoRagRagAutoragConfigSyncParams,
  };
}
