---
title: "Class: HybridFilterStrategy"
---

[**nekte-protocol**](../../../index/)

***

[nekte-protocol](../../../index/) / [core/src](../index/) / HybridFilterStrategy

# Class: HybridFilterStrategy

Defined in: [packages/core/src/filtering/hybrid-strategy.ts:24](https://github.com/nekte-protocol/nekte/blob/0db92e2a0bcb8fe03621c258c0031f25656c48fd/packages/core/src/filtering/hybrid-strategy.ts#L24)

Port: filters capabilities given a query.
Strategies implement this to define ranking behavior.

## Implements

- [`CapabilityFilterStrategy`](../interfaces/CapabilityFilterStrategy/)

## Constructors

### Constructor

> **new HybridFilterStrategy**(`config`): `HybridFilterStrategy`

Defined in: [packages/core/src/filtering/hybrid-strategy.ts:30](https://github.com/nekte-protocol/nekte/blob/0db92e2a0bcb8fe03621c258c0031f25656c48fd/packages/core/src/filtering/hybrid-strategy.ts#L30)

#### Parameters

##### config

[`HybridStrategyConfig`](../interfaces/HybridStrategyConfig/)

#### Returns

`HybridFilterStrategy`

## Methods

### filter()

> **filter**(`capabilities`, `query`, `options?`): `Promise`\<[`FilteredCapability`](../interfaces/FilteredCapability/)[]\>

Defined in: [packages/core/src/filtering/hybrid-strategy.ts:41](https://github.com/nekte-protocol/nekte/blob/0db92e2a0bcb8fe03621c258c0031f25656c48fd/packages/core/src/filtering/hybrid-strategy.ts#L41)

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

Defined in: [packages/core/src/filtering/hybrid-strategy.ts:37](https://github.com/nekte-protocol/nekte/blob/0db92e2a0bcb8fe03621c258c0031f25656c48fd/packages/core/src/filtering/hybrid-strategy.ts#L37)

Optional: precompute embeddings for a set of capabilities

#### Parameters

##### capabilities

[`FilterableCapability`](../interfaces/FilterableCapability/)[]

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`CapabilityFilterStrategy`](../interfaces/CapabilityFilterStrategy/).[`precompute`](../interfaces/CapabilityFilterStrategy/#precompute)
