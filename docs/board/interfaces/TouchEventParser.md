[@ue-too/board](../globals.md) / TouchEventParser

# Interface: TouchEventParser

Defined in: [packages/board/src/input-interpretation/raw-input-parser/vanilla-touch-event-parser.ts:15](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/board/src/input-interpretation/raw-input-parser/vanilla-touch-event-parser.ts#L15)

Interface for touch event parsers.

## Remarks

Touch event parsers bridge DOM TouchEvents and the touch state machine.
They provide granular control over which gesture types are enabled.

## Properties

### disabled

> **disabled**: `boolean`

Defined in: [packages/board/src/input-interpretation/raw-input-parser/vanilla-touch-event-parser.ts:17](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/board/src/input-interpretation/raw-input-parser/vanilla-touch-event-parser.ts#L17)

Whether all touch input is disabled

## Methods

### attach()

> **attach**(`canvas`): `void`

Defined in: [packages/board/src/input-interpretation/raw-input-parser/vanilla-touch-event-parser.ts:23](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/board/src/input-interpretation/raw-input-parser/vanilla-touch-event-parser.ts#L23)

Attaches to a new canvas element

#### Parameters

##### canvas

`HTMLCanvasElement`

#### Returns

`void`

***

### disable()

> **disable**(): `void`

Defined in: [packages/board/src/input-interpretation/raw-input-parser/vanilla-touch-event-parser.ts:25](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/board/src/input-interpretation/raw-input-parser/vanilla-touch-event-parser.ts#L25)

Disables the parser; the event listeners are still attached just not processing any events

#### Returns

`void`

***

### enable()

> **enable**(): `void`

Defined in: [packages/board/src/input-interpretation/raw-input-parser/vanilla-touch-event-parser.ts:27](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/board/src/input-interpretation/raw-input-parser/vanilla-touch-event-parser.ts#L27)

Enables the parser

#### Returns

`void`

***

### setUp()

> **setUp**(): `void`

Defined in: [packages/board/src/input-interpretation/raw-input-parser/vanilla-touch-event-parser.ts:19](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/board/src/input-interpretation/raw-input-parser/vanilla-touch-event-parser.ts#L19)

Initializes event listeners

#### Returns

`void`

***

### tearDown()

> **tearDown**(): `void`

Defined in: [packages/board/src/input-interpretation/raw-input-parser/vanilla-touch-event-parser.ts:21](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/board/src/input-interpretation/raw-input-parser/vanilla-touch-event-parser.ts#L21)

Removes event listeners and cleans up

#### Returns

`void`
