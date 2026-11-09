// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from '../resource';
import { APIPromise } from '../api-promise';
import type { RequestOptions } from '../internal/request-options';
import { path as __scalarPath } from '../internal/utils/path';

export class AccessPolicyTester extends APIResource {
  /**
   * Starts an Access policy test.
   *
   * @param {string} accountID
   * @param {AccessPolicyTesterTestsParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<unknown>} Start Access policy test response.
   *
   * @example
   * ```ts
   * const response = await client.accessPolicyTester.tests('accountId', {});
   * ```
   */
  tests(
    accountID: string,
    body: AccessPolicyTesterTestsParams,
    options?: RequestOptions,
  ): APIPromise<unknown> {
    return this._client.post(__scalarPath`/accounts/${accountID}/access/policy-tests`, { body, ...options });
  }

  /**
   * Fetches the current status of a given Access policy test.
   *
   * @param {string} policyTestID
   * @param {AccessPolicyTesterTestsGetAnUpdateParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<unknown>} Get an Access policy test update response.
   *
   * @example
   * ```ts
   * const response = await client.accessPolicyTester.testsGetAnUpdate('policyTestId', {
   *   account_id: {},
   * });
   * ```
   */
  testsGetAnUpdate(
    policyTestID: string,
    params: AccessPolicyTesterTestsGetAnUpdateParams,
    options?: RequestOptions,
  ): APIPromise<unknown> {
    const { account_id } = params;
    return this._client.get(
      __scalarPath`/accounts/${account_id}/access/policy-tests/${policyTestID}`,
      options,
    );
  }

  /**
   * Fetches a single page of user results from an Access policy test.
   *
   * @param {string} policyTestID
   * @param {AccessPolicyTesterTestsGetAUserPageParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<unknown>} Get an Access policy tester users page response.
   *
   * @example
   * ```ts
   * const response = await client.accessPolicyTester.testsGetAUserPage('policyTestId', {
   *   account_id: {},
   *   per_page: 25,
   * });
   * ```
   */
  testsGetAUserPage(
    policyTestID: string,
    params: AccessPolicyTesterTestsGetAUserPageParams,
    options?: RequestOptions,
  ): APIPromise<unknown> {
    const { account_id, ...query } = params;
    return this._client.get(__scalarPath`/accounts/${account_id}/access/policy-tests/${policyTestID}/users`, {
      query,
      ...options,
    });
  }
}

export type AccessPolicyTesterTestsParams = unknown;

export interface AccessPolicyTesterTestsGetAnUpdateParams {
  account_id: string;
}

export interface AccessPolicyTesterTestsGetAUserPageParams {
  /**
   * Path param
   */
  account_id: string;
  /**
   * Query param
   * @default 25
   * @maximum 1000
   */
  per_page?: number;
  /**
   * Query param: Filter users by their policy evaluation status.
   */
  status?: 'success' | 'fail' | 'error';
}
export declare namespace AccessPolicyTester {
  export {
    type AccessPolicyTesterTestsParams as AccessPolicyTesterTestsParams,
    type AccessPolicyTesterTestsGetAnUpdateParams as AccessPolicyTesterTestsGetAnUpdateParams,
    type AccessPolicyTesterTestsGetAUserPageParams as AccessPolicyTesterTestsGetAUserPageParams,
  };
}
