[@ue-too/board](../globals.md) / restrictZoomByHandler

# Function: restrictZoomByHandler()

> **restrictZoomByHandler**(`delta`, `camera`, `config`): `number`

Defined in: [packages/board/src/camera/camera-rig/zoom-handler.ts:92](https://github.com/ue-too/ue-too/blob/c02efc01f7c19f3efc21823d0489e987a3e92427/packages/board/src/camera/camera-rig/zoom-handler.ts#L92)

## Parameters

### delta

`number`

### camera

[`BoardCamera`](../interfaces/BoardCamera.md)

### config

[`ZoomHandlerRestrictConfig`](../type-aliases/ZoomHandlerRestrictConfig.md)

## Returns

`number`

## Description

The function that is part of the zoom by handler pipeline.
Restricts the zoom level to the zoom boundaries.

## See

[createHandlerChain](createHandlerChain.md)
