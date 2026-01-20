[@ue-too/dynamics](../globals.md) / SpatialIndexType

# Type Alias: SpatialIndexType

> **SpatialIndexType** = `"quadtree"` \| `"dynamictree"` \| `"sap"`

Defined in: [world.ts:22](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/dynamics/src/world.ts#L22)

Spatial indexing algorithm types.

## Remarks

Different algorithms have different performance characteristics:
- **quadtree**: Best for static or mostly-static worlds
- **dynamictree**: Good balance for mixed static/dynamic
- **sap**: Best for many dynamic bodies (sweep-and-prune)
