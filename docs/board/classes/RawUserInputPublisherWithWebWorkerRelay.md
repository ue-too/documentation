[@ue-too/board](../globals.md) / RawUserInputPublisherWithWebWorkerRelay

# Class: RawUserInputPublisherWithWebWorkerRelay

Defined in: [packages/board/src/input-interpretation/raw-input-publisher/raw-input-publisher.ts:265](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/board/src/input-interpretation/raw-input-publisher/raw-input-publisher.ts#L265)

Interface for publishing raw user input events to observers.

## Remarks

This interface defines the contract for broadcasting user input events
to external subscribers. Implementations provide the observable pattern
for input event distribution.

## Implements

- [`UserInputPublisher`](../interfaces/UserInputPublisher.md)

## Constructors

### Constructor

> **new RawUserInputPublisherWithWebWorkerRelay**(`webWorker`): `RawUserInputPublisherWithWebWorkerRelay`

Defined in: [packages/board/src/input-interpretation/raw-input-publisher/raw-input-publisher.ts:273](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/board/src/input-interpretation/raw-input-publisher/raw-input-publisher.ts#L273)

#### Parameters

##### webWorker

`Worker`

#### Returns

`RawUserInputPublisherWithWebWorkerRelay`

## Methods

### notifyPan()

> **notifyPan**(`diff`): `void`

Defined in: [packages/board/src/input-interpretation/raw-input-publisher/raw-input-publisher.ts:281](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/board/src/input-interpretation/raw-input-publisher/raw-input-publisher.ts#L281)

Notifies subscribers of a pan gesture

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

Defined in: [packages/board/src/input-interpretation/raw-input-publisher/raw-input-publisher.ts:293](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/board/src/input-interpretation/raw-input-publisher/raw-input-publisher.ts#L293)

Notifies subscribers of a rotate gesture

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

Defined in: [packages/board/src/input-interpretation/raw-input-publisher/raw-input-publisher.ts:287](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/board/src/input-interpretation/raw-input-publisher/raw-input-publisher.ts#L287)

Notifies subscribers of a zoom gesture

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

Defined in: [packages/board/src/input-interpretation/raw-input-publisher/raw-input-publisher.ts:299](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/board/src/input-interpretation/raw-input-publisher/raw-input-publisher.ts#L299)

Subscribes to input events

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
