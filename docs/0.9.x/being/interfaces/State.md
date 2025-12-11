[@ue-too/being](../globals.md) / State

# Interface: State\<EventPayloadMapping, Context, States\>

Defined in: [interface.ts:97](https://github.com/ue-too/ue-too/blob/6e9c66b5f3b3ab9f9b176d974bbf941b3420f5e1/packages/being/src/interface.ts#L97)

## Description

This is the interface for the state. The interface takes in a few generic parameters:
You can probably get by extending the TemplateState class. 

Generic parameters:
- EventPayloadMapping: A mapping of events to their payloads.
- Context: The context of the state machine. (which can be used by each state to do calculations that would persist across states)
- States: All of the possible states that the state machine can be in. e.g. a string literal union like "IDLE" | "SELECTING" | "PAN" | "ZOOM"

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

## Properties

### delay

> **delay**: [`Delay`](../type-aliases/Delay.md)\<`Context`, `EventPayloadMapping`, `States`\> \| `undefined`

Defined in: [interface.ts:104](https://github.com/ue-too/ue-too/blob/6e9c66b5f3b3ab9f9b176d974bbf941b3420f5e1/packages/being/src/interface.ts#L104)

***

### eventGuards

> **eventGuards**: `Partial`\<[`EventGuards`](../type-aliases/EventGuards.md)\<`EventPayloadMapping`, `States`, `Context`, [`Guard`](../type-aliases/Guard.md)\<`Context`\>\>\>

Defined in: [interface.ts:103](https://github.com/ue-too/ue-too/blob/6e9c66b5f3b3ab9f9b176d974bbf941b3420f5e1/packages/being/src/interface.ts#L103)

***

### eventReactions

> **eventReactions**: [`EventReactions`](../type-aliases/EventReactions.md)\<`EventPayloadMapping`, `Context`, `States`\>

Defined in: [interface.ts:101](https://github.com/ue-too/ue-too/blob/6e9c66b5f3b3ab9f9b176d974bbf941b3420f5e1/packages/being/src/interface.ts#L101)

***

### guards

> **guards**: [`Guard`](../type-aliases/Guard.md)\<`Context`\>

Defined in: [interface.ts:102](https://github.com/ue-too/ue-too/blob/6e9c66b5f3b3ab9f9b176d974bbf941b3420f5e1/packages/being/src/interface.ts#L102)

## Methods

### beforeExit()

> **beforeExit**(`context`, `stateMachine`, `to`): `void`

Defined in: [interface.ts:99](https://github.com/ue-too/ue-too/blob/6e9c66b5f3b3ab9f9b176d974bbf941b3420f5e1/packages/being/src/interface.ts#L99)

#### Parameters

##### context

`Context`

##### stateMachine

[`StateMachine`](StateMachine.md)\<`EventPayloadMapping`, `Context`, `States`\>

##### to

`States`

#### Returns

`void`

***

### handles()

> **handles**\<`K`\>(`args`, `context`, `stateMachine`): [`EventHandledResult`](../type-aliases/EventHandledResult.md)\<`States`\>

Defined in: [interface.ts:100](https://github.com/ue-too/ue-too/blob/6e9c66b5f3b3ab9f9b176d974bbf941b3420f5e1/packages/being/src/interface.ts#L100)

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### args

[`EventArgs`](../type-aliases/EventArgs.md)\<`EventPayloadMapping`, `K`\>

##### context

`Context`

##### stateMachine

[`StateMachine`](StateMachine.md)\<`EventPayloadMapping`, `Context`, `States`\>

#### Returns

[`EventHandledResult`](../type-aliases/EventHandledResult.md)\<`States`\>

***

### uponEnter()

> **uponEnter**(`context`, `stateMachine`, `from`): `void`

Defined in: [interface.ts:98](https://github.com/ue-too/ue-too/blob/6e9c66b5f3b3ab9f9b176d974bbf941b3420f5e1/packages/being/src/interface.ts#L98)

#### Parameters

##### context

`Context`

##### stateMachine

[`StateMachine`](StateMachine.md)\<`EventPayloadMapping`, `Context`, `States`\>

##### from

`States`

#### Returns

`void`
