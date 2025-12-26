[@ue-too/board](../globals.md) / rad2deg

# Function: rad2deg()

> **rad2deg**(`rad`): `number`

Defined in: [packages/board/src/camera/utils/rotation.ts:275](https://github.com/ue-too/ue-too/blob/aabc0f56e9e83141d0fd935ef6ac3e5fe0af0a61/packages/board/src/camera/utils/rotation.ts#L275)

Converts radians to degrees.

## Parameters

### rad

`number`

Angle in radians

## Returns

`number`

Equivalent angle in degrees

## Example

```typescript
rad2deg(0);             // 0
rad2deg(Math.PI/2);     // 90
rad2deg(Math.PI);       // 180
rad2deg(2 * Math.PI);   // 360
rad2deg(-Math.PI/4);    // -45
```
