// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from '../resource';
import { APIPromise } from '../api-promise';
import type { RequestOptions } from '../internal/request-options';
import { path as __scalarPath } from '../internal/utils/path';

export class McpPortal extends APIResource {
  /**
   * Lists all MCP portals configured for the account.
   *
   * @param {string} accountID
   * @param {McpPortalAPIListParams} [query] - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<McpPortalAPIListResponse>} List objects
   *
   * @example
   * ```ts
   * const mcpPortal = await client.mcpPortal.apiList('a86a8f5c339544d7bdc89926de14fb8c', {
   *   page: 1,
   *   per_page: 20,
   * });
   * ```
   */
  apiList(
    accountID: string,
    query: McpPortalAPIListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<McpPortalAPIListResponse> {
    return this._client.get(__scalarPath`/accounts/${accountID}/access/ai-controls/mcp/portals`, {
      query,
      ...options,
    });
  }

  /**
   * Creates a new MCP portal for managing AI tool access through Cloudflare Access.
   *
   * @param {string} accountID
   * @param {McpPortalAPICreateParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<McpPortalAPICreateResponse>} Returns the created Object
   *
   * @example
   * ```ts
   * const mcpPortal = await client.mcpPortal.apiCreate('a86a8f5c339544d7bdc89926de14fb8c', {
   *   hostname: 'example.com',
   *   id: 'my-mcp-portal',
   *   name: 'My MCP Portal',
   *   secure_web_gateway: false,
   * });
   * ```
   */
  apiCreate(
    accountID: string,
    body: McpPortalAPICreateParams,
    options?: RequestOptions,
  ): APIPromise<McpPortalAPICreateResponse> {
    return this._client.post(__scalarPath`/accounts/${accountID}/access/ai-controls/mcp/portals`, {
      body,
      ...options,
    });
  }

  /**
   * Deletes an MCP portal from the account.
   *
   * @param {string} id - Unique identifier for the MCP portal.
   * @param {McpPortalAPIDeleteParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<McpPortalAPIDeleteResponse>} Returns the Object if it was successfully deleted
   *
   * @example
   * ```ts
   * const mcpPortal = await client.mcpPortal.apiDelete('my-mcp-portal', {
   *   account_id: 'a86a8f5c339544d7bdc89926de14fb8c',
   * });
   * ```
   */
  apiDelete(
    id: string,
    params: McpPortalAPIDeleteParams,
    options?: RequestOptions,
  ): APIPromise<McpPortalAPIDeleteResponse> {
    const { account_id } = params;
    return this._client.delete(
      __scalarPath`/accounts/${account_id}/access/ai-controls/mcp/portals/${id}`,
      options,
    );
  }

  /**
   * Read the details of a single MCP Portal, including its configured servers.
   *
   * @param {string} id - Unique identifier for the MCP portal.
   * @param {McpPortalAPIFetchGatewaysParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<McpPortalAPIFetchGatewaysResponse>} Returns a single object if found
   *
   * @example
   * ```ts
   * const mcpPortal = await client.mcpPortal.apiFetchGateways('my-mcp-portal', {
   *   account_id: 'a86a8f5c339544d7bdc89926de14fb8c',
   * });
   * ```
   */
  apiFetchGateways(
    id: string,
    params: McpPortalAPIFetchGatewaysParams,
    options?: RequestOptions,
  ): APIPromise<McpPortalAPIFetchGatewaysResponse> {
    const { account_id } = params;
    return this._client.get(
      __scalarPath`/accounts/${account_id}/access/ai-controls/mcp/portals/${id}`,
      options,
    );
  }

  /**
   * Updates an MCP portal configuration.
   *
   * @param {string} id - Unique identifier for the MCP portal.
   * @param {McpPortalAPIUpdateParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<McpPortalAPIUpdateResponse>} Returns the updated Object
   *
   * @example
   * ```ts
   * const mcpPortal = await client.mcpPortal.apiUpdate('my-mcp-portal', {
   *   account_id: 'a86a8f5c339544d7bdc89926de14fb8c',
   *   secure_web_gateway: false,
   * });
   * ```
   */
  apiUpdate(
    id: string,
    params: McpPortalAPIUpdateParams,
    options?: RequestOptions,
  ): APIPromise<McpPortalAPIUpdateResponse> {
    const { account_id, ...body } = params;
    return this._client.put(__scalarPath`/accounts/${account_id}/access/ai-controls/mcp/portals/${id}`, {
      body,
      ...options,
    });
  }

  /**
   * Resolves the OAuth redirect URI to register for a portal and server based on the server's current shared callback setting. Use the returned value when setting up a new manual OAuth registration. This value is for display only: existing manual OAuth registrations continue using their stored redirect URI, so changing callback settings can make this result differ from the URI used at runtime.
   *
   * @param {string} serverID - Unique identifier for the MCP server.
   * @param {McpPortalAPIEffectiveRedirectURIParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<McpPortalAPIEffectiveRedirectURIResponse>} Returns the effective redirect URI and its source.
   *
   * @example
   * ```ts
   * const mcpPortal = await client.mcpPortal.apiEffectiveRedirectURI('my-mcp-server', {
   *   portal_id: 'my-mcp-portal',
   *   account_id: 'a86a8f5c339544d7bdc89926de14fb8c',
   * });
   * ```
   */
  apiEffectiveRedirectURI(
    serverID: string,
    params: McpPortalAPIEffectiveRedirectURIParams,
    options?: RequestOptions,
  ): APIPromise<McpPortalAPIEffectiveRedirectURIResponse> {
    const { portal_id, account_id } = params;
    return this._client.get(
      __scalarPath`/accounts/${account_id}/access/ai-controls/mcp/portals/${portal_id}/servers/${serverID}/effective-redirect-uri`,
      options,
    );
  }
}

export interface McpPortalAPIListParams {
  /**
   * @default 1
   * @minimum 1
   */
  page?: number;
  /**
   * @default 20
   * @minimum 1
   * @maximum 100
   */
  per_page?: number;
  /**
   * Search by id, name, hostname
   */
  search?: string;
}

export interface McpPortalAPIListResponse {
  result: Array<McpPortalAPIListResponse.Result>;
  success: boolean;
}

export namespace McpPortalAPIListResponse {
  export interface Result {
    /**
     * Hostname where the MCP portal is available.
     * @pattern ^(([a-zA-Z0-9]|[a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9])\.)*([A-Za-z0-9]|[A-Za-z0-9][A-Za-z0-9-]*[A-Za-z0-9])$
     */
    hostname: string;
    /**
     * Unique identifier for the MCP portal.
     * @minLength 1
     * @maxLength 32
     * @pattern ^[a-z0-9_]+(?:-[a-z0-9_]+)*$
     */
    id: string;
    /**
     * Display name for the MCP portal.
     * @maxLength 350
     */
    name: string;
    servers: Array<Result.Server>;
    /**
     * Deprecated: use `code_mode` for new integrations. `true` maps to any non-off Code Mode policy; `false` maps to `code_mode: off`. If both fields are sent, they must be consistent or the request returns a 400.
     * @deprecated
     */
    allow_code_mode?: boolean;
    /**
     * Code Mode policy for this portal. `off`: Code Mode is unavailable; query parameters are ignored. `opt_in`: Code Mode is off by default; clients turn it on with `?codemode=search_and_execute`. `default_on`: Code Mode is on by default; clients can opt out with `?codemode=off`. `enforced`: Code Mode is always on; query parameters are ignored. Defaults to `opt_in` when omitted on create. If both `code_mode` and `allow_code_mode` are sent, they must be consistent or the request returns a 400.
     */
    code_mode?: 'off' | 'opt_in' | 'default_on' | 'enforced';
    /**
     * @format date-time
     */
    created_at?: string;
    created_by?: string;
    /**
     * Optional description of the MCP portal.
     * @maxLength 512
     */
    description?: string;
    /**
     * @format date-time
     */
    modified_at?: string;
    modified_by?: string;
    /**
     * Route outbound MCP traffic through Zero Trust Secure Web Gateway.
     * @default false
     */
    secure_web_gateway?: boolean;
  }

  export namespace Result {
    export interface Server {
      /**
       * Authentication method used to connect to the upstream MCP server.
       */
      auth_type: 'oauth' | 'bearer' | 'unauthenticated';
      /**
       * URL of the upstream MCP endpoint.
       * @format uri
       */
      hostname: string;
      /**
       * Unique identifier for the MCP server.
       * @minLength 1
       * @maxLength 32
       * @pattern ^[a-z0-9_]+(?:-[a-z0-9_]+)*$
       */
      id: string;
      /**
       * Display name for the MCP server.
       * @maxLength 350
       */
      name: string;
      prompts: Array<Record<string, unknown>>;
      /**
       * Unique identifier for the MCP server.
       * @minLength 1
       * @maxLength 32
       * @pattern ^[a-z0-9_]+(?:-[a-z0-9_]+)*$
       */
      server_id: string;
      tools: Array<Record<string, unknown>>;
      /**
       * Safe subset of auth_credentials surfaced to the dashboard. Includes auth_mode (dcr|manual), has_client_secret, client_secret_version, and the OAuth endpoints + client_id for manual servers. Never includes the secret value.
       */
      auth_config_summary?: Server.AuthConfigSummary;
      /**
       * Whether administrative authentication is required before capabilities can be synced. Manual OAuth is user-managed and has no administrative authentication flow.
       */
      authentication_status?: 'not_required' | 'required' | 'connected' | 'stale' | 'manual';
      /**
       * @format date-time
       */
      created_at?: string;
      created_by?: string;
      default_disabled?: boolean;
      /**
       * Optional description of the MCP server.
       * @maxLength 512
       */
      description?: string | null;
      error?: string;
      error_details?: Server.ErrorDetails;
      /**
       * When true, the gateway worker uses the shared Cloudflare-owned OAuth callback endpoint as the redirect_uri for upstream on-behalf OAuth, instead of the customer portal hostname. Defaults to false (off); opt in per server by setting true.
       */
      is_shared_oauth_callback_enabled?: boolean;
      /**
       * @format date-time
       */
      last_successful_sync?: string;
      /**
       * @format date-time
       */
      last_synced?: string;
      /**
       * @format date-time
       */
      modified_at?: string;
      modified_by?: string;
      on_behalf?: boolean;
      /**
       * Route outbound traffic to this MCP server through Zero Trust Secure Web Gateway.
       * @default false
       */
      secure_web_gateway?: boolean;
      /**
       * Current sync state of the server
       * @default waiting
       */
      status?: 'waiting' | 'ready' | 'stale' | 'error';
      updated_prompts?: Array<Server.UpdatedPrompt>;
      updated_tools?: Array<Server.UpdatedTool>;
    }

    export namespace Server {
      export interface AuthConfigSummary {
        auth_mode?: 'dcr' | 'manual';
        client_secret_version?: number;
        config?: AuthConfigSummary.Config;
        has_client_secret?: boolean;
        registration_info?: AuthConfigSummary.RegistrationInfo;
      }

      export namespace AuthConfigSummary {
        export interface Config {
          authorization_endpoint?: string;
          issuer?: string;
          resource?: string;
          revocation_endpoint?: string;
          token_endpoint?: string;
        }

        export interface RegistrationInfo {
          client_id?: string;
          redirect_uris?: Array<string>;
          scope?: string;
          token_endpoint_auth_method?: string;
        }
      }

      export interface ErrorDetails {
        /**
         * Underlying error message
         */
        cause?: string;
        /**
         * True = MCP server returned an error. False = couldn't reach the server
         */
        is_upstream?: boolean;
        /**
         * MCP protocol error code
         */
        mcp_code?: number;
        /**
         * Whether the error is transient and worth retrying
         */
        retryable?: boolean;
        /**
         * HTTP status code from the server
         */
        status_code?: number;
      }

      export interface UpdatedPrompt {
        name: string;
        enabled?: boolean;
        portal_alias?: string;
        portal_description?: string;
        server_alias?: string;
        server_description?: string;
      }

      export interface UpdatedTool {
        name: string;
        enabled?: boolean;
        portal_alias?: string;
        portal_description?: string;
        server_alias?: string;
        server_description?: string;
      }
    }
  }
}

export interface McpPortalAPICreateParams {
  /**
   * Hostname where the MCP portal is available.
   * @pattern ^(([a-zA-Z0-9]|[a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9])\.)*([A-Za-z0-9]|[A-Za-z0-9][A-Za-z0-9-]*[A-Za-z0-9])$
   */
  hostname: string;
  /**
   * Unique identifier for the MCP portal.
   * @minLength 1
   * @maxLength 32
   * @pattern ^[a-z0-9_]+(?:-[a-z0-9_]+)*$
   */
  id: string;
  /**
   * Display name for the MCP portal.
   * @maxLength 350
   */
  name: string;
  /**
   * Deprecated: use `code_mode` for new integrations. `true` maps to any non-off Code Mode policy; `false` maps to `code_mode: off`. If both fields are sent, they must be consistent or the request returns a 400.
   * @deprecated
   */
  allow_code_mode?: boolean;
  /**
   * Code Mode policy for this portal. `off`: Code Mode is unavailable; query parameters are ignored. `opt_in`: Code Mode is off by default; clients turn it on with `?codemode=search_and_execute`. `default_on`: Code Mode is on by default; clients can opt out with `?codemode=off`. `enforced`: Code Mode is always on; query parameters are ignored. Defaults to `opt_in` when omitted on create. If both `code_mode` and `allow_code_mode` are sent, they must be consistent or the request returns a 400.
   */
  code_mode?: 'off' | 'opt_in' | 'default_on' | 'enforced';
  /**
   * Optional description of the MCP portal.
   * @maxLength 512
   */
  description?: string;
  /**
   * Route outbound MCP traffic through Zero Trust Secure Web Gateway.
   * @default false
   */
  secure_web_gateway?: boolean;
  /**
   * MCP servers attached to the portal and their portal-specific settings.
   * @maxItems 80
   */
  servers?: Array<McpPortalAPICreateParams.Server>;
}

export namespace McpPortalAPICreateParams {
  export interface Server {
    /**
     * Unique identifier for the MCP server.
     * @minLength 1
     * @maxLength 32
     * @pattern ^[a-z0-9_]+(?:-[a-z0-9_]+)*$
     */
    server_id: string;
    /**
     * Disable this server by default for clients connecting through the portal.
     */
    default_disabled?: boolean;
    /**
     * Use end-user OAuth credentials when connecting this server to the portal.
     */
    on_behalf?: boolean;
    /**
     * Portal-specific prompt overrides.
     */
    updated_prompts?: Array<Server.UpdatedPrompt>;
    /**
     * Portal-specific tool overrides.
     */
    updated_tools?: Array<Server.UpdatedTool>;
  }

  export namespace Server {
    export interface UpdatedPrompt {
      /**
       * Name of the tool or prompt capability to override.
       */
      name: string;
      /**
       * Custom name exposed for the capability.
       * @maxLength 40
       * @pattern ^[a-zA-Z0-9]+([_-][a-zA-Z0-9]+)*$
       */
      alias?: string;
      /**
       * Custom description exposed for the capability.
       */
      description?: string;
      /**
       * Whether the capability is available through the MCP server.
       */
      enabled?: boolean;
    }

    export interface UpdatedTool {
      /**
       * Name of the tool or prompt capability to override.
       */
      name: string;
      /**
       * Custom name exposed for the capability.
       * @maxLength 40
       * @pattern ^[a-zA-Z0-9]+([_-][a-zA-Z0-9]+)*$
       */
      alias?: string;
      /**
       * Custom description exposed for the capability.
       */
      description?: string;
      /**
       * Whether the capability is available through the MCP server.
       */
      enabled?: boolean;
    }
  }
}

export interface McpPortalAPICreateResponse {
  result: McpPortalAPICreateResponse.Result;
  success: boolean;
}

export namespace McpPortalAPICreateResponse {
  export interface Result {
    /**
     * Hostname where the MCP portal is available.
     * @pattern ^(([a-zA-Z0-9]|[a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9])\.)*([A-Za-z0-9]|[A-Za-z0-9][A-Za-z0-9-]*[A-Za-z0-9])$
     */
    hostname: string;
    /**
     * Unique identifier for the MCP portal.
     * @minLength 1
     * @maxLength 32
     * @pattern ^[a-z0-9_]+(?:-[a-z0-9_]+)*$
     */
    id: string;
    /**
     * Display name for the MCP portal.
     * @maxLength 350
     */
    name: string;
    servers: Array<Result.Server>;
    /**
     * Deprecated: use `code_mode` for new integrations. `true` maps to any non-off Code Mode policy; `false` maps to `code_mode: off`. If both fields are sent, they must be consistent or the request returns a 400.
     * @deprecated
     */
    allow_code_mode?: boolean;
    /**
     * Code Mode policy for this portal. `off`: Code Mode is unavailable; query parameters are ignored. `opt_in`: Code Mode is off by default; clients turn it on with `?codemode=search_and_execute`. `default_on`: Code Mode is on by default; clients can opt out with `?codemode=off`. `enforced`: Code Mode is always on; query parameters are ignored. Defaults to `opt_in` when omitted on create. If both `code_mode` and `allow_code_mode` are sent, they must be consistent or the request returns a 400.
     */
    code_mode?: 'off' | 'opt_in' | 'default_on' | 'enforced';
    /**
     * @format date-time
     */
    created_at?: string;
    created_by?: string;
    /**
     * Optional description of the MCP portal.
     * @maxLength 512
     */
    description?: string;
    /**
     * @format date-time
     */
    modified_at?: string;
    modified_by?: string;
    /**
     * Route outbound MCP traffic through Zero Trust Secure Web Gateway.
     * @default false
     */
    secure_web_gateway?: boolean;
  }

  export namespace Result {
    export interface Server {
      /**
       * Authentication method used to connect to the upstream MCP server.
       */
      auth_type: 'oauth' | 'bearer' | 'unauthenticated';
      /**
       * URL of the upstream MCP endpoint.
       * @format uri
       */
      hostname: string;
      /**
       * Unique identifier for the MCP server.
       * @minLength 1
       * @maxLength 32
       * @pattern ^[a-z0-9_]+(?:-[a-z0-9_]+)*$
       */
      id: string;
      /**
       * Display name for the MCP server.
       * @maxLength 350
       */
      name: string;
      prompts: Array<Record<string, unknown>>;
      /**
       * Unique identifier for the MCP server.
       * @minLength 1
       * @maxLength 32
       * @pattern ^[a-z0-9_]+(?:-[a-z0-9_]+)*$
       */
      server_id: string;
      tools: Array<Record<string, unknown>>;
      /**
       * Safe subset of auth_credentials surfaced to the dashboard. Includes auth_mode (dcr|manual), has_client_secret, client_secret_version, and the OAuth endpoints + client_id for manual servers. Never includes the secret value.
       */
      auth_config_summary?: Server.AuthConfigSummary;
      /**
       * Whether administrative authentication is required before capabilities can be synced. Manual OAuth is user-managed and has no administrative authentication flow.
       */
      authentication_status?: 'not_required' | 'required' | 'connected' | 'stale' | 'manual';
      /**
       * @format date-time
       */
      created_at?: string;
      created_by?: string;
      default_disabled?: boolean;
      /**
       * Optional description of the MCP server.
       * @maxLength 512
       */
      description?: string | null;
      error?: string;
      error_details?: Server.ErrorDetails;
      /**
       * When true, the gateway worker uses the shared Cloudflare-owned OAuth callback endpoint as the redirect_uri for upstream on-behalf OAuth, instead of the customer portal hostname. Defaults to false (off); opt in per server by setting true.
       */
      is_shared_oauth_callback_enabled?: boolean;
      /**
       * @format date-time
       */
      last_successful_sync?: string;
      /**
       * @format date-time
       */
      last_synced?: string;
      /**
       * @format date-time
       */
      modified_at?: string;
      modified_by?: string;
      on_behalf?: boolean;
      /**
       * Route outbound traffic to this MCP server through Zero Trust Secure Web Gateway.
       * @default false
       */
      secure_web_gateway?: boolean;
      /**
       * Current sync state of the server
       * @default waiting
       */
      status?: 'waiting' | 'ready' | 'stale' | 'error';
      updated_prompts?: Array<Server.UpdatedPrompt>;
      updated_tools?: Array<Server.UpdatedTool>;
    }

    export namespace Server {
      export interface AuthConfigSummary {
        auth_mode?: 'dcr' | 'manual';
        client_secret_version?: number;
        config?: AuthConfigSummary.Config;
        has_client_secret?: boolean;
        registration_info?: AuthConfigSummary.RegistrationInfo;
      }

      export namespace AuthConfigSummary {
        export interface Config {
          authorization_endpoint?: string;
          issuer?: string;
          resource?: string;
          revocation_endpoint?: string;
          token_endpoint?: string;
        }

        export interface RegistrationInfo {
          client_id?: string;
          redirect_uris?: Array<string>;
          scope?: string;
          token_endpoint_auth_method?: string;
        }
      }

      export interface ErrorDetails {
        /**
         * Underlying error message
         */
        cause?: string;
        /**
         * True = MCP server returned an error. False = couldn't reach the server
         */
        is_upstream?: boolean;
        /**
         * MCP protocol error code
         */
        mcp_code?: number;
        /**
         * Whether the error is transient and worth retrying
         */
        retryable?: boolean;
        /**
         * HTTP status code from the server
         */
        status_code?: number;
      }

      export interface UpdatedPrompt {
        name: string;
        enabled?: boolean;
        portal_alias?: string;
        portal_description?: string;
        server_alias?: string;
        server_description?: string;
      }

      export interface UpdatedTool {
        name: string;
        enabled?: boolean;
        portal_alias?: string;
        portal_description?: string;
        server_alias?: string;
        server_description?: string;
      }
    }
  }
}

export interface McpPortalAPIDeleteParams {
  account_id: string;
}

export interface McpPortalAPIDeleteResponse {
  result: McpPortalAPIDeleteResponse.Result;
  success: boolean;
}

export namespace McpPortalAPIDeleteResponse {
  export interface Result {
    /**
     * Hostname where the MCP portal is available.
     * @pattern ^(([a-zA-Z0-9]|[a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9])\.)*([A-Za-z0-9]|[A-Za-z0-9][A-Za-z0-9-]*[A-Za-z0-9])$
     */
    hostname: string;
    /**
     * Unique identifier for the MCP portal.
     * @minLength 1
     * @maxLength 32
     * @pattern ^[a-z0-9_]+(?:-[a-z0-9_]+)*$
     */
    id: string;
    /**
     * Display name for the MCP portal.
     * @maxLength 350
     */
    name: string;
    /**
     * Deprecated: use `code_mode` for new integrations. `true` maps to any non-off Code Mode policy; `false` maps to `code_mode: off`. If both fields are sent, they must be consistent or the request returns a 400.
     * @deprecated
     */
    allow_code_mode?: boolean;
    /**
     * Code Mode policy for this portal. `off`: Code Mode is unavailable; query parameters are ignored. `opt_in`: Code Mode is off by default; clients turn it on with `?codemode=search_and_execute`. `default_on`: Code Mode is on by default; clients can opt out with `?codemode=off`. `enforced`: Code Mode is always on; query parameters are ignored. Defaults to `opt_in` when omitted on create. If both `code_mode` and `allow_code_mode` are sent, they must be consistent or the request returns a 400.
     */
    code_mode?: 'off' | 'opt_in' | 'default_on' | 'enforced';
    /**
     * @format date-time
     */
    created_at?: string;
    created_by?: string;
    /**
     * Optional description of the MCP portal.
     * @maxLength 512
     */
    description?: string;
    /**
     * @format date-time
     */
    modified_at?: string;
    modified_by?: string;
    /**
     * Route outbound MCP traffic through Zero Trust Secure Web Gateway.
     * @default false
     */
    secure_web_gateway?: boolean;
  }
}

export interface McpPortalAPIFetchGatewaysParams {
  account_id: string;
}

export interface McpPortalAPIFetchGatewaysResponse {
  result: McpPortalAPIFetchGatewaysResponse.Result;
  success: boolean;
}

export namespace McpPortalAPIFetchGatewaysResponse {
  export interface Result {
    /**
     * Hostname where the MCP portal is available.
     * @pattern ^(([a-zA-Z0-9]|[a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9])\.)*([A-Za-z0-9]|[A-Za-z0-9][A-Za-z0-9-]*[A-Za-z0-9])$
     */
    hostname: string;
    /**
     * Unique identifier for the MCP portal.
     * @minLength 1
     * @maxLength 32
     * @pattern ^[a-z0-9_]+(?:-[a-z0-9_]+)*$
     */
    id: string;
    /**
     * Display name for the MCP portal.
     * @maxLength 350
     */
    name: string;
    servers: Array<Result.Server>;
    /**
     * Deprecated: use `code_mode` for new integrations. `true` maps to any non-off Code Mode policy; `false` maps to `code_mode: off`. If both fields are sent, they must be consistent or the request returns a 400.
     * @deprecated
     */
    allow_code_mode?: boolean;
    /**
     * Code Mode policy for this portal. `off`: Code Mode is unavailable; query parameters are ignored. `opt_in`: Code Mode is off by default; clients turn it on with `?codemode=search_and_execute`. `default_on`: Code Mode is on by default; clients can opt out with `?codemode=off`. `enforced`: Code Mode is always on; query parameters are ignored. Defaults to `opt_in` when omitted on create. If both `code_mode` and `allow_code_mode` are sent, they must be consistent or the request returns a 400.
     */
    code_mode?: 'off' | 'opt_in' | 'default_on' | 'enforced';
    /**
     * @format date-time
     */
    created_at?: string;
    created_by?: string;
    /**
     * Optional description of the MCP portal.
     * @maxLength 512
     */
    description?: string;
    /**
     * @format date-time
     */
    modified_at?: string;
    modified_by?: string;
    /**
     * Route outbound MCP traffic through Zero Trust Secure Web Gateway.
     * @default false
     */
    secure_web_gateway?: boolean;
  }

  export namespace Result {
    export interface Server {
      /**
       * Authentication method used to connect to the upstream MCP server.
       */
      auth_type: 'oauth' | 'bearer' | 'unauthenticated';
      /**
       * URL of the upstream MCP endpoint.
       * @format uri
       */
      hostname: string;
      /**
       * Unique identifier for the MCP server.
       * @minLength 1
       * @maxLength 32
       * @pattern ^[a-z0-9_]+(?:-[a-z0-9_]+)*$
       */
      id: string;
      /**
       * Display name for the MCP server.
       * @maxLength 350
       */
      name: string;
      prompts: Array<Record<string, unknown>>;
      /**
       * Unique identifier for the MCP server.
       * @minLength 1
       * @maxLength 32
       * @pattern ^[a-z0-9_]+(?:-[a-z0-9_]+)*$
       */
      server_id: string;
      tools: Array<Record<string, unknown>>;
      /**
       * Safe subset of auth_credentials surfaced to the dashboard. Includes auth_mode (dcr|manual), has_client_secret, client_secret_version, and the OAuth endpoints + client_id for manual servers. Never includes the secret value.
       */
      auth_config_summary?: Server.AuthConfigSummary;
      /**
       * Whether administrative authentication is required before capabilities can be synced. Manual OAuth is user-managed and has no administrative authentication flow.
       */
      authentication_status?: 'not_required' | 'required' | 'connected' | 'stale' | 'manual';
      /**
       * @format date-time
       */
      created_at?: string;
      created_by?: string;
      default_disabled?: boolean;
      /**
       * Optional description of the MCP server.
       * @maxLength 512
       */
      description?: string | null;
      error?: string;
      error_details?: Server.ErrorDetails;
      /**
       * When true, the gateway worker uses the shared Cloudflare-owned OAuth callback endpoint as the redirect_uri for upstream on-behalf OAuth, instead of the customer portal hostname. Defaults to false (off); opt in per server by setting true.
       */
      is_shared_oauth_callback_enabled?: boolean;
      /**
       * @format date-time
       */
      last_successful_sync?: string;
      /**
       * @format date-time
       */
      last_synced?: string;
      /**
       * @format date-time
       */
      modified_at?: string;
      modified_by?: string;
      on_behalf?: boolean;
      /**
       * Route outbound traffic to this MCP server through Zero Trust Secure Web Gateway.
       * @default false
       */
      secure_web_gateway?: boolean;
      /**
       * Current sync state of the server
       * @default waiting
       */
      status?: 'waiting' | 'ready' | 'stale' | 'error';
      updated_prompts?: Array<Server.UpdatedPrompt>;
      updated_tools?: Array<Server.UpdatedTool>;
    }

    export namespace Server {
      export interface AuthConfigSummary {
        auth_mode?: 'dcr' | 'manual';
        client_secret_version?: number;
        config?: AuthConfigSummary.Config;
        has_client_secret?: boolean;
        registration_info?: AuthConfigSummary.RegistrationInfo;
      }

      export namespace AuthConfigSummary {
        export interface Config {
          authorization_endpoint?: string;
          issuer?: string;
          resource?: string;
          revocation_endpoint?: string;
          token_endpoint?: string;
        }

        export interface RegistrationInfo {
          client_id?: string;
          redirect_uris?: Array<string>;
          scope?: string;
          token_endpoint_auth_method?: string;
        }
      }

      export interface ErrorDetails {
        /**
         * Underlying error message
         */
        cause?: string;
        /**
         * True = MCP server returned an error. False = couldn't reach the server
         */
        is_upstream?: boolean;
        /**
         * MCP protocol error code
         */
        mcp_code?: number;
        /**
         * Whether the error is transient and worth retrying
         */
        retryable?: boolean;
        /**
         * HTTP status code from the server
         */
        status_code?: number;
      }

      export interface UpdatedPrompt {
        name: string;
        enabled?: boolean;
        portal_alias?: string;
        portal_description?: string;
        server_alias?: string;
        server_description?: string;
      }

      export interface UpdatedTool {
        name: string;
        enabled?: boolean;
        portal_alias?: string;
        portal_description?: string;
        server_alias?: string;
        server_description?: string;
      }
    }
  }
}

export interface McpPortalAPIUpdateParams {
  /**
   * Path param
   */
  account_id: string;
  /**
   * Body param: Deprecated: use `code_mode` for new integrations. `true` maps to any non-off Code Mode policy; `false` maps to `code_mode: off`. If both fields are sent, they must be consistent or the request returns a 400.
   */
  allow_code_mode?: boolean;
  /**
   * Body param: Code Mode policy for this portal. `off`: Code Mode is unavailable; query parameters are ignored. `opt_in`: Code Mode is off by default; clients turn it on with `?codemode=search_and_execute`. `default_on`: Code Mode is on by default; clients can opt out with `?codemode=off`. `enforced`: Code Mode is always on; query parameters are ignored. Defaults to `opt_in` when omitted on create. If both `code_mode` and `allow_code_mode` are sent, they must be consistent or the request returns a 400.
   */
  code_mode?: 'off' | 'opt_in' | 'default_on' | 'enforced';
  /**
   * Body param: Optional description of the MCP portal.
   * @maxLength 512
   */
  description?: string;
  /**
   * Body param: Hostname where the MCP portal is available.
   * @pattern ^(([a-zA-Z0-9]|[a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9])\.)*([A-Za-z0-9]|[A-Za-z0-9][A-Za-z0-9-]*[A-Za-z0-9])$
   */
  hostname?: string;
  /**
   * Body param: Display name for the MCP portal.
   * @maxLength 350
   */
  name?: string;
  /**
   * Body param: Route outbound MCP traffic through Zero Trust Secure Web Gateway.
   * @default false
   */
  secure_web_gateway?: boolean;
  /**
   * Body param: MCP servers attached to the portal and their portal-specific settings.
   * @maxItems 80
   */
  servers?: Array<McpPortalAPIUpdateParams.Server>;
}

export namespace McpPortalAPIUpdateParams {
  export interface Server {
    /**
     * Unique identifier for the MCP server.
     * @minLength 1
     * @maxLength 32
     * @pattern ^[a-z0-9_]+(?:-[a-z0-9_]+)*$
     */
    server_id: string;
    /**
     * Disable this server by default for clients connecting through the portal.
     */
    default_disabled?: boolean;
    /**
     * Use end-user OAuth credentials when connecting this server to the portal.
     */
    on_behalf?: boolean;
    /**
     * Portal-specific prompt overrides.
     */
    updated_prompts?: Array<Server.UpdatedPrompt>;
    /**
     * Portal-specific tool overrides.
     */
    updated_tools?: Array<Server.UpdatedTool>;
  }

  export namespace Server {
    export interface UpdatedPrompt {
      /**
       * Name of the tool or prompt capability to override.
       */
      name: string;
      /**
       * Custom name exposed for the capability.
       * @maxLength 40
       * @pattern ^[a-zA-Z0-9]+([_-][a-zA-Z0-9]+)*$
       */
      alias?: string;
      /**
       * Custom description exposed for the capability.
       */
      description?: string;
      /**
       * Whether the capability is available through the MCP server.
       */
      enabled?: boolean;
    }

    export interface UpdatedTool {
      /**
       * Name of the tool or prompt capability to override.
       */
      name: string;
      /**
       * Custom name exposed for the capability.
       * @maxLength 40
       * @pattern ^[a-zA-Z0-9]+([_-][a-zA-Z0-9]+)*$
       */
      alias?: string;
      /**
       * Custom description exposed for the capability.
       */
      description?: string;
      /**
       * Whether the capability is available through the MCP server.
       */
      enabled?: boolean;
    }
  }
}

export interface McpPortalAPIUpdateResponse {
  result: McpPortalAPIUpdateResponse.Result;
  success: boolean;
}

export namespace McpPortalAPIUpdateResponse {
  export interface Result {
    /**
     * Hostname where the MCP portal is available.
     * @pattern ^(([a-zA-Z0-9]|[a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9])\.)*([A-Za-z0-9]|[A-Za-z0-9][A-Za-z0-9-]*[A-Za-z0-9])$
     */
    hostname: string;
    /**
     * Unique identifier for the MCP portal.
     * @minLength 1
     * @maxLength 32
     * @pattern ^[a-z0-9_]+(?:-[a-z0-9_]+)*$
     */
    id: string;
    /**
     * Display name for the MCP portal.
     * @maxLength 350
     */
    name: string;
    servers: Array<Result.Server>;
    /**
     * Deprecated: use `code_mode` for new integrations. `true` maps to any non-off Code Mode policy; `false` maps to `code_mode: off`. If both fields are sent, they must be consistent or the request returns a 400.
     * @deprecated
     */
    allow_code_mode?: boolean;
    /**
     * Code Mode policy for this portal. `off`: Code Mode is unavailable; query parameters are ignored. `opt_in`: Code Mode is off by default; clients turn it on with `?codemode=search_and_execute`. `default_on`: Code Mode is on by default; clients can opt out with `?codemode=off`. `enforced`: Code Mode is always on; query parameters are ignored. Defaults to `opt_in` when omitted on create. If both `code_mode` and `allow_code_mode` are sent, they must be consistent or the request returns a 400.
     */
    code_mode?: 'off' | 'opt_in' | 'default_on' | 'enforced';
    /**
     * @format date-time
     */
    created_at?: string;
    created_by?: string;
    /**
     * Optional description of the MCP portal.
     * @maxLength 512
     */
    description?: string;
    /**
     * @format date-time
     */
    modified_at?: string;
    modified_by?: string;
    /**
     * Route outbound MCP traffic through Zero Trust Secure Web Gateway.
     * @default false
     */
    secure_web_gateway?: boolean;
  }

  export namespace Result {
    export interface Server {
      /**
       * Authentication method used to connect to the upstream MCP server.
       */
      auth_type: 'oauth' | 'bearer' | 'unauthenticated';
      /**
       * URL of the upstream MCP endpoint.
       * @format uri
       */
      hostname: string;
      /**
       * Unique identifier for the MCP server.
       * @minLength 1
       * @maxLength 32
       * @pattern ^[a-z0-9_]+(?:-[a-z0-9_]+)*$
       */
      id: string;
      /**
       * Display name for the MCP server.
       * @maxLength 350
       */
      name: string;
      prompts: Array<Record<string, unknown>>;
      /**
       * Unique identifier for the MCP server.
       * @minLength 1
       * @maxLength 32
       * @pattern ^[a-z0-9_]+(?:-[a-z0-9_]+)*$
       */
      server_id: string;
      tools: Array<Record<string, unknown>>;
      /**
       * Safe subset of auth_credentials surfaced to the dashboard. Includes auth_mode (dcr|manual), has_client_secret, client_secret_version, and the OAuth endpoints + client_id for manual servers. Never includes the secret value.
       */
      auth_config_summary?: Server.AuthConfigSummary;
      /**
       * Whether administrative authentication is required before capabilities can be synced. Manual OAuth is user-managed and has no administrative authentication flow.
       */
      authentication_status?: 'not_required' | 'required' | 'connected' | 'stale' | 'manual';
      /**
       * @format date-time
       */
      created_at?: string;
      created_by?: string;
      default_disabled?: boolean;
      /**
       * Optional description of the MCP server.
       * @maxLength 512
       */
      description?: string | null;
      error?: string;
      error_details?: Server.ErrorDetails;
      /**
       * When true, the gateway worker uses the shared Cloudflare-owned OAuth callback endpoint as the redirect_uri for upstream on-behalf OAuth, instead of the customer portal hostname. Defaults to false (off); opt in per server by setting true.
       */
      is_shared_oauth_callback_enabled?: boolean;
      /**
       * @format date-time
       */
      last_successful_sync?: string;
      /**
       * @format date-time
       */
      last_synced?: string;
      /**
       * @format date-time
       */
      modified_at?: string;
      modified_by?: string;
      on_behalf?: boolean;
      /**
       * Route outbound traffic to this MCP server through Zero Trust Secure Web Gateway.
       * @default false
       */
      secure_web_gateway?: boolean;
      /**
       * Current sync state of the server
       * @default waiting
       */
      status?: 'waiting' | 'ready' | 'stale' | 'error';
      updated_prompts?: Array<Server.UpdatedPrompt>;
      updated_tools?: Array<Server.UpdatedTool>;
    }

    export namespace Server {
      export interface AuthConfigSummary {
        auth_mode?: 'dcr' | 'manual';
        client_secret_version?: number;
        config?: AuthConfigSummary.Config;
        has_client_secret?: boolean;
        registration_info?: AuthConfigSummary.RegistrationInfo;
      }

      export namespace AuthConfigSummary {
        export interface Config {
          authorization_endpoint?: string;
          issuer?: string;
          resource?: string;
          revocation_endpoint?: string;
          token_endpoint?: string;
        }

        export interface RegistrationInfo {
          client_id?: string;
          redirect_uris?: Array<string>;
          scope?: string;
          token_endpoint_auth_method?: string;
        }
      }

      export interface ErrorDetails {
        /**
         * Underlying error message
         */
        cause?: string;
        /**
         * True = MCP server returned an error. False = couldn't reach the server
         */
        is_upstream?: boolean;
        /**
         * MCP protocol error code
         */
        mcp_code?: number;
        /**
         * Whether the error is transient and worth retrying
         */
        retryable?: boolean;
        /**
         * HTTP status code from the server
         */
        status_code?: number;
      }

      export interface UpdatedPrompt {
        name: string;
        enabled?: boolean;
        portal_alias?: string;
        portal_description?: string;
        server_alias?: string;
        server_description?: string;
      }

      export interface UpdatedTool {
        name: string;
        enabled?: boolean;
        portal_alias?: string;
        portal_description?: string;
        server_alias?: string;
        server_description?: string;
      }
    }
  }
}

export interface McpPortalAPIEffectiveRedirectURIParams {
  /**
   * Unique identifier for the MCP portal.
   * @minLength 1
   * @maxLength 32
   * @pattern ^[a-z0-9_]+(?:-[a-z0-9_]+)*$
   */
  portal_id: string;
  account_id: string;
}

export interface McpPortalAPIEffectiveRedirectURIResponse {
  result: McpPortalAPIEffectiveRedirectURIResponse.Result;
  success: boolean;
}

export namespace McpPortalAPIEffectiveRedirectURIResponse {
  export interface Result {
    /**
     * @format uri
     */
    redirect_uri: string;
    source: 'per_portal' | 'shared_mcp22';
  }
}
export declare namespace McpPortal {
  export {
    type McpPortalAPIListResponse as McpPortalAPIListResponse,
    type McpPortalAPICreateResponse as McpPortalAPICreateResponse,
    type McpPortalAPIDeleteResponse as McpPortalAPIDeleteResponse,
    type McpPortalAPIFetchGatewaysResponse as McpPortalAPIFetchGatewaysResponse,
    type McpPortalAPIUpdateResponse as McpPortalAPIUpdateResponse,
    type McpPortalAPIEffectiveRedirectURIResponse as McpPortalAPIEffectiveRedirectURIResponse,
    type McpPortalAPIListParams as McpPortalAPIListParams,
    type McpPortalAPICreateParams as McpPortalAPICreateParams,
    type McpPortalAPIDeleteParams as McpPortalAPIDeleteParams,
    type McpPortalAPIFetchGatewaysParams as McpPortalAPIFetchGatewaysParams,
    type McpPortalAPIUpdateParams as McpPortalAPIUpdateParams,
    type McpPortalAPIEffectiveRedirectURIParams as McpPortalAPIEffectiveRedirectURIParams,
  };
}
