---
title: "Function: createWsTransport()"
---

[**nekte-protocol**](../../../index/)

***

[nekte-protocol](../../../index/) / [server/src](../index/) / createWsTransport

# Function: createWsTransport()

> **createWsTransport**(`server`, `config`): [`WsTransport`](../interfaces/WsTransport/)

Defined in: [packages/server/src/ws-transport.ts:43](https://github.com/nekte-protocol/nekte/blob/0db92e2a0bcb8fe03621c258c0031f25656c48fd/packages/server/src/ws-transport.ts#L43)

Create a WebSocket transport for a NekteServer.
Each incoming message is treated as a JSON-RPC request
and dispatched to server.handleRequest().

## Parameters

### server

[`NekteServer`](../classes/NekteServer/)

### config

[`WsTransportConfig`](../interfaces/WsTransportConfig/)

## Returns

[`WsTransport`](../interfaces/WsTransport/)
