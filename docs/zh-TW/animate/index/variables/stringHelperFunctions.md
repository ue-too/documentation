[@ue-too/animate](../../modules.md) / [index](../index.md) / stringHelperFunctions

# 變數: stringHelperFunctions

> `const` **stringHelperFunctions**: [`AnimatableAttributeHelper`](../interfaces/AnimatableAttributeHelper.md)\<`string`\>

定義於: [animatable-attribute.ts:177](https://github.com/ue-too/ue-too/blob/68da915137a31a45d7ce8043b13275ff7283045d/packages/animate/src/animatable-attribute.ts#L177)

Built-in interpolation helper for animating string values.

## 備註

Uses step-based interpolation with a 50% threshold. Returns start value until
50% progress, then switches to end value. Useful for discrete property changes.
