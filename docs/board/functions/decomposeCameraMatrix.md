[@ue-too/board](../globals.md) / decomposeCameraMatrix

# Function: decomposeCameraMatrix()

> **decomposeCameraMatrix**(`transformMatrix`, `devicePixelRatio`, `canvasWidth`, `canvasHeight`): `object`

Defined in: [packages/board/src/camera/utils/matrix.ts:34](https://github.com/ue-too/ue-too/blob/e0ad36978d99a0fba62213691fb721d4dca7c035/packages/board/src/camera/utils/matrix.ts#L34)

Decomposes a camera transformation matrix back to camera parameters

Transformation order:
1. Scale by device pixel ratio
2. Translate to canvas center
3. Rotate by -camera.rotation
4. Scale by zoom level
5. Translate by -camera.position

Final matrix: M = S1 * T1 * R * S2 * T2

## Parameters

### transformMatrix

[`TransformationMatrix`](../type-aliases/TransformationMatrix.md)

### devicePixelRatio

`number`

### canvasWidth

`number`

### canvasHeight

`number`

## Returns

`object`

### position

> **position**: `object`

#### position.x

> **x**: `number` = `cameraX`

#### position.y

> **y**: `number` = `cameraY`

### rotation

> **rotation**: `number`

### zoom

> **zoom**: `number`
