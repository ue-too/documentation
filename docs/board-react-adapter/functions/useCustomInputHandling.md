[@ue-too/board-react-adapter](../globals.md) / useCustomInputHandling

# Function: useCustomInputHandling()

> **useCustomInputHandling**(): `object`

Defined in: [hooks/useBoardify.tsx:298](https://github.com/ue-too/ue-too/blob/1055c6abca1ea3a0e952b0825f36e0ca2527df85/packages/board-react-adapter/src/hooks/useBoardify.tsx#L298)

The custom input handling logic is before everything else. To use this hook, you would need to handle the event from the canvas and pass down the result to the `processInputEvent` function.

## Returns

`object`

Object containing the `processInputEvent` function

### processInputEvent()

> **processInputEvent**: (`input`) => `void`

#### Parameters

##### input

`OutputEvent`

#### Returns

`void`

## Example

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
