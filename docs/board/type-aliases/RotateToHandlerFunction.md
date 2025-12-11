[@ue-too/board](../globals.md) / RotateToHandlerFunction

# Type Alias: RotateToHandlerFunction()

> **RotateToHandlerFunction** = (`targetRotation`, `camera`, `config`) => `number`

Defined in: [packages/board/src/camera/camera-rig/rotation-handler.ts:44](https://github.com/ue-too/ue-too/blob/c02efc01f7c19f3efc21823d0489e987a3e92427/packages/board/src/camera/camera-rig/rotation-handler.ts#L44)

## Parameters

### targetRotation

`number`

### camera

[`BoardCamera`](../interfaces/BoardCamera.md)

### config

[`RotationHandlerConfig`](RotationHandlerConfig.md)

## Returns

`number`

## Description

The function that is used to rotate the camera to a specific target rotation.
The target rotation is in radians.
This is structured as a handler pipeline.

## See

[createHandlerChain](../functions/createHandlerChain.md)
