[@ue-too/board-pixi-react-integration](../../modules.md) / [index](../index.md) / useInitializePixiApp

# Function: useInitializePixiApp()

> **useInitializePixiApp**\<`T`\>(`option`, `initFunction`): `object`

Defined in: [board-pixi-react-integration/src/hooks/pixi/initialization.ts:6](https://github.com/ue-too/ue-too/blob/feb7c80222df5d3cd97bfa1933bafe3190c6e48d/packages/board-pixi-react-integration/src/hooks/pixi/initialization.ts#L6)

## Type Parameters

### T

`T` *extends* `InitAppOptions` = `InitAppOptions`

## Parameters

### option

`Partial`\<`T`\>

### initFunction

(`canvas`, `option`) => `Promise`\<`BaseAppComponents`\>

## Returns

`object`

### canvasRef

> **canvasRef**: `RefObject`\<`HTMLCanvasElement` \| `null`\>
