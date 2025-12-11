[@ue-too/board](../globals.md) / PanToHandlerFunction

# Type Alias: PanToHandlerFunction()

> **PanToHandlerFunction** = (`destination`, `camera`, `config`) => `Point`

Defined in: [packages/board/src/camera/camera-rig/pan-handler.ts:50](https://github.com/ue-too/ue-too/blob/407e414f82d0bb1a2a3cfbf5160e331d5a81d8be/packages/board/src/camera/camera-rig/pan-handler.ts#L50)

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
