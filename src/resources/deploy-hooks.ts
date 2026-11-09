// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from '../resource';
import { APIPromise } from '../api-promise';
import type { RequestOptions } from '../internal/request-options';
import { path as __scalarPath } from '../internal/utils/path';

export class DeployHooks extends APIResource {
  /**
   * List the branch-specific deploy hooks configured for a Worker.
   *
   * @param {string} scriptName
   * @param {DeployHookListParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<DeployHookListResponse>} Deploy hooks retrieved successfully
   *
   * @example
   * ```ts
   * const deployHook = await client.deployHooks.list('scriptName', {
   *   account_id: 'accountId',
   * });
   * ```
   */
  list(
    scriptName: string,
    params: DeployHookListParams,
    options?: RequestOptions,
  ): APIPromise<DeployHookListResponse> {
    const { account_id } = params;
    return this._client.get(
      __scalarPath`/accounts/${account_id}/builds/workers/${scriptName}/deploy_hooks`,
      options,
    );
  }

  /**
   * Create an HTTP hook that starts a build for a selected Worker branch.
   *
   * @param {string} scriptName
   * @param {DeployHookCreateParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<DeployHookCreateResponse>} Deploy hook created successfully
   *
   * @example
   * ```ts
   * const deployHook = await client.deployHooks.create('scriptName', {
   *   account_id: 'accountId',
   *   body: {},
   * });
   * ```
   */
  create(
    scriptName: string,
    params: DeployHookCreateParams,
    options?: RequestOptions,
  ): APIPromise<DeployHookCreateResponse> {
    const { account_id, body } = params;
    return this._client.post(
      __scalarPath`/accounts/${account_id}/builds/workers/${scriptName}/deploy_hooks`,
      { body, ...options },
    );
  }

  /**
   * Delete a deploy hook so its UUID can no longer start builds.
   *
   * @param {string} deployHookUUID
   * @param {DeployHookDeleteParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<DeployHookDeleteResponse>} Deploy hook deleted successfully
   *
   * @example
   * ```ts
   * const deployHook = await client.deployHooks.delete('deployHookUuid', {
   *   account_id: 'accountId',
   *   script_name: 'scriptName',
   * });
   * ```
   */
  delete(
    deployHookUUID: string,
    params: DeployHookDeleteParams,
    options?: RequestOptions,
  ): APIPromise<DeployHookDeleteResponse> {
    const { account_id, script_name } = params;
    return this._client.delete(
      __scalarPath`/accounts/${account_id}/builds/workers/${script_name}/deploy_hooks/${deployHookUUID}`,
      options,
    );
  }

  /**
   * Retrieve the name, branch, Worker identifier, and timestamps for a deploy hook.
   *
   * @param {string} deployHookUUID
   * @param {DeployHookRetrieveParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<DeployHookRetrieveResponse>} Deploy hook retrieved successfully
   *
   * @example
   * ```ts
   * const deployHook = await client.deployHooks.retrieve('deployHookUuid', {
   *   account_id: 'accountId',
   *   script_name: 'scriptName',
   * });
   * ```
   */
  retrieve(
    deployHookUUID: string,
    params: DeployHookRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<DeployHookRetrieveResponse> {
    const { account_id, script_name } = params;
    return this._client.get(
      __scalarPath`/accounts/${account_id}/builds/workers/${script_name}/deploy_hooks/${deployHookUUID}`,
      options,
    );
  }

  /**
   * Replace the name and target branch for a deploy hook.
   *
   * @param {string} deployHookUUID
   * @param {DeployHookUpdateParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<DeployHookUpdateResponse>} Deploy hook updated successfully
   *
   * @example
   * ```ts
   * const deployHook = await client.deployHooks.update('deployHookUuid', {
   *   account_id: 'accountId',
   *   script_name: 'scriptName',
   *   body: {},
   * });
   * ```
   */
  update(
    deployHookUUID: string,
    params: DeployHookUpdateParams,
    options?: RequestOptions,
  ): APIPromise<DeployHookUpdateResponse> {
    const { account_id, script_name, body } = params;
    return this._client.put(
      __scalarPath`/accounts/${account_id}/builds/workers/${script_name}/deploy_hooks/${deployHookUUID}`,
      { body, ...options },
    );
  }
}

export interface DeployHookListParams {
  account_id: string;
}

export type DeployHookListResponse = unknown & DeployHookListResponse.DeployHookListResponseItem;

export namespace DeployHookListResponse {
  export interface DeployHookListResponseItem {
    result?: Array<unknown>;
  }
}

export interface DeployHookCreateParams {
  /**
   * Path param
   */
  account_id: string;
  /**
   * Body param
   */
  body: unknown;
}

export type DeployHookCreateResponse = unknown & DeployHookCreateResponse.DeployHookCreateResponseItem;

export namespace DeployHookCreateResponse {
  export interface DeployHookCreateResponseItem {
    result?: unknown;
  }
}

export interface DeployHookDeleteParams {
  account_id: string;
  script_name: string;
}

export type DeployHookDeleteResponse = unknown & DeployHookDeleteResponse.DeployHookDeleteResponseItem;

export namespace DeployHookDeleteResponse {
  export interface DeployHookDeleteResponseItem {
    result?: unknown;
  }
}

export interface DeployHookRetrieveParams {
  account_id: string;
  script_name: string;
}

export type DeployHookRetrieveResponse = unknown & DeployHookRetrieveResponse.DeployHookRetrieveResponseItem;

export namespace DeployHookRetrieveResponse {
  export interface DeployHookRetrieveResponseItem {
    result?: unknown;
  }
}

export interface DeployHookUpdateParams {
  /**
   * Path param
   */
  account_id: string;
  /**
   * Path param
   */
  script_name: string;
  /**
   * Body param
   */
  body: unknown;
}

export type DeployHookUpdateResponse = unknown & DeployHookUpdateResponse.DeployHookUpdateResponseItem;

export namespace DeployHookUpdateResponse {
  export interface DeployHookUpdateResponseItem {
    result?: unknown;
  }
}
export declare namespace DeployHooks {
  export {
    type DeployHookListResponse as DeployHookListResponse,
    type DeployHookCreateResponse as DeployHookCreateResponse,
    type DeployHookDeleteResponse as DeployHookDeleteResponse,
    type DeployHookRetrieveResponse as DeployHookRetrieveResponse,
    type DeployHookUpdateResponse as DeployHookUpdateResponse,
    type DeployHookListParams as DeployHookListParams,
    type DeployHookCreateParams as DeployHookCreateParams,
    type DeployHookDeleteParams as DeployHookDeleteParams,
    type DeployHookRetrieveParams as DeployHookRetrieveParams,
    type DeployHookUpdateParams as DeployHookUpdateParams,
  };
}
