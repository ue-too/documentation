[@ue-too/board](../../modules.md) / [index](../index.md) / halfTranslationWidthOf

# 関数: halfTranslationWidthOf()

> **halfTranslationWidthOf**(`boundaries`): `number` \| `undefined`

定義: [packages/board/src/camera/utils/position.ts:335](https://github.com/ue-too/ue-too/blob/68da915137a31a45d7ce8043b13275ff7283045d/packages/board/src/camera/utils/position.ts#L335)

Calculates half the width (x-axis half-span) of the boundaries.

## パラメータ

### boundaries

The boundaries to measure

[`Boundaries`](../type-aliases/Boundaries.md) | `undefined`

## 戻り値

`number` \| `undefined`

Half-width in world units, or undefined if x boundaries are not fully defined

## Remarks

Useful for calculating radius or offset from center for x-axis.
Equivalent to `translationWidthOf(boundaries) / 2`.

## 例

```typescript
halfTranslationWidthOf({
  min: { x: -100, y: -50 },
  max: { x: 100, y: 50 }
}); // 100
```
