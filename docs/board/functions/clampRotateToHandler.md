[@ue-too/board](../globals.md) / clampRotateToHandler

# Function: clampRotateToHandler()

> **clampRotateToHandler**(`targetRotation`, `camera`, `config`): `number`

Defined in: [packages/board/src/camera/camera-rig/rotation-handler.ts:81](https://github.com/ue-too/ue-too/blob/c02efc01f7c19f3efc21823d0489e987a3e92427/packages/board/src/camera/camera-rig/rotation-handler.ts#L81)

## Parameters

### targetRotation

`number`

### camera

[`BoardCamera`](../interfaces/BoardCamera.md)

### config

[`RotationHandlerClampConfig`](../type-aliases/RotationHandlerClampConfig.md)

## Returns

`number`

## Description

This is the clamp handler for the "rotate to" handler pipeline.
It clamps the target rotation to the range of the camera's rotation boundaries.
