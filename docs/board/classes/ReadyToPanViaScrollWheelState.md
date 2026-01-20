[@ue-too/board](../globals.md) / ReadyToPanViaScrollWheelState

# Class: ReadyToPanViaScrollWheelState

Defined in: [packages/board/src/input-interpretation/input-state-machine/kmt-input-state-machine.ts:415](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/board/src/input-interpretation/input-state-machine/kmt-input-state-machine.ts#L415)

## Description

The ready to pan via scroll wheel state of the keyboard mouse and trackpad input state machine.

## Extends

- `TemplateState`\<[`KmtInputEventMapping`](../type-aliases/KmtInputEventMapping.md), [`KmtInputContext`](../interfaces/KmtInputContext.md), [`KmtInputStates`](../type-aliases/KmtInputStates.md), [`KmtInputEventOutputMapping`](../type-aliases/KmtInputEventOutputMapping.md)\>

## Constructors

### Constructor

> **new ReadyToPanViaScrollWheelState**(): `ReadyToPanViaScrollWheelState`

Defined in: [packages/board/src/input-interpretation/input-state-machine/kmt-input-state-machine.ts:417](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/board/src/input-interpretation/input-state-machine/kmt-input-state-machine.ts#L417)

#### Returns

`ReadyToPanViaScrollWheelState`

#### Overrides

`TemplateState<KmtInputEventMapping, KmtInputContext, KmtInputStates, KmtInputEventOutputMapping>.constructor`

## Properties

### \_delay

> `protected` **\_delay**: `Delay`\<[`KmtInputContext`](../interfaces/KmtInputContext.md), [`KmtInputEventMapping`](../type-aliases/KmtInputEventMapping.md), `"IDLE"` \| `"READY_TO_PAN_VIA_SPACEBAR"` \| `"READY_TO_PAN_VIA_SCROLL_WHEEL"` \| `"PAN"` \| `"INITIAL_PAN"` \| `"PAN_VIA_SCROLL_WHEEL"` \| `"DISABLED"`, [`KmtInputEventOutputMapping`](../type-aliases/KmtInputEventOutputMapping.md)\> \| `undefined`

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

> `protected` **\_eventReactions**: `EventReactions`\<[`KmtInputEventMapping`](../type-aliases/KmtInputEventMapping.md), [`KmtInputContext`](../interfaces/KmtInputContext.md), [`KmtInputStates`](../type-aliases/KmtInputStates.md), [`KmtInputEventOutputMapping`](../type-aliases/KmtInputEventOutputMapping.md)\>

Defined in: [packages/board/src/input-interpretation/input-state-machine/kmt-input-state-machine.ts:421](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/board/src/input-interpretation/input-state-machine/kmt-input-state-machine.ts#L421)

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

[`KmtInputContext`](../interfaces/KmtInputContext.md)

##### stateMachine

`StateMachine`\<[`KmtInputEventMapping`](../type-aliases/KmtInputEventMapping.md), [`KmtInputContext`](../interfaces/KmtInputContext.md), `"IDLE"` \| `"READY_TO_PAN_VIA_SPACEBAR"` \| `"READY_TO_PAN_VIA_SCROLL_WHEEL"` \| `"PAN"` \| `"INITIAL_PAN"` \| `"PAN_VIA_SCROLL_WHEEL"` \| `"DISABLED"`, [`KmtInputEventOutputMapping`](../type-aliases/KmtInputEventOutputMapping.md)\>

##### to

`"TERMINAL"` | `"IDLE"` | `"READY_TO_PAN_VIA_SPACEBAR"` | `"READY_TO_PAN_VIA_SCROLL_WHEEL"` | `"PAN"` | `"INITIAL_PAN"` | `"PAN_VIA_SCROLL_WHEEL"` | `"DISABLED"`

#### Returns

`void`

#### Inherited from

`TemplateState.beforeExit`

***

### handles()

> **handles**\<`K`\>(`args`, `context`, `stateMachine`): `EventResult`\<`"IDLE"` \| `"READY_TO_PAN_VIA_SPACEBAR"` \| `"READY_TO_PAN_VIA_SCROLL_WHEEL"` \| `"PAN"` \| `"INITIAL_PAN"` \| `"PAN_VIA_SCROLL_WHEEL"` \| `"DISABLED"`, `K` *extends* keyof [`KmtInputEventOutputMapping`](../type-aliases/KmtInputEventOutputMapping.md) ? [`KmtInputEventOutputMapping`](../type-aliases/KmtInputEventOutputMapping.md)\[`K`\<`K`\>\] : `void`\>

Defined in: packages/being/dist/interface.d.ts:493

#### Type Parameters

##### K

`K` *extends* `string`

#### Parameters

##### args

`EventArgs`\<[`KmtInputEventMapping`](../type-aliases/KmtInputEventMapping.md), `K`\>

##### context

[`KmtInputContext`](../interfaces/KmtInputContext.md)

##### stateMachine

`StateMachine`\<[`KmtInputEventMapping`](../type-aliases/KmtInputEventMapping.md), [`KmtInputContext`](../interfaces/KmtInputContext.md), `"IDLE"` \| `"READY_TO_PAN_VIA_SPACEBAR"` \| `"READY_TO_PAN_VIA_SCROLL_WHEEL"` \| `"PAN"` \| `"INITIAL_PAN"` \| `"PAN_VIA_SCROLL_WHEEL"` \| `"DISABLED"`, [`KmtInputEventOutputMapping`](../type-aliases/KmtInputEventOutputMapping.md)\>

#### Returns

`EventResult`\<`"IDLE"` \| `"READY_TO_PAN_VIA_SPACEBAR"` \| `"READY_TO_PAN_VIA_SCROLL_WHEEL"` \| `"PAN"` \| `"INITIAL_PAN"` \| `"PAN_VIA_SCROLL_WHEEL"` \| `"DISABLED"`, `K` *extends* keyof [`KmtInputEventOutputMapping`](../type-aliases/KmtInputEventOutputMapping.md) ? [`KmtInputEventOutputMapping`](../type-aliases/KmtInputEventOutputMapping.md)\[`K`\<`K`\>\] : `void`\>

#### Inherited from

`TemplateState.handles`

***

### uponEnter()

> **uponEnter**(`context`): `void`

Defined in: [packages/board/src/input-interpretation/input-state-machine/kmt-input-state-machine.ts:432](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/board/src/input-interpretation/input-state-machine/kmt-input-state-machine.ts#L432)

#### Parameters

##### context

[`KmtInputContext`](../interfaces/KmtInputContext.md)

#### Returns

`void`

#### Overrides

`TemplateState.uponEnter`
