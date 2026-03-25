[@ue-too/board](../../modules.md) / [index](../index.md) / rotationWithinBoundary

# 函式: rotationWithinBoundary()

> **rotationWithinBoundary**(`rotation`, `rotationBoundary`): `boolean`

定義於: [packages/board/src/camera/utils/rotation.ts:180](https://github.com/ue-too/ue-too/blob/9b787448328cf446379b1ea4cc5f4c79149cbec8/packages/board/src/camera/utils/rotation.ts#L180)

Checks if a rotation angle is within an experimental rotation boundary.

## 參數

### rotation

`number`

The rotation angle to check in radians

### rotationBoundary

[`RotationBoundary`](../type-aliases/RotationBoundary.md)

Rotation boundary with positive/negative direction

## 回傳

`boolean`

True if rotation is within the boundary range, false otherwise

## 備註

This is an experimental alternative to [rotationWithinLimits](rotationWithinLimits.md) using
positive/negative direction semantics instead of ccw/cw.
