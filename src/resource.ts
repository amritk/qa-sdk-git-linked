// File generated from our OpenAPI spec by Scalar. See README.md for details.

import type { UnderGateMultiSectionQa } from './client';

export abstract class APIResource {
  protected _client: UnderGateMultiSectionQa;

  constructor(client: UnderGateMultiSectionQa) {
    this._client = client;
  }
}
