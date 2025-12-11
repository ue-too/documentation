[@ue-too/board](../globals.md) / clampZoomByHandler

# Function: clampZoomByHandler()

> **clampZoomByHandler**(`delta`, `camera`, `config`): `number`

Defined in: [packages/board/src/camera/camera-rig/zoom-handler.ts:61](https://github.com/ue-too/ue-too/blob/407e414f82d0bb1a2a3cfbf5160e331d5a81d8be/packages/board/src/camera/camera-rig/zoom-handler.ts#L61)

## Parameters

### delta

`number`

### camera

[`BoardCamera`](../interfaces/BoardCamera.md)

### config

[`ZoomHandlerClampConfig`](../type-aliases/ZoomHandlerClampConfig.md)

## Returns

`number`

## Description

The function that is part of the zoom by handler pipeline.
Clamps the zoom level to the zoom boundaries.

## See

[createHandlerChain](createHandlerChain.md)
