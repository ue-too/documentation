[@ue-too/board](../globals.md) / restrictZoomToHandler

# Function: restrictZoomToHandler()

> **restrictZoomToHandler**(`destination`, `camera`, `config`): `number`

Defined in: [packages/board/src/camera/camera-rig/zoom-handler.ts:78](https://github.com/ue-too/ue-too/blob/95dd78435970713202a67be3986e96a80ff00749/packages/board/src/camera/camera-rig/zoom-handler.ts#L78)

## Parameters

### destination

`number`

### camera

[`BoardCamera`](../interfaces/BoardCamera.md)

### config

[`ZoomHandlerRestrictConfig`](../type-aliases/ZoomHandlerRestrictConfig.md)

## Returns

`number`

## Description

The function that is part of the zoom to handler pipeline.
Restricts the zoom level to the zoom boundaries.

## See

[createHandlerChain](createHandlerChain.md)
