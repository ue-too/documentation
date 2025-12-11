[@ue-too/board](../globals.md) / clampToHandler

# Function: clampToHandler()

> **clampToHandler**(`destination`, `camera`, `config`): `Point`

Defined in: [packages/board/src/camera/camera-rig/pan-handler.ts:126](https://github.com/ue-too/ue-too/blob/fe7fe80879019da785d08f475b37a73725116e88/packages/board/src/camera/camera-rig/pan-handler.ts#L126)

## Parameters

### destination

`Point`

### camera

[`BoardCamera`](../interfaces/BoardCamera.md)

### config

[`PanHandlerClampConfig`](../type-aliases/PanHandlerClampConfig.md)

## Returns

`Point`

## Description

Function that is part of the "pan to" handler pipeline. It clamps the pan destination within the boundaries of the view port.
You can use this function standalone to clamp the pan destination within the boundaries of the view port. 
But it is recommended to use this kind of function as part of the pan handler pipeline. (to include this function in your own custom pan handler pipeline)
