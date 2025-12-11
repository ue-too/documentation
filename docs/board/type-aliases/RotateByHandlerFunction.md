[@ue-too/board](../globals.md) / RotateByHandlerFunction

# Type Alias: RotateByHandlerFunction()

> **RotateByHandlerFunction** = (`delta`, `camera`, `config`) => `number`

Defined in: [packages/board/src/camera/camera-rig/rotation-handler.ts:35](https://github.com/ue-too/ue-too/blob/c02efc01f7c19f3efc21823d0489e987a3e92427/packages/board/src/camera/camera-rig/rotation-handler.ts#L35)

## Parameters

### delta

`number`

### camera

[`BoardCamera`](../interfaces/BoardCamera.md)

### config

[`RotationHandlerConfig`](RotationHandlerConfig.md)

## Returns

`number`

## Description

The function that is used to rotate the camera by a specific delta. 
The delta is in radians.
This is structured as a handler pipeline.

## See

[createHandlerChain](../functions/createHandlerChain.md)
