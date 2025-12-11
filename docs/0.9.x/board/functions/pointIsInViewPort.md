[@ue-too/board](../globals.md) / pointIsInViewPort

# Function: pointIsInViewPort()

> **pointIsInViewPort**(`point`, `viewPortWidth`, `viewPortHeight`, `cameraPosition`, `cameraZoomLevel`, `cameraRotation`): `boolean`

Defined in: [packages/board/src/camera/utils/coordinate-conversion.ts:86](https://github.com/ue-too/ue-too/blob/fdbfb1431206f8d7c812dca3e1d0dcd7389f1d6d/packages/board/src/camera/utils/coordinate-conversion.ts#L86)

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

`boolean`

## Description

Checks if a point is in the view port.
The point is in world space.
The camera position is the position of the camera in world space.
