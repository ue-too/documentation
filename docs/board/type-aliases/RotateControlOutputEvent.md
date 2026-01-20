[@ue-too/board](../globals.md) / RotateControlOutputEvent

# Type Alias: RotateControlOutputEvent

> **RotateControlOutputEvent** = \{ `delta`: `number`; `type`: `"rotateBy"`; \} \| \{ `target`: `number`; `type`: `"rotateTo"`; \} \| \{ `type`: `"none"`; \}

Defined in: [packages/board/src/camera/camera-mux/animation-and-lock/rotation-control-state-machine.ts:72](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/board/src/camera/camera-mux/animation-and-lock/rotation-control-state-machine.ts#L72)

Discriminated union of output events from rotation control state machine.

## Remarks

Output events instruct the camera system what rotation operation to perform:
- `rotateBy`: Relative rotation by delta angle
- `rotateTo`: Absolute rotation to target angle
- `none`: No operation (input blocked)
