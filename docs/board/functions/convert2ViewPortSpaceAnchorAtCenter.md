[@ue-too/board](../globals.md) / convert2ViewPortSpaceAnchorAtCenter

# Function: convert2ViewPortSpaceAnchorAtCenter()

> **convert2ViewPortSpaceAnchorAtCenter**(`point`, `cameraPosition`, `cameraZoomLevel`, `cameraRotation`): `Point`

Defined in: [packages/board/src/camera/utils/coordinate-conversion.ts:56](https://github.com/ue-too/ue-too/blob/407e414f82d0bb1a2a3cfbf5160e331d5a81d8be/packages/board/src/camera/utils/coordinate-conversion.ts#L56)

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
