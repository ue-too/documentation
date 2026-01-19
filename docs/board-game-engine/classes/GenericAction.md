[@ue-too/board-game-engine](../globals.md) / GenericAction

# Class: GenericAction

Defined in: [action-system/action.ts:11](https://github.com/ue-too/ue-too/blob/1055c6abca1ea3a0e952b0825f36e0ca2527df85/packages/board-game-engine/src/action-system/action.ts#L11)

## Implements

- [`Action`](../interfaces/Action.md)

## Constructors

### Constructor

> **new GenericAction**(`type`, `actor`, `targets`, `parameters`, `preconditions`, `costs`, `effects`): `GenericAction`

Defined in: [action-system/action.ts:21](https://github.com/ue-too/ue-too/blob/1055c6abca1ea3a0e952b0825f36e0ca2527df85/packages/board-game-engine/src/action-system/action.ts#L21)

#### Parameters

##### type

`string`

##### actor

`number`

##### targets

`number`[]

##### parameters

`Record`\<`string`, `unknown`\>

##### preconditions

[`Precondition`](../interfaces/Precondition.md)[]

##### costs

[`Effect`](../interfaces/Effect.md)[]

##### effects

[`Effect`](../interfaces/Effect.md)[]

#### Returns

`GenericAction`

## Properties

### actor

> **actor**: `number`

Defined in: [action-system/action.ts:13](https://github.com/ue-too/ue-too/blob/1055c6abca1ea3a0e952b0825f36e0ca2527df85/packages/board-game-engine/src/action-system/action.ts#L13)

***

### costs

> **costs**: [`Effect`](../interfaces/Effect.md)[] = `[]`

Defined in: [action-system/action.ts:17](https://github.com/ue-too/ue-too/blob/1055c6abca1ea3a0e952b0825f36e0ca2527df85/packages/board-game-engine/src/action-system/action.ts#L17)

***

### effects

> **effects**: [`Effect`](../interfaces/Effect.md)[] = `[]`

Defined in: [action-system/action.ts:18](https://github.com/ue-too/ue-too/blob/1055c6abca1ea3a0e952b0825f36e0ca2527df85/packages/board-game-engine/src/action-system/action.ts#L18)

***

### parameters

> **parameters**: `Record`\<`string`, `unknown`\>

Defined in: [action-system/action.ts:15](https://github.com/ue-too/ue-too/blob/1055c6abca1ea3a0e952b0825f36e0ca2527df85/packages/board-game-engine/src/action-system/action.ts#L15)

***

### preconditions

> **preconditions**: [`Precondition`](../interfaces/Precondition.md)[]

Defined in: [action-system/action.ts:16](https://github.com/ue-too/ue-too/blob/1055c6abca1ea3a0e952b0825f36e0ca2527df85/packages/board-game-engine/src/action-system/action.ts#L16)

***

### targets

> **targets**: `number`[]

Defined in: [action-system/action.ts:14](https://github.com/ue-too/ue-too/blob/1055c6abca1ea3a0e952b0825f36e0ca2527df85/packages/board-game-engine/src/action-system/action.ts#L14)

***

### type

> **type**: `string`

Defined in: [action-system/action.ts:12](https://github.com/ue-too/ue-too/blob/1055c6abca1ea3a0e952b0825f36e0ca2527df85/packages/board-game-engine/src/action-system/action.ts#L12)

#### Implementation of

[`Action`](../interfaces/Action.md).[`type`](../interfaces/Action.md#type)

## Methods

### canExecute()

> **canExecute**(): `boolean`

Defined in: [action-system/action.ts:31](https://github.com/ue-too/ue-too/blob/1055c6abca1ea3a0e952b0825f36e0ca2527df85/packages/board-game-engine/src/action-system/action.ts#L31)

#### Returns

`boolean`

***

### execute()

> **execute**(): [`Event`](../interfaces/Event.md)[]

Defined in: [action-system/action.ts:35](https://github.com/ue-too/ue-too/blob/1055c6abca1ea3a0e952b0825f36e0ca2527df85/packages/board-game-engine/src/action-system/action.ts#L35)

#### Returns

[`Event`](../interfaces/Event.md)[]
