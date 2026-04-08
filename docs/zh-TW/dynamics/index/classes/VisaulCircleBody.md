[@ue-too/dynamics](../../modules.md) / [index](../index.md) / VisaulCircleBody

# 類別: VisaulCircleBody

定義於: [rigidbody.ts:359](https://github.com/ue-too/ue-too/blob/7d57cce875ed7b8a4f4ee4e325a18e34159928f6/packages/dynamics/src/rigidbody.ts#L359)

Rigid body interface for 2D physics simulation.

## 備註

Represents a physical object in the physics world with mass, velocity,
rotation, and collision properties. Can be either static (immovable) or
dynamic (responds to forces).

Implemented by [Circle](Circle.md) and [Polygon](Polygon.md) classes.

## 實作

- [`VisualComponent`](../interfaces/VisualComponent.md)
- [`RigidBody`](../interfaces/RigidBody.md)

## 建構函式

### 建構函式

> **new VisaulCircleBody**(`center`, `radius`, `drawingContext`, `_orientationAngle`, `mass`, `isStatic`, `frictionEnabled`): `VisaulCircleBody`

定義於: [rigidbody.ts:372](https://github.com/ue-too/ue-too/blob/7d57cce875ed7b8a4f4ee4e325a18e34159928f6/packages/dynamics/src/rigidbody.ts#L372)

#### 參數

##### center

`Point` = `...`

##### radius

`number`

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

#### 回傳

`VisaulCircleBody`

## 屬性

### collisionFilter

> **collisionFilter**: [`CollisionFilter`](../interfaces/CollisionFilter.md)

定義於: [rigidbody.ts:364](https://github.com/ue-too/ue-too/blob/7d57cce875ed7b8a4f4ee4e325a18e34159928f6/packages/dynamics/src/rigidbody.ts#L364)

Collision filtering configuration

#### 實作了

[`RigidBody`](../interfaces/RigidBody.md).[`collisionFilter`](../interfaces/RigidBody.md#collisionfilter)

***

### isSleeping

> **isSleeping**: `boolean` = `false`

定義於: [rigidbody.ts:367](https://github.com/ue-too/ue-too/blob/7d57cce875ed7b8a4f4ee4e325a18e34159928f6/packages/dynamics/src/rigidbody.ts#L367)

#### 實作了

[`RigidBody`](../interfaces/RigidBody.md).[`isSleeping`](../interfaces/RigidBody.md#issleeping)

***

### sleepThreshold

> **sleepThreshold**: `number` = `0.01`

定義於: [rigidbody.ts:368](https://github.com/ue-too/ue-too/blob/7d57cce875ed7b8a4f4ee4e325a18e34159928f6/packages/dynamics/src/rigidbody.ts#L368)

#### 實作了

[`RigidBody`](../interfaces/RigidBody.md).[`sleepThreshold`](../interfaces/RigidBody.md#sleepthreshold)

***

### sleepTime

> **sleepTime**: `number` = `0.5`

定義於: [rigidbody.ts:369](https://github.com/ue-too/ue-too/blob/7d57cce875ed7b8a4f4ee4e325a18e34159928f6/packages/dynamics/src/rigidbody.ts#L369)

#### 實作了

[`RigidBody`](../interfaces/RigidBody.md).[`sleepTime`](../interfaces/RigidBody.md#sleeptime)

***

### timeAtRest

> **timeAtRest**: `number` = `0`

定義於: [rigidbody.ts:370](https://github.com/ue-too/ue-too/blob/7d57cce875ed7b8a4f4ee4e325a18e34159928f6/packages/dynamics/src/rigidbody.ts#L370)

#### 實作了

[`RigidBody`](../interfaces/RigidBody.md).[`timeAtRest`](../interfaces/RigidBody.md#timeatrest)

## 存取器

### AABB

#### Getter 簽章

> **get** **AABB**(): `object`

定義於: [rigidbody.ts:429](https://github.com/ue-too/ue-too/blob/7d57cce875ed7b8a4f4ee4e325a18e34159928f6/packages/dynamics/src/rigidbody.ts#L429)

Axis-Aligned Bounding Box for broad phase collision

##### 回傳

`object`

###### max

> **max**: `Point`

###### min

> **min**: `Point`

Axis-Aligned Bounding Box for broad phase collision

#### 實作了

[`RigidBody`](../interfaces/RigidBody.md).[`AABB`](../interfaces/RigidBody.md#aabb)

***

### angularVelocity

#### Getter 簽章

> **get** **angularVelocity**(): `number`

定義於: [rigidbody.ts:477](https://github.com/ue-too/ue-too/blob/7d57cce875ed7b8a4f4ee4e325a18e34159928f6/packages/dynamics/src/rigidbody.ts#L477)

Angular velocity (radians/second)

##### 回傳

`number`

#### Setter 簽章

> **set** **angularVelocity**(`angularVelocity`): `void`

定義於: [rigidbody.ts:473](https://github.com/ue-too/ue-too/blob/7d57cce875ed7b8a4f4ee4e325a18e34159928f6/packages/dynamics/src/rigidbody.ts#L473)

Angular velocity (radians/second)

##### 參數

###### angularVelocity

`number`

##### 回傳

`void`

Angular velocity (radians/second)

#### 實作了

[`RigidBody`](../interfaces/RigidBody.md).[`angularVelocity`](../interfaces/RigidBody.md#angularvelocity)

***

### center

#### Getter 簽章

> **get** **center**(): `Point`

定義於: [rigidbody.ts:449](https://github.com/ue-too/ue-too/blob/7d57cce875ed7b8a4f4ee4e325a18e34159928f6/packages/dynamics/src/rigidbody.ts#L449)

Center position in world coordinates

##### 回傳

`Point`

#### Setter 簽章

> **set** **center**(`dest`): `void`

定義於: [rigidbody.ts:453](https://github.com/ue-too/ue-too/blob/7d57cce875ed7b8a4f4ee4e325a18e34159928f6/packages/dynamics/src/rigidbody.ts#L453)

Center position in world coordinates

##### 參數

###### dest

`Point`

##### 回傳

`void`

Center position in world coordinates

#### 實作了

[`RigidBody`](../interfaces/RigidBody.md).[`center`](../interfaces/RigidBody.md#center)

***

### linearVelocity

#### Getter 簽章

> **get** **linearVelocity**(): `Point`

定義於: [rigidbody.ts:457](https://github.com/ue-too/ue-too/blob/7d57cce875ed7b8a4f4ee4e325a18e34159928f6/packages/dynamics/src/rigidbody.ts#L457)

Linear velocity (pixels/second)

##### 回傳

`Point`

#### Setter 簽章

> **set** **linearVelocity**(`dest`): `void`

定義於: [rigidbody.ts:461](https://github.com/ue-too/ue-too/blob/7d57cce875ed7b8a4f4ee4e325a18e34159928f6/packages/dynamics/src/rigidbody.ts#L461)

Linear velocity (pixels/second)

##### 參數

###### dest

`Point`

##### 回傳

`void`

Linear velocity (pixels/second)

#### 實作了

[`RigidBody`](../interfaces/RigidBody.md).[`linearVelocity`](../interfaces/RigidBody.md#linearvelocity)

***

### mass

#### Getter 簽章

> **get** **mass**(): `number`

定義於: [rigidbody.ts:481](https://github.com/ue-too/ue-too/blob/7d57cce875ed7b8a4f4ee4e325a18e34159928f6/packages/dynamics/src/rigidbody.ts#L481)

Mass in arbitrary units (affects force response)

##### 回傳

`number`

Mass in arbitrary units (affects force response)

#### 實作了

[`RigidBody`](../interfaces/RigidBody.md).[`mass`](../interfaces/RigidBody.md#mass)

***

### momentOfInertia

#### Getter 簽章

> **get** **momentOfInertia**(): `number`

定義於: [rigidbody.ts:504](https://github.com/ue-too/ue-too/blob/7d57cce875ed7b8a4f4ee4e325a18e34159928f6/packages/dynamics/src/rigidbody.ts#L504)

Moment of inertia (rotational mass)

##### 回傳

`number`

Moment of inertia (rotational mass)

#### 實作了

[`RigidBody`](../interfaces/RigidBody.md).[`momentOfInertia`](../interfaces/RigidBody.md#momentofinertia)

***

### orientationAngle

#### Getter 簽章

> **get** **orientationAngle**(): `number`

定義於: [rigidbody.ts:465](https://github.com/ue-too/ue-too/blob/7d57cce875ed7b8a4f4ee4e325a18e34159928f6/packages/dynamics/src/rigidbody.ts#L465)

Rotation angle in radians

##### 回傳

`number`

Rotation angle in radians

#### 實作了

[`RigidBody`](../interfaces/RigidBody.md).[`orientationAngle`](../interfaces/RigidBody.md#orientationangle)

***

### staticFrictionCoeff

#### Getter 簽章

> **get** **staticFrictionCoeff**(): `number`

定義於: [rigidbody.ts:489](https://github.com/ue-too/ue-too/blob/7d57cce875ed7b8a4f4ee4e325a18e34159928f6/packages/dynamics/src/rigidbody.ts#L489)

Static friction coefficient (0-1)

##### 回傳

`number`

#### Setter 簽章

> **set** **staticFrictionCoeff**(`coeff`): `void`

定義於: [rigidbody.ts:493](https://github.com/ue-too/ue-too/blob/7d57cce875ed7b8a4f4ee4e325a18e34159928f6/packages/dynamics/src/rigidbody.ts#L493)

Static friction coefficient (0-1)

##### 參數

###### coeff

`number`

##### 回傳

`void`

Static friction coefficient (0-1)

#### 實作了

[`RigidBody`](../interfaces/RigidBody.md).[`staticFrictionCoeff`](../interfaces/RigidBody.md#staticfrictioncoeff)

## 方法

### applyForce()

> **applyForce**(`force`): `void`

定義於: [rigidbody.ts:425](https://github.com/ue-too/ue-too/blob/7d57cce875ed7b8a4f4ee4e325a18e34159928f6/packages/dynamics/src/rigidbody.ts#L425)

#### 參數

##### force

`Point`

#### 回傳

`void`

#### 實作了

[`RigidBody`](../interfaces/RigidBody.md).[`applyForce`](../interfaces/RigidBody.md#applyforce)

***

### applyForceInOrientation()

> **applyForceInOrientation**(`force`): `void`

定義於: [rigidbody.ts:437](https://github.com/ue-too/ue-too/blob/7d57cce875ed7b8a4f4ee4e325a18e34159928f6/packages/dynamics/src/rigidbody.ts#L437)

#### 參數

##### force

`Point`

#### 回傳

`void`

#### 實作了

[`RigidBody`](../interfaces/RigidBody.md).[`applyForceInOrientation`](../interfaces/RigidBody.md#applyforceinorientation)

***

### draw()

> **draw**(`ctx`): `void`

定義於: [rigidbody.ts:392](https://github.com/ue-too/ue-too/blob/7d57cce875ed7b8a4f4ee4e325a18e34159928f6/packages/dynamics/src/rigidbody.ts#L392)

#### 參數

##### ctx

`CanvasRenderingContext2D`

#### 回傳

`void`

#### 實作了

[`VisualComponent`](../interfaces/VisualComponent.md).[`draw`](../interfaces/VisualComponent.md#draw)

***

### getAdjacentFaces()

> **getAdjacentFaces**(`collisionNormal`): `object`[]

定義於: [rigidbody.ts:497](https://github.com/ue-too/ue-too/blob/7d57cce875ed7b8a4f4ee4e325a18e34159928f6/packages/dynamics/src/rigidbody.ts#L497)

#### 參數

##### collisionNormal

`Point`

#### 回傳

`object`[]

#### 實作了

[`RigidBody`](../interfaces/RigidBody.md).[`getAdjacentFaces`](../interfaces/RigidBody.md#getadjacentfaces)

***

### getCollisionAxes()

> **getCollisionAxes**(`relativeBody`): `Point`[]

定義於: [rigidbody.ts:421](https://github.com/ue-too/ue-too/blob/7d57cce875ed7b8a4f4ee4e325a18e34159928f6/packages/dynamics/src/rigidbody.ts#L421)

#### 參數

##### relativeBody

[`RigidBody`](../interfaces/RigidBody.md)

#### 回傳

`Point`[]

#### 實作了

[`RigidBody`](../interfaces/RigidBody.md).[`getCollisionAxes`](../interfaces/RigidBody.md#getcollisionaxes)

***

### getMass()

> **getMass**(): `number`

定義於: [rigidbody.ts:433](https://github.com/ue-too/ue-too/blob/7d57cce875ed7b8a4f4ee4e325a18e34159928f6/packages/dynamics/src/rigidbody.ts#L433)

#### 回傳

`number`

***

### getMinMaxProjection()

> **getMinMaxProjection**(`unitvector`): `object`

定義於: [rigidbody.ts:417](https://github.com/ue-too/ue-too/blob/7d57cce875ed7b8a4f4ee4e325a18e34159928f6/packages/dynamics/src/rigidbody.ts#L417)

#### 參數

##### unitvector

`Point`

#### 回傳

`object`

##### max

> **max**: `number`

##### min

> **min**: `number`

#### 實作了

[`RigidBody`](../interfaces/RigidBody.md).[`getMinMaxProjection`](../interfaces/RigidBody.md#getminmaxprojection)

***

### getNormalOfSignificantFace()

> **getNormalOfSignificantFace**(`collisionNormal`): `Point`

定義於: [rigidbody.ts:485](https://github.com/ue-too/ue-too/blob/7d57cce875ed7b8a4f4ee4e325a18e34159928f6/packages/dynamics/src/rigidbody.ts#L485)

#### 參數

##### collisionNormal

`Point`

#### 回傳

`Point`

#### 實作了

[`RigidBody`](../interfaces/RigidBody.md).[`getNormalOfSignificantFace`](../interfaces/RigidBody.md#getnormalofsignificantface)

***

### getSignificantVertices()

> **getSignificantVertices**(`collisionNormal`): `Point`[]

定義於: [rigidbody.ts:445](https://github.com/ue-too/ue-too/blob/7d57cce875ed7b8a4f4ee4e325a18e34159928f6/packages/dynamics/src/rigidbody.ts#L445)

#### 參數

##### collisionNormal

`Point`

#### 回傳

`Point`[]

#### 實作了

[`RigidBody`](../interfaces/RigidBody.md).[`getSignificantVertices`](../interfaces/RigidBody.md#getsignificantvertices)

***

### isMovingStatic()

> **isMovingStatic**(): `boolean`

定義於: [rigidbody.ts:413](https://github.com/ue-too/ue-too/blob/7d57cce875ed7b8a4f4ee4e325a18e34159928f6/packages/dynamics/src/rigidbody.ts#L413)

#### 回傳

`boolean`

#### 實作了

[`RigidBody`](../interfaces/RigidBody.md).[`isMovingStatic`](../interfaces/RigidBody.md#ismovingstatic)

***

### isStatic()

> **isStatic**(): `boolean`

定義於: [rigidbody.ts:409](https://github.com/ue-too/ue-too/blob/7d57cce875ed7b8a4f4ee4e325a18e34159928f6/packages/dynamics/src/rigidbody.ts#L409)

#### 回傳

`boolean`

#### 實作了

[`RigidBody`](../interfaces/RigidBody.md).[`isStatic`](../interfaces/RigidBody.md#isstatic)

***

### move()

> **move**(`delta`): `void`

定義於: [rigidbody.ts:441](https://github.com/ue-too/ue-too/blob/7d57cce875ed7b8a4f4ee4e325a18e34159928f6/packages/dynamics/src/rigidbody.ts#L441)

#### 參數

##### delta

`Point`

#### 回傳

`void`

#### 實作了

[`RigidBody`](../interfaces/RigidBody.md).[`move`](../interfaces/RigidBody.md#move)

***

### setSleeping()

> **setSleeping**(`sleeping`): `void`

定義於: [rigidbody.ts:509](https://github.com/ue-too/ue-too/blob/7d57cce875ed7b8a4f4ee4e325a18e34159928f6/packages/dynamics/src/rigidbody.ts#L509)

#### 參數

##### sleeping

`boolean`

#### 回傳

`void`

#### 實作了

[`RigidBody`](../interfaces/RigidBody.md).[`setSleeping`](../interfaces/RigidBody.md#setsleeping)

***

### significantVertex()

> **significantVertex**(`collisionNormal`): `Point`

定義於: [rigidbody.ts:469](https://github.com/ue-too/ue-too/blob/7d57cce875ed7b8a4f4ee4e325a18e34159928f6/packages/dynamics/src/rigidbody.ts#L469)

#### 參數

##### collisionNormal

`Point`

#### 回傳

`Point`

#### 實作了

[`RigidBody`](../interfaces/RigidBody.md).[`significantVertex`](../interfaces/RigidBody.md#significantvertex)

***

### step()

> **step**(`deltaTime`): `void`

定義於: [rigidbody.ts:404](https://github.com/ue-too/ue-too/blob/7d57cce875ed7b8a4f4ee4e325a18e34159928f6/packages/dynamics/src/rigidbody.ts#L404)

#### 參數

##### deltaTime

`number`

#### 回傳

`void`

#### 實作了

[`RigidBody`](../interfaces/RigidBody.md).[`step`](../interfaces/RigidBody.md#step)

***

### updateSleeping()

> **updateSleeping**(`deltaTime`): `void`

定義於: [rigidbody.ts:520](https://github.com/ue-too/ue-too/blob/7d57cce875ed7b8a4f4ee4e325a18e34159928f6/packages/dynamics/src/rigidbody.ts#L520)

#### 參數

##### deltaTime

`number`

#### 回傳

`void`

#### 實作了

[`RigidBody`](../interfaces/RigidBody.md).[`updateSleeping`](../interfaces/RigidBody.md#updatesleeping)
