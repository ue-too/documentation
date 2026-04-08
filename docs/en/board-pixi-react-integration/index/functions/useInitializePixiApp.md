[@ue-too/board-pixi-react-integration](../../modules.md) / [index](../index.md) / useInitializePixiApp

# Function: useInitializePixiApp()

> **useInitializePixiApp**\<`T`\>(`option`, `initFunction`): `object`

Defined in: [board-pixi-react-integration/src/hooks/pixi/initialization.ts:6](https://github.com/ue-too/ue-too/blob/79a36cf61d861e6b4e3302e81111636c6082a3db/packages/board-pixi-react-integration/src/hooks/pixi/initialization.ts#L6)

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
