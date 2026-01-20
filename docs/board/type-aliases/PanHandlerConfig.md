[@ue-too/board](../globals.md) / PanHandlerConfig

# Type Alias: PanHandlerConfig

> **PanHandlerConfig** = [`PanHandlerRestrictionConfig`](PanHandlerRestrictionConfig.md) & [`PanHandlerClampConfig`](PanHandlerClampConfig.md)

Defined in: [packages/board/src/camera/camera-rig/pan-handler.ts:22](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/board/src/camera/camera-rig/pan-handler.ts#L22)

Combined configuration for pan handler behavior, merging restriction and clamping settings.

## Remarks

This type combines [PanHandlerRestrictionConfig](PanHandlerRestrictionConfig.md) and [PanHandlerClampConfig](PanHandlerClampConfig.md)
to provide complete control over camera panning behavior.

Pan handlers use this configuration to:
- Restrict movement along specific axes (world or viewport-relative)
- Clamp camera position to stay within boundaries
- Control whether entire viewport or just center must stay in bounds

## See

 - [PanHandlerRestrictionConfig](PanHandlerRestrictionConfig.md) for movement restriction options
 - [PanHandlerClampConfig](PanHandlerClampConfig.md) for boundary clamping options
