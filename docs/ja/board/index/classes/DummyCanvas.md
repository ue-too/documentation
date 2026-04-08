[@ue-too/board](../../modules.md) / [index](../index.md) / DummyCanvas

# クラス: DummyCanvas

定義: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:98](https://github.com/ue-too/ue-too/blob/7d57cce875ed7b8a4f4ee4e325a18e34159928f6/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L98)

No-op implementation of Canvas interface for web worker relay contexts.

## Remarks

This class is used when an input state machine is configured to relay events to a web worker
rather than perform actual canvas operations. The state machine requires a Canvas in its context,
but in the relay scenario, no actual canvas operations are needed - events are simply forwarded
to the worker thread.

All properties return default/empty values and all methods are no-ops.

## 参照

[DummyKmtInputContext](DummyKmtInputContext.md)

## 実装

- [`Canvas`](../interfaces/Canvas.md)

## コンストラクター

### コンストラクター

> **new DummyCanvas**(): `DummyCanvas`

#### 戻り値

`DummyCanvas`

## プロパティ

### detached

> **detached**: `boolean` = `false`

定義: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:108](https://github.com/ue-too/ue-too/blob/7d57cce875ed7b8a4f4ee4e325a18e34159928f6/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L108)

Whether the canvas is currently detached from the DOM

#### の実装

[`Canvas`](../interfaces/Canvas.md).[`detached`](../interfaces/Canvas.md#detached)

***

### dimensions

> **dimensions**: `object`

定義: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:103](https://github.com/ue-too/ue-too/blob/7d57cce875ed7b8a4f4ee4e325a18e34159928f6/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L103)

Combined dimensions and position information

#### height

> **height**: `number`

#### position

> **position**: `Point`

#### width

> **width**: `number`

#### の実装

[`Canvas`](../interfaces/Canvas.md).[`dimensions`](../interfaces/Canvas.md#dimensions)

***

### height

> **height**: `number` = `0`

定義: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:100](https://github.com/ue-too/ue-too/blob/7d57cce875ed7b8a4f4ee4e325a18e34159928f6/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L100)

The canvas height in CSS pixels

#### の実装

[`Canvas`](../interfaces/Canvas.md).[`height`](../interfaces/Canvas.md#height)

***

### position

> **position**: `Point`

定義: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:101](https://github.com/ue-too/ue-too/blob/7d57cce875ed7b8a4f4ee4e325a18e34159928f6/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L101)

The top-left position of the canvas in window coordinates

#### の実装

[`Canvas`](../interfaces/Canvas.md).[`position`](../interfaces/Canvas.md#position)

***

### setCursor()

> **setCursor**: (`style`) => `void` = `NO_OP`

定義: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:102](https://github.com/ue-too/ue-too/blob/7d57cce875ed7b8a4f4ee4e325a18e34159928f6/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L102)

Sets the CSS cursor style for visual feedback

#### パラメータ

##### style

[`CursorStyle`](../enumerations/CursorStyle.md)

#### 戻り値

`void`

#### の実装

[`Canvas`](../interfaces/Canvas.md).[`setCursor`](../interfaces/Canvas.md#setcursor)

***

### tearDown()

> **tearDown**: () => `void` = `NO_OP`

定義: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:109](https://github.com/ue-too/ue-too/blob/7d57cce875ed7b8a4f4ee4e325a18e34159928f6/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L109)

Cleanup method to dispose of resources and event listeners

#### 戻り値

`void`

#### の実装

[`Canvas`](../interfaces/Canvas.md).[`tearDown`](../interfaces/Canvas.md#teardown)

***

### width

> **width**: `number` = `0`

定義: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:99](https://github.com/ue-too/ue-too/blob/7d57cce875ed7b8a4f4ee4e325a18e34159928f6/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L99)

The canvas width in CSS pixels

#### の実装

[`Canvas`](../interfaces/Canvas.md).[`width`](../interfaces/Canvas.md#width)
