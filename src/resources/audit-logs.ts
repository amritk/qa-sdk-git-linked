// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from '../resource';
import { APIPromise } from '../api-promise';
import type { RequestOptions } from '../internal/request-options';
import { path as __scalarPath } from '../internal/utils/path';

export class AuditLogs extends APIResource {
  /**
   * Gets a list of audit logs for an account. Can be filtered by who made the change, on which zone, and the timeframe of the change.
   *
   * @param {string} accountID
   * @param {AuditLogListAccountParams} [query] - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<unknown>} Get account audit logs response
   *
   * @example
   * ```ts
   * const response = await client.auditLogs.listAccount('accountId', {
   *   direction: 'desc',
   *   per_page: 100,
   *   page: 1,
   *   hide_user_logs: false,
   * });
   * ```
   */
  listAccount(
    accountID: string,
    query: AuditLogListAccountParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<unknown> {
    return this._client.get(__scalarPath`/accounts/${accountID}/audit_logs`, { query, ...options });
  }
}

export interface AuditLogListAccountParams {
  /**
   * Finds a specific log by its ID.
   */
  id?: string;
  /**
   * Indicates that this request is an export of logs in CSV format.
   */
  export?: boolean;
  /**
   * Filters by the action type.
   */
  'action.type'?: string;
  /**
   * Filters by the IP address of the request that made the change by specific IP address or valid CIDR Range.
   */
  'actor.ip'?: string;
  /**
   * Filters by the email address of the actor that made the change.
   * @format email
   */
  'actor.email'?: string;
  since?: string;
  before?: string;
  /**
   * Filters by the name of the zone associated to the change.
   */
  'zone.name'?: string;
  /**
   * Changes the direction of the chronological sorting.
   * @default desc
   */
  direction?: 'desc' | 'asc';
  /**
   * Sets the number of results to return per page.
   * @default 100
   * @minimum 1
   * @maximum 1000
   */
  per_page?: number;
  /**
   * Defines which page of results to return.
   * @default 1
   * @minimum 1
   */
  page?: number;
  /**
   * Indicates whether or not to hide user level audit logs.
   * @default false
   */
  hide_user_logs?: boolean;
}
export declare namespace AuditLogs {
  export { type AuditLogListAccountParams as AuditLogListAccountParams };
}
