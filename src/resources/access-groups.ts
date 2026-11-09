// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from '../resource';
import { APIPromise } from '../api-promise';
import type { RequestOptions } from '../internal/request-options';
import { path as __scalarPath } from '../internal/utils/path';

export class AccessGroups extends APIResource {
  /**
   * Lists all Access groups.
   *
   * @param {string} accountID
   * @param {AccessGroupListParams} [query] - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<unknown>} List Access groups response
   *
   * @example
   * ```ts
   * const response = await client.accessGroups.list('accountId');
   * ```
   */
  list(
    accountID: string,
    query: AccessGroupListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<unknown> {
    return this._client.get(__scalarPath`/accounts/${accountID}/access/groups`, { query, ...options });
  }

  /**
   * Creates a new Access group.
   *
   * @param {string} accountID
   * @param {AccessGroupCreateAnParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<unknown>} Create an Access group response
   *
   * @example
   * ```ts
   * const response = await client.accessGroups.createAn('accountId', {
   *   include: {},
   *   name: {},
   * });
   * ```
   */
  createAn(
    accountID: string,
    body: AccessGroupCreateAnParams,
    options?: RequestOptions,
  ): APIPromise<unknown> {
    return this._client.post(__scalarPath`/accounts/${accountID}/access/groups`, { body, ...options });
  }

  /**
   * Deletes an Access group.
   *
   * @param {string} groupID
   * @param {AccessGroupDeleteAnParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<unknown>} Delete an Access group response
   *
   * @example
   * ```ts
   * const response = await client.accessGroups.deleteAn('groupId', {
   *   account_id: {},
   * });
   * ```
   */
  deleteAn(
    groupID: string,
    params: AccessGroupDeleteAnParams,
    options?: RequestOptions,
  ): APIPromise<unknown> {
    const { account_id } = params;
    return this._client.delete(__scalarPath`/accounts/${account_id}/access/groups/${groupID}`, options);
  }

  /**
   * Fetches a single Access group.
   *
   * @param {string} groupID
   * @param {AccessGroupRetrieveAnParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<unknown>} Get an Access group response
   *
   * @example
   * ```ts
   * const response = await client.accessGroups.retrieveAn('groupId', {
   *   account_id: {},
   * });
   * ```
   */
  retrieveAn(
    groupID: string,
    params: AccessGroupRetrieveAnParams,
    options?: RequestOptions,
  ): APIPromise<unknown> {
    const { account_id } = params;
    return this._client.get(__scalarPath`/accounts/${account_id}/access/groups/${groupID}`, options);
  }

  /**
   * Updates a configured Access group.
   *
   * @param {string} groupID
   * @param {AccessGroupUpdateAnParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<unknown>} Update an Access group response
   *
   * @example
   * ```ts
   * const response = await client.accessGroups.updateAn('groupId', {
   *   account_id: {},
   *   include: {},
   *   name: {},
   * });
   * ```
   */
  updateAn(
    groupID: string,
    params: AccessGroupUpdateAnParams,
    options?: RequestOptions,
  ): APIPromise<unknown> {
    const { account_id, ...body } = params;
    return this._client.put(__scalarPath`/accounts/${account_id}/access/groups/${groupID}`, {
      body,
      ...options,
    });
  }
}

export interface AccessGroupListParams {
  /**
   * The name of the group.
   */
  name?: string;
  /**
   * Search for groups by other listed query parameters.
   */
  search?: string;
}

export interface AccessGroupCreateAnParams {
  include: unknown;
  name: unknown;
  exclude?: unknown;
  is_default?: unknown;
  require?: unknown;
}

export interface AccessGroupDeleteAnParams {
  account_id: string;
}

export interface AccessGroupRetrieveAnParams {
  account_id: string;
}

export interface AccessGroupUpdateAnParams {
  /**
   * Path param
   */
  account_id: string;
  /**
   * Body param
   */
  exclude?: unknown;
  /**
   * Body param
   */
  include: unknown;
  /**
   * Body param
   */
  is_default?: unknown;
  /**
   * Body param
   */
  name: unknown;
  /**
   * Body param
   */
  require?: unknown;
}
export declare namespace AccessGroups {
  export {
    type AccessGroupListParams as AccessGroupListParams,
    type AccessGroupCreateAnParams as AccessGroupCreateAnParams,
    type AccessGroupDeleteAnParams as AccessGroupDeleteAnParams,
    type AccessGroupRetrieveAnParams as AccessGroupRetrieveAnParams,
    type AccessGroupUpdateAnParams as AccessGroupUpdateAnParams,
  };
}
