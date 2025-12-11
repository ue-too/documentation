[@ue-too/board](../globals.md) / invertFromWorldSpace

# Function: invertFromWorldSpace()

> **invertFromWorldSpace**(`point`, `viewPortWidth`, `viewPortHeight`, `cameraPosition`, `cameraZoomLevel`, `cameraRotation`): `Point`

Defined in: [packages/board/src/camera/utils/coordinate-conversion.ts:71](https://github.com/ue-too/ue-too/blob/407e414f82d0bb1a2a3cfbf5160e331d5a81d8be/packages/board/src/camera/utils/coordinate-conversion.ts#L71)

## Parameters

### point

`Point`

### viewPortWidth

`number`

### viewPortHeight

`number`

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
The origin of the view port is at the bottom left corner.
The point is in world space.
The camera position is the position of the camera in world space.
