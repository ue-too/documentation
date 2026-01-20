[@ue-too/board](../globals.md) / PanHandlerClampConfig

# Type Alias: PanHandlerClampConfig

> **PanHandlerClampConfig** = `object`

Defined in: [packages/board/src/camera/camera-rig/pan-handler.ts:47](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/board/src/camera/camera-rig/pan-handler.ts#L47)

Configuration for boundary clamping behavior during camera panning.

## Remarks

Controls how camera position is constrained to stay within defined boundaries.

## Example

```typescript
const config: PanHandlerClampConfig = {
  limitEntireViewPort: true,  // Entire view must stay in bounds
  clampTranslation: true       // Enforce boundaries
};
```

## Properties

### clampTranslation

> **clampTranslation**: `boolean`

Defined in: [packages/board/src/camera/camera-rig/pan-handler.ts:55](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/board/src/camera/camera-rig/pan-handler.ts#L55)

When true, enforces boundary constraints on pan operations.
                             When false, camera can pan freely outside boundaries.

***

### limitEntireViewPort

> **limitEntireViewPort**: `boolean`

Defined in: [packages/board/src/camera/camera-rig/pan-handler.ts:51](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/board/src/camera/camera-rig/pan-handler.ts#L51)

When true, ensures the entire viewport rectangle stays within boundaries.
                                When false, only the camera center point (position) is constrained.
                                This affects how [BoardCamera.boundaries](../interfaces/ObservableBoardCamera.md#boundaries) are interpreted.
