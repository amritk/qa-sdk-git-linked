// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from '../resource';
import { APIPromise } from '../api-promise';
import type { RequestOptions } from '../internal/request-options';
import { buildHeaders } from '../internal/headers';
import { path as __scalarPath } from '../internal/utils/path';

export class CustomAssetsForAnAccount extends APIResource {
  /**
   * Fetches all the custom assets at the account level.
   *
   * @param {string} accountIdentifier
   * @param {CustomAssetsForAnAccountListParams} [query] - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<unknown>} List custom assets response
   *
   * @example
   * ```ts
   * const response = await client.customAssetsForAnAccount.list('accountIdentifier', {
   *   page: 1,
   *   per_page: 20,
   * });
   * ```
   */
  list(
    accountIdentifier: string,
    query: CustomAssetsForAnAccountListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<unknown> {
    return this._client.get(__scalarPath`/accounts/${accountIdentifier}/custom_pages/assets`, {
      query,
      ...options,
    });
  }

  /**
   * Creates a new custom asset at the account level.
   *
   * @param {string} accountIdentifier
   * @param {CustomAssetsForAnAccountCreateAParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<unknown>} Create custom asset response
   *
   * @example
   * ```ts
   * const response = await client.customAssetsForAnAccount.createA('accountIdentifier', {
   *   description: {},
   *   name: {},
   *   url: {},
   * });
   * ```
   */
  createA(
    accountIdentifier: string,
    body: CustomAssetsForAnAccountCreateAParams,
    options?: RequestOptions,
  ): APIPromise<unknown> {
    return this._client.post(__scalarPath`/accounts/${accountIdentifier}/custom_pages/assets`, {
      body,
      ...options,
    });
  }

  /**
   * Deletes an existing custom asset.
   *
   * @param {string} assetName
   * @param {CustomAssetsForAnAccountDeleteAParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns Delete a custom asset response
   *
   * @example
   * ```ts
   * await client.customAssetsForAnAccount.deleteA('assetName', {
   *   account_identifier: {},
   * });
   * ```
   */
  deleteA(
    assetName: string,
    params: CustomAssetsForAnAccountDeleteAParams,
    options?: RequestOptions,
  ): APIPromise<void> {
    const { account_identifier } = params;
    return this._client.delete(
      __scalarPath`/accounts/${account_identifier}/custom_pages/assets/${assetName}`,
      { ...options, headers: buildHeaders([{ Accept: '*/*' }, options?.headers]) },
    );
  }

  /**
   * Fetches the details of a custom asset.
   *
   * @param {string} assetName
   * @param {CustomAssetsForAnAccountRetrieveAParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<unknown>} Get a custom asset response
   *
   * @example
   * ```ts
   * const response = await client.customAssetsForAnAccount.retrieveA('assetName', {
   *   account_identifier: {},
   * });
   * ```
   */
  retrieveA(
    assetName: string,
    params: CustomAssetsForAnAccountRetrieveAParams,
    options?: RequestOptions,
  ): APIPromise<unknown> {
    const { account_identifier } = params;
    return this._client.get(
      __scalarPath`/accounts/${account_identifier}/custom_pages/assets/${assetName}`,
      options,
    );
  }

  /**
   * Updates the configuration of an existing custom asset.
   *
   * @param {string} assetName
   * @param {CustomAssetsForAnAccountUpdateAParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<unknown>} Update a custom asset response
   *
   * @example
   * ```ts
   * const response = await client.customAssetsForAnAccount.updateA('assetName', {
   *   account_identifier: {},
   *   description: {},
   *   url: {},
   * });
   * ```
   */
  updateA(
    assetName: string,
    params: CustomAssetsForAnAccountUpdateAParams,
    options?: RequestOptions,
  ): APIPromise<unknown> {
    const { account_identifier, ...body } = params;
    return this._client.put(__scalarPath`/accounts/${account_identifier}/custom_pages/assets/${assetName}`, {
      body,
      ...options,
    });
  }
}

export interface CustomAssetsForAnAccountListParams {
  /**
   * @default 1
   * @minimum 1
   */
  page?: number;
  /**
   * @default 20
   * @minimum 1
   * @maximum 200
   */
  per_page?: number;
}

export interface CustomAssetsForAnAccountCreateAParams {
  description: unknown;
  name: unknown;
  url: unknown;
}

export interface CustomAssetsForAnAccountDeleteAParams {
  account_identifier: string;
}

export interface CustomAssetsForAnAccountRetrieveAParams {
  account_identifier: string;
}

export interface CustomAssetsForAnAccountUpdateAParams {
  /**
   * Path param
   */
  account_identifier: string;
  /**
   * Body param
   */
  description: unknown;
  /**
   * Body param
   */
  url: unknown;
}
export declare namespace CustomAssetsForAnAccount {
  export {
    type CustomAssetsForAnAccountListParams as CustomAssetsForAnAccountListParams,
    type CustomAssetsForAnAccountCreateAParams as CustomAssetsForAnAccountCreateAParams,
    type CustomAssetsForAnAccountDeleteAParams as CustomAssetsForAnAccountDeleteAParams,
    type CustomAssetsForAnAccountRetrieveAParams as CustomAssetsForAnAccountRetrieveAParams,
    type CustomAssetsForAnAccountUpdateAParams as CustomAssetsForAnAccountUpdateAParams,
  };
}
