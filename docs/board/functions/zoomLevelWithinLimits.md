[@ue-too/board](../globals.md) / zoomLevelWithinLimits

# Function: zoomLevelWithinLimits()

> **zoomLevelWithinLimits**(`zoomLevel`, `zoomLevelLimits?`): `boolean`

Defined in: [packages/board/src/camera/utils/zoom.ts:112](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/board/src/camera/utils/zoom.ts#L112)

Checks if a zoom level is within specified limits.

## Parameters

### zoomLevel

`number`

The zoom level to check

### zoomLevelLimits?

[`ZoomLevelLimits`](../type-aliases/ZoomLevelLimits.md)

Optional zoom constraints

## Returns

`boolean`

True if zoom level is valid and within limits, false otherwise

## Remarks

Returns false if:
- Zoom level is ≤ 0 (invalid zoom)
- Zoom level exceeds maximum limit (if defined)
- Zoom level is below minimum limit (if defined)

Returns true if no limits are defined or zoom is within bounds.

## Example

```typescript
const limits = { min: 0.5, max: 4 };

zoomLevelWithinLimits(2.0, limits);   // true
zoomLevelWithinLimits(0.1, limits);   // false (below min)
zoomLevelWithinLimits(10, limits);    // false (above max)
zoomLevelWithinLimits(-1, limits);    // false (negative zoom)
zoomLevelWithinLimits(0, limits);     // false (zero zoom)
zoomLevelWithinLimits(2.0);           // true (no limits)
```
