[@ue-too/being](../globals.md) / State

# Interface: State\<EventPayloadMapping, Context, States, EventOutputMapping\>

Defined in: [interface.ts:227](https://github.com/ue-too/ue-too/blob/e468a9961da59c81663192ec8df16ebc8e17abac/packages/being/src/interface.ts#L227)

## Description

This is the interface for the state. The interface takes in a few generic parameters:
You can probably get by extending the TemplateState class. 

Generic parameters:
- EventPayloadMapping: A mapping of events to their payloads.
- Context: The context of the state machine. (which can be used by each state to do calculations that would persist across states)
- States: All of the possible states that the state machine can be in. e.g. a string literal union like "IDLE" | "SELECTING" | "PAN" | "ZOOM"
- EventOutputMapping: A mapping of events to their output types. Defaults to void for all events.

A state's all possible states can be only a subset of the possible states of the state machine. (a state only needs to know what states it can transition to)
This allows for a state to be reusable across different state machines.

## See

[TemplateState](../classes/TemplateState.md)

## Type Parameters

### EventPayloadMapping

`EventPayloadMapping`

### Context

`Context` *extends* [`BaseContext`](BaseContext.md)

### States

`States` *extends* `string` = `"IDLE"`

### EventOutputMapping

`EventOutputMapping` *extends* `Partial`\<`Record`\<keyof `EventPayloadMapping`, `unknown`\>\> = [`DefaultOutputMapping`](../type-aliases/DefaultOutputMapping.md)\<`EventPayloadMapping`\>

## Properties

### delay

> **delay**: [`Delay`](../type-aliases/Delay.md)\<`Context`, `EventPayloadMapping`, `States`, `EventOutputMapping`\> \| `undefined`

Defined in: [interface.ts:239](https://github.com/ue-too/ue-too/blob/e468a9961da59c81663192ec8df16ebc8e17abac/packages/being/src/interface.ts#L239)

***

### eventGuards

> **eventGuards**: `Partial`\<[`EventGuards`](../type-aliases/EventGuards.md)\<`EventPayloadMapping`, `States`, `Context`, [`Guard`](../type-aliases/Guard.md)\<`Context`\>\>\>

Defined in: [interface.ts:238](https://github.com/ue-too/ue-too/blob/e468a9961da59c81663192ec8df16ebc8e17abac/packages/being/src/interface.ts#L238)

***

### eventReactions

> **eventReactions**: [`EventReactions`](../type-aliases/EventReactions.md)\<`EventPayloadMapping`, `Context`, `States`, `EventOutputMapping`\>

Defined in: [interface.ts:236](https://github.com/ue-too/ue-too/blob/e468a9961da59c81663192ec8df16ebc8e17abac/packages/being/src/interface.ts#L236)

***

### guards

> **guards**: [`Guard`](../type-aliases/Guard.md)\<`Context`\>

Defined in: [interface.ts:237](https://github.com/ue-too/ue-too/blob/e468a9961da59c81663192ec8df16ebc8e17abac/packages/being/src/interface.ts#L237)

## Methods

### beforeExit()

> **beforeExit**(`context`, `stateMachine`, `to`): `void`

Defined in: [interface.ts:234](https://github.com/ue-too/ue-too/blob/e468a9961da59c81663192ec8df16ebc8e17abac/packages/being/src/interface.ts#L234)

#### Parameters

##### context

`Context`

##### stateMachine

[`StateMachine`](StateMachine.md)\<`EventPayloadMapping`, `Context`, `States`, `EventOutputMapping`\>

##### to

`States`

#### Returns

`void`

***

### handles()

> **handles**\<`K`\>(`args`, `context`, `stateMachine`): [`EventResult`](../type-aliases/EventResult.md)\<`States`, `K` *extends* keyof `EventOutputMapping` ? `EventOutputMapping`\[`K`\<`K`\>\] : `void`\>

Defined in: [interface.ts:235](https://github.com/ue-too/ue-too/blob/e468a9961da59c81663192ec8df16ebc8e17abac/packages/being/src/interface.ts#L235)

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### args

[`EventArgs`](../type-aliases/EventArgs.md)\<`EventPayloadMapping`, `K`\>

##### context

`Context`

##### stateMachine

[`StateMachine`](StateMachine.md)\<`EventPayloadMapping`, `Context`, `States`, `EventOutputMapping`\>

#### Returns

[`EventResult`](../type-aliases/EventResult.md)\<`States`, `K` *extends* keyof `EventOutputMapping` ? `EventOutputMapping`\[`K`\<`K`\>\] : `void`\>

***

### uponEnter()

> **uponEnter**(`context`, `stateMachine`, `from`): `void`

Defined in: [interface.ts:233](https://github.com/ue-too/ue-too/blob/e468a9961da59c81663192ec8df16ebc8e17abac/packages/being/src/interface.ts#L233)

#### Parameters

##### context

`Context`

##### stateMachine

[`StateMachine`](StateMachine.md)\<`EventPayloadMapping`, `Context`, `States`, `EventOutputMapping`\>

##### from

`States`

#### Returns

`void`
