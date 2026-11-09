// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from '../resource';
import { APIPromise } from '../api-promise';
import type { RequestOptions } from '../internal/request-options';
import { path as __scalarPath } from '../internal/utils/path';

export class ZeroTrustSeats extends APIResource {
  /**
   * Removes a user from a Zero Trust seat when both `access_seat` and `gateway_seat` are set to false.
   *
   * @param {string} accountID
   * @param {ZeroTrustSeatUpdateAUserParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<unknown>} Update a user seat response
   *
   * @example
   * ```ts
   * const response = await client.zeroTrustSeats.updateAUser('accountId', {});
   * ```
   */
  updateAUser(
    accountID: string,
    body: ZeroTrustSeatUpdateAUserParams,
    options?: RequestOptions,
  ): APIPromise<unknown> {
    return this._client.patch(__scalarPath`/accounts/${accountID}/access/seats`, { body, ...options });
  }
}

export type ZeroTrustSeatUpdateAUserParams = unknown;
export declare namespace ZeroTrustSeats {
  export { type ZeroTrustSeatUpdateAUserParams as ZeroTrustSeatUpdateAUserParams };
}
