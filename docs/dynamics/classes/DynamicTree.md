[@ue-too/dynamics](../globals.md) / DynamicTree

# Class: DynamicTree\<T\>

Defined in: [dynamic-tree.ts:277](https://github.com/ue-too/ue-too/blob/1055c6abca1ea3a0e952b0825f36e0ca2527df85/packages/dynamics/src/dynamic-tree.ts#L277)

Dynamic AABB tree for efficient spatial queries.

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

Defined in: [dynamic-tree.ts:282](https://github.com/ue-too/ue-too/blob/1055c6abca1ea3a0e952b0825f36e0ca2527df85/packages/dynamics/src/dynamic-tree.ts#L282)

#### Returns

`void`

#### Implementation of

[`SpatialIndex`](../interfaces/SpatialIndex.md).[`clear`](../interfaces/SpatialIndex.md#clear)

***

### draw()

> **draw**(`context`): `void`

Defined in: [dynamic-tree.ts:514](https://github.com/ue-too/ue-too/blob/1055c6abca1ea3a0e952b0825f36e0ca2527df85/packages/dynamics/src/dynamic-tree.ts#L514)

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

Defined in: [dynamic-tree.ts:562](https://github.com/ue-too/ue-too/blob/1055c6abca1ea3a0e952b0825f36e0ca2527df85/packages/dynamics/src/dynamic-tree.ts#L562)

#### Returns

`object`

##### height

> **height**: `number`

##### nodeCount

> **nodeCount**: `number`

***

### insert()

> **insert**(`object`): `void`

Defined in: [dynamic-tree.ts:287](https://github.com/ue-too/ue-too/blob/1055c6abca1ea3a0e952b0825f36e0ca2527df85/packages/dynamics/src/dynamic-tree.ts#L287)

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

Defined in: [dynamic-tree.ts:490](https://github.com/ue-too/ue-too/blob/1055c6abca1ea3a0e952b0825f36e0ca2527df85/packages/dynamics/src/dynamic-tree.ts#L490)

#### Parameters

##### object

`T`

#### Returns

`T`[]

#### Implementation of

[`SpatialIndex`](../interfaces/SpatialIndex.md).[`retrieve`](../interfaces/SpatialIndex.md#retrieve)
