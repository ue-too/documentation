[@ue-too/being](../globals.md) / TemplateStateMachine

# Class: TemplateStateMachine\<EventPayloadMapping, Context, States\>

Defined in: [interface.ts:209](https://github.com/ue-too/ue-too/blob/fdbfb1431206f8d7c812dca3e1d0dcd7389f1d6d/packages/being/src/interface.ts#L209)

## Description

This is the template for the state machine.

You can use this class to create a state machine. Usually this is all you need for the state machine. Unless you need extra functionality.
To create a state machine, just instantiate this class and pass in the states, initial state and context.

## See

createKmtInputStateMachine for an example of how to create a state machine.

## Type Parameters

### EventPayloadMapping

`EventPayloadMapping`

### Context

`Context` *extends* [`BaseContext`](../interfaces/BaseContext.md)

### States

`States` *extends* `string` = `"IDLE"`

## Implements

- [`StateMachine`](../interfaces/StateMachine.md)\<`EventPayloadMapping`, `Context`, `States`\>

## Constructors

### Constructor

> **new TemplateStateMachine**\<`EventPayloadMapping`, `Context`, `States`\>(`states`, `initialState`, `context`): `TemplateStateMachine`\<`EventPayloadMapping`, `Context`, `States`\>

Defined in: [interface.ts:219](https://github.com/ue-too/ue-too/blob/fdbfb1431206f8d7c812dca3e1d0dcd7389f1d6d/packages/being/src/interface.ts#L219)

#### Parameters

##### states

`Record`\<`States`, [`State`](../interfaces/State.md)\<`EventPayloadMapping`, `Context`, `States`\>\>

##### initialState

`States`

##### context

`Context`

#### Returns

`TemplateStateMachine`\<`EventPayloadMapping`, `Context`, `States`\>

## Properties

### \_context

> `protected` **\_context**: `Context`

Defined in: [interface.ts:213](https://github.com/ue-too/ue-too/blob/fdbfb1431206f8d7c812dca3e1d0dcd7389f1d6d/packages/being/src/interface.ts#L213)

***

### \_currentState

> `protected` **\_currentState**: `States`

Defined in: [interface.ts:211](https://github.com/ue-too/ue-too/blob/fdbfb1431206f8d7c812dca3e1d0dcd7389f1d6d/packages/being/src/interface.ts#L211)

***

### \_happensCallbacks

> `protected` **\_happensCallbacks**: (`args`, `context`) => `void`[]

Defined in: [interface.ts:216](https://github.com/ue-too/ue-too/blob/fdbfb1431206f8d7c812dca3e1d0dcd7389f1d6d/packages/being/src/interface.ts#L216)

#### Parameters

##### args

[`EventArgs`](../type-aliases/EventArgs.md)\<`EventPayloadMapping`, `string`\> | [`EventArgs`](../type-aliases/EventArgs.md)\<`EventPayloadMapping`, keyof `EventPayloadMapping`\>

##### context

`Context`

#### Returns

`void`

***

### \_stateChangeCallbacks

> `protected` **\_stateChangeCallbacks**: [`StateChangeCallback`](../type-aliases/StateChangeCallback.md)\<`States`\>[]

Defined in: [interface.ts:215](https://github.com/ue-too/ue-too/blob/fdbfb1431206f8d7c812dca3e1d0dcd7389f1d6d/packages/being/src/interface.ts#L215)

***

### \_states

> `protected` **\_states**: `Record`\<`States`, [`State`](../interfaces/State.md)\<`EventPayloadMapping`, `Context`, `States`\>\>

Defined in: [interface.ts:212](https://github.com/ue-too/ue-too/blob/fdbfb1431206f8d7c812dca3e1d0dcd7389f1d6d/packages/being/src/interface.ts#L212)

***

### \_statesArray

> `protected` **\_statesArray**: `States`[]

Defined in: [interface.ts:214](https://github.com/ue-too/ue-too/blob/fdbfb1431206f8d7c812dca3e1d0dcd7389f1d6d/packages/being/src/interface.ts#L214)

***

### \_timeouts

> `protected` **\_timeouts**: `number` \| `undefined` = `undefined`

Defined in: [interface.ts:217](https://github.com/ue-too/ue-too/blob/fdbfb1431206f8d7c812dca3e1d0dcd7389f1d6d/packages/being/src/interface.ts#L217)

## Accessors

### currentState

#### Get Signature

> **get** **currentState**(): `States`

Defined in: [interface.ts:260](https://github.com/ue-too/ue-too/blob/fdbfb1431206f8d7c812dca3e1d0dcd7389f1d6d/packages/being/src/interface.ts#L260)

##### Returns

`States`

***

### possibleStates

#### Get Signature

> **get** **possibleStates**(): `States`[]

Defined in: [interface.ts:268](https://github.com/ue-too/ue-too/blob/fdbfb1431206f8d7c812dca3e1d0dcd7389f1d6d/packages/being/src/interface.ts#L268)

##### Returns

`States`[]

#### Implementation of

[`StateMachine`](../interfaces/StateMachine.md).[`possibleStates`](../interfaces/StateMachine.md#possiblestates)

***

### states

#### Get Signature

> **get** **states**(): `Record`\<`States`, [`State`](../interfaces/State.md)\<`EventPayloadMapping`, `Context`, `States`\>\>

Defined in: [interface.ts:272](https://github.com/ue-too/ue-too/blob/fdbfb1431206f8d7c812dca3e1d0dcd7389f1d6d/packages/being/src/interface.ts#L272)

##### Returns

`Record`\<`States`, [`State`](../interfaces/State.md)\<`EventPayloadMapping`, `Context`, `States`\>\>

#### Implementation of

[`StateMachine`](../interfaces/StateMachine.md).[`states`](../interfaces/StateMachine.md#states-1)

## Methods

### happens()

#### Call Signature

> **happens**\<`K`\>(...`args`): [`EventHandledResult`](../type-aliases/EventHandledResult.md)\<`States`\>

Defined in: [interface.ts:234](https://github.com/ue-too/ue-too/blob/fdbfb1431206f8d7c812dca3e1d0dcd7389f1d6d/packages/being/src/interface.ts#L234)

##### Type Parameters

###### K

`K` *extends* `string` \| `number` \| `symbol`

##### Parameters

###### args

...[`EventArgs`](../type-aliases/EventArgs.md)\<`EventPayloadMapping`, `K`\>

##### Returns

[`EventHandledResult`](../type-aliases/EventHandledResult.md)\<`States`\>

##### Implementation of

[`StateMachine`](../interfaces/StateMachine.md).[`happens`](../interfaces/StateMachine.md#happens)

#### Call Signature

> **happens**\<`K`\>(...`args`): [`EventHandledResult`](../type-aliases/EventHandledResult.md)\<`States`\>

Defined in: [interface.ts:235](https://github.com/ue-too/ue-too/blob/fdbfb1431206f8d7c812dca3e1d0dcd7389f1d6d/packages/being/src/interface.ts#L235)

##### Type Parameters

###### K

`K` *extends* `string`

##### Parameters

###### args

...[`EventArgs`](../type-aliases/EventArgs.md)\<`EventPayloadMapping`, `K`\>

##### Returns

[`EventHandledResult`](../type-aliases/EventHandledResult.md)\<`States`\>

##### Implementation of

[`StateMachine`](../interfaces/StateMachine.md).[`happens`](../interfaces/StateMachine.md#happens)

***

### onHappens()

> **onHappens**(`callback`): `void`

Defined in: [interface.ts:256](https://github.com/ue-too/ue-too/blob/fdbfb1431206f8d7c812dca3e1d0dcd7389f1d6d/packages/being/src/interface.ts#L256)

#### Parameters

##### callback

(`args`, `context`) => `void`

#### Returns

`void`

#### Implementation of

[`StateMachine`](../interfaces/StateMachine.md).[`onHappens`](../interfaces/StateMachine.md#onhappens)

***

### onStateChange()

> **onStateChange**(`callback`): `void`

Defined in: [interface.ts:252](https://github.com/ue-too/ue-too/blob/fdbfb1431206f8d7c812dca3e1d0dcd7389f1d6d/packages/being/src/interface.ts#L252)

#### Parameters

##### callback

[`StateChangeCallback`](../type-aliases/StateChangeCallback.md)\<`States`\>

#### Returns

`void`

#### Implementation of

[`StateMachine`](../interfaces/StateMachine.md).[`onStateChange`](../interfaces/StateMachine.md#onstatechange)

***

### setContext()

> **setContext**(`context`): `void`

Defined in: [interface.ts:264](https://github.com/ue-too/ue-too/blob/fdbfb1431206f8d7c812dca3e1d0dcd7389f1d6d/packages/being/src/interface.ts#L264)

#### Parameters

##### context

`Context`

#### Returns

`void`

#### Implementation of

[`StateMachine`](../interfaces/StateMachine.md).[`setContext`](../interfaces/StateMachine.md#setcontext)

***

### switchTo()

> **switchTo**(`state`): `void`

Defined in: [interface.ts:229](https://github.com/ue-too/ue-too/blob/fdbfb1431206f8d7c812dca3e1d0dcd7389f1d6d/packages/being/src/interface.ts#L229)

#### Parameters

##### state

`States`

#### Returns

`void`

#### Implementation of

[`StateMachine`](../interfaces/StateMachine.md).[`switchTo`](../interfaces/StateMachine.md#switchto)
