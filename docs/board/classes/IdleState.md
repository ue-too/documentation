[@ue-too/board](../globals.md) / IdleState

# Class: IdleState

Defined in: [packages/board/src/input-interpretation/input-state-machine/touch-input-state-machine.ts:102](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/board/src/input-interpretation/input-state-machine/touch-input-state-machine.ts#L102)

IDLE state - waiting for two-finger touch.

## Remarks

This state handles touch lifecycle but only transitions to PENDING when exactly
two touches are active. Single touches and three+ touches are ignored.

**Guard Condition**:
Transitions to PENDING only when `getCurrentTouchPointsCount() === 2`.
This ensures the state machine only handles two-finger gestures.

## Extends

- `TemplateState`\<[`TouchEventMapping`](../type-aliases/TouchEventMapping.md), [`TouchContext`](../interfaces/TouchContext.md), [`TouchStates`](../type-aliases/TouchStates.md), [`TouchInputEventOutputMapping`](../type-aliases/TouchInputEventOutputMapping.md)\>

## Constructors

### Constructor

> **new IdleState**(): `IdleState`

#### Returns

`IdleState`

#### Inherited from

`TemplateState<TouchEventMapping, TouchContext, TouchStates, TouchInputEventOutputMapping>.constructor`

## Properties

### \_delay

> `protected` **\_delay**: `Delay`\<[`TouchContext`](../interfaces/TouchContext.md), [`TouchEventMapping`](../type-aliases/TouchEventMapping.md), [`TouchStates`](../type-aliases/TouchStates.md), [`TouchInputEventOutputMapping`](../type-aliases/TouchInputEventOutputMapping.md)\> \| `undefined`

Defined in: packages/being/dist/interface.d.ts:486

#### Inherited from

`TemplateState._delay`

***

### \_eventGuards

> `protected` **\_eventGuards**: `Partial`\<`EventGuards`\<[`TouchEventMapping`](../type-aliases/TouchEventMapping.md), [`TouchStates`](../type-aliases/TouchStates.md), [`TouchContext`](../interfaces/TouchContext.md), *typeof* [`_guards`](#guards)\>\>

Defined in: [packages/board/src/input-interpretation/input-state-machine/touch-input-state-machine.ts:121](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/board/src/input-interpretation/input-state-machine/touch-input-state-machine.ts#L121)

#### Overrides

`TemplateState._eventGuards`

***

### \_eventReactions

> `protected` **\_eventReactions**: `EventReactions`\<[`TouchEventMapping`](../type-aliases/TouchEventMapping.md), [`TouchContext`](../interfaces/TouchContext.md), [`TouchStates`](../type-aliases/TouchStates.md), [`TouchInputEventOutputMapping`](../type-aliases/TouchInputEventOutputMapping.md)\>

Defined in: [packages/board/src/input-interpretation/input-state-machine/touch-input-state-machine.ts:104](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/board/src/input-interpretation/input-state-machine/touch-input-state-machine.ts#L104)

#### Overrides

`TemplateState._eventReactions`

***

### \_guards

> `protected` **\_guards**: `Guard`\<[`TouchContext`](../interfaces/TouchContext.md), `"touchPointsCount"`\>

Defined in: [packages/board/src/input-interpretation/input-state-machine/touch-input-state-machine.ts:115](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/board/src/input-interpretation/input-state-machine/touch-input-state-machine.ts#L115)

#### Overrides

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

[`TouchContext`](../interfaces/TouchContext.md)

##### stateMachine

`StateMachine`\<[`TouchEventMapping`](../type-aliases/TouchEventMapping.md), [`TouchContext`](../interfaces/TouchContext.md), [`TouchStates`](../type-aliases/TouchStates.md), [`TouchInputEventOutputMapping`](../type-aliases/TouchInputEventOutputMapping.md)\>

##### to

`"TERMINAL"` | [`TouchStates`](../type-aliases/TouchStates.md)

#### Returns

`void`

#### Inherited from

`TemplateState.beforeExit`

***

### handles()

> **handles**\<`K`\>(`args`, `context`, `stateMachine`): `EventResult`\<[`TouchStates`](../type-aliases/TouchStates.md), `K` *extends* `"touchmove"` ? [`TouchInputEventOutputMapping`](../type-aliases/TouchInputEventOutputMapping.md)\[`K`\<`K`\>\] : `void`\>

Defined in: packages/being/dist/interface.d.ts:493

#### Type Parameters

##### K

`K` *extends* `string`

#### Parameters

##### args

`EventArgs`\<[`TouchEventMapping`](../type-aliases/TouchEventMapping.md), `K`\>

##### context

[`TouchContext`](../interfaces/TouchContext.md)

##### stateMachine

`StateMachine`\<[`TouchEventMapping`](../type-aliases/TouchEventMapping.md), [`TouchContext`](../interfaces/TouchContext.md), [`TouchStates`](../type-aliases/TouchStates.md), [`TouchInputEventOutputMapping`](../type-aliases/TouchInputEventOutputMapping.md)\>

#### Returns

`EventResult`\<[`TouchStates`](../type-aliases/TouchStates.md), `K` *extends* `"touchmove"` ? [`TouchInputEventOutputMapping`](../type-aliases/TouchInputEventOutputMapping.md)\[`K`\<`K`\>\] : `void`\>

#### Inherited from

`TemplateState.handles`

***

### touchend()

> **touchend**(`context`, `payload`): `void`

Defined in: [packages/board/src/input-interpretation/input-state-machine/touch-input-state-machine.ts:136](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/board/src/input-interpretation/input-state-machine/touch-input-state-machine.ts#L136)

#### Parameters

##### context

[`TouchContext`](../interfaces/TouchContext.md)

##### payload

[`TouchEventPayload`](../type-aliases/TouchEventPayload.md)

#### Returns

`void`

***

### touchstart()

> **touchstart**(`context`, `payload`): `void`

Defined in: [packages/board/src/input-interpretation/input-state-machine/touch-input-state-machine.ts:132](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/board/src/input-interpretation/input-state-machine/touch-input-state-machine.ts#L132)

#### Parameters

##### context

[`TouchContext`](../interfaces/TouchContext.md)

##### payload

[`TouchEventPayload`](../type-aliases/TouchEventPayload.md)

#### Returns

`void`

***

### uponEnter()

> **uponEnter**(`context`, `stateMachine`, `from`): `void`

Defined in: packages/being/dist/interface.d.ts:491

#### Parameters

##### context

[`TouchContext`](../interfaces/TouchContext.md)

##### stateMachine

`StateMachine`\<[`TouchEventMapping`](../type-aliases/TouchEventMapping.md), [`TouchContext`](../interfaces/TouchContext.md), [`TouchStates`](../type-aliases/TouchStates.md), [`TouchInputEventOutputMapping`](../type-aliases/TouchInputEventOutputMapping.md)\>

##### from

`"INITIAL"` | [`TouchStates`](../type-aliases/TouchStates.md)

#### Returns

`void`

#### Inherited from

`TemplateState.uponEnter`
