[@ue-too/curve](../globals.md) / Path

# Class: Path

Defined in: [packages/curve/src/path.ts:48](https://github.com/ue-too/ue-too/blob/1055c6abca1ea3a0e952b0825f36e0ca2527df85/packages/curve/src/path.ts#L48)

Path made of sequential line segments.

## Constructors

### Constructor

> **new Path**(`lines`): `Path`

Defined in: [packages/curve/src/path.ts:52](https://github.com/ue-too/ue-too/blob/1055c6abca1ea3a0e952b0825f36e0ca2527df85/packages/curve/src/path.ts#L52)

#### Parameters

##### lines

[`Line`](Line.md)[]

#### Returns

`Path`

## Methods

### append()

> **append**(`line`): `void`

Defined in: [packages/curve/src/path.ts:56](https://github.com/ue-too/ue-too/blob/1055c6abca1ea3a0e952b0825f36e0ca2527df85/packages/curve/src/path.ts#L56)

#### Parameters

##### line

[`Line`](Line.md)

#### Returns

`void`

***

### clear()

> **clear**(): `void`

Defined in: [packages/curve/src/path.ts:60](https://github.com/ue-too/ue-too/blob/1055c6abca1ea3a0e952b0825f36e0ca2527df85/packages/curve/src/path.ts#L60)

#### Returns

`void`

***

### getLength()

> **getLength**(): `number`

Defined in: [packages/curve/src/path.ts:72](https://github.com/ue-too/ue-too/blob/1055c6abca1ea3a0e952b0825f36e0ca2527df85/packages/curve/src/path.ts#L72)

#### Returns

`number`

***

### getLines()

> **getLines**(): [`Line`](Line.md)[]

Defined in: [packages/curve/src/path.ts:68](https://github.com/ue-too/ue-too/blob/1055c6abca1ea3a0e952b0825f36e0ca2527df85/packages/curve/src/path.ts#L68)

#### Returns

[`Line`](Line.md)[]

***

### getPercentages()

> **getPercentages**(): `object`[]

Defined in: [packages/curve/src/path.ts:82](https://github.com/ue-too/ue-too/blob/1055c6abca1ea3a0e952b0825f36e0ca2527df85/packages/curve/src/path.ts#L82)

#### Returns

`object`[]

***

### getPointByPercentage()

> **getPointByPercentage**(`percentage`): `Point`

Defined in: [packages/curve/src/path.ts:98](https://github.com/ue-too/ue-too/blob/1055c6abca1ea3a0e952b0825f36e0ca2527df85/packages/curve/src/path.ts#L98)

#### Parameters

##### percentage

`number`

#### Returns

`Point`

***

### prepend()

> **prepend**(`line`): `void`

Defined in: [packages/curve/src/path.ts:64](https://github.com/ue-too/ue-too/blob/1055c6abca1ea3a0e952b0825f36e0ca2527df85/packages/curve/src/path.ts#L64)

#### Parameters

##### line

[`Line`](Line.md)

#### Returns

`void`
