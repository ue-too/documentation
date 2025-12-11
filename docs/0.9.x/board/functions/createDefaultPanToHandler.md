[@ue-too/board](../globals.md) / createDefaultPanToHandler

# Function: createDefaultPanToHandler()

> **createDefaultPanToHandler**(): [`PanToHandlerFunction`](../type-aliases/PanToHandlerFunction.md)

Defined in: [packages/board/src/camera/camera-rig/pan-handler.ts:68](https://github.com/ue-too/ue-too/blob/6e9c66b5f3b3ab9f9b176d974bbf941b3420f5e1/packages/board/src/camera/camera-rig/pan-handler.ts#L68)

## Returns

[`PanToHandlerFunction`](../type-aliases/PanToHandlerFunction.md)

## Description

Helper function that creates a default "pan to" handler.
The default pan to handler will first restrict the pan to the view port, then clamp the pan to the boundaries, and then pan to the destination.
This handler chain works in the world coordinate system.

## See

[createHandlerChain](createHandlerChain.md) to create your own custom pan handler pipeline. (you can also use this function as a part of your own custom pan handler pipeline)
