[@ue-too/board](../globals.md) / invertFromWorldSpace

# Function: invertFromWorldSpace()

> **invertFromWorldSpace**(`point`, `viewPortWidth`, `viewPortHeight`, `cameraPosition`, `cameraZoomLevel`, `cameraRotation`): `Point`

Defined in: [packages/board/src/camera/utils/coordinate-conversion.ts:71](https://github.com/ue-too/ue-too/blob/6e9c66b5f3b3ab9f9b176d974bbf941b3420f5e1/packages/board/src/camera/utils/coordinate-conversion.ts#L71)

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
