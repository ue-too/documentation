[@ue-too/board](../globals.md) / PanByHandlerFunction

# Type Alias: PanByHandlerFunction()

> **PanByHandlerFunction** = (`delta`, `camera`, `config`) => `Point`

Defined in: [packages/board/src/camera/camera-rig/pan-handler.ts:199](https://github.com/ue-too/ue-too/blob/1055c6abca1ea3a0e952b0825f36e0ca2527df85/packages/board/src/camera/camera-rig/pan-handler.ts#L199)

Handler function type for relative "pan by" camera operations.

## Parameters

### delta

`Point`

Movement delta in world space

### camera

[`BoardCamera`](../interfaces/BoardCamera.md)

Current camera instance

### config

[`PanHandlerConfig`](PanHandlerConfig.md)

Pan behavior configuration

## Returns

`Point`

Transformed movement delta (after applying restrictions and clamping)

## Remarks

Pan-by handlers process relative camera movement requests. They form a pipeline
that can apply restrictions, clamping, and other transformations to the movement delta.

Handler pipeline pattern:
- Each handler receives the current delta, camera state, and config
- Returns a potentially modified delta
- Handlers can be chained using [createHandlerChain](../functions/createHandlerChain.md)

Common transformations:
- Axis restrictions (prevent movement on specific axes)
- Boundary clamping (prevent moving outside bounds)
- Delta dampening or acceleration

## Example

```typescript
const myPanByHandler: PanByHandlerFunction = (delta, camera, config) => {
  // Custom logic: dampen large movements
  const magnitude = Math.sqrt(delta.x ** 2 + delta.y ** 2);
  if (magnitude > 100) {
    const scale = 100 / magnitude;
    return { x: delta.x * scale, y: delta.y * scale };
  }
  return delta;
};
```

## See

 - [createHandlerChain](../functions/createHandlerChain.md) for composing handler pipelines
 - [createDefaultPanByHandler](../functions/createDefaultPanByHandler.md) for the default implementation
