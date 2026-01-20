[@ue-too/board](../globals.md) / RawUserInputEvent

# Type Alias: RawUserInputEvent

> **RawUserInputEvent** = [`RawUserPanInputEvent`](RawUserPanInputEvent.md) \| [`RawUserZoomInputEvent`](RawUserZoomInputEvent.md) \| [`RawUserRotateInputEvent`](RawUserRotateInputEvent.md)

Defined in: [packages/board/src/input-interpretation/raw-input-publisher/raw-input-publisher.ts:113](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/board/src/input-interpretation/raw-input-publisher/raw-input-publisher.ts#L113)

Union type of all raw user input events.

## Remarks

Use the `type` discriminator property to determine which event variant you have.
