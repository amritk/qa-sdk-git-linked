// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { BrowserWebSocket } from '../../internal/ws-adapter-browser';
import {
  BrapiRetrieveDevtoolsPageWSBase,
  type BrapiRetrieveDevtoolsPageWSBaseOptions,
  type BrapiRetrieveDevtoolsPageWSParameters,
} from './retrieveDevtoolsPage-ws-base';
import { UnderGateMultiSectionQa } from '../../client';

export type {
  BrapiRetrieveDevtoolsPageWSParameters,
  BrapiRetrieveDevtoolsPageWSReconnectOptions,
  BrapiRetrieveDevtoolsPageWSBaseOptions,
} from './retrieveDevtoolsPage-ws-base';

export interface BrapiRetrieveDevtoolsPageWSBrowserOptions extends BrapiRetrieveDevtoolsPageWSBaseOptions {
  /** WebSocket sub-protocols to pass to the browser WebSocket constructor. */
  protocols?: string | string[];
}

// Minimal type declaration for the browser WebSocket constructor.
declare const WebSocket: {
  new (url: string, protocols?: string | string[]): any;
};

export class BrapiRetrieveDevtoolsPageWS extends BrapiRetrieveDevtoolsPageWSBase<BrowserWebSocket> {
  private _protocols: string | string[] | undefined;

  constructor(
    client: UnderGateMultiSectionQa,
    parameters: BrapiRetrieveDevtoolsPageWSParameters,
    options?: BrapiRetrieveDevtoolsPageWSBrowserOptions | null | undefined,
  ) {
    if (typeof (globalThis as any).WebSocket === 'undefined') {
      throw new Error(
        'BrapiRetrieveDevtoolsPageWS requires a browser environment with native WebSocket support.',
      );
    }

    const { reconnect, maxQueueSize, protocols } = options ?? {};
    super(client, parameters, { reconnect, maxQueueSize });
    this._protocols = protocols;
    this._connectInitial();
  }

  protected _createSocket(url: URL, _authHeaders: Record<string, string>): BrowserWebSocket {
    // Browser WebSocket does not support custom headers; auth headers are ignored.
    const ws = new WebSocket(url.toString(), this._protocols);
    return new BrowserWebSocket(ws);
  }
}
