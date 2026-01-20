[@ue-too/board](../globals.md) / ConslidateCallback

# Type Alias: ConslidateCallback()

> **ConslidateCallback** = (`payload`, `cameraState`) => `void`

Defined in: [packages/board/src/camera/update-publisher.ts:130](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/board/src/camera/update-publisher.ts#L130)

Callback function type specifically for the 'all' camera event.
Receives a discriminated union of all camera events.

## Parameters

### payload

[`AllCameraEventPayload`](AllCameraEventPayload.md)

### cameraState

[`CameraState`](CameraState.md)

## Returns

`void`
