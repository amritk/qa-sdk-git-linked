// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from '../resource';
import { APIPromise } from '../api-promise';
import type { RequestOptions } from '../internal/request-options';
import { path as __scalarPath } from '../internal/utils/path';

export class Approvals extends APIResource {
  /**
   * Returns rule approvals with optional status, revision, reviewer-scope, and mutation-type filtering.
   *
   * @param {string} accountID
   * @param {ApprovalCloudforceOneListRuleParams} [query] - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<unknown>} List of approvals.
   *
   * @example
   * ```ts
   * const response = await client.approvals.cloudforceOneListRule('accountId', {
   *   status: 'pending',
   *   latest_only: 'false',
   *   limit: 50,
   *   offset: 0,
   * });
   * ```
   */
  cloudforceOneListRule(
    accountID: string,
    query: ApprovalCloudforceOneListRuleParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<unknown> {
    return this._client.get(__scalarPath`/accounts/${accountID}/cloudforce-one/rules/approvals`, {
      query,
      ...options,
    });
  }

  /**
   * Get a single rule approval with current rule data.
   *
   * @param {string} id - The unique identifier for the approval.
   * @param {ApprovalCloudforceOneGetRuleParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<unknown>} Approval details.
   *
   * @example
   * ```ts
   * const response = await client.approvals.cloudforceOneGetRule('1', {
   *   account_id: 'accountId',
   * });
   * ```
   */
  cloudforceOneGetRule(
    id: string,
    params: ApprovalCloudforceOneGetRuleParams,
    options?: RequestOptions,
  ): APIPromise<unknown> {
    const { account_id } = params;
    return this._client.get(
      __scalarPath`/accounts/${account_id}/cloudforce-one/rules/approvals/${id}`,
      options,
    );
  }

  /**
   * Cancel a pending rule approval. Only its original requester may cancel it.
   *
   * @param {string} id - The unique identifier for the approval.
   * @param {ApprovalCloudforceOneCancelRuleParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<unknown>} Approval cancelled
   *
   * @example
   * ```ts
   * const response = await client.approvals.cloudforceOneCancelRule('1', {
   *   account_id: 'accountId',
   * });
   * ```
   */
  cloudforceOneCancelRule(
    id: string,
    params: ApprovalCloudforceOneCancelRuleParams,
    options?: RequestOptions,
  ): APIPromise<unknown> {
    const { account_id } = params;
    return this._client.post(
      __scalarPath`/accounts/${account_id}/cloudforce-one/rules/approvals/${id}/cancel`,
      options,
    );
  }

  /**
   * Create a new pending revision from a rejected rule approval. Only the original requester may resubmit the latest revision.
   *
   * @param {string} id - The unique identifier for the approval.
   * @param {ApprovalCloudforceOneResubmitRuleParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<unknown>} New approval revision submitted.
   *
   * @example
   * ```ts
   * const response = await client.approvals.cloudforceOneResubmitRule('1', {
   *   account_id: 'accountId',
   * });
   * ```
   */
  cloudforceOneResubmitRule(
    id: string,
    params: ApprovalCloudforceOneResubmitRuleParams,
    options?: RequestOptions,
  ): APIPromise<unknown> {
    const { account_id, body } = params;
    return this._client.post(
      __scalarPath`/accounts/${account_id}/cloudforce-one/rules/approvals/${id}/resubmit`,
      { body, ...options },
    );
  }
}

export interface ApprovalCloudforceOneListRuleParams {
  /**
   * Selects approval statuses. Repeat the parameter to OR-match statuses (for example, status=pending&status=rejected). Use status=all alone to disable status filtering.
   * @default pending
   */
  status?:
    | 'pending'
    | 'approved'
    | 'rejected'
    | 'cancelled'
    | 'all'
    | Array<'pending' | 'approved' | 'rejected' | 'cancelled' | 'all'>;
  /**
   * When true, returns the newest revision in each approval chain.
   * @default false
   */
  latest_only?: 'true' | 'false';
  /**
   * @default 50
   * @minimum 1
   * @maximum 100
   */
  limit?: number;
  /**
   * @default 0
   * @minimum 0
   */
  offset?: number | null;
  /**
   * Limits approvals to the specified reviewer scope.
   */
  reviewer_scope?: 'default' | 'email' | 'unresolved';
  /**
   * Limits approvals to the specified mutation type.
   */
  change_type?: 'create' | 'update' | 'delete';
  /**
   * Filter approvals by rule ID.
   * @format uuid
   */
  rule_id?: string;
}

export interface ApprovalCloudforceOneGetRuleParams {
  account_id: string;
}

export interface ApprovalCloudforceOneCancelRuleParams {
  account_id: string;
}

export interface ApprovalCloudforceOneResubmitRuleParams {
  /**
   * Path param
   */
  account_id: string;
  /**
   * Body param
   */
  body?: unknown;
}
export declare namespace Approvals {
  export {
    type ApprovalCloudforceOneListRuleParams as ApprovalCloudforceOneListRuleParams,
    type ApprovalCloudforceOneGetRuleParams as ApprovalCloudforceOneGetRuleParams,
    type ApprovalCloudforceOneCancelRuleParams as ApprovalCloudforceOneCancelRuleParams,
    type ApprovalCloudforceOneResubmitRuleParams as ApprovalCloudforceOneResubmitRuleParams,
  };
}
