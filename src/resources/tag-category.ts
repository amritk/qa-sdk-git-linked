// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from '../resource';
import { APIPromise } from '../api-promise';
import type { RequestOptions } from '../internal/request-options';
import { path as __scalarPath } from '../internal/utils/path';

export class TagCategory extends APIResource {
  /**
   * Returns all Source-of-Truth tag categories for an account.
   *
   * @param {string} accountID - Account ID.
   * @param {TagCategoryListListParams} [query] - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<TagCategoryListListResponse>} Returns a list of tag categories.
   *
   * @example
   * ```ts
   * const tagCategory = await client.tagCategory.listList('accountId');
   * ```
   */
  listList(
    accountID: string,
    query: TagCategoryListListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<TagCategoryListListResponse> {
    return this._client.get(__scalarPath`/accounts/${accountID}/cloudforce-one/events/tags/categories`, {
      query,
      ...options,
    });
  }

  /**
   * Creates a new Source-of-Truth tag category for an account.
   *
   * @param {string} accountID - Account ID.
   * @param {TagCategoryCreateParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<TagCategoryCreateResponse>} Returns the created tag category.
   *
   * @example
   * ```ts
   * const tagCategory = await client.tagCategory.create('accountId', {
   *   name: 'Actor',
   * });
   * ```
   */
  create(
    accountID: string,
    body: TagCategoryCreateParams,
    options?: RequestOptions,
  ): APIPromise<TagCategoryCreateResponse> {
    return this._client.post(
      __scalarPath`/accounts/${accountID}/cloudforce-one/events/tags/categories/create`,
      { body, ...options },
    );
  }

  /**
   * Deletes a Source-of-Truth tag category by UUID.
   *
   * @param {string} categoryUUID - Tag Category UUID.
   * @param {TagCategoryDeleteDeleteParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<TagCategoryDeleteDeleteResponse>} Returns the uuid of the deleted tag category.
   *
   * @example
   * ```ts
   * const tagCategory = await client.tagCategory.deleteDelete('categoryUuid', {
   *   account_id: 'accountId',
   * });
   * ```
   */
  deleteDelete(
    categoryUUID: string,
    params: TagCategoryDeleteDeleteParams,
    options?: RequestOptions,
  ): APIPromise<TagCategoryDeleteDeleteResponse> {
    const { account_id } = params;
    return this._client.delete(
      __scalarPath`/accounts/${account_id}/cloudforce-one/events/tags/categories/${categoryUUID}`,
      options,
    );
  }

  /**
   * Returns a single Source-of-Truth tag category by UUID, including its full schema.
   *
   * @param {string} categoryUUID - Tag Category UUID.
   * @param {TagCategoryRetrieveDetailParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<TagCategoryRetrieveDetailResponse>} Returns the tag category.
   *
   * @example
   * ```ts
   * const tagCategory = await client.tagCategory.retrieveDetail('categoryUuid', {
   *   account_id: 'accountId',
   * });
   * ```
   */
  retrieveDetail(
    categoryUUID: string,
    params: TagCategoryRetrieveDetailParams,
    options?: RequestOptions,
  ): APIPromise<TagCategoryRetrieveDetailResponse> {
    const { account_id } = params;
    return this._client.get(
      __scalarPath`/accounts/${account_id}/cloudforce-one/events/tags/categories/${categoryUUID}`,
      options,
    );
  }

  /**
   * Updates a Source-of-Truth tag category by UUID.
   *
   * @param {string} categoryUUID - Tag Category UUID.
   * @param {TagCategoryPatchUpdateParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<TagCategoryPatchUpdateResponse>} Returns the updated tag category.
   *
   * @example
   * ```ts
   * const tagCategory = await client.tagCategory.patchUpdate('categoryUuid', {
   *   account_id: 'accountId',
   * });
   * ```
   */
  patchUpdate(
    categoryUUID: string,
    params: TagCategoryPatchUpdateParams,
    options?: RequestOptions,
  ): APIPromise<TagCategoryPatchUpdateResponse> {
    const { account_id, ...body } = params;
    return this._client.patch(
      __scalarPath`/accounts/${account_id}/cloudforce-one/events/tags/categories/${categoryUUID}`,
      { body, ...options },
    );
  }
}

export interface TagCategoryListListParams {
  search?: string;
}

export interface TagCategoryListListResponse {
  categories: Array<TagCategoryListListResponse.Category>;
}

export namespace TagCategoryListListResponse {
  export interface Category {
    name: string;
    uuid: string;
    createdAt?: string;
    description?: string;
    /**
     * Parsed FieldDefinition[] defining custom fields for this category, or null if none.
     */
    schema?: Array<unknown> | null;
    updatedAt?: string;
  }
}

export interface TagCategoryCreateParams {
  name: string;
  description?: string;
  /**
   * Optional array of FieldDefinition objects defining custom fields for tags in this category. Persisted as JSON; returned as a parsed array.
   */
  schema?: Array<unknown>;
}

export interface TagCategoryCreateResponse {
  name: string;
  uuid: string;
  createdAt?: string;
  description?: string;
  /**
   * Parsed FieldDefinition[] defining custom fields for this category, or null if none.
   */
  schema?: Array<unknown> | null;
  updatedAt?: string;
}

export interface TagCategoryDeleteDeleteParams {
  /**
   * Account ID.
   */
  account_id: string;
}

export interface TagCategoryDeleteDeleteResponse {
  uuid: string;
}

export interface TagCategoryRetrieveDetailParams {
  /**
   * Account ID.
   */
  account_id: string;
}

export interface TagCategoryRetrieveDetailResponse {
  name: string;
  uuid: string;
  createdAt?: string;
  description?: string;
  /**
   * Parsed FieldDefinition[] defining custom fields for this category, or null if none.
   */
  schema?: Array<unknown> | null;
  updatedAt?: string;
}

export interface TagCategoryPatchUpdateParams {
  /**
   * Path param: Account ID.
   */
  account_id: string;
  /**
   * Body param
   */
  description?: string;
  /**
   * Body param
   */
  name?: string;
  /**
   * Body param: Optional array of FieldDefinition objects. When provided, replaces the existing field schema. When omitted, the existing schema is preserved.
   */
  schema?: Array<unknown>;
}

export interface TagCategoryPatchUpdateResponse {
  name: string;
  uuid: string;
  createdAt?: string;
  description?: string;
  /**
   * Parsed FieldDefinition[] defining custom fields for this category, or null if none.
   */
  schema?: Array<unknown> | null;
  updatedAt?: string;
}
export declare namespace TagCategory {
  export {
    type TagCategoryListListResponse as TagCategoryListListResponse,
    type TagCategoryCreateResponse as TagCategoryCreateResponse,
    type TagCategoryDeleteDeleteResponse as TagCategoryDeleteDeleteResponse,
    type TagCategoryRetrieveDetailResponse as TagCategoryRetrieveDetailResponse,
    type TagCategoryPatchUpdateResponse as TagCategoryPatchUpdateResponse,
    type TagCategoryListListParams as TagCategoryListListParams,
    type TagCategoryCreateParams as TagCategoryCreateParams,
    type TagCategoryDeleteDeleteParams as TagCategoryDeleteDeleteParams,
    type TagCategoryRetrieveDetailParams as TagCategoryRetrieveDetailParams,
    type TagCategoryPatchUpdateParams as TagCategoryPatchUpdateParams,
  };
}
