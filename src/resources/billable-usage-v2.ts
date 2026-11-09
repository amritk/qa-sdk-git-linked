// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from '../resource';
import { APIPromise } from '../api-promise';
import type { RequestOptions } from '../internal/request-options';
import { path as __scalarPath } from '../internal/utils/path';

export class BillableUsageV2 extends APIResource {
  /**
   * Returns cost and usage data for a single Cloudflare account, aligned
   * with the [FinOps FOCUS v1.3](https://focus.finops.org/focus-specification/v1-3/)
   * Cost and Usage dataset specification.
   *
   * Each record represents one billable metric for one account on one day.
   * This includes all metered usage, including usage that falls within
   * free-tier allowances and may result in zero cost.
   *
   * **Note:** Cost and pricing fields are not yet populated and
   * will be absent from responses until billing integration is complete.
   *
   * When `from` and `to` are omitted, defaults to the start of the current
   * month through today. The maximum date range is 31 days.
   *
   *
   * @param {string} accountID
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<unknown>} Account usage data was successfully retrieved.
   *
   * @example
   * ```ts
   * const response = await client.billableUsageV2.listAccount('accountId');
   * ```
   */
  listAccount(accountID: string, options?: RequestOptions): APIPromise<unknown> {
    return this._client.get(__scalarPath`/accounts/${accountID}/billable/usage`, options);
  }

  /**
   * Returns cost and usage data for a single Cloudflare account, aligned
   * with the [FinOps FOCUS v1.3](https://focus.finops.org/focus-specification/v1-3/)
   * Cost and Usage dataset specification.
   *
   * This is the filterable counterpart to `GET` on the same path. It is a
   * read-only operation and requires only the `#billing:read` permission;
   * `POST` is used so that filter criteria can be supplied in a request body
   * rather than in the query string.
   *
   * Each record represents one billable metric for one account on one day.
   * This includes all metered usage, including usage that falls within
   * free-tier allowances and may result in zero cost.
   *
   * **Note:** Cost and pricing fields are not yet populated and
   * will be absent from responses until billing integration is complete.
   *
   * The request body is optional. When it is omitted, or when `TimePeriod`
   * is omitted, the range defaults to the start of the current month through
   * today. The maximum date range is 31 days.
   *
   * Filters of different kinds are combined with AND. Values within one tag
   * filter are combined with OR. Filter values that do not match usage
   * produce an empty result set.
   *
   * Results can be grouped by up to two customer resource-tag keys. Grouped
   * values are returned in the `Tags` field. Usage without a requested tag
   * remains in an untagged group, with that key omitted from `Tags`.
   *
   * Requests using tag filtering or grouping return HTTP 400 when tag-aware
   * usage data is unavailable.
   *
   *
   * @param {string} accountID
   * @param {BillableUsageV2QueryAccountParams} [body] - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<unknown>} Account usage data was successfully retrieved.
   *
   * @example
   * ```ts
   * const response = await client.billableUsageV2.queryAccount('accountId');
   * ```
   */
  queryAccount(
    accountID: string,
    body: BillableUsageV2QueryAccountParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<unknown> {
    return this._client.post(__scalarPath`/accounts/${accountID}/billable/usage`, { body, ...options });
  }
}

export type BillableUsageV2QueryAccountParams = unknown;
export declare namespace BillableUsageV2 {
  export { type BillableUsageV2QueryAccountParams as BillableUsageV2QueryAccountParams };
}
