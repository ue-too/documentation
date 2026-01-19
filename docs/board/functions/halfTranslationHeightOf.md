[@ue-too/board](../globals.md) / halfTranslationHeightOf

# Function: halfTranslationHeightOf()

> **halfTranslationHeightOf**(`boundaries`): `number` \| `undefined`

Defined in: [packages/board/src/camera/utils/position.ts:349](https://github.com/ue-too/ue-too/blob/1055c6abca1ea3a0e952b0825f36e0ca2527df85/packages/board/src/camera/utils/position.ts#L349)

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
