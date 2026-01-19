[@ue-too/border](../globals.md) / initialBearingOfGreatCircle

# Function: initialBearingOfGreatCircle()

> **initialBearingOfGreatCircle**(`startCoord`, `endCoord`): `number`

Defined in: [greateCircle.ts:103](https://github.com/ue-too/ue-too/blob/1055c6abca1ea3a0e952b0825f36e0ca2527df85/packages/border/src/greateCircle.ts#L103)

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
