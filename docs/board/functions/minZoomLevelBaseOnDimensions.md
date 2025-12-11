[@ue-too/board](../globals.md) / minZoomLevelBaseOnDimensions

# Function: minZoomLevelBaseOnDimensions()

> **minZoomLevelBaseOnDimensions**(`boundaries`, `canvasWidth`, `canvasHeight`, `cameraRotation`): `number` \| `undefined`

Defined in: [packages/board/src/utils/zoomlevel-adjustment.ts:10](https://github.com/ue-too/ue-too/blob/95dd78435970713202a67be3986e96a80ff00749/packages/board/src/utils/zoomlevel-adjustment.ts#L10)

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
