[@ue-too/board](../../modules.md) / [index](../index.md) / RotateControlOutputEvent

# 型エイリアス: RotateControlOutputEvent

> **RotateControlOutputEvent** = \{ `delta`: `number`; `type`: `"rotateBy"`; \} \| \{ `target`: `number`; `type`: `"rotateTo"`; \} \| \{ `type`: `"none"`; \}

定義: [packages/board/src/camera/camera-mux/animation-and-lock/rotation-control-state-machine.ts:75](https://github.com/ue-too/ue-too/blob/9b787448328cf446379b1ea4cc5f4c79149cbec8/packages/board/src/camera/camera-mux/animation-and-lock/rotation-control-state-machine.ts#L75)

Discriminated union of output events from rotation control state machine.

## Remarks

Output events instruct the camera system what rotation operation to perform:
- `rotateBy`: Relative rotation by delta angle
- `rotateTo`: Absolute rotation to target angle
- `none`: No operation (input blocked)
