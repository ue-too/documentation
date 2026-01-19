[@ue-too/animate](../globals.md) / Keyframes

# Interface: Keyframes\<T\>

Defined in: [composite-animation.ts:1017](https://github.com/ue-too/ue-too/blob/1055c6abca1ea3a0e952b0825f36e0ca2527df85/packages/animate/src/composite-animation.ts#L1017)

## Type Parameters

### T

`T`

## Properties

### keyframes

> **keyframes**: [`Keyframe`](../type-aliases/Keyframe.md)\<`T`\>[]

Defined in: [composite-animation.ts:1018](https://github.com/ue-too/ue-too/blob/1055c6abca1ea3a0e952b0825f36e0ca2527df85/packages/animate/src/composite-animation.ts#L1018)

## Methods

### clearFrames()

> **clearFrames**(): `void`

Defined in: [composite-animation.ts:1022](https://github.com/ue-too/ue-too/blob/1055c6abca1ea3a0e952b0825f36e0ca2527df85/packages/animate/src/composite-animation.ts#L1022)

#### Returns

`void`

***

### from()

> **from**(`value`): `Keyframes`\<`T`\>

Defined in: [composite-animation.ts:1019](https://github.com/ue-too/ue-too/blob/1055c6abca1ea3a0e952b0825f36e0ca2527df85/packages/animate/src/composite-animation.ts#L1019)

#### Parameters

##### value

`T`

#### Returns

`Keyframes`\<`T`\>

***

### insertAt()

> **insertAt**(`percentage`, `value`): `void`

Defined in: [composite-animation.ts:1021](https://github.com/ue-too/ue-too/blob/1055c6abca1ea3a0e952b0825f36e0ca2527df85/packages/animate/src/composite-animation.ts#L1021)

#### Parameters

##### percentage

`number`

##### value

`T`

#### Returns

`void`

***

### to()

> **to**(`value`): `Keyframes`\<`T`\>

Defined in: [composite-animation.ts:1020](https://github.com/ue-too/ue-too/blob/1055c6abca1ea3a0e952b0825f36e0ca2527df85/packages/animate/src/composite-animation.ts#L1020)

#### Parameters

##### value

`T`

#### Returns

`Keyframes`\<`T`\>
