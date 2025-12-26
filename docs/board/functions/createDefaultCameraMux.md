[@ue-too/board](../globals.md) / createDefaultCameraMux

# Function: createDefaultCameraMux()

> **createDefaultCameraMux**(): [`CameraMux`](../interfaces/CameraMux.md)

Defined in: [packages/board/src/camera/camera-mux/relay.ts:104](https://github.com/ue-too/ue-too/blob/aabc0f56e9e83141d0fd935ef6ac3e5fe0af0a61/packages/board/src/camera/camera-mux/relay.ts#L104)

Factory function to create a default camera input multiplexer.
Returns a [Relay](../classes/Relay.md) instance that allows all inputs to pass through.

## Returns

[`CameraMux`](../interfaces/CameraMux.md)

A new stateless relay multiplexer

## Remarks

This is a convenience function for creating the simplest possible camera mux.
The returned instance has no state and never blocks inputs.

## Example

```typescript
const cameraMux = createDefaultCameraMux();

// Use with camera rig or input handlers
const cameraRig = new CameraRig(camera, cameraMux);
```

## See

[Relay](../classes/Relay.md) for implementation details
