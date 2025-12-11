[@ue-too/board](../globals.md) / convert2ViewPortSpaceAnchorAtCenter

# Function: convert2ViewPortSpaceAnchorAtCenter()

> **convert2ViewPortSpaceAnchorAtCenter**(`point`, `cameraPosition`, `cameraZoomLevel`, `cameraRotation`): `Point`

Defined in: [packages/board/src/camera/utils/coordinate-conversion.ts:56](https://github.com/ue-too/ue-too/blob/fe7fe80879019da785d08f475b37a73725116e88/packages/board/src/camera/utils/coordinate-conversion.ts#L56)

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

Converts a point in "stage/context/world" space to view port space.
The origin of the viewport is at the center of the viewport.
The point is in world space.
The camera position is the position of the camera in world space.
