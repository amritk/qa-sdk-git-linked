// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from '../resource';
import { APIPromise } from '../api-promise';
import type { RequestOptions } from '../internal/request-options';
import { buildHeaders } from '../internal/headers';
import { path as __scalarPath } from '../internal/utils/path';

export class BuildTokens extends APIResource {
  /**
   * List metadata for build tokens available to the current user without returning their secrets.
   *
   * @param {string} accountID
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<BuildTokenListResponse>} Build tokens retrieved successfully
   *
   * @example
   * ```ts
   * const buildToken = await client.buildTokens.list('accountId');
   * ```
   */
  list(accountID: string, options?: RequestOptions): APIPromise<BuildTokenListResponse> {
    return this._client.get(__scalarPath`/accounts/${accountID}/builds/tokens`, options);
  }

  /**
   * Create a new build authentication token
   *
   * @param {string} accountID
   * @param {BuildTokenCreateParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<BuildTokenCreateResponse>} Build token created successfully
   *
   * @example
   * ```ts
   * const buildToken = await client.buildTokens.create('accountId', {});
   * ```
   */
  create(
    accountID: string,
    body: BuildTokenCreateParams,
    options?: RequestOptions,
  ): APIPromise<BuildTokenCreateResponse> {
    return this._client.post(__scalarPath`/accounts/${accountID}/builds/tokens`, { body, ...options });
  }

  /**
   * Delete a stored build token owned by the current user.
   *
   * @param {string} buildTokenUUID
   * @param {BuildTokenDeleteParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   *
   * @example
   * ```ts
   * await client.buildTokens.delete('buildTokenUuid', {
   *   account_id: 'accountId',
   * });
   * ```
   */
  delete(buildTokenUUID: string, params: BuildTokenDeleteParams, options?: RequestOptions): APIPromise<void> {
    const { account_id } = params;
    return this._client.delete(__scalarPath`/accounts/${account_id}/builds/tokens/${buildTokenUUID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export type BuildTokenListResponse = unknown & BuildTokenListResponse.BuildTokenListResponseItem;

export namespace BuildTokenListResponse {
  export interface BuildTokenListResponseItem {
    result?: Array<unknown>;
    result_info?: unknown;
  }
}

export type BuildTokenCreateParams = unknown;

export type BuildTokenCreateResponse = unknown & BuildTokenCreateResponse.BuildTokenCreateResponseItem;

export namespace BuildTokenCreateResponse {
  export interface BuildTokenCreateResponseItem {
    result?: unknown;
  }
}

export interface BuildTokenDeleteParams {
  account_id: string;
}
export declare namespace BuildTokens {
  export {
    type BuildTokenListResponse as BuildTokenListResponse,
    type BuildTokenCreateResponse as BuildTokenCreateResponse,
    type BuildTokenCreateParams as BuildTokenCreateParams,
    type BuildTokenDeleteParams as BuildTokenDeleteParams,
  };
}
