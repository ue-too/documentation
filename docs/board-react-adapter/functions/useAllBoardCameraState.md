[@ue-too/board-react-adapter](../globals.md) / useAllBoardCameraState

# Function: useAllBoardCameraState()

> **useAllBoardCameraState**(): `object`

Defined in: [hooks/useBoardify.tsx:201](https://github.com/ue-too/ue-too/blob/1055c6abca1ea3a0e952b0825f36e0ca2527df85/packages/board-react-adapter/src/hooks/useBoardify.tsx#L201)

Hook to subscribe to all camera state properties with automatic re-rendering.

## Returns

`object`

Object containing:
- `position` - Current camera position {x, y}
- `rotation` - Current camera rotation in radians
- `zoomLevel` - Current camera zoom level

### position

> **position**: `object`

#### position.x

> **x**: `number`

#### position.y

> **y**: `number`

### rotation

> **rotation**: `number`

### zoomLevel

> **zoomLevel**: `number`

## Remarks

This hook provides a snapshot of all camera state (position, rotation, zoomLevel) and
re-renders only when any of these values change. It's more efficient than using multiple
[useBoardCameraState](useBoardCameraState.md) calls when you need all state properties.

**Performance**: The hook uses snapshot caching to maintain referential equality when
values haven't changed, preventing unnecessary re-renders in child components.

## Example

```tsx
function CameraStateDisplay() {
  const { position, rotation, zoomLevel } = useAllBoardCameraState();

  return (
    <div>
      <h3>Camera State</h3>
      <p>Position: ({position.x.toFixed(2)}, {position.y.toFixed(2)})</p>
      <p>Rotation: {rotation.toFixed(2)} rad</p>
      <p>Zoom: {zoomLevel.toFixed(2)}x</p>
    </div>
  );
}
```

## See

[useBoardCameraState](useBoardCameraState.md) for subscribing to individual state properties
