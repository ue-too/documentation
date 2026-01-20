[@ue-too/board](../globals.md) / AllCameraEventPayload

# Type Alias: AllCameraEventPayload

> **AllCameraEventPayload** = [`CameraRotateEvent`](CameraRotateEvent.md) \| [`CameraPanEvent`](CameraPanEvent.md) \| [`CameraZoomEvent`](CameraZoomEvent.md)

Defined in: [packages/board/src/camera/update-publisher.ts:111](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/board/src/camera/update-publisher.ts#L111)

Union type of all camera event payloads with type discriminators.
Used for the 'all' event which fires for any camera change.
