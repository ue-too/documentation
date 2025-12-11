[@ue-too/board](../globals.md) / zoomLevelBoundariesShouldUpdate

# Function: zoomLevelBoundariesShouldUpdate()

> **zoomLevelBoundariesShouldUpdate**(`zoomLevelBoundaries`, `targetMinZoomLevel`): `targetMinZoomLevel is number`

Defined in: [packages/board/src/utils/zoomlevel-adjustment.ts:52](https://github.com/ue-too/ue-too/blob/6e9c66b5f3b3ab9f9b176d974bbf941b3420f5e1/packages/board/src/utils/zoomlevel-adjustment.ts#L52)

## Parameters

### zoomLevelBoundaries

[`ZoomLevelLimits`](../type-aliases/ZoomLevelLimits.md) | `undefined`

### targetMinZoomLevel

`number` | `undefined`

## Returns

`targetMinZoomLevel is number`

## Description

Determines if the zoom level boundaries should be updated when the canvas is resized.
Zoom level boundaries adjustment only tightens the zoom level boundaries; it does not relax them.
