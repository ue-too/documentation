[@ue-too/board](../globals.md) / decomposeTRSSVD

# Function: decomposeTRSSVD()

> **decomposeTRSSVD**(`matrix`): `object`

Defined in: [packages/board/src/camera/utils/matrix.ts:332](https://github.com/ue-too/ue-too/blob/c02efc01f7c19f3efc21823d0489e987a3e92427/packages/board/src/camera/utils/matrix.ts#L332)

Decomposes a matrix using SVD (Singular Value Decomposition) approach
This is an alternative method that can handle more complex transformations

## Parameters

### matrix

[`TransformationMatrix`](../type-aliases/TransformationMatrix.md)

The transformation matrix to decompose

## Returns

`object`

Object containing translation, rotation, and scale components

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
