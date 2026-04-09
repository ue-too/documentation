[@ue-too/board](../../modules.md) / [index](../index.md) / halfTranslationWidthOf

# 函式: halfTranslationWidthOf()

> **halfTranslationWidthOf**(`boundaries`): `number` \| `undefined`

定義於: [packages/board/src/camera/utils/position.ts:335](https://github.com/ue-too/ue-too/blob/68da915137a31a45d7ce8043b13275ff7283045d/packages/board/src/camera/utils/position.ts#L335)

Calculates half the width (x-axis half-span) of the boundaries.

## 參數

### boundaries

The boundaries to measure

[`Boundaries`](../type-aliases/Boundaries.md) | `undefined`

## 回傳

`number` \| `undefined`

Half-width in world units, or undefined if x boundaries are not fully defined

## 備註

Useful for calculating radius or offset from center for x-axis.
Equivalent to `translationWidthOf(boundaries) / 2`.

## 範例

```typescript
halfTranslationWidthOf({
  min: { x: -100, y: -50 },
  max: { x: 100, y: 50 }
}); // 100
```
