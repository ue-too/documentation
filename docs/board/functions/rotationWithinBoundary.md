[@ue-too/board](../globals.md) / rotationWithinBoundary

# Function: rotationWithinBoundary()

> **rotationWithinBoundary**(`rotation`, `rotationBoundary`): `boolean`

Defined in: [packages/board/src/camera/utils/rotation.ts:139](https://github.com/ue-too/ue-too/blob/1055c6abca1ea3a0e952b0825f36e0ca2527df85/packages/board/src/camera/utils/rotation.ts#L139)

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
