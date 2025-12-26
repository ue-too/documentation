[@ue-too/board](../globals.md) / KMTEventParser

# Interface: KMTEventParser

Defined in: [packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts:15](https://github.com/ue-too/ue-too/blob/aabc0f56e9e83141d0fd935ef6ac3e5fe0af0a61/packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts#L15)

Interface for KMT (Keyboard/Mouse/Trackpad) event parsers.

## Remarks

Event parsers bridge the gap between DOM events and the state machine.
They listen for raw DOM events, convert them to state machine events,
and coordinate with the orchestrator for output processing.

## Properties

### disabled

> **disabled**: `boolean`

Defined in: [packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts:17](https://github.com/ue-too/ue-too/blob/aabc0f56e9e83141d0fd935ef6ac3e5fe0af0a61/packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts#L17)

Whether the parser is currently disabled

***

### orchestrator

> **orchestrator**: [`InputOrchestrator`](../classes/InputOrchestrator.md)

Defined in: [packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts:27](https://github.com/ue-too/ue-too/blob/aabc0f56e9e83141d0fd935ef6ac3e5fe0af0a61/packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts#L27)

The orchestrator that handles state machine outputs

***

### stateMachine

> **stateMachine**: [`KmtInputStateMachine`](../type-aliases/KmtInputStateMachine.md)

Defined in: [packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts:25](https://github.com/ue-too/ue-too/blob/aabc0f56e9e83141d0fd935ef6ac3e5fe0af0a61/packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts#L25)

The state machine that processes parsed events

## Methods

### attach()

> **attach**(`canvas`): `void`

Defined in: [packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts:23](https://github.com/ue-too/ue-too/blob/aabc0f56e9e83141d0fd935ef6ac3e5fe0af0a61/packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts#L23)

Attaches to a new canvas element

#### Parameters

##### canvas

`HTMLCanvasElement`

#### Returns

`void`

***

### setUp()

> **setUp**(): `void`

Defined in: [packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts:19](https://github.com/ue-too/ue-too/blob/aabc0f56e9e83141d0fd935ef6ac3e5fe0af0a61/packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts#L19)

Initializes event listeners

#### Returns

`void`

***

### tearDown()

> **tearDown**(): `void`

Defined in: [packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts:21](https://github.com/ue-too/ue-too/blob/aabc0f56e9e83141d0fd935ef6ac3e5fe0af0a61/packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts#L21)

Removes event listeners and cleans up

#### Returns

`void`
