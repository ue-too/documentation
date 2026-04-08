[@ue-too/board-vue-adapter](../../modules.md) / [index](../index.md) / useAnimationFrameWithBoard

# Function: useAnimationFrameWithBoard()

> **useAnimationFrameWithBoard**(`callback?`): `void`

Defined in: [useBoard.ts:89](https://github.com/ue-too/ue-too/blob/feb7c80222df5d3cd97bfa1933bafe3190c6e48d/packages/board-vue-adapter/src/useBoard.ts#L89)

Hook to run an animation loop integrated with the Board's step function.

## Parameters

### callback?

(`timestamp`, `ctx`) => `void`

Optional function to call after board.step(), receives timestamp and canvas context

## Returns

`void`
