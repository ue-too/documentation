[@ue-too/board](../globals.md) / CameraPositionUpdateBatcher

# Class: CameraPositionUpdateBatcher

Defined in: [packages/board/src/camera/camera-rig/update-batcher/position-update-batcher.ts:23](https://github.com/ue-too/ue-too/blob/6e9c66b5f3b3ab9f9b176d974bbf941b3420f5e1/packages/board/src/camera/camera-rig/update-batcher/position-update-batcher.ts#L23)

## Constructors

### Constructor

> **new CameraPositionUpdateBatcher**(): `CameraPositionUpdateBatcher`

Defined in: [packages/board/src/camera/camera-rig/update-batcher/position-update-batcher.ts:33](https://github.com/ue-too/ue-too/blob/6e9c66b5f3b3ab9f9b176d974bbf941b3420f5e1/packages/board/src/camera/camera-rig/update-batcher/position-update-batcher.ts#L33)

#### Returns

`CameraPositionUpdateBatcher`

## Methods

### getDebugInfo()

> **getDebugInfo**(): `object`

Defined in: [packages/board/src/camera/camera-rig/update-batcher/position-update-batcher.ts:120](https://github.com/ue-too/ue-too/blob/6e9c66b5f3b3ab9f9b176d974bbf941b3420f5e1/packages/board/src/camera/camera-rig/update-batcher/position-update-batcher.ts#L120)

Get debug information about queue method calls since last update

#### Returns

`object`

##### lastUpdateTotalCalls

> **lastUpdateTotalCalls**: `number`

##### queuePositionUpdateByCalls

> **queuePositionUpdateByCalls**: `number`

##### queuePositionUpdateCalls

> **queuePositionUpdateCalls**: `number`

##### queuePositionUpdateToCalls

> **queuePositionUpdateToCalls**: `number`

***

### processQueuedUpdates()

> **processQueuedUpdates**(): [`PositionUpdate`](../type-aliases/PositionUpdate.md) \| `null`

Defined in: [packages/board/src/camera/camera-rig/update-batcher/position-update-batcher.ts:81](https://github.com/ue-too/ue-too/blob/6e9c66b5f3b3ab9f9b176d974bbf941b3420f5e1/packages/board/src/camera/camera-rig/update-batcher/position-update-batcher.ts#L81)

Process and clear all queued position updates

#### Returns

[`PositionUpdate`](../type-aliases/PositionUpdate.md) \| `null`

the update to apply to the position, with type information

***

### queuePositionUpdate()

> **queuePositionUpdate**(`x`, `y`): `void`

Defined in: [packages/board/src/camera/camera-rig/update-batcher/position-update-batcher.ts:40](https://github.com/ue-too/ue-too/blob/6e9c66b5f3b3ab9f9b176d974bbf941b3420f5e1/packages/board/src/camera/camera-rig/update-batcher/position-update-batcher.ts#L40)

Queue an absolute position update to be processed in the next animation frame

#### Parameters

##### x

`number`

##### y

`number`

#### Returns

`void`

***

### queuePositionUpdateBy()

> **queuePositionUpdateBy**(`delta`): `void`

Defined in: [packages/board/src/camera/camera-rig/update-batcher/position-update-batcher.ts:59](https://github.com/ue-too/ue-too/blob/6e9c66b5f3b3ab9f9b176d974bbf941b3420f5e1/packages/board/src/camera/camera-rig/update-batcher/position-update-batcher.ts#L59)

Queue a position update by delta to be processed in the next animation frame
This will be ignored if there's a pending destination update

#### Parameters

##### delta

[`Position`](../type-aliases/Position.md)

#### Returns

`void`

***

### queuePositionUpdateTo()

> **queuePositionUpdateTo**(`destination`): `void`

Defined in: [packages/board/src/camera/camera-rig/update-batcher/position-update-batcher.ts:49](https://github.com/ue-too/ue-too/blob/6e9c66b5f3b3ab9f9b176d974bbf941b3420f5e1/packages/board/src/camera/camera-rig/update-batcher/position-update-batcher.ts#L49)

Queue a position update to a specific destination to be processed in the next animation frame
This will override any pending delta updates

#### Parameters

##### destination

[`Position`](../type-aliases/Position.md)

#### Returns

`void`

***

### subscribe()

> **subscribe**(`observer`, `options?`): () => `void`

Defined in: [packages/board/src/camera/camera-rig/update-batcher/position-update-batcher.ts:113](https://github.com/ue-too/ue-too/blob/6e9c66b5f3b3ab9f9b176d974bbf941b3420f5e1/packages/board/src/camera/camera-rig/update-batcher/position-update-batcher.ts#L113)

Subscribe to position updates

#### Parameters

##### observer

[`Observer`](../type-aliases/Observer.md)\<\[[`PositionUpdate`](../type-aliases/PositionUpdate.md)\]\>

##### options?

[`SubscriptionOptions`](../interfaces/SubscriptionOptions.md)

#### Returns

> (): `void`

##### Returns

`void`
