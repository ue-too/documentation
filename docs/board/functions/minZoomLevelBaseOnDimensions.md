[@ue-too/board](../globals.md) / minZoomLevelBaseOnDimensions

# Function: minZoomLevelBaseOnDimensions()

> **minZoomLevelBaseOnDimensions**(`boundaries`, `canvasWidth`, `canvasHeight`, `cameraRotation`): `number` \| `undefined`

Defined in: [packages/board/src/utils/zoomlevel-adjustment.ts:10](https://github.com/ue-too/ue-too/blob/c02efc01f7c19f3efc21823d0489e987a3e92427/packages/board/src/utils/zoomlevel-adjustment.ts#L10)

## Parameters

### boundaries

[`Boundaries`](../type-aliases/Boundaries.md) | `undefined`

### canvasWidth

`number`

### canvasHeight

`number`

### cameraRotation

`number`

## Returns

`number` \| `undefined`

## Description

Calculates the minimum zoom level based on the dimensions of the boundaries.
Used when the canvas on the html is resized.
