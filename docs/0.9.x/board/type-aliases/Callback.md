[@ue-too/board](../globals.md) / Callback

# Type Alias: Callback()\<K\>

> **Callback**\<`K`\> = (`event`, `cameraState`) => `void`

Defined in: [packages/board/src/camera/update-publisher.ts:97](https://github.com/ue-too/ue-too/blob/6e9c66b5f3b3ab9f9b176d974bbf941b3420f5e1/packages/board/src/camera/update-publisher.ts#L97)

## Type Parameters

### K

`K` *extends* keyof [`CameraEventMap`](CameraEventMap.md)

## Parameters

### event

[`CameraEventMap`](CameraEventMap.md)\[`K`\]

### cameraState

[`CameraState`](CameraState.md)

## Returns

`void`

## Description

The callback function type for the camera event.
