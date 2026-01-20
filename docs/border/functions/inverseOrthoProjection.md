[@ue-too/border](../globals.md) / inverseOrthoProjection

# Function: inverseOrthoProjection()

> **inverseOrthoProjection**(`interestPoint`, `origin`): [`GeoCoord`](../type-aliases/GeoCoord.md)

Defined in: [projection.ts:148](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/border/src/projection.ts#L148)

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
