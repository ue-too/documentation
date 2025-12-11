[@ue-too/board](../globals.md) / Callback

# Type Alias: Callback()\<K\>

> **Callback**\<`K`\> = (`event`, `cameraState`) => `void`

Defined in: [packages/board/src/camera/update-publisher.ts:97](https://github.com/ue-too/ue-too/blob/95dd78435970713202a67be3986e96a80ff00749/packages/board/src/camera/update-publisher.ts#L97)

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
