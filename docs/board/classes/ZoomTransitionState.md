[@ue-too/board](../globals.md) / ZoomTransitionState

# Class: ZoomTransitionState

Defined in: [packages/board/src/camera/camera-mux/animation-and-lock/zoom-control-state-machine.ts:157](https://github.com/ue-too/ue-too/blob/e468a9961da59c81663192ec8df16ebc8e17abac/packages/board/src/camera/camera-mux/animation-and-lock/zoom-control-state-machine.ts#L157)

State implementation for zoom animations and transitions.
Processes animation updates and allows user input to interrupt.

## Extends

- `TemplateState`\<[`ZoomEventPayloadMapping`](../type-aliases/ZoomEventPayloadMapping.md), `BaseContext`, [`ZoomControlStates`](../type-aliases/ZoomControlStates.md), [`ZoomControlOutputMapping`](../type-aliases/ZoomControlOutputMapping.md)\>

## Constructors

### Constructor

> **new ZoomTransitionState**(): `ZoomTransitionState`

Defined in: [packages/board/src/camera/camera-mux/animation-and-lock/zoom-control-state-machine.ts:159](https://github.com/ue-too/ue-too/blob/e468a9961da59c81663192ec8df16ebc8e17abac/packages/board/src/camera/camera-mux/animation-and-lock/zoom-control-state-machine.ts#L159)

#### Returns

`ZoomTransitionState`

#### Overrides

`TemplateState<ZoomEventPayloadMapping, BaseContext, ZoomControlStates, ZoomControlOutputMapping>.constructor`

## Properties

### \_delay

> `protected` **\_delay**: `Delay`\<`BaseContext`, [`ZoomEventPayloadMapping`](../type-aliases/ZoomEventPayloadMapping.md), [`ZoomControlStates`](../type-aliases/ZoomControlStates.md), [`ZoomControlOutputMapping`](../type-aliases/ZoomControlOutputMapping.md)\> \| `undefined` = `undefined`

Defined in: [packages/being/src/interface.ts:593](https://github.com/ue-too/ue-too/blob/e468a9961da59c81663192ec8df16ebc8e17abac/packages/being/src/interface.ts#L593)

#### Inherited from

`TemplateState._delay`

***

### \_eventGuards

> `protected` **\_eventGuards**: `Partial`\<`EventGuards`\<`EventPayloadMapping`, `States`, `Context`, `Guard`\<`Context`\>\>\>

Defined in: [packages/being/src/interface.ts:592](https://github.com/ue-too/ue-too/blob/e468a9961da59c81663192ec8df16ebc8e17abac/packages/being/src/interface.ts#L592)

#### Inherited from

`TemplateState._eventGuards`

***

### \_guards

> `protected` **\_guards**: `Guard`\<`Context`\>

Defined in: [packages/being/src/interface.ts:591](https://github.com/ue-too/ue-too/blob/e468a9961da59c81663192ec8df16ebc8e17abac/packages/being/src/interface.ts#L591)

#### Inherited from

`TemplateState._guards`

## Accessors

### delay

#### Get Signature

> **get** **delay**(): `Delay`\<`Context`, `EventPayloadMapping`, `States`, `EventOutputMapping`\> \| `undefined`

Defined in: [packages/being/src/interface.ts:603](https://github.com/ue-too/ue-too/blob/e468a9961da59c81663192ec8df16ebc8e17abac/packages/being/src/interface.ts#L603)

##### Returns

`Delay`\<`Context`, `EventPayloadMapping`, `States`, `EventOutputMapping`\> \| `undefined`

#### Inherited from

`TemplateState.delay`

***

### eventGuards

#### Get Signature

> **get** **eventGuards**(): `Partial`\<`EventGuards`\<`EventPayloadMapping`, `States`, `Context`, `Guard`\<`Context`\>\>\>

Defined in: [packages/being/src/interface.ts:599](https://github.com/ue-too/ue-too/blob/e468a9961da59c81663192ec8df16ebc8e17abac/packages/being/src/interface.ts#L599)

##### Returns

`Partial`\<`EventGuards`\<`EventPayloadMapping`, `States`, `Context`, `Guard`\<`Context`\>\>\>

#### Inherited from

`TemplateState.eventGuards`

***

### eventReactions

#### Get Signature

> **get** **eventReactions**(): `EventReactions`\<[`ZoomEventPayloadMapping`](../type-aliases/ZoomEventPayloadMapping.md), `BaseContext`, [`ZoomControlStates`](../type-aliases/ZoomControlStates.md), [`ZoomControlOutputMapping`](../type-aliases/ZoomControlOutputMapping.md)\>

Defined in: [packages/board/src/camera/camera-mux/animation-and-lock/zoom-control-state-machine.ts:174](https://github.com/ue-too/ue-too/blob/e468a9961da59c81663192ec8df16ebc8e17abac/packages/board/src/camera/camera-mux/animation-and-lock/zoom-control-state-machine.ts#L174)

##### Returns

`EventReactions`\<[`ZoomEventPayloadMapping`](../type-aliases/ZoomEventPayloadMapping.md), `BaseContext`, [`ZoomControlStates`](../type-aliases/ZoomControlStates.md), [`ZoomControlOutputMapping`](../type-aliases/ZoomControlOutputMapping.md)\>

#### Overrides

`TemplateState.eventReactions`

***

### guards

#### Get Signature

> **get** **guards**(): `Guard`\<`Context`\>

Defined in: [packages/being/src/interface.ts:595](https://github.com/ue-too/ue-too/blob/e468a9961da59c81663192ec8df16ebc8e17abac/packages/being/src/interface.ts#L595)

##### Returns

`Guard`\<`Context`\>

#### Inherited from

`TemplateState.guards`

## Methods

### beforeExit()

> **beforeExit**(`context`, `stateMachine`, `to`): `void`

Defined in: [packages/being/src/interface.ts:611](https://github.com/ue-too/ue-too/blob/e468a9961da59c81663192ec8df16ebc8e17abac/packages/being/src/interface.ts#L611)

#### Parameters

##### context

`BaseContext`

##### stateMachine

`StateMachine`\<[`ZoomEventPayloadMapping`](../type-aliases/ZoomEventPayloadMapping.md), `BaseContext`, [`ZoomControlStates`](../type-aliases/ZoomControlStates.md), [`ZoomControlOutputMapping`](../type-aliases/ZoomControlOutputMapping.md)\>

##### to

[`ZoomControlStates`](../type-aliases/ZoomControlStates.md)

#### Returns

`void`

#### Inherited from

`TemplateState.beforeExit`

***

### handles()

> **handles**\<`K`\>(`args`, `context`, `stateMachine`): `EventResult`\<[`ZoomControlStates`](../type-aliases/ZoomControlStates.md), `K` *extends* keyof [`ZoomControlOutputMapping`](../type-aliases/ZoomControlOutputMapping.md) ? [`ZoomControlOutputMapping`](../type-aliases/ZoomControlOutputMapping.md)\[`K`\<`K`\>\] : `void`\>

Defined in: [packages/being/src/interface.ts:615](https://github.com/ue-too/ue-too/blob/e468a9961da59c81663192ec8df16ebc8e17abac/packages/being/src/interface.ts#L615)

#### Type Parameters

##### K

`K` *extends* `string`

#### Parameters

##### args

`EventArgs`\<[`ZoomEventPayloadMapping`](../type-aliases/ZoomEventPayloadMapping.md), `K`\>

##### context

`BaseContext`

##### stateMachine

`StateMachine`\<[`ZoomEventPayloadMapping`](../type-aliases/ZoomEventPayloadMapping.md), `BaseContext`, [`ZoomControlStates`](../type-aliases/ZoomControlStates.md), [`ZoomControlOutputMapping`](../type-aliases/ZoomControlOutputMapping.md)\>

#### Returns

`EventResult`\<[`ZoomControlStates`](../type-aliases/ZoomControlStates.md), `K` *extends* keyof [`ZoomControlOutputMapping`](../type-aliases/ZoomControlOutputMapping.md) ? [`ZoomControlOutputMapping`](../type-aliases/ZoomControlOutputMapping.md)\[`K`\<`K`\>\] : `void`\>

#### Inherited from

`TemplateState.handles`

***

### lockedOnObjectZoomByAtInput()

> **lockedOnObjectZoomByAtInput**(`context`, `payload`): [`ZoomControlOutputEvent`](../type-aliases/ZoomControlOutputEvent.md)

Defined in: [packages/board/src/camera/camera-mux/animation-and-lock/zoom-control-state-machine.ts:178](https://github.com/ue-too/ue-too/blob/e468a9961da59c81663192ec8df16ebc8e17abac/packages/board/src/camera/camera-mux/animation-and-lock/zoom-control-state-machine.ts#L178)

#### Parameters

##### context

`BaseContext`

##### payload

[`ZoomByAtInputPayload`](../type-aliases/ZoomByAtInputPayload.md)

#### Returns

[`ZoomControlOutputEvent`](../type-aliases/ZoomControlOutputEvent.md)

***

### lockedOnObjectZoomToAtInput()

> **lockedOnObjectZoomToAtInput**(`context`, `payload`): [`ZoomControlOutputEvent`](../type-aliases/ZoomControlOutputEvent.md)

Defined in: [packages/board/src/camera/camera-mux/animation-and-lock/zoom-control-state-machine.ts:182](https://github.com/ue-too/ue-too/blob/e468a9961da59c81663192ec8df16ebc8e17abac/packages/board/src/camera/camera-mux/animation-and-lock/zoom-control-state-machine.ts#L182)

#### Parameters

##### context

`BaseContext`

##### payload

[`ZoomToAtInputPayload`](../type-aliases/ZoomToAtInputPayload.md)

#### Returns

[`ZoomControlOutputEvent`](../type-aliases/ZoomControlOutputEvent.md)

***

### transitionZoomByAtCenterInput()

> **transitionZoomByAtCenterInput**(`context`, `payload`): [`ZoomControlOutputEvent`](../type-aliases/ZoomControlOutputEvent.md)

Defined in: [packages/board/src/camera/camera-mux/animation-and-lock/zoom-control-state-machine.ts:198](https://github.com/ue-too/ue-too/blob/e468a9961da59c81663192ec8df16ebc8e17abac/packages/board/src/camera/camera-mux/animation-and-lock/zoom-control-state-machine.ts#L198)

#### Parameters

##### context

`BaseContext`

##### payload

[`ZoomByPayload`](../type-aliases/ZoomByPayload.md)

#### Returns

[`ZoomControlOutputEvent`](../type-aliases/ZoomControlOutputEvent.md)

***

### transitionZoomByAtInput()

> **transitionZoomByAtInput**(`context`, `payload`): [`ZoomControlOutputEvent`](../type-aliases/ZoomControlOutputEvent.md)

Defined in: [packages/board/src/camera/camera-mux/animation-and-lock/zoom-control-state-machine.ts:194](https://github.com/ue-too/ue-too/blob/e468a9961da59c81663192ec8df16ebc8e17abac/packages/board/src/camera/camera-mux/animation-and-lock/zoom-control-state-machine.ts#L194)

#### Parameters

##### context

`BaseContext`

##### payload

[`ZoomByAtInputPayload`](../type-aliases/ZoomByAtInputPayload.md)

#### Returns

[`ZoomControlOutputEvent`](../type-aliases/ZoomControlOutputEvent.md)

***

### transitionZoomToAtCenterInput()

> **transitionZoomToAtCenterInput**(`context`, `payload`): [`ZoomControlOutputEvent`](../type-aliases/ZoomControlOutputEvent.md)

Defined in: [packages/board/src/camera/camera-mux/animation-and-lock/zoom-control-state-machine.ts:206](https://github.com/ue-too/ue-too/blob/e468a9961da59c81663192ec8df16ebc8e17abac/packages/board/src/camera/camera-mux/animation-and-lock/zoom-control-state-machine.ts#L206)

#### Parameters

##### context

`BaseContext`

##### payload

[`ZoomToAtInputPayload`](../type-aliases/ZoomToAtInputPayload.md)

#### Returns

[`ZoomControlOutputEvent`](../type-aliases/ZoomControlOutputEvent.md)

***

### transitionZoomToAtInput()

> **transitionZoomToAtInput**(`context`, `payload`): [`ZoomControlOutputEvent`](../type-aliases/ZoomControlOutputEvent.md)

Defined in: [packages/board/src/camera/camera-mux/animation-and-lock/zoom-control-state-machine.ts:202](https://github.com/ue-too/ue-too/blob/e468a9961da59c81663192ec8df16ebc8e17abac/packages/board/src/camera/camera-mux/animation-and-lock/zoom-control-state-machine.ts#L202)

#### Parameters

##### context

`BaseContext`

##### payload

[`ZoomToAtInputPayload`](../type-aliases/ZoomToAtInputPayload.md)

#### Returns

[`ZoomControlOutputEvent`](../type-aliases/ZoomControlOutputEvent.md)

***

### transitionZoomToAtWorldInput()

> **transitionZoomToAtWorldInput**(`context`, `payload`): [`ZoomControlOutputEvent`](../type-aliases/ZoomControlOutputEvent.md)

Defined in: [packages/board/src/camera/camera-mux/animation-and-lock/zoom-control-state-machine.ts:210](https://github.com/ue-too/ue-too/blob/e468a9961da59c81663192ec8df16ebc8e17abac/packages/board/src/camera/camera-mux/animation-and-lock/zoom-control-state-machine.ts#L210)

#### Parameters

##### context

`BaseContext`

##### payload

[`ZoomToAtInputPayload`](../type-aliases/ZoomToAtInputPayload.md)

#### Returns

[`ZoomControlOutputEvent`](../type-aliases/ZoomControlOutputEvent.md)

***

### uponEnter()

> **uponEnter**(`context`, `stateMachine`, `from`): `void`

Defined in: [packages/being/src/interface.ts:607](https://github.com/ue-too/ue-too/blob/e468a9961da59c81663192ec8df16ebc8e17abac/packages/being/src/interface.ts#L607)

#### Parameters

##### context

`BaseContext`

##### stateMachine

`StateMachine`\<[`ZoomEventPayloadMapping`](../type-aliases/ZoomEventPayloadMapping.md), `BaseContext`, [`ZoomControlStates`](../type-aliases/ZoomControlStates.md), [`ZoomControlOutputMapping`](../type-aliases/ZoomControlOutputMapping.md)\>

##### from

[`ZoomControlStates`](../type-aliases/ZoomControlStates.md)

#### Returns

`void`

#### Inherited from

`TemplateState.uponEnter`

***

### userZoomByAtInput()

> **userZoomByAtInput**(`context`, `payload`): [`ZoomControlOutputEvent`](../type-aliases/ZoomControlOutputEvent.md)

Defined in: [packages/board/src/camera/camera-mux/animation-and-lock/zoom-control-state-machine.ts:186](https://github.com/ue-too/ue-too/blob/e468a9961da59c81663192ec8df16ebc8e17abac/packages/board/src/camera/camera-mux/animation-and-lock/zoom-control-state-machine.ts#L186)

#### Parameters

##### context

`BaseContext`

##### payload

[`ZoomByAtInputPayload`](../type-aliases/ZoomByAtInputPayload.md)

#### Returns

[`ZoomControlOutputEvent`](../type-aliases/ZoomControlOutputEvent.md)

***

### userZoomToAtInput()

> **userZoomToAtInput**(`context`, `payload`): [`ZoomControlOutputEvent`](../type-aliases/ZoomControlOutputEvent.md)

Defined in: [packages/board/src/camera/camera-mux/animation-and-lock/zoom-control-state-machine.ts:190](https://github.com/ue-too/ue-too/blob/e468a9961da59c81663192ec8df16ebc8e17abac/packages/board/src/camera/camera-mux/animation-and-lock/zoom-control-state-machine.ts#L190)

#### Parameters

##### context

`BaseContext`

##### payload

[`ZoomToAtInputPayload`](../type-aliases/ZoomToAtInputPayload.md)

#### Returns

[`ZoomControlOutputEvent`](../type-aliases/ZoomControlOutputEvent.md)
