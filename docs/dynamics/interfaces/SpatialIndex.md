[@ue-too/dynamics](../globals.md) / SpatialIndex

# Interface: SpatialIndex\<T\>

Defined in: [dynamic-tree.ts:15](https://github.com/ue-too/ue-too/blob/1055c6abca1ea3a0e952b0825f36e0ca2527df85/packages/dynamics/src/dynamic-tree.ts#L15)

Interface for spatial indexing data structures.

## Type Parameters

### T

`T` *extends* [`SpatialIndexObject`](SpatialIndexObject.md)

## Methods

### clear()

> **clear**(): `void`

Defined in: [dynamic-tree.ts:16](https://github.com/ue-too/ue-too/blob/1055c6abca1ea3a0e952b0825f36e0ca2527df85/packages/dynamics/src/dynamic-tree.ts#L16)

#### Returns

`void`

***

### draw()?

> `optional` **draw**(`context`): `void`

Defined in: [dynamic-tree.ts:19](https://github.com/ue-too/ue-too/blob/1055c6abca1ea3a0e952b0825f36e0ca2527df85/packages/dynamics/src/dynamic-tree.ts#L19)

#### Parameters

##### context

`CanvasRenderingContext2D`

#### Returns

`void`

***

### insert()

> **insert**(`object`): `void`

Defined in: [dynamic-tree.ts:17](https://github.com/ue-too/ue-too/blob/1055c6abca1ea3a0e952b0825f36e0ca2527df85/packages/dynamics/src/dynamic-tree.ts#L17)

#### Parameters

##### object

`T`

#### Returns

`void`

***

### retrieve()

> **retrieve**(`object`): `T`[]

Defined in: [dynamic-tree.ts:18](https://github.com/ue-too/ue-too/blob/1055c6abca1ea3a0e952b0825f36e0ca2527df85/packages/dynamics/src/dynamic-tree.ts#L18)

#### Parameters

##### object

`T`

#### Returns

`T`[]
