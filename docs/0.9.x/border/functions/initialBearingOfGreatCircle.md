[@ue-too/border](../globals.md) / initialBearingOfGreatCircle

# Function: initialBearingOfGreatCircle()

> **initialBearingOfGreatCircle**(`startCoord`, `endCoord`): `number`

Defined in: [greateCircle.ts:54](https://github.com/ue-too/ue-too/blob/fdbfb1431206f8d7c812dca3e1d0dcd7389f1d6d/packages/border/src/greateCircle.ts#L54)

Calculate the initial bearing between two points on the Earth's surface. 
(traveling along the great circle would result in different bearing from the start point to the end point)

## Parameters

### startCoord

[`GeoCoord`](../type-aliases/GeoCoord.md)

The starting point in GeoCoord format.

### endCoord

[`GeoCoord`](../type-aliases/GeoCoord.md)

The ending point in GeoCoord format.

## Returns

`number`

The bearing in degrees.
