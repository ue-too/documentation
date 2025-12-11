[@ue-too/board](../globals.md) / decomposeTRS

# Function: decomposeTRS()

> **decomposeTRS**(`matrix`): `object`

Defined in: [packages/board/src/camera/utils/matrix.ts:237](https://github.com/ue-too/ue-too/blob/c02efc01f7c19f3efc21823d0489e987a3e92427/packages/board/src/camera/utils/matrix.ts#L237)

Decomposes a 2D transformation matrix into Translation, Rotation, and Scale (TRS)

## Parameters

### matrix

[`TransformationMatrix`](../type-aliases/TransformationMatrix.md)

The transformation matrix to decompose

## Returns

`object`

Object containing translation, rotation (in radians), and scale components

### rotation

> **rotation**: `number`

### scale

> **scale**: `object`

#### scale.x

> **x**: `number`

#### scale.y

> **y**: `number`

### translation

> **translation**: `object`

#### translation.x

> **x**: `number`

#### translation.y

> **y**: `number`
