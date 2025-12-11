[@ue-too/being](../globals.md) / StateMachine

# Interface: StateMachine\<EventPayloadMapping, Context, States\>

Defined in: [interface.ts:57](https://github.com/ue-too/ue-too/blob/fe7fe80879019da785d08f475b37a73725116e88/packages/being/src/interface.ts#L57)

## Description

This is the interface for the state machine. The interface takes in a few generic parameters.

Generic parameters:
- EventPayloadMapping: A mapping of events to their payloads.
- Context: The context of the state machine. (which can be used by each state to do calculations that would persist across states)
- States: All of the possible states that the state machine can be in. e.g. a string literal union like "IDLE" | "SELECTING" | "PAN" | "ZOOM"

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

## Properties

### possibleStates

> **possibleStates**: `States`[]

Defined in: [interface.ts:70](https://github.com/ue-too/ue-too/blob/fe7fe80879019da785d08f475b37a73725116e88/packages/being/src/interface.ts#L70)

***

### states

> **states**: `Record`\<`States`, [`State`](State.md)\<`EventPayloadMapping`, `Context`, `string` *extends* `States` ? `string` : `States`\>\>

Defined in: [interface.ts:68](https://github.com/ue-too/ue-too/blob/fe7fe80879019da785d08f475b37a73725116e88/packages/being/src/interface.ts#L68)

## Methods

### happens()

#### Call Signature

> **happens**\<`K`\>(...`args`): [`EventHandledResult`](../type-aliases/EventHandledResult.md)\<`States`\>

Defined in: [interface.ts:60](https://github.com/ue-too/ue-too/blob/fe7fe80879019da785d08f475b37a73725116e88/packages/being/src/interface.ts#L60)

##### Type Parameters

###### K

`K` *extends* `string` \| `number` \| `symbol`

##### Parameters

###### args

...[`EventArgs`](../type-aliases/EventArgs.md)\<`EventPayloadMapping`, `K`\>

##### Returns

[`EventHandledResult`](../type-aliases/EventHandledResult.md)\<`States`\>

#### Call Signature

> **happens**\<`K`\>(...`args`): [`EventHandledResult`](../type-aliases/EventHandledResult.md)\<`States`\>

Defined in: [interface.ts:64](https://github.com/ue-too/ue-too/blob/fe7fe80879019da785d08f475b37a73725116e88/packages/being/src/interface.ts#L64)

##### Type Parameters

###### K

`K` *extends* `string`

##### Parameters

###### args

...[`EventArgs`](../type-aliases/EventArgs.md)\<`EventPayloadMapping`, `K`\>

##### Returns

[`EventHandledResult`](../type-aliases/EventHandledResult.md)\<`States`\>

***

### onHappens()

> **onHappens**(`callback`): `void`

Defined in: [interface.ts:71](https://github.com/ue-too/ue-too/blob/fe7fe80879019da785d08f475b37a73725116e88/packages/being/src/interface.ts#L71)

#### Parameters

##### callback

(`args`, `context`) => `void`

#### Returns

`void`

***

### onStateChange()

> **onStateChange**(`callback`): `void`

Defined in: [interface.ts:69](https://github.com/ue-too/ue-too/blob/fe7fe80879019da785d08f475b37a73725116e88/packages/being/src/interface.ts#L69)

#### Parameters

##### callback

[`StateChangeCallback`](../type-aliases/StateChangeCallback.md)\<`States`\>

#### Returns

`void`

***

### setContext()

> **setContext**(`context`): `void`

Defined in: [interface.ts:67](https://github.com/ue-too/ue-too/blob/fe7fe80879019da785d08f475b37a73725116e88/packages/being/src/interface.ts#L67)

#### Parameters

##### context

`Context`

#### Returns

`void`

***

### switchTo()

> **switchTo**(`state`): `void`

Defined in: [interface.ts:58](https://github.com/ue-too/ue-too/blob/fe7fe80879019da785d08f475b37a73725116e88/packages/being/src/interface.ts#L58)

#### Parameters

##### state

`States`

#### Returns

`void`
