[@ue-too/ecs](../globals.md) / ComponentArray

# Class: ComponentArray\<T\>

Defined in: [index.ts:230](https://github.com/ue-too/ue-too/blob/aabc0f56e9e83141d0fd935ef6ac3e5fe0af0a61/packages/ecs/src/index.ts#L230)

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

Defined in: [index.ts:237](https://github.com/ue-too/ue-too/blob/aabc0f56e9e83141d0fd935ef6ac3e5fe0af0a61/packages/ecs/src/index.ts#L237)

#### Parameters

##### maxEntities

`number`

#### Returns

`ComponentArray`\<`T`\>

## Methods

### entityDestroyed()

> **entityDestroyed**(`entity`): `void`

Defined in: [index.ts:296](https://github.com/ue-too/ue-too/blob/aabc0f56e9e83141d0fd935ef6ac3e5fe0af0a61/packages/ecs/src/index.ts#L296)

#### Parameters

##### entity

`number`

#### Returns

`void`

#### Implementation of

[`CArray`](../interfaces/CArray.md).[`entityDestroyed`](../interfaces/CArray.md#entitydestroyed)

***

### getData()

> **getData**(`entity`): `T` \| `null`

Defined in: [index.ts:259](https://github.com/ue-too/ue-too/blob/aabc0f56e9e83141d0fd935ef6ac3e5fe0af0a61/packages/ecs/src/index.ts#L259)

#### Parameters

##### entity

`number`

#### Returns

`T` \| `null`

***

### insertData()

> **insertData**(`entity`, `data`): `void`

Defined in: [index.ts:244](https://github.com/ue-too/ue-too/blob/aabc0f56e9e83141d0fd935ef6ac3e5fe0af0a61/packages/ecs/src/index.ts#L244)

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

Defined in: [index.ts:276](https://github.com/ue-too/ue-too/blob/aabc0f56e9e83141d0fd935ef6ac3e5fe0af0a61/packages/ecs/src/index.ts#L276)

#### Parameters

##### entity

`number`

#### Returns

`void`
