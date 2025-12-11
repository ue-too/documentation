[@ue-too/ecs](../globals.md) / ComponentArray

# Class: ComponentArray\<T\>

Defined in: index.d.ts:21

## Type Parameters

### T

`T`

## Implements

- [`CArray`](../interfaces/CArray.md)

## Constructors

### Constructor

> **new ComponentArray**\<`T`\>(`maxEntities`): `ComponentArray`\<`T`\>

Defined in: index.d.ts:26

#### Parameters

##### maxEntities

`number`

#### Returns

`ComponentArray`\<`T`\>

## Methods

### entityDestroyed()

> **entityDestroyed**(`entity`): `void`

Defined in: index.d.ts:30

#### Parameters

##### entity

`number`

#### Returns

`void`

#### Implementation of

[`CArray`](../interfaces/CArray.md).[`entityDestroyed`](../interfaces/CArray.md#entitydestroyed)

***

### getData()

> **getData**(`entity`): `T`

Defined in: index.d.ts:28

#### Parameters

##### entity

`number`

#### Returns

`T`

***

### insertData()

> **insertData**(`entity`, `data`): `void`

Defined in: index.d.ts:27

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

Defined in: index.d.ts:29

#### Parameters

##### entity

`number`

#### Returns

`void`
