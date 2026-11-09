// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from '../resource';
import { APIPromise } from '../api-promise';
import type { RequestOptions } from '../internal/request-options';
import { path as __scalarPath } from '../internal/utils/path';

export class BrowserExtensionInventories extends APIResource {
  /**
   * Returns the installed extension inventory for each registered browser
   * extension device in the account. Each device reports its inventory
   * periodically; this endpoint returns the latest known snapshot per device.
   *
   * Results are paginated by cursor. Pass the `cursor` from a previous
   * response to fetch the next page. `per_page` controls page size
   * (default 50, max 200).
   *
   *
   * @param {string} accountID
   * @param {BrowserExtensionInventoryAccountsListParams} [query] - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<unknown>} Browser extension inventories response.
   *
   * @example
   * ```ts
   * const response = await client.browserExtensionInventories.accountsList('accountId', {
   *   per_page: 50,
   * });
   * ```
   */
  accountsList(
    accountID: string,
    query: BrowserExtensionInventoryAccountsListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<unknown> {
    return this._client.get(__scalarPath`/accounts/${accountID}/browser-extension/config/inventories`, {
      query,
      ...options,
    });
  }

  /**
   * Returns the installed extension inventory for a single registered browser
   * extension device.
   *
   *
   * @param {string} registrationID - Browser extension registration ID.
   * @param {BrowserExtensionInventoryAccountsGetParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<unknown>} Browser extension inventory response.
   *
   * @example
   * ```ts
   * const response = await client.browserExtensionInventories.accountsGet('registrationId', {
   *   account_id: 'accountId',
   * });
   * ```
   */
  accountsGet(
    registrationID: string,
    params: BrowserExtensionInventoryAccountsGetParams,
    options?: RequestOptions,
  ): APIPromise<unknown> {
    const { account_id, ...query } = params;
    return this._client.get(
      __scalarPath`/accounts/${account_id}/browser-extension/config/inventories/${registrationID}`,
      { query, ...options },
    );
  }
}

export interface BrowserExtensionInventoryAccountsListParams {
  ''?: string;
  /**
   * Opaque cursor from a previous response to fetch the next page.
   */
  cursor?: string;
  /**
   * Number of results per page (default 50, max 200).
   * @minimum 1
   * @maximum 200
   */
  per_page?: number;
}

export interface BrowserExtensionInventoryAccountsGetParams {
  /**
   * Path param
   */
  account_id: string;
  /**
   * Query param
   */
  ''?: string;
}
export declare namespace BrowserExtensionInventories {
  export {
    type BrowserExtensionInventoryAccountsListParams as BrowserExtensionInventoryAccountsListParams,
    type BrowserExtensionInventoryAccountsGetParams as BrowserExtensionInventoryAccountsGetParams,
  };
}
