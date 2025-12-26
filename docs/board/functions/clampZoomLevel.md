[@ue-too/board](../globals.md) / clampZoomLevel

# Function: clampZoomLevel()

> **clampZoomLevel**(`zoomLevel`, `zoomLevelLimits?`): `number`

Defined in: [packages/board/src/camera/utils/zoom.ts:70](https://github.com/ue-too/ue-too/blob/aabc0f56e9e83141d0fd935ef6ac3e5fe0af0a61/packages/board/src/camera/utils/zoom.ts#L70)

Clamps a zoom level to stay within specified limits.

## Parameters

### zoomLevel

`number`

The zoom level to clamp

### zoomLevelLimits?

[`ZoomLevelLimits`](../type-aliases/ZoomLevelLimits.md)

Optional zoom constraints

## Returns

`number`

The clamped zoom level, or original value if already within limits

## Remarks

If the zoom level is already within limits, returns it unchanged.
If no limits are specified, returns the original value.

## Example

```typescript
const limits = { min: 0.5, max: 4 };

clampZoomLevel(2.0, limits);  // 2.0 (within bounds)
clampZoomLevel(0.1, limits);  // 0.5 (clamped to min)
clampZoomLevel(10, limits);   // 4.0 (clamped to max)
clampZoomLevel(2.0);          // 2.0 (no limits)
```
