// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from '../resource';
import { APIPromise } from '../api-promise';
import type { RequestOptions } from '../internal/request-options';
import { path as __scalarPath } from '../internal/utils/path';

export class Country extends APIResource {
  /**
   * Lists countries referenced in Cloudforce One threat intelligence data.
   *
   * @param {string} accountID - Account ID.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<CountryListReadResponse>} Returns the long and short country code for every country.
   *
   * @example
   * ```ts
   * const country = await client.country.listRead('accountId');
   * ```
   */
  listRead(accountID: string, options?: RequestOptions): APIPromise<CountryListReadResponse> {
    return this._client.get(__scalarPath`/accounts/${accountID}/cloudforce-one/events/countries`, options);
  }
}

export type CountryListReadResponse = Array<CountryListReadResponse.CountryListReadResponseItem>;

export namespace CountryListReadResponse {
  export interface CountryListReadResponseItem {
    result: Array<CountryListReadResponseItem.Result>;
    success: string;
  }

  export namespace CountryListReadResponseItem {
    export interface Result {
      alpha2: string;
      alpha3: string;
      name: string;
    }
  }
}
export declare namespace Country {
  export { type CountryListReadResponse as CountryListReadResponse };
}
