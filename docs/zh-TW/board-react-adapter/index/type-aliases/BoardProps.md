[@ue-too/board-react-adapter](../../modules.md) / [index](../index.md) / BoardProps

# 型別別名: BoardProps

> **BoardProps** = `object`

定義於: [components/Board.tsx:31](https://github.com/ue-too/ue-too/blob/79a36cf61d861e6b4e3302e81111636c6082a3db/packages/board-react-adapter/src/components/Board.tsx#L31)

Props for the Board component.

## 屬性

### animationCallback()?

> `optional` **animationCallback**: (`timestamp`, `ctx`) => `void`

定義於: [components/Board.tsx:39](https://github.com/ue-too/ue-too/blob/79a36cf61d861e6b4e3302e81111636c6082a3db/packages/board-react-adapter/src/components/Board.tsx#L39)

Callback function for drawing on each animation frame

#### 參數

##### timestamp

`number`

##### ctx

`CanvasRenderingContext2D`

#### 回傳

`void`

***

### children?

> `optional` **children**: `React.ReactNode`

定義於: [components/Board.tsx:44](https://github.com/ue-too/ue-too/blob/79a36cf61d861e6b4e3302e81111636c6082a3db/packages/board-react-adapter/src/components/Board.tsx#L44)

Child components that can access the board via hooks

***

### fullScreen?

> `optional` **fullScreen**: `boolean`

定義於: [components/Board.tsx:33](https://github.com/ue-too/ue-too/blob/79a36cf61d861e6b4e3302e81111636c6082a3db/packages/board-react-adapter/src/components/Board.tsx#L33)

Enable fullscreen mode (canvas resizes with window)

***

### height?

> `optional` **height**: `number`

定義於: [components/Board.tsx:37](https://github.com/ue-too/ue-too/blob/79a36cf61d861e6b4e3302e81111636c6082a3db/packages/board-react-adapter/src/components/Board.tsx#L37)

Canvas height in pixels

***

### width?

> `optional` **width**: `number`

定義於: [components/Board.tsx:35](https://github.com/ue-too/ue-too/blob/79a36cf61d861e6b4e3302e81111636c6082a3db/packages/board-react-adapter/src/components/Board.tsx#L35)

Canvas width in pixels
