[@ue-too/board](../globals.md) / DummyCanvas

# Class: DummyCanvas

Defined in: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:35](https://github.com/ue-too/ue-too/blob/fdbfb1431206f8d7c812dca3e1d0dcd7389f1d6d/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L35)

## Description

A dummy implementation of the CanvasOperator interface. 
This is specifically for the case where a input state machine that is for the relay of the input events to the web worker.
The input state machine needs a canvas operator in its context, but this context does not have any functionality.

## See

DummyKmtInputContext

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

Defined in: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:41](https://github.com/ue-too/ue-too/blob/fdbfb1431206f8d7c812dca3e1d0dcd7389f1d6d/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L41)

#### Implementation of

[`Canvas`](../interfaces/Canvas.md).[`detached`](../interfaces/Canvas.md#detached)

***

### dimensions

> **dimensions**: `object`

Defined in: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:40](https://github.com/ue-too/ue-too/blob/fdbfb1431206f8d7c812dca3e1d0dcd7389f1d6d/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L40)

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

Defined in: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:37](https://github.com/ue-too/ue-too/blob/fdbfb1431206f8d7c812dca3e1d0dcd7389f1d6d/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L37)

#### Implementation of

[`Canvas`](../interfaces/Canvas.md).[`height`](../interfaces/Canvas.md#height)

***

### position

> **position**: `Point`

Defined in: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:38](https://github.com/ue-too/ue-too/blob/fdbfb1431206f8d7c812dca3e1d0dcd7389f1d6d/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L38)

#### Implementation of

[`Canvas`](../interfaces/Canvas.md).[`position`](../interfaces/Canvas.md#position)

***

### setCursor()

> **setCursor**: (`style`) => `void` = `NO_OP`

Defined in: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:39](https://github.com/ue-too/ue-too/blob/fdbfb1431206f8d7c812dca3e1d0dcd7389f1d6d/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L39)

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

Defined in: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:42](https://github.com/ue-too/ue-too/blob/fdbfb1431206f8d7c812dca3e1d0dcd7389f1d6d/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L42)

#### Returns

`void`

#### Implementation of

[`Canvas`](../interfaces/Canvas.md).[`tearDown`](../interfaces/Canvas.md#teardown)

***

### width

> **width**: `number` = `0`

Defined in: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:36](https://github.com/ue-too/ue-too/blob/fdbfb1431206f8d7c812dca3e1d0dcd7389f1d6d/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L36)

#### Implementation of

[`Canvas`](../interfaces/Canvas.md).[`width`](../interfaces/Canvas.md#width)
