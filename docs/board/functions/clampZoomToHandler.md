[@ue-too/board](../globals.md) / clampZoomToHandler

# Function: clampZoomToHandler()

> **clampZoomToHandler**(`destination`, `camera`, `config`): `number`

Defined in: [packages/board/src/camera/camera-rig/zoom-handler.ts:47](https://github.com/ue-too/ue-too/blob/95dd78435970713202a67be3986e96a80ff00749/packages/board/src/camera/camera-rig/zoom-handler.ts#L47)

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
