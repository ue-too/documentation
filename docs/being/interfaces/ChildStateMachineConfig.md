[@ue-too/being](../globals.md) / ChildStateMachineConfig

# Interface: ChildStateMachineConfig\<EventPayloadMapping, Context, ChildStates, EventOutputMapping\>

Defined in: [hierarchical.ts:47](https://github.com/ue-too/ue-too/blob/1055c6abca1ea3a0e952b0825f36e0ca2527df85/packages/being/src/hierarchical.ts#L47)

Configuration for a composite state's child state machine.

## Type Parameters

### EventPayloadMapping

`EventPayloadMapping` = `any`

Event payload mapping

### Context

`Context` *extends* [`BaseContext`](BaseContext.md) = [`BaseContext`](BaseContext.md)

Context type

### ChildStates

`ChildStates` *extends* `string` = `string`

Child state names

### EventOutputMapping

`EventOutputMapping` *extends* `Partial`\<`Record`\<keyof `EventPayloadMapping`, `unknown`\>\> = [`DefaultOutputMapping`](../type-aliases/DefaultOutputMapping.md)\<`EventPayloadMapping`\>

Event output mapping

## Properties

### defaultChildState

> **defaultChildState**: `ChildStates`

Defined in: [hierarchical.ts:56](https://github.com/ue-too/ue-too/blob/1055c6abca1ea3a0e952b0825f36e0ca2527df85/packages/being/src/hierarchical.ts#L56)

Default child state to enter when parent state is entered

***

### rememberHistory?

> `optional` **rememberHistory**: `boolean`

Defined in: [hierarchical.ts:58](https://github.com/ue-too/ue-too/blob/1055c6abca1ea3a0e952b0825f36e0ca2527df85/packages/being/src/hierarchical.ts#L58)

Whether to remember the last active child state (history state)

***

### stateMachine

> **stateMachine**: [`StateMachine`](StateMachine.md)\<`EventPayloadMapping`, `Context`, `ChildStates`, `EventOutputMapping`\>

Defined in: [hierarchical.ts:54](https://github.com/ue-too/ue-too/blob/1055c6abca1ea3a0e952b0825f36e0ca2527df85/packages/being/src/hierarchical.ts#L54)

The child state machine instance
