[@ue-too/board](../globals.md) / convert2WorldSpaceWRT

# Function: convert2WorldSpaceWRT()

> **convert2WorldSpaceWRT**(`targetPosition`, `interestPoint`, `viewPortWidth`, `viewPortHeight`, `cameraZoomLevel`, `cameraRotation`): `Point`

Defined in: [packages/board/src/camera/utils/coordinate-conversion.ts:11](https://github.com/ue-too/ue-too/blob/6e9c66b5f3b3ab9f9b176d974bbf941b3420f5e1/packages/board/src/camera/utils/coordinate-conversion.ts#L11)

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
