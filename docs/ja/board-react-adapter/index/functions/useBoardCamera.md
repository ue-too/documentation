[@ue-too/board-react-adapter](../../modules.md) / [index](../index.md) / useBoardCamera

# 関数: useBoardCamera()

> **useBoardCamera**(): `ObservableBoardCamera`

定義: [hooks/useBoardify.tsx:453](https://github.com/ue-too/ue-too/blob/79a36cf61d861e6b4e3302e81111636c6082a3db/packages/board-react-adapter/src/hooks/useBoardify.tsx#L453)

Hook to access the camera instance from the Board context.

## 戻り値

`ObservableBoardCamera`

The camera instance from the board

## Remarks

This is a convenience hook that returns the camera from the board instance.
Equivalent to calling `useBoard().camera` but more concise.

## Throws

Error if used outside of BoardProvider

## 例

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

## 参照

[useBoard](useBoard.md) for accessing the full board instance
