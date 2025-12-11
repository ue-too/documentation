[@ue-too/board](../globals.md) / clampRotateByHandler

# Function: clampRotateByHandler()

> **clampRotateByHandler**(`delta`, `camera`, `config`): `number`

Defined in: [packages/board/src/camera/camera-rig/rotation-handler.ts:52](https://github.com/ue-too/ue-too/blob/407e414f82d0bb1a2a3cfbf5160e331d5a81d8be/packages/board/src/camera/camera-rig/rotation-handler.ts#L52)

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
