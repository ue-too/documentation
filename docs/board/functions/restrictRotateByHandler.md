[@ue-too/board](../globals.md) / restrictRotateByHandler

# Function: restrictRotateByHandler()

> **restrictRotateByHandler**(`delta`, `camera`, `config`): `number`

Defined in: [packages/board/src/camera/camera-rig/rotation-handler.ts:68](https://github.com/ue-too/ue-too/blob/c02efc01f7c19f3efc21823d0489e987a3e92427/packages/board/src/camera/camera-rig/rotation-handler.ts#L68)

## Parameters

### delta

`number`

### camera

[`BoardCamera`](../interfaces/BoardCamera.md)

### config

[`RotationHandlerRestrictConfig`](../type-aliases/RotationHandlerRestrictConfig.md)

## Returns

`number`

## Description

This is the restrict handler for the "rotate by" handler pipeline.
It restricts the delta to the range of the camera's rotation boundaries.
