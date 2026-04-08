[@ue-too/math](../../modules.md) / [index](../index.md) / sameDirection

# 関数: sameDirection()

> **sameDirection**(`a`, `b`, `precision`): `boolean`

定義: [index.ts:791](https://github.com/ue-too/ue-too/blob/79a36cf61d861e6b4e3302e81111636c6082a3db/packages/math/src/index.ts#L791)

Checks if two vectors point in the same direction.

## パラメータ

### a

[`Point`](../type-aliases/Point-1.md)

First vector

### b

[`Point`](../type-aliases/Point-1.md)

Second vector

### precision

`number` = `0.001`

Tolerance for comparison (defaults to 0.001)

## 戻り値

`boolean`

True if vectors have the same direction (after normalization)

## Remarks

Normalizes both vectors to unit vectors and compares them.
Magnitude does not matter, only direction.

## 例

```typescript
const a = { x: 1, y: 0 };
const b = { x: 10, y: 0 }; // Same direction, different magnitude
sameDirection(a, b); // true

const c = { x: 1, y: 1 };
sameDirection(a, c); // false (different direction)
```
