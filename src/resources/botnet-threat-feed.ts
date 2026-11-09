// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from '../resource';
import { APIPromise } from '../api-promise';
import type { RequestOptions } from '../internal/request-options';
import { path as __scalarPath } from '../internal/utils/path';

export class BotnetThreatFeed extends APIResource {
  /**
   * Gets all the data the botnet tracking database has for a given ASN registered to user account for given date. If no date is given, it will return results for the previous day.
   *
   * @param {string} asnID
   * @param {BotnetThreatFeedListDayReportParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<BotnetThreatFeedListDayReportResponse>} Get botnet feed report for day
   *
   * @example
   * ```ts
   * const botnetThreatFeed = await client.botnetThreatFeed.listDayReport('asnId', {
   *   account_id: {},
   * });
   * ```
   */
  listDayReport(
    asnID: string,
    params: BotnetThreatFeedListDayReportParams,
    options?: RequestOptions,
  ): APIPromise<BotnetThreatFeedListDayReportResponse> {
    const { account_id, ...query } = params;
    return this._client.get(__scalarPath`/accounts/${account_id}/botnet_feed/asn/${asnID}/day_report`, {
      query,
      ...options,
    });
  }

  /**
   * Gets all the data the botnet threat feed tracking database has for a given ASN registered to user account.
   *
   * @param {string} asnID
   * @param {BotnetThreatFeedListFullReportParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<BotnetThreatFeedListFullReportResponse>} Get full botnet feed report
   *
   * @example
   * ```ts
   * const botnetThreatFeed = await client.botnetThreatFeed.listFullReport('asnId', {
   *   account_id: {},
   * });
   * ```
   */
  listFullReport(
    asnID: string,
    params: BotnetThreatFeedListFullReportParams,
    options?: RequestOptions,
  ): APIPromise<BotnetThreatFeedListFullReportResponse> {
    const { account_id } = params;
    return this._client.get(
      __scalarPath`/accounts/${account_id}/botnet_feed/asn/${asnID}/full_report`,
      options,
    );
  }

  /**
   * Gets a list of all ASNs registered for a user for the DDoS Botnet Feed API.
   *
   * @param {string} accountID
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<BotnetThreatFeedListASNResponse>} Get list of ASNs response
   *
   * @example
   * ```ts
   * const botnetThreatFeed = await client.botnetThreatFeed.listASN('accountId');
   * ```
   */
  listASN(accountID: string, options?: RequestOptions): APIPromise<BotnetThreatFeedListASNResponse> {
    return this._client.get(__scalarPath`/accounts/${accountID}/botnet_feed/configs/asn`, options);
  }

  /**
   * Delete an ASN from botnet threat feed for a given user.
   *
   * @param {string} asnID
   * @param {BotnetThreatFeedDeleteASNParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<BotnetThreatFeedDeleteASNResponse>} Delete ASN response
   *
   * @example
   * ```ts
   * const botnetThreatFeed = await client.botnetThreatFeed.deleteASN('asnId', {
   *   account_id: {},
   * });
   * ```
   */
  deleteASN(
    asnID: string,
    params: BotnetThreatFeedDeleteASNParams,
    options?: RequestOptions,
  ): APIPromise<BotnetThreatFeedDeleteASNResponse> {
    const { account_id } = params;
    return this._client.delete(
      __scalarPath`/accounts/${account_id}/botnet_feed/configs/asn/${asnID}`,
      options,
    );
  }
}

export interface BotnetThreatFeedListDayReportParams {
  /**
   * Path param
   */
  account_id: string;
  /**
   * Query param
   */
  date?: unknown;
}

export type BotnetThreatFeedListDayReportResponse = unknown &
  BotnetThreatFeedListDayReportResponse.BotnetThreatFeedListDayReportResponseItem;

export namespace BotnetThreatFeedListDayReportResponse {
  export interface BotnetThreatFeedListDayReportResponseItem {
    result?: BotnetThreatFeedListDayReportResponseItem.Result;
  }

  export namespace BotnetThreatFeedListDayReportResponseItem {
    export interface Result {
      cidr?: string;
      /**
       * @format date-time
       */
      date?: string;
      offense_count?: number;
    }
  }
}

export interface BotnetThreatFeedListFullReportParams {
  account_id: string;
}

export type BotnetThreatFeedListFullReportResponse = unknown &
  BotnetThreatFeedListFullReportResponse.BotnetThreatFeedListFullReportResponseItem;

export namespace BotnetThreatFeedListFullReportResponse {
  export interface BotnetThreatFeedListFullReportResponseItem {
    result?: BotnetThreatFeedListFullReportResponseItem.Result;
  }

  export namespace BotnetThreatFeedListFullReportResponseItem {
    export interface Result {
      cidr?: string;
      /**
       * @format date-time
       */
      date?: string;
      offense_count?: number;
    }
  }
}

export type BotnetThreatFeedListASNResponse = unknown &
  BotnetThreatFeedListASNResponse.BotnetThreatFeedListASNResponseItem;

export namespace BotnetThreatFeedListASNResponse {
  export interface BotnetThreatFeedListASNResponseItem {
    result?: BotnetThreatFeedListASNResponseItem.Result;
  }

  export namespace BotnetThreatFeedListASNResponseItem {
    export interface Result {
      asn?: number;
    }
  }
}

export interface BotnetThreatFeedDeleteASNParams {
  account_id: string;
}

export type BotnetThreatFeedDeleteASNResponse = unknown &
  BotnetThreatFeedDeleteASNResponse.BotnetThreatFeedDeleteASNResponseItem;

export namespace BotnetThreatFeedDeleteASNResponse {
  export interface BotnetThreatFeedDeleteASNResponseItem {
    result?: BotnetThreatFeedDeleteASNResponseItem.Result;
  }

  export namespace BotnetThreatFeedDeleteASNResponseItem {
    export interface Result {
      asn?: number;
    }
  }
}
export declare namespace BotnetThreatFeed {
  export {
    type BotnetThreatFeedListDayReportResponse as BotnetThreatFeedListDayReportResponse,
    type BotnetThreatFeedListFullReportResponse as BotnetThreatFeedListFullReportResponse,
    type BotnetThreatFeedListASNResponse as BotnetThreatFeedListASNResponse,
    type BotnetThreatFeedDeleteASNResponse as BotnetThreatFeedDeleteASNResponse,
    type BotnetThreatFeedListDayReportParams as BotnetThreatFeedListDayReportParams,
    type BotnetThreatFeedListFullReportParams as BotnetThreatFeedListFullReportParams,
    type BotnetThreatFeedDeleteASNParams as BotnetThreatFeedDeleteASNParams,
  };
}
