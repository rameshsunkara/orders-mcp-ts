// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { Ordersapi } from '../client';

export abstract class APIResource {
  protected _client: Ordersapi;

  constructor(client: Ordersapi) {
    this._client = client;
  }
}
