[@ue-too/border](../globals.md) / inverseMercatorProjection

# Function: inverseMercatorProjection()

> **inverseMercatorProjection**(`point`, `centerLongitude`): [`GeoCoord`](../type-aliases/GeoCoord.md)

Defined in: [projection.ts:78](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/border/src/projection.ts#L78)

Converts a Mercator projection point back to geographic coordinates.

## Parameters

### point

`Point`

The point in Mercator projection (in meters)

### centerLongitude

`number` = `0`

The central meridian in degrees (must match the forward projection)

## Returns

[`GeoCoord`](../type-aliases/GeoCoord.md)

The geographic coordinate

## Remarks

This is the inverse of [mercatorProjection](mercatorProjection.md). Given a point in Mercator
projection space (in meters), it returns the corresponding latitude/longitude.

## Example

```typescript
const point = { x: -14232.4, y: 6711665.7 };
const coord = inverseMercatorProjection(point);
console.log(coord); // { latitude: ~51.5, longitude: ~-0.13 }
```
