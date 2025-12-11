[@ue-too/board](../globals.md) / ZoomTransitionState

# Class: ZoomTransitionState

Defined in: [packages/board/src/camera/camera-mux/animation-and-lock/zoom-control-state-machine.ts:114](https://github.com/ue-too/ue-too/blob/fe7fe80879019da785d08f475b37a73725116e88/packages/board/src/camera/camera-mux/animation-and-lock/zoom-control-state-machine.ts#L114)

## Description

The transition state of the zoom control state machine.

## Extends

- `TemplateState`\<[`ZoomEventPayloadMapping`](../type-aliases/ZoomEventPayloadMapping.md), [`ZoomContext`](../interfaces/ZoomContext.md), [`ZoomControlStates`](../type-aliases/ZoomControlStates.md)\>

## Constructors

### Constructor

> **new ZoomTransitionState**(): `ZoomTransitionState`

Defined in: [packages/board/src/camera/camera-mux/animation-and-lock/zoom-control-state-machine.ts:116](https://github.com/ue-too/ue-too/blob/fe7fe80879019da785d08f475b37a73725116e88/packages/board/src/camera/camera-mux/animation-and-lock/zoom-control-state-machine.ts#L116)

#### Returns

`ZoomTransitionState`

#### Overrides

`TemplateState<ZoomEventPayloadMapping, ZoomContext, ZoomControlStates>.constructor`

## Properties

### \_delay

> `protected` **\_delay**: `Delay`\<[`ZoomContext`](../interfaces/ZoomContext.md), [`ZoomEventPayloadMapping`](../type-aliases/ZoomEventPayloadMapping.md), [`ZoomControlStates`](../type-aliases/ZoomControlStates.md)\> \| `undefined` = `undefined`

Defined in: [packages/being/src/interface.ts:291](https://github.com/ue-too/ue-too/blob/fe7fe80879019da785d08f475b37a73725116e88/packages/being/src/interface.ts#L291)

#### Inherited from

`TemplateState._delay`

***

### \_eventGuards

> `protected` **\_eventGuards**: `Partial`\<`EventGuards`\<`EventPayloadMapping`, `States`, `Context`, `Guard`\<`Context`\>\>\>

Defined in: [packages/being/src/interface.ts:290](https://github.com/ue-too/ue-too/blob/fe7fe80879019da785d08f475b37a73725116e88/packages/being/src/interface.ts#L290)

#### Inherited from

`TemplateState._eventGuards`

***

### \_guards

> `protected` **\_guards**: `Guard`\<`Context`\>

Defined in: [packages/being/src/interface.ts:289](https://github.com/ue-too/ue-too/blob/fe7fe80879019da785d08f475b37a73725116e88/packages/being/src/interface.ts#L289)

#### Inherited from

`TemplateState._guards`

## Accessors

### delay

#### Get Signature

> **get** **delay**(): `Delay`\<`Context`, `EventPayloadMapping`, `States`\> \| `undefined`

Defined in: [packages/being/src/interface.ts:301](https://github.com/ue-too/ue-too/blob/fe7fe80879019da785d08f475b37a73725116e88/packages/being/src/interface.ts#L301)

##### Returns

`Delay`\<`Context`, `EventPayloadMapping`, `States`\> \| `undefined`

#### Inherited from

`TemplateState.delay`

***

### eventGuards

#### Get Signature

> **get** **eventGuards**(): `Partial`\<`EventGuards`\<`EventPayloadMapping`, `States`, `Context`, `Guard`\<`Context`\>\>\>

Defined in: [packages/being/src/interface.ts:297](https://github.com/ue-too/ue-too/blob/fe7fe80879019da785d08f475b37a73725116e88/packages/being/src/interface.ts#L297)

##### Returns

`Partial`\<`EventGuards`\<`EventPayloadMapping`, `States`, `Context`, `Guard`\<`Context`\>\>\>

#### Inherited from

`TemplateState.eventGuards`

***

### eventReactions

#### Get Signature

> **get** **eventReactions**(): `EventReactions`\<[`ZoomEventPayloadMapping`](../type-aliases/ZoomEventPayloadMapping.md), [`ZoomContext`](../interfaces/ZoomContext.md), [`ZoomControlStates`](../type-aliases/ZoomControlStates.md)\>

Defined in: [packages/board/src/camera/camera-mux/animation-and-lock/zoom-control-state-machine.ts:131](https://github.com/ue-too/ue-too/blob/fe7fe80879019da785d08f475b37a73725116e88/packages/board/src/camera/camera-mux/animation-and-lock/zoom-control-state-machine.ts#L131)

##### Returns

`EventReactions`\<[`ZoomEventPayloadMapping`](../type-aliases/ZoomEventPayloadMapping.md), [`ZoomContext`](../interfaces/ZoomContext.md), [`ZoomControlStates`](../type-aliases/ZoomControlStates.md)\>

#### Overrides

`TemplateState.eventReactions`

***

### guards

#### Get Signature

> **get** **guards**(): `Guard`\<`Context`\>

Defined in: [packages/being/src/interface.ts:293](https://github.com/ue-too/ue-too/blob/fe7fe80879019da785d08f475b37a73725116e88/packages/being/src/interface.ts#L293)

##### Returns

`Guard`\<`Context`\>

#### Inherited from

`TemplateState.guards`

## Methods

### beforeExit()

> **beforeExit**(`context`, `stateMachine`, `to`): `void`

Defined in: [packages/being/src/interface.ts:309](https://github.com/ue-too/ue-too/blob/fe7fe80879019da785d08f475b37a73725116e88/packages/being/src/interface.ts#L309)

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

Defined in: [packages/being/src/interface.ts:313](https://github.com/ue-too/ue-too/blob/fe7fe80879019da785d08f475b37a73725116e88/packages/being/src/interface.ts#L313)

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

Defined in: [packages/board/src/camera/camera-mux/animation-and-lock/zoom-control-state-machine.ts:135](https://github.com/ue-too/ue-too/blob/fe7fe80879019da785d08f475b37a73725116e88/packages/board/src/camera/camera-mux/animation-and-lock/zoom-control-state-machine.ts#L135)

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

Defined in: [packages/board/src/camera/camera-mux/animation-and-lock/zoom-control-state-machine.ts:139](https://github.com/ue-too/ue-too/blob/fe7fe80879019da785d08f475b37a73725116e88/packages/board/src/camera/camera-mux/animation-and-lock/zoom-control-state-machine.ts#L139)

#### Parameters

##### context

[`ZoomContext`](../interfaces/ZoomContext.md)

##### payload

[`ZoomToAtInputPayload`](../type-aliases/ZoomToAtInputPayload.md)

#### Returns

`void`

***

### transitionZoomByAtCenterInput()

> **transitionZoomByAtCenterInput**(`context`, `payload`): `void`

Defined in: [packages/board/src/camera/camera-mux/animation-and-lock/zoom-control-state-machine.ts:155](https://github.com/ue-too/ue-too/blob/fe7fe80879019da785d08f475b37a73725116e88/packages/board/src/camera/camera-mux/animation-and-lock/zoom-control-state-machine.ts#L155)

#### Parameters

##### context

[`ZoomContext`](../interfaces/ZoomContext.md)

##### payload

[`ZoomByPayload`](../type-aliases/ZoomByPayload.md)

#### Returns

`void`

***

### transitionZoomByAtInput()

> **transitionZoomByAtInput**(`context`, `payload`): `void`

Defined in: [packages/board/src/camera/camera-mux/animation-and-lock/zoom-control-state-machine.ts:151](https://github.com/ue-too/ue-too/blob/fe7fe80879019da785d08f475b37a73725116e88/packages/board/src/camera/camera-mux/animation-and-lock/zoom-control-state-machine.ts#L151)

#### Parameters

##### context

[`ZoomContext`](../interfaces/ZoomContext.md)

##### payload

[`ZoomByAtInputPayload`](../type-aliases/ZoomByAtInputPayload.md)

#### Returns

`void`

***

### transitionZoomToAtCenterInput()

> **transitionZoomToAtCenterInput**(`context`, `payload`): `void`

Defined in: [packages/board/src/camera/camera-mux/animation-and-lock/zoom-control-state-machine.ts:163](https://github.com/ue-too/ue-too/blob/fe7fe80879019da785d08f475b37a73725116e88/packages/board/src/camera/camera-mux/animation-and-lock/zoom-control-state-machine.ts#L163)

#### Parameters

##### context

[`ZoomContext`](../interfaces/ZoomContext.md)

##### payload

[`ZoomToAtInputPayload`](../type-aliases/ZoomToAtInputPayload.md)

#### Returns

`void`

***

### transitionZoomToAtInput()

> **transitionZoomToAtInput**(`context`, `payload`): `void`

Defined in: [packages/board/src/camera/camera-mux/animation-and-lock/zoom-control-state-machine.ts:159](https://github.com/ue-too/ue-too/blob/fe7fe80879019da785d08f475b37a73725116e88/packages/board/src/camera/camera-mux/animation-and-lock/zoom-control-state-machine.ts#L159)

#### Parameters

##### context

[`ZoomContext`](../interfaces/ZoomContext.md)

##### payload

[`ZoomToAtInputPayload`](../type-aliases/ZoomToAtInputPayload.md)

#### Returns

`void`

***

### transitionZoomToAtWorldInput()

> **transitionZoomToAtWorldInput**(`context`, `payload`): `void`

Defined in: [packages/board/src/camera/camera-mux/animation-and-lock/zoom-control-state-machine.ts:167](https://github.com/ue-too/ue-too/blob/fe7fe80879019da785d08f475b37a73725116e88/packages/board/src/camera/camera-mux/animation-and-lock/zoom-control-state-machine.ts#L167)

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

Defined in: [packages/being/src/interface.ts:305](https://github.com/ue-too/ue-too/blob/fe7fe80879019da785d08f475b37a73725116e88/packages/being/src/interface.ts#L305)

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

Defined in: [packages/board/src/camera/camera-mux/animation-and-lock/zoom-control-state-machine.ts:143](https://github.com/ue-too/ue-too/blob/fe7fe80879019da785d08f475b37a73725116e88/packages/board/src/camera/camera-mux/animation-and-lock/zoom-control-state-machine.ts#L143)

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

Defined in: [packages/board/src/camera/camera-mux/animation-and-lock/zoom-control-state-machine.ts:147](https://github.com/ue-too/ue-too/blob/fe7fe80879019da785d08f475b37a73725116e88/packages/board/src/camera/camera-mux/animation-and-lock/zoom-control-state-machine.ts#L147)

#### Parameters

##### context

[`ZoomContext`](../interfaces/ZoomContext.md)

##### payload

[`ZoomToAtInputPayload`](../type-aliases/ZoomToAtInputPayload.md)

#### Returns

`void`
