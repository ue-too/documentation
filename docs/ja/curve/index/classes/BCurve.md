[@ue-too/curve](../../modules.md) / [index](../index.md) / BCurve

# クラス: BCurve

定義: [packages/curve/src/b-curve.ts:134](https://github.com/ue-too/ue-too/blob/9b787448328cf446379b1ea4cc5f4c79149cbec8/packages/curve/src/b-curve.ts#L134)

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

## 例

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

## コンストラクター

### コンストラクター

> **new BCurve**(`controlPoints`): `BCurve`

定義: [packages/curve/src/b-curve.ts:170](https://github.com/ue-too/ue-too/blob/9b787448328cf446379b1ea4cc5f4c79149cbec8/packages/curve/src/b-curve.ts#L170)

#### パラメータ

##### controlPoints

[`Point`](../type-aliases/Point.md)[]

#### 戻り値

`BCurve`

## アクセッサー

### AABB

#### 署名を取得する

> **get** **AABB**(): `object`

定義: [packages/curve/src/b-curve.ts:1464](https://github.com/ue-too/ue-too/blob/9b787448328cf446379b1ea4cc5f4c79149cbec8/packages/curve/src/b-curve.ts#L1464)

##### 戻り値

`object`

###### max

> **max**: [`Point`](../type-aliases/Point.md)

###### min

> **min**: [`Point`](../type-aliases/Point.md)

***

### fullLength

#### 署名を取得する

> **get** **fullLength**(): `number`

定義: [packages/curve/src/b-curve.ts:422](https://github.com/ue-too/ue-too/blob/9b787448328cf446379b1ea4cc5f4c79149cbec8/packages/curve/src/b-curve.ts#L422)

##### 戻り値

`number`

## メソッド

### advanceAtTWithLength()

> **advanceAtTWithLength**(`tVal`, `length`): `AdvanceAtTWithLengthRes`

定義: [packages/curve/src/b-curve.ts:1213](https://github.com/ue-too/ue-too/blob/9b787448328cf446379b1ea4cc5f4c79149cbec8/packages/curve/src/b-curve.ts#L1213)

#### パラメータ

##### tVal

`number`

##### length

`number`

#### 戻り値

`AdvanceAtTWithLengthRes`

***

### advanceByDistance()

> **advanceByDistance**(`startT`, `distance`): `AdvanceAtTWithLengthRes`

定義: [packages/curve/src/b-curve.ts:1301](https://github.com/ue-too/ue-too/blob/9b787448328cf446379b1ea4cc5f4c79149cbec8/packages/curve/src/b-curve.ts#L1301)

#### パラメータ

##### startT

`number`

##### distance

`number`

#### 戻り値

`AdvanceAtTWithLengthRes`

***

### compute()

> **compute**(`tVal`): [`Point`](../type-aliases/Point.md)

定義: [packages/curve/src/b-curve.ts:326](https://github.com/ue-too/ue-too/blob/9b787448328cf446379b1ea4cc5f4c79149cbec8/packages/curve/src/b-curve.ts#L326)

#### パラメータ

##### tVal

`number`

#### 戻り値

[`Point`](../type-aliases/Point.md)

***

### curvature()

> **curvature**(`tVal`): `number`

定義: [packages/curve/src/b-curve.ts:932](https://github.com/ue-too/ue-too/blob/9b787448328cf446379b1ea4cc5f4c79149cbec8/packages/curve/src/b-curve.ts#L932)

#### パラメータ

##### tVal

`number`

#### 戻り値

`number`

***

### derivative()

> **derivative**(`tVal`): [`Point`](../type-aliases/Point.md)

定義: [packages/curve/src/b-curve.ts:454](https://github.com/ue-too/ue-too/blob/9b787448328cf446379b1ea4cc5f4c79149cbec8/packages/curve/src/b-curve.ts#L454)

#### パラメータ

##### tVal

`number`

#### 戻り値

[`Point`](../type-aliases/Point.md)

***

### derivativeByPercentage()

> **derivativeByPercentage**(`percentage`): [`Point`](../type-aliases/Point.md)

定義: [packages/curve/src/b-curve.ts:235](https://github.com/ue-too/ue-too/blob/9b787448328cf446379b1ea4cc5f4c79149cbec8/packages/curve/src/b-curve.ts#L235)

Gets the derivative (tangent vector) at a given percentage of the curve length.

#### パラメータ

##### percentage

`number`

Percentage of the curve length (0 to 1), where 0 is the start and 1 is the end

#### 戻り値

[`Point`](../type-aliases/Point.md)

The derivative vector at the specified percentage along the curve

#### Remarks

This method calculates the derivative at a point specified by percentage of arc length,
not by the parameter t. This is useful when you want to sample the curve uniformly
by distance rather than by parameter value.

#### 例

```typescript
const curve = new BCurve([...]);
const tangent = curve.derivativeByPercentage(0.5); // Derivative at midpoint
const normalized = PointCal.unitVector(tangent); // Normalize for direction
```

***

### derivativeNormalized()

> **derivativeNormalized**(`tVal`): [`Point`](../type-aliases/Point.md)

定義: [packages/curve/src/b-curve.ts:458](https://github.com/ue-too/ue-too/blob/9b787448328cf446379b1ea4cc5f4c79149cbec8/packages/curve/src/b-curve.ts#L458)

#### パラメータ

##### tVal

`number`

#### 戻り値

[`Point`](../type-aliases/Point.md)

***

### determinant3by3()

> **determinant3by3**(`matrix`): `number`

定義: [packages/curve/src/b-curve.ts:919](https://github.com/ue-too/ue-too/blob/9b787448328cf446379b1ea4cc5f4c79149cbec8/packages/curve/src/b-curve.ts#L919)

#### パラメータ

##### matrix

`number`[][]

#### 戻り値

`number`

***

### findArcs()

> **findArcs**(`errorThreshold`): `object`[]

定義: [packages/curve/src/b-curve.ts:732](https://github.com/ue-too/ue-too/blob/9b787448328cf446379b1ea4cc5f4c79149cbec8/packages/curve/src/b-curve.ts#L732)

#### パラメータ

##### errorThreshold

`number`

#### 戻り値

`object`[]

***

### findArcStartingAt()

> **findArcStartingAt**(`errorThreshold`, `low`): \{ `arc?`: \{ `center`: [`Point`](../type-aliases/Point.md); `endPoint`: [`Point`](../type-aliases/Point.md); `endT`: `number`; `radius`: `number`; `startPoint`: [`Point`](../type-aliases/Point.md); `startT`: `number`; \}; `good`: `boolean`; \} \| `null`

定義: [packages/curve/src/b-curve.ts:767](https://github.com/ue-too/ue-too/blob/9b787448328cf446379b1ea4cc5f4c79149cbec8/packages/curve/src/b-curve.ts#L767)

#### パラメータ

##### errorThreshold

`number`

##### low

`number`

#### 戻り値

\{ `arc?`: \{ `center`: [`Point`](../type-aliases/Point.md); `endPoint`: [`Point`](../type-aliases/Point.md); `endT`: `number`; `radius`: `number`; `startPoint`: [`Point`](../type-aliases/Point.md); `startT`: `number`; \}; `good`: `boolean`; \} \| `null`

***

### findClosest()

> **findClosest**(`x`, `y`, `LUT`, `circleRadius`, `distanceEpsilon`, `pd2?`, `pd1?`): `number`

定義: [packages/curve/src/b-curve.ts:1410](https://github.com/ue-too/ue-too/blob/9b787448328cf446379b1ea4cc5f4c79149cbec8/packages/curve/src/b-curve.ts#L1410)

#### パラメータ

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

#### 戻り値

`number`

***

### fitArc()

> **fitArc**(`startPoint`, `endPoint`, `midPoint`): `object`

定義: [packages/curve/src/b-curve.ts:846](https://github.com/ue-too/ue-too/blob/9b787448328cf446379b1ea4cc5f4c79149cbec8/packages/curve/src/b-curve.ts#L846)

#### パラメータ

##### startPoint

[`Point`](../type-aliases/Point.md)

##### endPoint

[`Point`](../type-aliases/Point.md)

##### midPoint

[`Point`](../type-aliases/Point.md)

#### 戻り値

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

定義: [packages/curve/src/b-curve.ts:342](https://github.com/ue-too/ue-too/blob/9b787448328cf446379b1ea4cc5f4c79149cbec8/packages/curve/src/b-curve.ts#L342)

#### パラメータ

##### tVal

`number`

#### 戻り値

[`Point`](../type-aliases/Point.md)

***

### getArcLengthLUT()

> **getArcLengthLUT**(`steps`): `object`

定義: [packages/curve/src/b-curve.ts:464](https://github.com/ue-too/ue-too/blob/9b787448328cf446379b1ea4cc5f4c79149cbec8/packages/curve/src/b-curve.ts#L464)

#### パラメータ

##### steps

`number` = `50`

#### 戻り値

`object`

##### arcLengthLUT

> **arcLengthLUT**: `object`[]

##### controlPoints

> **controlPoints**: [`Point`](../type-aliases/Point.md)[]

***

### getArcs()

> **getArcs**(`errorThreshold`): `object`[]

定義: [packages/curve/src/b-curve.ts:763](https://github.com/ue-too/ue-too/blob/9b787448328cf446379b1ea4cc5f4c79149cbec8/packages/curve/src/b-curve.ts#L763)

Get a sequence of circular arcs that approximate the curve.

#### パラメータ

##### errorThreshold

`number`

Maximum allowed radial error when fitting an arc.

#### 戻り値

`object`[]

A list of arcs that cover the curve from \(t=0\) to \(t=1\).

***

### getCacheStats()

> **getCacheStats**(): `object`

定義: [packages/curve/src/b-curve.ts:148](https://github.com/ue-too/ue-too/blob/9b787448328cf446379b1ea4cc5f4c79149cbec8/packages/curve/src/b-curve.ts#L148)

Gets cache statistics for performance monitoring

#### 戻り値

`object`

Object containing cache size and hit rate information

##### hitRate

> **hitRate**: `number`

##### size

> **size**: `number`

***

### getCircleIntersections()

> **getCircleIntersections**(`circleCenter`, `circleRadius`): `object`[]

定義: [packages/curve/src/b-curve.ts:1156](https://github.com/ue-too/ue-too/blob/9b787448328cf446379b1ea4cc5f4c79149cbec8/packages/curve/src/b-curve.ts#L1156)

#### パラメータ

##### circleCenter

[`Point`](../type-aliases/Point.md)

##### circleRadius

`number`

#### 戻り値

`object`[]

***

### getCoefficientOfTTerms()

> **getCoefficientOfTTerms**(): [`Point`](../type-aliases/Point.md)[]

定義: [packages/curve/src/b-curve.ts:956](https://github.com/ue-too/ue-too/blob/9b787448328cf446379b1ea4cc5f4c79149cbec8/packages/curve/src/b-curve.ts#L956)

#### 戻り値

[`Point`](../type-aliases/Point.md)[]

***

### getCoefficientOfTTermsWithControlPoints()

> **getCoefficientOfTTermsWithControlPoints**(`controlPoints`): [`Point`](../type-aliases/Point.md)[]

定義: [packages/curve/src/b-curve.ts:966](https://github.com/ue-too/ue-too/blob/9b787448328cf446379b1ea4cc5f4c79149cbec8/packages/curve/src/b-curve.ts#L966)

#### パラメータ

##### controlPoints

[`Point`](../type-aliases/Point.md)[]

#### 戻り値

[`Point`](../type-aliases/Point.md)[]

***

### getControlPoints()

> **getControlPoints**(): [`Point`](../type-aliases/Point.md)[]

定義: [packages/curve/src/b-curve.ts:296](https://github.com/ue-too/ue-too/blob/9b787448328cf446379b1ea4cc5f4c79149cbec8/packages/curve/src/b-curve.ts#L296)

#### 戻り値

[`Point`](../type-aliases/Point.md)[]

***

### getControlPointsAlignedWithXAxis()

> **getControlPointsAlignedWithXAxis**(): `object`[]

定義: [packages/curve/src/b-curve.ts:1008](https://github.com/ue-too/ue-too/blob/9b787448328cf446379b1ea4cc5f4c79149cbec8/packages/curve/src/b-curve.ts#L1008)

#### 戻り値

`object`[]

***

### getCurveIntersections()

> **getCurveIntersections**(`curve`, `deduplicationTolerance?`): `object`[]

定義: [packages/curve/src/b-curve.ts:1453](https://github.com/ue-too/ue-too/blob/9b787448328cf446379b1ea4cc5f4c79149cbec8/packages/curve/src/b-curve.ts#L1453)

#### パラメータ

##### curve

`BCurve`

##### deduplicationTolerance?

`number`

#### 戻り値

`object`[]

***

### getDerivativeCoefficients()

> **getDerivativeCoefficients**(): [`Point`](../type-aliases/Point.md)[]

定義: [packages/curve/src/b-curve.ts:960](https://github.com/ue-too/ue-too/blob/9b787448328cf446379b1ea4cc5f4c79149cbec8/packages/curve/src/b-curve.ts#L960)

#### 戻り値

[`Point`](../type-aliases/Point.md)[]

***

### getDerivativeControlPoints()

> **getDerivativeControlPoints**(`controlPoints`): [`Point`](../type-aliases/Point.md)[]

定義: [packages/curve/src/b-curve.ts:272](https://github.com/ue-too/ue-too/blob/9b787448328cf446379b1ea4cc5f4c79149cbec8/packages/curve/src/b-curve.ts#L272)

#### パラメータ

##### controlPoints

[`Point`](../type-aliases/Point.md)[]

#### 戻り値

[`Point`](../type-aliases/Point.md)[]

***

### getExtrema()

> **getExtrema**(): `object`

定義: [packages/curve/src/b-curve.ts:1027](https://github.com/ue-too/ue-too/blob/9b787448328cf446379b1ea4cc5f4c79149cbec8/packages/curve/src/b-curve.ts#L1027)

#### 戻り値

`object`

##### x

> **x**: `number`[]

##### y

> **y**: `number`[]

***

### getLineIntersections()

> **getLineIntersections**(`line`): `number`[]

定義: [packages/curve/src/b-curve.ts:1111](https://github.com/ue-too/ue-too/blob/9b787448328cf446379b1ea4cc5f4c79149cbec8/packages/curve/src/b-curve.ts#L1111)

#### パラメータ

##### line

[`Line`](Line.md)

#### 戻り値

`number`[]

***

### getLUT()

> **getLUT**(`steps`): [`Point`](../type-aliases/Point.md)[]

定義: [packages/curve/src/b-curve.ts:389](https://github.com/ue-too/ue-too/blob/9b787448328cf446379b1ea4cc5f4c79149cbec8/packages/curve/src/b-curve.ts#L389)

#### パラメータ

##### steps

`number` = `100`

#### 戻り値

[`Point`](../type-aliases/Point.md)[]

***

### getLUTWithTVal()

> **getLUTWithTVal**(`steps?`): `object`[]

定義: [packages/curve/src/b-curve.ts:404](https://github.com/ue-too/ue-too/blob/9b787448328cf446379b1ea4cc5f4c79149cbec8/packages/curve/src/b-curve.ts#L404)

#### パラメータ

##### steps?

`number`

#### 戻り値

`object`[]

***

### getPointbyPercentage()

> **getPointbyPercentage**(`percentage`): [`Point`](../type-aliases/Point.md)

定義: [packages/curve/src/b-curve.ts:181](https://github.com/ue-too/ue-too/blob/9b787448328cf446379b1ea4cc5f4c79149cbec8/packages/curve/src/b-curve.ts#L181)

#### パラメータ

##### percentage

`number`

#### 戻り値

[`Point`](../type-aliases/Point.md)

***

### getProjection()

> **getProjection**(`point`): `object`

定義: [packages/curve/src/b-curve.ts:661](https://github.com/ue-too/ue-too/blob/9b787448328cf446379b1ea4cc5f4c79149cbec8/packages/curve/src/b-curve.ts#L661)

#### パラメータ

##### point

[`Point`](../type-aliases/Point.md)

#### 戻り値

`object`

##### projection

> **projection**: [`Point`](../type-aliases/Point.md) = `preliminaryProjectionPoint`

##### tVal

> **tVal**: `number` = `preliminaryProjectionTVal`

***

### getSelfIntersections()

> **getSelfIntersections**(): `object`[]

定義: [packages/curve/src/b-curve.ts:1142](https://github.com/ue-too/ue-too/blob/9b787448328cf446379b1ea4cc5f4c79149cbec8/packages/curve/src/b-curve.ts#L1142)

#### 戻り値

`object`[]

***

### lengthAtT()

> **lengthAtT**(`tVal`): `number`

定義: [packages/curve/src/b-curve.ts:430](https://github.com/ue-too/ue-too/blob/9b787448328cf446379b1ea4cc5f4c79149cbec8/packages/curve/src/b-curve.ts#L430)

#### パラメータ

##### tVal

`number`

#### 戻り値

`number`

***

### normal()

> **normal**(`tVal`): `object`

定義: [packages/curve/src/b-curve.ts:1486](https://github.com/ue-too/ue-too/blob/9b787448328cf446379b1ea4cc5f4c79149cbec8/packages/curve/src/b-curve.ts#L1486)

#### パラメータ

##### tVal

`number`

#### 戻り値

`object`

##### direction

> **direction**: [`Point`](../type-aliases/Point.md)

##### tVal

> **tVal**: `number`

***

### preWarmCache()

> **preWarmCache**(`steps`): `void`

定義: [packages/curve/src/b-curve.ts:159](https://github.com/ue-too/ue-too/blob/9b787448328cf446379b1ea4cc5f4c79149cbec8/packages/curve/src/b-curve.ts#L159)

Pre-warms the cache with commonly used t values for better performance

#### パラメータ

##### steps

`number` = `100`

Number of steps to pre-cache (default: 100)

#### 戻り値

`void`

***

### refineBinary()

> **refineBinary**(`curve`, `x`, `y`, `LUT`, `i`, `targetDistance`, `epsilon`): \{ `distance`: `number`; `point`: [`Point`](../type-aliases/Point.md); `tVal`: `number`; \} \| `undefined`

定義: [packages/curve/src/b-curve.ts:1349](https://github.com/ue-too/ue-too/blob/9b787448328cf446379b1ea4cc5f4c79149cbec8/packages/curve/src/b-curve.ts#L1349)

#### パラメータ

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

#### 戻り値

\{ `distance`: `number`; `point`: [`Point`](../type-aliases/Point.md); `tVal`: `number`; \} \| `undefined`

***

### secondDerivative()

> **secondDerivative**(`tVal`): [`Point`](../type-aliases/Point.md)

定義: [packages/curve/src/b-curve.ts:949](https://github.com/ue-too/ue-too/blob/9b787448328cf446379b1ea4cc5f4c79149cbec8/packages/curve/src/b-curve.ts#L949)

#### パラメータ

##### tVal

`number`

#### 戻り値

[`Point`](../type-aliases/Point.md)

***

### setControlPointAtIndex()

> **setControlPointAtIndex**(`index`, `newPoint`): `boolean`

定義: [packages/curve/src/b-curve.ts:311](https://github.com/ue-too/ue-too/blob/9b787448328cf446379b1ea4cc5f4c79149cbec8/packages/curve/src/b-curve.ts#L311)

#### パラメータ

##### index

`number`

##### newPoint

[`Point`](../type-aliases/Point.md)

#### 戻り値

`boolean`

***

### setControlPoints()

> **setControlPoints**(`controlPoints`): `void`

定義: [packages/curve/src/b-curve.ts:300](https://github.com/ue-too/ue-too/blob/9b787448328cf446379b1ea4cc5f4c79149cbec8/packages/curve/src/b-curve.ts#L300)

#### パラメータ

##### controlPoints

[`Point`](../type-aliases/Point.md)[]

#### 戻り値

`void`

***

### split()

> **split**(`tVal`): \[[`Point`](../type-aliases/Point.md)[], [`Point`](../type-aliases/Point.md)[]\]

定義: [packages/curve/src/b-curve.ts:502](https://github.com/ue-too/ue-too/blob/9b787448328cf446379b1ea4cc5f4c79149cbec8/packages/curve/src/b-curve.ts#L502)

#### パラメータ

##### tVal

`number`

#### 戻り値

\[[`Point`](../type-aliases/Point.md)[], [`Point`](../type-aliases/Point.md)[]\]

***

### splitAndTakeMidCurve()

> **splitAndTakeMidCurve**(`tVal`, `tVal2`): `BCurve`

定義: [packages/curve/src/b-curve.ts:653](https://github.com/ue-too/ue-too/blob/9b787448328cf446379b1ea4cc5f4c79149cbec8/packages/curve/src/b-curve.ts#L653)

#### パラメータ

##### tVal

`number`

##### tVal2

`number`

#### 戻り値

`BCurve`

***

### splitIn3Curves()

> **splitIn3Curves**(`tVal`, `tVal2`): \[`BCurve`, `BCurve`, `BCurve`\]

定義: [packages/curve/src/b-curve.ts:633](https://github.com/ue-too/ue-too/blob/9b787448328cf446379b1ea4cc5f4c79149cbec8/packages/curve/src/b-curve.ts#L633)

#### パラメータ

##### tVal

`number`

##### tVal2

`number`

#### 戻り値

\[`BCurve`, `BCurve`, `BCurve`\]

***

### splitIn3WithControlPoints()

> **splitIn3WithControlPoints**(`tVal`, `tVal2`): \[[`Point`](../type-aliases/Point.md)[], [`Point`](../type-aliases/Point.md)[], [`Point`](../type-aliases/Point.md)[]\]

定義: [packages/curve/src/b-curve.ts:613](https://github.com/ue-too/ue-too/blob/9b787448328cf446379b1ea4cc5f4c79149cbec8/packages/curve/src/b-curve.ts#L613)

#### パラメータ

##### tVal

`number`

##### tVal2

`number`

#### 戻り値

\[[`Point`](../type-aliases/Point.md)[], [`Point`](../type-aliases/Point.md)[], [`Point`](../type-aliases/Point.md)[]\]

***

### splitIntoCurves()

> **splitIntoCurves**(`tVal`): \[`BCurve`, `BCurve`\]

定義: [packages/curve/src/b-curve.ts:497](https://github.com/ue-too/ue-too/blob/9b787448328cf446379b1ea4cc5f4c79149cbec8/packages/curve/src/b-curve.ts#L497)

#### パラメータ

##### tVal

`number`

#### 戻り値

\[`BCurve`, `BCurve`\]

***

### translateRotateControlPoints()

> **translateRotateControlPoints**(`translation`, `rotationAngle`): [`Point`](../type-aliases/Point.md)[]

定義: [packages/curve/src/b-curve.ts:1097](https://github.com/ue-too/ue-too/blob/9b787448328cf446379b1ea4cc5f4c79149cbec8/packages/curve/src/b-curve.ts#L1097)

#### パラメータ

##### translation

[`Point`](../type-aliases/Point.md)

##### rotationAngle

`number`

#### 戻り値

[`Point`](../type-aliases/Point.md)[]
