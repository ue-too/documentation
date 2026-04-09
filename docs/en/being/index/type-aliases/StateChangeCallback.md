[@ue-too/being](../../modules.md) / [index](../index.md) / StateChangeCallback

# Type Alias: StateChangeCallback()\<States\>

> **StateChangeCallback**\<`States`\> = (`currentState`, `nextState`) => `void`

Defined in: [interface.ts:264](https://github.com/ue-too/ue-too/blob/68da915137a31a45d7ce8043b13275ff7283045d/packages/being/src/interface.ts#L264)

## Type Parameters

### States

`States` *extends* `string` = `"IDLE"`

## Parameters

### currentState

`States`

### nextState

`States`

## Returns

`void`

## Description

This is the type for the callback that is called when the state changes.
