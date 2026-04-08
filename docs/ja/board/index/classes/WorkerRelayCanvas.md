[@ue-too/board](../../modules.md) / [index](../index.md) / WorkerRelayCanvas

# クラス: WorkerRelayCanvas

定義: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:507](https://github.com/ue-too/ue-too/blob/feb7c80222df5d3cd97bfa1933bafe3190c6e48d/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L507)

## Description

A proxy for the canvas that is used to communicate with the web worker.
The primary purpose of this class is to cache the canvas dimensions and position in the DOM to reduce the calling of the getBoundingClientRect method.
This class only serves as a relay of the updated canvas dimensions and position to the web worker.

## 実装

- [`Canvas`](../interfaces/Canvas.md)

## コンストラクター

### コンストラクター

> **new WorkerRelayCanvas**(`canvas`, `webWorker`, `canvasDiemsionPublisher`): `WorkerRelayCanvas`

定義: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:515](https://github.com/ue-too/ue-too/blob/feb7c80222df5d3cd97bfa1933bafe3190c6e48d/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L515)

#### パラメータ

##### canvas

`HTMLCanvasElement`

##### webWorker

`Worker`

##### canvasDiemsionPublisher

[`CanvasPositionDimensionPublisher`](CanvasPositionDimensionPublisher.md)

#### 戻り値

`WorkerRelayCanvas`

## アクセッサー

### detached

#### 署名を取得する

> **get** **detached**(): `boolean`

定義: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:574](https://github.com/ue-too/ue-too/blob/feb7c80222df5d3cd97bfa1933bafe3190c6e48d/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L574)

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

定義: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:566](https://github.com/ue-too/ue-too/blob/feb7c80222df5d3cd97bfa1933bafe3190c6e48d/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L566)

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

定義: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:554](https://github.com/ue-too/ue-too/blob/feb7c80222df5d3cd97bfa1933bafe3190c6e48d/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L554)

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

定義: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:562](https://github.com/ue-too/ue-too/blob/feb7c80222df5d3cd97bfa1933bafe3190c6e48d/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L562)

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

定義: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:550](https://github.com/ue-too/ue-too/blob/feb7c80222df5d3cd97bfa1933bafe3190c6e48d/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L550)

The canvas width in CSS pixels

##### 戻り値

`number`

The canvas width in CSS pixels

#### の実装

[`Canvas`](../interfaces/Canvas.md).[`width`](../interfaces/Canvas.md#width)

## メソッド

### setCursor()

> **setCursor**(`style`): `void`

定義: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:578](https://github.com/ue-too/ue-too/blob/feb7c80222df5d3cd97bfa1933bafe3190c6e48d/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L578)

Sets the CSS cursor style for visual feedback

#### パラメータ

##### style

`"grab"` | `"default"` | `"grabbing"`

#### 戻り値

`void`

#### の実装

[`Canvas`](../interfaces/Canvas.md).[`setCursor`](../interfaces/Canvas.md#setcursor)

***

### tearDown()

> **tearDown**(): `void`

定義: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:558](https://github.com/ue-too/ue-too/blob/feb7c80222df5d3cd97bfa1933bafe3190c6e48d/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L558)

Cleanup method to dispose of resources and event listeners

#### 戻り値

`void`

#### の実装

[`Canvas`](../interfaces/Canvas.md).[`tearDown`](../interfaces/Canvas.md#teardown)
