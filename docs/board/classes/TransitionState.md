[@ue-too/board](../globals.md) / TransitionState

# Class: TransitionState

Defined in: [packages/board/src/camera/camera-mux/animation-and-lock/pan-control-state-machine.ts:215](https://github.com/ue-too/ue-too/blob/1055c6abca1ea3a0e952b0825f36e0ca2527df85/packages/board/src/camera/camera-mux/animation-and-lock/pan-control-state-machine.ts#L215)

State implementation for pan animations and transitions.
Processes animation updates and allows user input to interrupt.

## Extends

- `TemplateState`\<[`PanEventPayloadMapping`](../type-aliases/PanEventPayloadMapping.md), `BaseContext`, [`PanControlStates`](../type-aliases/PanControlStates.md), [`PanControlOutputMapping`](../type-aliases/PanControlOutputMapping.md)\>

## Constructors

### Constructor

> **new TransitionState**(): `TransitionState`

Defined in: [packages/board/src/camera/camera-mux/animation-and-lock/pan-control-state-machine.ts:217](https://github.com/ue-too/ue-too/blob/1055c6abca1ea3a0e952b0825f36e0ca2527df85/packages/board/src/camera/camera-mux/animation-and-lock/pan-control-state-machine.ts#L217)

#### Returns

`TransitionState`

#### Overrides

`TemplateState<PanEventPayloadMapping, BaseContext, PanControlStates, PanControlOutputMapping>.constructor`

## Properties

### \_delay

> `protected` **\_delay**: `Delay`\<`BaseContext`, [`PanEventPayloadMapping`](../type-aliases/PanEventPayloadMapping.md), [`PanControlStates`](../type-aliases/PanControlStates.md), [`PanControlOutputMapping`](../type-aliases/PanControlOutputMapping.md)\> \| `undefined`

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

> `protected` **\_eventReactions**: `EventReactions`\<[`PanEventPayloadMapping`](../type-aliases/PanEventPayloadMapping.md), `BaseContext`, [`PanControlStates`](../type-aliases/PanControlStates.md), [`PanControlOutputMapping`](../type-aliases/PanControlOutputMapping.md)\>

Defined in: [packages/board/src/camera/camera-mux/animation-and-lock/pan-control-state-machine.ts:221](https://github.com/ue-too/ue-too/blob/1055c6abca1ea3a0e952b0825f36e0ca2527df85/packages/board/src/camera/camera-mux/animation-and-lock/pan-control-state-machine.ts#L221)

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

`StateMachine`\<[`PanEventPayloadMapping`](../type-aliases/PanEventPayloadMapping.md), `BaseContext`, [`PanControlStates`](../type-aliases/PanControlStates.md), [`PanControlOutputMapping`](../type-aliases/PanControlOutputMapping.md)\>

##### to

[`PanControlStates`](../type-aliases/PanControlStates.md) | `"TERMINAL"`

#### Returns

`void`

#### Inherited from

`TemplateState.beforeExit`

***

### handles()

> **handles**\<`K`\>(`args`, `context`, `stateMachine`): `EventResult`\<[`PanControlStates`](../type-aliases/PanControlStates.md), `K` *extends* keyof [`PanControlOutputMapping`](../type-aliases/PanControlOutputMapping.md) ? [`PanControlOutputMapping`](../type-aliases/PanControlOutputMapping.md)\[`K`\<`K`\>\] : `void`\>

Defined in: packages/being/dist/interface.d.ts:493

#### Type Parameters

##### K

`K` *extends* `string`

#### Parameters

##### args

`EventArgs`\<[`PanEventPayloadMapping`](../type-aliases/PanEventPayloadMapping.md), `K`\>

##### context

`BaseContext`

##### stateMachine

`StateMachine`\<[`PanEventPayloadMapping`](../type-aliases/PanEventPayloadMapping.md), `BaseContext`, [`PanControlStates`](../type-aliases/PanControlStates.md), [`PanControlOutputMapping`](../type-aliases/PanControlOutputMapping.md)\>

#### Returns

`EventResult`\<[`PanControlStates`](../type-aliases/PanControlStates.md), `K` *extends* keyof [`PanControlOutputMapping`](../type-aliases/PanControlOutputMapping.md) ? [`PanControlOutputMapping`](../type-aliases/PanControlOutputMapping.md)\[`K`\<`K`\>\] : `void`\>

#### Inherited from

`TemplateState.handles`

***

### lockedOnObjectPanByInputHandler()

> **lockedOnObjectPanByInputHandler**(`context`, `payload`): [`PanControlOutputEvent`](../type-aliases/PanControlOutputEvent.md)

Defined in: [packages/board/src/camera/camera-mux/animation-and-lock/pan-control-state-machine.ts:246](https://github.com/ue-too/ue-too/blob/1055c6abca1ea3a0e952b0825f36e0ca2527df85/packages/board/src/camera/camera-mux/animation-and-lock/pan-control-state-machine.ts#L246)

#### Parameters

##### context

`BaseContext`

##### payload

[`PanByInputEventPayload`](../type-aliases/PanByInputEventPayload.md)

#### Returns

[`PanControlOutputEvent`](../type-aliases/PanControlOutputEvent.md)

***

### lockedOnObjectPanToInputHandler()

> **lockedOnObjectPanToInputHandler**(`context`, `payload`): [`PanControlOutputEvent`](../type-aliases/PanControlOutputEvent.md)

Defined in: [packages/board/src/camera/camera-mux/animation-and-lock/pan-control-state-machine.ts:250](https://github.com/ue-too/ue-too/blob/1055c6abca1ea3a0e952b0825f36e0ca2527df85/packages/board/src/camera/camera-mux/animation-and-lock/pan-control-state-machine.ts#L250)

#### Parameters

##### context

`BaseContext`

##### payload

[`PanToInputEventPayload`](../type-aliases/PanToInputEventPayload.md)

#### Returns

[`PanControlOutputEvent`](../type-aliases/PanControlOutputEvent.md)

***

### transitionPanByInputHandler()

> **transitionPanByInputHandler**(`context`, `payload`): [`PanControlOutputEvent`](../type-aliases/PanControlOutputEvent.md)

Defined in: [packages/board/src/camera/camera-mux/animation-and-lock/pan-control-state-machine.ts:238](https://github.com/ue-too/ue-too/blob/1055c6abca1ea3a0e952b0825f36e0ca2527df85/packages/board/src/camera/camera-mux/animation-and-lock/pan-control-state-machine.ts#L238)

#### Parameters

##### context

`BaseContext`

##### payload

[`PanByInputEventPayload`](../type-aliases/PanByInputEventPayload.md)

#### Returns

[`PanControlOutputEvent`](../type-aliases/PanControlOutputEvent.md)

***

### transitionPanToInputHandler()

> **transitionPanToInputHandler**(`context`, `payload`): [`PanControlOutputEvent`](../type-aliases/PanControlOutputEvent.md)

Defined in: [packages/board/src/camera/camera-mux/animation-and-lock/pan-control-state-machine.ts:242](https://github.com/ue-too/ue-too/blob/1055c6abca1ea3a0e952b0825f36e0ca2527df85/packages/board/src/camera/camera-mux/animation-and-lock/pan-control-state-machine.ts#L242)

#### Parameters

##### context

`BaseContext`

##### payload

[`PanToInputEventPayload`](../type-aliases/PanToInputEventPayload.md)

#### Returns

[`PanControlOutputEvent`](../type-aliases/PanControlOutputEvent.md)

***

### uponEnter()

> **uponEnter**(`context`, `stateMachine`, `from`): `void`

Defined in: packages/being/dist/interface.d.ts:491

#### Parameters

##### context

`BaseContext`

##### stateMachine

`StateMachine`\<[`PanEventPayloadMapping`](../type-aliases/PanEventPayloadMapping.md), `BaseContext`, [`PanControlStates`](../type-aliases/PanControlStates.md), [`PanControlOutputMapping`](../type-aliases/PanControlOutputMapping.md)\>

##### from

[`PanControlStates`](../type-aliases/PanControlStates.md) | `"INITIAL"`

#### Returns

`void`

#### Inherited from

`TemplateState.uponEnter`

***

### userPanByInputHandler()

> **userPanByInputHandler**(`context`, `payload`): [`PanControlOutputEvent`](../type-aliases/PanControlOutputEvent.md)

Defined in: [packages/board/src/camera/camera-mux/animation-and-lock/pan-control-state-machine.ts:230](https://github.com/ue-too/ue-too/blob/1055c6abca1ea3a0e952b0825f36e0ca2527df85/packages/board/src/camera/camera-mux/animation-and-lock/pan-control-state-machine.ts#L230)

#### Parameters

##### context

`BaseContext`

##### payload

[`PanByInputEventPayload`](../type-aliases/PanByInputEventPayload.md)

#### Returns

[`PanControlOutputEvent`](../type-aliases/PanControlOutputEvent.md)

***

### userPanToInputHandler()

> **userPanToInputHandler**(`context`, `payload`): [`PanControlOutputEvent`](../type-aliases/PanControlOutputEvent.md)

Defined in: [packages/board/src/camera/camera-mux/animation-and-lock/pan-control-state-machine.ts:234](https://github.com/ue-too/ue-too/blob/1055c6abca1ea3a0e952b0825f36e0ca2527df85/packages/board/src/camera/camera-mux/animation-and-lock/pan-control-state-machine.ts#L234)

#### Parameters

##### context

`BaseContext`

##### payload

[`PanToInputEventPayload`](../type-aliases/PanToInputEventPayload.md)

#### Returns

[`PanControlOutputEvent`](../type-aliases/PanControlOutputEvent.md)
