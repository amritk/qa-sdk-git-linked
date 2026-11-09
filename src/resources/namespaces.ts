// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from '../resource';
import { APIPromise } from '../api-promise';
import type { RequestOptions } from '../internal/request-options';
import { path as __scalarPath } from '../internal/utils/path';

export class Namespaces extends APIResource {
  /**
   * Lists all namespaces for the given account. Results are paginated.
   *
   * @param {string} accountID - Cloudflare Account ID.
   * @param {NamespaceAgentMemoryListParams} [query] - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<NamespaceAgentMemoryListResponse>} A List of namespaces.
   *
   * @example
   * ```ts
   * const response = await client.namespaces.agentMemoryList('accountId');
   * ```
   */
  agentMemoryList(
    accountID: string,
    query: NamespaceAgentMemoryListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<NamespaceAgentMemoryListResponse> {
    return this._client.get(__scalarPath`/accounts/${accountID}/agent-memory/namespaces`, {
      query,
      ...options,
    });
  }

  /**
   * Creates a new memory namespace owned by the account.
   *
   * @param {string} accountID - Cloudflare Account ID.
   * @param {NamespaceAgentMemoryCreateParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<NamespaceAgentMemoryCreateResponse>} Namespace created.
   *
   * @example
   * ```ts
   * const response = await client.namespaces.agentMemoryCreate('accountId', {
   *   name: 'support-agent',
   * });
   * ```
   */
  agentMemoryCreate(
    accountID: string,
    body: NamespaceAgentMemoryCreateParams,
    options?: RequestOptions,
  ): APIPromise<NamespaceAgentMemoryCreateResponse> {
    return this._client.post(__scalarPath`/accounts/${accountID}/agent-memory/namespaces`, {
      body,
      ...options,
    });
  }

  /**
   * Deletes a namespace.
   *
   * @param {string} namespaceName - Namespace name.
   * @param {NamespaceAgentMemoryDeleteParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<NamespaceAgentMemoryDeleteResponse>} Namespace deleted.
   *
   * @example
   * ```ts
   * const response = await client.namespaces.agentMemoryDelete('support-agent', {
   *   account_id: 'accountId',
   * });
   * ```
   */
  agentMemoryDelete(
    namespaceName: string,
    params: NamespaceAgentMemoryDeleteParams,
    options?: RequestOptions,
  ): APIPromise<NamespaceAgentMemoryDeleteResponse> {
    const { account_id } = params;
    return this._client.delete(
      __scalarPath`/accounts/${account_id}/agent-memory/namespaces/${namespaceName}`,
      options,
    );
  }

  /**
   * Gets a namespace by name.
   *
   * @param {string} namespaceName - Namespace name.
   * @param {NamespaceAgentMemoryGetParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<NamespaceAgentMemoryGetResponse>} The requested namespace.
   *
   * @example
   * ```ts
   * const response = await client.namespaces.agentMemoryGet('support-agent', {
   *   account_id: 'accountId',
   * });
   * ```
   */
  agentMemoryGet(
    namespaceName: string,
    params: NamespaceAgentMemoryGetParams,
    options?: RequestOptions,
  ): APIPromise<NamespaceAgentMemoryGetResponse> {
    const { account_id } = params;
    return this._client.get(
      __scalarPath`/accounts/${account_id}/agent-memory/namespaces/${namespaceName}`,
      options,
    );
  }
}

export interface NamespaceAgentMemoryListParams {
  /**
   * Number of results per page.
   * @minimum 1
   * @maximum 1000
   */
  per_page?: number;
  /**
   * Field to order the results by.
   */
  order?: 'id' | 'name';
  /**
   * Direction to sort the results in.
   */
  direction?: 'asc' | 'desc';
  /**
   * Pagination cursor returned by a previous list response.
   */
  cursor?: string;
}

export interface NamespaceAgentMemoryListResponse {
  /**
   * Always empty for a successful response.
   */
  errors: Array<NamespaceAgentMemoryListResponse.Error>;
  /**
   * Informational, non-error messages, if any.
   */
  messages: Array<NamespaceAgentMemoryListResponse.Message>;
  result: Array<NamespaceAgentMemoryListResponse.Result>;
  /**
   * Always true for a successful response.
   */
  success: true;
  result_info?: NamespaceAgentMemoryListResponse.ResultInfo;
}

export namespace NamespaceAgentMemoryListResponse {
  export interface Error {
    /**
     * Machine-readable status code.
     */
    code: number;
    /**
     * Human-readable message describing the error or status.
     */
    message: string;
    /**
     * Link to relevant documentation, when available.
     */
    documentation_url?: string;
    source?: Error.Source;
  }

  export namespace Error {
    export interface Source {
      /**
       * JSON pointer to the request field that caused the error.
       */
      pointer?: string;
    }
  }

  export interface Message {
    /**
     * Machine-readable status code.
     */
    code: number;
    /**
     * Human-readable message describing the error or status.
     */
    message: string;
    /**
     * Link to relevant documentation, when available.
     */
    documentation_url?: string;
    source?: Message.Source;
  }

  export namespace Message {
    export interface Source {
      /**
       * JSON pointer to the request field that caused the error.
       */
      pointer?: string;
    }
  }

  export interface Result {
    /**
     * Time the namespace was created.
     * @format date-time
     */
    created_at: string;
    /**
     * Unique identifier of the namespace.
     */
    id: string;
    /**
     * Namespace name.
     */
    name: string;
    /**
     * Time the namespace was last updated.
     * @format date-time
     */
    updated_at: string;
  }

  export interface ResultInfo {
    /**
     * Number of results returned in this page.
     */
    count?: number;
    /**
     * Opaque cursor for the next page; omitted on the last page.
     */
    cursor?: string;
    /**
     * Page size used for this query.
     */
    per_page?: number;
  }
}

export interface NamespaceAgentMemoryCreateParams {
  /**
   * Namespace name.
   * @minLength 1
   * @maxLength 32
   * @pattern ^[a-z0-9]([a-z0-9-]*[a-z0-9])?$
   */
  name: string;
}

export interface NamespaceAgentMemoryCreateResponse {
  /**
   * Always empty for a successful response.
   */
  errors: Array<NamespaceAgentMemoryCreateResponse.Error>;
  /**
   * Informational, non-error messages, if any.
   */
  messages: Array<NamespaceAgentMemoryCreateResponse.Message>;
  result: NamespaceAgentMemoryCreateResponse.Result;
  /**
   * Always true for a successful response.
   */
  success: true;
}

export namespace NamespaceAgentMemoryCreateResponse {
  export interface Error {
    /**
     * Machine-readable status code.
     */
    code: number;
    /**
     * Human-readable message describing the error or status.
     */
    message: string;
    /**
     * Link to relevant documentation, when available.
     */
    documentation_url?: string;
    source?: Error.Source;
  }

  export namespace Error {
    export interface Source {
      /**
       * JSON pointer to the request field that caused the error.
       */
      pointer?: string;
    }
  }

  export interface Message {
    /**
     * Machine-readable status code.
     */
    code: number;
    /**
     * Human-readable message describing the error or status.
     */
    message: string;
    /**
     * Link to relevant documentation, when available.
     */
    documentation_url?: string;
    source?: Message.Source;
  }

  export namespace Message {
    export interface Source {
      /**
       * JSON pointer to the request field that caused the error.
       */
      pointer?: string;
    }
  }

  export interface Result {
    /**
     * Time the namespace was created.
     * @format date-time
     */
    created_at: string;
    /**
     * Unique identifier of the namespace.
     */
    id: string;
    /**
     * Namespace name.
     */
    name: string;
    /**
     * Time the namespace was last updated.
     * @format date-time
     */
    updated_at: string;
  }
}

export interface NamespaceAgentMemoryDeleteParams {
  /**
   * Cloudflare Account ID.
   * @minLength 1
   * @pattern ^\d+$
   */
  account_id: string;
}

export interface NamespaceAgentMemoryDeleteResponse {
  /**
   * Always empty for a successful response.
   */
  errors: Array<NamespaceAgentMemoryDeleteResponse.Error>;
  /**
   * Informational, non-error messages, if any.
   */
  messages: Array<NamespaceAgentMemoryDeleteResponse.Message>;
  result: Record<string, unknown> | null;
  /**
   * Always true for a successful response.
   */
  success: true;
}

export namespace NamespaceAgentMemoryDeleteResponse {
  export interface Error {
    /**
     * Machine-readable status code.
     */
    code: number;
    /**
     * Human-readable message describing the error or status.
     */
    message: string;
    /**
     * Link to relevant documentation, when available.
     */
    documentation_url?: string;
    source?: Error.Source;
  }

  export namespace Error {
    export interface Source {
      /**
       * JSON pointer to the request field that caused the error.
       */
      pointer?: string;
    }
  }

  export interface Message {
    /**
     * Machine-readable status code.
     */
    code: number;
    /**
     * Human-readable message describing the error or status.
     */
    message: string;
    /**
     * Link to relevant documentation, when available.
     */
    documentation_url?: string;
    source?: Message.Source;
  }

  export namespace Message {
    export interface Source {
      /**
       * JSON pointer to the request field that caused the error.
       */
      pointer?: string;
    }
  }
}

export interface NamespaceAgentMemoryGetParams {
  /**
   * Cloudflare Account ID.
   * @minLength 1
   * @pattern ^\d+$
   */
  account_id: string;
}

export interface NamespaceAgentMemoryGetResponse {
  /**
   * Always empty for a successful response.
   */
  errors: Array<NamespaceAgentMemoryGetResponse.Error>;
  /**
   * Informational, non-error messages, if any.
   */
  messages: Array<NamespaceAgentMemoryGetResponse.Message>;
  result: NamespaceAgentMemoryGetResponse.Result;
  /**
   * Always true for a successful response.
   */
  success: true;
}

export namespace NamespaceAgentMemoryGetResponse {
  export interface Error {
    /**
     * Machine-readable status code.
     */
    code: number;
    /**
     * Human-readable message describing the error or status.
     */
    message: string;
    /**
     * Link to relevant documentation, when available.
     */
    documentation_url?: string;
    source?: Error.Source;
  }

  export namespace Error {
    export interface Source {
      /**
       * JSON pointer to the request field that caused the error.
       */
      pointer?: string;
    }
  }

  export interface Message {
    /**
     * Machine-readable status code.
     */
    code: number;
    /**
     * Human-readable message describing the error or status.
     */
    message: string;
    /**
     * Link to relevant documentation, when available.
     */
    documentation_url?: string;
    source?: Message.Source;
  }

  export namespace Message {
    export interface Source {
      /**
       * JSON pointer to the request field that caused the error.
       */
      pointer?: string;
    }
  }

  export interface Result {
    /**
     * Time the namespace was created.
     * @format date-time
     */
    created_at: string;
    /**
     * Unique identifier of the namespace.
     */
    id: string;
    /**
     * Namespace name.
     */
    name: string;
    /**
     * Time the namespace was last updated.
     * @format date-time
     */
    updated_at: string;
  }
}
export declare namespace Namespaces {
  export {
    type NamespaceAgentMemoryListResponse as NamespaceAgentMemoryListResponse,
    type NamespaceAgentMemoryCreateResponse as NamespaceAgentMemoryCreateResponse,
    type NamespaceAgentMemoryDeleteResponse as NamespaceAgentMemoryDeleteResponse,
    type NamespaceAgentMemoryGetResponse as NamespaceAgentMemoryGetResponse,
    type NamespaceAgentMemoryListParams as NamespaceAgentMemoryListParams,
    type NamespaceAgentMemoryCreateParams as NamespaceAgentMemoryCreateParams,
    type NamespaceAgentMemoryDeleteParams as NamespaceAgentMemoryDeleteParams,
    type NamespaceAgentMemoryGetParams as NamespaceAgentMemoryGetParams,
  };
}
