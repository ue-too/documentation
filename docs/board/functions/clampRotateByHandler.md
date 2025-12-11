[@ue-too/board](../globals.md) / clampRotateByHandler

# Function: clampRotateByHandler()

> **clampRotateByHandler**(`delta`, `camera`, `config`): `number`

Defined in: [packages/board/src/camera/camera-rig/rotation-handler.ts:52](https://github.com/ue-too/ue-too/blob/fe7fe80879019da785d08f475b37a73725116e88/packages/board/src/camera/camera-rig/rotation-handler.ts#L52)

## Parameters

### delta

`number`

### camera

[`BoardCamera`](../interfaces/BoardCamera.md)

### config

[`RotationHandlerClampConfig`](../type-aliases/RotationHandlerClampConfig.md)

## Returns

`number`

## Description

This is the clamp handler for the "rotate by" handler pipeline.
It clamps the delta to the range of the camera's rotation boundaries.
