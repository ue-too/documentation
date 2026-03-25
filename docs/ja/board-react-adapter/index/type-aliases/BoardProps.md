[@ue-too/board-react-adapter](../../modules.md) / [index](../index.md) / BoardProps

# 型エイリアス: BoardProps

> **BoardProps** = `object`

定義: [components/Board.tsx:31](https://github.com/ue-too/ue-too/blob/9b787448328cf446379b1ea4cc5f4c79149cbec8/packages/board-react-adapter/src/components/Board.tsx#L31)

Props for the Board component.

## プロパティ

### animationCallback()?

> `optional` **animationCallback**: (`timestamp`, `ctx`) => `void`

定義: [components/Board.tsx:39](https://github.com/ue-too/ue-too/blob/9b787448328cf446379b1ea4cc5f4c79149cbec8/packages/board-react-adapter/src/components/Board.tsx#L39)

Callback function for drawing on each animation frame

#### パラメータ

##### timestamp

`number`

##### ctx

`CanvasRenderingContext2D`

#### 戻り値

`void`

***

### children?

> `optional` **children**: `React.ReactNode`

定義: [components/Board.tsx:44](https://github.com/ue-too/ue-too/blob/9b787448328cf446379b1ea4cc5f4c79149cbec8/packages/board-react-adapter/src/components/Board.tsx#L44)

Child components that can access the board via hooks

***

### fullScreen?

> `optional` **fullScreen**: `boolean`

定義: [components/Board.tsx:33](https://github.com/ue-too/ue-too/blob/9b787448328cf446379b1ea4cc5f4c79149cbec8/packages/board-react-adapter/src/components/Board.tsx#L33)

Enable fullscreen mode (canvas resizes with window)

***

### height?

> `optional` **height**: `number`

定義: [components/Board.tsx:37](https://github.com/ue-too/ue-too/blob/9b787448328cf446379b1ea4cc5f4c79149cbec8/packages/board-react-adapter/src/components/Board.tsx#L37)

Canvas height in pixels

***

### width?

> `optional` **width**: `number`

定義: [components/Board.tsx:35](https://github.com/ue-too/ue-too/blob/9b787448328cf446379b1ea4cc5f4c79149cbec8/packages/board-react-adapter/src/components/Board.tsx#L35)

Canvas width in pixels
