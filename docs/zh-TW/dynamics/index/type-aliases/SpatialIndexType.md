[@ue-too/dynamics](../../modules.md) / [index](../index.md) / SpatialIndexType

# 型別別名: SpatialIndexType

> **SpatialIndexType** = `"quadtree"` \| `"dynamictree"` \| `"sap"`

定義於: [world.ts:23](https://github.com/ue-too/ue-too/blob/9b787448328cf446379b1ea4cc5f4c79149cbec8/packages/dynamics/src/world.ts#L23)

Spatial indexing algorithm types.

## 備註

Different algorithms have different performance characteristics:
- **quadtree**: Best for static or mostly-static worlds
- **dynamictree**: Good balance for mixed static/dynamic
- **sap**: Best for many dynamic bodies (sweep-and-prune)
