[@ue-too/board](../globals.md) / Observable

# Interface: Observable\<T\>

Defined in: [packages/board/src/utils/observable.ts:7](https://github.com/ue-too/ue-too/blob/407e414f82d0bb1a2a3cfbf5160e331d5a81d8be/packages/board/src/utils/observable.ts#L7)

## Type Parameters

### T

`T` *extends* `any`[]

## Methods

### notify()

> **notify**(...`data`): `void`

Defined in: [packages/board/src/utils/observable.ts:9](https://github.com/ue-too/ue-too/blob/407e414f82d0bb1a2a3cfbf5160e331d5a81d8be/packages/board/src/utils/observable.ts#L9)

#### Parameters

##### data

...`T`

#### Returns

`void`

***

### subscribe()

> **subscribe**(`observer`, `options?`): () => `void`

Defined in: [packages/board/src/utils/observable.ts:8](https://github.com/ue-too/ue-too/blob/407e414f82d0bb1a2a3cfbf5160e331d5a81d8be/packages/board/src/utils/observable.ts#L8)

#### Parameters

##### observer

[`Observer`](../type-aliases/Observer.md)\<`T`\>

##### options?

[`SubscriptionOptions`](SubscriptionOptions.md)

#### Returns

> (): `void`

##### Returns

`void`
