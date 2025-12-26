[@ue-too/board](../globals.md) / TouchEventParser

# Interface: TouchEventParser

Defined in: [packages/board/src/input-interpretation/raw-input-parser/vanilla-touch-event-parser.ts:15](https://github.com/ue-too/ue-too/blob/aabc0f56e9e83141d0fd935ef6ac3e5fe0af0a61/packages/board/src/input-interpretation/raw-input-parser/vanilla-touch-event-parser.ts#L15)

Interface for touch event parsers.

## Remarks

Touch event parsers bridge DOM TouchEvents and the touch state machine.
They provide granular control over which gesture types are enabled.

## Properties

### disabled

> **disabled**: `boolean`

Defined in: [packages/board/src/input-interpretation/raw-input-parser/vanilla-touch-event-parser.ts:17](https://github.com/ue-too/ue-too/blob/aabc0f56e9e83141d0fd935ef6ac3e5fe0af0a61/packages/board/src/input-interpretation/raw-input-parser/vanilla-touch-event-parser.ts#L17)

Whether all touch input is disabled

***

### orchestrator

> **orchestrator**: [`InputOrchestrator`](../classes/InputOrchestrator.md)

Defined in: [packages/board/src/input-interpretation/raw-input-parser/vanilla-touch-event-parser.ts:33](https://github.com/ue-too/ue-too/blob/aabc0f56e9e83141d0fd935ef6ac3e5fe0af0a61/packages/board/src/input-interpretation/raw-input-parser/vanilla-touch-event-parser.ts#L33)

The orchestrator that handles state machine outputs

***

### panDisabled

> **panDisabled**: `boolean`

Defined in: [packages/board/src/input-interpretation/raw-input-parser/vanilla-touch-event-parser.ts:19](https://github.com/ue-too/ue-too/blob/aabc0f56e9e83141d0fd935ef6ac3e5fe0af0a61/packages/board/src/input-interpretation/raw-input-parser/vanilla-touch-event-parser.ts#L19)

Whether pan gestures are disabled

***

### rotateDisabled

> **rotateDisabled**: `boolean`

Defined in: [packages/board/src/input-interpretation/raw-input-parser/vanilla-touch-event-parser.ts:23](https://github.com/ue-too/ue-too/blob/aabc0f56e9e83141d0fd935ef6ac3e5fe0af0a61/packages/board/src/input-interpretation/raw-input-parser/vanilla-touch-event-parser.ts#L23)

Whether rotation gestures are disabled (currently unused)

***

### stateMachine

> **stateMachine**: [`TouchInputStateMachine`](../type-aliases/TouchInputStateMachine.md)

Defined in: [packages/board/src/input-interpretation/raw-input-parser/vanilla-touch-event-parser.ts:31](https://github.com/ue-too/ue-too/blob/aabc0f56e9e83141d0fd935ef6ac3e5fe0af0a61/packages/board/src/input-interpretation/raw-input-parser/vanilla-touch-event-parser.ts#L31)

The state machine that processes parsed events

***

### zoomDisabled

> **zoomDisabled**: `boolean`

Defined in: [packages/board/src/input-interpretation/raw-input-parser/vanilla-touch-event-parser.ts:21](https://github.com/ue-too/ue-too/blob/aabc0f56e9e83141d0fd935ef6ac3e5fe0af0a61/packages/board/src/input-interpretation/raw-input-parser/vanilla-touch-event-parser.ts#L21)

Whether zoom gestures are disabled

## Methods

### attach()

> **attach**(`canvas`): `void`

Defined in: [packages/board/src/input-interpretation/raw-input-parser/vanilla-touch-event-parser.ts:29](https://github.com/ue-too/ue-too/blob/aabc0f56e9e83141d0fd935ef6ac3e5fe0af0a61/packages/board/src/input-interpretation/raw-input-parser/vanilla-touch-event-parser.ts#L29)

Attaches to a new canvas element

#### Parameters

##### canvas

`HTMLCanvasElement`

#### Returns

`void`

***

### setUp()

> **setUp**(): `void`

Defined in: [packages/board/src/input-interpretation/raw-input-parser/vanilla-touch-event-parser.ts:25](https://github.com/ue-too/ue-too/blob/aabc0f56e9e83141d0fd935ef6ac3e5fe0af0a61/packages/board/src/input-interpretation/raw-input-parser/vanilla-touch-event-parser.ts#L25)

Initializes event listeners

#### Returns

`void`

***

### tearDown()

> **tearDown**(): `void`

Defined in: [packages/board/src/input-interpretation/raw-input-parser/vanilla-touch-event-parser.ts:27](https://github.com/ue-too/ue-too/blob/aabc0f56e9e83141d0fd935ef6ac3e5fe0af0a61/packages/board/src/input-interpretation/raw-input-parser/vanilla-touch-event-parser.ts#L27)

Removes event listeners and cleans up

#### Returns

`void`
