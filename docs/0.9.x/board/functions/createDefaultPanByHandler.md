[@ue-too/board](../globals.md) / createDefaultPanByHandler

# Function: createDefaultPanByHandler()

> **createDefaultPanByHandler**(): [`PanByHandlerFunction`](../type-aliases/PanByHandlerFunction.md)

Defined in: [packages/board/src/camera/camera-rig/pan-handler.ts:83](https://github.com/ue-too/ue-too/blob/6e9c66b5f3b3ab9f9b176d974bbf941b3420f5e1/packages/board/src/camera/camera-rig/pan-handler.ts#L83)

## Returns

[`PanByHandlerFunction`](../type-aliases/PanByHandlerFunction.md)

## Description

Helper function that creates a default "pan by" handler.
The resulting pan by handler takes in a delta that is in "stage/context/world" space.
The default pan by handler will first restrict the pan by the view port, then clamp the pan by the boundaries, and then pan by the delta.

## See

[createHandlerChain](createHandlerChain.md) to create your own custom pan handler pipeline. (you can also use this function as a part of your own custom pan handler pipeline)
