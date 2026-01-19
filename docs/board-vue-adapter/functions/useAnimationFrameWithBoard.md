[@ue-too/board-vue-adapter](../globals.md) / useAnimationFrameWithBoard

# Function: useAnimationFrameWithBoard()

> **useAnimationFrameWithBoard**(`callback?`): `void`

Defined in: [useBoard.ts:72](https://github.com/ue-too/ue-too/blob/1055c6abca1ea3a0e952b0825f36e0ca2527df85/packages/board-vue-adapter/src/useBoard.ts#L72)

Hook to run an animation loop integrated with the Board's step function.

## Parameters

### callback?

(`timestamp`, `ctx`) => `void`

Optional function to call after board.step(), receives timestamp and canvas context

## Returns

`void`
