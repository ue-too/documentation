[@ue-too/board-game-engine](../globals.md) / TypeModificationEffect

# Class: TypeModificationEffect\<T\>

Defined in: [action-system/effect.ts:123](https://github.com/ue-too/ue-too/blob/1055c6abca1ea3a0e952b0825f36e0ca2527df85/packages/board-game-engine/src/action-system/effect.ts#L123)

## Type Parameters

### T

`T` *extends* `string`

## Implements

- [`Effect`](../interfaces/Effect.md)

## Constructors

### Constructor

> **new TypeModificationEffect**\<`T`\>(`coordinator`, `componentName`, `entity`, `valuePath`, `newType`, `allowedValues?`): `TypeModificationEffect`\<`T`\>

Defined in: [action-system/effect.ts:131](https://github.com/ue-too/ue-too/blob/1055c6abca1ea3a0e952b0825f36e0ca2527df85/packages/board-game-engine/src/action-system/effect.ts#L131)

#### Parameters

##### coordinator

`Coordinator`

##### componentName

`symbol`

##### entity

`number`

##### valuePath

`string`

##### newType

`T`

##### allowedValues?

readonly `T`[]

#### Returns

`TypeModificationEffect`\<`T`\>

## Methods

### apply()

> **apply**(): `void`

Defined in: [action-system/effect.ts:140](https://github.com/ue-too/ue-too/blob/1055c6abca1ea3a0e952b0825f36e0ca2527df85/packages/board-game-engine/src/action-system/effect.ts#L140)

#### Returns

`void`

#### Implementation of

[`Effect`](../interfaces/Effect.md).[`apply`](../interfaces/Effect.md#apply)
