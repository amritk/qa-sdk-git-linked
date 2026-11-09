// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from '../resource';
import { APIPromise } from '../api-promise';
import type { RequestOptions } from '../internal/request-options';
import { path as __scalarPath } from '../internal/utils/path';

export class CloudflareTunnelConfiguration extends APIResource {
  /**
   * Retrieves the configuration for a remotely managed Cloudflare Tunnel.
   *
   * @param {string} tunnelID
   * @param {CloudflareTunnelConfigurationListParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<unknown>} Get configuration response
   *
   * @example
   * ```ts
   * const response = await client.cloudflareTunnelConfiguration.list('tunnelId', {
   *   account_id: {},
   * });
   * ```
   */
  list(
    tunnelID: string,
    params: CloudflareTunnelConfigurationListParams,
    options?: RequestOptions,
  ): APIPromise<unknown> {
    const { account_id } = params;
    return this._client.get(
      __scalarPath`/accounts/${account_id}/cfd_tunnel/${tunnelID}/configurations`,
      options,
    );
  }

  /**
   * Replaces the configuration for a remotely managed Cloudflare Tunnel, including its ingress rules and origin request settings.
   *
   * @param {string} tunnelID
   * @param {CloudflareTunnelConfigurationPutParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<unknown>} Put configuration response
   *
   * @example
   * ```ts
   * const response = await client.cloudflareTunnelConfiguration.put('tunnelId', {
   *   account_id: {},
   * });
   * ```
   */
  put(
    tunnelID: string,
    params: CloudflareTunnelConfigurationPutParams,
    options?: RequestOptions,
  ): APIPromise<unknown> {
    const { account_id, ...body } = params;
    return this._client.put(__scalarPath`/accounts/${account_id}/cfd_tunnel/${tunnelID}/configurations`, {
      body,
      ...options,
    });
  }
}

export interface CloudflareTunnelConfigurationListParams {
  account_id: string;
}

export interface CloudflareTunnelConfigurationPutParams {
  /**
   * Path param
   */
  account_id: string;
  /**
   * Body param
   */
  config?: unknown;
}
export declare namespace CloudflareTunnelConfiguration {
  export {
    type CloudflareTunnelConfigurationListParams as CloudflareTunnelConfigurationListParams,
    type CloudflareTunnelConfigurationPutParams as CloudflareTunnelConfigurationPutParams,
  };
}
