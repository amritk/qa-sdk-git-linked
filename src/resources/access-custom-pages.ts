// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from '../resource';
import { APIPromise } from '../api-promise';
import type { RequestOptions } from '../internal/request-options';
import { path as __scalarPath } from '../internal/utils/path';

export class AccessCustomPages extends APIResource {
  /**
   * List custom pages
   *
   * @param {string} accountID
   * @param {AccessCustomPageListParams} [query] - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<unknown>} List custom pages response
   *
   * @example
   * ```ts
   * const response = await client.accessCustomPages.list('accountId', {
   *   per_page: 50,
   * });
   * ```
   */
  list(
    accountID: string,
    query: AccessCustomPageListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<unknown> {
    return this._client.get(__scalarPath`/accounts/${accountID}/access/custom_pages`, { query, ...options });
  }

  /**
   * Create a custom page
   *
   * @param {string} accountID
   * @param {AccessCustomPageCreateAParams} [body] - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<unknown>} Create a custom page response
   *
   * @example
   * ```ts
   * const response = await client.accessCustomPages.createA('accountId');
   * ```
   */
  createA(
    accountID: string,
    body: AccessCustomPageCreateAParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<unknown> {
    return this._client.post(__scalarPath`/accounts/${accountID}/access/custom_pages`, { body, ...options });
  }

  /**
   * Validate a Liquid template and return its errors and warnings without persisting it.
   *
   * @param {string} accountID
   * @param {AccessCustomPageValidateATemplateParams} [body] - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<unknown>} Validate a custom page template response
   *
   * @example
   * ```ts
   * const response = await client.accessCustomPages.validateATemplate('accountId');
   * ```
   */
  validateATemplate(
    accountID: string,
    body: AccessCustomPageValidateATemplateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<unknown> {
    return this._client.post(__scalarPath`/accounts/${accountID}/access/custom_pages/validate`, {
      body,
      ...options,
    });
  }

  /**
   * Delete a custom page
   *
   * @param {string} customPageID
   * @param {AccessCustomPageDeleteAParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<unknown>} Delete a custom page response
   *
   * @example
   * ```ts
   * const response = await client.accessCustomPages.deleteA('customPageId', {
   *   account_id: {},
   * });
   * ```
   */
  deleteA(
    customPageID: string,
    params: AccessCustomPageDeleteAParams,
    options?: RequestOptions,
  ): APIPromise<unknown> {
    const { account_id } = params;
    return this._client.delete(
      __scalarPath`/accounts/${account_id}/access/custom_pages/${customPageID}`,
      options,
    );
  }

  /**
   * Fetches a custom page and also returns its HTML.
   *
   * @param {string} customPageID
   * @param {AccessCustomPageRetrieveAParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<unknown>} Get a custom page response
   *
   * @example
   * ```ts
   * const response = await client.accessCustomPages.retrieveA('customPageId', {
   *   account_id: {},
   * });
   * ```
   */
  retrieveA(
    customPageID: string,
    params: AccessCustomPageRetrieveAParams,
    options?: RequestOptions,
  ): APIPromise<unknown> {
    const { account_id } = params;
    return this._client.get(
      __scalarPath`/accounts/${account_id}/access/custom_pages/${customPageID}`,
      options,
    );
  }

  /**
   * Update a custom page
   *
   * @param {string} customPageID
   * @param {AccessCustomPageUpdateAParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<unknown>} Update a custom page response
   *
   * @example
   * ```ts
   * const response = await client.accessCustomPages.updateA('customPageId', {
   *   account_id: {},
   * });
   * ```
   */
  updateA(
    customPageID: string,
    params: AccessCustomPageUpdateAParams,
    options?: RequestOptions,
  ): APIPromise<unknown> {
    const { account_id, body } = params;
    return this._client.put(__scalarPath`/accounts/${account_id}/access/custom_pages/${customPageID}`, {
      body,
      ...options,
    });
  }
}

export interface AccessCustomPageListParams {
  /**
   * Number of results per page.
   * @default 50
   * @maximum 1000
   */
  per_page?: number;
}

export type AccessCustomPageCreateAParams = unknown;

export type AccessCustomPageValidateATemplateParams = unknown;

export interface AccessCustomPageDeleteAParams {
  account_id: string;
}

export interface AccessCustomPageRetrieveAParams {
  account_id: string;
}

export interface AccessCustomPageUpdateAParams {
  /**
   * Path param
   */
  account_id: string;
  /**
   * Body param
   */
  body?: unknown;
}
export declare namespace AccessCustomPages {
  export {
    type AccessCustomPageListParams as AccessCustomPageListParams,
    type AccessCustomPageCreateAParams as AccessCustomPageCreateAParams,
    type AccessCustomPageValidateATemplateParams as AccessCustomPageValidateATemplateParams,
    type AccessCustomPageDeleteAParams as AccessCustomPageDeleteAParams,
    type AccessCustomPageRetrieveAParams as AccessCustomPageRetrieveAParams,
    type AccessCustomPageUpdateAParams as AccessCustomPageUpdateAParams,
  };
}
