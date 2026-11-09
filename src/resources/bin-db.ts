// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from '../resource';
import { APIPromise } from '../api-promise';
import type { RequestOptions } from '../internal/request-options';
import { buildHeaders } from '../internal/headers';
import { multipartFormRequestOptions } from '../internal/uploads';
import { path as __scalarPath } from '../internal/utils/path';
import type { Uploadable } from '../core/uploads';

export class BinDB extends APIResource {
  /**
   * Uploads a binary file to Cloudforce One's binary database for malware analysis and threat intelligence correlation.
   *
   * @param {string} accountID - Account ID.
   * @param {BinDBPostPostParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<BinDBPostPostResponse>} Returns file information
   *
   * @example
   * ```ts
   * const binDB = await client.binDB.postPost('accountId', {
   *   file: new File(['file'], 'file'),
   * });
   * ```
   */
  postPost(
    accountID: string,
    body: BinDBPostPostParams,
    options?: RequestOptions,
  ): APIPromise<BinDBPostPostResponse> {
    return this._client.post(
      __scalarPath`/accounts/${accountID}/cloudforce-one/binary`,
      multipartFormRequestOptions({ body, ...options }, this._client),
    );
  }

  /**
   * Retrieves a binary file from the Cloudforce One binary storage for analysis.
   *
   * @param {string} hash - hash of the binary
   * @param {BinDBRetrieveGetBinaryParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns Returns file information
   *
   * @example
   * ```ts
   * await client.binDB.retrieveGetBinary('hash', {
   *   account_id: 'accountId',
   * });
   * ```
   */
  retrieveGetBinary(
    hash: string,
    params: BinDBRetrieveGetBinaryParams,
    options?: RequestOptions,
  ): APIPromise<void> {
    const { account_id } = params;
    return this._client.get(__scalarPath`/accounts/${account_id}/cloudforce-one/binary/${hash}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface BinDBPostPostParams {
  /**
   * The binary file content to upload.
   */
  file: Uploadable;
}

export interface BinDBPostPostResponse {
  content_type: string;
  md5: string;
  sha1: string;
  sha256: string;
}

export interface BinDBRetrieveGetBinaryParams {
  /**
   * Account ID.
   */
  account_id: string;
}
export declare namespace BinDB {
  export {
    type BinDBPostPostResponse as BinDBPostPostResponse,
    type BinDBPostPostParams as BinDBPostPostParams,
    type BinDBRetrieveGetBinaryParams as BinDBRetrieveGetBinaryParams,
  };
}
