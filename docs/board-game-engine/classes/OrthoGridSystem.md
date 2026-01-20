[@ue-too/board-game-engine](../globals.md) / OrthoGridSystem

# Class: OrthoGridSystem

Defined in: [grid-system/ortho-grid.ts:55](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/board-game-engine/src/grid-system/ortho-grid.ts#L55)

## Implements

- `System`

## Constructors

### Constructor

> **new OrthoGridSystem**(`coordinator`): `OrthoGridSystem`

Defined in: [grid-system/ortho-grid.ts:59](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/board-game-engine/src/grid-system/ortho-grid.ts#L59)

#### Parameters

##### coordinator

`Coordinator`

#### Returns

`OrthoGridSystem`

## Properties

### entities

> **entities**: `Set`\<`number`\>

Defined in: [grid-system/ortho-grid.ts:56](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/board-game-engine/src/grid-system/ortho-grid.ts#L56)

#### Implementation of

`System.entities`

## Methods

### addEntityToGridCell()

> **addEntityToGridCell**(`grid`, `row`, `column`, `entity`, `direction`, `displace`): `void`

Defined in: [grid-system/ortho-grid.ts:82](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/board-game-engine/src/grid-system/ortho-grid.ts#L82)

#### Parameters

##### grid

`number`

##### row

`number`

##### column

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

> **getCellEntityAt**(`grid`, `row`, `column`): `number` \| `null`

Defined in: [grid-system/ortho-grid.ts:137](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/board-game-engine/src/grid-system/ortho-grid.ts#L137)

#### Parameters

##### grid

`number`

##### row

`number`

##### column

`number`

#### Returns

`number` \| `null`

***

### getEntireGridEntities()

> **getEntireGridEntities**(`grid`): \{ `entities`: (`number` \| `null`)[][]; `hasHole`: `boolean`; \} \| `null`

Defined in: [grid-system/ortho-grid.ts:111](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/board-game-engine/src/grid-system/ortho-grid.ts#L111)

#### Parameters

##### grid

`number`

#### Returns

\{ `entities`: (`number` \| `null`)[][]; `hasHole`: `boolean`; \} \| `null`
