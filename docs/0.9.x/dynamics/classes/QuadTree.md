[@ue-too/dynamics](../globals.md) / QuadTree

# Class: QuadTree\<T\>

Defined in: quadtree.d.ts:13

## Type Parameters

### T

`T` *extends* [`QuadTreeObject`](../type-aliases/QuadTreeObject.md)

## Implements

- [`SpatialIndex`](../interfaces/SpatialIndex.md)\<`T`\>

## Constructors

### Constructor

> **new QuadTree**\<`T`\>(`level`, `bounds`): `QuadTree`\<`T`\>

Defined in: quadtree.d.ts:20

#### Parameters

##### level

`number`

##### bounds

[`RectangleBound`](RectangleBound.md)

#### Returns

`QuadTree`\<`T`\>

## Methods

### clear()

> **clear**(): `void`

Defined in: quadtree.d.ts:22

#### Returns

`void`

#### Implementation of

[`SpatialIndex`](../interfaces/SpatialIndex.md).[`clear`](../interfaces/SpatialIndex.md#clear)

***

### draw()

> **draw**(`context`): `void`

Defined in: quadtree.d.ts:21

#### Parameters

##### context

`CanvasRenderingContext2D`

#### Returns

`void`

#### Implementation of

[`SpatialIndex`](../interfaces/SpatialIndex.md).[`draw`](../interfaces/SpatialIndex.md#draw)

***

### getIndex()

> **getIndex**(`vBody`): `-1` \| `0` \| `1` \| `2` \| `3`

Defined in: quadtree.d.ts:24

#### Parameters

##### vBody

`T`

#### Returns

`-1` \| `0` \| `1` \| `2` \| `3`

***

### insert()

> **insert**(`vBody`): `void`

Defined in: quadtree.d.ts:25

#### Parameters

##### vBody

`T`

#### Returns

`void`

#### Implementation of

[`SpatialIndex`](../interfaces/SpatialIndex.md).[`insert`](../interfaces/SpatialIndex.md#insert)

***

### retrieve()

> **retrieve**(`vBody`): `T`[]

Defined in: quadtree.d.ts:26

#### Parameters

##### vBody

`T`

#### Returns

`T`[]

#### Implementation of

[`SpatialIndex`](../interfaces/SpatialIndex.md).[`retrieve`](../interfaces/SpatialIndex.md#retrieve)

***

### split()

> **split**(): `void`

Defined in: quadtree.d.ts:23

#### Returns

`void`
