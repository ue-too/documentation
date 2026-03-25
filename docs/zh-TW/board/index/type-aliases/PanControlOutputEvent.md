[@ue-too/board](../../modules.md) / [index](../index.md) / PanControlOutputEvent

# 型別別名: PanControlOutputEvent

> **PanControlOutputEvent** = \{ `delta`: `Point`; `type`: `"panByViewPort"`; \} \| \{ `target`: `Point`; `type`: `"panToWorld"`; \} \| \{ `type`: `"none"`; \}

定義於: [packages/board/src/camera/camera-mux/animation-and-lock/pan-control-state-machine.ts:76](https://github.com/ue-too/ue-too/blob/9b787448328cf446379b1ea4cc5f4c79149cbec8/packages/board/src/camera/camera-mux/animation-and-lock/pan-control-state-machine.ts#L76)

Discriminated union of output events from pan control state machine.

## 備註

Output events instruct the camera system what pan operation to perform:
- `panByViewPort`: Relative pan in viewport coordinates
- `panToWorld`: Absolute pan to world position
- `none`: No operation (input blocked)
