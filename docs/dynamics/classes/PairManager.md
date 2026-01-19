[@ue-too/dynamics](../globals.md) / PairManager

# Class: PairManager

Defined in: [pair-manager.ts:58](https://github.com/ue-too/ue-too/blob/1055c6abca1ea3a0e952b0825f36e0ca2527df85/packages/dynamics/src/pair-manager.ts#L58)

Manages collision pairs across frames.

## Remarks

Tracks which bodies are colliding and for how long, enabling
collision lifecycle events (start, update, end). This is useful for
game logic like damage on collision start or triggers.

Automatically cleans up old inactive pairs to prevent memory leaks.

## Example

Using collision events
```typescript
const pairManager = world.getPairManager();

world.step(dt);

const events = pairManager.getActivePairs();
events.forEach(pair => {
  if (pair.frameCreated === world.currentFrame) {
    console.log('Collision started!');
  }
});
```

## Constructors

### Constructor

> **new PairManager**(): `PairManager`

Defined in: [pair-manager.ts:63](https://github.com/ue-too/ue-too/blob/1055c6abca1ea3a0e952b0825f36e0ca2527df85/packages/dynamics/src/pair-manager.ts#L63)

#### Returns

`PairManager`

## Methods

### clear()

> **clear**(): `void`

Defined in: [pair-manager.ts:152](https://github.com/ue-too/ue-too/blob/1055c6abca1ea3a0e952b0825f36e0ca2527df85/packages/dynamics/src/pair-manager.ts#L152)

#### Returns

`void`

***

### getActivePairs()

> **getActivePairs**(): [`CollisionPair`](../interfaces/CollisionPair.md)[]

Defined in: [pair-manager.ts:141](https://github.com/ue-too/ue-too/blob/1055c6abca1ea3a0e952b0825f36e0ca2527df85/packages/dynamics/src/pair-manager.ts#L141)

#### Returns

[`CollisionPair`](../interfaces/CollisionPair.md)[]

***

### getPair()

> **getPair**(`bodyA`, `bodyB`): [`CollisionPair`](../interfaces/CollisionPair.md) \| `undefined`

Defined in: [pair-manager.ts:146](https://github.com/ue-too/ue-too/blob/1055c6abca1ea3a0e952b0825f36e0ca2527df85/packages/dynamics/src/pair-manager.ts#L146)

#### Parameters

##### bodyA

[`RigidBody`](../interfaces/RigidBody.md)

##### bodyB

[`RigidBody`](../interfaces/RigidBody.md)

#### Returns

[`CollisionPair`](../interfaces/CollisionPair.md) \| `undefined`

***

### getStats()

> **getStats**(): `object`

Defined in: [pair-manager.ts:158](https://github.com/ue-too/ue-too/blob/1055c6abca1ea3a0e952b0825f36e0ca2527df85/packages/dynamics/src/pair-manager.ts#L158)

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

Defined in: [pair-manager.ts:79](https://github.com/ue-too/ue-too/blob/1055c6abca1ea3a0e952b0825f36e0ca2527df85/packages/dynamics/src/pair-manager.ts#L79)

#### Parameters

##### newCollisions

`object`[]

#### Returns

[`PairEvents`](../interfaces/PairEvents.md)
