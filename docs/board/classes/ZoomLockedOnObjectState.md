[@ue-too/board](../globals.md) / ZoomLockedOnObjectState

# Class: ZoomLockedOnObjectState

Defined in: [packages/board/src/camera/camera-mux/animation-and-lock/zoom-control-state-machine.ts:177](https://github.com/ue-too/ue-too/blob/c02efc01f7c19f3efc21823d0489e987a3e92427/packages/board/src/camera/camera-mux/animation-and-lock/zoom-control-state-machine.ts#L177)

## Description

The locked on object state of the zoom control state machine.

## Extends

- `TemplateState`\<[`ZoomEventPayloadMapping`](../type-aliases/ZoomEventPayloadMapping.md), [`ZoomContext`](../interfaces/ZoomContext.md), [`ZoomControlStates`](../type-aliases/ZoomControlStates.md)\>

## Constructors

### Constructor

> **new ZoomLockedOnObjectState**(): `ZoomLockedOnObjectState`

Defined in: [packages/board/src/camera/camera-mux/animation-and-lock/zoom-control-state-machine.ts:179](https://github.com/ue-too/ue-too/blob/c02efc01f7c19f3efc21823d0489e987a3e92427/packages/board/src/camera/camera-mux/animation-and-lock/zoom-control-state-machine.ts#L179)

#### Returns

`ZoomLockedOnObjectState`

#### Overrides

`TemplateState<ZoomEventPayloadMapping, ZoomContext, ZoomControlStates>.constructor`

## Properties

### \_delay

> `protected` **\_delay**: `Delay`\<[`ZoomContext`](../interfaces/ZoomContext.md), [`ZoomEventPayloadMapping`](../type-aliases/ZoomEventPayloadMapping.md), [`ZoomControlStates`](../type-aliases/ZoomControlStates.md)\> \| `undefined` = `undefined`

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

### eventReactions

#### Get Signature

> **get** **eventReactions**(): `EventReactions`\<[`ZoomEventPayloadMapping`](../type-aliases/ZoomEventPayloadMapping.md), [`ZoomContext`](../interfaces/ZoomContext.md), [`ZoomControlStates`](../type-aliases/ZoomControlStates.md)\>

Defined in: [packages/board/src/camera/camera-mux/animation-and-lock/zoom-control-state-machine.ts:190](https://github.com/ue-too/ue-too/blob/c02efc01f7c19f3efc21823d0489e987a3e92427/packages/board/src/camera/camera-mux/animation-and-lock/zoom-control-state-machine.ts#L190)

##### Returns

`EventReactions`\<[`ZoomEventPayloadMapping`](../type-aliases/ZoomEventPayloadMapping.md), [`ZoomContext`](../interfaces/ZoomContext.md), [`ZoomControlStates`](../type-aliases/ZoomControlStates.md)\>

#### Overrides

`TemplateState.eventReactions`

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

[`ZoomContext`](../interfaces/ZoomContext.md)

##### stateMachine

`StateMachine`\<[`ZoomEventPayloadMapping`](../type-aliases/ZoomEventPayloadMapping.md), [`ZoomContext`](../interfaces/ZoomContext.md), [`ZoomControlStates`](../type-aliases/ZoomControlStates.md)\>

##### to

[`ZoomControlStates`](../type-aliases/ZoomControlStates.md)

#### Returns

`void`

#### Inherited from

`TemplateState.beforeExit`

***

### handles()

> **handles**\<`K`\>(`args`, `context`, `stateMachine`): `EventHandledResult`\<[`ZoomControlStates`](../type-aliases/ZoomControlStates.md)\>

Defined in: [packages/being/src/interface.ts:313](https://github.com/ue-too/ue-too/blob/c02efc01f7c19f3efc21823d0489e987a3e92427/packages/being/src/interface.ts#L313)

#### Type Parameters

##### K

`K` *extends* `string`

#### Parameters

##### args

`EventArgs`\<[`ZoomEventPayloadMapping`](../type-aliases/ZoomEventPayloadMapping.md), `K`\>

##### context

[`ZoomContext`](../interfaces/ZoomContext.md)

##### stateMachine

`StateMachine`\<[`ZoomEventPayloadMapping`](../type-aliases/ZoomEventPayloadMapping.md), [`ZoomContext`](../interfaces/ZoomContext.md), [`ZoomControlStates`](../type-aliases/ZoomControlStates.md)\>

#### Returns

`EventHandledResult`\<[`ZoomControlStates`](../type-aliases/ZoomControlStates.md)\>

#### Inherited from

`TemplateState.handles`

***

### lockedOnObjectZoomByAtInput()

> **lockedOnObjectZoomByAtInput**(`context`, `payload`): `void`

Defined in: [packages/board/src/camera/camera-mux/animation-and-lock/zoom-control-state-machine.ts:194](https://github.com/ue-too/ue-too/blob/c02efc01f7c19f3efc21823d0489e987a3e92427/packages/board/src/camera/camera-mux/animation-and-lock/zoom-control-state-machine.ts#L194)

#### Parameters

##### context

[`ZoomContext`](../interfaces/ZoomContext.md)

##### payload

[`ZoomByAtInputPayload`](../type-aliases/ZoomByAtInputPayload.md)

#### Returns

`void`

***

### lockedOnObjectZoomToAtInput()

> **lockedOnObjectZoomToAtInput**(`context`, `payload`): `void`

Defined in: [packages/board/src/camera/camera-mux/animation-and-lock/zoom-control-state-machine.ts:198](https://github.com/ue-too/ue-too/blob/c02efc01f7c19f3efc21823d0489e987a3e92427/packages/board/src/camera/camera-mux/animation-and-lock/zoom-control-state-machine.ts#L198)

#### Parameters

##### context

[`ZoomContext`](../interfaces/ZoomContext.md)

##### payload

[`ZoomToAtInputPayload`](../type-aliases/ZoomToAtInputPayload.md)

#### Returns

`void`

***

### uponEnter()

> **uponEnter**(`context`, `stateMachine`, `from`): `void`

Defined in: [packages/being/src/interface.ts:305](https://github.com/ue-too/ue-too/blob/c02efc01f7c19f3efc21823d0489e987a3e92427/packages/being/src/interface.ts#L305)

#### Parameters

##### context

[`ZoomContext`](../interfaces/ZoomContext.md)

##### stateMachine

`StateMachine`\<[`ZoomEventPayloadMapping`](../type-aliases/ZoomEventPayloadMapping.md), [`ZoomContext`](../interfaces/ZoomContext.md), [`ZoomControlStates`](../type-aliases/ZoomControlStates.md)\>

##### from

[`ZoomControlStates`](../type-aliases/ZoomControlStates.md)

#### Returns

`void`

#### Inherited from

`TemplateState.uponEnter`

***

### userZoomByAtInput()

> **userZoomByAtInput**(`context`, `payload`): `void`

Defined in: [packages/board/src/camera/camera-mux/animation-and-lock/zoom-control-state-machine.ts:202](https://github.com/ue-too/ue-too/blob/c02efc01f7c19f3efc21823d0489e987a3e92427/packages/board/src/camera/camera-mux/animation-and-lock/zoom-control-state-machine.ts#L202)

#### Parameters

##### context

[`ZoomContext`](../interfaces/ZoomContext.md)

##### payload

[`ZoomByAtInputPayload`](../type-aliases/ZoomByAtInputPayload.md)

#### Returns

`void`

***

### userZoomToAtInput()

> **userZoomToAtInput**(`context`, `payload`): `void`

Defined in: [packages/board/src/camera/camera-mux/animation-and-lock/zoom-control-state-machine.ts:206](https://github.com/ue-too/ue-too/blob/c02efc01f7c19f3efc21823d0489e987a3e92427/packages/board/src/camera/camera-mux/animation-and-lock/zoom-control-state-machine.ts#L206)

#### Parameters

##### context

[`ZoomContext`](../interfaces/ZoomContext.md)

##### payload

[`ZoomToAtInputPayload`](../type-aliases/ZoomToAtInputPayload.md)

#### Returns

`void`
