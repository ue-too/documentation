[@ue-too/board](../globals.md) / restrictZoomByHandler

# Function: restrictZoomByHandler()

> **restrictZoomByHandler**(`delta`, `camera`, `config`): `number`

Defined in: [packages/board/src/camera/camera-rig/zoom-handler.ts:92](https://github.com/ue-too/ue-too/blob/6e9c66b5f3b3ab9f9b176d974bbf941b3420f5e1/packages/board/src/camera/camera-rig/zoom-handler.ts#L92)

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
