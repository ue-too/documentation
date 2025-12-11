[@ue-too/dynamics](../globals.md) / BaseRigidBody

# Abstract Class: BaseRigidBody

Defined in: rigidbody.d.ts:50

## Extended by

- [`Polygon`](Polygon.md)
- [`Circle`](Circle.md)

## Implements

- [`RigidBody`](../interfaces/RigidBody.md)

## Constructors

### Constructor

> **new BaseRigidBody**(`center`, `_orientationAngle?`, `mass?`, `isStaticBody?`, `frictionEnabled?`): `BaseRigidBody`

Defined in: rigidbody.d.ts:69

#### Parameters

##### center

`Point`

##### \_orientationAngle?

`number`

##### mass?

`number`

##### isStaticBody?

`boolean`

##### frictionEnabled?

`boolean`

#### Returns

`BaseRigidBody`

## Properties

### \_angularVelocity

> `protected` **\_angularVelocity**: `number`

Defined in: rigidbody.d.ts:54

***

### \_center

> `protected` **\_center**: `Point`

Defined in: rigidbody.d.ts:51

***

### \_linearVelocity

> `protected` **\_linearVelocity**: `Point`

Defined in: rigidbody.d.ts:53

***

### \_mass

> `protected` **\_mass**: `number`

Defined in: rigidbody.d.ts:52

***

### \_orientationAngle

> `protected` **\_orientationAngle**: `number`

Defined in: rigidbody.d.ts:55

***

### \_staticFrictionCoeff

> `protected` **\_staticFrictionCoeff**: `number`

Defined in: rigidbody.d.ts:59

***

### angularDampingFactor

> `protected` **angularDampingFactor**: `number`

Defined in: rigidbody.d.ts:63

***

### collisionFilter

> **collisionFilter**: [`CollisionFilter`](../interfaces/CollisionFilter.md)

Defined in: rigidbody.d.ts:64

#### Implementation of

[`RigidBody`](../interfaces/RigidBody.md).[`collisionFilter`](../interfaces/RigidBody.md#collisionfilter)

***

### dynamicFrictionCoeff

> `protected` **dynamicFrictionCoeff**: `number`

Defined in: rigidbody.d.ts:60

***

### force

> `protected` **force**: `Point`

Defined in: rigidbody.d.ts:57

***

### frictionEnabled

> `protected` **frictionEnabled**: `boolean`

Defined in: rigidbody.d.ts:61

***

### isMovingStaticBody

> `protected` **isMovingStaticBody**: `boolean`

Defined in: rigidbody.d.ts:62

***

### isSleeping

> **isSleeping**: `boolean`

Defined in: rigidbody.d.ts:65

#### Implementation of

[`RigidBody`](../interfaces/RigidBody.md).[`isSleeping`](../interfaces/RigidBody.md#issleeping)

***

### isStaticBody

> `protected` **isStaticBody**: `boolean`

Defined in: rigidbody.d.ts:58

***

### linearAcceleartion

> `protected` **linearAcceleartion**: `Point`

Defined in: rigidbody.d.ts:56

***

### sleepThreshold

> **sleepThreshold**: `number`

Defined in: rigidbody.d.ts:66

#### Implementation of

[`RigidBody`](../interfaces/RigidBody.md).[`sleepThreshold`](../interfaces/RigidBody.md#sleepthreshold)

***

### sleepTime

> **sleepTime**: `number`

Defined in: rigidbody.d.ts:67

#### Implementation of

[`RigidBody`](../interfaces/RigidBody.md).[`sleepTime`](../interfaces/RigidBody.md#sleeptime)

***

### timeAtRest

> **timeAtRest**: `number`

Defined in: rigidbody.d.ts:68

#### Implementation of

[`RigidBody`](../interfaces/RigidBody.md).[`timeAtRest`](../interfaces/RigidBody.md#timeatrest)

## Accessors

### AABB

#### Get Signature

> **get** `abstract` **AABB**(): `object`

Defined in: rigidbody.d.ts:98

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

#### Implementation of

[`RigidBody`](../interfaces/RigidBody.md).[`angularVelocity`](../interfaces/RigidBody.md#angularvelocity)

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

#### Implementation of

[`RigidBody`](../interfaces/RigidBody.md).[`center`](../interfaces/RigidBody.md#center)

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

#### Implementation of

[`RigidBody`](../interfaces/RigidBody.md).[`linearVelocity`](../interfaces/RigidBody.md#linearvelocity)

***

### mass

#### Get Signature

> **get** **mass**(): `number`

Defined in: rigidbody.d.ts:89

##### Returns

`number`

#### Implementation of

[`RigidBody`](../interfaces/RigidBody.md).[`mass`](../interfaces/RigidBody.md#mass)

***

### momentOfInertia

#### Get Signature

> **get** `abstract` **momentOfInertia**(): `number`

Defined in: rigidbody.d.ts:92

##### Returns

`number`

#### Implementation of

[`RigidBody`](../interfaces/RigidBody.md).[`momentOfInertia`](../interfaces/RigidBody.md#momentofinertia)

***

### orientationAngle

#### Get Signature

> **get** **orientationAngle**(): `number`

Defined in: rigidbody.d.ts:76

##### Returns

`number`

#### Implementation of

[`RigidBody`](../interfaces/RigidBody.md).[`orientationAngle`](../interfaces/RigidBody.md#orientationangle)

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

#### Implementation of

[`RigidBody`](../interfaces/RigidBody.md).[`staticFrictionCoeff`](../interfaces/RigidBody.md#staticfrictioncoeff)

## Methods

### applyForce()

> **applyForce**(`force`): `void`

Defined in: rigidbody.d.ts:82

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

Defined in: rigidbody.d.ts:83

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

Defined in: rigidbody.d.ts:105

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

Defined in: rigidbody.d.ts:72

#### Returns

`Point`

***

### getCollisionAxes()

> `abstract` **getCollisionAxes**(`relativeBody`): `Point`[]

Defined in: rigidbody.d.ts:97

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

Defined in: rigidbody.d.ts:93

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

Defined in: rigidbody.d.ts:104

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

Defined in: rigidbody.d.ts:73

#### Returns

`number`

***

### getSignificantVertices()

> `abstract` **getSignificantVertices**(`collisionNormal`): `Point`[]

Defined in: rigidbody.d.ts:103

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

Defined in: rigidbody.d.ts:78

#### Returns

`boolean`

#### Implementation of

[`RigidBody`](../interfaces/RigidBody.md).[`isMovingStatic`](../interfaces/RigidBody.md#ismovingstatic)

***

### isStatic()

> **isStatic**(): `boolean`

Defined in: rigidbody.d.ts:77

#### Returns

`boolean`

#### Implementation of

[`RigidBody`](../interfaces/RigidBody.md).[`isStatic`](../interfaces/RigidBody.md#isstatic)

***

### move()

> **move**(`delta`): `void`

Defined in: rigidbody.d.ts:70

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

Defined in: rigidbody.d.ts:71

#### Parameters

##### angle

`number`

#### Returns

`void`

***

### setLinearVelocity()

> **setLinearVelocity**(`linearVelocity`): `void`

Defined in: rigidbody.d.ts:79

#### Parameters

##### linearVelocity

`Point`

#### Returns

`void`

***

### setMovingStatic()

> **setMovingStatic**(`movingStatic`): `void`

Defined in: rigidbody.d.ts:80

#### Parameters

##### movingStatic

`boolean`

#### Returns

`void`

***

### setOrientationAngle()

> **setOrientationAngle**(`angle`): `void`

Defined in: rigidbody.d.ts:81

#### Parameters

##### angle

`number`

#### Returns

`void`

***

### setSleeping()

> **setSleeping**(`sleeping`): `void`

Defined in: rigidbody.d.ts:115

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

Defined in: rigidbody.d.ts:102

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

Defined in: rigidbody.d.ts:84

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

Defined in: rigidbody.d.ts:116

#### Parameters

##### deltaTime

`number`

#### Returns

`void`

#### Implementation of

[`RigidBody`](../interfaces/RigidBody.md).[`updateSleeping`](../interfaces/RigidBody.md#updatesleeping)
