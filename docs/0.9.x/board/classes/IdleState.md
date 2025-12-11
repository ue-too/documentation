[@ue-too/board](../globals.md) / IdleState

# Class: IdleState

Defined in: [packages/board/src/input-interpretation/input-state-machine/touch-input-state-machine.ts:32](https://github.com/ue-too/ue-too/blob/fdbfb1431206f8d7c812dca3e1d0dcd7389f1d6d/packages/board/src/input-interpretation/input-state-machine/touch-input-state-machine.ts#L32)

## Description

The idle state of the touch input state machine.

## Extends

- `TemplateState`\<[`TouchEventMapping`](../type-aliases/TouchEventMapping.md), [`TouchContext`](../interfaces/TouchContext.md), [`TouchStates`](../type-aliases/TouchStates.md)\>

## Constructors

### Constructor

> **new IdleState**(): `IdleState`

#### Returns

`IdleState`

#### Inherited from

`TemplateState<TouchEventMapping, TouchContext, TouchStates>.constructor`

## Properties

### \_delay

> `protected` **\_delay**: `Delay`\<[`TouchContext`](../interfaces/TouchContext.md), [`TouchEventMapping`](../type-aliases/TouchEventMapping.md), [`TouchStates`](../type-aliases/TouchStates.md)\> \| `undefined` = `undefined`

Defined in: [packages/being/src/interface.ts:291](https://github.com/ue-too/ue-too/blob/fdbfb1431206f8d7c812dca3e1d0dcd7389f1d6d/packages/being/src/interface.ts#L291)

#### Inherited from

`TemplateState._delay`

***

### \_eventGuards

> `protected` **\_eventGuards**: `Partial`\<`EventGuards`\<[`TouchEventMapping`](../type-aliases/TouchEventMapping.md), [`TouchStates`](../type-aliases/TouchStates.md), [`TouchContext`](../interfaces/TouchContext.md), *typeof* [`_guards`](#guards)\>\>

Defined in: [packages/board/src/input-interpretation/input-state-machine/touch-input-state-machine.ts:51](https://github.com/ue-too/ue-too/blob/fdbfb1431206f8d7c812dca3e1d0dcd7389f1d6d/packages/board/src/input-interpretation/input-state-machine/touch-input-state-machine.ts#L51)

#### Overrides

`TemplateState._eventGuards`

***

### \_guards

> `protected` **\_guards**: `Guard`\<[`TouchContext`](../interfaces/TouchContext.md), `"touchPointsCount"`\>

Defined in: [packages/board/src/input-interpretation/input-state-machine/touch-input-state-machine.ts:45](https://github.com/ue-too/ue-too/blob/fdbfb1431206f8d7c812dca3e1d0dcd7389f1d6d/packages/board/src/input-interpretation/input-state-machine/touch-input-state-machine.ts#L45)

#### Overrides

`TemplateState._guards`

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

> **get** **eventReactions**(): `EventReactions`\<[`TouchEventMapping`](../type-aliases/TouchEventMapping.md), [`TouchContext`](../interfaces/TouchContext.md), [`TouchStates`](../type-aliases/TouchStates.md)\>

Defined in: [packages/board/src/input-interpretation/input-state-machine/touch-input-state-machine.ts:62](https://github.com/ue-too/ue-too/blob/fdbfb1431206f8d7c812dca3e1d0dcd7389f1d6d/packages/board/src/input-interpretation/input-state-machine/touch-input-state-machine.ts#L62)

##### Returns

`EventReactions`\<[`TouchEventMapping`](../type-aliases/TouchEventMapping.md), [`TouchContext`](../interfaces/TouchContext.md), [`TouchStates`](../type-aliases/TouchStates.md)\>

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

[`TouchContext`](../interfaces/TouchContext.md)

##### stateMachine

`StateMachine`\<[`TouchEventMapping`](../type-aliases/TouchEventMapping.md), [`TouchContext`](../interfaces/TouchContext.md), [`TouchStates`](../type-aliases/TouchStates.md)\>

##### to

[`TouchStates`](../type-aliases/TouchStates.md)

#### Returns

`void`

#### Inherited from

`TemplateState.beforeExit`

***

### handles()

> **handles**\<`K`\>(`args`, `context`, `stateMachine`): `EventHandledResult`\<[`TouchStates`](../type-aliases/TouchStates.md)\>

Defined in: [packages/being/src/interface.ts:313](https://github.com/ue-too/ue-too/blob/fdbfb1431206f8d7c812dca3e1d0dcd7389f1d6d/packages/being/src/interface.ts#L313)

#### Type Parameters

##### K

`K` *extends* `string`

#### Parameters

##### args

`EventArgs`\<[`TouchEventMapping`](../type-aliases/TouchEventMapping.md), `K`\>

##### context

[`TouchContext`](../interfaces/TouchContext.md)

##### stateMachine

`StateMachine`\<[`TouchEventMapping`](../type-aliases/TouchEventMapping.md), [`TouchContext`](../interfaces/TouchContext.md), [`TouchStates`](../type-aliases/TouchStates.md)\>

#### Returns

`EventHandledResult`\<[`TouchStates`](../type-aliases/TouchStates.md)\>

#### Inherited from

`TemplateState.handles`

***

### touchend()

> **touchend**(`context`, `payload`): `void`

Defined in: [packages/board/src/input-interpretation/input-state-machine/touch-input-state-machine.ts:70](https://github.com/ue-too/ue-too/blob/fdbfb1431206f8d7c812dca3e1d0dcd7389f1d6d/packages/board/src/input-interpretation/input-state-machine/touch-input-state-machine.ts#L70)

#### Parameters

##### context

[`TouchContext`](../interfaces/TouchContext.md)

##### payload

[`TouchEventPayload`](../type-aliases/TouchEventPayload.md)

#### Returns

`void`

***

### touchstart()

> **touchstart**(`context`, `payload`): `void`

Defined in: [packages/board/src/input-interpretation/input-state-machine/touch-input-state-machine.ts:66](https://github.com/ue-too/ue-too/blob/fdbfb1431206f8d7c812dca3e1d0dcd7389f1d6d/packages/board/src/input-interpretation/input-state-machine/touch-input-state-machine.ts#L66)

#### Parameters

##### context

[`TouchContext`](../interfaces/TouchContext.md)

##### payload

[`TouchEventPayload`](../type-aliases/TouchEventPayload.md)

#### Returns

`void`

***

### uponEnter()

> **uponEnter**(`context`, `stateMachine`, `from`): `void`

Defined in: [packages/being/src/interface.ts:305](https://github.com/ue-too/ue-too/blob/fdbfb1431206f8d7c812dca3e1d0dcd7389f1d6d/packages/being/src/interface.ts#L305)

#### Parameters

##### context

[`TouchContext`](../interfaces/TouchContext.md)

##### stateMachine

`StateMachine`\<[`TouchEventMapping`](../type-aliases/TouchEventMapping.md), [`TouchContext`](../interfaces/TouchContext.md), [`TouchStates`](../type-aliases/TouchStates.md)\>

##### from

[`TouchStates`](../type-aliases/TouchStates.md)

#### Returns

`void`

#### Inherited from

`TemplateState.uponEnter`
