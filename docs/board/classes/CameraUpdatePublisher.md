[@ue-too/board](../globals.md) / CameraUpdatePublisher

# Class: CameraUpdatePublisher

Defined in: [packages/board/src/camera/update-publisher.ts:146](https://github.com/ue-too/ue-too/blob/c02efc01f7c19f3efc21823d0489e987a3e92427/packages/board/src/camera/update-publisher.ts#L146)

## Description

The camera update publisher.

## Constructors

### Constructor

> **new CameraUpdatePublisher**(): `CameraUpdatePublisher`

Defined in: [packages/board/src/camera/update-publisher.ts:153](https://github.com/ue-too/ue-too/blob/c02efc01f7c19f3efc21823d0489e987a3e92427/packages/board/src/camera/update-publisher.ts#L153)

#### Returns

`CameraUpdatePublisher`

## Camera

### notifyPan()

> **notifyPan**(`event`, `cameraState`): `void`

Defined in: [packages/board/src/camera/update-publisher.ts:166](https://github.com/ue-too/ue-too/blob/c02efc01f7c19f3efc21823d0489e987a3e92427/packages/board/src/camera/update-publisher.ts#L166)

#### Parameters

##### event

[`CameraPanEventPayload`](../type-aliases/CameraPanEventPayload.md)

##### cameraState

[`CameraState`](../type-aliases/CameraState.md)

#### Returns

`void`

#### Description

Notify the pan event.
Will also notify the "all" event.

***

### notifyRotate()

> **notifyRotate**(`event`, `cameraState`): `void`

Defined in: [packages/board/src/camera/update-publisher.ts:188](https://github.com/ue-too/ue-too/blob/c02efc01f7c19f3efc21823d0489e987a3e92427/packages/board/src/camera/update-publisher.ts#L188)

#### Parameters

##### event

[`CameraRotateEventPayload`](../type-aliases/CameraRotateEventPayload.md)

##### cameraState

[`CameraState`](../type-aliases/CameraState.md)

#### Returns

`void`

#### Description

Notify the rotate event.
Will also notify the "all" event.

***

### notifyZoom()

> **notifyZoom**(`event`, `cameraState`): `void`

Defined in: [packages/board/src/camera/update-publisher.ts:177](https://github.com/ue-too/ue-too/blob/c02efc01f7c19f3efc21823d0489e987a3e92427/packages/board/src/camera/update-publisher.ts#L177)

#### Parameters

##### event

[`CameraZoomEventPayload`](../type-aliases/CameraZoomEventPayload.md)

##### cameraState

[`CameraState`](../type-aliases/CameraState.md)

#### Returns

`void`

#### Description

Notify the zoom event.
Will also notify the "all" event.

***

### on()

> **on**\<`K`\>(`eventName`, `callback`, `options?`): [`UnSubscribe`](../type-aliases/UnSubscribe.md)

Defined in: [packages/board/src/camera/update-publisher.ts:208](https://github.com/ue-too/ue-too/blob/c02efc01f7c19f3efc21823d0489e987a3e92427/packages/board/src/camera/update-publisher.ts#L208)

#### Type Parameters

##### K

`K` *extends* keyof [`CameraEventMap`](../type-aliases/CameraEventMap.md)

#### Parameters

##### eventName

`K`

##### callback

(`event`, `cameraState`) => `void`

##### options?

[`SubscriptionOptions`](../interfaces/SubscriptionOptions.md)

#### Returns

[`UnSubscribe`](../type-aliases/UnSubscribe.md)

#### Description

Subscribe to the camera event.
You can also pass in the abort controller signal within the options to cancel the subscription. Like this:
```ts
const controller = new AbortController();
const unSubscribe = on("pan", (event, cameraState)=>{}, {signal: controller.signal});

// later in other place where you want to unsubscribe
controller.abort();

```
This means you can cancel multiple subscriptions by aborting the same controller. Just like regular event listeners.
