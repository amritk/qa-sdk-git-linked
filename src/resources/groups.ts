// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from '../resource';
import { APIPromise } from '../api-promise';
import type { RequestOptions } from '../internal/request-options';
import { path as __scalarPath } from '../internal/utils/path';

export class Groups extends APIResource {
  /**
   * List groups for an account
   *
   * @param {string} accountID - Account ID.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<GroupListListResponse>} Returns the list of groups.
   *
   * @example
   * ```ts
   * const group = await client.groups.listList('accountId');
   * ```
   */
  listList(accountID: string, options?: RequestOptions): APIPromise<GroupListListResponse> {
    return this._client.get(
      __scalarPath`/accounts/${accountID}/cloudforce-one/events/dataset/-/groups`,
      options,
    );
  }

  /**
   * Create a group
   *
   * @param {string} accountID - Account ID.
   * @param {GroupPostCreateParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<GroupPostCreateResponse>} Returns the created group.
   *
   * @example
   * ```ts
   * const group = await client.groups.postCreate('accountId', {
   *   description: 'Cloudforce subscribers',
   *   name: 'cloudforce-subscribers',
   * });
   * ```
   */
  postCreate(
    accountID: string,
    body: GroupPostCreateParams,
    options?: RequestOptions,
  ): APIPromise<GroupPostCreateResponse> {
    return this._client.post(__scalarPath`/accounts/${accountID}/cloudforce-one/events/dataset/-/groups`, {
      body,
      ...options,
    });
  }

  /**
   * Delete a group for an account
   *
   * @param {string} groupID
   * @param {GroupDeleteDeleteParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<GroupDeleteDeleteResponse>} Group deleted successfully.
   *
   * @example
   * ```ts
   * const group = await client.groups.deleteDelete('12345678-1234-1234-1234-1234567890ab', {
   *   account_id: 'accountId',
   * });
   * ```
   */
  deleteDelete(
    groupID: string,
    params: GroupDeleteDeleteParams,
    options?: RequestOptions,
  ): APIPromise<GroupDeleteDeleteResponse> {
    const { account_id } = params;
    return this._client.delete(
      __scalarPath`/accounts/${account_id}/cloudforce-one/events/dataset/-/groups/${groupID}`,
      options,
    );
  }

  /**
   * Read a group for an account
   *
   * @param {string} groupID
   * @param {GroupRetrieveReadParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<GroupRetrieveReadResponse>} Return the group.
   *
   * @example
   * ```ts
   * const group = await client.groups.retrieveRead('12345678-1234-1234-1234-1234567890ab', {
   *   account_id: 'accountId',
   * });
   * ```
   */
  retrieveRead(
    groupID: string,
    params: GroupRetrieveReadParams,
    options?: RequestOptions,
  ): APIPromise<GroupRetrieveReadResponse> {
    const { account_id } = params;
    return this._client.get(
      __scalarPath`/accounts/${account_id}/cloudforce-one/events/dataset/-/groups/${groupID}`,
      options,
    );
  }

  /**
   * Update a group
   *
   * @param {string} groupID
   * @param {GroupPutUpdateParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<GroupPutUpdateResponse>} Returns the updated group.
   *
   * @example
   * ```ts
   * const group = await client.groups.putUpdate('12345678-1234-1234-1234-1234567890ab', {
   *   account_id: 'accountId',
   *   description: 'Cloudforce subscribers',
   *   name: 'cloudforce-subscribers',
   * });
   * ```
   */
  putUpdate(
    groupID: string,
    params: GroupPutUpdateParams,
    options?: RequestOptions,
  ): APIPromise<GroupPutUpdateResponse> {
    const { account_id, ...body } = params;
    return this._client.put(
      __scalarPath`/accounts/${account_id}/cloudforce-one/events/dataset/-/groups/${groupID}`,
      { body, ...options },
    );
  }

  /**
   * List group members
   *
   * @param {string} groupID
   * @param {GroupListMemberListParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<GroupListMemberListResponse>} Returns the group members.
   *
   * @example
   * ```ts
   * const group = await client.groups.listMemberList('12345678-1234-1234-1234-1234567890ab', {
   *   account_id: 'accountId',
   * });
   * ```
   */
  listMemberList(
    groupID: string,
    params: GroupListMemberListParams,
    options?: RequestOptions,
  ): APIPromise<GroupListMemberListResponse> {
    const { account_id } = params;
    return this._client.get(
      __scalarPath`/accounts/${account_id}/cloudforce-one/events/dataset/-/groups/${groupID}/members`,
      options,
    );
  }

  /**
   * Create a group member
   *
   * @param {string} groupID
   * @param {GroupPostMemberCreateParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<GroupPostMemberCreateResponse>} Returns the created group member.
   *
   * @example
   * ```ts
   * const group = await client.groups.postMemberCreate('12345678-1234-1234-1234-1234567890ab', {
   *   account_id: 'accountId',
   * });
   * ```
   */
  postMemberCreate(
    groupID: string,
    params: GroupPostMemberCreateParams,
    options?: RequestOptions,
  ): APIPromise<GroupPostMemberCreateResponse> {
    const { account_id, ...body } = params;
    return this._client.post(
      __scalarPath`/accounts/${account_id}/cloudforce-one/events/dataset/-/groups/${groupID}/members`,
      { body, ...options },
    );
  }

  /**
   * Delete a group member
   *
   * @param {string} memberID
   * @param {GroupDeleteMemberDeleteParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<GroupDeleteMemberDeleteResponse>} Returns the created group member.
   *
   * @example
   * ```ts
   * const group = await client.groups.deleteMemberDelete('12345678-1234-1234-1234-1234567890ab', {
   *   account_id: 'accountId',
   *   group_id: '12345678-1234-1234-1234-1234567890ab',
   * });
   * ```
   */
  deleteMemberDelete(
    memberID: string,
    params: GroupDeleteMemberDeleteParams,
    options?: RequestOptions,
  ): APIPromise<GroupDeleteMemberDeleteResponse> {
    const { account_id, group_id } = params;
    return this._client.delete(
      __scalarPath`/accounts/${account_id}/cloudforce-one/events/dataset/-/groups/${group_id}/members/${memberID}`,
      options,
    );
  }
}

export type GroupListListResponse = Array<GroupListListResponse.GroupListListResponseItem>;

export namespace GroupListListResponse {
  export interface GroupListListResponseItem {
    /**
     * @format date-time
     */
    createdAt: string;
    description: string;
    name: string;
    /**
     * @format date-time
     */
    updatedAt: string;
    uuid: string;
  }
}

export interface GroupPostCreateParams {
  description: string;
  name: string;
}

export interface GroupPostCreateResponse {
  /**
   * @format date-time
   */
  createdAt: string;
  description: string;
  name: string;
  /**
   * @format date-time
   */
  updatedAt: string;
  uuid: string;
}

export interface GroupDeleteDeleteParams {
  /**
   * Account ID.
   */
  account_id: string;
}

export interface GroupDeleteDeleteResponse {
  message?: string;
  success?: boolean;
}

export interface GroupRetrieveReadParams {
  /**
   * Account ID.
   */
  account_id: string;
}

export interface GroupRetrieveReadResponse {
  /**
   * @format date-time
   */
  createdAt: string;
  description: string;
  members: Array<GroupRetrieveReadResponse.Member>;
  name: string;
  /**
   * @format date-time
   */
  updatedAt: string;
  uuid: string;
}

export namespace GroupRetrieveReadResponse {
  export interface Member {
    accountId: string;
    uuid: string;
    accountTag?: string;
    /**
     * @format date-time
     */
    createdAt?: string;
    /**
     * @format date-time
     */
    updatedAt?: string;
  }
}

export interface GroupPutUpdateParams {
  /**
   * Path param: Account ID.
   */
  account_id: string;
  /**
   * Body param
   */
  description: string;
  /**
   * Body param
   */
  name: string;
}

export interface GroupPutUpdateResponse {
  /**
   * @format date-time
   */
  createdAt: string;
  description: string;
  name: string;
  /**
   * @format date-time
   */
  updatedAt: string;
  uuid: string;
}

export interface GroupListMemberListParams {
  /**
   * Account ID.
   */
  account_id: string;
}

export type GroupListMemberListResponse = Array<GroupListMemberListResponse.GroupListMemberListResponseItem>;

export namespace GroupListMemberListResponse {
  export interface GroupListMemberListResponseItem {
    accountId: string;
    uuid: string;
    accountTag?: string;
    /**
     * @format date-time
     */
    createdAt?: string;
    /**
     * @format date-time
     */
    updatedAt?: string;
  }
}

export interface GroupPostMemberCreateParams {
  /**
   * Path param: Account ID.
   */
  account_id: string;
  /**
   * Body param
   */
  accountId?: string;
  /**
   * Body param
   */
  accountTag?: string;
}

export interface GroupPostMemberCreateResponse {
  accountId: string;
  uuid: string;
  accountTag?: string;
  /**
   * @format date-time
   */
  createdAt?: string;
  /**
   * @format date-time
   */
  updatedAt?: string;
}

export interface GroupDeleteMemberDeleteParams {
  /**
   * Account ID.
   */
  account_id: string;
  group_id: string;
}

export interface GroupDeleteMemberDeleteResponse {
  message?: string;
  success?: boolean;
}
export declare namespace Groups {
  export {
    type GroupListListResponse as GroupListListResponse,
    type GroupPostCreateResponse as GroupPostCreateResponse,
    type GroupDeleteDeleteResponse as GroupDeleteDeleteResponse,
    type GroupRetrieveReadResponse as GroupRetrieveReadResponse,
    type GroupPutUpdateResponse as GroupPutUpdateResponse,
    type GroupListMemberListResponse as GroupListMemberListResponse,
    type GroupPostMemberCreateResponse as GroupPostMemberCreateResponse,
    type GroupDeleteMemberDeleteResponse as GroupDeleteMemberDeleteResponse,
    type GroupPostCreateParams as GroupPostCreateParams,
    type GroupDeleteDeleteParams as GroupDeleteDeleteParams,
    type GroupRetrieveReadParams as GroupRetrieveReadParams,
    type GroupPutUpdateParams as GroupPutUpdateParams,
    type GroupListMemberListParams as GroupListMemberListParams,
    type GroupPostMemberCreateParams as GroupPostMemberCreateParams,
    type GroupDeleteMemberDeleteParams as GroupDeleteMemberDeleteParams,
  };
}
