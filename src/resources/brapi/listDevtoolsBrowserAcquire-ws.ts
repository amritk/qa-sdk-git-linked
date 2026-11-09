// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { WebSocket, type ClientOptions } from 'ws';
import { NodeWebSocket } from '../../internal/ws-adapter-node';
import {
  BrapiListDevtoolsBrowserAcquireWSBase,
  type BrapiListDevtoolsBrowserAcquireWSBaseOptions,
  type BrapiListDevtoolsBrowserAcquireWSParameters,
} from './listDevtoolsBrowserAcquire-ws-base';
import { UnderGateMultiSectionQa } from '../../client';

export type {
  BrapiListDevtoolsBrowserAcquireWSParameters,
  BrapiListDevtoolsBrowserAcquireWSReconnectOptions,
} from './listDevtoolsBrowserAcquire-ws-base';

export interface BrapiListDevtoolsBrowserAcquireWSClientOptions
  extends ClientOptions,
    BrapiListDevtoolsBrowserAcquireWSBaseOptions {}

export class BrapiListDevtoolsBrowserAcquireWS extends BrapiListDevtoolsBrowserAcquireWSBase<NodeWebSocket> {
  private _wsOptions: ClientOptions | null | undefined;

  constructor(
    client: UnderGateMultiSectionQa,
    parameters: BrapiListDevtoolsBrowserAcquireWSParameters,
    options?: BrapiListDevtoolsBrowserAcquireWSClientOptions | null | undefined,
  ) {
    if (!WebSocket) {
      throw new Error(
        'BrapiListDevtoolsBrowserAcquireWS requires the "ws" package but it could not be loaded.',
      );
    }

    const { reconnect, maxQueueSize, ...wsOptions } = options ?? {};
    super(client, parameters, { reconnect, maxQueueSize });
    this._wsOptions = wsOptions;
    this._connectInitial();
  }

  protected _createSocket(url: URL, authHeaders: Record<string, string>): NodeWebSocket {
    const ws = new WebSocket(url, {
      ...this._wsOptions,
      headers: {
        ...authHeaders,
        ...this._wsOptions?.headers,
      },
    });
    return new NodeWebSocket(ws);
  }
}
