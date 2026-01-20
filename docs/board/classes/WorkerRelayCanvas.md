[@ue-too/board](../globals.md) / WorkerRelayCanvas

# Class: WorkerRelayCanvas

Defined in: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:450](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L450)

## Description

A proxy for the canvas that is used to communicate with the web worker.
The primary purpose of this class is to cache the canvas dimensions and position in the DOM to reduce the calling of the getBoundingClientRect method.
This class only serves as a relay of the updated canvas dimensions and position to the web worker.

## Implements

- [`Canvas`](../interfaces/Canvas.md)

## Constructors

### Constructor

> **new WorkerRelayCanvas**(`canvas`, `webWorker`, `canvasDiemsionPublisher`): `WorkerRelayCanvas`

Defined in: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:459](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L459)

#### Parameters

##### canvas

`HTMLCanvasElement`

##### webWorker

`Worker`

##### canvasDiemsionPublisher

[`CanvasPositionDimensionPublisher`](CanvasPositionDimensionPublisher.md)

#### Returns

`WorkerRelayCanvas`

## Accessors

### detached

#### Get Signature

> **get** **detached**(): `boolean`

Defined in: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:497](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L497)

Whether the canvas is currently detached from the DOM

##### Returns

`boolean`

Whether the canvas is currently detached from the DOM

#### Implementation of

[`Canvas`](../interfaces/Canvas.md).[`detached`](../interfaces/Canvas.md#detached)

***

### dimensions

#### Get Signature

> **get** **dimensions**(): `object`

Defined in: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:493](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L493)

Combined dimensions and position information

##### Returns

`object`

###### height

> **height**: `number`

###### position

> **position**: `Point`

###### width

> **width**: `number`

Combined dimensions and position information

#### Implementation of

[`Canvas`](../interfaces/Canvas.md).[`dimensions`](../interfaces/Canvas.md#dimensions)

***

### height

#### Get Signature

> **get** **height**(): `number`

Defined in: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:481](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L481)

The canvas height in CSS pixels

##### Returns

`number`

The canvas height in CSS pixels

#### Implementation of

[`Canvas`](../interfaces/Canvas.md).[`height`](../interfaces/Canvas.md#height)

***

### position

#### Get Signature

> **get** **position**(): `Point`

Defined in: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:489](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L489)

The top-left position of the canvas in window coordinates

##### Returns

`Point`

The top-left position of the canvas in window coordinates

#### Implementation of

[`Canvas`](../interfaces/Canvas.md).[`position`](../interfaces/Canvas.md#position)

***

### width

#### Get Signature

> **get** **width**(): `number`

Defined in: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:477](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L477)

The canvas width in CSS pixels

##### Returns

`number`

The canvas width in CSS pixels

#### Implementation of

[`Canvas`](../interfaces/Canvas.md).[`width`](../interfaces/Canvas.md#width)

## Methods

### setCursor()

> **setCursor**(`style`): `void`

Defined in: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:501](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L501)

Sets the CSS cursor style for visual feedback

#### Parameters

##### style

`"grab"` | `"default"` | `"grabbing"`

#### Returns

`void`

#### Implementation of

[`Canvas`](../interfaces/Canvas.md).[`setCursor`](../interfaces/Canvas.md#setcursor)

***

### tearDown()

> **tearDown**(): `void`

Defined in: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:485](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L485)

Cleanup method to dispose of resources and event listeners

#### Returns

`void`

#### Implementation of

[`Canvas`](../interfaces/Canvas.md).[`tearDown`](../interfaces/Canvas.md#teardown)
