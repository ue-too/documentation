[@ue-too/board](../../modules.md) / [index](../index.md) / RawUserPanInputEvent

# Type Alias: RawUserPanInputEvent

> **RawUserPanInputEvent** = `object` & [`RawUserPanInputEventPayload`](RawUserPanInputEventPayload.md)

Defined in: [packages/board/src/input-interpretation/raw-input-publisher/raw-input-publisher.ts:35](https://github.com/ue-too/ue-too/blob/feb7c80222df5d3cd97bfa1933bafe3190c6e48d/packages/board/src/input-interpretation/raw-input-publisher/raw-input-publisher.ts#L35)

Pan input event with discriminated type.

## Type Declaration

### type

> **type**: `"pan"`

## Remarks

The `type` property allows TypeScript discriminated unions to distinguish
between different event types when subscribing to the "all" event stream.
