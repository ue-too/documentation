[@ue-too/board](../globals.md) / LockedOnObjectState

# Class: LockedOnObjectState

Defined in: [packages/board/src/camera/camera-mux/animation-and-lock/pan-control-state-machine.ts:206](https://github.com/ue-too/ue-too/blob/fe7fe80879019da785d08f475b37a73725116e88/packages/board/src/camera/camera-mux/animation-and-lock/pan-control-state-machine.ts#L206)

## Description

The locked on object state of the pan control state machine.

## Extends

- `TemplateState`\<[`PanEventPayloadMapping`](../type-aliases/PanEventPayloadMapping.md), [`PanContext`](../interfaces/PanContext.md), [`PanControlStates`](../type-aliases/PanControlStates.md)\>

## Constructors

### Constructor

> **new LockedOnObjectState**(): `LockedOnObjectState`

Defined in: [packages/board/src/camera/camera-mux/animation-and-lock/pan-control-state-machine.ts:208](https://github.com/ue-too/ue-too/blob/fe7fe80879019da785d08f475b37a73725116e88/packages/board/src/camera/camera-mux/animation-and-lock/pan-control-state-machine.ts#L208)

#### Returns

`LockedOnObjectState`

#### Overrides

`TemplateState<PanEventPayloadMapping, PanContext, PanControlStates>.constructor`

## Properties

### \_delay

> `protected` **\_delay**: `Delay`\<[`PanContext`](../interfaces/PanContext.md), [`PanEventPayloadMapping`](../type-aliases/PanEventPayloadMapping.md), [`PanControlStates`](../type-aliases/PanControlStates.md)\> \| `undefined` = `undefined`

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

***

### eventReactions

> **eventReactions**: `EventReactions`\<[`PanEventPayloadMapping`](../type-aliases/PanEventPayloadMapping.md), [`PanContext`](../interfaces/PanContext.md), [`PanControlStates`](../type-aliases/PanControlStates.md)\>

Defined in: [packages/board/src/camera/camera-mux/animation-and-lock/pan-control-state-machine.ts:212](https://github.com/ue-too/ue-too/blob/fe7fe80879019da785d08f475b37a73725116e88/packages/board/src/camera/camera-mux/animation-and-lock/pan-control-state-machine.ts#L212)

#### Overrides

`TemplateState.eventReactions`

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

Defined in: [packages/being/src/interface.ts:313](https://github.com/ue-too/ue-too/blob/fe7fe80879019da785d08f475b37a73725116e88/packages/being/src/interface.ts#L313)

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

> **lockedOnObjectPanByInputHandler**(`context`, `payload`): `void`

Defined in: [packages/board/src/camera/camera-mux/animation-and-lock/pan-control-state-machine.ts:218](https://github.com/ue-too/ue-too/blob/fe7fe80879019da785d08f475b37a73725116e88/packages/board/src/camera/camera-mux/animation-and-lock/pan-control-state-machine.ts#L218)

#### Parameters

##### context

[`PanContext`](../interfaces/PanContext.md)

##### payload

[`PanByInputEventPayload`](../type-aliases/PanByInputEventPayload.md)

#### Returns

`void`

***

### lockedOnObjectPanToInputHandler()

> **lockedOnObjectPanToInputHandler**(`context`, `payload`): `void`

Defined in: [packages/board/src/camera/camera-mux/animation-and-lock/pan-control-state-machine.ts:222](https://github.com/ue-too/ue-too/blob/fe7fe80879019da785d08f475b37a73725116e88/packages/board/src/camera/camera-mux/animation-and-lock/pan-control-state-machine.ts#L222)

#### Parameters

##### context

[`PanContext`](../interfaces/PanContext.md)

##### payload

[`PanToInputEventPayload`](../type-aliases/PanToInputEventPayload.md)

#### Returns

`void`

***

### uponEnter()

> **uponEnter**(`context`, `stateMachine`, `from`): `void`

Defined in: [packages/being/src/interface.ts:305](https://github.com/ue-too/ue-too/blob/fe7fe80879019da785d08f475b37a73725116e88/packages/being/src/interface.ts#L305)

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
