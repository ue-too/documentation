[@ue-too/curve](../../modules.md) / [index](../index.md) / BCurve

# Class: BCurve

Defined in: [packages/curve/src/b-curve.ts:134](https://github.com/ue-too/ue-too/blob/9b787448328cf446379b1ea4cc5f4c79149cbec8/packages/curve/src/b-curve.ts#L134)

Bezier curve class supporting quadratic (3 points) and cubic (4 points) curves.

## Remarks

BCurve provides a comprehensive implementation of Bezier curves with:
- Curve evaluation at any parameter t (0 to 1)
- Arc-length calculation with caching for performance
- Curve splitting and subdivision
- Geometric queries (projection, intersection, extrema)
- Advanced operations (offset, arc fitting, curvature)

## Performance Optimizations
- Optimized formulas for quadratic and cubic curves
- Arc-length caching to avoid recomputation
- Lazy computation of lookup tables (LUT)
- Gauss-Legendre quadrature for arc-length calculation

## Coordinate System
- Parameter t ranges from 0 (start) to 1 (end)
- Points use {x, y} coordinates
- Supports 2D curves (z-coordinate optional but not used)

## Example

Create and evaluate a cubic Bezier curve
```typescript
const curve = new BCurve([
  { x: 0, y: 0 },     // Start point
  { x: 33, y: 100 },  // Control point 1
  { x: 66, y: 100 },  // Control point 2
  { x: 100, y: 0 }    // End point
]);

// Evaluate at different positions
const start = curve.get(0);    // { x: 0, y: 0 }
const mid = curve.get(0.5);    // Midpoint
const end = curve.get(1);      // { x: 100, y: 0 }

// Get curve length
console.log('Length:', curve.fullLength);

// Get derivative (tangent vector)
const tangent = curve.derivative(0.5);
```

## Constructors

### Constructor

> **new BCurve**(`controlPoints`): `BCurve`

Defined in: [packages/curve/src/b-curve.ts:170](https://github.com/ue-too/ue-too/blob/9b787448328cf446379b1ea4cc5f4c79149cbec8/packages/curve/src/b-curve.ts#L170)

#### Parameters

##### controlPoints

[`Point`](../type-aliases/Point.md)[]

#### Returns

`BCurve`

## Accessors

### AABB

#### Get Signature

> **get** **AABB**(): `object`

Defined in: [packages/curve/src/b-curve.ts:1464](https://github.com/ue-too/ue-too/blob/9b787448328cf446379b1ea4cc5f4c79149cbec8/packages/curve/src/b-curve.ts#L1464)

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

Defined in: [packages/curve/src/b-curve.ts:422](https://github.com/ue-too/ue-too/blob/9b787448328cf446379b1ea4cc5f4c79149cbec8/packages/curve/src/b-curve.ts#L422)

##### Returns

`number`

## Methods

### advanceAtTWithLength()

> **advanceAtTWithLength**(`tVal`, `length`): `AdvanceAtTWithLengthRes`

Defined in: [packages/curve/src/b-curve.ts:1213](https://github.com/ue-too/ue-too/blob/9b787448328cf446379b1ea4cc5f4c79149cbec8/packages/curve/src/b-curve.ts#L1213)

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

Defined in: [packages/curve/src/b-curve.ts:1301](https://github.com/ue-too/ue-too/blob/9b787448328cf446379b1ea4cc5f4c79149cbec8/packages/curve/src/b-curve.ts#L1301)

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

Defined in: [packages/curve/src/b-curve.ts:326](https://github.com/ue-too/ue-too/blob/9b787448328cf446379b1ea4cc5f4c79149cbec8/packages/curve/src/b-curve.ts#L326)

#### Parameters

##### tVal

`number`

#### Returns

[`Point`](../type-aliases/Point.md)

***

### curvature()

> **curvature**(`tVal`): `number`

Defined in: [packages/curve/src/b-curve.ts:932](https://github.com/ue-too/ue-too/blob/9b787448328cf446379b1ea4cc5f4c79149cbec8/packages/curve/src/b-curve.ts#L932)

#### Parameters

##### tVal

`number`

#### Returns

`number`

***

### derivative()

> **derivative**(`tVal`): [`Point`](../type-aliases/Point.md)

Defined in: [packages/curve/src/b-curve.ts:454](https://github.com/ue-too/ue-too/blob/9b787448328cf446379b1ea4cc5f4c79149cbec8/packages/curve/src/b-curve.ts#L454)

#### Parameters

##### tVal

`number`

#### Returns

[`Point`](../type-aliases/Point.md)

***

### derivativeByPercentage()

> **derivativeByPercentage**(`percentage`): [`Point`](../type-aliases/Point.md)

Defined in: [packages/curve/src/b-curve.ts:235](https://github.com/ue-too/ue-too/blob/9b787448328cf446379b1ea4cc5f4c79149cbec8/packages/curve/src/b-curve.ts#L235)

Gets the derivative (tangent vector) at a given percentage of the curve length.

#### Parameters

##### percentage

`number`

Percentage of the curve length (0 to 1), where 0 is the start and 1 is the end

#### Returns

[`Point`](../type-aliases/Point.md)

The derivative vector at the specified percentage along the curve

#### Remarks

This method calculates the derivative at a point specified by percentage of arc length,
not by the parameter t. This is useful when you want to sample the curve uniformly
by distance rather than by parameter value.

#### Example

```typescript
const curve = new BCurve([...]);
const tangent = curve.derivativeByPercentage(0.5); // Derivative at midpoint
const normalized = PointCal.unitVector(tangent); // Normalize for direction
```

***

### derivativeNormalized()

> **derivativeNormalized**(`tVal`): [`Point`](../type-aliases/Point.md)

Defined in: [packages/curve/src/b-curve.ts:458](https://github.com/ue-too/ue-too/blob/9b787448328cf446379b1ea4cc5f4c79149cbec8/packages/curve/src/b-curve.ts#L458)

#### Parameters

##### tVal

`number`

#### Returns

[`Point`](../type-aliases/Point.md)

***

### determinant3by3()

> **determinant3by3**(`matrix`): `number`

Defined in: [packages/curve/src/b-curve.ts:919](https://github.com/ue-too/ue-too/blob/9b787448328cf446379b1ea4cc5f4c79149cbec8/packages/curve/src/b-curve.ts#L919)

#### Parameters

##### matrix

`number`[][]

#### Returns

`number`

***

### findArcs()

> **findArcs**(`errorThreshold`): `object`[]

Defined in: [packages/curve/src/b-curve.ts:732](https://github.com/ue-too/ue-too/blob/9b787448328cf446379b1ea4cc5f4c79149cbec8/packages/curve/src/b-curve.ts#L732)

#### Parameters

##### errorThreshold

`number`

#### Returns

`object`[]

***

### findArcStartingAt()

> **findArcStartingAt**(`errorThreshold`, `low`): \{ `arc?`: \{ `center`: [`Point`](../type-aliases/Point.md); `endPoint`: [`Point`](../type-aliases/Point.md); `endT`: `number`; `radius`: `number`; `startPoint`: [`Point`](../type-aliases/Point.md); `startT`: `number`; \}; `good`: `boolean`; \} \| `null`

Defined in: [packages/curve/src/b-curve.ts:767](https://github.com/ue-too/ue-too/blob/9b787448328cf446379b1ea4cc5f4c79149cbec8/packages/curve/src/b-curve.ts#L767)

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

Defined in: [packages/curve/src/b-curve.ts:1410](https://github.com/ue-too/ue-too/blob/9b787448328cf446379b1ea4cc5f4c79149cbec8/packages/curve/src/b-curve.ts#L1410)

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

Defined in: [packages/curve/src/b-curve.ts:846](https://github.com/ue-too/ue-too/blob/9b787448328cf446379b1ea4cc5f4c79149cbec8/packages/curve/src/b-curve.ts#L846)

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

Defined in: [packages/curve/src/b-curve.ts:342](https://github.com/ue-too/ue-too/blob/9b787448328cf446379b1ea4cc5f4c79149cbec8/packages/curve/src/b-curve.ts#L342)

#### Parameters

##### tVal

`number`

#### Returns

[`Point`](../type-aliases/Point.md)

***

### getArcLengthLUT()

> **getArcLengthLUT**(`steps`): `object`

Defined in: [packages/curve/src/b-curve.ts:464](https://github.com/ue-too/ue-too/blob/9b787448328cf446379b1ea4cc5f4c79149cbec8/packages/curve/src/b-curve.ts#L464)

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

### getArcs()

> **getArcs**(`errorThreshold`): `object`[]

Defined in: [packages/curve/src/b-curve.ts:763](https://github.com/ue-too/ue-too/blob/9b787448328cf446379b1ea4cc5f4c79149cbec8/packages/curve/src/b-curve.ts#L763)

Get a sequence of circular arcs that approximate the curve.

#### Parameters

##### errorThreshold

`number`

Maximum allowed radial error when fitting an arc.

#### Returns

`object`[]

A list of arcs that cover the curve from \(t=0\) to \(t=1\).

***

### getCacheStats()

> **getCacheStats**(): `object`

Defined in: [packages/curve/src/b-curve.ts:148](https://github.com/ue-too/ue-too/blob/9b787448328cf446379b1ea4cc5f4c79149cbec8/packages/curve/src/b-curve.ts#L148)

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

Defined in: [packages/curve/src/b-curve.ts:1156](https://github.com/ue-too/ue-too/blob/9b787448328cf446379b1ea4cc5f4c79149cbec8/packages/curve/src/b-curve.ts#L1156)

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

Defined in: [packages/curve/src/b-curve.ts:956](https://github.com/ue-too/ue-too/blob/9b787448328cf446379b1ea4cc5f4c79149cbec8/packages/curve/src/b-curve.ts#L956)

#### Returns

[`Point`](../type-aliases/Point.md)[]

***

### getCoefficientOfTTermsWithControlPoints()

> **getCoefficientOfTTermsWithControlPoints**(`controlPoints`): [`Point`](../type-aliases/Point.md)[]

Defined in: [packages/curve/src/b-curve.ts:966](https://github.com/ue-too/ue-too/blob/9b787448328cf446379b1ea4cc5f4c79149cbec8/packages/curve/src/b-curve.ts#L966)

#### Parameters

##### controlPoints

[`Point`](../type-aliases/Point.md)[]

#### Returns

[`Point`](../type-aliases/Point.md)[]

***

### getControlPoints()

> **getControlPoints**(): [`Point`](../type-aliases/Point.md)[]

Defined in: [packages/curve/src/b-curve.ts:296](https://github.com/ue-too/ue-too/blob/9b787448328cf446379b1ea4cc5f4c79149cbec8/packages/curve/src/b-curve.ts#L296)

#### Returns

[`Point`](../type-aliases/Point.md)[]

***

### getControlPointsAlignedWithXAxis()

> **getControlPointsAlignedWithXAxis**(): `object`[]

Defined in: [packages/curve/src/b-curve.ts:1008](https://github.com/ue-too/ue-too/blob/9b787448328cf446379b1ea4cc5f4c79149cbec8/packages/curve/src/b-curve.ts#L1008)

#### Returns

`object`[]

***

### getCurveIntersections()

> **getCurveIntersections**(`curve`, `deduplicationTolerance?`): `object`[]

Defined in: [packages/curve/src/b-curve.ts:1453](https://github.com/ue-too/ue-too/blob/9b787448328cf446379b1ea4cc5f4c79149cbec8/packages/curve/src/b-curve.ts#L1453)

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

Defined in: [packages/curve/src/b-curve.ts:960](https://github.com/ue-too/ue-too/blob/9b787448328cf446379b1ea4cc5f4c79149cbec8/packages/curve/src/b-curve.ts#L960)

#### Returns

[`Point`](../type-aliases/Point.md)[]

***

### getDerivativeControlPoints()

> **getDerivativeControlPoints**(`controlPoints`): [`Point`](../type-aliases/Point.md)[]

Defined in: [packages/curve/src/b-curve.ts:272](https://github.com/ue-too/ue-too/blob/9b787448328cf446379b1ea4cc5f4c79149cbec8/packages/curve/src/b-curve.ts#L272)

#### Parameters

##### controlPoints

[`Point`](../type-aliases/Point.md)[]

#### Returns

[`Point`](../type-aliases/Point.md)[]

***

### getExtrema()

> **getExtrema**(): `object`

Defined in: [packages/curve/src/b-curve.ts:1027](https://github.com/ue-too/ue-too/blob/9b787448328cf446379b1ea4cc5f4c79149cbec8/packages/curve/src/b-curve.ts#L1027)

#### Returns

`object`

##### x

> **x**: `number`[]

##### y

> **y**: `number`[]

***

### getLineIntersections()

> **getLineIntersections**(`line`): `number`[]

Defined in: [packages/curve/src/b-curve.ts:1111](https://github.com/ue-too/ue-too/blob/9b787448328cf446379b1ea4cc5f4c79149cbec8/packages/curve/src/b-curve.ts#L1111)

#### Parameters

##### line

[`Line`](Line.md)

#### Returns

`number`[]

***

### getLUT()

> **getLUT**(`steps`): [`Point`](../type-aliases/Point.md)[]

Defined in: [packages/curve/src/b-curve.ts:389](https://github.com/ue-too/ue-too/blob/9b787448328cf446379b1ea4cc5f4c79149cbec8/packages/curve/src/b-curve.ts#L389)

#### Parameters

##### steps

`number` = `100`

#### Returns

[`Point`](../type-aliases/Point.md)[]

***

### getLUTWithTVal()

> **getLUTWithTVal**(`steps?`): `object`[]

Defined in: [packages/curve/src/b-curve.ts:404](https://github.com/ue-too/ue-too/blob/9b787448328cf446379b1ea4cc5f4c79149cbec8/packages/curve/src/b-curve.ts#L404)

#### Parameters

##### steps?

`number`

#### Returns

`object`[]

***

### getPointbyPercentage()

> **getPointbyPercentage**(`percentage`): [`Point`](../type-aliases/Point.md)

Defined in: [packages/curve/src/b-curve.ts:181](https://github.com/ue-too/ue-too/blob/9b787448328cf446379b1ea4cc5f4c79149cbec8/packages/curve/src/b-curve.ts#L181)

#### Parameters

##### percentage

`number`

#### Returns

[`Point`](../type-aliases/Point.md)

***

### getProjection()

> **getProjection**(`point`): `object`

Defined in: [packages/curve/src/b-curve.ts:661](https://github.com/ue-too/ue-too/blob/9b787448328cf446379b1ea4cc5f4c79149cbec8/packages/curve/src/b-curve.ts#L661)

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

Defined in: [packages/curve/src/b-curve.ts:1142](https://github.com/ue-too/ue-too/blob/9b787448328cf446379b1ea4cc5f4c79149cbec8/packages/curve/src/b-curve.ts#L1142)

#### Returns

`object`[]

***

### lengthAtT()

> **lengthAtT**(`tVal`): `number`

Defined in: [packages/curve/src/b-curve.ts:430](https://github.com/ue-too/ue-too/blob/9b787448328cf446379b1ea4cc5f4c79149cbec8/packages/curve/src/b-curve.ts#L430)

#### Parameters

##### tVal

`number`

#### Returns

`number`

***

### normal()

> **normal**(`tVal`): `object`

Defined in: [packages/curve/src/b-curve.ts:1486](https://github.com/ue-too/ue-too/blob/9b787448328cf446379b1ea4cc5f4c79149cbec8/packages/curve/src/b-curve.ts#L1486)

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

Defined in: [packages/curve/src/b-curve.ts:159](https://github.com/ue-too/ue-too/blob/9b787448328cf446379b1ea4cc5f4c79149cbec8/packages/curve/src/b-curve.ts#L159)

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

Defined in: [packages/curve/src/b-curve.ts:1349](https://github.com/ue-too/ue-too/blob/9b787448328cf446379b1ea4cc5f4c79149cbec8/packages/curve/src/b-curve.ts#L1349)

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

Defined in: [packages/curve/src/b-curve.ts:949](https://github.com/ue-too/ue-too/blob/9b787448328cf446379b1ea4cc5f4c79149cbec8/packages/curve/src/b-curve.ts#L949)

#### Parameters

##### tVal

`number`

#### Returns

[`Point`](../type-aliases/Point.md)

***

### setControlPointAtIndex()

> **setControlPointAtIndex**(`index`, `newPoint`): `boolean`

Defined in: [packages/curve/src/b-curve.ts:311](https://github.com/ue-too/ue-too/blob/9b787448328cf446379b1ea4cc5f4c79149cbec8/packages/curve/src/b-curve.ts#L311)

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

Defined in: [packages/curve/src/b-curve.ts:300](https://github.com/ue-too/ue-too/blob/9b787448328cf446379b1ea4cc5f4c79149cbec8/packages/curve/src/b-curve.ts#L300)

#### Parameters

##### controlPoints

[`Point`](../type-aliases/Point.md)[]

#### Returns

`void`

***

### split()

> **split**(`tVal`): \[[`Point`](../type-aliases/Point.md)[], [`Point`](../type-aliases/Point.md)[]\]

Defined in: [packages/curve/src/b-curve.ts:502](https://github.com/ue-too/ue-too/blob/9b787448328cf446379b1ea4cc5f4c79149cbec8/packages/curve/src/b-curve.ts#L502)

#### Parameters

##### tVal

`number`

#### Returns

\[[`Point`](../type-aliases/Point.md)[], [`Point`](../type-aliases/Point.md)[]\]

***

### splitAndTakeMidCurve()

> **splitAndTakeMidCurve**(`tVal`, `tVal2`): `BCurve`

Defined in: [packages/curve/src/b-curve.ts:653](https://github.com/ue-too/ue-too/blob/9b787448328cf446379b1ea4cc5f4c79149cbec8/packages/curve/src/b-curve.ts#L653)

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

Defined in: [packages/curve/src/b-curve.ts:633](https://github.com/ue-too/ue-too/blob/9b787448328cf446379b1ea4cc5f4c79149cbec8/packages/curve/src/b-curve.ts#L633)

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

Defined in: [packages/curve/src/b-curve.ts:613](https://github.com/ue-too/ue-too/blob/9b787448328cf446379b1ea4cc5f4c79149cbec8/packages/curve/src/b-curve.ts#L613)

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

Defined in: [packages/curve/src/b-curve.ts:497](https://github.com/ue-too/ue-too/blob/9b787448328cf446379b1ea4cc5f4c79149cbec8/packages/curve/src/b-curve.ts#L497)

#### Parameters

##### tVal

`number`

#### Returns

\[`BCurve`, `BCurve`\]

***

### translateRotateControlPoints()

> **translateRotateControlPoints**(`translation`, `rotationAngle`): [`Point`](../type-aliases/Point.md)[]

Defined in: [packages/curve/src/b-curve.ts:1097](https://github.com/ue-too/ue-too/blob/9b787448328cf446379b1ea4cc5f4c79149cbec8/packages/curve/src/b-curve.ts#L1097)

#### Parameters

##### translation

[`Point`](../type-aliases/Point.md)

##### rotationAngle

`number`

#### Returns

[`Point`](../type-aliases/Point.md)[]
