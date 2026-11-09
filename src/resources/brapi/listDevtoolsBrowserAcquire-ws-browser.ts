// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { BrowserWebSocket } from '../../internal/ws-adapter-browser';
import {
  BrapiListDevtoolsBrowserAcquireWSBase,
  type BrapiListDevtoolsBrowserAcquireWSBaseOptions,
  type BrapiListDevtoolsBrowserAcquireWSParameters,
} from './listDevtoolsBrowserAcquire-ws-base';
import { UnderGateMultiSectionQa } from '../../client';

export type {
  BrapiListDevtoolsBrowserAcquireWSParameters,
  BrapiListDevtoolsBrowserAcquireWSReconnectOptions,
  BrapiListDevtoolsBrowserAcquireWSBaseOptions,
} from './listDevtoolsBrowserAcquire-ws-base';

export interface BrapiListDevtoolsBrowserAcquireWSBrowserOptions
  extends BrapiListDevtoolsBrowserAcquireWSBaseOptions {
  /** WebSocket sub-protocols to pass to the browser WebSocket constructor. */
  protocols?: string | string[];
}

// Minimal type declaration for the browser WebSocket constructor.
declare const WebSocket: {
  new (url: string, protocols?: string | string[]): any;
};

export class BrapiListDevtoolsBrowserAcquireWS extends BrapiListDevtoolsBrowserAcquireWSBase<BrowserWebSocket> {
  private _protocols: string | string[] | undefined;

  constructor(
    client: UnderGateMultiSectionQa,
    parameters: BrapiListDevtoolsBrowserAcquireWSParameters,
    options?: BrapiListDevtoolsBrowserAcquireWSBrowserOptions | null | undefined,
  ) {
    if (typeof (globalThis as any).WebSocket === 'undefined') {
      throw new Error(
        'BrapiListDevtoolsBrowserAcquireWS requires a browser environment with native WebSocket support.',
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
