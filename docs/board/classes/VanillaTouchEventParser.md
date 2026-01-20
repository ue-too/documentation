[@ue-too/board](../globals.md) / VanillaTouchEventParser

# Class: VanillaTouchEventParser

Defined in: [packages/board/src/input-interpretation/raw-input-parser/vanilla-touch-event-parser.ts:80](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/board/src/input-interpretation/raw-input-parser/vanilla-touch-event-parser.ts#L80)

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

## Example

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

## Implements

- [`TouchEventParser`](../interfaces/TouchEventParser.md)

## Constructors

### Constructor

> **new VanillaTouchEventParser**(`touchInputStateMachine`, `orchestrator`, `canvas?`): `VanillaTouchEventParser`

Defined in: [packages/board/src/input-interpretation/raw-input-parser/vanilla-touch-event-parser.ts:93](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/board/src/input-interpretation/raw-input-parser/vanilla-touch-event-parser.ts#L93)

#### Parameters

##### touchInputStateMachine

[`TouchInputStateMachine`](../type-aliases/TouchInputStateMachine.md)

##### orchestrator

[`InputOrchestrator`](InputOrchestrator.md)

##### canvas?

`HTMLCanvasElement` | `SVGSVGElement`

#### Returns

`VanillaTouchEventParser`

## Accessors

### disabled

#### Get Signature

> **get** **disabled**(): `boolean`

Defined in: [packages/board/src/input-interpretation/raw-input-parser/vanilla-touch-event-parser.ts:141](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/board/src/input-interpretation/raw-input-parser/vanilla-touch-event-parser.ts#L141)

Whether all touch input is disabled

##### Returns

`boolean`

Whether all touch input is disabled

#### Implementation of

[`TouchEventParser`](../interfaces/TouchEventParser.md).[`disabled`](../interfaces/TouchEventParser.md#disabled)

***

### orchestrator

#### Get Signature

> **get** **orchestrator**(): [`InputOrchestrator`](InputOrchestrator.md)

Defined in: [packages/board/src/input-interpretation/raw-input-parser/vanilla-touch-event-parser.ts:103](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/board/src/input-interpretation/raw-input-parser/vanilla-touch-event-parser.ts#L103)

##### Returns

[`InputOrchestrator`](InputOrchestrator.md)

## Methods

### attach()

> **attach**(`canvas`): `void`

Defined in: [packages/board/src/input-interpretation/raw-input-parser/vanilla-touch-event-parser.ts:209](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/board/src/input-interpretation/raw-input-parser/vanilla-touch-event-parser.ts#L209)

Attaches to a new canvas element

#### Parameters

##### canvas

`HTMLCanvasElement`

#### Returns

`void`

#### Implementation of

[`TouchEventParser`](../interfaces/TouchEventParser.md).[`attach`](../interfaces/TouchEventParser.md#attach)

***

### bindListeners()

> **bindListeners**(): `void`

Defined in: [packages/board/src/input-interpretation/raw-input-parser/vanilla-touch-event-parser.ts:107](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/board/src/input-interpretation/raw-input-parser/vanilla-touch-event-parser.ts#L107)

#### Returns

`void`

***

### disable()

> **disable**(): `void`

Defined in: [packages/board/src/input-interpretation/raw-input-parser/vanilla-touch-event-parser.ts:145](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/board/src/input-interpretation/raw-input-parser/vanilla-touch-event-parser.ts#L145)

Disables the parser; the event listeners are still attached just not processing any events

#### Returns

`void`

#### Implementation of

[`TouchEventParser`](../interfaces/TouchEventParser.md).[`disable`](../interfaces/TouchEventParser.md#disable)

***

### disableStrategy()

> **disableStrategy**(): `void`

Defined in: [packages/board/src/input-interpretation/raw-input-parser/vanilla-touch-event-parser.ts:118](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/board/src/input-interpretation/raw-input-parser/vanilla-touch-event-parser.ts#L118)

#### Returns

`void`

***

### enable()

> **enable**(): `void`

Defined in: [packages/board/src/input-interpretation/raw-input-parser/vanilla-touch-event-parser.ts:149](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/board/src/input-interpretation/raw-input-parser/vanilla-touch-event-parser.ts#L149)

Enables the parser

#### Returns

`void`

#### Implementation of

[`TouchEventParser`](../interfaces/TouchEventParser.md).[`enable`](../interfaces/TouchEventParser.md#enable)

***

### enableStrategy()

> **enableStrategy**(): `void`

Defined in: [packages/board/src/input-interpretation/raw-input-parser/vanilla-touch-event-parser.ts:114](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/board/src/input-interpretation/raw-input-parser/vanilla-touch-event-parser.ts#L114)

#### Returns

`void`

***

### setUp()

> **setUp**(): `void`

Defined in: [packages/board/src/input-interpretation/raw-input-parser/vanilla-touch-event-parser.ts:122](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/board/src/input-interpretation/raw-input-parser/vanilla-touch-event-parser.ts#L122)

Initializes event listeners

#### Returns

`void`

#### Implementation of

[`TouchEventParser`](../interfaces/TouchEventParser.md).[`setUp`](../interfaces/TouchEventParser.md#setup)

***

### tearDown()

> **tearDown**(): `void`

Defined in: [packages/board/src/input-interpretation/raw-input-parser/vanilla-touch-event-parser.ts:135](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/board/src/input-interpretation/raw-input-parser/vanilla-touch-event-parser.ts#L135)

Removes event listeners and cleans up

#### Returns

`void`

#### Implementation of

[`TouchEventParser`](../interfaces/TouchEventParser.md).[`tearDown`](../interfaces/TouchEventParser.md#teardown)

***

### touchcancelHandler()

> **touchcancelHandler**(`e`): `void`

Defined in: [packages/board/src/input-interpretation/raw-input-parser/vanilla-touch-event-parser.ts:175](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/board/src/input-interpretation/raw-input-parser/vanilla-touch-event-parser.ts#L175)

#### Parameters

##### e

`TouchEvent`

#### Returns

`void`

***

### touchendHandler()

> **touchendHandler**(`e`): `void`

Defined in: [packages/board/src/input-interpretation/raw-input-parser/vanilla-touch-event-parser.ts:186](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/board/src/input-interpretation/raw-input-parser/vanilla-touch-event-parser.ts#L186)

#### Parameters

##### e

`TouchEvent`

#### Returns

`void`

***

### touchmoveHandler()

> **touchmoveHandler**(`e`): `void`

Defined in: [packages/board/src/input-interpretation/raw-input-parser/vanilla-touch-event-parser.ts:197](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/board/src/input-interpretation/raw-input-parser/vanilla-touch-event-parser.ts#L197)

#### Parameters

##### e

`TouchEvent`

#### Returns

`void`

***

### touchstartHandler()

> **touchstartHandler**(`e`): `void`

Defined in: [packages/board/src/input-interpretation/raw-input-parser/vanilla-touch-event-parser.ts:162](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/board/src/input-interpretation/raw-input-parser/vanilla-touch-event-parser.ts#L162)

#### Parameters

##### e

`TouchEvent`

#### Returns

`void`
