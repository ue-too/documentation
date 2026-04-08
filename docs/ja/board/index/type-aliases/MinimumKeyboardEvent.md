[@ue-too/board](../../modules.md) / [index](../index.md) / MinimumKeyboardEvent

# 型エイリアス: MinimumKeyboardEvent

> **MinimumKeyboardEvent** = `object`

定義: [packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts:89](https://github.com/ue-too/ue-too/blob/feb7c80222df5d3cd97bfa1933bafe3190c6e48d/packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts#L89)

Minimal keyboard event interface for framework interoperability.

## Remarks

This subset of the DOM KeyboardEvent interface allows the parser to work with
both vanilla JavaScript KeyboardEvents and framework-wrapped events.

## プロパティ

### key

> **key**: `string`

定義: [packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts:93](https://github.com/ue-too/ue-too/blob/feb7c80222df5d3cd97bfa1933bafe3190c6e48d/packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts#L93)

The key that was pressed

***

### preventDefault()

> **preventDefault**: () => `void`

定義: [packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts:91](https://github.com/ue-too/ue-too/blob/feb7c80222df5d3cd97bfa1933bafe3190c6e48d/packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts#L91)

Prevents default keyboard behavior

#### 戻り値

`void`
