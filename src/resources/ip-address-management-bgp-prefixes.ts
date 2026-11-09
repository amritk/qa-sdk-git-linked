// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from '../resource';
import { APIPromise } from '../api-promise';
import type { RequestOptions } from '../internal/request-options';
import { path as __scalarPath } from '../internal/utils/path';

export class IPAddressManagementBGPPrefixes extends APIResource {
  /**
   * List all BGP Prefixes within the specified IP Prefix. BGP Prefixes are used to control which specific subnets are advertised to the Internet. It is possible to advertise subnets more specific than an IP Prefix by creating more specific BGP Prefixes.
   *
   * @param {string} prefixID
   * @param {IPAddressManagementBGPPrefixListParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<unknown>} List BGP Prefixes response
   *
   * @example
   * ```ts
   * const response = await client.ipAddressManagementBGPPrefixes.list('prefixId', {
   *   account_id: {},
   * });
   * ```
   */
  list(
    prefixID: string,
    params: IPAddressManagementBGPPrefixListParams,
    options?: RequestOptions,
  ): APIPromise<unknown> {
    const { account_id } = params;
    return this._client.get(
      __scalarPath`/accounts/${account_id}/addressing/prefixes/${prefixID}/bgp/prefixes`,
      options,
    );
  }

  /**
   * Create a BGP prefix, controlling the BGP advertisement status of a specific subnet. When created, BGP prefixes are initially withdrawn, and can be advertised with the Update BGP Prefix API.
   *
   * @param {string} prefixID
   * @param {IPAddressManagementBGPPrefixCreateParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<unknown>} Create BGP Prefix response
   *
   * @example
   * ```ts
   * const response = await client.ipAddressManagementBGPPrefixes.create('prefixId', {
   *   account_id: {},
   *   body: {},
   * });
   * ```
   */
  create(
    prefixID: string,
    params: IPAddressManagementBGPPrefixCreateParams,
    options?: RequestOptions,
  ): APIPromise<unknown> {
    const { account_id, body } = params;
    return this._client.post(
      __scalarPath`/accounts/${account_id}/addressing/prefixes/${prefixID}/bgp/prefixes`,
      { body, ...options },
    );
  }

  /**
   * Delete a BGP Prefix associated with the specified IP Prefix. A BGP Prefix must be withdrawn before it can be deleted.
   *
   * @param {string} bgpPrefixID
   * @param {IPAddressManagementBGPPrefixDeleteParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<unknown>} Delete BGP Prefix response
   *
   * @example
   * ```ts
   * const response = await client.ipAddressManagementBGPPrefixes.delete('bgpPrefixId', {
   *   account_id: {},
   *   prefix_id: {},
   * });
   * ```
   */
  delete(
    bgpPrefixID: string,
    params: IPAddressManagementBGPPrefixDeleteParams,
    options?: RequestOptions,
  ): APIPromise<unknown> {
    const { account_id, prefix_id } = params;
    return this._client.delete(
      __scalarPath`/accounts/${account_id}/addressing/prefixes/${prefix_id}/bgp/prefixes/${bgpPrefixID}`,
      options,
    );
  }

  /**
   * Retrieve a single BGP Prefix according to its identifier
   *
   * @param {string} bgpPrefixID
   * @param {IPAddressManagementBGPPrefixFetchParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<unknown>} Fetch BGP Prefix response
   *
   * @example
   * ```ts
   * const response = await client.ipAddressManagementBGPPrefixes.fetch('bgpPrefixId', {
   *   account_id: {},
   *   prefix_id: {},
   * });
   * ```
   */
  fetch(
    bgpPrefixID: string,
    params: IPAddressManagementBGPPrefixFetchParams,
    options?: RequestOptions,
  ): APIPromise<unknown> {
    const { account_id, prefix_id } = params;
    return this._client.get(
      __scalarPath`/accounts/${account_id}/addressing/prefixes/${prefix_id}/bgp/prefixes/${bgpPrefixID}`,
      options,
    );
  }

  /**
   * Update the properties of a BGP Prefix, such as the on demand advertisement status (advertised or withdrawn).
   *
   * @param {string} bgpPrefixID
   * @param {IPAddressManagementBGPPrefixUpdateParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<unknown>} Update BGP Prefix response
   *
   * @example
   * ```ts
   * const response = await client.ipAddressManagementBGPPrefixes.update('bgpPrefixId', {
   *   account_id: {},
   *   prefix_id: {},
   *   body: {},
   * });
   * ```
   */
  update(
    bgpPrefixID: string,
    params: IPAddressManagementBGPPrefixUpdateParams,
    options?: RequestOptions,
  ): APIPromise<unknown> {
    const { account_id, prefix_id, body } = params;
    return this._client.patch(
      __scalarPath`/accounts/${account_id}/addressing/prefixes/${prefix_id}/bgp/prefixes/${bgpPrefixID}`,
      { body, ...options },
    );
  }
}

export interface IPAddressManagementBGPPrefixListParams {
  account_id: string;
}

export interface IPAddressManagementBGPPrefixCreateParams {
  /**
   * Path param
   */
  account_id: string;
  /**
   * Body param
   */
  body: unknown;
}

export interface IPAddressManagementBGPPrefixDeleteParams {
  account_id: string;
  prefix_id: string;
}

export interface IPAddressManagementBGPPrefixFetchParams {
  account_id: string;
  prefix_id: string;
}

export interface IPAddressManagementBGPPrefixUpdateParams {
  /**
   * Path param
   */
  account_id: string;
  /**
   * Path param
   */
  prefix_id: string;
  /**
   * Body param
   */
  body: unknown;
}
export declare namespace IPAddressManagementBGPPrefixes {
  export {
    type IPAddressManagementBGPPrefixListParams as IPAddressManagementBGPPrefixListParams,
    type IPAddressManagementBGPPrefixCreateParams as IPAddressManagementBGPPrefixCreateParams,
    type IPAddressManagementBGPPrefixDeleteParams as IPAddressManagementBGPPrefixDeleteParams,
    type IPAddressManagementBGPPrefixFetchParams as IPAddressManagementBGPPrefixFetchParams,
    type IPAddressManagementBGPPrefixUpdateParams as IPAddressManagementBGPPrefixUpdateParams,
  };
}
