[@ue-too/board](../../modules.md) / [index](../index.md) / TouchInputEventOutputMapping

# 型エイリアス: TouchInputEventOutputMapping

> **TouchInputEventOutputMapping** = `object`

定義: [packages/board/src/input-interpretation/input-state-machine/touch-input-state-machine.ts:92](https://github.com/ue-too/ue-too/blob/79a36cf61d861e6b4e3302e81111636c6082a3db/packages/board/src/input-interpretation/input-state-machine/touch-input-state-machine.ts#L92)

Mapping of events to their output types.

## Remarks

Only touchmove produces outputs (pan or zoom gestures).
touchstart and touchend only manage state transitions.

## プロパティ

### touchmove

> **touchmove**: [`TouchOutputEvent`](TouchOutputEvent.md)

定義: [packages/board/src/input-interpretation/input-state-machine/touch-input-state-machine.ts:93](https://github.com/ue-too/ue-too/blob/79a36cf61d861e6b4e3302e81111636c6082a3db/packages/board/src/input-interpretation/input-state-machine/touch-input-state-machine.ts#L93)
