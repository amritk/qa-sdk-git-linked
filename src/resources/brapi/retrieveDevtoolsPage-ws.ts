// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { WebSocket, type ClientOptions } from 'ws';
import { NodeWebSocket } from '../../internal/ws-adapter-node';
import {
  BrapiRetrieveDevtoolsPageWSBase,
  type BrapiRetrieveDevtoolsPageWSBaseOptions,
  type BrapiRetrieveDevtoolsPageWSParameters,
} from './retrieveDevtoolsPage-ws-base';
import { UnderGateMultiSectionQa } from '../../client';

export type {
  BrapiRetrieveDevtoolsPageWSParameters,
  BrapiRetrieveDevtoolsPageWSReconnectOptions,
} from './retrieveDevtoolsPage-ws-base';

export interface BrapiRetrieveDevtoolsPageWSClientOptions
  extends ClientOptions,
    BrapiRetrieveDevtoolsPageWSBaseOptions {}

export class BrapiRetrieveDevtoolsPageWS extends BrapiRetrieveDevtoolsPageWSBase<NodeWebSocket> {
  private _wsOptions: ClientOptions | null | undefined;

  constructor(
    client: UnderGateMultiSectionQa,
    parameters: BrapiRetrieveDevtoolsPageWSParameters,
    options?: BrapiRetrieveDevtoolsPageWSClientOptions | null | undefined,
  ) {
    if (!WebSocket) {
      throw new Error('BrapiRetrieveDevtoolsPageWS requires the "ws" package but it could not be loaded.');
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
