---
title: "Function: createHttpTransport()"
---

[**nekte-protocol**](../../../index/)

***

[nekte-protocol](../../../index/) / [server/src](../index/) / createHttpTransport

# Function: createHttpTransport()

> **createHttpTransport**(`nekteServer`, `config`): `Promise`\<[`HttpTransport`](../interfaces/HttpTransport/)\>

Defined in: [packages/server/src/http-transport.ts:33](https://github.com/nekte-protocol/nekte/blob/0db92e2a0bcb8fe03621c258c0031f25656c48fd/packages/server/src/http-transport.ts#L33)

Create an HTTP transport adapter for a NekteServer.
This is the infrastructure layer — the NekteServer domain stays clean.

## Parameters

### nekteServer

[`NekteServer`](../classes/NekteServer/)

### config

[`HttpTransportConfig`](../interfaces/HttpTransportConfig/)

## Returns

`Promise`\<[`HttpTransport`](../interfaces/HttpTransport/)\>
