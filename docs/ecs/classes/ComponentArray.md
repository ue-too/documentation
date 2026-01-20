[@ue-too/ecs](../globals.md) / ComponentArray

# Class: ComponentArray\<T\>

Defined in: [index.ts:584](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/ecs/src/index.ts#L584)

Efficient sparse-set data structure for storing component data.

## Remarks

ComponentArray uses a sparse-set implementation for O(1) insertion, deletion,
and lookup while maintaining dense packing for cache-efficient iteration.

The sparse-set consists of:
- **Dense array**: Packed component data for iteration
- **Sparse array**: Maps entity ID to dense array index
- **Reverse array**: Maps dense array index back to entity ID

This structure allows fast component access by entity ID and fast iteration
over all components without gaps.

## Type Parameters

### T

`T`

The component data type

## Implements

- [`CArray`](../interfaces/CArray.md)

## Constructors

### Constructor

> **new ComponentArray**\<`T`\>(`maxEntities`): `ComponentArray`\<`T`\>

Defined in: [index.ts:591](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/ecs/src/index.ts#L591)

#### Parameters

##### maxEntities

`number`

#### Returns

`ComponentArray`\<`T`\>

## Methods

### entityDestroyed()

> **entityDestroyed**(`entity`): `void`

Defined in: [index.ts:650](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/ecs/src/index.ts#L650)

#### Parameters

##### entity

`number`

#### Returns

`void`

#### Implementation of

[`CArray`](../interfaces/CArray.md).[`entityDestroyed`](../interfaces/CArray.md#entitydestroyed)

***

### getAllEntities()

> **getAllEntities**(): `number`[]

Defined in: [index.ts:658](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/ecs/src/index.ts#L658)

Get all entities that have this component.

#### Returns

`number`[]

Array of entity IDs that have this component

***

### getCount()

> **getCount**(): `number`

Defined in: [index.ts:673](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/ecs/src/index.ts#L673)

Get the count of entities with this component.

#### Returns

`number`

Number of entities with this component

***

### getData()

> **getData**(`entity`): `T` \| `null`

Defined in: [index.ts:613](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/ecs/src/index.ts#L613)

#### Parameters

##### entity

`number`

#### Returns

`T` \| `null`

***

### insertData()

> **insertData**(`entity`, `data`): `void`

Defined in: [index.ts:598](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/ecs/src/index.ts#L598)

#### Parameters

##### entity

`number`

##### data

`T`

#### Returns

`void`

***

### removeData()

> **removeData**(`entity`): `void`

Defined in: [index.ts:630](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/ecs/src/index.ts#L630)

#### Parameters

##### entity

`number`

#### Returns

`void`
