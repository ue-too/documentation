[@ue-too/board](../globals.md) / TransitionState

# Class: TransitionState

Defined in: [packages/board/src/camera/camera-mux/animation-and-lock/pan-control-state-machine.ts:154](https://github.com/ue-too/ue-too/blob/c02efc01f7c19f3efc21823d0489e987a3e92427/packages/board/src/camera/camera-mux/animation-and-lock/pan-control-state-machine.ts#L154)

## Description

The transition state of the pan control state machine.

## Extends

- `TemplateState`\<[`PanEventPayloadMapping`](../type-aliases/PanEventPayloadMapping.md), [`PanContext`](../interfaces/PanContext.md), [`PanControlStates`](../type-aliases/PanControlStates.md)\>

## Constructors

### Constructor

> **new TransitionState**(): `TransitionState`

Defined in: [packages/board/src/camera/camera-mux/animation-and-lock/pan-control-state-machine.ts:156](https://github.com/ue-too/ue-too/blob/c02efc01f7c19f3efc21823d0489e987a3e92427/packages/board/src/camera/camera-mux/animation-and-lock/pan-control-state-machine.ts#L156)

#### Returns

`TransitionState`

#### Overrides

`TemplateState<PanEventPayloadMapping, PanContext, PanControlStates>.constructor`

## Properties

### \_delay

> `protected` **\_delay**: `Delay`\<[`PanContext`](../interfaces/PanContext.md), [`PanEventPayloadMapping`](../type-aliases/PanEventPayloadMapping.md), [`PanControlStates`](../type-aliases/PanControlStates.md)\> \| `undefined` = `undefined`

Defined in: [packages/being/src/interface.ts:291](https://github.com/ue-too/ue-too/blob/c02efc01f7c19f3efc21823d0489e987a3e92427/packages/being/src/interface.ts#L291)

#### Inherited from

`TemplateState._delay`

***

### \_eventGuards

> `protected` **\_eventGuards**: `Partial`\<`EventGuards`\<`EventPayloadMapping`, `States`, `Context`, `Guard`\<`Context`\>\>\>

Defined in: [packages/being/src/interface.ts:290](https://github.com/ue-too/ue-too/blob/c02efc01f7c19f3efc21823d0489e987a3e92427/packages/being/src/interface.ts#L290)

#### Inherited from

`TemplateState._eventGuards`

***

### \_guards

> `protected` **\_guards**: `Guard`\<`Context`\>

Defined in: [packages/being/src/interface.ts:289](https://github.com/ue-too/ue-too/blob/c02efc01f7c19f3efc21823d0489e987a3e92427/packages/being/src/interface.ts#L289)

#### Inherited from

`TemplateState._guards`

***

### eventReactions

> **eventReactions**: `EventReactions`\<[`PanEventPayloadMapping`](../type-aliases/PanEventPayloadMapping.md), [`PanContext`](../interfaces/PanContext.md), [`PanControlStates`](../type-aliases/PanControlStates.md)\>

Defined in: [packages/board/src/camera/camera-mux/animation-and-lock/pan-control-state-machine.ts:160](https://github.com/ue-too/ue-too/blob/c02efc01f7c19f3efc21823d0489e987a3e92427/packages/board/src/camera/camera-mux/animation-and-lock/pan-control-state-machine.ts#L160)

#### Overrides

`TemplateState.eventReactions`

## Accessors

### delay

#### Get Signature

> **get** **delay**(): `Delay`\<`Context`, `EventPayloadMapping`, `States`\> \| `undefined`

Defined in: [packages/being/src/interface.ts:301](https://github.com/ue-too/ue-too/blob/c02efc01f7c19f3efc21823d0489e987a3e92427/packages/being/src/interface.ts#L301)

##### Returns

`Delay`\<`Context`, `EventPayloadMapping`, `States`\> \| `undefined`

#### Inherited from

`TemplateState.delay`

***

### eventGuards

#### Get Signature

> **get** **eventGuards**(): `Partial`\<`EventGuards`\<`EventPayloadMapping`, `States`, `Context`, `Guard`\<`Context`\>\>\>

Defined in: [packages/being/src/interface.ts:297](https://github.com/ue-too/ue-too/blob/c02efc01f7c19f3efc21823d0489e987a3e92427/packages/being/src/interface.ts#L297)

##### Returns

`Partial`\<`EventGuards`\<`EventPayloadMapping`, `States`, `Context`, `Guard`\<`Context`\>\>\>

#### Inherited from

`TemplateState.eventGuards`

***

### guards

#### Get Signature

> **get** **guards**(): `Guard`\<`Context`\>

Defined in: [packages/being/src/interface.ts:293](https://github.com/ue-too/ue-too/blob/c02efc01f7c19f3efc21823d0489e987a3e92427/packages/being/src/interface.ts#L293)

##### Returns

`Guard`\<`Context`\>

#### Inherited from

`TemplateState.guards`

## Methods

### beforeExit()

> **beforeExit**(`context`, `stateMachine`, `to`): `void`

Defined in: [packages/being/src/interface.ts:309](https://github.com/ue-too/ue-too/blob/c02efc01f7c19f3efc21823d0489e987a3e92427/packages/being/src/interface.ts#L309)

#### Parameters

##### context

[`PanContext`](../interfaces/PanContext.md)

##### stateMachine

`StateMachine`\<[`PanEventPayloadMapping`](../type-aliases/PanEventPayloadMapping.md), [`PanContext`](../interfaces/PanContext.md), [`PanControlStates`](../type-aliases/PanControlStates.md)\>

##### to

[`PanControlStates`](../type-aliases/PanControlStates.md)

#### Returns

`void`

#### Inherited from

`TemplateState.beforeExit`

***

### handles()

> **handles**\<`K`\>(`args`, `context`, `stateMachine`): `EventHandledResult`\<[`PanControlStates`](../type-aliases/PanControlStates.md)\>

Defined in: [packages/being/src/interface.ts:313](https://github.com/ue-too/ue-too/blob/c02efc01f7c19f3efc21823d0489e987a3e92427/packages/being/src/interface.ts#L313)

#### Type Parameters

##### K

`K` *extends* `string`

#### Parameters

##### args

`EventArgs`\<[`PanEventPayloadMapping`](../type-aliases/PanEventPayloadMapping.md), `K`\>

##### context

[`PanContext`](../interfaces/PanContext.md)

##### stateMachine

`StateMachine`\<[`PanEventPayloadMapping`](../type-aliases/PanEventPayloadMapping.md), [`PanContext`](../interfaces/PanContext.md), [`PanControlStates`](../type-aliases/PanControlStates.md)\>

#### Returns

`EventHandledResult`\<[`PanControlStates`](../type-aliases/PanControlStates.md)\>

#### Inherited from

`TemplateState.handles`

***

### lockedOnObjectPanByInputHandler()

> **lockedOnObjectPanByInputHandler**(`context`, `payload`): [`PanControlStates`](../type-aliases/PanControlStates.md)

Defined in: [packages/board/src/camera/camera-mux/animation-and-lock/pan-control-state-machine.ts:189](https://github.com/ue-too/ue-too/blob/c02efc01f7c19f3efc21823d0489e987a3e92427/packages/board/src/camera/camera-mux/animation-and-lock/pan-control-state-machine.ts#L189)

#### Parameters

##### context

[`PanContext`](../interfaces/PanContext.md)

##### payload

[`PanByInputEventPayload`](../type-aliases/PanByInputEventPayload.md)

#### Returns

[`PanControlStates`](../type-aliases/PanControlStates.md)

***

### lockedOnObjectPanToInputHandler()

> **lockedOnObjectPanToInputHandler**(`context`, `payload`): [`PanControlStates`](../type-aliases/PanControlStates.md)

Defined in: [packages/board/src/camera/camera-mux/animation-and-lock/pan-control-state-machine.ts:194](https://github.com/ue-too/ue-too/blob/c02efc01f7c19f3efc21823d0489e987a3e92427/packages/board/src/camera/camera-mux/animation-and-lock/pan-control-state-machine.ts#L194)

#### Parameters

##### context

[`PanContext`](../interfaces/PanContext.md)

##### payload

[`PanToInputEventPayload`](../type-aliases/PanToInputEventPayload.md)

#### Returns

[`PanControlStates`](../type-aliases/PanControlStates.md)

***

### transitionPanByInputHandler()

> **transitionPanByInputHandler**(`context`, `payload`): [`PanControlStates`](../type-aliases/PanControlStates.md)

Defined in: [packages/board/src/camera/camera-mux/animation-and-lock/pan-control-state-machine.ts:179](https://github.com/ue-too/ue-too/blob/c02efc01f7c19f3efc21823d0489e987a3e92427/packages/board/src/camera/camera-mux/animation-and-lock/pan-control-state-machine.ts#L179)

#### Parameters

##### context

[`PanContext`](../interfaces/PanContext.md)

##### payload

[`PanByInputEventPayload`](../type-aliases/PanByInputEventPayload.md)

#### Returns

[`PanControlStates`](../type-aliases/PanControlStates.md)

***

### transitionPanToInputHandler()

> **transitionPanToInputHandler**(`context`, `payload`): [`PanControlStates`](../type-aliases/PanControlStates.md)

Defined in: [packages/board/src/camera/camera-mux/animation-and-lock/pan-control-state-machine.ts:184](https://github.com/ue-too/ue-too/blob/c02efc01f7c19f3efc21823d0489e987a3e92427/packages/board/src/camera/camera-mux/animation-and-lock/pan-control-state-machine.ts#L184)

#### Parameters

##### context

[`PanContext`](../interfaces/PanContext.md)

##### payload

[`PanToInputEventPayload`](../type-aliases/PanToInputEventPayload.md)

#### Returns

[`PanControlStates`](../type-aliases/PanControlStates.md)

***

### uponEnter()

> **uponEnter**(`context`, `stateMachine`, `from`): `void`

Defined in: [packages/being/src/interface.ts:305](https://github.com/ue-too/ue-too/blob/c02efc01f7c19f3efc21823d0489e987a3e92427/packages/being/src/interface.ts#L305)

#### Parameters

##### context

[`PanContext`](../interfaces/PanContext.md)

##### stateMachine

`StateMachine`\<[`PanEventPayloadMapping`](../type-aliases/PanEventPayloadMapping.md), [`PanContext`](../interfaces/PanContext.md), [`PanControlStates`](../type-aliases/PanControlStates.md)\>

##### from

[`PanControlStates`](../type-aliases/PanControlStates.md)

#### Returns

`void`

#### Inherited from

`TemplateState.uponEnter`

***

### userPanByInputHandler()

> **userPanByInputHandler**(`context`, `payload`): [`PanControlStates`](../type-aliases/PanControlStates.md)

Defined in: [packages/board/src/camera/camera-mux/animation-and-lock/pan-control-state-machine.ts:169](https://github.com/ue-too/ue-too/blob/c02efc01f7c19f3efc21823d0489e987a3e92427/packages/board/src/camera/camera-mux/animation-and-lock/pan-control-state-machine.ts#L169)

#### Parameters

##### context

[`PanContext`](../interfaces/PanContext.md)

##### payload

[`PanByInputEventPayload`](../type-aliases/PanByInputEventPayload.md)

#### Returns

[`PanControlStates`](../type-aliases/PanControlStates.md)

***

### userPanToInputHandler()

> **userPanToInputHandler**(`context`, `payload`): [`PanControlStates`](../type-aliases/PanControlStates.md)

Defined in: [packages/board/src/camera/camera-mux/animation-and-lock/pan-control-state-machine.ts:174](https://github.com/ue-too/ue-too/blob/c02efc01f7c19f3efc21823d0489e987a3e92427/packages/board/src/camera/camera-mux/animation-and-lock/pan-control-state-machine.ts#L174)

#### Parameters

##### context

[`PanContext`](../interfaces/PanContext.md)

##### payload

[`PanToInputEventPayload`](../type-aliases/PanToInputEventPayload.md)

#### Returns

[`PanControlStates`](../type-aliases/PanControlStates.md)
