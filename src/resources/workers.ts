// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from '../resource';
import { APIPromise } from '../api-promise';
import type { RequestOptions } from '../internal/request-options';
import { path as __scalarPath } from '../internal/utils/path';

export class Workers extends APIResource {
  /**
   * Connect a Worker tag to a repository and production build settings.
   *
   * @param {string} accountID
   * @param {WorkerCreateBuildParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<WorkerCreateBuildResponse>} Worker build configuration created successfully
   *
   * @example
   * ```ts
   * const worker = await client.workers.createBuild('accountId', {
   *   git_repository: {
   *     branch: 'main',
   *     provider_account_id: 'cloudflare',
   *     provider_account_name: 'Cloudflare',
   *     provider_type: 'github',
   *     repo_id: 'workers-sdk',
   *     repo_name: 'workers-sdk',
   *   },
   *   production_settings: {
   *     build_caching_enabled: true,
   *     build_command: 'npm run build',
   *     build_token_uuid: '4b1e4d0f-6f2a-4c9d-9a3b-7c5e2f8a1d64',
   *     deploy_command: 'npx wrangler deploy',
   *     environment_variables: {},
   *     path_excludes: ['*.md'],
   *     path_includes: ['*'],
   *     root_directory: '/',
   *   },
   *   script_tag: 'my-worker',
   * });
   * ```
   */
  createBuild(
    accountID: string,
    body: WorkerCreateBuildParams,
    options?: RequestOptions,
  ): APIPromise<WorkerCreateBuildResponse> {
    return this._client.post(__scalarPath`/accounts/${accountID}/builds/workers`, { body, ...options });
  }

  /**
   * List paginated build records associated with a Worker tag.
   *
   * @param {string} externalScriptID
   * @param {WorkerListBuildsByScriptParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<WorkerListBuildsByScriptResponse>} Builds retrieved successfully
   *
   * @example
   * ```ts
   * const worker = await client.workers.listBuildsByScript('externalScriptId', {
   *   account_id: 'accountId',
   * });
   * ```
   */
  listBuildsByScript(
    externalScriptID: string,
    params: WorkerListBuildsByScriptParams,
    options?: RequestOptions,
  ): APIPromise<WorkerListBuildsByScriptResponse> {
    const { account_id } = params;
    return this._client.get(
      __scalarPath`/accounts/${account_id}/builds/workers/${externalScriptID}/builds`,
      options,
    );
  }

  /**
   * List trigger UUIDs and build settings associated with a Worker tag.
   *
   * @param {string} externalScriptID
   * @param {WorkerListTriggersByScriptParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<WorkerListTriggersByScriptResponse>} Triggers retrieved successfully
   *
   * @example
   * ```ts
   * const worker = await client.workers.listTriggersByScript('externalScriptId', {
   *   account_id: 'accountId',
   * });
   * ```
   */
  listTriggersByScript(
    externalScriptID: string,
    params: WorkerListTriggersByScriptParams,
    options?: RequestOptions,
  ): APIPromise<WorkerListTriggersByScriptResponse> {
    const { account_id } = params;
    return this._client.get(
      __scalarPath`/accounts/${account_id}/builds/workers/${externalScriptID}/triggers`,
      options,
    );
  }

  /**
   * Delete build settings and triggers for a Worker tag and cancel unfinished builds. The Worker is not deleted.
   *
   * @param {string} scriptTag
   * @param {WorkerDeleteBuildParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<WorkerDeleteBuildResponse>} Worker build configuration deleted successfully.
   *
   * @example
   * ```ts
   * const worker = await client.workers.deleteBuild('scriptTag', {
   *   account_id: 'accountId',
   * });
   * ```
   */
  deleteBuild(
    scriptTag: string,
    params: WorkerDeleteBuildParams,
    options?: RequestOptions,
  ): APIPromise<WorkerDeleteBuildResponse> {
    const { account_id } = params;
    return this._client.delete(__scalarPath`/accounts/${account_id}/builds/workers/${scriptTag}`, options);
  }

  /**
   * Retrieve the repository and production build settings associated with a Worker tag.
   *
   * @param {string} scriptTag
   * @param {WorkerRetrieveBuildParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<WorkerRetrieveBuildResponse>} Worker build configuration retrieved successfully
   *
   * @example
   * ```ts
   * const worker = await client.workers.retrieveBuild('scriptTag', {
   *   account_id: 'accountId',
   * });
   * ```
   */
  retrieveBuild(
    scriptTag: string,
    params: WorkerRetrieveBuildParams,
    options?: RequestOptions,
  ): APIPromise<WorkerRetrieveBuildResponse> {
    const { account_id } = params;
    return this._client.get(__scalarPath`/accounts/${account_id}/builds/workers/${scriptTag}`, options);
  }

  /**
   * Update the repository branch or production build settings associated with a Worker tag.
   *
   * @param {string} scriptTag
   * @param {WorkerUpdateBuildParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<WorkerUpdateBuildResponse>} Worker build configuration updated successfully
   *
   * @example
   * ```ts
   * const worker = await client.workers.updateBuild('scriptTag', {
   *   account_id: 'accountId',
   *   body: {},
   * });
   * ```
   */
  updateBuild(
    scriptTag: string,
    params: WorkerUpdateBuildParams,
    options?: RequestOptions,
  ): APIPromise<WorkerUpdateBuildResponse> {
    const { account_id, body } = params;
    return this._client.patch(__scalarPath`/accounts/${account_id}/builds/workers/${scriptTag}`, {
      body,
      ...options,
    });
  }
}

export type WorkerCreateBuildParams = unknown;

export type WorkerCreateBuildResponse = unknown & WorkerCreateBuildResponse.WorkerCreateBuildResponseItem;

export namespace WorkerCreateBuildResponse {
  export interface WorkerCreateBuildResponseItem {
    result?: unknown;
  }
}

export interface WorkerListBuildsByScriptParams {
  account_id: string;
}

export type WorkerListBuildsByScriptResponse = unknown &
  WorkerListBuildsByScriptResponse.WorkerListBuildsByScriptResponseItem;

export namespace WorkerListBuildsByScriptResponse {
  export interface WorkerListBuildsByScriptResponseItem {
    result?: Array<unknown>;
    result_info?: unknown;
  }
}

export interface WorkerListTriggersByScriptParams {
  account_id: string;
}

export type WorkerListTriggersByScriptResponse = unknown &
  WorkerListTriggersByScriptResponse.WorkerListTriggersByScriptResponseItem;

export namespace WorkerListTriggersByScriptResponse {
  export interface WorkerListTriggersByScriptResponseItem {
    result?: Array<unknown>;
  }
}

export interface WorkerDeleteBuildParams {
  account_id: string;
}

export type WorkerDeleteBuildResponse = unknown & WorkerDeleteBuildResponse.WorkerDeleteBuildResponseItem;

export namespace WorkerDeleteBuildResponse {
  export interface WorkerDeleteBuildResponseItem {
    result?: string;
  }
}

export interface WorkerRetrieveBuildParams {
  account_id: string;
}

export type WorkerRetrieveBuildResponse = unknown &
  WorkerRetrieveBuildResponse.WorkerRetrieveBuildResponseItem;

export namespace WorkerRetrieveBuildResponse {
  export interface WorkerRetrieveBuildResponseItem {
    result?: unknown;
  }
}

export interface WorkerUpdateBuildParams {
  /**
   * Path param
   */
  account_id: string;
  /**
   * Body param
   */
  body: unknown;
}

export type WorkerUpdateBuildResponse = unknown & WorkerUpdateBuildResponse.WorkerUpdateBuildResponseItem;

export namespace WorkerUpdateBuildResponse {
  export interface WorkerUpdateBuildResponseItem {
    result?: unknown;
  }
}
export declare namespace Workers {
  export {
    type WorkerCreateBuildResponse as WorkerCreateBuildResponse,
    type WorkerListBuildsByScriptResponse as WorkerListBuildsByScriptResponse,
    type WorkerListTriggersByScriptResponse as WorkerListTriggersByScriptResponse,
    type WorkerDeleteBuildResponse as WorkerDeleteBuildResponse,
    type WorkerRetrieveBuildResponse as WorkerRetrieveBuildResponse,
    type WorkerUpdateBuildResponse as WorkerUpdateBuildResponse,
    type WorkerCreateBuildParams as WorkerCreateBuildParams,
    type WorkerListBuildsByScriptParams as WorkerListBuildsByScriptParams,
    type WorkerListTriggersByScriptParams as WorkerListTriggersByScriptParams,
    type WorkerDeleteBuildParams as WorkerDeleteBuildParams,
    type WorkerRetrieveBuildParams as WorkerRetrieveBuildParams,
    type WorkerUpdateBuildParams as WorkerUpdateBuildParams,
  };
}
