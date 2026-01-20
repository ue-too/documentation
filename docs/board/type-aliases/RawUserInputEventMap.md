[@ue-too/board](../globals.md) / RawUserInputEventMap

# Type Alias: RawUserInputEventMap

> **RawUserInputEventMap** = `object`

Defined in: [packages/board/src/input-interpretation/raw-input-publisher/raw-input-publisher.ts:98](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/board/src/input-interpretation/raw-input-publisher/raw-input-publisher.ts#L98)

Mapping of event names to their payload types.

## Remarks

This type enables type-safe event subscription:
- Subscribe to specific events ("pan", "zoom", "rotate") to receive only those payloads
- Subscribe to "all" to receive all events with discriminated type property

## Properties

### all

> **all**: [`RawUserInputEvent`](RawUserInputEvent.md)

Defined in: [packages/board/src/input-interpretation/raw-input-publisher/raw-input-publisher.ts:102](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/board/src/input-interpretation/raw-input-publisher/raw-input-publisher.ts#L102)

***

### pan

> **pan**: [`RawUserPanInputEventPayload`](RawUserPanInputEventPayload.md)

Defined in: [packages/board/src/input-interpretation/raw-input-publisher/raw-input-publisher.ts:99](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/board/src/input-interpretation/raw-input-publisher/raw-input-publisher.ts#L99)

***

### rotate

> **rotate**: [`RawUserRotateInputEventPayload`](RawUserRotateInputEventPayload.md)

Defined in: [packages/board/src/input-interpretation/raw-input-publisher/raw-input-publisher.ts:101](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/board/src/input-interpretation/raw-input-publisher/raw-input-publisher.ts#L101)

***

### zoom

> **zoom**: [`RawUserZoomInputEventPayload`](RawUserZoomInputEventPayload.md)

Defined in: [packages/board/src/input-interpretation/raw-input-publisher/raw-input-publisher.ts:100](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/board/src/input-interpretation/raw-input-publisher/raw-input-publisher.ts#L100)
