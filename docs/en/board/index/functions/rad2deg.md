[@ue-too/board](../../modules.md) / [index](../index.md) / rad2deg

# Function: rad2deg()

> **rad2deg**(`rad`): `number`

Defined in: [packages/board/src/camera/utils/rotation.ts:328](https://github.com/ue-too/ue-too/blob/feb7c80222df5d3cd97bfa1933bafe3190c6e48d/packages/board/src/camera/utils/rotation.ts#L328)

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
