[@ue-too/board](../globals.md) / RawUserInputPublisher

# Class: RawUserInputPublisher

Defined in: [packages/board/src/input-interpretation/raw-input-publisher/raw-input-publisher.ts:112](https://github.com/ue-too/ue-too/blob/c02efc01f7c19f3efc21823d0489e987a3e92427/packages/board/src/input-interpretation/raw-input-publisher/raw-input-publisher.ts#L112)

## Description

The raw user input publisher.
Publishs raw user input events to the input flow control, and subscribers.

## Implements

- [`UserInputPublisher`](../interfaces/UserInputPublisher.md)

## Constructors

### Constructor

> **new RawUserInputPublisher**(`cameraMux`): `RawUserInputPublisher`

Defined in: [packages/board/src/input-interpretation/raw-input-publisher/raw-input-publisher.ts:120](https://github.com/ue-too/ue-too/blob/c02efc01f7c19f3efc21823d0489e987a3e92427/packages/board/src/input-interpretation/raw-input-publisher/raw-input-publisher.ts#L120)

#### Parameters

##### cameraMux

[`CameraMux`](../interfaces/CameraMux.md)

#### Returns

`RawUserInputPublisher`

## Accessors

### cameraMux

#### Get Signature

> **get** **cameraMux**(): [`CameraMux`](../interfaces/CameraMux.md)

Defined in: [packages/board/src/input-interpretation/raw-input-publisher/raw-input-publisher.ts:161](https://github.com/ue-too/ue-too/blob/c02efc01f7c19f3efc21823d0489e987a3e92427/packages/board/src/input-interpretation/raw-input-publisher/raw-input-publisher.ts#L161)

##### Returns

[`CameraMux`](../interfaces/CameraMux.md)

#### Set Signature

> **set** **cameraMux**(`cameraMux`): `void`

Defined in: [packages/board/src/input-interpretation/raw-input-publisher/raw-input-publisher.ts:165](https://github.com/ue-too/ue-too/blob/c02efc01f7c19f3efc21823d0489e987a3e92427/packages/board/src/input-interpretation/raw-input-publisher/raw-input-publisher.ts#L165)

##### Parameters

###### cameraMux

[`CameraMux`](../interfaces/CameraMux.md)

##### Returns

`void`

## Methods

### notifyPan()

> **notifyPan**(`diff`): `void`

Defined in: [packages/board/src/input-interpretation/raw-input-publisher/raw-input-publisher.ts:128](https://github.com/ue-too/ue-too/blob/c02efc01f7c19f3efc21823d0489e987a3e92427/packages/board/src/input-interpretation/raw-input-publisher/raw-input-publisher.ts#L128)

#### Parameters

##### diff

`Point`

#### Returns

`void`

#### Implementation of

[`UserInputPublisher`](../interfaces/UserInputPublisher.md).[`notifyPan`](../interfaces/UserInputPublisher.md#notifypan)

***

### notifyRotate()

> **notifyRotate**(`deltaRotation`): `void`

Defined in: [packages/board/src/input-interpretation/raw-input-publisher/raw-input-publisher.ts:140](https://github.com/ue-too/ue-too/blob/c02efc01f7c19f3efc21823d0489e987a3e92427/packages/board/src/input-interpretation/raw-input-publisher/raw-input-publisher.ts#L140)

#### Parameters

##### deltaRotation

`number`

#### Returns

`void`

#### Implementation of

[`UserInputPublisher`](../interfaces/UserInputPublisher.md).[`notifyRotate`](../interfaces/UserInputPublisher.md#notifyrotate)

***

### notifyZoom()

> **notifyZoom**(`deltaZoomAmount`, `anchorPoint`): `void`

Defined in: [packages/board/src/input-interpretation/raw-input-publisher/raw-input-publisher.ts:134](https://github.com/ue-too/ue-too/blob/c02efc01f7c19f3efc21823d0489e987a3e92427/packages/board/src/input-interpretation/raw-input-publisher/raw-input-publisher.ts#L134)

#### Parameters

##### deltaZoomAmount

`number`

##### anchorPoint

`Point`

#### Returns

`void`

#### Implementation of

[`UserInputPublisher`](../interfaces/UserInputPublisher.md).[`notifyZoom`](../interfaces/UserInputPublisher.md#notifyzoom)

***

### on()

> **on**\<`K`\>(`eventName`, `callback`): [`UnsubscribeToUserRawInput`](../type-aliases/UnsubscribeToUserRawInput.md)

Defined in: [packages/board/src/input-interpretation/raw-input-publisher/raw-input-publisher.ts:146](https://github.com/ue-too/ue-too/blob/c02efc01f7c19f3efc21823d0489e987a3e92427/packages/board/src/input-interpretation/raw-input-publisher/raw-input-publisher.ts#L146)

#### Type Parameters

##### K

`K` *extends* keyof [`RawUserInputEventMap`](../type-aliases/RawUserInputEventMap.md)

#### Parameters

##### eventName

`K`

##### callback

(`event`) => `void`

#### Returns

[`UnsubscribeToUserRawInput`](../type-aliases/UnsubscribeToUserRawInput.md)

#### Implementation of

[`UserInputPublisher`](../interfaces/UserInputPublisher.md).[`on`](../interfaces/UserInputPublisher.md#on)
