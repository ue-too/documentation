[@ue-too/board-react-adapter](../../modules.md) / [index](../index.md) / useCustomInputHandling

# 函式: useCustomInputHandling()

> **useCustomInputHandling**(): `object`

定義於: [hooks/useBoardify.tsx:324](https://github.com/ue-too/ue-too/blob/79a36cf61d861e6b4e3302e81111636c6082a3db/packages/board-react-adapter/src/hooks/useBoardify.tsx#L324)

The custom input handling logic is before everything else. To use this hook, you would need to handle the event from the canvas and pass down the result to the `processInputEvent` function.

## 回傳

`object`

Object containing the `processInputEvent` function

### processInputEvent()

> **processInputEvent**: (`input`) => `void`

#### 參數

##### input

`OutputEvent`

#### 回傳

`void`

## 範例

```typescript
const { processInputEvent } = useCustomInputHandling();

const handlePointerDown = (e: React.PointerEvent<HTMLCanvasElement>) => {
  // custom logic to determine the user input

  // if the user input is valid, pass it to the `processInputEvent` function
  // e.g. pass the pan event down the input handling system
  processInputEvent({
    type: "pan",
    delta: {
      x: 10,
      y: 10,
    },
  });
}
```
