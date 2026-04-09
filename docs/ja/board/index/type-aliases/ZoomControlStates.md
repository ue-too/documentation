[@ue-too/board](../../modules.md) / [index](../index.md) / ZoomControlStates

# 型エイリアス: ZoomControlStates

> **ZoomControlStates** = `"ACCEPTING_USER_INPUT"` \| `"TRANSITION"` \| `"LOCKED_ON_OBJECT"`

定義: [packages/board/src/camera/camera-mux/animation-and-lock/zoom-control-state-machine.ts:16](https://github.com/ue-too/ue-too/blob/68da915137a31a45d7ce8043b13275ff7283045d/packages/board/src/camera/camera-mux/animation-and-lock/zoom-control-state-machine.ts#L16)

State identifiers for the zoom control state machine.

## Remarks

Three states manage zoom input and animations:
- `ACCEPTING_USER_INPUT`: Normal state, accepts user zoom input
- `TRANSITION`: Animation/transition state, may block user input
- `LOCKED_ON_OBJECT`: Camera locked to follow a specific object with zoom
