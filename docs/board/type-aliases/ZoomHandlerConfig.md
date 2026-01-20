[@ue-too/board](../globals.md) / ZoomHandlerConfig

# Type Alias: ZoomHandlerConfig

> **ZoomHandlerConfig** = [`ZoomHandlerClampConfig`](ZoomHandlerClampConfig.md) & [`ZoomHandlerRestrictConfig`](ZoomHandlerRestrictConfig.md)

Defined in: [packages/board/src/camera/camera-rig/zoom-handler.ts:20](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/board/src/camera/camera-rig/zoom-handler.ts#L20)

Combined configuration for zoom handler behavior, merging restriction and clamping settings.

## Remarks

This type combines [ZoomHandlerClampConfig](ZoomHandlerClampConfig.md) and [ZoomHandlerRestrictConfig](ZoomHandlerRestrictConfig.md)
to provide complete control over camera zoom behavior.

Zoom handlers use this configuration to:
- Completely disable zoom operations (restriction)
- Clamp zoom level to stay within defined limits (min/max bounds)

## See

 - [ZoomHandlerClampConfig](ZoomHandlerClampConfig.md) for boundary clamping options
 - [ZoomHandlerRestrictConfig](ZoomHandlerRestrictConfig.md) for zoom disabling options
