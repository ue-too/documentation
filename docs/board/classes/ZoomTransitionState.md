[@ue-too/board](../globals.md) / ZoomTransitionState

# Class: ZoomTransitionState

Defined in: [packages/board/src/camera/camera-mux/animation-and-lock/zoom-control-state-machine.ts:153](https://github.com/ue-too/ue-too/blob/1055c6abca1ea3a0e952b0825f36e0ca2527df85/packages/board/src/camera/camera-mux/animation-and-lock/zoom-control-state-machine.ts#L153)

State implementation for zoom animations and transitions.
Processes animation updates and allows user input to interrupt.

## Extends

- `TemplateState`\<[`ZoomEventPayloadMapping`](../type-aliases/ZoomEventPayloadMapping.md), `BaseContext`, [`ZoomControlStates`](../type-aliases/ZoomControlStates.md), [`ZoomControlOutputMapping`](../type-aliases/ZoomControlOutputMapping.md)\>

## Constructors

### Constructor

> **new ZoomTransitionState**(): `ZoomTransitionState`

Defined in: [packages/board/src/camera/camera-mux/animation-and-lock/zoom-control-state-machine.ts:155](https://github.com/ue-too/ue-too/blob/1055c6abca1ea3a0e952b0825f36e0ca2527df85/packages/board/src/camera/camera-mux/animation-and-lock/zoom-control-state-machine.ts#L155)

#### Returns

`ZoomTransitionState`

#### Overrides

`TemplateState<ZoomEventPayloadMapping, BaseContext, ZoomControlStates, ZoomControlOutputMapping>.constructor`

## Properties

### \_delay

> `protected` **\_delay**: `Delay`\<`BaseContext`, [`ZoomEventPayloadMapping`](../type-aliases/ZoomEventPayloadMapping.md), [`ZoomControlStates`](../type-aliases/ZoomControlStates.md), [`ZoomControlOutputMapping`](../type-aliases/ZoomControlOutputMapping.md)\> \| `undefined`

Defined in: packages/being/dist/interface.d.ts:486

#### Inherited from

`TemplateState._delay`

***

### \_eventGuards

> `protected` **\_eventGuards**: `Partial`\<`EventGuards`\<`EventPayloadMapping`, `States`, `Context`, `Guard`\<`Context`\>\>\>

Defined in: packages/being/dist/interface.d.ts:485

#### Inherited from

`TemplateState._eventGuards`

***

### \_eventReactions

> `protected` **\_eventReactions**: `EventReactions`\<[`ZoomEventPayloadMapping`](../type-aliases/ZoomEventPayloadMapping.md), `BaseContext`, [`ZoomControlStates`](../type-aliases/ZoomControlStates.md), [`ZoomControlOutputMapping`](../type-aliases/ZoomControlOutputMapping.md)\>

Defined in: [packages/board/src/camera/camera-mux/animation-and-lock/zoom-control-state-machine.ts:159](https://github.com/ue-too/ue-too/blob/1055c6abca1ea3a0e952b0825f36e0ca2527df85/packages/board/src/camera/camera-mux/animation-and-lock/zoom-control-state-machine.ts#L159)

#### Overrides

`TemplateState._eventReactions`

***

### \_guards

> `protected` **\_guards**: `Guard`\<`Context`\>

Defined in: packages/being/dist/interface.d.ts:484

#### Inherited from

`TemplateState._guards`

## Accessors

### delay

#### Get Signature

> **get** **delay**(): `Delay`\<`Context`, `EventPayloadMapping`, `States`, `EventOutputMapping`\> \| `undefined`

Defined in: packages/being/dist/interface.d.ts:490

##### Returns

`Delay`\<`Context`, `EventPayloadMapping`, `States`, `EventOutputMapping`\> \| `undefined`

#### Inherited from

`TemplateState.delay`

***

### eventGuards

#### Get Signature

> **get** **eventGuards**(): `Partial`\<`EventGuards`\<`EventPayloadMapping`, `States`, `Context`, `Guard`\<`Context`\>\>\>

Defined in: packages/being/dist/interface.d.ts:489

##### Returns

`Partial`\<`EventGuards`\<`EventPayloadMapping`, `States`, `Context`, `Guard`\<`Context`\>\>\>

#### Inherited from

`TemplateState.eventGuards`

***

### guards

#### Get Signature

> **get** **guards**(): `Guard`\<`Context`\>

Defined in: packages/being/dist/interface.d.ts:488

##### Returns

`Guard`\<`Context`\>

#### Inherited from

`TemplateState.guards`

***

### handlingEvents

#### Get Signature

> **get** **handlingEvents**(): keyof `EventPayloadMapping`[]

Defined in: packages/being/dist/interface.d.ts:487

##### Returns

keyof `EventPayloadMapping`[]

#### Inherited from

`TemplateState.handlingEvents`

## Methods

### beforeExit()

> **beforeExit**(`context`, `stateMachine`, `to`): `void`

Defined in: packages/being/dist/interface.d.ts:492

#### Parameters

##### context

`BaseContext`

##### stateMachine

`StateMachine`\<[`ZoomEventPayloadMapping`](../type-aliases/ZoomEventPayloadMapping.md), `BaseContext`, [`ZoomControlStates`](../type-aliases/ZoomControlStates.md), [`ZoomControlOutputMapping`](../type-aliases/ZoomControlOutputMapping.md)\>

##### to

[`ZoomControlStates`](../type-aliases/ZoomControlStates.md) | `"TERMINAL"`

#### Returns

`void`

#### Inherited from

`TemplateState.beforeExit`

***

### handles()

> **handles**\<`K`\>(`args`, `context`, `stateMachine`): `EventResult`\<[`ZoomControlStates`](../type-aliases/ZoomControlStates.md), `K` *extends* keyof [`ZoomControlOutputMapping`](../type-aliases/ZoomControlOutputMapping.md) ? [`ZoomControlOutputMapping`](../type-aliases/ZoomControlOutputMapping.md)\[`K`\<`K`\>\] : `void`\>

Defined in: packages/being/dist/interface.d.ts:493

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

Defined in: [packages/board/src/camera/camera-mux/animation-and-lock/zoom-control-state-machine.ts:170](https://github.com/ue-too/ue-too/blob/1055c6abca1ea3a0e952b0825f36e0ca2527df85/packages/board/src/camera/camera-mux/animation-and-lock/zoom-control-state-machine.ts#L170)

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

Defined in: [packages/board/src/camera/camera-mux/animation-and-lock/zoom-control-state-machine.ts:174](https://github.com/ue-too/ue-too/blob/1055c6abca1ea3a0e952b0825f36e0ca2527df85/packages/board/src/camera/camera-mux/animation-and-lock/zoom-control-state-machine.ts#L174)

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

Defined in: [packages/board/src/camera/camera-mux/animation-and-lock/zoom-control-state-machine.ts:190](https://github.com/ue-too/ue-too/blob/1055c6abca1ea3a0e952b0825f36e0ca2527df85/packages/board/src/camera/camera-mux/animation-and-lock/zoom-control-state-machine.ts#L190)

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

Defined in: [packages/board/src/camera/camera-mux/animation-and-lock/zoom-control-state-machine.ts:186](https://github.com/ue-too/ue-too/blob/1055c6abca1ea3a0e952b0825f36e0ca2527df85/packages/board/src/camera/camera-mux/animation-and-lock/zoom-control-state-machine.ts#L186)

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

Defined in: [packages/board/src/camera/camera-mux/animation-and-lock/zoom-control-state-machine.ts:198](https://github.com/ue-too/ue-too/blob/1055c6abca1ea3a0e952b0825f36e0ca2527df85/packages/board/src/camera/camera-mux/animation-and-lock/zoom-control-state-machine.ts#L198)

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

Defined in: [packages/board/src/camera/camera-mux/animation-and-lock/zoom-control-state-machine.ts:194](https://github.com/ue-too/ue-too/blob/1055c6abca1ea3a0e952b0825f36e0ca2527df85/packages/board/src/camera/camera-mux/animation-and-lock/zoom-control-state-machine.ts#L194)

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

Defined in: [packages/board/src/camera/camera-mux/animation-and-lock/zoom-control-state-machine.ts:202](https://github.com/ue-too/ue-too/blob/1055c6abca1ea3a0e952b0825f36e0ca2527df85/packages/board/src/camera/camera-mux/animation-and-lock/zoom-control-state-machine.ts#L202)

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

Defined in: packages/being/dist/interface.d.ts:491

#### Parameters

##### context

`BaseContext`

##### stateMachine

`StateMachine`\<[`ZoomEventPayloadMapping`](../type-aliases/ZoomEventPayloadMapping.md), `BaseContext`, [`ZoomControlStates`](../type-aliases/ZoomControlStates.md), [`ZoomControlOutputMapping`](../type-aliases/ZoomControlOutputMapping.md)\>

##### from

[`ZoomControlStates`](../type-aliases/ZoomControlStates.md) | `"INITIAL"`

#### Returns

`void`

#### Inherited from

`TemplateState.uponEnter`

***

### userZoomByAtInput()

> **userZoomByAtInput**(`context`, `payload`): [`ZoomControlOutputEvent`](../type-aliases/ZoomControlOutputEvent.md)

Defined in: [packages/board/src/camera/camera-mux/animation-and-lock/zoom-control-state-machine.ts:178](https://github.com/ue-too/ue-too/blob/1055c6abca1ea3a0e952b0825f36e0ca2527df85/packages/board/src/camera/camera-mux/animation-and-lock/zoom-control-state-machine.ts#L178)

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

Defined in: [packages/board/src/camera/camera-mux/animation-and-lock/zoom-control-state-machine.ts:182](https://github.com/ue-too/ue-too/blob/1055c6abca1ea3a0e952b0825f36e0ca2527df85/packages/board/src/camera/camera-mux/animation-and-lock/zoom-control-state-machine.ts#L182)

#### Parameters

##### context

`BaseContext`

##### payload

[`ZoomToAtInputPayload`](../type-aliases/ZoomToAtInputPayload.md)

#### Returns

[`ZoomControlOutputEvent`](../type-aliases/ZoomControlOutputEvent.md)
