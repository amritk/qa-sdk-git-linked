// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from '../resource';
import { APIPromise } from '../api-promise';
import type { RequestOptions } from '../internal/request-options';
import { buildHeaders } from '../internal/headers';
import { path as __scalarPath } from '../internal/utils/path';

export class Artifacts extends APIResource {
  /**
   * Lists Artifacts namespaces for an account.
   *
   * @param {string} accountID - Cloudflare account ID.
   * @param {ArtifactNamespacesListParams} [query] - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<ArtifactNamespacesListResponse>} Namespaces.
   *
   * @example
   * ```ts
   * const artifact = await client.artifacts.namespacesList('accountId', {
   *   limit: 100,
   * });
   * ```
   */
  namespacesList(
    accountID: string,
    query: ArtifactNamespacesListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ArtifactNamespacesListResponse> {
    return this._client.get(__scalarPath`/accounts/${accountID}/artifacts/namespaces`, { query, ...options });
  }

  /**
   * Returns an Artifacts namespace summary.
   *
   * @param {string} namespace_ - Artifacts namespace name.
   * @param {ArtifactNamespacesGetParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<ArtifactNamespacesGetResponse>} Namespace.
   *
   * @example
   * ```ts
   * const artifact = await client.artifacts.namespacesGet('namespace', {
   *   account_id: 'accountId',
   * });
   * ```
   */
  namespacesGet(
    namespace_: string,
    params: ArtifactNamespacesGetParams,
    options?: RequestOptions,
  ): APIPromise<ArtifactNamespacesGetResponse> {
    const { account_id } = params;
    return this._client.get(
      __scalarPath`/accounts/${account_id}/artifacts/namespaces/${namespace_}`,
      options,
    );
  }

  /**
   * Lists repositories in a namespace.
   *
   * @param {string} namespace_ - Artifacts namespace name.
   * @param {ArtifactReposListParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<ArtifactReposListResponse>} Repositories.
   *
   * @example
   * ```ts
   * const artifact = await client.artifacts.reposList('namespace', {
   *   account_id: 'accountId',
   *   limit: 50,
   *   sort: 'created_at',
   *   direction: 'desc',
   * });
   * ```
   */
  reposList(
    namespace_: string,
    params: ArtifactReposListParams,
    options?: RequestOptions,
  ): APIPromise<ArtifactReposListResponse> {
    const { account_id, ...query } = params;
    return this._client.get(__scalarPath`/accounts/${account_id}/artifacts/namespaces/${namespace_}/repos`, {
      query,
      ...options,
    });
  }

  /**
   * Creates a Git-compatible Artifacts repository in a namespace.
   *
   * @param {string} namespace_ - Artifacts namespace name.
   * @param {ArtifactReposCreateParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<ArtifactReposCreateResponse>} Repository created.
   *
   * @example
   * ```ts
   * const artifact = await client.artifacts.reposCreate('namespace', {
   *   account_id: 'accountId',
   *   name: '',
   * });
   * ```
   */
  reposCreate(
    namespace_: string,
    params: ArtifactReposCreateParams,
    options?: RequestOptions,
  ): APIPromise<ArtifactReposCreateResponse> {
    const { account_id, ...body } = params;
    return this._client.post(__scalarPath`/accounts/${account_id}/artifacts/namespaces/${namespace_}/repos`, {
      body,
      ...options,
    });
  }

  /**
   * Deletes a repository and schedules cleanup of its backing data.
   *
   * @param {string} name - Repository name.
   * @param {ArtifactReposDeleteParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<ArtifactReposDeleteResponse>} Delete accepted.
   *
   * @example
   * ```ts
   * const artifact = await client.artifacts.reposDelete('name', {
   *   account_id: 'accountId',
   *   namespace: 'namespace',
   * });
   * ```
   */
  reposDelete(
    name: string,
    params: ArtifactReposDeleteParams,
    options?: RequestOptions,
  ): APIPromise<ArtifactReposDeleteResponse> {
    const { account_id, namespace } = params;
    return this._client.delete(
      __scalarPath`/accounts/${account_id}/artifacts/namespaces/${namespace}/repos/${name}`,
      options,
    );
  }

  /**
   * Returns repository metadata.
   *
   * @param {string} name - Repository name.
   * @param {ArtifactReposGetParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<ArtifactReposGetResponse>} Repository.
   *
   * @example
   * ```ts
   * const artifact = await client.artifacts.reposGet('name', {
   *   account_id: 'accountId',
   *   namespace: 'namespace',
   * });
   * ```
   */
  reposGet(
    name: string,
    params: ArtifactReposGetParams,
    options?: RequestOptions,
  ): APIPromise<ArtifactReposGetResponse> {
    const { account_id, namespace } = params;
    return this._client.get(
      __scalarPath`/accounts/${account_id}/artifacts/namespaces/${namespace}/repos/${name}`,
      options,
    );
  }

  /**
   * Returns raw bytes for an immutable Git blob object. Blob responses are cacheable forever by hash.
   *
   * @param {string} hash - 40-character lowercase hexadecimal Git object hash.
   * @param {ArtifactReposBlobGetParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<Response>} Blob bytes.
   *
   * @example
   * ```ts
   * const response = await client.artifacts.reposBlobGet('hash', {
   *   account_id: 'accountId',
   *   namespace: 'namespace',
   *   name: 'name',
   * });
   * ```
   */
  reposBlobGet(
    hash: string,
    params: ArtifactReposBlobGetParams,
    options?: RequestOptions,
  ): APIPromise<Response> {
    const { account_id, namespace, name } = params;
    return this._client.get(
      __scalarPath`/accounts/${account_id}/artifacts/namespaces/${namespace}/repos/${name}/blob/${hash}`,
      {
        ...options,
        headers: buildHeaders([{ Accept: 'application/octet-stream' }, options?.headers]),
        __binaryResponse: true,
      },
    );
  }

  /**
   * Returns decoded metadata for an immutable Git commit object. Commit responses are cacheable forever by hash.
   *
   * @param {string} hash - 40-character lowercase hexadecimal Git object hash.
   * @param {ArtifactReposCommitGetParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<ArtifactReposCommitGetResponse>} Commit metadata.
   *
   * @example
   * ```ts
   * const artifact = await client.artifacts.reposCommitGet('hash', {
   *   account_id: 'accountId',
   *   namespace: 'namespace',
   *   name: 'name',
   * });
   * ```
   */
  reposCommitGet(
    hash: string,
    params: ArtifactReposCommitGetParams,
    options?: RequestOptions,
  ): APIPromise<ArtifactReposCommitGetResponse> {
    const { account_id, namespace, name } = params;
    return this._client.get(
      __scalarPath`/accounts/${account_id}/artifacts/namespaces/${namespace}/repos/${name}/commit/${hash}`,
      options,
    );
  }

  /**
   * Returns raw bytes for a file resolved by ref and path.
   *
   * @param {string} name - Repository name.
   * @param {ArtifactReposFileGetParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<Response>} File bytes.
   *
   * @example
   * ```ts
   * const response = await client.artifacts.reposFileGet('name', {
   *   account_id: 'accountId',
   *   namespace: 'namespace',
   *   ref: 'ref',
   *   path: 'path',
   * });
   * ```
   */
  reposFileGet(
    name: string,
    params: ArtifactReposFileGetParams,
    options?: RequestOptions,
  ): APIPromise<Response> {
    const { account_id, namespace, ...query } = params;
    return this._client.get(
      __scalarPath`/accounts/${account_id}/artifacts/namespaces/${namespace}/repos/${name}/file`,
      {
        query,
        ...options,
        headers: buildHeaders([{ Accept: 'application/octet-stream' }, options?.headers]),
        __binaryResponse: true,
      },
    );
  }

  /**
   * Forks a source repository into a new repository.
   *
   * @param {string} name2 - Repository name.
   * @param {ArtifactReposForkParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<ArtifactReposForkResponse>} Repository forked.
   *
   * @example
   * ```ts
   * const artifact = await client.artifacts.reposFork('name', {
   *   account_id: 'accountId',
   *   namespace: 'namespace',
   *   name: '',
   * });
   * ```
   */
  reposFork(
    name2: string,
    params: ArtifactReposForkParams,
    options?: RequestOptions,
  ): APIPromise<ArtifactReposForkResponse> {
    const { account_id, namespace, ...body } = params;
    return this._client.post(
      __scalarPath`/accounts/${account_id}/artifacts/namespaces/${namespace}/repos/${name2}/fork`,
      { body, ...options },
    );
  }

  /**
   * Imports an HTTPS Git repository into an Artifacts repository.
   *
   * @param {string} name - Repository name.
   * @param {ArtifactReposImportParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<ArtifactReposImportResponse>} Repository import started.
   *
   * @example
   * ```ts
   * const artifact = await client.artifacts.reposImport('name', {
   *   account_id: 'accountId',
   *   namespace: 'namespace',
   *   url: 'https://example.com',
   * });
   * ```
   */
  reposImport(
    name: string,
    params: ArtifactReposImportParams,
    options?: RequestOptions,
  ): APIPromise<ArtifactReposImportResponse> {
    const { account_id, namespace, ...body } = params;
    return this._client.post(
      __scalarPath`/accounts/${account_id}/artifacts/namespaces/${namespace}/repos/${name}/import`,
      { body, ...options },
    );
  }

  /**
   * Returns commit metadata walking backwards from a ref, branch, tag, or HEAD.
   *
   * @param {string} name - Repository name.
   * @param {ArtifactReposLogGetParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<ArtifactReposLogGetResponse>} Commits.
   *
   * @example
   * ```ts
   * const artifact = await client.artifacts.reposLogGet('name', {
   *   account_id: 'accountId',
   *   namespace: 'namespace',
   * });
   * ```
   */
  reposLogGet(
    name: string,
    params: ArtifactReposLogGetParams,
    options?: RequestOptions,
  ): APIPromise<ArtifactReposLogGetResponse> {
    const { account_id, namespace, ...query } = params;
    return this._client.get(
      __scalarPath`/accounts/${account_id}/artifacts/namespaces/${namespace}/repos/${name}/log`,
      { query, ...options },
    );
  }

  /**
   * Returns file bytes resolved by ref and path, with a sniffed content type and browser-safe response headers.
   *
   * @param {string} path - File path. May contain slashes.
   * @param {ArtifactReposRawGetParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<ArtifactReposRawGetResponse>} File bytes with sniffed Content-Type and browser-safe response headers.
   *
   * @example
   * ```ts
   * const response = await client.artifacts.reposRawGet('path', {
   *   account_id: 'accountId',
   *   namespace: 'namespace',
   *   name: 'name',
   *   ref: 'ref',
   * });
   * ```
   */
  reposRawGet(
    path: string,
    params: ArtifactReposRawGetParams,
    options?: RequestOptions,
  ): APIPromise<ArtifactReposRawGetResponse> {
    const { account_id, namespace, name, ref } = params;
    return this._client.get(
      __scalarPath`/accounts/${account_id}/artifacts/namespaces/${namespace}/repos/${name}/raw/${ref}/${path}`,
      options,
    );
  }

  /**
   * Lists tokens for a repository.
   *
   * @param {string} name - Repository name.
   * @param {ArtifactRepoTokensListParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<ArtifactRepoTokensListResponse>} Tokens.
   *
   * @example
   * ```ts
   * const artifact = await client.artifacts.repoTokensList('name', {
   *   account_id: 'accountId',
   *   namespace: 'namespace',
   *   state: 'active',
   *   page: 1,
   *   per_page: 30,
   * });
   * ```
   */
  repoTokensList(
    name: string,
    params: ArtifactRepoTokensListParams,
    options?: RequestOptions,
  ): APIPromise<ArtifactRepoTokensListResponse> {
    const { account_id, namespace, ...query } = params;
    return this._client.get(
      __scalarPath`/accounts/${account_id}/artifacts/namespaces/${namespace}/repos/${name}/tokens`,
      { query, ...options },
    );
  }

  /**
   * Returns decoded entries for an immutable Git tree object. Tree responses are cacheable forever by hash.
   *
   * @param {string} hash - 40-character lowercase hexadecimal Git object hash.
   * @param {ArtifactReposTreeGetParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<ArtifactReposTreeGetResponse>} Tree entries.
   *
   * @example
   * ```ts
   * const artifact = await client.artifacts.reposTreeGet('hash', {
   *   account_id: 'accountId',
   *   namespace: 'namespace',
   *   name: 'name',
   * });
   * ```
   */
  reposTreeGet(
    hash: string,
    params: ArtifactReposTreeGetParams,
    options?: RequestOptions,
  ): APIPromise<ArtifactReposTreeGetResponse> {
    const { account_id, namespace, name } = params;
    return this._client.get(
      __scalarPath`/accounts/${account_id}/artifacts/namespaces/${namespace}/repos/${name}/tree/${hash}`,
      options,
    );
  }

  /**
   * Creates a scoped Git token for a repository.
   *
   * @param {string} namespace_ - Artifacts namespace name.
   * @param {ArtifactTokensCreateParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<ArtifactTokensCreateResponse>} Token created.
   *
   * @example
   * ```ts
   * const artifact = await client.artifacts.tokensCreate('namespace', {
   *   account_id: 'accountId',
   *   repo: '',
   * });
   * ```
   */
  tokensCreate(
    namespace_: string,
    params: ArtifactTokensCreateParams,
    options?: RequestOptions,
  ): APIPromise<ArtifactTokensCreateResponse> {
    const { account_id, ...body } = params;
    return this._client.post(
      __scalarPath`/accounts/${account_id}/artifacts/namespaces/${namespace_}/tokens`,
      { body, ...options },
    );
  }

  /**
   * Revokes an Artifacts repository token.
   *
   * @param {string} id - Token ID. Must match /^[0-9a-z]{16}$/.
   * @param {ArtifactTokensRevokeParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<ArtifactTokensRevokeResponse>} Token revoked.
   *
   * @example
   * ```ts
   * const artifact = await client.artifacts.tokensRevoke('id', {
   *   account_id: 'accountId',
   *   namespace: 'namespace',
   * });
   * ```
   */
  tokensRevoke(
    id: string,
    params: ArtifactTokensRevokeParams,
    options?: RequestOptions,
  ): APIPromise<ArtifactTokensRevokeResponse> {
    const { account_id, namespace } = params;
    return this._client.delete(
      __scalarPath`/accounts/${account_id}/artifacts/namespaces/${namespace}/tokens/${id}`,
      options,
    );
  }
}

export interface ArtifactNamespacesListParams {
  /**
   * @default 100
   * @minimum 1
   * @maximum 200
   */
  limit?: number;
  cursor?: string;
}

export interface ArtifactNamespacesListResponse {
  errors: Array<ArtifactNamespacesListResponse.Error>;
  messages: Array<ArtifactNamespacesListResponse.Message>;
  result: Array<ArtifactNamespacesListResponse.Result>;
  success: true;
  result_info?: ArtifactNamespacesListResponse.ResultInfo | ArtifactNamespacesListResponse.ResultInfo2;
}

export namespace ArtifactNamespacesListResponse {
  export interface Error {
    /**
     * @minimum -9007199254740991
     * @maximum 9007199254740991
     */
    code: number;
    message: string;
    /**
     * @format uri
     */
    documentation_url?: string;
    source?: Error.Source;
  }

  export namespace Error {
    export interface Source {
      pointer?: string;
    }
  }

  export interface Message {
    /**
     * @minimum -9007199254740991
     * @maximum 9007199254740991
     */
    code: number;
    message: string;
    /**
     * @format uri
     */
    documentation_url?: string;
    source?: Message.Source;
  }

  export namespace Message {
    export interface Source {
      pointer?: string;
    }
  }

  export interface Result {
    /**
     * @format date-time
     * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d:[0-5]\d(?:\.\d+)?(?:Z))$
     */
    created_at: string;
    jurisdiction: 'unrestricted' | 'us' | 'eu' | 'fedramp';
    namespace: string;
    /**
     * @minimum -9007199254740991
     * @maximum 9007199254740991
     */
    repo_count: number;
    /**
     * @format date-time
     * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d:[0-5]\d(?:\.\d+)?(?:Z))$
     */
    updated_at: string;
  }

  export interface ResultInfo {
    /**
     * @minimum -9007199254740991
     * @maximum 9007199254740991
     */
    count: number;
    cursor: string;
    /**
     * @minimum -9007199254740991
     * @maximum 9007199254740991
     */
    per_page: number;
  }

  export interface ResultInfo2 {
    /**
     * @minimum -9007199254740991
     * @maximum 9007199254740991
     */
    count: number;
    /**
     * @minimum -9007199254740991
     * @maximum 9007199254740991
     */
    page: number;
    /**
     * @minimum -9007199254740991
     * @maximum 9007199254740991
     */
    per_page: number;
    /**
     * @minimum -9007199254740991
     * @maximum 9007199254740991
     */
    total_count: number;
    /**
     * @minimum -9007199254740991
     * @maximum 9007199254740991
     */
    total_pages: number;
  }
}

export interface ArtifactNamespacesGetParams {
  /**
   * Cloudflare account ID.
   */
  account_id: string;
}

export interface ArtifactNamespacesGetResponse {
  errors: Array<ArtifactNamespacesGetResponse.Error>;
  messages: Array<ArtifactNamespacesGetResponse.Message>;
  result: ArtifactNamespacesGetResponse.Result;
  success: true;
  result_info?: ArtifactNamespacesGetResponse.ResultInfo | ArtifactNamespacesGetResponse.ResultInfo2;
}

export namespace ArtifactNamespacesGetResponse {
  export interface Error {
    /**
     * @minimum -9007199254740991
     * @maximum 9007199254740991
     */
    code: number;
    message: string;
    /**
     * @format uri
     */
    documentation_url?: string;
    source?: Error.Source;
  }

  export namespace Error {
    export interface Source {
      pointer?: string;
    }
  }

  export interface Message {
    /**
     * @minimum -9007199254740991
     * @maximum 9007199254740991
     */
    code: number;
    message: string;
    /**
     * @format uri
     */
    documentation_url?: string;
    source?: Message.Source;
  }

  export namespace Message {
    export interface Source {
      pointer?: string;
    }
  }

  export interface Result {
    /**
     * @format date-time
     * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d:[0-5]\d(?:\.\d+)?(?:Z))$
     */
    created_at: string;
    jurisdiction: 'unrestricted' | 'us' | 'eu' | 'fedramp';
    namespace: string;
    /**
     * @minimum -9007199254740991
     * @maximum 9007199254740991
     */
    repo_count: number;
    /**
     * @format date-time
     * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d:[0-5]\d(?:\.\d+)?(?:Z))$
     */
    updated_at: string;
  }

  export interface ResultInfo {
    /**
     * @minimum -9007199254740991
     * @maximum 9007199254740991
     */
    count: number;
    cursor: string;
    /**
     * @minimum -9007199254740991
     * @maximum 9007199254740991
     */
    per_page: number;
  }

  export interface ResultInfo2 {
    /**
     * @minimum -9007199254740991
     * @maximum 9007199254740991
     */
    count: number;
    /**
     * @minimum -9007199254740991
     * @maximum 9007199254740991
     */
    page: number;
    /**
     * @minimum -9007199254740991
     * @maximum 9007199254740991
     */
    per_page: number;
    /**
     * @minimum -9007199254740991
     * @maximum 9007199254740991
     */
    total_count: number;
    /**
     * @minimum -9007199254740991
     * @maximum 9007199254740991
     */
    total_pages: number;
  }
}

export interface ArtifactReposListParams {
  /**
   * Path param: Cloudflare account ID.
   */
  account_id: string;
  /**
   * Query param
   * @default 50
   * @minimum 1
   * @maximum 200
   */
  limit?: number;
  /**
   * Query param
   */
  cursor?: string;
  /**
   * Query param
   */
  search?: string;
  /**
   * Query param
   * @default created_at
   */
  sort?: 'created_at' | 'updated_at' | 'last_push_at' | 'name';
  /**
   * Query param
   * @default desc
   */
  direction?: 'asc' | 'desc';
}

export interface ArtifactReposListResponse {
  errors: Array<ArtifactReposListResponse.Error>;
  messages: Array<ArtifactReposListResponse.Message>;
  result: Array<ArtifactReposListResponse.Result>;
  success: true;
  result_info?: ArtifactReposListResponse.ResultInfo | ArtifactReposListResponse.ResultInfo2;
}

export namespace ArtifactReposListResponse {
  export interface Error {
    /**
     * @minimum -9007199254740991
     * @maximum 9007199254740991
     */
    code: number;
    message: string;
    /**
     * @format uri
     */
    documentation_url?: string;
    source?: Error.Source;
  }

  export namespace Error {
    export interface Source {
      pointer?: string;
    }
  }

  export interface Message {
    /**
     * @minimum -9007199254740991
     * @maximum 9007199254740991
     */
    code: number;
    message: string;
    /**
     * @format uri
     */
    documentation_url?: string;
    source?: Message.Source;
  }

  export namespace Message {
    export interface Source {
      pointer?: string;
    }
  }

  export interface Result {
    /**
     * @format date-time
     * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d:[0-5]\d(?:\.\d+)?(?:Z))$
     */
    created_at: string;
    /**
     * Default branch name. Must not contain '..' and must not end with '/' or '.'.
     */
    default_branch: string;
    description: string | null;
    id: string;
    /**
     * @format date-time
     * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d:[0-5]\d(?:\.\d+)?(?:Z))$
     */
    last_push_at: string | null;
    name: string;
    read_only: boolean;
    remote: string;
    source: string | null;
    /**
     * @format date-time
     * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d:[0-5]\d(?:\.\d+)?(?:Z))$
     */
    updated_at: string;
  }

  export interface ResultInfo {
    /**
     * @minimum -9007199254740991
     * @maximum 9007199254740991
     */
    count: number;
    cursor: string;
    /**
     * @minimum -9007199254740991
     * @maximum 9007199254740991
     */
    per_page: number;
  }

  export interface ResultInfo2 {
    /**
     * @minimum -9007199254740991
     * @maximum 9007199254740991
     */
    count: number;
    /**
     * @minimum -9007199254740991
     * @maximum 9007199254740991
     */
    page: number;
    /**
     * @minimum -9007199254740991
     * @maximum 9007199254740991
     */
    per_page: number;
    /**
     * @minimum -9007199254740991
     * @maximum 9007199254740991
     */
    total_count: number;
    /**
     * @minimum -9007199254740991
     * @maximum 9007199254740991
     */
    total_pages: number;
  }
}

export interface ArtifactReposCreateParams {
  /**
   * Path param: Cloudflare account ID.
   */
  account_id: string;
  /**
   * Body param: Git branch name. Must match /^[a-zA-Z0-9][a-zA-Z0-9._/-]*$/, must not contain '..', and must not end with '/' or '.'.
   * @minLength 1
   * @maxLength 256
   * @pattern ^[a-zA-Z0-9][a-zA-Z0-9._/-]*$
   */
  default_branch?: string;
  /**
   * Body param
   * @maxLength 1024
   */
  description?: string;
  /**
   * Body param
   * @pattern ^[a-zA-Z0-9][a-zA-Z0-9._-]*$
   */
  name: string;
  /**
   * Body param
   */
  read_only?: boolean;
}

export interface ArtifactReposCreateResponse {
  errors: Array<ArtifactReposCreateResponse.Error>;
  messages: Array<ArtifactReposCreateResponse.Message>;
  result: ArtifactReposCreateResponse.Result;
  success: true;
  result_info?: ArtifactReposCreateResponse.ResultInfo | ArtifactReposCreateResponse.ResultInfo2;
}

export namespace ArtifactReposCreateResponse {
  export interface Error {
    /**
     * @minimum -9007199254740991
     * @maximum 9007199254740991
     */
    code: number;
    message: string;
    /**
     * @format uri
     */
    documentation_url?: string;
    source?: Error.Source;
  }

  export namespace Error {
    export interface Source {
      pointer?: string;
    }
  }

  export interface Message {
    /**
     * @minimum -9007199254740991
     * @maximum 9007199254740991
     */
    code: number;
    message: string;
    /**
     * @format uri
     */
    documentation_url?: string;
    source?: Message.Source;
  }

  export namespace Message {
    export interface Source {
      pointer?: string;
    }
  }

  export interface Result {
    default_branch: string;
    description: string | null;
    id: string;
    name: string;
    remote: string;
    token: string;
  }

  export interface ResultInfo {
    /**
     * @minimum -9007199254740991
     * @maximum 9007199254740991
     */
    count: number;
    cursor: string;
    /**
     * @minimum -9007199254740991
     * @maximum 9007199254740991
     */
    per_page: number;
  }

  export interface ResultInfo2 {
    /**
     * @minimum -9007199254740991
     * @maximum 9007199254740991
     */
    count: number;
    /**
     * @minimum -9007199254740991
     * @maximum 9007199254740991
     */
    page: number;
    /**
     * @minimum -9007199254740991
     * @maximum 9007199254740991
     */
    per_page: number;
    /**
     * @minimum -9007199254740991
     * @maximum 9007199254740991
     */
    total_count: number;
    /**
     * @minimum -9007199254740991
     * @maximum 9007199254740991
     */
    total_pages: number;
  }
}

export interface ArtifactReposDeleteParams {
  /**
   * Cloudflare account ID.
   */
  account_id: string;
  /**
   * Artifacts namespace name.
   * @pattern ^[a-zA-Z0-9][a-zA-Z0-9._-]*$
   */
  namespace: string;
}

export interface ArtifactReposDeleteResponse {
  errors: Array<ArtifactReposDeleteResponse.Error>;
  messages: Array<ArtifactReposDeleteResponse.Message>;
  result: ArtifactReposDeleteResponse.Result;
  success: true;
  result_info?: ArtifactReposDeleteResponse.ResultInfo | ArtifactReposDeleteResponse.ResultInfo2;
}

export namespace ArtifactReposDeleteResponse {
  export interface Error {
    /**
     * @minimum -9007199254740991
     * @maximum 9007199254740991
     */
    code: number;
    message: string;
    /**
     * @format uri
     */
    documentation_url?: string;
    source?: Error.Source;
  }

  export namespace Error {
    export interface Source {
      pointer?: string;
    }
  }

  export interface Message {
    /**
     * @minimum -9007199254740991
     * @maximum 9007199254740991
     */
    code: number;
    message: string;
    /**
     * @format uri
     */
    documentation_url?: string;
    source?: Message.Source;
  }

  export namespace Message {
    export interface Source {
      pointer?: string;
    }
  }

  export interface Result {
    id: string;
  }

  export interface ResultInfo {
    /**
     * @minimum -9007199254740991
     * @maximum 9007199254740991
     */
    count: number;
    cursor: string;
    /**
     * @minimum -9007199254740991
     * @maximum 9007199254740991
     */
    per_page: number;
  }

  export interface ResultInfo2 {
    /**
     * @minimum -9007199254740991
     * @maximum 9007199254740991
     */
    count: number;
    /**
     * @minimum -9007199254740991
     * @maximum 9007199254740991
     */
    page: number;
    /**
     * @minimum -9007199254740991
     * @maximum 9007199254740991
     */
    per_page: number;
    /**
     * @minimum -9007199254740991
     * @maximum 9007199254740991
     */
    total_count: number;
    /**
     * @minimum -9007199254740991
     * @maximum 9007199254740991
     */
    total_pages: number;
  }
}

export interface ArtifactReposGetParams {
  /**
   * Cloudflare account ID.
   */
  account_id: string;
  /**
   * Artifacts namespace name.
   * @pattern ^[a-zA-Z0-9][a-zA-Z0-9._-]*$
   */
  namespace: string;
}

export interface ArtifactReposGetResponse {
  errors: Array<ArtifactReposGetResponse.Error>;
  messages: Array<ArtifactReposGetResponse.Message>;
  result: ArtifactReposGetResponse.Result;
  success: true;
  result_info?: ArtifactReposGetResponse.ResultInfo | ArtifactReposGetResponse.ResultInfo2;
}

export namespace ArtifactReposGetResponse {
  export interface Error {
    /**
     * @minimum -9007199254740991
     * @maximum 9007199254740991
     */
    code: number;
    message: string;
    /**
     * @format uri
     */
    documentation_url?: string;
    source?: Error.Source;
  }

  export namespace Error {
    export interface Source {
      pointer?: string;
    }
  }

  export interface Message {
    /**
     * @minimum -9007199254740991
     * @maximum 9007199254740991
     */
    code: number;
    message: string;
    /**
     * @format uri
     */
    documentation_url?: string;
    source?: Message.Source;
  }

  export namespace Message {
    export interface Source {
      pointer?: string;
    }
  }

  export interface Result {
    /**
     * @format date-time
     * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d:[0-5]\d(?:\.\d+)?(?:Z))$
     */
    created_at: string;
    /**
     * Default branch name. Must not contain '..' and must not end with '/' or '.'.
     */
    default_branch: string;
    description: string | null;
    id: string;
    /**
     * @format date-time
     * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d:[0-5]\d(?:\.\d+)?(?:Z))$
     */
    last_push_at: string | null;
    name: string;
    read_only: boolean;
    remote: string;
    source: string | null;
    /**
     * @format date-time
     * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d:[0-5]\d(?:\.\d+)?(?:Z))$
     */
    updated_at: string;
  }

  export interface ResultInfo {
    /**
     * @minimum -9007199254740991
     * @maximum 9007199254740991
     */
    count: number;
    cursor: string;
    /**
     * @minimum -9007199254740991
     * @maximum 9007199254740991
     */
    per_page: number;
  }

  export interface ResultInfo2 {
    /**
     * @minimum -9007199254740991
     * @maximum 9007199254740991
     */
    count: number;
    /**
     * @minimum -9007199254740991
     * @maximum 9007199254740991
     */
    page: number;
    /**
     * @minimum -9007199254740991
     * @maximum 9007199254740991
     */
    per_page: number;
    /**
     * @minimum -9007199254740991
     * @maximum 9007199254740991
     */
    total_count: number;
    /**
     * @minimum -9007199254740991
     * @maximum 9007199254740991
     */
    total_pages: number;
  }
}

export interface ArtifactReposBlobGetParams {
  /**
   * Cloudflare account ID.
   */
  account_id: string;
  /**
   * Artifacts namespace name.
   * @pattern ^[a-zA-Z0-9][a-zA-Z0-9._-]*$
   */
  namespace: string;
  /**
   * Repository name.
   * @pattern ^[a-zA-Z0-9][a-zA-Z0-9._-]*$
   */
  name: string;
}

export interface ArtifactReposCommitGetParams {
  /**
   * Cloudflare account ID.
   */
  account_id: string;
  /**
   * Artifacts namespace name.
   * @pattern ^[a-zA-Z0-9][a-zA-Z0-9._-]*$
   */
  namespace: string;
  /**
   * Repository name.
   * @pattern ^[a-zA-Z0-9][a-zA-Z0-9._-]*$
   */
  name: string;
}

export interface ArtifactReposCommitGetResponse {
  errors: Array<ArtifactReposCommitGetResponse.Error>;
  messages: Array<ArtifactReposCommitGetResponse.Message>;
  result: ArtifactReposCommitGetResponse.Result;
  success: true;
  result_info?: ArtifactReposCommitGetResponse.ResultInfo | ArtifactReposCommitGetResponse.ResultInfo2;
}

export namespace ArtifactReposCommitGetResponse {
  export interface Error {
    /**
     * @minimum -9007199254740991
     * @maximum 9007199254740991
     */
    code: number;
    message: string;
    /**
     * @format uri
     */
    documentation_url?: string;
    source?: Error.Source;
  }

  export namespace Error {
    export interface Source {
      pointer?: string;
    }
  }

  export interface Message {
    /**
     * @minimum -9007199254740991
     * @maximum 9007199254740991
     */
    code: number;
    message: string;
    /**
     * @format uri
     */
    documentation_url?: string;
    source?: Message.Source;
  }

  export namespace Message {
    export interface Source {
      pointer?: string;
    }
  }

  export interface Result {
    author: Result.Author;
    /**
     * @minimum -9007199254740991
     * @maximum 9007199254740991
     */
    authoredAt: number;
    /**
     * @minimum -9007199254740991
     * @maximum 9007199254740991
     */
    committedAt: number;
    committer: Result.Committer;
    /**
     * @pattern ^[0-9a-f]{40}$
     */
    hash: string;
    message: string;
    parents: Array<string>;
    /**
     * @pattern ^[0-9a-f]{40}$
     */
    treeHash: string;
  }

  export namespace Result {
    export interface Author {
      email: string;
      name: string;
    }

    export interface Committer {
      email: string;
      name: string;
    }
  }

  export interface ResultInfo {
    /**
     * @minimum -9007199254740991
     * @maximum 9007199254740991
     */
    count: number;
    cursor: string;
    /**
     * @minimum -9007199254740991
     * @maximum 9007199254740991
     */
    per_page: number;
  }

  export interface ResultInfo2 {
    /**
     * @minimum -9007199254740991
     * @maximum 9007199254740991
     */
    count: number;
    /**
     * @minimum -9007199254740991
     * @maximum 9007199254740991
     */
    page: number;
    /**
     * @minimum -9007199254740991
     * @maximum 9007199254740991
     */
    per_page: number;
    /**
     * @minimum -9007199254740991
     * @maximum 9007199254740991
     */
    total_count: number;
    /**
     * @minimum -9007199254740991
     * @maximum 9007199254740991
     */
    total_pages: number;
  }
}

export interface ArtifactReposFileGetParams {
  /**
   * Path param: Cloudflare account ID.
   */
  account_id: string;
  /**
   * Path param: Artifacts namespace name.
   * @pattern ^[a-zA-Z0-9][a-zA-Z0-9._-]*$
   */
  namespace: string;
  /**
   * Query param: Git ref, branch, tag, or commit hash.
   * @minLength 1
   */
  ref: string;
  /**
   * Query param: File path.
   * @minLength 1
   */
  path: string;
}

export interface ArtifactReposForkParams {
  /**
   * Path param: Cloudflare account ID.
   */
  account_id: string;
  /**
   * Path param: Artifacts namespace name.
   * @pattern ^[a-zA-Z0-9][a-zA-Z0-9._-]*$
   */
  namespace: string;
  /**
   * Body param
   */
  default_branch_only?: boolean;
  /**
   * Body param
   * @maxLength 1024
   */
  description?: string;
  /**
   * Body param
   * @pattern ^[a-zA-Z0-9][a-zA-Z0-9._-]*$
   */
  name: string;
  /**
   * Body param
   */
  read_only?: boolean;
}

export interface ArtifactReposForkResponse {
  errors: Array<ArtifactReposForkResponse.Error>;
  messages: Array<ArtifactReposForkResponse.Message>;
  result: ArtifactReposForkResponse.Result;
  success: true;
  result_info?: ArtifactReposForkResponse.ResultInfo | ArtifactReposForkResponse.ResultInfo2;
}

export namespace ArtifactReposForkResponse {
  export interface Error {
    /**
     * @minimum -9007199254740991
     * @maximum 9007199254740991
     */
    code: number;
    message: string;
    /**
     * @format uri
     */
    documentation_url?: string;
    source?: Error.Source;
  }

  export namespace Error {
    export interface Source {
      pointer?: string;
    }
  }

  export interface Message {
    /**
     * @minimum -9007199254740991
     * @maximum 9007199254740991
     */
    code: number;
    message: string;
    /**
     * @format uri
     */
    documentation_url?: string;
    source?: Message.Source;
  }

  export namespace Message {
    export interface Source {
      pointer?: string;
    }
  }

  export interface Result {
    default_branch: string;
    description: string | null;
    id: string;
    name: string;
    /**
     * @minimum -9007199254740991
     * @maximum 9007199254740991
     */
    objects: number;
    remote: string;
    token: string;
  }

  export interface ResultInfo {
    /**
     * @minimum -9007199254740991
     * @maximum 9007199254740991
     */
    count: number;
    cursor: string;
    /**
     * @minimum -9007199254740991
     * @maximum 9007199254740991
     */
    per_page: number;
  }

  export interface ResultInfo2 {
    /**
     * @minimum -9007199254740991
     * @maximum 9007199254740991
     */
    count: number;
    /**
     * @minimum -9007199254740991
     * @maximum 9007199254740991
     */
    page: number;
    /**
     * @minimum -9007199254740991
     * @maximum 9007199254740991
     */
    per_page: number;
    /**
     * @minimum -9007199254740991
     * @maximum 9007199254740991
     */
    total_count: number;
    /**
     * @minimum -9007199254740991
     * @maximum 9007199254740991
     */
    total_pages: number;
  }
}

export interface ArtifactReposImportParams {
  /**
   * Path param: Cloudflare account ID.
   */
  account_id: string;
  /**
   * Path param: Artifacts namespace name.
   * @pattern ^[a-zA-Z0-9][a-zA-Z0-9._-]*$
   */
  namespace: string;
  /**
   * Body param: Git branch name. Must match /^[a-zA-Z0-9][a-zA-Z0-9._/-]*$/, must not contain '..', and must not end with '/' or '.'.
   * @minLength 1
   * @maxLength 256
   * @pattern ^[a-zA-Z0-9][a-zA-Z0-9._/-]*$
   */
  branch?: string;
  /**
   * Body param
   * @minimum 1
   * @maximum 9007199254740991
   */
  depth?: number;
  /**
   * Body param
   */
  read_only?: boolean;
  /**
   * Body param
   * @format uri
   */
  url: string;
}

export interface ArtifactReposImportResponse {
  errors: Array<ArtifactReposImportResponse.Error>;
  messages: Array<ArtifactReposImportResponse.Message>;
  result: ArtifactReposImportResponse.Result;
  success: true;
  result_info?: ArtifactReposImportResponse.ResultInfo | ArtifactReposImportResponse.ResultInfo2;
}

export namespace ArtifactReposImportResponse {
  export interface Error {
    /**
     * @minimum -9007199254740991
     * @maximum 9007199254740991
     */
    code: number;
    message: string;
    /**
     * @format uri
     */
    documentation_url?: string;
    source?: Error.Source;
  }

  export namespace Error {
    export interface Source {
      pointer?: string;
    }
  }

  export interface Message {
    /**
     * @minimum -9007199254740991
     * @maximum 9007199254740991
     */
    code: number;
    message: string;
    /**
     * @format uri
     */
    documentation_url?: string;
    source?: Message.Source;
  }

  export namespace Message {
    export interface Source {
      pointer?: string;
    }
  }

  export interface Result {
    default_branch: string;
    description: string | null;
    id: string;
    name: string;
    remote: string;
    token: string;
  }

  export interface ResultInfo {
    /**
     * @minimum -9007199254740991
     * @maximum 9007199254740991
     */
    count: number;
    cursor: string;
    /**
     * @minimum -9007199254740991
     * @maximum 9007199254740991
     */
    per_page: number;
  }

  export interface ResultInfo2 {
    /**
     * @minimum -9007199254740991
     * @maximum 9007199254740991
     */
    count: number;
    /**
     * @minimum -9007199254740991
     * @maximum 9007199254740991
     */
    page: number;
    /**
     * @minimum -9007199254740991
     * @maximum 9007199254740991
     */
    per_page: number;
    /**
     * @minimum -9007199254740991
     * @maximum 9007199254740991
     */
    total_count: number;
    /**
     * @minimum -9007199254740991
     * @maximum 9007199254740991
     */
    total_pages: number;
  }
}

export interface ArtifactReposLogGetParams {
  /**
   * Path param: Cloudflare account ID.
   */
  account_id: string;
  /**
   * Path param: Artifacts namespace name.
   * @pattern ^[a-zA-Z0-9][a-zA-Z0-9._-]*$
   */
  namespace: string;
  /**
   * Query param: Git ref, branch, tag, or commit hash. Defaults to HEAD.
   * @minLength 1
   */
  ref?: string;
  /**
   * Query param
   * @minimum 1
   * @maximum 1000
   */
  limit?: number;
  /**
   * Query param
   * @minimum 0
   */
  offset?: number;
}

export interface ArtifactReposLogGetResponse {
  errors: Array<ArtifactReposLogGetResponse.Error>;
  messages: Array<ArtifactReposLogGetResponse.Message>;
  result: Array<ArtifactReposLogGetResponse.Result>;
  success: true;
  result_info?: ArtifactReposLogGetResponse.ResultInfo | ArtifactReposLogGetResponse.ResultInfo2;
}

export namespace ArtifactReposLogGetResponse {
  export interface Error {
    /**
     * @minimum -9007199254740991
     * @maximum 9007199254740991
     */
    code: number;
    message: string;
    /**
     * @format uri
     */
    documentation_url?: string;
    source?: Error.Source;
  }

  export namespace Error {
    export interface Source {
      pointer?: string;
    }
  }

  export interface Message {
    /**
     * @minimum -9007199254740991
     * @maximum 9007199254740991
     */
    code: number;
    message: string;
    /**
     * @format uri
     */
    documentation_url?: string;
    source?: Message.Source;
  }

  export namespace Message {
    export interface Source {
      pointer?: string;
    }
  }

  export interface Result {
    author: Result.Author;
    /**
     * @minimum -9007199254740991
     * @maximum 9007199254740991
     */
    authoredAt: number;
    /**
     * @minimum -9007199254740991
     * @maximum 9007199254740991
     */
    committedAt: number;
    committer: Result.Committer;
    /**
     * @pattern ^[0-9a-f]{40}$
     */
    hash: string;
    message: string;
    parents: Array<string>;
    /**
     * @pattern ^[0-9a-f]{40}$
     */
    treeHash: string;
  }

  export namespace Result {
    export interface Author {
      email: string;
      name: string;
    }

    export interface Committer {
      email: string;
      name: string;
    }
  }

  export interface ResultInfo {
    /**
     * @minimum -9007199254740991
     * @maximum 9007199254740991
     */
    count: number;
    cursor: string;
    /**
     * @minimum -9007199254740991
     * @maximum 9007199254740991
     */
    per_page: number;
  }

  export interface ResultInfo2 {
    /**
     * @minimum -9007199254740991
     * @maximum 9007199254740991
     */
    count: number;
    /**
     * @minimum -9007199254740991
     * @maximum 9007199254740991
     */
    page: number;
    /**
     * @minimum -9007199254740991
     * @maximum 9007199254740991
     */
    per_page: number;
    /**
     * @minimum -9007199254740991
     * @maximum 9007199254740991
     */
    total_count: number;
    /**
     * @minimum -9007199254740991
     * @maximum 9007199254740991
     */
    total_pages: number;
  }
}

export interface ArtifactReposRawGetParams {
  /**
   * Cloudflare account ID.
   */
  account_id: string;
  /**
   * Artifacts namespace name.
   * @pattern ^[a-zA-Z0-9][a-zA-Z0-9._-]*$
   */
  namespace: string;
  /**
   * Repository name.
   * @pattern ^[a-zA-Z0-9][a-zA-Z0-9._-]*$
   */
  name: string;
  /**
   * Git ref, branch, tag, or 40-character commit hash.
   * @minLength 1
   */
  ref: string;
}

export type ArtifactReposRawGetResponse = string;

export interface ArtifactRepoTokensListParams {
  /**
   * Path param: Cloudflare account ID.
   */
  account_id: string;
  /**
   * Path param: Artifacts namespace name.
   * @pattern ^[a-zA-Z0-9][a-zA-Z0-9._-]*$
   */
  namespace: string;
  /**
   * Query param
   * @default active
   */
  state?: 'active' | 'expired' | 'revoked' | 'all';
  /**
   * Query param
   * @default 1
   * @minimum 1
   */
  page?: number;
  /**
   * Query param
   * @default 30
   * @minimum 1
   * @maximum 100
   */
  per_page?: number;
}

export interface ArtifactRepoTokensListResponse {
  errors: Array<ArtifactRepoTokensListResponse.Error>;
  messages: Array<ArtifactRepoTokensListResponse.Message>;
  result: Array<ArtifactRepoTokensListResponse.Result>;
  success: true;
  result_info?: ArtifactRepoTokensListResponse.ResultInfo | ArtifactRepoTokensListResponse.ResultInfo2;
}

export namespace ArtifactRepoTokensListResponse {
  export interface Error {
    /**
     * @minimum -9007199254740991
     * @maximum 9007199254740991
     */
    code: number;
    message: string;
    /**
     * @format uri
     */
    documentation_url?: string;
    source?: Error.Source;
  }

  export namespace Error {
    export interface Source {
      pointer?: string;
    }
  }

  export interface Message {
    /**
     * @minimum -9007199254740991
     * @maximum 9007199254740991
     */
    code: number;
    message: string;
    /**
     * @format uri
     */
    documentation_url?: string;
    source?: Message.Source;
  }

  export namespace Message {
    export interface Source {
      pointer?: string;
    }
  }

  export interface Result {
    /**
     * @format date-time
     * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d:[0-5]\d(?:\.\d+)?(?:Z))$
     */
    created_at: string;
    /**
     * @format date-time
     * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d:[0-5]\d(?:\.\d+)?(?:Z))$
     */
    expires_at: string;
    id: string;
    scope: 'read' | 'write';
    state: 'active' | 'expired' | 'revoked';
  }

  export interface ResultInfo {
    /**
     * @minimum -9007199254740991
     * @maximum 9007199254740991
     */
    count: number;
    cursor: string;
    /**
     * @minimum -9007199254740991
     * @maximum 9007199254740991
     */
    per_page: number;
  }

  export interface ResultInfo2 {
    /**
     * @minimum -9007199254740991
     * @maximum 9007199254740991
     */
    count: number;
    /**
     * @minimum -9007199254740991
     * @maximum 9007199254740991
     */
    page: number;
    /**
     * @minimum -9007199254740991
     * @maximum 9007199254740991
     */
    per_page: number;
    /**
     * @minimum -9007199254740991
     * @maximum 9007199254740991
     */
    total_count: number;
    /**
     * @minimum -9007199254740991
     * @maximum 9007199254740991
     */
    total_pages: number;
  }
}

export interface ArtifactReposTreeGetParams {
  /**
   * Cloudflare account ID.
   */
  account_id: string;
  /**
   * Artifacts namespace name.
   * @pattern ^[a-zA-Z0-9][a-zA-Z0-9._-]*$
   */
  namespace: string;
  /**
   * Repository name.
   * @pattern ^[a-zA-Z0-9][a-zA-Z0-9._-]*$
   */
  name: string;
}

export interface ArtifactReposTreeGetResponse {
  errors: Array<ArtifactReposTreeGetResponse.Error>;
  messages: Array<ArtifactReposTreeGetResponse.Message>;
  result: Array<ArtifactReposTreeGetResponse.Result>;
  success: true;
  result_info?: ArtifactReposTreeGetResponse.ResultInfo | ArtifactReposTreeGetResponse.ResultInfo2;
}

export namespace ArtifactReposTreeGetResponse {
  export interface Error {
    /**
     * @minimum -9007199254740991
     * @maximum 9007199254740991
     */
    code: number;
    message: string;
    /**
     * @format uri
     */
    documentation_url?: string;
    source?: Error.Source;
  }

  export namespace Error {
    export interface Source {
      pointer?: string;
    }
  }

  export interface Message {
    /**
     * @minimum -9007199254740991
     * @maximum 9007199254740991
     */
    code: number;
    message: string;
    /**
     * @format uri
     */
    documentation_url?: string;
    source?: Message.Source;
  }

  export namespace Message {
    export interface Source {
      pointer?: string;
    }
  }

  export interface Result {
    /**
     * @pattern ^[0-9a-f]{40}$
     */
    hash: string;
    mode: string;
    name: string;
    type: 'tree' | 'blob' | 'symlink' | 'gitlink' | 'exec';
  }

  export interface ResultInfo {
    /**
     * @minimum -9007199254740991
     * @maximum 9007199254740991
     */
    count: number;
    cursor: string;
    /**
     * @minimum -9007199254740991
     * @maximum 9007199254740991
     */
    per_page: number;
  }

  export interface ResultInfo2 {
    /**
     * @minimum -9007199254740991
     * @maximum 9007199254740991
     */
    count: number;
    /**
     * @minimum -9007199254740991
     * @maximum 9007199254740991
     */
    page: number;
    /**
     * @minimum -9007199254740991
     * @maximum 9007199254740991
     */
    per_page: number;
    /**
     * @minimum -9007199254740991
     * @maximum 9007199254740991
     */
    total_count: number;
    /**
     * @minimum -9007199254740991
     * @maximum 9007199254740991
     */
    total_pages: number;
  }
}

export interface ArtifactTokensCreateParams {
  /**
   * Path param: Cloudflare account ID.
   */
  account_id: string;
  /**
   * Body param
   * @pattern ^[a-zA-Z0-9][a-zA-Z0-9._-]*$
   */
  repo: string;
  /**
   * Body param
   */
  scope?: 'read' | 'write';
  /**
   * Body param
   * @minimum 60
   * @maximum 31536000
   */
  ttl?: number;
}

export interface ArtifactTokensCreateResponse {
  errors: Array<ArtifactTokensCreateResponse.Error>;
  messages: Array<ArtifactTokensCreateResponse.Message>;
  result: ArtifactTokensCreateResponse.Result;
  success: true;
  result_info?: ArtifactTokensCreateResponse.ResultInfo | ArtifactTokensCreateResponse.ResultInfo2;
}

export namespace ArtifactTokensCreateResponse {
  export interface Error {
    /**
     * @minimum -9007199254740991
     * @maximum 9007199254740991
     */
    code: number;
    message: string;
    /**
     * @format uri
     */
    documentation_url?: string;
    source?: Error.Source;
  }

  export namespace Error {
    export interface Source {
      pointer?: string;
    }
  }

  export interface Message {
    /**
     * @minimum -9007199254740991
     * @maximum 9007199254740991
     */
    code: number;
    message: string;
    /**
     * @format uri
     */
    documentation_url?: string;
    source?: Message.Source;
  }

  export namespace Message {
    export interface Source {
      pointer?: string;
    }
  }

  export interface Result {
    /**
     * @format date-time
     * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d:[0-5]\d(?:\.\d+)?(?:Z))$
     */
    expires_at: string;
    id: string;
    plaintext: string;
    scope: 'read' | 'write';
  }

  export interface ResultInfo {
    /**
     * @minimum -9007199254740991
     * @maximum 9007199254740991
     */
    count: number;
    cursor: string;
    /**
     * @minimum -9007199254740991
     * @maximum 9007199254740991
     */
    per_page: number;
  }

  export interface ResultInfo2 {
    /**
     * @minimum -9007199254740991
     * @maximum 9007199254740991
     */
    count: number;
    /**
     * @minimum -9007199254740991
     * @maximum 9007199254740991
     */
    page: number;
    /**
     * @minimum -9007199254740991
     * @maximum 9007199254740991
     */
    per_page: number;
    /**
     * @minimum -9007199254740991
     * @maximum 9007199254740991
     */
    total_count: number;
    /**
     * @minimum -9007199254740991
     * @maximum 9007199254740991
     */
    total_pages: number;
  }
}

export interface ArtifactTokensRevokeParams {
  /**
   * Cloudflare account ID.
   */
  account_id: string;
  /**
   * Artifacts namespace name.
   * @pattern ^[a-zA-Z0-9][a-zA-Z0-9._-]*$
   */
  namespace: string;
}

export interface ArtifactTokensRevokeResponse {
  errors: Array<ArtifactTokensRevokeResponse.Error>;
  messages: Array<ArtifactTokensRevokeResponse.Message>;
  result: ArtifactTokensRevokeResponse.Result;
  success: true;
  result_info?: ArtifactTokensRevokeResponse.ResultInfo | ArtifactTokensRevokeResponse.ResultInfo2;
}

export namespace ArtifactTokensRevokeResponse {
  export interface Error {
    /**
     * @minimum -9007199254740991
     * @maximum 9007199254740991
     */
    code: number;
    message: string;
    /**
     * @format uri
     */
    documentation_url?: string;
    source?: Error.Source;
  }

  export namespace Error {
    export interface Source {
      pointer?: string;
    }
  }

  export interface Message {
    /**
     * @minimum -9007199254740991
     * @maximum 9007199254740991
     */
    code: number;
    message: string;
    /**
     * @format uri
     */
    documentation_url?: string;
    source?: Message.Source;
  }

  export namespace Message {
    export interface Source {
      pointer?: string;
    }
  }

  export interface Result {
    id: string;
  }

  export interface ResultInfo {
    /**
     * @minimum -9007199254740991
     * @maximum 9007199254740991
     */
    count: number;
    cursor: string;
    /**
     * @minimum -9007199254740991
     * @maximum 9007199254740991
     */
    per_page: number;
  }

  export interface ResultInfo2 {
    /**
     * @minimum -9007199254740991
     * @maximum 9007199254740991
     */
    count: number;
    /**
     * @minimum -9007199254740991
     * @maximum 9007199254740991
     */
    page: number;
    /**
     * @minimum -9007199254740991
     * @maximum 9007199254740991
     */
    per_page: number;
    /**
     * @minimum -9007199254740991
     * @maximum 9007199254740991
     */
    total_count: number;
    /**
     * @minimum -9007199254740991
     * @maximum 9007199254740991
     */
    total_pages: number;
  }
}
export declare namespace Artifacts {
  export {
    type ArtifactNamespacesListResponse as ArtifactNamespacesListResponse,
    type ArtifactNamespacesGetResponse as ArtifactNamespacesGetResponse,
    type ArtifactReposListResponse as ArtifactReposListResponse,
    type ArtifactReposCreateResponse as ArtifactReposCreateResponse,
    type ArtifactReposDeleteResponse as ArtifactReposDeleteResponse,
    type ArtifactReposGetResponse as ArtifactReposGetResponse,
    type ArtifactReposCommitGetResponse as ArtifactReposCommitGetResponse,
    type ArtifactReposForkResponse as ArtifactReposForkResponse,
    type ArtifactReposImportResponse as ArtifactReposImportResponse,
    type ArtifactReposLogGetResponse as ArtifactReposLogGetResponse,
    type ArtifactReposRawGetResponse as ArtifactReposRawGetResponse,
    type ArtifactRepoTokensListResponse as ArtifactRepoTokensListResponse,
    type ArtifactReposTreeGetResponse as ArtifactReposTreeGetResponse,
    type ArtifactTokensCreateResponse as ArtifactTokensCreateResponse,
    type ArtifactTokensRevokeResponse as ArtifactTokensRevokeResponse,
    type ArtifactNamespacesListParams as ArtifactNamespacesListParams,
    type ArtifactNamespacesGetParams as ArtifactNamespacesGetParams,
    type ArtifactReposListParams as ArtifactReposListParams,
    type ArtifactReposCreateParams as ArtifactReposCreateParams,
    type ArtifactReposDeleteParams as ArtifactReposDeleteParams,
    type ArtifactReposGetParams as ArtifactReposGetParams,
    type ArtifactReposBlobGetParams as ArtifactReposBlobGetParams,
    type ArtifactReposCommitGetParams as ArtifactReposCommitGetParams,
    type ArtifactReposFileGetParams as ArtifactReposFileGetParams,
    type ArtifactReposForkParams as ArtifactReposForkParams,
    type ArtifactReposImportParams as ArtifactReposImportParams,
    type ArtifactReposLogGetParams as ArtifactReposLogGetParams,
    type ArtifactReposRawGetParams as ArtifactReposRawGetParams,
    type ArtifactRepoTokensListParams as ArtifactRepoTokensListParams,
    type ArtifactReposTreeGetParams as ArtifactReposTreeGetParams,
    type ArtifactTokensCreateParams as ArtifactTokensCreateParams,
    type ArtifactTokensRevokeParams as ArtifactTokensRevokeParams,
  };
}
