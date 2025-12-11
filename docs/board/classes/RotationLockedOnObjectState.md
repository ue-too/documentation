[@ue-too/board](../globals.md) / RotationLockedOnObjectState

# Class: RotationLockedOnObjectState

Defined in: [packages/board/src/camera/camera-mux/animation-and-lock/rotation-control-state-machine.ts:195](https://github.com/ue-too/ue-too/blob/c02efc01f7c19f3efc21823d0489e987a3e92427/packages/board/src/camera/camera-mux/animation-and-lock/rotation-control-state-machine.ts#L195)

## Description

The locked on object state of the pan control state machine.

## Extends

- `TemplateState`\<[`RotateEventPayloadMapping`](../type-aliases/RotateEventPayloadMapping.md), [`RotateContext`](../interfaces/RotateContext.md), [`RotateControlStates`](../type-aliases/RotateControlStates.md)\>

## Constructors

### Constructor

> **new RotationLockedOnObjectState**(): `RotationLockedOnObjectState`

Defined in: [packages/board/src/camera/camera-mux/animation-and-lock/rotation-control-state-machine.ts:197](https://github.com/ue-too/ue-too/blob/c02efc01f7c19f3efc21823d0489e987a3e92427/packages/board/src/camera/camera-mux/animation-and-lock/rotation-control-state-machine.ts#L197)

#### Returns

`RotationLockedOnObjectState`

#### Overrides

`TemplateState<RotateEventPayloadMapping, RotateContext, RotateControlStates>.constructor`

## Properties

### \_delay

> `protected` **\_delay**: `Delay`\<[`RotateContext`](../interfaces/RotateContext.md), [`RotateEventPayloadMapping`](../type-aliases/RotateEventPayloadMapping.md), [`RotateControlStates`](../type-aliases/RotateControlStates.md)\> \| `undefined` = `undefined`

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

> **eventReactions**: `EventReactions`\<[`RotateEventPayloadMapping`](../type-aliases/RotateEventPayloadMapping.md), [`RotateContext`](../interfaces/RotateContext.md), [`RotateControlStates`](../type-aliases/RotateControlStates.md)\>

Defined in: [packages/board/src/camera/camera-mux/animation-and-lock/rotation-control-state-machine.ts:201](https://github.com/ue-too/ue-too/blob/c02efc01f7c19f3efc21823d0489e987a3e92427/packages/board/src/camera/camera-mux/animation-and-lock/rotation-control-state-machine.ts#L201)

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

[`RotateContext`](../interfaces/RotateContext.md)

##### stateMachine

`StateMachine`\<[`RotateEventPayloadMapping`](../type-aliases/RotateEventPayloadMapping.md), [`RotateContext`](../interfaces/RotateContext.md), [`RotateControlStates`](../type-aliases/RotateControlStates.md)\>

##### to

[`RotateControlStates`](../type-aliases/RotateControlStates.md)

#### Returns

`void`

#### Inherited from

`TemplateState.beforeExit`

***

### handles()

> **handles**\<`K`\>(`args`, `context`, `stateMachine`): `EventHandledResult`\<[`RotateControlStates`](../type-aliases/RotateControlStates.md)\>

Defined in: [packages/being/src/interface.ts:313](https://github.com/ue-too/ue-too/blob/c02efc01f7c19f3efc21823d0489e987a3e92427/packages/being/src/interface.ts#L313)

#### Type Parameters

##### K

`K` *extends* `string`

#### Parameters

##### args

`EventArgs`\<[`RotateEventPayloadMapping`](../type-aliases/RotateEventPayloadMapping.md), `K`\>

##### context

[`RotateContext`](../interfaces/RotateContext.md)

##### stateMachine

`StateMachine`\<[`RotateEventPayloadMapping`](../type-aliases/RotateEventPayloadMapping.md), [`RotateContext`](../interfaces/RotateContext.md), [`RotateControlStates`](../type-aliases/RotateControlStates.md)\>

#### Returns

`EventHandledResult`\<[`RotateControlStates`](../type-aliases/RotateControlStates.md)\>

#### Inherited from

`TemplateState.handles`

***

### lockedOnObjectRotateByInputHandler()

> **lockedOnObjectRotateByInputHandler**(`context`, `payload`): `void`

Defined in: [packages/board/src/camera/camera-mux/animation-and-lock/rotation-control-state-machine.ts:207](https://github.com/ue-too/ue-too/blob/c02efc01f7c19f3efc21823d0489e987a3e92427/packages/board/src/camera/camera-mux/animation-and-lock/rotation-control-state-machine.ts#L207)

#### Parameters

##### context

[`RotateContext`](../interfaces/RotateContext.md)

##### payload

[`RotateByInputEventPayload`](../type-aliases/RotateByInputEventPayload.md)

#### Returns

`void`

***

### lockedOnObjectRotateToInputHandler()

> **lockedOnObjectRotateToInputHandler**(`context`, `payload`): `void`

Defined in: [packages/board/src/camera/camera-mux/animation-and-lock/rotation-control-state-machine.ts:211](https://github.com/ue-too/ue-too/blob/c02efc01f7c19f3efc21823d0489e987a3e92427/packages/board/src/camera/camera-mux/animation-and-lock/rotation-control-state-machine.ts#L211)

#### Parameters

##### context

[`RotateContext`](../interfaces/RotateContext.md)

##### payload

[`RotateToInputEventPayload`](../type-aliases/RotateToInputEventPayload.md)

#### Returns

`void`

***

### uponEnter()

> **uponEnter**(`context`, `stateMachine`, `from`): `void`

Defined in: [packages/being/src/interface.ts:305](https://github.com/ue-too/ue-too/blob/c02efc01f7c19f3efc21823d0489e987a3e92427/packages/being/src/interface.ts#L305)

#### Parameters

##### context

[`RotateContext`](../interfaces/RotateContext.md)

##### stateMachine

`StateMachine`\<[`RotateEventPayloadMapping`](../type-aliases/RotateEventPayloadMapping.md), [`RotateContext`](../interfaces/RotateContext.md), [`RotateControlStates`](../type-aliases/RotateControlStates.md)\>

##### from

[`RotateControlStates`](../type-aliases/RotateControlStates.md)

#### Returns

`void`

#### Inherited from

`TemplateState.uponEnter`
