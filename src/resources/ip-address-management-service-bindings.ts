// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from '../resource';
import { APIPromise } from '../api-promise';
import type { RequestOptions } from '../internal/request-options';
import { path as __scalarPath } from '../internal/utils/path';

export class IPAddressManagementServiceBindings extends APIResource {
  /**
   * List the Cloudflare services this prefix is currently bound to. Traffic sent to an address within an IP prefix will be routed to the Cloudflare service of the most-specific Service Binding matching the address.
   * **Example:** binding `192.0.2.0/24` to Cloudflare Magic Transit and `192.0.2.1/32` to the Cloudflare CDN would route traffic for `192.0.2.1` to the CDN, and traffic for all other IPs in the prefix to Cloudflare Magic Transit.
   *
   *
   * @param {string} prefixID
   * @param {IPAddressManagementServiceBindingList2Params} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<IPAddressManagementServiceBindingList2Response>} Service Bindings attached to the Prefix
   *
   * @example
   * ```ts
   * const ipAddressManagementServiceBinding = await client.ipAddressManagementServiceBindings.list2('prefixId', {
   *   account_id: {},
   * });
   * ```
   */
  list2(
    prefixID: string,
    params: IPAddressManagementServiceBindingList2Params,
    options?: RequestOptions,
  ): APIPromise<IPAddressManagementServiceBindingList2Response> {
    const { account_id } = params;
    return this._client.get(
      __scalarPath`/accounts/${account_id}/addressing/prefixes/${prefixID}/bindings`,
      options,
    );
  }

  /**
   * Creates a new Service Binding, routing traffic to IPs within the given CIDR to a service running on Cloudflare's network.
   * **NOTE:** The first Service Binding created for an IP Prefix must exactly match the IP Prefix's CIDR. Subsequent Service Bindings may be created with a more-specific CIDR. Refer to the  [Service Bindings Documentation](https://developers.cloudflare.com/byoip/service-bindings/) for compatibility details.
   *
   *
   * @param {string} prefixID
   * @param {IPAddressManagementServiceBindingCreateParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<IPAddressManagementServiceBindingCreateResponse>} The created Service Binding
   *
   * @example
   * ```ts
   * const ipAddressManagementServiceBinding = await client.ipAddressManagementServiceBindings.create('prefixId', {
   *   account_id: {},
   * });
   * ```
   */
  create(
    prefixID: string,
    params: IPAddressManagementServiceBindingCreateParams,
    options?: RequestOptions,
  ): APIPromise<IPAddressManagementServiceBindingCreateResponse> {
    const { account_id, body } = params;
    return this._client.post(__scalarPath`/accounts/${account_id}/addressing/prefixes/${prefixID}/bindings`, {
      body,
      ...options,
    });
  }

  /**
   * Delete a Service Binding
   *
   * @param {string} bindingID
   * @param {IPAddressManagementServiceBindingDeleteParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<unknown>} Service Binding deleted
   *
   * @example
   * ```ts
   * const response = await client.ipAddressManagementServiceBindings.delete('bindingId', {
   *   account_id: {},
   *   prefix_id: {},
   * });
   * ```
   */
  delete(
    bindingID: string,
    params: IPAddressManagementServiceBindingDeleteParams,
    options?: RequestOptions,
  ): APIPromise<unknown> {
    const { account_id, prefix_id } = params;
    return this._client.delete(
      __scalarPath`/accounts/${account_id}/addressing/prefixes/${prefix_id}/bindings/${bindingID}`,
      options,
    );
  }

  /**
   * Fetch a single Service Binding
   *
   * @param {string} bindingID
   * @param {IPAddressManagementServiceBindingRetrieveParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<IPAddressManagementServiceBindingRetrieveResponse>} The Service Binding with the requested ID
   *
   * @example
   * ```ts
   * const ipAddressManagementServiceBinding = await client.ipAddressManagementServiceBindings.retrieve(
   *   'bindingId',
   *   {
   *     account_id: {},
   *     prefix_id: {},
   *   },
   * );
   * ```
   */
  retrieve(
    bindingID: string,
    params: IPAddressManagementServiceBindingRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<IPAddressManagementServiceBindingRetrieveResponse> {
    const { account_id, prefix_id } = params;
    return this._client.get(
      __scalarPath`/accounts/${account_id}/addressing/prefixes/${prefix_id}/bindings/${bindingID}`,
      options,
    );
  }

  /**
   * Bring-Your-Own IP (BYOIP) prefixes onboarded to Cloudflare must be bound to a service running on the Cloudflare network to enable a Cloudflare product on the IP addresses. This endpoint can be used as a reference of available services on the Cloudflare network, and their service IDs.
   *
   *
   * @param {string} accountID
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<IPAddressManagementServiceBindingListResponse>} Service names and IDs
   *
   * @example
   * ```ts
   * const ipAddressManagementServiceBinding = await client.ipAddressManagementServiceBindings.list('accountId');
   * ```
   */
  list(
    accountID: string,
    options?: RequestOptions,
  ): APIPromise<IPAddressManagementServiceBindingListResponse> {
    return this._client.get(__scalarPath`/accounts/${accountID}/addressing/services`, options);
  }
}

export interface IPAddressManagementServiceBindingList2Params {
  account_id: string;
}

export type IPAddressManagementServiceBindingList2Response = unknown &
  IPAddressManagementServiceBindingList2Response.IPAddressManagementServiceBindingList2ResponseItem;

export namespace IPAddressManagementServiceBindingList2Response {
  export interface IPAddressManagementServiceBindingList2ResponseItem {
    result?: Array<unknown>;
  }
}

export interface IPAddressManagementServiceBindingCreateParams {
  /**
   * Path param
   */
  account_id: string;
  /**
   * Body param
   */
  body?: unknown;
}

export type IPAddressManagementServiceBindingCreateResponse = unknown &
  IPAddressManagementServiceBindingCreateResponse.IPAddressManagementServiceBindingCreateResponseItem;

export namespace IPAddressManagementServiceBindingCreateResponse {
  export interface IPAddressManagementServiceBindingCreateResponseItem {
    result?: unknown;
  }
}

export interface IPAddressManagementServiceBindingDeleteParams {
  account_id: string;
  prefix_id: string;
}

export interface IPAddressManagementServiceBindingRetrieveParams {
  account_id: string;
  prefix_id: string;
}

export type IPAddressManagementServiceBindingRetrieveResponse = unknown &
  IPAddressManagementServiceBindingRetrieveResponse.IPAddressManagementServiceBindingRetrieveResponseItem;

export namespace IPAddressManagementServiceBindingRetrieveResponse {
  export interface IPAddressManagementServiceBindingRetrieveResponseItem {
    result?: unknown;
  }
}

export type IPAddressManagementServiceBindingListResponse = unknown &
  IPAddressManagementServiceBindingListResponse.IPAddressManagementServiceBindingListResponseItem;

export namespace IPAddressManagementServiceBindingListResponse {
  export interface IPAddressManagementServiceBindingListResponseItem {
    result?: Array<IPAddressManagementServiceBindingListResponseItem.Result>;
  }

  export namespace IPAddressManagementServiceBindingListResponseItem {
    export interface Result {
      id?: unknown;
      name?: unknown;
    }
  }
}
export declare namespace IPAddressManagementServiceBindings {
  export {
    type IPAddressManagementServiceBindingList2Response as IPAddressManagementServiceBindingList2Response,
    type IPAddressManagementServiceBindingCreateResponse as IPAddressManagementServiceBindingCreateResponse,
    type IPAddressManagementServiceBindingRetrieveResponse as IPAddressManagementServiceBindingRetrieveResponse,
    type IPAddressManagementServiceBindingListResponse as IPAddressManagementServiceBindingListResponse,
    type IPAddressManagementServiceBindingList2Params as IPAddressManagementServiceBindingList2Params,
    type IPAddressManagementServiceBindingCreateParams as IPAddressManagementServiceBindingCreateParams,
    type IPAddressManagementServiceBindingDeleteParams as IPAddressManagementServiceBindingDeleteParams,
    type IPAddressManagementServiceBindingRetrieveParams as IPAddressManagementServiceBindingRetrieveParams,
  };
}
