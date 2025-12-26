[@ue-too/board](../globals.md) / minZoomLevelBaseOnHeight

# Function: minZoomLevelBaseOnHeight()

> **minZoomLevelBaseOnHeight**(`boundaries`, `canvasWidth`, `canvasHeight`, `cameraRotation`): `number` \| `undefined`

Defined in: [packages/board/src/utils/zoomlevel-adjustment.ts:230](https://github.com/ue-too/ue-too/blob/e468a9961da59c81663192ec8df16ebc8e17abac/packages/board/src/utils/zoomlevel-adjustment.ts#L230)

Calculates minimum zoom level based only on boundary height.

## Parameters

### boundaries

The world-space boundaries

[`Boundaries`](../type-aliases/Boundaries.md) | `undefined`

### canvasWidth

`number`

Canvas width in pixels

### canvasHeight

`number`

Canvas height in pixels

### cameraRotation

`number`

Camera rotation angle in radians

## Returns

`number` \| `undefined`

Minimum zoom level, or undefined if height is not defined

## Remarks

Similar to [minZoomLevelBaseOnDimensions](minZoomLevelBaseOnDimensions.md) but only considers the
height constraint. Useful when width is unbounded or not relevant.

Calculates zoom needed to fit the boundary height within the canvas,
accounting for rotation:
- Height projection on canvas X-axis: `height * cos(rotation)`
- Height projection on canvas Y-axis: `height * sin(rotation)`

Takes the maximum of these to ensure the height fits regardless of
how rotation distributes it across canvas axes.

## Example

```typescript
const boundaries = {
  min: { y: 0 },
  max: { y: 500 }
};

const zoom = minZoomLevelBaseOnHeight(boundaries, 800, 600, 0);
// Result: 1.2 (600/500)
```

## See

[minZoomLevelBaseOnDimensions](minZoomLevelBaseOnDimensions.md) for full calculation
