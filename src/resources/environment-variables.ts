// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from '../resource';
import { APIPromise } from '../api-promise';
import type { RequestOptions } from '../internal/request-options';
import { buildHeaders } from '../internal/headers';
import { path as __scalarPath } from '../internal/utils/path';

export class EnvironmentVariables extends APIResource {
  /**
   * List build-time variables configured for a trigger. Secret values are not returned.
   *
   * @param {string} triggerUUID
   * @param {EnvironmentVariableListParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<EnvironmentVariableListResponse>} Environment variables retrieved successfully
   *
   * @example
   * ```ts
   * const environmentVariable = await client.environmentVariables.list('triggerUuid', {
   *   account_id: 'accountId',
   * });
   * ```
   */
  list(
    triggerUUID: string,
    params: EnvironmentVariableListParams,
    options?: RequestOptions,
  ): APIPromise<EnvironmentVariableListResponse> {
    const { account_id } = params;
    return this._client.get(
      __scalarPath`/accounts/${account_id}/builds/triggers/${triggerUUID}/environment_variables`,
      options,
    );
  }

  /**
   * Add or replace build-time variables and secrets without changing unspecified keys.
   *
   * @param {string} triggerUUID
   * @param {EnvironmentVariableUpsertParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<EnvironmentVariableUpsertResponse>} Environment variables updated successfully
   *
   * @example
   * ```ts
   * const environmentVariable = await client.environmentVariables.upsert('triggerUuid', {
   *   account_id: 'accountId',
   *   body: {},
   * });
   * ```
   */
  upsert(
    triggerUUID: string,
    params: EnvironmentVariableUpsertParams,
    options?: RequestOptions,
  ): APIPromise<EnvironmentVariableUpsertResponse> {
    const { account_id, body } = params;
    return this._client.patch(
      __scalarPath`/accounts/${account_id}/builds/triggers/${triggerUUID}/environment_variables`,
      { body, ...options },
    );
  }

  /**
   * Delete one build-time variable or secret by key.
   *
   * @param {string} environmentVariableKey
   * @param {EnvironmentVariableDeleteParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   *
   * @example
   * ```ts
   * await client.environmentVariables.delete('environmentVariableKey', {
   *   account_id: 'accountId',
   *   trigger_uuid: 'triggerUuid',
   * });
   * ```
   */
  delete(
    environmentVariableKey: string,
    params: EnvironmentVariableDeleteParams,
    options?: RequestOptions,
  ): APIPromise<void> {
    const { account_id, trigger_uuid } = params;
    return this._client.delete(
      __scalarPath`/accounts/${account_id}/builds/triggers/${trigger_uuid}/environment_variables/${environmentVariableKey}`,
      { ...options, headers: buildHeaders([{ Accept: '*/*' }, options?.headers]) },
    );
  }
}

export interface EnvironmentVariableListParams {
  account_id: string;
}

export type EnvironmentVariableListResponse = unknown &
  EnvironmentVariableListResponse.EnvironmentVariableListResponseItem;

export namespace EnvironmentVariableListResponse {
  export interface EnvironmentVariableListResponseItem {
    result?: unknown;
  }
}

export interface EnvironmentVariableUpsertParams {
  /**
   * Path param
   */
  account_id: string;
  /**
   * Body param
   */
  body: unknown;
}

export type EnvironmentVariableUpsertResponse = unknown &
  EnvironmentVariableUpsertResponse.EnvironmentVariableUpsertResponseItem;

export namespace EnvironmentVariableUpsertResponse {
  export interface EnvironmentVariableUpsertResponseItem {
    result?: unknown;
  }
}

export interface EnvironmentVariableDeleteParams {
  account_id: string;
  trigger_uuid: string;
}
export declare namespace EnvironmentVariables {
  export {
    type EnvironmentVariableListResponse as EnvironmentVariableListResponse,
    type EnvironmentVariableUpsertResponse as EnvironmentVariableUpsertResponse,
    type EnvironmentVariableListParams as EnvironmentVariableListParams,
    type EnvironmentVariableUpsertParams as EnvironmentVariableUpsertParams,
    type EnvironmentVariableDeleteParams as EnvironmentVariableDeleteParams,
  };
}
