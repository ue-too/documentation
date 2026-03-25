[@ue-too/board](../../modules.md) / [index](../index.md) / CameraEventMap

# 型エイリアス: CameraEventMap

> **CameraEventMap** = `object`

定義: [packages/board/src/camera/update-publisher.ts:52](https://github.com/ue-too/ue-too/blob/9b787448328cf446379b1ea4cc5f4c79149cbec8/packages/board/src/camera/update-publisher.ts#L52)

Mapping of camera event names to their payload types.
Used for type-safe event subscription.

## プロパティ

### all

> **all**: [`AllCameraEventPayload`](AllCameraEventPayload.md)

定義: [packages/board/src/camera/update-publisher.ts:60](https://github.com/ue-too/ue-too/blob/9b787448328cf446379b1ea4cc5f4c79149cbec8/packages/board/src/camera/update-publisher.ts#L60)

Any camera change event (union of pan, zoom, rotate)

***

### pan

> **pan**: [`CameraPanEventPayload`](CameraPanEventPayload.md)

定義: [packages/board/src/camera/update-publisher.ts:54](https://github.com/ue-too/ue-too/blob/9b787448328cf446379b1ea4cc5f4c79149cbec8/packages/board/src/camera/update-publisher.ts#L54)

Position change event

***

### rotate

> **rotate**: [`CameraRotateEventPayload`](CameraRotateEventPayload.md)

定義: [packages/board/src/camera/update-publisher.ts:58](https://github.com/ue-too/ue-too/blob/9b787448328cf446379b1ea4cc5f4c79149cbec8/packages/board/src/camera/update-publisher.ts#L58)

Rotation change event

***

### zoom

> **zoom**: [`CameraZoomEventPayload`](CameraZoomEventPayload.md)

定義: [packages/board/src/camera/update-publisher.ts:56](https://github.com/ue-too/ue-too/blob/9b787448328cf446379b1ea4cc5f4c79149cbec8/packages/board/src/camera/update-publisher.ts#L56)

Zoom level change event
