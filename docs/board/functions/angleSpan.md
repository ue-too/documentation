[@ue-too/board](../globals.md) / angleSpan

# Function: angleSpan()

> **angleSpan**(`from`, `to`): `number`

Defined in: [packages/board/src/camera/utils/rotation.ts:221](https://github.com/ue-too/ue-too/blob/1055c6abca1ea3a0e952b0825f36e0ca2527df85/packages/board/src/camera/utils/rotation.ts#L221)

Calculates the signed angular distance between two angles, taking the shorter path.

## Parameters

### from

`number`

Starting angle in radians

### to

`number`

Target angle in radians

## Returns

`number`

Signed angular difference in radians, in the range (-π, π]

## Remarks

Returns the shortest angular path from `from` to `to`:
- Positive value: rotate counter-clockwise (positive direction)
- Negative value: rotate clockwise (negative direction)
- Always returns the smaller of the two possible paths

## Example

```typescript
angleSpan(0, Math.PI/2);        // π/2 (90° ccw)
angleSpan(Math.PI/2, 0);        // -π/2 (90° cw)
angleSpan(0, 3*Math.PI/2);      // -π/2 (shorter to go cw)
angleSpan(3*Math.PI/2, 0);      // π/2 (shorter to go ccw)
angleSpan(0, Math.PI);          // π (180°, ambiguous)
```
