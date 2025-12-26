[@ue-too/board](../globals.md) / ZoomHandlerRestrictConfig

# Type Alias: ZoomHandlerRestrictConfig

> **ZoomHandlerRestrictConfig** = `object`

Defined in: [packages/board/src/camera/camera-rig/zoom-handler.ts:76](https://github.com/ue-too/ue-too/blob/aabc0f56e9e83141d0fd935ef6ac3e5fe0af0a61/packages/board/src/camera/camera-rig/zoom-handler.ts#L76)

Configuration for completely disabling zoom operations.

## Remarks

Provides a global "zoom lock" to prevent any zoom changes.

When `restrictZoom` is true:
- Zoom-to operations return current zoom level (no change)
- Zoom-by operations return zero delta (no change)

This is useful for:
- Locking zoom during specific application states
- Fixed-zoom viewing modes
- Preventing user zoom in certain contexts

## Example

```typescript
const config: ZoomHandlerRestrictConfig = {
  restrictZoom: true  // Disable all zoom operations
};

// Any zoom attempt will be ignored
```

## Properties

### restrictZoom

> **restrictZoom**: `boolean`

Defined in: [packages/board/src/camera/camera-rig/zoom-handler.ts:80](https://github.com/ue-too/ue-too/blob/aabc0f56e9e83141d0fd935ef6ac3e5fe0af0a61/packages/board/src/camera/camera-rig/zoom-handler.ts#L80)

Whether to completely prevent zoom operations.
