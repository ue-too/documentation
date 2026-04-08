[@ue-too/board](../../modules.md) / [index](../index.md) / CameraState

# 型エイリアス: CameraState

> **CameraState** = `object`

定義: [packages/board/src/camera/update-publisher.ts:102](https://github.com/ue-too/ue-too/blob/79a36cf61d861e6b4e3302e81111636c6082a3db/packages/board/src/camera/update-publisher.ts#L102)

Snapshot of camera state at the time an event occurs.
Passed to all event callbacks alongside the event payload.

## プロパティ

### position

> **position**: `Point`

定義: [packages/board/src/camera/update-publisher.ts:104](https://github.com/ue-too/ue-too/blob/79a36cf61d861e6b4e3302e81111636c6082a3db/packages/board/src/camera/update-publisher.ts#L104)

Camera position in world coordinates

***

### rotation

> **rotation**: `number`

定義: [packages/board/src/camera/update-publisher.ts:108](https://github.com/ue-too/ue-too/blob/79a36cf61d861e6b4e3302e81111636c6082a3db/packages/board/src/camera/update-publisher.ts#L108)

Current rotation in radians

***

### zoomLevel

> **zoomLevel**: `number`

定義: [packages/board/src/camera/update-publisher.ts:106](https://github.com/ue-too/ue-too/blob/79a36cf61d861e6b4e3302e81111636c6082a3db/packages/board/src/camera/update-publisher.ts#L106)

Current zoom level
