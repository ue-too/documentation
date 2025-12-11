[@ue-too/board](../globals.md) / ReadyToSelectState

# Class: ReadyToSelectState

Defined in: [packages/board/src/input-interpretation/input-state-machine/kmt-input-state-machine.ts:213](https://github.com/ue-too/ue-too/blob/fdbfb1431206f8d7c812dca3e1d0dcd7389f1d6d/packages/board/src/input-interpretation/input-state-machine/kmt-input-state-machine.ts#L213)

## Description

The ready to select state of the keyboard mouse and trackpad input state machine.

## Extends

- `TemplateState`\<[`KmtInputEventMapping`](../type-aliases/KmtInputEventMapping.md), [`SelectionContext`](../type-aliases/SelectionContext.md), [`ReadyToSelectStatePossibleTargetStates`](../type-aliases/ReadyToSelectStatePossibleTargetStates.md)\>

## Constructors

### Constructor

> **new ReadyToSelectState**(): `ReadyToSelectState`

Defined in: [packages/board/src/input-interpretation/input-state-machine/kmt-input-state-machine.ts:215](https://github.com/ue-too/ue-too/blob/fdbfb1431206f8d7c812dca3e1d0dcd7389f1d6d/packages/board/src/input-interpretation/input-state-machine/kmt-input-state-machine.ts#L215)

#### Returns

`ReadyToSelectState`

#### Overrides

`TemplateState<KmtInputEventMapping, SelectionContext, ReadyToSelectStatePossibleTargetStates>.constructor`

## Properties

### \_delay

> `protected` **\_delay**: `Delay`\<[`SelectionContext`](../type-aliases/SelectionContext.md), [`KmtInputEventMapping`](../type-aliases/KmtInputEventMapping.md), [`ReadyToSelectStatePossibleTargetStates`](../type-aliases/ReadyToSelectStatePossibleTargetStates.md)\> \| `undefined` = `undefined`

Defined in: [packages/being/src/interface.ts:291](https://github.com/ue-too/ue-too/blob/fdbfb1431206f8d7c812dca3e1d0dcd7389f1d6d/packages/being/src/interface.ts#L291)

#### Inherited from

`TemplateState._delay`

***

### \_eventGuards

> `protected` **\_eventGuards**: `Partial`\<`EventGuards`\<`EventPayloadMapping`, `States`, `Context`, `Guard`\<`Context`\>\>\>

Defined in: [packages/being/src/interface.ts:290](https://github.com/ue-too/ue-too/blob/fdbfb1431206f8d7c812dca3e1d0dcd7389f1d6d/packages/being/src/interface.ts#L290)

#### Inherited from

`TemplateState._eventGuards`

***

### \_eventReactions

> `protected` **\_eventReactions**: `EventReactions`\<[`KmtInputEventMapping`](../type-aliases/KmtInputEventMapping.md), [`SelectionContext`](../type-aliases/SelectionContext.md), [`ReadyToSelectStatePossibleTargetStates`](../type-aliases/ReadyToSelectStatePossibleTargetStates.md)\>

Defined in: [packages/board/src/input-interpretation/input-state-machine/kmt-input-state-machine.ts:225](https://github.com/ue-too/ue-too/blob/fdbfb1431206f8d7c812dca3e1d0dcd7389f1d6d/packages/board/src/input-interpretation/input-state-machine/kmt-input-state-machine.ts#L225)

***

### \_guards

> `protected` **\_guards**: `Guard`\<`Context`\>

Defined in: [packages/being/src/interface.ts:289](https://github.com/ue-too/ue-too/blob/fdbfb1431206f8d7c812dca3e1d0dcd7389f1d6d/packages/being/src/interface.ts#L289)

#### Inherited from

`TemplateState._guards`

***

### leftPointerMove()

> **leftPointerMove**: (`context`, `payload`) => `void`

Defined in: [packages/board/src/input-interpretation/input-state-machine/kmt-input-state-machine.ts:219](https://github.com/ue-too/ue-too/blob/fdbfb1431206f8d7c812dca3e1d0dcd7389f1d6d/packages/board/src/input-interpretation/input-state-machine/kmt-input-state-machine.ts#L219)

#### Parameters

##### context

[`SelectionContext`](../type-aliases/SelectionContext.md)

##### payload

[`PointerEventPayload`](../type-aliases/PointerEventPayload.md)

#### Returns

`void`

## Accessors

### delay

#### Get Signature

> **get** **delay**(): `Delay`\<`Context`, `EventPayloadMapping`, `States`\> \| `undefined`

Defined in: [packages/being/src/interface.ts:301](https://github.com/ue-too/ue-too/blob/fdbfb1431206f8d7c812dca3e1d0dcd7389f1d6d/packages/being/src/interface.ts#L301)

##### Returns

`Delay`\<`Context`, `EventPayloadMapping`, `States`\> \| `undefined`

#### Inherited from

`TemplateState.delay`

***

### eventGuards

#### Get Signature

> **get** **eventGuards**(): `Partial`\<`EventGuards`\<`EventPayloadMapping`, `States`, `Context`, `Guard`\<`Context`\>\>\>

Defined in: [packages/being/src/interface.ts:297](https://github.com/ue-too/ue-too/blob/fdbfb1431206f8d7c812dca3e1d0dcd7389f1d6d/packages/being/src/interface.ts#L297)

##### Returns

`Partial`\<`EventGuards`\<`EventPayloadMapping`, `States`, `Context`, `Guard`\<`Context`\>\>\>

#### Inherited from

`TemplateState.eventGuards`

***

### eventReactions

#### Get Signature

> **get** **eventReactions**(): `EventReactions`\<[`KmtInputEventMapping`](../type-aliases/KmtInputEventMapping.md), [`SelectionContext`](../type-aliases/SelectionContext.md), [`ReadyToSelectStatePossibleTargetStates`](../type-aliases/ReadyToSelectStatePossibleTargetStates.md)\>

Defined in: [packages/board/src/input-interpretation/input-state-machine/kmt-input-state-machine.ts:240](https://github.com/ue-too/ue-too/blob/fdbfb1431206f8d7c812dca3e1d0dcd7389f1d6d/packages/board/src/input-interpretation/input-state-machine/kmt-input-state-machine.ts#L240)

##### Returns

`EventReactions`\<[`KmtInputEventMapping`](../type-aliases/KmtInputEventMapping.md), [`SelectionContext`](../type-aliases/SelectionContext.md), [`ReadyToSelectStatePossibleTargetStates`](../type-aliases/ReadyToSelectStatePossibleTargetStates.md)\>

#### Overrides

`TemplateState.eventReactions`

***

### guards

#### Get Signature

> **get** **guards**(): `Guard`\<`Context`\>

Defined in: [packages/being/src/interface.ts:293](https://github.com/ue-too/ue-too/blob/fdbfb1431206f8d7c812dca3e1d0dcd7389f1d6d/packages/being/src/interface.ts#L293)

##### Returns

`Guard`\<`Context`\>

#### Inherited from

`TemplateState.guards`

## Methods

### beforeExit()

> **beforeExit**(`context`, `stateMachine`, `to`): `void`

Defined in: [packages/being/src/interface.ts:309](https://github.com/ue-too/ue-too/blob/fdbfb1431206f8d7c812dca3e1d0dcd7389f1d6d/packages/being/src/interface.ts#L309)

#### Parameters

##### context

[`SelectionContext`](../type-aliases/SelectionContext.md)

##### stateMachine

`StateMachine`\<[`KmtInputEventMapping`](../type-aliases/KmtInputEventMapping.md), [`SelectionContext`](../type-aliases/SelectionContext.md), [`ReadyToSelectStatePossibleTargetStates`](../type-aliases/ReadyToSelectStatePossibleTargetStates.md)\>

##### to

[`ReadyToSelectStatePossibleTargetStates`](../type-aliases/ReadyToSelectStatePossibleTargetStates.md)

#### Returns

`void`

#### Inherited from

`TemplateState.beforeExit`

***

### handles()

> **handles**\<`K`\>(`args`, `context`, `stateMachine`): `EventHandledResult`\<[`ReadyToSelectStatePossibleTargetStates`](../type-aliases/ReadyToSelectStatePossibleTargetStates.md)\>

Defined in: [packages/being/src/interface.ts:313](https://github.com/ue-too/ue-too/blob/fdbfb1431206f8d7c812dca3e1d0dcd7389f1d6d/packages/being/src/interface.ts#L313)

#### Type Parameters

##### K

`K` *extends* `string`

#### Parameters

##### args

`EventArgs`\<[`KmtInputEventMapping`](../type-aliases/KmtInputEventMapping.md), `K`\>

##### context

[`SelectionContext`](../type-aliases/SelectionContext.md)

##### stateMachine

`StateMachine`\<[`KmtInputEventMapping`](../type-aliases/KmtInputEventMapping.md), [`SelectionContext`](../type-aliases/SelectionContext.md), [`ReadyToSelectStatePossibleTargetStates`](../type-aliases/ReadyToSelectStatePossibleTargetStates.md)\>

#### Returns

`EventHandledResult`\<[`ReadyToSelectStatePossibleTargetStates`](../type-aliases/ReadyToSelectStatePossibleTargetStates.md)\>

#### Inherited from

`TemplateState.handles`

***

### uponEnter()

> **uponEnter**(`context`, `stateMachine`, `from`): `void`

Defined in: [packages/being/src/interface.ts:305](https://github.com/ue-too/ue-too/blob/fdbfb1431206f8d7c812dca3e1d0dcd7389f1d6d/packages/being/src/interface.ts#L305)

#### Parameters

##### context

[`SelectionContext`](../type-aliases/SelectionContext.md)

##### stateMachine

`StateMachine`\<[`KmtInputEventMapping`](../type-aliases/KmtInputEventMapping.md), [`SelectionContext`](../type-aliases/SelectionContext.md), [`ReadyToSelectStatePossibleTargetStates`](../type-aliases/ReadyToSelectStatePossibleTargetStates.md)\>

##### from

[`ReadyToSelectStatePossibleTargetStates`](../type-aliases/ReadyToSelectStatePossibleTargetStates.md)

#### Returns

`void`

#### Inherited from

`TemplateState.uponEnter`
