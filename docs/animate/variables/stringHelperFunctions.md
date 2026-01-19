[@ue-too/animate](../globals.md) / stringHelperFunctions

# Variable: stringHelperFunctions

> `const` **stringHelperFunctions**: [`AnimatableAttributeHelper`](../interfaces/AnimatableAttributeHelper.md)\<`string`\>

Defined in: [animatable-attribute.ts:156](https://github.com/ue-too/ue-too/blob/1055c6abca1ea3a0e952b0825f36e0ca2527df85/packages/animate/src/animatable-attribute.ts#L156)

Built-in interpolation helper for animating string values.

## Remarks

Uses step-based interpolation with a 50% threshold. Returns start value until
50% progress, then switches to end value. Useful for discrete property changes.
