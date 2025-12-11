[@ue-too/board](../globals.md) / UserInputPublisher

# Interface: UserInputPublisher

Defined in: [packages/board/src/input-interpretation/raw-input-publisher/raw-input-publisher.ts:99](https://github.com/ue-too/ue-too/blob/fe7fe80879019da785d08f475b37a73725116e88/packages/board/src/input-interpretation/raw-input-publisher/raw-input-publisher.ts#L99)

## Methods

### notifyPan()

> **notifyPan**(`diff`): `void`

Defined in: [packages/board/src/input-interpretation/raw-input-publisher/raw-input-publisher.ts:100](https://github.com/ue-too/ue-too/blob/fe7fe80879019da785d08f475b37a73725116e88/packages/board/src/input-interpretation/raw-input-publisher/raw-input-publisher.ts#L100)

#### Parameters

##### diff

`Point`

#### Returns

`void`

***

### notifyRotate()

> **notifyRotate**(`deltaRotation`): `void`

Defined in: [packages/board/src/input-interpretation/raw-input-publisher/raw-input-publisher.ts:102](https://github.com/ue-too/ue-too/blob/fe7fe80879019da785d08f475b37a73725116e88/packages/board/src/input-interpretation/raw-input-publisher/raw-input-publisher.ts#L102)

#### Parameters

##### deltaRotation

`number`

#### Returns

`void`

***

### notifyZoom()

> **notifyZoom**(`deltaZoomAmount`, `anchorPoint`): `void`

Defined in: [packages/board/src/input-interpretation/raw-input-publisher/raw-input-publisher.ts:101](https://github.com/ue-too/ue-too/blob/fe7fe80879019da785d08f475b37a73725116e88/packages/board/src/input-interpretation/raw-input-publisher/raw-input-publisher.ts#L101)

#### Parameters

##### deltaZoomAmount

`number`

##### anchorPoint

`Point`

#### Returns

`void`

***

### on()

> **on**\<`K`\>(`eventName`, `callback`): [`UnsubscribeToUserRawInput`](../type-aliases/UnsubscribeToUserRawInput.md)

Defined in: [packages/board/src/input-interpretation/raw-input-publisher/raw-input-publisher.ts:103](https://github.com/ue-too/ue-too/blob/fe7fe80879019da785d08f475b37a73725116e88/packages/board/src/input-interpretation/raw-input-publisher/raw-input-publisher.ts#L103)

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
