// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from '../resource';
import { APIPromise } from '../api-promise';
import type { RequestOptions } from '../internal/request-options';
import { path as __scalarPath } from '../internal/utils/path';

export class GitHubIntegration extends APIResource {
  /**
   * Analyze repository for automatic configuration detection
   *
   * @param {string} repoID
   * @param {GitHubIntegrationListWorkerConfigAutofillParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<GitHubIntegrationListWorkerConfigAutofillResponse>} Configuration autofill data retrieved successfully
   *
   * @example
   * ```ts
   * const gitHubIntegration = await client.gitHubIntegration.listWorkerConfigAutofill('repoId', {
   *   provider_type: {},
   *   provider_account_id: {},
   *   account_id: 'accountId',
   *   branch: {},
   * });
   * ```
   */
  listWorkerConfigAutofill(
    repoID: string,
    params: GitHubIntegrationListWorkerConfigAutofillParams,
    options?: RequestOptions,
  ): APIPromise<GitHubIntegrationListWorkerConfigAutofillResponse> {
    const { provider_type, provider_account_id, account_id, ...query } = params;
    return this._client.get(
      __scalarPath`/accounts/${account_id}/builds/repos/${provider_type}/${provider_account_id}/${repoID}/config_autofill`,
      { query, ...options },
    );
  }
}

export interface GitHubIntegrationListWorkerConfigAutofillParams {
  /**
   * Path param: SCM provider type
   */
  provider_type: string;
  /**
   * Path param
   */
  provider_account_id: string;
  /**
   * Path param
   */
  account_id: string;
  /**
   * Query param
   */
  branch: unknown;
  /**
   * Query param
   */
  root_directory?: unknown;
}

export type GitHubIntegrationListWorkerConfigAutofillResponse = unknown &
  GitHubIntegrationListWorkerConfigAutofillResponse.GitHubIntegrationListWorkerConfigAutofillResponseItem;

export namespace GitHubIntegrationListWorkerConfigAutofillResponse {
  export interface GitHubIntegrationListWorkerConfigAutofillResponseItem {
    result?: unknown;
  }
}
export declare namespace GitHubIntegration {
  export {
    type GitHubIntegrationListWorkerConfigAutofillResponse as GitHubIntegrationListWorkerConfigAutofillResponse,
    type GitHubIntegrationListWorkerConfigAutofillParams as GitHubIntegrationListWorkerConfigAutofillParams,
  };
}
