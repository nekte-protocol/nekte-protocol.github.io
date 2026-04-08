---
title: "Class: HttpTransport"
---

[**nekte-protocol**](../../../index/)

***

[nekte-protocol](../../../index/) / [client/src](../index/) / HttpTransport

# Class: HttpTransport

Defined in: [packages/client/src/http-transport.ts:24](https://github.com/nekte-protocol/nekte/blob/0db92e2a0bcb8fe03621c258c0031f25656c48fd/packages/client/src/http-transport.ts#L24)

## Implements

- [`Transport`](../interfaces/Transport/)

## Constructors

### Constructor

> **new HttpTransport**(`config`): `HttpTransport`

Defined in: [packages/client/src/http-transport.ts:30](https://github.com/nekte-protocol/nekte/blob/0db92e2a0bcb8fe03621c258c0031f25656c48fd/packages/client/src/http-transport.ts#L30)

#### Parameters

##### config

[`HttpTransportConfig`](../interfaces/HttpTransportConfig/)

#### Returns

`HttpTransport`

## Methods

### close()

> **close**(): `Promise`\<`void`\>

Defined in: [packages/client/src/http-transport.ts:128](https://github.com/nekte-protocol/nekte/blob/0db92e2a0bcb8fe03621c258c0031f25656c48fd/packages/client/src/http-transport.ts#L128)

Close the transport and release resources.

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`Transport`](../interfaces/Transport/).[`close`](../interfaces/Transport/#close)

***

### get()

> **get**\<`T`\>(`url`): `Promise`\<`T`\>

Defined in: [packages/client/src/http-transport.ts:120](https://github.com/nekte-protocol/nekte/blob/0db92e2a0bcb8fe03621c258c0031f25656c48fd/packages/client/src/http-transport.ts#L120)

Perform a plain GET request (e.g., Agent Card discovery).

#### Type Parameters

##### T

`T`

#### Parameters

##### url

`string`

#### Returns

`Promise`\<`T`\>

#### Implementation of

[`Transport`](../interfaces/Transport/).[`get`](../interfaces/Transport/#get)

***

### rpc()

> **rpc**\<`T`\>(`method`, `params`): `Promise`\<`NekteResponse`\<`T`\>\>

Defined in: [packages/client/src/http-transport.ts:36](https://github.com/nekte-protocol/nekte/blob/0db92e2a0bcb8fe03621c258c0031f25656c48fd/packages/client/src/http-transport.ts#L36)

Send a JSON-RPC request and receive the parsed response.

#### Type Parameters

##### T

`T`

#### Parameters

##### method

`NekteMethod`

##### params

`unknown`

#### Returns

`Promise`\<`NekteResponse`\<`T`\>\>

#### Implementation of

[`Transport`](../interfaces/Transport/).[`rpc`](../interfaces/Transport/#rpc)

***

### stream()

> **stream**(`method`, `params`): `AsyncGenerator`\<`SseEvent`\>

Defined in: [packages/client/src/http-transport.ts:65](https://github.com/nekte-protocol/nekte/blob/0db92e2a0bcb8fe03621c258c0031f25656c48fd/packages/client/src/http-transport.ts#L65)

Send a request and receive a stream of SSE events.

#### Parameters

##### method

`NekteMethod`

##### params

`unknown`

#### Returns

`AsyncGenerator`\<`SseEvent`\>

#### Implementation of

[`Transport`](../interfaces/Transport/).[`stream`](../interfaces/Transport/#stream)
