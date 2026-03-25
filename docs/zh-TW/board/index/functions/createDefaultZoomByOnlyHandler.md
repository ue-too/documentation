[@ue-too/board](../../modules.md) / [index](../index.md) / createDefaultZoomByOnlyHandler

# 函式: createDefaultZoomByOnlyHandler()

> **createDefaultZoomByOnlyHandler**(): [`ZoomByHandlerFunction`](../type-aliases/ZoomByHandlerFunction.md)

定義於: [packages/board/src/camera/camera-rig/zoom-handler.ts:480](https://github.com/ue-too/ue-too/blob/9b787448328cf446379b1ea4cc5f4c79149cbec8/packages/board/src/camera/camera-rig/zoom-handler.ts#L480)

Creates a default "zoom by" handler pipeline for relative zoom operations.

## 回傳

[`ZoomByHandlerFunction`](../type-aliases/ZoomByHandlerFunction.md)

Zoom-by handler function with clamping and restriction

## 備註

The default handler pipeline applies transformations in this order:
1. **Clamping** ([clampZoomByHandler](clampZoomByHandler.md)): Adjusts delta to respect boundaries
2. **Restriction** ([restrictZoomByHandler](restrictZoomByHandler.md)): Returns zero delta if locked

This ensures that:
- Resulting zoom level stays within configured min/max boundaries
- Zoom can be completely disabled via `restrictZoom` flag
- Delta is adjusted to prevent boundary violations

The pipeline is specifically for zoom operations without pan compensation.
For zoom-at-point operations, use [DefaultCameraRig.zoomByAt](../classes/DefaultCameraRig.md#zoombyat) which combines
zoom and pan handlers.

## Examples

```typescript
const zoomBy = createDefaultZoomByOnlyHandler();

camera.zoomLevel = 3.5;
camera.zoomBoundaries = { max: 4.0 };

// Use in camera rig
const delta = 1.0;  // Would exceed max
const constrained = zoomBy(delta, camera, {
  clampZoom: true,
  restrictZoom: false
});
// constrained = 0.5 (adjusted to reach boundary exactly)
camera.setZoomLevel(camera.zoomLevel + constrained);
```

```typescript
// Create custom pipeline with dampening
const dampenedZoomBy = createHandlerChain<number, [BoardCamera, ZoomHandlerConfig]>(
  (delta) => delta * 0.7,   // 30% dampening
  clampZoomByHandler,       // From default
  restrictZoomByHandler     // From default
);
```

## 參閱

 - [createHandlerChain](createHandlerChain.md) for creating custom handler pipelines
 - [clampZoomByHandler](clampZoomByHandler.md) for the clamping step
 - [restrictZoomByHandler](restrictZoomByHandler.md) for the restriction step
