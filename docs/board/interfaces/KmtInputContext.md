[@ue-too/board](../globals.md) / KmtInputContext

# Interface: KmtInputContext

Defined in: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:532](https://github.com/ue-too/ue-too/blob/1055c6abca1ea3a0e952b0825f36e0ca2527df85/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L532)

Context interface for the Keyboard/Mouse/Trackpad (KMT) input state machine.

## Remarks

This context provides the state and behavior needed by the KMT state machine to:
1. Track cursor positions for calculating pan deltas
2. Distinguish between mouse and trackpad input modalities
3. Access canvas dimensions for coordinate transformations
4. Manage coordinate system alignment (inverted Y-axis handling)

**Input Modality Detection**:
The context uses a scoring system (`kmtTrackpadTrackScore`) to differentiate between
mouse and trackpad input, which have different zoom behaviors:
- Mouse: Ctrl+Scroll = zoom, Scroll = pan
- Trackpad: Scroll = zoom (no Ctrl needed), Two-finger gesture = pan

**Coordinate System**:
The `alignCoordinateSystem` flag determines Y-axis orientation:
- `true`: Standard screen coordinates (Y increases downward)
- `false`: Inverted coordinates (Y increases upward)

This interface extends BaseContext from the @ue-too/being state machine library,
inheriting setup() and cleanup() lifecycle methods.

## Extends

- `BaseContext`

## Properties

### addKmtTrackpadTrackScore()

> **addKmtTrackpadTrackScore**: () => `void`

Defined in: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:548](https://github.com/ue-too/ue-too/blob/1055c6abca1ea3a0e952b0825f36e0ca2527df85/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L548)

Increases the score toward mouse

#### Returns

`void`

***

### alignCoordinateSystem

> **alignCoordinateSystem**: `boolean`

Defined in: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:534](https://github.com/ue-too/ue-too/blob/1055c6abca1ea3a0e952b0825f36e0ca2527df85/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L534)

Whether to use standard screen coordinate system (vs inverted Y-axis)

***

### cancelCurrentAction()

> **cancelCurrentAction**: () => `void`

Defined in: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:540](https://github.com/ue-too/ue-too/blob/1055c6abca1ea3a0e952b0825f36e0ca2527df85/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L540)

Cancels the current action and resets cursor position

#### Returns

`void`

***

### canvas

> **canvas**: [`Canvas`](Canvas.md)

Defined in: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:536](https://github.com/ue-too/ue-too/blob/1055c6abca1ea3a0e952b0825f36e0ca2527df85/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L536)

Canvas accessor for dimensions and cursor control

***

### initialCursorPosition

> **initialCursorPosition**: `Point`

Defined in: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:542](https://github.com/ue-too/ue-too/blob/1055c6abca1ea3a0e952b0825f36e0ca2527df85/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L542)

The cursor position when a pan gesture started

***

### kmtTrackpadTrackScore

> **kmtTrackpadTrackScore**: `number`

Defined in: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:544](https://github.com/ue-too/ue-too/blob/1055c6abca1ea3a0e952b0825f36e0ca2527df85/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L544)

Score tracking input modality: >0 for mouse, <0 for trackpad, 0 for undetermined

***

### mode

> **mode**: `"kmt"` \| `"trackpad"` \| `"TBD"`

Defined in: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:552](https://github.com/ue-too/ue-too/blob/1055c6abca1ea3a0e952b0825f36e0ca2527df85/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L552)

The current input modality: 'kmt' (mouse), 'trackpad', or 'TBD' (to be determined)

***

### setInitialCursorPosition()

> **setInitialCursorPosition**: (`position`) => `void`

Defined in: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:538](https://github.com/ue-too/ue-too/blob/1055c6abca1ea3a0e952b0825f36e0ca2527df85/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L538)

Sets the initial cursor position when starting a pan gesture

#### Parameters

##### position

`Point`

#### Returns

`void`

***

### setMode()

> **setMode**: (`mode`) => `void`

Defined in: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:550](https://github.com/ue-too/ue-too/blob/1055c6abca1ea3a0e952b0825f36e0ca2527df85/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L550)

Sets the determined input modality

#### Parameters

##### mode

`"kmt"` | `"trackpad"` | `"TBD"`

#### Returns

`void`

***

### subtractKmtTrackpadTrackScore()

> **subtractKmtTrackpadTrackScore**: () => `void`

Defined in: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:546](https://github.com/ue-too/ue-too/blob/1055c6abca1ea3a0e952b0825f36e0ca2527df85/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L546)

Decreases the score toward trackpad

#### Returns

`void`

## Methods

### cleanup()

> **cleanup**(): `void`

Defined in: packages/being/dist/interface.d.ts:31

#### Returns

`void`

#### Inherited from

`BaseContext.cleanup`

***

### setup()

> **setup**(): `void`

Defined in: packages/being/dist/interface.d.ts:30

#### Returns

`void`

#### Inherited from

`BaseContext.setup`
