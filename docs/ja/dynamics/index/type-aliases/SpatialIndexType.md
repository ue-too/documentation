[@ue-too/dynamics](../../modules.md) / [index](../index.md) / SpatialIndexType

# 型エイリアス: SpatialIndexType

> **SpatialIndexType** = `"quadtree"` \| `"dynamictree"` \| `"sap"`

定義: [world.ts:23](https://github.com/ue-too/ue-too/blob/feb7c80222df5d3cd97bfa1933bafe3190c6e48d/packages/dynamics/src/world.ts#L23)

Spatial indexing algorithm types.

## Remarks

Different algorithms have different performance characteristics:
- **quadtree**: Best for static or mostly-static worlds
- **dynamictree**: Good balance for mixed static/dynamic
- **sap**: Best for many dynamic bodies (sweep-and-prune)
