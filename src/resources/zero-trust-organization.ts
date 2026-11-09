// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from '../resource';
import { APIPromise } from '../api-promise';
import type { RequestOptions } from '../internal/request-options';
import { path as __scalarPath } from '../internal/utils/path';

export class ZeroTrustOrganization extends APIResource {
  /**
   * Returns the configuration for your Zero Trust organization.
   *
   * @param {string} accountID
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<unknown>} Get your Zero Trust organization response
   *
   * @example
   * ```ts
   * const response = await client.zeroTrustOrganization.listYour('accountId');
   * ```
   */
  listYour(accountID: string, options?: RequestOptions): APIPromise<unknown> {
    return this._client.get(__scalarPath`/accounts/${accountID}/access/organizations`, options);
  }

  /**
   * Sets up a Zero Trust organization for your account.
   *
   * @param {string} accountID
   * @param {ZeroTrustOrganizationCreateYourParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<unknown>} Create your Zero Trust organization response
   *
   * @example
   * ```ts
   * const response = await client.zeroTrustOrganization.createYour('accountId', {
   *   auth_domain: {},
   *   name: {},
   * });
   * ```
   */
  createYour(
    accountID: string,
    body: ZeroTrustOrganizationCreateYourParams,
    options?: RequestOptions,
  ): APIPromise<unknown> {
    return this._client.post(__scalarPath`/accounts/${accountID}/access/organizations`, { body, ...options });
  }

  /**
   * Updates the configuration for your Zero Trust organization.
   *
   * @param {string} accountID
   * @param {ZeroTrustOrganizationUpdateYourParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<unknown>} Update your Zero Trust organization response
   *
   * @example
   * ```ts
   * const response = await client.zeroTrustOrganization.updateYour('accountId', {});
   * ```
   */
  updateYour(
    accountID: string,
    body: ZeroTrustOrganizationUpdateYourParams,
    options?: RequestOptions,
  ): APIPromise<unknown> {
    return this._client.put(__scalarPath`/accounts/${accountID}/access/organizations`, { body, ...options });
  }

  /**
   * Returns the DoH settings for your Zero Trust organization.
   *
   * @param {string} accountID
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<ZeroTrustOrganizationListYourDohSettingsResponse>} Get your Zero Trust organization DoH settings response
   *
   * @example
   * ```ts
   * const zeroTrustOrganization = await client.zeroTrustOrganization.listYourDohSettings('accountId');
   * ```
   */
  listYourDohSettings(
    accountID: string,
    options?: RequestOptions,
  ): APIPromise<ZeroTrustOrganizationListYourDohSettingsResponse> {
    return this._client.get(__scalarPath`/accounts/${accountID}/access/organizations/doh`, options);
  }

  /**
   * Updates the DoH settings for your Zero Trust organization.
   *
   * @param {string} accountID
   * @param {ZeroTrustOrganizationUpdateYourDohSettingsParams} [body] - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<ZeroTrustOrganizationUpdateYourDohSettingsResponse>} Update your Zero Trust organization DoH settings response
   *
   * @example
   * ```ts
   * const zeroTrustOrganization = await client.zeroTrustOrganization.updateYourDohSettings('accountId');
   * ```
   */
  updateYourDohSettings(
    accountID: string,
    body: ZeroTrustOrganizationUpdateYourDohSettingsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ZeroTrustOrganizationUpdateYourDohSettingsResponse> {
    return this._client.put(__scalarPath`/accounts/${accountID}/access/organizations/doh`, {
      body,
      ...options,
    });
  }

  /**
   * Revokes a user's access across all applications.
   *
   * @param {string} accountID
   * @param {ZeroTrustOrganizationRevokeAllAccessTokensForAUserParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<unknown>} Revoke all Access tokens for a user response
   *
   * @example
   * ```ts
   * const response = await client.zeroTrustOrganization.revokeAllAccessTokensForAUser('accountId', {
   *   email: 'test@example.com',
   * });
   * ```
   */
  revokeAllAccessTokensForAUser(
    accountID: string,
    params: ZeroTrustOrganizationRevokeAllAccessTokensForAUserParams,
    options?: RequestOptions,
  ): APIPromise<unknown> {
    const { devices, ...body } = params;
    return this._client.post(__scalarPath`/accounts/${accountID}/access/organizations/revoke_user`, {
      body,
      query: { devices },
      ...options,
    });
  }
}

export interface ZeroTrustOrganizationCreateYourParams {
  auth_domain: unknown;
  name: unknown;
  allow_authenticate_via_warp?: unknown;
  auto_redirect_to_identity?: unknown;
  deny_unmatched_requests?: unknown;
  deny_unmatched_requests_exempted_zone_names?: unknown;
  is_ui_read_only?: unknown;
  login_design?: unknown;
  mfa_config?: unknown;
  mfa_piv_key_requirements?: unknown;
  mfa_required_for_all_apps?: unknown;
  session_duration?: unknown;
  ui_read_only_toggle_reason?: unknown;
  user_seat_expiration_inactive_time?: unknown;
  warp_auth_non_browser_401?: unknown;
  warp_auth_session_duration?: unknown;
}

export interface ZeroTrustOrganizationUpdateYourParams {
  allow_authenticate_via_warp?: unknown;
  auth_domain?: unknown;
  auto_redirect_to_identity?: unknown;
  custom_pages?: unknown;
  deny_unmatched_requests?: unknown;
  deny_unmatched_requests_exempted_zone_names?: unknown;
  is_ui_read_only?: unknown;
  login_design?: unknown;
  mfa_config?: unknown;
  mfa_piv_key_requirements?: unknown;
  mfa_required_for_all_apps?: unknown;
  name?: unknown;
  session_duration?: unknown;
  ui_read_only_toggle_reason?: unknown;
  user_seat_expiration_inactive_time?: unknown;
  warp_auth_non_browser_401?: unknown;
  warp_auth_session_duration?: unknown;
}

export type ZeroTrustOrganizationListYourDohSettingsResponse = unknown &
  ZeroTrustOrganizationListYourDohSettingsResponse.ZeroTrustOrganizationListYourDohSettingsResponseItem;

export namespace ZeroTrustOrganizationListYourDohSettingsResponse {
  export interface ZeroTrustOrganizationListYourDohSettingsResponseItem {
    result?: ZeroTrustOrganizationListYourDohSettingsResponseItem.Result;
  }

  export namespace ZeroTrustOrganizationListYourDohSettingsResponseItem {
    export interface Result {
      /**
       * The duration the DoH JWT is valid for. Must be in the format `300ms` or `2h45m`. Valid time units are: ns, us (or µs), ms, s, m, h.  Note that the maximum duration for this setting is the same as the key rotation period on the account.
       */
      doh_jwt_duration?: string;
    }
  }
}

export interface ZeroTrustOrganizationUpdateYourDohSettingsParams {
  doh_jwt_duration?: unknown;
  /**
   * The uuid of the service token you want to use for DoH authentication
   */
  service_token_id?: string;
}

export type ZeroTrustOrganizationUpdateYourDohSettingsResponse = unknown &
  ZeroTrustOrganizationUpdateYourDohSettingsResponse.ZeroTrustOrganizationUpdateYourDohSettingsResponseItem;

export namespace ZeroTrustOrganizationUpdateYourDohSettingsResponse {
  export interface ZeroTrustOrganizationUpdateYourDohSettingsResponseItem {
    result?: ZeroTrustOrganizationUpdateYourDohSettingsResponseItem.Result;
  }

  export namespace ZeroTrustOrganizationUpdateYourDohSettingsResponseItem {
    export interface Result {
      doh_jwt_duration?: unknown;
    }
  }
}

export interface ZeroTrustOrganizationRevokeAllAccessTokensForAUserParams {
  /**
   * Query param: When set to `true`, all devices associated with the user will be revoked.
   */
  devices?: boolean;
  /**
   * Body param: The email of the user to revoke.
   */
  email: string;
  /**
   * Body param: The uuid of the user to revoke.
   */
  user_uid?: string;
  /**
   * Body param: When set to `true`, the user will be required to re-authenticate to WARP for all Gateway policies that enforce a WARP client session duration. When `false`, the user’s WARP session will remain active
   */
  warp_session_reauth?: boolean;
}
export declare namespace ZeroTrustOrganization {
  export {
    type ZeroTrustOrganizationListYourDohSettingsResponse as ZeroTrustOrganizationListYourDohSettingsResponse,
    type ZeroTrustOrganizationUpdateYourDohSettingsResponse as ZeroTrustOrganizationUpdateYourDohSettingsResponse,
    type ZeroTrustOrganizationCreateYourParams as ZeroTrustOrganizationCreateYourParams,
    type ZeroTrustOrganizationUpdateYourParams as ZeroTrustOrganizationUpdateYourParams,
    type ZeroTrustOrganizationUpdateYourDohSettingsParams as ZeroTrustOrganizationUpdateYourDohSettingsParams,
    type ZeroTrustOrganizationRevokeAllAccessTokensForAUserParams as ZeroTrustOrganizationRevokeAllAccessTokensForAUserParams,
  };
}
