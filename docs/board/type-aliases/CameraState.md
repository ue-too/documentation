[@ue-too/board](../globals.md) / CameraState

# Type Alias: CameraState

> **CameraState** = `object`

Defined in: [packages/board/src/camera/update-publisher.ts:96](https://github.com/ue-too/ue-too/blob/1055c6abca1ea3a0e952b0825f36e0ca2527df85/packages/board/src/camera/update-publisher.ts#L96)

Snapshot of camera state at the time an event occurs.
Passed to all event callbacks alongside the event payload.

## Properties

### position

> **position**: `Point`

Defined in: [packages/board/src/camera/update-publisher.ts:98](https://github.com/ue-too/ue-too/blob/1055c6abca1ea3a0e952b0825f36e0ca2527df85/packages/board/src/camera/update-publisher.ts#L98)

Camera position in world coordinates

***

### rotation

> **rotation**: `number`

Defined in: [packages/board/src/camera/update-publisher.ts:102](https://github.com/ue-too/ue-too/blob/1055c6abca1ea3a0e952b0825f36e0ca2527df85/packages/board/src/camera/update-publisher.ts#L102)

Current rotation in radians

***

### zoomLevel

> **zoomLevel**: `number`

Defined in: [packages/board/src/camera/update-publisher.ts:100](https://github.com/ue-too/ue-too/blob/1055c6abca1ea3a0e952b0825f36e0ca2527df85/packages/board/src/camera/update-publisher.ts#L100)

Current zoom level
