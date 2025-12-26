[@ue-too/board](../globals.md) / ZoomControlStates

# Type Alias: ZoomControlStates

> **ZoomControlStates** = `"ACCEPTING_USER_INPUT"` \| `"TRANSITION"` \| `"LOCKED_ON_OBJECT"`

Defined in: [packages/board/src/camera/camera-mux/animation-and-lock/zoom-control-state-machine.ts:16](https://github.com/ue-too/ue-too/blob/e468a9961da59c81663192ec8df16ebc8e17abac/packages/board/src/camera/camera-mux/animation-and-lock/zoom-control-state-machine.ts#L16)

State identifiers for the zoom control state machine.

## Remarks

Three states manage zoom input and animations:
- `ACCEPTING_USER_INPUT`: Normal state, accepts user zoom input
- `TRANSITION`: Animation/transition state, may block user input
- `LOCKED_ON_OBJECT`: Camera locked to follow a specific object with zoom
