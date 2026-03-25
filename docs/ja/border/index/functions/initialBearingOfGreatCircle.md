[@ue-too/border](../../modules.md) / [index](../index.md) / initialBearingOfGreatCircle

# 関数: initialBearingOfGreatCircle()

> **initialBearingOfGreatCircle**(`startCoord`, `endCoord`): `number`

定義: [greateCircle.ts:112](https://github.com/ue-too/ue-too/blob/9b787448328cf446379b1ea4cc5f4c79149cbec8/packages/border/src/greateCircle.ts#L112)

Calculate the initial bearing between two points on the Earth's surface.
(traveling along the great circle would result in different bearing from the start point to the end point)

## パラメータ

### startCoord

[`GeoCoord`](../type-aliases/GeoCoord.md)

The starting point in GeoCoord format.

### endCoord

[`GeoCoord`](../type-aliases/GeoCoord.md)

The ending point in GeoCoord format.

## 戻り値

`number`

The bearing in degrees.
