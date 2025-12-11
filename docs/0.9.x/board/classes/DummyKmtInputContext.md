[@ue-too/board](../globals.md) / DummyKmtInputContext

# Class: DummyKmtInputContext

Defined in: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:324](https://github.com/ue-too/ue-too/blob/fdbfb1431206f8d7c812dca3e1d0dcd7389f1d6d/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L324)

## Description

A dummy implementation of the KmtInputContext interface.
This is specifically for the case where a input state machine that is for the relay of the input events to the web worker.
The input state machine needs a context, but this context does not have any functionality.

## Implements

- [`KmtInputContext`](../interfaces/KmtInputContext.md)

## Constructors

### Constructor

> **new DummyKmtInputContext**(): `DummyKmtInputContext`

Defined in: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:330](https://github.com/ue-too/ue-too/blob/fdbfb1431206f8d7c812dca3e1d0dcd7389f1d6d/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L330)

#### Returns

`DummyKmtInputContext`

## Properties

### alignCoordinateSystem

> **alignCoordinateSystem**: `boolean` = `false`

Defined in: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:326](https://github.com/ue-too/ue-too/blob/fdbfb1431206f8d7c812dca3e1d0dcd7389f1d6d/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L326)

#### Implementation of

[`KmtInputContext`](../interfaces/KmtInputContext.md).[`alignCoordinateSystem`](../interfaces/KmtInputContext.md#aligncoordinatesystem)

***

### canvas

> **canvas**: [`Canvas`](../interfaces/Canvas.md)

Defined in: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:327](https://github.com/ue-too/ue-too/blob/fdbfb1431206f8d7c812dca3e1d0dcd7389f1d6d/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L327)

#### Implementation of

[`KmtInputContext`](../interfaces/KmtInputContext.md).[`canvas`](../interfaces/KmtInputContext.md#canvas)

***

### initialCursorPosition

> **initialCursorPosition**: `Point`

Defined in: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:328](https://github.com/ue-too/ue-too/blob/fdbfb1431206f8d7c812dca3e1d0dcd7389f1d6d/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L328)

#### Implementation of

[`KmtInputContext`](../interfaces/KmtInputContext.md).[`initialCursorPosition`](../interfaces/KmtInputContext.md#initialcursorposition)

***

### setCursorPosition()

> **setCursorPosition**: (`position`) => `void` = `NO_OP`

Defined in: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:336](https://github.com/ue-too/ue-too/blob/fdbfb1431206f8d7c812dca3e1d0dcd7389f1d6d/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L336)

#### Parameters

##### position

`Point`

#### Returns

`void`

#### Implementation of

[`KmtInputContext`](../interfaces/KmtInputContext.md).[`setCursorPosition`](../interfaces/KmtInputContext.md#setcursorposition)

***

### toggleOffEdgeAutoCameraInput()

> **toggleOffEdgeAutoCameraInput**: () => `void` = `NO_OP`

Defined in: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:335](https://github.com/ue-too/ue-too/blob/fdbfb1431206f8d7c812dca3e1d0dcd7389f1d6d/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L335)

#### Returns

`void`

#### Implementation of

[`KmtInputContext`](../interfaces/KmtInputContext.md).[`toggleOffEdgeAutoCameraInput`](../interfaces/KmtInputContext.md#toggleoffedgeautocamerainput)

***

### toggleOnEdgeAutoCameraInput()

> **toggleOnEdgeAutoCameraInput**: () => `void` = `NO_OP`

Defined in: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:334](https://github.com/ue-too/ue-too/blob/fdbfb1431206f8d7c812dca3e1d0dcd7389f1d6d/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L334)

#### Returns

`void`

#### Implementation of

[`KmtInputContext`](../interfaces/KmtInputContext.md).[`toggleOnEdgeAutoCameraInput`](../interfaces/KmtInputContext.md#toggleonedgeautocamerainput)

## Methods

### cancelCurrentAction()

> **cancelCurrentAction**(): `void`

Defined in: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:356](https://github.com/ue-too/ue-too/blob/fdbfb1431206f8d7c812dca3e1d0dcd7389f1d6d/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L356)

#### Returns

`void`

#### Implementation of

[`KmtInputContext`](../interfaces/KmtInputContext.md).[`cancelCurrentAction`](../interfaces/KmtInputContext.md#cancelcurrentaction)

***

### cleanup()

> **cleanup**(): `void`

Defined in: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:350](https://github.com/ue-too/ue-too/blob/fdbfb1431206f8d7c812dca3e1d0dcd7389f1d6d/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L350)

#### Returns

`void`

#### Implementation of

[`KmtInputContext`](../interfaces/KmtInputContext.md).[`cleanup`](../interfaces/KmtInputContext.md#cleanup)

***

### notifyOnPan()

> **notifyOnPan**(`delta`): `void`

Defined in: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:338](https://github.com/ue-too/ue-too/blob/fdbfb1431206f8d7c812dca3e1d0dcd7389f1d6d/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L338)

#### Parameters

##### delta

`Point`

#### Returns

`void`

#### Implementation of

[`KmtInputContext`](../interfaces/KmtInputContext.md).[`notifyOnPan`](../interfaces/KmtInputContext.md#notifyonpan)

***

### notifyOnRotate()

> **notifyOnRotate**(`deltaRotation`): `void`

Defined in: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:344](https://github.com/ue-too/ue-too/blob/fdbfb1431206f8d7c812dca3e1d0dcd7389f1d6d/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L344)

#### Parameters

##### deltaRotation

`number`

#### Returns

`void`

#### Implementation of

[`KmtInputContext`](../interfaces/KmtInputContext.md).[`notifyOnRotate`](../interfaces/KmtInputContext.md#notifyonrotate)

***

### notifyOnZoom()

> **notifyOnZoom**(`zoomAmount`, `anchorPoint`): `void`

Defined in: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:341](https://github.com/ue-too/ue-too/blob/fdbfb1431206f8d7c812dca3e1d0dcd7389f1d6d/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L341)

#### Parameters

##### zoomAmount

`number`

##### anchorPoint

`Point`

#### Returns

`void`

#### Implementation of

[`KmtInputContext`](../interfaces/KmtInputContext.md).[`notifyOnZoom`](../interfaces/KmtInputContext.md#notifyonzoom)

***

### setInitialCursorPosition()

> **setInitialCursorPosition**(`position`): `void`

Defined in: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:347](https://github.com/ue-too/ue-too/blob/fdbfb1431206f8d7c812dca3e1d0dcd7389f1d6d/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L347)

#### Parameters

##### position

`Point`

#### Returns

`void`

#### Implementation of

[`KmtInputContext`](../interfaces/KmtInputContext.md).[`setInitialCursorPosition`](../interfaces/KmtInputContext.md#setinitialcursorposition)

***

### setup()

> **setup**(): `void`

Defined in: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:353](https://github.com/ue-too/ue-too/blob/fdbfb1431206f8d7c812dca3e1d0dcd7389f1d6d/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L353)

#### Returns

`void`

#### Implementation of

[`KmtInputContext`](../interfaces/KmtInputContext.md).[`setup`](../interfaces/KmtInputContext.md#setup)
