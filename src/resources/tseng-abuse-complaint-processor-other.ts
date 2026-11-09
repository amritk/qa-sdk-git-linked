// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from '../resource';
import { APIPromise } from '../api-promise';
import type { RequestOptions } from '../internal/request-options';
import { path as __scalarPath } from '../internal/utils/path';

export class TsengAbuseComplaintProcessorOther extends APIResource {
  /**
   * List the abuse reports for a given account
   *
   * @param {string} accountID - Cloudflare Account ID
   * @param {TsengAbuseComplaintProcessorOtherListReportsParams} [query] - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<TsengAbuseComplaintProcessorOtherListReportsResponse>} Abuse report list successful
   *
   * @example
   * ```ts
   * const tsengAbuseComplaintProcessorOther = await client.tsengAbuseComplaintProcessorOther.listReports(
   *   '023e105f4ecef8ad9ca31a8372d0c353',
   * );
   * ```
   */
  listReports(
    accountID: string,
    query: TsengAbuseComplaintProcessorOtherListReportsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<TsengAbuseComplaintProcessorOtherListReportsResponse> {
    return this._client.get(__scalarPath`/accounts/${accountID}/abuse-reports`, { query, ...options });
  }

  /**
   * List abuse reports submitted by the account.
   *
   * @param {string} accountID - Cloudflare Account ID
   * @param {TsengAbuseComplaintProcessorOtherListSubmittedReportsParams} [query] - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<unknown>} Submitted abuse reports listed successfully.
   *
   * @example
   * ```ts
   * const response = await client.tsengAbuseComplaintProcessorOther.listSubmittedReports(
   *   '023e105f4ecef8ad9ca31a8372d0c353',
   *   {
   *     page: 1,
   *     per_page: 100,
   *   },
   * );
   * ```
   */
  listSubmittedReports(
    accountID: string,
    query: TsengAbuseComplaintProcessorOtherListSubmittedReportsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<unknown> {
    return this._client.get(__scalarPath`/accounts/${accountID}/abuse-reports/submitted`, {
      query,
      ...options,
    });
  }

  /**
   * Retrieve a report submitted by the account.
   *
   * @param {string} reportID - Public report code.
   * @param {TsengAbuseComplaintProcessorOtherRetrieveSubmittedReportParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<unknown>} Submitted abuse report found.
   *
   * @example
   * ```ts
   * const response = await client.tsengAbuseComplaintProcessorOther.retrieveSubmittedReport('reportId', {
   *   account_id: '023e105f4ecef8ad9ca31a8372d0c353',
   * });
   * ```
   */
  retrieveSubmittedReport(
    reportID: string,
    params: TsengAbuseComplaintProcessorOtherRetrieveSubmittedReportParams,
    options?: RequestOptions,
  ): APIPromise<unknown> {
    const { account_id } = params;
    return this._client.get(
      __scalarPath`/accounts/${account_id}/abuse-reports/submitted/${reportID}`,
      options,
    );
  }

  /**
   * List successful emails sent to the submitter of a report submitted by the account. Does not include emails sent to customers or hosts.
   *
   * @param {string} reportID - Public report code.
   * @param {TsengAbuseComplaintProcessorOtherListSubmittedReportEmailsParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<unknown>} Submitted abuse report emails listed successfully.
   *
   * @example
   * ```ts
   * const response = await client.tsengAbuseComplaintProcessorOther.listSubmittedReportEmails('reportId', {
   *   account_id: '023e105f4ecef8ad9ca31a8372d0c353',
   * });
   * ```
   */
  listSubmittedReportEmails(
    reportID: string,
    params: TsengAbuseComplaintProcessorOtherListSubmittedReportEmailsParams,
    options?: RequestOptions,
  ): APIPromise<unknown> {
    const { account_id, ...query } = params;
    return this._client.get(
      __scalarPath`/accounts/${account_id}/abuse-reports/submitted/${reportID}/emails`,
      { query, ...options },
    );
  }

  /**
   * Returns whether the report is currently appealable, along with the signals behind that decision: whether it already has an open appeal, how many appeals have been submitted against it, and whether it has at least one mitigation that an appeal could reverse.
   *
   * @param {string} reportID - Abuse Report ID
   * @param {TsengAbuseComplaintProcessorOtherCheckAppealEligibilityParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<TsengAbuseComplaintProcessorOtherCheckAppealEligibilityResponse>} Appeal eligibility for the report
   *
   * @example
   * ```ts
   * const tsengAbuseComplaintProcessorOther =
   *   await client.tsengAbuseComplaintProcessorOther.checkAppealEligibility('reportId', {
   *     account_id: '023e105f4ecef8ad9ca31a8372d0c353',
   *   });
   * ```
   */
  checkAppealEligibility(
    reportID: string,
    params: TsengAbuseComplaintProcessorOtherCheckAppealEligibilityParams,
    options?: RequestOptions,
  ): APIPromise<TsengAbuseComplaintProcessorOtherCheckAppealEligibilityResponse> {
    const { account_id } = params;
    return this._client.get(
      __scalarPath`/accounts/${account_id}/abuse-reports/${reportID}/appeals/eligibility`,
      options,
    );
  }

  /**
   * List emails sent to the customer for an abuse report. Returns all successful customer emails sent for the specified abuse report. Does not include emails sent to hosts or submitters.
   *
   * @param {string} reportID - Abuse Report ID
   * @param {TsengAbuseComplaintProcessorOtherListEmailsParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<TsengAbuseComplaintProcessorOtherListEmailsResponse>} List abuse report emails successful
   *
   * @example
   * ```ts
   * const tsengAbuseComplaintProcessorOther = await client.tsengAbuseComplaintProcessorOther.listEmails(
   *   'reportId',
   *   {
   *     account_id: '023e105f4ecef8ad9ca31a8372d0c353',
   *   },
   * );
   * ```
   */
  listEmails(
    reportID: string,
    params: TsengAbuseComplaintProcessorOtherListEmailsParams,
    options?: RequestOptions,
  ): APIPromise<TsengAbuseComplaintProcessorOtherListEmailsResponse> {
    const { account_id, ...query } = params;
    return this._client.get(__scalarPath`/accounts/${account_id}/abuse-reports/${reportID}/emails`, {
      query,
      ...options,
    });
  }

  /**
   * List mitigations done to remediate the abuse report.
   *
   * @param {string} reportID - Abuse Report ID
   * @param {TsengAbuseComplaintProcessorOtherListMitigationsParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<TsengAbuseComplaintProcessorOtherListMitigationsResponse>} List abuse report mitigations successful
   *
   * @example
   * ```ts
   * const tsengAbuseComplaintProcessorOther = await client.tsengAbuseComplaintProcessorOther.listMitigations(
   *   'reportId',
   *   {
   *     account_id: '023e105f4ecef8ad9ca31a8372d0c353',
   *   },
   * );
   * ```
   */
  listMitigations(
    reportID: string,
    params: TsengAbuseComplaintProcessorOtherListMitigationsParams,
    options?: RequestOptions,
  ): APIPromise<TsengAbuseComplaintProcessorOtherListMitigationsResponse> {
    const { account_id, ...query } = params;
    return this._client.get(__scalarPath`/accounts/${account_id}/abuse-reports/${reportID}/mitigations`, {
      query,
      ...options,
    });
  }

  /**
   * Request a review for mitigations on an account. Repeating a request for a mitigation with an unresolved appeal is idempotent and returns that mitigation in the in-review state.
   *
   * @param {string} reportID - Abuse Report ID
   * @param {TsengAbuseComplaintProcessorOtherRequestReviewParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<unknown>} Mitigation appeals received, including idempotent replays of unresolved appeals.
   *
   * @example
   * ```ts
   * const response = await client.tsengAbuseComplaintProcessorOther.requestReview('reportId', {
   *   account_id: '023e105f4ecef8ad9ca31a8372d0c353',
   *   body: {},
   * });
   * ```
   */
  requestReview(
    reportID: string,
    params: TsengAbuseComplaintProcessorOtherRequestReviewParams,
    options?: RequestOptions,
  ): APIPromise<unknown> {
    const { account_id, body } = params;
    return this._client.post(
      __scalarPath`/accounts/${account_id}/abuse-reports/${reportID}/mitigations/appeal`,
      { body, ...options },
    );
  }

  /**
   * Retrieve the details of an abuse report.
   *
   * @param {string} reportParam - Identifier of the abuse report
   * @param {TsengAbuseComplaintProcessorOtherRetrieveReportParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<TsengAbuseComplaintProcessorOtherRetrieveReportResponse>} Report submitted successfully
   *
   * @example
   * ```ts
   * const tsengAbuseComplaintProcessorOther = await client.tsengAbuseComplaintProcessorOther.retrieveReport(
   *   'reportParam',
   *   {
   *     account_id: '023e105f4ecef8ad9ca31a8372d0c353',
   *   },
   * );
   * ```
   */
  retrieveReport(
    reportParam: string,
    params: TsengAbuseComplaintProcessorOtherRetrieveReportParams,
    options?: RequestOptions,
  ): APIPromise<TsengAbuseComplaintProcessorOtherRetrieveReportResponse> {
    const { account_id } = params;
    return this._client.get(__scalarPath`/accounts/${account_id}/abuse-reports/${reportParam}`, options);
  }

  /**
   * Submit an abuse report of a particular type.
   *
   * Requires the abuse-reports entitlement on the account (Enterprise
   * accounts have it by default; other accounts must request access) and an
   * API token with the `Account > Abuse Reports > Edit` permission. If the
   * account is not entitled, the request is rejected with an HTTP `401`
   * response (see below).
   *
   * @param {string} reportParam - The report type to be submitted. Example: abuse_general
   * @param {TsengAbuseComplaintProcessorOtherSubmitReportParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<unknown>} Report submitted successfully
   *
   * @example
   * ```ts
   * const response = await client.tsengAbuseComplaintProcessorOther.submitReport('reportParam', {
   *   account_id: '023e105f4ecef8ad9ca31a8372d0c353',
   *   body: {},
   * });
   * ```
   */
  submitReport(
    reportParam: string,
    params: TsengAbuseComplaintProcessorOtherSubmitReportParams,
    options?: RequestOptions,
  ): APIPromise<unknown> {
    const { account_id, body } = params;
    return this._client.post(__scalarPath`/accounts/${account_id}/abuse-reports/${reportParam}`, {
      body,
      ...options,
    });
  }
}

export interface TsengAbuseComplaintProcessorOtherListReportsParams {
  /**
   * Where in pagination to start listing abuse reports
   */
  page?: number;
  /**
   * How many abuse reports per page to list
   */
  per_page?: number;
  /**
   * A property to sort by, followed by the order (id, cdate, domain, type, status)
   */
  sort?: string;
  /**
   * Filter by domain name related to the abuse report
   */
  domain?: string;
  /**
   * Returns reports created before the specified date
   */
  created_before?: string;
  /**
   * Returns reports created after the specified date
   */
  created_after?: string;
  /**
   * Filter by the status of the report.
   */
  status?: unknown;
  /**
   * Filter by the type of the report.
   */
  type?: unknown;
  /**
   * Filter reports that have any mitigations in the given status.
   */
  mitigation_status?: unknown;
}

export interface TsengAbuseComplaintProcessorOtherListReportsResponse {
  success: boolean;
  errors?: Array<unknown>;
  messages?: Array<unknown>;
  result?: TsengAbuseComplaintProcessorOtherListReportsResponse.Result;
  result_info?: TsengAbuseComplaintProcessorOtherListReportsResponse.ResultInfo;
}

export namespace TsengAbuseComplaintProcessorOtherListReportsResponse {
  export interface Result {
    reports: Array<unknown>;
  }

  export interface ResultInfo {
    count: number;
    page: number;
    per_page: number;
    total_count: number;
    total_pages: number;
  }
}

export interface TsengAbuseComplaintProcessorOtherListSubmittedReportsParams {
  /**
   * Page of submitted reports to return.
   * @default 1
   * @minimum 1
   */
  page?: number;
  /**
   * Number of submitted reports per page.
   * @default 100
   * @minimum 1
   * @maximum 200
   */
  per_page?: number;
  /**
   * A property and direction to sort by (id, cdate, domain, type, status).
   */
  sort?: string;
  /**
   * Filter by report code.
   */
  id?: string;
  /**
   * Filter by reported domain. This parameter can be specified multiple times.
   */
  domain?: Array<string>;
  /**
   * Return reports submitted before this time.
   * @format date-time
   */
  created_before?: string;
  /**
   * Return reports submitted after this time.
   * @format date-time
   */
  created_after?: string;
  /**
   * Filter by submitter-facing status. This parameter can be specified multiple times.
   */
  status?: Array<unknown>;
  /**
   * Filter by report type. This parameter can be specified multiple times.
   */
  type?: Array<unknown>;
}

export interface TsengAbuseComplaintProcessorOtherRetrieveSubmittedReportParams {
  /**
   * Cloudflare Account ID
   * @maxLength 32
   */
  account_id: string;
}

export interface TsengAbuseComplaintProcessorOtherListSubmittedReportEmailsParams {
  /**
   * Path param: Cloudflare Account ID
   * @maxLength 32
   */
  account_id: string;
  /**
   * Query param: Page number to retrieve (default 1).
   */
  page?: number;
  /**
   * Query param: Number of emails per page (default 20, max 100).
   */
  per_page?: number;
}

export interface TsengAbuseComplaintProcessorOtherCheckAppealEligibilityParams {
  /**
   * Cloudflare Account ID
   * @maxLength 32
   */
  account_id: string;
}

export interface TsengAbuseComplaintProcessorOtherCheckAppealEligibilityResponse {
  success: boolean;
  errors?: Array<unknown>;
  messages?: Array<unknown>;
  result?: unknown;
}

export interface TsengAbuseComplaintProcessorOtherListEmailsParams {
  /**
   * Path param: Cloudflare Account ID
   * @maxLength 32
   */
  account_id: string;
  /**
   * Query param: Page number to retrieve (default 1)
   */
  page?: number;
  /**
   * Query param: Number of emails per page (default 20, max 100)
   */
  per_page?: number;
}

export interface TsengAbuseComplaintProcessorOtherListEmailsResponse {
  success: boolean;
  errors?: Array<unknown>;
  messages?: Array<unknown>;
  result?: TsengAbuseComplaintProcessorOtherListEmailsResponse.Result;
  result_info?: TsengAbuseComplaintProcessorOtherListEmailsResponse.ResultInfo;
}

export namespace TsengAbuseComplaintProcessorOtherListEmailsResponse {
  export interface Result {
    emails: Array<unknown>;
  }

  export interface ResultInfo {
    count: number;
    page: number;
    per_page: number;
    total_count: number;
    total_pages: number;
  }
}

export interface TsengAbuseComplaintProcessorOtherListMitigationsParams {
  /**
   * Path param: Cloudflare Account ID
   * @maxLength 32
   */
  account_id: string;
  /**
   * Query param: Where in pagination to start listing abuse reports
   */
  page?: number;
  /**
   * Query param: How many abuse reports per page to list
   */
  per_page?: number;
  /**
   * Query param: A property to sort by, followed by the order
   */
  sort?:
    | 'type,asc'
    | 'type,desc'
    | 'effective_date,asc'
    | 'effective_date,desc'
    | 'status,asc'
    | 'status,desc'
    | 'entity_type,asc'
    | 'entity_type,desc';
  /**
   * Query param: Filter by the type of mitigation. This filter parameter can be specified multiple times to include multiple types of mitigations in the result set.
   */
  type?: unknown;
  /**
   * Query param: Returns mitigations that were dispatched before the given date
   */
  effective_before?: string;
  /**
   * Query param: Returns mitigation that were dispatched after the given date
   */
  effective_after?: string;
  /**
   * Query param: Filter by the status of the mitigation.
   */
  status?: unknown;
  /**
   * Query param: Filter by the type of entity the mitigation impacts.
   */
  entity_type?: unknown;
}

export interface TsengAbuseComplaintProcessorOtherListMitigationsResponse {
  success: boolean;
  errors?: Array<unknown>;
  messages?: Array<unknown>;
  result?: TsengAbuseComplaintProcessorOtherListMitigationsResponse.Result;
  result_info?: TsengAbuseComplaintProcessorOtherListMitigationsResponse.ResultInfo;
}

export namespace TsengAbuseComplaintProcessorOtherListMitigationsResponse {
  export interface Result {
    mitigations: Array<unknown>;
  }

  export interface ResultInfo {
    count: number;
    page: number;
    per_page: number;
    total_count: number;
    total_pages: number;
  }
}

export interface TsengAbuseComplaintProcessorOtherRequestReviewParams {
  /**
   * Path param: Cloudflare Account ID
   * @maxLength 32
   */
  account_id: string;
  /**
   * Body param
   */
  body: unknown;
}

export interface TsengAbuseComplaintProcessorOtherRetrieveReportParams {
  /**
   * Cloudflare Account ID
   * @maxLength 32
   */
  account_id: string;
}

export interface TsengAbuseComplaintProcessorOtherRetrieveReportResponse {
  result: unknown;
  success: boolean;
  errors?: Array<unknown>;
  messages?: Array<unknown>;
}

export interface TsengAbuseComplaintProcessorOtherSubmitReportParams {
  /**
   * Path param: Cloudflare Account ID
   * @maxLength 32
   */
  account_id: string;
  /**
   * Body param
   */
  body: unknown;
}
export declare namespace TsengAbuseComplaintProcessorOther {
  export {
    type TsengAbuseComplaintProcessorOtherListReportsResponse as TsengAbuseComplaintProcessorOtherListReportsResponse,
    type TsengAbuseComplaintProcessorOtherCheckAppealEligibilityResponse as TsengAbuseComplaintProcessorOtherCheckAppealEligibilityResponse,
    type TsengAbuseComplaintProcessorOtherListEmailsResponse as TsengAbuseComplaintProcessorOtherListEmailsResponse,
    type TsengAbuseComplaintProcessorOtherListMitigationsResponse as TsengAbuseComplaintProcessorOtherListMitigationsResponse,
    type TsengAbuseComplaintProcessorOtherRetrieveReportResponse as TsengAbuseComplaintProcessorOtherRetrieveReportResponse,
    type TsengAbuseComplaintProcessorOtherListReportsParams as TsengAbuseComplaintProcessorOtherListReportsParams,
    type TsengAbuseComplaintProcessorOtherListSubmittedReportsParams as TsengAbuseComplaintProcessorOtherListSubmittedReportsParams,
    type TsengAbuseComplaintProcessorOtherRetrieveSubmittedReportParams as TsengAbuseComplaintProcessorOtherRetrieveSubmittedReportParams,
    type TsengAbuseComplaintProcessorOtherListSubmittedReportEmailsParams as TsengAbuseComplaintProcessorOtherListSubmittedReportEmailsParams,
    type TsengAbuseComplaintProcessorOtherCheckAppealEligibilityParams as TsengAbuseComplaintProcessorOtherCheckAppealEligibilityParams,
    type TsengAbuseComplaintProcessorOtherListEmailsParams as TsengAbuseComplaintProcessorOtherListEmailsParams,
    type TsengAbuseComplaintProcessorOtherListMitigationsParams as TsengAbuseComplaintProcessorOtherListMitigationsParams,
    type TsengAbuseComplaintProcessorOtherRequestReviewParams as TsengAbuseComplaintProcessorOtherRequestReviewParams,
    type TsengAbuseComplaintProcessorOtherRetrieveReportParams as TsengAbuseComplaintProcessorOtherRetrieveReportParams,
    type TsengAbuseComplaintProcessorOtherSubmitReportParams as TsengAbuseComplaintProcessorOtherSubmitReportParams,
  };
}
