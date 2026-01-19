[@ue-too/board](../globals.md) / KmtInputEventOutputMapping

# Type Alias: KmtInputEventOutputMapping

> **KmtInputEventOutputMapping** = `object`

Defined in: [packages/board/src/input-interpretation/input-state-machine/kmt-input-state-machine.ts:162](https://github.com/ue-too/ue-too/blob/1055c6abca1ea3a0e952b0825f36e0ca2527df85/packages/board/src/input-interpretation/input-state-machine/kmt-input-state-machine.ts#L162)

Mapping of events to their output types.

## Remarks

Defines which events produce outputs. Not all events produce outputs - some only
cause state transitions. This mapping is used by the state machine framework for
type-safe output handling.

## Properties

### leftPointerMove

> **leftPointerMove**: [`KmtOutputEvent`](KmtOutputEvent.md)

Defined in: [packages/board/src/input-interpretation/input-state-machine/kmt-input-state-machine.ts:167](https://github.com/ue-too/ue-too/blob/1055c6abca1ea3a0e952b0825f36e0ca2527df85/packages/board/src/input-interpretation/input-state-machine/kmt-input-state-machine.ts#L167)

***

### middlePointerMove

> **middlePointerMove**: [`KmtOutputEvent`](KmtOutputEvent.md)

Defined in: [packages/board/src/input-interpretation/input-state-machine/kmt-input-state-machine.ts:164](https://github.com/ue-too/ue-too/blob/1055c6abca1ea3a0e952b0825f36e0ca2527df85/packages/board/src/input-interpretation/input-state-machine/kmt-input-state-machine.ts#L164)

***

### scroll

> **scroll**: [`KmtOutputEvent`](KmtOutputEvent.md)

Defined in: [packages/board/src/input-interpretation/input-state-machine/kmt-input-state-machine.ts:165](https://github.com/ue-too/ue-too/blob/1055c6abca1ea3a0e952b0825f36e0ca2527df85/packages/board/src/input-interpretation/input-state-machine/kmt-input-state-machine.ts#L165)

***

### scrollWithCtrl

> **scrollWithCtrl**: [`KmtOutputEvent`](KmtOutputEvent.md)

Defined in: [packages/board/src/input-interpretation/input-state-machine/kmt-input-state-machine.ts:166](https://github.com/ue-too/ue-too/blob/1055c6abca1ea3a0e952b0825f36e0ca2527df85/packages/board/src/input-interpretation/input-state-machine/kmt-input-state-machine.ts#L166)

***

### spacebarDown

> **spacebarDown**: `number`

Defined in: [packages/board/src/input-interpretation/input-state-machine/kmt-input-state-machine.ts:163](https://github.com/ue-too/ue-too/blob/1055c6abca1ea3a0e952b0825f36e0ca2527df85/packages/board/src/input-interpretation/input-state-machine/kmt-input-state-machine.ts#L163)
