[@ue-too/board](../globals.md) / PanControlOutputEvent

# Type Alias: PanControlOutputEvent

> **PanControlOutputEvent** = \{ `delta`: `Point`; `type`: `"panByViewPort"`; \} \| \{ `target`: `Point`; `type`: `"panToWorld"`; \} \| \{ `type`: `"none"`; \}

Defined in: [packages/board/src/camera/camera-mux/animation-and-lock/pan-control-state-machine.ts:73](https://github.com/ue-too/ue-too/blob/1055c6abca1ea3a0e952b0825f36e0ca2527df85/packages/board/src/camera/camera-mux/animation-and-lock/pan-control-state-machine.ts#L73)

Discriminated union of output events from pan control state machine.

## Remarks

Output events instruct the camera system what pan operation to perform:
- `panByViewPort`: Relative pan in viewport coordinates
- `panToWorld`: Absolute pan to world position
- `none`: No operation (input blocked)
