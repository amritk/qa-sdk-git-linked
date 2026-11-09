// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { WebSocket, type ClientOptions } from 'ws';
import { NodeWebSocket } from '../../internal/ws-adapter-node';
import {
  BrapiRetrieveDevtoolsBrowserWSBase,
  type BrapiRetrieveDevtoolsBrowserWSBaseOptions,
  type BrapiRetrieveDevtoolsBrowserWSParameters,
} from './retrieveDevtoolsBrowser-ws-base';
import { UnderGateMultiSection } from '../../client';

export type {
  BrapiRetrieveDevtoolsBrowserWSParameters,
  BrapiRetrieveDevtoolsBrowserWSReconnectOptions,
} from './retrieveDevtoolsBrowser-ws-base';

export interface BrapiRetrieveDevtoolsBrowserWSClientOptions
  extends ClientOptions,
    BrapiRetrieveDevtoolsBrowserWSBaseOptions {}

export class BrapiRetrieveDevtoolsBrowserWS extends BrapiRetrieveDevtoolsBrowserWSBase<NodeWebSocket> {
  private _wsOptions: ClientOptions | null | undefined;

  constructor(
    client: UnderGateMultiSection,
    parameters: BrapiRetrieveDevtoolsBrowserWSParameters,
    options?: BrapiRetrieveDevtoolsBrowserWSClientOptions | null | undefined,
  ) {
    if (!WebSocket) {
      throw new Error('BrapiRetrieveDevtoolsBrowserWS requires the "ws" package but it could not be loaded.');
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
