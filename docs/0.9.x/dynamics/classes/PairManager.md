[@ue-too/dynamics](../globals.md) / PairManager

# Class: PairManager

Defined in: pair-manager.d.ts:19

## Constructors

### Constructor

> **new PairManager**(): `PairManager`

Defined in: pair-manager.d.ts:23

#### Returns

`PairManager`

## Methods

### clear()

> **clear**(): `void`

Defined in: pair-manager.d.ts:35

#### Returns

`void`

***

### getActivePairs()

> **getActivePairs**(): [`CollisionPair`](../interfaces/CollisionPair.md)[]

Defined in: pair-manager.d.ts:33

#### Returns

[`CollisionPair`](../interfaces/CollisionPair.md)[]

***

### getPair()

> **getPair**(`bodyA`, `bodyB`): [`CollisionPair`](../interfaces/CollisionPair.md)

Defined in: pair-manager.d.ts:34

#### Parameters

##### bodyA

[`RigidBody`](../interfaces/RigidBody.md)

##### bodyB

[`RigidBody`](../interfaces/RigidBody.md)

#### Returns

[`CollisionPair`](../interfaces/CollisionPair.md)

***

### getStats()

> **getStats**(): `object`

Defined in: pair-manager.d.ts:36

#### Returns

`object`

##### activePairs

> **activePairs**: `number`

##### frameNumber

> **frameNumber**: `number`

##### totalPairs

> **totalPairs**: `number`

***

### updatePairs()

> **updatePairs**(`newCollisions`): [`PairEvents`](../interfaces/PairEvents.md)

Defined in: pair-manager.d.ts:26

#### Parameters

##### newCollisions

`object`[]

#### Returns

[`PairEvents`](../interfaces/PairEvents.md)
