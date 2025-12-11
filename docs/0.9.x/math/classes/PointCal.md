[@ue-too/math](../globals.md) / PointCal

# Class: PointCal

Defined in: [index.ts:14](https://github.com/ue-too/ue-too/blob/fdbfb1431206f8d7c812dca3e1d0dcd7389f1d6d/packages/math/src/index.ts#L14)

## Constructors

### Constructor

> **new PointCal**(): `PointCal`

#### Returns

`PointCal`

## Methods

### addVector()

> `static` **addVector**(`a`, `b`): [`Point`](../type-aliases/Point-1.md)

Defined in: [index.ts:16](https://github.com/ue-too/ue-too/blob/fdbfb1431206f8d7c812dca3e1d0dcd7389f1d6d/packages/math/src/index.ts#L16)

#### Parameters

##### a

[`point`](../type-aliases/point.md)

##### b

[`point`](../type-aliases/point.md)

#### Returns

[`Point`](../type-aliases/Point-1.md)

***

### angleFromA2B()

> `static` **angleFromA2B**(`a`, `b`): `number`

Defined in: [index.ts:88](https://github.com/ue-too/ue-too/blob/fdbfb1431206f8d7c812dca3e1d0dcd7389f1d6d/packages/math/src/index.ts#L88)

#### Parameters

##### a

[`point`](../type-aliases/point.md)

##### b

[`point`](../type-aliases/point.md)

#### Returns

`number`

#### Description

Gets the angle from vector a to vector b. (returned angle is always between -π to π)

***

### crossProduct()

> `static` **crossProduct**(`a`, `b`): [`Point`](../type-aliases/Point-1.md)

Defined in: [index.ts:64](https://github.com/ue-too/ue-too/blob/fdbfb1431206f8d7c812dca3e1d0dcd7389f1d6d/packages/math/src/index.ts#L64)

#### Parameters

##### a

[`point`](../type-aliases/point.md)

##### b

[`point`](../type-aliases/point.md)

#### Returns

[`Point`](../type-aliases/Point-1.md)

***

### distanceBetweenPoints()

> `static` **distanceBetweenPoints**(`a`, `b`): `number`

Defined in: [index.ts:98](https://github.com/ue-too/ue-too/blob/fdbfb1431206f8d7c812dca3e1d0dcd7389f1d6d/packages/math/src/index.ts#L98)

#### Parameters

##### a

[`point`](../type-aliases/point.md)

##### b

[`point`](../type-aliases/point.md)

#### Returns

`number`

***

### divideVectorByScalar()

> `static` **divideVectorByScalar**(`a`, `b`): [`Point`](../type-aliases/Point-1.md)

Defined in: [index.ts:39](https://github.com/ue-too/ue-too/blob/fdbfb1431206f8d7c812dca3e1d0dcd7389f1d6d/packages/math/src/index.ts#L39)

#### Parameters

##### a

[`point`](../type-aliases/point.md)

##### b

`number`

#### Returns

[`Point`](../type-aliases/Point-1.md)

***

### dotProduct()

> `static` **dotProduct**(`a`, `b`): `number`

Defined in: [index.ts:55](https://github.com/ue-too/ue-too/blob/fdbfb1431206f8d7c812dca3e1d0dcd7389f1d6d/packages/math/src/index.ts#L55)

#### Parameters

##### a

[`point`](../type-aliases/point.md)

##### b

[`point`](../type-aliases/point.md)

#### Returns

`number`

***

### flipYAxis()

> `static` **flipYAxis**(`point`): [`Point`](../type-aliases/Point-1.md)

Defined in: [index.ts:102](https://github.com/ue-too/ue-too/blob/fdbfb1431206f8d7c812dca3e1d0dcd7389f1d6d/packages/math/src/index.ts#L102)

#### Parameters

##### point

[`point`](../type-aliases/point.md)

#### Returns

[`Point`](../type-aliases/Point-1.md)

***

### getLineIntersection()

> `static` **getLineIntersection**(`startPoint`, `endPoint`, `startPoint2`, `endPoint2`): `object`

Defined in: [index.ts:124](https://github.com/ue-too/ue-too/blob/fdbfb1431206f8d7c812dca3e1d0dcd7389f1d6d/packages/math/src/index.ts#L124)

#### Parameters

##### startPoint

[`Point`](../type-aliases/Point-1.md)

##### endPoint

[`Point`](../type-aliases/Point-1.md)

##### startPoint2

[`Point`](../type-aliases/Point-1.md)

##### endPoint2

[`Point`](../type-aliases/Point-1.md)

#### Returns

`object`

##### intersection?

> `optional` **intersection**: [`Point`](../type-aliases/Point-1.md)

##### intersects

> **intersects**: `boolean`

##### offset?

> `optional` **offset**: `number`

***

### isEqual()

> `static` **isEqual**(`a`, `b`): `boolean`

Defined in: [index.ts:114](https://github.com/ue-too/ue-too/blob/fdbfb1431206f8d7c812dca3e1d0dcd7389f1d6d/packages/math/src/index.ts#L114)

#### Parameters

##### a

[`point`](../type-aliases/point.md)

##### b

[`point`](../type-aliases/point.md)

#### Returns

`boolean`

***

### linearInterpolation()

> `static` **linearInterpolation**(`a`, `b`, `t`): [`point`](../type-aliases/point.md)

Defined in: [index.ts:106](https://github.com/ue-too/ue-too/blob/fdbfb1431206f8d7c812dca3e1d0dcd7389f1d6d/packages/math/src/index.ts#L106)

#### Parameters

##### a

[`point`](../type-aliases/point.md)

##### b

[`point`](../type-aliases/point.md)

##### t

`number`

#### Returns

[`point`](../type-aliases/point.md)

***

### magnitude()

> `static` **magnitude**(`a`): `number`

Defined in: [index.ts:45](https://github.com/ue-too/ue-too/blob/fdbfb1431206f8d7c812dca3e1d0dcd7389f1d6d/packages/math/src/index.ts#L45)

#### Parameters

##### a

[`point`](../type-aliases/point.md)

#### Returns

`number`

***

### multiplyVectorByScalar()

> `static` **multiplyVectorByScalar**(`a`, `b`): [`Point`](../type-aliases/Point-1.md)

Defined in: [index.ts:34](https://github.com/ue-too/ue-too/blob/fdbfb1431206f8d7c812dca3e1d0dcd7389f1d6d/packages/math/src/index.ts#L34)

#### Parameters

##### a

[`point`](../type-aliases/point.md)

##### b

`number`

#### Returns

[`Point`](../type-aliases/Point-1.md)

***

### rotatePoint()

> `static` **rotatePoint**(`point`, `angle`): [`Point`](../type-aliases/Point-1.md)

Defined in: [index.ts:76](https://github.com/ue-too/ue-too/blob/fdbfb1431206f8d7c812dca3e1d0dcd7389f1d6d/packages/math/src/index.ts#L76)

#### Parameters

##### point

[`point`](../type-aliases/point.md)

##### angle

`number`

#### Returns

[`Point`](../type-aliases/Point-1.md)

***

### subVector()

> `static` **subVector**(`a`, `b`): [`Point`](../type-aliases/Point-1.md)

Defined in: [index.ts:25](https://github.com/ue-too/ue-too/blob/fdbfb1431206f8d7c812dca3e1d0dcd7389f1d6d/packages/math/src/index.ts#L25)

#### Parameters

##### a

[`point`](../type-aliases/point.md)

##### b

[`point`](../type-aliases/point.md)

#### Returns

[`Point`](../type-aliases/Point-1.md)

***

### transform2NewAxis()

> `static` **transform2NewAxis**(`point`, `angleFromOriginalAxis2DestAxis`): [`Point`](../type-aliases/Point-1.md)

Defined in: [index.ts:80](https://github.com/ue-too/ue-too/blob/fdbfb1431206f8d7c812dca3e1d0dcd7389f1d6d/packages/math/src/index.ts#L80)

#### Parameters

##### point

[`point`](../type-aliases/point.md)

##### angleFromOriginalAxis2DestAxis

`number`

#### Returns

[`Point`](../type-aliases/Point-1.md)

***

### transformPointWRTAnchor()

> `static` **transformPointWRTAnchor**(`point`, `anchor`, `angle`): [`Point`](../type-aliases/Point-1.md)

Defined in: [index.ts:92](https://github.com/ue-too/ue-too/blob/fdbfb1431206f8d7c812dca3e1d0dcd7389f1d6d/packages/math/src/index.ts#L92)

#### Parameters

##### point

[`point`](../type-aliases/point.md)

##### anchor

[`point`](../type-aliases/point.md)

##### angle

`number`

#### Returns

[`Point`](../type-aliases/Point-1.md)

***

### unitVector()

> `static` **unitVector**(`a`): [`Point`](../type-aliases/Point-1.md)

Defined in: [index.ts:50](https://github.com/ue-too/ue-too/blob/fdbfb1431206f8d7c812dca3e1d0dcd7389f1d6d/packages/math/src/index.ts#L50)

#### Parameters

##### a

[`point`](../type-aliases/point.md)

#### Returns

[`Point`](../type-aliases/Point-1.md)

***

### unitVectorFromA2B()

> `static` **unitVectorFromA2B**(`a`, `b`): [`Point`](../type-aliases/Point-1.md)

Defined in: [index.ts:72](https://github.com/ue-too/ue-too/blob/fdbfb1431206f8d7c812dca3e1d0dcd7389f1d6d/packages/math/src/index.ts#L72)

#### Parameters

##### a

[`point`](../type-aliases/point.md)

##### b

[`point`](../type-aliases/point.md)

#### Returns

[`Point`](../type-aliases/Point-1.md)
