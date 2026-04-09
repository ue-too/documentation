[@ue-too/board](../../modules.md) / [index](../index.md) / createDefaultPanControlStateMachine

# 関数: createDefaultPanControlStateMachine()

> **createDefaultPanControlStateMachine**(`context`): [`PanControlStateMachine`](../classes/PanControlStateMachine.md)

定義: [packages/board/src/camera/camera-mux/animation-and-lock/pan-control-state-machine.ts:436](https://github.com/ue-too/ue-too/blob/68da915137a31a45d7ce8043b13275ff7283045d/packages/board/src/camera/camera-mux/animation-and-lock/pan-control-state-machine.ts#L436)

Creates a pan control state machine with default configuration.

## パラメータ

### context

`BaseContext` = `...`

Camera rig or context for pan operations

## 戻り値

[`PanControlStateMachine`](../classes/PanControlStateMachine.md)

Configured pan control state machine starting in `ACCEPTING_USER_INPUT` state

## Remarks

Factory function for creating a pan state machine with sensible defaults.
The machine starts in `ACCEPTING_USER_INPUT` state, ready to accept user pan gestures.

## 例

```typescript
const cameraRig = createDefaultCameraRig(camera);
const panSM = createDefaultPanControlStateMachine(cameraRig);
```
