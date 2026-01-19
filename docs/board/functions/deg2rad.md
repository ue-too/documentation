[@ue-too/board](../globals.md) / deg2rad

# Function: deg2rad()

> **deg2rad**(`deg`): `number`

Defined in: [packages/board/src/camera/utils/rotation.ts:254](https://github.com/ue-too/ue-too/blob/1055c6abca1ea3a0e952b0825f36e0ca2527df85/packages/board/src/camera/utils/rotation.ts#L254)

Converts degrees to radians.

## Parameters

### deg

`number`

Angle in degrees

## Returns

`number`

Equivalent angle in radians

## Example

```typescript
deg2rad(0);     // 0
deg2rad(90);    // π/2
deg2rad(180);   // π
deg2rad(360);   // 2π
deg2rad(-45);   // -π/4
```
