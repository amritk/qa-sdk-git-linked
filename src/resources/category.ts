// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from '../resource';
import { APIPromise } from '../api-promise';
import type { RequestOptions } from '../internal/request-options';
import { path as __scalarPath } from '../internal/utils/path';

export class Category extends APIResource {
  /**
   * Lists all threat event categories configured for classifying and organizing threat events.
   *
   * @param {string} accountID - Account ID.
   * @param {CategoryListListParams} [query] - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<CategoryListListResponse>} Returns a list of categories.
   *
   * @example
   * ```ts
   * const category = await client.category.listList('accountId');
   * ```
   */
  listList(
    accountID: string,
    query: CategoryListListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<CategoryListListResponse> {
    return this._client.get(__scalarPath`/accounts/${accountID}/cloudforce-one/events/categories`, {
      query,
      ...options,
    });
  }

  /**
   * Lists categories
   *
   * @param {string} accountID - Account ID.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<CategoryListListCompleteResponse>} Returns a list of categories.
   *
   * @example
   * ```ts
   * const category = await client.category.listListComplete('accountId');
   * ```
   */
  listListComplete(
    accountID: string,
    options?: RequestOptions,
  ): APIPromise<CategoryListListCompleteResponse> {
    return this._client.get(
      __scalarPath`/accounts/${accountID}/cloudforce-one/events/categories/catalog`,
      options,
    );
  }

  /**
   * Creates a new threat event category in Cloudforce One for organizing and classifying threat events.
   *
   * @param {string} accountID - Account ID.
   * @param {CategoryCreateParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<CategoryCreateResponse>} Returns the created category.
   *
   * @example
   * ```ts
   * const category = await client.category.create('accountId', {
   *   killChain: 0,
   *   name: 'name',
   * });
   * ```
   */
  create(
    accountID: string,
    body: CategoryCreateParams,
    options?: RequestOptions,
  ): APIPromise<CategoryCreateResponse> {
    return this._client.post(__scalarPath`/accounts/${accountID}/cloudforce-one/events/categories/create`, {
      body,
      ...options,
    });
  }

  /**
   * Removes a threat event category from Cloudforce One.
   *
   * @param {string} categoryID - Category UUID.
   * @param {CategoryDeleteDeleteParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<CategoryDeleteDeleteResponse>} Returns the uuid of the deleted category.
   *
   * @example
   * ```ts
   * const category = await client.category.deleteDelete('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
   *   account_id: 'accountId',
   * });
   * ```
   */
  deleteDelete(
    categoryID: string,
    params: CategoryDeleteDeleteParams,
    options?: RequestOptions,
  ): APIPromise<CategoryDeleteDeleteResponse> {
    const { account_id } = params;
    return this._client.delete(
      __scalarPath`/accounts/${account_id}/cloudforce-one/events/categories/${categoryID}`,
      options,
    );
  }

  /**
   * Retrieves details for a specific threat event category.
   *
   * @param {string} categoryID - Category UUID.
   * @param {CategoryRetrieveReadParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<CategoryRetrieveReadResponse>} Returns a category.
   *
   * @example
   * ```ts
   * const category = await client.category.retrieveRead('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
   *   account_id: 'accountId',
   * });
   * ```
   */
  retrieveRead(
    categoryID: string,
    params: CategoryRetrieveReadParams,
    options?: RequestOptions,
  ): APIPromise<CategoryRetrieveReadResponse> {
    const { account_id } = params;
    return this._client.get(
      __scalarPath`/accounts/${account_id}/cloudforce-one/events/categories/${categoryID}`,
      options,
    );
  }

  /**
   * Partially updates a threat event category in Cloudforce One, modifying specific fields without replacing the entire category.
   *
   * @param {string} categoryID - Category UUID.
   * @param {CategoryPatchUpdateParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<CategoryPatchUpdateResponse>} Returns the updated category.
   *
   * @example
   * ```ts
   * const category = await client.category.patchUpdate('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
   *   account_id: 'accountId',
   * });
   * ```
   */
  patchUpdate(
    categoryID: string,
    params: CategoryPatchUpdateParams,
    options?: RequestOptions,
  ): APIPromise<CategoryPatchUpdateResponse> {
    const { account_id, ...body } = params;
    return this._client.patch(
      __scalarPath`/accounts/${account_id}/cloudforce-one/events/categories/${categoryID}`,
      { body, ...options },
    );
  }

  /**
   * Updates a category
   *
   * @param {string} categoryID - Category UUID.
   * @param {CategoryPostUpdateParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<CategoryPostUpdateResponse>} Returns the updated category.
   *
   * @example
   * ```ts
   * const category = await client.category.postUpdate('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
   *   account_id: 'accountId',
   * });
   * ```
   */
  postUpdate(
    categoryID: string,
    params: CategoryPostUpdateParams,
    options?: RequestOptions,
  ): APIPromise<CategoryPostUpdateResponse> {
    const { account_id, ...body } = params;
    return this._client.post(
      __scalarPath`/accounts/${account_id}/cloudforce-one/events/categories/${categoryID}`,
      { body, ...options },
    );
  }
}

export interface CategoryListListParams {
  /**
   * Array of dataset IDs to query categories from. If not provided, uses the default dataset.
   */
  datasetIds?: Array<string>;
}

export type CategoryListListResponse = Array<CategoryListListResponse.CategoryListListResponseItem>;

export namespace CategoryListListResponse {
  export interface CategoryListListResponseItem {
    killChain: number;
    name: string;
    uuid: string;
    mitreAttack?: Array<string>;
    mitreCapec?: Array<string>;
    shortname?: string;
  }
}

export type CategoryListListCompleteResponse =
  Array<CategoryListListCompleteResponse.CategoryListListCompleteResponseItem>;

export namespace CategoryListListCompleteResponse {
  export interface CategoryListListCompleteResponseItem {
    killChain: number;
    name: string;
    uuid: string;
    mitreAttack?: Array<string>;
    mitreCapec?: Array<string>;
    shortname?: string;
  }
}

export interface CategoryCreateParams {
  killChain: number;
  name: string;
  mitreAttack?: Array<string>;
  mitreCapec?: Array<string>;
  shortname?: string;
}

export interface CategoryCreateResponse {
  killChain: number;
  name: string;
  uuid: string;
  mitreAttack?: Array<string>;
  mitreCapec?: Array<string>;
  shortname?: string;
}

export interface CategoryDeleteDeleteParams {
  /**
   * Account ID.
   */
  account_id: string;
}

export interface CategoryDeleteDeleteResponse {
  uuid: string;
}

export interface CategoryRetrieveReadParams {
  /**
   * Account ID.
   */
  account_id: string;
}

export interface CategoryRetrieveReadResponse {
  killChain: number;
  name: string;
  uuid: string;
  mitreAttack?: Array<string>;
  mitreCapec?: Array<string>;
  shortname?: string;
}

export interface CategoryPatchUpdateParams {
  /**
   * Path param: Account ID.
   */
  account_id: string;
  /**
   * Body param
   */
  killChain?: number;
  /**
   * Body param
   */
  mitreAttack?: Array<string>;
  /**
   * Body param
   */
  mitreCapec?: Array<string>;
  /**
   * Body param
   */
  name?: string;
  /**
   * Body param
   */
  shortname?: string;
}

export interface CategoryPatchUpdateResponse {
  killChain: number;
  name: string;
  uuid: string;
  mitreAttack?: Array<string>;
  mitreCapec?: Array<string>;
  shortname?: string;
}

export interface CategoryPostUpdateParams {
  /**
   * Path param: Account ID.
   */
  account_id: string;
  /**
   * Body param
   */
  killChain?: number;
  /**
   * Body param
   */
  mitreAttack?: Array<string>;
  /**
   * Body param
   */
  mitreCapec?: Array<string>;
  /**
   * Body param
   */
  name?: string;
  /**
   * Body param
   */
  shortname?: string;
}

export interface CategoryPostUpdateResponse {
  killChain: number;
  name: string;
  uuid: string;
  mitreAttack?: Array<string>;
  mitreCapec?: Array<string>;
  shortname?: string;
}
export declare namespace Category {
  export {
    type CategoryListListResponse as CategoryListListResponse,
    type CategoryListListCompleteResponse as CategoryListListCompleteResponse,
    type CategoryCreateResponse as CategoryCreateResponse,
    type CategoryDeleteDeleteResponse as CategoryDeleteDeleteResponse,
    type CategoryRetrieveReadResponse as CategoryRetrieveReadResponse,
    type CategoryPatchUpdateResponse as CategoryPatchUpdateResponse,
    type CategoryPostUpdateResponse as CategoryPostUpdateResponse,
    type CategoryListListParams as CategoryListListParams,
    type CategoryCreateParams as CategoryCreateParams,
    type CategoryDeleteDeleteParams as CategoryDeleteDeleteParams,
    type CategoryRetrieveReadParams as CategoryRetrieveReadParams,
    type CategoryPatchUpdateParams as CategoryPatchUpdateParams,
    type CategoryPostUpdateParams as CategoryPostUpdateParams,
  };
}
