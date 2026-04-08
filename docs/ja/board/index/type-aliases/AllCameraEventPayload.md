[@ue-too/board](../../modules.md) / [index](../index.md) / AllCameraEventPayload

# 型エイリアス: AllCameraEventPayload

> **AllCameraEventPayload** = [`CameraRotateEvent`](CameraRotateEvent.md) \| [`CameraPanEvent`](CameraPanEvent.md) \| [`CameraZoomEvent`](CameraZoomEvent.md)

定義: [packages/board/src/camera/update-publisher.ts:117](https://github.com/ue-too/ue-too/blob/feb7c80222df5d3cd97bfa1933bafe3190c6e48d/packages/board/src/camera/update-publisher.ts#L117)

Union type of all camera event payloads with type discriminators.
Used for the 'all' event which fires for any camera change.
