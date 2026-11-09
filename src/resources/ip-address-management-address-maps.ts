// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from '../resource';
import { APIPromise } from '../api-promise';
import type { RequestOptions } from '../internal/request-options';
import { path as __scalarPath } from '../internal/utils/path';

export class IPAddressManagementAddressMaps extends APIResource {
  /**
   * List all address maps owned by the account.
   *
   * @param {string} accountID
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<unknown>} List Address Maps response
   *
   * @example
   * ```ts
   * const response = await client.ipAddressManagementAddressMaps.list('accountId');
   * ```
   */
  list(accountID: string, options?: RequestOptions): APIPromise<unknown> {
    return this._client.get(__scalarPath`/accounts/${accountID}/addressing/address_maps`, options);
  }

  /**
   * Create a new address map under the account.
   *
   * @param {string} accountID
   * @param {IPAddressManagementAddressMapCreateParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<unknown>} Create Address Map response
   *
   * @example
   * ```ts
   * const response = await client.ipAddressManagementAddressMaps.create('accountId', {});
   * ```
   */
  create(
    accountID: string,
    body: IPAddressManagementAddressMapCreateParams,
    options?: RequestOptions,
  ): APIPromise<unknown> {
    return this._client.post(__scalarPath`/accounts/${accountID}/addressing/address_maps`, {
      body,
      ...options,
    });
  }

  /**
   * Delete a particular address map owned by the account. An Address Map must be disabled before it can be deleted.
   *
   * @param {string} addressMapID
   * @param {IPAddressManagementAddressMapDeleteParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<unknown>} Delete Address Map response
   *
   * @example
   * ```ts
   * const response = await client.ipAddressManagementAddressMaps.delete('addressMapId', {
   *   account_id: {},
   * });
   * ```
   */
  delete(
    addressMapID: string,
    params: IPAddressManagementAddressMapDeleteParams,
    options?: RequestOptions,
  ): APIPromise<unknown> {
    const { account_id } = params;
    return this._client.delete(
      __scalarPath`/accounts/${account_id}/addressing/address_maps/${addressMapID}`,
      options,
    );
  }

  /**
   * Show a particular address map owned by the account.
   *
   * @param {string} addressMapID
   * @param {IPAddressManagementAddressMapDetailsParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<unknown>} Address Map Details response
   *
   * @example
   * ```ts
   * const response = await client.ipAddressManagementAddressMaps.details('addressMapId', {
   *   account_id: {},
   * });
   * ```
   */
  details(
    addressMapID: string,
    params: IPAddressManagementAddressMapDetailsParams,
    options?: RequestOptions,
  ): APIPromise<unknown> {
    const { account_id } = params;
    return this._client.get(
      __scalarPath`/accounts/${account_id}/addressing/address_maps/${addressMapID}`,
      options,
    );
  }

  /**
   * Modify properties of an address map owned by the account.
   *
   * @param {string} addressMapID
   * @param {IPAddressManagementAddressMapUpdateParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<unknown>} Update Address Map response
   *
   * @example
   * ```ts
   * const response = await client.ipAddressManagementAddressMaps.update('addressMapId', {
   *   account_id: {},
   * });
   * ```
   */
  update(
    addressMapID: string,
    params: IPAddressManagementAddressMapUpdateParams,
    options?: RequestOptions,
  ): APIPromise<unknown> {
    const { account_id, ...body } = params;
    return this._client.patch(__scalarPath`/accounts/${account_id}/addressing/address_maps/${addressMapID}`, {
      body,
      ...options,
    });
  }

  /**
   * Remove an account as a member of a particular address map.
   *
   * @param {string} memberAccountID
   * @param {IPAddressManagementAddressMapDeleteAnAccountMembershipFromAnParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<unknown>} Remove an account membership from an Address Map response
   *
   * @example
   * ```ts
   * const response = await client.ipAddressManagementAddressMaps.deleteAnAccountMembershipFromAn(
   *   'memberAccountId',
   *   {
   *     account_id: {},
   *     address_map_id: {},
   *   },
   * );
   * ```
   */
  deleteAnAccountMembershipFromAn(
    memberAccountID: string,
    params: IPAddressManagementAddressMapDeleteAnAccountMembershipFromAnParams,
    options?: RequestOptions,
  ): APIPromise<unknown> {
    const { account_id, address_map_id } = params;
    return this._client.delete(
      __scalarPath`/accounts/${account_id}/addressing/address_maps/${address_map_id}/accounts/${memberAccountID}`,
      options,
    );
  }

  /**
   * Add an account as a member of a particular address map.
   *
   * @param {string} memberAccountID
   * @param {IPAddressManagementAddressMapCreateAnAccountMembershipToAnParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<unknown>} Add an account membership to an Address Map response
   *
   * @example
   * ```ts
   * const response = await client.ipAddressManagementAddressMaps.createAnAccountMembershipToAn(
   *   'memberAccountId',
   *   {
   *     account_id: {},
   *     address_map_id: {},
   *   },
   * );
   * ```
   */
  createAnAccountMembershipToAn(
    memberAccountID: string,
    params: IPAddressManagementAddressMapCreateAnAccountMembershipToAnParams,
    options?: RequestOptions,
  ): APIPromise<unknown> {
    const { account_id, address_map_id } = params;
    return this._client.put(
      __scalarPath`/accounts/${account_id}/addressing/address_maps/${address_map_id}/accounts/${memberAccountID}`,
      options,
    );
  }

  /**
   * Remove an IP from a particular address map.
   *
   * @param {string} ipAddress
   * @param {IPAddressManagementAddressMapDeleteAnFromAnParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<unknown>} Remove an IP from an Address Map response
   *
   * @example
   * ```ts
   * const response = await client.ipAddressManagementAddressMaps.deleteAnFromAn('ipAddress', {
   *   address_map_id: {},
   *   account_id: {},
   * });
   * ```
   */
  deleteAnFromAn(
    ipAddress: string,
    params: IPAddressManagementAddressMapDeleteAnFromAnParams,
    options?: RequestOptions,
  ): APIPromise<unknown> {
    const { address_map_id, account_id } = params;
    return this._client.delete(
      __scalarPath`/accounts/${account_id}/addressing/address_maps/${address_map_id}/ips/${ipAddress}`,
      options,
    );
  }

  /**
   * Add an IP from a prefix owned by the account to a particular address map.
   *
   * @param {string} ipAddress
   * @param {IPAddressManagementAddressMapCreateAnToAnParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<unknown>} Add an IP to an Address Map response
   *
   * @example
   * ```ts
   * const response = await client.ipAddressManagementAddressMaps.createAnToAn('ipAddress', {
   *   address_map_id: {},
   *   account_id: {},
   * });
   * ```
   */
  createAnToAn(
    ipAddress: string,
    params: IPAddressManagementAddressMapCreateAnToAnParams,
    options?: RequestOptions,
  ): APIPromise<unknown> {
    const { address_map_id, account_id } = params;
    return this._client.put(
      __scalarPath`/accounts/${account_id}/addressing/address_maps/${address_map_id}/ips/${ipAddress}`,
      options,
    );
  }

  /**
   * Remove a zone as a member of a particular address map.
   *
   * @param {string} zoneID
   * @param {IPAddressManagementAddressMapDeleteAZoneMembershipFromAnParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<unknown>} Remove a zone membership from an Address Map response
   *
   * @example
   * ```ts
   * const response = await client.ipAddressManagementAddressMaps.deleteAZoneMembershipFromAn('zoneId', {
   *   address_map_id: {},
   *   account_id: {},
   * });
   * ```
   */
  deleteAZoneMembershipFromAn(
    zoneID: string,
    params: IPAddressManagementAddressMapDeleteAZoneMembershipFromAnParams,
    options?: RequestOptions,
  ): APIPromise<unknown> {
    const { address_map_id, account_id } = params;
    return this._client.delete(
      __scalarPath`/accounts/${account_id}/addressing/address_maps/${address_map_id}/zones/${zoneID}`,
      options,
    );
  }

  /**
   * Add a zone as a member of a particular address map.
   *
   * @param {string} zoneID
   * @param {IPAddressManagementAddressMapCreateAZoneMembershipToAnParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<unknown>} Add a zone membership to an Address Map response
   *
   * @example
   * ```ts
   * const response = await client.ipAddressManagementAddressMaps.createAZoneMembershipToAn('zoneId', {
   *   address_map_id: {},
   *   account_id: {},
   * });
   * ```
   */
  createAZoneMembershipToAn(
    zoneID: string,
    params: IPAddressManagementAddressMapCreateAZoneMembershipToAnParams,
    options?: RequestOptions,
  ): APIPromise<unknown> {
    const { address_map_id, account_id } = params;
    return this._client.put(
      __scalarPath`/accounts/${account_id}/addressing/address_maps/${address_map_id}/zones/${zoneID}`,
      options,
    );
  }
}

export interface IPAddressManagementAddressMapCreateParams {
  description?: unknown;
  enabled?: unknown;
  ips?: Array<unknown>;
  memberships?: unknown;
}

export interface IPAddressManagementAddressMapDeleteParams {
  account_id: string;
}

export interface IPAddressManagementAddressMapDetailsParams {
  account_id: string;
}

export interface IPAddressManagementAddressMapUpdateParams {
  /**
   * Path param
   */
  account_id: string;
  /**
   * Body param
   */
  default_sni?: unknown;
  /**
   * Body param
   */
  description?: unknown;
  /**
   * Body param
   */
  enabled?: unknown;
}

export interface IPAddressManagementAddressMapDeleteAnAccountMembershipFromAnParams {
  account_id: string;
  address_map_id: string;
}

export interface IPAddressManagementAddressMapCreateAnAccountMembershipToAnParams {
  account_id: string;
  address_map_id: string;
}

export interface IPAddressManagementAddressMapDeleteAnFromAnParams {
  address_map_id: string;
  account_id: string;
}

export interface IPAddressManagementAddressMapCreateAnToAnParams {
  address_map_id: string;
  account_id: string;
}

export interface IPAddressManagementAddressMapDeleteAZoneMembershipFromAnParams {
  address_map_id: string;
  account_id: string;
}

export interface IPAddressManagementAddressMapCreateAZoneMembershipToAnParams {
  address_map_id: string;
  account_id: string;
}
export declare namespace IPAddressManagementAddressMaps {
  export {
    type IPAddressManagementAddressMapCreateParams as IPAddressManagementAddressMapCreateParams,
    type IPAddressManagementAddressMapDeleteParams as IPAddressManagementAddressMapDeleteParams,
    type IPAddressManagementAddressMapDetailsParams as IPAddressManagementAddressMapDetailsParams,
    type IPAddressManagementAddressMapUpdateParams as IPAddressManagementAddressMapUpdateParams,
    type IPAddressManagementAddressMapDeleteAnAccountMembershipFromAnParams as IPAddressManagementAddressMapDeleteAnAccountMembershipFromAnParams,
    type IPAddressManagementAddressMapCreateAnAccountMembershipToAnParams as IPAddressManagementAddressMapCreateAnAccountMembershipToAnParams,
    type IPAddressManagementAddressMapDeleteAnFromAnParams as IPAddressManagementAddressMapDeleteAnFromAnParams,
    type IPAddressManagementAddressMapCreateAnToAnParams as IPAddressManagementAddressMapCreateAnToAnParams,
    type IPAddressManagementAddressMapDeleteAZoneMembershipFromAnParams as IPAddressManagementAddressMapDeleteAZoneMembershipFromAnParams,
    type IPAddressManagementAddressMapCreateAZoneMembershipToAnParams as IPAddressManagementAddressMapCreateAZoneMembershipToAnParams,
  };
}
