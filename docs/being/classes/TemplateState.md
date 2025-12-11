[@ue-too/being](../globals.md) / TemplateState

# Abstract Class: TemplateState\<EventPayloadMapping, Context, States\>

Defined in: [interface.ts:286](https://github.com/ue-too/ue-too/blob/c02efc01f7c19f3efc21823d0489e987a3e92427/packages/being/src/interface.ts#L286)

## Description

This is the template for the state.

This is a base template that you can extend to create a state.
Unlike the TemplateStateMachine, this class is abstract. You need to implement the specific methods that you need.
The core part off the state is the event reactions in which you would define how to handle each event in a state.
You can define an eventReactions object that maps only the events that you need. If this state does not need to handle a specific event, you can just not define it in the eventReactions object.

## Type Parameters

### EventPayloadMapping

`EventPayloadMapping`

### Context

`Context` *extends* [`BaseContext`](../interfaces/BaseContext.md)

### States

`States` *extends* `string` = `"IDLE"`

## Implements

- [`State`](../interfaces/State.md)\<`EventPayloadMapping`, `Context`, `States`\>

## Constructors

### Constructor

> **new TemplateState**\<`EventPayloadMapping`, `Context`, `States`\>(): `TemplateState`\<`EventPayloadMapping`, `Context`, `States`\>

#### Returns

`TemplateState`\<`EventPayloadMapping`, `Context`, `States`\>

## Properties

### \_delay

> `protected` **\_delay**: [`Delay`](../type-aliases/Delay.md)\<`Context`, `EventPayloadMapping`, `States`\> \| `undefined` = `undefined`

Defined in: [interface.ts:291](https://github.com/ue-too/ue-too/blob/c02efc01f7c19f3efc21823d0489e987a3e92427/packages/being/src/interface.ts#L291)

***

### \_eventGuards

> `protected` **\_eventGuards**: `Partial`\<[`EventGuards`](../type-aliases/EventGuards.md)\<`EventPayloadMapping`, `States`, `Context`, [`Guard`](../type-aliases/Guard.md)\<`Context`\>\>\>

Defined in: [interface.ts:290](https://github.com/ue-too/ue-too/blob/c02efc01f7c19f3efc21823d0489e987a3e92427/packages/being/src/interface.ts#L290)

***

### \_guards

> `protected` **\_guards**: [`Guard`](../type-aliases/Guard.md)\<`Context`\>

Defined in: [interface.ts:289](https://github.com/ue-too/ue-too/blob/c02efc01f7c19f3efc21823d0489e987a3e92427/packages/being/src/interface.ts#L289)

***

### eventReactions

> `abstract` **eventReactions**: [`EventReactions`](../type-aliases/EventReactions.md)\<`EventPayloadMapping`, `Context`, `States`\>

Defined in: [interface.ts:288](https://github.com/ue-too/ue-too/blob/c02efc01f7c19f3efc21823d0489e987a3e92427/packages/being/src/interface.ts#L288)

#### Implementation of

[`State`](../interfaces/State.md).[`eventReactions`](../interfaces/State.md#eventreactions)

## Accessors

### delay

#### Get Signature

> **get** **delay**(): [`Delay`](../type-aliases/Delay.md)\<`Context`, `EventPayloadMapping`, `States`\> \| `undefined`

Defined in: [interface.ts:301](https://github.com/ue-too/ue-too/blob/c02efc01f7c19f3efc21823d0489e987a3e92427/packages/being/src/interface.ts#L301)

##### Returns

[`Delay`](../type-aliases/Delay.md)\<`Context`, `EventPayloadMapping`, `States`\> \| `undefined`

#### Implementation of

[`State`](../interfaces/State.md).[`delay`](../interfaces/State.md#delay)

***

### eventGuards

#### Get Signature

> **get** **eventGuards**(): `Partial`\<[`EventGuards`](../type-aliases/EventGuards.md)\<`EventPayloadMapping`, `States`, `Context`, [`Guard`](../type-aliases/Guard.md)\<`Context`\>\>\>

Defined in: [interface.ts:297](https://github.com/ue-too/ue-too/blob/c02efc01f7c19f3efc21823d0489e987a3e92427/packages/being/src/interface.ts#L297)

##### Returns

`Partial`\<[`EventGuards`](../type-aliases/EventGuards.md)\<`EventPayloadMapping`, `States`, `Context`, [`Guard`](../type-aliases/Guard.md)\<`Context`\>\>\>

#### Implementation of

[`State`](../interfaces/State.md).[`eventGuards`](../interfaces/State.md#eventguards)

***

### guards

#### Get Signature

> **get** **guards**(): [`Guard`](../type-aliases/Guard.md)\<`Context`\>

Defined in: [interface.ts:293](https://github.com/ue-too/ue-too/blob/c02efc01f7c19f3efc21823d0489e987a3e92427/packages/being/src/interface.ts#L293)

##### Returns

[`Guard`](../type-aliases/Guard.md)\<`Context`\>

#### Implementation of

[`State`](../interfaces/State.md).[`guards`](../interfaces/State.md#guards)

## Methods

### beforeExit()

> **beforeExit**(`context`, `stateMachine`, `to`): `void`

Defined in: [interface.ts:309](https://github.com/ue-too/ue-too/blob/c02efc01f7c19f3efc21823d0489e987a3e92427/packages/being/src/interface.ts#L309)

#### Parameters

##### context

`Context`

##### stateMachine

[`StateMachine`](../interfaces/StateMachine.md)\<`EventPayloadMapping`, `Context`, `States`\>

##### to

`States`

#### Returns

`void`

#### Implementation of

[`State`](../interfaces/State.md).[`beforeExit`](../interfaces/State.md#beforeexit)

***

### handles()

> **handles**\<`K`\>(`args`, `context`, `stateMachine`): [`EventHandledResult`](../type-aliases/EventHandledResult.md)\<`States`\>

Defined in: [interface.ts:313](https://github.com/ue-too/ue-too/blob/c02efc01f7c19f3efc21823d0489e987a3e92427/packages/being/src/interface.ts#L313)

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### args

[`EventArgs`](../type-aliases/EventArgs.md)\<`EventPayloadMapping`, `K`\>

##### context

`Context`

##### stateMachine

[`StateMachine`](../interfaces/StateMachine.md)\<`EventPayloadMapping`, `Context`, `States`\>

#### Returns

[`EventHandledResult`](../type-aliases/EventHandledResult.md)\<`States`\>

#### Implementation of

[`State`](../interfaces/State.md).[`handles`](../interfaces/State.md#handles)

***

### uponEnter()

> **uponEnter**(`context`, `stateMachine`, `from`): `void`

Defined in: [interface.ts:305](https://github.com/ue-too/ue-too/blob/c02efc01f7c19f3efc21823d0489e987a3e92427/packages/being/src/interface.ts#L305)

#### Parameters

##### context

`Context`

##### stateMachine

[`StateMachine`](../interfaces/StateMachine.md)\<`EventPayloadMapping`, `Context`, `States`\>

##### from

`States`

#### Returns

`void`

#### Implementation of

[`State`](../interfaces/State.md).[`uponEnter`](../interfaces/State.md#uponenter)
