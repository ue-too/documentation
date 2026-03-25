[@ue-too/border](../../modules.md) / [index](../index.md) / midPointOnRhumbLine

# Function: midPointOnRhumbLine()

> **midPointOnRhumbLine**(`startCoord`, `endCoord`): [`GeoCoord`](../type-aliases/GeoCoord.md)

Defined in: [rhumbLine.ts:179](https://github.com/ue-too/ue-too/blob/9b787448328cf446379b1ea4cc5f4c79149cbec8/packages/border/src/rhumbLine.ts#L179)

Calculates the midpoint along a rhumb line.

## Parameters

### startCoord

[`GeoCoord`](../type-aliases/GeoCoord.md)

The starting geographic coordinate

### endCoord

[`GeoCoord`](../type-aliases/GeoCoord.md)

The ending geographic coordinate

## Returns

[`GeoCoord`](../type-aliases/GeoCoord.md)

The midpoint on the rhumb line path

## Remarks

Finds the point exactly halfway along a rhumb line path between two points.

## Example

```typescript
const start = { latitude: 50.0, longitude: -5.0 };
const end = { latitude: 58.0, longitude: 3.0 };

const mid = midPointOnRhumbLine(start, end);
console.log('Midpoint:', mid);
```
