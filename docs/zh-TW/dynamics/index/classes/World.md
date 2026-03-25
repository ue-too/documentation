[@ue-too/dynamics](../../modules.md) / [index](../index.md) / World

# 類別: World

定義於: [world.ts:65](https://github.com/ue-too/ue-too/blob/9b787448328cf446379b1ea4cc5f4c79149cbec8/packages/dynamics/src/world.ts#L65)

Main physics world managing rigid body simulation.

## 備註

The World class is the main entry point for physics simulation. It manages
all rigid bodies, runs collision detection and response, enforces constraints,
and provides performance optimizations like sleeping and spatial indexing.

### Simulation Loop

Call `world.step(deltaTime)` each frame to advance the simulation. This:
1. Updates sleeping states
2. Detects collisions (broad and narrow phase)
3. Resolves collisions with impulses
4. Enforces constraints
5. Updates body positions and velocities

### Performance Tuning

- Choose appropriate spatial index for your use case
- Enable sleeping for better performance with many bodies
- Use collision filtering to reduce collision checks

## 範例

Basic setup
```typescript
const world = new World(2000, 2000, 'dynamictree');

// Add bodies
const ball = new Circle({ x: 0, y: 100 }, 20, 0, 10, false);
world.addRigidBody('ball', ball);

// Simulation loop
function update(dt: number) {
  world.step(dt);
}
```

## 建構函式

### 建構函式

> **new World**(`maxTransWidth`, `maxTransHeight`, `spatialIndexType`): `World`

定義於: [world.ts:80](https://github.com/ue-too/ue-too/blob/9b787448328cf446379b1ea4cc5f4c79149cbec8/packages/dynamics/src/world.ts#L80)

#### 參數

##### maxTransWidth

`number`

##### maxTransHeight

`number`

##### spatialIndexType

[`SpatialIndexType`](../type-aliases/SpatialIndexType.md) = `'dynamictree'`

#### 回傳

`World`

## 屬性

### \_context

> **\_context**: `CanvasRenderingContext2D` \| `null` = `null`

定義於: [world.ts:78](https://github.com/ue-too/ue-too/blob/9b787448328cf446379b1ea4cc5f4c79149cbec8/packages/dynamics/src/world.ts#L78)

## 存取器

### currentSpatialIndexType

#### Getter 簽章

> **get** **currentSpatialIndexType**(): [`SpatialIndexType`](../type-aliases/SpatialIndexType.md)

定義於: [world.ts:273](https://github.com/ue-too/ue-too/blob/9b787448328cf446379b1ea4cc5f4c79149cbec8/packages/dynamics/src/world.ts#L273)

##### 回傳

[`SpatialIndexType`](../type-aliases/SpatialIndexType.md)

***

### resolveCollision

#### Getter 簽章

> **get** **resolveCollision**(): `boolean`

定義於: [world.ts:228](https://github.com/ue-too/ue-too/blob/9b787448328cf446379b1ea4cc5f4c79149cbec8/packages/dynamics/src/world.ts#L228)

##### 回傳

`boolean`

#### Setter 簽章

> **set** **resolveCollision**(`resolveCollision`): `void`

定義於: [world.ts:232](https://github.com/ue-too/ue-too/blob/9b787448328cf446379b1ea4cc5f4c79149cbec8/packages/dynamics/src/world.ts#L232)

##### 參數

###### resolveCollision

`boolean`

##### 回傳

`void`

***

### sleepingEnabled

#### Getter 簽章

> **get** **sleepingEnabled**(): `boolean`

定義於: [world.ts:303](https://github.com/ue-too/ue-too/blob/9b787448328cf446379b1ea4cc5f4c79149cbec8/packages/dynamics/src/world.ts#L303)

##### 回傳

`boolean`

#### Setter 簽章

> **set** **sleepingEnabled**(`enabled`): `void`

定義於: [world.ts:307](https://github.com/ue-too/ue-too/blob/9b787448328cf446379b1ea4cc5f4c79149cbec8/packages/dynamics/src/world.ts#L307)

##### 參數

###### enabled

`boolean`

##### 回傳

`void`

## 方法

### addConstraint()

> **addConstraint**(`constraint`): `void`

定義於: [world.ts:256](https://github.com/ue-too/ue-too/blob/9b787448328cf446379b1ea4cc5f4c79149cbec8/packages/dynamics/src/world.ts#L256)

#### 參數

##### constraint

[`Constraint`](../interfaces/Constraint.md)

#### 回傳

`void`

***

### addPinJoint()

> **addPinJoint**(`bodyA`, `bodyB`, `anchorA`, `anchorB`): `void`

定義於: [world.ts:264](https://github.com/ue-too/ue-too/blob/9b787448328cf446379b1ea4cc5f4c79149cbec8/packages/dynamics/src/world.ts#L264)

#### 參數

##### bodyA

[`RigidBody`](../interfaces/RigidBody.md)

##### bodyB

[`RigidBody`](../interfaces/RigidBody.md)

##### anchorA

`Point`

##### anchorB

`Point`

#### 回傳

`void`

***

### addRigidBody()

> **addRigidBody**(`ident`, `body`): `void`

定義於: [world.ts:110](https://github.com/ue-too/ue-too/blob/9b787448328cf446379b1ea4cc5f4c79149cbec8/packages/dynamics/src/world.ts#L110)

#### 參數

##### ident

`string`

##### body

[`RigidBody`](../interfaces/RigidBody.md)

#### 回傳

`void`

***

### getCollisionStats()

> **getCollisionStats**(): `object`

定義於: [world.ts:325](https://github.com/ue-too/ue-too/blob/9b787448328cf446379b1ea4cc5f4c79149cbec8/packages/dynamics/src/world.ts#L325)

#### 回傳

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

定義於: [world.ts:260](https://github.com/ue-too/ue-too/blob/9b787448328cf446379b1ea4cc5f4c79149cbec8/packages/dynamics/src/world.ts#L260)

#### 回傳

[`Constraint`](../interfaces/Constraint.md)[]

***

### getPairManager()

> **getPairManager**(): [`PairManager`](PairManager.md)

定義於: [world.ts:320](https://github.com/ue-too/ue-too/blob/9b787448328cf446379b1ea4cc5f4c79149cbec8/packages/dynamics/src/world.ts#L320)

#### 回傳

[`PairManager`](PairManager.md)

***

### getRigidBodyList()

> **getRigidBodyList**(): [`RigidBody`](../interfaces/RigidBody.md)[]

定義於: [world.ts:236](https://github.com/ue-too/ue-too/blob/9b787448328cf446379b1ea4cc5f4c79149cbec8/packages/dynamics/src/world.ts#L236)

#### 回傳

[`RigidBody`](../interfaces/RigidBody.md)[]

***

### getRigidBodyMap()

> **getRigidBodyMap**(): `Map`\<`string`, [`RigidBody`](../interfaces/RigidBody.md)\>

定義於: [world.ts:244](https://github.com/ue-too/ue-too/blob/9b787448328cf446379b1ea4cc5f4c79149cbec8/packages/dynamics/src/world.ts#L244)

#### 回傳

`Map`\<`string`, [`RigidBody`](../interfaces/RigidBody.md)\>

***

### getSpatialIndexStats()

> **getSpatialIndexStats**(): `any`

定義於: [world.ts:290](https://github.com/ue-too/ue-too/blob/9b787448328cf446379b1ea4cc5f4c79149cbec8/packages/dynamics/src/world.ts#L290)

#### 回傳

`any`

***

### removeRigidBody()

> **removeRigidBody**(`ident`): `void`

定義於: [world.ts:120](https://github.com/ue-too/ue-too/blob/9b787448328cf446379b1ea4cc5f4c79149cbec8/packages/dynamics/src/world.ts#L120)

#### 參數

##### ident

`string`

#### 回傳

`void`

***

### resolveCollisionPhase()

> **resolveCollisionPhase**(): `Point`[]

定義於: [world.ts:173](https://github.com/ue-too/ue-too/blob/9b787448328cf446379b1ea4cc5f4c79149cbec8/packages/dynamics/src/world.ts#L173)

#### 回傳

`Point`[]

***

### setMaxTransHeight()

> **setMaxTransHeight**(`height`): `void`

定義於: [world.ts:248](https://github.com/ue-too/ue-too/blob/9b787448328cf446379b1ea4cc5f4c79149cbec8/packages/dynamics/src/world.ts#L248)

#### 參數

##### height

`number`

#### 回傳

`void`

***

### setMaxTransWidth()

> **setMaxTransWidth**(`width`): `void`

定義於: [world.ts:252](https://github.com/ue-too/ue-too/blob/9b787448328cf446379b1ea4cc5f4c79149cbec8/packages/dynamics/src/world.ts#L252)

#### 參數

##### width

`number`

#### 回傳

`void`

***

### setSpatialIndexType()

> **setSpatialIndexType**(`type`): `void`

定義於: [world.ts:277](https://github.com/ue-too/ue-too/blob/9b787448328cf446379b1ea4cc5f4c79149cbec8/packages/dynamics/src/world.ts#L277)

#### 參數

##### type

[`SpatialIndexType`](../type-aliases/SpatialIndexType.md)

#### 回傳

`void`

***

### step()

> **step**(`deltaTime`): `void`

定義於: [world.ts:142](https://github.com/ue-too/ue-too/blob/9b787448328cf446379b1ea4cc5f4c79149cbec8/packages/dynamics/src/world.ts#L142)

#### 參數

##### deltaTime

`number`

#### 回傳

`void`
