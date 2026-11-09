// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from '../resource';
import { APIPromise } from '../api-promise';
import type { RequestOptions } from '../internal/request-options';
import { path as __scalarPath } from '../internal/utils/path';

export class Memory extends APIResource {
  /**
   * Lists the profiles of a namespace, ordered by name. A profile appears once it has been used.
   *
   * @param {string} namespaceName - Namespace name.
   * @param {MemoryAgentProfileListParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<MemoryAgentProfileListResponse>} A page of profiles.
   *
   * @example
   * ```ts
   * const memory = await client.memory.agentProfileList('support-agent', {
   *   account_id: 'accountId',
   * });
   * ```
   */
  agentProfileList(
    namespaceName: string,
    params: MemoryAgentProfileListParams,
    options?: RequestOptions,
  ): APIPromise<MemoryAgentProfileListResponse> {
    const { account_id, ...query } = params;
    return this._client.get(
      __scalarPath`/accounts/${account_id}/agent-memory/namespaces/${namespaceName}/profiles`,
      { query, ...options },
    );
  }

  /**
   * Marks a profile for deletion.
   *
   * @param {string} profileName - Profile name.
   * @param {MemoryAgentProfileDeleteParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<MemoryAgentProfileDeleteResponse>} Profile deleted.
   *
   * @example
   * ```ts
   * const memory = await client.memory.agentProfileDelete('my-profile', {
   *   account_id: 'accountId',
   *   namespace_name: 'support-agent',
   * });
   * ```
   */
  agentProfileDelete(
    profileName: string,
    params: MemoryAgentProfileDeleteParams,
    options?: RequestOptions,
  ): APIPromise<MemoryAgentProfileDeleteResponse> {
    const { account_id, namespace_name } = params;
    return this._client.delete(
      __scalarPath`/accounts/${account_id}/agent-memory/namespaces/${namespace_name}/profiles/${profileName}`,
      options,
    );
  }

  /**
   * Processes a conversation and extracts structured memories from it. Agent Memory identifies facts, events, instructions, and tasks automatically.
   *
   * @param {string} profileName - Profile name.
   * @param {MemoryAgentIngestParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<MemoryAgentIngestResponse>} Conversation ingested.
   *
   * @example
   * ```ts
   * const memory = await client.memory.agentIngest('my-profile', {
   *   account_id: 'accountId',
   *   namespace_name: 'support-agent',
   *   messages: [
   *     {
   *       content: 'I really prefer dark mode in the dashboard.',
   *       role: 'user',
   *     },
   *   ],
   * });
   * ```
   */
  agentIngest(
    profileName: string,
    params: MemoryAgentIngestParams,
    options?: RequestOptions,
  ): APIPromise<MemoryAgentIngestResponse> {
    const { account_id, namespace_name, ...body } = params;
    return this._client.post(
      __scalarPath`/accounts/${account_id}/agent-memory/namespaces/${namespace_name}/profiles/${profileName}/ingest`,
      { body, ...options },
    );
  }

  /**
   * List memories stored in a profile.
   *
   * @param {string} profileName - Profile name.
   * @param {MemoryAgentListParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<MemoryAgentListResponse>} A page of memory metadata.
   *
   * @example
   * ```ts
   * const memory = await client.memory.agentList('my-profile', {
   *   account_id: 'accountId',
   *   namespace_name: 'support-agent',
   * });
   * ```
   */
  agentList(
    profileName: string,
    params: MemoryAgentListParams,
    options?: RequestOptions,
  ): APIPromise<MemoryAgentListResponse> {
    const { account_id, namespace_name, ...query } = params;
    return this._client.get(
      __scalarPath`/accounts/${account_id}/agent-memory/namespaces/${namespace_name}/profiles/${profileName}/memories`,
      { query, ...options },
    );
  }

  /**
   * Deletes a memory by ID. Removes the memory and any source messages linked to it. Returns the deleted memory.
   *
   * @param {string} memoryID - Memory Identifier.
   * @param {MemoryAgentDeleteParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<MemoryAgentDeleteResponse>} The deleted memory.
   *
   * @example
   * ```ts
   * const memory = await client.memory.agentDelete('01JSGCEXAMP1E0000000000000', {
   *   account_id: 'accountId',
   *   namespace_name: 'support-agent',
   *   profile_name: 'my-profile',
   * });
   * ```
   */
  agentDelete(
    memoryID: string,
    params: MemoryAgentDeleteParams,
    options?: RequestOptions,
  ): APIPromise<MemoryAgentDeleteResponse> {
    const { account_id, namespace_name, profile_name } = params;
    return this._client.delete(
      __scalarPath`/accounts/${account_id}/agent-memory/namespaces/${namespace_name}/profiles/${profile_name}/memories/${memoryID}`,
      options,
    );
  }

  /**
   * Retrieves a memory by ID.
   *
   * @param {string} memoryID - Memory Identifier.
   * @param {MemoryAgentGetParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<MemoryAgentGetResponse>} The requested memory.
   *
   * @example
   * ```ts
   * const memory = await client.memory.agentGet('01JSGCEXAMP1E0000000000000', {
   *   account_id: 'accountId',
   *   namespace_name: 'support-agent',
   *   profile_name: 'my-profile',
   * });
   * ```
   */
  agentGet(
    memoryID: string,
    params: MemoryAgentGetParams,
    options?: RequestOptions,
  ): APIPromise<MemoryAgentGetResponse> {
    const { account_id, namespace_name, profile_name } = params;
    return this._client.get(
      __scalarPath`/accounts/${account_id}/agent-memory/namespaces/${namespace_name}/profiles/${profile_name}/memories/${memoryID}`,
      options,
    );
  }

  /**
   * Retrieves memories relevant to the query and returns a synthesized answer.
   *
   * @param {string} profileName - Profile name.
   * @param {MemoryAgentRecallParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<MemoryAgentRecallResponse>} Recall result.
   *
   * @example
   * ```ts
   * const memory = await client.memory.agentRecall('my-profile', {
   *   account_id: 'accountId',
   *   namespace_name: 'support-agent',
   *   query: 'What are my UI preferences?',
   * });
   * ```
   */
  agentRecall(
    profileName: string,
    params: MemoryAgentRecallParams,
    options?: RequestOptions,
  ): APIPromise<MemoryAgentRecallResponse> {
    const { account_id, namespace_name, ...body } = params;
    return this._client.post(
      __scalarPath`/accounts/${account_id}/agent-memory/namespaces/${namespace_name}/profiles/${profileName}/recall`,
      { body, ...options },
    );
  }

  /**
   * Stores a single memory explicitly.
   *
   * @param {string} profileName - Profile name.
   * @param {MemoryAgentRememberParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<MemoryAgentRememberResponse>} Memory stored.
   *
   * @example
   * ```ts
   * const memory = await client.memory.agentRemember('my-profile', {
   *   account_id: 'accountId',
   *   namespace_name: 'support-agent',
   *   content: 'I prefer dark mode in the dashboard.',
   * });
   * ```
   */
  agentRemember(
    profileName: string,
    params: MemoryAgentRememberParams,
    options?: RequestOptions,
  ): APIPromise<MemoryAgentRememberResponse> {
    const { account_id, namespace_name, ...body } = params;
    return this._client.post(
      __scalarPath`/accounts/${account_id}/agent-memory/namespaces/${namespace_name}/profiles/${profileName}/remember`,
      { body, ...options },
    );
  }

  /**
   * Marks all memories and messages in a profile that are tagged with the given session ID for deletion.
   *
   * @param {string} sessionID - Session identifier.
   * @param {MemoryAgentSessionDeleteParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<MemoryAgentSessionDeleteResponse>} Session deleted.
   *
   * @example
   * ```ts
   * const memory = await client.memory.agentSessionDelete('chat-session-44', {
   *   account_id: 'accountId',
   *   namespace_name: 'support-agent',
   *   profile_name: 'my-profile',
   * });
   * ```
   */
  agentSessionDelete(
    sessionID: string,
    params: MemoryAgentSessionDeleteParams,
    options?: RequestOptions,
  ): APIPromise<MemoryAgentSessionDeleteResponse> {
    const { account_id, namespace_name, profile_name } = params;
    return this._client.delete(
      __scalarPath`/accounts/${account_id}/agent-memory/namespaces/${namespace_name}/profiles/${profile_name}/sessions/${sessionID}`,
      options,
    );
  }

  /**
   * Generates a paste-ready prompt block summarizing everything stored in a memory profile.
   *
   * @param {string} profileName - Profile name.
   * @param {MemoryAgentSummaryParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<MemoryAgentSummaryResponse>} Profile summary.
   *
   * @example
   * ```ts
   * const memory = await client.memory.agentSummary('my-profile', {
   *   account_id: 'accountId',
   *   namespace_name: 'support-agent',
   * });
   * ```
   */
  agentSummary(
    profileName: string,
    params: MemoryAgentSummaryParams,
    options?: RequestOptions,
  ): APIPromise<MemoryAgentSummaryResponse> {
    const { account_id, namespace_name, ...body } = params;
    return this._client.post(
      __scalarPath`/accounts/${account_id}/agent-memory/namespaces/${namespace_name}/profiles/${profileName}/summary`,
      { body, ...options },
    );
  }
}

export interface MemoryAgentProfileListParams {
  /**
   * Path param: Cloudflare Account ID.
   * @minLength 1
   * @pattern ^\d+$
   */
  account_id: string;
  /**
   * Query param: Number of results per page.
   * @minimum 1
   * @maximum 500
   */
  per_page?: number;
  /**
   * Query param: Opaque continuation cursor returned by a previous list response.
   * @minLength 1
   * @maxLength 256
   * @pattern ^[A-Za-z0-9_-]+$
   */
  cursor?: string;
}

export interface MemoryAgentProfileListResponse {
  /**
   * Always empty for a successful response.
   */
  errors: Array<MemoryAgentProfileListResponse.Error>;
  /**
   * Informational, non-error messages, if any.
   */
  messages: Array<MemoryAgentProfileListResponse.Message>;
  result: Array<MemoryAgentProfileListResponse.Result>;
  /**
   * Always true for a successful response.
   */
  success: true;
  result_info?: MemoryAgentProfileListResponse.ResultInfo;
}

export namespace MemoryAgentProfileListResponse {
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
     * Time the profile was first recorded in the namespace index.
     * @format date-time
     */
    createdAt: string;
    /**
     * Profile name.
     */
    name: string;
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

export interface MemoryAgentProfileDeleteParams {
  /**
   * Cloudflare Account ID.
   * @minLength 1
   * @pattern ^\d+$
   */
  account_id: string;
  /**
   * Namespace name.
   * @minLength 1
   * @maxLength 32
   * @pattern ^[a-z0-9]([a-z0-9-]*[a-z0-9])?$
   */
  namespace_name: string;
}

export interface MemoryAgentProfileDeleteResponse {
  /**
   * Always empty for a successful response.
   */
  errors: Array<MemoryAgentProfileDeleteResponse.Error>;
  /**
   * Informational, non-error messages, if any.
   */
  messages: Array<MemoryAgentProfileDeleteResponse.Message>;
  result: Record<string, unknown> | null;
  /**
   * Always true for a successful response.
   */
  success: true;
}

export namespace MemoryAgentProfileDeleteResponse {
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

export interface MemoryAgentIngestParams {
  /**
   * Path param: Cloudflare Account ID.
   * @minLength 1
   * @pattern ^\d+$
   */
  account_id: string;
  /**
   * Path param: Namespace name.
   * @minLength 1
   * @maxLength 32
   * @pattern ^[a-z0-9]([a-z0-9-]*[a-z0-9])?$
   */
  namespace_name: string;
  /**
   * Body param: Conversation messages to extract memories from.
   * @minItems 1
   */
  messages: Array<MemoryAgentIngestParams.Message>;
  /**
   * Body param: Session identifier.
   */
  sessionId?: string | null;
}

export namespace MemoryAgentIngestParams {
  export interface Message {
    /**
     * Text content of the message.
     * @minLength 1
     */
    content: string;
    /**
     * Author role of the message.
     */
    role: 'system' | 'user' | 'assistant';
    /**
     * Message timestamp.
     */
    timestamp?: string;
  }
}

export interface MemoryAgentIngestResponse {
  /**
   * Always empty for a successful response.
   */
  errors: Array<MemoryAgentIngestResponse.Error>;
  /**
   * Informational, non-error messages, if any.
   */
  messages: Array<MemoryAgentIngestResponse.Message>;
  result: Record<string, unknown> | null;
  /**
   * Always true for a successful response.
   */
  success: true;
}

export namespace MemoryAgentIngestResponse {
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

export interface MemoryAgentListParams {
  /**
   * Path param: Cloudflare Account ID.
   * @minLength 1
   * @pattern ^\d+$
   */
  account_id: string;
  /**
   * Path param: Namespace name.
   * @minLength 1
   * @maxLength 32
   * @pattern ^[a-z0-9]([a-z0-9-]*[a-z0-9])?$
   */
  namespace_name: string;
  /**
   * Query param: Number of results per page.
   * @minimum 1
   * @maximum 500
   */
  per_page?: number;
  /**
   * Query param: Continuation cursor for paginated results.
   * @minLength 26
   * @maxLength 26
   */
  cursor?: string;
  /**
   * Query param: Session identifier for filtering.
   * @minLength 1
   * @maxLength 64
   */
  session_id?: string;
  /**
   * Query param: Memory type for filtering.
   */
  type?: 'fact' | 'event' | 'instruction' | 'task';
}

export interface MemoryAgentListResponse {
  /**
   * Always empty for a successful response.
   */
  errors: Array<MemoryAgentListResponse.Error>;
  /**
   * Informational, non-error messages, if any.
   */
  messages: Array<MemoryAgentListResponse.Message>;
  result: Array<MemoryAgentListResponse.Result>;
  /**
   * Always true for a successful response.
   */
  success: true;
  result_info?: MemoryAgentListResponse.ResultInfo;
}

export namespace MemoryAgentListResponse {
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
     * Time the memory was created.
     * @format date-time
     */
    createdAt: string;
    /**
     * Unique identifier of the memory.
     */
    id: string;
    /**
     * Identifier of the session this memory is associated with.
     */
    sessionId: string | null;
    /**
     * Short, human-readable summary of the memory.
     */
    summary: string;
    /**
     * Classification of a memory: 'fact', 'event', 'instruction', or 'task'.
     */
    type: 'fact' | 'event' | 'instruction' | 'task';
    /**
     * Time the memory was last updated.
     * @format date-time
     */
    updatedAt: string;
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

export interface MemoryAgentDeleteParams {
  /**
   * Cloudflare Account ID.
   * @minLength 1
   * @pattern ^\d+$
   */
  account_id: string;
  /**
   * Namespace name.
   * @minLength 1
   * @maxLength 32
   * @pattern ^[a-z0-9]([a-z0-9-]*[a-z0-9])?$
   */
  namespace_name: string;
  /**
   * Profile name.
   * @minLength 1
   * @maxLength 100
   * @pattern ^[a-z0-9]([a-z0-9-]*[a-z0-9])?$
   */
  profile_name: string;
}

export interface MemoryAgentDeleteResponse {
  /**
   * Always empty for a successful response.
   */
  errors: Array<MemoryAgentDeleteResponse.Error>;
  /**
   * Informational, non-error messages, if any.
   */
  messages: Array<MemoryAgentDeleteResponse.Message>;
  result: MemoryAgentDeleteResponse.Result;
  /**
   * Always true for a successful response.
   */
  success: true;
}

export namespace MemoryAgentDeleteResponse {
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
     * Full memory content extracted from the conversation.
     */
    content: string;
    /**
     * Time the memory was created.
     * @format date-time
     */
    createdAt: string;
    /**
     * Unique identifier of the memory.
     */
    id: string;
    /**
     * Identifier of the session this memory is associated with.
     */
    sessionId: string | null;
    /**
     * Short, human-readable summary of the memory.
     */
    summary: string;
    /**
     * Classification of a memory: 'fact', 'event', 'instruction', or 'task'.
     */
    type: 'fact' | 'event' | 'instruction' | 'task';
    /**
     * Time the memory was last updated.
     * @format date-time
     */
    updatedAt: string;
  }
}

export interface MemoryAgentGetParams {
  /**
   * Cloudflare Account ID.
   * @minLength 1
   * @pattern ^\d+$
   */
  account_id: string;
  /**
   * Namespace name.
   * @minLength 1
   * @maxLength 32
   * @pattern ^[a-z0-9]([a-z0-9-]*[a-z0-9])?$
   */
  namespace_name: string;
  /**
   * Profile name.
   * @minLength 1
   * @maxLength 100
   * @pattern ^[a-z0-9]([a-z0-9-]*[a-z0-9])?$
   */
  profile_name: string;
}

export interface MemoryAgentGetResponse {
  /**
   * Always empty for a successful response.
   */
  errors: Array<MemoryAgentGetResponse.Error>;
  /**
   * Informational, non-error messages, if any.
   */
  messages: Array<MemoryAgentGetResponse.Message>;
  result: MemoryAgentGetResponse.Result;
  /**
   * Always true for a successful response.
   */
  success: true;
}

export namespace MemoryAgentGetResponse {
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
     * Full memory content extracted from the conversation.
     */
    content: string;
    /**
     * Time the memory was created.
     * @format date-time
     */
    createdAt: string;
    /**
     * Unique identifier of the memory.
     */
    id: string;
    /**
     * Identifier of the session this memory is associated with.
     */
    sessionId: string | null;
    /**
     * Short, human-readable summary of the memory.
     */
    summary: string;
    /**
     * Classification of a memory: 'fact', 'event', 'instruction', or 'task'.
     */
    type: 'fact' | 'event' | 'instruction' | 'task';
    /**
     * Time the memory was last updated.
     * @format date-time
     */
    updatedAt: string;
  }
}

export interface MemoryAgentRecallParams {
  /**
   * Path param: Cloudflare Account ID.
   * @minLength 1
   * @pattern ^\d+$
   */
  account_id: string;
  /**
   * Path param: Namespace name.
   * @minLength 1
   * @maxLength 32
   * @pattern ^[a-z0-9]([a-z0-9-]*[a-z0-9])?$
   */
  namespace_name: string;
  /**
   * Body param: Natural-language query to match against stored memories.
   * @minLength 1
   */
  query: string;
  /**
   * Body param: Temporal anchor for relative date references in the query.
   */
  referenceDate?: string;
  /**
   * Body param: Verbosity of the synthesized answer. Defaults to 'medium'.
   */
  responseLength?: 'short' | 'medium' | 'long';
  /**
   * Body param: Recall intensity / search depth. Defaults to 'low'.
   */
  thinkingLevel?: 'low' | 'medium' | 'high';
}

export interface MemoryAgentRecallResponse {
  /**
   * Always empty for a successful response.
   */
  errors: Array<MemoryAgentRecallResponse.Error>;
  /**
   * Informational, non-error messages, if any.
   */
  messages: Array<MemoryAgentRecallResponse.Message>;
  result: MemoryAgentRecallResponse.Result;
  /**
   * Always true for a successful response.
   */
  success: true;
}

export namespace MemoryAgentRecallResponse {
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
     * Matching memories ranked by relevance (most relevant first).
     */
    candidates: Array<Result.Candidate>;
    /**
     * Number of matching memories returned in `candidates`.
     */
    count: number;
    /**
     * LLM-synthesized answer to the query. Omitted when synthesis is skipped.
     */
    answer?: string;
  }

  export namespace Result {
    export interface Candidate {
      /**
       * Unique identifier of the memory.
       */
      id: string;
      /**
       * Relevance score for the query; higher is more relevant.
       */
      score: number;
      /**
       * Session the candidate memory is associated with, or null if not session-scoped.
       */
      sessionId: string | null;
      /**
       * Short summary of the candidate memory.
       */
      summary: string;
    }
  }
}

export interface MemoryAgentRememberParams {
  /**
   * Path param: Cloudflare Account ID.
   * @minLength 1
   * @pattern ^\d+$
   */
  account_id: string;
  /**
   * Path param: Namespace name.
   * @minLength 1
   * @maxLength 32
   * @pattern ^[a-z0-9]([a-z0-9-]*[a-z0-9])?$
   */
  namespace_name: string;
  /**
   * Body param: Raw memory content to store.
   * @minLength 1
   */
  content: string;
  /**
   * Body param: Session identifier.
   */
  sessionId?: string | null;
}

export interface MemoryAgentRememberResponse {
  /**
   * Always empty for a successful response.
   */
  errors: Array<MemoryAgentRememberResponse.Error>;
  /**
   * Informational, non-error messages, if any.
   */
  messages: Array<MemoryAgentRememberResponse.Message>;
  result: MemoryAgentRememberResponse.Result;
  /**
   * Always true for a successful response.
   */
  success: true;
}

export namespace MemoryAgentRememberResponse {
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
     * Full memory content extracted from the conversation.
     */
    content: string;
    /**
     * Time the memory was created.
     * @format date-time
     */
    createdAt: string;
    /**
     * Unique identifier of the memory.
     */
    id: string;
    /**
     * Identifier of the session this memory is associated with.
     */
    sessionId: string | null;
    /**
     * Short, human-readable summary of the memory.
     */
    summary: string;
    /**
     * Classification of a memory: 'fact', 'event', 'instruction', or 'task'.
     */
    type: 'fact' | 'event' | 'instruction' | 'task';
    /**
     * Time the memory was last updated.
     * @format date-time
     */
    updatedAt: string;
  }
}

export interface MemoryAgentSessionDeleteParams {
  /**
   * Cloudflare Account ID.
   * @minLength 1
   * @pattern ^\d+$
   */
  account_id: string;
  /**
   * Namespace name.
   * @minLength 1
   * @maxLength 32
   * @pattern ^[a-z0-9]([a-z0-9-]*[a-z0-9])?$
   */
  namespace_name: string;
  /**
   * Profile name.
   * @minLength 1
   * @maxLength 100
   * @pattern ^[a-z0-9]([a-z0-9-]*[a-z0-9])?$
   */
  profile_name: string;
}

export interface MemoryAgentSessionDeleteResponse {
  /**
   * Always empty for a successful response.
   */
  errors: Array<MemoryAgentSessionDeleteResponse.Error>;
  /**
   * Informational, non-error messages, if any.
   */
  messages: Array<MemoryAgentSessionDeleteResponse.Message>;
  result: Record<string, unknown> | null;
  /**
   * Always true for a successful response.
   */
  success: true;
}

export namespace MemoryAgentSessionDeleteResponse {
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

export interface MemoryAgentSummaryParams {
  /**
   * Path param: Cloudflare Account ID.
   * @minLength 1
   * @pattern ^\d+$
   */
  account_id: string;
  /**
   * Path param: Namespace name.
   * @minLength 1
   * @maxLength 32
   * @pattern ^[a-z0-9]([a-z0-9-]*[a-z0-9])?$
   */
  namespace_name: string;
  /**
   * Body param: Session identifier.
   */
  sessionId?: string | null;
}

export interface MemoryAgentSummaryResponse {
  /**
   * Always empty for a successful response.
   */
  errors: Array<MemoryAgentSummaryResponse.Error>;
  /**
   * Informational, non-error messages, if any.
   */
  messages: Array<MemoryAgentSummaryResponse.Message>;
  result: MemoryAgentSummaryResponse.Result;
  /**
   * Always true for a successful response.
   */
  success: true;
}

export namespace MemoryAgentSummaryResponse {
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
     * Paste-ready prompt block summarizing everything stored in the profile.
     */
    summary: string;
  }
}
export declare namespace Memory {
  export {
    type MemoryAgentProfileListResponse as MemoryAgentProfileListResponse,
    type MemoryAgentProfileDeleteResponse as MemoryAgentProfileDeleteResponse,
    type MemoryAgentIngestResponse as MemoryAgentIngestResponse,
    type MemoryAgentListResponse as MemoryAgentListResponse,
    type MemoryAgentDeleteResponse as MemoryAgentDeleteResponse,
    type MemoryAgentGetResponse as MemoryAgentGetResponse,
    type MemoryAgentRecallResponse as MemoryAgentRecallResponse,
    type MemoryAgentRememberResponse as MemoryAgentRememberResponse,
    type MemoryAgentSessionDeleteResponse as MemoryAgentSessionDeleteResponse,
    type MemoryAgentSummaryResponse as MemoryAgentSummaryResponse,
    type MemoryAgentProfileListParams as MemoryAgentProfileListParams,
    type MemoryAgentProfileDeleteParams as MemoryAgentProfileDeleteParams,
    type MemoryAgentIngestParams as MemoryAgentIngestParams,
    type MemoryAgentListParams as MemoryAgentListParams,
    type MemoryAgentDeleteParams as MemoryAgentDeleteParams,
    type MemoryAgentGetParams as MemoryAgentGetParams,
    type MemoryAgentRecallParams as MemoryAgentRecallParams,
    type MemoryAgentRememberParams as MemoryAgentRememberParams,
    type MemoryAgentSessionDeleteParams as MemoryAgentSessionDeleteParams,
    type MemoryAgentSummaryParams as MemoryAgentSummaryParams,
  };
}
