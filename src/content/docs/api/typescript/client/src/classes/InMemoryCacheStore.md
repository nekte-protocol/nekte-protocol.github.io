---
title: "Class: InMemoryCacheStore"
---

[**nekte-protocol**](../../../index/)

***

[nekte-protocol](../../../index/) / [client/src](../index/) / InMemoryCacheStore

# Class: InMemoryCacheStore

Defined in: [packages/client/src/cache-store.ts:74](https://github.com/nekte-protocol/nekte/blob/0db92e2a0bcb8fe03621c258c0031f25656c48fd/packages/client/src/cache-store.ts#L74)

Default adapter: SIEVE + GDSF eviction, TTL jitter, stale-while-revalidate.

## Implements

- [`CacheStore`](../interfaces/CacheStore/)

## Constructors

### Constructor

> **new InMemoryCacheStore**(`config?`): `InMemoryCacheStore`

Defined in: [packages/client/src/cache-store.ts:81](https://github.com/nekte-protocol/nekte/blob/0db92e2a0bcb8fe03621c258c0031f25656c48fd/packages/client/src/cache-store.ts#L81)

#### Parameters

##### config?

`InMemoryStoreConfig`

#### Returns

`InMemoryCacheStore`

## Accessors

### size

#### Get Signature

> **get** **size**(): `number`

Defined in: [packages/client/src/cache-store.ts:147](https://github.com/nekte-protocol/nekte/blob/0db92e2a0bcb8fe03621c258c0031f25656c48fd/packages/client/src/cache-store.ts#L147)

##### Returns

`number`

#### Implementation of

[`CacheStore`](../interfaces/CacheStore/).[`size`](../interfaces/CacheStore/#size)

## Methods

### clear()

> **clear**(): `void`

Defined in: [packages/client/src/cache-store.ts:151](https://github.com/nekte-protocol/nekte/blob/0db92e2a0bcb8fe03621c258c0031f25656c48fd/packages/client/src/cache-store.ts#L151)

#### Returns

`void`

#### Implementation of

[`CacheStore`](../interfaces/CacheStore/).[`clear`](../interfaces/CacheStore/#clear)

***

### delete()

> **delete**(`key`): `boolean`

Defined in: [packages/client/src/cache-store.ts:138](https://github.com/nekte-protocol/nekte/blob/0db92e2a0bcb8fe03621c258c0031f25656c48fd/packages/client/src/cache-store.ts#L138)

#### Parameters

##### key

`string`

#### Returns

`boolean`

#### Implementation of

[`CacheStore`](../interfaces/CacheStore/).[`delete`](../interfaces/CacheStore/#delete)

***

### get()

> **get**(`key`): [`CacheGetResult`](../interfaces/CacheGetResult/) \| `undefined`

Defined in: [packages/client/src/cache-store.ts:87](https://github.com/nekte-protocol/nekte/blob/0db92e2a0bcb8fe03621c258c0031f25656c48fd/packages/client/src/cache-store.ts#L87)

Get an entry. Returns undefined if not found or fully expired.
Returns { entry, freshness } where freshness indicates TTL state.

#### Parameters

##### key

`string`

#### Returns

[`CacheGetResult`](../interfaces/CacheGetResult/) \| `undefined`

#### Implementation of

[`CacheStore`](../interfaces/CacheStore/).[`get`](../interfaces/CacheStore/#get)

***

### keys()

> **keys**(): `IterableIterator`\<`string`\>

Defined in: [packages/client/src/cache-store.ts:143](https://github.com/nekte-protocol/nekte/blob/0db92e2a0bcb8fe03621c258c0031f25656c48fd/packages/client/src/cache-store.ts#L143)

#### Returns

`IterableIterator`\<`string`\>

#### Implementation of

[`CacheStore`](../interfaces/CacheStore/).[`keys`](../interfaces/CacheStore/#keys)

***

### set()

> **set**(`key`, `entry`): `void`

Defined in: [packages/client/src/cache-store.ts:115](https://github.com/nekte-protocol/nekte/blob/0db92e2a0bcb8fe03621c258c0031f25656c48fd/packages/client/src/cache-store.ts#L115)

#### Parameters

##### key

`string`

##### entry

[`CacheStoreEntry`](../interfaces/CacheStoreEntry/)

#### Returns

`void`

#### Implementation of

[`CacheStore`](../interfaces/CacheStore/).[`set`](../interfaces/CacheStore/#set)
