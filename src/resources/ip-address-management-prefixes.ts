// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from '../resource';
import { APIPromise } from '../api-promise';
import type { RequestOptions } from '../internal/request-options';
import { buildHeaders } from '../internal/headers';
import { multipartFormRequestOptions } from '../internal/uploads';
import { path as __scalarPath } from '../internal/utils/path';

export class IPAddressManagementPrefixes extends APIResource {
  /**
   * Submit LOA document (pdf format) under the account.
   *
   * @param {string} accountID
   * @param {IPAddressManagementPrefixUploadLoaDocumentParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<unknown>} Upload LOA Document response
   *
   * @example
   * ```ts
   * const response = await client.ipAddressManagementPrefixes.uploadLoaDocument('accountId', {
   *   loa_document: '@document.pdf',
   * });
   * ```
   */
  uploadLoaDocument(
    accountID: string,
    body: IPAddressManagementPrefixUploadLoaDocumentParams,
    options?: RequestOptions,
  ): APIPromise<unknown> {
    return this._client.post(
      __scalarPath`/accounts/${accountID}/addressing/loa_documents`,
      multipartFormRequestOptions({ body, ...options }, this._client),
    );
  }

  /**
   * Download specified LOA document under the account.
   *
   * @param {string} loaDocumentID
   * @param {IPAddressManagementPrefixDownloadLoaDocumentParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<Response>} Download LOA Document response
   *
   * @example
   * ```ts
   * const response = await client.ipAddressManagementPrefixes.downloadLoaDocument('loaDocumentId', {
   *   account_id: {},
   * });
   * ```
   */
  downloadLoaDocument(
    loaDocumentID: string,
    params: IPAddressManagementPrefixDownloadLoaDocumentParams,
    options?: RequestOptions,
  ): APIPromise<Response> {
    const { account_id } = params;
    return this._client.get(
      __scalarPath`/accounts/${account_id}/addressing/loa_documents/${loaDocumentID}/download`,
      {
        ...options,
        headers: buildHeaders([{ Accept: 'application/pdf' }, options?.headers]),
        __binaryResponse: true,
      },
    );
  }

  /**
   * List all prefixes owned by the account.
   *
   * @param {string} accountID
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<unknown>} List Prefixes response
   *
   * @example
   * ```ts
   * const response = await client.ipAddressManagementPrefixes.list('accountId');
   * ```
   */
  list(accountID: string, options?: RequestOptions): APIPromise<unknown> {
    return this._client.get(__scalarPath`/accounts/${accountID}/addressing/prefixes`, options);
  }

  /**
   * Add a new prefix under the account.
   *
   * @param {string} accountID
   * @param {IPAddressManagementPrefixCreateParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<unknown>} Add Prefix response
   *
   * @example
   * ```ts
   * const response = await client.ipAddressManagementPrefixes.create('accountId', {
   *   asn: {},
   *   cidr: {},
   * });
   * ```
   */
  create(
    accountID: string,
    body: IPAddressManagementPrefixCreateParams,
    options?: RequestOptions,
  ): APIPromise<unknown> {
    return this._client.post(__scalarPath`/accounts/${accountID}/addressing/prefixes`, { body, ...options });
  }

  /**
   * Delete an unapproved prefix owned by the account.
   *
   * @param {string} prefixID
   * @param {IPAddressManagementPrefixDeleteParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<unknown>} Delete Prefix response
   *
   * @example
   * ```ts
   * const response = await client.ipAddressManagementPrefixes.delete('prefixId', {
   *   account_id: {},
   * });
   * ```
   */
  delete(
    prefixID: string,
    params: IPAddressManagementPrefixDeleteParams,
    options?: RequestOptions,
  ): APIPromise<unknown> {
    const { account_id } = params;
    return this._client.delete(
      __scalarPath`/accounts/${account_id}/addressing/prefixes/${prefixID}`,
      options,
    );
  }

  /**
   * List a particular prefix owned by the account.
   *
   * @param {string} prefixID
   * @param {IPAddressManagementPrefixDetailsParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<unknown>} Prefix Details response
   *
   * @example
   * ```ts
   * const response = await client.ipAddressManagementPrefixes.details('prefixId', {
   *   account_id: {},
   * });
   * ```
   */
  details(
    prefixID: string,
    params: IPAddressManagementPrefixDetailsParams,
    options?: RequestOptions,
  ): APIPromise<unknown> {
    const { account_id } = params;
    return this._client.get(__scalarPath`/accounts/${account_id}/addressing/prefixes/${prefixID}`, options);
  }

  /**
   * Modify the description for a prefix owned by the account.
   *
   * @param {string} prefixID
   * @param {IPAddressManagementPrefixUpdateDescriptionParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<unknown>} Update Prefix Description response
   *
   * @example
   * ```ts
   * const response = await client.ipAddressManagementPrefixes.updateDescription('prefixId', {
   *   account_id: {},
   *   description: {},
   * });
   * ```
   */
  updateDescription(
    prefixID: string,
    params: IPAddressManagementPrefixUpdateDescriptionParams,
    options?: RequestOptions,
  ): APIPromise<unknown> {
    const { account_id, ...body } = params;
    return this._client.patch(__scalarPath`/accounts/${account_id}/addressing/prefixes/${prefixID}`, {
      body,
      ...options,
    });
  }

  /**
   * Triggers a new prefix validation. The checks are run asynchronously and include IRR, RPKI, and prefix ownership.
   *
   * @param {string} prefixID
   * @param {IPAddressManagementPrefixValidateParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<unknown>} Validate Prefix response
   *
   * @example
   * ```ts
   * const response = await client.ipAddressManagementPrefixes.validate('prefixId', {
   *   account_id: {},
   * });
   * ```
   */
  validate(
    prefixID: string,
    params: IPAddressManagementPrefixValidateParams,
    options?: RequestOptions,
  ): APIPromise<unknown> {
    const { account_id } = params;
    return this._client.post(
      __scalarPath`/accounts/${account_id}/addressing/prefixes/${prefixID}/validate`,
      options,
    );
  }
}

export interface IPAddressManagementPrefixUploadLoaDocumentParams {
  /**
   * LOA document to upload.
   */
  loa_document: string;
}

export interface IPAddressManagementPrefixDownloadLoaDocumentParams {
  account_id: string;
}

export interface IPAddressManagementPrefixCreateParams {
  asn: unknown;
  cidr: unknown;
  delegate_loa_creation?: unknown;
  description?: unknown;
  loa_document_id?: unknown;
}

export interface IPAddressManagementPrefixDeleteParams {
  account_id: string;
}

export interface IPAddressManagementPrefixDetailsParams {
  account_id: string;
}

export interface IPAddressManagementPrefixUpdateDescriptionParams {
  /**
   * Path param
   */
  account_id: string;
  /**
   * Body param
   */
  description: unknown;
}

export interface IPAddressManagementPrefixValidateParams {
  account_id: string;
}
export declare namespace IPAddressManagementPrefixes {
  export {
    type IPAddressManagementPrefixUploadLoaDocumentParams as IPAddressManagementPrefixUploadLoaDocumentParams,
    type IPAddressManagementPrefixDownloadLoaDocumentParams as IPAddressManagementPrefixDownloadLoaDocumentParams,
    type IPAddressManagementPrefixCreateParams as IPAddressManagementPrefixCreateParams,
    type IPAddressManagementPrefixDeleteParams as IPAddressManagementPrefixDeleteParams,
    type IPAddressManagementPrefixDetailsParams as IPAddressManagementPrefixDetailsParams,
    type IPAddressManagementPrefixUpdateDescriptionParams as IPAddressManagementPrefixUpdateDescriptionParams,
    type IPAddressManagementPrefixValidateParams as IPAddressManagementPrefixValidateParams,
  };
}
