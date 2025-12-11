[@ue-too/dynamics](../globals.md) / PinJoint

# Class: PinJoint

Defined in: constraint.d.ts:14

## Implements

- [`Constraint`](../interfaces/Constraint.md)

## Constructors

### Constructor

> **new PinJoint**(`bodyA`, `bodyB`, `anchorA`, `anchorB`): `PinJoint`

Defined in: constraint.d.ts:19

#### Parameters

##### bodyA

[`RigidBody`](../interfaces/RigidBody.md)

##### bodyB

[`RigidBody`](../interfaces/RigidBody.md)

##### anchorA

`Point`

##### anchorB

`Point`

#### Returns

`PinJoint`

## Methods

### enforce()

> **enforce**(`dt`): `void`

Defined in: constraint.d.ts:20

#### Parameters

##### dt

`number`

#### Returns

`void`

#### Implementation of

[`Constraint`](../interfaces/Constraint.md).[`enforce`](../interfaces/Constraint.md#enforce)

***

### solvePinJointConstraint()

> **solvePinJointConstraint**(`dt`): `void`

Defined in: constraint.d.ts:21

#### Parameters

##### dt

`number`

#### Returns

`void`
