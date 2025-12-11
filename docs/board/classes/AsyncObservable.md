[@ue-too/board](../globals.md) / AsyncObservable

# Class: AsyncObservable\<T\>

Defined in: [packages/board/src/utils/observable.ts:12](https://github.com/ue-too/ue-too/blob/95dd78435970713202a67be3986e96a80ff00749/packages/board/src/utils/observable.ts#L12)

## Type Parameters

### T

`T` *extends* `any`[]

## Implements

- [`Observable`](../interfaces/Observable.md)\<`T`\>

## Constructors

### Constructor

> **new AsyncObservable**\<`T`\>(): `AsyncObservable`\<`T`\>

#### Returns

`AsyncObservable`\<`T`\>

## Methods

### notify()

> **notify**(...`data`): `void`

Defined in: [packages/board/src/utils/observable.ts:41](https://github.com/ue-too/ue-too/blob/95dd78435970713202a67be3986e96a80ff00749/packages/board/src/utils/observable.ts#L41)

#### Parameters

##### data

...`T`

#### Returns

`void`

#### Implementation of

[`Observable`](../interfaces/Observable.md).[`notify`](../interfaces/Observable.md#notify)

***

### subscribe()

> **subscribe**(`observer`, `options?`): () => `void`

Defined in: [packages/board/src/utils/observable.ts:15](https://github.com/ue-too/ue-too/blob/95dd78435970713202a67be3986e96a80ff00749/packages/board/src/utils/observable.ts#L15)

#### Parameters

##### observer

[`Observer`](../type-aliases/Observer.md)\<`T`\>

##### options?

[`SubscriptionOptions`](../interfaces/SubscriptionOptions.md)

#### Returns

> (): `void`

##### Returns

`void`

#### Implementation of

[`Observable`](../interfaces/Observable.md).[`subscribe`](../interfaces/Observable.md#subscribe)
