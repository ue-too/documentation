[@ue-too/board](../globals.md) / CanvasProxy

# Class: CanvasProxy

Defined in: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:149](https://github.com/ue-too/ue-too/blob/e468a9961da59c81663192ec8df16ebc8e17abac/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L149)

Abstraction interface for canvas element access and manipulation.

## Remarks

This interface provides a decoupled way to access canvas properties without direct DOM access.
Multiple implementations exist to support different use cases:
- **CanvasProxy**: Full implementation for HTML canvas elements with dimension tracking
- **SvgProxy**: Implementation for SVG elements
- **DummyCanvas**: No-op implementation for web worker contexts
- **WorkerRelayCanvas**: Relays canvas dimension updates to web workers
- **CanvasCacheInWebWorker**: Caches canvas dimensions within a web worker

The abstraction enables:
- Coordinate system transformations (window → canvas → viewport)
- Canvas dimension tracking without repeated DOM queries
- Cursor style management
- Support for both canvas and SVG rendering contexts

## Implements

- [`Canvas`](../interfaces/Canvas.md)
- [`Observable`](../interfaces/Observable.md)\<\[[`CanvasDimensions`](../type-aliases/CanvasDimensions.md)\]\>

## Constructors

### Constructor

> **new CanvasProxy**(`canvas?`): `CanvasProxy`

Defined in: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:158](https://github.com/ue-too/ue-too/blob/e468a9961da59c81663192ec8df16ebc8e17abac/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L158)

#### Parameters

##### canvas?

`HTMLCanvasElement`

#### Returns

`CanvasProxy`

## Accessors

### detached

#### Get Signature

> **get** **detached**(): `boolean`

Defined in: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:198](https://github.com/ue-too/ue-too/blob/e468a9961da59c81663192ec8df16ebc8e17abac/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L198)

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

Defined in: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:202](https://github.com/ue-too/ue-too/blob/e468a9961da59c81663192ec8df16ebc8e17abac/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L202)

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

Defined in: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:232](https://github.com/ue-too/ue-too/blob/e468a9961da59c81663192ec8df16ebc8e17abac/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L232)

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

Defined in: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:236](https://github.com/ue-too/ue-too/blob/e468a9961da59c81663192ec8df16ebc8e17abac/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L236)

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

Defined in: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:206](https://github.com/ue-too/ue-too/blob/e468a9961da59c81663192ec8df16ebc8e17abac/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L206)

The canvas width in CSS pixels

##### Returns

`number`

The canvas width in CSS pixels

#### Implementation of

[`Canvas`](../interfaces/Canvas.md).[`width`](../interfaces/Canvas.md#width)

## Methods

### attach()

> **attach**(`canvas`): `void`

Defined in: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:254](https://github.com/ue-too/ue-too/blob/e468a9961da59c81663192ec8df16ebc8e17abac/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L254)

#### Parameters

##### canvas

`HTMLCanvasElement`

#### Returns

`void`

***

### logCanvasTrueSize()

> **logCanvasTrueSize**(): `void`

Defined in: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:273](https://github.com/ue-too/ue-too/blob/e468a9961da59c81663192ec8df16ebc8e17abac/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L273)

#### Returns

`void`

***

### notify()

> **notify**(...`data`): `void`

Defined in: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:194](https://github.com/ue-too/ue-too/blob/e468a9961da59c81663192ec8df16ebc8e17abac/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L194)

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

Defined in: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:240](https://github.com/ue-too/ue-too/blob/e468a9961da59c81663192ec8df16ebc8e17abac/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L240)

Sets the CSS cursor style for visual feedback

#### Parameters

##### style

`"grab"` | `"default"` | `"grabbing"`

#### Returns

`void`

#### Implementation of

[`Canvas`](../interfaces/Canvas.md).[`setCursor`](../interfaces/Canvas.md#setcursor)

***

### setHeight()

> **setHeight**(`height`): `void`

Defined in: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:225](https://github.com/ue-too/ue-too/blob/e468a9961da59c81663192ec8df16ebc8e17abac/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L225)

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

Defined in: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:214](https://github.com/ue-too/ue-too/blob/e468a9961da59c81663192ec8df16ebc8e17abac/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L214)

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

Defined in: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:190](https://github.com/ue-too/ue-too/blob/e468a9961da59c81663192ec8df16ebc8e17abac/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L190)

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

Defined in: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:246](https://github.com/ue-too/ue-too/blob/e468a9961da59c81663192ec8df16ebc8e17abac/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L246)

Cleanup method to dispose of resources and event listeners

#### Returns

`void`

#### Implementation of

[`Canvas`](../interfaces/Canvas.md).[`tearDown`](../interfaces/Canvas.md#teardown)
