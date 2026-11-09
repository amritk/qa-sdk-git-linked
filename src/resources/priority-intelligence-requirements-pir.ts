// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from '../resource';
import { APIPromise } from '../api-promise';
import type { RequestOptions } from '../internal/request-options';
import { path as __scalarPath } from '../internal/utils/path';

export class PriorityIntelligenceRequirementsPir extends APIResource {
  /**
   * Lists priority intelligence requests in Cloudforce One.
   *
   * @param {string} accountID
   * @param {PriorityIntelligenceRequirementsPirCloudforceOneListParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<PriorityIntelligenceRequirementsPirCloudforceOneListResponse>} List priorities response.
   *
   * @example
   * ```ts
   * const priorityIntelligenceRequirementsPir =
   *   await client.priorityIntelligenceRequirementsPir.cloudforceOneList('accountId', {});
   * ```
   */
  cloudforceOneList(
    accountID: string,
    body: PriorityIntelligenceRequirementsPirCloudforceOneListParams,
    options?: RequestOptions,
  ): APIPromise<PriorityIntelligenceRequirementsPirCloudforceOneListResponse> {
    return this._client.post(__scalarPath`/accounts/${accountID}/cloudforce-one/requests/priority`, {
      body,
      ...options,
    });
  }

  /**
   * Creates a new priority intelligence request in Cloudforce One.
   *
   * @param {string} accountID
   * @param {PriorityIntelligenceRequirementsPirCloudforceOneNewParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<PriorityIntelligenceRequirementsPirCloudforceOneNewResponse>} Create priority response.
   *
   * @example
   * ```ts
   * const priorityIntelligenceRequirementsPir = await client.priorityIntelligenceRequirementsPir.cloudforceOneNew(
   *   'accountId',
   *   {},
   * );
   * ```
   */
  cloudforceOneNew(
    accountID: string,
    body: PriorityIntelligenceRequirementsPirCloudforceOneNewParams,
    options?: RequestOptions,
  ): APIPromise<PriorityIntelligenceRequirementsPirCloudforceOneNewResponse> {
    return this._client.post(__scalarPath`/accounts/${accountID}/cloudforce-one/requests/priority/new`, {
      body,
      ...options,
    });
  }

  /**
   * Retrieves quota usage for Cloudforce One priority requests.
   *
   * @param {string} accountID
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<PriorityIntelligenceRequirementsPirCloudforceOneQuotaResponse>} Get priority quota response.
   *
   * @example
   * ```ts
   * const priorityIntelligenceRequirementsPir =
   *   await client.priorityIntelligenceRequirementsPir.cloudforceOneQuota('accountId');
   * ```
   */
  cloudforceOneQuota(
    accountID: string,
    options?: RequestOptions,
  ): APIPromise<PriorityIntelligenceRequirementsPirCloudforceOneQuotaResponse> {
    return this._client.get(
      __scalarPath`/accounts/${accountID}/cloudforce-one/requests/priority/quota`,
      options,
    );
  }

  /**
   * Deletes a priority intelligence request from Cloudforce One.
   *
   * @param {string} priorityID
   * @param {PriorityIntelligenceRequirementsPirCloudforceOneDeleteParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<unknown>} Delete priority response.
   *
   * @example
   * ```ts
   * const response = await client.priorityIntelligenceRequirementsPir.cloudforceOneDelete('priorityId', {
   *   account_id: {},
   * });
   * ```
   */
  cloudforceOneDelete(
    priorityID: string,
    params: PriorityIntelligenceRequirementsPirCloudforceOneDeleteParams,
    options?: RequestOptions,
  ): APIPromise<unknown> {
    const { account_id } = params;
    return this._client.delete(
      __scalarPath`/accounts/${account_id}/cloudforce-one/requests/priority/${priorityID}`,
      options,
    );
  }

  /**
   * Retrieves a specific priority intelligence request from Cloudforce One.
   *
   * @param {string} priorityID
   * @param {PriorityIntelligenceRequirementsPirCloudforceOneGetParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<PriorityIntelligenceRequirementsPirCloudforceOneGetResponse>} Get priority response.
   *
   * @example
   * ```ts
   * const priorityIntelligenceRequirementsPir = await client.priorityIntelligenceRequirementsPir.cloudforceOneGet(
   *   'priorityId',
   *   {
   *     account_id: {},
   *   },
   * );
   * ```
   */
  cloudforceOneGet(
    priorityID: string,
    params: PriorityIntelligenceRequirementsPirCloudforceOneGetParams,
    options?: RequestOptions,
  ): APIPromise<PriorityIntelligenceRequirementsPirCloudforceOneGetResponse> {
    const { account_id } = params;
    return this._client.get(
      __scalarPath`/accounts/${account_id}/cloudforce-one/requests/priority/${priorityID}`,
      options,
    );
  }

  /**
   * Updates a priority intelligence request in Cloudforce One.
   *
   * @param {string} priorityID
   * @param {PriorityIntelligenceRequirementsPirCloudforceOneUpdateParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<PriorityIntelligenceRequirementsPirCloudforceOneUpdateResponse>} Update priority response.
   *
   * @example
   * ```ts
   * const priorityIntelligenceRequirementsPir =
   *   await client.priorityIntelligenceRequirementsPir.cloudforceOneUpdate('priorityId', {
   *     account_id: {},
   *     body: {},
   *   });
   * ```
   */
  cloudforceOneUpdate(
    priorityID: string,
    params: PriorityIntelligenceRequirementsPirCloudforceOneUpdateParams,
    options?: RequestOptions,
  ): APIPromise<PriorityIntelligenceRequirementsPirCloudforceOneUpdateResponse> {
    const { account_id, body } = params;
    return this._client.put(
      __scalarPath`/accounts/${account_id}/cloudforce-one/requests/priority/${priorityID}`,
      { body, ...options },
    );
  }
}

export type PriorityIntelligenceRequirementsPirCloudforceOneListParams = unknown;

export type PriorityIntelligenceRequirementsPirCloudforceOneListResponse = unknown &
  PriorityIntelligenceRequirementsPirCloudforceOneListResponse.PriorityIntelligenceRequirementsPirCloudforceOneListResponseItem;

export namespace PriorityIntelligenceRequirementsPirCloudforceOneListResponse {
  export interface PriorityIntelligenceRequirementsPirCloudforceOneListResponseItem {
    result?: Array<unknown>;
  }
}

export type PriorityIntelligenceRequirementsPirCloudforceOneNewParams = unknown;

export type PriorityIntelligenceRequirementsPirCloudforceOneNewResponse = unknown &
  PriorityIntelligenceRequirementsPirCloudforceOneNewResponse.PriorityIntelligenceRequirementsPirCloudforceOneNewResponseItem;

export namespace PriorityIntelligenceRequirementsPirCloudforceOneNewResponse {
  export interface PriorityIntelligenceRequirementsPirCloudforceOneNewResponseItem {
    result?: unknown;
  }
}

export type PriorityIntelligenceRequirementsPirCloudforceOneQuotaResponse = unknown &
  PriorityIntelligenceRequirementsPirCloudforceOneQuotaResponse.PriorityIntelligenceRequirementsPirCloudforceOneQuotaResponseItem;

export namespace PriorityIntelligenceRequirementsPirCloudforceOneQuotaResponse {
  export interface PriorityIntelligenceRequirementsPirCloudforceOneQuotaResponseItem {
    result?: unknown;
  }
}

export interface PriorityIntelligenceRequirementsPirCloudforceOneDeleteParams {
  account_id: string;
}

export interface PriorityIntelligenceRequirementsPirCloudforceOneGetParams {
  account_id: string;
}

export type PriorityIntelligenceRequirementsPirCloudforceOneGetResponse = unknown &
  PriorityIntelligenceRequirementsPirCloudforceOneGetResponse.PriorityIntelligenceRequirementsPirCloudforceOneGetResponseItem;

export namespace PriorityIntelligenceRequirementsPirCloudforceOneGetResponse {
  export interface PriorityIntelligenceRequirementsPirCloudforceOneGetResponseItem {
    result?: unknown;
  }
}

export interface PriorityIntelligenceRequirementsPirCloudforceOneUpdateParams {
  /**
   * Path param
   */
  account_id: string;
  /**
   * Body param
   */
  body: unknown;
}

export type PriorityIntelligenceRequirementsPirCloudforceOneUpdateResponse = unknown &
  PriorityIntelligenceRequirementsPirCloudforceOneUpdateResponse.PriorityIntelligenceRequirementsPirCloudforceOneUpdateResponseItem;

export namespace PriorityIntelligenceRequirementsPirCloudforceOneUpdateResponse {
  export interface PriorityIntelligenceRequirementsPirCloudforceOneUpdateResponseItem {
    result?: unknown;
  }
}
export declare namespace PriorityIntelligenceRequirementsPir {
  export {
    type PriorityIntelligenceRequirementsPirCloudforceOneListResponse as PriorityIntelligenceRequirementsPirCloudforceOneListResponse,
    type PriorityIntelligenceRequirementsPirCloudforceOneNewResponse as PriorityIntelligenceRequirementsPirCloudforceOneNewResponse,
    type PriorityIntelligenceRequirementsPirCloudforceOneQuotaResponse as PriorityIntelligenceRequirementsPirCloudforceOneQuotaResponse,
    type PriorityIntelligenceRequirementsPirCloudforceOneGetResponse as PriorityIntelligenceRequirementsPirCloudforceOneGetResponse,
    type PriorityIntelligenceRequirementsPirCloudforceOneUpdateResponse as PriorityIntelligenceRequirementsPirCloudforceOneUpdateResponse,
    type PriorityIntelligenceRequirementsPirCloudforceOneListParams as PriorityIntelligenceRequirementsPirCloudforceOneListParams,
    type PriorityIntelligenceRequirementsPirCloudforceOneNewParams as PriorityIntelligenceRequirementsPirCloudforceOneNewParams,
    type PriorityIntelligenceRequirementsPirCloudforceOneDeleteParams as PriorityIntelligenceRequirementsPirCloudforceOneDeleteParams,
    type PriorityIntelligenceRequirementsPirCloudforceOneGetParams as PriorityIntelligenceRequirementsPirCloudforceOneGetParams,
    type PriorityIntelligenceRequirementsPirCloudforceOneUpdateParams as PriorityIntelligenceRequirementsPirCloudforceOneUpdateParams,
  };
}
