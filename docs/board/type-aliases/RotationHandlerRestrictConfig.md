[@ue-too/board](../globals.md) / RotationHandlerRestrictConfig

# Type Alias: RotationHandlerRestrictConfig

> **RotationHandlerRestrictConfig** = `object`

Defined in: [packages/board/src/camera/camera-rig/rotation-handler.ts:48](https://github.com/ue-too/ue-too/blob/1055c6abca1ea3a0e952b0825f36e0ca2527df85/packages/board/src/camera/camera-rig/rotation-handler.ts#L48)

Configuration for completely disabling rotation operations.

## Remarks

Provides a global "rotation lock" to prevent any rotation changes.

When `restrictRotation` is true:
- Rotate-to operations return current rotation (no change)
- Rotate-by operations return zero delta (no change)

This is useful for:
- Locking rotation during specific application states
- Fixed-orientation viewing modes (north-up maps, etc.)
- Preventing user rotation in certain contexts

## Example

```typescript
const config: RotationHandlerRestrictConfig = {
  restrictRotation: true  // Lock rotation
};

// Any rotation attempt will be ignored
```

## Properties

### restrictRotation

> **restrictRotation**: `boolean`

Defined in: [packages/board/src/camera/camera-rig/rotation-handler.ts:52](https://github.com/ue-too/ue-too/blob/1055c6abca1ea3a0e952b0825f36e0ca2527df85/packages/board/src/camera/camera-rig/rotation-handler.ts#L52)

Whether to completely prevent rotation operations.
