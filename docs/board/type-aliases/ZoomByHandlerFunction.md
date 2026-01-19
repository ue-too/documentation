[@ue-too/board](../globals.md) / ZoomByHandlerFunction

# Type Alias: ZoomByHandlerFunction()

> **ZoomByHandlerFunction** = (`delta`, `camera`, `config`) => `number`

Defined in: [packages/board/src/camera/camera-rig/zoom-handler.ts:156](https://github.com/ue-too/ue-too/blob/1055c6abca1ea3a0e952b0825f36e0ca2527df85/packages/board/src/camera/camera-rig/zoom-handler.ts#L156)

Handler function type for relative "zoom by" camera operations.

## Parameters

### delta

`number`

Zoom level change (added to current zoom)

### camera

[`BoardCamera`](../interfaces/BoardCamera.md)

Current camera instance

### config

[`ZoomHandlerConfig`](ZoomHandlerConfig.md)

Zoom behavior configuration

## Returns

`number`

Transformed zoom delta (after applying restrictions and clamping)

## Remarks

Zoom-by handlers process relative zoom change requests. They form a pipeline
that can apply restrictions, clamping, and other transformations to the delta.

Handler pipeline pattern:
- Each handler receives the zoom delta, camera state, and config
- Returns a potentially modified delta
- Handlers can be chained using [createHandlerChain](../functions/createHandlerChain.md)

Common transformations:
- Boundary clamping (prevent exceeding min/max zoom)
- Zoom locking (return zero delta)
- Delta dampening or acceleration

## Example

```typescript
const myZoomByHandler: ZoomByHandlerFunction = (delta, camera, config) => {
  // Custom logic: dampen large zoom changes
  if (Math.abs(delta) > 1.0) {
    return delta * 0.5;  // 50% dampening
  }
  return delta;
};
```

## See

 - [createHandlerChain](../functions/createHandlerChain.md) for composing handler pipelines
 - [createDefaultZoomByOnlyHandler](../functions/createDefaultZoomByOnlyHandler.md) for the default implementation
