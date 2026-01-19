[@ue-too/animate](../globals.md) / KeyFramesContiner

# Class: KeyFramesContiner\<T\>

Defined in: [composite-animation.ts:1025](https://github.com/ue-too/ue-too/blob/1055c6abca1ea3a0e952b0825f36e0ca2527df85/packages/animate/src/composite-animation.ts#L1025)

## Type Parameters

### T

`T`

## Constructors

### Constructor

> **new KeyFramesContiner**\<`T`\>(): `KeyFramesContiner`\<`T`\>

Defined in: [composite-animation.ts:1029](https://github.com/ue-too/ue-too/blob/1055c6abca1ea3a0e952b0825f36e0ca2527df85/packages/animate/src/composite-animation.ts#L1029)

#### Returns

`KeyFramesContiner`\<`T`\>

## Accessors

### keyframes

#### Get Signature

> **get** **keyframes**(): [`Keyframe`](../type-aliases/Keyframe.md)\<`T`\>[]

Defined in: [composite-animation.ts:1033](https://github.com/ue-too/ue-too/blob/1055c6abca1ea3a0e952b0825f36e0ca2527df85/packages/animate/src/composite-animation.ts#L1033)

##### Returns

[`Keyframe`](../type-aliases/Keyframe.md)\<`T`\>[]

## Methods

### clearFrames()

> **clearFrames**(): `void`

Defined in: [composite-animation.ts:1067](https://github.com/ue-too/ue-too/blob/1055c6abca1ea3a0e952b0825f36e0ca2527df85/packages/animate/src/composite-animation.ts#L1067)

#### Returns

`void`

***

### from()

> **from**(`value`): [`Keyframes`](../interfaces/Keyframes.md)\<`T`\>

Defined in: [composite-animation.ts:1037](https://github.com/ue-too/ue-too/blob/1055c6abca1ea3a0e952b0825f36e0ca2527df85/packages/animate/src/composite-animation.ts#L1037)

#### Parameters

##### value

`T`

#### Returns

[`Keyframes`](../interfaces/Keyframes.md)\<`T`\>

***

### insertAt()

> **insertAt**(`percentage`, `value`): `void`

Defined in: [composite-animation.ts:1063](https://github.com/ue-too/ue-too/blob/1055c6abca1ea3a0e952b0825f36e0ca2527df85/packages/animate/src/composite-animation.ts#L1063)

#### Parameters

##### percentage

`number`

##### value

`T`

#### Returns

`void`

***

### to()

> **to**(`value`): [`Keyframes`](../interfaces/Keyframes.md)\<`T`\>

Defined in: [composite-animation.ts:1050](https://github.com/ue-too/ue-too/blob/1055c6abca1ea3a0e952b0825f36e0ca2527df85/packages/animate/src/composite-animation.ts#L1050)

#### Parameters

##### value

`T`

#### Returns

[`Keyframes`](../interfaces/Keyframes.md)\<`T`\>
