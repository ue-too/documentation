[@ue-too/board-vue-adapter](../globals.md) / useAnimationFrameWithBoard

# Function: useAnimationFrameWithBoard()

> **useAnimationFrameWithBoard**(`callback?`): `void`

Defined in: [useBoard.ts:72](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/board-vue-adapter/src/useBoard.ts#L72)

Hook to run an animation loop integrated with the Board's step function.

## Parameters

### callback?

(`timestamp`, `ctx`) => `void`

Optional function to call after board.step(), receives timestamp and canvas context

## Returns

`void`
