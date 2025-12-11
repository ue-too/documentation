[@ue-too/curve](../globals.md) / CompositeBCurve

# Class: CompositeBCurve

Defined in: [packages/curve/src/composite-curve.ts:187](https://github.com/ue-too/ue-too/blob/c02efc01f7c19f3efc21823d0489e987a3e92427/packages/curve/src/composite-curve.ts#L187)

## Constructors

### Constructor

> **new CompositeBCurve**(`controlPoints`): `CompositeBCurve`

Defined in: [packages/curve/src/composite-curve.ts:191](https://github.com/ue-too/ue-too/blob/c02efc01f7c19f3efc21823d0489e987a3e92427/packages/curve/src/composite-curve.ts#L191)

#### Parameters

##### controlPoints

[`ControlPoint`](ControlPoint.md)[] = `[]`

#### Returns

`CompositeBCurve`

## Methods

### appendControlPoint()

> **appendControlPoint**(`position`): `void`

Defined in: [packages/curve/src/composite-curve.ts:199](https://github.com/ue-too/ue-too/blob/c02efc01f7c19f3efc21823d0489e987a3e92427/packages/curve/src/composite-curve.ts#L199)

#### Parameters

##### position

`Point`

#### Returns

`void`

***

### getControlPoints()

> **getControlPoints**(): [`ControlPoint`](ControlPoint.md)[]

Defined in: [packages/curve/src/composite-curve.ts:195](https://github.com/ue-too/ue-too/blob/c02efc01f7c19f3efc21823d0489e987a3e92427/packages/curve/src/composite-curve.ts#L195)

#### Returns

[`ControlPoint`](ControlPoint.md)[]

***

### setLeftHandlePositionOfControlPoint()

> **setLeftHandlePositionOfControlPoint**(`controlPointIndex`, `destPos`): `void`

Defined in: [packages/curve/src/composite-curve.ts:215](https://github.com/ue-too/ue-too/blob/c02efc01f7c19f3efc21823d0489e987a3e92427/packages/curve/src/composite-curve.ts#L215)

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

Defined in: [packages/curve/src/composite-curve.ts:229](https://github.com/ue-too/ue-too/blob/c02efc01f7c19f3efc21823d0489e987a3e92427/packages/curve/src/composite-curve.ts#L229)

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

Defined in: [packages/curve/src/composite-curve.ts:222](https://github.com/ue-too/ue-too/blob/c02efc01f7c19f3efc21823d0489e987a3e92427/packages/curve/src/composite-curve.ts#L222)

#### Parameters

##### controlPointIndex

`number`

##### destPos

`Point`

#### Returns

`void`
