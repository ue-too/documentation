[@ue-too/board](../globals.md) / CanvasProxy

# Class: CanvasProxy

Defined in: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:99](https://github.com/ue-too/ue-too/blob/e0ad36978d99a0fba62213691fb721d4dca7c035/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L99)

## Description

A proxy for the canvas so that client code that needs to access 
the canvas dimensions and position does not need to access the DOM directly.

## Implements

- [`Canvas`](../interfaces/Canvas.md)
- [`Observable`](../interfaces/Observable.md)\<\[[`CanvasDimensions`](../type-aliases/CanvasDimensions.md)\]\>

## Constructors

### Constructor

> **new CanvasProxy**(`canvas?`): `CanvasProxy`

Defined in: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:108](https://github.com/ue-too/ue-too/blob/e0ad36978d99a0fba62213691fb721d4dca7c035/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L108)

#### Parameters

##### canvas?

`HTMLCanvasElement`

#### Returns

`CanvasProxy`

## Accessors

### detached

#### Get Signature

> **get** **detached**(): `boolean`

Defined in: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:148](https://github.com/ue-too/ue-too/blob/e0ad36978d99a0fba62213691fb721d4dca7c035/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L148)

##### Returns

`boolean`

#### Implementation of

[`Canvas`](../interfaces/Canvas.md).[`detached`](../interfaces/Canvas.md#detached)

***

### dimensions

#### Get Signature

> **get** **dimensions**(): `object`

Defined in: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:152](https://github.com/ue-too/ue-too/blob/e0ad36978d99a0fba62213691fb721d4dca7c035/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L152)

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

Defined in: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:182](https://github.com/ue-too/ue-too/blob/e0ad36978d99a0fba62213691fb721d4dca7c035/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L182)

##### Returns

`number`

#### Implementation of

[`Canvas`](../interfaces/Canvas.md).[`height`](../interfaces/Canvas.md#height)

***

### position

#### Get Signature

> **get** **position**(): `Point`

Defined in: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:186](https://github.com/ue-too/ue-too/blob/e0ad36978d99a0fba62213691fb721d4dca7c035/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L186)

##### Returns

`Point`

#### Implementation of

[`Canvas`](../interfaces/Canvas.md).[`position`](../interfaces/Canvas.md#position)

***

### width

#### Get Signature

> **get** **width**(): `number`

Defined in: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:156](https://github.com/ue-too/ue-too/blob/e0ad36978d99a0fba62213691fb721d4dca7c035/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L156)

##### Returns

`number`

#### Implementation of

[`Canvas`](../interfaces/Canvas.md).[`width`](../interfaces/Canvas.md#width)

## Methods

### attach()

> **attach**(`canvas`): `void`

Defined in: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:204](https://github.com/ue-too/ue-too/blob/e0ad36978d99a0fba62213691fb721d4dca7c035/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L204)

#### Parameters

##### canvas

`HTMLCanvasElement`

#### Returns

`void`

***

### logCanvasTrueSize()

> **logCanvasTrueSize**(): `void`

Defined in: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:223](https://github.com/ue-too/ue-too/blob/e0ad36978d99a0fba62213691fb721d4dca7c035/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L223)

#### Returns

`void`

***

### notify()

> **notify**(...`data`): `void`

Defined in: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:144](https://github.com/ue-too/ue-too/blob/e0ad36978d99a0fba62213691fb721d4dca7c035/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L144)

#### Parameters

##### data

...\[[`CanvasDimensions`](../type-aliases/CanvasDimensions.md)\]

#### Returns

`void`

#### Implementation of

[`Observable`](../interfaces/Observable.md).[`notify`](../interfaces/Observable.md#notify)

***

### setCursor()

> **setCursor**(`style`): `void`

Defined in: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:190](https://github.com/ue-too/ue-too/blob/e0ad36978d99a0fba62213691fb721d4dca7c035/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L190)

#### Parameters

##### style

`"default"` | `"grab"` | `"grabbing"`

#### Returns

`void`

#### Implementation of

[`Canvas`](../interfaces/Canvas.md).[`setCursor`](../interfaces/Canvas.md#setcursor)

***

### setHeight()

> **setHeight**(`height`): `void`

Defined in: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:175](https://github.com/ue-too/ue-too/blob/e0ad36978d99a0fba62213691fb721d4dca7c035/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L175)

set the height of the canvas
the height is synonymous with the canvas style height not the canvas height

#### Parameters

##### height

`number`

#### Returns

`void`

***

### setWidth()

> **setWidth**(`width`): `void`

Defined in: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:164](https://github.com/ue-too/ue-too/blob/e0ad36978d99a0fba62213691fb721d4dca7c035/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L164)

set the width of the canvas
the width is synonymous with the canvas style width not the canvas width

#### Parameters

##### width

`number`

#### Returns

`void`

***

### subscribe()

> **subscribe**(`observer`, `options?`): () => `void`

Defined in: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:140](https://github.com/ue-too/ue-too/blob/e0ad36978d99a0fba62213691fb721d4dca7c035/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L140)

#### Parameters

##### observer

[`Observer`](../type-aliases/Observer.md)\<\[[`CanvasDimensions`](../type-aliases/CanvasDimensions.md)\]\>

##### options?

[`SubscriptionOptions`](../interfaces/SubscriptionOptions.md)

#### Returns

> (): `void`

##### Returns

`void`

#### Implementation of

[`Observable`](../interfaces/Observable.md).[`subscribe`](../interfaces/Observable.md#subscribe)

***

### tearDown()

> **tearDown**(): `void`

Defined in: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:196](https://github.com/ue-too/ue-too/blob/e0ad36978d99a0fba62213691fb721d4dca7c035/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L196)

#### Returns

`void`

#### Implementation of

[`Canvas`](../interfaces/Canvas.md).[`tearDown`](../interfaces/Canvas.md#teardown)
