// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from '../resource';
import { APIPromise } from '../api-promise';
import type { RequestOptions } from '../internal/request-options';
import { buildHeaders } from '../internal/headers';
import { path as __scalarPath } from '../internal/utils/path';

export class RepositoryConnections extends APIResource {
  /**
   * Save the repository connection required by build triggers.
   *
   * @param {string} accountID
   * @param {RepositoryConnectionUpsertRepoParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<RepositoryConnectionUpsertRepoResponse>} Repository connection upserted successfully
   *
   * @example
   * ```ts
   * const repositoryConnection = await client.repositoryConnections.upsertRepo('accountId', {});
   * ```
   */
  upsertRepo(
    accountID: string,
    body: RepositoryConnectionUpsertRepoParams,
    options?: RequestOptions,
  ): APIPromise<RepositoryConnectionUpsertRepoResponse> {
    return this._client.put(__scalarPath`/accounts/${accountID}/builds/repos/connections`, {
      body,
      ...options,
    });
  }

  /**
   * Delete a saved repository connection.
   *
   * @param {string} repoConnectionUUID
   * @param {RepositoryConnectionDeleteRepoParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   *
   * @example
   * ```ts
   * await client.repositoryConnections.deleteRepo('repoConnectionUuid', {
   *   account_id: 'accountId',
   * });
   * ```
   */
  deleteRepo(
    repoConnectionUUID: string,
    params: RepositoryConnectionDeleteRepoParams,
    options?: RequestOptions,
  ): APIPromise<void> {
    const { account_id } = params;
    return this._client.delete(
      __scalarPath`/accounts/${account_id}/builds/repos/connections/${repoConnectionUUID}`,
      { ...options, headers: buildHeaders([{ Accept: '*/*' }, options?.headers]) },
    );
  }
}

export type RepositoryConnectionUpsertRepoParams = unknown;

export type RepositoryConnectionUpsertRepoResponse = unknown &
  RepositoryConnectionUpsertRepoResponse.RepositoryConnectionUpsertRepoResponseItem;

export namespace RepositoryConnectionUpsertRepoResponse {
  export interface RepositoryConnectionUpsertRepoResponseItem {
    result?: unknown;
  }
}

export interface RepositoryConnectionDeleteRepoParams {
  account_id: string;
}
export declare namespace RepositoryConnections {
  export {
    type RepositoryConnectionUpsertRepoResponse as RepositoryConnectionUpsertRepoResponse,
    type RepositoryConnectionUpsertRepoParams as RepositoryConnectionUpsertRepoParams,
    type RepositoryConnectionDeleteRepoParams as RepositoryConnectionDeleteRepoParams,
  };
}
