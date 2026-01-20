[@ue-too/being](../globals.md) / DefaultOutputMapping

# Type Alias: DefaultOutputMapping\<EventPayloadMapping\>

> **DefaultOutputMapping**\<`EventPayloadMapping`\> = `{ [K in keyof EventPayloadMapping]: void }`

Defined in: [interface.ts:166](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/being/src/interface.ts#L166)

## Type Parameters

### EventPayloadMapping

`EventPayloadMapping`

## Description

A default output mapping that maps all events to void.
Used as default when no output mapping is provided.
