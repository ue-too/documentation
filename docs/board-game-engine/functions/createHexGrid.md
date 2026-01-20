[@ue-too/board-game-engine](../globals.md) / createHexGrid

# Function: createHexGrid()

> **createHexGrid**(`coordinator`, `width`, `height`, `name`, `variant`): `number`

Defined in: [grid-system/hex-grid.ts:34](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/board-game-engine/src/grid-system/hex-grid.ts#L34)

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
