[@ue-too/being](../globals.md) / ActionFunction

# Type Alias: ActionFunction()\<Context, EventPayloadMapping, EventName, EventOutputMapping\>

> **ActionFunction**\<`Context`, `EventPayloadMapping`, `EventName`, `EventOutputMapping`\> = (`context`, `payload`, `stateMachine`) => `EventName` *extends* keyof `EventOutputMapping` ? `EventOutputMapping`\[`EventName`\] \| `void` : `void` \| `unknown`

Defined in: [schema-factory.ts:38](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/being/src/schema-factory.ts#L38)

Action function that can be executed when an event is handled.
Receives context, event payload, and the state machine instance.
Can return a value that will be included in the event result.

## Type Parameters

### Context

`Context` *extends* [`BaseContext`](../interfaces/BaseContext.md) = [`BaseContext`](../interfaces/BaseContext.md)

The context type

### EventPayloadMapping

`EventPayloadMapping` = `any`

Mapping of event names to their payload types

### EventName

`EventName` *extends* keyof `EventPayloadMapping` = keyof `EventPayloadMapping`

The specific event name this action handles

### EventOutputMapping

`EventOutputMapping` *extends* `Partial`\<`Record`\<keyof `EventPayloadMapping`, `unknown`\>\> = [`DefaultOutputMapping`](DefaultOutputMapping.md)\<`EventPayloadMapping`\>

Optional mapping of events to their output types

## Parameters

### context

`Context`

### payload

`EventPayloadMapping`\[`EventName`\]

### stateMachine

[`StateMachine`](../interfaces/StateMachine.md)\<`EventPayloadMapping`, `Context`, `any`, `EventOutputMapping`\>

## Returns

`EventName` *extends* keyof `EventOutputMapping` ? `EventOutputMapping`\[`EventName`\] \| `void` : `void` \| `unknown`
