// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from '../resource';
import { APIPromise } from '../api-promise';
import type { RequestOptions } from '../internal/request-options';
import { path as __scalarPath } from '../internal/utils/path';

export class AccessTags extends APIResource {
  /**
   * List tags
   *
   * @param {string} accountID
   * @param {AccessTagListParams} [query] - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<unknown>} List tags response
   *
   * @example
   * ```ts
   * const response = await client.accessTags.list('accountId', {
   *   per_page: 50,
   * });
   * ```
   */
  list(
    accountID: string,
    query: AccessTagListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<unknown> {
    return this._client.get(__scalarPath`/accounts/${accountID}/access/tags`, { query, ...options });
  }

  /**
   * Create a tag
   *
   * @param {string} accountID
   * @param {AccessTagCreateParams} [body] - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<unknown>} Create a tag response
   *
   * @example
   * ```ts
   * const response = await client.accessTags.create('accountId');
   * ```
   */
  create(
    accountID: string,
    body: AccessTagCreateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<unknown> {
    return this._client.post(__scalarPath`/accounts/${accountID}/access/tags`, { body, ...options });
  }

  /**
   * Delete a tag
   *
   * @param {string} tagName
   * @param {AccessTagDeleteAParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<unknown>} Delete a tag response
   *
   * @example
   * ```ts
   * const response = await client.accessTags.deleteA('tagName', {
   *   account_id: {},
   * });
   * ```
   */
  deleteA(tagName: string, params: AccessTagDeleteAParams, options?: RequestOptions): APIPromise<unknown> {
    const { account_id } = params;
    return this._client.delete(__scalarPath`/accounts/${account_id}/access/tags/${tagName}`, options);
  }

  /**
   * Get a tag
   *
   * @param {string} tagName
   * @param {AccessTagRetrieveAParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<unknown>} Get a tag response
   *
   * @example
   * ```ts
   * const response = await client.accessTags.retrieveA('tagName', {
   *   account_id: {},
   * });
   * ```
   */
  retrieveA(
    tagName: string,
    params: AccessTagRetrieveAParams,
    options?: RequestOptions,
  ): APIPromise<unknown> {
    const { account_id } = params;
    return this._client.get(__scalarPath`/accounts/${account_id}/access/tags/${tagName}`, options);
  }

  /**
   * Update a tag
   *
   * @param {string} tagName
   * @param {AccessTagUpdateAParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<unknown>} Update a tag response
   *
   * @example
   * ```ts
   * const response = await client.accessTags.updateA('tagName', {
   *   account_id: {},
   * });
   * ```
   */
  updateA(tagName: string, params: AccessTagUpdateAParams, options?: RequestOptions): APIPromise<unknown> {
    const { account_id, body } = params;
    return this._client.put(__scalarPath`/accounts/${account_id}/access/tags/${tagName}`, {
      body,
      ...options,
    });
  }
}

export interface AccessTagListParams {
  /**
   * Number of results per page.
   * @default 50
   * @maximum 1000
   */
  per_page?: number;
}

export interface AccessTagCreateParams {
  name?: unknown;
}

export interface AccessTagDeleteAParams {
  account_id: string;
}

export interface AccessTagRetrieveAParams {
  account_id: string;
}

export interface AccessTagUpdateAParams {
  /**
   * Path param
   */
  account_id: string;
  /**
   * Body param
   */
  body?: unknown;
}
export declare namespace AccessTags {
  export {
    type AccessTagListParams as AccessTagListParams,
    type AccessTagCreateParams as AccessTagCreateParams,
    type AccessTagDeleteAParams as AccessTagDeleteAParams,
    type AccessTagRetrieveAParams as AccessTagRetrieveAParams,
    type AccessTagUpdateAParams as AccessTagUpdateAParams,
  };
}
