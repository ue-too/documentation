[@ue-too/curve](../globals.md) / Line

# Class: Line

Defined in: [packages/curve/src/line.ts:3](https://github.com/ue-too/ue-too/blob/95dd78435970713202a67be3986e96a80ff00749/packages/curve/src/line.ts#L3)

## Constructors

### Constructor

> **new Line**(`startPoint`, `endPoint`): `Line`

Defined in: [packages/curve/src/line.ts:7](https://github.com/ue-too/ue-too/blob/95dd78435970713202a67be3986e96a80ff00749/packages/curve/src/line.ts#L7)

#### Parameters

##### startPoint

`Point`

##### endPoint

`Point`

#### Returns

`Line`

## Methods

### getEndPoint()

> **getEndPoint**(): `Point`

Defined in: [packages/curve/src/line.ts:16](https://github.com/ue-too/ue-too/blob/95dd78435970713202a67be3986e96a80ff00749/packages/curve/src/line.ts#L16)

#### Returns

`Point`

***

### getStartPoint()

> **getStartPoint**(): `Point`

Defined in: [packages/curve/src/line.ts:12](https://github.com/ue-too/ue-too/blob/95dd78435970713202a67be3986e96a80ff00749/packages/curve/src/line.ts#L12)

#### Returns

`Point`

***

### getTranslationRotationToAlginXAxis()

> **getTranslationRotationToAlginXAxis**(): `object`

Defined in: [packages/curve/src/line.ts:32](https://github.com/ue-too/ue-too/blob/95dd78435970713202a67be3986e96a80ff00749/packages/curve/src/line.ts#L32)

#### Returns

`object`

##### rotationAngle

> **rotationAngle**: `number`

##### translation

> **translation**: `Point`

***

### intersectionWithAnotherLine()

> **intersectionWithAnotherLine**(`lineToIntersect`): `object`

Defined in: [packages/curve/src/line.ts:20](https://github.com/ue-too/ue-too/blob/95dd78435970713202a67be3986e96a80ff00749/packages/curve/src/line.ts#L20)

#### Parameters

##### lineToIntersect

`Line`

#### Returns

`object`

##### intersection?

> `optional` **intersection**: `Point`

##### intersects

> **intersects**: `boolean`

##### offset?

> `optional` **offset**: `number`

***

### length()

> **length**(): `number`

Defined in: [packages/curve/src/line.ts:28](https://github.com/ue-too/ue-too/blob/95dd78435970713202a67be3986e96a80ff00749/packages/curve/src/line.ts#L28)

#### Returns

`number`

***

### lerp()

> **lerp**(`ratio`): `Point`

Defined in: [packages/curve/src/line.ts:48](https://github.com/ue-too/ue-too/blob/95dd78435970713202a67be3986e96a80ff00749/packages/curve/src/line.ts#L48)

#### Parameters

##### ratio

`number`

#### Returns

`Point`

***

### pointInLine()

> **pointInLine**(`point`): `boolean`

Defined in: [packages/curve/src/line.ts:39](https://github.com/ue-too/ue-too/blob/95dd78435970713202a67be3986e96a80ff00749/packages/curve/src/line.ts#L39)

#### Parameters

##### point

`Point`

#### Returns

`boolean`

***

### projectPoint()

> **projectPoint**(`point`): `object`

Defined in: [packages/curve/src/line.ts:24](https://github.com/ue-too/ue-too/blob/95dd78435970713202a67be3986e96a80ff00749/packages/curve/src/line.ts#L24)

#### Parameters

##### point

`Point`

#### Returns

`object`

##### offset?

> `optional` **offset**: `number`

##### projectionPoint?

> `optional` **projectionPoint**: `Point`

##### within

> **within**: `boolean`
