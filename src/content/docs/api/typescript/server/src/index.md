---
title: "server/src"
---

[**nekte-protocol**](../../index/)

***

[nekte-protocol](../../index/) / server/src

# server/src

## Classes

- [CapabilityRegistry](classes/CapabilityRegistry/)
- [GrpcDelegateStream](classes/GrpcDelegateStream/)
- [NekteServer](classes/NekteServer/)
- [SseStream](classes/SseStream/)
- [TaskNotCancellableError](classes/TaskNotCancellableError/)
- [TaskNotFoundError](classes/TaskNotFoundError/)
- [TaskNotResumableError](classes/TaskNotResumableError/)
- [TaskRegistry](classes/TaskRegistry/)

## Interfaces

- [CapabilityConfig](interfaces/CapabilityConfig/)
- [GrpcTransport](interfaces/GrpcTransport/)
- [GrpcTransportConfig](interfaces/GrpcTransportConfig/)
- [GrpcWritableStream](interfaces/GrpcWritableStream/)
- [HandlerContext](interfaces/HandlerContext/)
- [HttpTransport](interfaces/HttpTransport/)
- [HttpTransportConfig](interfaces/HttpTransportConfig/)
- [NekteServerConfig](interfaces/NekteServerConfig/)
- [RegisteredCapability](interfaces/RegisteredCapability/)
- [TaskRegistryConfig](interfaces/TaskRegistryConfig/)
- [WsTransport](interfaces/WsTransport/)
- [WsTransportConfig](interfaces/WsTransportConfig/)

## Type Aliases

- [AuthHandler](type-aliases/AuthHandler/)
- [AuthResult](type-aliases/AuthResult/)
- [CapabilityHandler](type-aliases/CapabilityHandler/)
- [DelegateHandler](type-aliases/DelegateHandler/)
- [TaskRegistryEvent](type-aliases/TaskRegistryEvent/)
- [TaskRegistryListener](type-aliases/TaskRegistryListener/)

## Functions

- [apiKeyAuth](functions/apiKeyAuth/)
- [bearerAuth](functions/bearerAuth/)
- [createGrpcTransport](functions/createGrpcTransport/)
- [createHttpTransport](functions/createHttpTransport/)
- [createWsTransport](functions/createWsTransport/)
- [noAuth](functions/noAuth/)
