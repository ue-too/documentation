[@ue-too/being](../globals.md) / DefaultOutputMapping

# Type Alias: DefaultOutputMapping\<EventPayloadMapping\>

> **DefaultOutputMapping**\<`EventPayloadMapping`\> = `{ [K in keyof EventPayloadMapping]: void }`

Defined in: [interface.ts:160](https://github.com/ue-too/ue-too/blob/aabc0f56e9e83141d0fd935ef6ac3e5fe0af0a61/packages/being/src/interface.ts#L160)

## Type Parameters

### EventPayloadMapping

`EventPayloadMapping`

## Description

A default output mapping that maps all events to void.
Used as default when no output mapping is provided.
