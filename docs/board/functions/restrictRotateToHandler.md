[@ue-too/board](../globals.md) / restrictRotateToHandler

# Function: restrictRotateToHandler()

> **restrictRotateToHandler**(`targetRotation`, `camera`, `config`): `number`

Defined in: [packages/board/src/camera/camera-rig/rotation-handler.ts:342](https://github.com/ue-too/ue-too/blob/1055c6abca1ea3a0e952b0825f36e0ca2527df85/packages/board/src/camera/camera-rig/rotation-handler.ts#L342)

Handler pipeline step that prevents "rotate to" operations when rotation is locked.

## Parameters

### targetRotation

`number`

Target rotation angle in radians

### camera

[`BoardCamera`](../interfaces/BoardCamera.md)

Current camera instance

### config

[`RotationHandlerRestrictConfig`](../type-aliases/RotationHandlerRestrictConfig.md)

Restriction configuration

## Returns

`number`

Current rotation (if locked) or target (if unlocked)

## Remarks

This handler implements a global rotation lock for absolute rotation operations.

Behavior:
- If `restrictRotation` is true: Returns current rotation (prevents any change)
- If `restrictRotation` is false: Returns target unchanged

## Example

```typescript
camera.rotation = Math.PI / 2;  // Currently at 90 degrees

const config: RotationHandlerRestrictConfig = {
  restrictRotation: true  // Lock rotation
};

const target = Math.PI;  // Try to rotate to 180 degrees
const result = restrictRotateToHandler(target, camera, config);
// result = π/2 (rotation locked, returns current angle)
```

## See

[createDefaultRotateToHandler](createDefaultRotateToHandler.md) for default pipeline usage
