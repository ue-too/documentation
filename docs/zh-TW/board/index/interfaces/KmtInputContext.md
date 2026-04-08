[@ue-too/board](../../modules.md) / [index](../index.md) / KmtInputContext

# 介面: KmtInputContext

定義於: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:609](https://github.com/ue-too/ue-too/blob/feb7c80222df5d3cd97bfa1933bafe3190c6e48d/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L609)

Context interface for the Keyboard/Mouse/Trackpad (KMT) input state machine.

## 備註

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

## 屬性

### addKmtTrackpadTrackScore()

> **addKmtTrackpadTrackScore**: () => `void`

定義於: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:625](https://github.com/ue-too/ue-too/blob/feb7c80222df5d3cd97bfa1933bafe3190c6e48d/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L625)

Increases the score toward mouse

#### 回傳

`void`

***

### alignCoordinateSystem

> **alignCoordinateSystem**: `boolean`

定義於: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:611](https://github.com/ue-too/ue-too/blob/feb7c80222df5d3cd97bfa1933bafe3190c6e48d/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L611)

Whether to use standard screen coordinate system (vs inverted Y-axis)

***

### cancelCurrentAction()

> **cancelCurrentAction**: () => `void`

定義於: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:617](https://github.com/ue-too/ue-too/blob/feb7c80222df5d3cd97bfa1933bafe3190c6e48d/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L617)

Cancels the current action and resets cursor position

#### 回傳

`void`

***

### canvas

> **canvas**: [`Canvas`](Canvas.md)

定義於: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:613](https://github.com/ue-too/ue-too/blob/feb7c80222df5d3cd97bfa1933bafe3190c6e48d/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L613)

Canvas accessor for dimensions and cursor control

***

### initialCursorPosition

> **initialCursorPosition**: `Point`

定義於: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:619](https://github.com/ue-too/ue-too/blob/feb7c80222df5d3cd97bfa1933bafe3190c6e48d/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L619)

The cursor position when a pan gesture started

***

### kmtTrackpadTrackScore

> **kmtTrackpadTrackScore**: `number`

定義於: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:621](https://github.com/ue-too/ue-too/blob/feb7c80222df5d3cd97bfa1933bafe3190c6e48d/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L621)

Score tracking input modality: >0 for mouse, <0 for trackpad, 0 for undetermined

***

### mode

> **mode**: `"kmt"` \| `"trackpad"` \| `"TBD"`

定義於: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:629](https://github.com/ue-too/ue-too/blob/feb7c80222df5d3cd97bfa1933bafe3190c6e48d/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L629)

The current input modality: 'kmt' (mouse), 'trackpad', or 'TBD' (to be determined)

***

### setInitialCursorPosition()

> **setInitialCursorPosition**: (`position`) => `void`

定義於: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:615](https://github.com/ue-too/ue-too/blob/feb7c80222df5d3cd97bfa1933bafe3190c6e48d/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L615)

Sets the initial cursor position when starting a pan gesture

#### 參數

##### position

`Point`

#### 回傳

`void`

***

### setMode()

> **setMode**: (`mode`) => `void`

定義於: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:627](https://github.com/ue-too/ue-too/blob/feb7c80222df5d3cd97bfa1933bafe3190c6e48d/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L627)

Sets the determined input modality

#### 參數

##### mode

`"kmt"` | `"trackpad"` | `"TBD"`

#### 回傳

`void`

***

### subtractKmtTrackpadTrackScore()

> **subtractKmtTrackpadTrackScore**: () => `void`

定義於: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:623](https://github.com/ue-too/ue-too/blob/feb7c80222df5d3cd97bfa1933bafe3190c6e48d/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L623)

Decreases the score toward trackpad

#### 回傳

`void`

## 方法

### cleanup()

> **cleanup**(): `void`

定義於: packages/being/dist/interface.d.ts:31

#### 回傳

`void`

#### 繼承自

`BaseContext.cleanup`

***

### setup()

> **setup**(): `void`

定義於: packages/being/dist/interface.d.ts:30

#### 回傳

`void`

#### 繼承自

`BaseContext.setup`
