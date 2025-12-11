[@ue-too/dynamics](../globals.md) / DynamicTree

# Class: DynamicTree\<T\>

Defined in: dynamic-tree.d.ts:36

## Type Parameters

### T

`T` *extends* [`SpatialIndexObject`](../interfaces/SpatialIndexObject.md)

## Implements

- [`SpatialIndex`](../interfaces/SpatialIndex.md)\<`T`\>

## Constructors

### Constructor

> **new DynamicTree**\<`T`\>(): `DynamicTree`\<`T`\>

#### Returns

`DynamicTree`\<`T`\>

## Methods

### clear()

> **clear**(): `void`

Defined in: dynamic-tree.d.ts:40

#### Returns

`void`

#### Implementation of

[`SpatialIndex`](../interfaces/SpatialIndex.md).[`clear`](../interfaces/SpatialIndex.md#clear)

***

### draw()

> **draw**(`context`): `void`

Defined in: dynamic-tree.d.ts:48

#### Parameters

##### context

`CanvasRenderingContext2D`

#### Returns

`void`

#### Implementation of

[`SpatialIndex`](../interfaces/SpatialIndex.md).[`draw`](../interfaces/SpatialIndex.md#draw)

***

### getStats()

> **getStats**(): `object`

Defined in: dynamic-tree.d.ts:53

#### Returns

`object`

##### height

> **height**: `number`

##### nodeCount

> **nodeCount**: `number`

***

### insert()

> **insert**(`object`): `void`

Defined in: dynamic-tree.d.ts:41

#### Parameters

##### object

`T`

#### Returns

`void`

#### Implementation of

[`SpatialIndex`](../interfaces/SpatialIndex.md).[`insert`](../interfaces/SpatialIndex.md#insert)

***

### retrieve()

> **retrieve**(`object`): `T`[]

Defined in: dynamic-tree.d.ts:47

#### Parameters

##### object

`T`

#### Returns

`T`[]

#### Implementation of

[`SpatialIndex`](../interfaces/SpatialIndex.md).[`retrieve`](../interfaces/SpatialIndex.md#retrieve)
