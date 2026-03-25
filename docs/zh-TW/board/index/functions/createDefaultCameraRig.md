[@ue-too/board](../../modules.md) / [index](../index.md) / createDefaultCameraRig

# 函式: createDefaultCameraRig()

> **createDefaultCameraRig**(`camera`): [`CameraRig`](../interfaces/CameraRig.md)

定義於: [packages/board/src/camera/camera-rig/camera-rig.ts:940](https://github.com/ue-too/ue-too/blob/9b787448328cf446379b1ea4cc5f4c79149cbec8/packages/board/src/camera/camera-rig/camera-rig.ts#L940)

Creates a camera rig with sensible default configuration.

## 參數

### camera

[`ObservableBoardCamera`](../interfaces/ObservableBoardCamera.md)

Observable camera instance to control

## 回傳

[`CameraRig`](../interfaces/CameraRig.md)

Configured camera rig ready for use

## 備註

This factory function creates a [DefaultCameraRig](../classes/DefaultCameraRig.md) with a balanced default configuration:

**Enabled by default:**
- `limitEntireViewPort: true` - Entire viewport stays within boundaries
- `clampTranslation: true` - Position is clamped to boundaries
- `clampZoom: true` - Zoom is clamped to limits

**Disabled by default:**
- All movement restrictions (`restrictXTranslation`, `restrictYTranslation`, etc.)
- Zoom restrictions (`restrictZoom`)
- Relative translation restrictions

This configuration allows free camera movement with boundary enforcement,
suitable for most infinite canvas applications.

## 範例

```typescript
const camera = new DefaultBoardCamera(1920, 1080);
const rig = createDefaultCameraRig(camera);

// Ready to use with sensible defaults
rig.configure({
  boundaries: {
    min: { x: -1000, y: -1000 },
    max: { x: 1000, y: 1000 }
  }
});

rig.panByViewPort({ x: 100, y: 50 });
rig.zoomByAt(0.1, mousePosition);
```

## 參閱

 - [DefaultCameraRig](../classes/DefaultCameraRig.md) for the implementation
 - [CameraRigConfig](../type-aliases/CameraRigConfig.md) for all available configuration options
