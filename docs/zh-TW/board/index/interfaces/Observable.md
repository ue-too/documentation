[@ue-too/board](../../modules.md) / [index](../index.md) / Observable

# 介面: Observable\<T\>

定義於: [packages/board/src/utils/observable.ts:71](https://github.com/ue-too/ue-too/blob/9b787448328cf446379b1ea4cc5f4c79149cbec8/packages/board/src/utils/observable.ts#L71)

Interface for the Observable pattern implementation.

## 備註

Observables allow multiple observers to subscribe and receive notifications
when data is emitted. This is the pub-sub pattern for event handling.

Implementations can be synchronous or asynchronous:
- [SynchronousObservable](../classes/SynchronousObservable.md): Notifies observers immediately
- [AsyncObservable](../classes/AsyncObservable.md): Notifies observers via microtasks

## 型別參數

### T

`T` *extends* `any`[]

Tuple type of data emitted to observers

## 方法

### notify()

> **notify**(...`data`): `void`

定義於: [packages/board/src/utils/observable.ts:73](https://github.com/ue-too/ue-too/blob/9b787448328cf446379b1ea4cc5f4c79149cbec8/packages/board/src/utils/observable.ts#L73)

#### 參數

##### data

...`T`

#### 回傳

`void`

***

### subscribe()

> **subscribe**(`observer`, `options?`): () => `void`

定義於: [packages/board/src/utils/observable.ts:72](https://github.com/ue-too/ue-too/blob/9b787448328cf446379b1ea4cc5f4c79149cbec8/packages/board/src/utils/observable.ts#L72)

#### 參數

##### observer

[`Observer`](../type-aliases/Observer.md)\<`T`\>

##### options?

[`SubscriptionOptions`](SubscriptionOptions.md)

#### 回傳

> (): `void`

##### 回傳

`void`
