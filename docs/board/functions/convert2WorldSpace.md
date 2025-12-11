[@ue-too/board](../globals.md) / convert2WorldSpace

# Function: convert2WorldSpace()

> **convert2WorldSpace**(`point`, `viewPortWidth`, `viewPortHeight`, `cameraPosition`, `cameraZoomLevel`, `cameraRotation`): `Point`

Defined in: [packages/board/src/camera/utils/coordinate-conversion.ts:26](https://github.com/ue-too/ue-too/blob/95dd78435970713202a67be3986e96a80ff00749/packages/board/src/camera/utils/coordinate-conversion.ts#L26)

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
