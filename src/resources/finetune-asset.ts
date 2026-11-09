// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from '../resource';
import { APIPromise } from '../api-promise';
import type { RequestOptions } from '../internal/request-options';
import { path as __scalarPath } from '../internal/utils/path';

export class FinetuneAsset extends APIResource {
  /**
   * Returns a pre-signed R2 URL for downloading a finetune asset file.
   *
   * @param {string} fileName
   * @param {FinetuneAssetWorkersAIDownloadParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<FinetuneAssetWorkersAIDownloadResponse>} Pre-signed download URL.
   *
   * @example
   * ```ts
   * const finetuneAsset = await client.finetuneAsset.workersAIDownload('adapter_model.safetensors', {
   *   account_id: '023e105f4ecef8ad9ca31a8372d0c353',
   *   finetune_id: 'bc451aef-f723-4b26-a6b2-901afd2e7a8a',
   * });
   * ```
   */
  workersAIDownload(
    fileName: string,
    params: FinetuneAssetWorkersAIDownloadParams,
    options?: RequestOptions,
  ): APIPromise<FinetuneAssetWorkersAIDownloadResponse> {
    const { account_id, finetune_id } = params;
    return this._client.get(
      __scalarPath`/accounts/${account_id}/ai/finetunes/${finetune_id}/finetune-assets/${fileName}`,
      options,
    );
  }
}

export interface FinetuneAssetWorkersAIDownloadParams {
  account_id: string;
  finetune_id: string;
}

export interface FinetuneAssetWorkersAIDownloadResponse {
  result: FinetuneAssetWorkersAIDownloadResponse.Result;
  success: boolean;
}

export namespace FinetuneAssetWorkersAIDownloadResponse {
  export interface Result {
    file_name: string;
    file_url: string;
  }
}
export declare namespace FinetuneAsset {
  export {
    type FinetuneAssetWorkersAIDownloadResponse as FinetuneAssetWorkersAIDownloadResponse,
    type FinetuneAssetWorkersAIDownloadParams as FinetuneAssetWorkersAIDownloadParams,
  };
}
