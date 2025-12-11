[@ue-too/board](../globals.md) / RawUserInputPublisherWithWebWorkerRelay

# Class: RawUserInputPublisherWithWebWorkerRelay

Defined in: [packages/board/src/input-interpretation/raw-input-publisher/raw-input-publisher.ts:179](https://github.com/ue-too/ue-too/blob/fdbfb1431206f8d7c812dca3e1d0dcd7389f1d6d/packages/board/src/input-interpretation/raw-input-publisher/raw-input-publisher.ts#L179)

## Implements

- [`UserInputPublisher`](../interfaces/UserInputPublisher.md)

## Constructors

### Constructor

> **new RawUserInputPublisherWithWebWorkerRelay**(`webWorker`): `RawUserInputPublisherWithWebWorkerRelay`

Defined in: [packages/board/src/input-interpretation/raw-input-publisher/raw-input-publisher.ts:187](https://github.com/ue-too/ue-too/blob/fdbfb1431206f8d7c812dca3e1d0dcd7389f1d6d/packages/board/src/input-interpretation/raw-input-publisher/raw-input-publisher.ts#L187)

#### Parameters

##### webWorker

`Worker`

#### Returns

`RawUserInputPublisherWithWebWorkerRelay`

## Methods

### notifyPan()

> **notifyPan**(`diff`): `void`

Defined in: [packages/board/src/input-interpretation/raw-input-publisher/raw-input-publisher.ts:195](https://github.com/ue-too/ue-too/blob/fdbfb1431206f8d7c812dca3e1d0dcd7389f1d6d/packages/board/src/input-interpretation/raw-input-publisher/raw-input-publisher.ts#L195)

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

Defined in: [packages/board/src/input-interpretation/raw-input-publisher/raw-input-publisher.ts:207](https://github.com/ue-too/ue-too/blob/fdbfb1431206f8d7c812dca3e1d0dcd7389f1d6d/packages/board/src/input-interpretation/raw-input-publisher/raw-input-publisher.ts#L207)

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

Defined in: [packages/board/src/input-interpretation/raw-input-publisher/raw-input-publisher.ts:201](https://github.com/ue-too/ue-too/blob/fdbfb1431206f8d7c812dca3e1d0dcd7389f1d6d/packages/board/src/input-interpretation/raw-input-publisher/raw-input-publisher.ts#L201)

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

Defined in: [packages/board/src/input-interpretation/raw-input-publisher/raw-input-publisher.ts:213](https://github.com/ue-too/ue-too/blob/fdbfb1431206f8d7c812dca3e1d0dcd7389f1d6d/packages/board/src/input-interpretation/raw-input-publisher/raw-input-publisher.ts#L213)

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
