[@ue-too/board](../../modules.md) / [index](../index.md) / MinimumPointerEvent

# 型エイリアス: MinimumPointerEvent

> **MinimumPointerEvent** = `object`

定義: [packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts:43](https://github.com/ue-too/ue-too/blob/9b787448328cf446379b1ea4cc5f4c79149cbec8/packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts#L43)

Minimal pointer event interface for framework interoperability.

## Remarks

This subset of the DOM PointerEvent interface allows the parser to work with
both vanilla JavaScript PointerEvents and framework-wrapped events (e.g., PixiJS).

## プロパティ

### button

> **button**: `number`

定義: [packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts:45](https://github.com/ue-too/ue-too/blob/9b787448328cf446379b1ea4cc5f4c79149cbec8/packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts#L45)

Mouse button number (0=left, 1=middle, 2=right)

***

### buttons

> **buttons**: `number`

定義: [packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts:53](https://github.com/ue-too/ue-too/blob/9b787448328cf446379b1ea4cc5f4c79149cbec8/packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts#L53)

Bitmask of currently pressed buttons

***

### clientX

> **clientX**: `number`

定義: [packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts:49](https://github.com/ue-too/ue-too/blob/9b787448328cf446379b1ea4cc5f4c79149cbec8/packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts#L49)

X coordinate in window space

***

### clientY

> **clientY**: `number`

定義: [packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts:51](https://github.com/ue-too/ue-too/blob/9b787448328cf446379b1ea4cc5f4c79149cbec8/packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts#L51)

Y coordinate in window space

***

### pointerType

> **pointerType**: `string`

定義: [packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts:47](https://github.com/ue-too/ue-too/blob/9b787448328cf446379b1ea4cc5f4c79149cbec8/packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts#L47)

Pointer type ("mouse", "pen", "touch")
