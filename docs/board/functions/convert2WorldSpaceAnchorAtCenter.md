[@ue-too/board](../globals.md) / convert2WorldSpaceAnchorAtCenter

# Function: convert2WorldSpaceAnchorAtCenter()

> **convert2WorldSpaceAnchorAtCenter**(`point`, `cameraPosition`, `cameraZoomLevel`, `cameraRotation`): `Point`

Defined in: [packages/board/src/camera/utils/coordinate-conversion.ts:41](https://github.com/ue-too/ue-too/blob/e0ad36978d99a0fba62213691fb721d4dca7c035/packages/board/src/camera/utils/coordinate-conversion.ts#L41)

## Parameters

### point

`Point`

### cameraPosition

`Point`

### cameraZoomLevel

`number`

### cameraRotation

`number`

## Returns

`Point`

## Description

Converts the point to world space.
The point is in the viewport space where the origin is at the center of the viewport.
Camera position is the position of the camera in world space.
