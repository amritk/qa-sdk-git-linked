// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from '../resource';
import { APIPromise } from '../api-promise';
import type { RequestOptions } from '../internal/request-options';
import { path as __scalarPath } from '../internal/utils/path';

export class GatewayCa extends APIResource {
  /**
   * Lists SSH Certificate Authorities (CA).
   *
   * @param {string} accountID
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<unknown>} List SSH Certificate Authorities (CA) response
   *
   * @example
   * ```ts
   * const response = await client.gatewayCa.accessListSSH('accountId');
   * ```
   */
  accessListSSH(accountID: string, options?: RequestOptions): APIPromise<unknown> {
    return this._client.get(__scalarPath`/accounts/${accountID}/access/gateway_ca`, options);
  }

  /**
   * Adds a new SSH Certificate Authority (CA).
   *
   * @param {string} accountID
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<unknown>} Add a new SSH Certificate Authority (CA) response
   *
   * @example
   * ```ts
   * const response = await client.gatewayCa.accessAddAnSSH('accountId');
   * ```
   */
  accessAddAnSSH(accountID: string, options?: RequestOptions): APIPromise<unknown> {
    return this._client.post(__scalarPath`/accounts/${accountID}/access/gateway_ca`, options);
  }

  /**
   * Deletes an SSH Certificate Authority.
   *
   * @param {string} certificateID
   * @param {GatewayCaAccessDeleteAnSSHParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<unknown>} Delete an SSH Certificate Authority (CA) response
   *
   * @example
   * ```ts
   * const response = await client.gatewayCa.accessDeleteAnSSH('certificateId', {
   *   account_id: {},
   * });
   * ```
   */
  accessDeleteAnSSH(
    certificateID: string,
    params: GatewayCaAccessDeleteAnSSHParams,
    options?: RequestOptions,
  ): APIPromise<unknown> {
    const { account_id } = params;
    return this._client.delete(
      __scalarPath`/accounts/${account_id}/access/gateway_ca/${certificateID}`,
      options,
    );
  }
}

export interface GatewayCaAccessDeleteAnSSHParams {
  account_id: string;
}
export declare namespace GatewayCa {
  export { type GatewayCaAccessDeleteAnSSHParams as GatewayCaAccessDeleteAnSSHParams };
}
