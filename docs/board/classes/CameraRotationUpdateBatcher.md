[@ue-too/board](../globals.md) / CameraRotationUpdateBatcher

# Class: CameraRotationUpdateBatcher

Defined in: [packages/board/src/camera/camera-rig/update-batcher/rotation-update-batcher.ts:19](https://github.com/ue-too/ue-too/blob/c02efc01f7c19f3efc21823d0489e987a3e92427/packages/board/src/camera/camera-rig/update-batcher/rotation-update-batcher.ts#L19)

## Constructors

### Constructor

> **new CameraRotationUpdateBatcher**(): `CameraRotationUpdateBatcher`

Defined in: [packages/board/src/camera/camera-rig/update-batcher/rotation-update-batcher.ts:29](https://github.com/ue-too/ue-too/blob/c02efc01f7c19f3efc21823d0489e987a3e92427/packages/board/src/camera/camera-rig/update-batcher/rotation-update-batcher.ts#L29)

#### Returns

`CameraRotationUpdateBatcher`

## Methods

### getDebugInfo()

> **getDebugInfo**(): `object`

Defined in: [packages/board/src/camera/camera-rig/update-batcher/rotation-update-batcher.ts:110](https://github.com/ue-too/ue-too/blob/c02efc01f7c19f3efc21823d0489e987a3e92427/packages/board/src/camera/camera-rig/update-batcher/rotation-update-batcher.ts#L110)

Get debug information about queue method calls since last update

#### Returns

`object`

##### lastUpdateTotalCalls

> **lastUpdateTotalCalls**: `number`

##### queueRotationUpdateByCalls

> **queueRotationUpdateByCalls**: `number`

##### queueRotationUpdateCalls

> **queueRotationUpdateCalls**: `number`

##### queueRotationUpdateToCalls

> **queueRotationUpdateToCalls**: `number`

***

### processQueuedUpdates()

> **processQueuedUpdates**(): [`RotationUpdate`](../type-aliases/RotationUpdate.md) \| `null`

Defined in: [packages/board/src/camera/camera-rig/update-batcher/rotation-update-batcher.ts:71](https://github.com/ue-too/ue-too/blob/c02efc01f7c19f3efc21823d0489e987a3e92427/packages/board/src/camera/camera-rig/update-batcher/rotation-update-batcher.ts#L71)

Process and clear all queued rotation updates

#### Returns

[`RotationUpdate`](../type-aliases/RotationUpdate.md) \| `null`

the update to apply to the rotation, with type information

***

### queueRotationUpdate()

> **queueRotationUpdate**(`rotation`): `void`

Defined in: [packages/board/src/camera/camera-rig/update-batcher/rotation-update-batcher.ts:36](https://github.com/ue-too/ue-too/blob/c02efc01f7c19f3efc21823d0489e987a3e92427/packages/board/src/camera/camera-rig/update-batcher/rotation-update-batcher.ts#L36)

Queue an absolute rotation update to be processed in the next animation frame

#### Parameters

##### rotation

`number`

#### Returns

`void`

***

### queueRotationUpdateBy()

> **queueRotationUpdateBy**(`delta`): `void`

Defined in: [packages/board/src/camera/camera-rig/update-batcher/rotation-update-batcher.ts:55](https://github.com/ue-too/ue-too/blob/c02efc01f7c19f3efc21823d0489e987a3e92427/packages/board/src/camera/camera-rig/update-batcher/rotation-update-batcher.ts#L55)

Queue a rotation update by delta to be processed in the next animation frame
This will be ignored if there's a pending destination update

#### Parameters

##### delta

`number`

#### Returns

`void`

***

### queueRotationUpdateTo()

> **queueRotationUpdateTo**(`destination`): `void`

Defined in: [packages/board/src/camera/camera-rig/update-batcher/rotation-update-batcher.ts:45](https://github.com/ue-too/ue-too/blob/c02efc01f7c19f3efc21823d0489e987a3e92427/packages/board/src/camera/camera-rig/update-batcher/rotation-update-batcher.ts#L45)

Queue a rotation update to a specific destination to be processed in the next animation frame
This will override any pending delta updates

#### Parameters

##### destination

`number`

#### Returns

`void`

***

### subscribe()

> **subscribe**(`observer`, `options?`): () => `void`

Defined in: [packages/board/src/camera/camera-rig/update-batcher/rotation-update-batcher.ts:103](https://github.com/ue-too/ue-too/blob/c02efc01f7c19f3efc21823d0489e987a3e92427/packages/board/src/camera/camera-rig/update-batcher/rotation-update-batcher.ts#L103)

Subscribe to rotation updates

#### Parameters

##### observer

[`Observer`](../type-aliases/Observer.md)\<\[[`RotationUpdate`](../type-aliases/RotationUpdate.md)\]\>

##### options?

[`SubscriptionOptions`](../interfaces/SubscriptionOptions.md)

#### Returns

> (): `void`

##### Returns

`void`
