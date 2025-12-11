[@ue-too/board](../globals.md) / createDefaultPanToHandler

# Function: createDefaultPanToHandler()

> **createDefaultPanToHandler**(): [`PanToHandlerFunction`](../type-aliases/PanToHandlerFunction.md)

Defined in: [packages/board/src/camera/camera-rig/pan-handler.ts:68](https://github.com/ue-too/ue-too/blob/fdbfb1431206f8d7c812dca3e1d0dcd7389f1d6d/packages/board/src/camera/camera-rig/pan-handler.ts#L68)

## Returns

[`PanToHandlerFunction`](../type-aliases/PanToHandlerFunction.md)

## Description

Helper function that creates a default "pan to" handler.
The default pan to handler will first restrict the pan to the view port, then clamp the pan to the boundaries, and then pan to the destination.
This handler chain works in the world coordinate system.

## See

[createHandlerChain](createHandlerChain.md) to create your own custom pan handler pipeline. (you can also use this function as a part of your own custom pan handler pipeline)
