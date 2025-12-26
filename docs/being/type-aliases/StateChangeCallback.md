[@ue-too/being](../globals.md) / StateChangeCallback

# Type Alias: StateChangeCallback()\<States\>

> **StateChangeCallback**\<`States`\> = (`currentState`, `nextState`) => `void`

Defined in: [interface.ts:208](https://github.com/ue-too/ue-too/blob/e468a9961da59c81663192ec8df16ebc8e17abac/packages/being/src/interface.ts#L208)

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
