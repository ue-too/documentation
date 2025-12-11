[@ue-too/board](../globals.md) / CameraZoomUpdateBatcher

# Class: CameraZoomUpdateBatcher

Defined in: [packages/board/src/camera/camera-rig/update-batcher/zoom-udpate-batcher.ts:21](https://github.com/ue-too/ue-too/blob/407e414f82d0bb1a2a3cfbf5160e331d5a81d8be/packages/board/src/camera/camera-rig/update-batcher/zoom-udpate-batcher.ts#L21)

## Constructors

### Constructor

> **new CameraZoomUpdateBatcher**(): `CameraZoomUpdateBatcher`

Defined in: [packages/board/src/camera/camera-rig/update-batcher/zoom-udpate-batcher.ts:32](https://github.com/ue-too/ue-too/blob/407e414f82d0bb1a2a3cfbf5160e331d5a81d8be/packages/board/src/camera/camera-rig/update-batcher/zoom-udpate-batcher.ts#L32)

#### Returns

`CameraZoomUpdateBatcher`

## Methods

### getDebugInfo()

> **getDebugInfo**(): `object`

Defined in: [packages/board/src/camera/camera-rig/update-batcher/zoom-udpate-batcher.ts:146](https://github.com/ue-too/ue-too/blob/407e414f82d0bb1a2a3cfbf5160e331d5a81d8be/packages/board/src/camera/camera-rig/update-batcher/zoom-udpate-batcher.ts#L146)

Get debug information about queue method calls since last update

#### Returns

`object`

##### lastUpdateTotalCalls

> **lastUpdateTotalCalls**: `number`

##### queueZoomUpdateCalls

> **queueZoomUpdateCalls**: `number`

##### queueZoomUpdateToCalls

> **queueZoomUpdateToCalls**: `number`

***

### processQueuedUpdates()

> **processQueuedUpdates**(): [`ZoomUpdate`](../type-aliases/ZoomUpdate.md) \| `null`

Defined in: [packages/board/src/camera/camera-rig/update-batcher/zoom-udpate-batcher.ts:106](https://github.com/ue-too/ue-too/blob/407e414f82d0bb1a2a3cfbf5160e331d5a81d8be/packages/board/src/camera/camera-rig/update-batcher/zoom-udpate-batcher.ts#L106)

Process and clear all queued zoom updates

#### Returns

[`ZoomUpdate`](../type-aliases/ZoomUpdate.md) \| `null`

the update to apply to the zoom level, with type information

***

### queueZoomByAtWorld()

> **queueZoomByAtWorld**(`delta`, `worldAnchor`): `void`

Defined in: [packages/board/src/camera/camera-rig/update-batcher/zoom-udpate-batcher.ts:72](https://github.com/ue-too/ue-too/blob/407e414f82d0bb1a2a3cfbf5160e331d5a81d8be/packages/board/src/camera/camera-rig/update-batcher/zoom-udpate-batcher.ts#L72)

Queue a zoom update by delta at a world anchor to be processed in the next animation frame

#### Parameters

##### delta

`number`

##### worldAnchor

`Point`

#### Returns

`void`

***

### queueZoomToAtWorld()

> **queueZoomToAtWorld**(`destination`, `worldAnchor`): `void`

Defined in: [packages/board/src/camera/camera-rig/update-batcher/zoom-udpate-batcher.ts:89](https://github.com/ue-too/ue-too/blob/407e414f82d0bb1a2a3cfbf5160e331d5a81d8be/packages/board/src/camera/camera-rig/update-batcher/zoom-udpate-batcher.ts#L89)

Queue a zoom update to a specific destination at a world anchor to be processed in the next animation frame

#### Parameters

##### destination

`number`

##### worldAnchor

`Point`

#### Returns

`void`

***

### queueZoomUpdateBy()

> **queueZoomUpdateBy**(`delta`, `anchor?`): `void`

Defined in: [packages/board/src/camera/camera-rig/update-batcher/zoom-udpate-batcher.ts:55](https://github.com/ue-too/ue-too/blob/407e414f82d0bb1a2a3cfbf5160e331d5a81d8be/packages/board/src/camera/camera-rig/update-batcher/zoom-udpate-batcher.ts#L55)

Queue a zoom update by delta to be processed in the next animation frame

#### Parameters

##### delta

`number`

##### anchor?

`Point`

#### Returns

`void`

***

### queueZoomUpdateTo()

> **queueZoomUpdateTo**(`destination`, `anchor?`): `void`

Defined in: [packages/board/src/camera/camera-rig/update-batcher/zoom-udpate-batcher.ts:39](https://github.com/ue-too/ue-too/blob/407e414f82d0bb1a2a3cfbf5160e331d5a81d8be/packages/board/src/camera/camera-rig/update-batcher/zoom-udpate-batcher.ts#L39)

Queue a zoom update to a specific destination to be processed in the next animation frame

#### Parameters

##### destination

`number`

##### anchor?

`Point`

#### Returns

`void`

***

### subscribe()

> **subscribe**(`observer`, `options?`): () => `void`

Defined in: [packages/board/src/camera/camera-rig/update-batcher/zoom-udpate-batcher.ts:139](https://github.com/ue-too/ue-too/blob/407e414f82d0bb1a2a3cfbf5160e331d5a81d8be/packages/board/src/camera/camera-rig/update-batcher/zoom-udpate-batcher.ts#L139)

Subscribe to zoom updates

#### Parameters

##### observer

[`Observer`](../type-aliases/Observer.md)\<\[[`ZoomUpdate`](../type-aliases/ZoomUpdate.md)\]\>

##### options?

[`SubscriptionOptions`](../interfaces/SubscriptionOptions.md)

#### Returns

> (): `void`

##### Returns

`void`
