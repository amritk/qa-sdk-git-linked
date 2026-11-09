// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from '../resource';
import { APIPromise } from '../api-promise';
import type { RequestOptions } from '../internal/request-options';
import { path as __scalarPath } from '../internal/utils/path';

export class IPAddressManagementPrefixDelegation extends APIResource {
  /**
   * List all delegations for a given account IP prefix.
   *
   * @param {string} prefixID
   * @param {IPAddressManagementPrefixDelegationListParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<unknown>} List Prefix Delegations response
   *
   * @example
   * ```ts
   * const response = await client.ipAddressManagementPrefixDelegation.list('prefixId', {
   *   account_id: {},
   * });
   * ```
   */
  list(
    prefixID: string,
    params: IPAddressManagementPrefixDelegationListParams,
    options?: RequestOptions,
  ): APIPromise<unknown> {
    const { account_id } = params;
    return this._client.get(
      __scalarPath`/accounts/${account_id}/addressing/prefixes/${prefixID}/delegations`,
      options,
    );
  }

  /**
   * Create a new account delegation for a given IP prefix.
   *
   * @param {string} prefixID
   * @param {IPAddressManagementPrefixDelegationCreateParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<unknown>} Create Prefix Delegation response
   *
   * @example
   * ```ts
   * const response = await client.ipAddressManagementPrefixDelegation.create('prefixId', {
   *   account_id: {},
   *   cidr: {},
   *   delegated_account_id: {},
   * });
   * ```
   */
  create(
    prefixID: string,
    params: IPAddressManagementPrefixDelegationCreateParams,
    options?: RequestOptions,
  ): APIPromise<unknown> {
    const { account_id, ...body } = params;
    return this._client.post(
      __scalarPath`/accounts/${account_id}/addressing/prefixes/${prefixID}/delegations`,
      { body, ...options },
    );
  }

  /**
   * Delete an account delegation for a given IP prefix.
   *
   * @param {string} delegationID
   * @param {IPAddressManagementPrefixDelegationDeleteParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<unknown>} Delete Prefix Delegation response
   *
   * @example
   * ```ts
   * const response = await client.ipAddressManagementPrefixDelegation.delete('delegationId', {
   *   prefix_id: {},
   *   account_id: {},
   * });
   * ```
   */
  delete(
    delegationID: string,
    params: IPAddressManagementPrefixDelegationDeleteParams,
    options?: RequestOptions,
  ): APIPromise<unknown> {
    const { prefix_id, account_id } = params;
    return this._client.delete(
      __scalarPath`/accounts/${account_id}/addressing/prefixes/${prefix_id}/delegations/${delegationID}`,
      options,
    );
  }
}

export interface IPAddressManagementPrefixDelegationListParams {
  account_id: string;
}

export interface IPAddressManagementPrefixDelegationCreateParams {
  /**
   * Path param
   */
  account_id: string;
  /**
   * Body param
   */
  cidr: unknown;
  /**
   * Body param
   */
  delegated_account_id: unknown;
}

export interface IPAddressManagementPrefixDelegationDeleteParams {
  prefix_id: string;
  account_id: string;
}
export declare namespace IPAddressManagementPrefixDelegation {
  export {
    type IPAddressManagementPrefixDelegationListParams as IPAddressManagementPrefixDelegationListParams,
    type IPAddressManagementPrefixDelegationCreateParams as IPAddressManagementPrefixDelegationCreateParams,
    type IPAddressManagementPrefixDelegationDeleteParams as IPAddressManagementPrefixDelegationDeleteParams,
  };
}
