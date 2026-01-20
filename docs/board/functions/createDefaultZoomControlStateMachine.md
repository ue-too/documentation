[@ue-too/board](../globals.md) / createDefaultZoomControlStateMachine

# Function: createDefaultZoomControlStateMachine()

> **createDefaultZoomControlStateMachine**(`context`): [`ZoomControlStateMachine`](../classes/ZoomControlStateMachine.md)

Defined in: [packages/board/src/camera/camera-mux/animation-and-lock/zoom-control-state-machine.ts:380](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/board/src/camera/camera-mux/animation-and-lock/zoom-control-state-machine.ts#L380)

Creates a zoom control state machine with default configuration.

## Parameters

### context

`BaseContext` = `...`

Camera rig or context for zoom operations

## Returns

[`ZoomControlStateMachine`](../classes/ZoomControlStateMachine.md)

Configured zoom control state machine starting in `ACCEPTING_USER_INPUT` state

## Remarks

Factory function for creating a zoom state machine with sensible defaults.
The machine starts in `ACCEPTING_USER_INPUT` state, ready to accept user zoom gestures.

## Example

```typescript
const cameraRig = createDefaultCameraRig(camera);
const zoomSM = createDefaultZoomControlStateMachine(cameraRig);
```
