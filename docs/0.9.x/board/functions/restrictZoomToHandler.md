[@ue-too/board](../globals.md) / restrictZoomToHandler

# Function: restrictZoomToHandler()

> **restrictZoomToHandler**(`destination`, `camera`, `config`): `number`

Defined in: [packages/board/src/camera/camera-rig/zoom-handler.ts:78](https://github.com/ue-too/ue-too/blob/fdbfb1431206f8d7c812dca3e1d0dcd7389f1d6d/packages/board/src/camera/camera-rig/zoom-handler.ts#L78)

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
