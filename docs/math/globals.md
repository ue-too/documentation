# @ue-too/math v0.14.0

Mathematical utilities for 2D and 3D point operations, vector calculations, and transformations.

## Remarks

This package provides essential mathematical operations for canvas applications including:
- Vector arithmetic (add, subtract, multiply, divide)
- Vector operations (dot product, cross product, magnitude, unit vectors)
- Geometric transformations (rotation, axis transformation)
- Angle calculations and normalization
- Point comparisons and interpolation
- Line intersection detection

All operations support both 2D and 3D coordinates, with the z-axis being optional.

## Examples

Basic vector operations
```typescript
import { PointCal, Point } from '@ue-too/math';

const a: Point = { x: 1, y: 2 };
const b: Point = { x: 3, y: 4 };

// Add vectors
const sum = PointCal.addVector(a, b); // { x: 4, y: 6 }

// Calculate magnitude
const mag = PointCal.magnitude(a); // 2.236...

// Get unit vector
const unit = PointCal.unitVector(a); // { x: 0.447..., y: 0.894... }
```

Rotation and transformation
```typescript
import { PointCal, Point } from '@ue-too/math';

const point: Point = { x: 10, y: 0 };
const angle = Math.PI / 2; // 90 degrees

// Rotate point around origin
const rotated = PointCal.rotatePoint(point, angle); // { x: 0, y: 10 }

// Rotate around a custom anchor
const anchor: Point = { x: 5, y: 5 };
const rotatedAroundAnchor = PointCal.transformPointWRTAnchor(point, anchor, angle);
```

## Comparison

- [approximatelyTheSame](functions/approximatelyTheSame.md)
- [directionAlignedToTangent](functions/directionAlignedToTangent.md)
- [sameDirection](functions/sameDirection.md)
- [samePoint](functions/samePoint.md)

## Angle

- [angleSpan](functions/angleSpan.md)
- [normalizeAngleZero2TwoPI](functions/normalizeAngleZero2TwoPI.md)

## Other

- [PointCal](classes/PointCal.md)
- [~~point~~](type-aliases/point.md)
- [Point](type-aliases/Point-1.md)
