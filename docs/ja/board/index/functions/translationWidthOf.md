[@ue-too/board](../../modules.md) / [index](../index.md) / translationWidthOf

# 関数: translationWidthOf()

> **translationWidthOf**(`boundaries`): `number` \| `undefined`

定義: [packages/board/src/camera/utils/position.ts:300](https://github.com/ue-too/ue-too/blob/79a36cf61d861e6b4e3302e81111636c6082a3db/packages/board/src/camera/utils/position.ts#L300)

Calculates the width (x-axis span) of the boundaries.

## パラメータ

### boundaries

The boundaries to measure

[`Boundaries`](../type-aliases/Boundaries.md) | `undefined`

## 戻り値

`number` \| `undefined`

Width in world units, or undefined if x boundaries are not fully defined

## Remarks

Returns undefined if boundaries don't have both min.x and max.x defined.
Result is always non-negative for valid boundaries (max.x - min.x).

## 例

```typescript
translationWidthOf({
  min: { x: -100, y: -50 },
  max: { x: 100, y: 50 }
}); // 200

translationWidthOf({ min: { x: 0 } }); // undefined (no max.x)
translationWidthOf(undefined);          // undefined
```
