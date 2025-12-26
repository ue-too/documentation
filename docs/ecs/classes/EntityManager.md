[@ue-too/ecs](../globals.md) / EntityManager

# Class: EntityManager

Defined in: [index.ts:138](https://github.com/ue-too/ue-too/blob/e468a9961da59c81663192ec8df16ebc8e17abac/packages/ecs/src/index.ts#L138)

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

Defined in: [index.ts:146](https://github.com/ue-too/ue-too/blob/e468a9961da59c81663192ec8df16ebc8e17abac/packages/ecs/src/index.ts#L146)

#### Parameters

##### maxEntities

`number` = `MAX_ENTITIES`

#### Returns

`EntityManager`

## Methods

### createEntity()

> **createEntity**(): `number`

Defined in: [index.ts:154](https://github.com/ue-too/ue-too/blob/e468a9961da59c81663192ec8df16ebc8e17abac/packages/ecs/src/index.ts#L154)

#### Returns

`number`

***

### destroyEntity()

> **destroyEntity**(`entity`): `void`

Defined in: [index.ts:167](https://github.com/ue-too/ue-too/blob/e468a9961da59c81663192ec8df16ebc8e17abac/packages/ecs/src/index.ts#L167)

#### Parameters

##### entity

`number`

#### Returns

`void`

***

### getSignature()

> **getSignature**(`entity`): `number` \| `null`

Defined in: [index.ts:183](https://github.com/ue-too/ue-too/blob/e468a9961da59c81663192ec8df16ebc8e17abac/packages/ecs/src/index.ts#L183)

#### Parameters

##### entity

`number`

#### Returns

`number` \| `null`

***

### setSignature()

> **setSignature**(`entity`, `signature`): `void`

Defined in: [index.ts:176](https://github.com/ue-too/ue-too/blob/e468a9961da59c81663192ec8df16ebc8e17abac/packages/ecs/src/index.ts#L176)

#### Parameters

##### entity

`number`

##### signature

`number`

#### Returns

`void`
