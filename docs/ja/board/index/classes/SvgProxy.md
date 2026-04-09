[@ue-too/board](../../modules.md) / [index](../index.md) / SvgProxy

# クラス: SvgProxy

定義: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:349](https://github.com/ue-too/ue-too/blob/68da915137a31a45d7ce8043b13275ff7283045d/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L349)

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

## 実装

- [`Canvas`](../interfaces/Canvas.md)
- [`Observable`](../interfaces/Observable.md)\<\[[`CanvasDimensions`](../type-aliases/CanvasDimensions.md)\]\>

## コンストラクター

### コンストラクター

> **new SvgProxy**(`svg?`): `SvgProxy`

定義: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:357](https://github.com/ue-too/ue-too/blob/68da915137a31a45d7ce8043b13275ff7283045d/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L357)

#### パラメータ

##### svg?

`SVGSVGElement`

#### 戻り値

`SvgProxy`

## アクセッサー

### detached

#### 署名を取得する

> **get** **detached**(): `boolean`

定義: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:409](https://github.com/ue-too/ue-too/blob/68da915137a31a45d7ce8043b13275ff7283045d/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L409)

Whether the canvas is currently detached from the DOM

##### 戻り値

`boolean`

Whether the canvas is currently detached from the DOM

#### の実装

[`Canvas`](../interfaces/Canvas.md).[`detached`](../interfaces/Canvas.md#detached)

***

### dimensions

#### 署名を取得する

> **get** **dimensions**(): `object`

定義: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:413](https://github.com/ue-too/ue-too/blob/68da915137a31a45d7ce8043b13275ff7283045d/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L413)

Combined dimensions and position information

##### 戻り値

`object`

###### height

> **height**: `number`

###### position

> **position**: `Point`

###### width

> **width**: `number`

Combined dimensions and position information

#### の実装

[`Canvas`](../interfaces/Canvas.md).[`dimensions`](../interfaces/Canvas.md#dimensions)

***

### height

#### 署名を取得する

> **get** **height**(): `number`

定義: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:445](https://github.com/ue-too/ue-too/blob/68da915137a31a45d7ce8043b13275ff7283045d/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L445)

The canvas height in CSS pixels

##### 戻り値

`number`

The canvas height in CSS pixels

#### の実装

[`Canvas`](../interfaces/Canvas.md).[`height`](../interfaces/Canvas.md#height)

***

### position

#### 署名を取得する

> **get** **position**(): `Point`

定義: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:449](https://github.com/ue-too/ue-too/blob/68da915137a31a45d7ce8043b13275ff7283045d/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L449)

The top-left position of the canvas in window coordinates

##### 戻り値

`Point`

The top-left position of the canvas in window coordinates

#### の実装

[`Canvas`](../interfaces/Canvas.md).[`position`](../interfaces/Canvas.md#position)

***

### width

#### 署名を取得する

> **get** **width**(): `number`

定義: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:421](https://github.com/ue-too/ue-too/blob/68da915137a31a45d7ce8043b13275ff7283045d/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L421)

The canvas width in CSS pixels

##### 戻り値

`number`

The canvas width in CSS pixels

#### の実装

[`Canvas`](../interfaces/Canvas.md).[`width`](../interfaces/Canvas.md#width)

## メソッド

### attach()

> **attach**(`svg`): `void`

定義: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:467](https://github.com/ue-too/ue-too/blob/68da915137a31a45d7ce8043b13275ff7283045d/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L467)

#### パラメータ

##### svg

`SVGSVGElement`

#### 戻り値

`void`

***

### logCanvasTrueSize()

> **logCanvasTrueSize**(): `void`

定義: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:487](https://github.com/ue-too/ue-too/blob/68da915137a31a45d7ce8043b13275ff7283045d/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L487)

#### 戻り値

`void`

***

### notify()

> **notify**(...`data`): `void`

定義: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:405](https://github.com/ue-too/ue-too/blob/68da915137a31a45d7ce8043b13275ff7283045d/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L405)

#### パラメータ

##### data

...\[[`CanvasDimensions`](../type-aliases/CanvasDimensions.md)\]

#### 戻り値

`void`

#### の実装

[`Observable`](../interfaces/Observable.md).[`notify`](../interfaces/Observable.md#notify)

***

### setCursor()

> **setCursor**(`style`): `void`

定義: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:453](https://github.com/ue-too/ue-too/blob/68da915137a31a45d7ce8043b13275ff7283045d/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L453)

Sets the CSS cursor style for visual feedback

#### パラメータ

##### style

`"grab"` | `"default"` | `"grabbing"`

#### 戻り値

`void`

#### の実装

[`Canvas`](../interfaces/Canvas.md).[`setCursor`](../interfaces/Canvas.md#setcursor)

***

### setHeight()

> **setHeight**(`height`): `void`

定義: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:439](https://github.com/ue-too/ue-too/blob/68da915137a31a45d7ce8043b13275ff7283045d/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L439)

set the height of the canvas
the height is synonymous with the canvas style height not the canvas height

#### パラメータ

##### height

`number`

#### 戻り値

`void`

***

### setWidth()

> **setWidth**(`width`): `void`

定義: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:429](https://github.com/ue-too/ue-too/blob/68da915137a31a45d7ce8043b13275ff7283045d/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L429)

set the width of the canvas
the width is synonymous with the canvas style width not the canvas width

#### パラメータ

##### width

`number`

#### 戻り値

`void`

***

### subscribe()

> **subscribe**(`observer`, `options?`): () => `void`

定義: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:398](https://github.com/ue-too/ue-too/blob/68da915137a31a45d7ce8043b13275ff7283045d/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L398)

#### パラメータ

##### observer

[`Observer`](../type-aliases/Observer.md)\<\[[`CanvasDimensions`](../type-aliases/CanvasDimensions.md)\]\>

##### options?

[`SubscriptionOptions`](../interfaces/SubscriptionOptions.md)

#### 戻り値

> (): `void`

##### 戻り値

`void`

#### の実装

[`Observable`](../interfaces/Observable.md).[`subscribe`](../interfaces/Observable.md#subscribe)

***

### tearDown()

> **tearDown**(): `void`

定義: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:459](https://github.com/ue-too/ue-too/blob/68da915137a31a45d7ce8043b13275ff7283045d/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L459)

Cleanup method to dispose of resources and event listeners

#### 戻り値

`void`

#### の実装

[`Canvas`](../interfaces/Canvas.md).[`tearDown`](../interfaces/Canvas.md#teardown)
