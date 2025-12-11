[@ue-too/board](../globals.md) / PanByHandlerFunction

# Type Alias: PanByHandlerFunction()

> **PanByHandlerFunction** = (`delta`, `camera`, `config`) => `Point`

Defined in: [packages/board/src/camera/camera-rig/pan-handler.ts:58](https://github.com/ue-too/ue-too/blob/95dd78435970713202a67be3986e96a80ff00749/packages/board/src/camera/camera-rig/pan-handler.ts#L58)

## Parameters

### delta

`Point`

### camera

[`BoardCamera`](../interfaces/BoardCamera.md)

### config

[`PanHandlerConfig`](PanHandlerConfig.md)

## Returns

`Point`

## Description

Function Type that is used to define the "pan by" handler.
The delta is in "stage/context/world" space.
This is structured as a handler pipeline.

## See

[createHandlerChain](../functions/createHandlerChain.md)
