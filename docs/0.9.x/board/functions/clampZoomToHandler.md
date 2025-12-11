[@ue-too/board](../globals.md) / clampZoomToHandler

# Function: clampZoomToHandler()

> **clampZoomToHandler**(`destination`, `camera`, `config`): `number`

Defined in: [packages/board/src/camera/camera-rig/zoom-handler.ts:47](https://github.com/ue-too/ue-too/blob/6e9c66b5f3b3ab9f9b176d974bbf941b3420f5e1/packages/board/src/camera/camera-rig/zoom-handler.ts#L47)

## Parameters

### destination

`number`

### camera

[`BoardCamera`](../interfaces/BoardCamera.md)

### config

[`ZoomHandlerClampConfig`](../type-aliases/ZoomHandlerClampConfig.md)

## Returns

`number`

## Description

The function that is part of the zoom to handler pipeline.
Clamps the zoom level to the zoom boundaries.

## See

[createHandlerChain](createHandlerChain.md)
