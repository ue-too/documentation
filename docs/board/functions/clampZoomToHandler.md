[@ue-too/board](../globals.md) / clampZoomToHandler

# Function: clampZoomToHandler()

> **clampZoomToHandler**(`destination`, `camera`, `config`): `number`

Defined in: [packages/board/src/camera/camera-rig/zoom-handler.ts:47](https://github.com/ue-too/ue-too/blob/c02efc01f7c19f3efc21823d0489e987a3e92427/packages/board/src/camera/camera-rig/zoom-handler.ts#L47)

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
