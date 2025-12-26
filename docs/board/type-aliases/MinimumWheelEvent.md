[@ue-too/board](../globals.md) / MinimumWheelEvent

# Type Alias: MinimumWheelEvent

> **MinimumWheelEvent** = `object`

Defined in: [packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts:61](https://github.com/ue-too/ue-too/blob/e468a9961da59c81663192ec8df16ebc8e17abac/packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts#L61)

Minimal wheel event interface for framework interoperability.

## Remarks

This subset of the DOM WheelEvent interface allows the parser to work with
both vanilla JavaScript WheelEvents and framework-wrapped events.

## Properties

### clientX

> **clientX**: `number`

Defined in: [packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts:71](https://github.com/ue-too/ue-too/blob/e468a9961da59c81663192ec8df16ebc8e17abac/packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts#L71)

X coordinate in window space

***

### clientY

> **clientY**: `number`

Defined in: [packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts:73](https://github.com/ue-too/ue-too/blob/e468a9961da59c81663192ec8df16ebc8e17abac/packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts#L73)

Y coordinate in window space

***

### ctrlKey

> **ctrlKey**: `boolean`

Defined in: [packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts:69](https://github.com/ue-too/ue-too/blob/e468a9961da59c81663192ec8df16ebc8e17abac/packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts#L69)

Whether Ctrl key is pressed (for zoom)

***

### deltaX

> **deltaX**: `number`

Defined in: [packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts:65](https://github.com/ue-too/ue-too/blob/e468a9961da59c81663192ec8df16ebc8e17abac/packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts#L65)

Horizontal scroll delta

***

### deltaY

> **deltaY**: `number`

Defined in: [packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts:67](https://github.com/ue-too/ue-too/blob/e468a9961da59c81663192ec8df16ebc8e17abac/packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts#L67)

Vertical scroll delta

***

### preventDefault()

> **preventDefault**: () => `void`

Defined in: [packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts:63](https://github.com/ue-too/ue-too/blob/e468a9961da59c81663192ec8df16ebc8e17abac/packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts#L63)

Prevents default scroll behavior

#### Returns

`void`
