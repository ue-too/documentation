[@ue-too/board](../globals.md) / ReadyToPanViaScrollWheelState

# Class: ReadyToPanViaScrollWheelState

Defined in: [packages/board/src/input-interpretation/input-state-machine/kmt-input-state-machine.ts:374](https://github.com/ue-too/ue-too/blob/95dd78435970713202a67be3986e96a80ff00749/packages/board/src/input-interpretation/input-state-machine/kmt-input-state-machine.ts#L374)

## Description

The ready to pan via scroll wheel state of the keyboard mouse and trackpad input state machine.

## Extends

- `TemplateState`\<[`KmtInputEventMapping`](../type-aliases/KmtInputEventMapping.md), [`KmtInputContext`](../interfaces/KmtInputContext.md), [`KmtInputStates`](../type-aliases/KmtInputStates.md)\>

## Constructors

### Constructor

> **new ReadyToPanViaScrollWheelState**(): `ReadyToPanViaScrollWheelState`

Defined in: [packages/board/src/input-interpretation/input-state-machine/kmt-input-state-machine.ts:376](https://github.com/ue-too/ue-too/blob/95dd78435970713202a67be3986e96a80ff00749/packages/board/src/input-interpretation/input-state-machine/kmt-input-state-machine.ts#L376)

#### Returns

`ReadyToPanViaScrollWheelState`

#### Overrides

`TemplateState<KmtInputEventMapping, KmtInputContext, KmtInputStates>.constructor`

## Properties

### \_delay

> `protected` **\_delay**: `Delay`\<[`KmtInputContext`](../interfaces/KmtInputContext.md), [`KmtInputEventMapping`](../type-aliases/KmtInputEventMapping.md), `"IDLE"` \| `"READY_TO_PAN_VIA_SPACEBAR"` \| `"READY_TO_PAN_VIA_SCROLL_WHEEL"` \| `"PAN"` \| `"INITIAL_PAN"` \| `"PAN_VIA_SCROLL_WHEEL"` \| `"DISABLED"`\> \| `undefined` = `undefined`

Defined in: [packages/being/src/interface.ts:291](https://github.com/ue-too/ue-too/blob/95dd78435970713202a67be3986e96a80ff00749/packages/being/src/interface.ts#L291)

#### Inherited from

`TemplateState._delay`

***

### \_eventGuards

> `protected` **\_eventGuards**: `Partial`\<`EventGuards`\<`EventPayloadMapping`, `States`, `Context`, `Guard`\<`Context`\>\>\>

Defined in: [packages/being/src/interface.ts:290](https://github.com/ue-too/ue-too/blob/95dd78435970713202a67be3986e96a80ff00749/packages/being/src/interface.ts#L290)

#### Inherited from

`TemplateState._eventGuards`

***

### \_eventReactions

> `protected` **\_eventReactions**: `EventReactions`\<[`KmtInputEventMapping`](../type-aliases/KmtInputEventMapping.md), [`KmtInputContext`](../interfaces/KmtInputContext.md), [`KmtInputStates`](../type-aliases/KmtInputStates.md)\>

Defined in: [packages/board/src/input-interpretation/input-state-machine/kmt-input-state-machine.ts:380](https://github.com/ue-too/ue-too/blob/95dd78435970713202a67be3986e96a80ff00749/packages/board/src/input-interpretation/input-state-machine/kmt-input-state-machine.ts#L380)

***

### \_guards

> `protected` **\_guards**: `Guard`\<`Context`\>

Defined in: [packages/being/src/interface.ts:289](https://github.com/ue-too/ue-too/blob/95dd78435970713202a67be3986e96a80ff00749/packages/being/src/interface.ts#L289)

#### Inherited from

`TemplateState._guards`

## Accessors

### delay

#### Get Signature

> **get** **delay**(): `Delay`\<`Context`, `EventPayloadMapping`, `States`\> \| `undefined`

Defined in: [packages/being/src/interface.ts:301](https://github.com/ue-too/ue-too/blob/95dd78435970713202a67be3986e96a80ff00749/packages/being/src/interface.ts#L301)

##### Returns

`Delay`\<`Context`, `EventPayloadMapping`, `States`\> \| `undefined`

#### Inherited from

`TemplateState.delay`

***

### eventGuards

#### Get Signature

> **get** **eventGuards**(): `Partial`\<`EventGuards`\<`EventPayloadMapping`, `States`, `Context`, `Guard`\<`Context`\>\>\>

Defined in: [packages/being/src/interface.ts:297](https://github.com/ue-too/ue-too/blob/95dd78435970713202a67be3986e96a80ff00749/packages/being/src/interface.ts#L297)

##### Returns

`Partial`\<`EventGuards`\<`EventPayloadMapping`, `States`, `Context`, `Guard`\<`Context`\>\>\>

#### Inherited from

`TemplateState.eventGuards`

***

### eventReactions

#### Get Signature

> **get** **eventReactions**(): `EventReactions`\<[`KmtInputEventMapping`](../type-aliases/KmtInputEventMapping.md), [`KmtInputContext`](../interfaces/KmtInputContext.md), [`KmtInputStates`](../type-aliases/KmtInputStates.md)\>

Defined in: [packages/board/src/input-interpretation/input-state-machine/kmt-input-state-machine.ts:391](https://github.com/ue-too/ue-too/blob/95dd78435970713202a67be3986e96a80ff00749/packages/board/src/input-interpretation/input-state-machine/kmt-input-state-machine.ts#L391)

##### Returns

`EventReactions`\<[`KmtInputEventMapping`](../type-aliases/KmtInputEventMapping.md), [`KmtInputContext`](../interfaces/KmtInputContext.md), [`KmtInputStates`](../type-aliases/KmtInputStates.md)\>

#### Overrides

`TemplateState.eventReactions`

***

### guards

#### Get Signature

> **get** **guards**(): `Guard`\<`Context`\>

Defined in: [packages/being/src/interface.ts:293](https://github.com/ue-too/ue-too/blob/95dd78435970713202a67be3986e96a80ff00749/packages/being/src/interface.ts#L293)

##### Returns

`Guard`\<`Context`\>

#### Inherited from

`TemplateState.guards`

## Methods

### beforeExit()

> **beforeExit**(`context`, `stateMachine`, `to`): `void`

Defined in: [packages/being/src/interface.ts:309](https://github.com/ue-too/ue-too/blob/95dd78435970713202a67be3986e96a80ff00749/packages/being/src/interface.ts#L309)

#### Parameters

##### context

[`KmtInputContext`](../interfaces/KmtInputContext.md)

##### stateMachine

`StateMachine`\<[`KmtInputEventMapping`](../type-aliases/KmtInputEventMapping.md), [`KmtInputContext`](../interfaces/KmtInputContext.md), `"IDLE"` \| `"READY_TO_PAN_VIA_SPACEBAR"` \| `"READY_TO_PAN_VIA_SCROLL_WHEEL"` \| `"PAN"` \| `"INITIAL_PAN"` \| `"PAN_VIA_SCROLL_WHEEL"` \| `"DISABLED"`\>

##### to

`"IDLE"` | `"READY_TO_PAN_VIA_SPACEBAR"` | `"READY_TO_PAN_VIA_SCROLL_WHEEL"` | `"PAN"` | `"INITIAL_PAN"` | `"PAN_VIA_SCROLL_WHEEL"` | `"DISABLED"`

#### Returns

`void`

#### Inherited from

`TemplateState.beforeExit`

***

### handles()

> **handles**\<`K`\>(`args`, `context`, `stateMachine`): `EventHandledResult`\<`"IDLE"` \| `"READY_TO_PAN_VIA_SPACEBAR"` \| `"READY_TO_PAN_VIA_SCROLL_WHEEL"` \| `"PAN"` \| `"INITIAL_PAN"` \| `"PAN_VIA_SCROLL_WHEEL"` \| `"DISABLED"`\>

Defined in: [packages/being/src/interface.ts:313](https://github.com/ue-too/ue-too/blob/95dd78435970713202a67be3986e96a80ff00749/packages/being/src/interface.ts#L313)

#### Type Parameters

##### K

`K` *extends* `string`

#### Parameters

##### args

`EventArgs`\<[`KmtInputEventMapping`](../type-aliases/KmtInputEventMapping.md), `K`\>

##### context

[`KmtInputContext`](../interfaces/KmtInputContext.md)

##### stateMachine

`StateMachine`\<[`KmtInputEventMapping`](../type-aliases/KmtInputEventMapping.md), [`KmtInputContext`](../interfaces/KmtInputContext.md), `"IDLE"` \| `"READY_TO_PAN_VIA_SPACEBAR"` \| `"READY_TO_PAN_VIA_SCROLL_WHEEL"` \| `"PAN"` \| `"INITIAL_PAN"` \| `"PAN_VIA_SCROLL_WHEEL"` \| `"DISABLED"`\>

#### Returns

`EventHandledResult`\<`"IDLE"` \| `"READY_TO_PAN_VIA_SPACEBAR"` \| `"READY_TO_PAN_VIA_SCROLL_WHEEL"` \| `"PAN"` \| `"INITIAL_PAN"` \| `"PAN_VIA_SCROLL_WHEEL"` \| `"DISABLED"`\>

#### Inherited from

`TemplateState.handles`

***

### uponEnter()

> **uponEnter**(`context`): `void`

Defined in: [packages/board/src/input-interpretation/input-state-machine/kmt-input-state-machine.ts:395](https://github.com/ue-too/ue-too/blob/95dd78435970713202a67be3986e96a80ff00749/packages/board/src/input-interpretation/input-state-machine/kmt-input-state-machine.ts#L395)

#### Parameters

##### context

[`KmtInputContext`](../interfaces/KmtInputContext.md)

#### Returns

`void`

#### Overrides

`TemplateState.uponEnter`
