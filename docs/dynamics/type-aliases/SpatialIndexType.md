[@ue-too/dynamics](../globals.md) / SpatialIndexType

# Type Alias: SpatialIndexType

> **SpatialIndexType** = `"quadtree"` \| `"dynamictree"` \| `"sap"`

Defined in: [world.ts:22](https://github.com/ue-too/ue-too/blob/e468a9961da59c81663192ec8df16ebc8e17abac/packages/dynamics/src/world.ts#L22)

Spatial indexing algorithm types.

## Remarks

Different algorithms have different performance characteristics:
- **quadtree**: Best for static or mostly-static worlds
- **dynamictree**: Good balance for mixed static/dynamic
- **sap**: Best for many dynamic bodies (sweep-and-prune)
