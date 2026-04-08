[@ue-too/board](../../modules.md) / [index](../index.md) / DummyKmtInputContext

# クラス: DummyKmtInputContext

定義: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:646](https://github.com/ue-too/ue-too/blob/feb7c80222df5d3cd97bfa1933bafe3190c6e48d/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L646)

No-op implementation of KmtInputContext for web worker relay scenarios.

## Remarks

Used when the input state machine is configured to relay events to a web worker
rather than process them locally. The state machine requires a context, but in
the relay scenario, no actual state tracking is needed - events are simply forwarded.

All methods are no-ops and all properties return default values.

## 参照

[DummyCanvas](DummyCanvas.md)

## 実装

- [`KmtInputContext`](../interfaces/KmtInputContext.md)

## コンストラクター

### コンストラクター

> **new DummyKmtInputContext**(): `DummyKmtInputContext`

定義: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:651](https://github.com/ue-too/ue-too/blob/feb7c80222df5d3cd97bfa1933bafe3190c6e48d/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L651)

#### 戻り値

`DummyKmtInputContext`

## プロパティ

### alignCoordinateSystem

> **alignCoordinateSystem**: `boolean` = `false`

定義: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:647](https://github.com/ue-too/ue-too/blob/feb7c80222df5d3cd97bfa1933bafe3190c6e48d/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L647)

Whether to use standard screen coordinate system (vs inverted Y-axis)

#### の実装

[`KmtInputContext`](../interfaces/KmtInputContext.md).[`alignCoordinateSystem`](../interfaces/KmtInputContext.md#aligncoordinatesystem)

***

### canvas

> **canvas**: [`Canvas`](../interfaces/Canvas.md)

定義: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:648](https://github.com/ue-too/ue-too/blob/feb7c80222df5d3cd97bfa1933bafe3190c6e48d/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L648)

Canvas accessor for dimensions and cursor control

#### の実装

[`KmtInputContext`](../interfaces/KmtInputContext.md).[`canvas`](../interfaces/KmtInputContext.md#canvas)

***

### initialCursorPosition

> **initialCursorPosition**: `Point`

定義: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:649](https://github.com/ue-too/ue-too/blob/feb7c80222df5d3cd97bfa1933bafe3190c6e48d/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L649)

The cursor position when a pan gesture started

#### の実装

[`KmtInputContext`](../interfaces/KmtInputContext.md).[`initialCursorPosition`](../interfaces/KmtInputContext.md#initialcursorposition)

***

### setCursorPosition()

> **setCursorPosition**: (`position`) => `void` = `NO_OP`

定義: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:655](https://github.com/ue-too/ue-too/blob/feb7c80222df5d3cd97bfa1933bafe3190c6e48d/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L655)

#### パラメータ

##### position

`Point`

#### 戻り値

`void`

***

### toggleOffEdgeAutoCameraInput()

> **toggleOffEdgeAutoCameraInput**: () => `void` = `NO_OP`

定義: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:654](https://github.com/ue-too/ue-too/blob/feb7c80222df5d3cd97bfa1933bafe3190c6e48d/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L654)

#### 戻り値

`void`

***

### toggleOnEdgeAutoCameraInput()

> **toggleOnEdgeAutoCameraInput**: () => `void` = `NO_OP`

定義: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:653](https://github.com/ue-too/ue-too/blob/feb7c80222df5d3cd97bfa1933bafe3190c6e48d/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L653)

#### 戻り値

`void`

## アクセッサー

### kmtTrackpadTrackScore

#### 署名を取得する

> **get** **kmtTrackpadTrackScore**(): `number`

定義: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:663](https://github.com/ue-too/ue-too/blob/feb7c80222df5d3cd97bfa1933bafe3190c6e48d/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L663)

Score tracking input modality: >0 for mouse, <0 for trackpad, 0 for undetermined

##### 戻り値

`number`

Score tracking input modality: >0 for mouse, <0 for trackpad, 0 for undetermined

#### の実装

[`KmtInputContext`](../interfaces/KmtInputContext.md).[`kmtTrackpadTrackScore`](../interfaces/KmtInputContext.md#kmttrackpadtrackscore)

***

### mode

#### 署名を取得する

> **get** **mode**(): `"kmt"` \| `"trackpad"` \| `"TBD"`

定義: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:673](https://github.com/ue-too/ue-too/blob/feb7c80222df5d3cd97bfa1933bafe3190c6e48d/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L673)

The current input modality: 'kmt' (mouse), 'trackpad', or 'TBD' (to be determined)

##### 戻り値

`"kmt"` \| `"trackpad"` \| `"TBD"`

The current input modality: 'kmt' (mouse), 'trackpad', or 'TBD' (to be determined)

#### の実装

[`KmtInputContext`](../interfaces/KmtInputContext.md).[`mode`](../interfaces/KmtInputContext.md#mode)

## メソッド

### addKmtTrackpadTrackScore()

> **addKmtTrackpadTrackScore**(): `void`

定義: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:669](https://github.com/ue-too/ue-too/blob/feb7c80222df5d3cd97bfa1933bafe3190c6e48d/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L669)

Increases the score toward mouse

#### 戻り値

`void`

#### の実装

[`KmtInputContext`](../interfaces/KmtInputContext.md).[`addKmtTrackpadTrackScore`](../interfaces/KmtInputContext.md#addkmttrackpadtrackscore)

***

### cancelCurrentAction()

> **cancelCurrentAction**(): `void`

定義: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:677](https://github.com/ue-too/ue-too/blob/feb7c80222df5d3cd97bfa1933bafe3190c6e48d/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L677)

Cancels the current action and resets cursor position

#### 戻り値

`void`

#### の実装

[`KmtInputContext`](../interfaces/KmtInputContext.md).[`cancelCurrentAction`](../interfaces/KmtInputContext.md#cancelcurrentaction)

***

### cleanup()

> **cleanup**(): `void`

定義: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:659](https://github.com/ue-too/ue-too/blob/feb7c80222df5d3cd97bfa1933bafe3190c6e48d/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L659)

#### 戻り値

`void`

#### の実装

[`KmtInputContext`](../interfaces/KmtInputContext.md).[`cleanup`](../interfaces/KmtInputContext.md#cleanup)

***

### setInitialCursorPosition()

> **setInitialCursorPosition**(`position`): `void`

定義: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:657](https://github.com/ue-too/ue-too/blob/feb7c80222df5d3cd97bfa1933bafe3190c6e48d/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L657)

Sets the initial cursor position when starting a pan gesture

#### パラメータ

##### position

`Point`

#### 戻り値

`void`

#### の実装

[`KmtInputContext`](../interfaces/KmtInputContext.md).[`setInitialCursorPosition`](../interfaces/KmtInputContext.md#setinitialcursorposition)

***

### setMode()

> **setMode**(`mode`): `void`

定義: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:671](https://github.com/ue-too/ue-too/blob/feb7c80222df5d3cd97bfa1933bafe3190c6e48d/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L671)

Sets the determined input modality

#### パラメータ

##### mode

`"kmt"` | `"trackpad"` | `"TBD"`

#### 戻り値

`void`

#### の実装

[`KmtInputContext`](../interfaces/KmtInputContext.md).[`setMode`](../interfaces/KmtInputContext.md#setmode)

***

### setup()

> **setup**(): `void`

定義: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:661](https://github.com/ue-too/ue-too/blob/feb7c80222df5d3cd97bfa1933bafe3190c6e48d/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L661)

#### 戻り値

`void`

#### の実装

[`KmtInputContext`](../interfaces/KmtInputContext.md).[`setup`](../interfaces/KmtInputContext.md#setup)

***

### subtractKmtTrackpadTrackScore()

> **subtractKmtTrackpadTrackScore**(): `void`

定義: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:667](https://github.com/ue-too/ue-too/blob/feb7c80222df5d3cd97bfa1933bafe3190c6e48d/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L667)

Decreases the score toward trackpad

#### 戻り値

`void`

#### の実装

[`KmtInputContext`](../interfaces/KmtInputContext.md).[`subtractKmtTrackpadTrackScore`](../interfaces/KmtInputContext.md#subtractkmttrackpadtrackscore)
