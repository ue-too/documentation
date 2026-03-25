[@ue-too/curve](../../modules.md) / [index](../index.md) / offset2

# Function: offset2()

> **offset2**(`curve`, `d`): `object`

Defined in: [packages/curve/src/b-curve.ts:1625](https://github.com/ue-too/ue-too/blob/9b787448328cf446379b1ea4cc5f4c79149cbec8/packages/curve/src/b-curve.ts#L1625)

Alternative offset implementation using LUT-based approach.

## Parameters

### curve

[`BCurve`](../classes/BCurve.md)

### d

`number`

## Returns

`object`

### aabb

> **aabb**: `object`

#### aabb.max

> **max**: [`Point`](../type-aliases/Point.md)

#### aabb.min

> **min**: [`Point`](../type-aliases/Point.md)

### points

> **points**: [`Point`](../type-aliases/Point.md)[]
