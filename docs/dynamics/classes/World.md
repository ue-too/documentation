[@ue-too/dynamics](../globals.md) / World

# Class: World

Defined in: [world.ts:64](https://github.com/ue-too/ue-too/blob/e468a9961da59c81663192ec8df16ebc8e17abac/packages/dynamics/src/world.ts#L64)

Main physics world managing rigid body simulation.

## Remarks

The World class is the main entry point for physics simulation. It manages
all rigid bodies, runs collision detection and response, enforces constraints,
and provides performance optimizations like sleeping and spatial indexing.

### Simulation Loop

Call `world.step(deltaTime)` each frame to advance the simulation. This:
1. Updates sleeping states
2. Detects collisions (broad and narrow phase)
3. Resolves collisions with impulses
4. Enforces constraints
5. Updates body positions and velocities

### Performance Tuning

- Choose appropriate spatial index for your use case
- Enable sleeping for better performance with many bodies
- Use collision filtering to reduce collision checks

## Example

Basic setup
```typescript
const world = new World(2000, 2000, 'dynamictree');

// Add bodies
const ball = new Circle({ x: 0, y: 100 }, 20, 0, 10, false);
world.addRigidBody('ball', ball);

// Simulation loop
function update(dt: number) {
  world.step(dt);
}
```

## Constructors

### Constructor

> **new World**(`maxTransWidth`, `maxTransHeight`, `spatialIndexType`): `World`

Defined in: [world.ts:79](https://github.com/ue-too/ue-too/blob/e468a9961da59c81663192ec8df16ebc8e17abac/packages/dynamics/src/world.ts#L79)

#### Parameters

##### maxTransWidth

`number`

##### maxTransHeight

`number`

##### spatialIndexType

[`SpatialIndexType`](../type-aliases/SpatialIndexType.md) = `'dynamictree'`

#### Returns

`World`

## Properties

### \_context

> **\_context**: `CanvasRenderingContext2D` \| `null` = `null`

Defined in: [world.ts:77](https://github.com/ue-too/ue-too/blob/e468a9961da59c81663192ec8df16ebc8e17abac/packages/dynamics/src/world.ts#L77)

## Accessors

### currentSpatialIndexType

#### Get Signature

> **get** **currentSpatialIndexType**(): [`SpatialIndexType`](../type-aliases/SpatialIndexType.md)

Defined in: [world.ts:244](https://github.com/ue-too/ue-too/blob/e468a9961da59c81663192ec8df16ebc8e17abac/packages/dynamics/src/world.ts#L244)

##### Returns

[`SpatialIndexType`](../type-aliases/SpatialIndexType.md)

***

### resolveCollision

#### Get Signature

> **get** **resolveCollision**(): `boolean`

Defined in: [world.ts:204](https://github.com/ue-too/ue-too/blob/e468a9961da59c81663192ec8df16ebc8e17abac/packages/dynamics/src/world.ts#L204)

##### Returns

`boolean`

#### Set Signature

> **set** **resolveCollision**(`resolveCollision`): `void`

Defined in: [world.ts:208](https://github.com/ue-too/ue-too/blob/e468a9961da59c81663192ec8df16ebc8e17abac/packages/dynamics/src/world.ts#L208)

##### Parameters

###### resolveCollision

`boolean`

##### Returns

`void`

***

### sleepingEnabled

#### Get Signature

> **get** **sleepingEnabled**(): `boolean`

Defined in: [world.ts:274](https://github.com/ue-too/ue-too/blob/e468a9961da59c81663192ec8df16ebc8e17abac/packages/dynamics/src/world.ts#L274)

##### Returns

`boolean`

#### Set Signature

> **set** **sleepingEnabled**(`enabled`): `void`

Defined in: [world.ts:278](https://github.com/ue-too/ue-too/blob/e468a9961da59c81663192ec8df16ebc8e17abac/packages/dynamics/src/world.ts#L278)

##### Parameters

###### enabled

`boolean`

##### Returns

`void`

## Methods

### addConstraint()

> **addConstraint**(`constraint`): `void`

Defined in: [world.ts:232](https://github.com/ue-too/ue-too/blob/e468a9961da59c81663192ec8df16ebc8e17abac/packages/dynamics/src/world.ts#L232)

#### Parameters

##### constraint

[`Constraint`](../interfaces/Constraint.md)

#### Returns

`void`

***

### addPinJoint()

> **addPinJoint**(`bodyA`, `bodyB`, `anchorA`, `anchorB`): `void`

Defined in: [world.ts:240](https://github.com/ue-too/ue-too/blob/e468a9961da59c81663192ec8df16ebc8e17abac/packages/dynamics/src/world.ts#L240)

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

`void`

***

### addRigidBody()

> **addRigidBody**(`ident`, `body`): `void`

Defined in: [world.ts:101](https://github.com/ue-too/ue-too/blob/e468a9961da59c81663192ec8df16ebc8e17abac/packages/dynamics/src/world.ts#L101)

#### Parameters

##### ident

`string`

##### body

[`RigidBody`](../interfaces/RigidBody.md)

#### Returns

`void`

***

### getCollisionStats()

> **getCollisionStats**(): `object`

Defined in: [world.ts:296](https://github.com/ue-too/ue-too/blob/e468a9961da59c81663192ec8df16ebc8e17abac/packages/dynamics/src/world.ts#L296)

#### Returns

`object`

##### activePairs

> **activePairs**: `number`

##### frameNumber

> **frameNumber**: `number`

##### sleepingBodies

> **sleepingBodies**: `number`

##### totalBodies

> **totalBodies**: `number`

##### totalPairs

> **totalPairs**: `number`

***

### getConstraints()

> **getConstraints**(): [`Constraint`](../interfaces/Constraint.md)[]

Defined in: [world.ts:236](https://github.com/ue-too/ue-too/blob/e468a9961da59c81663192ec8df16ebc8e17abac/packages/dynamics/src/world.ts#L236)

#### Returns

[`Constraint`](../interfaces/Constraint.md)[]

***

### getPairManager()

> **getPairManager**(): [`PairManager`](PairManager.md)

Defined in: [world.ts:291](https://github.com/ue-too/ue-too/blob/e468a9961da59c81663192ec8df16ebc8e17abac/packages/dynamics/src/world.ts#L291)

#### Returns

[`PairManager`](PairManager.md)

***

### getRigidBodyList()

> **getRigidBodyList**(): [`RigidBody`](../interfaces/RigidBody.md)[]

Defined in: [world.ts:212](https://github.com/ue-too/ue-too/blob/e468a9961da59c81663192ec8df16ebc8e17abac/packages/dynamics/src/world.ts#L212)

#### Returns

[`RigidBody`](../interfaces/RigidBody.md)[]

***

### getRigidBodyMap()

> **getRigidBodyMap**(): `Map`\<`string`, [`RigidBody`](../interfaces/RigidBody.md)\>

Defined in: [world.ts:220](https://github.com/ue-too/ue-too/blob/e468a9961da59c81663192ec8df16ebc8e17abac/packages/dynamics/src/world.ts#L220)

#### Returns

`Map`\<`string`, [`RigidBody`](../interfaces/RigidBody.md)\>

***

### getSpatialIndexStats()

> **getSpatialIndexStats**(): `any`

Defined in: [world.ts:261](https://github.com/ue-too/ue-too/blob/e468a9961da59c81663192ec8df16ebc8e17abac/packages/dynamics/src/world.ts#L261)

#### Returns

`any`

***

### removeRigidBody()

> **removeRigidBody**(`ident`): `void`

Defined in: [world.ts:111](https://github.com/ue-too/ue-too/blob/e468a9961da59c81663192ec8df16ebc8e17abac/packages/dynamics/src/world.ts#L111)

#### Parameters

##### ident

`string`

#### Returns

`void`

***

### resolveCollisionPhase()

> **resolveCollisionPhase**(): `Point`[]

Defined in: [world.ts:160](https://github.com/ue-too/ue-too/blob/e468a9961da59c81663192ec8df16ebc8e17abac/packages/dynamics/src/world.ts#L160)

#### Returns

`Point`[]

***

### setMaxTransHeight()

> **setMaxTransHeight**(`height`): `void`

Defined in: [world.ts:224](https://github.com/ue-too/ue-too/blob/e468a9961da59c81663192ec8df16ebc8e17abac/packages/dynamics/src/world.ts#L224)

#### Parameters

##### height

`number`

#### Returns

`void`

***

### setMaxTransWidth()

> **setMaxTransWidth**(`width`): `void`

Defined in: [world.ts:228](https://github.com/ue-too/ue-too/blob/e468a9961da59c81663192ec8df16ebc8e17abac/packages/dynamics/src/world.ts#L228)

#### Parameters

##### width

`number`

#### Returns

`void`

***

### setSpatialIndexType()

> **setSpatialIndexType**(`type`): `void`

Defined in: [world.ts:248](https://github.com/ue-too/ue-too/blob/e468a9961da59c81663192ec8df16ebc8e17abac/packages/dynamics/src/world.ts#L248)

#### Parameters

##### type

[`SpatialIndexType`](../type-aliases/SpatialIndexType.md)

#### Returns

`void`

***

### step()

> **step**(`deltaTime`): `void`

Defined in: [world.ts:129](https://github.com/ue-too/ue-too/blob/e468a9961da59c81663192ec8df16ebc8e17abac/packages/dynamics/src/world.ts#L129)

#### Parameters

##### deltaTime

`number`

#### Returns

`void`
