[@ue-too/dynamics](../globals.md) / BaseRigidBody

# Abstract Class: BaseRigidBody

Defined in: [rigidbody.ts:66](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/dynamics/src/rigidbody.ts#L66)

Rigid body interface for 2D physics simulation.

## Remarks

Represents a physical object in the physics world with mass, velocity,
rotation, and collision properties. Can be either static (immovable) or
dynamic (responds to forces).

Implemented by [Circle](Circle.md) and [Polygon](Polygon.md) classes.

## Extended by

- [`Polygon`](Polygon.md)
- [`Circle`](Circle.md)

## Implements

- [`RigidBody`](../interfaces/RigidBody.md)

## Constructors

### Constructor

> **new BaseRigidBody**(`center`, `_orientationAngle`, `mass`, `isStaticBody`, `frictionEnabled`): `BaseRigidBody`

Defined in: [rigidbody.ts:92](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/dynamics/src/rigidbody.ts#L92)

#### Parameters

##### center

`Point`

##### \_orientationAngle

`number` = `0`

##### mass

`number` = `50`

##### isStaticBody

`boolean` = `false`

##### frictionEnabled

`boolean` = `false`

#### Returns

`BaseRigidBody`

## Properties

### \_angularVelocity

> `protected` **\_angularVelocity**: `number`

Defined in: [rigidbody.ts:71](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/dynamics/src/rigidbody.ts#L71)

***

### \_center

> `protected` **\_center**: `Point`

Defined in: [rigidbody.ts:68](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/dynamics/src/rigidbody.ts#L68)

***

### \_linearVelocity

> `protected` **\_linearVelocity**: `Point`

Defined in: [rigidbody.ts:70](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/dynamics/src/rigidbody.ts#L70)

***

### \_mass

> `protected` **\_mass**: `number` = `50`

Defined in: [rigidbody.ts:69](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/dynamics/src/rigidbody.ts#L69)

***

### \_orientationAngle

> `protected` **\_orientationAngle**: `number` = `0`

Defined in: [rigidbody.ts:72](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/dynamics/src/rigidbody.ts#L72)

***

### \_staticFrictionCoeff

> `protected` **\_staticFrictionCoeff**: `number` = `0.3`

Defined in: [rigidbody.ts:76](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/dynamics/src/rigidbody.ts#L76)

***

### angularDampingFactor

> `protected` **angularDampingFactor**: `number` = `0.005`

Defined in: [rigidbody.ts:80](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/dynamics/src/rigidbody.ts#L80)

***

### collisionFilter

> **collisionFilter**: [`CollisionFilter`](../interfaces/CollisionFilter.md)

Defined in: [rigidbody.ts:83](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/dynamics/src/rigidbody.ts#L83)

Collision filtering configuration

#### Implementation of

[`RigidBody`](../interfaces/RigidBody.md).[`collisionFilter`](../interfaces/RigidBody.md#collisionfilter)

***

### dynamicFrictionCoeff

> `protected` **dynamicFrictionCoeff**: `number` = `0.3`

Defined in: [rigidbody.ts:77](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/dynamics/src/rigidbody.ts#L77)

***

### force

> `protected` **force**: `Point`

Defined in: [rigidbody.ts:74](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/dynamics/src/rigidbody.ts#L74)

***

### frictionEnabled

> `protected` **frictionEnabled**: `boolean` = `false`

Defined in: [rigidbody.ts:78](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/dynamics/src/rigidbody.ts#L78)

***

### isMovingStaticBody

> `protected` **isMovingStaticBody**: `boolean` = `false`

Defined in: [rigidbody.ts:79](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/dynamics/src/rigidbody.ts#L79)

***

### isSleeping

> **isSleeping**: `boolean` = `false`

Defined in: [rigidbody.ts:86](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/dynamics/src/rigidbody.ts#L86)

#### Implementation of

[`RigidBody`](../interfaces/RigidBody.md).[`isSleeping`](../interfaces/RigidBody.md#issleeping)

***

### isStaticBody

> `protected` **isStaticBody**: `boolean` = `false`

Defined in: [rigidbody.ts:75](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/dynamics/src/rigidbody.ts#L75)

***

### linearAcceleartion

> `protected` **linearAcceleartion**: `Point`

Defined in: [rigidbody.ts:73](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/dynamics/src/rigidbody.ts#L73)

***

### sleepThreshold

> **sleepThreshold**: `number` = `0.01`

Defined in: [rigidbody.ts:87](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/dynamics/src/rigidbody.ts#L87)

#### Implementation of

[`RigidBody`](../interfaces/RigidBody.md).[`sleepThreshold`](../interfaces/RigidBody.md#sleepthreshold)

***

### sleepTime

> **sleepTime**: `number` = `0.5`

Defined in: [rigidbody.ts:88](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/dynamics/src/rigidbody.ts#L88)

#### Implementation of

[`RigidBody`](../interfaces/RigidBody.md).[`sleepTime`](../interfaces/RigidBody.md#sleeptime)

***

### timeAtRest

> **timeAtRest**: `number` = `0`

Defined in: [rigidbody.ts:89](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/dynamics/src/rigidbody.ts#L89)

#### Implementation of

[`RigidBody`](../interfaces/RigidBody.md).[`timeAtRest`](../interfaces/RigidBody.md#timeatrest)

## Accessors

### AABB

#### Get Signature

> **get** `abstract` **AABB**(): `object`

Defined in: [rigidbody.ts:252](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/dynamics/src/rigidbody.ts#L252)

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

Defined in: [rigidbody.ts:122](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/dynamics/src/rigidbody.ts#L122)

Angular velocity (radians/second)

##### Returns

`number`

#### Set Signature

> **set** **angularVelocity**(`angularVelocity`): `void`

Defined in: [rigidbody.ts:126](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/dynamics/src/rigidbody.ts#L126)

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

Defined in: [rigidbody.ts:221](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/dynamics/src/rigidbody.ts#L221)

Center position in world coordinates

##### Returns

`Point`

#### Set Signature

> **set** **center**(`dest`): `void`

Defined in: [rigidbody.ts:225](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/dynamics/src/rigidbody.ts#L225)

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

Defined in: [rigidbody.ts:229](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/dynamics/src/rigidbody.ts#L229)

Linear velocity (pixels/second)

##### Returns

`Point`

#### Set Signature

> **set** **linearVelocity**(`dest`): `void`

Defined in: [rigidbody.ts:233](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/dynamics/src/rigidbody.ts#L233)

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

Defined in: [rigidbody.ts:237](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/dynamics/src/rigidbody.ts#L237)

Mass in arbitrary units (affects force response)

##### Returns

`number`

Mass in arbitrary units (affects force response)

#### Implementation of

[`RigidBody`](../interfaces/RigidBody.md).[`mass`](../interfaces/RigidBody.md#mass)

***

### momentOfInertia

#### Get Signature

> **get** `abstract` **momentOfInertia**(): `number`

Defined in: [rigidbody.ts:249](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/dynamics/src/rigidbody.ts#L249)

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

Defined in: [rigidbody.ts:130](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/dynamics/src/rigidbody.ts#L130)

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

Defined in: [rigidbody.ts:241](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/dynamics/src/rigidbody.ts#L241)

Static friction coefficient (0-1)

##### Returns

`number`

#### Set Signature

> **set** **staticFrictionCoeff**(`coeff`): `void`

Defined in: [rigidbody.ts:245](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/dynamics/src/rigidbody.ts#L245)

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

Defined in: [rigidbody.ts:154](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/dynamics/src/rigidbody.ts#L154)

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

Defined in: [rigidbody.ts:162](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/dynamics/src/rigidbody.ts#L162)

#### Parameters

##### force

`number` | `Point`

#### Returns

`void`

#### Implementation of

[`RigidBody`](../interfaces/RigidBody.md).[`applyForceInOrientation`](../interfaces/RigidBody.md#applyforceinorientation)

***

### getAdjacentFaces()

> `abstract` **getAdjacentFaces**(`collisionNormal`): `object`[]

Defined in: [rigidbody.ts:256](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/dynamics/src/rigidbody.ts#L256)

#### Parameters

##### collisionNormal

`Point`

#### Returns

`object`[]

#### Implementation of

[`RigidBody`](../interfaces/RigidBody.md).[`getAdjacentFaces`](../interfaces/RigidBody.md#getadjacentfaces)

***

### getCenter()

> **getCenter**(): `Point`

Defined in: [rigidbody.ts:114](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/dynamics/src/rigidbody.ts#L114)

#### Returns

`Point`

***

### getCollisionAxes()

> `abstract` **getCollisionAxes**(`relativeBody`): `Point`[]

Defined in: [rigidbody.ts:251](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/dynamics/src/rigidbody.ts#L251)

#### Parameters

##### relativeBody

[`RigidBody`](../interfaces/RigidBody.md)

#### Returns

`Point`[]

#### Implementation of

[`RigidBody`](../interfaces/RigidBody.md).[`getCollisionAxes`](../interfaces/RigidBody.md#getcollisionaxes)

***

### getMinMaxProjection()

> `abstract` **getMinMaxProjection**(`unitvector`): `object`

Defined in: [rigidbody.ts:250](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/dynamics/src/rigidbody.ts#L250)

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

> `abstract` **getNormalOfSignificantFace**(`collisionNormal`): `Point`

Defined in: [rigidbody.ts:255](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/dynamics/src/rigidbody.ts#L255)

#### Parameters

##### collisionNormal

`Point`

#### Returns

`Point`

#### Implementation of

[`RigidBody`](../interfaces/RigidBody.md).[`getNormalOfSignificantFace`](../interfaces/RigidBody.md#getnormalofsignificantface)

***

### getOrientationAngle()

> **getOrientationAngle**(): `number`

Defined in: [rigidbody.ts:118](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/dynamics/src/rigidbody.ts#L118)

#### Returns

`number`

***

### getSignificantVertices()

> `abstract` **getSignificantVertices**(`collisionNormal`): `Point`[]

Defined in: [rigidbody.ts:254](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/dynamics/src/rigidbody.ts#L254)

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

Defined in: [rigidbody.ts:138](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/dynamics/src/rigidbody.ts#L138)

#### Returns

`boolean`

#### Implementation of

[`RigidBody`](../interfaces/RigidBody.md).[`isMovingStatic`](../interfaces/RigidBody.md#ismovingstatic)

***

### isStatic()

> **isStatic**(): `boolean`

Defined in: [rigidbody.ts:134](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/dynamics/src/rigidbody.ts#L134)

#### Returns

`boolean`

#### Implementation of

[`RigidBody`](../interfaces/RigidBody.md).[`isStatic`](../interfaces/RigidBody.md#isstatic)

***

### move()

> **move**(`delta`): `void`

Defined in: [rigidbody.ts:104](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/dynamics/src/rigidbody.ts#L104)

#### Parameters

##### delta

`Point`

#### Returns

`void`

#### Implementation of

[`RigidBody`](../interfaces/RigidBody.md).[`move`](../interfaces/RigidBody.md#move)

***

### rotateRadians()

> **rotateRadians**(`angle`): `void`

Defined in: [rigidbody.ts:110](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/dynamics/src/rigidbody.ts#L110)

#### Parameters

##### angle

`number`

#### Returns

`void`

***

### setLinearVelocity()

> **setLinearVelocity**(`linearVelocity`): `void`

Defined in: [rigidbody.ts:142](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/dynamics/src/rigidbody.ts#L142)

#### Parameters

##### linearVelocity

`Point`

#### Returns

`void`

***

### setMovingStatic()

> **setMovingStatic**(`movingStatic`): `void`

Defined in: [rigidbody.ts:146](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/dynamics/src/rigidbody.ts#L146)

#### Parameters

##### movingStatic

`boolean`

#### Returns

`void`

***

### setOrientationAngle()

> **setOrientationAngle**(`angle`): `void`

Defined in: [rigidbody.ts:150](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/dynamics/src/rigidbody.ts#L150)

#### Parameters

##### angle

`number`

#### Returns

`void`

***

### setSleeping()

> **setSleeping**(`sleeping`): `void`

Defined in: [rigidbody.ts:259](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/dynamics/src/rigidbody.ts#L259)

#### Parameters

##### sleeping

`boolean`

#### Returns

`void`

#### Implementation of

[`RigidBody`](../interfaces/RigidBody.md).[`setSleeping`](../interfaces/RigidBody.md#setsleeping)

***

### significantVertex()

> `abstract` **significantVertex**(`collisionNormal`): `Point`

Defined in: [rigidbody.ts:253](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/dynamics/src/rigidbody.ts#L253)

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

Defined in: [rigidbody.ts:172](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/dynamics/src/rigidbody.ts#L172)

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

Defined in: [rigidbody.ts:270](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/dynamics/src/rigidbody.ts#L270)

#### Parameters

##### deltaTime

`number`

#### Returns

`void`

#### Implementation of

[`RigidBody`](../interfaces/RigidBody.md).[`updateSleeping`](../interfaces/RigidBody.md#updatesleeping)
