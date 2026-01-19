[@ue-too/curve](../globals.md) / CompositeBCurve

# Class: CompositeBCurve

Defined in: [packages/curve/src/composite-curve.ts:203](https://github.com/ue-too/ue-too/blob/1055c6abca1ea3a0e952b0825f36e0ca2527df85/packages/curve/src/composite-curve.ts#L203)

Composite Bezier curve made of multiple control points with handles.

## Constructors

### Constructor

> **new CompositeBCurve**(`controlPoints`): `CompositeBCurve`

Defined in: [packages/curve/src/composite-curve.ts:207](https://github.com/ue-too/ue-too/blob/1055c6abca1ea3a0e952b0825f36e0ca2527df85/packages/curve/src/composite-curve.ts#L207)

#### Parameters

##### controlPoints

[`ControlPoint`](ControlPoint.md)[] = `[]`

#### Returns

`CompositeBCurve`

## Methods

### appendControlPoint()

> **appendControlPoint**(`position`): `void`

Defined in: [packages/curve/src/composite-curve.ts:215](https://github.com/ue-too/ue-too/blob/1055c6abca1ea3a0e952b0825f36e0ca2527df85/packages/curve/src/composite-curve.ts#L215)

#### Parameters

##### position

`Point`

#### Returns

`void`

***

### getControlPoints()

> **getControlPoints**(): [`ControlPoint`](ControlPoint.md)[]

Defined in: [packages/curve/src/composite-curve.ts:211](https://github.com/ue-too/ue-too/blob/1055c6abca1ea3a0e952b0825f36e0ca2527df85/packages/curve/src/composite-curve.ts#L211)

#### Returns

[`ControlPoint`](ControlPoint.md)[]

***

### setLeftHandlePositionOfControlPoint()

> **setLeftHandlePositionOfControlPoint**(`controlPointIndex`, `destPos`): `void`

Defined in: [packages/curve/src/composite-curve.ts:231](https://github.com/ue-too/ue-too/blob/1055c6abca1ea3a0e952b0825f36e0ca2527df85/packages/curve/src/composite-curve.ts#L231)

#### Parameters

##### controlPointIndex

`number`

##### destPos

`Point`

#### Returns

`void`

***

### setPositionOfControlPoint()

> **setPositionOfControlPoint**(`controlPointIndex`, `destPos`): `void`

Defined in: [packages/curve/src/composite-curve.ts:245](https://github.com/ue-too/ue-too/blob/1055c6abca1ea3a0e952b0825f36e0ca2527df85/packages/curve/src/composite-curve.ts#L245)

#### Parameters

##### controlPointIndex

`number`

##### destPos

`Point`

#### Returns

`void`

***

### setRightHandlePositionOfControlPoint()

> **setRightHandlePositionOfControlPoint**(`controlPointIndex`, `destPos`): `void`

Defined in: [packages/curve/src/composite-curve.ts:238](https://github.com/ue-too/ue-too/blob/1055c6abca1ea3a0e952b0825f36e0ca2527df85/packages/curve/src/composite-curve.ts#L238)

#### Parameters

##### controlPointIndex

`number`

##### destPos

`Point`

#### Returns

`void`
