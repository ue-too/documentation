[@ue-too/being](../globals.md) / Action

# Type Alias: Action\<Context, EventPayloadMapping, States, EventOutputMapping, Output\>

> **Action**\<`Context`, `EventPayloadMapping`, `States`, `EventOutputMapping`, `Output`\> = `object`

Defined in: [interface.ts:306](https://github.com/ue-too/ue-too/blob/1055c6abca1ea3a0e952b0825f36e0ca2527df85/packages/being/src/interface.ts#L306)

## Type Parameters

### Context

`Context` *extends* [`BaseContext`](../interfaces/BaseContext.md)

### EventPayloadMapping

`EventPayloadMapping`

### States

`States` *extends* `string`

### EventOutputMapping

`EventOutputMapping` *extends* `Partial`\<`Record`\<keyof `EventPayloadMapping`, `unknown`\>\> = [`DefaultOutputMapping`](DefaultOutputMapping.md)\<`EventPayloadMapping`\>

### Output

`Output` = `void`

## Properties

### action()

> **action**: (`context`, `event`, `stateMachine`) => `Output` \| `void`

Defined in: [interface.ts:313](https://github.com/ue-too/ue-too/blob/1055c6abca1ea3a0e952b0825f36e0ca2527df85/packages/being/src/interface.ts#L313)

#### Parameters

##### context

`Context`

##### event

`EventPayloadMapping`\[keyof `EventPayloadMapping`\]

##### stateMachine

[`StateMachine`](../interfaces/StateMachine.md)\<`EventPayloadMapping`, `Context`, `States`, `EventOutputMapping`\>

#### Returns

`Output` \| `void`

***

### defaultTargetState?

> `optional` **defaultTargetState**: `States`

Defined in: [interface.ts:314](https://github.com/ue-too/ue-too/blob/1055c6abca1ea3a0e952b0825f36e0ca2527df85/packages/being/src/interface.ts#L314)
