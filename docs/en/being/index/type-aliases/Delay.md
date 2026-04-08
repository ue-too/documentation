[@ue-too/being](../../modules.md) / [index](../index.md) / Delay

# Type Alias: Delay\<Context, EventPayloadMapping, States, EventOutputMapping\>

> **Delay**\<`Context`, `EventPayloadMapping`, `States`, `EventOutputMapping`\> = `object`

Defined in: [interface.ts:431](https://github.com/ue-too/ue-too/blob/feb7c80222df5d3cd97bfa1933bafe3190c6e48d/packages/being/src/interface.ts#L431)

## Type Parameters

### Context

`Context` *extends* [`BaseContext`](../interfaces/BaseContext.md)

### EventPayloadMapping

`EventPayloadMapping`

### States

`States` *extends* `string`

### EventOutputMapping

`EventOutputMapping` *extends* `Partial`\<`Record`\<keyof `EventPayloadMapping`, `unknown`\>\> = [`DefaultOutputMapping`](DefaultOutputMapping.md)\<`EventPayloadMapping`\>

## Properties

### action

> **action**: [`Action`](Action.md)\<`Context`, `EventPayloadMapping`, `States`, `EventOutputMapping`\>

Defined in: [interface.ts:440](https://github.com/ue-too/ue-too/blob/feb7c80222df5d3cd97bfa1933bafe3190c6e48d/packages/being/src/interface.ts#L440)

***

### time

> **time**: `number`

Defined in: [interface.ts:439](https://github.com/ue-too/ue-too/blob/feb7c80222df5d3cd97bfa1933bafe3190c6e48d/packages/being/src/interface.ts#L439)
