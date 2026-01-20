[@ue-too/board](../globals.md) / RotationTransitionState

# Class: RotationTransitionState

Defined in: [packages/board/src/camera/camera-mux/animation-and-lock/rotation-control-state-machine.ts:214](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/board/src/camera/camera-mux/animation-and-lock/rotation-control-state-machine.ts#L214)

State implementation for rotation animations and transitions.
Processes animation updates and allows user input to interrupt.

## Extends

- `TemplateState`\<[`RotateEventPayloadMapping`](../type-aliases/RotateEventPayloadMapping.md), `BaseContext`, [`RotateControlStates`](../type-aliases/RotateControlStates.md), [`RotateControlOutputMapping`](../type-aliases/RotateControlOutputMapping.md)\>

## Constructors

### Constructor

> **new RotationTransitionState**(): `RotationTransitionState`

Defined in: [packages/board/src/camera/camera-mux/animation-and-lock/rotation-control-state-machine.ts:216](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/board/src/camera/camera-mux/animation-and-lock/rotation-control-state-machine.ts#L216)

#### Returns

`RotationTransitionState`

#### Overrides

`TemplateState<RotateEventPayloadMapping, BaseContext, RotateControlStates, RotateControlOutputMapping>.constructor`

## Properties

### \_delay

> `protected` **\_delay**: `Delay`\<`BaseContext`, [`RotateEventPayloadMapping`](../type-aliases/RotateEventPayloadMapping.md), [`RotateControlStates`](../type-aliases/RotateControlStates.md), [`RotateControlOutputMapping`](../type-aliases/RotateControlOutputMapping.md)\> \| `undefined`

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

> `protected` **\_eventReactions**: `EventReactions`\<[`RotateEventPayloadMapping`](../type-aliases/RotateEventPayloadMapping.md), `BaseContext`, [`RotateControlStates`](../type-aliases/RotateControlStates.md), [`RotateControlOutputMapping`](../type-aliases/RotateControlOutputMapping.md)\>

Defined in: [packages/board/src/camera/camera-mux/animation-and-lock/rotation-control-state-machine.ts:220](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/board/src/camera/camera-mux/animation-and-lock/rotation-control-state-machine.ts#L220)

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

`StateMachine`\<[`RotateEventPayloadMapping`](../type-aliases/RotateEventPayloadMapping.md), `BaseContext`, [`RotateControlStates`](../type-aliases/RotateControlStates.md), [`RotateControlOutputMapping`](../type-aliases/RotateControlOutputMapping.md)\>

##### to

[`RotateControlStates`](../type-aliases/RotateControlStates.md) | `"TERMINAL"`

#### Returns

`void`

#### Inherited from

`TemplateState.beforeExit`

***

### handles()

> **handles**\<`K`\>(`args`, `context`, `stateMachine`): `EventResult`\<[`RotateControlStates`](../type-aliases/RotateControlStates.md), `K` *extends* keyof [`RotateControlOutputMapping`](../type-aliases/RotateControlOutputMapping.md) ? [`RotateControlOutputMapping`](../type-aliases/RotateControlOutputMapping.md)\[`K`\<`K`\>\] : `void`\>

Defined in: packages/being/dist/interface.d.ts:493

#### Type Parameters

##### K

`K` *extends* `string`

#### Parameters

##### args

`EventArgs`\<[`RotateEventPayloadMapping`](../type-aliases/RotateEventPayloadMapping.md), `K`\>

##### context

`BaseContext`

##### stateMachine

`StateMachine`\<[`RotateEventPayloadMapping`](../type-aliases/RotateEventPayloadMapping.md), `BaseContext`, [`RotateControlStates`](../type-aliases/RotateControlStates.md), [`RotateControlOutputMapping`](../type-aliases/RotateControlOutputMapping.md)\>

#### Returns

`EventResult`\<[`RotateControlStates`](../type-aliases/RotateControlStates.md), `K` *extends* keyof [`RotateControlOutputMapping`](../type-aliases/RotateControlOutputMapping.md) ? [`RotateControlOutputMapping`](../type-aliases/RotateControlOutputMapping.md)\[`K`\<`K`\>\] : `void`\>

#### Inherited from

`TemplateState.handles`

***

### lockedOnObjectRotateByInputHandler()

> **lockedOnObjectRotateByInputHandler**(`context`, `payload`): [`RotateControlOutputEvent`](../type-aliases/RotateControlOutputEvent.md)

Defined in: [packages/board/src/camera/camera-mux/animation-and-lock/rotation-control-state-machine.ts:245](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/board/src/camera/camera-mux/animation-and-lock/rotation-control-state-machine.ts#L245)

#### Parameters

##### context

`BaseContext`

##### payload

[`RotateByInputEventPayload`](../type-aliases/RotateByInputEventPayload.md)

#### Returns

[`RotateControlOutputEvent`](../type-aliases/RotateControlOutputEvent.md)

***

### lockedOnObjectRotateToInputHandler()

> **lockedOnObjectRotateToInputHandler**(`context`, `payload`): [`RotateControlOutputEvent`](../type-aliases/RotateControlOutputEvent.md)

Defined in: [packages/board/src/camera/camera-mux/animation-and-lock/rotation-control-state-machine.ts:249](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/board/src/camera/camera-mux/animation-and-lock/rotation-control-state-machine.ts#L249)

#### Parameters

##### context

`BaseContext`

##### payload

[`RotateToInputEventPayload`](../type-aliases/RotateToInputEventPayload.md)

#### Returns

[`RotateControlOutputEvent`](../type-aliases/RotateControlOutputEvent.md)

***

### transitionRotateByInputHandler()

> **transitionRotateByInputHandler**(`context`, `payload`): [`RotateControlOutputEvent`](../type-aliases/RotateControlOutputEvent.md)

Defined in: [packages/board/src/camera/camera-mux/animation-and-lock/rotation-control-state-machine.ts:237](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/board/src/camera/camera-mux/animation-and-lock/rotation-control-state-machine.ts#L237)

#### Parameters

##### context

`BaseContext`

##### payload

[`RotateByInputEventPayload`](../type-aliases/RotateByInputEventPayload.md)

#### Returns

[`RotateControlOutputEvent`](../type-aliases/RotateControlOutputEvent.md)

***

### transitionRotateToInputHandler()

> **transitionRotateToInputHandler**(`context`, `payload`): [`RotateControlOutputEvent`](../type-aliases/RotateControlOutputEvent.md)

Defined in: [packages/board/src/camera/camera-mux/animation-and-lock/rotation-control-state-machine.ts:241](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/board/src/camera/camera-mux/animation-and-lock/rotation-control-state-machine.ts#L241)

#### Parameters

##### context

`BaseContext`

##### payload

[`RotateToInputEventPayload`](../type-aliases/RotateToInputEventPayload.md)

#### Returns

[`RotateControlOutputEvent`](../type-aliases/RotateControlOutputEvent.md)

***

### uponEnter()

> **uponEnter**(`context`, `stateMachine`, `from`): `void`

Defined in: packages/being/dist/interface.d.ts:491

#### Parameters

##### context

`BaseContext`

##### stateMachine

`StateMachine`\<[`RotateEventPayloadMapping`](../type-aliases/RotateEventPayloadMapping.md), `BaseContext`, [`RotateControlStates`](../type-aliases/RotateControlStates.md), [`RotateControlOutputMapping`](../type-aliases/RotateControlOutputMapping.md)\>

##### from

[`RotateControlStates`](../type-aliases/RotateControlStates.md) | `"INITIAL"`

#### Returns

`void`

#### Inherited from

`TemplateState.uponEnter`

***

### userRotateByInputHandler()

> **userRotateByInputHandler**(`context`, `payload`): [`RotateControlOutputEvent`](../type-aliases/RotateControlOutputEvent.md)

Defined in: [packages/board/src/camera/camera-mux/animation-and-lock/rotation-control-state-machine.ts:229](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/board/src/camera/camera-mux/animation-and-lock/rotation-control-state-machine.ts#L229)

#### Parameters

##### context

`BaseContext`

##### payload

[`RotateByInputEventPayload`](../type-aliases/RotateByInputEventPayload.md)

#### Returns

[`RotateControlOutputEvent`](../type-aliases/RotateControlOutputEvent.md)

***

### userRotateToInputHandler()

> **userRotateToInputHandler**(`context`, `payload`): [`RotateControlOutputEvent`](../type-aliases/RotateControlOutputEvent.md)

Defined in: [packages/board/src/camera/camera-mux/animation-and-lock/rotation-control-state-machine.ts:233](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/board/src/camera/camera-mux/animation-and-lock/rotation-control-state-machine.ts#L233)

#### Parameters

##### context

`BaseContext`

##### payload

[`RotateToInputEventPayload`](../type-aliases/RotateToInputEventPayload.md)

#### Returns

[`RotateControlOutputEvent`](../type-aliases/RotateControlOutputEvent.md)
