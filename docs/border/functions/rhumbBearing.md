[@ue-too/border](../globals.md) / rhumbBearing

# Function: rhumbBearing()

> **rhumbBearing**(`startCoord`, `endCoord`): `number`

Defined in: [rhumbLine.ts:83](https://github.com/ue-too/ue-too/blob/aabc0f56e9e83141d0fd935ef6ac3e5fe0af0a61/packages/border/src/rhumbLine.ts#L83)

Calculates the constant bearing along a rhumb line.

## Parameters

### startCoord

[`GeoCoord`](../type-aliases/GeoCoord.md)

The starting geographic coordinate

### endCoord

[`GeoCoord`](../type-aliases/GeoCoord.md)

The ending geographic coordinate

## Returns

`number`

The constant bearing in degrees (0-360)

## Remarks

Unlike great circles where the bearing changes along the path, rhumb lines
maintain a constant bearing. This makes them simpler for navigation - you can
follow a single compass direction.

## Example

```typescript
const start = { latitude: 50.0, longitude: -5.0 };
const end = { latitude: 58.0, longitude: 3.0 };

const bearing = rhumbBearing(start, end);
console.log('Constant bearing:', bearing, 'degrees');

// This bearing stays constant along the entire path
```
