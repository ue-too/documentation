[@ue-too/board](../../modules.md) / [index](../index.md) / decomposeTRS

# 函式: decomposeTRS()

> **decomposeTRS**(`matrix`): `object`

定義於: [packages/board/src/camera/utils/matrix.ts:439](https://github.com/ue-too/ue-too/blob/68da915137a31a45d7ce8043b13275ff7283045d/packages/board/src/camera/utils/matrix.ts#L439)

Decomposes a 2D transformation matrix into Translation, Rotation, and Scale (TRS)

## 參數

### matrix

[`TransformationMatrix`](../type-aliases/TransformationMatrix.md)

The transformation matrix to decompose

## 回傳

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
