[@ue-too/dynamics](../globals.md) / SweepAndPrune

# Class: SweepAndPrune\<T\>

Defined in: [dynamic-tree.ts:110](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/dynamics/src/dynamic-tree.ts#L110)

Sweep and Prune (SAP) spatial indexing algorithm.

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

Defined in: [dynamic-tree.ts:115](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/dynamics/src/dynamic-tree.ts#L115)

#### Returns

`void`

#### Implementation of

[`SpatialIndex`](../interfaces/SpatialIndex.md).[`clear`](../interfaces/SpatialIndex.md#clear)

***

### draw()?

> `optional` **draw**(`context`): `void`

Defined in: [dynamic-tree.ts:244](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/dynamics/src/dynamic-tree.ts#L244)

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

Defined in: [dynamic-tree.ts:189](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/dynamics/src/dynamic-tree.ts#L189)

#### Returns

`object`[]

***

### getStats()

> **getStats**(): `object`

Defined in: [dynamic-tree.ts:265](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/dynamics/src/dynamic-tree.ts#L265)

#### Returns

`object`

##### endpointCount

> **endpointCount**: `number`

##### objectCount

> **objectCount**: `number`

***

### insert()

> **insert**(`object`): `void`

Defined in: [dynamic-tree.ts:121](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/dynamics/src/dynamic-tree.ts#L121)

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

Defined in: [dynamic-tree.ts:155](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/dynamics/src/dynamic-tree.ts#L155)

#### Parameters

##### object

`T`

#### Returns

`void`

***

### retrieve()

> **retrieve**(`queryObject`): `T`[]

Defined in: [dynamic-tree.ts:164](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/dynamics/src/dynamic-tree.ts#L164)

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

Defined in: [dynamic-tree.ts:134](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/dynamics/src/dynamic-tree.ts#L134)

#### Parameters

##### object

`T`

#### Returns

`void`
