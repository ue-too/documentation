[@ue-too/math](../../modules.md) / [index](../index.md) / angleSpan

# 関数: angleSpan()

> **angleSpan**(`from`, `to`): `number`

定義: [index.ts:722](https://github.com/ue-too/ue-too/blob/feb7c80222df5d3cd97bfa1933bafe3190c6e48d/packages/math/src/index.ts#L722)

Calculates the smallest angular difference between two angles.

## パラメータ

### from

`number`

Starting angle in radians

### to

`number`

Ending angle in radians

## 戻り値

`number`

The smallest angle span from 'from' to 'to', in range (-π, π]

## Remarks

This function accounts for wrapping around 2π and always returns the shorter path.
Positive result means counter-clockwise rotation, negative means clockwise.

## 例

```typescript
// From 0° to 90°
angleSpan(0, Math.PI / 2); // π/2 (90 degrees CCW)

// From 350° to 10° (shorter to go CCW through 0°)
angleSpan(350 * Math.PI / 180, 10 * Math.PI / 180); // ≈ 20 degrees

// From 10° to 350° (shorter to go CW through 0°)
angleSpan(10 * Math.PI / 180, 350 * Math.PI / 180); // ≈ -20 degrees
```
