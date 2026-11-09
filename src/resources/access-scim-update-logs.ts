// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from '../resource';
import { APIPromise } from '../api-promise';
import type { RequestOptions } from '../internal/request-options';
import { path as __scalarPath } from '../internal/utils/path';

export class AccessScimUpdateLogs extends APIResource {
  /**
   * Lists Access SCIM update logs that maintain a record of updates made to User and Group resources synced to Cloudflare via the System for Cross-domain Identity Management (SCIM).
   *
   * @param {string} accountID
   * @param {AccessScimUpdateLogListParams} query - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<unknown>} Get Access SCIM update logs response
   *
   * @example
   * ```ts
   * const response = await client.accessScimUpdateLogs.list('accountId', {
   *   idp_id: {},
   *   per_page: 20,
   * });
   * ```
   */
  list(
    accountID: string,
    query: AccessScimUpdateLogListParams,
    options?: RequestOptions,
  ): APIPromise<unknown> {
    return this._client.get(__scalarPath`/accounts/${accountID}/access/logs/scim/updates`, {
      query,
      ...options,
    });
  }
}

export interface AccessScimUpdateLogListParams {
  limit?: unknown;
  direction?: unknown;
  since?: unknown;
  until?: unknown;
  idp_id: unknown;
  status?: unknown;
  resource_type?: unknown;
  request_method?: unknown;
  resource_user_email?: unknown;
  resource_group_name?: unknown;
  cf_resource_id?: unknown;
  idp_resource_id?: unknown;
  /**
   * Number of results per page.
   * @default 20
   * @maximum 1000
   */
  per_page?: number;
}
export declare namespace AccessScimUpdateLogs {
  export { type AccessScimUpdateLogListParams as AccessScimUpdateLogListParams };
}
