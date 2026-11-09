// File generated from our OpenAPI spec by Scalar. See README.md for details.

import type { UnderGateMultiSection } from './client';

export abstract class APIResource {
  protected _client: UnderGateMultiSection;

  constructor(client: UnderGateMultiSection) {
    this._client = client;
  }
}
