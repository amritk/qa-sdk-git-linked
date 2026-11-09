// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from '../resource';
import { APIPromise } from '../api-promise';
import type { RequestOptions } from '../internal/request-options';
import { path as __scalarPath } from '../internal/utils/path';

export class McpPortalServers extends APIResource {
  /**
   * Lists all MCP servers configured for the account.
   *
   * @param {string} accountID
   * @param {McpPortalServerAPIListParams} [query] - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<McpPortalServerAPIListResponse>} List objects
   *
   * @example
   * ```ts
   * const mcpPortalServer = await client.mcpPortalServers.apiList('a86a8f5c339544d7bdc89926de14fb8c', {
   *   page: 1,
   *   per_page: 20,
   * });
   * ```
   */
  apiList(
    accountID: string,
    query: McpPortalServerAPIListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<McpPortalServerAPIListResponse> {
    return this._client.get(__scalarPath`/accounts/${accountID}/access/ai-controls/mcp/servers`, {
      query,
      ...options,
    });
  }

  /**
   * Creates a new MCP server for connecting to an upstream MCP endpoint.
   *
   * @param {string} accountID
   * @param {McpPortalServerAPICreateParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<McpPortalServerAPICreateResponse>} Returns the created Object
   *
   * @example
   * ```ts
   * const mcpPortalServer = await client.mcpPortalServers.apiCreate('a86a8f5c339544d7bdc89926de14fb8c', {
   *   auth_type: 'unauthenticated',
   *   hostname: 'https://example.com/mcp',
   *   id: 'my-mcp-server',
   *   is_shared_oauth_callback_enabled: false,
   *   name: 'My MCP Server',
   *   secure_web_gateway: false,
   * });
   * ```
   */
  apiCreate(
    accountID: string,
    body: McpPortalServerAPICreateParams,
    options?: RequestOptions,
  ): APIPromise<McpPortalServerAPICreateResponse> {
    return this._client.post(__scalarPath`/accounts/${accountID}/access/ai-controls/mcp/servers`, {
      body,
      ...options,
    });
  }

  /**
   * Deletes an MCP server from the account.
   *
   * @param {string} id - Unique identifier for the MCP server.
   * @param {McpPortalServerAPIDeleteParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<McpPortalServerAPIDeleteResponse>} Returns the Object if it was successfully deleted
   *
   * @example
   * ```ts
   * const mcpPortalServer = await client.mcpPortalServers.apiDelete('my-mcp-server', {
   *   account_id: 'a86a8f5c339544d7bdc89926de14fb8c',
   * });
   * ```
   */
  apiDelete(
    id: string,
    params: McpPortalServerAPIDeleteParams,
    options?: RequestOptions,
  ): APIPromise<McpPortalServerAPIDeleteResponse> {
    const { account_id } = params;
    return this._client.delete(
      __scalarPath`/accounts/${account_id}/access/ai-controls/mcp/servers/${id}`,
      options,
    );
  }

  /**
   * Retrieves an MCP server's configuration and capability sync state.
   *
   * @param {string} id - Unique identifier for the MCP server.
   * @param {McpPortalServerAPIFetchParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<McpPortalServerAPIFetchResponse>} Returns a single object if found
   *
   * @example
   * ```ts
   * const mcpPortalServer = await client.mcpPortalServers.apiFetch('my-mcp-server', {
   *   account_id: 'a86a8f5c339544d7bdc89926de14fb8c',
   * });
   * ```
   */
  apiFetch(
    id: string,
    params: McpPortalServerAPIFetchParams,
    options?: RequestOptions,
  ): APIPromise<McpPortalServerAPIFetchResponse> {
    const { account_id } = params;
    return this._client.get(
      __scalarPath`/accounts/${account_id}/access/ai-controls/mcp/servers/${id}`,
      options,
    );
  }

  /**
   * Updates an MCP server's configuration and credentials.
   *
   * @param {string} id - Unique identifier for the MCP server.
   * @param {McpPortalServerAPIUpdateParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<McpPortalServerAPIUpdateResponse>} Returns the updated Object
   *
   * @example
   * ```ts
   * const mcpPortalServer = await client.mcpPortalServers.apiUpdate('my-mcp-server', {
   *   account_id: 'a86a8f5c339544d7bdc89926de14fb8c',
   *   is_shared_oauth_callback_enabled: false,
   *   secure_web_gateway: false,
   * });
   * ```
   */
  apiUpdate(
    id: string,
    params: McpPortalServerAPIUpdateParams,
    options?: RequestOptions,
  ): APIPromise<McpPortalServerAPIUpdateResponse> {
    const { account_id, ...body } = params;
    return this._client.put(__scalarPath`/accounts/${account_id}/access/ai-controls/mcp/servers/${id}`, {
      body,
      ...options,
    });
  }

  /**
   * Syncs an MCP server's capabilities and returns the updated server state, including any connection errors.
   *
   * @param {string} id - Unique identifier for the MCP server.
   * @param {McpPortalServerAPISyncParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<McpPortalServerAPISyncResponse>} Sync completed. Check result.status and result.error_details for outcome.
   *
   * @example
   * ```ts
   * const mcpPortalServer = await client.mcpPortalServers.apiSync('my-mcp-server', {
   *   account_id: 'a86a8f5c339544d7bdc89926de14fb8c',
   * });
   * ```
   */
  apiSync(
    id: string,
    params: McpPortalServerAPISyncParams,
    options?: RequestOptions,
  ): APIPromise<McpPortalServerAPISyncResponse> {
    const { account_id } = params;
    return this._client.post(
      __scalarPath`/accounts/${account_id}/access/ai-controls/mcp/servers/${id}/sync`,
      options,
    );
  }
}

export interface McpPortalServerAPIListParams {
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
   * Search by id, name
   */
  search?: string;
}

export interface McpPortalServerAPIListResponse {
  result: Array<McpPortalServerAPIListResponse.Result>;
  success: boolean;
}

export namespace McpPortalServerAPIListResponse {
  export interface Result {
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
    tools: Array<Record<string, unknown>>;
    /**
     * Safe subset of auth_credentials surfaced to the dashboard. Includes auth_mode (dcr|manual), has_client_secret, client_secret_version, and the OAuth endpoints + client_id for manual servers. Never includes the secret value.
     */
    auth_config_summary?: Result.AuthConfigSummary;
    /**
     * Whether administrative authentication is required before capabilities can be synced. Manual OAuth is user-managed and has no administrative authentication flow.
     */
    authentication_status?: 'not_required' | 'required' | 'connected' | 'stale' | 'manual';
    /**
     * @format date-time
     */
    created_at?: string;
    created_by?: string;
    /**
     * Optional description of the MCP server.
     * @maxLength 512
     */
    description?: string | null;
    error?: string;
    error_details?: Result.ErrorDetails;
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
    /**
     * Server-wide prompt capability overrides.
     */
    updated_prompts?: Array<Result.UpdatedPrompt>;
    /**
     * Server-wide tool capability overrides.
     */
    updated_tools?: Array<Result.UpdatedTool>;
  }

  export namespace Result {
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

export interface McpPortalServerAPICreateParams {
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
   * @pattern ^[a-z0-9]+(?:-[a-z0-9]+)*$
   */
  id: string;
  /**
   * Display name for the MCP server.
   * @maxLength 350
   */
  name: string;
  /**
   * Static credential for the upstream MCP server. For auth_type "bearer", either a raw token string (e.g. "sk-abc123"), which is wrapped server-side as `Authorization: Bearer <token>`, or a JSON-encoded object of the form `{"headers":{"Header-Name":"value",...}}` for custom or multiple static headers (e.g. Cloudflare Access service tokens: `{"headers":{"cf-access-client-id":"...","cf-access-client-secret":"..."}}`).
   */
  auth_credentials?: string;
  /**
   * Pre-registered OAuth client_secret. Write-only - accepted on create/update when auth_credentials.auth_mode is 'manual'. Stored AES-GCM-encrypted in server_oauth_secrets; never returned by read endpoints.
   */
  client_secret?: string;
  /**
   * Optional description of the MCP server.
   * @maxLength 512
   */
  description?: string | null;
  /**
   * When true, the gateway worker uses the shared Cloudflare-owned OAuth callback endpoint as the redirect_uri for upstream on-behalf OAuth, instead of the customer portal hostname. Defaults to false (off); opt in per server by setting true.
   */
  is_shared_oauth_callback_enabled?: boolean;
  /**
   * Route outbound traffic to this MCP server through Zero Trust Secure Web Gateway.
   * @default false
   */
  secure_web_gateway?: boolean;
  /**
   * Server-wide prompt capability overrides.
   */
  updated_prompts?: Array<McpPortalServerAPICreateParams.UpdatedPrompt>;
  /**
   * Server-wide tool capability overrides.
   */
  updated_tools?: Array<McpPortalServerAPICreateParams.UpdatedTool>;
}

export namespace McpPortalServerAPICreateParams {
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

export interface McpPortalServerAPICreateResponse {
  result: McpPortalServerAPICreateResponse.Result;
  success: boolean;
}

export namespace McpPortalServerAPICreateResponse {
  export interface Result {
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
    tools: Array<Record<string, unknown>>;
    /**
     * Safe subset of auth_credentials surfaced to the dashboard. Includes auth_mode (dcr|manual), has_client_secret, client_secret_version, and the OAuth endpoints + client_id for manual servers. Never includes the secret value.
     */
    auth_config_summary?: Result.AuthConfigSummary;
    /**
     * Whether administrative authentication is required before capabilities can be synced. Manual OAuth is user-managed and has no administrative authentication flow.
     */
    authentication_status?: 'not_required' | 'required' | 'connected' | 'stale' | 'manual';
    /**
     * @format date-time
     */
    created_at?: string;
    created_by?: string;
    /**
     * Optional description of the MCP server.
     * @maxLength 512
     */
    description?: string | null;
    error?: string;
    error_details?: Result.ErrorDetails;
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
    /**
     * Server-wide prompt capability overrides.
     */
    updated_prompts?: Array<Result.UpdatedPrompt>;
    /**
     * Server-wide tool capability overrides.
     */
    updated_tools?: Array<Result.UpdatedTool>;
  }

  export namespace Result {
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

export interface McpPortalServerAPIDeleteParams {
  account_id: string;
}

export interface McpPortalServerAPIDeleteResponse {
  result: McpPortalServerAPIDeleteResponse.Result;
  success: boolean;
}

export namespace McpPortalServerAPIDeleteResponse {
  export interface Result {
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
    tools: Array<Record<string, unknown>>;
    /**
     * Safe subset of auth_credentials surfaced to the dashboard. Includes auth_mode (dcr|manual), has_client_secret, client_secret_version, and the OAuth endpoints + client_id for manual servers. Never includes the secret value.
     */
    auth_config_summary?: Result.AuthConfigSummary;
    /**
     * Whether administrative authentication is required before capabilities can be synced. Manual OAuth is user-managed and has no administrative authentication flow.
     */
    authentication_status?: 'not_required' | 'required' | 'connected' | 'stale' | 'manual';
    /**
     * @format date-time
     */
    created_at?: string;
    created_by?: string;
    /**
     * Optional description of the MCP server.
     * @maxLength 512
     */
    description?: string | null;
    error?: string;
    error_details?: Result.ErrorDetails;
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
    /**
     * Server-wide prompt capability overrides.
     */
    updated_prompts?: Array<Result.UpdatedPrompt>;
    /**
     * Server-wide tool capability overrides.
     */
    updated_tools?: Array<Result.UpdatedTool>;
  }

  export namespace Result {
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

export interface McpPortalServerAPIFetchParams {
  account_id: string;
}

export interface McpPortalServerAPIFetchResponse {
  result: McpPortalServerAPIFetchResponse.Result;
  success: boolean;
}

export namespace McpPortalServerAPIFetchResponse {
  export interface Result {
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
    tools: Array<Record<string, unknown>>;
    /**
     * Safe subset of auth_credentials surfaced to the dashboard. Includes auth_mode (dcr|manual), has_client_secret, client_secret_version, and the OAuth endpoints + client_id for manual servers. Never includes the secret value.
     */
    auth_config_summary?: Result.AuthConfigSummary;
    /**
     * Whether administrative authentication is required before capabilities can be synced. Manual OAuth is user-managed and has no administrative authentication flow.
     */
    authentication_status?: 'not_required' | 'required' | 'connected' | 'stale' | 'manual';
    /**
     * @format date-time
     */
    created_at?: string;
    created_by?: string;
    /**
     * Optional description of the MCP server.
     * @maxLength 512
     */
    description?: string | null;
    error?: string;
    error_details?: Result.ErrorDetails;
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
    /**
     * Server-wide prompt capability overrides.
     */
    updated_prompts?: Array<Result.UpdatedPrompt>;
    /**
     * Server-wide tool capability overrides.
     */
    updated_tools?: Array<Result.UpdatedTool>;
  }

  export namespace Result {
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

export interface McpPortalServerAPIUpdateParams {
  /**
   * Path param
   */
  account_id: string;
  /**
   * Body param: Static credential for the upstream MCP server. For auth_type "bearer", either a raw token string (e.g. "sk-abc123"), which is wrapped server-side as `Authorization: Bearer <token>`, or a JSON-encoded object of the form `{"headers":{"Header-Name":"value",...}}` for custom or multiple static headers (e.g. Cloudflare Access service tokens: `{"headers":{"cf-access-client-id":"...","cf-access-client-secret":"..."}}`).
   */
  auth_credentials?: string;
  /**
   * Body param: Pre-registered OAuth client_secret. Write-only - accepted on create/update when auth_credentials.auth_mode is 'manual'. Stored AES-GCM-encrypted in server_oauth_secrets; never returned by read endpoints.
   */
  client_secret?: string;
  /**
   * Body param: Optional description of the MCP server.
   * @maxLength 512
   */
  description?: string | null;
  /**
   * Body param: When true, the gateway worker uses the shared Cloudflare-owned OAuth callback endpoint as the redirect_uri for upstream on-behalf OAuth, instead of the customer portal hostname. Defaults to false (off); opt in per server by setting true.
   */
  is_shared_oauth_callback_enabled?: boolean;
  /**
   * Body param: Display name for the MCP server.
   * @maxLength 350
   */
  name?: string;
  /**
   * Body param: Route outbound traffic to this MCP server through Zero Trust Secure Web Gateway.
   * @default false
   */
  secure_web_gateway?: boolean;
  /**
   * Body param: Server-wide prompt capability overrides.
   */
  updated_prompts?: Array<McpPortalServerAPIUpdateParams.UpdatedPrompt>;
  /**
   * Body param: Server-wide tool capability overrides.
   */
  updated_tools?: Array<McpPortalServerAPIUpdateParams.UpdatedTool>;
}

export namespace McpPortalServerAPIUpdateParams {
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

export interface McpPortalServerAPIUpdateResponse {
  result: McpPortalServerAPIUpdateResponse.Result;
  success: boolean;
}

export namespace McpPortalServerAPIUpdateResponse {
  export interface Result {
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
    tools: Array<Record<string, unknown>>;
    /**
     * Safe subset of auth_credentials surfaced to the dashboard. Includes auth_mode (dcr|manual), has_client_secret, client_secret_version, and the OAuth endpoints + client_id for manual servers. Never includes the secret value.
     */
    auth_config_summary?: Result.AuthConfigSummary;
    /**
     * Whether administrative authentication is required before capabilities can be synced. Manual OAuth is user-managed and has no administrative authentication flow.
     */
    authentication_status?: 'not_required' | 'required' | 'connected' | 'stale' | 'manual';
    /**
     * @format date-time
     */
    created_at?: string;
    created_by?: string;
    /**
     * Optional description of the MCP server.
     * @maxLength 512
     */
    description?: string | null;
    error?: string;
    error_details?: Result.ErrorDetails;
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
    /**
     * Server-wide prompt capability overrides.
     */
    updated_prompts?: Array<Result.UpdatedPrompt>;
    /**
     * Server-wide tool capability overrides.
     */
    updated_tools?: Array<Result.UpdatedTool>;
  }

  export namespace Result {
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

export interface McpPortalServerAPISyncParams {
  account_id: string;
}

export interface McpPortalServerAPISyncResponse {
  result: McpPortalServerAPISyncResponse.Result;
  success: boolean;
}

export namespace McpPortalServerAPISyncResponse {
  export interface Result {
    error?: string;
    error_details?: Result.ErrorDetails;
    status?: 'waiting' | 'ready' | 'stale' | 'error';
  }

  export namespace Result {
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
  }
}
export declare namespace McpPortalServers {
  export {
    type McpPortalServerAPIListResponse as McpPortalServerAPIListResponse,
    type McpPortalServerAPICreateResponse as McpPortalServerAPICreateResponse,
    type McpPortalServerAPIDeleteResponse as McpPortalServerAPIDeleteResponse,
    type McpPortalServerAPIFetchResponse as McpPortalServerAPIFetchResponse,
    type McpPortalServerAPIUpdateResponse as McpPortalServerAPIUpdateResponse,
    type McpPortalServerAPISyncResponse as McpPortalServerAPISyncResponse,
    type McpPortalServerAPIListParams as McpPortalServerAPIListParams,
    type McpPortalServerAPICreateParams as McpPortalServerAPICreateParams,
    type McpPortalServerAPIDeleteParams as McpPortalServerAPIDeleteParams,
    type McpPortalServerAPIFetchParams as McpPortalServerAPIFetchParams,
    type McpPortalServerAPIUpdateParams as McpPortalServerAPIUpdateParams,
    type McpPortalServerAPISyncParams as McpPortalServerAPISyncParams,
  };
}
