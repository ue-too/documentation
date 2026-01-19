[@ue-too/board](../globals.md) / AllCameraEventPayload

# Type Alias: AllCameraEventPayload

> **AllCameraEventPayload** = [`CameraRotateEvent`](CameraRotateEvent.md) \| [`CameraPanEvent`](CameraPanEvent.md) \| [`CameraZoomEvent`](CameraZoomEvent.md)

Defined in: [packages/board/src/camera/update-publisher.ts:111](https://github.com/ue-too/ue-too/blob/1055c6abca1ea3a0e952b0825f36e0ca2527df85/packages/board/src/camera/update-publisher.ts#L111)

Union type of all camera event payloads with type discriminators.
Used for the 'all' event which fires for any camera change.
