[@ue-too/board](../globals.md) / minZoomLevelBaseOnWidth

# Function: minZoomLevelBaseOnWidth()

> **minZoomLevelBaseOnWidth**(`boundaries`, `canvasWidth`, `canvasHeight`, `cameraRotation`): `number` \| `undefined`

Defined in: [packages/board/src/utils/zoomlevel-adjustment.ts:73](https://github.com/ue-too/ue-too/blob/6e9c66b5f3b3ab9f9b176d974bbf941b3420f5e1/packages/board/src/utils/zoomlevel-adjustment.ts#L73)

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

Calculates the minimum zoom level based on the width of the boundaries.
Used when the canvas on the html is resized.
