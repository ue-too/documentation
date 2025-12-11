[@ue-too/curve](../globals.md) / BCurve

# Class: BCurve

Defined in: [packages/curve/src/b-curve.ts:83](https://github.com/ue-too/ue-too/blob/c02efc01f7c19f3efc21823d0489e987a3e92427/packages/curve/src/b-curve.ts#L83)

## Constructors

### Constructor

> **new BCurve**(`controlPoints`): `BCurve`

Defined in: [packages/curve/src/b-curve.ts:117](https://github.com/ue-too/ue-too/blob/c02efc01f7c19f3efc21823d0489e987a3e92427/packages/curve/src/b-curve.ts#L117)

#### Parameters

##### controlPoints

[`Point`](../type-aliases/Point.md)[]

#### Returns

`BCurve`

## Accessors

### AABB

#### Get Signature

> **get** **AABB**(): `object`

Defined in: [packages/curve/src/b-curve.ts:924](https://github.com/ue-too/ue-too/blob/c02efc01f7c19f3efc21823d0489e987a3e92427/packages/curve/src/b-curve.ts#L924)

##### Returns

`object`

###### max

> **max**: [`Point`](../type-aliases/Point.md)

###### min

> **min**: [`Point`](../type-aliases/Point.md)

***

### fullLength

#### Get Signature

> **get** **fullLength**(): `number`

Defined in: [packages/curve/src/b-curve.ts:259](https://github.com/ue-too/ue-too/blob/c02efc01f7c19f3efc21823d0489e987a3e92427/packages/curve/src/b-curve.ts#L259)

##### Returns

`number`

## Methods

### advanceAtTWithLength()

> **advanceAtTWithLength**(`tVal`, `length`): `AdvanceAtTWithLengthRes`

Defined in: [packages/curve/src/b-curve.ts:730](https://github.com/ue-too/ue-too/blob/c02efc01f7c19f3efc21823d0489e987a3e92427/packages/curve/src/b-curve.ts#L730)

#### Parameters

##### tVal

`number`

##### length

`number`

#### Returns

`AdvanceAtTWithLengthRes`

***

### advanceByDistance()

> **advanceByDistance**(`startT`, `distance`): `AdvanceAtTWithLengthRes`

Defined in: [packages/curve/src/b-curve.ts:812](https://github.com/ue-too/ue-too/blob/c02efc01f7c19f3efc21823d0489e987a3e92427/packages/curve/src/b-curve.ts#L812)

#### Parameters

##### startT

`number`

##### distance

`number`

#### Returns

`AdvanceAtTWithLengthRes`

***

### compute()

> **compute**(`tVal`): [`Point`](../type-aliases/Point.md)

Defined in: [packages/curve/src/b-curve.ts:193](https://github.com/ue-too/ue-too/blob/c02efc01f7c19f3efc21823d0489e987a3e92427/packages/curve/src/b-curve.ts#L193)

#### Parameters

##### tVal

`number`

#### Returns

[`Point`](../type-aliases/Point.md)

***

### curvature()

> **curvature**(`tVal`): `number`

Defined in: [packages/curve/src/b-curve.ts:546](https://github.com/ue-too/ue-too/blob/c02efc01f7c19f3efc21823d0489e987a3e92427/packages/curve/src/b-curve.ts#L546)

#### Parameters

##### tVal

`number`

#### Returns

`number`

***

### derivative()

> **derivative**(`tVal`): [`Point`](../type-aliases/Point.md)

Defined in: [packages/curve/src/b-curve.ts:290](https://github.com/ue-too/ue-too/blob/c02efc01f7c19f3efc21823d0489e987a3e92427/packages/curve/src/b-curve.ts#L290)

#### Parameters

##### tVal

`number`

#### Returns

[`Point`](../type-aliases/Point.md)

***

### derivativeNormalized()

> **derivativeNormalized**(`tVal`): [`Point`](../type-aliases/Point.md)

Defined in: [packages/curve/src/b-curve.ts:294](https://github.com/ue-too/ue-too/blob/c02efc01f7c19f3efc21823d0489e987a3e92427/packages/curve/src/b-curve.ts#L294)

#### Parameters

##### tVal

`number`

#### Returns

[`Point`](../type-aliases/Point.md)

***

### determinant3by3()

> **determinant3by3**(`matrix`): `number`

Defined in: [packages/curve/src/b-curve.ts:533](https://github.com/ue-too/ue-too/blob/c02efc01f7c19f3efc21823d0489e987a3e92427/packages/curve/src/b-curve.ts#L533)

#### Parameters

##### matrix

`number`[][]

#### Returns

`number`

***

### findArcs()

> **findArcs**(`errorThreshold`): `object`[]

Defined in: [packages/curve/src/b-curve.ts:447](https://github.com/ue-too/ue-too/blob/c02efc01f7c19f3efc21823d0489e987a3e92427/packages/curve/src/b-curve.ts#L447)

#### Parameters

##### errorThreshold

`number`

#### Returns

`object`[]

***

### findArcStartingAt()

> **findArcStartingAt**(`errorThreshold`, `low`): \{ `arc?`: \{ `center`: [`Point`](../type-aliases/Point.md); `endPoint`: [`Point`](../type-aliases/Point.md); `endT`: `number`; `radius`: `number`; `startPoint`: [`Point`](../type-aliases/Point.md); `startT`: `number`; \}; `good`: `boolean`; \} \| `null`

Defined in: [packages/curve/src/b-curve.ts:465](https://github.com/ue-too/ue-too/blob/c02efc01f7c19f3efc21823d0489e987a3e92427/packages/curve/src/b-curve.ts#L465)

#### Parameters

##### errorThreshold

`number`

##### low

`number`

#### Returns

\{ `arc?`: \{ `center`: [`Point`](../type-aliases/Point.md); `endPoint`: [`Point`](../type-aliases/Point.md); `endT`: `number`; `radius`: `number`; `startPoint`: [`Point`](../type-aliases/Point.md); `startT`: `number`; \}; `good`: `boolean`; \} \| `null`

***

### findClosest()

> **findClosest**(`x`, `y`, `LUT`, `circleRadius`, `distanceEpsilon`, `pd2?`, `pd1?`): `number`

Defined in: [packages/curve/src/b-curve.ts:891](https://github.com/ue-too/ue-too/blob/c02efc01f7c19f3efc21823d0489e987a3e92427/packages/curve/src/b-curve.ts#L891)

#### Parameters

##### x

`number`

##### y

`number`

##### LUT

`object`[]

##### circleRadius

`number`

##### distanceEpsilon

`number` = `5`

##### pd2?

`number`

##### pd1?

`number`

#### Returns

`number`

***

### fitArc()

> **fitArc**(`startPoint`, `endPoint`, `midPoint`): `object`

Defined in: [packages/curve/src/b-curve.ts:512](https://github.com/ue-too/ue-too/blob/c02efc01f7c19f3efc21823d0489e987a3e92427/packages/curve/src/b-curve.ts#L512)

#### Parameters

##### startPoint

[`Point`](../type-aliases/Point.md)

##### endPoint

[`Point`](../type-aliases/Point.md)

##### midPoint

[`Point`](../type-aliases/Point.md)

#### Returns

`object`

##### center?

> `optional` **center**: [`Point`](../type-aliases/Point.md)

##### endPoint?

> `optional` **endPoint**: [`Point`](../type-aliases/Point.md)

##### exists

> **exists**: `boolean`

##### radius?

> `optional` **radius**: `number`

##### startPoint?

> `optional` **startPoint**: [`Point`](../type-aliases/Point.md)

***

### get()

> **get**(`tVal`): [`Point`](../type-aliases/Point.md)

Defined in: [packages/curve/src/b-curve.ts:206](https://github.com/ue-too/ue-too/blob/c02efc01f7c19f3efc21823d0489e987a3e92427/packages/curve/src/b-curve.ts#L206)

#### Parameters

##### tVal

`number`

#### Returns

[`Point`](../type-aliases/Point.md)

***

### getArcLengthLUT()

> **getArcLengthLUT**(`steps`): `object`

Defined in: [packages/curve/src/b-curve.ts:298](https://github.com/ue-too/ue-too/blob/c02efc01f7c19f3efc21823d0489e987a3e92427/packages/curve/src/b-curve.ts#L298)

#### Parameters

##### steps

`number` = `50`

#### Returns

`object`

##### arcLengthLUT

> **arcLengthLUT**: `object`[]

##### controlPoints

> **controlPoints**: [`Point`](../type-aliases/Point.md)[]

***

### getCacheStats()

> **getCacheStats**(): `object`

Defined in: [packages/curve/src/b-curve.ts:95](https://github.com/ue-too/ue-too/blob/c02efc01f7c19f3efc21823d0489e987a3e92427/packages/curve/src/b-curve.ts#L95)

Gets cache statistics for performance monitoring

#### Returns

`object`

Object containing cache size and hit rate information

##### hitRate

> **hitRate**: `number`

##### size

> **size**: `number`

***

### getCircleIntersections()

> **getCircleIntersections**(`circleCenter`, `circleRadius`): `object`[]

Defined in: [packages/curve/src/b-curve.ts:693](https://github.com/ue-too/ue-too/blob/c02efc01f7c19f3efc21823d0489e987a3e92427/packages/curve/src/b-curve.ts#L693)

#### Parameters

##### circleCenter

[`Point`](../type-aliases/Point.md)

##### circleRadius

`number`

#### Returns

`object`[]

***

### getCoefficientOfTTerms()

> **getCoefficientOfTTerms**(): [`Point`](../type-aliases/Point.md)[]

Defined in: [packages/curve/src/b-curve.ts:559](https://github.com/ue-too/ue-too/blob/c02efc01f7c19f3efc21823d0489e987a3e92427/packages/curve/src/b-curve.ts#L559)

#### Returns

[`Point`](../type-aliases/Point.md)[]

***

### getCoefficientOfTTermsWithControlPoints()

> **getCoefficientOfTTermsWithControlPoints**(`controlPoints`): [`Point`](../type-aliases/Point.md)[]

Defined in: [packages/curve/src/b-curve.ts:567](https://github.com/ue-too/ue-too/blob/c02efc01f7c19f3efc21823d0489e987a3e92427/packages/curve/src/b-curve.ts#L567)

#### Parameters

##### controlPoints

[`Point`](../type-aliases/Point.md)[]

#### Returns

[`Point`](../type-aliases/Point.md)[]

***

### getControlPoints()

> **getControlPoints**(): [`Point`](../type-aliases/Point.md)[]

Defined in: [packages/curve/src/b-curve.ts:167](https://github.com/ue-too/ue-too/blob/c02efc01f7c19f3efc21823d0489e987a3e92427/packages/curve/src/b-curve.ts#L167)

#### Returns

[`Point`](../type-aliases/Point.md)[]

***

### getControlPointsAlignedWithXAxis()

> **getControlPointsAlignedWithXAxis**(): `object`[]

Defined in: [packages/curve/src/b-curve.ts:588](https://github.com/ue-too/ue-too/blob/c02efc01f7c19f3efc21823d0489e987a3e92427/packages/curve/src/b-curve.ts#L588)

#### Returns

`object`[]

***

### getCurveIntersections()

> **getCurveIntersections**(`curve`, `deduplicationTolerance?`): `object`[]

Defined in: [packages/curve/src/b-curve.ts:920](https://github.com/ue-too/ue-too/blob/c02efc01f7c19f3efc21823d0489e987a3e92427/packages/curve/src/b-curve.ts#L920)

#### Parameters

##### curve

`BCurve`

##### deduplicationTolerance?

`number`

#### Returns

`object`[]

***

### getDerivativeCoefficients()

> **getDerivativeCoefficients**(): [`Point`](../type-aliases/Point.md)[]

Defined in: [packages/curve/src/b-curve.ts:563](https://github.com/ue-too/ue-too/blob/c02efc01f7c19f3efc21823d0489e987a3e92427/packages/curve/src/b-curve.ts#L563)

#### Returns

[`Point`](../type-aliases/Point.md)[]

***

### getDerivativeControlPoints()

> **getDerivativeControlPoints**(`controlPoints`): [`Point`](../type-aliases/Point.md)[]

Defined in: [packages/curve/src/b-curve.ts:153](https://github.com/ue-too/ue-too/blob/c02efc01f7c19f3efc21823d0489e987a3e92427/packages/curve/src/b-curve.ts#L153)

#### Parameters

##### controlPoints

[`Point`](../type-aliases/Point.md)[]

#### Returns

[`Point`](../type-aliases/Point.md)[]

***

### getExtrema()

> **getExtrema**(): `object`

Defined in: [packages/curve/src/b-curve.ts:601](https://github.com/ue-too/ue-too/blob/c02efc01f7c19f3efc21823d0489e987a3e92427/packages/curve/src/b-curve.ts#L601)

#### Returns

`object`

##### x

> **x**: `number`[]

##### y

> **y**: `number`[]

***

### getLineIntersections()

> **getLineIntersections**(`line`): `number`[]

Defined in: [packages/curve/src/b-curve.ts:658](https://github.com/ue-too/ue-too/blob/c02efc01f7c19f3efc21823d0489e987a3e92427/packages/curve/src/b-curve.ts#L658)

#### Parameters

##### line

[`Line`](Line.md)

#### Returns

`number`[]

***

### getLUT()

> **getLUT**(`steps`): [`Point`](../type-aliases/Point.md)[]

Defined in: [packages/curve/src/b-curve.ts:226](https://github.com/ue-too/ue-too/blob/c02efc01f7c19f3efc21823d0489e987a3e92427/packages/curve/src/b-curve.ts#L226)

#### Parameters

##### steps

`number` = `100`

#### Returns

[`Point`](../type-aliases/Point.md)[]

***

### getLUTWithTVal()

> **getLUTWithTVal**(`steps?`): `object`[]

Defined in: [packages/curve/src/b-curve.ts:241](https://github.com/ue-too/ue-too/blob/c02efc01f7c19f3efc21823d0489e987a3e92427/packages/curve/src/b-curve.ts#L241)

#### Parameters

##### steps?

`number`

#### Returns

`object`[]

***

### getPointbyPercentage()

> **getPointbyPercentage**(`percentage`): [`Point`](../type-aliases/Point.md)

Defined in: [packages/curve/src/b-curve.ts:126](https://github.com/ue-too/ue-too/blob/c02efc01f7c19f3efc21823d0489e987a3e92427/packages/curve/src/b-curve.ts#L126)

#### Parameters

##### percentage

`number`

#### Returns

[`Point`](../type-aliases/Point.md)

***

### getProjection()

> **getProjection**(`point`): `object`

Defined in: [packages/curve/src/b-curve.ts:387](https://github.com/ue-too/ue-too/blob/c02efc01f7c19f3efc21823d0489e987a3e92427/packages/curve/src/b-curve.ts#L387)

#### Parameters

##### point

[`Point`](../type-aliases/Point.md)

#### Returns

`object`

##### projection

> **projection**: [`Point`](../type-aliases/Point.md) = `preliminaryProjectionPoint`

##### tVal

> **tVal**: `number` = `preliminaryProjectionTVal`

***

### getSelfIntersections()

> **getSelfIntersections**(): `object`[]

Defined in: [packages/curve/src/b-curve.ts:680](https://github.com/ue-too/ue-too/blob/c02efc01f7c19f3efc21823d0489e987a3e92427/packages/curve/src/b-curve.ts#L680)

#### Returns

`object`[]

***

### lengthAtT()

> **lengthAtT**(`tVal`): `number`

Defined in: [packages/curve/src/b-curve.ts:267](https://github.com/ue-too/ue-too/blob/c02efc01f7c19f3efc21823d0489e987a3e92427/packages/curve/src/b-curve.ts#L267)

#### Parameters

##### tVal

`number`

#### Returns

`number`

***

### normal()

> **normal**(`tVal`): `object`

Defined in: [packages/curve/src/b-curve.ts:946](https://github.com/ue-too/ue-too/blob/c02efc01f7c19f3efc21823d0489e987a3e92427/packages/curve/src/b-curve.ts#L946)

#### Parameters

##### tVal

`number`

#### Returns

`object`

##### direction

> **direction**: [`Point`](../type-aliases/Point.md)

##### tVal

> **tVal**: `number`

***

### preWarmCache()

> **preWarmCache**(`steps`): `void`

Defined in: [packages/curve/src/b-curve.ts:106](https://github.com/ue-too/ue-too/blob/c02efc01f7c19f3efc21823d0489e987a3e92427/packages/curve/src/b-curve.ts#L106)

Pre-warms the cache with commonly used t values for better performance

#### Parameters

##### steps

`number` = `100`

Number of steps to pre-cache (default: 100)

#### Returns

`void`

***

### refineBinary()

> **refineBinary**(`curve`, `x`, `y`, `LUT`, `i`, `targetDistance`, `epsilon`): \{ `distance`: `number`; `point`: [`Point`](../type-aliases/Point.md); `tVal`: `number`; \} \| `undefined`

Defined in: [packages/curve/src/b-curve.ts:846](https://github.com/ue-too/ue-too/blob/c02efc01f7c19f3efc21823d0489e987a3e92427/packages/curve/src/b-curve.ts#L846)

#### Parameters

##### curve

`BCurve`

##### x

`number`

##### y

`number`

##### LUT

`object`[]

##### i

`number`

##### targetDistance

`number` = `0`

##### epsilon

`number` = `0.01`

#### Returns

\{ `distance`: `number`; `point`: [`Point`](../type-aliases/Point.md); `tVal`: `number`; \} \| `undefined`

***

### secondDerivative()

> **secondDerivative**(`tVal`): [`Point`](../type-aliases/Point.md)

Defined in: [packages/curve/src/b-curve.ts:555](https://github.com/ue-too/ue-too/blob/c02efc01f7c19f3efc21823d0489e987a3e92427/packages/curve/src/b-curve.ts#L555)

#### Parameters

##### tVal

`number`

#### Returns

[`Point`](../type-aliases/Point.md)

***

### setControlPointAtIndex()

> **setControlPointAtIndex**(`index`, `newPoint`): `boolean`

Defined in: [packages/curve/src/b-curve.ts:180](https://github.com/ue-too/ue-too/blob/c02efc01f7c19f3efc21823d0489e987a3e92427/packages/curve/src/b-curve.ts#L180)

#### Parameters

##### index

`number`

##### newPoint

[`Point`](../type-aliases/Point.md)

#### Returns

`boolean`

***

### setControlPoints()

> **setControlPoints**(`controlPoints`): `void`

Defined in: [packages/curve/src/b-curve.ts:171](https://github.com/ue-too/ue-too/blob/c02efc01f7c19f3efc21823d0489e987a3e92427/packages/curve/src/b-curve.ts#L171)

#### Parameters

##### controlPoints

[`Point`](../type-aliases/Point.md)[]

#### Returns

`void`

***

### split()

> **split**(`tVal`): \[[`Point`](../type-aliases/Point.md)[], [`Point`](../type-aliases/Point.md)[]\]

Defined in: [packages/curve/src/b-curve.ts:323](https://github.com/ue-too/ue-too/blob/c02efc01f7c19f3efc21823d0489e987a3e92427/packages/curve/src/b-curve.ts#L323)

#### Parameters

##### tVal

`number`

#### Returns

\[[`Point`](../type-aliases/Point.md)[], [`Point`](../type-aliases/Point.md)[]\]

***

### splitAndTakeMidCurve()

> **splitAndTakeMidCurve**(`tVal`, `tVal2`): `BCurve`

Defined in: [packages/curve/src/b-curve.ts:382](https://github.com/ue-too/ue-too/blob/c02efc01f7c19f3efc21823d0489e987a3e92427/packages/curve/src/b-curve.ts#L382)

#### Parameters

##### tVal

`number`

##### tVal2

`number`

#### Returns

`BCurve`

***

### splitIn3Curves()

> **splitIn3Curves**(`tVal`, `tVal2`): \[`BCurve`, `BCurve`, `BCurve`\]

Defined in: [packages/curve/src/b-curve.ts:366](https://github.com/ue-too/ue-too/blob/c02efc01f7c19f3efc21823d0489e987a3e92427/packages/curve/src/b-curve.ts#L366)

#### Parameters

##### tVal

`number`

##### tVal2

`number`

#### Returns

\[`BCurve`, `BCurve`, `BCurve`\]

***

### splitIn3WithControlPoints()

> **splitIn3WithControlPoints**(`tVal`, `tVal2`): \[[`Point`](../type-aliases/Point.md)[], [`Point`](../type-aliases/Point.md)[], [`Point`](../type-aliases/Point.md)[]\]

Defined in: [packages/curve/src/b-curve.ts:349](https://github.com/ue-too/ue-too/blob/c02efc01f7c19f3efc21823d0489e987a3e92427/packages/curve/src/b-curve.ts#L349)

#### Parameters

##### tVal

`number`

##### tVal2

`number`

#### Returns

\[[`Point`](../type-aliases/Point.md)[], [`Point`](../type-aliases/Point.md)[], [`Point`](../type-aliases/Point.md)[]\]

***

### splitIntoCurves()

> **splitIntoCurves**(`tVal`): \[`BCurve`, `BCurve`\]

Defined in: [packages/curve/src/b-curve.ts:318](https://github.com/ue-too/ue-too/blob/c02efc01f7c19f3efc21823d0489e987a3e92427/packages/curve/src/b-curve.ts#L318)

#### Parameters

##### tVal

`number`

#### Returns

\[`BCurve`, `BCurve`\]

***

### translateRotateControlPoints()

> **translateRotateControlPoints**(`translation`, `rotationAngle`): [`Point`](../type-aliases/Point.md)[]

Defined in: [packages/curve/src/b-curve.ts:649](https://github.com/ue-too/ue-too/blob/c02efc01f7c19f3efc21823d0489e987a3e92427/packages/curve/src/b-curve.ts#L649)

#### Parameters

##### translation

[`Point`](../type-aliases/Point.md)

##### rotationAngle

`number`

#### Returns

[`Point`](../type-aliases/Point.md)[]
