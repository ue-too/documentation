[@ue-too/board](../globals.md) / EventTargetWithPointerEvents

# Type Alias: EventTargetWithPointerEvents

> **EventTargetWithPointerEvents** = `object`

Defined in: [packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts:101](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts#L101)

Minimal event target interface for framework interoperability.

## Remarks

This interface allows the parser to attach event listeners to different
types of event targets (HTMLElement, Canvas, PixiJS Container, etc.).

## Properties

### addEventListener()

> **addEventListener**: (`type`, `listener`, `options?`) => `void`

Defined in: [packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts:102](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts#L102)

#### Parameters

##### type

`string`

##### listener

(`event`) => `void`

##### options?

###### passive

`boolean`

#### Returns

`void`

***

### removeEventListener()

> **removeEventListener**: (`type`, `listener`) => `void`

Defined in: [packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts:103](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts#L103)

#### Parameters

##### type

`string`

##### listener

(`event`) => `void`

#### Returns

`void`
