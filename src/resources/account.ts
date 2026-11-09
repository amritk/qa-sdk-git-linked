// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from '../resource';
import { APIPromise } from '../api-promise';
import type { RequestOptions } from '../internal/request-options';
import { path as __scalarPath } from '../internal/utils/path';

export class Account extends APIResource {
  /**
   * Returns the canonical logging platform and migration availability for an account.
   *
   * @param {string} accountID
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<AccountAigConfigGetLoggingStateResponse>} Returns the account logging state
   *
   * @example
   * ```ts
   * const account = await client.account.aigConfigGetLoggingState('accountId');
   * ```
   */
  aigConfigGetLoggingState(
    accountID: string,
    options?: RequestOptions,
  ): APIPromise<AccountAigConfigGetLoggingStateResponse> {
    return this._client.get(__scalarPath`/accounts/${accountID}/ai-gateway/logging-state`, options);
  }

  /**
   * Irreversibly migrates an eligible account to Workers Observability logging.
   *
   * @param {string} accountID
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<AccountAigConfigPatchLoggingStateResponse>} Returns the migrated account logging state
   *
   * @example
   * ```ts
   * const account = await client.account.aigConfigPatchLoggingState('accountId');
   * ```
   */
  aigConfigPatchLoggingState(
    accountID: string,
    options?: RequestOptions,
  ): APIPromise<AccountAigConfigPatchLoggingStateResponse> {
    return this._client.patch(__scalarPath`/accounts/${accountID}/ai-gateway/logging-state`, options);
  }

  /**
   * Return whether the account's build-minute allowance is exhausted and when it refreshes.
   *
   * @param {string} accountID
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<AccountListLimitsResponse>} Account limits retrieved successfully
   *
   * @example
   * ```ts
   * const account = await client.account.listLimits('accountId');
   * ```
   */
  listLimits(accountID: string, options?: RequestOptions): APIPromise<AccountListLimitsResponse> {
    return this._client.get(__scalarPath`/accounts/${accountID}/builds/account/limits`, options);
  }
}

export interface AccountAigConfigGetLoggingStateResponse {
  result: AccountAigConfigGetLoggingStateResponse.Result;
  success: boolean;
}

export namespace AccountAigConfigGetLoggingStateResponse {
  export interface Result {
    /**
     * @minimum 0
     */
    migrated_at: number | null;
    migration_available: boolean;
    platform: 'legacy' | 'workers_observability';
  }
}

export interface AccountAigConfigPatchLoggingStateResponse {
  result: AccountAigConfigPatchLoggingStateResponse.Result;
  success: boolean;
}

export namespace AccountAigConfigPatchLoggingStateResponse {
  export interface Result {
    /**
     * @minimum 0
     */
    migrated_at: number | null;
    migration_available: boolean;
    platform: 'legacy' | 'workers_observability';
  }
}

export type AccountListLimitsResponse = unknown & AccountListLimitsResponse.AccountListLimitsResponseItem;

export namespace AccountListLimitsResponse {
  export interface AccountListLimitsResponseItem {
    result?: unknown;
  }
}
export declare namespace Account {
  export {
    type AccountAigConfigGetLoggingStateResponse as AccountAigConfigGetLoggingStateResponse,
    type AccountAigConfigPatchLoggingStateResponse as AccountAigConfigPatchLoggingStateResponse,
    type AccountListLimitsResponse as AccountListLimitsResponse,
  };
}
