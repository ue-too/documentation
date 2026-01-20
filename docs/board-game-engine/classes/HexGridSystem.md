[@ue-too/board-game-engine](../globals.md) / HexGridSystem

# Class: HexGridSystem

Defined in: [grid-system/hex-grid.ts:69](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/board-game-engine/src/grid-system/hex-grid.ts#L69)

## Implements

- `System`

## Constructors

### Constructor

> **new HexGridSystem**(`coordinator`): `HexGridSystem`

Defined in: [grid-system/hex-grid.ts:73](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/board-game-engine/src/grid-system/hex-grid.ts#L73)

#### Parameters

##### coordinator

`Coordinator`

#### Returns

`HexGridSystem`

## Properties

### entities

> **entities**: `Set`\<`number`\>

Defined in: [grid-system/hex-grid.ts:70](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/board-game-engine/src/grid-system/hex-grid.ts#L70)

#### Implementation of

`System.entities`

## Methods

### addEntityToGridCell()

> **addEntityToGridCell**(`grid`, `q`, `r`, `entity`, `direction`, `displace`): `void`

Defined in: [grid-system/hex-grid.ts:96](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/board-game-engine/src/grid-system/hex-grid.ts#L96)

#### Parameters

##### grid

`number`

##### q

`number`

##### r

`number`

##### entity

`number`

##### direction

`"top"` | `"bottom"`

##### displace

`boolean` = `false`

#### Returns

`void`

***

### getCellEntityAt()

> **getCellEntityAt**(`grid`, `q`, `r`): `number` \| `null`

Defined in: [grid-system/hex-grid.ts:155](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/board-game-engine/src/grid-system/hex-grid.ts#L155)

#### Parameters

##### grid

`number`

##### q

`number`

##### r

`number`

#### Returns

`number` \| `null`

***

### getEntireGridEntities()

> **getEntireGridEntities**(`grid`): \{ `entities`: (`number` \| `null`)[][]; `hasHole`: `boolean`; \} \| `null`

Defined in: [grid-system/hex-grid.ts:125](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/board-game-engine/src/grid-system/hex-grid.ts#L125)

#### Parameters

##### grid

`number`

#### Returns

\{ `entities`: (`number` \| `null`)[][]; `hasHole`: `boolean`; \} \| `null`
