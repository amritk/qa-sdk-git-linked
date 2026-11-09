// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from '../resource';
import { APIPromise } from '../api-promise';
import type { RequestOptions } from '../internal/request-options';
import { buildHeaders } from '../internal/headers';
import { path as __scalarPath } from '../internal/utils/path';

export class BrandProtection extends APIResource {
  /**
   * Return all alerts on submitted domains
   *
   * @param {string} accountID
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   *
   * @example
   * ```ts
   * await client.brandProtection.listAccountsAccountAlerts('accountId');
   * ```
   */
  listAccountsAccountAlerts(accountID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.get(__scalarPath`/accounts/${accountID}/brand-protection/alerts`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Return a success message after updating alerts on submitted domains by ID
   *
   * @param {string} accountID
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   *
   * @example
   * ```ts
   * await client.brandProtection.patchAccountsAccountIDAlerts('accountId');
   * ```
   */
  patchAccountsAccountIDAlerts(accountID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.patch(__scalarPath`/accounts/${accountID}/brand-protection/alerts`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Return a success message after updating verification statuses of tracked URLs to awaiting by ID
   *
   * @param {string} accountID
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   *
   * @example
   * ```ts
   * await client.brandProtection.patchAccountsAccountIDAlertsClear('accountId');
   * ```
   */
  patchAccountsAccountIDAlertsClear(accountID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.patch(__scalarPath`/accounts/${accountID}/brand-protection/alerts/clear`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Return a success message after updating verification statuses of tracked URLs to disproven by ID
   *
   * @param {string} accountID
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   *
   * @example
   * ```ts
   * await client.brandProtection.patchAccountsAccountIDAlertsRefute('accountId');
   * ```
   */
  patchAccountsAccountIDAlertsRefute(accountID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.patch(__scalarPath`/accounts/${accountID}/brand-protection/alerts/refute`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Return a success message after updating verification statuses of tracked URLs to confirmed by ID
   *
   * @param {string} accountID
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   *
   * @example
   * ```ts
   * await client.brandProtection.patchAccountsAccountIDAlertsVerify('accountId');
   * ```
   */
  patchAccountsAccountIDAlertsVerify(accountID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.patch(__scalarPath`/accounts/${accountID}/brand-protection/alerts/verify`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Return a success message after deleting brands by ID
   *
   * @param {string} accountID
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   *
   * @example
   * ```ts
   * await client.brandProtection.deleteAccountsAccountID('accountId');
   * ```
   */
  deleteAccountsAccountID(accountID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(__scalarPath`/accounts/${accountID}/brand-protection/brands`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Return all brands
   *
   * @param {string} accountID
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   *
   * @example
   * ```ts
   * await client.brandProtection.listAccountsAccount('accountId');
   * ```
   */
  listAccountsAccount(accountID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.get(__scalarPath`/accounts/${accountID}/brand-protection/brands`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Return new brands
   *
   * @param {string} accountID
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   *
   * @example
   * ```ts
   * await client.brandProtection.postAccountsAccountID('accountId');
   * ```
   */
  postAccountsAccountID(accountID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.post(__scalarPath`/accounts/${accountID}/brand-protection/brands`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Return a success message after deleting patterns for brands by ID
   *
   * @param {string} accountID
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   *
   * @example
   * ```ts
   * await client.brandProtection.deleteAccountsAccountIDPatterns('accountId');
   * ```
   */
  deleteAccountsAccountIDPatterns(accountID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(__scalarPath`/accounts/${accountID}/brand-protection/brands/patterns`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Return patterns for brands based on ID
   *
   * @param {string} accountID
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   *
   * @example
   * ```ts
   * await client.brandProtection.listAccountsAccountPatterns('accountId');
   * ```
   */
  listAccountsAccountPatterns(accountID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.get(__scalarPath`/accounts/${accountID}/brand-protection/brands/patterns`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Return a success message after creating new patterns for brands by ID
   *
   * @param {string} accountID
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   *
   * @example
   * ```ts
   * await client.brandProtection.postAccountsAccountIDPatterns('accountId');
   * ```
   */
  postAccountsAccountIDPatterns(accountID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.post(__scalarPath`/accounts/${accountID}/brand-protection/brands/patterns`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Return a success message after updating verification statuses of submitted URLs to awaiting by ID
   *
   * @param {string} accountID
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   *
   * @example
   * ```ts
   * await client.brandProtection.patchAccountsAccountIDClear('accountId');
   * ```
   */
  patchAccountsAccountIDClear(accountID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.patch(__scalarPath`/accounts/${accountID}/brand-protection/clear`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Return submitted domains based on ID
   *
   * @param {string} accountID
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   *
   * @example
   * ```ts
   * await client.brandProtection.listAccountsAccountDomainInfo('accountId');
   * ```
   */
  listAccountsAccountDomainInfo(accountID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.get(__scalarPath`/accounts/${accountID}/brand-protection/domain-info`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Return recent URL submissions
   *
   * @param {string} accountID
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   *
   * @example
   * ```ts
   * await client.brandProtection.listAccountsAccountRecentSubmissions('accountId');
   * ```
   */
  listAccountsAccountRecentSubmissions(accountID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.get(__scalarPath`/accounts/${accountID}/brand-protection/recent-submissions`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Return a success message after updating verification statuses of submitted URLs to disproven by ID
   *
   * @param {string} accountID
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   *
   * @example
   * ```ts
   * await client.brandProtection.patchAccountsAccountIDRefute('accountId');
   * ```
   */
  patchAccountsAccountIDRefute(accountID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.patch(__scalarPath`/accounts/${accountID}/brand-protection/refute`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Return URL submissions based on ID
   *
   * @param {string} accountID
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   *
   * @example
   * ```ts
   * await client.brandProtection.listAccountsAccountSubmissionInfo('accountId');
   * ```
   */
  listAccountsAccountSubmissionInfo(accountID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.get(__scalarPath`/accounts/${accountID}/brand-protection/submission-info`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Return new URL submissions
   *
   * @param {string} accountID
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<unknown>} Created
   *
   * @example
   * ```ts
   * const response = await client.brandProtection.postAccountsAccountIDSubmit('accountId');
   * ```
   */
  postAccountsAccountIDSubmit(accountID: string, options?: RequestOptions): APIPromise<unknown> {
    return this._client.post(__scalarPath`/accounts/${accountID}/brand-protection/submit`, options);
  }

  /**
   * Return submitted domains based on pattern
   *
   * @param {string} accountID
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   *
   * @example
   * ```ts
   * await client.brandProtection.listAccountsAccountTrackedDomains('accountId');
   * ```
   */
  listAccountsAccountTrackedDomains(accountID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.get(__scalarPath`/accounts/${accountID}/brand-protection/tracked-domains`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Return submitted URLs based on ID
   *
   * @param {string} accountID
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<unknown>} OK
   *
   * @example
   * ```ts
   * const response = await client.brandProtection.listAccountsAccountURLInfo('accountId');
   * ```
   */
  listAccountsAccountURLInfo(accountID: string, options?: RequestOptions): APIPromise<unknown> {
    return this._client.get(__scalarPath`/accounts/${accountID}/brand-protection/url-info`, options);
  }

  /**
   * Return a success message after updating verification statuses of submitted URLs to confirmed by ID
   *
   * @param {string} accountID
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   *
   * @example
   * ```ts
   * await client.brandProtection.patchAccountsAccountIDVerify('accountId');
   * ```
   */
  patchAccountsAccountIDVerify(accountID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.patch(__scalarPath`/accounts/${accountID}/brand-protection/verify`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}
