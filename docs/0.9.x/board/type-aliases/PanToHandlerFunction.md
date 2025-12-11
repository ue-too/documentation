[@ue-too/board](../globals.md) / PanToHandlerFunction

# Type Alias: PanToHandlerFunction()

> **PanToHandlerFunction** = (`destination`, `camera`, `config`) => `Point`

Defined in: [packages/board/src/camera/camera-rig/pan-handler.ts:50](https://github.com/ue-too/ue-too/blob/6e9c66b5f3b3ab9f9b176d974bbf941b3420f5e1/packages/board/src/camera/camera-rig/pan-handler.ts#L50)

## Parameters

### destination

`Point`

### camera

[`BoardCamera`](../interfaces/BoardCamera.md)

### config

[`PanHandlerConfig`](PanHandlerConfig.md)

## Returns

`Point`

## Description

Function Type that is used to define the "pan to" handler.
The destination is in "stage/context/world" space.
This is structured as a handler pipeline.

## See

[createHandlerChain](../functions/createHandlerChain.md)
