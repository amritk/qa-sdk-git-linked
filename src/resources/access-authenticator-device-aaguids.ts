// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from '../resource';
import { APIPromise } from '../api-promise';
import type { RequestOptions } from '../internal/request-options';
import { path as __scalarPath } from '../internal/utils/path';

export class AccessAuthenticatorDeviceAaguids extends APIResource {
  /**
   * Returns a list of Authenticator Device AAGUIDs for MFA configuration.
   *
   * @param {string} accountID
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<unknown>} List authenticator device AAGUIDs response
   *
   * @example
   * ```ts
   * const response = await client.accessAuthenticatorDeviceAaguids.list('accountId');
   * ```
   */
  list(accountID: string, options?: RequestOptions): APIPromise<unknown> {
    return this._client.get(
      __scalarPath`/accounts/${accountID}/access/authenticator_device_aaguids`,
      options,
    );
  }
}
