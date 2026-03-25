[@ue-too/board-react-adapter](../../modules.md) / [index](../index.md) / useBoard

# 函式: useBoard()

> **useBoard**(): `Board`

定義於: [hooks/useBoardify.tsx:418](https://github.com/ue-too/ue-too/blob/9b787448328cf446379b1ea4cc5f4c79149cbec8/packages/board-react-adapter/src/hooks/useBoardify.tsx#L418)

Hook to access the Board instance from context.

## 回傳

`Board`

The Board instance from context

## 備註

This hook retrieves the Board instance provided by [BoardProvider](BoardProvider.md).
It must be used within a component that is a descendant of BoardProvider,
otherwise it will throw an error.

## 拋出

Error if used outside of BoardProvider

## 範例

```tsx
function MyComponent() {
  const board = useBoard();

  useEffect(() => {
    // Configure board
    board.camera.boundaries = { min: { x: -1000, y: -1000 }, max: { x: 1000, y: 1000 } };
  }, [board]);

  return <div>Board ready</div>;
}
```

## 參閱

[BoardProvider](BoardProvider.md) for providing the board instance
