// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from '../resource';
import { APIPromise } from '../api-promise';
import type { RequestOptions } from '../internal/request-options';
import { path as __scalarPath } from '../internal/utils/path';

export class CallsTurnKeys extends APIResource {
  /**
   * Lists all TURN keys in the Cloudflare account
   *
   * @param {string} accountID
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<unknown>} List TURN key response
   *
   * @example
   * ```ts
   * const response = await client.callsTurnKeys.list('accountId');
   * ```
   */
  list(accountID: string, options?: RequestOptions): APIPromise<unknown> {
    return this._client.get(__scalarPath`/accounts/${accountID}/calls/turn_keys`, options);
  }

  /**
   * Creates a new Cloudflare Calls TURN key.
   *
   * @param {string} accountID
   * @param {CallsTurnKeyCreateParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<unknown>} Created a new TURN key
   *
   * @example
   * ```ts
   * const response = await client.callsTurnKeys.create('accountId', {});
   * ```
   */
  create(accountID: string, body: CallsTurnKeyCreateParams, options?: RequestOptions): APIPromise<unknown> {
    return this._client.post(__scalarPath`/accounts/${accountID}/calls/turn_keys`, { body, ...options });
  }

  /**
   * Deletes a TURN key from Cloudflare Calls
   *
   * @param {string} keyID
   * @param {CallsTurnKeyDeleteParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<unknown>} Delete TURN key response
   *
   * @example
   * ```ts
   * const response = await client.callsTurnKeys.delete('keyId', {
   *   account_id: {},
   * });
   * ```
   */
  delete(keyID: string, params: CallsTurnKeyDeleteParams, options?: RequestOptions): APIPromise<unknown> {
    const { account_id } = params;
    return this._client.delete(__scalarPath`/accounts/${account_id}/calls/turn_keys/${keyID}`, options);
  }

  /**
   * Fetches details for a single TURN key.
   *
   * @param {string} keyID
   * @param {CallsTurnKeyRetrieveDetailsParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<unknown>} Retrieve TURN key details response
   *
   * @example
   * ```ts
   * const response = await client.callsTurnKeys.retrieveDetails('keyId', {
   *   account_id: {},
   * });
   * ```
   */
  retrieveDetails(
    keyID: string,
    params: CallsTurnKeyRetrieveDetailsParams,
    options?: RequestOptions,
  ): APIPromise<unknown> {
    const { account_id } = params;
    return this._client.get(__scalarPath`/accounts/${account_id}/calls/turn_keys/${keyID}`, options);
  }

  /**
   * Edit details for a single TURN key.
   *
   * @param {string} keyID
   * @param {CallsTurnKeyUpdateParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<unknown>} Edit TURN key details response
   *
   * @example
   * ```ts
   * const response = await client.callsTurnKeys.update('keyId', {
   *   account_id: {},
   *   body: {},
   * });
   * ```
   */
  update(keyID: string, params: CallsTurnKeyUpdateParams, options?: RequestOptions): APIPromise<unknown> {
    const { account_id, body } = params;
    return this._client.put(__scalarPath`/accounts/${account_id}/calls/turn_keys/${keyID}`, {
      body,
      ...options,
    });
  }
}

export type CallsTurnKeyCreateParams = unknown;

export interface CallsTurnKeyDeleteParams {
  account_id: string;
}

export interface CallsTurnKeyRetrieveDetailsParams {
  account_id: string;
}

export interface CallsTurnKeyUpdateParams {
  /**
   * Path param
   */
  account_id: string;
  /**
   * Body param
   */
  body: unknown;
}
export declare namespace CallsTurnKeys {
  export {
    type CallsTurnKeyCreateParams as CallsTurnKeyCreateParams,
    type CallsTurnKeyDeleteParams as CallsTurnKeyDeleteParams,
    type CallsTurnKeyRetrieveDetailsParams as CallsTurnKeyRetrieveDetailsParams,
    type CallsTurnKeyUpdateParams as CallsTurnKeyUpdateParams,
  };
}
