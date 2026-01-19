[@ue-too/board](../globals.md) / CameraEventMap

# Type Alias: CameraEventMap

> **CameraEventMap** = `object`

Defined in: [packages/board/src/camera/update-publisher.ts:46](https://github.com/ue-too/ue-too/blob/1055c6abca1ea3a0e952b0825f36e0ca2527df85/packages/board/src/camera/update-publisher.ts#L46)

Mapping of camera event names to their payload types.
Used for type-safe event subscription.

## Properties

### all

> **all**: [`AllCameraEventPayload`](AllCameraEventPayload.md)

Defined in: [packages/board/src/camera/update-publisher.ts:54](https://github.com/ue-too/ue-too/blob/1055c6abca1ea3a0e952b0825f36e0ca2527df85/packages/board/src/camera/update-publisher.ts#L54)

Any camera change event (union of pan, zoom, rotate)

***

### pan

> **pan**: [`CameraPanEventPayload`](CameraPanEventPayload.md)

Defined in: [packages/board/src/camera/update-publisher.ts:48](https://github.com/ue-too/ue-too/blob/1055c6abca1ea3a0e952b0825f36e0ca2527df85/packages/board/src/camera/update-publisher.ts#L48)

Position change event

***

### rotate

> **rotate**: [`CameraRotateEventPayload`](CameraRotateEventPayload.md)

Defined in: [packages/board/src/camera/update-publisher.ts:52](https://github.com/ue-too/ue-too/blob/1055c6abca1ea3a0e952b0825f36e0ca2527df85/packages/board/src/camera/update-publisher.ts#L52)

Rotation change event

***

### zoom

> **zoom**: [`CameraZoomEventPayload`](CameraZoomEventPayload.md)

Defined in: [packages/board/src/camera/update-publisher.ts:50](https://github.com/ue-too/ue-too/blob/1055c6abca1ea3a0e952b0825f36e0ca2527df85/packages/board/src/camera/update-publisher.ts#L50)

Zoom level change event
