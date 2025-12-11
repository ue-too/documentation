[@ue-too/board](../globals.md) / convert2WorldSpaceWRT

# Function: convert2WorldSpaceWRT()

> **convert2WorldSpaceWRT**(`targetPosition`, `interestPoint`, `viewPortWidth`, `viewPortHeight`, `cameraZoomLevel`, `cameraRotation`): `Point`

Defined in: [packages/board/src/camera/utils/coordinate-conversion.ts:11](https://github.com/ue-too/ue-too/blob/fdbfb1431206f8d7c812dca3e1d0dcd7389f1d6d/packages/board/src/camera/utils/coordinate-conversion.ts#L11)

## Parameters

### targetPosition

`Point`

### interestPoint

`Point`

### viewPortWidth

`number`

### viewPortHeight

`number`

### cameraZoomLevel

`number`

### cameraRotation

`number`

## Returns

`Point`

## Description

Finds the world space coordinate of the interest point if the camera is at target position.
The target position is the "would be" position of the camera in world space.
The interest point is the point in view port space where the "bottom left" corner is the origin.
