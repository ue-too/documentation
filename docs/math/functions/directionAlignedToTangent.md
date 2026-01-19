[@ue-too/math](../globals.md) / directionAlignedToTangent

# Function: directionAlignedToTangent()

> **directionAlignedToTangent**(`direction`, `tangent`): `boolean`

Defined in: [index.ts:799](https://github.com/ue-too/ue-too/blob/1055c6abca1ea3a0e952b0825f36e0ca2527df85/packages/math/src/index.ts#L799)

Checks if a direction vector is aligned with a tangent vector.

## Parameters

### direction

[`Point`](../type-aliases/Point-1.md)

Direction vector to check

### tangent

[`Point`](../type-aliases/Point-1.md)

Tangent vector reference

## Returns

`boolean`

True if direction aligns with tangent (within 90 degrees)

## Remarks

Returns true if the direction is within 90 degrees of either the tangent
or its reverse. Useful for determining if movement is along a path.

## Example

```typescript
const direction = { x: 1, y: 0 };
const tangent = { x: 1, y: 0.1 }; // Slightly rotated
directionAlignedToTangent(direction, tangent); // true

const perpendicular = { x: 0, y: 1 };
directionAlignedToTangent(perpendicular, tangent); // false
```
