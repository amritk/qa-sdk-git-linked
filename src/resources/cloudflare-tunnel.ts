// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from '../resource';
import { APIPromise } from '../api-promise';
import type { RequestOptions } from '../internal/request-options';
import { path as __scalarPath } from '../internal/utils/path';

export class CloudflareTunnel extends APIResource {
  /**
   * Lists and filters Cloudflare Tunnels in an account.
   *
   * @param {string} accountID
   * @param {CloudflareTunnelListParams} [query] - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<unknown>} List Cloudflare Tunnels response
   *
   * @example
   * ```ts
   * const response = await client.cloudflareTunnel.list('accountId');
   * ```
   */
  list(
    accountID: string,
    query: CloudflareTunnelListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<unknown> {
    return this._client.get(__scalarPath`/accounts/${accountID}/cfd_tunnel`, { query, ...options });
  }

  /**
   * Creates a remotely or locally managed Cloudflare Tunnel in an account. After creation, retrieve its token and run cloudflared to establish the connector connection.
   *
   * @param {string} accountID
   * @param {CloudflareTunnelCreateAParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<unknown>} Create a Cloudflare Tunnel response
   *
   * @example
   * ```ts
   * const response = await client.cloudflareTunnel.createA('accountId', {
   *   name: {},
   * });
   * ```
   */
  createA(
    accountID: string,
    body: CloudflareTunnelCreateAParams,
    options?: RequestOptions,
  ): APIPromise<unknown> {
    return this._client.post(__scalarPath`/accounts/${accountID}/cfd_tunnel`, { body, ...options });
  }

  /**
   * Permanently deletes a Cloudflare Tunnel from an account. The tunnel must have no active connections.
   *
   * @param {string} tunnelID
   * @param {CloudflareTunnelDeleteAParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<unknown>} Delete a Cloudflare Tunnel response
   *
   * @example
   * ```ts
   * const response = await client.cloudflareTunnel.deleteA('tunnelId', {
   *   account_id: {},
   * });
   * ```
   */
  deleteA(
    tunnelID: string,
    params: CloudflareTunnelDeleteAParams,
    options?: RequestOptions,
  ): APIPromise<unknown> {
    const { account_id } = params;
    return this._client.delete(__scalarPath`/accounts/${account_id}/cfd_tunnel/${tunnelID}`, options);
  }

  /**
   * Fetches a single Cloudflare Tunnel.
   *
   * @param {string} tunnelID
   * @param {CloudflareTunnelRetrieveAParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<unknown>} Get a Cloudflare Tunnel response
   *
   * @example
   * ```ts
   * const response = await client.cloudflareTunnel.retrieveA('tunnelId', {
   *   account_id: {},
   * });
   * ```
   */
  retrieveA(
    tunnelID: string,
    params: CloudflareTunnelRetrieveAParams,
    options?: RequestOptions,
  ): APIPromise<unknown> {
    const { account_id } = params;
    return this._client.get(__scalarPath`/accounts/${account_id}/cfd_tunnel/${tunnelID}`, options);
  }

  /**
   * Updates the name or secret of an existing Cloudflare Tunnel.
   *
   * @param {string} tunnelID
   * @param {CloudflareTunnelUpdateAParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<unknown>} Update a Cloudflare Tunnel response
   *
   * @example
   * ```ts
   * const response = await client.cloudflareTunnel.updateA('tunnelId', {
   *   account_id: {},
   * });
   * ```
   */
  updateA(
    tunnelID: string,
    params: CloudflareTunnelUpdateAParams,
    options?: RequestOptions,
  ): APIPromise<unknown> {
    const { account_id, ...body } = params;
    return this._client.patch(__scalarPath`/accounts/${account_id}/cfd_tunnel/${tunnelID}`, {
      body,
      ...options,
    });
  }

  /**
   * Removes a connection (aka Cloudflare Tunnel Connector) from a Cloudflare Tunnel independently of its current state. If no connector id (client_id) is provided all connectors will be removed. We recommend running this command after rotating tokens.
   *
   * @param {string} tunnelID
   * @param {CloudflareTunnelCleanUpConnectionsParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<unknown>} Clean up Cloudflare Tunnel connections response
   *
   * @example
   * ```ts
   * const response = await client.cloudflareTunnel.cleanUpConnections('tunnelId', {
   *   account_id: {},
   * });
   * ```
   */
  cleanUpConnections(
    tunnelID: string,
    params: CloudflareTunnelCleanUpConnectionsParams,
    options?: RequestOptions,
  ): APIPromise<unknown> {
    const { account_id, client_id } = params;
    return this._client.delete(__scalarPath`/accounts/${account_id}/cfd_tunnel/${tunnelID}/connections`, {
      query: { client_id },
      ...options,
    });
  }

  /**
   * Lists the connections for a Cloudflare Tunnel, including connector IDs, cloudflared versions, and Cloudflare locations.
   *
   * @param {string} tunnelID
   * @param {CloudflareTunnelListConnectionsParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<unknown>} List Cloudflare Tunnel connections response
   *
   * @example
   * ```ts
   * const response = await client.cloudflareTunnel.listConnections('tunnelId', {
   *   account_id: {},
   * });
   * ```
   */
  listConnections(
    tunnelID: string,
    params: CloudflareTunnelListConnectionsParams,
    options?: RequestOptions,
  ): APIPromise<unknown> {
    const { account_id } = params;
    return this._client.get(
      __scalarPath`/accounts/${account_id}/cfd_tunnel/${tunnelID}/connections`,
      options,
    );
  }

  /**
   * Retrieves a connector and its connection details for a Cloudflare Tunnel, including its cloudflared version, architecture, and connected Cloudflare locations.
   *
   * @param {string} connectorID
   * @param {CloudflareTunnelRetrieveConnectorParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<unknown>} Get Cloudflare Tunnel connector response
   *
   * @example
   * ```ts
   * const response = await client.cloudflareTunnel.retrieveConnector('connectorId', {
   *   account_id: {},
   *   tunnel_id: {},
   * });
   * ```
   */
  retrieveConnector(
    connectorID: string,
    params: CloudflareTunnelRetrieveConnectorParams,
    options?: RequestOptions,
  ): APIPromise<unknown> {
    const { account_id, tunnel_id } = params;
    return this._client.get(
      __scalarPath`/accounts/${account_id}/cfd_tunnel/${tunnel_id}/connectors/${connectorID}`,
      options,
    );
  }

  /**
   * Creates a short-lived management token for the requested Tunnel management resources, such as streaming logs. Treat the token as a secret.
   *
   * @param {string} tunnelID
   * @param {CloudflareTunnelCreateAManagementTokenParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<unknown>} Get a Cloudflare Tunnel management token response
   *
   * @example
   * ```ts
   * const response = await client.cloudflareTunnel.createAManagementToken('tunnelId', {
   *   account_id: {},
   *   resources: [{}],
   * });
   * ```
   */
  createAManagementToken(
    tunnelID: string,
    params: CloudflareTunnelCreateAManagementTokenParams,
    options?: RequestOptions,
  ): APIPromise<unknown> {
    const { account_id, ...body } = params;
    return this._client.post(__scalarPath`/accounts/${account_id}/cfd_tunnel/${tunnelID}/management`, {
      body,
      ...options,
    });
  }

  /**
   * Retrieves the token used to run cloudflared and associate it with a specific Cloudflare Tunnel. Treat the token as a secret.
   *
   * @param {string} tunnelID
   * @param {CloudflareTunnelListATokenParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<unknown>} Get a Cloudflare Tunnel token response
   *
   * @example
   * ```ts
   * const response = await client.cloudflareTunnel.listAToken('tunnelId', {
   *   account_id: {},
   * });
   * ```
   */
  listAToken(
    tunnelID: string,
    params: CloudflareTunnelListATokenParams,
    options?: RequestOptions,
  ): APIPromise<unknown> {
    const { account_id } = params;
    return this._client.get(__scalarPath`/accounts/${account_id}/cfd_tunnel/${tunnelID}/token`, options);
  }
}

export interface CloudflareTunnelListParams {
  name?: unknown;
  /**
   * If `true`, only include deleted tunnels. If `false`, exclude deleted tunnels. If empty, all tunnels will be included.
   */
  is_deleted?: boolean;
  existed_at?: unknown;
  uuid?: unknown;
  /**
   * @format date-time
   */
  was_active_at?: string;
  /**
   * @format date-time
   */
  was_inactive_at?: string;
  include_prefix?: string;
  exclude_prefix?: string;
  status?: unknown;
  per_page?: unknown;
  page?: unknown;
}

export interface CloudflareTunnelCreateAParams {
  name: unknown;
  config_src?: unknown;
  tunnel_secret?: unknown;
}

export interface CloudflareTunnelDeleteAParams {
  account_id: string;
}

export interface CloudflareTunnelRetrieveAParams {
  account_id: string;
}

export interface CloudflareTunnelUpdateAParams {
  /**
   * Path param
   */
  account_id: string;
  /**
   * Body param
   */
  name?: unknown;
  /**
   * Body param
   */
  tunnel_secret?: unknown;
}

export interface CloudflareTunnelCleanUpConnectionsParams {
  /**
   * Path param
   */
  account_id: string;
  /**
   * Query param
   */
  client_id?: unknown;
}

export interface CloudflareTunnelListConnectionsParams {
  account_id: string;
}

export interface CloudflareTunnelRetrieveConnectorParams {
  account_id: string;
  tunnel_id: string;
}

export interface CloudflareTunnelCreateAManagementTokenParams {
  /**
   * Path param
   */
  account_id: string;
  /**
   * Body param
   */
  resources: Array<unknown>;
}

export interface CloudflareTunnelListATokenParams {
  account_id: string;
}
export declare namespace CloudflareTunnel {
  export {
    type CloudflareTunnelListParams as CloudflareTunnelListParams,
    type CloudflareTunnelCreateAParams as CloudflareTunnelCreateAParams,
    type CloudflareTunnelDeleteAParams as CloudflareTunnelDeleteAParams,
    type CloudflareTunnelRetrieveAParams as CloudflareTunnelRetrieveAParams,
    type CloudflareTunnelUpdateAParams as CloudflareTunnelUpdateAParams,
    type CloudflareTunnelCleanUpConnectionsParams as CloudflareTunnelCleanUpConnectionsParams,
    type CloudflareTunnelListConnectionsParams as CloudflareTunnelListConnectionsParams,
    type CloudflareTunnelRetrieveConnectorParams as CloudflareTunnelRetrieveConnectorParams,
    type CloudflareTunnelCreateAManagementTokenParams as CloudflareTunnelCreateAManagementTokenParams,
    type CloudflareTunnelListATokenParams as CloudflareTunnelListATokenParams,
  };
}
