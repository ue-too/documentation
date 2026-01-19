[@ue-too/board](../globals.md) / clampPoint

# Function: clampPoint()

> **clampPoint**(`point`, `boundaries`): `Point`

Defined in: [packages/board/src/camera/utils/position.ts:218](https://github.com/ue-too/ue-too/blob/1055c6abca1ea3a0e952b0825f36e0ca2527df85/packages/board/src/camera/utils/position.ts#L218)

Clamps a point to stay within specified boundaries.

## Parameters

### point

`Point`

Point to clamp in world coordinates

### boundaries

Optional boundary constraints

[`Boundaries`](../type-aliases/Boundaries.md) | `undefined`

## Returns

`Point`

Clamped point, or original if already within bounds or no boundaries

## Remarks

Each axis is clamped independently:
- If a min constraint exists on an axis, ensures point >= min
- If a max constraint exists on an axis, ensures point <= max
- If no constraint exists on an axis, that axis is unchanged

## Example

```typescript
const bounds: Boundaries = {
  min: { x: -100, y: -50 },
  max: { x: 100, y: 50 }
};

clampPoint({ x: 0, y: 0 }, bounds);       // { x: 0, y: 0 } (inside)
clampPoint({ x: 150, y: 0 }, bounds);     // { x: 100, y: 0 } (clamped x)
clampPoint({ x: 0, y: -100 }, bounds);    // { x: 0, y: -50 } (clamped y)
clampPoint({ x: 200, y: -200 }, bounds);  // { x: 100, y: -50 } (both clamped)
clampPoint({ x: 0, y: 0 }, undefined);    // { x: 0, y: 0 } (no bounds)
```
