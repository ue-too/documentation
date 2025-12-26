[@ue-too/dynamics](../globals.md) / FixedPinJoint

# Class: FixedPinJoint

Defined in: [constraint.ts:49](https://github.com/ue-too/ue-too/blob/aabc0f56e9e83141d0fd935ef6ac3e5fe0af0a61/packages/dynamics/src/constraint.ts#L49)

Pin joint connecting a body to a fixed world point.

## Remarks

Creates a pendulum-like constraint where a point on the body is pinned
to a fixed location in world space. The body can rotate around this point.

Uses Baumgarte stabilization to prevent drift.

## Example

Create a pendulum
```typescript
const bob = new Circle({ x: 0, y: 100 }, 20, 0, 10, false);
const joint = new FixedPinJoint(
  bob,
  { x: 0, y: 0 },  // Anchor on bob (center)
  { x: 0, y: 0 }   // World anchor (ceiling)
);
world.addRigidBody('bob', bob);
world.addConstraint(joint);
```

## Implements

- [`Constraint`](../interfaces/Constraint.md)

## Constructors

### Constructor

> **new FixedPinJoint**(`bodyA`, `anchorA`, `worldAnchorA`): `FixedPinJoint`

Defined in: [constraint.ts:55](https://github.com/ue-too/ue-too/blob/aabc0f56e9e83141d0fd935ef6ac3e5fe0af0a61/packages/dynamics/src/constraint.ts#L55)

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

Defined in: [constraint.ts:61](https://github.com/ue-too/ue-too/blob/aabc0f56e9e83141d0fd935ef6ac3e5fe0af0a61/packages/dynamics/src/constraint.ts#L61)

Enforces the constraint for one timestep.

#### Parameters

##### dt

`number`

Timestep in seconds

#### Returns

`void`

#### Implementation of

[`Constraint`](../interfaces/Constraint.md).[`enforce`](../interfaces/Constraint.md#enforce)

***

### solveWorldPinJointConstraint()

> **solveWorldPinJointConstraint**(`dt`): `void`

Defined in: [constraint.ts:65](https://github.com/ue-too/ue-too/blob/aabc0f56e9e83141d0fd935ef6ac3e5fe0af0a61/packages/dynamics/src/constraint.ts#L65)

#### Parameters

##### dt

`number`

#### Returns

`void`
