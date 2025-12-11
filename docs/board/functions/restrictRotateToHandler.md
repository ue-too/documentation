[@ue-too/board](../globals.md) / restrictRotateToHandler

# Function: restrictRotateToHandler()

> **restrictRotateToHandler**(`targetRotation`, `camera`, `config`): `number`

Defined in: [packages/board/src/camera/camera-rig/rotation-handler.ts:95](https://github.com/ue-too/ue-too/blob/c02efc01f7c19f3efc21823d0489e987a3e92427/packages/board/src/camera/camera-rig/rotation-handler.ts#L95)

## Parameters

### targetRotation

`number`

### camera

[`BoardCamera`](../interfaces/BoardCamera.md)

### config

[`RotationHandlerRestrictConfig`](../type-aliases/RotationHandlerRestrictConfig.md)

## Returns

`number`

## Description

This is the restrict handler for the "rotate to" handler pipeline.
It restricts the target rotation to the range of the camera's rotation boundaries.
