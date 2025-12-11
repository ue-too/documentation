[@ue-too/board](../globals.md) / CanvasPositionDimensionPublisher

# Class: CanvasPositionDimensionPublisher

Defined in: [packages/board/src/utils/canvas-position-dimension.ts:6](https://github.com/ue-too/ue-too/blob/6e9c66b5f3b3ab9f9b176d974bbf941b3420f5e1/packages/board/src/utils/canvas-position-dimension.ts#L6)

## Constructors

### Constructor

> **new CanvasPositionDimensionPublisher**(`canvas?`): `CanvasPositionDimensionPublisher`

Defined in: [packages/board/src/utils/canvas-position-dimension.ts:16](https://github.com/ue-too/ue-too/blob/6e9c66b5f3b3ab9f9b176d974bbf941b3420f5e1/packages/board/src/utils/canvas-position-dimension.ts#L16)

#### Parameters

##### canvas?

`HTMLCanvasElement`

#### Returns

`CanvasPositionDimensionPublisher`

## Methods

### attach()

> **attach**(`canvas`): `void`

Defined in: [packages/board/src/utils/canvas-position-dimension.ts:66](https://github.com/ue-too/ue-too/blob/6e9c66b5f3b3ab9f9b176d974bbf941b3420f5e1/packages/board/src/utils/canvas-position-dimension.ts#L66)

#### Parameters

##### canvas

`HTMLCanvasElement`

#### Returns

`void`

***

### dispose()

> **dispose**(): `void`

Defined in: [packages/board/src/utils/canvas-position-dimension.ts:54](https://github.com/ue-too/ue-too/blob/6e9c66b5f3b3ab9f9b176d974bbf941b3420f5e1/packages/board/src/utils/canvas-position-dimension.ts#L54)

#### Returns

`void`

***

### onPositionUpdate()

> **onPositionUpdate**(`observer`, `options?`): () => `void`

Defined in: [packages/board/src/utils/canvas-position-dimension.ts:108](https://github.com/ue-too/ue-too/blob/6e9c66b5f3b3ab9f9b176d974bbf941b3420f5e1/packages/board/src/utils/canvas-position-dimension.ts#L108)

#### Parameters

##### observer

[`Observer`](../type-aliases/Observer.md)\<\[`DOMRect`\]\>

##### options?

[`SubscriptionOptions`](../interfaces/SubscriptionOptions.md)

#### Returns

> (): `void`

##### Returns

`void`
