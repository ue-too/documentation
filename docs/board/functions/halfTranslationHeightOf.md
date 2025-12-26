[@ue-too/board](../globals.md) / halfTranslationHeightOf

# Function: halfTranslationHeightOf()

> **halfTranslationHeightOf**(`boundaries`): `number` \| `undefined`

Defined in: [packages/board/src/camera/utils/position.ts:349](https://github.com/ue-too/ue-too/blob/aabc0f56e9e83141d0fd935ef6ac3e5fe0af0a61/packages/board/src/camera/utils/position.ts#L349)

Calculates half the height (y-axis half-span) of the boundaries.

## Parameters

### boundaries

The boundaries to measure

[`Boundaries`](../type-aliases/Boundaries.md) | `undefined`

## Returns

`number` \| `undefined`

Half-height in world units, or undefined if y boundaries are not fully defined

## Remarks

Useful for calculating radius or offset from center for y-axis.
Equivalent to `translationHeightOf(boundaries) / 2`.

## Example

```typescript
halfTranslationHeightOf({
  min: { x: -100, y: -50 },
  max: { x: 100, y: 50 }
}); // 50
```
