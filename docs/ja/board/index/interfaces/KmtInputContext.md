[@ue-too/board](../../modules.md) / [index](../index.md) / KmtInputContext

# インターフェイス: KmtInputContext

定義: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:609](https://github.com/ue-too/ue-too/blob/79a36cf61d861e6b4e3302e81111636c6082a3db/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L609)

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

## 拡張

- `BaseContext`

## プロパティ

### addKmtTrackpadTrackScore()

> **addKmtTrackpadTrackScore**: () => `void`

定義: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:625](https://github.com/ue-too/ue-too/blob/79a36cf61d861e6b4e3302e81111636c6082a3db/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L625)

Increases the score toward mouse

#### 戻り値

`void`

***

### alignCoordinateSystem

> **alignCoordinateSystem**: `boolean`

定義: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:611](https://github.com/ue-too/ue-too/blob/79a36cf61d861e6b4e3302e81111636c6082a3db/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L611)

Whether to use standard screen coordinate system (vs inverted Y-axis)

***

### cancelCurrentAction()

> **cancelCurrentAction**: () => `void`

定義: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:617](https://github.com/ue-too/ue-too/blob/79a36cf61d861e6b4e3302e81111636c6082a3db/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L617)

Cancels the current action and resets cursor position

#### 戻り値

`void`

***

### canvas

> **canvas**: [`Canvas`](Canvas.md)

定義: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:613](https://github.com/ue-too/ue-too/blob/79a36cf61d861e6b4e3302e81111636c6082a3db/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L613)

Canvas accessor for dimensions and cursor control

***

### initialCursorPosition

> **initialCursorPosition**: `Point`

定義: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:619](https://github.com/ue-too/ue-too/blob/79a36cf61d861e6b4e3302e81111636c6082a3db/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L619)

The cursor position when a pan gesture started

***

### kmtTrackpadTrackScore

> **kmtTrackpadTrackScore**: `number`

定義: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:621](https://github.com/ue-too/ue-too/blob/79a36cf61d861e6b4e3302e81111636c6082a3db/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L621)

Score tracking input modality: >0 for mouse, <0 for trackpad, 0 for undetermined

***

### mode

> **mode**: `"kmt"` \| `"trackpad"` \| `"TBD"`

定義: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:629](https://github.com/ue-too/ue-too/blob/79a36cf61d861e6b4e3302e81111636c6082a3db/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L629)

The current input modality: 'kmt' (mouse), 'trackpad', or 'TBD' (to be determined)

***

### setInitialCursorPosition()

> **setInitialCursorPosition**: (`position`) => `void`

定義: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:615](https://github.com/ue-too/ue-too/blob/79a36cf61d861e6b4e3302e81111636c6082a3db/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L615)

Sets the initial cursor position when starting a pan gesture

#### パラメータ

##### position

`Point`

#### 戻り値

`void`

***

### setMode()

> **setMode**: (`mode`) => `void`

定義: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:627](https://github.com/ue-too/ue-too/blob/79a36cf61d861e6b4e3302e81111636c6082a3db/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L627)

Sets the determined input modality

#### パラメータ

##### mode

`"kmt"` | `"trackpad"` | `"TBD"`

#### 戻り値

`void`

***

### subtractKmtTrackpadTrackScore()

> **subtractKmtTrackpadTrackScore**: () => `void`

定義: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:623](https://github.com/ue-too/ue-too/blob/79a36cf61d861e6b4e3302e81111636c6082a3db/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L623)

Decreases the score toward trackpad

#### 戻り値

`void`

## メソッド

### cleanup()

> **cleanup**(): `void`

定義: packages/being/dist/interface.d.ts:31

#### 戻り値

`void`

#### 継承元

`BaseContext.cleanup`

***

### setup()

> **setup**(): `void`

定義: packages/being/dist/interface.d.ts:30

#### 戻り値

`void`

#### 継承元

`BaseContext.setup`
