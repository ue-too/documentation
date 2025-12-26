[@ue-too/board](../globals.md) / AllCameraEventPayload

# Type Alias: AllCameraEventPayload

> **AllCameraEventPayload** = [`CameraRotateEvent`](CameraRotateEvent.md) \| [`CameraPanEvent`](CameraPanEvent.md) \| [`CameraZoomEvent`](CameraZoomEvent.md)

Defined in: [packages/board/src/camera/update-publisher.ts:111](https://github.com/ue-too/ue-too/blob/aabc0f56e9e83141d0fd935ef6ac3e5fe0af0a61/packages/board/src/camera/update-publisher.ts#L111)

Union type of all camera event payloads with type discriminators.
Used for the 'all' event which fires for any camera change.
