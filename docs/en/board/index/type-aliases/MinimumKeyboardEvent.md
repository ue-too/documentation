[@ue-too/board](../../modules.md) / [index](../index.md) / MinimumKeyboardEvent

# Type Alias: MinimumKeyboardEvent

> **MinimumKeyboardEvent** = `object`

Defined in: [packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts:89](https://github.com/ue-too/ue-too/blob/68da915137a31a45d7ce8043b13275ff7283045d/packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts#L89)

Minimal keyboard event interface for framework interoperability.

## Remarks

This subset of the DOM KeyboardEvent interface allows the parser to work with
both vanilla JavaScript KeyboardEvents and framework-wrapped events.

## Properties

### key

> **key**: `string`

Defined in: [packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts:93](https://github.com/ue-too/ue-too/blob/68da915137a31a45d7ce8043b13275ff7283045d/packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts#L93)

The key that was pressed

***

### preventDefault()

> **preventDefault**: () => `void`

Defined in: [packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts:91](https://github.com/ue-too/ue-too/blob/68da915137a31a45d7ce8043b13275ff7283045d/packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts#L91)

Prevents default keyboard behavior

#### Returns

`void`
