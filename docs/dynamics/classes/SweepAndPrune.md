[@ue-too/dynamics](../globals.md) / SweepAndPrune

# Class: SweepAndPrune\<T\>

Defined in: dynamic-tree.d.ts:14

## Type Parameters

### T

`T` *extends* [`SpatialIndexObject`](../interfaces/SpatialIndexObject.md)

## Implements

- [`SpatialIndex`](../interfaces/SpatialIndex.md)\<`T`\>

## Constructors

### Constructor

> **new SweepAndPrune**\<`T`\>(): `SweepAndPrune`\<`T`\>

#### Returns

`SweepAndPrune`\<`T`\>

## Methods

### clear()

> **clear**(): `void`

Defined in: dynamic-tree.d.ts:18

#### Returns

`void`

#### Implementation of

[`SpatialIndex`](../interfaces/SpatialIndex.md).[`clear`](../interfaces/SpatialIndex.md#clear)

***

### draw()?

> `optional` **draw**(`context`): `void`

Defined in: dynamic-tree.d.ts:30

#### Parameters

##### context

`CanvasRenderingContext2D`

#### Returns

`void`

#### Implementation of

[`SpatialIndex`](../interfaces/SpatialIndex.md).[`draw`](../interfaces/SpatialIndex.md#draw)

***

### findAllOverlaps()

> **findAllOverlaps**(): `object`[]

Defined in: dynamic-tree.d.ts:23

#### Returns

`object`[]

***

### getStats()

> **getStats**(): `object`

Defined in: dynamic-tree.d.ts:31

#### Returns

`object`

##### endpointCount

> **endpointCount**: `number`

##### objectCount

> **objectCount**: `number`

***

### insert()

> **insert**(`object`): `void`

Defined in: dynamic-tree.d.ts:19

#### Parameters

##### object

`T`

#### Returns

`void`

#### Implementation of

[`SpatialIndex`](../interfaces/SpatialIndex.md).[`insert`](../interfaces/SpatialIndex.md#insert)

***

### remove()

> **remove**(`object`): `void`

Defined in: dynamic-tree.d.ts:21

#### Parameters

##### object

`T`

#### Returns

`void`

***

### retrieve()

> **retrieve**(`queryObject`): `T`[]

Defined in: dynamic-tree.d.ts:22

#### Parameters

##### queryObject

`T`

#### Returns

`T`[]

#### Implementation of

[`SpatialIndex`](../interfaces/SpatialIndex.md).[`retrieve`](../interfaces/SpatialIndex.md#retrieve)

***

### update()

> **update**(`object`): `void`

Defined in: dynamic-tree.d.ts:20

#### Parameters

##### object

`T`

#### Returns

`void`
