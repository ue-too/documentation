[@ue-too/board](../globals.md) / pointIsInViewPort

# Function: pointIsInViewPort()

> **pointIsInViewPort**(`point`, `viewPortWidth`, `viewPortHeight`, `cameraPosition`, `cameraZoomLevel`, `cameraRotation`): `boolean`

Defined in: [packages/board/src/camera/utils/coordinate-conversion.ts:86](https://github.com/ue-too/ue-too/blob/6e9c66b5f3b3ab9f9b176d974bbf941b3420f5e1/packages/board/src/camera/utils/coordinate-conversion.ts#L86)

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
