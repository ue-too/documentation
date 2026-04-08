[@ue-too/board](../../modules.md) / [index](../index.md) / decomposeTRS

# 関数: decomposeTRS()

> **decomposeTRS**(`matrix`): `object`

定義: [packages/board/src/camera/utils/matrix.ts:439](https://github.com/ue-too/ue-too/blob/feb7c80222df5d3cd97bfa1933bafe3190c6e48d/packages/board/src/camera/utils/matrix.ts#L439)

Decomposes a 2D transformation matrix into Translation, Rotation, and Scale (TRS)

## パラメータ

### matrix

[`TransformationMatrix`](../type-aliases/TransformationMatrix.md)

The transformation matrix to decompose

## 戻り値

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
