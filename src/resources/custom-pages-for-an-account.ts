// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from '../resource';
import { APIPromise } from '../api-promise';
import type { RequestOptions } from '../internal/request-options';
import { path as __scalarPath } from '../internal/utils/path';

export class CustomPagesForAnAccount extends APIResource {
  /**
   * Fetches all the custom pages at the account level.
   *
   * @param {string} accountIdentifier
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<unknown>} List custom pages response
   *
   * @example
   * ```ts
   * const response = await client.customPagesForAnAccount.list('accountIdentifier');
   * ```
   */
  list(accountIdentifier: string, options?: RequestOptions): APIPromise<unknown> {
    return this._client.get(__scalarPath`/accounts/${accountIdentifier}/custom_pages`, options);
  }

  /**
   * Creates a signed JWT token used to preview custom pages before they are published.
   *
   * @param {string} accountIdentifier
   * @param {CustomPagesForAnAccountCreatePreviewTokenParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<unknown>} Create preview token response
   *
   * @example
   * ```ts
   * const response = await client.customPagesForAnAccount.createPreviewToken('accountIdentifier', {});
   * ```
   */
  createPreviewToken(
    accountIdentifier: string,
    body: CustomPagesForAnAccountCreatePreviewTokenParams,
    options?: RequestOptions,
  ): APIPromise<unknown> {
    return this._client.post(__scalarPath`/accounts/${accountIdentifier}/custom_pages/preview_tokens`, {
      body,
      ...options,
    });
  }

  /**
   * Fetches the details of a custom page.
   *
   * @param {string} identifier
   * @param {CustomPagesForAnAccountRetrieveAParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<unknown>} Get a custom page response
   *
   * @example
   * ```ts
   * const response = await client.customPagesForAnAccount.retrieveA('identifier', {
   *   account_identifier: {},
   * });
   * ```
   */
  retrieveA(
    identifier: string,
    params: CustomPagesForAnAccountRetrieveAParams,
    options?: RequestOptions,
  ): APIPromise<unknown> {
    const { account_identifier } = params;
    return this._client.get(
      __scalarPath`/accounts/${account_identifier}/custom_pages/${identifier}`,
      options,
    );
  }

  /**
   * Updates the configuration of an existing custom page.
   *
   * @param {string} identifier
   * @param {CustomPagesForAnAccountUpdateAParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<unknown>} Update a custom page response
   *
   * @example
   * ```ts
   * const response = await client.customPagesForAnAccount.updateA('identifier', {
   *   account_identifier: {},
   *   state: {},
   *   url: {},
   * });
   * ```
   */
  updateA(
    identifier: string,
    params: CustomPagesForAnAccountUpdateAParams,
    options?: RequestOptions,
  ): APIPromise<unknown> {
    const { account_identifier, ...body } = params;
    return this._client.put(__scalarPath`/accounts/${account_identifier}/custom_pages/${identifier}`, {
      body,
      ...options,
    });
  }
}

export type CustomPagesForAnAccountCreatePreviewTokenParams = unknown;

export interface CustomPagesForAnAccountRetrieveAParams {
  account_identifier: string;
}

export interface CustomPagesForAnAccountUpdateAParams {
  /**
   * Path param
   */
  account_identifier: string;
  /**
   * Body param
   */
  state: unknown;
  /**
   * Body param
   */
  url: unknown;
}
export declare namespace CustomPagesForAnAccount {
  export {
    type CustomPagesForAnAccountCreatePreviewTokenParams as CustomPagesForAnAccountCreatePreviewTokenParams,
    type CustomPagesForAnAccountRetrieveAParams as CustomPagesForAnAccountRetrieveAParams,
    type CustomPagesForAnAccountUpdateAParams as CustomPagesForAnAccountUpdateAParams,
  };
}
