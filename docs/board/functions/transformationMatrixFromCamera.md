[@ue-too/board](../globals.md) / transformationMatrixFromCamera

# Function: transformationMatrixFromCamera()

> **transformationMatrixFromCamera**(`cameraPosition`, `cameraZoomLevel`, `cameraRotation`): [`TransformationMatrix`](../type-aliases/TransformationMatrix.md)

Defined in: [packages/board/src/camera/utils/coordinate-conversion.ts:378](https://github.com/ue-too/ue-too/blob/1055c6abca1ea3a0e952b0825f36e0ca2527df85/packages/board/src/camera/utils/coordinate-conversion.ts#L378)

Creates a transformation matrix from camera parameters.
Combines position, zoom, and rotation into a single transform.

## Parameters

### cameraPosition

`Point`

Camera position in world coordinates

### cameraZoomLevel

`number`

Camera zoom level

### cameraRotation

`number`

Camera rotation in radians

## Returns

[`TransformationMatrix`](../type-aliases/TransformationMatrix.md)

Transformation matrix for viewport-to-world conversion

## Remarks

The resulting matrix can be used with [convert2WorldSpaceWithTransformationMatrix](convert2WorldSpaceWithTransformationMatrix.md)
for efficient batch transformations when camera state doesn't change.

Matrix composition order: Translation → Rotation → Scale(1/zoom)
