[@ue-too/board](../globals.md) / isValidZoomLevelLimits

# Function: isValidZoomLevelLimits()

> **isValidZoomLevelLimits**(`zoomLevelLimits`): `boolean`

Defined in: [packages/board/src/camera/utils/zoom.ts:37](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/board/src/camera/utils/zoom.ts#L37)

Validates that zoom level limits are logically consistent.

## Parameters

### zoomLevelLimits

The zoom limits to validate

[`ZoomLevelLimits`](../type-aliases/ZoomLevelLimits.md) | `undefined`

## Returns

`boolean`

True if limits are valid or undefined, false if min > max

## Remarks

Returns true if:
- Limits are undefined (no constraints)
- Only min or max is defined
- Both are defined and min ≤ max

## Example

```typescript
isValidZoomLevelLimits({ min: 0.5, max: 5 });    // true
isValidZoomLevelLimits({ min: 5, max: 0.5 });    // false
isValidZoomLevelLimits({ min: 0.5 });            // true
isValidZoomLevelLimits(undefined);               // true
```
