[@ue-too/board](../globals.md) / cameraPositionToGet

# Function: cameraPositionToGet()

> **cameraPositionToGet**(`pointInWorld`, `toPointInViewPort`, `cameraZoomLevel`, `cameraRotation`): `Point`

Defined in: [packages/board/src/camera/utils/coordinate-conversion.ts:120](https://github.com/ue-too/ue-too/blob/6e9c66b5f3b3ab9f9b176d974bbf941b3420f5e1/packages/board/src/camera/utils/coordinate-conversion.ts#L120)

## Parameters

### pointInWorld

`Point`

### toPointInViewPort

`Point`

### cameraZoomLevel

`number`

### cameraRotation

`number`

## Returns

`Point`

## Description

Calculates the camera position to get a point in "stage/context/world" space to be at a certain point in view port space.
This is useful to coordinate camera pan and zoom at the same time.
