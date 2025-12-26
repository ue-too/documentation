[@ue-too/math](../globals.md) / Point

# Type Alias: Point

> **Point** = `object`

Defined in: [index.ts:85](https://github.com/ue-too/ue-too/blob/aabc0f56e9e83141d0fd935ef6ac3e5fe0af0a61/packages/math/src/index.ts#L85)

Represents a 2D or 3D point with optional z-coordinate.

## Remarks

When z is undefined, operations treat the point as 2D (z = 0).
This type is used throughout the library for all point and vector operations.

## Example

```typescript
// 2D point
const p2d: Point = { x: 10, y: 20 };

// 3D point
const p3d: Point = { x: 10, y: 20, z: 30 };
```

## Properties

### x

> **x**: `number`

Defined in: [index.ts:87](https://github.com/ue-too/ue-too/blob/aabc0f56e9e83141d0fd935ef6ac3e5fe0af0a61/packages/math/src/index.ts#L87)

X-coordinate

***

### y

> **y**: `number`

Defined in: [index.ts:89](https://github.com/ue-too/ue-too/blob/aabc0f56e9e83141d0fd935ef6ac3e5fe0af0a61/packages/math/src/index.ts#L89)

Y-coordinate

***

### z?

> `optional` **z**: `number`

Defined in: [index.ts:91](https://github.com/ue-too/ue-too/blob/aabc0f56e9e83141d0fd935ef6ac3e5fe0af0a61/packages/math/src/index.ts#L91)

Optional Z-coordinate for 3D operations
