[@ue-too/border](../../modules.md) / [index](../index.md) / midPointOnRhumbLine

# 関数: midPointOnRhumbLine()

> **midPointOnRhumbLine**(`startCoord`, `endCoord`): [`GeoCoord`](../type-aliases/GeoCoord.md)

定義: [rhumbLine.ts:179](https://github.com/ue-too/ue-too/blob/79a36cf61d861e6b4e3302e81111636c6082a3db/packages/border/src/rhumbLine.ts#L179)

Calculates the midpoint along a rhumb line.

## パラメータ

### startCoord

[`GeoCoord`](../type-aliases/GeoCoord.md)

The starting geographic coordinate

### endCoord

[`GeoCoord`](../type-aliases/GeoCoord.md)

The ending geographic coordinate

## 戻り値

[`GeoCoord`](../type-aliases/GeoCoord.md)

The midpoint on the rhumb line path

## Remarks

Finds the point exactly halfway along a rhumb line path between two points.

## 例

```typescript
const start = { latitude: 50.0, longitude: -5.0 };
const end = { latitude: 58.0, longitude: 3.0 };

const mid = midPointOnRhumbLine(start, end);
console.log('Midpoint:', mid);
```
