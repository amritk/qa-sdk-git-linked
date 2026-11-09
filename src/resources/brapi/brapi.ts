// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from '../../resource';
import { APIPromise } from '../../api-promise';
import type { RequestOptions } from '../../internal/request-options';
import { buildHeaders } from '../../internal/headers';
import { path as __scalarPath } from '../../internal/utils/path';
import {
  BrapiListDevtoolsBrowserAcquireWS,
  type BrapiListDevtoolsBrowserAcquireWSClientOptions,
} from './listDevtoolsBrowserAcquire-ws';
import {
  BrapiRetrieveDevtoolsBrowserWS,
  type BrapiRetrieveDevtoolsBrowserWSClientOptions,
} from './retrieveDevtoolsBrowser-ws';
import {
  BrapiRetrieveDevtoolsPageWS,
  type BrapiRetrieveDevtoolsPageWSClientOptions,
} from './retrieveDevtoolsPage-ws';

export class Brapi extends APIResource {
  /**
   * Returns the page's accessibility tree. Use `interestingOnly` to only return semantically meaningful nodes; use `root` to scope the tree to a CSS-selector-anchored subtree. Control page loading with `gotoOptions` and `waitFor*` options.
   *
   * @param {string} accountID - Account ID.
   * @param {BrapiPostAccessibilityTreeParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<BrapiPostAccessibilityTreeResponse>} Returns the requested formats information.
   *
   * @example
   * ```ts
   * const brapi = await client.brapi.postAccessibilityTree('accountId', {
   *   cacheTTL: 5,
   *   gotoOptions: {},
   *   url: 'https://www.example.com/',
   *   userAgent:
   *     'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36',
   *   viewport: { height: 1080, width: 1920 },
   * });
   * ```
   */
  postAccessibilityTree(
    accountID: string,
    params: BrapiPostAccessibilityTreeParams,
    options?: RequestOptions,
  ): APIPromise<BrapiPostAccessibilityTreeResponse> {
    const { cacheTTL, ...body } = params;
    return this._client.post(__scalarPath`/accounts/${accountID}/browser-rendering/accessibilityTree`, {
      body,
      query: { cacheTTL },
      ...options,
    });
  }

  /**
   * Fetches rendered HTML content from provided URL or HTML. Check available options like `gotoOptions` and `waitFor*` to control page load behaviour.
   *
   * @param {string} accountID - Account ID.
   * @param {BrapiPostContentParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<BrapiPostContentResponse>} Returns the page's content.
   *
   * @example
   * ```ts
   * const brapi = await client.brapi.postContent('accountId', {
   *   cacheTTL: 5,
   *   gotoOptions: {},
   *   url: 'https://www.example.com/',
   *   userAgent:
   *     'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36',
   *   viewport: { height: 1080, width: 1920 },
   * });
   * ```
   */
  postContent(
    accountID: string,
    params: BrapiPostContentParams,
    options?: RequestOptions,
  ): APIPromise<BrapiPostContentResponse> {
    const { cacheTTL, ...body } = params;
    return this._client.post(__scalarPath`/accounts/${accountID}/browser-rendering/content`, {
      body,
      query: { cacheTTL },
      ...options,
    });
  }

  /**
   * Starts a crawl job for the provided URL and its children. Check available options like `gotoOptions` and `waitFor*` to control page load behaviour.
   *
   * @param {string} accountID - Account ID.
   * @param {BrapiPostCrawlParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<BrapiPostCrawlResponse>} Returns the ID for the started crawl job.
   *
   * @example
   * ```ts
   * const brapi = await client.brapi.postCrawl('accountId', {
   *   cacheTTL: 5,
   * });
   * ```
   */
  postCrawl(
    accountID: string,
    params: BrapiPostCrawlParams,
    options?: RequestOptions,
  ): APIPromise<BrapiPostCrawlResponse> {
    const { cacheTTL, ...body } = params;
    return this._client.post(__scalarPath`/accounts/${accountID}/browser-rendering/crawl`, {
      body,
      query: { cacheTTL },
      ...options,
    });
  }

  /**
   * Cancels an ongoing crawl job by setting its status to cancelled and stopping all queued URLs.
   *
   * @param {string} jobID - The ID of the crawl job to cancel.
   * @param {BrapiDeleteCancelCrawlParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<BrapiDeleteCancelCrawlResponse>} Crawl job cancelled successfully.
   *
   * @example
   * ```ts
   * const brapi = await client.brapi.deleteCancelCrawl('jobId', {
   *   account_id: 'accountId',
   * });
   * ```
   */
  deleteCancelCrawl(
    jobID: string,
    params: BrapiDeleteCancelCrawlParams,
    options?: RequestOptions,
  ): APIPromise<BrapiDeleteCancelCrawlResponse> {
    const { account_id } = params;
    return this._client.delete(
      __scalarPath`/accounts/${account_id}/browser-rendering/crawl/${jobID}`,
      options,
    );
  }

  /**
   * Returns the result of a crawl job.
   *
   * @param {string} jobID - Crawl job ID.
   * @param {BrapiRetrieveCrawlResultParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<BrapiRetrieveCrawlResultResponse>} Returns the result of a crawl job.
   *
   * @example
   * ```ts
   * const brapi = await client.brapi.retrieveCrawlResult('jobId', {
   *   account_id: 'accountId',
   *   cacheTTL: 5,
   *   cursor: 0,
   *   limit: 50,
   * });
   * ```
   */
  retrieveCrawlResult(
    jobID: string,
    params: BrapiRetrieveCrawlResultParams,
    options?: RequestOptions,
  ): APIPromise<BrapiRetrieveCrawlResultResponse> {
    const { account_id, ...query } = params;
    return this._client.get(__scalarPath`/accounts/${account_id}/browser-rendering/crawl/${jobID}`, {
      query,
      ...options,
    });
  }

  /**
   * Acquires and establishes a WebSocket connection to a browser session. Session guardrails may be supplied in the `cf-brapi-guardrails` header as base64url-encoded JSON of the same `guardrails` object the POST body accepts (for example `{"allowedDomains":["*.example.com"]}`).
   *
   * @param {string} accountID - Account ID.
   * @param {BrapiListDevtoolsBrowserAcquireParams} [params] - The parameters to send with the request.
   * @param {BrapiListDevtoolsBrowserAcquireWSClientOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {BrapiListDevtoolsBrowserAcquireWS} WebSocket connection established successfully.
   *
   * @example
   * ```ts
   * const connection = client.brapi.listDevtoolsBrowserAcquire('accountId', {
   *   keep_alive: 60000,
   *   lab: false,
   *   recording: false,
   * });
   *
   * try {
   *   for await (const message of connection) {
   *     console.log(message);
   *   }
   * } finally {
   *   connection.close();
   * }
   * ```
   */
  listDevtoolsBrowserAcquire(
    accountID: string,
    params: BrapiListDevtoolsBrowserAcquireParams | null | undefined = {},
    options?: BrapiListDevtoolsBrowserAcquireWSClientOptions,
  ): BrapiListDevtoolsBrowserAcquireWS {
    const { keep_alive, lab, recording, 'cf-brapi-guardrails': cfBrapiGuardrails } = params ?? {};
    return new BrapiListDevtoolsBrowserAcquireWS(
      this._client,
      {
        account_id: accountID,
        ...(keep_alive !== undefined ? { keep_alive: keep_alive } : {}),
        ...(lab !== undefined ? { lab: lab } : {}),
        ...(recording !== undefined ? { recording: recording } : {}),
        ...(cfBrapiGuardrails !== undefined ? { 'cf-brapi-guardrails': cfBrapiGuardrails } : {}),
      },
      options,
    );
  }

  /**
   * Acquires a browser and returns its session ID and websocket URL. Optionally accepts a JSON body with session guardrails to restrict outbound HTTP/S traffic.
   *
   * @param {string} accountID - Account ID.
   * @param {BrapiPostDevtoolsAcquireParams} [params] - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<BrapiPostDevtoolsAcquireResponse>} Returns a session ID ready to be connected to.
   *
   * @example
   * ```ts
   * const brapi = await client.brapi.postDevtoolsAcquire('accountId', {
   *   keep_alive: 60000,
   *   lab: false,
   *   targets: false,
   *   liveViewUrlExpiresInMs: 300000,
   *   recording: false,
   * });
   * ```
   */
  postDevtoolsAcquire(
    accountID: string,
    params: BrapiPostDevtoolsAcquireParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<BrapiPostDevtoolsAcquireResponse> {
    const { keep_alive, lab, targets, liveViewUrlExpiresInMs, recording, ...body } = params ?? {};
    return this._client.post(__scalarPath`/accounts/${accountID}/browser-rendering/devtools/browser`, {
      body,
      query: { keep_alive, lab, targets, liveViewUrlExpiresInMs, recording },
      ...options,
    });
  }

  /**
   * Closes an existing browser session.
   *
   * @param {string} sessionID - Browser session ID to close.
   * @param {BrapiDeleteDevtoolsBrowserDeleteParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<BrapiDeleteDevtoolsBrowserDeleteResponse>} Browser session closing or already closed.
   *
   * @example
   * ```ts
   * const brapi = await client.brapi.deleteDevtoolsBrowserDelete('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
   *   account_id: 'accountId',
   * });
   * ```
   */
  deleteDevtoolsBrowserDelete(
    sessionID: string,
    params: BrapiDeleteDevtoolsBrowserDeleteParams,
    options?: RequestOptions,
  ): APIPromise<BrapiDeleteDevtoolsBrowserDeleteResponse> {
    const { account_id } = params;
    return this._client.delete(
      __scalarPath`/accounts/${account_id}/browser-rendering/devtools/browser/${sessionID}`,
      options,
    );
  }

  /**
   * Establishes a WebSocket connection to an existing browser session.
   *
   * @param {string} sessionID - Browser session ID to connect to.
   * @param {BrapiRetrieveDevtoolsBrowserParams} params - The parameters to send with the request.
   * @param {BrapiRetrieveDevtoolsBrowserWSClientOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {BrapiRetrieveDevtoolsBrowserWS} WebSocket connection established successfully.
   *
   * @example
   * ```ts
   * const connection = client.brapi.retrieveDevtoolsBrowser('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
   *   account_id: 'accountId',
   *   keep_alive: 60000,
   *   lab: false,
   *   recording: false,
   * });
   *
   * try {
   *   for await (const message of connection) {
   *     console.log(message);
   *   }
   * } finally {
   *   connection.close();
   * }
   * ```
   */
  retrieveDevtoolsBrowser(
    sessionID: string,
    params: BrapiRetrieveDevtoolsBrowserParams,
    options?: BrapiRetrieveDevtoolsBrowserWSClientOptions,
  ): BrapiRetrieveDevtoolsBrowserWS {
    const { account_id, keep_alive, lab, recording, 'cf-brapi-guardrails': cfBrapiGuardrails } = params;
    return new BrapiRetrieveDevtoolsBrowserWS(
      this._client,
      {
        account_id: account_id,
        session_id: sessionID,
        ...(keep_alive !== undefined ? { keep_alive: keep_alive } : {}),
        ...(lab !== undefined ? { lab: lab } : {}),
        ...(recording !== undefined ? { recording: recording } : {}),
        ...(cfBrapiGuardrails !== undefined ? { 'cf-brapi-guardrails': cfBrapiGuardrails } : {}),
      },
      options,
    );
  }

  /**
   * Returns a list of all debuggable targets including tabs, pages, service workers, and other browser contexts.
   *
   * @param {string} sessionID - Browser session ID.
   * @param {BrapiListDevtoolsJsonParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<BrapiListDevtoolsJsonResponse>} List of targets.
   *
   * @example
   * ```ts
   * const brapi = await client.brapi.listDevtoolsJson('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
   *   account_id: 'accountId',
   *   liveViewUrlExpiresInMs: 300000,
   * });
   * ```
   */
  listDevtoolsJson(
    sessionID: string,
    params: BrapiListDevtoolsJsonParams,
    options?: RequestOptions,
  ): APIPromise<BrapiListDevtoolsJsonResponse> {
    const { account_id, ...query } = params;
    return this._client.get(
      __scalarPath`/accounts/${account_id}/browser-rendering/devtools/browser/${sessionID}/json`,
      { query, ...options },
    );
  }

  /**
   * Activates (brings to front) a specific browser target by its ID.
   *
   * @param {string} targetID - Target ID to activate.
   * @param {BrapiRetrieveDevtoolsJsonActivateParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<BrapiRetrieveDevtoolsJsonActivateResponse>} Target activated successfully.
   *
   * @example
   * ```ts
   * const brapi = await client.brapi.retrieveDevtoolsJsonActivate('targetId', {
   *   session_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
   *   account_id: 'accountId',
   * });
   * ```
   */
  retrieveDevtoolsJsonActivate(
    targetID: string,
    params: BrapiRetrieveDevtoolsJsonActivateParams,
    options?: RequestOptions,
  ): APIPromise<BrapiRetrieveDevtoolsJsonActivateResponse> {
    const { session_id, account_id } = params;
    return this._client.get(
      __scalarPath`/accounts/${account_id}/browser-rendering/devtools/browser/${session_id}/json/activate/${targetID}`,
      options,
    );
  }

  /**
   * Closes a specific browser target (tab, page, etc.) by its ID. Returns 'Target is closing' on success or an error if the target is not found.
   *
   * @param {string} targetID - Target ID to close.
   * @param {BrapiRetrieveDevtoolsJsonCloseParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<BrapiRetrieveDevtoolsJsonCloseResponse>} Target is closing.
   *
   * @example
   * ```ts
   * const brapi = await client.brapi.retrieveDevtoolsJsonClose('targetId', {
   *   session_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
   *   account_id: 'accountId',
   * });
   * ```
   */
  retrieveDevtoolsJsonClose(
    targetID: string,
    params: BrapiRetrieveDevtoolsJsonCloseParams,
    options?: RequestOptions,
  ): APIPromise<BrapiRetrieveDevtoolsJsonCloseResponse> {
    const { session_id, account_id } = params;
    return this._client.get(
      __scalarPath`/accounts/${account_id}/browser-rendering/devtools/browser/${session_id}/json/close/${targetID}`,
      options,
    );
  }

  /**
   * Returns a list of all debuggable targets including tabs, pages, service workers, and other browser contexts.
   *
   * @param {string} sessionID - Browser session ID.
   * @param {BrapiListDevtoolsJsonListParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<BrapiListDevtoolsJsonListResponse>} List of targets.
   *
   * @example
   * ```ts
   * const brapi = await client.brapi.listDevtoolsJsonList('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
   *   account_id: 'accountId',
   *   liveViewUrlExpiresInMs: 300000,
   * });
   * ```
   */
  listDevtoolsJsonList(
    sessionID: string,
    params: BrapiListDevtoolsJsonListParams,
    options?: RequestOptions,
  ): APIPromise<BrapiListDevtoolsJsonListResponse> {
    const { account_id, ...query } = params;
    return this._client.get(
      __scalarPath`/accounts/${account_id}/browser-rendering/devtools/browser/${sessionID}/json/list`,
      { query, ...options },
    );
  }

  /**
   * Returns the debuggable target with the given ID.
   *
   * @param {string} targetID - Target ID.
   * @param {BrapiRetrieveDevtoolsJsonTargetParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<BrapiRetrieveDevtoolsJsonTargetResponse>} The target with the given ID.
   *
   * @example
   * ```ts
   * const brapi = await client.brapi.retrieveDevtoolsJsonTarget('targetId', {
   *   account_id: 'accountId',
   *   session_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
   * });
   * ```
   */
  retrieveDevtoolsJsonTarget(
    targetID: string,
    params: BrapiRetrieveDevtoolsJsonTargetParams,
    options?: RequestOptions,
  ): APIPromise<BrapiRetrieveDevtoolsJsonTargetResponse> {
    const { account_id, session_id } = params;
    return this._client.get(
      __scalarPath`/accounts/${account_id}/browser-rendering/devtools/browser/${session_id}/json/list/${targetID}`,
      options,
    );
  }

  /**
   * Opens a new tab in the browser. Optionally specify a URL to navigate to.
   *
   * @param {string} sessionID - Browser session ID.
   * @param {BrapiPutDevtoolsJsonNewParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<BrapiPutDevtoolsJsonNewResponse>} Information about the newly created tab.
   *
   * @example
   * ```ts
   * const brapi = await client.brapi.putDevtoolsJsonNew('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
   *   account_id: 'accountId',
   *   liveViewUrlExpiresInMs: 300000,
   * });
   * ```
   */
  putDevtoolsJsonNew(
    sessionID: string,
    params: BrapiPutDevtoolsJsonNewParams,
    options?: RequestOptions,
  ): APIPromise<BrapiPutDevtoolsJsonNewResponse> {
    const { account_id, url, liveViewUrlExpiresInMs } = params;
    return this._client.put(
      __scalarPath`/accounts/${account_id}/browser-rendering/devtools/browser/${sessionID}/json/new`,
      { query: { url, liveViewUrlExpiresInMs }, ...options },
    );
  }

  /**
   * Returns the complete Chrome DevTools Protocol schema including all domains, commands, events, and types. This schema describes the entire CDP API surface.
   *
   * @param {string} sessionID - Browser session ID.
   * @param {BrapiListDevtoolsJsonProtocolParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<BrapiListDevtoolsJsonProtocolResponse>} Chrome DevTools Protocol schema.
   *
   * @example
   * ```ts
   * const brapi = await client.brapi.listDevtoolsJsonProtocol('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
   *   account_id: 'accountId',
   * });
   * ```
   */
  listDevtoolsJsonProtocol(
    sessionID: string,
    params: BrapiListDevtoolsJsonProtocolParams,
    options?: RequestOptions,
  ): APIPromise<BrapiListDevtoolsJsonProtocolResponse> {
    const { account_id } = params;
    return this._client.get(
      __scalarPath`/accounts/${account_id}/browser-rendering/devtools/browser/${sessionID}/json/protocol`,
      options,
    );
  }

  /**
   * Get browser version metadata.
   *
   * @param {string} sessionID - Browser session ID.
   * @param {BrapiListDevtoolsJsonVersionParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<BrapiListDevtoolsJsonVersionResponse>} Browser version information.
   *
   * @example
   * ```ts
   * const brapi = await client.brapi.listDevtoolsJsonVersion('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
   *   account_id: 'accountId',
   * });
   * ```
   */
  listDevtoolsJsonVersion(
    sessionID: string,
    params: BrapiListDevtoolsJsonVersionParams,
    options?: RequestOptions,
  ): APIPromise<BrapiListDevtoolsJsonVersionResponse> {
    const { account_id } = params;
    return this._client.get(
      __scalarPath`/accounts/${account_id}/browser-rendering/devtools/browser/${sessionID}/json/version`,
      options,
    );
  }

  /**
   * Generates time-limited URLs to view a remote browser session. Set `guardrails: { mode: 'readonly' }` to create a view-only link.
   *
   * @param {string} sessionID - Browser session ID
   * @param {BrapiPostDevtoolsLiveViewParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<BrapiPostDevtoolsLiveViewResponse>} Live view URLs generated successfully
   *
   * @example
   * ```ts
   * const brapi = await client.brapi.postDevtoolsLiveView('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
   *   account_id: 'accountId',
   *   expiresInMs: 300000,
   *   mode: 'devtools',
   * });
   * ```
   */
  postDevtoolsLiveView(
    sessionID: string,
    params: BrapiPostDevtoolsLiveViewParams,
    options?: RequestOptions,
  ): APIPromise<BrapiPostDevtoolsLiveViewResponse> {
    const { account_id, ...body } = params;
    return this._client.post(
      __scalarPath`/accounts/${account_id}/browser-rendering/devtools/browser/${sessionID}/live_view`,
      { body, ...options },
    );
  }

  /**
   * Establishes a WebSocket connection to a specific Chrome DevTools target or page.
   *
   * @param {string} targetID - Target ID, e.g. page ID.
   * @param {BrapiRetrieveDevtoolsPageParams} params - The parameters to send with the request.
   * @param {BrapiRetrieveDevtoolsPageWSClientOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {BrapiRetrieveDevtoolsPageWS} WebSocket connection established successfully.
   *
   * @example
   * ```ts
   * const connection = client.brapi.retrieveDevtoolsPage('targetId', {
   *   account_id: 'accountId',
   *   session_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
   * });
   *
   * try {
   *   for await (const message of connection) {
   *     console.log(message);
   *   }
   * } finally {
   *   connection.close();
   * }
   * ```
   */
  retrieveDevtoolsPage(
    targetID: string,
    params: BrapiRetrieveDevtoolsPageParams,
    options?: BrapiRetrieveDevtoolsPageWSClientOptions,
  ): BrapiRetrieveDevtoolsPageWS {
    const { account_id, session_id, 'cf-brapi-guardrails': cfBrapiGuardrails } = params;
    return new BrapiRetrieveDevtoolsPageWS(
      this._client,
      {
        account_id: account_id,
        session_id: session_id,
        target_id: targetID,
        ...(cfBrapiGuardrails !== undefined ? { 'cf-brapi-guardrails': cfBrapiGuardrails } : {}),
      },
      options,
    );
  }

  /**
   * List active browser sessions.
   *
   * @param {string} accountID - Account ID.
   * @param {BrapiListDevtoolsSessionListParams} [query] - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<BrapiListDevtoolsSessionListResponse>} Returns the account's sessions.
   *
   * @example
   * ```ts
   * const brapi = await client.brapi.listDevtoolsSessionList('accountId', {
   *   limit: 200,
   *   offset: 0,
   * });
   * ```
   */
  listDevtoolsSessionList(
    accountID: string,
    query: BrapiListDevtoolsSessionListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<BrapiListDevtoolsSessionListResponse> {
    return this._client.get(__scalarPath`/accounts/${accountID}/browser-rendering/devtools/session`, {
      query,
      ...options,
    });
  }

  /**
   * Get details for a specific browser session.
   *
   * @param {string} sessionID - Session ID.
   * @param {BrapiRetrieveDevtoolsSessionDetailsParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<BrapiRetrieveDevtoolsSessionDetailsResponse>} Returns the session details.
   *
   * @example
   * ```ts
   * const brapi = await client.brapi.retrieveDevtoolsSessionDetails('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
   *   account_id: 'accountId',
   * });
   * ```
   */
  retrieveDevtoolsSessionDetails(
    sessionID: string,
    params: BrapiRetrieveDevtoolsSessionDetailsParams,
    options?: RequestOptions,
  ): APIPromise<BrapiRetrieveDevtoolsSessionDetailsResponse> {
    const { account_id } = params;
    return this._client.get(
      __scalarPath`/accounts/${account_id}/browser-rendering/devtools/session/${sessionID}`,
      options,
    );
  }

  /**
   * Gets json from a webpage from a provided URL or HTML. Pass `prompt` or `schema` in the body. Control page loading with `gotoOptions` and `waitFor*` options.
   *
   * @param {string} accountID - Account ID.
   * @param {BrapiPostJsonParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<BrapiPostJsonResponse>} Returns the JSON based on a user prompt or JSON schema.
   *
   * @example
   * ```ts
   * const brapi = await client.brapi.postJson('accountId', {
   *   cacheTTL: 5,
   *   gotoOptions: {},
   *   url: 'https://www.example.com/',
   *   userAgent:
   *     'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36',
   *   viewport: { height: 1080, width: 1920 },
   * });
   * ```
   */
  postJson(
    accountID: string,
    params: BrapiPostJsonParams,
    options?: RequestOptions,
  ): APIPromise<BrapiPostJsonResponse> {
    const { cacheTTL, ...body } = params;
    return this._client.post(__scalarPath`/accounts/${accountID}/browser-rendering/json`, {
      body,
      query: { cacheTTL },
      ...options,
    });
  }

  /**
   * Get links from a web page.
   *
   * @param {string} accountID - Account ID.
   * @param {BrapiPostLinksParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<BrapiPostLinksResponse>} Returns the links.
   *
   * @example
   * ```ts
   * const brapi = await client.brapi.postLinks('accountId', {
   *   cacheTTL: 5,
   *   excludeExternalLinks: false,
   *   gotoOptions: {},
   *   url: 'https://www.example.com/',
   *   userAgent:
   *     'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36',
   *   viewport: { height: 1080, width: 1920 },
   *   visibleLinksOnly: false,
   * });
   * ```
   */
  postLinks(
    accountID: string,
    params: BrapiPostLinksParams,
    options?: RequestOptions,
  ): APIPromise<BrapiPostLinksResponse> {
    const { cacheTTL, ...body } = params;
    return this._client.post(__scalarPath`/accounts/${accountID}/browser-rendering/links`, {
      body,
      query: { cacheTTL },
      ...options,
    });
  }

  /**
   * Gets markdown of a webpage from provided URL or HTML. Control page loading with `gotoOptions` and `waitFor*` options.
   *
   * @param {string} accountID - Account ID.
   * @param {BrapiPostMarkdownParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<BrapiPostMarkdownResponse>} Returns the page markdown.
   *
   * @example
   * ```ts
   * const brapi = await client.brapi.postMarkdown('accountId', {
   *   cacheTTL: 5,
   *   gotoOptions: {},
   *   url: 'https://www.example.com/',
   *   userAgent:
   *     'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36',
   *   viewport: { height: 1080, width: 1920 },
   * });
   * ```
   */
  postMarkdown(
    accountID: string,
    params: BrapiPostMarkdownParams,
    options?: RequestOptions,
  ): APIPromise<BrapiPostMarkdownResponse> {
    const { cacheTTL, ...body } = params;
    return this._client.post(__scalarPath`/accounts/${accountID}/browser-rendering/markdown`, {
      body,
      query: { cacheTTL },
      ...options,
    });
  }

  /**
   * Fetches rendered PDF from provided URL or HTML. Check available options like `gotoOptions` and `waitFor*` to control page load behaviour.
   *
   * @param {string} accountID - Account ID.
   * @param {BrapiPostPdfParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<Response>} Returns the PDF.
   *
   * @example
   * ```ts
   * const response = await client.brapi.postPdf('accountId', {
   *   cacheTTL: 5,
   *   gotoOptions: {},
   *   pdfOptions: {},
   *   url: 'https://www.example.com/',
   *   userAgent:
   *     'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36',
   *   viewport: { height: 1080, width: 1920 },
   * });
   * ```
   */
  postPdf(accountID: string, params: BrapiPostPdfParams, options?: RequestOptions): APIPromise<Response> {
    const { cacheTTL, ...body } = params;
    return this._client.post(__scalarPath`/accounts/${accountID}/browser-rendering/pdf`, {
      body,
      query: { cacheTTL },
      ...options,
      headers: buildHeaders([{ Accept: 'application/pdf' }, options?.headers]),
      __binaryResponse: true,
    });
  }

  /**
   * Get meta attributes like height, width, text and others of selected elements.
   *
   * @param {string} accountID - Account ID.
   * @param {BrapiPostScrapeParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<BrapiPostScrapeResponse>} Returns the scraped elements.
   *
   * @example
   * ```ts
   * const brapi = await client.brapi.postScrape('accountId', {
   *   cacheTTL: 5,
   *   elements: [{ selector: 'h1' }],
   *   gotoOptions: {},
   *   url: 'https://www.example.com/',
   *   userAgent:
   *     'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36',
   *   viewport: { height: 1080, width: 1920 },
   * });
   * ```
   */
  postScrape(
    accountID: string,
    params: BrapiPostScrapeParams,
    options?: RequestOptions,
  ): APIPromise<BrapiPostScrapeResponse> {
    const { cacheTTL, ...body } = params;
    return this._client.post(__scalarPath`/accounts/${accountID}/browser-rendering/scrape`, {
      body,
      query: { cacheTTL },
      ...options,
    });
  }

  /**
   * Takes a screenshot of a webpage from provided URL or HTML. Control page loading with `gotoOptions` and `waitFor*` options. Customize screenshots with `viewport`, `fullPage`, `clip` and others.
   *
   * @param {string} accountID - Account ID.
   * @param {BrapiPostScreenshotParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<BrapiPostScreenshotResponse>} Returns the screenshot.
   *
   * @example
   * ```ts
   * const brapi = await client.brapi.postScreenshot('accountId', {
   *   cacheTTL: 5,
   *   gotoOptions: {},
   *   screenshotOptions: {},
   *   url: 'https://www.example.com/',
   *   userAgent:
   *     'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36',
   *   viewport: { height: 1080, width: 1920 },
   * });
   * ```
   */
  postScreenshot(
    accountID: string,
    params: BrapiPostScreenshotParams,
    options?: RequestOptions,
  ): APIPromise<BrapiPostScreenshotResponse> {
    const { cacheTTL, ...body } = params;
    return this._client.post(__scalarPath`/accounts/${accountID}/browser-rendering/screenshot`, {
      body,
      query: { cacheTTL },
      ...options,
    });
  }

  /**
   * Returns the page's HTML content and screenshot. Control page loading with `gotoOptions` and `waitFor*` options. Customize screenshots with `viewport`, `fullPage`, `clip` and others.
   *
   * @param {string} accountID - Account ID.
   * @param {BrapiPostSnapshotParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<BrapiPostSnapshotResponse>} Returns the requested formats information.
   *
   * @example
   * ```ts
   * const brapi = await client.brapi.postSnapshot('accountId', {
   *   cacheTTL: 5,
   *   formats: ['content', 'screenshot'],
   *   gotoOptions: {},
   *   screenshotOptions: {},
   *   url: 'https://www.example.com/',
   *   userAgent:
   *     'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36',
   *   viewport: { height: 1080, width: 1920 },
   * });
   * ```
   */
  postSnapshot(
    accountID: string,
    params: BrapiPostSnapshotParams,
    options?: RequestOptions,
  ): APIPromise<BrapiPostSnapshotResponse> {
    const { cacheTTL, ...body } = params;
    return this._client.post(__scalarPath`/accounts/${accountID}/browser-rendering/snapshot`, {
      body,
      query: { cacheTTL },
      ...options,
    });
  }
}

export interface BrapiPostAccessibilityTreeParams {
  /**
   * Query param: Cache TTL default is 5s. Set to 0 to disable.
   * @default 5
   * @minimum 0
   * @maximum 86400
   */
  cacheTTL?: number;
  /**
   * Body param: The maximum duration allowed for the browser action to complete after the page has loaded (such as taking screenshots, extracting content, or generating PDFs). If this time limit is exceeded, the action stops and returns a timeout error.
   * @maximum 120000
   */
  actionTimeout?: number;
  /**
   * Body param: Adds a `<script>` tag into the page with the desired URL or content.
   */
  addScriptTag?: Array<BrapiPostAccessibilityTreeParams.AddScriptTag>;
  /**
   * Body param: Adds a `<link rel="stylesheet">` tag into the page with the desired URL or a `<style type="text/css">` tag with the content.
   */
  addStyleTag?: Array<BrapiPostAccessibilityTreeParams.AddStyleTag>;
  /**
   * Body param: Only allow requests that match the provided regex patterns, eg. '/^.*\.(css)'. Reject rules are applied first.
   */
  allowRequestPattern?: Array<string>;
  /**
   * Body param: Only allow requests that match the provided resource types, eg. 'image' or 'script'. Reject rules are applied first.
   */
  allowResourceTypes?: Array<
    | 'document'
    | 'stylesheet'
    | 'image'
    | 'media'
    | 'font'
    | 'script'
    | 'texttrack'
    | 'xhr'
    | 'fetch'
    | 'prefetch'
    | 'eventsource'
    | 'websocket'
    | 'manifest'
    | 'signedexchange'
    | 'ping'
    | 'cspviolationreport'
    | 'preflight'
    | 'other'
  >;
  /**
   * Body param: Provide credentials for HTTP authentication.
   */
  authenticate?: BrapiPostAccessibilityTreeParams.Authenticate;
  /**
   * Body param: Attempt to proceed when 'awaited' events fail or timeout.
   */
  bestAttempt?: boolean;
  /**
   * Body param: Check [options](https://pptr.dev/api/puppeteer.page.setcookie).
   */
  cookies?: Array<BrapiPostAccessibilityTreeParams.Cookie>;
  /**
   * Body param
   */
  emulateMediaType?: string;
  /**
   * Body param: Check [options](https://pptr.dev/api/puppeteer.gotooptions).
   * @default {}
   */
  gotoOptions?: BrapiPostAccessibilityTreeParams.GotoOptions;
  /**
   * Body param: Set the content of the page, eg: `<h1>Hello World!!</h1>`. Either `html` or `url` must be set.
   * @minLength 1
   */
  html?: string;
  /**
   * Body param
   */
  interestingOnly?: boolean;
  /**
   * Body param: Block undesired requests that match the provided regex patterns, eg. '/^.*\.(css)'.
   */
  rejectRequestPattern?: Array<string>;
  /**
   * Body param: Block undesired requests that match the provided resource types, eg. 'image' or 'script'.
   */
  rejectResourceTypes?: Array<
    | 'document'
    | 'stylesheet'
    | 'image'
    | 'media'
    | 'font'
    | 'script'
    | 'texttrack'
    | 'xhr'
    | 'fetch'
    | 'prefetch'
    | 'eventsource'
    | 'websocket'
    | 'manifest'
    | 'signedexchange'
    | 'ping'
    | 'cspviolationreport'
    | 'preflight'
    | 'other'
  >;
  /**
   * Body param
   */
  root?: string;
  /**
   * Body param
   */
  setExtraHTTPHeaders?: Record<string, string>;
  /**
   * Body param
   */
  setJavaScriptEnabled?: boolean;
  /**
   * Body param: URL to navigate to, eg. `https://example.com`.
   * @format uri
   */
  url?: string;
  /**
   * Body param
   * @default Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36
   */
  userAgent?: string;
  /**
   * Body param: Check [options](https://pptr.dev/api/puppeteer.page.setviewport).
   * @default {"height":1080,"width":1920}
   */
  viewport?: BrapiPostAccessibilityTreeParams.Viewport;
  /**
   * Body param: Wait for the selector to appear in page. Check [options](https://pptr.dev/api/puppeteer.page.waitforselector).
   */
  waitForSelector?: BrapiPostAccessibilityTreeParams.WaitForSelector;
  /**
   * Body param: Waits for a specified timeout before continuing.
   * @maximum 120000
   */
  waitForTimeout?: number;
}

export namespace BrapiPostAccessibilityTreeParams {
  export interface AddScriptTag {
    content?: string;
    id?: string;
    type?: string;
    /**
     * @format uri
     */
    url?: string;
  }

  export interface AddStyleTag {
    content?: string;
    /**
     * @format uri
     */
    url?: string;
  }

  export interface Authenticate {
    /**
     * @minLength 1
     */
    password: string;
    /**
     * @minLength 1
     */
    username: string;
  }

  export interface Cookie {
    /**
     * Cookie name.
     */
    name: string;
    value: string;
    domain?: string;
    expires?: number;
    httpOnly?: boolean;
    partitionKey?: string;
    path?: string;
    priority?: 'Low' | 'Medium' | 'High';
    sameParty?: boolean;
    sameSite?: 'Strict' | 'Lax' | 'None';
    secure?: boolean;
    sourcePort?: number;
    sourceScheme?: 'Unset' | 'NonSecure' | 'Secure';
    url?: string;
  }

  export interface GotoOptions {
    referer?: string;
    referrerPolicy?: string;
    /**
     * @default 30000
     * @maximum 60000
     */
    timeout?: number;
    /**
     * @default domcontentloaded
     */
    waitUntil?:
      | 'load'
      | 'domcontentloaded'
      | 'networkidle0'
      | 'networkidle2'
      | Array<'load' | 'domcontentloaded' | 'networkidle0' | 'networkidle2'>;
  }

  export interface Viewport {
    height: number;
    width: number;
    deviceScaleFactor?: number;
    hasTouch?: boolean;
    isLandscape?: boolean;
    isMobile?: boolean;
  }

  export interface WaitForSelector {
    selector: string;
    hidden?: true;
    /**
     * @maximum 120000
     */
    timeout?: number;
    visible?: true;
  }
}

export interface BrapiPostAccessibilityTreeResponse {
  meta: BrapiPostAccessibilityTreeResponse.Meta;
  result: BrapiPostAccessibilityTreeResponse.Result;
  /**
   * Response status.
   */
  success: boolean;
  errors?: Array<BrapiPostAccessibilityTreeResponse.Error>;
}

export namespace BrapiPostAccessibilityTreeResponse {
  export interface Meta {
    /**
     * URL that served the response, after any redirects the browser followed.
     */
    finalUrl?: string;
    /**
     * Origin response headers, lowercased. Repeated headers are joined with a newline. Credential and transport-only headers that do not survive rendering are omitted.
     */
    headers?: Record<string, string>;
    /**
     * HTTP redirects followed to reach `finalUrl`, oldest first. Omitted for direct navigation and for client-side redirects such as meta refresh. An empty array means redirects occurred but their intermediate responses could not be read.
     */
    redirectChain?: Array<Meta.RedirectChain>;
    /**
     * HTTP status returned by the origin.
     */
    status?: number;
    /**
     * Page title.
     */
    title?: string;
  }

  export namespace Meta {
    export interface RedirectChain {
      /**
       * Redirect response headers, including `location`.
       */
      headers: Record<string, string>;
      /**
       * HTTP status of the redirect.
       */
      status: number;
      /**
       * URL that returned the redirect.
       */
      url: string;
    }
  }

  export interface Result {
    accessibilityTree: unknown | null;
  }

  export interface Error {
    /**
     * Error code.
     */
    code: number;
    /**
     * Error message.
     */
    message: string;
  }
}

export interface BrapiPostContentParams {
  /**
   * Query param: Cache TTL default is 5s. Set to 0 to disable.
   * @default 5
   * @minimum 0
   * @maximum 86400
   */
  cacheTTL?: number;
  /**
   * Body param: The maximum duration allowed for the browser action to complete after the page has loaded (such as taking screenshots, extracting content, or generating PDFs). If this time limit is exceeded, the action stops and returns a timeout error.
   * @maximum 120000
   */
  actionTimeout?: number;
  /**
   * Body param: Adds a `<script>` tag into the page with the desired URL or content.
   */
  addScriptTag?: Array<BrapiPostContentParams.AddScriptTag>;
  /**
   * Body param: Adds a `<link rel="stylesheet">` tag into the page with the desired URL or a `<style type="text/css">` tag with the content.
   */
  addStyleTag?: Array<BrapiPostContentParams.AddStyleTag>;
  /**
   * Body param: Only allow requests that match the provided regex patterns, eg. '/^.*\.(css)'. Reject rules are applied first.
   */
  allowRequestPattern?: Array<string>;
  /**
   * Body param: Only allow requests that match the provided resource types, eg. 'image' or 'script'. Reject rules are applied first.
   */
  allowResourceTypes?: Array<
    | 'document'
    | 'stylesheet'
    | 'image'
    | 'media'
    | 'font'
    | 'script'
    | 'texttrack'
    | 'xhr'
    | 'fetch'
    | 'prefetch'
    | 'eventsource'
    | 'websocket'
    | 'manifest'
    | 'signedexchange'
    | 'ping'
    | 'cspviolationreport'
    | 'preflight'
    | 'other'
  >;
  /**
   * Body param: Provide credentials for HTTP authentication.
   */
  authenticate?: BrapiPostContentParams.Authenticate;
  /**
   * Body param: Attempt to proceed when 'awaited' events fail or timeout.
   */
  bestAttempt?: boolean;
  /**
   * Body param: Check [options](https://pptr.dev/api/puppeteer.page.setcookie).
   */
  cookies?: Array<BrapiPostContentParams.Cookie>;
  /**
   * Body param
   */
  emulateMediaType?: string;
  /**
   * Body param: Check [options](https://pptr.dev/api/puppeteer.gotooptions).
   * @default {}
   */
  gotoOptions?: BrapiPostContentParams.GotoOptions;
  /**
   * Body param: Set the content of the page, eg: `<h1>Hello World!!</h1>`. Either `html` or `url` must be set.
   * @minLength 1
   */
  html?: string;
  /**
   * Body param: Block undesired requests that match the provided regex patterns, eg. '/^.*\.(css)'.
   */
  rejectRequestPattern?: Array<string>;
  /**
   * Body param: Block undesired requests that match the provided resource types, eg. 'image' or 'script'.
   */
  rejectResourceTypes?: Array<
    | 'document'
    | 'stylesheet'
    | 'image'
    | 'media'
    | 'font'
    | 'script'
    | 'texttrack'
    | 'xhr'
    | 'fetch'
    | 'prefetch'
    | 'eventsource'
    | 'websocket'
    | 'manifest'
    | 'signedexchange'
    | 'ping'
    | 'cspviolationreport'
    | 'preflight'
    | 'other'
  >;
  /**
   * Body param
   */
  setExtraHTTPHeaders?: Record<string, string>;
  /**
   * Body param
   */
  setJavaScriptEnabled?: boolean;
  /**
   * Body param: URL to navigate to, eg. `https://example.com`.
   * @format uri
   */
  url?: string;
  /**
   * Body param
   * @default Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36
   */
  userAgent?: string;
  /**
   * Body param: Check [options](https://pptr.dev/api/puppeteer.page.setviewport).
   * @default {"height":1080,"width":1920}
   */
  viewport?: BrapiPostContentParams.Viewport;
  /**
   * Body param: Wait for the selector to appear in page. Check [options](https://pptr.dev/api/puppeteer.page.waitforselector).
   */
  waitForSelector?: BrapiPostContentParams.WaitForSelector;
  /**
   * Body param: Waits for a specified timeout before continuing.
   * @maximum 120000
   */
  waitForTimeout?: number;
}

export namespace BrapiPostContentParams {
  export interface AddScriptTag {
    content?: string;
    id?: string;
    type?: string;
    /**
     * @format uri
     */
    url?: string;
  }

  export interface AddStyleTag {
    content?: string;
    /**
     * @format uri
     */
    url?: string;
  }

  export interface Authenticate {
    /**
     * @minLength 1
     */
    password: string;
    /**
     * @minLength 1
     */
    username: string;
  }

  export interface Cookie {
    /**
     * Cookie name.
     */
    name: string;
    value: string;
    domain?: string;
    expires?: number;
    httpOnly?: boolean;
    partitionKey?: string;
    path?: string;
    priority?: 'Low' | 'Medium' | 'High';
    sameParty?: boolean;
    sameSite?: 'Strict' | 'Lax' | 'None';
    secure?: boolean;
    sourcePort?: number;
    sourceScheme?: 'Unset' | 'NonSecure' | 'Secure';
    url?: string;
  }

  export interface GotoOptions {
    referer?: string;
    referrerPolicy?: string;
    /**
     * @default 30000
     * @maximum 60000
     */
    timeout?: number;
    /**
     * @default domcontentloaded
     */
    waitUntil?:
      | 'load'
      | 'domcontentloaded'
      | 'networkidle0'
      | 'networkidle2'
      | Array<'load' | 'domcontentloaded' | 'networkidle0' | 'networkidle2'>;
  }

  export interface Viewport {
    height: number;
    width: number;
    deviceScaleFactor?: number;
    hasTouch?: boolean;
    isLandscape?: boolean;
    isMobile?: boolean;
  }

  export interface WaitForSelector {
    selector: string;
    hidden?: true;
    /**
     * @maximum 120000
     */
    timeout?: number;
    visible?: true;
  }
}

export interface BrapiPostContentResponse {
  meta: BrapiPostContentResponse.Meta;
  /**
   * Response status.
   */
  success: boolean;
  errors?: Array<BrapiPostContentResponse.Error>;
  /**
   * HTML content.
   */
  result?: string;
}

export namespace BrapiPostContentResponse {
  export interface Meta {
    /**
     * URL that served the response, after any redirects the browser followed.
     */
    finalUrl?: string;
    /**
     * Origin response headers, lowercased. Repeated headers are joined with a newline. Credential and transport-only headers that do not survive rendering are omitted.
     */
    headers?: Record<string, string>;
    /**
     * HTTP redirects followed to reach `finalUrl`, oldest first. Omitted for direct navigation and for client-side redirects such as meta refresh. An empty array means redirects occurred but their intermediate responses could not be read.
     */
    redirectChain?: Array<Meta.RedirectChain>;
    /**
     * HTTP status returned by the origin.
     */
    status?: number;
    /**
     * Page title.
     */
    title?: string;
  }

  export namespace Meta {
    export interface RedirectChain {
      /**
       * Redirect response headers, including `location`.
       */
      headers: Record<string, string>;
      /**
       * HTTP status of the redirect.
       */
      status: number;
      /**
       * URL that returned the redirect.
       */
      url: string;
    }
  }

  export interface Error {
    /**
     * Error code.
     */
    code: number;
    /**
     * Error message.
     */
    message: string;
  }
}

export type BrapiPostCrawlParams = BrapiPostCrawlParams.Variant0 | BrapiPostCrawlParams.Variant1;

export declare namespace BrapiPostCrawlParams {
  export interface Variant0 {
    /**
     * Body param: URL to navigate to, eg. `https://example.com`.
     * @format uri
     */
    url: string;
    /**
     * Query param: Cache TTL default is 5s. Set to 0 to disable.
     * @default 5
     * @minimum 0
     * @maximum 86400
     */
    cacheTTL?: number;
    /**
     * Body param: The maximum duration allowed for the browser action to complete after the page has loaded (such as taking screenshots, extracting content, or generating PDFs). If this time limit is exceeded, the action stops and returns a timeout error.
     * @maximum 120000
     */
    actionTimeout?: number;
    /**
     * Body param: Adds a `<script>` tag into the page with the desired URL or content.
     */
    addScriptTag?: Array<Variant0.AddScriptTag>;
    /**
     * Body param: Adds a `<link rel="stylesheet">` tag into the page with the desired URL or a `<style type="text/css">` tag with the content.
     */
    addStyleTag?: Array<Variant0.AddStyleTag>;
    /**
     * Body param: Only allow requests that match the provided regex patterns, eg. '/^.*\.(css)'. Reject rules are applied first.
     */
    allowRequestPattern?: Array<string>;
    /**
     * Body param: Only allow requests that match the provided resource types, eg. 'image' or 'script'. Reject rules are applied first.
     */
    allowResourceTypes?: Array<
      | 'document'
      | 'stylesheet'
      | 'image'
      | 'media'
      | 'font'
      | 'script'
      | 'texttrack'
      | 'xhr'
      | 'fetch'
      | 'prefetch'
      | 'eventsource'
      | 'websocket'
      | 'manifest'
      | 'signedexchange'
      | 'ping'
      | 'cspviolationreport'
      | 'preflight'
      | 'other'
    >;
    /**
     * Body param: Provide credentials for HTTP authentication.
     */
    authenticate?: Variant0.Authenticate;
    /**
     * Body param: Attempt to proceed when 'awaited' events fail or timeout.
     */
    bestAttempt?: boolean;
    /**
     * Body param: Intended content use level to respect the `use` Content-Signal directive in robots.txt. Levels (least to most permissive): 'reference', 'full'. A URL is disallowed when the publisher's declared `use` level is lower than this intent. Learn more: https://contentsignals.org/. Default: 'full'.
     */
    contentUse?: 'reference' | 'full';
    /**
     * Body param: Check [options](https://pptr.dev/api/puppeteer.page.setcookie).
     */
    cookies?: Array<Variant0.Cookie>;
    /**
     * Body param: List of crawl purposes to respect Content-Signal directives in robots.txt. Allowed values: 'search', 'ai-input', 'ai-train'. Learn more: https://contentsignals.org/. Default: ['search', 'ai-input', 'ai-train'].
     * @default ["search","ai-input","ai-train"]
     * @minItems 1
     * @maxItems 3
     */
    crawlPurposes?: Array<'search' | 'ai-input' | 'ai-train'>;
    /**
     * Body param: Maximum number of levels deep the crawler will traverse from the starting URL.
     * @default 100000
     * @minimum 1
     * @maximum 100000
     */
    depth?: number;
    /**
     * Body param
     */
    emulateMediaType?: string;
    /**
     * Body param: Formats to return. Default is `html`.
     * @default ["html"]
     */
    formats?: Array<'html' | 'markdown' | 'json'>;
    /**
     * Body param: Check [options](https://pptr.dev/api/puppeteer.gotooptions).
     * @default {}
     */
    gotoOptions?: Variant0.GotoOptions;
    /**
     * Body param: Options for JSON extraction.
     */
    jsonOptions?: Variant0.JsonOptions;
    /**
     * Body param: Maximum number of URLs to crawl.
     * @default 10
     * @minimum 1
     * @maximum 100000
     */
    limit?: number;
    /**
     * Body param: Maximum age of a resource that can be returned from cache in seconds. Default is 1 day.
     * @default 86400
     * @minimum 0
     * @maximum 604800
     */
    maxAge?: number;
    /**
     * Body param: Unix timestamp (seconds since epoch) indicating to only crawl pages that were modified since this time. For sitemap URLs with a lastmod field, this is compared directly. For other URLs, the crawler will use If-Modified-Since header when fetching. URLs without modification information (no lastmod in sitemap and no Last-Modified header support) will be crawled. Note: This works in conjunction with maxAge - both filters must pass for a cached resource to be used. Must be within the last year and not in the future.
     * @exclusiveMinimum 0
     */
    modifiedSince?: number;
    /**
     * Body param: Additional options for the crawler.
     * @default {"includeExternalLinks":false,"includeSubdomains":false}
     */
    options?: Variant0.Options;
    /**
     * Body param: Block undesired requests that match the provided regex patterns, eg. '/^.*\.(css)'.
     */
    rejectRequestPattern?: Array<string>;
    /**
     * Body param: Block undesired requests that match the provided resource types, eg. 'image' or 'script'.
     */
    rejectResourceTypes?: Array<
      | 'document'
      | 'stylesheet'
      | 'image'
      | 'media'
      | 'font'
      | 'script'
      | 'texttrack'
      | 'xhr'
      | 'fetch'
      | 'prefetch'
      | 'eventsource'
      | 'websocket'
      | 'manifest'
      | 'signedexchange'
      | 'ping'
      | 'cspviolationreport'
      | 'preflight'
      | 'other'
    >;
    /**
     * Body param: Whether to render the page or fetch static content. True by default.
     * @default true
     */
    render?: true;
    /**
     * Body param
     */
    setExtraHTTPHeaders?: Record<string, string>;
    /**
     * Body param
     */
    setJavaScriptEnabled?: boolean;
    /**
     * Body param: Source of links to crawl. 'sitemaps' - only crawl URLs from sitemaps, 'links' - only crawl URLs scraped from pages, 'all' - crawl both sitemap and scraped links (default).
     * @default all
     */
    source?: 'sitemaps' | 'links' | 'all';
    /**
     * Body param: Check [options](https://pptr.dev/api/puppeteer.page.setviewport).
     * @default {"height":1080,"width":1920}
     */
    viewport?: Variant0.Viewport;
    /**
     * Body param: Wait for the selector to appear in page. Check [options](https://pptr.dev/api/puppeteer.page.waitforselector).
     */
    waitForSelector?: Variant0.WaitForSelector;
    /**
     * Body param: Waits for a specified timeout before continuing.
     * @maximum 120000
     */
    waitForTimeout?: number;
  }

  export namespace Variant0 {
    export interface AddScriptTag {
      content?: string;
      id?: string;
      type?: string;
      /**
       * @format uri
       */
      url?: string;
    }

    export interface AddStyleTag {
      content?: string;
      /**
       * @format uri
       */
      url?: string;
    }

    export interface Authenticate {
      /**
       * @minLength 1
       */
      password: string;
      /**
       * @minLength 1
       */
      username: string;
    }

    export interface Cookie {
      /**
       * Cookie name.
       */
      name: string;
      value: string;
      domain?: string;
      expires?: number;
      httpOnly?: boolean;
      partitionKey?: string;
      path?: string;
      priority?: 'Low' | 'Medium' | 'High';
      sameParty?: boolean;
      sameSite?: 'Strict' | 'Lax' | 'None';
      secure?: boolean;
      sourcePort?: number;
      sourceScheme?: 'Unset' | 'NonSecure' | 'Secure';
      url?: string;
    }

    export interface GotoOptions {
      referer?: string;
      referrerPolicy?: string;
      /**
       * @default 30000
       * @maximum 60000
       */
      timeout?: number;
      /**
       * @default domcontentloaded
       */
      waitUntil?:
        | 'load'
        | 'domcontentloaded'
        | 'networkidle0'
        | 'networkidle2'
        | Array<'load' | 'domcontentloaded' | 'networkidle0' | 'networkidle2'>;
    }

    export interface JsonOptions {
      /**
       * Optional list of custom AI models to use for the request. The models will be tried in the order provided, and in case a model returns an error, the next one will be used as fallback.
       */
      custom_ai?: Array<JsonOptions.CustomAI>;
      prompt?: string;
      response_format?: JsonOptions.ResponseFormat;
    }

    export namespace JsonOptions {
      export interface CustomAI {
        /**
         * AI model to use for the request. Must be formed as `<provider>/<model_name>`, e.g. `workers-ai/@cf/meta/llama-3.3-70b-instruct-fp8-fast`.
         */
        model: string;
        /**
         * Authorization token for the AI model: `Bearer <token>`. Not needed for workers-ai models.
         */
        authorization?: string;
      }

      export interface ResponseFormat {
        type: string;
        /**
         * Schema for the response format. More information here: https://developers.cloudflare.com/workers-ai/json-mode/
         */
        json_schema?: Record<string, unknown> | null;
      }
    }

    export interface Options {
      /**
       * Exclude links matching the provided wildcard patterns in the crawl job. Example: 'https://example.com/privacy/**'.
       * @maxItems 100
       */
      excludePatterns?: Array<string>;
      /**
       * Include external links in the crawl job. If set to true, includeSubdomains is ignored.
       * @default false
       */
      includeExternalLinks?: boolean;
      /**
       * Include only links matching the provided wildcard patterns in the crawl job. Include patterns are evaluated before exclude patterns. URLs that match any of the specified include patterns will be included in the crawl job. Example: 'https://example.com/blog/**'.
       * @maxItems 100
       */
      includePatterns?: Array<string>;
      /**
       * Include links to subdomains in the crawl job. This option is ignored if includeExternalLinks is true.
       * @default false
       */
      includeSubdomains?: boolean;
    }

    export interface Viewport {
      height: number;
      width: number;
      deviceScaleFactor?: number;
      hasTouch?: boolean;
      isLandscape?: boolean;
      isMobile?: boolean;
    }

    export interface WaitForSelector {
      selector: string;
      hidden?: true;
      /**
       * @maximum 120000
       */
      timeout?: number;
      visible?: true;
    }
  }

  export interface Variant1 {
    /**
     * Body param: Whether to render the page or fetch static content. True by default.
     */
    render: false;
    /**
     * Body param: URL to navigate to, eg. `https://example.com`.
     * @format uri
     */
    url: string;
    /**
     * Query param: Cache TTL default is 5s. Set to 0 to disable.
     * @default 5
     * @minimum 0
     * @maximum 86400
     */
    cacheTTL?: number;
    /**
     * Body param: Intended content use level to respect the `use` Content-Signal directive in robots.txt. Levels (least to most permissive): 'reference', 'full'. A URL is disallowed when the publisher's declared `use` level is lower than this intent. Learn more: https://contentsignals.org/. Default: 'full'.
     */
    contentUse?: 'reference' | 'full';
    /**
     * Body param: List of crawl purposes to respect Content-Signal directives in robots.txt. Allowed values: 'search', 'ai-input', 'ai-train'. Learn more: https://contentsignals.org/. Default: ['search', 'ai-input', 'ai-train'].
     * @default ["search","ai-input","ai-train"]
     * @minItems 1
     * @maxItems 3
     */
    crawlPurposes?: Array<'search' | 'ai-input' | 'ai-train'>;
    /**
     * Body param: Maximum number of levels deep the crawler will traverse from the starting URL.
     * @default 100000
     * @minimum 1
     * @maximum 100000
     */
    depth?: number;
    /**
     * Body param: Formats to return. Default is `html`.
     * @default ["html"]
     */
    formats?: Array<'html' | 'markdown' | 'json'>;
    /**
     * Body param: Options for JSON extraction.
     */
    jsonOptions?: Variant1.JsonOptions;
    /**
     * Body param: Maximum number of URLs to crawl.
     * @default 10
     * @minimum 1
     * @maximum 100000
     */
    limit?: number;
    /**
     * Body param: Maximum age of a resource that can be returned from cache in seconds. Default is 1 day.
     * @default 86400
     * @minimum 0
     * @maximum 604800
     */
    maxAge?: number;
    /**
     * Body param: Unix timestamp (seconds since epoch) indicating to only crawl pages that were modified since this time. For sitemap URLs with a lastmod field, this is compared directly. For other URLs, the crawler will use If-Modified-Since header when fetching. URLs without modification information (no lastmod in sitemap and no Last-Modified header support) will be crawled. Note: This works in conjunction with maxAge - both filters must pass for a cached resource to be used. Must be within the last year and not in the future.
     * @exclusiveMinimum 0
     */
    modifiedSince?: number;
    /**
     * Body param: Additional options for the crawler.
     * @default {"includeExternalLinks":false,"includeSubdomains":false}
     */
    options?: Variant1.Options;
    /**
     * Body param: Source of links to crawl. 'sitemaps' - only crawl URLs from sitemaps, 'links' - only crawl URLs scraped from pages, 'all' - crawl both sitemap and scraped links (default).
     * @default all
     */
    source?: 'sitemaps' | 'links' | 'all';
  }

  export namespace Variant1 {
    export interface JsonOptions {
      /**
       * Optional list of custom AI models to use for the request. The models will be tried in the order provided, and in case a model returns an error, the next one will be used as fallback.
       */
      custom_ai?: Array<JsonOptions.CustomAI>;
      prompt?: string;
      response_format?: JsonOptions.ResponseFormat;
    }

    export namespace JsonOptions {
      export interface CustomAI {
        /**
         * AI model to use for the request. Must be formed as `<provider>/<model_name>`, e.g. `workers-ai/@cf/meta/llama-3.3-70b-instruct-fp8-fast`.
         */
        model: string;
        /**
         * Authorization token for the AI model: `Bearer <token>`. Not needed for workers-ai models.
         */
        authorization?: string;
      }

      export interface ResponseFormat {
        type: string;
        /**
         * Schema for the response format. More information here: https://developers.cloudflare.com/workers-ai/json-mode/
         */
        json_schema?: Record<string, unknown> | null;
      }
    }

    export interface Options {
      /**
       * Exclude links matching the provided wildcard patterns in the crawl job. Example: 'https://example.com/privacy/**'.
       * @maxItems 100
       */
      excludePatterns?: Array<string>;
      /**
       * Include external links in the crawl job. If set to true, includeSubdomains is ignored.
       * @default false
       */
      includeExternalLinks?: boolean;
      /**
       * Include only links matching the provided wildcard patterns in the crawl job. Include patterns are evaluated before exclude patterns. URLs that match any of the specified include patterns will be included in the crawl job. Example: 'https://example.com/blog/**'.
       * @maxItems 100
       */
      includePatterns?: Array<string>;
      /**
       * Include links to subdomains in the crawl job. This option is ignored if includeExternalLinks is true.
       * @default false
       */
      includeSubdomains?: boolean;
    }
  }
}

export interface BrapiPostCrawlResponse {
  /**
   * Crawl job ID.
   */
  result: string;
  /**
   * Response status.
   */
  success: boolean;
  errors?: Array<BrapiPostCrawlResponse.Error>;
}

export namespace BrapiPostCrawlResponse {
  export interface Error {
    /**
     * Error code.
     */
    code: number;
    /**
     * Error message.
     */
    message: string;
  }
}

export interface BrapiDeleteCancelCrawlParams {
  /**
   * Account ID.
   */
  account_id: string;
}

export interface BrapiDeleteCancelCrawlResponse {
  result: BrapiDeleteCancelCrawlResponse.Result;
  /**
   * Response status.
   */
  success: boolean;
  errors?: Array<BrapiDeleteCancelCrawlResponse.Error>;
}

export namespace BrapiDeleteCancelCrawlResponse {
  export interface Result {
    /**
     * The ID of the cancelled job.
     */
    job_id: string;
    /**
     * Cancellation confirmation message.
     */
    message: string;
  }

  export interface Error {
    /**
     * Error code.
     */
    code: number;
    /**
     * Error message.
     */
    message: string;
  }
}

export interface BrapiRetrieveCrawlResultParams {
  /**
   * Path param: Account ID.
   */
  account_id: string;
  /**
   * Query param: Cache TTL default is 5s. Set to 0 to disable.
   * @default 5
   * @minimum 0
   * @maximum 86400
   */
  cacheTTL?: number;
  /**
   * Query param: Filter by URL status.
   */
  status?: 'queued' | 'errored' | 'completed' | 'disallowed' | 'skipped' | 'cancelled';
  /**
   * Query param: Cursor for pagination.
   * @default 0
   */
  cursor?: number;
  /**
   * Query param: Limit for pagination.
   * @default 50
   */
  limit?: number;
}

export interface BrapiRetrieveCrawlResultResponse {
  result: BrapiRetrieveCrawlResultResponse.Result;
  /**
   * Response status.
   */
  success: boolean;
  errors?: Array<BrapiRetrieveCrawlResultResponse.Error>;
}

export namespace BrapiRetrieveCrawlResultResponse {
  export interface Result {
    /**
     * Total seconds spent in browser so far.
     */
    browserSecondsUsed: number;
    /**
     * Total number of URLs that have been crawled so far.
     */
    finished: number;
    /**
     * Crawl job ID.
     */
    id: string;
    /**
     * List of crawl job records.
     */
    records: Array<Result.Record2>;
    /**
     * Total number of URLs that were skipped due to include/exclude/subdomain filters. Skipped URLs are included in records but are not counted toward total/finished.
     */
    skipped: number;
    /**
     * Current crawl job status.
     */
    status: string;
    /**
     * Total current number of URLs in the crawl job.
     */
    total: number;
    /**
     * Cursor for pagination.
     */
    cursor?: string;
  }

  export namespace Result {
    export interface Record2 {
      /**
       * Current status of the crawled URL.
       */
      status: 'queued' | 'errored' | 'completed' | 'disallowed' | 'skipped' | 'cancelled';
      /**
       * Crawled URL.
       */
      url: string;
      /**
       * HTML content of the crawled URL.
       */
      html?: string;
      /**
       * JSON of the content of the crawled URL.
       */
      json?: Record<string, Record<string, unknown> | null>;
      /**
       * Markdown of the content of the crawled URL.
       */
      markdown?: string;
      /**
       * Absent for urls that never reached a fetch.
       */
      metadata?: Record2.Metadata;
    }

    export namespace Record2 {
      export interface Metadata {
        /**
         * HTTP status code of the crawled page.
         */
        status: number;
        /**
         * Final URL of the crawled page.
         */
        url: string;
        /**
         * Title of the crawled page.
         */
        title?: string;
      }
    }
  }

  export interface Error {
    /**
     * Error code.
     */
    code: number;
    /**
     * Error message.
     */
    message: string;
  }
}

export interface BrapiListDevtoolsBrowserAcquireParams {
  /**
   * Query param: Keep-alive time in ms (only valid when acquiring new session).
   * @default 60000
   * @minimum 10000
   * @maximum 1200000
   */
  keep_alive?: number;
  /**
   * Query param: Use experimental browser.
   * @default false
   */
  lab?: boolean;
  /**
   * Query param
   * @default false
   */
  recording?: boolean;
  /**
   * Header param: Optional base64url-encoded JSON session guardrails (allowedDomains and allowedDomainSets)
   */
  'cf-brapi-guardrails'?: string | null;
}

export interface BrapiPostDevtoolsAcquireParams {
  /**
   * Query param: Keep-alive time in milliseconds.
   * @default 60000
   * @minimum 10000
   * @maximum 1200000
   */
  keep_alive?: number;
  /**
   * Query param: Use experimental browser.
   * @default false
   */
  lab?: boolean;
  /**
   * Query param: Include browser targets in response.
   * @default false
   */
  targets?: boolean;
  /**
   * Query param: How long the live view URL remains valid, in milliseconds (max 60 minutes). Only used when targets is true.
   * @default 300000
   * @minimum 60000
   * @maximum 3600000
   */
  liveViewUrlExpiresInMs?: number;
  /**
   * Query param
   * @default false
   */
  recording?: boolean;
  /**
   * Body param
   */
  guardrails?: BrapiPostDevtoolsAcquireParams.Guardrails;
}

export namespace BrapiPostDevtoolsAcquireParams {
  export interface Guardrails {
    /**
     * Max 4 entries: curated preset names (common-cdns) and/or https URLs of newline-separated hostname lists.
     * @maxItems 4
     */
    allowedDomainSets?: Array<string>;
    /**
     * Hostname patterns, max 50. Supports exact hosts (example.com) or a single * wildcard anywhere. Prefer *.example.com (subdomain wildcard) over *example.com (prefix wildcard) to avoid matching overbroad lookalikes like evilexample.com.
     * @maxItems 50
     */
    allowedDomains?: Array<string>;
  }
}

export interface BrapiPostDevtoolsAcquireResponse {
  /**
   * Browser session ID.
   */
  sessionId: string;
  /**
   * WebSocket URL for the session.
   */
  webSocketDebuggerUrl?: string;
}

export interface BrapiDeleteDevtoolsBrowserDeleteParams {
  /**
   * Account ID.
   */
  account_id: string;
}

export interface BrapiDeleteDevtoolsBrowserDeleteResponse {
  status: 'closing' | 'closed';
}

export interface BrapiRetrieveDevtoolsBrowserParams {
  /**
   * Path param: Account ID.
   */
  account_id: string;
  /**
   * Query param: Keep-alive time in ms (only valid when acquiring new session).
   * @default 60000
   * @minimum 10000
   * @maximum 1200000
   */
  keep_alive?: number;
  /**
   * Query param: Use experimental browser.
   * @default false
   */
  lab?: boolean;
  /**
   * Query param
   * @default false
   */
  recording?: boolean;
  /**
   * Header param: Optional base64url-encoded JSON connection guardrails (mode)
   */
  'cf-brapi-guardrails'?: string | null;
}

export interface BrapiListDevtoolsJsonParams {
  /**
   * Path param: Account ID.
   */
  account_id: string;
  /**
   * Query param: How long the live view URLs remain valid, in milliseconds (max 60 minutes)
   * @default 300000
   * @minimum 60000
   * @maximum 3600000
   */
  liveViewUrlExpiresInMs?: number;
}

export type BrapiListDevtoolsJsonResponse =
  Array<BrapiListDevtoolsJsonResponse.BrapiListDevtoolsJsonResponseItem>;

export namespace BrapiListDevtoolsJsonResponse {
  export interface BrapiListDevtoolsJsonResponseItem {
    /**
     * Target ID.
     */
    id: string;
    /**
     * Target type (page, background_page, worker, etc.).
     */
    type: string;
    /**
     * URL of the target.
     */
    url: string;
    /**
     * Target description.
     */
    description?: string;
    /**
     * DevTools frontend URL.
     */
    devtoolsFrontendUrl?: string;
    /**
     * Title of the target.
     */
    title?: string;
    /**
     * WebSocket URL for debugging this target.
     */
    webSocketDebuggerUrl?: string;
  }
}

export interface BrapiRetrieveDevtoolsJsonActivateParams {
  /**
   * Browser session ID.
   * @format uuid
   */
  session_id: string;
  /**
   * Account ID.
   */
  account_id: string;
}

export interface BrapiRetrieveDevtoolsJsonActivateResponse {
  /**
   * Target activated.
   */
  message: string;
}

export interface BrapiRetrieveDevtoolsJsonCloseParams {
  /**
   * Browser session ID.
   * @format uuid
   */
  session_id: string;
  /**
   * Account ID.
   */
  account_id: string;
}

export interface BrapiRetrieveDevtoolsJsonCloseResponse {
  /**
   * Target is closing.
   */
  message: string;
}

export interface BrapiListDevtoolsJsonListParams {
  /**
   * Path param: Account ID.
   */
  account_id: string;
  /**
   * Query param: How long the live view URLs remain valid, in milliseconds (max 60 minutes)
   * @default 300000
   * @minimum 60000
   * @maximum 3600000
   */
  liveViewUrlExpiresInMs?: number;
}

export type BrapiListDevtoolsJsonListResponse =
  Array<BrapiListDevtoolsJsonListResponse.BrapiListDevtoolsJsonListResponseItem>;

export namespace BrapiListDevtoolsJsonListResponse {
  export interface BrapiListDevtoolsJsonListResponseItem {
    /**
     * Target ID.
     */
    id: string;
    /**
     * Target type (page, background_page, worker, etc.).
     */
    type: string;
    /**
     * URL of the target.
     */
    url: string;
    /**
     * Target description.
     */
    description?: string;
    /**
     * DevTools frontend URL.
     */
    devtoolsFrontendUrl?: string;
    /**
     * Title of the target.
     */
    title?: string;
    /**
     * WebSocket URL for debugging this target.
     */
    webSocketDebuggerUrl?: string;
  }
}

export interface BrapiRetrieveDevtoolsJsonTargetParams {
  /**
   * Account ID.
   */
  account_id: string;
  /**
   * Browser session ID.
   * @format uuid
   */
  session_id: string;
}

export interface BrapiRetrieveDevtoolsJsonTargetResponse {
  /**
   * Target ID.
   */
  id: string;
  /**
   * Target type (page, background_page, worker, etc.).
   */
  type: string;
  /**
   * URL of the target.
   */
  url: string;
  /**
   * Target description.
   */
  description?: string;
  /**
   * DevTools frontend URL.
   */
  devtoolsFrontendUrl?: string;
  /**
   * Title of the target.
   */
  title?: string;
  /**
   * WebSocket URL for debugging this target.
   */
  webSocketDebuggerUrl?: string;
}

export interface BrapiPutDevtoolsJsonNewParams {
  /**
   * Path param: Account ID.
   */
  account_id: string;
  /**
   * Query param
   * @format uri
   */
  url?: string;
  /**
   * Query param: How long the live view URL remains valid, in milliseconds (max 60 minutes)
   * @default 300000
   * @minimum 60000
   * @maximum 3600000
   */
  liveViewUrlExpiresInMs?: number;
}

export interface BrapiPutDevtoolsJsonNewResponse {
  /**
   * Target ID.
   */
  id: string;
  /**
   * Target type (page, background_page, worker, etc.).
   */
  type: string;
  /**
   * URL of the target.
   */
  url: string;
  /**
   * Target description.
   */
  description?: string;
  /**
   * DevTools frontend URL.
   */
  devtoolsFrontendUrl?: string;
  /**
   * Title of the target.
   */
  title?: string;
  /**
   * WebSocket URL for debugging this target.
   */
  webSocketDebuggerUrl?: string;
}

export interface BrapiListDevtoolsJsonProtocolParams {
  /**
   * Account ID.
   */
  account_id: string;
}

export interface BrapiListDevtoolsJsonProtocolResponse {
  /**
   * List of protocol domains.
   */
  domains: Array<BrapiListDevtoolsJsonProtocolResponse.Domain>;
  /**
   * Protocol version.
   */
  version?: BrapiListDevtoolsJsonProtocolResponse.Version;
}

export namespace BrapiListDevtoolsJsonProtocolResponse {
  export interface Domain {
    /**
     * Domain name.
     */
    domain: string;
    /**
     * Available commands.
     */
    commands?: Array<Record<string, Record<string, unknown> | null>>;
    /**
     * Domain dependencies.
     */
    dependencies?: Array<string>;
    /**
     * Available events.
     */
    events?: Array<Record<string, Record<string, unknown> | null>>;
    /**
     * Whether this domain is experimental.
     */
    experimental?: boolean;
    /**
     * Type definitions.
     */
    types?: Array<Record<string, Record<string, unknown> | null>>;
  }

  export interface Version {
    /**
     * Major version.
     */
    major: string;
    /**
     * Minor version.
     */
    minor: string;
  }
}

export interface BrapiListDevtoolsJsonVersionParams {
  /**
   * Account ID.
   */
  account_id: string;
}

export interface BrapiListDevtoolsJsonVersionResponse {
  /**
   * Browser name and version.
   */
  Browser: string;
  /**
   * Chrome DevTools Protocol version.
   */
  'Protocol-Version': string;
  /**
   * User agent string.
   */
  'User-Agent': string;
  /**
   * V8 JavaScript engine version.
   */
  'V8-Version': string;
  /**
   * WebKit version.
   */
  'WebKit-Version': string;
  /**
   * WebSocket URL for debugging the browser.
   */
  webSocketDebuggerUrl: string;
}

export interface BrapiPostDevtoolsLiveViewParams {
  /**
   * Path param: Account ID.
   */
  account_id: string;
  /**
   * Body param: How long the live view URLs remain valid, in milliseconds. Default: 5 minutes. Max: 60 minutes.
   * @default 300000
   * @minimum 60000
   * @maximum 3600000
   */
  expiresInMs?: number;
  /**
   * Body param: Connection guardrails. Use `{ mode: 'readonly' }` to generate a view-only link.
   */
  guardrails?: BrapiPostDevtoolsLiveViewParams.Guardrails;
  /**
   * Body param: UI mode: 'devtools' (Chrome DevTools), 'tab' (single tab view), 'full' (multi-tab browser)
   * @default devtools
   */
  mode?: 'devtools' | 'tab' | 'full';
  /**
   * Body param: Target ID (page) to connect to. If omitted, auto-resolves to the first active page.
   * @pattern ^[a-fA-F0-9]+$
   */
  targetId?: string;
}

export namespace BrapiPostDevtoolsLiveViewParams {
  export interface Guardrails {
    mode: 'readonly';
  }
}

export interface BrapiPostDevtoolsLiveViewResponse {
  /**
   * URL to open the live view in a browser
   * @format uri
   */
  devtoolsFrontendUrl: string;
  /**
   * Target ID
   */
  id: string;
  options: BrapiPostDevtoolsLiveViewResponse.Options;
  /**
   * WebSocket URL for CDP connection
   * @format uri
   */
  webSocketDebuggerUrl: string;
}

export namespace BrapiPostDevtoolsLiveViewResponse {
  export interface Options {
    /**
     * UI mode for the live view
     */
    mode: 'devtools' | 'tab' | 'full';
    /**
     * Connection guardrails applied to this link
     */
    guardrails?: Options.Guardrails;
  }

  export namespace Options {
    export interface Guardrails {
      mode: 'readonly';
    }
  }
}

export interface BrapiRetrieveDevtoolsPageParams {
  /**
   * Path param: Account ID.
   */
  account_id: string;
  /**
   * Path param: Browser session ID.
   * @format uuid
   */
  session_id: string;
  /**
   * Header param: Optional base64url-encoded JSON connection guardrails (mode)
   */
  'cf-brapi-guardrails'?: string | null;
}

export interface BrapiListDevtoolsSessionListParams {
  /**
   * @default 200
   * @minimum 1
   * @maximum 200
   */
  limit?: number;
  /**
   * @default 0
   * @minimum 0
   */
  offset?: number;
}

export type BrapiListDevtoolsSessionListResponse =
  Array<BrapiListDevtoolsSessionListResponse.BrapiListDevtoolsSessionListResponseItem>;

export namespace BrapiListDevtoolsSessionListResponse {
  export interface BrapiListDevtoolsSessionListResponseItem {
    /**
     * Session ID.
     * @format uuid
     */
    sessionId: string;
    /**
     * Reason code for session closure.
     */
    closeReason?: number;
    /**
     * Human-readable close reason.
     */
    closeReasonText?: string;
    /**
     * Connection end time.
     */
    connectionEndTime?: number;
    /**
     * Connection ID.
     */
    connectionId?: string;
    /**
     * Connection start time.
     */
    connectionStartTime?: number;
    /**
     * DevTools frontend URL.
     */
    devtoolsFrontendUrl?: string;
    /**
     * Session end time.
     */
    endTime?: number;
    /**
     * Last updated timestamp.
     */
    lastUpdated?: number;
    /**
     * Session start time.
     */
    startTime?: number;
    /**
     * WebSocket URL for debugging this target.
     */
    webSocketDebuggerUrl?: string;
  }
}

export interface BrapiRetrieveDevtoolsSessionDetailsParams {
  /**
   * Account ID.
   */
  account_id: string;
}

export interface BrapiRetrieveDevtoolsSessionDetailsResponse {
  /**
   * Session ID.
   * @format uuid
   */
  sessionId: string;
  /**
   * Reason code for session closure.
   */
  closeReason?: number;
  /**
   * Human-readable close reason.
   */
  closeReasonText?: string;
  /**
   * Connection end time.
   */
  connectionEndTime?: number;
  /**
   * Connection ID.
   */
  connectionId?: string;
  /**
   * Connection start time.
   */
  connectionStartTime?: number;
  /**
   * DevTools frontend URL.
   */
  devtoolsFrontendUrl?: string;
  /**
   * Session end time.
   */
  endTime?: number;
  /**
   * Last updated timestamp.
   */
  lastUpdated?: number;
  /**
   * Session start time.
   */
  startTime?: number;
  /**
   * WebSocket URL for debugging this target.
   */
  webSocketDebuggerUrl?: string;
}

export interface BrapiPostJsonParams {
  /**
   * Query param: Cache TTL default is 5s. Set to 0 to disable.
   * @default 5
   * @minimum 0
   * @maximum 86400
   */
  cacheTTL?: number;
  /**
   * Body param: The maximum duration allowed for the browser action to complete after the page has loaded (such as taking screenshots, extracting content, or generating PDFs). If this time limit is exceeded, the action stops and returns a timeout error.
   * @maximum 120000
   */
  actionTimeout?: number;
  /**
   * Body param: Adds a `<script>` tag into the page with the desired URL or content.
   */
  addScriptTag?: Array<BrapiPostJsonParams.AddScriptTag>;
  /**
   * Body param: Adds a `<link rel="stylesheet">` tag into the page with the desired URL or a `<style type="text/css">` tag with the content.
   */
  addStyleTag?: Array<BrapiPostJsonParams.AddStyleTag>;
  /**
   * Body param: Only allow requests that match the provided regex patterns, eg. '/^.*\.(css)'. Reject rules are applied first.
   */
  allowRequestPattern?: Array<string>;
  /**
   * Body param: Only allow requests that match the provided resource types, eg. 'image' or 'script'. Reject rules are applied first.
   */
  allowResourceTypes?: Array<
    | 'document'
    | 'stylesheet'
    | 'image'
    | 'media'
    | 'font'
    | 'script'
    | 'texttrack'
    | 'xhr'
    | 'fetch'
    | 'prefetch'
    | 'eventsource'
    | 'websocket'
    | 'manifest'
    | 'signedexchange'
    | 'ping'
    | 'cspviolationreport'
    | 'preflight'
    | 'other'
  >;
  /**
   * Body param: Provide credentials for HTTP authentication.
   */
  authenticate?: BrapiPostJsonParams.Authenticate;
  /**
   * Body param: Attempt to proceed when 'awaited' events fail or timeout.
   */
  bestAttempt?: boolean;
  /**
   * Body param: Check [options](https://pptr.dev/api/puppeteer.page.setcookie).
   */
  cookies?: Array<BrapiPostJsonParams.Cookie>;
  /**
   * Body param: Optional list of custom AI models to use for the request. The models will be tried in the order provided, and in case a model returns an error, the next one will be used as fallback.
   */
  custom_ai?: Array<BrapiPostJsonParams.CustomAI>;
  /**
   * Body param
   */
  emulateMediaType?: string;
  /**
   * Body param: Check [options](https://pptr.dev/api/puppeteer.gotooptions).
   * @default {}
   */
  gotoOptions?: BrapiPostJsonParams.GotoOptions;
  /**
   * Body param: Set the content of the page, eg: `<h1>Hello World!!</h1>`. Either `html` or `url` must be set.
   * @minLength 1
   */
  html?: string;
  /**
   * Body param
   */
  prompt?: string;
  /**
   * Body param: Block undesired requests that match the provided regex patterns, eg. '/^.*\.(css)'.
   */
  rejectRequestPattern?: Array<string>;
  /**
   * Body param: Block undesired requests that match the provided resource types, eg. 'image' or 'script'.
   */
  rejectResourceTypes?: Array<
    | 'document'
    | 'stylesheet'
    | 'image'
    | 'media'
    | 'font'
    | 'script'
    | 'texttrack'
    | 'xhr'
    | 'fetch'
    | 'prefetch'
    | 'eventsource'
    | 'websocket'
    | 'manifest'
    | 'signedexchange'
    | 'ping'
    | 'cspviolationreport'
    | 'preflight'
    | 'other'
  >;
  /**
   * Body param
   */
  response_format?: BrapiPostJsonParams.ResponseFormat;
  /**
   * Body param
   */
  setExtraHTTPHeaders?: Record<string, string>;
  /**
   * Body param
   */
  setJavaScriptEnabled?: boolean;
  /**
   * Body param: URL to navigate to, eg. `https://example.com`.
   * @format uri
   */
  url?: string;
  /**
   * Body param
   * @default Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36
   */
  userAgent?: string;
  /**
   * Body param: Check [options](https://pptr.dev/api/puppeteer.page.setviewport).
   * @default {"height":1080,"width":1920}
   */
  viewport?: BrapiPostJsonParams.Viewport;
  /**
   * Body param: Wait for the selector to appear in page. Check [options](https://pptr.dev/api/puppeteer.page.waitforselector).
   */
  waitForSelector?: BrapiPostJsonParams.WaitForSelector;
  /**
   * Body param: Waits for a specified timeout before continuing.
   * @maximum 120000
   */
  waitForTimeout?: number;
}

export namespace BrapiPostJsonParams {
  export interface AddScriptTag {
    content?: string;
    id?: string;
    type?: string;
    /**
     * @format uri
     */
    url?: string;
  }

  export interface AddStyleTag {
    content?: string;
    /**
     * @format uri
     */
    url?: string;
  }

  export interface Authenticate {
    /**
     * @minLength 1
     */
    password: string;
    /**
     * @minLength 1
     */
    username: string;
  }

  export interface Cookie {
    /**
     * Cookie name.
     */
    name: string;
    value: string;
    domain?: string;
    expires?: number;
    httpOnly?: boolean;
    partitionKey?: string;
    path?: string;
    priority?: 'Low' | 'Medium' | 'High';
    sameParty?: boolean;
    sameSite?: 'Strict' | 'Lax' | 'None';
    secure?: boolean;
    sourcePort?: number;
    sourceScheme?: 'Unset' | 'NonSecure' | 'Secure';
    url?: string;
  }

  export interface CustomAI {
    /**
     * AI model to use for the request. Must be formed as `<provider>/<model_name>`, e.g. `workers-ai/@cf/meta/llama-3.3-70b-instruct-fp8-fast`.
     */
    model: string;
    /**
     * Authorization token for the AI model: `Bearer <token>`. Not needed for workers-ai models.
     */
    authorization?: string;
  }

  export interface GotoOptions {
    referer?: string;
    referrerPolicy?: string;
    /**
     * @default 30000
     * @maximum 60000
     */
    timeout?: number;
    /**
     * @default domcontentloaded
     */
    waitUntil?:
      | 'load'
      | 'domcontentloaded'
      | 'networkidle0'
      | 'networkidle2'
      | Array<'load' | 'domcontentloaded' | 'networkidle0' | 'networkidle2'>;
  }

  export interface ResponseFormat {
    type: string;
    /**
     * Schema for the response format. More information here: https://developers.cloudflare.com/workers-ai/json-mode/
     */
    json_schema?: Record<string, unknown> | null;
  }

  export interface Viewport {
    height: number;
    width: number;
    deviceScaleFactor?: number;
    hasTouch?: boolean;
    isLandscape?: boolean;
    isMobile?: boolean;
  }

  export interface WaitForSelector {
    selector: string;
    hidden?: true;
    /**
     * @maximum 120000
     */
    timeout?: number;
    visible?: true;
  }
}

export interface BrapiPostJsonResponse {
  meta: BrapiPostJsonResponse.Meta;
  result: Record<string, Record<string, unknown> | null>;
  /**
   * Response status.
   */
  success: boolean;
  errors?: Array<BrapiPostJsonResponse.Error>;
}

export namespace BrapiPostJsonResponse {
  export interface Meta {
    /**
     * URL that served the response, after any redirects the browser followed.
     */
    finalUrl?: string;
    /**
     * Origin response headers, lowercased. Repeated headers are joined with a newline. Credential and transport-only headers that do not survive rendering are omitted.
     */
    headers?: Record<string, string>;
    /**
     * HTTP redirects followed to reach `finalUrl`, oldest first. Omitted for direct navigation and for client-side redirects such as meta refresh. An empty array means redirects occurred but their intermediate responses could not be read.
     */
    redirectChain?: Array<Meta.RedirectChain>;
    /**
     * HTTP status returned by the origin.
     */
    status?: number;
    /**
     * Page title.
     */
    title?: string;
  }

  export namespace Meta {
    export interface RedirectChain {
      /**
       * Redirect response headers, including `location`.
       */
      headers: Record<string, string>;
      /**
       * HTTP status of the redirect.
       */
      status: number;
      /**
       * URL that returned the redirect.
       */
      url: string;
    }
  }

  export interface Error {
    /**
     * Error code.
     */
    code: number;
    /**
     * Error message.
     */
    message: string;
  }
}

export interface BrapiPostLinksParams {
  /**
   * Query param: Cache TTL default is 5s. Set to 0 to disable.
   * @default 5
   * @minimum 0
   * @maximum 86400
   */
  cacheTTL?: number;
  /**
   * Body param: The maximum duration allowed for the browser action to complete after the page has loaded (such as taking screenshots, extracting content, or generating PDFs). If this time limit is exceeded, the action stops and returns a timeout error.
   * @maximum 120000
   */
  actionTimeout?: number;
  /**
   * Body param: Adds a `<script>` tag into the page with the desired URL or content.
   */
  addScriptTag?: Array<BrapiPostLinksParams.AddScriptTag>;
  /**
   * Body param: Adds a `<link rel="stylesheet">` tag into the page with the desired URL or a `<style type="text/css">` tag with the content.
   */
  addStyleTag?: Array<BrapiPostLinksParams.AddStyleTag>;
  /**
   * Body param: Only allow requests that match the provided regex patterns, eg. '/^.*\.(css)'. Reject rules are applied first.
   */
  allowRequestPattern?: Array<string>;
  /**
   * Body param: Only allow requests that match the provided resource types, eg. 'image' or 'script'. Reject rules are applied first.
   */
  allowResourceTypes?: Array<
    | 'document'
    | 'stylesheet'
    | 'image'
    | 'media'
    | 'font'
    | 'script'
    | 'texttrack'
    | 'xhr'
    | 'fetch'
    | 'prefetch'
    | 'eventsource'
    | 'websocket'
    | 'manifest'
    | 'signedexchange'
    | 'ping'
    | 'cspviolationreport'
    | 'preflight'
    | 'other'
  >;
  /**
   * Body param: Provide credentials for HTTP authentication.
   */
  authenticate?: BrapiPostLinksParams.Authenticate;
  /**
   * Body param: Attempt to proceed when 'awaited' events fail or timeout.
   */
  bestAttempt?: boolean;
  /**
   * Body param: Check [options](https://pptr.dev/api/puppeteer.page.setcookie).
   */
  cookies?: Array<BrapiPostLinksParams.Cookie>;
  /**
   * Body param
   */
  emulateMediaType?: string;
  /**
   * Body param
   * @default false
   */
  excludeExternalLinks?: boolean;
  /**
   * Body param: Check [options](https://pptr.dev/api/puppeteer.gotooptions).
   * @default {}
   */
  gotoOptions?: BrapiPostLinksParams.GotoOptions;
  /**
   * Body param: Set the content of the page, eg: `<h1>Hello World!!</h1>`. Either `html` or `url` must be set.
   * @minLength 1
   */
  html?: string;
  /**
   * Body param: Block undesired requests that match the provided regex patterns, eg. '/^.*\.(css)'.
   */
  rejectRequestPattern?: Array<string>;
  /**
   * Body param: Block undesired requests that match the provided resource types, eg. 'image' or 'script'.
   */
  rejectResourceTypes?: Array<
    | 'document'
    | 'stylesheet'
    | 'image'
    | 'media'
    | 'font'
    | 'script'
    | 'texttrack'
    | 'xhr'
    | 'fetch'
    | 'prefetch'
    | 'eventsource'
    | 'websocket'
    | 'manifest'
    | 'signedexchange'
    | 'ping'
    | 'cspviolationreport'
    | 'preflight'
    | 'other'
  >;
  /**
   * Body param
   */
  setExtraHTTPHeaders?: Record<string, string>;
  /**
   * Body param
   */
  setJavaScriptEnabled?: boolean;
  /**
   * Body param: URL to navigate to, eg. `https://example.com`.
   * @format uri
   */
  url?: string;
  /**
   * Body param
   * @default Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36
   */
  userAgent?: string;
  /**
   * Body param: Check [options](https://pptr.dev/api/puppeteer.page.setviewport).
   * @default {"height":1080,"width":1920}
   */
  viewport?: BrapiPostLinksParams.Viewport;
  /**
   * Body param
   * @default false
   */
  visibleLinksOnly?: boolean;
  /**
   * Body param: Wait for the selector to appear in page. Check [options](https://pptr.dev/api/puppeteer.page.waitforselector).
   */
  waitForSelector?: BrapiPostLinksParams.WaitForSelector;
  /**
   * Body param: Waits for a specified timeout before continuing.
   * @maximum 120000
   */
  waitForTimeout?: number;
}

export namespace BrapiPostLinksParams {
  export interface AddScriptTag {
    content?: string;
    id?: string;
    type?: string;
    /**
     * @format uri
     */
    url?: string;
  }

  export interface AddStyleTag {
    content?: string;
    /**
     * @format uri
     */
    url?: string;
  }

  export interface Authenticate {
    /**
     * @minLength 1
     */
    password: string;
    /**
     * @minLength 1
     */
    username: string;
  }

  export interface Cookie {
    /**
     * Cookie name.
     */
    name: string;
    value: string;
    domain?: string;
    expires?: number;
    httpOnly?: boolean;
    partitionKey?: string;
    path?: string;
    priority?: 'Low' | 'Medium' | 'High';
    sameParty?: boolean;
    sameSite?: 'Strict' | 'Lax' | 'None';
    secure?: boolean;
    sourcePort?: number;
    sourceScheme?: 'Unset' | 'NonSecure' | 'Secure';
    url?: string;
  }

  export interface GotoOptions {
    referer?: string;
    referrerPolicy?: string;
    /**
     * @default 30000
     * @maximum 60000
     */
    timeout?: number;
    /**
     * @default domcontentloaded
     */
    waitUntil?:
      | 'load'
      | 'domcontentloaded'
      | 'networkidle0'
      | 'networkidle2'
      | Array<'load' | 'domcontentloaded' | 'networkidle0' | 'networkidle2'>;
  }

  export interface Viewport {
    height: number;
    width: number;
    deviceScaleFactor?: number;
    hasTouch?: boolean;
    isLandscape?: boolean;
    isMobile?: boolean;
  }

  export interface WaitForSelector {
    selector: string;
    hidden?: true;
    /**
     * @maximum 120000
     */
    timeout?: number;
    visible?: true;
  }
}

export interface BrapiPostLinksResponse {
  meta: BrapiPostLinksResponse.Meta;
  result: Array<string>;
  /**
   * Response status.
   */
  success: boolean;
  errors?: Array<BrapiPostLinksResponse.Error>;
}

export namespace BrapiPostLinksResponse {
  export interface Meta {
    /**
     * URL that served the response, after any redirects the browser followed.
     */
    finalUrl?: string;
    /**
     * Origin response headers, lowercased. Repeated headers are joined with a newline. Credential and transport-only headers that do not survive rendering are omitted.
     */
    headers?: Record<string, string>;
    /**
     * HTTP redirects followed to reach `finalUrl`, oldest first. Omitted for direct navigation and for client-side redirects such as meta refresh. An empty array means redirects occurred but their intermediate responses could not be read.
     */
    redirectChain?: Array<Meta.RedirectChain>;
    /**
     * HTTP status returned by the origin.
     */
    status?: number;
    /**
     * Page title.
     */
    title?: string;
  }

  export namespace Meta {
    export interface RedirectChain {
      /**
       * Redirect response headers, including `location`.
       */
      headers: Record<string, string>;
      /**
       * HTTP status of the redirect.
       */
      status: number;
      /**
       * URL that returned the redirect.
       */
      url: string;
    }
  }

  export interface Error {
    /**
     * Error code.
     */
    code: number;
    /**
     * Error message.
     */
    message: string;
  }
}

export interface BrapiPostMarkdownParams {
  /**
   * Query param: Cache TTL default is 5s. Set to 0 to disable.
   * @default 5
   * @minimum 0
   * @maximum 86400
   */
  cacheTTL?: number;
  /**
   * Body param: The maximum duration allowed for the browser action to complete after the page has loaded (such as taking screenshots, extracting content, or generating PDFs). If this time limit is exceeded, the action stops and returns a timeout error.
   * @maximum 120000
   */
  actionTimeout?: number;
  /**
   * Body param: Adds a `<script>` tag into the page with the desired URL or content.
   */
  addScriptTag?: Array<BrapiPostMarkdownParams.AddScriptTag>;
  /**
   * Body param: Adds a `<link rel="stylesheet">` tag into the page with the desired URL or a `<style type="text/css">` tag with the content.
   */
  addStyleTag?: Array<BrapiPostMarkdownParams.AddStyleTag>;
  /**
   * Body param: Only allow requests that match the provided regex patterns, eg. '/^.*\.(css)'. Reject rules are applied first.
   */
  allowRequestPattern?: Array<string>;
  /**
   * Body param: Only allow requests that match the provided resource types, eg. 'image' or 'script'. Reject rules are applied first.
   */
  allowResourceTypes?: Array<
    | 'document'
    | 'stylesheet'
    | 'image'
    | 'media'
    | 'font'
    | 'script'
    | 'texttrack'
    | 'xhr'
    | 'fetch'
    | 'prefetch'
    | 'eventsource'
    | 'websocket'
    | 'manifest'
    | 'signedexchange'
    | 'ping'
    | 'cspviolationreport'
    | 'preflight'
    | 'other'
  >;
  /**
   * Body param: Provide credentials for HTTP authentication.
   */
  authenticate?: BrapiPostMarkdownParams.Authenticate;
  /**
   * Body param: Attempt to proceed when 'awaited' events fail or timeout.
   */
  bestAttempt?: boolean;
  /**
   * Body param: Check [options](https://pptr.dev/api/puppeteer.page.setcookie).
   */
  cookies?: Array<BrapiPostMarkdownParams.Cookie>;
  /**
   * Body param
   */
  emulateMediaType?: string;
  /**
   * Body param: Check [options](https://pptr.dev/api/puppeteer.gotooptions).
   * @default {}
   */
  gotoOptions?: BrapiPostMarkdownParams.GotoOptions;
  /**
   * Body param: Set the content of the page, eg: `<h1>Hello World!!</h1>`. Either `html` or `url` must be set.
   * @minLength 1
   */
  html?: string;
  /**
   * Body param: Block undesired requests that match the provided regex patterns, eg. '/^.*\.(css)'.
   */
  rejectRequestPattern?: Array<string>;
  /**
   * Body param: Block undesired requests that match the provided resource types, eg. 'image' or 'script'.
   */
  rejectResourceTypes?: Array<
    | 'document'
    | 'stylesheet'
    | 'image'
    | 'media'
    | 'font'
    | 'script'
    | 'texttrack'
    | 'xhr'
    | 'fetch'
    | 'prefetch'
    | 'eventsource'
    | 'websocket'
    | 'manifest'
    | 'signedexchange'
    | 'ping'
    | 'cspviolationreport'
    | 'preflight'
    | 'other'
  >;
  /**
   * Body param
   */
  setExtraHTTPHeaders?: Record<string, string>;
  /**
   * Body param
   */
  setJavaScriptEnabled?: boolean;
  /**
   * Body param: URL to navigate to, eg. `https://example.com`.
   * @format uri
   */
  url?: string;
  /**
   * Body param
   * @default Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36
   */
  userAgent?: string;
  /**
   * Body param: Check [options](https://pptr.dev/api/puppeteer.page.setviewport).
   * @default {"height":1080,"width":1920}
   */
  viewport?: BrapiPostMarkdownParams.Viewport;
  /**
   * Body param: Wait for the selector to appear in page. Check [options](https://pptr.dev/api/puppeteer.page.waitforselector).
   */
  waitForSelector?: BrapiPostMarkdownParams.WaitForSelector;
  /**
   * Body param: Waits for a specified timeout before continuing.
   * @maximum 120000
   */
  waitForTimeout?: number;
}

export namespace BrapiPostMarkdownParams {
  export interface AddScriptTag {
    content?: string;
    id?: string;
    type?: string;
    /**
     * @format uri
     */
    url?: string;
  }

  export interface AddStyleTag {
    content?: string;
    /**
     * @format uri
     */
    url?: string;
  }

  export interface Authenticate {
    /**
     * @minLength 1
     */
    password: string;
    /**
     * @minLength 1
     */
    username: string;
  }

  export interface Cookie {
    /**
     * Cookie name.
     */
    name: string;
    value: string;
    domain?: string;
    expires?: number;
    httpOnly?: boolean;
    partitionKey?: string;
    path?: string;
    priority?: 'Low' | 'Medium' | 'High';
    sameParty?: boolean;
    sameSite?: 'Strict' | 'Lax' | 'None';
    secure?: boolean;
    sourcePort?: number;
    sourceScheme?: 'Unset' | 'NonSecure' | 'Secure';
    url?: string;
  }

  export interface GotoOptions {
    referer?: string;
    referrerPolicy?: string;
    /**
     * @default 30000
     * @maximum 60000
     */
    timeout?: number;
    /**
     * @default domcontentloaded
     */
    waitUntil?:
      | 'load'
      | 'domcontentloaded'
      | 'networkidle0'
      | 'networkidle2'
      | Array<'load' | 'domcontentloaded' | 'networkidle0' | 'networkidle2'>;
  }

  export interface Viewport {
    height: number;
    width: number;
    deviceScaleFactor?: number;
    hasTouch?: boolean;
    isLandscape?: boolean;
    isMobile?: boolean;
  }

  export interface WaitForSelector {
    selector: string;
    hidden?: true;
    /**
     * @maximum 120000
     */
    timeout?: number;
    visible?: true;
  }
}

export interface BrapiPostMarkdownResponse {
  meta: BrapiPostMarkdownResponse.Meta;
  /**
   * Response status.
   */
  success: boolean;
  errors?: Array<BrapiPostMarkdownResponse.Error>;
  /**
   * Markdown content. Prefixed with YAML frontmatter (e.g. `title`) when the page provides that metadata.
   */
  result?: string;
}

export namespace BrapiPostMarkdownResponse {
  export interface Meta {
    /**
     * URL that served the response, after any redirects the browser followed.
     */
    finalUrl?: string;
    /**
     * Origin response headers, lowercased. Repeated headers are joined with a newline. Credential and transport-only headers that do not survive rendering are omitted.
     */
    headers?: Record<string, string>;
    /**
     * HTTP redirects followed to reach `finalUrl`, oldest first. Omitted for direct navigation and for client-side redirects such as meta refresh. An empty array means redirects occurred but their intermediate responses could not be read.
     */
    redirectChain?: Array<Meta.RedirectChain>;
    /**
     * HTTP status returned by the origin.
     */
    status?: number;
    /**
     * Page title.
     */
    title?: string;
  }

  export namespace Meta {
    export interface RedirectChain {
      /**
       * Redirect response headers, including `location`.
       */
      headers: Record<string, string>;
      /**
       * HTTP status of the redirect.
       */
      status: number;
      /**
       * URL that returned the redirect.
       */
      url: string;
    }
  }

  export interface Error {
    /**
     * Error code.
     */
    code: number;
    /**
     * Error message.
     */
    message: string;
  }
}

export interface BrapiPostPdfParams {
  /**
   * Query param: Cache TTL default is 5s. Set to 0 to disable.
   * @default 5
   * @minimum 0
   * @maximum 86400
   */
  cacheTTL?: number;
  /**
   * Body param: The maximum duration allowed for the browser action to complete after the page has loaded (such as taking screenshots, extracting content, or generating PDFs). If this time limit is exceeded, the action stops and returns a timeout error.
   * @maximum 120000
   */
  actionTimeout?: number;
  /**
   * Body param: Adds a `<script>` tag into the page with the desired URL or content.
   */
  addScriptTag?: Array<BrapiPostPdfParams.AddScriptTag>;
  /**
   * Body param: Adds a `<link rel="stylesheet">` tag into the page with the desired URL or a `<style type="text/css">` tag with the content.
   */
  addStyleTag?: Array<BrapiPostPdfParams.AddStyleTag>;
  /**
   * Body param: Only allow requests that match the provided regex patterns, eg. '/^.*\.(css)'. Reject rules are applied first.
   */
  allowRequestPattern?: Array<string>;
  /**
   * Body param: Only allow requests that match the provided resource types, eg. 'image' or 'script'. Reject rules are applied first.
   */
  allowResourceTypes?: Array<
    | 'document'
    | 'stylesheet'
    | 'image'
    | 'media'
    | 'font'
    | 'script'
    | 'texttrack'
    | 'xhr'
    | 'fetch'
    | 'prefetch'
    | 'eventsource'
    | 'websocket'
    | 'manifest'
    | 'signedexchange'
    | 'ping'
    | 'cspviolationreport'
    | 'preflight'
    | 'other'
  >;
  /**
   * Body param: Provide credentials for HTTP authentication.
   */
  authenticate?: BrapiPostPdfParams.Authenticate;
  /**
   * Body param: Attempt to proceed when 'awaited' events fail or timeout.
   */
  bestAttempt?: boolean;
  /**
   * Body param: Check [options](https://pptr.dev/api/puppeteer.page.setcookie).
   */
  cookies?: Array<BrapiPostPdfParams.Cookie>;
  /**
   * Body param
   */
  emulateMediaType?: string;
  /**
   * Body param: Check [options](https://pptr.dev/api/puppeteer.gotooptions).
   * @default {}
   */
  gotoOptions?: BrapiPostPdfParams.GotoOptions;
  /**
   * Body param: Set the content of the page, eg: `<h1>Hello World!!</h1>`. Either `html` or `url` must be set.
   * @minLength 1
   */
  html?: string;
  /**
   * Body param: Check [options](https://pptr.dev/api/puppeteer.pdfoptions).
   * @default {}
   */
  pdfOptions?: BrapiPostPdfParams.PdfOptions;
  /**
   * Body param: Block undesired requests that match the provided regex patterns, eg. '/^.*\.(css)'.
   */
  rejectRequestPattern?: Array<string>;
  /**
   * Body param: Block undesired requests that match the provided resource types, eg. 'image' or 'script'.
   */
  rejectResourceTypes?: Array<
    | 'document'
    | 'stylesheet'
    | 'image'
    | 'media'
    | 'font'
    | 'script'
    | 'texttrack'
    | 'xhr'
    | 'fetch'
    | 'prefetch'
    | 'eventsource'
    | 'websocket'
    | 'manifest'
    | 'signedexchange'
    | 'ping'
    | 'cspviolationreport'
    | 'preflight'
    | 'other'
  >;
  /**
   * Body param
   */
  setExtraHTTPHeaders?: Record<string, string>;
  /**
   * Body param
   */
  setJavaScriptEnabled?: boolean;
  /**
   * Body param: URL to navigate to, eg. `https://example.com`.
   * @format uri
   */
  url?: string;
  /**
   * Body param
   * @default Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36
   */
  userAgent?: string;
  /**
   * Body param: Check [options](https://pptr.dev/api/puppeteer.page.setviewport).
   * @default {"height":1080,"width":1920}
   */
  viewport?: BrapiPostPdfParams.Viewport;
  /**
   * Body param: Wait for the selector to appear in page. Check [options](https://pptr.dev/api/puppeteer.page.waitforselector).
   */
  waitForSelector?: BrapiPostPdfParams.WaitForSelector;
  /**
   * Body param: Waits for a specified timeout before continuing.
   * @maximum 120000
   */
  waitForTimeout?: number;
}

export namespace BrapiPostPdfParams {
  export interface AddScriptTag {
    content?: string;
    id?: string;
    type?: string;
    /**
     * @format uri
     */
    url?: string;
  }

  export interface AddStyleTag {
    content?: string;
    /**
     * @format uri
     */
    url?: string;
  }

  export interface Authenticate {
    /**
     * @minLength 1
     */
    password: string;
    /**
     * @minLength 1
     */
    username: string;
  }

  export interface Cookie {
    /**
     * Cookie name.
     */
    name: string;
    value: string;
    domain?: string;
    expires?: number;
    httpOnly?: boolean;
    partitionKey?: string;
    path?: string;
    priority?: 'Low' | 'Medium' | 'High';
    sameParty?: boolean;
    sameSite?: 'Strict' | 'Lax' | 'None';
    secure?: boolean;
    sourcePort?: number;
    sourceScheme?: 'Unset' | 'NonSecure' | 'Secure';
    url?: string;
  }

  export interface GotoOptions {
    referer?: string;
    referrerPolicy?: string;
    /**
     * @default 30000
     * @maximum 60000
     */
    timeout?: number;
    /**
     * @default domcontentloaded
     */
    waitUntil?:
      | 'load'
      | 'domcontentloaded'
      | 'networkidle0'
      | 'networkidle2'
      | Array<'load' | 'domcontentloaded' | 'networkidle0' | 'networkidle2'>;
  }

  export interface PdfOptions {
    /**
     * Whether to show the header and footer.
     * @default false
     */
    displayHeaderFooter?: boolean;
    /**
     * HTML template for the print footer.
     */
    footerTemplate?: string;
    /**
     * Paper format. Takes priority over width and height if set.
     * @default letter
     */
    format?: 'letter' | 'legal' | 'tabloid' | 'ledger' | 'a0' | 'a1' | 'a2' | 'a3' | 'a4' | 'a5' | 'a6';
    /**
     * HTML template for the print header.
     */
    headerTemplate?: string;
    /**
     * Sets the height of paper. Can be a number or string with unit.
     */
    height?: string | number;
    /**
     * Whether to print in landscape orientation.
     * @default false
     */
    landscape?: boolean;
    /**
     * Set the PDF margins. Useful when setting header and footer.
     */
    margin?: PdfOptions.Margin;
    /**
     * Hides default white background and allows generating pdfs with transparency.
     * @default false
     */
    omitBackground?: boolean;
    /**
     * Generate document outline.
     * @default false
     */
    outline?: boolean;
    /**
     * Paper ranges to print, e.g. '1-5, 8, 11-13'.
     */
    pageRanges?: string;
    /**
     * Give CSS @page size priority over other size declarations.
     * @default false
     */
    preferCSSPageSize?: boolean;
    /**
     * Set to true to print background graphics.
     * @default false
     */
    printBackground?: boolean;
    /**
     * Scales the rendering of the web page. Amount must be between 0.1 and 2.
     * @default 1
     * @minimum 0.1
     * @maximum 2
     */
    scale?: number;
    /**
     * Generate tagged (accessible) PDF.
     * @default true
     */
    tagged?: boolean;
    /**
     * Timeout in milliseconds.
     * @default 30000
     */
    timeout?: number;
    /**
     * Sets the width of paper. Can be a number or string with unit.
     */
    width?: string | number;
  }

  export namespace PdfOptions {
    export interface Margin {
      bottom?: string | number;
      left?: string | number;
      right?: string | number;
      top?: string | number;
    }
  }

  export interface Viewport {
    height: number;
    width: number;
    deviceScaleFactor?: number;
    hasTouch?: boolean;
    isLandscape?: boolean;
    isMobile?: boolean;
  }

  export interface WaitForSelector {
    selector: string;
    hidden?: true;
    /**
     * @maximum 120000
     */
    timeout?: number;
    visible?: true;
  }
}

export interface BrapiPostScrapeParams {
  /**
   * Query param: Cache TTL default is 5s. Set to 0 to disable.
   * @default 5
   * @minimum 0
   * @maximum 86400
   */
  cacheTTL?: number;
  /**
   * Body param: The maximum duration allowed for the browser action to complete after the page has loaded (such as taking screenshots, extracting content, or generating PDFs). If this time limit is exceeded, the action stops and returns a timeout error.
   * @maximum 120000
   */
  actionTimeout?: number;
  /**
   * Body param: Adds a `<script>` tag into the page with the desired URL or content.
   */
  addScriptTag?: Array<BrapiPostScrapeParams.AddScriptTag>;
  /**
   * Body param: Adds a `<link rel="stylesheet">` tag into the page with the desired URL or a `<style type="text/css">` tag with the content.
   */
  addStyleTag?: Array<BrapiPostScrapeParams.AddStyleTag>;
  /**
   * Body param: Only allow requests that match the provided regex patterns, eg. '/^.*\.(css)'. Reject rules are applied first.
   */
  allowRequestPattern?: Array<string>;
  /**
   * Body param: Only allow requests that match the provided resource types, eg. 'image' or 'script'. Reject rules are applied first.
   */
  allowResourceTypes?: Array<
    | 'document'
    | 'stylesheet'
    | 'image'
    | 'media'
    | 'font'
    | 'script'
    | 'texttrack'
    | 'xhr'
    | 'fetch'
    | 'prefetch'
    | 'eventsource'
    | 'websocket'
    | 'manifest'
    | 'signedexchange'
    | 'ping'
    | 'cspviolationreport'
    | 'preflight'
    | 'other'
  >;
  /**
   * Body param: Provide credentials for HTTP authentication.
   */
  authenticate?: BrapiPostScrapeParams.Authenticate;
  /**
   * Body param: Attempt to proceed when 'awaited' events fail or timeout.
   */
  bestAttempt?: boolean;
  /**
   * Body param: Check [options](https://pptr.dev/api/puppeteer.page.setcookie).
   */
  cookies?: Array<BrapiPostScrapeParams.Cookie>;
  /**
   * Body param
   * @minItems 1
   */
  elements: Array<BrapiPostScrapeParams.Element>;
  /**
   * Body param
   */
  emulateMediaType?: string;
  /**
   * Body param: Check [options](https://pptr.dev/api/puppeteer.gotooptions).
   * @default {}
   */
  gotoOptions?: BrapiPostScrapeParams.GotoOptions;
  /**
   * Body param: Set the content of the page, eg: `<h1>Hello World!!</h1>`. Either `html` or `url` must be set.
   * @minLength 1
   */
  html?: string;
  /**
   * Body param: Block undesired requests that match the provided regex patterns, eg. '/^.*\.(css)'.
   */
  rejectRequestPattern?: Array<string>;
  /**
   * Body param: Block undesired requests that match the provided resource types, eg. 'image' or 'script'.
   */
  rejectResourceTypes?: Array<
    | 'document'
    | 'stylesheet'
    | 'image'
    | 'media'
    | 'font'
    | 'script'
    | 'texttrack'
    | 'xhr'
    | 'fetch'
    | 'prefetch'
    | 'eventsource'
    | 'websocket'
    | 'manifest'
    | 'signedexchange'
    | 'ping'
    | 'cspviolationreport'
    | 'preflight'
    | 'other'
  >;
  /**
   * Body param
   */
  setExtraHTTPHeaders?: Record<string, string>;
  /**
   * Body param
   */
  setJavaScriptEnabled?: boolean;
  /**
   * Body param: URL to navigate to, eg. `https://example.com`.
   * @format uri
   */
  url?: string;
  /**
   * Body param
   * @default Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36
   */
  userAgent?: string;
  /**
   * Body param: Check [options](https://pptr.dev/api/puppeteer.page.setviewport).
   * @default {"height":1080,"width":1920}
   */
  viewport?: BrapiPostScrapeParams.Viewport;
  /**
   * Body param: Wait for the selector to appear in page. Check [options](https://pptr.dev/api/puppeteer.page.waitforselector).
   */
  waitForSelector?: BrapiPostScrapeParams.WaitForSelector;
  /**
   * Body param: Waits for a specified timeout before continuing.
   * @maximum 120000
   */
  waitForTimeout?: number;
}

export namespace BrapiPostScrapeParams {
  export interface AddScriptTag {
    content?: string;
    id?: string;
    type?: string;
    /**
     * @format uri
     */
    url?: string;
  }

  export interface AddStyleTag {
    content?: string;
    /**
     * @format uri
     */
    url?: string;
  }

  export interface Authenticate {
    /**
     * @minLength 1
     */
    password: string;
    /**
     * @minLength 1
     */
    username: string;
  }

  export interface Cookie {
    /**
     * Cookie name.
     */
    name: string;
    value: string;
    domain?: string;
    expires?: number;
    httpOnly?: boolean;
    partitionKey?: string;
    path?: string;
    priority?: 'Low' | 'Medium' | 'High';
    sameParty?: boolean;
    sameSite?: 'Strict' | 'Lax' | 'None';
    secure?: boolean;
    sourcePort?: number;
    sourceScheme?: 'Unset' | 'NonSecure' | 'Secure';
    url?: string;
  }

  export interface Element {
    selector: string;
  }

  export interface GotoOptions {
    referer?: string;
    referrerPolicy?: string;
    /**
     * @default 30000
     * @maximum 60000
     */
    timeout?: number;
    /**
     * @default domcontentloaded
     */
    waitUntil?:
      | 'load'
      | 'domcontentloaded'
      | 'networkidle0'
      | 'networkidle2'
      | Array<'load' | 'domcontentloaded' | 'networkidle0' | 'networkidle2'>;
  }

  export interface Viewport {
    height: number;
    width: number;
    deviceScaleFactor?: number;
    hasTouch?: boolean;
    isLandscape?: boolean;
    isMobile?: boolean;
  }

  export interface WaitForSelector {
    selector: string;
    hidden?: true;
    /**
     * @maximum 120000
     */
    timeout?: number;
    visible?: true;
  }
}

export interface BrapiPostScrapeResponse {
  meta: BrapiPostScrapeResponse.Meta;
  result: Array<BrapiPostScrapeResponse.Result>;
  /**
   * Response status.
   */
  success: boolean;
  errors?: Array<BrapiPostScrapeResponse.Error>;
}

export namespace BrapiPostScrapeResponse {
  export interface Meta {
    /**
     * URL that served the response, after any redirects the browser followed.
     */
    finalUrl?: string;
    /**
     * Origin response headers, lowercased. Repeated headers are joined with a newline. Credential and transport-only headers that do not survive rendering are omitted.
     */
    headers?: Record<string, string>;
    /**
     * HTTP redirects followed to reach `finalUrl`, oldest first. Omitted for direct navigation and for client-side redirects such as meta refresh. An empty array means redirects occurred but their intermediate responses could not be read.
     */
    redirectChain?: Array<Meta.RedirectChain>;
    /**
     * HTTP status returned by the origin.
     */
    status?: number;
    /**
     * Page title.
     */
    title?: string;
  }

  export namespace Meta {
    export interface RedirectChain {
      /**
       * Redirect response headers, including `location`.
       */
      headers: Record<string, string>;
      /**
       * HTTP status of the redirect.
       */
      status: number;
      /**
       * URL that returned the redirect.
       */
      url: string;
    }
  }

  export interface Result {
    results: Result.Results;
    /**
     * Selector.
     */
    selector: string;
  }

  export namespace Result {
    export interface Results {
      attributes: Array<Results.Attribute>;
      /**
       * Element height.
       */
      height: number;
      /**
       * HTML content.
       */
      html: string;
      /**
       * Element left.
       */
      left: number;
      /**
       * Text content.
       */
      text: string;
      /**
       * Element top.
       */
      top: number;
      /**
       * Element width.
       */
      width: number;
    }

    export namespace Results {
      export interface Attribute {
        /**
         * Attribute name.
         */
        name: string;
        /**
         * Attribute value.
         */
        value: string;
      }
    }
  }

  export interface Error {
    /**
     * Error code.
     */
    code: number;
    /**
     * Error message.
     */
    message: string;
  }
}

export interface BrapiPostScreenshotParams {
  /**
   * Query param: Cache TTL default is 5s. Set to 0 to disable.
   * @default 5
   * @minimum 0
   * @maximum 86400
   */
  cacheTTL?: number;
  /**
   * Body param: The maximum duration allowed for the browser action to complete after the page has loaded (such as taking screenshots, extracting content, or generating PDFs). If this time limit is exceeded, the action stops and returns a timeout error.
   * @maximum 120000
   */
  actionTimeout?: number;
  /**
   * Body param: Adds a `<script>` tag into the page with the desired URL or content.
   */
  addScriptTag?: Array<BrapiPostScreenshotParams.AddScriptTag>;
  /**
   * Body param: Adds a `<link rel="stylesheet">` tag into the page with the desired URL or a `<style type="text/css">` tag with the content.
   */
  addStyleTag?: Array<BrapiPostScreenshotParams.AddStyleTag>;
  /**
   * Body param: Only allow requests that match the provided regex patterns, eg. '/^.*\.(css)'. Reject rules are applied first.
   */
  allowRequestPattern?: Array<string>;
  /**
   * Body param: Only allow requests that match the provided resource types, eg. 'image' or 'script'. Reject rules are applied first.
   */
  allowResourceTypes?: Array<
    | 'document'
    | 'stylesheet'
    | 'image'
    | 'media'
    | 'font'
    | 'script'
    | 'texttrack'
    | 'xhr'
    | 'fetch'
    | 'prefetch'
    | 'eventsource'
    | 'websocket'
    | 'manifest'
    | 'signedexchange'
    | 'ping'
    | 'cspviolationreport'
    | 'preflight'
    | 'other'
  >;
  /**
   * Body param: Provide credentials for HTTP authentication.
   */
  authenticate?: BrapiPostScreenshotParams.Authenticate;
  /**
   * Body param: Attempt to proceed when 'awaited' events fail or timeout.
   */
  bestAttempt?: boolean;
  /**
   * Body param: Check [options](https://pptr.dev/api/puppeteer.page.setcookie).
   */
  cookies?: Array<BrapiPostScreenshotParams.Cookie>;
  /**
   * Body param
   */
  emulateMediaType?: string;
  /**
   * Body param: Check [options](https://pptr.dev/api/puppeteer.gotooptions).
   * @default {}
   */
  gotoOptions?: BrapiPostScreenshotParams.GotoOptions;
  /**
   * Body param: Set the content of the page, eg: `<h1>Hello World!!</h1>`. Either `html` or `url` must be set.
   * @minLength 1
   */
  html?: string;
  /**
   * Body param: Block undesired requests that match the provided regex patterns, eg. '/^.*\.(css)'.
   */
  rejectRequestPattern?: Array<string>;
  /**
   * Body param: Block undesired requests that match the provided resource types, eg. 'image' or 'script'.
   */
  rejectResourceTypes?: Array<
    | 'document'
    | 'stylesheet'
    | 'image'
    | 'media'
    | 'font'
    | 'script'
    | 'texttrack'
    | 'xhr'
    | 'fetch'
    | 'prefetch'
    | 'eventsource'
    | 'websocket'
    | 'manifest'
    | 'signedexchange'
    | 'ping'
    | 'cspviolationreport'
    | 'preflight'
    | 'other'
  >;
  /**
   * Body param: Check [options](https://pptr.dev/api/puppeteer.screenshotoptions).
   * @default {}
   */
  screenshotOptions?: BrapiPostScreenshotParams.ScreenshotOptions;
  /**
   * Body param
   */
  scrollPage?: boolean;
  /**
   * Body param
   */
  selector?: string;
  /**
   * Body param
   */
  setExtraHTTPHeaders?: Record<string, string>;
  /**
   * Body param
   */
  setJavaScriptEnabled?: boolean;
  /**
   * Body param: URL to navigate to, eg. `https://example.com`.
   * @format uri
   */
  url?: string;
  /**
   * Body param
   * @default Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36
   */
  userAgent?: string;
  /**
   * Body param: Check [options](https://pptr.dev/api/puppeteer.page.setviewport).
   * @default {"height":1080,"width":1920}
   */
  viewport?: BrapiPostScreenshotParams.Viewport;
  /**
   * Body param: Wait for the selector to appear in page. Check [options](https://pptr.dev/api/puppeteer.page.waitforselector).
   */
  waitForSelector?: BrapiPostScreenshotParams.WaitForSelector;
  /**
   * Body param: Waits for a specified timeout before continuing.
   * @maximum 120000
   */
  waitForTimeout?: number;
}

export namespace BrapiPostScreenshotParams {
  export interface AddScriptTag {
    content?: string;
    id?: string;
    type?: string;
    /**
     * @format uri
     */
    url?: string;
  }

  export interface AddStyleTag {
    content?: string;
    /**
     * @format uri
     */
    url?: string;
  }

  export interface Authenticate {
    /**
     * @minLength 1
     */
    password: string;
    /**
     * @minLength 1
     */
    username: string;
  }

  export interface Cookie {
    /**
     * Cookie name.
     */
    name: string;
    value: string;
    domain?: string;
    expires?: number;
    httpOnly?: boolean;
    partitionKey?: string;
    path?: string;
    priority?: 'Low' | 'Medium' | 'High';
    sameParty?: boolean;
    sameSite?: 'Strict' | 'Lax' | 'None';
    secure?: boolean;
    sourcePort?: number;
    sourceScheme?: 'Unset' | 'NonSecure' | 'Secure';
    url?: string;
  }

  export interface GotoOptions {
    referer?: string;
    referrerPolicy?: string;
    /**
     * @default 30000
     * @maximum 60000
     */
    timeout?: number;
    /**
     * @default domcontentloaded
     */
    waitUntil?:
      | 'load'
      | 'domcontentloaded'
      | 'networkidle0'
      | 'networkidle2'
      | Array<'load' | 'domcontentloaded' | 'networkidle0' | 'networkidle2'>;
  }

  export interface ScreenshotOptions {
    captureBeyondViewport?: boolean;
    clip?: ScreenshotOptions.Clip;
    /**
     * @default binary
     */
    encoding?: 'binary' | 'base64';
    fromSurface?: boolean;
    fullPage?: boolean;
    omitBackground?: boolean;
    optimizeForSpeed?: boolean;
    quality?: number;
    /**
     * @default png
     */
    type?: 'png' | 'jpeg' | 'webp';
  }

  export namespace ScreenshotOptions {
    export interface Clip {
      height: number;
      width: number;
      x: number;
      y: number;
      scale?: number;
    }
  }

  export interface Viewport {
    height: number;
    width: number;
    deviceScaleFactor?: number;
    hasTouch?: boolean;
    isLandscape?: boolean;
    isMobile?: boolean;
  }

  export interface WaitForSelector {
    selector: string;
    hidden?: true;
    /**
     * @maximum 120000
     */
    timeout?: number;
    visible?: true;
  }
}

export interface BrapiPostScreenshotResponse {
  /**
   * Response status.
   */
  success: boolean;
  errors?: Array<BrapiPostScreenshotResponse.Error>;
}

export namespace BrapiPostScreenshotResponse {
  export interface Error {
    /**
     * Error code.
     */
    code: number;
    /**
     * Error message.
     */
    message: string;
  }
}

export interface BrapiPostSnapshotParams {
  /**
   * Query param: Cache TTL default is 5s. Set to 0 to disable.
   * @default 5
   * @minimum 0
   * @maximum 86400
   */
  cacheTTL?: number;
  /**
   * Body param: The maximum duration allowed for the browser action to complete after the page has loaded (such as taking screenshots, extracting content, or generating PDFs). If this time limit is exceeded, the action stops and returns a timeout error.
   * @maximum 120000
   */
  actionTimeout?: number;
  /**
   * Body param: Adds a `<script>` tag into the page with the desired URL or content.
   */
  addScriptTag?: Array<BrapiPostSnapshotParams.AddScriptTag>;
  /**
   * Body param: Adds a `<link rel="stylesheet">` tag into the page with the desired URL or a `<style type="text/css">` tag with the content.
   */
  addStyleTag?: Array<BrapiPostSnapshotParams.AddStyleTag>;
  /**
   * Body param: Only allow requests that match the provided regex patterns, eg. '/^.*\.(css)'. Reject rules are applied first.
   */
  allowRequestPattern?: Array<string>;
  /**
   * Body param: Only allow requests that match the provided resource types, eg. 'image' or 'script'. Reject rules are applied first.
   */
  allowResourceTypes?: Array<
    | 'document'
    | 'stylesheet'
    | 'image'
    | 'media'
    | 'font'
    | 'script'
    | 'texttrack'
    | 'xhr'
    | 'fetch'
    | 'prefetch'
    | 'eventsource'
    | 'websocket'
    | 'manifest'
    | 'signedexchange'
    | 'ping'
    | 'cspviolationreport'
    | 'preflight'
    | 'other'
  >;
  /**
   * Body param: Provide credentials for HTTP authentication.
   */
  authenticate?: BrapiPostSnapshotParams.Authenticate;
  /**
   * Body param: Attempt to proceed when 'awaited' events fail or timeout.
   */
  bestAttempt?: boolean;
  /**
   * Body param: Check [options](https://pptr.dev/api/puppeteer.page.setcookie).
   */
  cookies?: Array<BrapiPostSnapshotParams.Cookie>;
  /**
   * Body param
   */
  emulateMediaType?: string;
  /**
   * Body param
   * @default ["content","screenshot"]
   */
  formats?: Array<'content' | 'screenshot' | 'markdown' | 'accessibilityTree'>;
  /**
   * Body param: Check [options](https://pptr.dev/api/puppeteer.gotooptions).
   * @default {}
   */
  gotoOptions?: BrapiPostSnapshotParams.GotoOptions;
  /**
   * Body param: Set the content of the page, eg: `<h1>Hello World!!</h1>`. Either `html` or `url` must be set.
   * @minLength 1
   */
  html?: string;
  /**
   * Body param: Block undesired requests that match the provided regex patterns, eg. '/^.*\.(css)'.
   */
  rejectRequestPattern?: Array<string>;
  /**
   * Body param: Block undesired requests that match the provided resource types, eg. 'image' or 'script'.
   */
  rejectResourceTypes?: Array<
    | 'document'
    | 'stylesheet'
    | 'image'
    | 'media'
    | 'font'
    | 'script'
    | 'texttrack'
    | 'xhr'
    | 'fetch'
    | 'prefetch'
    | 'eventsource'
    | 'websocket'
    | 'manifest'
    | 'signedexchange'
    | 'ping'
    | 'cspviolationreport'
    | 'preflight'
    | 'other'
  >;
  /**
   * Body param
   * @default {}
   */
  screenshotOptions?: BrapiPostSnapshotParams.ScreenshotOptions;
  /**
   * Body param
   */
  setExtraHTTPHeaders?: Record<string, string>;
  /**
   * Body param
   */
  setJavaScriptEnabled?: boolean;
  /**
   * Body param: URL to navigate to, eg. `https://example.com`.
   * @format uri
   */
  url?: string;
  /**
   * Body param
   * @default Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36
   */
  userAgent?: string;
  /**
   * Body param: Check [options](https://pptr.dev/api/puppeteer.page.setviewport).
   * @default {"height":1080,"width":1920}
   */
  viewport?: BrapiPostSnapshotParams.Viewport;
  /**
   * Body param: Wait for the selector to appear in page. Check [options](https://pptr.dev/api/puppeteer.page.waitforselector).
   */
  waitForSelector?: BrapiPostSnapshotParams.WaitForSelector;
  /**
   * Body param: Waits for a specified timeout before continuing.
   * @maximum 120000
   */
  waitForTimeout?: number;
}

export namespace BrapiPostSnapshotParams {
  export interface AddScriptTag {
    content?: string;
    id?: string;
    type?: string;
    /**
     * @format uri
     */
    url?: string;
  }

  export interface AddStyleTag {
    content?: string;
    /**
     * @format uri
     */
    url?: string;
  }

  export interface Authenticate {
    /**
     * @minLength 1
     */
    password: string;
    /**
     * @minLength 1
     */
    username: string;
  }

  export interface Cookie {
    /**
     * Cookie name.
     */
    name: string;
    value: string;
    domain?: string;
    expires?: number;
    httpOnly?: boolean;
    partitionKey?: string;
    path?: string;
    priority?: 'Low' | 'Medium' | 'High';
    sameParty?: boolean;
    sameSite?: 'Strict' | 'Lax' | 'None';
    secure?: boolean;
    sourcePort?: number;
    sourceScheme?: 'Unset' | 'NonSecure' | 'Secure';
    url?: string;
  }

  export interface GotoOptions {
    referer?: string;
    referrerPolicy?: string;
    /**
     * @default 30000
     * @maximum 60000
     */
    timeout?: number;
    /**
     * @default domcontentloaded
     */
    waitUntil?:
      | 'load'
      | 'domcontentloaded'
      | 'networkidle0'
      | 'networkidle2'
      | Array<'load' | 'domcontentloaded' | 'networkidle0' | 'networkidle2'>;
  }

  export interface ScreenshotOptions {
    captureBeyondViewport?: boolean;
    clip?: ScreenshotOptions.Clip;
    fromSurface?: boolean;
    fullPage?: boolean;
    omitBackground?: boolean;
    optimizeForSpeed?: boolean;
    quality?: number;
    /**
     * @default png
     */
    type?: 'png' | 'jpeg' | 'webp';
  }

  export namespace ScreenshotOptions {
    export interface Clip {
      height: number;
      width: number;
      x: number;
      y: number;
      scale?: number;
    }
  }

  export interface Viewport {
    height: number;
    width: number;
    deviceScaleFactor?: number;
    hasTouch?: boolean;
    isLandscape?: boolean;
    isMobile?: boolean;
  }

  export interface WaitForSelector {
    selector: string;
    hidden?: true;
    /**
     * @maximum 120000
     */
    timeout?: number;
    visible?: true;
  }
}

export interface BrapiPostSnapshotResponse {
  meta: BrapiPostSnapshotResponse.Meta;
  /**
   * Response status.
   */
  success: boolean;
  errors?: Array<BrapiPostSnapshotResponse.Error>;
  result?: BrapiPostSnapshotResponse.Result;
}

export namespace BrapiPostSnapshotResponse {
  export interface Meta {
    /**
     * URL that served the response, after any redirects the browser followed.
     */
    finalUrl?: string;
    /**
     * Origin response headers, lowercased. Repeated headers are joined with a newline. Credential and transport-only headers that do not survive rendering are omitted.
     */
    headers?: Record<string, string>;
    /**
     * HTTP redirects followed to reach `finalUrl`, oldest first. Omitted for direct navigation and for client-side redirects such as meta refresh. An empty array means redirects occurred but their intermediate responses could not be read.
     */
    redirectChain?: Array<Meta.RedirectChain>;
    /**
     * HTTP status returned by the origin.
     */
    status?: number;
    /**
     * Page title.
     */
    title?: string;
  }

  export namespace Meta {
    export interface RedirectChain {
      /**
       * Redirect response headers, including `location`.
       */
      headers: Record<string, string>;
      /**
       * HTTP status of the redirect.
       */
      status: number;
      /**
       * URL that returned the redirect.
       */
      url: string;
    }
  }

  export interface Error {
    /**
     * Error code.
     */
    code: number;
    /**
     * Error message.
     */
    message: string;
  }

  export interface Result {
    accessibilityTree?: unknown;
    /**
     * HTML content.
     */
    content?: string;
    /**
     * Markdown content. Prefixed with YAML frontmatter (e.g. `title`) when the page provides that metadata.
     */
    markdown?: string;
    /**
     * Base64 encoded image.
     */
    screenshot?: string;
  }
}
export declare namespace Brapi {
  export {
    type BrapiPostAccessibilityTreeResponse as BrapiPostAccessibilityTreeResponse,
    type BrapiPostContentResponse as BrapiPostContentResponse,
    type BrapiPostCrawlResponse as BrapiPostCrawlResponse,
    type BrapiDeleteCancelCrawlResponse as BrapiDeleteCancelCrawlResponse,
    type BrapiRetrieveCrawlResultResponse as BrapiRetrieveCrawlResultResponse,
    type BrapiPostDevtoolsAcquireResponse as BrapiPostDevtoolsAcquireResponse,
    type BrapiDeleteDevtoolsBrowserDeleteResponse as BrapiDeleteDevtoolsBrowserDeleteResponse,
    type BrapiListDevtoolsJsonResponse as BrapiListDevtoolsJsonResponse,
    type BrapiRetrieveDevtoolsJsonActivateResponse as BrapiRetrieveDevtoolsJsonActivateResponse,
    type BrapiRetrieveDevtoolsJsonCloseResponse as BrapiRetrieveDevtoolsJsonCloseResponse,
    type BrapiListDevtoolsJsonListResponse as BrapiListDevtoolsJsonListResponse,
    type BrapiRetrieveDevtoolsJsonTargetResponse as BrapiRetrieveDevtoolsJsonTargetResponse,
    type BrapiPutDevtoolsJsonNewResponse as BrapiPutDevtoolsJsonNewResponse,
    type BrapiListDevtoolsJsonProtocolResponse as BrapiListDevtoolsJsonProtocolResponse,
    type BrapiListDevtoolsJsonVersionResponse as BrapiListDevtoolsJsonVersionResponse,
    type BrapiPostDevtoolsLiveViewResponse as BrapiPostDevtoolsLiveViewResponse,
    type BrapiListDevtoolsSessionListResponse as BrapiListDevtoolsSessionListResponse,
    type BrapiRetrieveDevtoolsSessionDetailsResponse as BrapiRetrieveDevtoolsSessionDetailsResponse,
    type BrapiPostJsonResponse as BrapiPostJsonResponse,
    type BrapiPostLinksResponse as BrapiPostLinksResponse,
    type BrapiPostMarkdownResponse as BrapiPostMarkdownResponse,
    type BrapiPostScrapeResponse as BrapiPostScrapeResponse,
    type BrapiPostScreenshotResponse as BrapiPostScreenshotResponse,
    type BrapiPostSnapshotResponse as BrapiPostSnapshotResponse,
    type BrapiPostAccessibilityTreeParams as BrapiPostAccessibilityTreeParams,
    type BrapiPostContentParams as BrapiPostContentParams,
    type BrapiPostCrawlParams as BrapiPostCrawlParams,
    type BrapiDeleteCancelCrawlParams as BrapiDeleteCancelCrawlParams,
    type BrapiRetrieveCrawlResultParams as BrapiRetrieveCrawlResultParams,
    type BrapiListDevtoolsBrowserAcquireParams as BrapiListDevtoolsBrowserAcquireParams,
    type BrapiPostDevtoolsAcquireParams as BrapiPostDevtoolsAcquireParams,
    type BrapiDeleteDevtoolsBrowserDeleteParams as BrapiDeleteDevtoolsBrowserDeleteParams,
    type BrapiRetrieveDevtoolsBrowserParams as BrapiRetrieveDevtoolsBrowserParams,
    type BrapiListDevtoolsJsonParams as BrapiListDevtoolsJsonParams,
    type BrapiRetrieveDevtoolsJsonActivateParams as BrapiRetrieveDevtoolsJsonActivateParams,
    type BrapiRetrieveDevtoolsJsonCloseParams as BrapiRetrieveDevtoolsJsonCloseParams,
    type BrapiListDevtoolsJsonListParams as BrapiListDevtoolsJsonListParams,
    type BrapiRetrieveDevtoolsJsonTargetParams as BrapiRetrieveDevtoolsJsonTargetParams,
    type BrapiPutDevtoolsJsonNewParams as BrapiPutDevtoolsJsonNewParams,
    type BrapiListDevtoolsJsonProtocolParams as BrapiListDevtoolsJsonProtocolParams,
    type BrapiListDevtoolsJsonVersionParams as BrapiListDevtoolsJsonVersionParams,
    type BrapiPostDevtoolsLiveViewParams as BrapiPostDevtoolsLiveViewParams,
    type BrapiRetrieveDevtoolsPageParams as BrapiRetrieveDevtoolsPageParams,
    type BrapiListDevtoolsSessionListParams as BrapiListDevtoolsSessionListParams,
    type BrapiRetrieveDevtoolsSessionDetailsParams as BrapiRetrieveDevtoolsSessionDetailsParams,
    type BrapiPostJsonParams as BrapiPostJsonParams,
    type BrapiPostLinksParams as BrapiPostLinksParams,
    type BrapiPostMarkdownParams as BrapiPostMarkdownParams,
    type BrapiPostPdfParams as BrapiPostPdfParams,
    type BrapiPostScrapeParams as BrapiPostScrapeParams,
    type BrapiPostScreenshotParams as BrapiPostScreenshotParams,
    type BrapiPostSnapshotParams as BrapiPostSnapshotParams,
  };
}
