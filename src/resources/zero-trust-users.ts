// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from '../resource';
import { APIPromise } from '../api-promise';
import type { RequestOptions } from '../internal/request-options';
import { path as __scalarPath } from '../internal/utils/path';

export class ZeroTrustUsers extends APIResource {
  /**
   * Gets a list of users for an account.
   *
   * @param {string} accountID
   * @param {ZeroTrustUserListParams} [query] - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<unknown>} Get users response
   *
   * @example
   * ```ts
   * const response = await client.zeroTrustUsers.list('accountId');
   * ```
   */
  list(
    accountID: string,
    query: ZeroTrustUserListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<unknown> {
    return this._client.get(__scalarPath`/accounts/${accountID}/access/users`, { query, ...options });
  }

  /**
   * Creates a new user.
   *
   * @param {string} accountID
   * @param {ZeroTrustUserCreateParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<unknown>} Create user response
   *
   * @example
   * ```ts
   * const response = await client.zeroTrustUsers.create('accountId', {
   *   email: {},
   * });
   * ```
   */
  create(accountID: string, body: ZeroTrustUserCreateParams, options?: RequestOptions): APIPromise<unknown> {
    return this._client.post(__scalarPath`/accounts/${accountID}/access/users`, { body, ...options });
  }

  /**
   * Deletes a specific user for an account. This will also revoke any active seats and tokens for the user.
   *
   * @param {string} userID
   * @param {ZeroTrustUserDeleteParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<unknown>} Delete user response
   *
   * @example
   * ```ts
   * const response = await client.zeroTrustUsers.delete('userId', {
   *   account_id: {},
   * });
   * ```
   */
  delete(userID: string, params: ZeroTrustUserDeleteParams, options?: RequestOptions): APIPromise<unknown> {
    const { account_id } = params;
    return this._client.delete(__scalarPath`/accounts/${account_id}/access/users/${userID}`, options);
  }

  /**
   * Gets a specific user for an account.
   *
   * @param {string} userID
   * @param {ZeroTrustUserRetrieveParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<unknown>} Get user response
   *
   * @example
   * ```ts
   * const response = await client.zeroTrustUsers.retrieve('userId', {
   *   account_id: {},
   * });
   * ```
   */
  retrieve(
    userID: string,
    params: ZeroTrustUserRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<unknown> {
    const { account_id } = params;
    return this._client.get(__scalarPath`/accounts/${account_id}/access/users/${userID}`, options);
  }

  /**
   * Updates a specific user's name for an account. Requires the user's current email as confirmation (email cannot be changed).
   *
   * @param {string} userID
   * @param {ZeroTrustUserUpdateParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<unknown>} Update user response
   *
   * @example
   * ```ts
   * const response = await client.zeroTrustUsers.update('userId', {
   *   account_id: {},
   *   email: {},
   *   name: {},
   * });
   * ```
   */
  update(userID: string, params: ZeroTrustUserUpdateParams, options?: RequestOptions): APIPromise<unknown> {
    const { account_id, ...body } = params;
    return this._client.put(__scalarPath`/accounts/${account_id}/access/users/${userID}`, {
      body,
      ...options,
    });
  }

  /**
   * Get active sessions for a single user.
   *
   * @param {string} userID
   * @param {ZeroTrustUserListActiveSessionsParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<unknown>} Get active sessions response
   *
   * @example
   * ```ts
   * const response = await client.zeroTrustUsers.listActiveSessions('userId', {
   *   account_id: {},
   * });
   * ```
   */
  listActiveSessions(
    userID: string,
    params: ZeroTrustUserListActiveSessionsParams,
    options?: RequestOptions,
  ): APIPromise<unknown> {
    const { account_id } = params;
    return this._client.get(
      __scalarPath`/accounts/${account_id}/access/users/${userID}/active_sessions`,
      options,
    );
  }

  /**
   * Get an active session for a single user.
   *
   * @param {string} nonce
   * @param {ZeroTrustUserRetrieveActiveSessionParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<unknown>} Get active session response
   *
   * @example
   * ```ts
   * const response = await client.zeroTrustUsers.retrieveActiveSession('nonce', {
   *   user_id: {},
   *   account_id: {},
   * });
   * ```
   */
  retrieveActiveSession(
    nonce: string,
    params: ZeroTrustUserRetrieveActiveSessionParams,
    options?: RequestOptions,
  ): APIPromise<unknown> {
    const { user_id, account_id } = params;
    return this._client.get(
      __scalarPath`/accounts/${account_id}/access/users/${user_id}/active_sessions/${nonce}`,
      options,
    );
  }

  /**
   * Get all failed login attempts for a single user.
   *
   * @param {string} userID
   * @param {ZeroTrustUserListFailedLoginsParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<unknown>} Get failed logins response
   *
   * @example
   * ```ts
   * const response = await client.zeroTrustUsers.listFailedLogins('userId', {
   *   account_id: {},
   * });
   * ```
   */
  listFailedLogins(
    userID: string,
    params: ZeroTrustUserListFailedLoginsParams,
    options?: RequestOptions,
  ): APIPromise<unknown> {
    const { account_id } = params;
    return this._client.get(
      __scalarPath`/accounts/${account_id}/access/users/${userID}/failed_logins`,
      options,
    );
  }

  /**
   * Get last seen identity for a single user.
   *
   * @param {string} userID
   * @param {ZeroTrustUserListLastSeenIdentityParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<unknown>} Get active session response
   *
   * @example
   * ```ts
   * const response = await client.zeroTrustUsers.listLastSeenIdentity('userId', {
   *   account_id: {},
   * });
   * ```
   */
  listLastSeenIdentity(
    userID: string,
    params: ZeroTrustUserListLastSeenIdentityParams,
    options?: RequestOptions,
  ): APIPromise<unknown> {
    const { account_id } = params;
    return this._client.get(
      __scalarPath`/accounts/${account_id}/access/users/${userID}/last_seen_identity`,
      options,
    );
  }

  /**
   * Deletes a specific MFA device, including a PIV key or FIDO2 key enrollment, for a user. This action is only available if MFA is turned on for the organization. Successful deletion revokes the enrollment and returns a null result.
   *
   * @param {string} authenticatorID
   * @param {ZeroTrustUserDeleteMfaAuthenticatorParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<unknown>} Delete authenticator response.
   *
   * @example
   * ```ts
   * const response = await client.zeroTrustUsers.deleteMfaAuthenticator('authenticatorId', {
   *   user_id: {},
   *   account_id: {},
   * });
   * ```
   */
  deleteMfaAuthenticator(
    authenticatorID: string,
    params: ZeroTrustUserDeleteMfaAuthenticatorParams,
    options?: RequestOptions,
  ): APIPromise<unknown> {
    const { user_id, account_id } = params;
    return this._client.delete(
      __scalarPath`/accounts/${account_id}/access/users/${user_id}/mfa_authenticators/${authenticatorID}`,
      options,
    );
  }
}

export interface ZeroTrustUserListParams {
  /**
   * The name of the user.
   */
  name?: string;
  /**
   * The email of the user.
   */
  email?: string;
  /**
   * Search for users by other listed query parameters.
   */
  search?: string;
}

export interface ZeroTrustUserCreateParams {
  email: unknown;
  name?: unknown;
}

export interface ZeroTrustUserDeleteParams {
  account_id: string;
}

export interface ZeroTrustUserRetrieveParams {
  account_id: string;
}

export interface ZeroTrustUserUpdateParams {
  /**
   * Path param
   */
  account_id: string;
  /**
   * Body param
   */
  email: unknown;
  /**
   * Body param
   */
  name: unknown;
}

export interface ZeroTrustUserListActiveSessionsParams {
  account_id: string;
}

export interface ZeroTrustUserRetrieveActiveSessionParams {
  user_id: string;
  account_id: string;
}

export interface ZeroTrustUserListFailedLoginsParams {
  account_id: string;
}

export interface ZeroTrustUserListLastSeenIdentityParams {
  account_id: string;
}

export interface ZeroTrustUserDeleteMfaAuthenticatorParams {
  user_id: string;
  account_id: string;
}
export declare namespace ZeroTrustUsers {
  export {
    type ZeroTrustUserListParams as ZeroTrustUserListParams,
    type ZeroTrustUserCreateParams as ZeroTrustUserCreateParams,
    type ZeroTrustUserDeleteParams as ZeroTrustUserDeleteParams,
    type ZeroTrustUserRetrieveParams as ZeroTrustUserRetrieveParams,
    type ZeroTrustUserUpdateParams as ZeroTrustUserUpdateParams,
    type ZeroTrustUserListActiveSessionsParams as ZeroTrustUserListActiveSessionsParams,
    type ZeroTrustUserRetrieveActiveSessionParams as ZeroTrustUserRetrieveActiveSessionParams,
    type ZeroTrustUserListFailedLoginsParams as ZeroTrustUserListFailedLoginsParams,
    type ZeroTrustUserListLastSeenIdentityParams as ZeroTrustUserListLastSeenIdentityParams,
    type ZeroTrustUserDeleteMfaAuthenticatorParams as ZeroTrustUserDeleteMfaAuthenticatorParams,
  };
}
