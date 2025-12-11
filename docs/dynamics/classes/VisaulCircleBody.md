[@ue-too/dynamics](../globals.md) / VisaulCircleBody

# Class: VisaulCircleBody

Defined in: rigidbody.d.ts:118

## Implements

- [`VisualComponent`](../interfaces/VisualComponent.md)
- [`RigidBody`](../interfaces/RigidBody.md)

## Constructors

### Constructor

> **new VisaulCircleBody**(`center`, `radius`, `drawingContext`, `_orientationAngle?`, `mass?`, `isStatic?`, `frictionEnabled?`): `VisaulCircleBody`

Defined in: rigidbody.d.ts:126

#### Parameters

##### center

`Point`

##### radius

`number`

##### drawingContext

`CanvasRenderingContext2D`

##### \_orientationAngle?

`number`

##### mass?

`number`

##### isStatic?

`boolean`

##### frictionEnabled?

`boolean`

#### Returns

`VisaulCircleBody`

## Properties

### collisionFilter

> **collisionFilter**: [`CollisionFilter`](../interfaces/CollisionFilter.md)

Defined in: rigidbody.d.ts:121

#### Implementation of

[`RigidBody`](../interfaces/RigidBody.md).[`collisionFilter`](../interfaces/RigidBody.md#collisionfilter)

***

### isSleeping

> **isSleeping**: `boolean`

Defined in: rigidbody.d.ts:122

#### Implementation of

[`RigidBody`](../interfaces/RigidBody.md).[`isSleeping`](../interfaces/RigidBody.md#issleeping)

***

### sleepThreshold

> **sleepThreshold**: `number`

Defined in: rigidbody.d.ts:123

#### Implementation of

[`RigidBody`](../interfaces/RigidBody.md).[`sleepThreshold`](../interfaces/RigidBody.md#sleepthreshold)

***

### sleepTime

> **sleepTime**: `number`

Defined in: rigidbody.d.ts:124

#### Implementation of

[`RigidBody`](../interfaces/RigidBody.md).[`sleepTime`](../interfaces/RigidBody.md#sleeptime)

***

### timeAtRest

> **timeAtRest**: `number`

Defined in: rigidbody.d.ts:125

#### Implementation of

[`RigidBody`](../interfaces/RigidBody.md).[`timeAtRest`](../interfaces/RigidBody.md#timeatrest)

## Accessors

### AABB

#### Get Signature

> **get** **AABB**(): `object`

Defined in: rigidbody.d.ts:137

##### Returns

`object`

###### max

> **max**: `Point`

###### min

> **min**: `Point`

#### Implementation of

[`RigidBody`](../interfaces/RigidBody.md).[`AABB`](../interfaces/RigidBody.md#aabb)

***

### angularVelocity

#### Get Signature

> **get** **angularVelocity**(): `number`

Defined in: rigidbody.d.ts:152

##### Returns

`number`

#### Set Signature

> **set** **angularVelocity**(`angularVelocity`): `void`

Defined in: rigidbody.d.ts:151

##### Parameters

###### angularVelocity

`number`

##### Returns

`void`

#### Implementation of

[`RigidBody`](../interfaces/RigidBody.md).[`angularVelocity`](../interfaces/RigidBody.md#angularvelocity)

***

### center

#### Get Signature

> **get** **center**(): `Point`

Defined in: rigidbody.d.ts:145

##### Returns

`Point`

#### Set Signature

> **set** **center**(`dest`): `void`

Defined in: rigidbody.d.ts:146

##### Parameters

###### dest

`Point`

##### Returns

`void`

#### Implementation of

[`RigidBody`](../interfaces/RigidBody.md).[`center`](../interfaces/RigidBody.md#center)

***

### linearVelocity

#### Get Signature

> **get** **linearVelocity**(): `Point`

Defined in: rigidbody.d.ts:147

##### Returns

`Point`

#### Set Signature

> **set** **linearVelocity**(`dest`): `void`

Defined in: rigidbody.d.ts:148

##### Parameters

###### dest

`Point`

##### Returns

`void`

#### Implementation of

[`RigidBody`](../interfaces/RigidBody.md).[`linearVelocity`](../interfaces/RigidBody.md#linearvelocity)

***

### mass

#### Get Signature

> **get** **mass**(): `number`

Defined in: rigidbody.d.ts:153

##### Returns

`number`

#### Implementation of

[`RigidBody`](../interfaces/RigidBody.md).[`mass`](../interfaces/RigidBody.md#mass)

***

### momentOfInertia

#### Get Signature

> **get** **momentOfInertia**(): `number`

Defined in: rigidbody.d.ts:167

##### Returns

`number`

#### Implementation of

[`RigidBody`](../interfaces/RigidBody.md).[`momentOfInertia`](../interfaces/RigidBody.md#momentofinertia)

***

### orientationAngle

#### Get Signature

> **get** **orientationAngle**(): `number`

Defined in: rigidbody.d.ts:149

##### Returns

`number`

#### Implementation of

[`RigidBody`](../interfaces/RigidBody.md).[`orientationAngle`](../interfaces/RigidBody.md#orientationangle)

***

### staticFrictionCoeff

#### Get Signature

> **get** **staticFrictionCoeff**(): `number`

Defined in: rigidbody.d.ts:155

##### Returns

`number`

#### Set Signature

> **set** **staticFrictionCoeff**(`coeff`): `void`

Defined in: rigidbody.d.ts:156

##### Parameters

###### coeff

`number`

##### Returns

`void`

#### Implementation of

[`RigidBody`](../interfaces/RigidBody.md).[`staticFrictionCoeff`](../interfaces/RigidBody.md#staticfrictioncoeff)

## Methods

### applyForce()

> **applyForce**(`force`): `void`

Defined in: rigidbody.d.ts:136

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

Defined in: rigidbody.d.ts:142

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

Defined in: rigidbody.d.ts:127

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

Defined in: rigidbody.d.ts:157

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

Defined in: rigidbody.d.ts:135

#### Parameters

##### relativeBody

[`RigidBody`](../interfaces/RigidBody.md)

#### Returns

`Point`[]

#### Implementation of

[`RigidBody`](../interfaces/RigidBody.md).[`getCollisionAxes`](../interfaces/RigidBody.md#getcollisionaxes)

***

### getMass()

> **getMass**(): `number`

Defined in: rigidbody.d.ts:141

#### Returns

`number`

***

### getMinMaxProjection()

> **getMinMaxProjection**(`unitvector`): `object`

Defined in: rigidbody.d.ts:131

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

Defined in: rigidbody.d.ts:154

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

Defined in: rigidbody.d.ts:144

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

Defined in: rigidbody.d.ts:130

#### Returns

`boolean`

#### Implementation of

[`RigidBody`](../interfaces/RigidBody.md).[`isMovingStatic`](../interfaces/RigidBody.md#ismovingstatic)

***

### isStatic()

> **isStatic**(): `boolean`

Defined in: rigidbody.d.ts:129

#### Returns

`boolean`

#### Implementation of

[`RigidBody`](../interfaces/RigidBody.md).[`isStatic`](../interfaces/RigidBody.md#isstatic)

***

### move()

> **move**(`delta`): `void`

Defined in: rigidbody.d.ts:143

#### Parameters

##### delta

`Point`

#### Returns

`void`

#### Implementation of

[`RigidBody`](../interfaces/RigidBody.md).[`move`](../interfaces/RigidBody.md#move)

***

### setSleeping()

> **setSleeping**(`sleeping`): `void`

Defined in: rigidbody.d.ts:168

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

Defined in: rigidbody.d.ts:150

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

Defined in: rigidbody.d.ts:128

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

Defined in: rigidbody.d.ts:169

#### Parameters

##### deltaTime

`number`

#### Returns

`void`

#### Implementation of

[`RigidBody`](../interfaces/RigidBody.md).[`updateSleeping`](../interfaces/RigidBody.md#updatesleeping)
