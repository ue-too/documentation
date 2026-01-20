[@ue-too/being](../globals.md) / HierarchicalStateMachine

# Class: HierarchicalStateMachine\<EventPayloadMapping, Context, States, EventOutputMapping\>

Defined in: [hierarchical.ts:233](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/being/src/hierarchical.ts#L233)

Extended state machine that supports hierarchical state paths.

## Remarks

This class extends TemplateStateMachine to track and expose hierarchical
state paths when composite states are used.

## Extends

- [`TemplateStateMachine`](TemplateStateMachine.md)\<`EventPayloadMapping`, `Context`, `States`, `EventOutputMapping`\>

## Type Parameters

### EventPayloadMapping

`EventPayloadMapping` = `any`

Event payload mapping

### Context

`Context` *extends* [`BaseContext`](../interfaces/BaseContext.md) = [`BaseContext`](../interfaces/BaseContext.md)

Context type

### States

`States` *extends* `string` = `string`

State names

### EventOutputMapping

`EventOutputMapping` *extends* `Partial`\<`Record`\<keyof `EventPayloadMapping`, `unknown`\>\> = [`DefaultOutputMapping`](../type-aliases/DefaultOutputMapping.md)\<`EventPayloadMapping`\>

Event output mapping

## Constructors

### Constructor

> **new HierarchicalStateMachine**\<`EventPayloadMapping`, `Context`, `States`, `EventOutputMapping`\>(`states`, `initialState`, `context`, `autoStart`): `HierarchicalStateMachine`\<`EventPayloadMapping`, `Context`, `States`, `EventOutputMapping`\>

Defined in: [interface.ts:452](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/being/src/interface.ts#L452)

#### Parameters

##### states

`Record`\<`States`, [`State`](../interfaces/State.md)\<`EventPayloadMapping`, `Context`, `States`, `EventOutputMapping`\>\>

##### initialState

`States`

##### context

`Context`

##### autoStart

`boolean` = `true`

#### Returns

`HierarchicalStateMachine`\<`EventPayloadMapping`, `Context`, `States`, `EventOutputMapping`\>

#### Inherited from

[`TemplateStateMachine`](TemplateStateMachine.md).[`constructor`](TemplateStateMachine.md#constructor)

## Properties

### \_context

> `protected` **\_context**: `Context`

Defined in: [interface.ts:445](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/being/src/interface.ts#L445)

#### Inherited from

[`TemplateStateMachine`](TemplateStateMachine.md).[`_context`](TemplateStateMachine.md#context)

***

### \_currentState

> `protected` **\_currentState**: `"INITIAL"` \| `"TERMINAL"` \| `States`

Defined in: [interface.ts:443](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/being/src/interface.ts#L443)

#### Inherited from

[`TemplateStateMachine`](TemplateStateMachine.md).[`_currentState`](TemplateStateMachine.md#currentstate)

***

### \_happensCallbacks

> `protected` **\_happensCallbacks**: (`args`, `context`) => `void`[]

Defined in: [interface.ts:448](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/being/src/interface.ts#L448)

#### Parameters

##### args

[`EventArgs`](../type-aliases/EventArgs.md)\<`EventPayloadMapping`, `string`\> | [`EventArgs`](../type-aliases/EventArgs.md)\<`EventPayloadMapping`, keyof `EventPayloadMapping`\>

##### context

`Context`

#### Returns

`void`

#### Inherited from

[`TemplateStateMachine`](TemplateStateMachine.md).[`_happensCallbacks`](TemplateStateMachine.md#happenscallbacks)

***

### \_initialState

> `protected` **\_initialState**: `States`

Defined in: [interface.ts:450](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/being/src/interface.ts#L450)

#### Inherited from

[`TemplateStateMachine`](TemplateStateMachine.md).[`_initialState`](TemplateStateMachine.md#initialstate)

***

### \_stateChangeCallbacks

> `protected` **\_stateChangeCallbacks**: [`StateChangeCallback`](../type-aliases/StateChangeCallback.md)\<`States`\>[]

Defined in: [interface.ts:447](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/being/src/interface.ts#L447)

#### Inherited from

[`TemplateStateMachine`](TemplateStateMachine.md).[`_stateChangeCallbacks`](TemplateStateMachine.md#statechangecallbacks)

***

### \_states

> `protected` **\_states**: `Record`\<`States`, [`State`](../interfaces/State.md)\<`EventPayloadMapping`, `Context`, `States`, `EventOutputMapping`\>\>

Defined in: [interface.ts:444](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/being/src/interface.ts#L444)

#### Inherited from

[`TemplateStateMachine`](TemplateStateMachine.md).[`_states`](TemplateStateMachine.md#states)

***

### \_statesArray

> `protected` **\_statesArray**: `States`[]

Defined in: [interface.ts:446](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/being/src/interface.ts#L446)

#### Inherited from

[`TemplateStateMachine`](TemplateStateMachine.md).[`_statesArray`](TemplateStateMachine.md#statesarray)

***

### \_timeouts

> `protected` **\_timeouts**: `number` \| `undefined` = `undefined`

Defined in: [interface.ts:449](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/being/src/interface.ts#L449)

#### Inherited from

[`TemplateStateMachine`](TemplateStateMachine.md).[`_timeouts`](TemplateStateMachine.md#timeouts)

## Accessors

### currentState

#### Get Signature

> **get** **currentState**(): `"INITIAL"` \| `"TERMINAL"` \| `States`

Defined in: [interface.ts:528](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/being/src/interface.ts#L528)

##### Returns

`"INITIAL"` \| `"TERMINAL"` \| `States`

#### Inherited from

[`TemplateStateMachine`](TemplateStateMachine.md).[`currentState`](TemplateStateMachine.md#currentstate)

***

### possibleStates

#### Get Signature

> **get** **possibleStates**(): `States`[]

Defined in: [interface.ts:536](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/being/src/interface.ts#L536)

##### Returns

`States`[]

#### Inherited from

[`TemplateStateMachine`](TemplateStateMachine.md).[`possibleStates`](TemplateStateMachine.md#possiblestates)

***

### states

#### Get Signature

> **get** **states**(): `Record`\<`States`, [`State`](../interfaces/State.md)\<`EventPayloadMapping`, `Context`, `States`, `EventOutputMapping`\>\>

Defined in: [interface.ts:540](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/being/src/interface.ts#L540)

##### Returns

`Record`\<`States`, [`State`](../interfaces/State.md)\<`EventPayloadMapping`, `Context`, `States`, `EventOutputMapping`\>\>

#### Inherited from

[`TemplateStateMachine`](TemplateStateMachine.md).[`states`](TemplateStateMachine.md#states-1)

## Methods

### getActiveStatePath()

> **getActiveStatePath**(): `string`[]

Defined in: [hierarchical.ts:263](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/being/src/hierarchical.ts#L263)

Gets all active states in the hierarchy.
Returns an array where the first element is the top-level state,
and subsequent elements are nested child states.

#### Returns

`string`[]

***

### getCurrentStatePath()

> **getCurrentStatePath**(): `string`

Defined in: [hierarchical.ts:244](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/being/src/hierarchical.ts#L244)

Gets the current hierarchical state path.
Returns a simple state name for non-composite states,
or a dot-notation path for composite states (e.g., "PARENT.CHILD").

#### Returns

`string`

***

### happens()

#### Call Signature

> **happens**\<`K`\>(...`args`): [`EventResult`](../type-aliases/EventResult.md)\<`States`, `K` *extends* keyof `EventOutputMapping` ? `EventOutputMapping`\[`K`\<`K`\>\] : `void`\>

Defined in: [interface.ts:497](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/being/src/interface.ts#L497)

##### Type Parameters

###### K

`K` *extends* `string` \| `number` \| `symbol`

##### Parameters

###### args

...[`EventArgs`](../type-aliases/EventArgs.md)\<`EventPayloadMapping`, `K`\>

##### Returns

[`EventResult`](../type-aliases/EventResult.md)\<`States`, `K` *extends* keyof `EventOutputMapping` ? `EventOutputMapping`\[`K`\<`K`\>\] : `void`\>

##### Inherited from

[`TemplateStateMachine`](TemplateStateMachine.md).[`happens`](TemplateStateMachine.md#happens)

#### Call Signature

> **happens**\<`K`\>(...`args`): [`EventResult`](../type-aliases/EventResult.md)\<`States`, `unknown`\>

Defined in: [interface.ts:498](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/being/src/interface.ts#L498)

##### Type Parameters

###### K

`K` *extends* `string`

##### Parameters

###### args

...[`EventArgs`](../type-aliases/EventArgs.md)\<`EventPayloadMapping`, `K`\>

##### Returns

[`EventResult`](../type-aliases/EventResult.md)\<`States`, `unknown`\>

##### Inherited from

[`TemplateStateMachine`](TemplateStateMachine.md).[`happens`](TemplateStateMachine.md#happens)

***

### isInStatePath()

> **isInStatePath**(`path`): `boolean`

Defined in: [hierarchical.ts:288](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/being/src/hierarchical.ts#L288)

Checks if the state machine is currently in a specific hierarchical path.
Supports both simple state names and dot-notation paths.

#### Parameters

##### path

`string`

State path to check (e.g., "PARENT" or "PARENT.CHILD")

#### Returns

`boolean`

***

### onHappens()

> **onHappens**(`callback`): `void`

Defined in: [interface.ts:524](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/being/src/interface.ts#L524)

#### Parameters

##### callback

(`args`, `context`) => `void`

#### Returns

`void`

#### Inherited from

[`TemplateStateMachine`](TemplateStateMachine.md).[`onHappens`](TemplateStateMachine.md#onhappens)

***

### onStateChange()

> **onStateChange**(`callback`): `void`

Defined in: [interface.ts:520](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/being/src/interface.ts#L520)

#### Parameters

##### callback

[`StateChangeCallback`](../type-aliases/StateChangeCallback.md)\<`States`\>

#### Returns

`void`

#### Inherited from

[`TemplateStateMachine`](TemplateStateMachine.md).[`onStateChange`](TemplateStateMachine.md#onstatechange)

***

### reset()

> **reset**(): `void`

Defined in: [interface.ts:465](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/being/src/interface.ts#L465)

#### Returns

`void`

#### Inherited from

[`TemplateStateMachine`](TemplateStateMachine.md).[`reset`](TemplateStateMachine.md#reset)

***

### setContext()

> **setContext**(`context`): `void`

Defined in: [interface.ts:532](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/being/src/interface.ts#L532)

#### Parameters

##### context

`Context`

#### Returns

`void`

#### Inherited from

[`TemplateStateMachine`](TemplateStateMachine.md).[`setContext`](TemplateStateMachine.md#setcontext)

***

### start()

> **start**(): `void`

Defined in: [interface.ts:471](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/being/src/interface.ts#L471)

#### Returns

`void`

#### Inherited from

[`TemplateStateMachine`](TemplateStateMachine.md).[`start`](TemplateStateMachine.md#start)

***

### switchTo()

> **switchTo**(`state`): `void`

Defined in: [interface.ts:492](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/being/src/interface.ts#L492)

#### Parameters

##### state

`"INITIAL"` | `"TERMINAL"` | `States`

#### Returns

`void`

#### Inherited from

[`TemplateStateMachine`](TemplateStateMachine.md).[`switchTo`](TemplateStateMachine.md#switchto)

***

### wrapup()

> **wrapup**(): `void`

Defined in: [interface.ts:480](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/being/src/interface.ts#L480)

#### Returns

`void`

#### Inherited from

[`TemplateStateMachine`](TemplateStateMachine.md).[`wrapup`](TemplateStateMachine.md#wrapup)
