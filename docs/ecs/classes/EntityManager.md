[@ue-too/ecs](../globals.md) / EntityManager

# Class: EntityManager

Defined in: [index.ts:462](https://github.com/ue-too/ue-too/blob/1055c6abca1ea3a0e952b0825f36e0ca2527df85/packages/ecs/src/index.ts#L462)

Manages entity lifecycle and signatures.

## Remarks

The EntityManager handles:
- Creating new entities (recycling IDs from a pool)
- Destroying entities (returning IDs to the pool)
- Storing and updating component signatures for each entity

Entities are represented as simple numbers (IDs) and the manager maintains
a signature (bit field) for each entity indicating which components it has.

## Constructors

### Constructor

> **new EntityManager**(`maxEntities`): `EntityManager`

Defined in: [index.ts:470](https://github.com/ue-too/ue-too/blob/1055c6abca1ea3a0e952b0825f36e0ca2527df85/packages/ecs/src/index.ts#L470)

#### Parameters

##### maxEntities

`number` = `MAX_ENTITIES`

#### Returns

`EntityManager`

## Methods

### createEntity()

> **createEntity**(): `number`

Defined in: [index.ts:478](https://github.com/ue-too/ue-too/blob/1055c6abca1ea3a0e952b0825f36e0ca2527df85/packages/ecs/src/index.ts#L478)

#### Returns

`number`

***

### destroyEntity()

> **destroyEntity**(`entity`): `void`

Defined in: [index.ts:491](https://github.com/ue-too/ue-too/blob/1055c6abca1ea3a0e952b0825f36e0ca2527df85/packages/ecs/src/index.ts#L491)

#### Parameters

##### entity

`number`

#### Returns

`void`

***

### entityExists()

> **entityExists**(`entity`): `boolean`

Defined in: [index.ts:536](https://github.com/ue-too/ue-too/blob/1055c6abca1ea3a0e952b0825f36e0ca2527df85/packages/ecs/src/index.ts#L536)

Check if an entity exists (is currently active, not in the available pool).

#### Parameters

##### entity

`number`

The entity ID to check

#### Returns

`boolean`

true if the entity exists, false otherwise

***

### getAllLivingEntities()

> **getAllLivingEntities**(): `number`[]

Defined in: [index.ts:518](https://github.com/ue-too/ue-too/blob/1055c6abca1ea3a0e952b0825f36e0ca2527df85/packages/ecs/src/index.ts#L518)

Get all living entities (entities that are currently active, not in the available pool).

#### Returns

`number`[]

Array of all living entity IDs

***

### getSignature()

> **getSignature**(`entity`): `number` \| `null`

Defined in: [index.ts:507](https://github.com/ue-too/ue-too/blob/1055c6abca1ea3a0e952b0825f36e0ca2527df85/packages/ecs/src/index.ts#L507)

#### Parameters

##### entity

`number`

#### Returns

`number` \| `null`

***

### setSignature()

> **setSignature**(`entity`, `signature`): `void`

Defined in: [index.ts:500](https://github.com/ue-too/ue-too/blob/1055c6abca1ea3a0e952b0825f36e0ca2527df85/packages/ecs/src/index.ts#L500)

#### Parameters

##### entity

`number`

##### signature

`number`

#### Returns

`void`
