[@ue-too/board-react-adapter](../globals.md) / BoardProps

# Type Alias: BoardProps

> **BoardProps** = `object`

Defined in: [components/Board.tsx:12](https://github.com/ue-too/ue-too/blob/e468a9961da59c81663192ec8df16ebc8e17abac/packages/board-react-adapter/src/components/Board.tsx#L12)

Props for the Board component.

## Properties

### animationCallback()?

> `optional` **animationCallback**: (`timestamp`, `ctx`) => `void`

Defined in: [components/Board.tsx:20](https://github.com/ue-too/ue-too/blob/e468a9961da59c81663192ec8df16ebc8e17abac/packages/board-react-adapter/src/components/Board.tsx#L20)

Callback function for drawing on each animation frame

#### Parameters

##### timestamp

`number`

##### ctx

`CanvasRenderingContext2D`

#### Returns

`void`

***

### children?

> `optional` **children**: `React.ReactNode`

Defined in: [components/Board.tsx:22](https://github.com/ue-too/ue-too/blob/e468a9961da59c81663192ec8df16ebc8e17abac/packages/board-react-adapter/src/components/Board.tsx#L22)

Child components that can access the board via hooks

***

### fullScreen?

> `optional` **fullScreen**: `boolean`

Defined in: [components/Board.tsx:14](https://github.com/ue-too/ue-too/blob/e468a9961da59c81663192ec8df16ebc8e17abac/packages/board-react-adapter/src/components/Board.tsx#L14)

Enable fullscreen mode (canvas resizes with window)

***

### height?

> `optional` **height**: `number`

Defined in: [components/Board.tsx:18](https://github.com/ue-too/ue-too/blob/e468a9961da59c81663192ec8df16ebc8e17abac/packages/board-react-adapter/src/components/Board.tsx#L18)

Canvas height in pixels

***

### width?

> `optional` **width**: `number`

Defined in: [components/Board.tsx:16](https://github.com/ue-too/ue-too/blob/e468a9961da59c81663192ec8df16ebc8e17abac/packages/board-react-adapter/src/components/Board.tsx#L16)

Canvas width in pixels
