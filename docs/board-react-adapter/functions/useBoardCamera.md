[@ue-too/board-react-adapter](../globals.md) / useBoardCamera

# Function: useBoardCamera()

> **useBoardCamera**(): `ObservableBoardCamera`

Defined in: [hooks/useBoardify.tsx:424](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/board-react-adapter/src/hooks/useBoardify.tsx#L424)

Hook to access the camera instance from the Board context.

## Returns

`ObservableBoardCamera`

The camera instance from the board

## Remarks

This is a convenience hook that returns the camera from the board instance.
Equivalent to calling `useBoard().camera` but more concise.

## Throws

Error if used outside of BoardProvider

## Example

```tsx
function CameraConfig() {
  const camera = useBoardCamera();

  useEffect(() => {
    camera.setMinZoomLevel(0.5);
    camera.setMaxZoomLevel(4.0);
  }, [camera]);

  return null;
}
```

## See

[useBoard](useBoard.md) for accessing the full board instance
