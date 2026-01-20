[@ue-too/board](../globals.md) / rad2deg

# Function: rad2deg()

> **rad2deg**(`rad`): `number`

Defined in: [packages/board/src/camera/utils/rotation.ts:275](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/board/src/camera/utils/rotation.ts#L275)

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
