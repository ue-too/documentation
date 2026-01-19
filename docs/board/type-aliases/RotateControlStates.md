[@ue-too/board](../globals.md) / RotateControlStates

# Type Alias: RotateControlStates

> **RotateControlStates** = `"ACCEPTING_USER_INPUT"` \| `"TRANSITION"` \| `"LOCKED_ON_OBJECT"`

Defined in: [packages/board/src/camera/camera-mux/animation-and-lock/rotation-control-state-machine.ts:15](https://github.com/ue-too/ue-too/blob/1055c6abca1ea3a0e952b0825f36e0ca2527df85/packages/board/src/camera/camera-mux/animation-and-lock/rotation-control-state-machine.ts#L15)

State identifiers for the rotation control state machine.

## Remarks

Three states manage rotation input and animations:
- `ACCEPTING_USER_INPUT`: Normal state, accepts user rotation input
- `TRANSITION`: Animation/transition state, may block user input
- `LOCKED_ON_OBJECT`: Camera locked to follow a specific object rotation
