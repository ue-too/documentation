[@ue-too/being](../globals.md) / CompositeState

# Abstract Class: CompositeState\<EventPayloadMapping, Context, ParentStates, ChildStates, EventOutputMapping\>

Defined in: [hierarchical.ts:99](https://github.com/ue-too/ue-too/blob/1055c6abca1ea3a0e952b0825f36e0ca2527df85/packages/being/src/hierarchical.ts#L99)

Composite state that contains a child state machine.

## Remarks

A composite state is a state that contains its own internal state machine.
When the composite state is active, its child state machine is also active.
Events are first handled by the child state machine, and if unhandled,
they bubble up to the parent state machine.

## Example

```typescript
type ParentStates = "IDLE" | "ACTIVE";
type ChildStates = "LOADING" | "READY" | "ERROR";

class ActiveState extends CompositeState<Events, Context, ParentStates, ChildStates> {
  eventReactions = {
    stop: {
      action: () => console.log("Stopping..."),
      defaultTargetState: "IDLE"
    }
  };

  getChildStateMachine() {
    return {
      stateMachine: new TemplateStateMachine(...),
      defaultChildState: "LOADING",
      rememberHistory: true
    };
  }
}
```

## Extends

- [`TemplateState`](TemplateState.md)\<`EventPayloadMapping`, `Context`, `ParentStates`, `EventOutputMapping`\>

## Type Parameters

### EventPayloadMapping

`EventPayloadMapping` = `any`

Event payload mapping

### Context

`Context` *extends* [`BaseContext`](../interfaces/BaseContext.md) = [`BaseContext`](../interfaces/BaseContext.md)

Context type

### ParentStates

`ParentStates` *extends* `string` = `string`

Parent state names

### ChildStates

`ChildStates` *extends* `string` = `string`

Child state names

### EventOutputMapping

`EventOutputMapping` *extends* `Partial`\<`Record`\<keyof `EventPayloadMapping`, `unknown`\>\> = [`DefaultOutputMapping`](../type-aliases/DefaultOutputMapping.md)\<`EventPayloadMapping`\>

Event output mapping

## Constructors

### Constructor

> **new CompositeState**\<`EventPayloadMapping`, `Context`, `ParentStates`, `ChildStates`, `EventOutputMapping`\>(): `CompositeState`\<`EventPayloadMapping`, `Context`, `ParentStates`, `ChildStates`, `EventOutputMapping`\>

#### Returns

`CompositeState`\<`EventPayloadMapping`, `Context`, `ParentStates`, `ChildStates`, `EventOutputMapping`\>

#### Inherited from

[`TemplateState`](TemplateState.md).[`constructor`](TemplateState.md#constructor)

## Properties

### \_childStateMachineConfig

> `protected` **\_childStateMachineConfig**: [`ChildStateMachineConfig`](../interfaces/ChildStateMachineConfig.md)\<`EventPayloadMapping`, `Context`, `ChildStates`, `EventOutputMapping`\> \| `null` = `null`

Defined in: [hierarchical.ts:106](https://github.com/ue-too/ue-too/blob/1055c6abca1ea3a0e952b0825f36e0ca2527df85/packages/being/src/hierarchical.ts#L106)

***

### \_context

> `protected` **\_context**: `Context` \| `null` = `null`

Defined in: [hierarchical.ts:108](https://github.com/ue-too/ue-too/blob/1055c6abca1ea3a0e952b0825f36e0ca2527df85/packages/being/src/hierarchical.ts#L108)

***

### \_delay

> `protected` **\_delay**: [`Delay`](../type-aliases/Delay.md)\<`Context`, `EventPayloadMapping`, `ParentStates`, `EventOutputMapping`\> \| `undefined` = `undefined`

Defined in: [interface.ts:638](https://github.com/ue-too/ue-too/blob/1055c6abca1ea3a0e952b0825f36e0ca2527df85/packages/being/src/interface.ts#L638)

#### Inherited from

[`TemplateState`](TemplateState.md).[`_delay`](TemplateState.md#delay)

***

### \_eventGuards

> `protected` **\_eventGuards**: `Partial`\<[`EventGuards`](../type-aliases/EventGuards.md)\<`EventPayloadMapping`, `States`, `Context`, [`Guard`](../type-aliases/Guard.md)\<`Context`\>\>\>

Defined in: [interface.ts:637](https://github.com/ue-too/ue-too/blob/1055c6abca1ea3a0e952b0825f36e0ca2527df85/packages/being/src/interface.ts#L637)

#### Inherited from

[`TemplateState`](TemplateState.md).[`_eventGuards`](TemplateState.md#eventguards)

***

### \_eventReactions

> `protected` **\_eventReactions**: [`EventReactions`](../type-aliases/EventReactions.md)\<`EventPayloadMapping`, `Context`, `States`, `EventOutputMapping`\>

Defined in: [interface.ts:635](https://github.com/ue-too/ue-too/blob/1055c6abca1ea3a0e952b0825f36e0ca2527df85/packages/being/src/interface.ts#L635)

#### Inherited from

[`TemplateState`](TemplateState.md).[`_eventReactions`](TemplateState.md#eventreactions)

***

### \_guards

> `protected` **\_guards**: [`Guard`](../type-aliases/Guard.md)\<`Context`\>

Defined in: [interface.ts:636](https://github.com/ue-too/ue-too/blob/1055c6abca1ea3a0e952b0825f36e0ca2527df85/packages/being/src/interface.ts#L636)

#### Inherited from

[`TemplateState`](TemplateState.md).[`_guards`](TemplateState.md#guards)

***

### \_historyState

> `protected` **\_historyState**: `ChildStates` \| `null` = `null`

Defined in: [hierarchical.ts:107](https://github.com/ue-too/ue-too/blob/1055c6abca1ea3a0e952b0825f36e0ca2527df85/packages/being/src/hierarchical.ts#L107)

## Accessors

### delay

#### Get Signature

> **get** **delay**(): [`Delay`](../type-aliases/Delay.md)\<`Context`, `EventPayloadMapping`, `States`, `EventOutputMapping`\> \| `undefined`

Defined in: [interface.ts:652](https://github.com/ue-too/ue-too/blob/1055c6abca1ea3a0e952b0825f36e0ca2527df85/packages/being/src/interface.ts#L652)

##### Returns

[`Delay`](../type-aliases/Delay.md)\<`Context`, `EventPayloadMapping`, `States`, `EventOutputMapping`\> \| `undefined`

#### Inherited from

[`TemplateState`](TemplateState.md).[`delay`](TemplateState.md#delay)

***

### eventGuards

#### Get Signature

> **get** **eventGuards**(): `Partial`\<[`EventGuards`](../type-aliases/EventGuards.md)\<`EventPayloadMapping`, `States`, `Context`, [`Guard`](../type-aliases/Guard.md)\<`Context`\>\>\>

Defined in: [interface.ts:648](https://github.com/ue-too/ue-too/blob/1055c6abca1ea3a0e952b0825f36e0ca2527df85/packages/being/src/interface.ts#L648)

##### Returns

`Partial`\<[`EventGuards`](../type-aliases/EventGuards.md)\<`EventPayloadMapping`, `States`, `Context`, [`Guard`](../type-aliases/Guard.md)\<`Context`\>\>\>

#### Inherited from

[`TemplateState`](TemplateState.md).[`eventGuards`](TemplateState.md#eventguards)

***

### guards

#### Get Signature

> **get** **guards**(): [`Guard`](../type-aliases/Guard.md)\<`Context`\>

Defined in: [interface.ts:644](https://github.com/ue-too/ue-too/blob/1055c6abca1ea3a0e952b0825f36e0ca2527df85/packages/being/src/interface.ts#L644)

##### Returns

[`Guard`](../type-aliases/Guard.md)\<`Context`\>

#### Inherited from

[`TemplateState`](TemplateState.md).[`guards`](TemplateState.md#guards)

***

### handlingEvents

#### Get Signature

> **get** **handlingEvents**(): keyof `EventPayloadMapping`[]

Defined in: [interface.ts:640](https://github.com/ue-too/ue-too/blob/1055c6abca1ea3a0e952b0825f36e0ca2527df85/packages/being/src/interface.ts#L640)

##### Returns

keyof `EventPayloadMapping`[]

#### Inherited from

[`TemplateState`](TemplateState.md).[`handlingEvents`](TemplateState.md#handlingevents)

## Methods

### beforeExit()

> **beforeExit**(`context`, `stateMachine`, `to`): `void`

Defined in: [hierarchical.ts:169](https://github.com/ue-too/ue-too/blob/1055c6abca1ea3a0e952b0825f36e0ca2527df85/packages/being/src/hierarchical.ts#L169)

#### Parameters

##### context

`Context`

##### stateMachine

[`StateMachine`](../interfaces/StateMachine.md)\<`EventPayloadMapping`, `Context`, `ParentStates`, `EventOutputMapping`\>

##### to

`"TERMINAL"` | `ParentStates`

#### Returns

`void`

#### Overrides

[`TemplateState`](TemplateState.md).[`beforeExit`](TemplateState.md#beforeexit)

***

### getChildStateMachine()

> `abstract` `protected` **getChildStateMachine**(): [`ChildStateMachineConfig`](../interfaces/ChildStateMachineConfig.md)\<`EventPayloadMapping`, `Context`, `ChildStates`, `EventOutputMapping`\>

Defined in: [hierarchical.ts:114](https://github.com/ue-too/ue-too/blob/1055c6abca1ea3a0e952b0825f36e0ca2527df85/packages/being/src/hierarchical.ts#L114)

Returns the configuration for the child state machine.
Override this method to provide child state machine setup.

#### Returns

[`ChildStateMachineConfig`](../interfaces/ChildStateMachineConfig.md)\<`EventPayloadMapping`, `Context`, `ChildStates`, `EventOutputMapping`\>

***

### getCurrentChildState()

> **getCurrentChildState**(): `ChildStates` \| `null`

Defined in: [hierarchical.ts:119](https://github.com/ue-too/ue-too/blob/1055c6abca1ea3a0e952b0825f36e0ca2527df85/packages/being/src/hierarchical.ts#L119)

Gets the current child state, or null if no child state machine is active.

#### Returns

`ChildStates` \| `null`

***

### getStatePath()

> **getStatePath**(`parentState`): [`HierarchicalStatePath`](../type-aliases/HierarchicalStatePath.md)\<`ParentStates`, `ChildStates`\>

Defined in: [hierarchical.ts:132](https://github.com/ue-too/ue-too/blob/1055c6abca1ea3a0e952b0825f36e0ca2527df85/packages/being/src/hierarchical.ts#L132)

Gets the full hierarchical path of the current state.

#### Parameters

##### parentState

`ParentStates`

#### Returns

[`HierarchicalStatePath`](../type-aliases/HierarchicalStatePath.md)\<`ParentStates`, `ChildStates`\>

***

### handles()

> **handles**\<`K`\>(`args`, `context`, `stateMachine`): [`EventResult`](../type-aliases/EventResult.md)\<`ParentStates`, `K` *extends* keyof `EventOutputMapping` ? `EventOutputMapping`\[`K`\<`K`\>\] : `void`\>

Defined in: [hierarchical.ts:195](https://github.com/ue-too/ue-too/blob/1055c6abca1ea3a0e952b0825f36e0ca2527df85/packages/being/src/hierarchical.ts#L195)

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### args

[`EventArgs`](../type-aliases/EventArgs.md)\<`EventPayloadMapping`, `K`\>

##### context

`Context`

##### stateMachine

[`StateMachine`](../interfaces/StateMachine.md)\<`EventPayloadMapping`, `Context`, `ParentStates`, `EventOutputMapping`\>

#### Returns

[`EventResult`](../type-aliases/EventResult.md)\<`ParentStates`, `K` *extends* keyof `EventOutputMapping` ? `EventOutputMapping`\[`K`\<`K`\>\] : `void`\>

#### Overrides

[`TemplateState`](TemplateState.md).[`handles`](TemplateState.md#handles)

***

### uponEnter()

> **uponEnter**(`context`, `stateMachine`, `from`): `void`

Defined in: [hierarchical.ts:140](https://github.com/ue-too/ue-too/blob/1055c6abca1ea3a0e952b0825f36e0ca2527df85/packages/being/src/hierarchical.ts#L140)

#### Parameters

##### context

`Context`

##### stateMachine

[`StateMachine`](../interfaces/StateMachine.md)\<`EventPayloadMapping`, `Context`, `ParentStates`, `EventOutputMapping`\>

##### from

`"INITIAL"` | `ParentStates`

#### Returns

`void`

#### Overrides

[`TemplateState`](TemplateState.md).[`uponEnter`](TemplateState.md#uponenter)
