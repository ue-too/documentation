[@ue-too/dynamics](../globals.md) / RigidBody

# Interface: RigidBody

Defined in: [rigidbody.ts:16](https://github.com/ue-too/ue-too/blob/1055c6abca1ea3a0e952b0825f36e0ca2527df85/packages/dynamics/src/rigidbody.ts#L16)

Rigid body interface for 2D physics simulation.

## Remarks

Represents a physical object in the physics world with mass, velocity,
rotation, and collision properties. Can be either static (immovable) or
dynamic (responds to forces).

Implemented by [Circle](../classes/Circle.md) and [Polygon](../classes/Polygon.md) classes.

## Properties

### AABB

> **AABB**: `object`

Defined in: [rigidbody.ts:26](https://github.com/ue-too/ue-too/blob/1055c6abca1ea3a0e952b0825f36e0ca2527df85/packages/dynamics/src/rigidbody.ts#L26)

Axis-Aligned Bounding Box for broad phase collision

#### max

> **max**: `Point`

#### min

> **min**: `Point`

***

### angularVelocity

> **angularVelocity**: `number`

Defined in: [rigidbody.ts:24](https://github.com/ue-too/ue-too/blob/1055c6abca1ea3a0e952b0825f36e0ca2527df85/packages/dynamics/src/rigidbody.ts#L24)

Angular velocity (radians/second)

***

### center

> **center**: `Point`

Defined in: [rigidbody.ts:18](https://github.com/ue-too/ue-too/blob/1055c6abca1ea3a0e952b0825f36e0ca2527df85/packages/dynamics/src/rigidbody.ts#L18)

Center position in world coordinates

***

### collisionFilter

> **collisionFilter**: [`CollisionFilter`](CollisionFilter.md)

Defined in: [rigidbody.ts:35](https://github.com/ue-too/ue-too/blob/1055c6abca1ea3a0e952b0825f36e0ca2527df85/packages/dynamics/src/rigidbody.ts#L35)

Collision filtering configuration

***

### isSleeping

> **isSleeping**: `boolean`

Defined in: [rigidbody.ts:38](https://github.com/ue-too/ue-too/blob/1055c6abca1ea3a0e952b0825f36e0ca2527df85/packages/dynamics/src/rigidbody.ts#L38)

***

### linearVelocity

> **linearVelocity**: `Point`

Defined in: [rigidbody.ts:22](https://github.com/ue-too/ue-too/blob/1055c6abca1ea3a0e952b0825f36e0ca2527df85/packages/dynamics/src/rigidbody.ts#L22)

Linear velocity (pixels/second)

***

### mass

> **mass**: `number`

Defined in: [rigidbody.ts:28](https://github.com/ue-too/ue-too/blob/1055c6abca1ea3a0e952b0825f36e0ca2527df85/packages/dynamics/src/rigidbody.ts#L28)

Mass in arbitrary units (affects force response)

***

### momentOfInertia

> **momentOfInertia**: `number`

Defined in: [rigidbody.ts:32](https://github.com/ue-too/ue-too/blob/1055c6abca1ea3a0e952b0825f36e0ca2527df85/packages/dynamics/src/rigidbody.ts#L32)

Moment of inertia (rotational mass)

***

### orientationAngle

> **orientationAngle**: `number`

Defined in: [rigidbody.ts:20](https://github.com/ue-too/ue-too/blob/1055c6abca1ea3a0e952b0825f36e0ca2527df85/packages/dynamics/src/rigidbody.ts#L20)

Rotation angle in radians

***

### sleepThreshold

> **sleepThreshold**: `number`

Defined in: [rigidbody.ts:39](https://github.com/ue-too/ue-too/blob/1055c6abca1ea3a0e952b0825f36e0ca2527df85/packages/dynamics/src/rigidbody.ts#L39)

***

### sleepTime

> **sleepTime**: `number`

Defined in: [rigidbody.ts:40](https://github.com/ue-too/ue-too/blob/1055c6abca1ea3a0e952b0825f36e0ca2527df85/packages/dynamics/src/rigidbody.ts#L40)

***

### staticFrictionCoeff

> **staticFrictionCoeff**: `number`

Defined in: [rigidbody.ts:30](https://github.com/ue-too/ue-too/blob/1055c6abca1ea3a0e952b0825f36e0ca2527df85/packages/dynamics/src/rigidbody.ts#L30)

Static friction coefficient (0-1)

***

### timeAtRest

> **timeAtRest**: `number`

Defined in: [rigidbody.ts:41](https://github.com/ue-too/ue-too/blob/1055c6abca1ea3a0e952b0825f36e0ca2527df85/packages/dynamics/src/rigidbody.ts#L41)

## Methods

### applyForce()

> **applyForce**(`force`): `void`

Defined in: [rigidbody.ts:48](https://github.com/ue-too/ue-too/blob/1055c6abca1ea3a0e952b0825f36e0ca2527df85/packages/dynamics/src/rigidbody.ts#L48)

#### Parameters

##### force

`Point`

#### Returns

`void`

***

### applyForceInOrientation()

> **applyForceInOrientation**(`force`): `void`

Defined in: [rigidbody.ts:49](https://github.com/ue-too/ue-too/blob/1055c6abca1ea3a0e952b0825f36e0ca2527df85/packages/dynamics/src/rigidbody.ts#L49)

#### Parameters

##### force

`Point`

#### Returns

`void`

***

### getAdjacentFaces()

> **getAdjacentFaces**(`collisionNormal`): `object`[]

Defined in: [rigidbody.ts:55](https://github.com/ue-too/ue-too/blob/1055c6abca1ea3a0e952b0825f36e0ca2527df85/packages/dynamics/src/rigidbody.ts#L55)

#### Parameters

##### collisionNormal

`Point`

#### Returns

`object`[]

***

### getCollisionAxes()

> **getCollisionAxes**(`relativeBody`): `Point`[]

Defined in: [rigidbody.ts:47](https://github.com/ue-too/ue-too/blob/1055c6abca1ea3a0e952b0825f36e0ca2527df85/packages/dynamics/src/rigidbody.ts#L47)

#### Parameters

##### relativeBody

`RigidBody`

#### Returns

`Point`[]

***

### getMinMaxProjection()

> **getMinMaxProjection**(`unitvector`): `object`

Defined in: [rigidbody.ts:46](https://github.com/ue-too/ue-too/blob/1055c6abca1ea3a0e952b0825f36e0ca2527df85/packages/dynamics/src/rigidbody.ts#L46)

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

Defined in: [rigidbody.ts:54](https://github.com/ue-too/ue-too/blob/1055c6abca1ea3a0e952b0825f36e0ca2527df85/packages/dynamics/src/rigidbody.ts#L54)

#### Parameters

##### collisionNormal

`Point`

#### Returns

`Point`

***

### getSignificantVertices()

> **getSignificantVertices**(`collisionNormal`): `Point`[]

Defined in: [rigidbody.ts:53](https://github.com/ue-too/ue-too/blob/1055c6abca1ea3a0e952b0825f36e0ca2527df85/packages/dynamics/src/rigidbody.ts#L53)

#### Parameters

##### collisionNormal

`Point`

#### Returns

`Point`[]

***

### isMovingStatic()

> **isMovingStatic**(): `boolean`

Defined in: [rigidbody.ts:45](https://github.com/ue-too/ue-too/blob/1055c6abca1ea3a0e952b0825f36e0ca2527df85/packages/dynamics/src/rigidbody.ts#L45)

#### Returns

`boolean`

***

### isStatic()

> **isStatic**(): `boolean`

Defined in: [rigidbody.ts:44](https://github.com/ue-too/ue-too/blob/1055c6abca1ea3a0e952b0825f36e0ca2527df85/packages/dynamics/src/rigidbody.ts#L44)

#### Returns

`boolean`

***

### move()

> **move**(`delta`): `void`

Defined in: [rigidbody.ts:51](https://github.com/ue-too/ue-too/blob/1055c6abca1ea3a0e952b0825f36e0ca2527df85/packages/dynamics/src/rigidbody.ts#L51)

#### Parameters

##### delta

`Point`

#### Returns

`void`

***

### setSleeping()

> **setSleeping**(`sleeping`): `void`

Defined in: [rigidbody.ts:58](https://github.com/ue-too/ue-too/blob/1055c6abca1ea3a0e952b0825f36e0ca2527df85/packages/dynamics/src/rigidbody.ts#L58)

#### Parameters

##### sleeping

`boolean`

#### Returns

`void`

***

### significantVertex()

> **significantVertex**(`collisionNormal`): `Point`

Defined in: [rigidbody.ts:52](https://github.com/ue-too/ue-too/blob/1055c6abca1ea3a0e952b0825f36e0ca2527df85/packages/dynamics/src/rigidbody.ts#L52)

#### Parameters

##### collisionNormal

`Point`

#### Returns

`Point`

***

### step()

> **step**(`deltaTime`): `void`

Defined in: [rigidbody.ts:43](https://github.com/ue-too/ue-too/blob/1055c6abca1ea3a0e952b0825f36e0ca2527df85/packages/dynamics/src/rigidbody.ts#L43)

#### Parameters

##### deltaTime

`number`

#### Returns

`void`

***

### updateSleeping()

> **updateSleeping**(`deltaTime`): `void`

Defined in: [rigidbody.ts:59](https://github.com/ue-too/ue-too/blob/1055c6abca1ea3a0e952b0825f36e0ca2527df85/packages/dynamics/src/rigidbody.ts#L59)

#### Parameters

##### deltaTime

`number`

#### Returns

`void`
