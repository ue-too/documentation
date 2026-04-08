[@ue-too/board](../../modules.md) / [index](../index.md) / angleSpan

# 関数: angleSpan()

> **angleSpan**(`from`, `to`): `number`

定義: [packages/board/src/camera/utils/rotation.ts:274](https://github.com/ue-too/ue-too/blob/7d57cce875ed7b8a4f4ee4e325a18e34159928f6/packages/board/src/camera/utils/rotation.ts#L274)

Calculates the signed angular distance between two angles, taking the shorter path.

## パラメータ

### from

`number`

Starting angle in radians

### to

`number`

Target angle in radians

## 戻り値

`number`

Signed angular difference in radians, in the range (-π, π]

## Remarks

Returns the shortest angular path from `from` to `to`:
- Positive value: rotate counter-clockwise (positive direction)
- Negative value: rotate clockwise (negative direction)
- Always returns the smaller of the two possible paths

## 例

```typescript
angleSpan(0, Math.PI/2);        // π/2 (90° ccw)
angleSpan(Math.PI/2, 0);        // -π/2 (90° cw)
angleSpan(0, 3*Math.PI/2);      // -π/2 (shorter to go cw)
angleSpan(3*Math.PI/2, 0);      // π/2 (shorter to go ccw)
angleSpan(0, Math.PI);          // π (180°, ambiguous)
```
