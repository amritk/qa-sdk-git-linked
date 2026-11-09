// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from '../resource';
import { APIPromise } from '../api-promise';
import type { RequestOptions } from '../internal/request-options';
import { path as __scalarPath } from '../internal/utils/path';

export class AISearchNamespaces extends APIResource {
  /**
   * List namespaces in the account, including their descriptions and creation times.
   *
   * @param {string} accountID
   * @param {AISearchNamespaceListParams} [query] - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<AISearchNamespaceListResponse>} List of namespaces.
   *
   * @example
   * ```ts
   * const aiSearchNamespace = await client.aiSearchNamespaces.list('c3dc5f0b34a14ff8e1b3ec04895e1b22', {
   *   page: 1,
   *   per_page: 20,
   * });
   * ```
   */
  list(
    accountID: string,
    query: AISearchNamespaceListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AISearchNamespaceListResponse> {
    return this._client.get(__scalarPath`/accounts/${accountID}/ai-search/namespaces`, { query, ...options });
  }

  /**
   * Create a namespace for organizing AI Search instances.
   *
   * @param {string} accountID
   * @param {AISearchNamespaceCreateParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<AISearchNamespaceCreateResponse>} Namespace created.
   *
   * @example
   * ```ts
   * const aiSearchNamespace = await client.aiSearchNamespaces.create('c3dc5f0b34a14ff8e1b3ec04895e1b22', {
   *   name: '',
   * });
   * ```
   */
  create(
    accountID: string,
    body: AISearchNamespaceCreateParams,
    options?: RequestOptions,
  ): APIPromise<AISearchNamespaceCreateResponse> {
    return this._client.post(__scalarPath`/accounts/${accountID}/ai-search/namespaces`, { body, ...options });
  }

  /**
   * Permanently delete a namespace. The namespace must be empty (no instances), and the default namespace cannot be deleted.
   *
   * @param {string} name
   * @param {AISearchNamespaceDeleteParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<AISearchNamespaceDeleteResponse>} Namespace deleted.
   *
   * @example
   * ```ts
   * const aiSearchNamespace = await client.aiSearchNamespaces.delete('production', {
   *   account_id: 'c3dc5f0b34a14ff8e1b3ec04895e1b22',
   * });
   * ```
   */
  delete(
    name: string,
    params: AISearchNamespaceDeleteParams,
    options?: RequestOptions,
  ): APIPromise<AISearchNamespaceDeleteResponse> {
    const { account_id } = params;
    return this._client.delete(__scalarPath`/accounts/${account_id}/ai-search/namespaces/${name}`, options);
  }

  /**
   * Retrieve a namespace and its description.
   *
   * @param {string} name
   * @param {AISearchNamespaceFetchParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<AISearchNamespaceFetchResponse>} Namespace details.
   *
   * @example
   * ```ts
   * const aiSearchNamespace = await client.aiSearchNamespaces.fetch('production', {
   *   account_id: 'c3dc5f0b34a14ff8e1b3ec04895e1b22',
   * });
   * ```
   */
  fetch(
    name: string,
    params: AISearchNamespaceFetchParams,
    options?: RequestOptions,
  ): APIPromise<AISearchNamespaceFetchResponse> {
    const { account_id } = params;
    return this._client.get(__scalarPath`/accounts/${account_id}/ai-search/namespaces/${name}`, options);
  }

  /**
   * Update the description and/or the public endpoint configuration of an existing namespace. The default namespace's description cannot be modified, but its public endpoint can.
   *
   * @param {string} name
   * @param {AISearchNamespaceUpdateParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<AISearchNamespaceUpdateResponse>} Returns the updated namespace.
   *
   * @example
   * ```ts
   * const aiSearchNamespace = await client.aiSearchNamespaces.update('production', {
   *   account_id: 'c3dc5f0b34a14ff8e1b3ec04895e1b22',
   * });
   * ```
   */
  update(
    name: string,
    params: AISearchNamespaceUpdateParams,
    options?: RequestOptions,
  ): APIPromise<AISearchNamespaceUpdateResponse> {
    const { account_id, ...body } = params;
    return this._client.put(__scalarPath`/accounts/${account_id}/ai-search/namespaces/${name}`, {
      body,
      ...options,
    });
  }

  /**
   * Moves an instance from its current namespace to the specified target namespace. Use 'default' with --destination-namespace to move the instance back to the default namespace. Fails with 400 if the target namespace already has an instance with the same id (ids must be unique within a namespace — the same id can exist in different namespaces).
   *
   * @param {string} id - Instance id.
   * @param {AISearchNamespaceMoveInstanceParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<AISearchNamespaceMoveInstanceResponse>} Instance moved.
   *
   * @example
   * ```ts
   * const aiSearchNamespace = await client.aiSearchNamespaces.moveInstance('my-blog', {
   *   account_id: 'c3dc5f0b34a14ff8e1b3ec04895e1b22',
   *   name: 'production',
   *   new_namespace: 'staging',
   * });
   * ```
   */
  moveInstance(
    id: string,
    params: AISearchNamespaceMoveInstanceParams,
    options?: RequestOptions,
  ): APIPromise<AISearchNamespaceMoveInstanceResponse> {
    const { account_id, name, ...body } = params;
    return this._client.patch(
      __scalarPath`/accounts/${account_id}/ai-search/namespaces/${name}/instances/${id}`,
      { body, ...options },
    );
  }
}

export interface AISearchNamespaceListParams {
  /**
   * Page number (1-indexed).
   * @default 1
   * @minimum 1
   */
  page?: number;
  /**
   * Number of results per page.
   * @default 20
   * @minimum 1
   * @maximum 100
   */
  per_page?: number;
  /**
   * Filter namespaces whose name or description contains this string (case-insensitive).
   * @maxLength 256
   */
  search?: string;
}

export interface AISearchNamespaceListResponse {
  result: Array<AISearchNamespaceListResponse.Result>;
  result_info: AISearchNamespaceListResponse.ResultInfo;
  success: true;
}

export namespace AISearchNamespaceListResponse {
  export interface Result {
    /**
     * @format date-time
     */
    created_at: string;
    /**
     * @pattern ^[a-z0-9]([a-z0-9-]{0,26}[a-z0-9])?$
     */
    name: string;
    /**
     * Optional description for the namespace. Max 256 characters.
     * @maxLength 256
     */
    description?: string | null;
    public_endpoint_id?: string | null;
    public_endpoint_params?: Result.PublicEndpointParams | null;
  }

  export namespace Result {
    export interface PublicEndpointParams {
      authorized_hosts?: Array<string>;
      chat_completions_endpoint?: PublicEndpointParams.ChatCompletionsEndpoint;
      /**
       * Custom domain hostnames that alias this public endpoint. GET and create responses return the current set; on update (PUT) this field is only echoed back when supplied in the request body, otherwise it is null (omit it to leave domains unchanged).
       * @maxItems 1
       */
      custom_domains?: Array<string> | null;
      /**
       * When false, the instance is reachable only via a registered custom domain and the default <public_endpoint_id>.search.ai.cloudflare.com host returns 404. Requires at least one custom domain. Defaults to true. public_endpoint_params is replaced wholesale on update, so resend default_domain_enabled on every update to keep the default host off — omitting it resets to true.
       */
      default_domain_enabled?: boolean;
      /**
       * @default false
       */
      enabled?: boolean;
      /**
       * Instance IDs exposed through the namespace public endpoint. Empty means nothing is searchable. Every ID must be an existing instance in this namespace, and the list cannot exceed the account's multi-instance search limit.
       * @default []
       * @maxItems 10
       */
      instances_allowed?: Array<string>;
      mcp?: PublicEndpointParams.Mcp;
      rate_limit?: PublicEndpointParams.RateLimit;
      search_endpoint?: PublicEndpointParams.SearchEndpoint;
    }

    export namespace PublicEndpointParams {
      export interface ChatCompletionsEndpoint {
        /**
         * Disable chat completions endpoint for this public endpoint
         * @default false
         */
        disabled?: boolean;
      }

      export interface Mcp {
        /**
         * @default Finds exactly what you're looking for
         */
        description?: string;
        /**
         * Disable MCP endpoint for this public endpoint
         * @default false
         */
        disabled?: boolean;
      }

      export interface RateLimit {
        /**
         * @minimum 60000
         * @maximum 3600000
         */
        period_ms?: number;
        /**
         * @minimum 1
         */
        requests?: number;
        technique?: 'fixed' | 'sliding';
      }

      export interface SearchEndpoint {
        /**
         * Disable search endpoint for this public endpoint
         * @default false
         */
        disabled?: boolean;
      }
    }
  }

  export interface ResultInfo {
    count: number;
    page: number;
    per_page: number;
    total_count: number;
  }
}

export interface AISearchNamespaceCreateParams {
  /**
   * @pattern ^[a-z0-9]([a-z0-9-]{0,26}[a-z0-9])?$
   */
  name: string;
  /**
   * Optional description for the namespace. Max 256 characters.
   * @maxLength 256
   */
  description?: string | null;
  public_endpoint_params?: AISearchNamespaceCreateParams.PublicEndpointParams;
}

export namespace AISearchNamespaceCreateParams {
  export interface PublicEndpointParams {
    authorized_hosts?: Array<string>;
    chat_completions_endpoint?: PublicEndpointParams.ChatCompletionsEndpoint;
    /**
     * Custom domain hostnames that alias this public endpoint. GET and create responses return the current set; on update (PUT) this field is only echoed back when supplied in the request body, otherwise it is null (omit it to leave domains unchanged).
     * @maxItems 1
     */
    custom_domains?: Array<string> | null;
    /**
     * When false, the instance is reachable only via a registered custom domain and the default <public_endpoint_id>.search.ai.cloudflare.com host returns 404. Requires at least one custom domain. Defaults to true. public_endpoint_params is replaced wholesale on update, so resend default_domain_enabled on every update to keep the default host off — omitting it resets to true.
     */
    default_domain_enabled?: boolean;
    /**
     * @default false
     */
    enabled?: boolean;
    /**
     * Instance IDs exposed through the namespace public endpoint. Empty means nothing is searchable. Every ID must be an existing instance in this namespace, and the list cannot exceed the account's multi-instance search limit.
     * @default []
     * @maxItems 10
     */
    instances_allowed?: Array<string>;
    mcp?: PublicEndpointParams.Mcp;
    rate_limit?: PublicEndpointParams.RateLimit;
    search_endpoint?: PublicEndpointParams.SearchEndpoint;
  }

  export namespace PublicEndpointParams {
    export interface ChatCompletionsEndpoint {
      /**
       * Disable chat completions endpoint for this public endpoint
       * @default false
       */
      disabled?: boolean;
    }

    export interface Mcp {
      /**
       * @default Finds exactly what you're looking for
       */
      description?: string;
      /**
       * Disable MCP endpoint for this public endpoint
       * @default false
       */
      disabled?: boolean;
    }

    export interface RateLimit {
      /**
       * @minimum 60000
       * @maximum 3600000
       */
      period_ms?: number;
      /**
       * @minimum 1
       */
      requests?: number;
      technique?: 'fixed' | 'sliding';
    }

    export interface SearchEndpoint {
      /**
       * Disable search endpoint for this public endpoint
       * @default false
       */
      disabled?: boolean;
    }
  }
}

export interface AISearchNamespaceCreateResponse {
  result: AISearchNamespaceCreateResponse.Result;
  success: true;
}

export namespace AISearchNamespaceCreateResponse {
  export interface Result {
    /**
     * @format date-time
     */
    created_at: string;
    /**
     * @pattern ^[a-z0-9]([a-z0-9-]{0,26}[a-z0-9])?$
     */
    name: string;
    /**
     * Optional description for the namespace. Max 256 characters.
     * @maxLength 256
     */
    description?: string | null;
    public_endpoint_id?: string | null;
    public_endpoint_params?: Result.PublicEndpointParams | null;
  }

  export namespace Result {
    export interface PublicEndpointParams {
      authorized_hosts?: Array<string>;
      chat_completions_endpoint?: PublicEndpointParams.ChatCompletionsEndpoint;
      /**
       * Custom domain hostnames that alias this public endpoint. GET and create responses return the current set; on update (PUT) this field is only echoed back when supplied in the request body, otherwise it is null (omit it to leave domains unchanged).
       * @maxItems 1
       */
      custom_domains?: Array<string> | null;
      /**
       * When false, the instance is reachable only via a registered custom domain and the default <public_endpoint_id>.search.ai.cloudflare.com host returns 404. Requires at least one custom domain. Defaults to true. public_endpoint_params is replaced wholesale on update, so resend default_domain_enabled on every update to keep the default host off — omitting it resets to true.
       */
      default_domain_enabled?: boolean;
      /**
       * @default false
       */
      enabled?: boolean;
      /**
       * Instance IDs exposed through the namespace public endpoint. Empty means nothing is searchable. Every ID must be an existing instance in this namespace, and the list cannot exceed the account's multi-instance search limit.
       * @default []
       * @maxItems 10
       */
      instances_allowed?: Array<string>;
      mcp?: PublicEndpointParams.Mcp;
      rate_limit?: PublicEndpointParams.RateLimit;
      search_endpoint?: PublicEndpointParams.SearchEndpoint;
    }

    export namespace PublicEndpointParams {
      export interface ChatCompletionsEndpoint {
        /**
         * Disable chat completions endpoint for this public endpoint
         * @default false
         */
        disabled?: boolean;
      }

      export interface Mcp {
        /**
         * @default Finds exactly what you're looking for
         */
        description?: string;
        /**
         * Disable MCP endpoint for this public endpoint
         * @default false
         */
        disabled?: boolean;
      }

      export interface RateLimit {
        /**
         * @minimum 60000
         * @maximum 3600000
         */
        period_ms?: number;
        /**
         * @minimum 1
         */
        requests?: number;
        technique?: 'fixed' | 'sliding';
      }

      export interface SearchEndpoint {
        /**
         * Disable search endpoint for this public endpoint
         * @default false
         */
        disabled?: boolean;
      }
    }
  }
}

export interface AISearchNamespaceDeleteParams {
  account_id: string;
}

export interface AISearchNamespaceDeleteResponse {
  result: Record<string, unknown>;
  success: true;
}

export interface AISearchNamespaceFetchParams {
  account_id: string;
}

export interface AISearchNamespaceFetchResponse {
  result: AISearchNamespaceFetchResponse.Result;
  success: true;
}

export namespace AISearchNamespaceFetchResponse {
  export interface Result {
    /**
     * @format date-time
     */
    created_at: string;
    /**
     * @pattern ^[a-z0-9]([a-z0-9-]{0,26}[a-z0-9])?$
     */
    name: string;
    /**
     * Optional description for the namespace. Max 256 characters.
     * @maxLength 256
     */
    description?: string | null;
    public_endpoint_id?: string | null;
    public_endpoint_params?: Result.PublicEndpointParams | null;
  }

  export namespace Result {
    export interface PublicEndpointParams {
      authorized_hosts?: Array<string>;
      chat_completions_endpoint?: PublicEndpointParams.ChatCompletionsEndpoint;
      /**
       * Custom domain hostnames that alias this public endpoint. GET and create responses return the current set; on update (PUT) this field is only echoed back when supplied in the request body, otherwise it is null (omit it to leave domains unchanged).
       * @maxItems 1
       */
      custom_domains?: Array<string> | null;
      /**
       * When false, the instance is reachable only via a registered custom domain and the default <public_endpoint_id>.search.ai.cloudflare.com host returns 404. Requires at least one custom domain. Defaults to true. public_endpoint_params is replaced wholesale on update, so resend default_domain_enabled on every update to keep the default host off — omitting it resets to true.
       */
      default_domain_enabled?: boolean;
      /**
       * @default false
       */
      enabled?: boolean;
      /**
       * Instance IDs exposed through the namespace public endpoint. Empty means nothing is searchable. Every ID must be an existing instance in this namespace, and the list cannot exceed the account's multi-instance search limit.
       * @default []
       * @maxItems 10
       */
      instances_allowed?: Array<string>;
      mcp?: PublicEndpointParams.Mcp;
      rate_limit?: PublicEndpointParams.RateLimit;
      search_endpoint?: PublicEndpointParams.SearchEndpoint;
    }

    export namespace PublicEndpointParams {
      export interface ChatCompletionsEndpoint {
        /**
         * Disable chat completions endpoint for this public endpoint
         * @default false
         */
        disabled?: boolean;
      }

      export interface Mcp {
        /**
         * @default Finds exactly what you're looking for
         */
        description?: string;
        /**
         * Disable MCP endpoint for this public endpoint
         * @default false
         */
        disabled?: boolean;
      }

      export interface RateLimit {
        /**
         * @minimum 60000
         * @maximum 3600000
         */
        period_ms?: number;
        /**
         * @minimum 1
         */
        requests?: number;
        technique?: 'fixed' | 'sliding';
      }

      export interface SearchEndpoint {
        /**
         * Disable search endpoint for this public endpoint
         * @default false
         */
        disabled?: boolean;
      }
    }
  }
}

export interface AISearchNamespaceUpdateParams {
  /**
   * Path param
   */
  account_id: string;
  /**
   * Body param: Optional description for the namespace. Max 256 characters.
   * @maxLength 256
   */
  description?: string | null;
  /**
   * Body param
   */
  public_endpoint_params?: AISearchNamespaceUpdateParams.PublicEndpointParams | null;
}

export namespace AISearchNamespaceUpdateParams {
  export interface PublicEndpointParams {
    authorized_hosts?: Array<string>;
    chat_completions_endpoint?: PublicEndpointParams.ChatCompletionsEndpoint;
    /**
     * Custom domain hostnames that alias this public endpoint. GET and create responses return the current set; on update (PUT) this field is only echoed back when supplied in the request body, otherwise it is null (omit it to leave domains unchanged).
     * @maxItems 1
     */
    custom_domains?: Array<string> | null;
    /**
     * When false, the instance is reachable only via a registered custom domain and the default <public_endpoint_id>.search.ai.cloudflare.com host returns 404. Requires at least one custom domain. Defaults to true. public_endpoint_params is replaced wholesale on update, so resend default_domain_enabled on every update to keep the default host off — omitting it resets to true.
     */
    default_domain_enabled?: boolean;
    /**
     * @default false
     */
    enabled?: boolean;
    /**
     * Instance IDs exposed through the namespace public endpoint. Empty means nothing is searchable. Every ID must be an existing instance in this namespace, and the list cannot exceed the account's multi-instance search limit.
     * @default []
     * @maxItems 10
     */
    instances_allowed?: Array<string>;
    mcp?: PublicEndpointParams.Mcp;
    rate_limit?: PublicEndpointParams.RateLimit;
    search_endpoint?: PublicEndpointParams.SearchEndpoint;
  }

  export namespace PublicEndpointParams {
    export interface ChatCompletionsEndpoint {
      /**
       * Disable chat completions endpoint for this public endpoint
       * @default false
       */
      disabled?: boolean;
    }

    export interface Mcp {
      /**
       * @default Finds exactly what you're looking for
       */
      description?: string;
      /**
       * Disable MCP endpoint for this public endpoint
       * @default false
       */
      disabled?: boolean;
    }

    export interface RateLimit {
      /**
       * @minimum 60000
       * @maximum 3600000
       */
      period_ms?: number;
      /**
       * @minimum 1
       */
      requests?: number;
      technique?: 'fixed' | 'sliding';
    }

    export interface SearchEndpoint {
      /**
       * Disable search endpoint for this public endpoint
       * @default false
       */
      disabled?: boolean;
    }
  }
}

export interface AISearchNamespaceUpdateResponse {
  result: AISearchNamespaceUpdateResponse.Result;
  success: true;
}

export namespace AISearchNamespaceUpdateResponse {
  export interface Result {
    /**
     * @format date-time
     */
    created_at: string;
    /**
     * @pattern ^[a-z0-9]([a-z0-9-]{0,26}[a-z0-9])?$
     */
    name: string;
    /**
     * Optional description for the namespace. Max 256 characters.
     * @maxLength 256
     */
    description?: string | null;
    public_endpoint_id?: string | null;
    public_endpoint_params?: Result.PublicEndpointParams | null;
  }

  export namespace Result {
    export interface PublicEndpointParams {
      authorized_hosts?: Array<string>;
      chat_completions_endpoint?: PublicEndpointParams.ChatCompletionsEndpoint;
      /**
       * Custom domain hostnames that alias this public endpoint. GET and create responses return the current set; on update (PUT) this field is only echoed back when supplied in the request body, otherwise it is null (omit it to leave domains unchanged).
       * @maxItems 1
       */
      custom_domains?: Array<string> | null;
      /**
       * When false, the instance is reachable only via a registered custom domain and the default <public_endpoint_id>.search.ai.cloudflare.com host returns 404. Requires at least one custom domain. Defaults to true. public_endpoint_params is replaced wholesale on update, so resend default_domain_enabled on every update to keep the default host off — omitting it resets to true.
       */
      default_domain_enabled?: boolean;
      /**
       * @default false
       */
      enabled?: boolean;
      /**
       * Instance IDs exposed through the namespace public endpoint. Empty means nothing is searchable. Every ID must be an existing instance in this namespace, and the list cannot exceed the account's multi-instance search limit.
       * @default []
       * @maxItems 10
       */
      instances_allowed?: Array<string>;
      mcp?: PublicEndpointParams.Mcp;
      rate_limit?: PublicEndpointParams.RateLimit;
      search_endpoint?: PublicEndpointParams.SearchEndpoint;
    }

    export namespace PublicEndpointParams {
      export interface ChatCompletionsEndpoint {
        /**
         * Disable chat completions endpoint for this public endpoint
         * @default false
         */
        disabled?: boolean;
      }

      export interface Mcp {
        /**
         * @default Finds exactly what you're looking for
         */
        description?: string;
        /**
         * Disable MCP endpoint for this public endpoint
         * @default false
         */
        disabled?: boolean;
      }

      export interface RateLimit {
        /**
         * @minimum 60000
         * @maximum 3600000
         */
        period_ms?: number;
        /**
         * @minimum 1
         */
        requests?: number;
        technique?: 'fixed' | 'sliding';
      }

      export interface SearchEndpoint {
        /**
         * Disable search endpoint for this public endpoint
         * @default false
         */
        disabled?: boolean;
      }
    }
  }
}

export interface AISearchNamespaceMoveInstanceParams {
  /**
   * Path param
   */
  account_id: string;
  /**
   * Path param: Current namespace of the instance.
   */
  name: string;
  /**
   * Body param: Target namespace to move the instance into.
   * @pattern ^[a-z0-9]([a-z0-9-]{0,26}[a-z0-9])?$
   */
  new_namespace: string;
}

export interface AISearchNamespaceMoveInstanceResponse {
  result: Record<string, unknown>;
  success: true;
}
export declare namespace AISearchNamespaces {
  export {
    type AISearchNamespaceListResponse as AISearchNamespaceListResponse,
    type AISearchNamespaceCreateResponse as AISearchNamespaceCreateResponse,
    type AISearchNamespaceDeleteResponse as AISearchNamespaceDeleteResponse,
    type AISearchNamespaceFetchResponse as AISearchNamespaceFetchResponse,
    type AISearchNamespaceUpdateResponse as AISearchNamespaceUpdateResponse,
    type AISearchNamespaceMoveInstanceResponse as AISearchNamespaceMoveInstanceResponse,
    type AISearchNamespaceListParams as AISearchNamespaceListParams,
    type AISearchNamespaceCreateParams as AISearchNamespaceCreateParams,
    type AISearchNamespaceDeleteParams as AISearchNamespaceDeleteParams,
    type AISearchNamespaceFetchParams as AISearchNamespaceFetchParams,
    type AISearchNamespaceUpdateParams as AISearchNamespaceUpdateParams,
    type AISearchNamespaceMoveInstanceParams as AISearchNamespaceMoveInstanceParams,
  };
}
