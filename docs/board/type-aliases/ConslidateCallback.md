[@ue-too/board](../globals.md) / ConslidateCallback

# Type Alias: ConslidateCallback()

> **ConslidateCallback** = (`payload`, `cameraState`) => `void`

Defined in: [packages/board/src/camera/update-publisher.ts:130](https://github.com/ue-too/ue-too/blob/1055c6abca1ea3a0e952b0825f36e0ca2527df85/packages/board/src/camera/update-publisher.ts#L130)

Callback function type specifically for the 'all' camera event.
Receives a discriminated union of all camera events.

## Parameters

### payload

[`AllCameraEventPayload`](AllCameraEventPayload.md)

### cameraState

[`CameraState`](CameraState.md)

## Returns

`void`
