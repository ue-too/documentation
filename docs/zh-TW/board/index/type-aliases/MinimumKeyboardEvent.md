[@ue-too/board](../../modules.md) / [index](../index.md) / MinimumKeyboardEvent

# 型別別名: MinimumKeyboardEvent

> **MinimumKeyboardEvent** = `object`

定義於: [packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts:89](https://github.com/ue-too/ue-too/blob/79a36cf61d861e6b4e3302e81111636c6082a3db/packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts#L89)

Minimal keyboard event interface for framework interoperability.

## 備註

This subset of the DOM KeyboardEvent interface allows the parser to work with
both vanilla JavaScript KeyboardEvents and framework-wrapped events.

## 屬性

### key

> **key**: `string`

定義於: [packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts:93](https://github.com/ue-too/ue-too/blob/79a36cf61d861e6b4e3302e81111636c6082a3db/packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts#L93)

The key that was pressed

***

### preventDefault()

> **preventDefault**: () => `void`

定義於: [packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts:91](https://github.com/ue-too/ue-too/blob/79a36cf61d861e6b4e3302e81111636c6082a3db/packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts#L91)

Prevents default keyboard behavior

#### 回傳

`void`
