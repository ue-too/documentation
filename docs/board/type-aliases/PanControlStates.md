[@ue-too/board](../globals.md) / PanControlStates

# Type Alias: PanControlStates

> **PanControlStates** = `"ACCEPTING_USER_INPUT"` \| `"TRANSITION"` \| `"LOCKED_ON_OBJECT"`

Defined in: [packages/board/src/camera/camera-mux/animation-and-lock/pan-control-state-machine.ts:16](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/board/src/camera/camera-mux/animation-and-lock/pan-control-state-machine.ts#L16)

State identifiers for the pan control state machine.

## Remarks

Three states manage pan input and animations:
- `ACCEPTING_USER_INPUT`: Normal state, accepts user pan input
- `TRANSITION`: Animation/transition state, may block user input
- `LOCKED_ON_OBJECT`: Camera locked to follow a specific object/position
