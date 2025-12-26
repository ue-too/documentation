[@ue-too/animate](../globals.md) / NumberAnimationHelper

# Class: NumberAnimationHelper

Defined in: [animatable-attribute.ts:130](https://github.com/ue-too/ue-too/blob/aabc0f56e9e83141d0fd935ef6ac3e5fe0af0a61/packages/animate/src/animatable-attribute.ts#L130)

Interface for type-specific interpolation helpers.

## Remarks

Animation helpers provide the `lerp` (linear interpolation) logic for specific types.
Different types require different interpolation strategies:
- Numbers: Simple linear interpolation
- Points: Component-wise interpolation
- Colors (RGB): Component-wise color interpolation
- Strings: Step-based (threshold) interpolation

## Example

```typescript
const myHelper: AnimatableAttributeHelper<number> = {
  lerp: (ratio, start, end) => {
    const t = (ratio - start.percentage) / (end.percentage - start.percentage);
    return start.value + t * (end.value - start.value);
  }
};
```

## Implements

- [`AnimatableAttributeHelper`](../interfaces/AnimatableAttributeHelper.md)\<`number`\>

## Constructors

### Constructor

> **new NumberAnimationHelper**(): `NumberAnimationHelper`

Defined in: [animatable-attribute.ts:132](https://github.com/ue-too/ue-too/blob/aabc0f56e9e83141d0fd935ef6ac3e5fe0af0a61/packages/animate/src/animatable-attribute.ts#L132)

#### Returns

`NumberAnimationHelper`

## Methods

### lerp()

> **lerp**(`ratio`, `start`, `end`): `number`

Defined in: [animatable-attribute.ts:136](https://github.com/ue-too/ue-too/blob/aabc0f56e9e83141d0fd935ef6ac3e5fe0af0a61/packages/animate/src/animatable-attribute.ts#L136)

Interpolates between two keyframes at a given ratio.

#### Parameters

##### ratio

`number`

Current animation progress (0.0 to 1.0)

##### start

[`Keyframe`](../type-aliases/Keyframe.md)\<`number`\>

Starting keyframe

##### end

[`Keyframe`](../type-aliases/Keyframe.md)\<`number`\>

Ending keyframe

#### Returns

`number`

Interpolated value at the given ratio

#### Implementation of

[`AnimatableAttributeHelper`](../interfaces/AnimatableAttributeHelper.md).[`lerp`](../interfaces/AnimatableAttributeHelper.md#lerp)
