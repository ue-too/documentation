[@ue-too/board-react-adapter](../../modules.md) / [index](../index.md) / BoardProvider

# 函式: BoardProvider()

> **BoardProvider**(`props`): `Element`

定義於: [hooks/useBoardify.tsx:384](https://github.com/ue-too/ue-too/blob/7d57cce875ed7b8a4f4ee4e325a18e34159928f6/packages/board-react-adapter/src/hooks/useBoardify.tsx#L384)

Provider component for sharing a Board instance across the component tree.

## 參數

### props

Component props

#### children

`ReactNode`

Child components that will have access to the board

## 回傳

`Element`

## 備註

This component creates a single Board instance and makes it available to all child
components via the [useBoard](useBoard.md) hook. This is the recommended way to use the
board in React applications when you need to access it from multiple components.

The board instance is created once when the provider mounts and persists for the
lifetime of the provider.

## 範例

```tsx
function App() {
  return (
    <BoardProvider>
      <Board width={800} height={600} />
      <CameraControls />
      <CameraStateDisplay />
    </BoardProvider>
  );
}
```

## 參閱

[useBoard](useBoard.md) for accessing the board instance
