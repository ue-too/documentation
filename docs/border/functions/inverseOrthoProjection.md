[@ue-too/border](../globals.md) / inverseOrthoProjection

# Function: inverseOrthoProjection()

> **inverseOrthoProjection**(`interestPoint`, `origin`): [`GeoCoord`](../type-aliases/GeoCoord.md)

Defined in: [projection.ts:148](https://github.com/ue-too/ue-too/blob/aabc0f56e9e83141d0fd935ef6ac3e5fe0af0a61/packages/border/src/projection.ts#L148)

Converts an orthographic projection point back to geographic coordinates.

## Parameters

### interestPoint

`Point`

The point in orthographic projection (in meters)

### origin

[`GeoCoord`](../type-aliases/GeoCoord.md)

The center point of the hemisphere (must match the forward projection)

## Returns

[`GeoCoord`](../type-aliases/GeoCoord.md)

The geographic coordinate

## Remarks

This is the inverse of [orthoProjection](orthoProjection.md). Given a point in orthographic
projection space (in meters), it returns the corresponding latitude/longitude.

## Example

```typescript
const origin = { latitude: 45.0, longitude: 0.0 };
const point = { x: 100000, y: 200000 }; // Some point in projection space
const coord = inverseOrthoProjection(point, origin);
console.log(coord); // { latitude: ..., longitude: ... }
```
