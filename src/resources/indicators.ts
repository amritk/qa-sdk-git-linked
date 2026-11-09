// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from '../resource';
import { APIPromise } from '../api-promise';
import type { RequestOptions } from '../internal/request-options';
import { path as __scalarPath } from '../internal/utils/path';

export class Indicators extends APIResource {
  /**
   * Creates a new indicator type and initializes its dedicated Durable Object
   *
   * @param {string} datasetID - Dataset ID.
   * @param {IndicatorCreateParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<IndicatorCreateResponse>} Indicator type created successfully
   *
   * @example
   * ```ts
   * const indicator = await client.indicators.create('datasetId', {
   *   account_id: 'accountId',
   *   indicatorType: 'x',
   * });
   * ```
   */
  create(
    datasetID: string,
    params: IndicatorCreateParams,
    options?: RequestOptions,
  ): APIPromise<IndicatorCreateResponse> {
    const { account_id, ...body } = params;
    return this._client.post(
      __scalarPath`/accounts/${account_id}/cloudforce-one/events/dataset/${datasetID}/indicatorTypes/create`,
      { body, ...options },
    );
  }
}

export interface IndicatorCreateParams {
  /**
   * Path param: Account ID.
   */
  account_id: string;
  /**
   * Body param: Optional description for the indicator type
   */
  description?: string;
  /**
   * Body param: The indicator type to create (e.g., 'DOMAIN', 'IP', 'URL', 'HASH', 'EMAIL')
   * @minLength 1
   * @maxLength 50
   */
  indicatorType: string;
}

export interface IndicatorCreateResponse {
  durableObjectId: string;
  indicatorType: string;
  message: string;
}
export declare namespace Indicators {
  export {
    type IndicatorCreateResponse as IndicatorCreateResponse,
    type IndicatorCreateParams as IndicatorCreateParams,
  };
}
