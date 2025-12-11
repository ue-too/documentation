[@ue-too/board](../globals.md) / ObservableInputTracker

# Class: ObservableInputTracker

Defined in: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:366](https://github.com/ue-too/ue-too/blob/c02efc01f7c19f3efc21823d0489e987a3e92427/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L366)

## Description

The observable input tracker.
This is used as the context for the keyboard mouse and trackpad input state machine.

## Implements

- [`KmtInputContext`](../interfaces/KmtInputContext.md)

## Constructors

### Constructor

> **new ObservableInputTracker**(`canvasOperator`, `inputPublisher`, `edgeAutoCameraInput`): `ObservableInputTracker`

Defined in: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:375](https://github.com/ue-too/ue-too/blob/c02efc01f7c19f3efc21823d0489e987a3e92427/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L375)

#### Parameters

##### canvasOperator

[`Canvas`](../interfaces/Canvas.md)

##### inputPublisher

[`UserInputPublisher`](../interfaces/UserInputPublisher.md)

##### edgeAutoCameraInput

[`EdgeAutoCameraInput`](EdgeAutoCameraInput.md)

#### Returns

`ObservableInputTracker`

## Accessors

### alignCoordinateSystem

#### Get Signature

> **get** **alignCoordinateSystem**(): `boolean`

Defined in: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:383](https://github.com/ue-too/ue-too/blob/c02efc01f7c19f3efc21823d0489e987a3e92427/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L383)

##### Returns

`boolean`

#### Set Signature

> **set** **alignCoordinateSystem**(`value`): `void`

Defined in: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:395](https://github.com/ue-too/ue-too/blob/c02efc01f7c19f3efc21823d0489e987a3e92427/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L395)

##### Parameters

###### value

`boolean`

##### Returns

`void`

#### Implementation of

[`KmtInputContext`](../interfaces/KmtInputContext.md).[`alignCoordinateSystem`](../interfaces/KmtInputContext.md#aligncoordinatesystem)

***

### canvas

#### Get Signature

> **get** **canvas**(): [`Canvas`](../interfaces/Canvas.md)

Defined in: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:387](https://github.com/ue-too/ue-too/blob/c02efc01f7c19f3efc21823d0489e987a3e92427/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L387)

##### Returns

[`Canvas`](../interfaces/Canvas.md)

#### Implementation of

[`KmtInputContext`](../interfaces/KmtInputContext.md).[`canvas`](../interfaces/KmtInputContext.md#canvas)

***

### initialCursorPosition

#### Get Signature

> **get** **initialCursorPosition**(): `Point`

Defined in: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:391](https://github.com/ue-too/ue-too/blob/c02efc01f7c19f3efc21823d0489e987a3e92427/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L391)

##### Returns

`Point`

#### Implementation of

[`KmtInputContext`](../interfaces/KmtInputContext.md).[`initialCursorPosition`](../interfaces/KmtInputContext.md#initialcursorposition)

## Methods

### cancelCurrentAction()

> **cancelCurrentAction**(): `void`

Defined in: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:411](https://github.com/ue-too/ue-too/blob/c02efc01f7c19f3efc21823d0489e987a3e92427/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L411)

#### Returns

`void`

#### Implementation of

[`KmtInputContext`](../interfaces/KmtInputContext.md).[`cancelCurrentAction`](../interfaces/KmtInputContext.md#cancelcurrentaction)

***

### cleanup()

> **cleanup**(): `void`

Defined in: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:437](https://github.com/ue-too/ue-too/blob/c02efc01f7c19f3efc21823d0489e987a3e92427/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L437)

#### Returns

`void`

#### Implementation of

[`KmtInputContext`](../interfaces/KmtInputContext.md).[`cleanup`](../interfaces/KmtInputContext.md#cleanup)

***

### notifyOnPan()

> **notifyOnPan**(`delta`): `void`

Defined in: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:399](https://github.com/ue-too/ue-too/blob/c02efc01f7c19f3efc21823d0489e987a3e92427/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L399)

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

Defined in: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:407](https://github.com/ue-too/ue-too/blob/c02efc01f7c19f3efc21823d0489e987a3e92427/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L407)

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

Defined in: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:403](https://github.com/ue-too/ue-too/blob/c02efc01f7c19f3efc21823d0489e987a3e92427/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L403)

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

### setCursorPosition()

> **setCursorPosition**(`position`): `void`

Defined in: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:427](https://github.com/ue-too/ue-too/blob/c02efc01f7c19f3efc21823d0489e987a3e92427/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L427)

#### Parameters

##### position

`Point`

#### Returns

`void`

#### Implementation of

[`KmtInputContext`](../interfaces/KmtInputContext.md).[`setCursorPosition`](../interfaces/KmtInputContext.md#setcursorposition)

***

### setInitialCursorPosition()

> **setInitialCursorPosition**(`position`): `void`

Defined in: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:415](https://github.com/ue-too/ue-too/blob/c02efc01f7c19f3efc21823d0489e987a3e92427/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L415)

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

Defined in: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:440](https://github.com/ue-too/ue-too/blob/c02efc01f7c19f3efc21823d0489e987a3e92427/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L440)

#### Returns

`void`

#### Implementation of

[`KmtInputContext`](../interfaces/KmtInputContext.md).[`setup`](../interfaces/KmtInputContext.md#setup)

***

### toggleOffEdgeAutoCameraInput()

> **toggleOffEdgeAutoCameraInput**(): `void`

Defined in: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:423](https://github.com/ue-too/ue-too/blob/c02efc01f7c19f3efc21823d0489e987a3e92427/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L423)

#### Returns

`void`

#### Implementation of

[`KmtInputContext`](../interfaces/KmtInputContext.md).[`toggleOffEdgeAutoCameraInput`](../interfaces/KmtInputContext.md#toggleoffedgeautocamerainput)

***

### toggleOnEdgeAutoCameraInput()

> **toggleOnEdgeAutoCameraInput**(): `void`

Defined in: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:419](https://github.com/ue-too/ue-too/blob/c02efc01f7c19f3efc21823d0489e987a3e92427/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L419)

#### Returns

`void`

#### Implementation of

[`KmtInputContext`](../interfaces/KmtInputContext.md).[`toggleOnEdgeAutoCameraInput`](../interfaces/KmtInputContext.md#toggleonedgeautocamerainput)
