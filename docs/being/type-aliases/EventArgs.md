[@ue-too/being](../globals.md) / EventArgs

# Type Alias: EventArgs\<EventPayloadMapping, K\>

> **EventArgs**\<`EventPayloadMapping`, `K`\> = `K` *extends* keyof `EventPayloadMapping` ? `IsEmptyObject`\<`EventPayloadMapping`\[`K`\]\> *extends* `true` ? \[`K`\] : \[`K`, `EventPayloadMapping`\[`K`\]\] : \[`K`, `unknown`\]

Defined in: [interface.ts:21](https://github.com/ue-too/ue-too/blob/407e414f82d0bb1a2a3cfbf5160e331d5a81d8be/packages/being/src/interface.ts#L21)

## Type Parameters

### EventPayloadMapping

`EventPayloadMapping`

### K

`K`
