// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from '../resource';
import { APIPromise } from '../api-promise';
import type { RequestOptions } from '../internal/request-options';
import { path as __scalarPath } from '../internal/utils/path';

export class Permissions extends APIResource {
  /**
   * List permissions
   *
   * @param {string} datasetID - Dataset UUID.
   * @param {PermissionListListParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<PermissionListListResponse>} Returns the list of permissions.
   *
   * @example
   * ```ts
   * const permission = await client.permissions.listList('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
   *   account_id: 'accountId',
   * });
   * ```
   */
  listList(
    datasetID: string,
    params: PermissionListListParams,
    options?: RequestOptions,
  ): APIPromise<PermissionListListResponse> {
    const { account_id } = params;
    return this._client.get(
      __scalarPath`/accounts/${account_id}/cloudforce-one/events/dataset/${datasetID}/permissions`,
      options,
    );
  }

  /**
   * Create a permission
   *
   * @param {string} datasetID - Dataset UUID.
   * @param {PermissionPostCreateParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<PermissionPostCreateResponse>} Returns the created permission.
   *
   * @example
   * ```ts
   * const permission = await client.permissions.postCreate('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
   *   account_id: 'accountId',
   *   role: 'read',
   *   subjectId: '123',
   *   subjectType: 'account',
   * });
   * ```
   */
  postCreate(
    datasetID: string,
    params: PermissionPostCreateParams,
    options?: RequestOptions,
  ): APIPromise<PermissionPostCreateResponse> {
    const { account_id, ...body } = params;
    return this._client.post(
      __scalarPath`/accounts/${account_id}/cloudforce-one/events/dataset/${datasetID}/permissions`,
      { body, ...options },
    );
  }

  /**
   * Delete a permission
   *
   * @param {string} grantID
   * @param {PermissionDeleteDeleteParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<PermissionDeleteDeleteResponse>} Permission deleted successfully
   *
   * @example
   * ```ts
   * const permission = await client.permissions.deleteDelete('12345678-1234-1234-1234-1234567890ab', {
   *   account_id: 'accountId',
   *   dataset_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
   * });
   * ```
   */
  deleteDelete(
    grantID: string,
    params: PermissionDeleteDeleteParams,
    options?: RequestOptions,
  ): APIPromise<PermissionDeleteDeleteResponse> {
    const { account_id, dataset_id } = params;
    return this._client.delete(
      __scalarPath`/accounts/${account_id}/cloudforce-one/events/dataset/${dataset_id}/permissions/${grantID}`,
      options,
    );
  }

  /**
   * Update a permission
   *
   * @param {string} grantID
   * @param {PermissionPutUpdateParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<PermissionPutUpdateResponse>} Permission updated successfully
   *
   * @example
   * ```ts
   * const permission = await client.permissions.putUpdate('12345678-1234-1234-1234-1234567890ab', {
   *   account_id: 'accountId',
   *   dataset_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
   *   role: 'read',
   * });
   * ```
   */
  putUpdate(
    grantID: string,
    params: PermissionPutUpdateParams,
    options?: RequestOptions,
  ): APIPromise<PermissionPutUpdateResponse> {
    const { account_id, dataset_id, ...body } = params;
    return this._client.put(
      __scalarPath`/accounts/${account_id}/cloudforce-one/events/dataset/${dataset_id}/permissions/${grantID}`,
      { body, ...options },
    );
  }
}

export interface PermissionListListParams {
  /**
   * Account ID.
   */
  account_id: string;
}

export type PermissionListListResponse = Array<PermissionListListResponse.PermissionListListResponseItem>;

export namespace PermissionListListResponse {
  export interface PermissionListListResponseItem {
    /**
     * @format date-time
     */
    createdAt: string;
    resourceType: 'dataset';
    role: 'read' | 'write';
    subjectId: string;
    subjectType: 'account' | 'group';
    /**
     * @format date-time
     */
    updatedAt: string;
    uuid: string;
    /**
     * The resource ID this permission applies to account_id or group_id
     */
    resourceId?: string;
  }
}

export interface PermissionPostCreateParams {
  /**
   * Path param: Account ID.
   */
  account_id: string;
  /**
   * Body param
   */
  role: 'read' | 'write';
  /**
   * Body param
   */
  subjectId: string;
  /**
   * Body param
   */
  subjectType: 'account' | 'group';
}

export interface PermissionPostCreateResponse {
  /**
   * @format date-time
   */
  createdAt: string;
  resourceType: 'dataset';
  role: 'read' | 'write';
  subjectId: string;
  subjectType: 'account' | 'group';
  /**
   * @format date-time
   */
  updatedAt: string;
  uuid: string;
  /**
   * The resource ID this permission applies to account_id or group_id
   */
  resourceId?: string;
}

export interface PermissionDeleteDeleteParams {
  /**
   * Account ID.
   */
  account_id: string;
  /**
   * Dataset UUID.
   * @format uuid
   */
  dataset_id: string;
}

export interface PermissionDeleteDeleteResponse {
  message?: string;
  success?: boolean;
}

export interface PermissionPutUpdateParams {
  /**
   * Path param: Account ID.
   */
  account_id: string;
  /**
   * Path param: Dataset UUID.
   * @format uuid
   */
  dataset_id: string;
  /**
   * Body param
   */
  role: 'read' | 'write';
}

export interface PermissionPutUpdateResponse {
  message?: string;
  success?: boolean;
}
export declare namespace Permissions {
  export {
    type PermissionListListResponse as PermissionListListResponse,
    type PermissionPostCreateResponse as PermissionPostCreateResponse,
    type PermissionDeleteDeleteResponse as PermissionDeleteDeleteResponse,
    type PermissionPutUpdateResponse as PermissionPutUpdateResponse,
    type PermissionListListParams as PermissionListListParams,
    type PermissionPostCreateParams as PermissionPostCreateParams,
    type PermissionDeleteDeleteParams as PermissionDeleteDeleteParams,
    type PermissionPutUpdateParams as PermissionPutUpdateParams,
  };
}
