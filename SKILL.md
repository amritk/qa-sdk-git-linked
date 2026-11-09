---
name: under-gate-multi-section-typescript-sdk
description: "TypeScript SDK for Under Gate Multi Section API. Use when writing TypeScript code that calls Under Gate Multi Section API with the @qa-switch-test/under-gate-multi-section package: installing it, constructing and authenticating the client, and calling API operations."
---

# Under Gate Multi Section TypeScript SDK

Generated TypeScript client for Under Gate Multi Section API, published as `@qa-switch-test/under-gate-multi-section`. Use the generated client instead of hand-writing HTTP requests.

## Install

```sh
npm install @qa-switch-test/under-gate-multi-section
```

## Client setup and authentication

```ts
import UnderGateMultiSection from '@qa-switch-test/under-gate-multi-section';

const client = new UnderGateMultiSection();
```

## Calling operations

```ts
import UnderGateMultiSection from '@qa-switch-test/under-gate-multi-section';

const client = new UnderGateMultiSection();

const response = await client.accounts.list({
  page: 1,
  per_page: 20,
});

console.log(response);
```

Method names, parameter shapes, and response types are generated from the API description — do not guess them. Look up the exact call signature in [api.md](./api.md) before writing a call.

## WebSockets

WebSocket endpoints open a persistent connection you can send messages to and receive messages from.

```ts
const connection = client.brapi.listDevtoolsBrowserAcquire('accountId', {
  keep_alive: 60000,
  lab: false,
  recording: false,
});

try {
  for await (const message of connection) {
    console.log(message);
  }
} finally {
  connection.close();
}
```

## Error handling

Non-success responses throw generated API errors. Error objects expose status, headers, response body, and request metadata where the target runtime supports it.

```ts
import { APIError } from '@qa-switch-test/under-gate-multi-section';

try {
  const response = await client.accounts.list({
    page: 1,
    per_page: 20,
  });
} catch (err) {
  if (err instanceof APIError) {
    console.log(err.status, err.name, err.headers);
  }
  throw err;
}
```

## Requirements

- Node.js 20+, a modern browser, or any runtime with `fetch` support

## Reference files

- [README.md](./README.md) — full feature tour: client options, request options, retries and timeouts, logging.
- [api.md](./api.md) — complete catalogue of every operation with request and response types.
