[@ue-too/board](../globals.md) / VanillaTouchEventParser

# Class: VanillaTouchEventParser

Defined in: [packages/board/src/input-interpretation/raw-input-parser/vanilla-touch-event-parser.ts:86](https://github.com/ue-too/ue-too/blob/aabc0f56e9e83141d0fd935ef6ac3e5fe0af0a61/packages/board/src/input-interpretation/raw-input-parser/vanilla-touch-event-parser.ts#L86)

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

Defined in: [packages/board/src/input-interpretation/raw-input-parser/vanilla-touch-event-parser.ts:99](https://github.com/ue-too/ue-too/blob/aabc0f56e9e83141d0fd935ef6ac3e5fe0af0a61/packages/board/src/input-interpretation/raw-input-parser/vanilla-touch-event-parser.ts#L99)

#### Parameters

##### touchInputStateMachine

[`TouchInputStateMachine`](../type-aliases/TouchInputStateMachine.md)

##### orchestrator

[`InputOrchestrator`](InputOrchestrator.md)

##### canvas?

`HTMLCanvasElement`

#### Returns

`VanillaTouchEventParser`

## Accessors

### disabled

#### Get Signature

> **get** **disabled**(): `boolean`

Defined in: [packages/board/src/input-interpretation/raw-input-parser/vanilla-touch-event-parser.ts:155](https://github.com/ue-too/ue-too/blob/aabc0f56e9e83141d0fd935ef6ac3e5fe0af0a61/packages/board/src/input-interpretation/raw-input-parser/vanilla-touch-event-parser.ts#L155)

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

Defined in: [packages/board/src/input-interpretation/raw-input-parser/vanilla-touch-event-parser.ts:113](https://github.com/ue-too/ue-too/blob/aabc0f56e9e83141d0fd935ef6ac3e5fe0af0a61/packages/board/src/input-interpretation/raw-input-parser/vanilla-touch-event-parser.ts#L113)

The orchestrator that handles state machine outputs

##### Returns

[`InputOrchestrator`](InputOrchestrator.md)

The orchestrator that handles state machine outputs

#### Implementation of

[`TouchEventParser`](../interfaces/TouchEventParser.md).[`orchestrator`](../interfaces/TouchEventParser.md#orchestrator)

***

### panDisabled

#### Get Signature

> **get** **panDisabled**(): `boolean`

Defined in: [packages/board/src/input-interpretation/raw-input-parser/vanilla-touch-event-parser.ts:159](https://github.com/ue-too/ue-too/blob/aabc0f56e9e83141d0fd935ef6ac3e5fe0af0a61/packages/board/src/input-interpretation/raw-input-parser/vanilla-touch-event-parser.ts#L159)

Whether pan gestures are disabled

##### Returns

`boolean`

#### Set Signature

> **set** **panDisabled**(`panDisabled`): `void`

Defined in: [packages/board/src/input-interpretation/raw-input-parser/vanilla-touch-event-parser.ts:163](https://github.com/ue-too/ue-too/blob/aabc0f56e9e83141d0fd935ef6ac3e5fe0af0a61/packages/board/src/input-interpretation/raw-input-parser/vanilla-touch-event-parser.ts#L163)

Whether pan gestures are disabled

##### Parameters

###### panDisabled

`boolean`

##### Returns

`void`

Whether pan gestures are disabled

#### Implementation of

[`TouchEventParser`](../interfaces/TouchEventParser.md).[`panDisabled`](../interfaces/TouchEventParser.md#pandisabled)

***

### rotateDisabled

#### Get Signature

> **get** **rotateDisabled**(): `boolean`

Defined in: [packages/board/src/input-interpretation/raw-input-parser/vanilla-touch-event-parser.ts:175](https://github.com/ue-too/ue-too/blob/aabc0f56e9e83141d0fd935ef6ac3e5fe0af0a61/packages/board/src/input-interpretation/raw-input-parser/vanilla-touch-event-parser.ts#L175)

Whether rotation gestures are disabled (currently unused)

##### Returns

`boolean`

#### Set Signature

> **set** **rotateDisabled**(`rotateDisabled`): `void`

Defined in: [packages/board/src/input-interpretation/raw-input-parser/vanilla-touch-event-parser.ts:179](https://github.com/ue-too/ue-too/blob/aabc0f56e9e83141d0fd935ef6ac3e5fe0af0a61/packages/board/src/input-interpretation/raw-input-parser/vanilla-touch-event-parser.ts#L179)

Whether rotation gestures are disabled (currently unused)

##### Parameters

###### rotateDisabled

`boolean`

##### Returns

`void`

Whether rotation gestures are disabled (currently unused)

#### Implementation of

[`TouchEventParser`](../interfaces/TouchEventParser.md).[`rotateDisabled`](../interfaces/TouchEventParser.md#rotatedisabled)

***

### stateMachine

#### Get Signature

> **get** **stateMachine**(): [`TouchInputStateMachine`](../type-aliases/TouchInputStateMachine.md)

Defined in: [packages/board/src/input-interpretation/raw-input-parser/vanilla-touch-event-parser.ts:109](https://github.com/ue-too/ue-too/blob/aabc0f56e9e83141d0fd935ef6ac3e5fe0af0a61/packages/board/src/input-interpretation/raw-input-parser/vanilla-touch-event-parser.ts#L109)

The state machine that processes parsed events

##### Returns

[`TouchInputStateMachine`](../type-aliases/TouchInputStateMachine.md)

The state machine that processes parsed events

#### Implementation of

[`TouchEventParser`](../interfaces/TouchEventParser.md).[`stateMachine`](../interfaces/TouchEventParser.md#statemachine)

***

### touchStateMachine

#### Get Signature

> **get** **touchStateMachine**(): [`TouchInputStateMachine`](../type-aliases/TouchInputStateMachine.md)

Defined in: [packages/board/src/input-interpretation/raw-input-parser/vanilla-touch-event-parser.ts:117](https://github.com/ue-too/ue-too/blob/aabc0f56e9e83141d0fd935ef6ac3e5fe0af0a61/packages/board/src/input-interpretation/raw-input-parser/vanilla-touch-event-parser.ts#L117)

##### Returns

[`TouchInputStateMachine`](../type-aliases/TouchInputStateMachine.md)

***

### zoomDisabled

#### Get Signature

> **get** **zoomDisabled**(): `boolean`

Defined in: [packages/board/src/input-interpretation/raw-input-parser/vanilla-touch-event-parser.ts:167](https://github.com/ue-too/ue-too/blob/aabc0f56e9e83141d0fd935ef6ac3e5fe0af0a61/packages/board/src/input-interpretation/raw-input-parser/vanilla-touch-event-parser.ts#L167)

Whether zoom gestures are disabled

##### Returns

`boolean`

#### Set Signature

> **set** **zoomDisabled**(`zoomDisabled`): `void`

Defined in: [packages/board/src/input-interpretation/raw-input-parser/vanilla-touch-event-parser.ts:171](https://github.com/ue-too/ue-too/blob/aabc0f56e9e83141d0fd935ef6ac3e5fe0af0a61/packages/board/src/input-interpretation/raw-input-parser/vanilla-touch-event-parser.ts#L171)

Whether zoom gestures are disabled

##### Parameters

###### zoomDisabled

`boolean`

##### Returns

`void`

Whether zoom gestures are disabled

#### Implementation of

[`TouchEventParser`](../interfaces/TouchEventParser.md).[`zoomDisabled`](../interfaces/TouchEventParser.md#zoomdisabled)

## Methods

### attach()

> **attach**(`canvas`): `void`

Defined in: [packages/board/src/input-interpretation/raw-input-parser/vanilla-touch-event-parser.ts:239](https://github.com/ue-too/ue-too/blob/aabc0f56e9e83141d0fd935ef6ac3e5fe0af0a61/packages/board/src/input-interpretation/raw-input-parser/vanilla-touch-event-parser.ts#L239)

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

Defined in: [packages/board/src/input-interpretation/raw-input-parser/vanilla-touch-event-parser.ts:121](https://github.com/ue-too/ue-too/blob/aabc0f56e9e83141d0fd935ef6ac3e5fe0af0a61/packages/board/src/input-interpretation/raw-input-parser/vanilla-touch-event-parser.ts#L121)

#### Returns

`void`

***

### disableStrategy()

> **disableStrategy**(): `void`

Defined in: [packages/board/src/input-interpretation/raw-input-parser/vanilla-touch-event-parser.ts:132](https://github.com/ue-too/ue-too/blob/aabc0f56e9e83141d0fd935ef6ac3e5fe0af0a61/packages/board/src/input-interpretation/raw-input-parser/vanilla-touch-event-parser.ts#L132)

#### Returns

`void`

***

### enableStrategy()

> **enableStrategy**(): `void`

Defined in: [packages/board/src/input-interpretation/raw-input-parser/vanilla-touch-event-parser.ts:128](https://github.com/ue-too/ue-too/blob/aabc0f56e9e83141d0fd935ef6ac3e5fe0af0a61/packages/board/src/input-interpretation/raw-input-parser/vanilla-touch-event-parser.ts#L128)

#### Returns

`void`

***

### setUp()

> **setUp**(): `void`

Defined in: [packages/board/src/input-interpretation/raw-input-parser/vanilla-touch-event-parser.ts:136](https://github.com/ue-too/ue-too/blob/aabc0f56e9e83141d0fd935ef6ac3e5fe0af0a61/packages/board/src/input-interpretation/raw-input-parser/vanilla-touch-event-parser.ts#L136)

Initializes event listeners

#### Returns

`void`

#### Implementation of

[`TouchEventParser`](../interfaces/TouchEventParser.md).[`setUp`](../interfaces/TouchEventParser.md#setup)

***

### tearDown()

> **tearDown**(): `void`

Defined in: [packages/board/src/input-interpretation/raw-input-parser/vanilla-touch-event-parser.ts:149](https://github.com/ue-too/ue-too/blob/aabc0f56e9e83141d0fd935ef6ac3e5fe0af0a61/packages/board/src/input-interpretation/raw-input-parser/vanilla-touch-event-parser.ts#L149)

Removes event listeners and cleans up

#### Returns

`void`

#### Implementation of

[`TouchEventParser`](../interfaces/TouchEventParser.md).[`tearDown`](../interfaces/TouchEventParser.md#teardown)

***

### touchcancelHandler()

> **touchcancelHandler**(`e`): `void`

Defined in: [packages/board/src/input-interpretation/raw-input-parser/vanilla-touch-event-parser.ts:205](https://github.com/ue-too/ue-too/blob/aabc0f56e9e83141d0fd935ef6ac3e5fe0af0a61/packages/board/src/input-interpretation/raw-input-parser/vanilla-touch-event-parser.ts#L205)

#### Parameters

##### e

`TouchEvent`

#### Returns

`void`

***

### touchendHandler()

> **touchendHandler**(`e`): `void`

Defined in: [packages/board/src/input-interpretation/raw-input-parser/vanilla-touch-event-parser.ts:216](https://github.com/ue-too/ue-too/blob/aabc0f56e9e83141d0fd935ef6ac3e5fe0af0a61/packages/board/src/input-interpretation/raw-input-parser/vanilla-touch-event-parser.ts#L216)

#### Parameters

##### e

`TouchEvent`

#### Returns

`void`

***

### touchmoveHandler()

> **touchmoveHandler**(`e`): `void`

Defined in: [packages/board/src/input-interpretation/raw-input-parser/vanilla-touch-event-parser.ts:227](https://github.com/ue-too/ue-too/blob/aabc0f56e9e83141d0fd935ef6ac3e5fe0af0a61/packages/board/src/input-interpretation/raw-input-parser/vanilla-touch-event-parser.ts#L227)

#### Parameters

##### e

`TouchEvent`

#### Returns

`void`

***

### touchstartHandler()

> **touchstartHandler**(`e`): `void`

Defined in: [packages/board/src/input-interpretation/raw-input-parser/vanilla-touch-event-parser.ts:192](https://github.com/ue-too/ue-too/blob/aabc0f56e9e83141d0fd935ef6ac3e5fe0af0a61/packages/board/src/input-interpretation/raw-input-parser/vanilla-touch-event-parser.ts#L192)

#### Parameters

##### e

`TouchEvent`

#### Returns

`void`
