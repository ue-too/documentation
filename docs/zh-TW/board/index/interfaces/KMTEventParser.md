[@ue-too/board](../../modules.md) / [index](../index.md) / KMTEventParser

# 介面: KMTEventParser

定義於: [packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts:19](https://github.com/ue-too/ue-too/blob/feb7c80222df5d3cd97bfa1933bafe3190c6e48d/packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts#L19)

Interface for KMT (Keyboard/Mouse/Trackpad) event parsers.

## 備註

Event parsers bridge the gap between DOM events and the state machine.
They listen for raw DOM events, convert them to state machine events,
and coordinate with the orchestrator for output processing.

## 屬性

### disabled

> **disabled**: `boolean`

定義於: [packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts:21](https://github.com/ue-too/ue-too/blob/feb7c80222df5d3cd97bfa1933bafe3190c6e48d/packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts#L21)

Whether the parser is currently disabled

## 方法

### attach()

> **attach**(`canvas`): `void`

定義於: [packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts:27](https://github.com/ue-too/ue-too/blob/feb7c80222df5d3cd97bfa1933bafe3190c6e48d/packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts#L27)

Attaches to a new canvas element

#### 參數

##### canvas

`HTMLCanvasElement`

#### 回傳

`void`

***

### disable()

> **disable**(): `void`

定義於: [packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts:29](https://github.com/ue-too/ue-too/blob/feb7c80222df5d3cd97bfa1933bafe3190c6e48d/packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts#L29)

Disables the parser; the event listeners are still attached just not processing any events

#### 回傳

`void`

***

### enable()

> **enable**(): `void`

定義於: [packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts:31](https://github.com/ue-too/ue-too/blob/feb7c80222df5d3cd97bfa1933bafe3190c6e48d/packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts#L31)

Enables the parser

#### 回傳

`void`

***

### setUp()

> **setUp**(): `void`

定義於: [packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts:23](https://github.com/ue-too/ue-too/blob/feb7c80222df5d3cd97bfa1933bafe3190c6e48d/packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts#L23)

Initializes event listeners

#### 回傳

`void`

***

### tearDown()

> **tearDown**(): `void`

定義於: [packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts:25](https://github.com/ue-too/ue-too/blob/feb7c80222df5d3cd97bfa1933bafe3190c6e48d/packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts#L25)

Removes event listeners and cleans up

#### 回傳

`void`
