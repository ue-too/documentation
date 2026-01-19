[@ue-too/board](../globals.md) / ZoomHandlerClampConfig

# Type Alias: ZoomHandlerClampConfig

> **ZoomHandlerClampConfig** = `object`

Defined in: [packages/board/src/camera/camera-rig/zoom-handler.ts:43](https://github.com/ue-too/ue-too/blob/1055c6abca1ea3a0e952b0825f36e0ca2527df85/packages/board/src/camera/camera-rig/zoom-handler.ts#L43)

Configuration for zoom level boundary clamping.

## Remarks

Controls whether zoom operations should be constrained to camera's zoom boundaries.

When `clampZoom` is true, zoom handlers enforce [BoardCamera.zoomBoundaries](../interfaces/ObservableBoardCamera.md#zoomboundaries)
limits (min/max zoom levels). When false, zoom can exceed configured boundaries.

## Example

```typescript
const config: ZoomHandlerClampConfig = {
  clampZoom: true  // Enforce zoom boundaries
};

camera.zoomBoundaries = { min: 0.5, max: 4.0 };
// Zoom will be clamped to [0.5, 4.0] range
```

## Properties

### clampZoom

> **clampZoom**: `boolean`

Defined in: [packages/board/src/camera/camera-rig/zoom-handler.ts:47](https://github.com/ue-too/ue-too/blob/1055c6abca1ea3a0e952b0825f36e0ca2527df85/packages/board/src/camera/camera-rig/zoom-handler.ts#L47)

Whether to enforce zoom level boundaries.
