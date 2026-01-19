[@ue-too/board](../globals.md) / RotationBoundary

# Type Alias: RotationBoundary

> **RotationBoundary** = `object`

Defined in: [packages/board/src/camera/utils/rotation.ts:34](https://github.com/ue-too/ue-too/blob/1055c6abca1ea3a0e952b0825f36e0ca2527df85/packages/board/src/camera/utils/rotation.ts#L34)

Experimental rotation boundary type with positive/negative direction semantics.

## Remarks

This is an experimental alternative to [RotationLimits](RotationLimits.md) with different direction semantics.

## Properties

### end

> **end**: `number`

Defined in: [packages/board/src/camera/utils/rotation.ts:34](https://github.com/ue-too/ue-too/blob/1055c6abca1ea3a0e952b0825f36e0ca2527df85/packages/board/src/camera/utils/rotation.ts#L34)

Ending angle of the boundary in radians

***

### positiveDirection

> **positiveDirection**: `boolean`

Defined in: [packages/board/src/camera/utils/rotation.ts:34](https://github.com/ue-too/ue-too/blob/1055c6abca1ea3a0e952b0825f36e0ca2527df85/packages/board/src/camera/utils/rotation.ts#L34)

If true, range extends in positive angle direction. If false, negative direction

***

### start

> **start**: `number`

Defined in: [packages/board/src/camera/utils/rotation.ts:34](https://github.com/ue-too/ue-too/blob/1055c6abca1ea3a0e952b0825f36e0ca2527df85/packages/board/src/camera/utils/rotation.ts#L34)

Starting angle of the boundary in radians

***

### startAsTieBreaker

> **startAsTieBreaker**: `boolean`

Defined in: [packages/board/src/camera/utils/rotation.ts:34](https://github.com/ue-too/ue-too/blob/1055c6abca1ea3a0e952b0825f36e0ca2527df85/packages/board/src/camera/utils/rotation.ts#L34)

When equidistant from start and end, prefer start if true, end if false
