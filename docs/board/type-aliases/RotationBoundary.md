[@ue-too/board](../globals.md) / RotationBoundary

# Type Alias: RotationBoundary

> **RotationBoundary** = `object`

Defined in: [packages/board/src/camera/utils/rotation.ts:34](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/board/src/camera/utils/rotation.ts#L34)

Experimental rotation boundary type with positive/negative direction semantics.

## Remarks

This is an experimental alternative to [RotationLimits](RotationLimits.md) with different direction semantics.

## Properties

### end

> **end**: `number`

Defined in: [packages/board/src/camera/utils/rotation.ts:34](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/board/src/camera/utils/rotation.ts#L34)

Ending angle of the boundary in radians

***

### positiveDirection

> **positiveDirection**: `boolean`

Defined in: [packages/board/src/camera/utils/rotation.ts:34](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/board/src/camera/utils/rotation.ts#L34)

If true, range extends in positive angle direction. If false, negative direction

***

### start

> **start**: `number`

Defined in: [packages/board/src/camera/utils/rotation.ts:34](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/board/src/camera/utils/rotation.ts#L34)

Starting angle of the boundary in radians

***

### startAsTieBreaker

> **startAsTieBreaker**: `boolean`

Defined in: [packages/board/src/camera/utils/rotation.ts:34](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/board/src/camera/utils/rotation.ts#L34)

When equidistant from start and end, prefer start if true, end if false
