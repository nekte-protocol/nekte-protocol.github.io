---
title: "Class: SemanticFilterStrategy"
---

[**nekte-protocol**](../../../index/)

***

[nekte-protocol](../../../index/) / [core/src](../index/) / SemanticFilterStrategy

# Class: SemanticFilterStrategy

Defined in: [packages/core/src/filtering/semantic-strategy.ts:26](https://github.com/nekte-protocol/nekte/blob/0db92e2a0bcb8fe03621c258c0031f25656c48fd/packages/core/src/filtering/semantic-strategy.ts#L26)

Port: filters capabilities given a query.
Strategies implement this to define ranking behavior.

## Implements

- [`CapabilityFilterStrategy`](../interfaces/CapabilityFilterStrategy/)

## Constructors

### Constructor

> **new SemanticFilterStrategy**(`config`): `SemanticFilterStrategy`

Defined in: [packages/core/src/filtering/semantic-strategy.ts:32](https://github.com/nekte-protocol/nekte/blob/0db92e2a0bcb8fe03621c258c0031f25656c48fd/packages/core/src/filtering/semantic-strategy.ts#L32)

#### Parameters

##### config

[`SemanticStrategyConfig`](../interfaces/SemanticStrategyConfig/)

#### Returns

`SemanticFilterStrategy`

## Methods

### filter()

> **filter**(`capabilities`, `query`, `options?`): `Promise`\<[`FilteredCapability`](../interfaces/FilteredCapability/)[]\>

Defined in: [packages/core/src/filtering/semantic-strategy.ts:54](https://github.com/nekte-protocol/nekte/blob/0db92e2a0bcb8fe03621c258c0031f25656c48fd/packages/core/src/filtering/semantic-strategy.ts#L54)

Filter and rank capabilities by relevance to query

#### Parameters

##### capabilities

[`FilterableCapability`](../interfaces/FilterableCapability/)[]

##### query

`string`

##### options?

[`FilterOptions`](../interfaces/FilterOptions/)

#### Returns

`Promise`\<[`FilteredCapability`](../interfaces/FilteredCapability/)[]\>

#### Implementation of

[`CapabilityFilterStrategy`](../interfaces/CapabilityFilterStrategy/).[`filter`](../interfaces/CapabilityFilterStrategy/#filter)

***

### precompute()

> **precompute**(`capabilities`): `Promise`\<`void`\>

Defined in: [packages/core/src/filtering/semantic-strategy.ts:42](https://github.com/nekte-protocol/nekte/blob/0db92e2a0bcb8fe03621c258c0031f25656c48fd/packages/core/src/filtering/semantic-strategy.ts#L42)

Precompute embeddings for all capabilities.
Call this after registering capabilities (server) or building catalog (bridge).

#### Parameters

##### capabilities

[`FilterableCapability`](../interfaces/FilterableCapability/)[]

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`CapabilityFilterStrategy`](../interfaces/CapabilityFilterStrategy/).[`precompute`](../interfaces/CapabilityFilterStrategy/#precompute)
