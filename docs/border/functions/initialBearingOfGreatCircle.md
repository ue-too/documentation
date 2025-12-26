[@ue-too/border](../globals.md) / initialBearingOfGreatCircle

# Function: initialBearingOfGreatCircle()

> **initialBearingOfGreatCircle**(`startCoord`, `endCoord`): `number`

Defined in: [greateCircle.ts:103](https://github.com/ue-too/ue-too/blob/e468a9961da59c81663192ec8df16ebc8e17abac/packages/border/src/greateCircle.ts#L103)

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
