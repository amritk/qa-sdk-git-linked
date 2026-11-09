// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from '../resource';
import { APIPromise } from '../api-promise';
import type { RequestOptions } from '../internal/request-options';
import { path as __scalarPath } from '../internal/utils/path';

export class DlsRegionalServices extends APIResource {
  /**
   * List all Regional Services regions available for use by this account.
   *
   * @param {string} accountID
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<DlsRegionalServiceAccountHostnamesListRegionsResponse>} List regions response
   *
   * @example
   * ```ts
   * const dlsRegionalService = await client.dlsRegionalServices.accountHostnamesListRegions('accountId');
   * ```
   */
  accountHostnamesListRegions(
    accountID: string,
    options?: RequestOptions,
  ): APIPromise<DlsRegionalServiceAccountHostnamesListRegionsResponse> {
    return this._client.get(
      __scalarPath`/accounts/${accountID}/addressing/regional_hostnames/regions`,
      options,
    );
  }
}

export type DlsRegionalServiceAccountHostnamesListRegionsResponse = unknown &
  DlsRegionalServiceAccountHostnamesListRegionsResponse.DlsRegionalServiceAccountHostnamesListRegionsResponseItem;

export namespace DlsRegionalServiceAccountHostnamesListRegionsResponse {
  export interface DlsRegionalServiceAccountHostnamesListRegionsResponseItem {
    result?: Array<DlsRegionalServiceAccountHostnamesListRegionsResponseItem.Result>;
  }

  export namespace DlsRegionalServiceAccountHostnamesListRegionsResponseItem {
    export interface Result {
      key?: unknown;
      /**
       * Human-readable text label for the region
       */
      label?: string;
    }
  }
}
export declare namespace DlsRegionalServices {
  export {
    type DlsRegionalServiceAccountHostnamesListRegionsResponse as DlsRegionalServiceAccountHostnamesListRegionsResponse,
  };
}
