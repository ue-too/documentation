[@ue-too/board](../globals.md) / createDefaultPanByHandler

# Function: createDefaultPanByHandler()

> **createDefaultPanByHandler**(): [`PanByHandlerFunction`](../type-aliases/PanByHandlerFunction.md)

Defined in: [packages/board/src/camera/camera-rig/pan-handler.ts:83](https://github.com/ue-too/ue-too/blob/fe7fe80879019da785d08f475b37a73725116e88/packages/board/src/camera/camera-rig/pan-handler.ts#L83)

## Returns

[`PanByHandlerFunction`](../type-aliases/PanByHandlerFunction.md)

## Description

Helper function that creates a default "pan by" handler.
The resulting pan by handler takes in a delta that is in "stage/context/world" space.
The default pan by handler will first restrict the pan by the view port, then clamp the pan by the boundaries, and then pan by the delta.

## See

[createHandlerChain](createHandlerChain.md) to create your own custom pan handler pipeline. (you can also use this function as a part of your own custom pan handler pipeline)
