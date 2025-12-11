[@ue-too/dynamics](../globals.md) / Polygon

# Class: Polygon

Defined in: rigidbody.d.ts:224

## Extends

- [`BaseRigidBody`](BaseRigidBody.md)

## Constructors

### Constructor

> **new Polygon**(`center`, `vertices`, `_orientationAngle?`, `mass?`, `isStatic?`, `frictionEnabled?`): `Polygon`

Defined in: rigidbody.d.ts:227

#### Parameters

##### center

`Point`

##### vertices

`Point`[]

##### \_orientationAngle?

`number`

##### mass?

`number`

##### isStatic?

`boolean`

##### frictionEnabled?

`boolean`

#### Returns

`Polygon`

#### Overrides

[`BaseRigidBody`](BaseRigidBody.md).[`constructor`](BaseRigidBody.md#constructor)

## Properties

### \_angularVelocity

> `protected` **\_angularVelocity**: `number`

Defined in: rigidbody.d.ts:54

#### Inherited from

[`BaseRigidBody`](BaseRigidBody.md).[`_angularVelocity`](BaseRigidBody.md#angularvelocity)

***

### \_center

> `protected` **\_center**: `Point`

Defined in: rigidbody.d.ts:51

#### Inherited from

[`BaseRigidBody`](BaseRigidBody.md).[`_center`](BaseRigidBody.md#center)

***

### \_linearVelocity

> `protected` **\_linearVelocity**: `Point`

Defined in: rigidbody.d.ts:53

#### Inherited from

[`BaseRigidBody`](BaseRigidBody.md).[`_linearVelocity`](BaseRigidBody.md#linearvelocity)

***

### \_mass

> `protected` **\_mass**: `number`

Defined in: rigidbody.d.ts:52

#### Inherited from

[`BaseRigidBody`](BaseRigidBody.md).[`_mass`](BaseRigidBody.md#mass)

***

### \_orientationAngle

> `protected` **\_orientationAngle**: `number`

Defined in: rigidbody.d.ts:55

#### Inherited from

[`BaseRigidBody`](BaseRigidBody.md).[`_orientationAngle`](BaseRigidBody.md#orientationangle)

***

### \_staticFrictionCoeff

> `protected` **\_staticFrictionCoeff**: `number`

Defined in: rigidbody.d.ts:59

#### Inherited from

[`BaseRigidBody`](BaseRigidBody.md).[`_staticFrictionCoeff`](BaseRigidBody.md#staticfrictioncoeff)

***

### angularDampingFactor

> `protected` **angularDampingFactor**: `number`

Defined in: rigidbody.d.ts:63

#### Inherited from

[`BaseRigidBody`](BaseRigidBody.md).[`angularDampingFactor`](BaseRigidBody.md#angulardampingfactor)

***

### collisionFilter

> **collisionFilter**: [`CollisionFilter`](../interfaces/CollisionFilter.md)

Defined in: rigidbody.d.ts:64

#### Inherited from

[`BaseRigidBody`](BaseRigidBody.md).[`collisionFilter`](BaseRigidBody.md#collisionfilter)

***

### dynamicFrictionCoeff

> `protected` **dynamicFrictionCoeff**: `number`

Defined in: rigidbody.d.ts:60

#### Inherited from

[`BaseRigidBody`](BaseRigidBody.md).[`dynamicFrictionCoeff`](BaseRigidBody.md#dynamicfrictioncoeff)

***

### force

> `protected` **force**: `Point`

Defined in: rigidbody.d.ts:57

#### Inherited from

[`BaseRigidBody`](BaseRigidBody.md).[`force`](BaseRigidBody.md#force)

***

### frictionEnabled

> `protected` **frictionEnabled**: `boolean`

Defined in: rigidbody.d.ts:61

#### Inherited from

[`BaseRigidBody`](BaseRigidBody.md).[`frictionEnabled`](BaseRigidBody.md#frictionenabled)

***

### isMovingStaticBody

> `protected` **isMovingStaticBody**: `boolean`

Defined in: rigidbody.d.ts:62

#### Inherited from

[`BaseRigidBody`](BaseRigidBody.md).[`isMovingStaticBody`](BaseRigidBody.md#ismovingstaticbody)

***

### isSleeping

> **isSleeping**: `boolean`

Defined in: rigidbody.d.ts:65

#### Inherited from

[`BaseRigidBody`](BaseRigidBody.md).[`isSleeping`](BaseRigidBody.md#issleeping)

***

### isStaticBody

> `protected` **isStaticBody**: `boolean`

Defined in: rigidbody.d.ts:58

#### Inherited from

[`BaseRigidBody`](BaseRigidBody.md).[`isStaticBody`](BaseRigidBody.md#isstaticbody)

***

### linearAcceleartion

> `protected` **linearAcceleartion**: `Point`

Defined in: rigidbody.d.ts:56

#### Inherited from

[`BaseRigidBody`](BaseRigidBody.md).[`linearAcceleartion`](BaseRigidBody.md#linearacceleartion)

***

### sleepThreshold

> **sleepThreshold**: `number`

Defined in: rigidbody.d.ts:66

#### Inherited from

[`BaseRigidBody`](BaseRigidBody.md).[`sleepThreshold`](BaseRigidBody.md#sleepthreshold)

***

### sleepTime

> **sleepTime**: `number`

Defined in: rigidbody.d.ts:67

#### Inherited from

[`BaseRigidBody`](BaseRigidBody.md).[`sleepTime`](BaseRigidBody.md#sleeptime)

***

### timeAtRest

> **timeAtRest**: `number`

Defined in: rigidbody.d.ts:68

#### Inherited from

[`BaseRigidBody`](BaseRigidBody.md).[`timeAtRest`](BaseRigidBody.md#timeatrest)

## Accessors

### AABB

#### Get Signature

> **get** **AABB**(): `object`

Defined in: rigidbody.d.ts:234

##### Returns

`object`

###### max

> **max**: `Point`

###### min

> **min**: `Point`

#### Overrides

[`BaseRigidBody`](BaseRigidBody.md).[`AABB`](BaseRigidBody.md#aabb)

***

### angularVelocity

#### Get Signature

> **get** **angularVelocity**(): `number`

Defined in: rigidbody.d.ts:74

##### Returns

`number`

#### Set Signature

> **set** **angularVelocity**(`angularVelocity`): `void`

Defined in: rigidbody.d.ts:75

##### Parameters

###### angularVelocity

`number`

##### Returns

`void`

#### Inherited from

[`BaseRigidBody`](BaseRigidBody.md).[`angularVelocity`](BaseRigidBody.md#angularvelocity)

***

### center

#### Get Signature

> **get** **center**(): `Point`

Defined in: rigidbody.d.ts:85

##### Returns

`Point`

#### Set Signature

> **set** **center**(`dest`): `void`

Defined in: rigidbody.d.ts:86

##### Parameters

###### dest

`Point`

##### Returns

`void`

#### Inherited from

[`BaseRigidBody`](BaseRigidBody.md).[`center`](BaseRigidBody.md#center)

***

### linearVelocity

#### Get Signature

> **get** **linearVelocity**(): `Point`

Defined in: rigidbody.d.ts:87

##### Returns

`Point`

#### Set Signature

> **set** **linearVelocity**(`dest`): `void`

Defined in: rigidbody.d.ts:88

##### Parameters

###### dest

`Point`

##### Returns

`void`

#### Inherited from

[`BaseRigidBody`](BaseRigidBody.md).[`linearVelocity`](BaseRigidBody.md#linearvelocity)

***

### mass

#### Get Signature

> **get** **mass**(): `number`

Defined in: rigidbody.d.ts:89

##### Returns

`number`

#### Inherited from

[`BaseRigidBody`](BaseRigidBody.md).[`mass`](BaseRigidBody.md#mass)

***

### momentOfInertia

#### Get Signature

> **get** **momentOfInertia**(): `number`

Defined in: rigidbody.d.ts:251

##### Returns

`number`

#### Overrides

[`BaseRigidBody`](BaseRigidBody.md).[`momentOfInertia`](BaseRigidBody.md#momentofinertia)

***

### orientationAngle

#### Get Signature

> **get** **orientationAngle**(): `number`

Defined in: rigidbody.d.ts:76

##### Returns

`number`

#### Inherited from

[`BaseRigidBody`](BaseRigidBody.md).[`orientationAngle`](BaseRigidBody.md#orientationangle)

***

### staticFrictionCoeff

#### Get Signature

> **get** **staticFrictionCoeff**(): `number`

Defined in: rigidbody.d.ts:90

##### Returns

`number`

#### Set Signature

> **set** **staticFrictionCoeff**(`coeff`): `void`

Defined in: rigidbody.d.ts:91

##### Parameters

###### coeff

`number`

##### Returns

`void`

#### Inherited from

[`BaseRigidBody`](BaseRigidBody.md).[`staticFrictionCoeff`](BaseRigidBody.md#staticfrictioncoeff)

## Methods

### applyForce()

> **applyForce**(`force`): `void`

Defined in: rigidbody.d.ts:82

#### Parameters

##### force

`Point`

#### Returns

`void`

#### Inherited from

[`BaseRigidBody`](BaseRigidBody.md).[`applyForce`](BaseRigidBody.md#applyforce)

***

### applyForceInOrientation()

> **applyForceInOrientation**(`force`): `void`

Defined in: rigidbody.d.ts:83

#### Parameters

##### force

`number` | `Point`

#### Returns

`void`

#### Inherited from

[`BaseRigidBody`](BaseRigidBody.md).[`applyForceInOrientation`](BaseRigidBody.md#applyforceinorientation)

***

### getAdjacentFaces()

> **getAdjacentFaces**(`collisionNormal`): `object`[]

Defined in: rigidbody.d.ts:241

#### Parameters

##### collisionNormal

`Point`

#### Returns

`object`[]

#### Overrides

[`BaseRigidBody`](BaseRigidBody.md).[`getAdjacentFaces`](BaseRigidBody.md#getadjacentfaces)

***

### getCenter()

> **getCenter**(): `Point`

Defined in: rigidbody.d.ts:72

#### Returns

`Point`

#### Inherited from

[`BaseRigidBody`](BaseRigidBody.md).[`getCenter`](BaseRigidBody.md#getcenter)

***

### getCollisionAxes()

> **getCollisionAxes**(`relativeBody`): `Point`[]

Defined in: rigidbody.d.ts:229

#### Parameters

##### relativeBody

[`RigidBody`](../interfaces/RigidBody.md)

#### Returns

`Point`[]

#### Overrides

[`BaseRigidBody`](BaseRigidBody.md).[`getCollisionAxes`](BaseRigidBody.md#getcollisionaxes)

***

### getMinMaxProjection()

> **getMinMaxProjection**(`unitvector`): `object`

Defined in: rigidbody.d.ts:230

#### Parameters

##### unitvector

`Point`

#### Returns

`object`

##### max

> **max**: `number`

##### min

> **min**: `number`

#### Overrides

[`BaseRigidBody`](BaseRigidBody.md).[`getMinMaxProjection`](BaseRigidBody.md#getminmaxprojection)

***

### getNormalOfSignificantFace()

> **getNormalOfSignificantFace**(`collisionNormal`): `Point`

Defined in: rigidbody.d.ts:240

#### Parameters

##### collisionNormal

`Point`

#### Returns

`Point`

#### Overrides

[`BaseRigidBody`](BaseRigidBody.md).[`getNormalOfSignificantFace`](BaseRigidBody.md#getnormalofsignificantface)

***

### getOrientationAngle()

> **getOrientationAngle**(): `number`

Defined in: rigidbody.d.ts:73

#### Returns

`number`

#### Inherited from

[`BaseRigidBody`](BaseRigidBody.md).[`getOrientationAngle`](BaseRigidBody.md#getorientationangle)

***

### getSignificantVertices()

> **getSignificantVertices**(`collisionNormal`): `Point`[]

Defined in: rigidbody.d.ts:239

#### Parameters

##### collisionNormal

`Point`

#### Returns

`Point`[]

#### Overrides

[`BaseRigidBody`](BaseRigidBody.md).[`getSignificantVertices`](BaseRigidBody.md#getsignificantvertices)

***

### getVerticesAbsCoord()

> **getVerticesAbsCoord**(): `Point`[]

Defined in: rigidbody.d.ts:228

#### Returns

`Point`[]

***

### isMovingStatic()

> **isMovingStatic**(): `boolean`

Defined in: rigidbody.d.ts:78

#### Returns

`boolean`

#### Inherited from

[`BaseRigidBody`](BaseRigidBody.md).[`isMovingStatic`](BaseRigidBody.md#ismovingstatic)

***

### isStatic()

> **isStatic**(): `boolean`

Defined in: rigidbody.d.ts:77

#### Returns

`boolean`

#### Inherited from

[`BaseRigidBody`](BaseRigidBody.md).[`isStatic`](BaseRigidBody.md#isstatic)

***

### move()

> **move**(`delta`): `void`

Defined in: rigidbody.d.ts:70

#### Parameters

##### delta

`Point`

#### Returns

`void`

#### Inherited from

[`BaseRigidBody`](BaseRigidBody.md).[`move`](BaseRigidBody.md#move)

***

### rotateRadians()

> **rotateRadians**(`angle`): `void`

Defined in: rigidbody.d.ts:71

#### Parameters

##### angle

`number`

#### Returns

`void`

#### Inherited from

[`BaseRigidBody`](BaseRigidBody.md).[`rotateRadians`](BaseRigidBody.md#rotateradians)

***

### setLinearVelocity()

> **setLinearVelocity**(`linearVelocity`): `void`

Defined in: rigidbody.d.ts:79

#### Parameters

##### linearVelocity

`Point`

#### Returns

`void`

#### Inherited from

[`BaseRigidBody`](BaseRigidBody.md).[`setLinearVelocity`](BaseRigidBody.md#setlinearvelocity)

***

### setMovingStatic()

> **setMovingStatic**(`movingStatic`): `void`

Defined in: rigidbody.d.ts:80

#### Parameters

##### movingStatic

`boolean`

#### Returns

`void`

#### Inherited from

[`BaseRigidBody`](BaseRigidBody.md).[`setMovingStatic`](BaseRigidBody.md#setmovingstatic)

***

### setOrientationAngle()

> **setOrientationAngle**(`angle`): `void`

Defined in: rigidbody.d.ts:81

#### Parameters

##### angle

`number`

#### Returns

`void`

#### Inherited from

[`BaseRigidBody`](BaseRigidBody.md).[`setOrientationAngle`](BaseRigidBody.md#setorientationangle)

***

### setSleeping()

> **setSleeping**(`sleeping`): `void`

Defined in: rigidbody.d.ts:115

#### Parameters

##### sleeping

`boolean`

#### Returns

`void`

#### Inherited from

[`BaseRigidBody`](BaseRigidBody.md).[`setSleeping`](BaseRigidBody.md#setsleeping)

***

### significantVertex()

> **significantVertex**(`collisionNormal`): `Point`

Defined in: rigidbody.d.ts:238

#### Parameters

##### collisionNormal

`Point`

#### Returns

`Point`

#### Overrides

[`BaseRigidBody`](BaseRigidBody.md).[`significantVertex`](BaseRigidBody.md#significantvertex)

***

### step()

> **step**(`deltaTime`): `void`

Defined in: rigidbody.d.ts:84

#### Parameters

##### deltaTime

`number`

#### Returns

`void`

#### Inherited from

[`BaseRigidBody`](BaseRigidBody.md).[`step`](BaseRigidBody.md#step)

***

### updateSleeping()

> **updateSleeping**(`deltaTime`): `void`

Defined in: rigidbody.d.ts:116

#### Parameters

##### deltaTime

`number`

#### Returns

`void`

#### Inherited from

[`BaseRigidBody`](BaseRigidBody.md).[`updateSleeping`](BaseRigidBody.md#updatesleeping)
