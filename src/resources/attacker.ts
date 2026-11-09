// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from '../resource';
import { APIPromise } from '../api-promise';
import type { RequestOptions } from '../internal/request-options';
import { path as __scalarPath } from '../internal/utils/path';

export class Attacker extends APIResource {
  /**
   * Lists known threat attackers tracked in Cloudforce One threat intelligence.
   *
   * @param {string} accountID - Account ID.
   * @param {AttackerListListParams} [query] - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<AttackerListListResponse>} Returns a list of attackers.
   *
   * @example
   * ```ts
   * const attacker = await client.attacker.listList('accountId');
   * ```
   */
  listList(
    accountID: string,
    query: AttackerListListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AttackerListListResponse> {
    return this._client.get(__scalarPath`/accounts/${accountID}/cloudforce-one/events/attackers`, {
      query,
      ...options,
    });
  }
}

export interface AttackerListListParams {
  /**
   * Array of dataset IDs to query attackers from. If not provided, uses the default dataset.
   */
  datasetIds?: Array<string>;
}

export interface AttackerListListResponse {
  items: AttackerListListResponse.Items;
  type: string;
}

export namespace AttackerListListResponse {
  export interface Items {
    type: string;
  }
}
export declare namespace Attacker {
  export {
    type AttackerListListResponse as AttackerListListResponse,
    type AttackerListListParams as AttackerListListParams,
  };
}
