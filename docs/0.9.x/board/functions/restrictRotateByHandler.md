[@ue-too/board](../globals.md) / restrictRotateByHandler

# Function: restrictRotateByHandler()

> **restrictRotateByHandler**(`delta`, `camera`, `config`): `number`

Defined in: [packages/board/src/camera/camera-rig/rotation-handler.ts:68](https://github.com/ue-too/ue-too/blob/6e9c66b5f3b3ab9f9b176d974bbf941b3420f5e1/packages/board/src/camera/camera-rig/rotation-handler.ts#L68)

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
