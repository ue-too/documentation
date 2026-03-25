[@ue-too/math](../../modules.md) / [index](../index.md) / angleSpan

# 函式: angleSpan()

> **angleSpan**(`from`, `to`): `number`

定義於: [index.ts:722](https://github.com/ue-too/ue-too/blob/9b787448328cf446379b1ea4cc5f4c79149cbec8/packages/math/src/index.ts#L722)

Calculates the smallest angular difference between two angles.

## 參數

### from

`number`

Starting angle in radians

### to

`number`

Ending angle in radians

## 回傳

`number`

The smallest angle span from 'from' to 'to', in range (-π, π]

## 備註

This function accounts for wrapping around 2π and always returns the shorter path.
Positive result means counter-clockwise rotation, negative means clockwise.

## 範例

```typescript
// From 0° to 90°
angleSpan(0, Math.PI / 2); // π/2 (90 degrees CCW)

// From 350° to 10° (shorter to go CCW through 0°)
angleSpan(350 * Math.PI / 180, 10 * Math.PI / 180); // ≈ 20 degrees

// From 10° to 350° (shorter to go CW through 0°)
angleSpan(10 * Math.PI / 180, 350 * Math.PI / 180); // ≈ -20 degrees
```
