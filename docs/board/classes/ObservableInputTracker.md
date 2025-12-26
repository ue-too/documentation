[@ue-too/board](../globals.md) / ObservableInputTracker

# Class: ObservableInputTracker

Defined in: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:628](https://github.com/ue-too/ue-too/blob/e468a9961da59c81663192ec8df16ebc8e17abac/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L628)

Production implementation of KmtInputContext that tracks input state for the state machine.

## Remarks

This class provides the concrete implementation of the KMT input context, maintaining
all state required by the state machine to recognize and track gestures:

**State Tracking**:
- Initial cursor position for calculating pan deltas
- Input modality score to distinguish mouse vs trackpad
- Determined input mode (kmt/trackpad/TBD)
- Coordinate system alignment preference

**Input Modality Detection**:
The `kmtTrackpadTrackScore` accumulates evidence about the input device:
- Positive values indicate mouse behavior (middle-click, no horizontal scroll)
- Negative values indicate trackpad behavior (horizontal scroll, two-finger gestures)
- Score is used to determine zoom behavior (Ctrl+Scroll for mouse vs Scroll for trackpad)

**Design Pattern**:
This class follows the Context pattern from the @ue-too/being state machine library,
providing stateful data and operations that states can access and modify during transitions.

## Example

```typescript
const canvasProxy = new CanvasProxy(canvasElement);
const context = new ObservableInputTracker(canvasProxy);
const stateMachine = createKmtInputStateMachine(context);

// Context tracks state as the state machine processes events
stateMachine.happens("leftPointerDown", {x: 100, y: 200});
console.log(context.initialCursorPosition); // {x: 100, y: 200}
```

## Implements

- [`KmtInputContext`](../interfaces/KmtInputContext.md)

## Constructors

### Constructor

> **new ObservableInputTracker**(`canvasOperator`): `ObservableInputTracker`

Defined in: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:636](https://github.com/ue-too/ue-too/blob/e468a9961da59c81663192ec8df16ebc8e17abac/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L636)

#### Parameters

##### canvasOperator

[`Canvas`](../interfaces/Canvas.md)

#### Returns

`ObservableInputTracker`

## Accessors

### alignCoordinateSystem

#### Get Signature

> **get** **alignCoordinateSystem**(): `boolean`

Defined in: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:664](https://github.com/ue-too/ue-too/blob/e468a9961da59c81663192ec8df16ebc8e17abac/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L664)

Whether to use standard screen coordinate system (vs inverted Y-axis)

##### Returns

`boolean`

#### Set Signature

> **set** **alignCoordinateSystem**(`value`): `void`

Defined in: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:676](https://github.com/ue-too/ue-too/blob/e468a9961da59c81663192ec8df16ebc8e17abac/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L676)

Whether to use standard screen coordinate system (vs inverted Y-axis)

##### Parameters

###### value

`boolean`

##### Returns

`void`

Whether to use standard screen coordinate system (vs inverted Y-axis)

#### Implementation of

[`KmtInputContext`](../interfaces/KmtInputContext.md).[`alignCoordinateSystem`](../interfaces/KmtInputContext.md#aligncoordinatesystem)

***

### canvas

#### Get Signature

> **get** **canvas**(): [`Canvas`](../interfaces/Canvas.md)

Defined in: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:668](https://github.com/ue-too/ue-too/blob/e468a9961da59c81663192ec8df16ebc8e17abac/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L668)

Canvas accessor for dimensions and cursor control

##### Returns

[`Canvas`](../interfaces/Canvas.md)

Canvas accessor for dimensions and cursor control

#### Implementation of

[`KmtInputContext`](../interfaces/KmtInputContext.md).[`canvas`](../interfaces/KmtInputContext.md#canvas)

***

### initialCursorPosition

#### Get Signature

> **get** **initialCursorPosition**(): `Point`

Defined in: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:672](https://github.com/ue-too/ue-too/blob/e468a9961da59c81663192ec8df16ebc8e17abac/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L672)

The cursor position when a pan gesture started

##### Returns

`Point`

The cursor position when a pan gesture started

#### Implementation of

[`KmtInputContext`](../interfaces/KmtInputContext.md).[`initialCursorPosition`](../interfaces/KmtInputContext.md#initialcursorposition)

***

### kmtTrackpadTrackScore

#### Get Signature

> **get** **kmtTrackpadTrackScore**(): `number`

Defined in: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:652](https://github.com/ue-too/ue-too/blob/e468a9961da59c81663192ec8df16ebc8e17abac/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L652)

Score tracking input modality: >0 for mouse, <0 for trackpad, 0 for undetermined

##### Returns

`number`

Score tracking input modality: >0 for mouse, <0 for trackpad, 0 for undetermined

#### Implementation of

[`KmtInputContext`](../interfaces/KmtInputContext.md).[`kmtTrackpadTrackScore`](../interfaces/KmtInputContext.md#kmttrackpadtrackscore)

***

### mode

#### Get Signature

> **get** **mode**(): `"kmt"` \| `"trackpad"` \| `"TBD"`

Defined in: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:644](https://github.com/ue-too/ue-too/blob/e468a9961da59c81663192ec8df16ebc8e17abac/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L644)

The current input modality: 'kmt' (mouse), 'trackpad', or 'TBD' (to be determined)

##### Returns

`"kmt"` \| `"trackpad"` \| `"TBD"`

The current input modality: 'kmt' (mouse), 'trackpad', or 'TBD' (to be determined)

#### Implementation of

[`KmtInputContext`](../interfaces/KmtInputContext.md).[`mode`](../interfaces/KmtInputContext.md#mode)

## Methods

### addKmtTrackpadTrackScore()

> **addKmtTrackpadTrackScore**(): `void`

Defined in: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:660](https://github.com/ue-too/ue-too/blob/e468a9961da59c81663192ec8df16ebc8e17abac/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L660)

Increases the score toward mouse

#### Returns

`void`

#### Implementation of

[`KmtInputContext`](../interfaces/KmtInputContext.md).[`addKmtTrackpadTrackScore`](../interfaces/KmtInputContext.md#addkmttrackpadtrackscore)

***

### cancelCurrentAction()

> **cancelCurrentAction**(): `void`

Defined in: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:680](https://github.com/ue-too/ue-too/blob/e468a9961da59c81663192ec8df16ebc8e17abac/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L680)

Cancels the current action and resets cursor position

#### Returns

`void`

#### Implementation of

[`KmtInputContext`](../interfaces/KmtInputContext.md).[`cancelCurrentAction`](../interfaces/KmtInputContext.md#cancelcurrentaction)

***

### cleanup()

> **cleanup**(): `void`

Defined in: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:688](https://github.com/ue-too/ue-too/blob/e468a9961da59c81663192ec8df16ebc8e17abac/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L688)

#### Returns

`void`

#### Implementation of

[`KmtInputContext`](../interfaces/KmtInputContext.md).[`cleanup`](../interfaces/KmtInputContext.md#cleanup)

***

### setInitialCursorPosition()

> **setInitialCursorPosition**(`position`): `void`

Defined in: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:684](https://github.com/ue-too/ue-too/blob/e468a9961da59c81663192ec8df16ebc8e17abac/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L684)

Sets the initial cursor position when starting a pan gesture

#### Parameters

##### position

`Point`

#### Returns

`void`

#### Implementation of

[`KmtInputContext`](../interfaces/KmtInputContext.md).[`setInitialCursorPosition`](../interfaces/KmtInputContext.md#setinitialcursorposition)

***

### setMode()

> **setMode**(`mode`): `void`

Defined in: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:648](https://github.com/ue-too/ue-too/blob/e468a9961da59c81663192ec8df16ebc8e17abac/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L648)

Sets the determined input modality

#### Parameters

##### mode

`"kmt"` | `"trackpad"` | `"TBD"`

#### Returns

`void`

#### Implementation of

[`KmtInputContext`](../interfaces/KmtInputContext.md).[`setMode`](../interfaces/KmtInputContext.md#setmode)

***

### setup()

> **setup**(): `void`

Defined in: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:691](https://github.com/ue-too/ue-too/blob/e468a9961da59c81663192ec8df16ebc8e17abac/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L691)

#### Returns

`void`

#### Implementation of

[`KmtInputContext`](../interfaces/KmtInputContext.md).[`setup`](../interfaces/KmtInputContext.md#setup)

***

### subtractKmtTrackpadTrackScore()

> **subtractKmtTrackpadTrackScore**(): `void`

Defined in: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:656](https://github.com/ue-too/ue-too/blob/e468a9961da59c81663192ec8df16ebc8e17abac/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L656)

Decreases the score toward trackpad

#### Returns

`void`

#### Implementation of

[`KmtInputContext`](../interfaces/KmtInputContext.md).[`subtractKmtTrackpadTrackScore`](../interfaces/KmtInputContext.md#subtractkmttrackpadtrackscore)
