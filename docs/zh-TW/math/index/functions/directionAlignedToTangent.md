[@ue-too/math](../../modules.md) / [index](../index.md) / directionAlignedToTangent

# 函式: directionAlignedToTangent()

> **directionAlignedToTangent**(`direction`, `tangent`): `boolean`

定義於: [index.ts:824](https://github.com/ue-too/ue-too/blob/79a36cf61d861e6b4e3302e81111636c6082a3db/packages/math/src/index.ts#L824)

Checks if a direction vector is aligned with a tangent vector.

## 參數

### direction

[`Point`](../type-aliases/Point-1.md)

Direction vector to check

### tangent

[`Point`](../type-aliases/Point-1.md)

Tangent vector reference

## 回傳

`boolean`

True if direction aligns with tangent (within 90 degrees)

## 備註

Returns true if the direction is within 90 degrees of either the tangent
or its reverse. Useful for determining if movement is along a path.

## 範例

```typescript
const direction = { x: 1, y: 0 };
const tangent = { x: 1, y: 0.1 }; // Slightly rotated
directionAlignedToTangent(direction, tangent); // true

const perpendicular = { x: 0, y: 1 };
directionAlignedToTangent(perpendicular, tangent); // false
```
