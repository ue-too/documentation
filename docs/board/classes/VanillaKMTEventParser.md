[@ue-too/board](../globals.md) / VanillaKMTEventParser

# Class: VanillaKMTEventParser

Defined in: [packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts:156](https://github.com/ue-too/ue-too/blob/e468a9961da59c81663192ec8df16ebc8e17abac/packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts#L156)

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

Defined in: [packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts:166](https://github.com/ue-too/ue-too/blob/e468a9961da59c81663192ec8df16ebc8e17abac/packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts#L166)

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

Defined in: [packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts:175](https://github.com/ue-too/ue-too/blob/e468a9961da59c81663192ec8df16ebc8e17abac/packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts#L175)

Whether the parser is currently disabled

##### Returns

`boolean`

#### Set Signature

> **set** **disabled**(`value`): `void`

Defined in: [packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts:179](https://github.com/ue-too/ue-too/blob/e468a9961da59c81663192ec8df16ebc8e17abac/packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts#L179)

Whether the parser is currently disabled

##### Parameters

###### value

`boolean`

##### Returns

`void`

Whether the parser is currently disabled

#### Implementation of

[`KMTEventParser`](../interfaces/KMTEventParser.md).[`disabled`](../interfaces/KMTEventParser.md#disabled)

***

### orchestrator

#### Get Signature

> **get** **orchestrator**(): [`InputOrchestrator`](InputOrchestrator.md)

Defined in: [packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts:187](https://github.com/ue-too/ue-too/blob/e468a9961da59c81663192ec8df16ebc8e17abac/packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts#L187)

The orchestrator that handles state machine outputs

##### Returns

[`InputOrchestrator`](InputOrchestrator.md)

The orchestrator that handles state machine outputs

#### Implementation of

[`KMTEventParser`](../interfaces/KMTEventParser.md).[`orchestrator`](../interfaces/KMTEventParser.md#orchestrator)

***

### stateMachine

#### Get Signature

> **get** **stateMachine**(): [`KmtInputStateMachine`](../type-aliases/KmtInputStateMachine.md)

Defined in: [packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts:183](https://github.com/ue-too/ue-too/blob/e468a9961da59c81663192ec8df16ebc8e17abac/packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts#L183)

The state machine that processes parsed events

##### Returns

[`KmtInputStateMachine`](../type-aliases/KmtInputStateMachine.md)

The state machine that processes parsed events

#### Implementation of

[`KMTEventParser`](../interfaces/KMTEventParser.md).[`stateMachine`](../interfaces/KMTEventParser.md#statemachine)

## Methods

### addEventListeners()

> **addEventListeners**(`signal`): `void`

Defined in: [packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts:191](https://github.com/ue-too/ue-too/blob/e468a9961da59c81663192ec8df16ebc8e17abac/packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts#L191)

#### Parameters

##### signal

`AbortSignal`

#### Returns

`void`

***

### attach()

> **attach**(`canvas`): `void`

Defined in: [packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts:309](https://github.com/ue-too/ue-too/blob/e468a9961da59c81663192ec8df16ebc8e17abac/packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts#L309)

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

Defined in: [packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts:216](https://github.com/ue-too/ue-too/blob/e468a9961da59c81663192ec8df16ebc8e17abac/packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts#L216)

#### Returns

`void`

***

### keypressHandler()

> **keypressHandler**(`e`): `void`

Defined in: [packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts:287](https://github.com/ue-too/ue-too/blob/e468a9961da59c81663192ec8df16ebc8e17abac/packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts#L287)

#### Parameters

##### e

`KeyboardEvent`

#### Returns

`void`

***

### keyupHandler()

> **keyupHandler**(`e`): `void`

Defined in: [packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts:300](https://github.com/ue-too/ue-too/blob/e468a9961da59c81663192ec8df16ebc8e17abac/packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts#L300)

#### Parameters

##### e

`KeyboardEvent`

#### Returns

`void`

***

### pointerDownHandler()

> **pointerDownHandler**(`e`): `void`

Defined in: [packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts:234](https://github.com/ue-too/ue-too/blob/e468a9961da59c81663192ec8df16ebc8e17abac/packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts#L234)

#### Parameters

##### e

`PointerEvent`

#### Returns

`void`

***

### pointerMoveHandler()

> **pointerMoveHandler**(`e`): `void`

Defined in: [packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts:262](https://github.com/ue-too/ue-too/blob/e468a9961da59c81663192ec8df16ebc8e17abac/packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts#L262)

#### Parameters

##### e

`PointerEvent`

#### Returns

`void`

***

### pointerUpHandler()

> **pointerUpHandler**(`e`): `void`

Defined in: [packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts:248](https://github.com/ue-too/ue-too/blob/e468a9961da59c81663192ec8df16ebc8e17abac/packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts#L248)

#### Parameters

##### e

`PointerEvent`

#### Returns

`void`

***

### scrollHandler()

> **scrollHandler**(`e`): `void`

Defined in: [packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts:277](https://github.com/ue-too/ue-too/blob/e468a9961da59c81663192ec8df16ebc8e17abac/packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts#L277)

#### Parameters

##### e

`WheelEvent`

#### Returns

`void`

***

### setUp()

> **setUp**(): `void`

Defined in: [packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts:203](https://github.com/ue-too/ue-too/blob/e468a9961da59c81663192ec8df16ebc8e17abac/packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts#L203)

Initializes event listeners

#### Returns

`void`

#### Implementation of

[`KMTEventParser`](../interfaces/KMTEventParser.md).[`setUp`](../interfaces/KMTEventParser.md#setup)

***

### tearDown()

> **tearDown**(): `void`

Defined in: [packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts:210](https://github.com/ue-too/ue-too/blob/e468a9961da59c81663192ec8df16ebc8e17abac/packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts#L210)

Removes event listeners and cleans up

#### Returns

`void`

#### Implementation of

[`KMTEventParser`](../interfaces/KMTEventParser.md).[`tearDown`](../interfaces/KMTEventParser.md#teardown)
