[@ue-too/board](../globals.md) / DummyKmtInputContext

# Class: DummyKmtInputContext

Defined in: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:569](https://github.com/ue-too/ue-too/blob/1055c6abca1ea3a0e952b0825f36e0ca2527df85/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L569)

No-op implementation of KmtInputContext for web worker relay scenarios.

## Remarks

Used when the input state machine is configured to relay events to a web worker
rather than process them locally. The state machine requires a context, but in
the relay scenario, no actual state tracking is needed - events are simply forwarded.

All methods are no-ops and all properties return default values.

## See

[DummyCanvas](DummyCanvas.md)

## Implements

- [`KmtInputContext`](../interfaces/KmtInputContext.md)

## Constructors

### Constructor

> **new DummyKmtInputContext**(): `DummyKmtInputContext`

Defined in: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:575](https://github.com/ue-too/ue-too/blob/1055c6abca1ea3a0e952b0825f36e0ca2527df85/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L575)

#### Returns

`DummyKmtInputContext`

## Properties

### alignCoordinateSystem

> **alignCoordinateSystem**: `boolean` = `false`

Defined in: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:571](https://github.com/ue-too/ue-too/blob/1055c6abca1ea3a0e952b0825f36e0ca2527df85/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L571)

Whether to use standard screen coordinate system (vs inverted Y-axis)

#### Implementation of

[`KmtInputContext`](../interfaces/KmtInputContext.md).[`alignCoordinateSystem`](../interfaces/KmtInputContext.md#aligncoordinatesystem)

***

### canvas

> **canvas**: [`Canvas`](../interfaces/Canvas.md)

Defined in: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:572](https://github.com/ue-too/ue-too/blob/1055c6abca1ea3a0e952b0825f36e0ca2527df85/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L572)

Canvas accessor for dimensions and cursor control

#### Implementation of

[`KmtInputContext`](../interfaces/KmtInputContext.md).[`canvas`](../interfaces/KmtInputContext.md#canvas)

***

### initialCursorPosition

> **initialCursorPosition**: `Point`

Defined in: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:573](https://github.com/ue-too/ue-too/blob/1055c6abca1ea3a0e952b0825f36e0ca2527df85/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L573)

The cursor position when a pan gesture started

#### Implementation of

[`KmtInputContext`](../interfaces/KmtInputContext.md).[`initialCursorPosition`](../interfaces/KmtInputContext.md#initialcursorposition)

***

### setCursorPosition()

> **setCursorPosition**: (`position`) => `void` = `NO_OP`

Defined in: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:581](https://github.com/ue-too/ue-too/blob/1055c6abca1ea3a0e952b0825f36e0ca2527df85/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L581)

#### Parameters

##### position

`Point`

#### Returns

`void`

***

### toggleOffEdgeAutoCameraInput()

> **toggleOffEdgeAutoCameraInput**: () => `void` = `NO_OP`

Defined in: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:580](https://github.com/ue-too/ue-too/blob/1055c6abca1ea3a0e952b0825f36e0ca2527df85/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L580)

#### Returns

`void`

***

### toggleOnEdgeAutoCameraInput()

> **toggleOnEdgeAutoCameraInput**: () => `void` = `NO_OP`

Defined in: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:579](https://github.com/ue-too/ue-too/blob/1055c6abca1ea3a0e952b0825f36e0ca2527df85/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L579)

#### Returns

`void`

## Accessors

### kmtTrackpadTrackScore

#### Get Signature

> **get** **kmtTrackpadTrackScore**(): `number`

Defined in: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:592](https://github.com/ue-too/ue-too/blob/1055c6abca1ea3a0e952b0825f36e0ca2527df85/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L592)

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

Defined in: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:605](https://github.com/ue-too/ue-too/blob/1055c6abca1ea3a0e952b0825f36e0ca2527df85/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L605)

The current input modality: 'kmt' (mouse), 'trackpad', or 'TBD' (to be determined)

##### Returns

`"kmt"` \| `"trackpad"` \| `"TBD"`

The current input modality: 'kmt' (mouse), 'trackpad', or 'TBD' (to be determined)

#### Implementation of

[`KmtInputContext`](../interfaces/KmtInputContext.md).[`mode`](../interfaces/KmtInputContext.md#mode)

## Methods

### addKmtTrackpadTrackScore()

> **addKmtTrackpadTrackScore**(): `void`

Defined in: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:599](https://github.com/ue-too/ue-too/blob/1055c6abca1ea3a0e952b0825f36e0ca2527df85/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L599)

Increases the score toward mouse

#### Returns

`void`

#### Implementation of

[`KmtInputContext`](../interfaces/KmtInputContext.md).[`addKmtTrackpadTrackScore`](../interfaces/KmtInputContext.md#addkmttrackpadtrackscore)

***

### cancelCurrentAction()

> **cancelCurrentAction**(): `void`

Defined in: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:609](https://github.com/ue-too/ue-too/blob/1055c6abca1ea3a0e952b0825f36e0ca2527df85/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L609)

Cancels the current action and resets cursor position

#### Returns

`void`

#### Implementation of

[`KmtInputContext`](../interfaces/KmtInputContext.md).[`cancelCurrentAction`](../interfaces/KmtInputContext.md#cancelcurrentaction)

***

### cleanup()

> **cleanup**(): `void`

Defined in: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:586](https://github.com/ue-too/ue-too/blob/1055c6abca1ea3a0e952b0825f36e0ca2527df85/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L586)

#### Returns

`void`

#### Implementation of

[`KmtInputContext`](../interfaces/KmtInputContext.md).[`cleanup`](../interfaces/KmtInputContext.md#cleanup)

***

### setInitialCursorPosition()

> **setInitialCursorPosition**(`position`): `void`

Defined in: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:583](https://github.com/ue-too/ue-too/blob/1055c6abca1ea3a0e952b0825f36e0ca2527df85/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L583)

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

Defined in: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:602](https://github.com/ue-too/ue-too/blob/1055c6abca1ea3a0e952b0825f36e0ca2527df85/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L602)

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

Defined in: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:589](https://github.com/ue-too/ue-too/blob/1055c6abca1ea3a0e952b0825f36e0ca2527df85/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L589)

#### Returns

`void`

#### Implementation of

[`KmtInputContext`](../interfaces/KmtInputContext.md).[`setup`](../interfaces/KmtInputContext.md#setup)

***

### subtractKmtTrackpadTrackScore()

> **subtractKmtTrackpadTrackScore**(): `void`

Defined in: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:596](https://github.com/ue-too/ue-too/blob/1055c6abca1ea3a0e952b0825f36e0ca2527df85/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L596)

Decreases the score toward trackpad

#### Returns

`void`

#### Implementation of

[`KmtInputContext`](../interfaces/KmtInputContext.md).[`subtractKmtTrackpadTrackScore`](../interfaces/KmtInputContext.md#subtractkmttrackpadtrackscore)
