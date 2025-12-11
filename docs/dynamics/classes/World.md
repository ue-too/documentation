[@ue-too/dynamics](../globals.md) / World

# Class: World

Defined in: world.d.ts:6

## Constructors

### Constructor

> **new World**(`maxTransWidth`, `maxTransHeight`, `spatialIndexType?`): `World`

Defined in: world.d.ts:20

#### Parameters

##### maxTransWidth

`number`

##### maxTransHeight

`number`

##### spatialIndexType?

[`SpatialIndexType`](../type-aliases/SpatialIndexType.md)

#### Returns

`World`

## Properties

### \_context

> **\_context**: `CanvasRenderingContext2D`

Defined in: world.d.ts:19

## Accessors

### currentSpatialIndexType

#### Get Signature

> **get** **currentSpatialIndexType**(): [`SpatialIndexType`](../type-aliases/SpatialIndexType.md)

Defined in: world.d.ts:34

##### Returns

[`SpatialIndexType`](../type-aliases/SpatialIndexType.md)

***

### resolveCollision

#### Get Signature

> **get** **resolveCollision**(): `boolean`

Defined in: world.d.ts:25

##### Returns

`boolean`

#### Set Signature

> **set** **resolveCollision**(`resolveCollision`): `void`

Defined in: world.d.ts:26

##### Parameters

###### resolveCollision

`boolean`

##### Returns

`void`

***

### sleepingEnabled

#### Get Signature

> **get** **sleepingEnabled**(): `boolean`

Defined in: world.d.ts:37

##### Returns

`boolean`

#### Set Signature

> **set** **sleepingEnabled**(`enabled`): `void`

Defined in: world.d.ts:38

##### Parameters

###### enabled

`boolean`

##### Returns

`void`

## Methods

### addConstraint()

> **addConstraint**(`constraint`): `void`

Defined in: world.d.ts:31

#### Parameters

##### constraint

[`Constraint`](../interfaces/Constraint.md)

#### Returns

`void`

***

### addPinJoint()

> **addPinJoint**(`bodyA`, `bodyB`, `anchorA`, `anchorB`): `void`

Defined in: world.d.ts:33

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

Defined in: world.d.ts:21

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

Defined in: world.d.ts:40

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

Defined in: world.d.ts:32

#### Returns

[`Constraint`](../interfaces/Constraint.md)[]

***

### getPairManager()

> **getPairManager**(): [`PairManager`](PairManager.md)

Defined in: world.d.ts:39

#### Returns

[`PairManager`](PairManager.md)

***

### getRigidBodyList()

> **getRigidBodyList**(): [`RigidBody`](../interfaces/RigidBody.md)[]

Defined in: world.d.ts:27

#### Returns

[`RigidBody`](../interfaces/RigidBody.md)[]

***

### getRigidBodyMap()

> **getRigidBodyMap**(): `Map`\<`string`, [`RigidBody`](../interfaces/RigidBody.md)\>

Defined in: world.d.ts:28

#### Returns

`Map`\<`string`, [`RigidBody`](../interfaces/RigidBody.md)\>

***

### getSpatialIndexStats()

> **getSpatialIndexStats**(): `any`

Defined in: world.d.ts:36

#### Returns

`any`

***

### removeRigidBody()

> **removeRigidBody**(`ident`): `void`

Defined in: world.d.ts:22

#### Parameters

##### ident

`string`

#### Returns

`void`

***

### resolveCollisionPhase()

> **resolveCollisionPhase**(): `Point`[]

Defined in: world.d.ts:24

#### Returns

`Point`[]

***

### setMaxTransHeight()

> **setMaxTransHeight**(`height`): `void`

Defined in: world.d.ts:29

#### Parameters

##### height

`number`

#### Returns

`void`

***

### setMaxTransWidth()

> **setMaxTransWidth**(`width`): `void`

Defined in: world.d.ts:30

#### Parameters

##### width

`number`

#### Returns

`void`

***

### setSpatialIndexType()

> **setSpatialIndexType**(`type`): `void`

Defined in: world.d.ts:35

#### Parameters

##### type

[`SpatialIndexType`](../type-aliases/SpatialIndexType.md)

#### Returns

`void`

***

### step()

> **step**(`deltaTime`): `void`

Defined in: world.d.ts:23

#### Parameters

##### deltaTime

`number`

#### Returns

`void`
