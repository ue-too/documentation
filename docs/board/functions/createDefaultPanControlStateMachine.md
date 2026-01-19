[@ue-too/board](../globals.md) / createDefaultPanControlStateMachine

# Function: createDefaultPanControlStateMachine()

> **createDefaultPanControlStateMachine**(`context`): [`PanControlStateMachine`](../classes/PanControlStateMachine.md)

Defined in: [packages/board/src/camera/camera-mux/animation-and-lock/pan-control-state-machine.ts:314](https://github.com/ue-too/ue-too/blob/1055c6abca1ea3a0e952b0825f36e0ca2527df85/packages/board/src/camera/camera-mux/animation-and-lock/pan-control-state-machine.ts#L314)

Creates a pan control state machine with default configuration.

## Parameters

### context

`BaseContext` = `...`

Camera rig or context for pan operations

## Returns

[`PanControlStateMachine`](../classes/PanControlStateMachine.md)

Configured pan control state machine starting in `ACCEPTING_USER_INPUT` state

## Remarks

Factory function for creating a pan state machine with sensible defaults.
The machine starts in `ACCEPTING_USER_INPUT` state, ready to accept user pan gestures.

## Example

```typescript
const cameraRig = createDefaultCameraRig(camera);
const panSM = createDefaultPanControlStateMachine(cameraRig);
```
