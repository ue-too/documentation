[@ue-too/board](../globals.md) / cameraPositionToGet

# Function: cameraPositionToGet()

> **cameraPositionToGet**(`pointInWorld`, `toPointInViewPort`, `cameraZoomLevel`, `cameraRotation`): `Point`

Defined in: [packages/board/src/camera/utils/coordinate-conversion.ts:120](https://github.com/ue-too/ue-too/blob/c02efc01f7c19f3efc21823d0489e987a3e92427/packages/board/src/camera/utils/coordinate-conversion.ts#L120)

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
