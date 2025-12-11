[@ue-too/board](../globals.md) / restrictPanByHandler

# Function: restrictPanByHandler()

> **restrictPanByHandler**(`delta`, `camera`, `config`): `Point`

Defined in: [packages/board/src/camera/camera-rig/pan-handler.ts:114](https://github.com/ue-too/ue-too/blob/407e414f82d0bb1a2a3cfbf5160e331d5a81d8be/packages/board/src/camera/camera-rig/pan-handler.ts#L114)

## Parameters

### delta

`Point`

### camera

[`BoardCamera`](../interfaces/BoardCamera.md)

### config

[`PanHandlerRestrictionConfig`](../type-aliases/PanHandlerRestrictionConfig.md)

## Returns

`Point`

## Description

Function that is part of the "pan by" handler pipeline. It restricts the pan delta to within a single axis based on the config. (relative to the current camera position)
You can use this function standalone to restrict the pan delta to within a single axis based on the config. 
But it is recommended to use this kind of function as part of the pan handler pipeline. (to include this function in your own custom pan handler pipeline)
