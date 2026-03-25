[@ue-too/board-game-engine](../../modules.md) / [index](../index.md) / createHexGrid

# 函式: createHexGrid()

> **createHexGrid**(`coordinator`, `width`, `height`, `name`, `variant`): `number`

定義於: [grid-system/hex-grid.ts:49](https://github.com/ue-too/ue-too/blob/9b787448328cf446379b1ea4cc5f4c79149cbec8/packages/board-game-engine/src/grid-system/hex-grid.ts#L49)

Creates a hexagonal grid with offset coordinates (q, r).

## 參數

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

## 回傳

`number`

The grid entity
