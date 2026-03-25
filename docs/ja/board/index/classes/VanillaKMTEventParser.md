[@ue-too/board](../../modules.md) / [index](../index.md) / VanillaKMTEventParser

# クラス: VanillaKMTEventParser

定義: [packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts:167](https://github.com/ue-too/ue-too/blob/9b787448328cf446379b1ea4cc5f4c79149cbec8/packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts#L167)

Interface for KMT (Keyboard/Mouse/Trackpad) event parsers.

## Remarks

Event parsers bridge the gap between DOM events and the state machine.
They listen for raw DOM events, convert them to state machine events,
and coordinate with the orchestrator for output processing.

## 実装

- [`KMTEventParser`](../interfaces/KMTEventParser.md)

## コンストラクター

### コンストラクター

> **new VanillaKMTEventParser**(`kmtInputStateMachine`, `orchestrator`, `canvas?`): `VanillaKMTEventParser`

定義: [packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts:175](https://github.com/ue-too/ue-too/blob/9b787448328cf446379b1ea4cc5f4c79149cbec8/packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts#L175)

#### パラメータ

##### kmtInputStateMachine

[`StateMachine`](../interfaces/StateMachine.md)

##### orchestrator

[`InputOrchestrator`](InputOrchestrator.md)

##### canvas?

`HTMLCanvasElement` | `SVGSVGElement`

#### 戻り値

`VanillaKMTEventParser`

## アクセッサー

### disabled

#### 署名を取得する

> **get** **disabled**(): `boolean`

定義: [packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts:188](https://github.com/ue-too/ue-too/blob/9b787448328cf446379b1ea4cc5f4c79149cbec8/packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts#L188)

Whether the parser is currently disabled

##### 戻り値

`boolean`

Whether the parser is currently disabled

#### の実装

[`KMTEventParser`](../interfaces/KMTEventParser.md).[`disabled`](../interfaces/KMTEventParser.md#disabled)

***

### stateMachine

#### 署名を設定する

> **set** **stateMachine**(`stateMachine`): `void`

定義: [packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts:389](https://github.com/ue-too/ue-too/blob/9b787448328cf446379b1ea4cc5f4c79149cbec8/packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts#L389)

##### パラメータ

###### stateMachine

[`StateMachine`](../interfaces/StateMachine.md)

##### 戻り値

`void`

## メソッド

### addEventListeners()

> **addEventListeners**(`signal`): `void`

定義: [packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts:200](https://github.com/ue-too/ue-too/blob/9b787448328cf446379b1ea4cc5f4c79149cbec8/packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts#L200)

#### パラメータ

##### signal

`AbortSignal`

#### 戻り値

`void`

***

### attach()

> **attach**(`canvas`): `void`

定義: [packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts:383](https://github.com/ue-too/ue-too/blob/9b787448328cf446379b1ea4cc5f4c79149cbec8/packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts#L383)

Attaches to a new canvas element

#### パラメータ

##### canvas

`HTMLCanvasElement`

#### 戻り値

`void`

#### の実装

[`KMTEventParser`](../interfaces/KMTEventParser.md).[`attach`](../interfaces/KMTEventParser.md#attach)

***

### bindFunctions()

> **bindFunctions**(): `void`

定義: [packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts:241](https://github.com/ue-too/ue-too/blob/9b787448328cf446379b1ea4cc5f4c79149cbec8/packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts#L241)

#### 戻り値

`void`

***

### disable()

> **disable**(): `void`

定義: [packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts:192](https://github.com/ue-too/ue-too/blob/9b787448328cf446379b1ea4cc5f4c79149cbec8/packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts#L192)

Disables the parser; the event listeners are still attached just not processing any events

#### 戻り値

`void`

#### の実装

[`KMTEventParser`](../interfaces/KMTEventParser.md).[`disable`](../interfaces/KMTEventParser.md#disable)

***

### enable()

> **enable**(): `void`

定義: [packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts:196](https://github.com/ue-too/ue-too/blob/9b787448328cf446379b1ea4cc5f4c79149cbec8/packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts#L196)

Enables the parser

#### 戻り値

`void`

#### の実装

[`KMTEventParser`](../interfaces/KMTEventParser.md).[`enable`](../interfaces/KMTEventParser.md#enable)

***

### keypressHandler()

> **keypressHandler**(`e`): `void`

定義: [packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts:341](https://github.com/ue-too/ue-too/blob/9b787448328cf446379b1ea4cc5f4c79149cbec8/packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts#L341)

#### パラメータ

##### e

`KeyboardEvent`

#### 戻り値

`void`

***

### keyupHandler()

> **keyupHandler**(`e`): `void`

定義: [packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts:374](https://github.com/ue-too/ue-too/blob/9b787448328cf446379b1ea4cc5f4c79149cbec8/packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts#L374)

#### パラメータ

##### e

`KeyboardEvent`

#### 戻り値

`void`

***

### pointerDownHandler()

> **pointerDownHandler**(`e`): `void`

定義: [packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts:263](https://github.com/ue-too/ue-too/blob/9b787448328cf446379b1ea4cc5f4c79149cbec8/packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts#L263)

#### パラメータ

##### e

`PointerEvent`

#### 戻り値

`void`

***

### pointerMoveHandler()

> **pointerMoveHandler**(`e`): `void`

定義: [packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts:300](https://github.com/ue-too/ue-too/blob/9b787448328cf446379b1ea4cc5f4c79149cbec8/packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts#L300)

#### パラメータ

##### e

`PointerEvent`

#### 戻り値

`void`

***

### pointerUpHandler()

> **pointerUpHandler**(`e`): `void`

定義: [packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts:283](https://github.com/ue-too/ue-too/blob/9b787448328cf446379b1ea4cc5f4c79149cbec8/packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts#L283)

#### パラメータ

##### e

`PointerEvent`

#### 戻り値

`void`

***

### scrollHandler()

> **scrollHandler**(`e`): `void`

定義: [packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts:321](https://github.com/ue-too/ue-too/blob/9b787448328cf446379b1ea4cc5f4c79149cbec8/packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts#L321)

#### パラメータ

##### e

`WheelEvent`

#### 戻り値

`void`

***

### setUp()

> **setUp**(): `void`

定義: [packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts:228](https://github.com/ue-too/ue-too/blob/9b787448328cf446379b1ea4cc5f4c79149cbec8/packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts#L228)

Initializes event listeners

#### 戻り値

`void`

#### の実装

[`KMTEventParser`](../interfaces/KMTEventParser.md).[`setUp`](../interfaces/KMTEventParser.md#setup)

***

### tearDown()

> **tearDown**(): `void`

定義: [packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts:235](https://github.com/ue-too/ue-too/blob/9b787448328cf446379b1ea4cc5f4c79149cbec8/packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts#L235)

Removes event listeners and cleans up

#### 戻り値

`void`

#### の実装

[`KMTEventParser`](../interfaces/KMTEventParser.md).[`tearDown`](../interfaces/KMTEventParser.md#teardown)
