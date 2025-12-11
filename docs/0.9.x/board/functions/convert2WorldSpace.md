[@ue-too/board](../globals.md) / convert2WorldSpace

# Function: convert2WorldSpace()

> **convert2WorldSpace**(`point`, `viewPortWidth`, `viewPortHeight`, `cameraPosition`, `cameraZoomLevel`, `cameraRotation`): `Point`

Defined in: [packages/board/src/camera/utils/coordinate-conversion.ts:26](https://github.com/ue-too/ue-too/blob/6e9c66b5f3b3ab9f9b176d974bbf941b3420f5e1/packages/board/src/camera/utils/coordinate-conversion.ts#L26)

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

Converts the point to world space.
The point is in the viewport space where the "bottom left" corner is the origin.
Camera position is the position of the camera in world space.
