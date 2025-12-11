[@ue-too/being](../globals.md) / EventArgs

# Type Alias: EventArgs\<EventPayloadMapping, K\>

> **EventArgs**\<`EventPayloadMapping`, `K`\> = `K` *extends* keyof `EventPayloadMapping` ? `IsEmptyObject`\<`EventPayloadMapping`\[`K`\]\> *extends* `true` ? \[`K`\] : \[`K`, `EventPayloadMapping`\[`K`\]\] : \[`K`, `unknown`\]

Defined in: [interface.ts:21](https://github.com/ue-too/ue-too/blob/6e9c66b5f3b3ab9f9b176d974bbf941b3420f5e1/packages/being/src/interface.ts#L21)

## Type Parameters

### EventPayloadMapping

`EventPayloadMapping`

### K

`K`
