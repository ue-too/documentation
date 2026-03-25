[@ue-too/board](../../modules.md) / [index](../index.md) / TouchInputEventOutputMapping

# Type Alias: TouchInputEventOutputMapping

> **TouchInputEventOutputMapping** = `object`

Defined in: [packages/board/src/input-interpretation/input-state-machine/touch-input-state-machine.ts:92](https://github.com/ue-too/ue-too/blob/9b787448328cf446379b1ea4cc5f4c79149cbec8/packages/board/src/input-interpretation/input-state-machine/touch-input-state-machine.ts#L92)

Mapping of events to their output types.

## Remarks

Only touchmove produces outputs (pan or zoom gestures).
touchstart and touchend only manage state transitions.

## Properties

### touchmove

> **touchmove**: [`TouchOutputEvent`](TouchOutputEvent.md)

Defined in: [packages/board/src/input-interpretation/input-state-machine/touch-input-state-machine.ts:93](https://github.com/ue-too/ue-too/blob/9b787448328cf446379b1ea4cc5f4c79149cbec8/packages/board/src/input-interpretation/input-state-machine/touch-input-state-machine.ts#L93)
