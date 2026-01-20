[@ue-too/curve](../globals.md) / BCurve

# Class: BCurve

Defined in: [packages/curve/src/b-curve.ts:129](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/curve/src/b-curve.ts#L129)

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

Defined in: [packages/curve/src/b-curve.ts:163](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/curve/src/b-curve.ts#L163)

#### Parameters

##### controlPoints

[`Point`](../type-aliases/Point.md)[]

#### Returns

`BCurve`

## Accessors

### AABB

#### Get Signature

> **get** **AABB**(): `object`

Defined in: [packages/curve/src/b-curve.ts:970](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/curve/src/b-curve.ts#L970)

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

Defined in: [packages/curve/src/b-curve.ts:305](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/curve/src/b-curve.ts#L305)

##### Returns

`number`

## Methods

### advanceAtTWithLength()

> **advanceAtTWithLength**(`tVal`, `length`): `AdvanceAtTWithLengthRes`

Defined in: [packages/curve/src/b-curve.ts:776](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/curve/src/b-curve.ts#L776)

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

Defined in: [packages/curve/src/b-curve.ts:858](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/curve/src/b-curve.ts#L858)

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

Defined in: [packages/curve/src/b-curve.ts:239](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/curve/src/b-curve.ts#L239)

#### Parameters

##### tVal

`number`

#### Returns

[`Point`](../type-aliases/Point.md)

***

### curvature()

> **curvature**(`tVal`): `number`

Defined in: [packages/curve/src/b-curve.ts:592](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/curve/src/b-curve.ts#L592)

#### Parameters

##### tVal

`number`

#### Returns

`number`

***

### derivative()

> **derivative**(`tVal`): [`Point`](../type-aliases/Point.md)

Defined in: [packages/curve/src/b-curve.ts:336](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/curve/src/b-curve.ts#L336)

#### Parameters

##### tVal

`number`

#### Returns

[`Point`](../type-aliases/Point.md)

***

### derivativeNormalized()

> **derivativeNormalized**(`tVal`): [`Point`](../type-aliases/Point.md)

Defined in: [packages/curve/src/b-curve.ts:340](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/curve/src/b-curve.ts#L340)

#### Parameters

##### tVal

`number`

#### Returns

[`Point`](../type-aliases/Point.md)

***

### determinant3by3()

> **determinant3by3**(`matrix`): `number`

Defined in: [packages/curve/src/b-curve.ts:579](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/curve/src/b-curve.ts#L579)

#### Parameters

##### matrix

`number`[][]

#### Returns

`number`

***

### findArcs()

> **findArcs**(`errorThreshold`): `object`[]

Defined in: [packages/curve/src/b-curve.ts:493](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/curve/src/b-curve.ts#L493)

#### Parameters

##### errorThreshold

`number`

#### Returns

`object`[]

***

### findArcStartingAt()

> **findArcStartingAt**(`errorThreshold`, `low`): \{ `arc?`: \{ `center`: [`Point`](../type-aliases/Point.md); `endPoint`: [`Point`](../type-aliases/Point.md); `endT`: `number`; `radius`: `number`; `startPoint`: [`Point`](../type-aliases/Point.md); `startT`: `number`; \}; `good`: `boolean`; \} \| `null`

Defined in: [packages/curve/src/b-curve.ts:511](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/curve/src/b-curve.ts#L511)

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

Defined in: [packages/curve/src/b-curve.ts:937](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/curve/src/b-curve.ts#L937)

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

Defined in: [packages/curve/src/b-curve.ts:558](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/curve/src/b-curve.ts#L558)

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

Defined in: [packages/curve/src/b-curve.ts:252](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/curve/src/b-curve.ts#L252)

#### Parameters

##### tVal

`number`

#### Returns

[`Point`](../type-aliases/Point.md)

***

### getArcLengthLUT()

> **getArcLengthLUT**(`steps`): `object`

Defined in: [packages/curve/src/b-curve.ts:344](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/curve/src/b-curve.ts#L344)

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

Defined in: [packages/curve/src/b-curve.ts:141](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/curve/src/b-curve.ts#L141)

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

Defined in: [packages/curve/src/b-curve.ts:739](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/curve/src/b-curve.ts#L739)

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

Defined in: [packages/curve/src/b-curve.ts:605](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/curve/src/b-curve.ts#L605)

#### Returns

[`Point`](../type-aliases/Point.md)[]

***

### getCoefficientOfTTermsWithControlPoints()

> **getCoefficientOfTTermsWithControlPoints**(`controlPoints`): [`Point`](../type-aliases/Point.md)[]

Defined in: [packages/curve/src/b-curve.ts:613](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/curve/src/b-curve.ts#L613)

#### Parameters

##### controlPoints

[`Point`](../type-aliases/Point.md)[]

#### Returns

[`Point`](../type-aliases/Point.md)[]

***

### getControlPoints()

> **getControlPoints**(): [`Point`](../type-aliases/Point.md)[]

Defined in: [packages/curve/src/b-curve.ts:213](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/curve/src/b-curve.ts#L213)

#### Returns

[`Point`](../type-aliases/Point.md)[]

***

### getControlPointsAlignedWithXAxis()

> **getControlPointsAlignedWithXAxis**(): `object`[]

Defined in: [packages/curve/src/b-curve.ts:634](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/curve/src/b-curve.ts#L634)

#### Returns

`object`[]

***

### getCurveIntersections()

> **getCurveIntersections**(`curve`, `deduplicationTolerance?`): `object`[]

Defined in: [packages/curve/src/b-curve.ts:966](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/curve/src/b-curve.ts#L966)

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

Defined in: [packages/curve/src/b-curve.ts:609](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/curve/src/b-curve.ts#L609)

#### Returns

[`Point`](../type-aliases/Point.md)[]

***

### getDerivativeControlPoints()

> **getDerivativeControlPoints**(`controlPoints`): [`Point`](../type-aliases/Point.md)[]

Defined in: [packages/curve/src/b-curve.ts:199](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/curve/src/b-curve.ts#L199)

#### Parameters

##### controlPoints

[`Point`](../type-aliases/Point.md)[]

#### Returns

[`Point`](../type-aliases/Point.md)[]

***

### getExtrema()

> **getExtrema**(): `object`

Defined in: [packages/curve/src/b-curve.ts:647](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/curve/src/b-curve.ts#L647)

#### Returns

`object`

##### x

> **x**: `number`[]

##### y

> **y**: `number`[]

***

### getLineIntersections()

> **getLineIntersections**(`line`): `number`[]

Defined in: [packages/curve/src/b-curve.ts:704](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/curve/src/b-curve.ts#L704)

#### Parameters

##### line

[`Line`](Line.md)

#### Returns

`number`[]

***

### getLUT()

> **getLUT**(`steps`): [`Point`](../type-aliases/Point.md)[]

Defined in: [packages/curve/src/b-curve.ts:272](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/curve/src/b-curve.ts#L272)

#### Parameters

##### steps

`number` = `100`

#### Returns

[`Point`](../type-aliases/Point.md)[]

***

### getLUTWithTVal()

> **getLUTWithTVal**(`steps?`): `object`[]

Defined in: [packages/curve/src/b-curve.ts:287](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/curve/src/b-curve.ts#L287)

#### Parameters

##### steps?

`number`

#### Returns

`object`[]

***

### getPointbyPercentage()

> **getPointbyPercentage**(`percentage`): [`Point`](../type-aliases/Point.md)

Defined in: [packages/curve/src/b-curve.ts:172](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/curve/src/b-curve.ts#L172)

#### Parameters

##### percentage

`number`

#### Returns

[`Point`](../type-aliases/Point.md)

***

### getProjection()

> **getProjection**(`point`): `object`

Defined in: [packages/curve/src/b-curve.ts:433](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/curve/src/b-curve.ts#L433)

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

Defined in: [packages/curve/src/b-curve.ts:726](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/curve/src/b-curve.ts#L726)

#### Returns

`object`[]

***

### lengthAtT()

> **lengthAtT**(`tVal`): `number`

Defined in: [packages/curve/src/b-curve.ts:313](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/curve/src/b-curve.ts#L313)

#### Parameters

##### tVal

`number`

#### Returns

`number`

***

### normal()

> **normal**(`tVal`): `object`

Defined in: [packages/curve/src/b-curve.ts:992](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/curve/src/b-curve.ts#L992)

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

Defined in: [packages/curve/src/b-curve.ts:152](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/curve/src/b-curve.ts#L152)

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

Defined in: [packages/curve/src/b-curve.ts:892](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/curve/src/b-curve.ts#L892)

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

Defined in: [packages/curve/src/b-curve.ts:601](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/curve/src/b-curve.ts#L601)

#### Parameters

##### tVal

`number`

#### Returns

[`Point`](../type-aliases/Point.md)

***

### setControlPointAtIndex()

> **setControlPointAtIndex**(`index`, `newPoint`): `boolean`

Defined in: [packages/curve/src/b-curve.ts:226](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/curve/src/b-curve.ts#L226)

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

Defined in: [packages/curve/src/b-curve.ts:217](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/curve/src/b-curve.ts#L217)

#### Parameters

##### controlPoints

[`Point`](../type-aliases/Point.md)[]

#### Returns

`void`

***

### split()

> **split**(`tVal`): \[[`Point`](../type-aliases/Point.md)[], [`Point`](../type-aliases/Point.md)[]\]

Defined in: [packages/curve/src/b-curve.ts:369](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/curve/src/b-curve.ts#L369)

#### Parameters

##### tVal

`number`

#### Returns

\[[`Point`](../type-aliases/Point.md)[], [`Point`](../type-aliases/Point.md)[]\]

***

### splitAndTakeMidCurve()

> **splitAndTakeMidCurve**(`tVal`, `tVal2`): `BCurve`

Defined in: [packages/curve/src/b-curve.ts:428](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/curve/src/b-curve.ts#L428)

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

Defined in: [packages/curve/src/b-curve.ts:412](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/curve/src/b-curve.ts#L412)

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

Defined in: [packages/curve/src/b-curve.ts:395](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/curve/src/b-curve.ts#L395)

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

Defined in: [packages/curve/src/b-curve.ts:364](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/curve/src/b-curve.ts#L364)

#### Parameters

##### tVal

`number`

#### Returns

\[`BCurve`, `BCurve`\]

***

### translateRotateControlPoints()

> **translateRotateControlPoints**(`translation`, `rotationAngle`): [`Point`](../type-aliases/Point.md)[]

Defined in: [packages/curve/src/b-curve.ts:695](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/curve/src/b-curve.ts#L695)

#### Parameters

##### translation

[`Point`](../type-aliases/Point.md)

##### rotationAngle

`number`

#### Returns

[`Point`](../type-aliases/Point.md)[]
