[@ue-too/dynamics](../globals.md) / Constraint

# Interface: Constraint

Defined in: [constraint.ts:16](https://github.com/ue-too/ue-too/blob/1055c6abca1ea3a0e952b0825f36e0ca2527df85/packages/dynamics/src/constraint.ts#L16)

Physics constraint interface.

## Remarks

Constraints restrict the motion of rigid bodies. Common examples include
pin joints, distance constraints, and angle limits.

Constraints are solved using iterative methods and Baumgarte stabilization
to prevent drift over time.

## Methods

### enforce()

> **enforce**(`dt`): `void`

Defined in: [constraint.ts:22](https://github.com/ue-too/ue-too/blob/1055c6abca1ea3a0e952b0825f36e0ca2527df85/packages/dynamics/src/constraint.ts#L22)

Enforces the constraint for one timestep.

#### Parameters

##### dt

`number`

Timestep in seconds

#### Returns

`void`
