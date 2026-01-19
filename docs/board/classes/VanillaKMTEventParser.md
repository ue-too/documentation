[@ue-too/board](../globals.md) / VanillaKMTEventParser

# Class: VanillaKMTEventParser

Defined in: [packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts:156](https://github.com/ue-too/ue-too/blob/1055c6abca1ea3a0e952b0825f36e0ca2527df85/packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts#L156)

DOM event parser for Keyboard/Mouse/Trackpad input.

## Remarks

This parser converts raw DOM events into state machine events and coordinates with
the orchestrator to process outputs. It serves as the entry point for all KMT input
in the input interpretation pipeline.

**Event Flow**:
```
DOM Events → Parser → State Machine → Parser → Orchestrator → Camera/Observers
```

**Responsibilities**:
1. Listen for DOM pointer, wheel, and keyboard events
2. Convert DOM events to state machine event format
3. Send events to the state machine
4. Forward state machine outputs to the orchestrator

**Handled DOM Events**:
- pointerdown/up/move (canvas-scoped)
- wheel (canvas-scoped)
- keydown/up (window-scoped for spacebar)

**Keyboard Handling**:
Keyboard events are only processed when `document.body` is the target,
preventing interference with text inputs and other UI elements.

The parser can be disabled to temporarily stop input processing (e.g., during
modal dialogs or animations).

## Example

```typescript
const canvasElement = document.getElementById("canvas");
const stateMachine = createKmtInputStateMachine(context);
const orchestrator = new InputOrchestrator(cameraMux, cameraRig, publisher);
const parser = new VanillaKMTEventParser(stateMachine, orchestrator, canvasElement);

parser.setUp(); // Starts listening for events

// Later, to disable input temporarily
parser.disabled = true;

// Cleanup when done
parser.tearDown();
```

## Implements

- [`KMTEventParser`](../interfaces/KMTEventParser.md)

## Constructors

### Constructor

> **new VanillaKMTEventParser**(`kmtInputStateMachine`, `orchestrator`, `canvas?`): `VanillaKMTEventParser`

Defined in: [packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts:166](https://github.com/ue-too/ue-too/blob/1055c6abca1ea3a0e952b0825f36e0ca2527df85/packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts#L166)

#### Parameters

##### kmtInputStateMachine

[`KmtInputStateMachine`](../type-aliases/KmtInputStateMachine.md)

##### orchestrator

[`InputOrchestrator`](InputOrchestrator.md)

##### canvas?

`HTMLCanvasElement` | `SVGSVGElement`

#### Returns

`VanillaKMTEventParser`

## Accessors

### disabled

#### Get Signature

> **get** **disabled**(): `boolean`

Defined in: [packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts:175](https://github.com/ue-too/ue-too/blob/1055c6abca1ea3a0e952b0825f36e0ca2527df85/packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts#L175)

Whether the parser is currently disabled

##### Returns

`boolean`

Whether the parser is currently disabled

#### Implementation of

[`KMTEventParser`](../interfaces/KMTEventParser.md).[`disabled`](../interfaces/KMTEventParser.md#disabled)

## Methods

### addEventListeners()

> **addEventListeners**(`signal`): `void`

Defined in: [packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts:187](https://github.com/ue-too/ue-too/blob/1055c6abca1ea3a0e952b0825f36e0ca2527df85/packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts#L187)

#### Parameters

##### signal

`AbortSignal`

#### Returns

`void`

***

### attach()

> **attach**(`canvas`): `void`

Defined in: [packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts:305](https://github.com/ue-too/ue-too/blob/1055c6abca1ea3a0e952b0825f36e0ca2527df85/packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts#L305)

Attaches to a new canvas element

#### Parameters

##### canvas

`HTMLCanvasElement`

#### Returns

`void`

#### Implementation of

[`KMTEventParser`](../interfaces/KMTEventParser.md).[`attach`](../interfaces/KMTEventParser.md#attach)

***

### bindFunctions()

> **bindFunctions**(): `void`

Defined in: [packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts:212](https://github.com/ue-too/ue-too/blob/1055c6abca1ea3a0e952b0825f36e0ca2527df85/packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts#L212)

#### Returns

`void`

***

### disable()

> **disable**(): `void`

Defined in: [packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts:179](https://github.com/ue-too/ue-too/blob/1055c6abca1ea3a0e952b0825f36e0ca2527df85/packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts#L179)

Disables the parser; the event listeners are still attached just not processing any events

#### Returns

`void`

#### Implementation of

[`KMTEventParser`](../interfaces/KMTEventParser.md).[`disable`](../interfaces/KMTEventParser.md#disable)

***

### enable()

> **enable**(): `void`

Defined in: [packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts:183](https://github.com/ue-too/ue-too/blob/1055c6abca1ea3a0e952b0825f36e0ca2527df85/packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts#L183)

Enables the parser

#### Returns

`void`

#### Implementation of

[`KMTEventParser`](../interfaces/KMTEventParser.md).[`enable`](../interfaces/KMTEventParser.md#enable)

***

### keypressHandler()

> **keypressHandler**(`e`): `void`

Defined in: [packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts:283](https://github.com/ue-too/ue-too/blob/1055c6abca1ea3a0e952b0825f36e0ca2527df85/packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts#L283)

#### Parameters

##### e

`KeyboardEvent`

#### Returns

`void`

***

### keyupHandler()

> **keyupHandler**(`e`): `void`

Defined in: [packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts:296](https://github.com/ue-too/ue-too/blob/1055c6abca1ea3a0e952b0825f36e0ca2527df85/packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts#L296)

#### Parameters

##### e

`KeyboardEvent`

#### Returns

`void`

***

### pointerDownHandler()

> **pointerDownHandler**(`e`): `void`

Defined in: [packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts:230](https://github.com/ue-too/ue-too/blob/1055c6abca1ea3a0e952b0825f36e0ca2527df85/packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts#L230)

#### Parameters

##### e

`PointerEvent`

#### Returns

`void`

***

### pointerMoveHandler()

> **pointerMoveHandler**(`e`): `void`

Defined in: [packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts:258](https://github.com/ue-too/ue-too/blob/1055c6abca1ea3a0e952b0825f36e0ca2527df85/packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts#L258)

#### Parameters

##### e

`PointerEvent`

#### Returns

`void`

***

### pointerUpHandler()

> **pointerUpHandler**(`e`): `void`

Defined in: [packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts:244](https://github.com/ue-too/ue-too/blob/1055c6abca1ea3a0e952b0825f36e0ca2527df85/packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts#L244)

#### Parameters

##### e

`PointerEvent`

#### Returns

`void`

***

### scrollHandler()

> **scrollHandler**(`e`): `void`

Defined in: [packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts:273](https://github.com/ue-too/ue-too/blob/1055c6abca1ea3a0e952b0825f36e0ca2527df85/packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts#L273)

#### Parameters

##### e

`WheelEvent`

#### Returns

`void`

***

### setUp()

> **setUp**(): `void`

Defined in: [packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts:199](https://github.com/ue-too/ue-too/blob/1055c6abca1ea3a0e952b0825f36e0ca2527df85/packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts#L199)

Initializes event listeners

#### Returns

`void`

#### Implementation of

[`KMTEventParser`](../interfaces/KMTEventParser.md).[`setUp`](../interfaces/KMTEventParser.md#setup)

***

### tearDown()

> **tearDown**(): `void`

Defined in: [packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts:206](https://github.com/ue-too/ue-too/blob/1055c6abca1ea3a0e952b0825f36e0ca2527df85/packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts#L206)

Removes event listeners and cleans up

#### Returns

`void`

#### Implementation of

[`KMTEventParser`](../interfaces/KMTEventParser.md).[`tearDown`](../interfaces/KMTEventParser.md#teardown)
