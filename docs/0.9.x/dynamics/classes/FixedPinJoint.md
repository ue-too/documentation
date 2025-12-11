[@ue-too/dynamics](../globals.md) / FixedPinJoint

# Class: FixedPinJoint

Defined in: constraint.d.ts:6

## Implements

- [`Constraint`](../interfaces/Constraint.md)

## Constructors

### Constructor

> **new FixedPinJoint**(`bodyA`, `anchorA`, `worldAnchorA`): `FixedPinJoint`

Defined in: constraint.d.ts:10

#### Parameters

##### bodyA

[`RigidBody`](../interfaces/RigidBody.md)

##### anchorA

`Point`

##### worldAnchorA

`Point`

#### Returns

`FixedPinJoint`

## Methods

### enforce()

> **enforce**(`dt`): `void`

Defined in: constraint.d.ts:11

#### Parameters

##### dt

`number`

#### Returns

`void`

#### Implementation of

[`Constraint`](../interfaces/Constraint.md).[`enforce`](../interfaces/Constraint.md#enforce)

***

### solveWorldPinJointConstraint()

> **solveWorldPinJointConstraint**(`dt`): `void`

Defined in: constraint.d.ts:12

#### Parameters

##### dt

`number`

#### Returns

`void`
