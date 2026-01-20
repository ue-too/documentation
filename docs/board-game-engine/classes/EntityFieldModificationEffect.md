[@ue-too/board-game-engine](../globals.md) / EntityFieldModificationEffect

# Class: EntityFieldModificationEffect

Defined in: [action-system/effect.ts:172](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/board-game-engine/src/action-system/effect.ts#L172)

## Implements

- [`Effect`](../interfaces/Effect.md)

## Constructors

### Constructor

> **new EntityFieldModificationEffect**(`coordinator`, `componentName`, `entity`, `valuePath`, `newEntityValue`): `EntityFieldModificationEffect`

Defined in: [action-system/effect.ts:180](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/board-game-engine/src/action-system/effect.ts#L180)

#### Parameters

##### coordinator

`Coordinator`

##### componentName

`symbol`

##### entity

`number`

##### valuePath

`string`

##### newEntityValue

`number`

#### Returns

`EntityFieldModificationEffect`

## Methods

### apply()

> **apply**(): `void`

Defined in: [action-system/effect.ts:188](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/board-game-engine/src/action-system/effect.ts#L188)

#### Returns

`void`

#### Implementation of

[`Effect`](../interfaces/Effect.md).[`apply`](../interfaces/Effect.md#apply)
