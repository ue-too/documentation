[@ue-too/board](../globals.md) / halfTranslationWidthOf

# Function: halfTranslationWidthOf()

> **halfTranslationWidthOf**(`boundaries`): `number` \| `undefined`

Defined in: [packages/board/src/camera/utils/position.ts:294](https://github.com/ue-too/ue-too/blob/e468a9961da59c81663192ec8df16ebc8e17abac/packages/board/src/camera/utils/position.ts#L294)

Calculates half the width (x-axis half-span) of the boundaries.

## Parameters

### boundaries

The boundaries to measure

[`Boundaries`](../type-aliases/Boundaries.md) | `undefined`

## Returns

`number` \| `undefined`

Half-width in world units, or undefined if x boundaries are not fully defined

## Remarks

Useful for calculating radius or offset from center for x-axis.
Equivalent to `translationWidthOf(boundaries) / 2`.

## Example

```typescript
halfTranslationWidthOf({
  min: { x: -100, y: -50 },
  max: { x: 100, y: 50 }
}); // 100
```
