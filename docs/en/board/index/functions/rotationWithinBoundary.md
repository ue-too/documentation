[@ue-too/board](../../modules.md) / [index](../index.md) / rotationWithinBoundary

# Function: rotationWithinBoundary()

> **rotationWithinBoundary**(`rotation`, `rotationBoundary`): `boolean`

Defined in: [packages/board/src/camera/utils/rotation.ts:180](https://github.com/ue-too/ue-too/blob/79a36cf61d861e6b4e3302e81111636c6082a3db/packages/board/src/camera/utils/rotation.ts#L180)

Checks if a rotation angle is within an experimental rotation boundary.

## Parameters

### rotation

`number`

The rotation angle to check in radians

### rotationBoundary

[`RotationBoundary`](../type-aliases/RotationBoundary.md)

Rotation boundary with positive/negative direction

## Returns

`boolean`

True if rotation is within the boundary range, false otherwise

## Remarks

This is an experimental alternative to [rotationWithinLimits](rotationWithinLimits.md) using
positive/negative direction semantics instead of ccw/cw.
