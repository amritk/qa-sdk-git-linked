// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from '../resource';
import { APIPromise } from '../api-promise';
import type { RequestOptions } from '../internal/request-options';
import { path as __scalarPath } from '../internal/utils/path';

export class BrowserExtensionConfig extends APIResource {
  /**
   * Deletes the browser extension configuration for an account.
   * The shard mapping is preserved and not deleted.
   *
   *
   * @param {string} accountID
   * @param {BrowserExtensionConfigAccountsDeleteParams} [params] - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<unknown>} Browser extension configuration deleted.
   *
   * @example
   * ```ts
   * const response = await client.browserExtensionConfig.accountsDelete('accountId');
   * ```
   */
  accountsDelete(
    accountID: string,
    params: BrowserExtensionConfigAccountsDeleteParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<unknown> {
    const { '': value } = params ?? {};
    return this._client.delete(__scalarPath`/accounts/${accountID}/browser-extension/config`, {
      query: { '': value },
      ...options,
    });
  }

  /**
   * Returns the browser extension configuration for an account.
   *
   *
   * @param {string} accountID
   * @param {BrowserExtensionConfigAccountsGetParams} [query] - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<unknown>} Browser extension configuration response.
   *
   * @example
   * ```ts
   * const response = await client.browserExtensionConfig.accountsGet('accountId');
   * ```
   */
  accountsGet(
    accountID: string,
    query: BrowserExtensionConfigAccountsGetParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<unknown> {
    return this._client.get(__scalarPath`/accounts/${accountID}/browser-extension/config`, {
      query,
      ...options,
    });
  }

  /**
   * Creates the browser extension configuration for an account.
   *
   *
   * @param {string} accountID
   * @param {BrowserExtensionConfigAccountsPostParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<unknown>} Browser extension configuration created.
   *
   * @example
   * ```ts
   * const response = await client.browserExtensionConfig.accountsPost('accountId', {
   *   body: {},
   * });
   * ```
   */
  accountsPost(
    accountID: string,
    params: BrowserExtensionConfigAccountsPostParams,
    options?: RequestOptions,
  ): APIPromise<unknown> {
    const { '': value, body } = params;
    return this._client.post(__scalarPath`/accounts/${accountID}/browser-extension/config`, {
      body,
      query: { '': value },
      ...options,
    });
  }

  /**
   * Replaces the browser extension configuration for an account.
   * The configuration must already exist. The shard mapping is immutable.
   *
   *
   * @param {string} accountID
   * @param {BrowserExtensionConfigAccountsPutParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<unknown>} Browser extension configuration updated.
   *
   * @example
   * ```ts
   * const response = await client.browserExtensionConfig.accountsPut('accountId', {
   *   body: {},
   * });
   * ```
   */
  accountsPut(
    accountID: string,
    params: BrowserExtensionConfigAccountsPutParams,
    options?: RequestOptions,
  ): APIPromise<unknown> {
    const { '': value, body } = params;
    return this._client.put(__scalarPath`/accounts/${accountID}/browser-extension/config`, {
      body,
      query: { '': value },
      ...options,
    });
  }
}

export interface BrowserExtensionConfigAccountsDeleteParams {
  ''?: string;
}

export interface BrowserExtensionConfigAccountsGetParams {
  ''?: string;
}

export interface BrowserExtensionConfigAccountsPostParams {
  /**
   * Query param
   */
  ''?: string;
  /**
   * Body param
   */
  body: unknown;
}

export interface BrowserExtensionConfigAccountsPutParams {
  /**
   * Query param
   */
  ''?: string;
  /**
   * Body param
   */
  body: unknown;
}
export declare namespace BrowserExtensionConfig {
  export {
    type BrowserExtensionConfigAccountsDeleteParams as BrowserExtensionConfigAccountsDeleteParams,
    type BrowserExtensionConfigAccountsGetParams as BrowserExtensionConfigAccountsGetParams,
    type BrowserExtensionConfigAccountsPostParams as BrowserExtensionConfigAccountsPostParams,
    type BrowserExtensionConfigAccountsPutParams as BrowserExtensionConfigAccountsPutParams,
  };
}
