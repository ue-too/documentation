[@ue-too/board](../../modules.md) / [index](../index.md) / VanillaTouchEventParser

# クラス: VanillaTouchEventParser

定義: [packages/board/src/input-interpretation/raw-input-parser/vanilla-touch-event-parser.ts:84](https://github.com/ue-too/ue-too/blob/68da915137a31a45d7ce8043b13275ff7283045d/packages/board/src/input-interpretation/raw-input-parser/vanilla-touch-event-parser.ts#L84)

DOM event parser for touch input.

## Remarks

This parser converts raw DOM TouchEvents into state machine events and coordinates
with the orchestrator to process outputs. It serves as the entry point for all touch
input in the input interpretation pipeline.

**Event Flow**:
```
DOM TouchEvents → Parser → State Machine → Parser → Orchestrator → Camera/Observers
```

**Responsibilities**:
1. Listen for DOM touch events (touchstart/move/end/cancel)
2. Extract touch point data (identifier, x, y)
3. Convert to state machine event format
4. Send events to the state machine
5. Forward state machine outputs to the orchestrator

**Touch Point Extraction**:
- touchstart/touchend: Uses `changedTouches` (only new/removed touches)
- touchmove: Uses `targetTouches` (all touches on the canvas)

**Gesture Control**:
Individual gesture types (pan, zoom, rotate) can be disabled independently,
though currently the state machine outputs are filtered by the orchestrator
rather than the parser.

The parser prevents default touch behavior to avoid browser scroll/zoom
interfering with canvas gestures.

## 例

```typescript
const canvasElement = document.getElementById("canvas");
const stateMachine = createTouchInputStateMachine(context);
const orchestrator = new InputOrchestrator(cameraMux, cameraRig, publisher);
const parser = new VanillaTouchEventParser(stateMachine, orchestrator, canvasElement);

parser.setUp(); // Starts listening for touch events

// Disable zoom gestures temporarily
parser.zoomDisabled = true;

// Cleanup when done
parser.tearDown();
```

## 実装

- [`TouchEventParser`](../interfaces/TouchEventParser.md)

## コンストラクター

### コンストラクター

> **new VanillaTouchEventParser**(`touchInputStateMachine`, `orchestrator`, `canvas?`): `VanillaTouchEventParser`

定義: [packages/board/src/input-interpretation/raw-input-parser/vanilla-touch-event-parser.ts:96](https://github.com/ue-too/ue-too/blob/68da915137a31a45d7ce8043b13275ff7283045d/packages/board/src/input-interpretation/raw-input-parser/vanilla-touch-event-parser.ts#L96)

#### パラメータ

##### touchInputStateMachine

[`TouchInputStateMachine`](../type-aliases/TouchInputStateMachine.md)

##### orchestrator

[`InputOrchestrator`](InputOrchestrator.md)

##### canvas?

`HTMLCanvasElement` | `SVGSVGElement`

#### 戻り値

`VanillaTouchEventParser`

## アクセッサー

### disabled

#### 署名を取得する

> **get** **disabled**(): `boolean`

定義: [packages/board/src/input-interpretation/raw-input-parser/vanilla-touch-event-parser.ts:164](https://github.com/ue-too/ue-too/blob/68da915137a31a45d7ce8043b13275ff7283045d/packages/board/src/input-interpretation/raw-input-parser/vanilla-touch-event-parser.ts#L164)

Whether all touch input is disabled

##### 戻り値

`boolean`

Whether all touch input is disabled

#### の実装

[`TouchEventParser`](../interfaces/TouchEventParser.md).[`disabled`](../interfaces/TouchEventParser.md#disabled)

***

### orchestrator

#### 署名を取得する

> **get** **orchestrator**(): [`InputOrchestrator`](InputOrchestrator.md)

定義: [packages/board/src/input-interpretation/raw-input-parser/vanilla-touch-event-parser.ts:110](https://github.com/ue-too/ue-too/blob/68da915137a31a45d7ce8043b13275ff7283045d/packages/board/src/input-interpretation/raw-input-parser/vanilla-touch-event-parser.ts#L110)

##### 戻り値

[`InputOrchestrator`](InputOrchestrator.md)

## メソッド

### attach()

> **attach**(`canvas`): `void`

定義: [packages/board/src/input-interpretation/raw-input-parser/vanilla-touch-event-parser.ts:252](https://github.com/ue-too/ue-too/blob/68da915137a31a45d7ce8043b13275ff7283045d/packages/board/src/input-interpretation/raw-input-parser/vanilla-touch-event-parser.ts#L252)

Attaches to a new canvas element

#### パラメータ

##### canvas

`HTMLCanvasElement`

#### 戻り値

`void`

#### の実装

[`TouchEventParser`](../interfaces/TouchEventParser.md).[`attach`](../interfaces/TouchEventParser.md#attach)

***

### bindListeners()

> **bindListeners**(): `void`

定義: [packages/board/src/input-interpretation/raw-input-parser/vanilla-touch-event-parser.ts:114](https://github.com/ue-too/ue-too/blob/68da915137a31a45d7ce8043b13275ff7283045d/packages/board/src/input-interpretation/raw-input-parser/vanilla-touch-event-parser.ts#L114)

#### 戻り値

`void`

***

### disable()

> **disable**(): `void`

定義: [packages/board/src/input-interpretation/raw-input-parser/vanilla-touch-event-parser.ts:168](https://github.com/ue-too/ue-too/blob/68da915137a31a45d7ce8043b13275ff7283045d/packages/board/src/input-interpretation/raw-input-parser/vanilla-touch-event-parser.ts#L168)

Disables the parser; the event listeners are still attached just not processing any events

#### 戻り値

`void`

#### の実装

[`TouchEventParser`](../interfaces/TouchEventParser.md).[`disable`](../interfaces/TouchEventParser.md#disable)

***

### disableStrategy()

> **disableStrategy**(): `void`

定義: [packages/board/src/input-interpretation/raw-input-parser/vanilla-touch-event-parser.ts:125](https://github.com/ue-too/ue-too/blob/68da915137a31a45d7ce8043b13275ff7283045d/packages/board/src/input-interpretation/raw-input-parser/vanilla-touch-event-parser.ts#L125)

#### 戻り値

`void`

***

### enable()

> **enable**(): `void`

定義: [packages/board/src/input-interpretation/raw-input-parser/vanilla-touch-event-parser.ts:172](https://github.com/ue-too/ue-too/blob/68da915137a31a45d7ce8043b13275ff7283045d/packages/board/src/input-interpretation/raw-input-parser/vanilla-touch-event-parser.ts#L172)

Enables the parser

#### 戻り値

`void`

#### の実装

[`TouchEventParser`](../interfaces/TouchEventParser.md).[`enable`](../interfaces/TouchEventParser.md#enable)

***

### enableStrategy()

> **enableStrategy**(): `void`

定義: [packages/board/src/input-interpretation/raw-input-parser/vanilla-touch-event-parser.ts:121](https://github.com/ue-too/ue-too/blob/68da915137a31a45d7ce8043b13275ff7283045d/packages/board/src/input-interpretation/raw-input-parser/vanilla-touch-event-parser.ts#L121)

#### 戻り値

`void`

***

### setUp()

> **setUp**(): `void`

定義: [packages/board/src/input-interpretation/raw-input-parser/vanilla-touch-event-parser.ts:129](https://github.com/ue-too/ue-too/blob/68da915137a31a45d7ce8043b13275ff7283045d/packages/board/src/input-interpretation/raw-input-parser/vanilla-touch-event-parser.ts#L129)

Initializes event listeners

#### 戻り値

`void`

#### の実装

[`TouchEventParser`](../interfaces/TouchEventParser.md).[`setUp`](../interfaces/TouchEventParser.md#setup)

***

### tearDown()

> **tearDown**(): `void`

定義: [packages/board/src/input-interpretation/raw-input-parser/vanilla-touch-event-parser.ts:158](https://github.com/ue-too/ue-too/blob/68da915137a31a45d7ce8043b13275ff7283045d/packages/board/src/input-interpretation/raw-input-parser/vanilla-touch-event-parser.ts#L158)

Removes event listeners and cleans up

#### 戻り値

`void`

#### の実装

[`TouchEventParser`](../interfaces/TouchEventParser.md).[`tearDown`](../interfaces/TouchEventParser.md#teardown)

***

### touchcancelHandler()

> **touchcancelHandler**(`e`): `void`

定義: [packages/board/src/input-interpretation/raw-input-parser/vanilla-touch-event-parser.ts:206](https://github.com/ue-too/ue-too/blob/68da915137a31a45d7ce8043b13275ff7283045d/packages/board/src/input-interpretation/raw-input-parser/vanilla-touch-event-parser.ts#L206)

#### パラメータ

##### e

`TouchEvent`

#### 戻り値

`void`

***

### touchendHandler()

> **touchendHandler**(`e`): `void`

定義: [packages/board/src/input-interpretation/raw-input-parser/vanilla-touch-event-parser.ts:221](https://github.com/ue-too/ue-too/blob/68da915137a31a45d7ce8043b13275ff7283045d/packages/board/src/input-interpretation/raw-input-parser/vanilla-touch-event-parser.ts#L221)

#### パラメータ

##### e

`TouchEvent`

#### 戻り値

`void`

***

### touchmoveHandler()

> **touchmoveHandler**(`e`): `void`

定義: [packages/board/src/input-interpretation/raw-input-parser/vanilla-touch-event-parser.ts:236](https://github.com/ue-too/ue-too/blob/68da915137a31a45d7ce8043b13275ff7283045d/packages/board/src/input-interpretation/raw-input-parser/vanilla-touch-event-parser.ts#L236)

#### パラメータ

##### e

`TouchEvent`

#### 戻り値

`void`

***

### touchstartHandler()

> **touchstartHandler**(`e`): `void`

定義: [packages/board/src/input-interpretation/raw-input-parser/vanilla-touch-event-parser.ts:189](https://github.com/ue-too/ue-too/blob/68da915137a31a45d7ce8043b13275ff7283045d/packages/board/src/input-interpretation/raw-input-parser/vanilla-touch-event-parser.ts#L189)

#### パラメータ

##### e

`TouchEvent`

#### 戻り値

`void`
