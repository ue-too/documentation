[@ue-too/board](../globals.md) / MinimumPointerEvent

# Type Alias: MinimumPointerEvent

> **MinimumPointerEvent** = `object`

Defined in: [packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts:39](https://github.com/ue-too/ue-too/blob/aabc0f56e9e83141d0fd935ef6ac3e5fe0af0a61/packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts#L39)

Minimal pointer event interface for framework interoperability.

## Remarks

This subset of the DOM PointerEvent interface allows the parser to work with
both vanilla JavaScript PointerEvents and framework-wrapped events (e.g., PixiJS).

## Properties

### button

> **button**: `number`

Defined in: [packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts:41](https://github.com/ue-too/ue-too/blob/aabc0f56e9e83141d0fd935ef6ac3e5fe0af0a61/packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts#L41)

Mouse button number (0=left, 1=middle, 2=right)

***

### buttons

> **buttons**: `number`

Defined in: [packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts:49](https://github.com/ue-too/ue-too/blob/aabc0f56e9e83141d0fd935ef6ac3e5fe0af0a61/packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts#L49)

Bitmask of currently pressed buttons

***

### clientX

> **clientX**: `number`

Defined in: [packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts:45](https://github.com/ue-too/ue-too/blob/aabc0f56e9e83141d0fd935ef6ac3e5fe0af0a61/packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts#L45)

X coordinate in window space

***

### clientY

> **clientY**: `number`

Defined in: [packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts:47](https://github.com/ue-too/ue-too/blob/aabc0f56e9e83141d0fd935ef6ac3e5fe0af0a61/packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts#L47)

Y coordinate in window space

***

### pointerType

> **pointerType**: `string`

Defined in: [packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts:43](https://github.com/ue-too/ue-too/blob/aabc0f56e9e83141d0fd935ef6ac3e5fe0af0a61/packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts#L43)

Pointer type ("mouse", "pen", "touch")
