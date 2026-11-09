// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from '../resource';
import { APIPromise } from '../api-promise';
import type { RequestOptions } from '../internal/request-options';
import { path as __scalarPath } from '../internal/utils/path';

export class Turnstile extends APIResource {
  /**
   * Lists all turnstile widgets of an account.
   *
   * @param {string} accountID
   * @param {TurnstileAccountsWidgetsListParams} [query] - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<TurnstileAccountsWidgetsListResponse>} List Turnstile Widgets
   *
   * @example
   * ```ts
   * const turnstile = await client.turnstile.accountsWidgetsList('accountId', {
   *   page: 1,
   *   per_page: 25,
   * });
   * ```
   */
  accountsWidgetsList(
    accountID: string,
    query: TurnstileAccountsWidgetsListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<TurnstileAccountsWidgetsListResponse> {
    return this._client.get(__scalarPath`/accounts/${accountID}/challenges/widgets`, { query, ...options });
  }

  /**
   * Lists challenge widgets.
   *
   * @param {string} accountID
   * @param {TurnstileAccountsWidgetCreateParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<TurnstileAccountsWidgetCreateResponse>} Create Turnstile Widget Response
   *
   * @example
   * ```ts
   * const turnstile = await client.turnstile.accountsWidgetCreate('accountId', {
   *   page: 1,
   *   per_page: 25,
   *   domains: {},
   *   mode: {},
   *   name: {},
   * });
   * ```
   */
  accountsWidgetCreate(
    accountID: string,
    params: TurnstileAccountsWidgetCreateParams,
    options?: RequestOptions,
  ): APIPromise<TurnstileAccountsWidgetCreateResponse> {
    const { page, per_page, order, direction, filter, ...body } = params;
    return this._client.post(__scalarPath`/accounts/${accountID}/challenges/widgets`, {
      body,
      query: { page, per_page, order, direction, filter },
      ...options,
    });
  }

  /**
   * Destroy a Turnstile Widget.
   *
   * @param {string} sitekey
   * @param {TurnstileAccountsWidgetDeleteParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<TurnstileAccountsWidgetDeleteResponse>} Delete Turnstile Widget Response
   *
   * @example
   * ```ts
   * const turnstile = await client.turnstile.accountsWidgetDelete('sitekey', {
   *   account_id: {},
   * });
   * ```
   */
  accountsWidgetDelete(
    sitekey: string,
    params: TurnstileAccountsWidgetDeleteParams,
    options?: RequestOptions,
  ): APIPromise<TurnstileAccountsWidgetDeleteResponse> {
    const { account_id } = params;
    return this._client.delete(__scalarPath`/accounts/${account_id}/challenges/widgets/${sitekey}`, options);
  }

  /**
   * Show a single challenge widget configuration.
   *
   * @param {string} sitekey
   * @param {TurnstileAccountsWidgetGetParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<TurnstileAccountsWidgetGetResponse>} Turnstile Widget Details Response
   *
   * @example
   * ```ts
   * const turnstile = await client.turnstile.accountsWidgetGet('sitekey', {
   *   account_id: {},
   * });
   * ```
   */
  accountsWidgetGet(
    sitekey: string,
    params: TurnstileAccountsWidgetGetParams,
    options?: RequestOptions,
  ): APIPromise<TurnstileAccountsWidgetGetResponse> {
    const { account_id } = params;
    return this._client.get(__scalarPath`/accounts/${account_id}/challenges/widgets/${sitekey}`, options);
  }

  /**
   * Update the configuration of a widget.
   *
   * @param {string} sitekey
   * @param {TurnstileAccountsWidgetUpdateParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<TurnstileAccountsWidgetUpdateResponse>} Update Turnstile Widget Response
   *
   * @example
   * ```ts
   * const turnstile = await client.turnstile.accountsWidgetUpdate('sitekey', {
   *   account_id: {},
   *   domains: {},
   *   mode: {},
   *   name: {},
   * });
   * ```
   */
  accountsWidgetUpdate(
    sitekey: string,
    params: TurnstileAccountsWidgetUpdateParams,
    options?: RequestOptions,
  ): APIPromise<TurnstileAccountsWidgetUpdateResponse> {
    const { account_id, ...body } = params;
    return this._client.put(__scalarPath`/accounts/${account_id}/challenges/widgets/${sitekey}`, {
      body,
      ...options,
    });
  }

  /**
   * Generate a new secret key for this widget. If `invalidate_immediately`
   * is set to `false`, the previous secret remains valid for 2 hours.
   *
   * Note that secrets cannot be rotated again during the grace period.
   *
   *
   * @param {string} sitekey
   * @param {TurnstileAccountsWidgetRotateSecretParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<TurnstileAccountsWidgetRotateSecretResponse>} Rotate Secret Response
   *
   * @example
   * ```ts
   * const turnstile = await client.turnstile.accountsWidgetRotateSecret('sitekey', {
   *   account_id: {},
   * });
   * ```
   */
  accountsWidgetRotateSecret(
    sitekey: string,
    params: TurnstileAccountsWidgetRotateSecretParams,
    options?: RequestOptions,
  ): APIPromise<TurnstileAccountsWidgetRotateSecretResponse> {
    const { account_id, ...body } = params;
    return this._client.post(
      __scalarPath`/accounts/${account_id}/challenges/widgets/${sitekey}/rotate_secret`,
      { body, ...options },
    );
  }
}

export interface TurnstileAccountsWidgetsListParams {
  /**
   * Page number of paginated results.
   * @default 1
   * @minimum 1
   */
  page?: number;
  /**
   * Number of items per page.
   * @default 25
   * @minimum 5
   * @maximum 1000
   */
  per_page?: number;
  /**
   * Field to order widgets by.
   */
  order?: 'id' | 'sitekey' | 'name' | 'created_on' | 'modified_on';
  /**
   * Direction to order widgets.
   */
  direction?: 'asc' | 'desc';
  /**
   * Filter widgets by field using case-insensitive substring matching.
   * Format: `field:value`
   *
   * Supported fields:
   * - `name` - Filter by widget name (e.g., `filter=name:login-form`)
   * - `sitekey` - Filter by sitekey (e.g., `filter=sitekey:0x4AAA`)
   *
   * Returns 400 Bad Request if the field is unsupported or format is invalid.
   * An empty filter value returns all results.
   */
  filter?: string;
}

export type TurnstileAccountsWidgetsListResponse = unknown &
  TurnstileAccountsWidgetsListResponse.TurnstileAccountsWidgetsListResponseItem &
  TurnstileAccountsWidgetsListResponse.TurnstileAccountsWidgetsListResponseItem2;

export namespace TurnstileAccountsWidgetsListResponse {
  export interface TurnstileAccountsWidgetsListResponseItem {
    result_info?: unknown;
  }

  export interface TurnstileAccountsWidgetsListResponseItem2 {
    result?: Array<unknown>;
  }
}

export interface TurnstileAccountsWidgetCreateParams {
  /**
   * Query param: Page number of paginated results.
   * @default 1
   * @minimum 1
   */
  page?: number;
  /**
   * Query param: Number of items per page.
   * @default 25
   * @minimum 5
   * @maximum 1000
   */
  per_page?: number;
  /**
   * Query param: Field to order widgets by.
   */
  order?: 'id' | 'sitekey' | 'name' | 'created_on' | 'modified_on';
  /**
   * Query param: Direction to order widgets.
   */
  direction?: 'asc' | 'desc';
  /**
   * Query param: Filter widgets by field using case-insensitive substring matching.
   * Format: `field:value`
   *
   * Supported fields:
   * - `name` - Filter by widget name (e.g., `filter=name:login-form`)
   * - `sitekey` - Filter by sitekey (e.g., `filter=sitekey:0x4AAA`)
   *
   * Returns 400 Bad Request if the field is unsupported or format is invalid.
   * An empty filter value returns all results.
   */
  filter?: string;
  /**
   * Body param
   */
  bot_fight_mode?: unknown;
  /**
   * Body param
   */
  clearance_level?: unknown;
  /**
   * Body param
   */
  domains: unknown;
  /**
   * Body param
   */
  ephemeral_id?: unknown;
  /**
   * Body param
   */
  mode: unknown;
  /**
   * Body param
   */
  name: unknown;
  /**
   * Body param
   */
  offlabel?: unknown;
  /**
   * Body param
   */
  region?: unknown;
}

export type TurnstileAccountsWidgetCreateResponse = unknown &
  TurnstileAccountsWidgetCreateResponse.TurnstileAccountsWidgetCreateResponseItem &
  TurnstileAccountsWidgetCreateResponse.TurnstileAccountsWidgetCreateResponseItem2;

export namespace TurnstileAccountsWidgetCreateResponse {
  export interface TurnstileAccountsWidgetCreateResponseItem {
    result_info?: unknown;
  }

  export interface TurnstileAccountsWidgetCreateResponseItem2 {
    result?: unknown;
  }
}

export interface TurnstileAccountsWidgetDeleteParams {
  account_id: string;
}

export type TurnstileAccountsWidgetDeleteResponse = unknown &
  TurnstileAccountsWidgetDeleteResponse.TurnstileAccountsWidgetDeleteResponseItem;

export namespace TurnstileAccountsWidgetDeleteResponse {
  export interface TurnstileAccountsWidgetDeleteResponseItem {
    result?: unknown;
  }
}

export interface TurnstileAccountsWidgetGetParams {
  account_id: string;
}

export type TurnstileAccountsWidgetGetResponse = unknown &
  TurnstileAccountsWidgetGetResponse.TurnstileAccountsWidgetGetResponseItem;

export namespace TurnstileAccountsWidgetGetResponse {
  export interface TurnstileAccountsWidgetGetResponseItem {
    result?: unknown;
  }
}

export interface TurnstileAccountsWidgetUpdateParams {
  /**
   * Path param
   */
  account_id: string;
  /**
   * Body param
   */
  bot_fight_mode?: unknown;
  /**
   * Body param
   */
  clearance_level?: unknown;
  /**
   * Body param
   */
  domains: unknown;
  /**
   * Body param
   */
  ephemeral_id?: unknown;
  /**
   * Body param
   */
  mode: unknown;
  /**
   * Body param
   */
  name: unknown;
  /**
   * Body param
   */
  offlabel?: unknown;
  /**
   * Body param
   */
  region?: unknown;
}

export type TurnstileAccountsWidgetUpdateResponse = unknown &
  TurnstileAccountsWidgetUpdateResponse.TurnstileAccountsWidgetUpdateResponseItem;

export namespace TurnstileAccountsWidgetUpdateResponse {
  export interface TurnstileAccountsWidgetUpdateResponseItem {
    result?: unknown;
  }
}

export interface TurnstileAccountsWidgetRotateSecretParams {
  /**
   * Path param
   */
  account_id: string;
  /**
   * Body param
   */
  invalidate_immediately?: unknown;
}

export type TurnstileAccountsWidgetRotateSecretResponse = unknown &
  TurnstileAccountsWidgetRotateSecretResponse.TurnstileAccountsWidgetRotateSecretResponseItem;

export namespace TurnstileAccountsWidgetRotateSecretResponse {
  export interface TurnstileAccountsWidgetRotateSecretResponseItem {
    result?: unknown;
  }
}
export declare namespace Turnstile {
  export {
    type TurnstileAccountsWidgetsListResponse as TurnstileAccountsWidgetsListResponse,
    type TurnstileAccountsWidgetCreateResponse as TurnstileAccountsWidgetCreateResponse,
    type TurnstileAccountsWidgetDeleteResponse as TurnstileAccountsWidgetDeleteResponse,
    type TurnstileAccountsWidgetGetResponse as TurnstileAccountsWidgetGetResponse,
    type TurnstileAccountsWidgetUpdateResponse as TurnstileAccountsWidgetUpdateResponse,
    type TurnstileAccountsWidgetRotateSecretResponse as TurnstileAccountsWidgetRotateSecretResponse,
    type TurnstileAccountsWidgetsListParams as TurnstileAccountsWidgetsListParams,
    type TurnstileAccountsWidgetCreateParams as TurnstileAccountsWidgetCreateParams,
    type TurnstileAccountsWidgetDeleteParams as TurnstileAccountsWidgetDeleteParams,
    type TurnstileAccountsWidgetGetParams as TurnstileAccountsWidgetGetParams,
    type TurnstileAccountsWidgetUpdateParams as TurnstileAccountsWidgetUpdateParams,
    type TurnstileAccountsWidgetRotateSecretParams as TurnstileAccountsWidgetRotateSecretParams,
  };
}
