[@ue-too/board](../globals.md) / minZoomLevelBaseOnWidth

# Function: minZoomLevelBaseOnWidth()

> **minZoomLevelBaseOnWidth**(`boundaries`, `canvasWidth`, `canvasHeight`, `cameraRotation`): `number` \| `undefined`

Defined in: [packages/board/src/utils/zoomlevel-adjustment.ts:73](https://github.com/ue-too/ue-too/blob/407e414f82d0bb1a2a3cfbf5160e331d5a81d8be/packages/board/src/utils/zoomlevel-adjustment.ts#L73)

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
