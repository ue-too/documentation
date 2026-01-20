[@ue-too/board](../globals.md) / Callback

# Type Alias: Callback()\<K\>

> **Callback**\<`K`\> = (`event`, `cameraState`) => `void`

Defined in: [packages/board/src/camera/update-publisher.ts:122](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/board/src/camera/update-publisher.ts#L122)

Generic callback function type for camera events.

## Type Parameters

### K

`K` *extends* keyof [`CameraEventMap`](CameraEventMap.md)

The event type key from CameraEventMap

## Parameters

### event

[`CameraEventMap`](CameraEventMap.md)\[`K`\]

The event payload specific to this event type

### cameraState

[`CameraState`](CameraState.md)

Current camera state snapshot at the time of the event

## Returns

`void`
