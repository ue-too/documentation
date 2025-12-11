[@ue-too/board](../globals.md) / CanvasCacheInWebWorker

# Class: CanvasCacheInWebWorker

Defined in: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:45](https://github.com/ue-too/ue-too/blob/6e9c66b5f3b3ab9f9b176d974bbf941b3420f5e1/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L45)

## Description

A proxy for the canvas so that client code that needs to access 
the canvas dimensions and position does not need to access the DOM directly.

## Implements

- [`Canvas`](../interfaces/Canvas.md)

## Constructors

### Constructor

> **new CanvasCacheInWebWorker**(`postMessageFunction`): `CanvasCacheInWebWorker`

Defined in: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:52](https://github.com/ue-too/ue-too/blob/6e9c66b5f3b3ab9f9b176d974bbf941b3420f5e1/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L52)

#### Parameters

##### postMessageFunction

\{(`message`, `targetOrigin`, `transfer?`): `void`; (`message`, `options?`): `void`; \}

#### Returns

`CanvasCacheInWebWorker`

## Accessors

### detached

#### Get Signature

> **get** **detached**(): `boolean`

Defined in: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:94](https://github.com/ue-too/ue-too/blob/6e9c66b5f3b3ab9f9b176d974bbf941b3420f5e1/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L94)

##### Returns

`boolean`

#### Implementation of

[`Canvas`](../interfaces/Canvas.md).[`detached`](../interfaces/Canvas.md#detached)

***

### dimensions

#### Get Signature

> **get** **dimensions**(): `object`

Defined in: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:59](https://github.com/ue-too/ue-too/blob/6e9c66b5f3b3ab9f9b176d974bbf941b3420f5e1/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L59)

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

Defined in: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:82](https://github.com/ue-too/ue-too/blob/6e9c66b5f3b3ab9f9b176d974bbf941b3420f5e1/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L82)

##### Returns

`number`

#### Set Signature

> **set** **height**(`height`): `void`

Defined in: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:70](https://github.com/ue-too/ue-too/blob/6e9c66b5f3b3ab9f9b176d974bbf941b3420f5e1/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L70)

##### Parameters

###### height

`number`

##### Returns

`void`

#### Implementation of

[`Canvas`](../interfaces/Canvas.md).[`height`](../interfaces/Canvas.md#height)

***

### position

#### Get Signature

> **get** **position**(): `Point`

Defined in: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:86](https://github.com/ue-too/ue-too/blob/6e9c66b5f3b3ab9f9b176d974bbf941b3420f5e1/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L86)

##### Returns

`Point`

#### Set Signature

> **set** **position**(`position`): `void`

Defined in: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:74](https://github.com/ue-too/ue-too/blob/6e9c66b5f3b3ab9f9b176d974bbf941b3420f5e1/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L74)

##### Parameters

###### position

`Point`

##### Returns

`void`

#### Implementation of

[`Canvas`](../interfaces/Canvas.md).[`position`](../interfaces/Canvas.md#position)

***

### width

#### Get Signature

> **get** **width**(): `number`

Defined in: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:78](https://github.com/ue-too/ue-too/blob/6e9c66b5f3b3ab9f9b176d974bbf941b3420f5e1/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L78)

##### Returns

`number`

#### Set Signature

> **set** **width**(`width`): `void`

Defined in: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:66](https://github.com/ue-too/ue-too/blob/6e9c66b5f3b3ab9f9b176d974bbf941b3420f5e1/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L66)

##### Parameters

###### width

`number`

##### Returns

`void`

#### Implementation of

[`Canvas`](../interfaces/Canvas.md).[`width`](../interfaces/Canvas.md#width)

## Methods

### setCursor()

> **setCursor**(`style`): `void`

Defined in: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:90](https://github.com/ue-too/ue-too/blob/6e9c66b5f3b3ab9f9b176d974bbf941b3420f5e1/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L90)

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

Defined in: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:63](https://github.com/ue-too/ue-too/blob/6e9c66b5f3b3ab9f9b176d974bbf941b3420f5e1/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L63)

#### Returns

`void`

#### Implementation of

[`Canvas`](../interfaces/Canvas.md).[`tearDown`](../interfaces/Canvas.md#teardown)
