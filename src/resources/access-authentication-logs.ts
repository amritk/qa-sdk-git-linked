// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from '../resource';
import { APIPromise } from '../api-promise';
import type { RequestOptions } from '../internal/request-options';
import { path as __scalarPath } from '../internal/utils/path';

export class AccessAuthenticationLogs extends APIResource {
  /**
   * Gets a list of Access authentication audit logs for an account.
   *
   * @param {string} accountID
   * @param {AccessAuthenticationLogListParams} [query] - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<unknown>} Get Access authentication logs response
   *
   * @example
   * ```ts
   * const response = await client.accessAuthenticationLogs.list('accountId', {
   *   limit: 25,
   *   direction: 'desc',
   *   per_page: 25,
   *   email_exact: false,
   *   allowedOp: 'eq',
   *   country_codeOp: 'eq',
   *   app_typeOp: 'eq',
   *   app_uidOp: 'eq',
   *   ray_idOp: 'eq',
   *   emailOp: 'eq',
   *   idpOp: 'eq',
   *   non_identityOp: 'eq',
   *   user_idOp: 'eq',
   * });
   * ```
   */
  list(
    accountID: string,
    query: AccessAuthenticationLogListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<unknown> {
    return this._client.get(__scalarPath`/accounts/${accountID}/access/logs/access_requests`, {
      query,
      ...options,
    });
  }
}

export interface AccessAuthenticationLogListParams {
  /**
   * The maximum number of log entries to retrieve.
   * @default 25
   */
  limit?: number;
  /**
   * The chronological sorting order for the logs.
   * @default desc
   */
  direction?: 'desc' | 'asc';
  /**
   * The earliest event timestamp to query.
   * @format date-time
   */
  since?: string;
  /**
   * The latest event timestamp to query.
   * @format date-time
   */
  until?: string;
  /**
   * Number of results per page.
   * @default 25
   */
  per_page?: number;
  /**
   * Filter by user email. Match mode is controlled by `emailOp` (preferred) or the legacy `email_exact` flag.
   * - Default (no `emailOp`, `email_exact=false` or unset): substring match — `email=@example.com` returns all events with that domain.
   * - Exact match: set `emailOp=eq` (preferred) or `email_exact=true` — e.g. `email=user@example.com&email_exact=true` returns only that user.
   * - Explicit substring match: set `emailOp=contains` (without `email_exact=true`). When both are set, `email_exact=true` takes precedence and the match is exact.
   * - Exclusion: set `emailOp=neq`. With `email_exact=true` this is an exact-value exclusion; without it, a fuzzy substring exclusion.
   */
  email?: unknown;
  /**
   * When true, `email` is matched exactly instead of substring matching.
   * @default false
   */
  email_exact?: boolean;
  /**
   * Deprecated. Accepted for backward compatibility but no longer applied
   * as a filter. Use `email` instead.
   */
  user_id?: unknown;
  /**
   * Operator for the `allowed` filter.
   * @default eq
   */
  allowedOp?: 'eq' | 'neq';
  /**
   * Operator for the `country_code` filter.
   * @default eq
   */
  country_codeOp?: 'eq' | 'neq';
  /**
   * Operator for the `app_type` filter.
   * @default eq
   */
  app_typeOp?: 'eq' | 'neq';
  /**
   * Operator for the `app_uid` filter.
   * @default eq
   */
  app_uidOp?: 'eq' | 'neq';
  /**
   * Operator for the `ray_id` filter.
   * @default eq
   */
  ray_idOp?: 'eq' | 'neq';
  /**
   * Operator for the `email` filter.
   * `contains` performs a substring (case-sensitive) match. When `email_exact=true`
   * is also set, `email_exact` takes precedence and `contains` is ignored.
   *
   * @default eq
   */
  emailOp?: 'eq' | 'neq' | 'contains';
  /**
   * Operator for the `idp` filter.
   * @default eq
   */
  idpOp?: 'eq' | 'neq';
  /**
   * Operator for the `non_identity` filter.
   * @default eq
   */
  non_identityOp?: 'eq' | 'neq';
  /**
   * Deprecated. Accepted for backward compatibility but no longer applied
   * as a filter (the `user_id` parameter is itself deprecated).
   *
   * @default eq
   */
  user_idOp?: 'eq' | 'neq';
  /**
   * Comma-separated list of fields to include in the response.
   * When omitted, all fields are returned.
   */
  fields?: string;
}
export declare namespace AccessAuthenticationLogs {
  export { type AccessAuthenticationLogListParams as AccessAuthenticationLogListParams };
}
