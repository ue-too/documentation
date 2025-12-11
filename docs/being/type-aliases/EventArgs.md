[@ue-too/being](../globals.md) / EventArgs

# Type Alias: EventArgs\<EventPayloadMapping, K\>

> **EventArgs**\<`EventPayloadMapping`, `K`\> = `K` *extends* keyof `EventPayloadMapping` ? `IsEmptyObject`\<`EventPayloadMapping`\[`K`\]\> *extends* `true` ? \[`K`\] : \[`K`, `EventPayloadMapping`\[`K`\]\] : \[`K`, `unknown`\]

Defined in: [interface.ts:21](https://github.com/ue-too/ue-too/blob/c02efc01f7c19f3efc21823d0489e987a3e92427/packages/being/src/interface.ts#L21)

## Type Parameters

### EventPayloadMapping

`EventPayloadMapping`

### K

`K`
