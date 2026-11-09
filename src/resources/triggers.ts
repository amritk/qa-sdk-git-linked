// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from '../resource';
import { APIPromise } from '../api-promise';
import type { RequestOptions } from '../internal/request-options';
import { buildHeaders } from '../internal/headers';
import { path as __scalarPath } from '../internal/utils/path';

export class Triggers extends APIResource {
  /**
   * Create a trigger defining the repository connection, Worker tag, commands, filters, cache setting, and build token.
   *
   * @param {string} accountID
   * @param {TriggerCreateParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<TriggerCreateResponse>} Trigger created successfully
   *
   * @example
   * ```ts
   * const trigger = await client.triggers.create('accountId', {});
   * ```
   */
  create(
    accountID: string,
    body: TriggerCreateParams,
    options?: RequestOptions,
  ): APIPromise<TriggerCreateResponse> {
    return this._client.post(__scalarPath`/accounts/${accountID}/builds/triggers`, { body, ...options });
  }

  /**
   * Delete a trigger and cancel its unfinished builds.
   *
   * @param {string} triggerUUID
   * @param {TriggerDeleteParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   *
   * @example
   * ```ts
   * await client.triggers.delete('triggerUuid', {
   *   account_id: 'accountId',
   * });
   * ```
   */
  delete(triggerUUID: string, params: TriggerDeleteParams, options?: RequestOptions): APIPromise<void> {
    const { account_id } = params;
    return this._client.delete(__scalarPath`/accounts/${account_id}/builds/triggers/${triggerUUID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Update commands, cache settings, or branch and path filters for a trigger.
   *
   * @param {string} triggerUUID
   * @param {TriggerUpdateParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<TriggerUpdateResponse>} Trigger updated successfully
   *
   * @example
   * ```ts
   * const trigger = await client.triggers.update('triggerUuid', {
   *   account_id: 'accountId',
   *   body: {},
   * });
   * ```
   */
  update(
    triggerUUID: string,
    params: TriggerUpdateParams,
    options?: RequestOptions,
  ): APIPromise<TriggerUpdateResponse> {
    const { account_id, body } = params;
    return this._client.patch(__scalarPath`/accounts/${account_id}/builds/triggers/${triggerUUID}`, {
      body,
      ...options,
    });
  }

  /**
   * Start a build for a branch or commit using the selected trigger.
   *
   * @param {string} triggerUUID
   * @param {TriggerCreateManualBuildParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<TriggerCreateManualBuildResponse>} Build created successfully
   *
   * @example
   * ```ts
   * const trigger = await client.triggers.createManualBuild('triggerUuid', {
   *   account_id: 'accountId',
   *   body: {},
   * });
   * ```
   */
  createManualBuild(
    triggerUUID: string,
    params: TriggerCreateManualBuildParams,
    options?: RequestOptions,
  ): APIPromise<TriggerCreateManualBuildResponse> {
    const { account_id, body } = params;
    return this._client.post(__scalarPath`/accounts/${account_id}/builds/triggers/${triggerUUID}/builds`, {
      body,
      ...options,
    });
  }

  /**
   * Delete cached dependencies and build artifacts associated with a trigger.
   *
   * @param {string} triggerUUID
   * @param {TriggerPurgeBuildCacheParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   *
   * @example
   * ```ts
   * await client.triggers.purgeBuildCache('triggerUuid', {
   *   account_id: 'accountId',
   * });
   * ```
   */
  purgeBuildCache(
    triggerUUID: string,
    params: TriggerPurgeBuildCacheParams,
    options?: RequestOptions,
  ): APIPromise<void> {
    const { account_id } = params;
    return this._client.post(
      __scalarPath`/accounts/${account_id}/builds/triggers/${triggerUUID}/purge_build_cache`,
      { ...options, headers: buildHeaders([{ Accept: '*/*' }, options?.headers]) },
    );
  }
}

export type TriggerCreateParams = unknown;

export type TriggerCreateResponse = unknown & TriggerCreateResponse.TriggerCreateResponseItem;

export namespace TriggerCreateResponse {
  export interface TriggerCreateResponseItem {
    result?: unknown;
  }
}

export interface TriggerDeleteParams {
  account_id: string;
}

export interface TriggerUpdateParams {
  /**
   * Path param
   */
  account_id: string;
  /**
   * Body param
   */
  body: unknown;
}

export type TriggerUpdateResponse = unknown & TriggerUpdateResponse.TriggerUpdateResponseItem;

export namespace TriggerUpdateResponse {
  export interface TriggerUpdateResponseItem {
    result?: unknown;
  }
}

export interface TriggerCreateManualBuildParams {
  /**
   * Path param
   */
  account_id: string;
  /**
   * Body param
   */
  body: unknown;
}

export type TriggerCreateManualBuildResponse = unknown &
  TriggerCreateManualBuildResponse.TriggerCreateManualBuildResponseItem;

export namespace TriggerCreateManualBuildResponse {
  export interface TriggerCreateManualBuildResponseItem {
    result?: unknown;
  }
}

export interface TriggerPurgeBuildCacheParams {
  account_id: string;
}
export declare namespace Triggers {
  export {
    type TriggerCreateResponse as TriggerCreateResponse,
    type TriggerUpdateResponse as TriggerUpdateResponse,
    type TriggerCreateManualBuildResponse as TriggerCreateManualBuildResponse,
    type TriggerCreateParams as TriggerCreateParams,
    type TriggerDeleteParams as TriggerDeleteParams,
    type TriggerUpdateParams as TriggerUpdateParams,
    type TriggerCreateManualBuildParams as TriggerCreateManualBuildParams,
    type TriggerPurgeBuildCacheParams as TriggerPurgeBuildCacheParams,
  };
}
