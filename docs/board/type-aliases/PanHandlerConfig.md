[@ue-too/board](../globals.md) / PanHandlerConfig

# Type Alias: PanHandlerConfig

> **PanHandlerConfig** = [`PanHandlerRestrictionConfig`](PanHandlerRestrictionConfig.md) & [`PanHandlerClampConfig`](PanHandlerClampConfig.md)

Defined in: [packages/board/src/camera/camera-rig/pan-handler.ts:22](https://github.com/ue-too/ue-too/blob/1055c6abca1ea3a0e952b0825f36e0ca2527df85/packages/board/src/camera/camera-rig/pan-handler.ts#L22)

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
