// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from '../resource';
import { APIPromise } from '../api-promise';
import type { RequestOptions } from '../internal/request-options';
import { path as __scalarPath } from '../internal/utils/path';

export class Scans extends APIResource {
  /**
   * Retrieves the latest banner grab results for a Cloudforce One scan configuration, including service banners from open ports.
   *
   * @param {string} configID - Defines the Config ID.
   * @param {ScanRetrieveGetBannersParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<ScanRetrieveGetBannersResponse>} Returns Current Banner Grab Result.
   *
   * @example
   * ```ts
   * const scan = await client.scans.retrieveGetBanners('configId', {
   *   account_id: 'accountId',
   * });
   * ```
   */
  retrieveGetBanners(
    configID: string,
    params: ScanRetrieveGetBannersParams,
    options?: RequestOptions,
  ): APIPromise<ScanRetrieveGetBannersResponse> {
    const { account_id } = params;
    return this._client.get(__scalarPath`/accounts/${account_id}/cloudforce-one/banner/${configID}`, options);
  }
}

export interface ScanRetrieveGetBannersParams {
  /**
   * Defines the Account ID.
   */
  account_id: string;
}

export interface ScanRetrieveGetBannersResponse {
  errors: Array<string>;
  messages: Array<string>;
  result: ScanRetrieveGetBannersResponse.Result;
  success: boolean;
}

export namespace ScanRetrieveGetBannersResponse {
  export interface Result {
    '1.1.1.1': Array<unknown>;
  }
}
export declare namespace Scans {
  export {
    type ScanRetrieveGetBannersResponse as ScanRetrieveGetBannersResponse,
    type ScanRetrieveGetBannersParams as ScanRetrieveGetBannersParams,
  };
}
