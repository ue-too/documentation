[@ue-too/board](../globals.md) / PanByHandlerFunction

# Type Alias: PanByHandlerFunction()

> **PanByHandlerFunction** = (`delta`, `camera`, `config`) => `Point`

Defined in: [packages/board/src/camera/camera-rig/pan-handler.ts:58](https://github.com/ue-too/ue-too/blob/6e9c66b5f3b3ab9f9b176d974bbf941b3420f5e1/packages/board/src/camera/camera-rig/pan-handler.ts#L58)

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
