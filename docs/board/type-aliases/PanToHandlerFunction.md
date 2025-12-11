[@ue-too/board](../globals.md) / PanToHandlerFunction

# Type Alias: PanToHandlerFunction()

> **PanToHandlerFunction** = (`destination`, `camera`, `config`) => `Point`

Defined in: [packages/board/src/camera/camera-rig/pan-handler.ts:50](https://github.com/ue-too/ue-too/blob/95dd78435970713202a67be3986e96a80ff00749/packages/board/src/camera/camera-rig/pan-handler.ts#L50)

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
