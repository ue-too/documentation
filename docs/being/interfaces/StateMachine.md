[@ue-too/being](../globals.md) / StateMachine

# Interface: StateMachine\<EventPayloadMapping, Context, States, EventOutputMapping\>

Defined in: [interface.ts:181](https://github.com/ue-too/ue-too/blob/e468a9961da59c81663192ec8df16ebc8e17abac/packages/being/src/interface.ts#L181)

## Description

This is the interface for the state machine. The interface takes in a few generic parameters.

Generic parameters:
- EventPayloadMapping: A mapping of events to their payloads.
- Context: The context of the state machine. (which can be used by each state to do calculations that would persist across states)
- States: All of the possible states that the state machine can be in. e.g. a string literal union like "IDLE" | "SELECTING" | "PAN" | "ZOOM"
- EventOutputMapping: A mapping of events to their output types. Defaults to void for all events.

You can probably get by using the TemplateStateMachine class.
The naming is that an event would "happen" and the state of the state machine would "handle" it.

## See

 - [TemplateStateMachine](../classes/TemplateStateMachine.md)
 - KmtInputStateMachine

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

### possibleStates

> **possibleStates**: `States`[]

Defined in: [interface.ts:199](https://github.com/ue-too/ue-too/blob/e468a9961da59c81663192ec8df16ebc8e17abac/packages/being/src/interface.ts#L199)

***

### states

> **states**: `Record`\<`States`, [`State`](State.md)\<`EventPayloadMapping`, `Context`, `string` *extends* `States` ? `string` : `States`, `EventOutputMapping`\>\>

Defined in: [interface.ts:197](https://github.com/ue-too/ue-too/blob/e468a9961da59c81663192ec8df16ebc8e17abac/packages/being/src/interface.ts#L197)

## Methods

### happens()

#### Call Signature

> **happens**\<`K`\>(...`args`): [`EventResult`](../type-aliases/EventResult.md)\<`States`, `K` *extends* keyof `EventOutputMapping` ? `EventOutputMapping`\[`K`\<`K`\>\] : `void`\>

Defined in: [interface.ts:189](https://github.com/ue-too/ue-too/blob/e468a9961da59c81663192ec8df16ebc8e17abac/packages/being/src/interface.ts#L189)

##### Type Parameters

###### K

`K` *extends* `string` \| `number` \| `symbol`

##### Parameters

###### args

...[`EventArgs`](../type-aliases/EventArgs.md)\<`EventPayloadMapping`, `K`\>

##### Returns

[`EventResult`](../type-aliases/EventResult.md)\<`States`, `K` *extends* keyof `EventOutputMapping` ? `EventOutputMapping`\[`K`\<`K`\>\] : `void`\>

#### Call Signature

> **happens**\<`K`\>(...`args`): [`EventResult`](../type-aliases/EventResult.md)\<`States`, `unknown`\>

Defined in: [interface.ts:193](https://github.com/ue-too/ue-too/blob/e468a9961da59c81663192ec8df16ebc8e17abac/packages/being/src/interface.ts#L193)

##### Type Parameters

###### K

`K` *extends* `string`

##### Parameters

###### args

...[`EventArgs`](../type-aliases/EventArgs.md)\<`EventPayloadMapping`, `K`\>

##### Returns

[`EventResult`](../type-aliases/EventResult.md)\<`States`, `unknown`\>

***

### onHappens()

> **onHappens**(`callback`): `void`

Defined in: [interface.ts:200](https://github.com/ue-too/ue-too/blob/e468a9961da59c81663192ec8df16ebc8e17abac/packages/being/src/interface.ts#L200)

#### Parameters

##### callback

(`args`, `context`) => `void`

#### Returns

`void`

***

### onStateChange()

> **onStateChange**(`callback`): `void`

Defined in: [interface.ts:198](https://github.com/ue-too/ue-too/blob/e468a9961da59c81663192ec8df16ebc8e17abac/packages/being/src/interface.ts#L198)

#### Parameters

##### callback

[`StateChangeCallback`](../type-aliases/StateChangeCallback.md)\<`States`\>

#### Returns

`void`

***

### setContext()

> **setContext**(`context`): `void`

Defined in: [interface.ts:196](https://github.com/ue-too/ue-too/blob/e468a9961da59c81663192ec8df16ebc8e17abac/packages/being/src/interface.ts#L196)

#### Parameters

##### context

`Context`

#### Returns

`void`

***

### switchTo()

> **switchTo**(`state`): `void`

Defined in: [interface.ts:187](https://github.com/ue-too/ue-too/blob/e468a9961da59c81663192ec8df16ebc8e17abac/packages/being/src/interface.ts#L187)

#### Parameters

##### state

`States`

#### Returns

`void`
