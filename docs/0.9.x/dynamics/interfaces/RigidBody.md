[@ue-too/dynamics](../globals.md) / RigidBody

# Interface: RigidBody

Defined in: rigidbody.d.ts:3

## Properties

### AABB

> **AABB**: `object`

Defined in: rigidbody.d.ts:8

#### max

> **max**: `Point`

#### min

> **min**: `Point`

***

### angularVelocity

> **angularVelocity**: `number`

Defined in: rigidbody.d.ts:7

***

### center

> **center**: `Point`

Defined in: rigidbody.d.ts:4

***

### collisionFilter

> **collisionFilter**: [`CollisionFilter`](CollisionFilter.md)

Defined in: rigidbody.d.ts:15

***

### isSleeping

> **isSleeping**: `boolean`

Defined in: rigidbody.d.ts:16

***

### linearVelocity

> **linearVelocity**: `Point`

Defined in: rigidbody.d.ts:6

***

### mass

> **mass**: `number`

Defined in: rigidbody.d.ts:12

***

### momentOfInertia

> **momentOfInertia**: `number`

Defined in: rigidbody.d.ts:14

***

### orientationAngle

> **orientationAngle**: `number`

Defined in: rigidbody.d.ts:5

***

### sleepThreshold

> **sleepThreshold**: `number`

Defined in: rigidbody.d.ts:17

***

### sleepTime

> **sleepTime**: `number`

Defined in: rigidbody.d.ts:18

***

### staticFrictionCoeff

> **staticFrictionCoeff**: `number`

Defined in: rigidbody.d.ts:13

***

### timeAtRest

> **timeAtRest**: `number`

Defined in: rigidbody.d.ts:19

## Methods

### applyForce()

> **applyForce**(`force`): `void`

Defined in: rigidbody.d.ts:28

#### Parameters

##### force

`Point`

#### Returns

`void`

***

### applyForceInOrientation()

> **applyForceInOrientation**(`force`): `void`

Defined in: rigidbody.d.ts:29

#### Parameters

##### force

`Point`

#### Returns

`void`

***

### getAdjacentFaces()

> **getAdjacentFaces**(`collisionNormal`): `object`[]

Defined in: rigidbody.d.ts:34

#### Parameters

##### collisionNormal

`Point`

#### Returns

`object`[]

***

### getCollisionAxes()

> **getCollisionAxes**(`relativeBody`): `Point`[]

Defined in: rigidbody.d.ts:27

#### Parameters

##### relativeBody

`RigidBody`

#### Returns

`Point`[]

***

### getMinMaxProjection()

> **getMinMaxProjection**(`unitvector`): `object`

Defined in: rigidbody.d.ts:23

#### Parameters

##### unitvector

`Point`

#### Returns

`object`

##### max

> **max**: `number`

##### min

> **min**: `number`

***

### getNormalOfSignificantFace()

> **getNormalOfSignificantFace**(`collisionNormal`): `Point`

Defined in: rigidbody.d.ts:33

#### Parameters

##### collisionNormal

`Point`

#### Returns

`Point`

***

### getSignificantVertices()

> **getSignificantVertices**(`collisionNormal`): `Point`[]

Defined in: rigidbody.d.ts:32

#### Parameters

##### collisionNormal

`Point`

#### Returns

`Point`[]

***

### isMovingStatic()

> **isMovingStatic**(): `boolean`

Defined in: rigidbody.d.ts:22

#### Returns

`boolean`

***

### isStatic()

> **isStatic**(): `boolean`

Defined in: rigidbody.d.ts:21

#### Returns

`boolean`

***

### move()

> **move**(`delta`): `void`

Defined in: rigidbody.d.ts:30

#### Parameters

##### delta

`Point`

#### Returns

`void`

***

### setSleeping()

> **setSleeping**(`sleeping`): `void`

Defined in: rigidbody.d.ts:44

#### Parameters

##### sleeping

`boolean`

#### Returns

`void`

***

### significantVertex()

> **significantVertex**(`collisionNormal`): `Point`

Defined in: rigidbody.d.ts:31

#### Parameters

##### collisionNormal

`Point`

#### Returns

`Point`

***

### step()

> **step**(`deltaTime`): `void`

Defined in: rigidbody.d.ts:20

#### Parameters

##### deltaTime

`number`

#### Returns

`void`

***

### updateSleeping()

> **updateSleeping**(`deltaTime`): `void`

Defined in: rigidbody.d.ts:45

#### Parameters

##### deltaTime

`number`

#### Returns

`void`
