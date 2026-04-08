[@ue-too/board](../../modules.md) / [index](../index.md) / RawUserZoomInputEvent

# 型エイリアス: RawUserZoomInputEvent

> **RawUserZoomInputEvent** = `object` & [`RawUserZoomInputEventPayload`](RawUserZoomInputEventPayload.md)

定義: [packages/board/src/input-interpretation/raw-input-publisher/raw-input-publisher.ts:61](https://github.com/ue-too/ue-too/blob/79a36cf61d861e6b4e3302e81111636c6082a3db/packages/board/src/input-interpretation/raw-input-publisher/raw-input-publisher.ts#L61)

Zoom input event with discriminated type.

## 型宣言

### type

> **type**: `"zoom"`

## Remarks

The `type` property allows TypeScript discriminated unions to distinguish
between different event types when subscribing to the "all" event stream.
