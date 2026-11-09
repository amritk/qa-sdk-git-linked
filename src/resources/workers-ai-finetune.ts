// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from '../resource';
import { APIPromise } from '../api-promise';
import type { RequestOptions } from '../internal/request-options';
import { multipartFormRequestOptions } from '../internal/uploads';
import { path as __scalarPath } from '../internal/utils/path';
import type { Uploadable } from '../core/uploads';

export class WorkersAIFinetune extends APIResource {
  /**
   * Lists all fine-tuning jobs created by the account, including status and metrics.
   *
   * @param {string} accountID
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<WorkersAIFinetuneListResponse>} Returns all finetunes.
   *
   * @example
   * ```ts
   * const workersAIFinetune = await client.workersAIFinetune.list('023e105f4ecef8ad9ca31a8372d0c353');
   * ```
   */
  list(accountID: string, options?: RequestOptions): APIPromise<WorkersAIFinetuneListResponse> {
    return this._client.get(__scalarPath`/accounts/${accountID}/ai/finetunes`, options);
  }

  /**
   * Creates a new fine-tuning job for a Workers AI model using custom training data.
   *
   * @param {string} accountID
   * @param {WorkersAIFinetuneCreateParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<WorkersAIFinetuneCreateResponse>} Returns the created finetune.
   *
   * @example
   * ```ts
   * const workersAIFinetune = await client.workersAIFinetune.create('023e105f4ecef8ad9ca31a8372d0c353', {
   *   model: '',
   *   name: '',
   *   public: false,
   * });
   * ```
   */
  create(
    accountID: string,
    body: WorkersAIFinetuneCreateParams,
    options?: RequestOptions,
  ): APIPromise<WorkersAIFinetuneCreateResponse> {
    return this._client.post(__scalarPath`/accounts/${accountID}/ai/finetunes`, { body, ...options });
  }

  /**
   * Lists publicly available fine-tuned models that can be used with Workers AI.
   *
   * @param {string} accountID
   * @param {WorkersAIFinetuneListPublicParams} [query] - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<WorkersAIFinetuneListPublicResponse>} Returns all public finetunes.
   *
   * @example
   * ```ts
   * const workersAIFinetune = await client.workersAIFinetune.listPublic('023e105f4ecef8ad9ca31a8372d0c353', {
   *   limit: 20,
   *   offset: 0,
   * });
   * ```
   */
  listPublic(
    accountID: string,
    query: WorkersAIFinetuneListPublicParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<WorkersAIFinetuneListPublicResponse> {
    return this._client.get(__scalarPath`/accounts/${accountID}/ai/finetunes/public`, { query, ...options });
  }

  /**
   * Delete a finetune. Any in-flight requests referencing the lora will fail after the files are deleted.
   *
   * @param {string} finetuneID
   * @param {WorkersAIFinetuneDeleteParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<WorkersAIFinetuneDeleteResponse>} Finetune deleted successfully.
   *
   * @example
   * ```ts
   * const workersAIFinetune = await client.workersAIFinetune.delete('bc451aef-f723-4b26-a6b2-901afd2e7a8a', {
   *   account_id: '023e105f4ecef8ad9ca31a8372d0c353',
   * });
   * ```
   */
  delete(
    finetuneID: string,
    params: WorkersAIFinetuneDeleteParams,
    options?: RequestOptions,
  ): APIPromise<WorkersAIFinetuneDeleteResponse> {
    const { account_id } = params;
    return this._client.delete(__scalarPath`/accounts/${account_id}/ai/finetunes/${finetuneID}`, options);
  }

  /**
   * Uploads training data assets for a Workers AI fine-tuning job.
   *
   * @param {string} finetuneID
   * @param {WorkersAIFinetuneUploadAssetParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<WorkersAIFinetuneUploadAssetResponse>} Returns successfully if finetunes were uploaded.
   *
   * @example
   * ```ts
   * const workersAIFinetune = await client.workersAIFinetune.uploadAsset('bc451aef-f723-4b26-a6b2-901afd2e7a8a', {
   *   account_id: '023e105f4ecef8ad9ca31a8372d0c353',
   *   file: new File(['file'], 'file'),
   *   file_name: '',
   * });
   * ```
   */
  uploadAsset(
    finetuneID: string,
    params: WorkersAIFinetuneUploadAssetParams,
    options?: RequestOptions,
  ): APIPromise<WorkersAIFinetuneUploadAssetResponse> {
    const { account_id, ...body } = params;
    return this._client.post(
      __scalarPath`/accounts/${account_id}/ai/finetunes/${finetuneID}/finetune-assets`,
      multipartFormRequestOptions({ body, ...options }, this._client),
    );
  }
}

export interface WorkersAIFinetuneListResponse {
  result: WorkersAIFinetuneListResponse.Result;
  success: boolean;
}

export namespace WorkersAIFinetuneListResponse {
  export interface Result {
    /**
     * @format date-time
     */
    created_at: string;
    /**
     * @format uuid
     */
    id: string;
    model: string;
    /**
     * @format date-time
     */
    modified_at: string;
    name: string;
    description?: string;
  }
}

export interface WorkersAIFinetuneCreateParams {
  model: string;
  name: string;
  description?: string;
  /**
   * @default false
   */
  public?: boolean;
}

export interface WorkersAIFinetuneCreateResponse {
  result: WorkersAIFinetuneCreateResponse.Result;
  success: boolean;
}

export namespace WorkersAIFinetuneCreateResponse {
  export interface Result {
    /**
     * @format date-time
     */
    created_at: string;
    /**
     * @format uuid
     */
    id: string;
    model: string;
    /**
     * @format date-time
     */
    modified_at: string;
    name: string;
    public: boolean;
    description?: string;
  }
}

export interface WorkersAIFinetuneListPublicParams {
  /**
   * Pagination Limit.
   * @default 20
   */
  limit?: number;
  /**
   * Pagination Offset.
   * @default 0
   */
  offset?: number;
  /**
   * Order By Column Name.
   */
  orderBy?: string;
}

export interface WorkersAIFinetuneListPublicResponse {
  result: Array<WorkersAIFinetuneListPublicResponse.Result>;
  success: boolean;
}

export namespace WorkersAIFinetuneListPublicResponse {
  export interface Result {
    /**
     * @format date-time
     */
    created_at: string;
    /**
     * @format uuid
     */
    id: string;
    model: string;
    /**
     * @format date-time
     */
    modified_at: string;
    name: string;
    public: boolean;
    description?: string;
  }
}

export interface WorkersAIFinetuneDeleteParams {
  account_id: string;
}

export interface WorkersAIFinetuneDeleteResponse {
  result: WorkersAIFinetuneDeleteResponse.Result;
  success: boolean;
}

export namespace WorkersAIFinetuneDeleteResponse {
  export interface Result {
    /**
     * @format uuid
     */
    id: string;
    name: string;
  }
}

export interface WorkersAIFinetuneUploadAssetParams {
  /**
   * Path param
   */
  account_id: string;
  /**
   * Body param: File to upload.
   */
  file: Uploadable;
  /**
   * Body param: Name of the file (adapter_config.json or adapter_model.safetensors).
   */
  file_name: string;
}

export interface WorkersAIFinetuneUploadAssetResponse {
  success: boolean;
}
export declare namespace WorkersAIFinetune {
  export {
    type WorkersAIFinetuneListResponse as WorkersAIFinetuneListResponse,
    type WorkersAIFinetuneCreateResponse as WorkersAIFinetuneCreateResponse,
    type WorkersAIFinetuneListPublicResponse as WorkersAIFinetuneListPublicResponse,
    type WorkersAIFinetuneDeleteResponse as WorkersAIFinetuneDeleteResponse,
    type WorkersAIFinetuneUploadAssetResponse as WorkersAIFinetuneUploadAssetResponse,
    type WorkersAIFinetuneCreateParams as WorkersAIFinetuneCreateParams,
    type WorkersAIFinetuneListPublicParams as WorkersAIFinetuneListPublicParams,
    type WorkersAIFinetuneDeleteParams as WorkersAIFinetuneDeleteParams,
    type WorkersAIFinetuneUploadAssetParams as WorkersAIFinetuneUploadAssetParams,
  };
}
