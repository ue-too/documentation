[@ue-too/board](../globals.md) / ZoomAcceptingUserInputState

# Class: ZoomAcceptingUserInputState

Defined in: [packages/board/src/camera/camera-mux/animation-and-lock/zoom-control-state-machine.ts:88](https://github.com/ue-too/ue-too/blob/e0ad36978d99a0fba62213691fb721d4dca7c035/packages/board/src/camera/camera-mux/animation-and-lock/zoom-control-state-machine.ts#L88)

## Description

The accepting user input state of the zoom control state machine.

## Extends

- `TemplateState`\<[`ZoomEventPayloadMapping`](../type-aliases/ZoomEventPayloadMapping.md), [`ZoomContext`](../interfaces/ZoomContext.md), [`ZoomControlStates`](../type-aliases/ZoomControlStates.md)\>

## Constructors

### Constructor

> **new ZoomAcceptingUserInputState**(): `ZoomAcceptingUserInputState`

#### Returns

`ZoomAcceptingUserInputState`

#### Inherited from

`TemplateState<ZoomEventPayloadMapping, ZoomContext, ZoomControlStates>.constructor`

## Properties

### \_delay

> `protected` **\_delay**: `Delay`\<[`ZoomContext`](../interfaces/ZoomContext.md), [`ZoomEventPayloadMapping`](../type-aliases/ZoomEventPayloadMapping.md), [`ZoomControlStates`](../type-aliases/ZoomControlStates.md)\> \| `undefined` = `undefined`

Defined in: [packages/being/src/interface.ts:291](https://github.com/ue-too/ue-too/blob/e0ad36978d99a0fba62213691fb721d4dca7c035/packages/being/src/interface.ts#L291)

#### Inherited from

`TemplateState._delay`

***

### \_eventGuards

> `protected` **\_eventGuards**: `Partial`\<`EventGuards`\<`EventPayloadMapping`, `States`, `Context`, `Guard`\<`Context`\>\>\>

Defined in: [packages/being/src/interface.ts:290](https://github.com/ue-too/ue-too/blob/e0ad36978d99a0fba62213691fb721d4dca7c035/packages/being/src/interface.ts#L290)

#### Inherited from

`TemplateState._eventGuards`

***

### \_guards

> `protected` **\_guards**: `Guard`\<`Context`\>

Defined in: [packages/being/src/interface.ts:289](https://github.com/ue-too/ue-too/blob/e0ad36978d99a0fba62213691fb721d4dca7c035/packages/being/src/interface.ts#L289)

#### Inherited from

`TemplateState._guards`

## Accessors

### delay

#### Get Signature

> **get** **delay**(): `Delay`\<`Context`, `EventPayloadMapping`, `States`\> \| `undefined`

Defined in: [packages/being/src/interface.ts:301](https://github.com/ue-too/ue-too/blob/e0ad36978d99a0fba62213691fb721d4dca7c035/packages/being/src/interface.ts#L301)

##### Returns

`Delay`\<`Context`, `EventPayloadMapping`, `States`\> \| `undefined`

#### Inherited from

`TemplateState.delay`

***

### eventGuards

#### Get Signature

> **get** **eventGuards**(): `Partial`\<`EventGuards`\<`EventPayloadMapping`, `States`, `Context`, `Guard`\<`Context`\>\>\>

Defined in: [packages/being/src/interface.ts:297](https://github.com/ue-too/ue-too/blob/e0ad36978d99a0fba62213691fb721d4dca7c035/packages/being/src/interface.ts#L297)

##### Returns

`Partial`\<`EventGuards`\<`EventPayloadMapping`, `States`, `Context`, `Guard`\<`Context`\>\>\>

#### Inherited from

`TemplateState.eventGuards`

***

### eventReactions

#### Get Signature

> **get** **eventReactions**(): `EventReactions`\<[`ZoomEventPayloadMapping`](../type-aliases/ZoomEventPayloadMapping.md), [`ZoomContext`](../interfaces/ZoomContext.md), [`ZoomControlStates`](../type-aliases/ZoomControlStates.md)\>

Defined in: [packages/board/src/camera/camera-mux/animation-and-lock/zoom-control-state-machine.ts:96](https://github.com/ue-too/ue-too/blob/e0ad36978d99a0fba62213691fb721d4dca7c035/packages/board/src/camera/camera-mux/animation-and-lock/zoom-control-state-machine.ts#L96)

##### Returns

`EventReactions`\<[`ZoomEventPayloadMapping`](../type-aliases/ZoomEventPayloadMapping.md), [`ZoomContext`](../interfaces/ZoomContext.md), [`ZoomControlStates`](../type-aliases/ZoomControlStates.md)\>

#### Overrides

`TemplateState.eventReactions`

***

### guards

#### Get Signature

> **get** **guards**(): `Guard`\<`Context`\>

Defined in: [packages/being/src/interface.ts:293](https://github.com/ue-too/ue-too/blob/e0ad36978d99a0fba62213691fb721d4dca7c035/packages/being/src/interface.ts#L293)

##### Returns

`Guard`\<`Context`\>

#### Inherited from

`TemplateState.guards`

## Methods

### beforeExit()

> **beforeExit**(`context`, `stateMachine`, `to`): `void`

Defined in: [packages/being/src/interface.ts:309](https://github.com/ue-too/ue-too/blob/e0ad36978d99a0fba62213691fb721d4dca7c035/packages/being/src/interface.ts#L309)

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

Defined in: [packages/being/src/interface.ts:313](https://github.com/ue-too/ue-too/blob/e0ad36978d99a0fba62213691fb721d4dca7c035/packages/being/src/interface.ts#L313)

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

### uponEnter()

> **uponEnter**(`context`, `stateMachine`, `from`): `void`

Defined in: [packages/being/src/interface.ts:305](https://github.com/ue-too/ue-too/blob/e0ad36978d99a0fba62213691fb721d4dca7c035/packages/being/src/interface.ts#L305)

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

Defined in: [packages/board/src/camera/camera-mux/animation-and-lock/zoom-control-state-machine.ts:100](https://github.com/ue-too/ue-too/blob/e0ad36978d99a0fba62213691fb721d4dca7c035/packages/board/src/camera/camera-mux/animation-and-lock/zoom-control-state-machine.ts#L100)

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

Defined in: [packages/board/src/camera/camera-mux/animation-and-lock/zoom-control-state-machine.ts:104](https://github.com/ue-too/ue-too/blob/e0ad36978d99a0fba62213691fb721d4dca7c035/packages/board/src/camera/camera-mux/animation-and-lock/zoom-control-state-machine.ts#L104)

#### Parameters

##### context

[`ZoomContext`](../interfaces/ZoomContext.md)

##### payload

[`ZoomToAtInputPayload`](../type-aliases/ZoomToAtInputPayload.md)

#### Returns

`void`
