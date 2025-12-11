[@ue-too/board](../globals.md) / SynchronousObservable

# Class: SynchronousObservable\<T\>

Defined in: [packages/board/src/utils/observable.ts:46](https://github.com/ue-too/ue-too/blob/c02efc01f7c19f3efc21823d0489e987a3e92427/packages/board/src/utils/observable.ts#L46)

## Type Parameters

### T

`T` *extends* `any`[]

## Implements

- [`Observable`](../interfaces/Observable.md)\<`T`\>

## Constructors

### Constructor

> **new SynchronousObservable**\<`T`\>(): `SynchronousObservable`\<`T`\>

#### Returns

`SynchronousObservable`\<`T`\>

## Methods

### notify()

> **notify**(...`data`): `void`

Defined in: [packages/board/src/utils/observable.ts:75](https://github.com/ue-too/ue-too/blob/c02efc01f7c19f3efc21823d0489e987a3e92427/packages/board/src/utils/observable.ts#L75)

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

Defined in: [packages/board/src/utils/observable.ts:49](https://github.com/ue-too/ue-too/blob/c02efc01f7c19f3efc21823d0489e987a3e92427/packages/board/src/utils/observable.ts#L49)

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
