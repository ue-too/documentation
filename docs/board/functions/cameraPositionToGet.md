[@ue-too/board](../globals.md) / cameraPositionToGet

# Function: cameraPositionToGet()

> **cameraPositionToGet**(`pointInWorld`, `toPointInViewPort`, `cameraZoomLevel`, `cameraRotation`): `Point`

Defined in: [packages/board/src/camera/utils/coordinate-conversion.ts:120](https://github.com/ue-too/ue-too/blob/407e414f82d0bb1a2a3cfbf5160e331d5a81d8be/packages/board/src/camera/utils/coordinate-conversion.ts#L120)

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
