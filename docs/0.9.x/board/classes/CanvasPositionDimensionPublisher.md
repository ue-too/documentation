[@ue-too/board](../globals.md) / CanvasPositionDimensionPublisher

# Class: CanvasPositionDimensionPublisher

Defined in: [packages/board/src/utils/canvas-position-dimension.ts:6](https://github.com/ue-too/ue-too/blob/fdbfb1431206f8d7c812dca3e1d0dcd7389f1d6d/packages/board/src/utils/canvas-position-dimension.ts#L6)

## Constructors

### Constructor

> **new CanvasPositionDimensionPublisher**(`canvas?`): `CanvasPositionDimensionPublisher`

Defined in: [packages/board/src/utils/canvas-position-dimension.ts:16](https://github.com/ue-too/ue-too/blob/fdbfb1431206f8d7c812dca3e1d0dcd7389f1d6d/packages/board/src/utils/canvas-position-dimension.ts#L16)

#### Parameters

##### canvas?

`HTMLCanvasElement`

#### Returns

`CanvasPositionDimensionPublisher`

## Methods

### attach()

> **attach**(`canvas`): `void`

Defined in: [packages/board/src/utils/canvas-position-dimension.ts:66](https://github.com/ue-too/ue-too/blob/fdbfb1431206f8d7c812dca3e1d0dcd7389f1d6d/packages/board/src/utils/canvas-position-dimension.ts#L66)

#### Parameters

##### canvas

`HTMLCanvasElement`

#### Returns

`void`

***

### dispose()

> **dispose**(): `void`

Defined in: [packages/board/src/utils/canvas-position-dimension.ts:54](https://github.com/ue-too/ue-too/blob/fdbfb1431206f8d7c812dca3e1d0dcd7389f1d6d/packages/board/src/utils/canvas-position-dimension.ts#L54)

#### Returns

`void`

***

### onPositionUpdate()

> **onPositionUpdate**(`observer`, `options?`): () => `void`

Defined in: [packages/board/src/utils/canvas-position-dimension.ts:108](https://github.com/ue-too/ue-too/blob/fdbfb1431206f8d7c812dca3e1d0dcd7389f1d6d/packages/board/src/utils/canvas-position-dimension.ts#L108)

#### Parameters

##### observer

[`Observer`](../type-aliases/Observer.md)\<\[`DOMRect`\]\>

##### options?

[`SubscriptionOptions`](../interfaces/SubscriptionOptions.md)

#### Returns

> (): `void`

##### Returns

`void`
