[@ue-too/dynamics](../../modules.md) / [index](../index.md) / VisualPolygonBody

# クラス: VisualPolygonBody

定義: [rigidbody.ts:540](https://github.com/ue-too/ue-too/blob/79a36cf61d861e6b4e3302e81111636c6082a3db/packages/dynamics/src/rigidbody.ts#L540)

Rigid body interface for 2D physics simulation.

## Remarks

Represents a physical object in the physics world with mass, velocity,
rotation, and collision properties. Can be either static (immovable) or
dynamic (responds to forces).

Implemented by [Circle](Circle.md) and [Polygon](Polygon.md) classes.

## 実装

- [`VisualComponent`](../interfaces/VisualComponent.md)
- [`RigidBody`](../interfaces/RigidBody.md)

## コンストラクター

### コンストラクター

> **new VisualPolygonBody**(`center`, `vertices`, `drawingContext`, `_orientationAngle`, `mass`, `isStatic`, `frictionEnabled`): `VisualPolygonBody`

定義: [rigidbody.ts:553](https://github.com/ue-too/ue-too/blob/79a36cf61d861e6b4e3302e81111636c6082a3db/packages/dynamics/src/rigidbody.ts#L553)

#### パラメータ

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

#### 戻り値

`VisualPolygonBody`

## プロパティ

### collisionFilter

> **collisionFilter**: [`CollisionFilter`](../interfaces/CollisionFilter.md)

定義: [rigidbody.ts:545](https://github.com/ue-too/ue-too/blob/79a36cf61d861e6b4e3302e81111636c6082a3db/packages/dynamics/src/rigidbody.ts#L545)

Collision filtering configuration

#### の実装

[`RigidBody`](../interfaces/RigidBody.md).[`collisionFilter`](../interfaces/RigidBody.md#collisionfilter)

***

### isSleeping

> **isSleeping**: `boolean` = `false`

定義: [rigidbody.ts:548](https://github.com/ue-too/ue-too/blob/79a36cf61d861e6b4e3302e81111636c6082a3db/packages/dynamics/src/rigidbody.ts#L548)

#### の実装

[`RigidBody`](../interfaces/RigidBody.md).[`isSleeping`](../interfaces/RigidBody.md#issleeping)

***

### sleepThreshold

> **sleepThreshold**: `number` = `0.01`

定義: [rigidbody.ts:549](https://github.com/ue-too/ue-too/blob/79a36cf61d861e6b4e3302e81111636c6082a3db/packages/dynamics/src/rigidbody.ts#L549)

#### の実装

[`RigidBody`](../interfaces/RigidBody.md).[`sleepThreshold`](../interfaces/RigidBody.md#sleepthreshold)

***

### sleepTime

> **sleepTime**: `number` = `0.5`

定義: [rigidbody.ts:550](https://github.com/ue-too/ue-too/blob/79a36cf61d861e6b4e3302e81111636c6082a3db/packages/dynamics/src/rigidbody.ts#L550)

#### の実装

[`RigidBody`](../interfaces/RigidBody.md).[`sleepTime`](../interfaces/RigidBody.md#sleeptime)

***

### timeAtRest

> **timeAtRest**: `number` = `0`

定義: [rigidbody.ts:551](https://github.com/ue-too/ue-too/blob/79a36cf61d861e6b4e3302e81111636c6082a3db/packages/dynamics/src/rigidbody.ts#L551)

#### の実装

[`RigidBody`](../interfaces/RigidBody.md).[`timeAtRest`](../interfaces/RigidBody.md#timeatrest)

## アクセッサー

### AABB

#### 署名を取得する

> **get** **AABB**(): `object`

定義: [rigidbody.ts:660](https://github.com/ue-too/ue-too/blob/79a36cf61d861e6b4e3302e81111636c6082a3db/packages/dynamics/src/rigidbody.ts#L660)

Axis-Aligned Bounding Box for broad phase collision

##### 戻り値

`object`

###### max

> **max**: `Point`

###### min

> **min**: `Point`

Axis-Aligned Bounding Box for broad phase collision

#### の実装

[`RigidBody`](../interfaces/RigidBody.md).[`AABB`](../interfaces/RigidBody.md#aabb)

***

### angularVelocity

#### 署名を取得する

> **get** **angularVelocity**(): `number`

定義: [rigidbody.ts:640](https://github.com/ue-too/ue-too/blob/79a36cf61d861e6b4e3302e81111636c6082a3db/packages/dynamics/src/rigidbody.ts#L640)

Angular velocity (radians/second)

##### 戻り値

`number`

#### 署名を設定する

> **set** **angularVelocity**(`angularVelocity`): `void`

定義: [rigidbody.ts:644](https://github.com/ue-too/ue-too/blob/79a36cf61d861e6b4e3302e81111636c6082a3db/packages/dynamics/src/rigidbody.ts#L644)

Angular velocity (radians/second)

##### パラメータ

###### angularVelocity

`number`

##### 戻り値

`void`

Angular velocity (radians/second)

#### の実装

[`RigidBody`](../interfaces/RigidBody.md).[`angularVelocity`](../interfaces/RigidBody.md#angularvelocity)

***

### center

#### 署名を取得する

> **get** **center**(): `Point`

定義: [rigidbody.ts:624](https://github.com/ue-too/ue-too/blob/79a36cf61d861e6b4e3302e81111636c6082a3db/packages/dynamics/src/rigidbody.ts#L624)

Center position in world coordinates

##### 戻り値

`Point`

#### 署名を設定する

> **set** **center**(`dest`): `void`

定義: [rigidbody.ts:628](https://github.com/ue-too/ue-too/blob/79a36cf61d861e6b4e3302e81111636c6082a3db/packages/dynamics/src/rigidbody.ts#L628)

Center position in world coordinates

##### パラメータ

###### dest

`Point`

##### 戻り値

`void`

Center position in world coordinates

#### の実装

[`RigidBody`](../interfaces/RigidBody.md).[`center`](../interfaces/RigidBody.md#center)

***

### linearVelocity

#### 署名を取得する

> **get** **linearVelocity**(): `Point`

定義: [rigidbody.ts:632](https://github.com/ue-too/ue-too/blob/79a36cf61d861e6b4e3302e81111636c6082a3db/packages/dynamics/src/rigidbody.ts#L632)

Linear velocity (pixels/second)

##### 戻り値

`Point`

#### 署名を設定する

> **set** **linearVelocity**(`dest`): `void`

定義: [rigidbody.ts:636](https://github.com/ue-too/ue-too/blob/79a36cf61d861e6b4e3302e81111636c6082a3db/packages/dynamics/src/rigidbody.ts#L636)

Linear velocity (pixels/second)

##### パラメータ

###### dest

`Point`

##### 戻り値

`void`

Linear velocity (pixels/second)

#### の実装

[`RigidBody`](../interfaces/RigidBody.md).[`linearVelocity`](../interfaces/RigidBody.md#linearvelocity)

***

### mass

#### 署名を取得する

> **get** **mass**(): `number`

定義: [rigidbody.ts:664](https://github.com/ue-too/ue-too/blob/79a36cf61d861e6b4e3302e81111636c6082a3db/packages/dynamics/src/rigidbody.ts#L664)

Mass in arbitrary units (affects force response)

##### 戻り値

`number`

Mass in arbitrary units (affects force response)

#### の実装

[`RigidBody`](../interfaces/RigidBody.md).[`mass`](../interfaces/RigidBody.md#mass)

***

### momentOfInertia

#### 署名を取得する

> **get** **momentOfInertia**(): `number`

定義: [rigidbody.ts:676](https://github.com/ue-too/ue-too/blob/79a36cf61d861e6b4e3302e81111636c6082a3db/packages/dynamics/src/rigidbody.ts#L676)

Moment of inertia (rotational mass)

##### 戻り値

`number`

Moment of inertia (rotational mass)

#### の実装

[`RigidBody`](../interfaces/RigidBody.md).[`momentOfInertia`](../interfaces/RigidBody.md#momentofinertia)

***

### orientationAngle

#### 署名を取得する

> **get** **orientationAngle**(): `number`

定義: [rigidbody.ts:648](https://github.com/ue-too/ue-too/blob/79a36cf61d861e6b4e3302e81111636c6082a3db/packages/dynamics/src/rigidbody.ts#L648)

Rotation angle in radians

##### 戻り値

`number`

Rotation angle in radians

#### の実装

[`RigidBody`](../interfaces/RigidBody.md).[`orientationAngle`](../interfaces/RigidBody.md#orientationangle)

***

### staticFrictionCoeff

#### 署名を取得する

> **get** **staticFrictionCoeff**(): `number`

定義: [rigidbody.ts:668](https://github.com/ue-too/ue-too/blob/79a36cf61d861e6b4e3302e81111636c6082a3db/packages/dynamics/src/rigidbody.ts#L668)

Static friction coefficient (0-1)

##### 戻り値

`number`

#### 署名を設定する

> **set** **staticFrictionCoeff**(`coeff`): `void`

定義: [rigidbody.ts:672](https://github.com/ue-too/ue-too/blob/79a36cf61d861e6b4e3302e81111636c6082a3db/packages/dynamics/src/rigidbody.ts#L672)

Static friction coefficient (0-1)

##### パラメータ

###### coeff

`number`

##### 戻り値

`void`

Static friction coefficient (0-1)

#### の実装

[`RigidBody`](../interfaces/RigidBody.md).[`staticFrictionCoeff`](../interfaces/RigidBody.md#staticfrictioncoeff)

## メソッド

### applyForce()

> **applyForce**(`force`): `void`

定義: [rigidbody.ts:608](https://github.com/ue-too/ue-too/blob/79a36cf61d861e6b4e3302e81111636c6082a3db/packages/dynamics/src/rigidbody.ts#L608)

#### パラメータ

##### force

`Point`

#### 戻り値

`void`

#### の実装

[`RigidBody`](../interfaces/RigidBody.md).[`applyForce`](../interfaces/RigidBody.md#applyforce)

***

### applyForceInOrientation()

> **applyForceInOrientation**(`force`): `void`

定義: [rigidbody.ts:612](https://github.com/ue-too/ue-too/blob/79a36cf61d861e6b4e3302e81111636c6082a3db/packages/dynamics/src/rigidbody.ts#L612)

#### パラメータ

##### force

`Point`

#### 戻り値

`void`

#### の実装

[`RigidBody`](../interfaces/RigidBody.md).[`applyForceInOrientation`](../interfaces/RigidBody.md#applyforceinorientation)

***

### draw()

> **draw**(`ctx`): `void`

定義: [rigidbody.ts:573](https://github.com/ue-too/ue-too/blob/79a36cf61d861e6b4e3302e81111636c6082a3db/packages/dynamics/src/rigidbody.ts#L573)

#### パラメータ

##### ctx

`CanvasRenderingContext2D`

#### 戻り値

`void`

#### の実装

[`VisualComponent`](../interfaces/VisualComponent.md).[`draw`](../interfaces/VisualComponent.md#draw)

***

### getAdjacentFaces()

> **getAdjacentFaces**(`collisionNormal`): `object`[]

定義: [rigidbody.ts:684](https://github.com/ue-too/ue-too/blob/79a36cf61d861e6b4e3302e81111636c6082a3db/packages/dynamics/src/rigidbody.ts#L684)

#### パラメータ

##### collisionNormal

`Point`

#### 戻り値

`object`[]

#### の実装

[`RigidBody`](../interfaces/RigidBody.md).[`getAdjacentFaces`](../interfaces/RigidBody.md#getadjacentfaces)

***

### getCollisionAxes()

> **getCollisionAxes**(`relativeBody`): `Point`[]

定義: [rigidbody.ts:604](https://github.com/ue-too/ue-too/blob/79a36cf61d861e6b4e3302e81111636c6082a3db/packages/dynamics/src/rigidbody.ts#L604)

#### パラメータ

##### relativeBody

[`RigidBody`](../interfaces/RigidBody.md)

#### 戻り値

`Point`[]

#### の実装

[`RigidBody`](../interfaces/RigidBody.md).[`getCollisionAxes`](../interfaces/RigidBody.md#getcollisionaxes)

***

### getMinMaxProjection()

> **getMinMaxProjection**(`unitvector`): `object`

定義: [rigidbody.ts:600](https://github.com/ue-too/ue-too/blob/79a36cf61d861e6b4e3302e81111636c6082a3db/packages/dynamics/src/rigidbody.ts#L600)

#### パラメータ

##### unitvector

`Point`

#### 戻り値

`object`

##### max

> **max**: `number`

##### min

> **min**: `number`

#### の実装

[`RigidBody`](../interfaces/RigidBody.md).[`getMinMaxProjection`](../interfaces/RigidBody.md#getminmaxprojection)

***

### getNormalOfSignificantFace()

> **getNormalOfSignificantFace**(`collisionNormal`): `Point`

定義: [rigidbody.ts:680](https://github.com/ue-too/ue-too/blob/79a36cf61d861e6b4e3302e81111636c6082a3db/packages/dynamics/src/rigidbody.ts#L680)

#### パラメータ

##### collisionNormal

`Point`

#### 戻り値

`Point`

#### の実装

[`RigidBody`](../interfaces/RigidBody.md).[`getNormalOfSignificantFace`](../interfaces/RigidBody.md#getnormalofsignificantface)

***

### getSignificantVertices()

> **getSignificantVertices**(`collisionNormal`): `Point`[]

定義: [rigidbody.ts:656](https://github.com/ue-too/ue-too/blob/79a36cf61d861e6b4e3302e81111636c6082a3db/packages/dynamics/src/rigidbody.ts#L656)

#### パラメータ

##### collisionNormal

`Point`

#### 戻り値

`Point`[]

#### の実装

[`RigidBody`](../interfaces/RigidBody.md).[`getSignificantVertices`](../interfaces/RigidBody.md#getsignificantvertices)

***

### isMovingStatic()

> **isMovingStatic**(): `boolean`

定義: [rigidbody.ts:596](https://github.com/ue-too/ue-too/blob/79a36cf61d861e6b4e3302e81111636c6082a3db/packages/dynamics/src/rigidbody.ts#L596)

#### 戻り値

`boolean`

#### の実装

[`RigidBody`](../interfaces/RigidBody.md).[`isMovingStatic`](../interfaces/RigidBody.md#ismovingstatic)

***

### isStatic()

> **isStatic**(): `boolean`

定義: [rigidbody.ts:592](https://github.com/ue-too/ue-too/blob/79a36cf61d861e6b4e3302e81111636c6082a3db/packages/dynamics/src/rigidbody.ts#L592)

#### 戻り値

`boolean`

#### の実装

[`RigidBody`](../interfaces/RigidBody.md).[`isStatic`](../interfaces/RigidBody.md#isstatic)

***

### move()

> **move**(`delta`): `void`

定義: [rigidbody.ts:620](https://github.com/ue-too/ue-too/blob/79a36cf61d861e6b4e3302e81111636c6082a3db/packages/dynamics/src/rigidbody.ts#L620)

#### パラメータ

##### delta

`Point`

#### 戻り値

`void`

#### の実装

[`RigidBody`](../interfaces/RigidBody.md).[`move`](../interfaces/RigidBody.md#move)

***

### setLinearVelocity()

> **setLinearVelocity**(`linearVelocity`): `void`

定義: [rigidbody.ts:616](https://github.com/ue-too/ue-too/blob/79a36cf61d861e6b4e3302e81111636c6082a3db/packages/dynamics/src/rigidbody.ts#L616)

#### パラメータ

##### linearVelocity

`Point`

#### 戻り値

`void`

***

### setSleeping()

> **setSleeping**(`sleeping`): `void`

定義: [rigidbody.ts:692](https://github.com/ue-too/ue-too/blob/79a36cf61d861e6b4e3302e81111636c6082a3db/packages/dynamics/src/rigidbody.ts#L692)

#### パラメータ

##### sleeping

`boolean`

#### 戻り値

`void`

#### の実装

[`RigidBody`](../interfaces/RigidBody.md).[`setSleeping`](../interfaces/RigidBody.md#setsleeping)

***

### significantVertex()

> **significantVertex**(`collisionNormal`): `Point`

定義: [rigidbody.ts:652](https://github.com/ue-too/ue-too/blob/79a36cf61d861e6b4e3302e81111636c6082a3db/packages/dynamics/src/rigidbody.ts#L652)

#### パラメータ

##### collisionNormal

`Point`

#### 戻り値

`Point`

#### の実装

[`RigidBody`](../interfaces/RigidBody.md).[`significantVertex`](../interfaces/RigidBody.md#significantvertex)

***

### step()

> **step**(`deltaTime`): `void`

定義: [rigidbody.ts:587](https://github.com/ue-too/ue-too/blob/79a36cf61d861e6b4e3302e81111636c6082a3db/packages/dynamics/src/rigidbody.ts#L587)

#### パラメータ

##### deltaTime

`number`

#### 戻り値

`void`

#### の実装

[`RigidBody`](../interfaces/RigidBody.md).[`step`](../interfaces/RigidBody.md#step)

***

### updateSleeping()

> **updateSleeping**(`deltaTime`): `void`

定義: [rigidbody.ts:703](https://github.com/ue-too/ue-too/blob/79a36cf61d861e6b4e3302e81111636c6082a3db/packages/dynamics/src/rigidbody.ts#L703)

#### パラメータ

##### deltaTime

`number`

#### 戻り値

`void`

#### の実装

[`RigidBody`](../interfaces/RigidBody.md).[`updateSleeping`](../interfaces/RigidBody.md#updatesleeping)
