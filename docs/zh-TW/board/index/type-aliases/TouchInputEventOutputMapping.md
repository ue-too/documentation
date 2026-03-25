[@ue-too/board](../../modules.md) / [index](../index.md) / TouchInputEventOutputMapping

# 型別別名: TouchInputEventOutputMapping

> **TouchInputEventOutputMapping** = `object`

定義於: [packages/board/src/input-interpretation/input-state-machine/touch-input-state-machine.ts:92](https://github.com/ue-too/ue-too/blob/9b787448328cf446379b1ea4cc5f4c79149cbec8/packages/board/src/input-interpretation/input-state-machine/touch-input-state-machine.ts#L92)

Mapping of events to their output types.

## 備註

Only touchmove produces outputs (pan or zoom gestures).
touchstart and touchend only manage state transitions.

## 屬性

### touchmove

> **touchmove**: [`TouchOutputEvent`](TouchOutputEvent.md)

定義於: [packages/board/src/input-interpretation/input-state-machine/touch-input-state-machine.ts:93](https://github.com/ue-too/ue-too/blob/9b787448328cf446379b1ea4cc5f4c79149cbec8/packages/board/src/input-interpretation/input-state-machine/touch-input-state-machine.ts#L93)
