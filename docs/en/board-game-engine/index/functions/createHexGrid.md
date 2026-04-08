[@ue-too/board-game-engine](../../modules.md) / [index](../index.md) / createHexGrid

# Function: createHexGrid()

> **createHexGrid**(`coordinator`, `width`, `height`, `name`, `variant`): `number`

Defined in: [grid-system/hex-grid.ts:49](https://github.com/ue-too/ue-too/blob/feb7c80222df5d3cd97bfa1933bafe3190c6e48d/packages/board-game-engine/src/grid-system/hex-grid.ts#L49)

Creates a hexagonal grid with offset coordinates (q, r).

## Parameters

### coordinator

`Coordinator`

The ECS coordinator

### width

`number`

The width of the grid (q dimension)

### height

`number`

The height of the grid (r dimension)

### name

`string`

The name of the grid

### variant

[`HexGridVariant`](../type-aliases/HexGridVariant.md) = `'odd-r'`

The offset coordinate variant: 'odd-r', 'even-r', 'odd-q', or 'even-q'

## Returns

`number`

The grid entity
