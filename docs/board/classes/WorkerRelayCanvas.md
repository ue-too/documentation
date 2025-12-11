[@ue-too/board](../globals.md) / WorkerRelayCanvas

# Class: WorkerRelayCanvas

Defined in: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:244](https://github.com/ue-too/ue-too/blob/407e414f82d0bb1a2a3cfbf5160e331d5a81d8be/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L244)

## Description

A proxy for the canvas that is used to communicate with the web worker.
The primary purpose of this class is to cache the canvas dimensions and position in the DOM to reduce the calling of the getBoundingClientRect method.
This class only serves as a relay of the updated canvas dimensions and position to the web worker.

## Implements

- [`Canvas`](../interfaces/Canvas.md)

## Constructors

### Constructor

> **new WorkerRelayCanvas**(`canvas`, `webWorker`, `canvasDiemsionPublisher`): `WorkerRelayCanvas`

Defined in: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:253](https://github.com/ue-too/ue-too/blob/407e414f82d0bb1a2a3cfbf5160e331d5a81d8be/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L253)

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

Defined in: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:291](https://github.com/ue-too/ue-too/blob/407e414f82d0bb1a2a3cfbf5160e331d5a81d8be/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L291)

##### Returns

`boolean`

#### Implementation of

[`Canvas`](../interfaces/Canvas.md).[`detached`](../interfaces/Canvas.md#detached)

***

### dimensions

#### Get Signature

> **get** **dimensions**(): `object`

Defined in: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:287](https://github.com/ue-too/ue-too/blob/407e414f82d0bb1a2a3cfbf5160e331d5a81d8be/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L287)

##### Returns

`object`

###### height

> **height**: `number`

###### position

> **position**: `Point`

###### width

> **width**: `number`

#### Implementation of

[`Canvas`](../interfaces/Canvas.md).[`dimensions`](../interfaces/Canvas.md#dimensions)

***

### height

#### Get Signature

> **get** **height**(): `number`

Defined in: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:275](https://github.com/ue-too/ue-too/blob/407e414f82d0bb1a2a3cfbf5160e331d5a81d8be/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L275)

##### Returns

`number`

#### Implementation of

[`Canvas`](../interfaces/Canvas.md).[`height`](../interfaces/Canvas.md#height)

***

### position

#### Get Signature

> **get** **position**(): `Point`

Defined in: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:283](https://github.com/ue-too/ue-too/blob/407e414f82d0bb1a2a3cfbf5160e331d5a81d8be/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L283)

##### Returns

`Point`

#### Implementation of

[`Canvas`](../interfaces/Canvas.md).[`position`](../interfaces/Canvas.md#position)

***

### width

#### Get Signature

> **get** **width**(): `number`

Defined in: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:271](https://github.com/ue-too/ue-too/blob/407e414f82d0bb1a2a3cfbf5160e331d5a81d8be/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L271)

##### Returns

`number`

#### Implementation of

[`Canvas`](../interfaces/Canvas.md).[`width`](../interfaces/Canvas.md#width)

## Methods

### setCursor()

> **setCursor**(`style`): `void`

Defined in: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:295](https://github.com/ue-too/ue-too/blob/407e414f82d0bb1a2a3cfbf5160e331d5a81d8be/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L295)

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

Defined in: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:279](https://github.com/ue-too/ue-too/blob/407e414f82d0bb1a2a3cfbf5160e331d5a81d8be/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L279)

#### Returns

`void`

#### Implementation of

[`Canvas`](../interfaces/Canvas.md).[`tearDown`](../interfaces/Canvas.md#teardown)
