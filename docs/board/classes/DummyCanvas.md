[@ue-too/board](../globals.md) / DummyCanvas

# Class: DummyCanvas

Defined in: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:85](https://github.com/ue-too/ue-too/blob/1055c6abca1ea3a0e952b0825f36e0ca2527df85/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L85)

No-op implementation of Canvas interface for web worker relay contexts.

## Remarks

This class is used when an input state machine is configured to relay events to a web worker
rather than perform actual canvas operations. The state machine requires a Canvas in its context,
but in the relay scenario, no actual canvas operations are needed - events are simply forwarded
to the worker thread.

All properties return default/empty values and all methods are no-ops.

## See

[DummyKmtInputContext](DummyKmtInputContext.md)

## Implements

- [`Canvas`](../interfaces/Canvas.md)

## Constructors

### Constructor

> **new DummyCanvas**(): `DummyCanvas`

#### Returns

`DummyCanvas`

## Properties

### detached

> **detached**: `boolean` = `false`

Defined in: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:91](https://github.com/ue-too/ue-too/blob/1055c6abca1ea3a0e952b0825f36e0ca2527df85/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L91)

Whether the canvas is currently detached from the DOM

#### Implementation of

[`Canvas`](../interfaces/Canvas.md).[`detached`](../interfaces/Canvas.md#detached)

***

### dimensions

> **dimensions**: `object`

Defined in: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:90](https://github.com/ue-too/ue-too/blob/1055c6abca1ea3a0e952b0825f36e0ca2527df85/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L90)

Combined dimensions and position information

#### height

> **height**: `number`

#### position

> **position**: `Point`

#### width

> **width**: `number`

#### Implementation of

[`Canvas`](../interfaces/Canvas.md).[`dimensions`](../interfaces/Canvas.md#dimensions)

***

### height

> **height**: `number` = `0`

Defined in: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:87](https://github.com/ue-too/ue-too/blob/1055c6abca1ea3a0e952b0825f36e0ca2527df85/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L87)

The canvas height in CSS pixels

#### Implementation of

[`Canvas`](../interfaces/Canvas.md).[`height`](../interfaces/Canvas.md#height)

***

### position

> **position**: `Point`

Defined in: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:88](https://github.com/ue-too/ue-too/blob/1055c6abca1ea3a0e952b0825f36e0ca2527df85/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L88)

The top-left position of the canvas in window coordinates

#### Implementation of

[`Canvas`](../interfaces/Canvas.md).[`position`](../interfaces/Canvas.md#position)

***

### setCursor()

> **setCursor**: (`style`) => `void` = `NO_OP`

Defined in: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:89](https://github.com/ue-too/ue-too/blob/1055c6abca1ea3a0e952b0825f36e0ca2527df85/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L89)

Sets the CSS cursor style for visual feedback

#### Parameters

##### style

[`CursorStyle`](../enumerations/CursorStyle.md)

#### Returns

`void`

#### Implementation of

[`Canvas`](../interfaces/Canvas.md).[`setCursor`](../interfaces/Canvas.md#setcursor)

***

### tearDown()

> **tearDown**: () => `void` = `NO_OP`

Defined in: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:92](https://github.com/ue-too/ue-too/blob/1055c6abca1ea3a0e952b0825f36e0ca2527df85/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L92)

Cleanup method to dispose of resources and event listeners

#### Returns

`void`

#### Implementation of

[`Canvas`](../interfaces/Canvas.md).[`tearDown`](../interfaces/Canvas.md#teardown)

***

### width

> **width**: `number` = `0`

Defined in: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:86](https://github.com/ue-too/ue-too/blob/1055c6abca1ea3a0e952b0825f36e0ca2527df85/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L86)

The canvas width in CSS pixels

#### Implementation of

[`Canvas`](../interfaces/Canvas.md).[`width`](../interfaces/Canvas.md#width)
