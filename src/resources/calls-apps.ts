// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from '../resource';
import { APIPromise } from '../api-promise';
import type { RequestOptions } from '../internal/request-options';
import { path as __scalarPath } from '../internal/utils/path';

export class CallsApps extends APIResource {
  /**
   * Lists all apps in the Cloudflare account
   *
   * @param {string} accountID
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<unknown>} List apps response
   *
   * @example
   * ```ts
   * const response = await client.callsApps.list('accountId');
   * ```
   */
  list(accountID: string, options?: RequestOptions): APIPromise<unknown> {
    return this._client.get(__scalarPath`/accounts/${accountID}/calls/apps`, options);
  }

  /**
   * Creates a new Cloudflare calls app. An app is an unique enviroment where each Session can access all Tracks within the app.
   *
   * @param {string} accountID
   * @param {CallsAppCreateANewParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<unknown>} Created a new app
   *
   * @example
   * ```ts
   * const response = await client.callsApps.createANew('accountId', {});
   * ```
   */
  createANew(
    accountID: string,
    body: CallsAppCreateANewParams,
    options?: RequestOptions,
  ): APIPromise<unknown> {
    return this._client.post(__scalarPath`/accounts/${accountID}/calls/apps`, { body, ...options });
  }

  /**
   * Deletes an app from Cloudflare Calls
   *
   * @param {string} appID
   * @param {CallsAppDeleteParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<unknown>} Delete app response
   *
   * @example
   * ```ts
   * const response = await client.callsApps.delete('appId', {
   *   account_id: {},
   * });
   * ```
   */
  delete(appID: string, params: CallsAppDeleteParams, options?: RequestOptions): APIPromise<unknown> {
    const { account_id } = params;
    return this._client.delete(__scalarPath`/accounts/${account_id}/calls/apps/${appID}`, options);
  }

  /**
   * Fetches details for a single Calls app.
   *
   * @param {string} appID
   * @param {CallsAppRetrieveDetailsParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<unknown>} Retrieve app details response
   *
   * @example
   * ```ts
   * const response = await client.callsApps.retrieveDetails('appId', {
   *   account_id: {},
   * });
   * ```
   */
  retrieveDetails(
    appID: string,
    params: CallsAppRetrieveDetailsParams,
    options?: RequestOptions,
  ): APIPromise<unknown> {
    const { account_id } = params;
    return this._client.get(__scalarPath`/accounts/${account_id}/calls/apps/${appID}`, options);
  }

  /**
   * Edit details for a single app.
   *
   * @param {string} appID
   * @param {CallsAppUpdateDetailsParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<unknown>} Edit app details response
   *
   * @example
   * ```ts
   * const response = await client.callsApps.updateDetails('appId', {
   *   account_id: {},
   *   body: {},
   * });
   * ```
   */
  updateDetails(
    appID: string,
    params: CallsAppUpdateDetailsParams,
    options?: RequestOptions,
  ): APIPromise<unknown> {
    const { account_id, body } = params;
    return this._client.put(__scalarPath`/accounts/${account_id}/calls/apps/${appID}`, { body, ...options });
  }
}

export type CallsAppCreateANewParams = unknown;

export interface CallsAppDeleteParams {
  account_id: string;
}

export interface CallsAppRetrieveDetailsParams {
  account_id: string;
}

export interface CallsAppUpdateDetailsParams {
  /**
   * Path param
   */
  account_id: string;
  /**
   * Body param
   */
  body: unknown;
}
export declare namespace CallsApps {
  export {
    type CallsAppCreateANewParams as CallsAppCreateANewParams,
    type CallsAppDeleteParams as CallsAppDeleteParams,
    type CallsAppRetrieveDetailsParams as CallsAppRetrieveDetailsParams,
    type CallsAppUpdateDetailsParams as CallsAppUpdateDetailsParams,
  };
}
