// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from '../resource';
import { APIPromise } from '../api-promise';
import type { RequestOptions } from '../internal/request-options';
import { path as __scalarPath } from '../internal/utils/path';

export class AccessBookmarkApplicationsDeprecated extends APIResource {
  /**
   * Lists Bookmark applications.
   *
   * @param {string} accountID
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<unknown>} List Bookmark applications response
   *
   * @example
   * ```ts
   * const response = await client.accessBookmarkApplicationsDeprecated.list('accountId');
   * ```
   *
   * @deprecated
   */
  list(accountID: string, options?: RequestOptions): APIPromise<unknown> {
    return this._client.get(__scalarPath`/accounts/${accountID}/access/bookmarks`, options);
  }

  /**
   * Deletes a Bookmark application.
   *
   * @param {string} bookmarkID
   * @param {AccessBookmarkApplicationsDeprecatedDeleteAParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<unknown>} Delete a Bookmark application response
   *
   * @example
   * ```ts
   * const response = await client.accessBookmarkApplicationsDeprecated.deleteA('bookmarkId', {
   *   account_id: {},
   * });
   * ```
   *
   * @deprecated
   */
  deleteA(
    bookmarkID: string,
    params: AccessBookmarkApplicationsDeprecatedDeleteAParams,
    options?: RequestOptions,
  ): APIPromise<unknown> {
    const { account_id } = params;
    return this._client.delete(__scalarPath`/accounts/${account_id}/access/bookmarks/${bookmarkID}`, options);
  }

  /**
   * Fetches a single Bookmark application.
   *
   * @param {string} bookmarkID
   * @param {AccessBookmarkApplicationsDeprecatedRetrieveAParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<unknown>} Get a Bookmark application response
   *
   * @example
   * ```ts
   * const response = await client.accessBookmarkApplicationsDeprecated.retrieveA('bookmarkId', {
   *   account_id: {},
   * });
   * ```
   *
   * @deprecated
   */
  retrieveA(
    bookmarkID: string,
    params: AccessBookmarkApplicationsDeprecatedRetrieveAParams,
    options?: RequestOptions,
  ): APIPromise<unknown> {
    const { account_id } = params;
    return this._client.get(__scalarPath`/accounts/${account_id}/access/bookmarks/${bookmarkID}`, options);
  }

  /**
   * Create a new Bookmark application.
   *
   * @param {string} bookmarkID
   * @param {AccessBookmarkApplicationsDeprecatedCreateAParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<unknown>} Create a Bookmark application response
   *
   * @example
   * ```ts
   * const response = await client.accessBookmarkApplicationsDeprecated.createA('bookmarkId', {
   *   account_id: {},
   * });
   * ```
   *
   * @deprecated
   */
  createA(
    bookmarkID: string,
    params: AccessBookmarkApplicationsDeprecatedCreateAParams,
    options?: RequestOptions,
  ): APIPromise<unknown> {
    const { account_id } = params;
    return this._client.post(__scalarPath`/accounts/${account_id}/access/bookmarks/${bookmarkID}`, options);
  }

  /**
   * Updates a configured Bookmark application.
   *
   * @param {string} bookmarkID
   * @param {AccessBookmarkApplicationsDeprecatedUpdateAParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<unknown>} Update a Bookmark application response
   *
   * @example
   * ```ts
   * const response = await client.accessBookmarkApplicationsDeprecated.updateA('bookmarkId', {
   *   account_id: {},
   * });
   * ```
   *
   * @deprecated
   */
  updateA(
    bookmarkID: string,
    params: AccessBookmarkApplicationsDeprecatedUpdateAParams,
    options?: RequestOptions,
  ): APIPromise<unknown> {
    const { account_id } = params;
    return this._client.put(__scalarPath`/accounts/${account_id}/access/bookmarks/${bookmarkID}`, options);
  }
}

export interface AccessBookmarkApplicationsDeprecatedDeleteAParams {
  account_id: string;
}

export interface AccessBookmarkApplicationsDeprecatedRetrieveAParams {
  account_id: string;
}

export interface AccessBookmarkApplicationsDeprecatedCreateAParams {
  account_id: string;
}

export interface AccessBookmarkApplicationsDeprecatedUpdateAParams {
  account_id: string;
}
export declare namespace AccessBookmarkApplicationsDeprecated {
  export {
    type AccessBookmarkApplicationsDeprecatedDeleteAParams as AccessBookmarkApplicationsDeprecatedDeleteAParams,
    type AccessBookmarkApplicationsDeprecatedRetrieveAParams as AccessBookmarkApplicationsDeprecatedRetrieveAParams,
    type AccessBookmarkApplicationsDeprecatedCreateAParams as AccessBookmarkApplicationsDeprecatedCreateAParams,
    type AccessBookmarkApplicationsDeprecatedUpdateAParams as AccessBookmarkApplicationsDeprecatedUpdateAParams,
  };
}
