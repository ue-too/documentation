[@ue-too/board](../globals.md) / translationHeightOf

# Function: translationHeightOf()

> **translationHeightOf**(`boundaries`): `number` \| `undefined`

Defined in: [packages/board/src/camera/utils/position.ts:322](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/board/src/camera/utils/position.ts#L322)

Calculates the height (y-axis span) of the boundaries.

## Parameters

### boundaries

The boundaries to measure

[`Boundaries`](../type-aliases/Boundaries.md) | `undefined`

## Returns

`number` \| `undefined`

Height in world units, or undefined if y boundaries are not fully defined

## Remarks

Returns undefined if boundaries don't have both min.y and max.y defined.
Result is always non-negative for valid boundaries (max.y - min.y).

## Example

```typescript
translationHeightOf({
  min: { x: -100, y: -50 },
  max: { x: 100, y: 50 }
}); // 100

translationHeightOf({ min: { y: 0 } }); // undefined (no max.y)
translationHeightOf(undefined);          // undefined
```
