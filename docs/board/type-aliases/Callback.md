[@ue-too/board](../globals.md) / Callback

# Type Alias: Callback()\<K\>

> **Callback**\<`K`\> = (`event`, `cameraState`) => `void`

Defined in: [packages/board/src/camera/update-publisher.ts:97](https://github.com/ue-too/ue-too/blob/c02efc01f7c19f3efc21823d0489e987a3e92427/packages/board/src/camera/update-publisher.ts#L97)

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
