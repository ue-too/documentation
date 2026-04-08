[@ue-too/board](../../modules.md) / [index](../index.md) / AllCameraEventPayload

# 型エイリアス: AllCameraEventPayload

> **AllCameraEventPayload** = [`CameraRotateEvent`](CameraRotateEvent.md) \| [`CameraPanEvent`](CameraPanEvent.md) \| [`CameraZoomEvent`](CameraZoomEvent.md)

定義: [packages/board/src/camera/update-publisher.ts:117](https://github.com/ue-too/ue-too/blob/7d57cce875ed7b8a4f4ee4e325a18e34159928f6/packages/board/src/camera/update-publisher.ts#L117)

Union type of all camera event payloads with type discriminators.
Used for the 'all' event which fires for any camera change.
