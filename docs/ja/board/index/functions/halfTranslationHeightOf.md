[@ue-too/board](../../modules.md) / [index](../index.md) / halfTranslationHeightOf

# 関数: halfTranslationHeightOf()

> **halfTranslationHeightOf**(`boundaries`): `number` \| `undefined`

定義: [packages/board/src/camera/utils/position.ts:400](https://github.com/ue-too/ue-too/blob/7d57cce875ed7b8a4f4ee4e325a18e34159928f6/packages/board/src/camera/utils/position.ts#L400)

Calculates half the height (y-axis half-span) of the boundaries.

## パラメータ

### boundaries

The boundaries to measure

[`Boundaries`](../type-aliases/Boundaries.md) | `undefined`

## 戻り値

`number` \| `undefined`

Half-height in world units, or undefined if y boundaries are not fully defined

## Remarks

Useful for calculating radius or offset from center for y-axis.
Equivalent to `translationHeightOf(boundaries) / 2`.

## 例

```typescript
halfTranslationHeightOf({
  min: { x: -100, y: -50 },
  max: { x: 100, y: 50 }
}); // 50
```
