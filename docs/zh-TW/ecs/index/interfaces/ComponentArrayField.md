[@ue-too/ecs](../../modules.md) / [index](../index.md) / ComponentArrayField

# 介面: ComponentArrayField

定義於: [index.ts:188](https://github.com/ue-too/ue-too/blob/7d57cce875ed7b8a4f4ee4e325a18e34159928f6/packages/ecs/src/index.ts#L188)

Definition for an array field in a component schema.

## Extends

- `BaseComponentField`

## 屬性

### arrayElementType

> **arrayElementType**: [`ArrayElementType`](../type-aliases/ArrayElementType.md)

定義於: [index.ts:196](https://github.com/ue-too/ue-too/blob/7d57cce875ed7b8a4f4ee4e325a18e34159928f6/packages/ecs/src/index.ts#L196)

The element type for array fields (required).
Specifies what type each element in the array should be.
Can be a built-in type or a custom component type name.

***

### defaultValue?

> `optional` **defaultValue**: `unknown`

定義於: [index.ts:172](https://github.com/ue-too/ue-too/blob/7d57cce875ed7b8a4f4ee4e325a18e34159928f6/packages/ecs/src/index.ts#L172)

Default value for the field (used when creating new instances)

#### 繼承自

`BaseComponentField.defaultValue`

***

### name

> **name**: `string`

定義於: [index.ts:168](https://github.com/ue-too/ue-too/blob/7d57cce875ed7b8a4f4ee4e325a18e34159928f6/packages/ecs/src/index.ts#L168)

The name of the field

#### 繼承自

`BaseComponentField.name`

***

### optional?

> `optional` **optional**: `boolean`

定義於: [index.ts:170](https://github.com/ue-too/ue-too/blob/7d57cce875ed7b8a4f4ee4e325a18e34159928f6/packages/ecs/src/index.ts#L170)

Whether the field is optional (default: false)

#### 繼承自

`BaseComponentField.optional`

***

### type

> **type**: `"array"`

定義於: [index.ts:190](https://github.com/ue-too/ue-too/blob/7d57cce875ed7b8a4f4ee4e325a18e34159928f6/packages/ecs/src/index.ts#L190)

Discriminator for the union type
