[@ue-too/curve](../globals.md) / Path

# Class: Path

Defined in: [packages/curve/src/path.ts:23](https://github.com/ue-too/ue-too/blob/95dd78435970713202a67be3986e96a80ff00749/packages/curve/src/path.ts#L23)

## Constructors

### Constructor

> **new Path**(`lines`): `Path`

Defined in: [packages/curve/src/path.ts:27](https://github.com/ue-too/ue-too/blob/95dd78435970713202a67be3986e96a80ff00749/packages/curve/src/path.ts#L27)

#### Parameters

##### lines

[`Line`](Line.md)[]

#### Returns

`Path`

## Methods

### append()

> **append**(`line`): `void`

Defined in: [packages/curve/src/path.ts:31](https://github.com/ue-too/ue-too/blob/95dd78435970713202a67be3986e96a80ff00749/packages/curve/src/path.ts#L31)

#### Parameters

##### line

[`Line`](Line.md)

#### Returns

`void`

***

### clear()

> **clear**(): `void`

Defined in: [packages/curve/src/path.ts:35](https://github.com/ue-too/ue-too/blob/95dd78435970713202a67be3986e96a80ff00749/packages/curve/src/path.ts#L35)

#### Returns

`void`

***

### getLength()

> **getLength**(): `number`

Defined in: [packages/curve/src/path.ts:47](https://github.com/ue-too/ue-too/blob/95dd78435970713202a67be3986e96a80ff00749/packages/curve/src/path.ts#L47)

#### Returns

`number`

***

### getLines()

> **getLines**(): [`Line`](Line.md)[]

Defined in: [packages/curve/src/path.ts:43](https://github.com/ue-too/ue-too/blob/95dd78435970713202a67be3986e96a80ff00749/packages/curve/src/path.ts#L43)

#### Returns

[`Line`](Line.md)[]

***

### getPercentages()

> **getPercentages**(): `object`[]

Defined in: [packages/curve/src/path.ts:57](https://github.com/ue-too/ue-too/blob/95dd78435970713202a67be3986e96a80ff00749/packages/curve/src/path.ts#L57)

#### Returns

`object`[]

***

### getPointByPercentage()

> **getPointByPercentage**(`percentage`): `Point`

Defined in: [packages/curve/src/path.ts:73](https://github.com/ue-too/ue-too/blob/95dd78435970713202a67be3986e96a80ff00749/packages/curve/src/path.ts#L73)

#### Parameters

##### percentage

`number`

#### Returns

`Point`

***

### prepend()

> **prepend**(`line`): `void`

Defined in: [packages/curve/src/path.ts:39](https://github.com/ue-too/ue-too/blob/95dd78435970713202a67be3986e96a80ff00749/packages/curve/src/path.ts#L39)

#### Parameters

##### line

[`Line`](Line.md)

#### Returns

`void`
