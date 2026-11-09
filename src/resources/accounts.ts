// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from '../resource';
import { APIPromise } from '../api-promise';
import type { RequestOptions } from '../internal/request-options';
import { path as __scalarPath } from '../internal/utils/path';

export class Accounts extends APIResource {
  /**
   * List all accounts you have ownership or verified access to.
   *
   * @param {AccountListParams} [query] - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<unknown>} List Accounts response
   *
   * @example
   * ```ts
   * const response = await client.accounts.list({
   *   page: 1,
   *   per_page: 20,
   * });
   * ```
   */
  list(query: AccountListParams | null | undefined = {}, options?: RequestOptions): APIPromise<unknown> {
    return this._client.get('/accounts', { query, ...options });
  }

  /**
   * Create an account (only available for tenant admins at this time)
   *
   * @param {AccountCreationParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<unknown>} Account Creation Success Response
   *
   * @example
   * ```ts
   * const response = await client.accounts.creation({});
   * ```
   */
  creation(body: AccountCreationParams, options?: RequestOptions): APIPromise<unknown> {
    return this._client.post('/accounts', { body, ...options });
  }

  /**
   * Batch move a collection of accounts to a specific organization. ⚠️ Not implemented.
   *
   * @param {AccountBatchMoveParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<AccountBatchMoveResponse>} The request has succeeded.
   *
   * @example
   * ```ts
   * const account = await client.accounts.batchMove({
   *   account_ids: [''],
   *   destination_organization_id: '',
   * });
   * ```
   */
  batchMove(body: AccountBatchMoveParams, options?: RequestOptions): APIPromise<AccountBatchMoveResponse> {
    return this._client.post('/accounts/move', { body, ...options });
  }

  /**
   * Delete a specific account (only available for tenant admins at this time). This is a permanent operation that will delete any zones or other resources under the account
   *
   * @param {string} accountID - The account ID of the account to be deleted
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<unknown>} Account Deletion Success Response
   *
   * @example
   * ```ts
   * const response = await client.accounts.deletion('accountId');
   * ```
   */
  deletion(accountID: string, options?: RequestOptions): APIPromise<unknown> {
    return this._client.delete(__scalarPath`/accounts/${accountID}`, options);
  }

  /**
   * Get information about a specific account that you are a member of.
   *
   * @param {string} accountID
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<unknown>} Account Details response
   *
   * @example
   * ```ts
   * const response = await client.accounts.details('accountId');
   * ```
   */
  details(accountID: string, options?: RequestOptions): APIPromise<unknown> {
    return this._client.get(__scalarPath`/accounts/${accountID}`, options);
  }

  /**
   * Update an existing account.
   *
   * @param {string} accountID
   * @param {AccountUpdateParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<unknown>} Update Account response
   *
   * @example
   * ```ts
   * const response = await client.accounts.update('accountId', {});
   * ```
   */
  update(accountID: string, body: AccountUpdateParams, options?: RequestOptions): APIPromise<unknown> {
    return this._client.put(__scalarPath`/accounts/${accountID}`, { body, ...options });
  }
}

export interface AccountListParams {
  /**
   * Name of the account.
   */
  name?: string;
  /**
   * Page number of paginated results.
   * @default 1
   * @minimum 1
   */
  page?: number;
  /**
   * Maximum number of results per page.
   * @default 20
   * @minimum 5
   * @maximum 50
   */
  per_page?: number;
  /**
   * Direction to order results.
   */
  direction?: 'asc' | 'desc';
}

export type AccountCreationParams = unknown;

export interface AccountBatchMoveParams {
  /**
   * Move these accounts to the destination organization.
   */
  account_ids: Array<string>;
  /**
   * Move accounts to this organization ID.
   */
  destination_organization_id: string;
}

export interface AccountBatchMoveResponse {
  /**
   * @maxItems 0
   */
  errors: Array<Record<string, unknown>>;
  messages: Array<unknown>;
  result: unknown;
  success: true;
}

export type AccountUpdateParams = unknown;
export declare namespace Accounts {
  export {
    type AccountBatchMoveResponse as AccountBatchMoveResponse,
    type AccountListParams as AccountListParams,
    type AccountCreationParams as AccountCreationParams,
    type AccountBatchMoveParams as AccountBatchMoveParams,
    type AccountUpdateParams as AccountUpdateParams,
  };
}
