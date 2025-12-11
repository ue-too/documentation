[@ue-too/board](../globals.md) / Callback

# Type Alias: Callback()\<K\>

> **Callback**\<`K`\> = (`event`, `cameraState`) => `void`

Defined in: [packages/board/src/camera/update-publisher.ts:97](https://github.com/ue-too/ue-too/blob/407e414f82d0bb1a2a3cfbf5160e331d5a81d8be/packages/board/src/camera/update-publisher.ts#L97)

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
