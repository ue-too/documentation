[@ue-too/board](../globals.md) / CanvasCacheInWebWorker

# Class: CanvasCacheInWebWorker

Defined in: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:95](https://github.com/ue-too/ue-too/blob/aabc0f56e9e83141d0fd935ef6ac3e5fe0af0a61/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L95)

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

## Constructors

### Constructor

> **new CanvasCacheInWebWorker**(`postMessageFunction`): `CanvasCacheInWebWorker`

Defined in: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:102](https://github.com/ue-too/ue-too/blob/aabc0f56e9e83141d0fd935ef6ac3e5fe0af0a61/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L102)

#### Parameters

##### postMessageFunction

\{(`message`, `targetOrigin`, `transfer?`): `void`; (`message`, `options?`): `void`; \}

#### Returns

`CanvasCacheInWebWorker`

## Accessors

### detached

#### Get Signature

> **get** **detached**(): `boolean`

Defined in: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:144](https://github.com/ue-too/ue-too/blob/aabc0f56e9e83141d0fd935ef6ac3e5fe0af0a61/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L144)

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

Defined in: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:109](https://github.com/ue-too/ue-too/blob/aabc0f56e9e83141d0fd935ef6ac3e5fe0af0a61/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L109)

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

Defined in: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:132](https://github.com/ue-too/ue-too/blob/aabc0f56e9e83141d0fd935ef6ac3e5fe0af0a61/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L132)

The canvas height in CSS pixels

##### Returns

`number`

#### Set Signature

> **set** **height**(`height`): `void`

Defined in: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:120](https://github.com/ue-too/ue-too/blob/aabc0f56e9e83141d0fd935ef6ac3e5fe0af0a61/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L120)

The canvas height in CSS pixels

##### Parameters

###### height

`number`

##### Returns

`void`

The canvas height in CSS pixels

#### Implementation of

[`Canvas`](../interfaces/Canvas.md).[`height`](../interfaces/Canvas.md#height)

***

### position

#### Get Signature

> **get** **position**(): `Point`

Defined in: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:136](https://github.com/ue-too/ue-too/blob/aabc0f56e9e83141d0fd935ef6ac3e5fe0af0a61/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L136)

The top-left position of the canvas in window coordinates

##### Returns

`Point`

#### Set Signature

> **set** **position**(`position`): `void`

Defined in: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:124](https://github.com/ue-too/ue-too/blob/aabc0f56e9e83141d0fd935ef6ac3e5fe0af0a61/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L124)

The top-left position of the canvas in window coordinates

##### Parameters

###### position

`Point`

##### Returns

`void`

The top-left position of the canvas in window coordinates

#### Implementation of

[`Canvas`](../interfaces/Canvas.md).[`position`](../interfaces/Canvas.md#position)

***

### width

#### Get Signature

> **get** **width**(): `number`

Defined in: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:128](https://github.com/ue-too/ue-too/blob/aabc0f56e9e83141d0fd935ef6ac3e5fe0af0a61/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L128)

The canvas width in CSS pixels

##### Returns

`number`

#### Set Signature

> **set** **width**(`width`): `void`

Defined in: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:116](https://github.com/ue-too/ue-too/blob/aabc0f56e9e83141d0fd935ef6ac3e5fe0af0a61/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L116)

The canvas width in CSS pixels

##### Parameters

###### width

`number`

##### Returns

`void`

The canvas width in CSS pixels

#### Implementation of

[`Canvas`](../interfaces/Canvas.md).[`width`](../interfaces/Canvas.md#width)

## Methods

### setCursor()

> **setCursor**(`style`): `void`

Defined in: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:140](https://github.com/ue-too/ue-too/blob/aabc0f56e9e83141d0fd935ef6ac3e5fe0af0a61/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L140)

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

Defined in: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:113](https://github.com/ue-too/ue-too/blob/aabc0f56e9e83141d0fd935ef6ac3e5fe0af0a61/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L113)

Cleanup method to dispose of resources and event listeners

#### Returns

`void`

#### Implementation of

[`Canvas`](../interfaces/Canvas.md).[`tearDown`](../interfaces/Canvas.md#teardown)
