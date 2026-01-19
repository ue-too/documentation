[@ue-too/border](../globals.md) / destinationFromOriginOnRhumbLine

# Function: destinationFromOriginOnRhumbLine()

> **destinationFromOriginOnRhumbLine**(`startCoord`, `bearing`, `distance`): [`GeoCoord`](../type-aliases/GeoCoord.md)

Defined in: [rhumbLine.ts:122](https://github.com/ue-too/ue-too/blob/1055c6abca1ea3a0e952b0825f36e0ca2527df85/packages/border/src/rhumbLine.ts#L122)

Calculates the destination point given a start point, constant bearing, and distance on a rhumb line.

## Parameters

### startCoord

[`GeoCoord`](../type-aliases/GeoCoord.md)

The starting geographic coordinate

### bearing

`number`

The constant bearing in degrees (0 = north, 90 = east, etc.)

### distance

`number`

The distance to travel in meters

## Returns

[`GeoCoord`](../type-aliases/GeoCoord.md)

The destination coordinate

## Remarks

Starting from a given point and traveling at a constant bearing for a given
distance, this calculates where you'll end up. The bearing remains constant
throughout the journey.

This is the rhumb line equivalent of [destinationFromOriginOnGreatCircle](destinationFromOriginOnGreatCircle.md).

## Example

```typescript
const start = { latitude: 40.0, longitude: -74.0 };

// Travel 500km on constant bearing of 45 degrees (northeast)
const destination = destinationFromOriginOnRhumbLine(start, 45, 500000);
console.log('Destination:', destination);
```
