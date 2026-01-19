[@ue-too/dynamics](../globals.md) / VisualPolygonBody

# Class: VisualPolygonBody

Defined in: [rigidbody.ts:449](https://github.com/ue-too/ue-too/blob/1055c6abca1ea3a0e952b0825f36e0ca2527df85/packages/dynamics/src/rigidbody.ts#L449)

Rigid body interface for 2D physics simulation.

## Remarks

Represents a physical object in the physics world with mass, velocity,
rotation, and collision properties. Can be either static (immovable) or
dynamic (responds to forces).

Implemented by [Circle](Circle.md) and [Polygon](Polygon.md) classes.

## Implements

- [`VisualComponent`](../interfaces/VisualComponent.md)
- [`RigidBody`](../interfaces/RigidBody.md)

## Constructors

### Constructor

> **new VisualPolygonBody**(`center`, `vertices`, `drawingContext`, `_orientationAngle`, `mass`, `isStatic`, `frictionEnabled`): `VisualPolygonBody`

Defined in: [rigidbody.ts:463](https://github.com/ue-too/ue-too/blob/1055c6abca1ea3a0e952b0825f36e0ca2527df85/packages/dynamics/src/rigidbody.ts#L463)

#### Parameters

##### center

`Point` = `...`

##### vertices

`Point`[]

##### drawingContext

`CanvasRenderingContext2D`

##### \_orientationAngle

`number` = `0`

##### mass

`number` = `50`

##### isStatic

`boolean` = `false`

##### frictionEnabled

`boolean` = `true`

#### Returns

`VisualPolygonBody`

## Properties

### collisionFilter

> **collisionFilter**: [`CollisionFilter`](../interfaces/CollisionFilter.md)

Defined in: [rigidbody.ts:455](https://github.com/ue-too/ue-too/blob/1055c6abca1ea3a0e952b0825f36e0ca2527df85/packages/dynamics/src/rigidbody.ts#L455)

Collision filtering configuration

#### Implementation of

[`RigidBody`](../interfaces/RigidBody.md).[`collisionFilter`](../interfaces/RigidBody.md#collisionfilter)

***

### isSleeping

> **isSleeping**: `boolean` = `false`

Defined in: [rigidbody.ts:458](https://github.com/ue-too/ue-too/blob/1055c6abca1ea3a0e952b0825f36e0ca2527df85/packages/dynamics/src/rigidbody.ts#L458)

#### Implementation of

[`RigidBody`](../interfaces/RigidBody.md).[`isSleeping`](../interfaces/RigidBody.md#issleeping)

***

### sleepThreshold

> **sleepThreshold**: `number` = `0.01`

Defined in: [rigidbody.ts:459](https://github.com/ue-too/ue-too/blob/1055c6abca1ea3a0e952b0825f36e0ca2527df85/packages/dynamics/src/rigidbody.ts#L459)

#### Implementation of

[`RigidBody`](../interfaces/RigidBody.md).[`sleepThreshold`](../interfaces/RigidBody.md#sleepthreshold)

***

### sleepTime

> **sleepTime**: `number` = `0.5`

Defined in: [rigidbody.ts:460](https://github.com/ue-too/ue-too/blob/1055c6abca1ea3a0e952b0825f36e0ca2527df85/packages/dynamics/src/rigidbody.ts#L460)

#### Implementation of

[`RigidBody`](../interfaces/RigidBody.md).[`sleepTime`](../interfaces/RigidBody.md#sleeptime)

***

### timeAtRest

> **timeAtRest**: `number` = `0`

Defined in: [rigidbody.ts:461](https://github.com/ue-too/ue-too/blob/1055c6abca1ea3a0e952b0825f36e0ca2527df85/packages/dynamics/src/rigidbody.ts#L461)

#### Implementation of

[`RigidBody`](../interfaces/RigidBody.md).[`timeAtRest`](../interfaces/RigidBody.md#timeatrest)

## Accessors

### AABB

#### Get Signature

> **get** **AABB**(): `object`

Defined in: [rigidbody.ts:555](https://github.com/ue-too/ue-too/blob/1055c6abca1ea3a0e952b0825f36e0ca2527df85/packages/dynamics/src/rigidbody.ts#L555)

Axis-Aligned Bounding Box for broad phase collision

##### Returns

`object`

###### max

> **max**: `Point`

###### min

> **min**: `Point`

Axis-Aligned Bounding Box for broad phase collision

#### Implementation of

[`RigidBody`](../interfaces/RigidBody.md).[`AABB`](../interfaces/RigidBody.md#aabb)

***

### angularVelocity

#### Get Signature

> **get** **angularVelocity**(): `number`

Defined in: [rigidbody.ts:535](https://github.com/ue-too/ue-too/blob/1055c6abca1ea3a0e952b0825f36e0ca2527df85/packages/dynamics/src/rigidbody.ts#L535)

Angular velocity (radians/second)

##### Returns

`number`

#### Set Signature

> **set** **angularVelocity**(`angularVelocity`): `void`

Defined in: [rigidbody.ts:539](https://github.com/ue-too/ue-too/blob/1055c6abca1ea3a0e952b0825f36e0ca2527df85/packages/dynamics/src/rigidbody.ts#L539)

Angular velocity (radians/second)

##### Parameters

###### angularVelocity

`number`

##### Returns

`void`

Angular velocity (radians/second)

#### Implementation of

[`RigidBody`](../interfaces/RigidBody.md).[`angularVelocity`](../interfaces/RigidBody.md#angularvelocity)

***

### center

#### Get Signature

> **get** **center**(): `Point`

Defined in: [rigidbody.ts:519](https://github.com/ue-too/ue-too/blob/1055c6abca1ea3a0e952b0825f36e0ca2527df85/packages/dynamics/src/rigidbody.ts#L519)

Center position in world coordinates

##### Returns

`Point`

#### Set Signature

> **set** **center**(`dest`): `void`

Defined in: [rigidbody.ts:523](https://github.com/ue-too/ue-too/blob/1055c6abca1ea3a0e952b0825f36e0ca2527df85/packages/dynamics/src/rigidbody.ts#L523)

Center position in world coordinates

##### Parameters

###### dest

`Point`

##### Returns

`void`

Center position in world coordinates

#### Implementation of

[`RigidBody`](../interfaces/RigidBody.md).[`center`](../interfaces/RigidBody.md#center)

***

### linearVelocity

#### Get Signature

> **get** **linearVelocity**(): `Point`

Defined in: [rigidbody.ts:527](https://github.com/ue-too/ue-too/blob/1055c6abca1ea3a0e952b0825f36e0ca2527df85/packages/dynamics/src/rigidbody.ts#L527)

Linear velocity (pixels/second)

##### Returns

`Point`

#### Set Signature

> **set** **linearVelocity**(`dest`): `void`

Defined in: [rigidbody.ts:531](https://github.com/ue-too/ue-too/blob/1055c6abca1ea3a0e952b0825f36e0ca2527df85/packages/dynamics/src/rigidbody.ts#L531)

Linear velocity (pixels/second)

##### Parameters

###### dest

`Point`

##### Returns

`void`

Linear velocity (pixels/second)

#### Implementation of

[`RigidBody`](../interfaces/RigidBody.md).[`linearVelocity`](../interfaces/RigidBody.md#linearvelocity)

***

### mass

#### Get Signature

> **get** **mass**(): `number`

Defined in: [rigidbody.ts:559](https://github.com/ue-too/ue-too/blob/1055c6abca1ea3a0e952b0825f36e0ca2527df85/packages/dynamics/src/rigidbody.ts#L559)

Mass in arbitrary units (affects force response)

##### Returns

`number`

Mass in arbitrary units (affects force response)

#### Implementation of

[`RigidBody`](../interfaces/RigidBody.md).[`mass`](../interfaces/RigidBody.md#mass)

***

### momentOfInertia

#### Get Signature

> **get** **momentOfInertia**(): `number`

Defined in: [rigidbody.ts:571](https://github.com/ue-too/ue-too/blob/1055c6abca1ea3a0e952b0825f36e0ca2527df85/packages/dynamics/src/rigidbody.ts#L571)

Moment of inertia (rotational mass)

##### Returns

`number`

Moment of inertia (rotational mass)

#### Implementation of

[`RigidBody`](../interfaces/RigidBody.md).[`momentOfInertia`](../interfaces/RigidBody.md#momentofinertia)

***

### orientationAngle

#### Get Signature

> **get** **orientationAngle**(): `number`

Defined in: [rigidbody.ts:543](https://github.com/ue-too/ue-too/blob/1055c6abca1ea3a0e952b0825f36e0ca2527df85/packages/dynamics/src/rigidbody.ts#L543)

Rotation angle in radians

##### Returns

`number`

Rotation angle in radians

#### Implementation of

[`RigidBody`](../interfaces/RigidBody.md).[`orientationAngle`](../interfaces/RigidBody.md#orientationangle)

***

### staticFrictionCoeff

#### Get Signature

> **get** **staticFrictionCoeff**(): `number`

Defined in: [rigidbody.ts:563](https://github.com/ue-too/ue-too/blob/1055c6abca1ea3a0e952b0825f36e0ca2527df85/packages/dynamics/src/rigidbody.ts#L563)

Static friction coefficient (0-1)

##### Returns

`number`

#### Set Signature

> **set** **staticFrictionCoeff**(`coeff`): `void`

Defined in: [rigidbody.ts:567](https://github.com/ue-too/ue-too/blob/1055c6abca1ea3a0e952b0825f36e0ca2527df85/packages/dynamics/src/rigidbody.ts#L567)

Static friction coefficient (0-1)

##### Parameters

###### coeff

`number`

##### Returns

`void`

Static friction coefficient (0-1)

#### Implementation of

[`RigidBody`](../interfaces/RigidBody.md).[`staticFrictionCoeff`](../interfaces/RigidBody.md#staticfrictioncoeff)

## Methods

### applyForce()

> **applyForce**(`force`): `void`

Defined in: [rigidbody.ts:503](https://github.com/ue-too/ue-too/blob/1055c6abca1ea3a0e952b0825f36e0ca2527df85/packages/dynamics/src/rigidbody.ts#L503)

#### Parameters

##### force

`Point`

#### Returns

`void`

#### Implementation of

[`RigidBody`](../interfaces/RigidBody.md).[`applyForce`](../interfaces/RigidBody.md#applyforce)

***

### applyForceInOrientation()

> **applyForceInOrientation**(`force`): `void`

Defined in: [rigidbody.ts:507](https://github.com/ue-too/ue-too/blob/1055c6abca1ea3a0e952b0825f36e0ca2527df85/packages/dynamics/src/rigidbody.ts#L507)

#### Parameters

##### force

`Point`

#### Returns

`void`

#### Implementation of

[`RigidBody`](../interfaces/RigidBody.md).[`applyForceInOrientation`](../interfaces/RigidBody.md#applyforceinorientation)

***

### draw()

> **draw**(`ctx`): `void`

Defined in: [rigidbody.ts:468](https://github.com/ue-too/ue-too/blob/1055c6abca1ea3a0e952b0825f36e0ca2527df85/packages/dynamics/src/rigidbody.ts#L468)

#### Parameters

##### ctx

`CanvasRenderingContext2D`

#### Returns

`void`

#### Implementation of

[`VisualComponent`](../interfaces/VisualComponent.md).[`draw`](../interfaces/VisualComponent.md#draw)

***

### getAdjacentFaces()

> **getAdjacentFaces**(`collisionNormal`): `object`[]

Defined in: [rigidbody.ts:579](https://github.com/ue-too/ue-too/blob/1055c6abca1ea3a0e952b0825f36e0ca2527df85/packages/dynamics/src/rigidbody.ts#L579)

#### Parameters

##### collisionNormal

`Point`

#### Returns

`object`[]

#### Implementation of

[`RigidBody`](../interfaces/RigidBody.md).[`getAdjacentFaces`](../interfaces/RigidBody.md#getadjacentfaces)

***

### getCollisionAxes()

> **getCollisionAxes**(`relativeBody`): `Point`[]

Defined in: [rigidbody.ts:499](https://github.com/ue-too/ue-too/blob/1055c6abca1ea3a0e952b0825f36e0ca2527df85/packages/dynamics/src/rigidbody.ts#L499)

#### Parameters

##### relativeBody

[`RigidBody`](../interfaces/RigidBody.md)

#### Returns

`Point`[]

#### Implementation of

[`RigidBody`](../interfaces/RigidBody.md).[`getCollisionAxes`](../interfaces/RigidBody.md#getcollisionaxes)

***

### getMinMaxProjection()

> **getMinMaxProjection**(`unitvector`): `object`

Defined in: [rigidbody.ts:495](https://github.com/ue-too/ue-too/blob/1055c6abca1ea3a0e952b0825f36e0ca2527df85/packages/dynamics/src/rigidbody.ts#L495)

#### Parameters

##### unitvector

`Point`

#### Returns

`object`

##### max

> **max**: `number`

##### min

> **min**: `number`

#### Implementation of

[`RigidBody`](../interfaces/RigidBody.md).[`getMinMaxProjection`](../interfaces/RigidBody.md#getminmaxprojection)

***

### getNormalOfSignificantFace()

> **getNormalOfSignificantFace**(`collisionNormal`): `Point`

Defined in: [rigidbody.ts:575](https://github.com/ue-too/ue-too/blob/1055c6abca1ea3a0e952b0825f36e0ca2527df85/packages/dynamics/src/rigidbody.ts#L575)

#### Parameters

##### collisionNormal

`Point`

#### Returns

`Point`

#### Implementation of

[`RigidBody`](../interfaces/RigidBody.md).[`getNormalOfSignificantFace`](../interfaces/RigidBody.md#getnormalofsignificantface)

***

### getSignificantVertices()

> **getSignificantVertices**(`collisionNormal`): `Point`[]

Defined in: [rigidbody.ts:551](https://github.com/ue-too/ue-too/blob/1055c6abca1ea3a0e952b0825f36e0ca2527df85/packages/dynamics/src/rigidbody.ts#L551)

#### Parameters

##### collisionNormal

`Point`

#### Returns

`Point`[]

#### Implementation of

[`RigidBody`](../interfaces/RigidBody.md).[`getSignificantVertices`](../interfaces/RigidBody.md#getsignificantvertices)

***

### isMovingStatic()

> **isMovingStatic**(): `boolean`

Defined in: [rigidbody.ts:491](https://github.com/ue-too/ue-too/blob/1055c6abca1ea3a0e952b0825f36e0ca2527df85/packages/dynamics/src/rigidbody.ts#L491)

#### Returns

`boolean`

#### Implementation of

[`RigidBody`](../interfaces/RigidBody.md).[`isMovingStatic`](../interfaces/RigidBody.md#ismovingstatic)

***

### isStatic()

> **isStatic**(): `boolean`

Defined in: [rigidbody.ts:487](https://github.com/ue-too/ue-too/blob/1055c6abca1ea3a0e952b0825f36e0ca2527df85/packages/dynamics/src/rigidbody.ts#L487)

#### Returns

`boolean`

#### Implementation of

[`RigidBody`](../interfaces/RigidBody.md).[`isStatic`](../interfaces/RigidBody.md#isstatic)

***

### move()

> **move**(`delta`): `void`

Defined in: [rigidbody.ts:515](https://github.com/ue-too/ue-too/blob/1055c6abca1ea3a0e952b0825f36e0ca2527df85/packages/dynamics/src/rigidbody.ts#L515)

#### Parameters

##### delta

`Point`

#### Returns

`void`

#### Implementation of

[`RigidBody`](../interfaces/RigidBody.md).[`move`](../interfaces/RigidBody.md#move)

***

### setLinearVelocity()

> **setLinearVelocity**(`linearVelocity`): `void`

Defined in: [rigidbody.ts:511](https://github.com/ue-too/ue-too/blob/1055c6abca1ea3a0e952b0825f36e0ca2527df85/packages/dynamics/src/rigidbody.ts#L511)

#### Parameters

##### linearVelocity

`Point`

#### Returns

`void`

***

### setSleeping()

> **setSleeping**(`sleeping`): `void`

Defined in: [rigidbody.ts:584](https://github.com/ue-too/ue-too/blob/1055c6abca1ea3a0e952b0825f36e0ca2527df85/packages/dynamics/src/rigidbody.ts#L584)

#### Parameters

##### sleeping

`boolean`

#### Returns

`void`

#### Implementation of

[`RigidBody`](../interfaces/RigidBody.md).[`setSleeping`](../interfaces/RigidBody.md#setsleeping)

***

### significantVertex()

> **significantVertex**(`collisionNormal`): `Point`

Defined in: [rigidbody.ts:547](https://github.com/ue-too/ue-too/blob/1055c6abca1ea3a0e952b0825f36e0ca2527df85/packages/dynamics/src/rigidbody.ts#L547)

#### Parameters

##### collisionNormal

`Point`

#### Returns

`Point`

#### Implementation of

[`RigidBody`](../interfaces/RigidBody.md).[`significantVertex`](../interfaces/RigidBody.md#significantvertex)

***

### step()

> **step**(`deltaTime`): `void`

Defined in: [rigidbody.ts:482](https://github.com/ue-too/ue-too/blob/1055c6abca1ea3a0e952b0825f36e0ca2527df85/packages/dynamics/src/rigidbody.ts#L482)

#### Parameters

##### deltaTime

`number`

#### Returns

`void`

#### Implementation of

[`RigidBody`](../interfaces/RigidBody.md).[`step`](../interfaces/RigidBody.md#step)

***

### updateSleeping()

> **updateSleeping**(`deltaTime`): `void`

Defined in: [rigidbody.ts:595](https://github.com/ue-too/ue-too/blob/1055c6abca1ea3a0e952b0825f36e0ca2527df85/packages/dynamics/src/rigidbody.ts#L595)

#### Parameters

##### deltaTime

`number`

#### Returns

`void`

#### Implementation of

[`RigidBody`](../interfaces/RigidBody.md).[`updateSleeping`](../interfaces/RigidBody.md#updatesleeping)
