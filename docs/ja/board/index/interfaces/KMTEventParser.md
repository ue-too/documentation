[@ue-too/board](../../modules.md) / [index](../index.md) / KMTEventParser

# インターフェイス: KMTEventParser

定義: [packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts:19](https://github.com/ue-too/ue-too/blob/68da915137a31a45d7ce8043b13275ff7283045d/packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts#L19)

Interface for KMT (Keyboard/Mouse/Trackpad) event parsers.

## Remarks

Event parsers bridge the gap between DOM events and the state machine.
They listen for raw DOM events, convert them to state machine events,
and coordinate with the orchestrator for output processing.

## プロパティ

### disabled

> **disabled**: `boolean`

定義: [packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts:21](https://github.com/ue-too/ue-too/blob/68da915137a31a45d7ce8043b13275ff7283045d/packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts#L21)

Whether the parser is currently disabled

## メソッド

### attach()

> **attach**(`canvas`): `void`

定義: [packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts:27](https://github.com/ue-too/ue-too/blob/68da915137a31a45d7ce8043b13275ff7283045d/packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts#L27)

Attaches to a new canvas element

#### パラメータ

##### canvas

`HTMLCanvasElement`

#### 戻り値

`void`

***

### disable()

> **disable**(): `void`

定義: [packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts:29](https://github.com/ue-too/ue-too/blob/68da915137a31a45d7ce8043b13275ff7283045d/packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts#L29)

Disables the parser; the event listeners are still attached just not processing any events

#### 戻り値

`void`

***

### enable()

> **enable**(): `void`

定義: [packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts:31](https://github.com/ue-too/ue-too/blob/68da915137a31a45d7ce8043b13275ff7283045d/packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts#L31)

Enables the parser

#### 戻り値

`void`

***

### setUp()

> **setUp**(): `void`

定義: [packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts:23](https://github.com/ue-too/ue-too/blob/68da915137a31a45d7ce8043b13275ff7283045d/packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts#L23)

Initializes event listeners

#### 戻り値

`void`

***

### tearDown()

> **tearDown**(): `void`

定義: [packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts:25](https://github.com/ue-too/ue-too/blob/68da915137a31a45d7ce8043b13275ff7283045d/packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts#L25)

Removes event listeners and cleans up

#### 戻り値

`void`
