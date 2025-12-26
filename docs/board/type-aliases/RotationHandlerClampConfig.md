[@ue-too/board](../globals.md) / RotationHandlerClampConfig

# Type Alias: RotationHandlerClampConfig

> **RotationHandlerClampConfig** = `object`

Defined in: [packages/board/src/camera/camera-rig/rotation-handler.ts:82](https://github.com/ue-too/ue-too/blob/aabc0f56e9e83141d0fd935ef6ac3e5fe0af0a61/packages/board/src/camera/camera-rig/rotation-handler.ts#L82)

Configuration for rotation angle boundary clamping.

## Remarks

Controls whether rotation operations should be constrained to camera's rotation boundaries.

When `clampRotation` is true, rotation handlers enforce [BoardCamera.rotationBoundaries](../interfaces/ObservableBoardCamera.md#rotationboundaries)
limits (min/max angles in radians). When false, rotation can exceed configured boundaries.

Rotation boundaries allow limiting camera rotation to a specific angular range,
useful for scenarios like:
- Restricting rotation to ±45 degrees from north
- Allowing only certain cardinal directions
- Preventing full 360-degree rotation

## Example

```typescript
const config: RotationHandlerClampConfig = {
  clampRotation: true  // Enforce rotation boundaries
};

camera.rotationBoundaries = { min: 0, max: Math.PI / 2 };
// Rotation clamped to [0, 90 degrees] range
```

## Properties

### clampRotation

> **clampRotation**: `boolean`

Defined in: [packages/board/src/camera/camera-rig/rotation-handler.ts:86](https://github.com/ue-too/ue-too/blob/aabc0f56e9e83141d0fd935ef6ac3e5fe0af0a61/packages/board/src/camera/camera-rig/rotation-handler.ts#L86)

Whether to enforce rotation angle boundaries.
