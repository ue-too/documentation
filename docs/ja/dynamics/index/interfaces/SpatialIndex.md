[@ue-too/dynamics](../../modules.md) / [index](../index.md) / SpatialIndex

# インターフェイス: SpatialIndex\<T\>

定義: [dynamic-tree.ts:15](https://github.com/ue-too/ue-too/blob/68da915137a31a45d7ce8043b13275ff7283045d/packages/dynamics/src/dynamic-tree.ts#L15)

Interface for spatial indexing data structures.

## 型パラメーター

### T

`T` *extends* [`SpatialIndexObject`](SpatialIndexObject.md)

## メソッド

### clear()

> **clear**(): `void`

定義: [dynamic-tree.ts:16](https://github.com/ue-too/ue-too/blob/68da915137a31a45d7ce8043b13275ff7283045d/packages/dynamics/src/dynamic-tree.ts#L16)

#### 戻り値

`void`

***

### draw()?

> `optional` **draw**(`context`): `void`

定義: [dynamic-tree.ts:19](https://github.com/ue-too/ue-too/blob/68da915137a31a45d7ce8043b13275ff7283045d/packages/dynamics/src/dynamic-tree.ts#L19)

#### パラメータ

##### context

`CanvasRenderingContext2D`

#### 戻り値

`void`

***

### insert()

> **insert**(`object`): `void`

定義: [dynamic-tree.ts:17](https://github.com/ue-too/ue-too/blob/68da915137a31a45d7ce8043b13275ff7283045d/packages/dynamics/src/dynamic-tree.ts#L17)

#### パラメータ

##### object

`T`

#### 戻り値

`void`

***

### retrieve()

> **retrieve**(`object`): `T`[]

定義: [dynamic-tree.ts:18](https://github.com/ue-too/ue-too/blob/68da915137a31a45d7ce8043b13275ff7283045d/packages/dynamics/src/dynamic-tree.ts#L18)

#### パラメータ

##### object

`T`

#### 戻り値

`T`[]
