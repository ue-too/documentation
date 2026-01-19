[@ue-too/board-game-engine](../globals.md) / PlayerSystem

# Class: PlayerSystem

Defined in: [player-system/player-component.ts:13](https://github.com/ue-too/ue-too/blob/1055c6abca1ea3a0e952b0825f36e0ca2527df85/packages/board-game-engine/src/player-system/player-component.ts#L13)

## Implements

- `System`

## Constructors

### Constructor

> **new PlayerSystem**(`_coordinator`, `_playerCount`): `PlayerSystem`

Defined in: [player-system/player-component.ts:16](https://github.com/ue-too/ue-too/blob/1055c6abca1ea3a0e952b0825f36e0ca2527df85/packages/board-game-engine/src/player-system/player-component.ts#L16)

#### Parameters

##### \_coordinator

`Coordinator`

##### \_playerCount

`number` = `2`

#### Returns

`PlayerSystem`

## Properties

### entities

> **entities**: `Set`\<`number`\>

Defined in: [player-system/player-component.ts:14](https://github.com/ue-too/ue-too/blob/1055c6abca1ea3a0e952b0825f36e0ca2527df85/packages/board-game-engine/src/player-system/player-component.ts#L14)

#### Implementation of

`System.entities`

## Methods

### addPlayer()

> **addPlayer**(`name`): `number` \| `null`

Defined in: [player-system/player-component.ts:27](https://github.com/ue-too/ue-too/blob/1055c6abca1ea3a0e952b0825f36e0ca2527df85/packages/board-game-engine/src/player-system/player-component.ts#L27)

#### Parameters

##### name

`string`

#### Returns

`number` \| `null`

***

### getPlayerOrder()

> **getPlayerOrder**(): `number`[]

Defined in: [player-system/player-component.ts:109](https://github.com/ue-too/ue-too/blob/1055c6abca1ea3a0e952b0825f36e0ca2527df85/packages/board-game-engine/src/player-system/player-component.ts#L109)

#### Returns

`number`[]

***

### getPlayers()

> **getPlayers**(): `number`[]

Defined in: [player-system/player-component.ts:48](https://github.com/ue-too/ue-too/blob/1055c6abca1ea3a0e952b0825f36e0ca2527df85/packages/board-game-engine/src/player-system/player-component.ts#L48)

#### Returns

`number`[]

***

### organizePlayerOrder()

> **organizePlayerOrder**(): `void`

Defined in: [player-system/player-component.ts:89](https://github.com/ue-too/ue-too/blob/1055c6abca1ea3a0e952b0825f36e0ca2527df85/packages/board-game-engine/src/player-system/player-component.ts#L89)

#### Returns

`void`

***

### playerCount()

> **playerCount**(): `number`

Defined in: [player-system/player-component.ts:44](https://github.com/ue-too/ue-too/blob/1055c6abca1ea3a0e952b0825f36e0ca2527df85/packages/board-game-engine/src/player-system/player-component.ts#L44)

#### Returns

`number`

***

### removePlayer()

> **removePlayer**(`player`): `void`

Defined in: [player-system/player-component.ts:36](https://github.com/ue-too/ue-too/blob/1055c6abca1ea3a0e952b0825f36e0ca2527df85/packages/board-game-engine/src/player-system/player-component.ts#L36)

#### Parameters

##### player

`number`

#### Returns

`void`

***

### setPlayerOrder()

> **setPlayerOrder**(`players`): `void`

Defined in: [player-system/player-component.ts:73](https://github.com/ue-too/ue-too/blob/1055c6abca1ea3a0e952b0825f36e0ca2527df85/packages/board-game-engine/src/player-system/player-component.ts#L73)

#### Parameters

##### players

`number`[]

#### Returns

`void`

***

### shufflePlayerOrder()

> **shufflePlayerOrder**(): `void`

Defined in: [player-system/player-component.ts:60](https://github.com/ue-too/ue-too/blob/1055c6abca1ea3a0e952b0825f36e0ca2527df85/packages/board-game-engine/src/player-system/player-component.ts#L60)

#### Returns

`void`
