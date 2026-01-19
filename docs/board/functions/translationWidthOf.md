[@ue-too/board](../globals.md) / translationWidthOf

# Function: translationWidthOf()

> **translationWidthOf**(`boundaries`): `number` \| `undefined`

Defined in: [packages/board/src/camera/utils/position.ts:267](https://github.com/ue-too/ue-too/blob/1055c6abca1ea3a0e952b0825f36e0ca2527df85/packages/board/src/camera/utils/position.ts#L267)

Calculates the width (x-axis span) of the boundaries.

## Parameters

### boundaries

The boundaries to measure

[`Boundaries`](../type-aliases/Boundaries.md) | `undefined`

## Returns

`number` \| `undefined`

Width in world units, or undefined if x boundaries are not fully defined

## Remarks

Returns undefined if boundaries don't have both min.x and max.x defined.
Result is always non-negative for valid boundaries (max.x - min.x).

## Example

```typescript
translationWidthOf({
  min: { x: -100, y: -50 },
  max: { x: 100, y: 50 }
}); // 200

translationWidthOf({ min: { x: 0 } }); // undefined (no max.x)
translationWidthOf(undefined);          // undefined
```
