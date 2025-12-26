[@ue-too/board](../globals.md) / RawUserZoomInputEvent

# Type Alias: RawUserZoomInputEvent

> **RawUserZoomInputEvent** = `object` & [`RawUserZoomInputEventPayload`](RawUserZoomInputEventPayload.md)

Defined in: [packages/board/src/input-interpretation/raw-input-publisher/raw-input-publisher.ts:60](https://github.com/ue-too/ue-too/blob/e468a9961da59c81663192ec8df16ebc8e17abac/packages/board/src/input-interpretation/raw-input-publisher/raw-input-publisher.ts#L60)

Zoom input event with discriminated type.

## Type Declaration

### type

> **type**: `"zoom"`

## Remarks

The `type` property allows TypeScript discriminated unions to distinguish
between different event types when subscribing to the "all" event stream.
