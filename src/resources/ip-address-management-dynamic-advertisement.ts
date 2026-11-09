// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from '../resource';
import { APIPromise } from '../api-promise';
import type { RequestOptions } from '../internal/request-options';
import { path as __scalarPath } from '../internal/utils/path';

export class IPAddressManagementDynamicAdvertisement extends APIResource {
  /**
   * View the current advertisement state for a prefix.
   *
   * **Deprecated:** Prefer the BGP Prefixes endpoints, which additionally allow for advertising and withdrawing
   * subnets of an IP prefix.
   *
   *
   * @param {string} prefixID
   * @param {IPAddressManagementDynamicAdvertisementListStatusParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<unknown>} Get Advertisement Status response
   *
   * @example
   * ```ts
   * const response = await client.ipAddressManagementDynamicAdvertisement.listStatus('prefixId', {
   *   account_id: {},
   * });
   * ```
   *
   * @deprecated
   */
  listStatus(
    prefixID: string,
    params: IPAddressManagementDynamicAdvertisementListStatusParams,
    options?: RequestOptions,
  ): APIPromise<unknown> {
    const { account_id } = params;
    return this._client.get(
      __scalarPath`/accounts/${account_id}/addressing/prefixes/${prefixID}/bgp/status`,
      options,
    );
  }

  /**
   * Advertise or withdraw the BGP route for a prefix.
   *
   * **Deprecated:** Prefer the BGP Prefixes endpoints, which additionally allow for advertising and withdrawing
   * subnets of an IP prefix.
   *
   *
   * @param {string} prefixID
   * @param {IPAddressManagementDynamicAdvertisementUpdatePrefixStatusParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<unknown>} Update Prefix Dynamic Advertisement Status response
   *
   * @example
   * ```ts
   * const response = await client.ipAddressManagementDynamicAdvertisement.updatePrefixStatus('prefixId', {
   *   account_id: {},
   *   advertised: {},
   * });
   * ```
   *
   * @deprecated
   */
  updatePrefixStatus(
    prefixID: string,
    params: IPAddressManagementDynamicAdvertisementUpdatePrefixStatusParams,
    options?: RequestOptions,
  ): APIPromise<unknown> {
    const { account_id, ...body } = params;
    return this._client.patch(
      __scalarPath`/accounts/${account_id}/addressing/prefixes/${prefixID}/bgp/status`,
      { body, ...options },
    );
  }
}

export interface IPAddressManagementDynamicAdvertisementListStatusParams {
  account_id: string;
}

export interface IPAddressManagementDynamicAdvertisementUpdatePrefixStatusParams {
  /**
   * Path param
   */
  account_id: string;
  /**
   * Body param
   */
  advertised: unknown;
}
export declare namespace IPAddressManagementDynamicAdvertisement {
  export {
    type IPAddressManagementDynamicAdvertisementListStatusParams as IPAddressManagementDynamicAdvertisementListStatusParams,
    type IPAddressManagementDynamicAdvertisementUpdatePrefixStatusParams as IPAddressManagementDynamicAdvertisementUpdatePrefixStatusParams,
  };
}
