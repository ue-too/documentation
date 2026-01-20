[@ue-too/being](../globals.md) / StateMachineSchema

# Interface: StateMachineSchema\<Context, EventPayloadMapping, StateNames, EventOutputMapping\>

Defined in: [schema-factory.ts:240](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/being/src/schema-factory.ts#L240)

Complete schema definition for a state machine.

## Type Parameters

### Context

`Context` *extends* [`BaseContext`](BaseContext.md) = [`BaseContext`](BaseContext.md)

The context type

### EventPayloadMapping

`EventPayloadMapping` = `any`

Mapping of event names to their payload types

### StateNames

`StateNames` *extends* `string` = `string`

Union type of all valid state names (inferred from states array)

### EventOutputMapping

`EventOutputMapping` *extends* `Partial`\<`Record`\<keyof `EventPayloadMapping`, `unknown`\>\> = [`DefaultOutputMapping`](../type-aliases/DefaultOutputMapping.md)\<`EventPayloadMapping`\>

Optional mapping of events to their output types

## Properties

### events

> **events**: `EventPayloadMapping`

Defined in: [schema-factory.ts:249](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/being/src/schema-factory.ts#L249)

Mapping of event names to their payload types

***

### initialState

> **initialState**: `StateNames`

Defined in: [schema-factory.ts:253](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/being/src/schema-factory.ts#L253)

Initial state name

***

### stateDefinitions

> **stateDefinitions**: [`StateDefinition`](StateDefinition.md)\<`Context`, `EventPayloadMapping`, `StateNames`, `EventOutputMapping`\>[]

Defined in: [schema-factory.ts:251](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/being/src/schema-factory.ts#L251)

Array of state definitions

***

### states

> **states**: readonly `StateNames`[] \| `StateNames`[]

Defined in: [schema-factory.ts:247](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/being/src/schema-factory.ts#L247)

Array of all possible state names
