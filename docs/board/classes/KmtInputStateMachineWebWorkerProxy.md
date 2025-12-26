[@ue-too/board](../globals.md) / KmtInputStateMachineWebWorkerProxy

# Class: KmtInputStateMachineWebWorkerProxy

Defined in: [packages/board/src/input-interpretation/input-state-machine/kmt-input-state-machine.ts:628](https://github.com/ue-too/ue-too/blob/e468a9961da59c81663192ec8df16ebc8e17abac/packages/board/src/input-interpretation/input-state-machine/kmt-input-state-machine.ts#L628)

## Extends

- `TemplateStateMachine`\<[`KmtInputEventMapping`](../type-aliases/KmtInputEventMapping.md), [`KmtInputContext`](../interfaces/KmtInputContext.md), [`KmtInputStates`](../type-aliases/KmtInputStates.md), [`KmtInputEventOutputMapping`](../type-aliases/KmtInputEventOutputMapping.md)\>

## Constructors

### Constructor

> **new KmtInputStateMachineWebWorkerProxy**(`webworker`): `KmtInputStateMachineWebWorkerProxy`

Defined in: [packages/board/src/input-interpretation/input-state-machine/kmt-input-state-machine.ts:632](https://github.com/ue-too/ue-too/blob/e468a9961da59c81663192ec8df16ebc8e17abac/packages/board/src/input-interpretation/input-state-machine/kmt-input-state-machine.ts#L632)

#### Parameters

##### webworker

`Worker`

#### Returns

`KmtInputStateMachineWebWorkerProxy`

#### Overrides

`TemplateStateMachine<KmtInputEventMapping, KmtInputContext, KmtInputStates, KmtInputEventOutputMapping>.constructor`

## Properties

### \_context

> `protected` **\_context**: [`KmtInputContext`](../interfaces/KmtInputContext.md)

Defined in: [packages/being/src/interface.ts:436](https://github.com/ue-too/ue-too/blob/e468a9961da59c81663192ec8df16ebc8e17abac/packages/being/src/interface.ts#L436)

#### Inherited from

`TemplateStateMachine._context`

***

### \_currentState

> `protected` **\_currentState**: `"IDLE"` \| `"READY_TO_PAN_VIA_SPACEBAR"` \| `"READY_TO_PAN_VIA_SCROLL_WHEEL"` \| `"PAN"` \| `"INITIAL_PAN"` \| `"PAN_VIA_SCROLL_WHEEL"` \| `"DISABLED"`

Defined in: [packages/being/src/interface.ts:434](https://github.com/ue-too/ue-too/blob/e468a9961da59c81663192ec8df16ebc8e17abac/packages/being/src/interface.ts#L434)

#### Inherited from

`TemplateStateMachine._currentState`

***

### \_happensCallbacks

> `protected` **\_happensCallbacks**: (`args`, `context`) => `void`[]

Defined in: [packages/being/src/interface.ts:439](https://github.com/ue-too/ue-too/blob/e468a9961da59c81663192ec8df16ebc8e17abac/packages/being/src/interface.ts#L439)

#### Parameters

##### args

\[`string`, `unknown`\] | \[`"leftPointerDown"`, [`PointerEventPayload`](../type-aliases/PointerEventPayload.md)\] | \[`"leftPointerUp"`, [`PointerEventPayload`](../type-aliases/PointerEventPayload.md)\] | \[`"leftPointerMove"`, [`PointerEventPayload`](../type-aliases/PointerEventPayload.md)\] | \[`"spacebarDown"`\] | \[`"spacebarUp"`\] | \[`"stayIdle"`\] | \[`"cursorOnElement"`\] | \[`"scroll"`, [`ScrollWithCtrlEventPayload`](../type-aliases/ScrollWithCtrlEventPayload.md)\] | \[`"scrollWithCtrl"`, [`ScrollWithCtrlEventPayload`](../type-aliases/ScrollWithCtrlEventPayload.md)\] | \[`"middlePointerDown"`, [`PointerEventPayload`](../type-aliases/PointerEventPayload.md)\] | \[`"middlePointerUp"`, [`PointerEventPayload`](../type-aliases/PointerEventPayload.md)\] | \[`"middlePointerMove"`, [`PointerEventPayload`](../type-aliases/PointerEventPayload.md)\] | \[`"disable"`\] | \[`"enable"`\] | \[`"pointerMove"`, [`PointerEventPayload`](../type-aliases/PointerEventPayload.md)\]

##### context

[`KmtInputContext`](../interfaces/KmtInputContext.md)

#### Returns

`void`

#### Inherited from

`TemplateStateMachine._happensCallbacks`

***

### \_stateChangeCallbacks

> `protected` **\_stateChangeCallbacks**: `StateChangeCallback`\<`"IDLE"` \| `"READY_TO_PAN_VIA_SPACEBAR"` \| `"READY_TO_PAN_VIA_SCROLL_WHEEL"` \| `"PAN"` \| `"INITIAL_PAN"` \| `"PAN_VIA_SCROLL_WHEEL"` \| `"DISABLED"`\>[]

Defined in: [packages/being/src/interface.ts:438](https://github.com/ue-too/ue-too/blob/e468a9961da59c81663192ec8df16ebc8e17abac/packages/being/src/interface.ts#L438)

#### Inherited from

`TemplateStateMachine._stateChangeCallbacks`

***

### \_states

> `protected` **\_states**: `Record`\<`States`, `State`\<`EventPayloadMapping`, `Context`, `States`, `EventOutputMapping`\>\>

Defined in: [packages/being/src/interface.ts:435](https://github.com/ue-too/ue-too/blob/e468a9961da59c81663192ec8df16ebc8e17abac/packages/being/src/interface.ts#L435)

#### Inherited from

`TemplateStateMachine._states`

***

### \_statesArray

> `protected` **\_statesArray**: (`"IDLE"` \| `"READY_TO_PAN_VIA_SPACEBAR"` \| `"READY_TO_PAN_VIA_SCROLL_WHEEL"` \| `"PAN"` \| `"INITIAL_PAN"` \| `"PAN_VIA_SCROLL_WHEEL"` \| `"DISABLED"`)[]

Defined in: [packages/being/src/interface.ts:437](https://github.com/ue-too/ue-too/blob/e468a9961da59c81663192ec8df16ebc8e17abac/packages/being/src/interface.ts#L437)

#### Inherited from

`TemplateStateMachine._statesArray`

***

### \_timeouts

> `protected` **\_timeouts**: `number` \| `undefined` = `undefined`

Defined in: [packages/being/src/interface.ts:440](https://github.com/ue-too/ue-too/blob/e468a9961da59c81663192ec8df16ebc8e17abac/packages/being/src/interface.ts#L440)

#### Inherited from

`TemplateStateMachine._timeouts`

## Accessors

### currentState

#### Get Signature

> **get** **currentState**(): `States`

Defined in: [packages/being/src/interface.ts:483](https://github.com/ue-too/ue-too/blob/e468a9961da59c81663192ec8df16ebc8e17abac/packages/being/src/interface.ts#L483)

##### Returns

`States`

#### Inherited from

`TemplateStateMachine.currentState`

***

### possibleStates

#### Get Signature

> **get** **possibleStates**(): `States`[]

Defined in: [packages/being/src/interface.ts:491](https://github.com/ue-too/ue-too/blob/e468a9961da59c81663192ec8df16ebc8e17abac/packages/being/src/interface.ts#L491)

##### Returns

`States`[]

#### Inherited from

`TemplateStateMachine.possibleStates`

***

### states

#### Get Signature

> **get** **states**(): `Record`\<`States`, `State`\<`EventPayloadMapping`, `Context`, `States`, `EventOutputMapping`\>\>

Defined in: [packages/being/src/interface.ts:495](https://github.com/ue-too/ue-too/blob/e468a9961da59c81663192ec8df16ebc8e17abac/packages/being/src/interface.ts#L495)

##### Returns

`Record`\<`States`, `State`\<`EventPayloadMapping`, `Context`, `States`, `EventOutputMapping`\>\>

#### Inherited from

`TemplateStateMachine.states`

## Methods

### happens()

> **happens**(...`args`): `EventResult`\<`"IDLE"` \| `"READY_TO_PAN_VIA_SPACEBAR"` \| `"READY_TO_PAN_VIA_SCROLL_WHEEL"` \| `"PAN"` \| `"INITIAL_PAN"` \| `"PAN_VIA_SCROLL_WHEEL"` \| `"DISABLED"`\>

Defined in: [packages/board/src/input-interpretation/input-state-machine/kmt-input-state-machine.ts:645](https://github.com/ue-too/ue-too/blob/e468a9961da59c81663192ec8df16ebc8e17abac/packages/board/src/input-interpretation/input-state-machine/kmt-input-state-machine.ts#L645)

#### Parameters

##### args

...\[`string`, `unknown`\]

#### Returns

`EventResult`\<`"IDLE"` \| `"READY_TO_PAN_VIA_SPACEBAR"` \| `"READY_TO_PAN_VIA_SCROLL_WHEEL"` \| `"PAN"` \| `"INITIAL_PAN"` \| `"PAN_VIA_SCROLL_WHEEL"` \| `"DISABLED"`\>

#### Overrides

`TemplateStateMachine.happens`

***

### onHappens()

> **onHappens**(`callback`): `void`

Defined in: [packages/being/src/interface.ts:479](https://github.com/ue-too/ue-too/blob/e468a9961da59c81663192ec8df16ebc8e17abac/packages/being/src/interface.ts#L479)

#### Parameters

##### callback

(`args`, `context`) => `void`

#### Returns

`void`

#### Inherited from

`TemplateStateMachine.onHappens`

***

### onStateChange()

> **onStateChange**(`callback`): `void`

Defined in: [packages/being/src/interface.ts:475](https://github.com/ue-too/ue-too/blob/e468a9961da59c81663192ec8df16ebc8e17abac/packages/being/src/interface.ts#L475)

#### Parameters

##### callback

`StateChangeCallback`\<`"IDLE"` \| `"READY_TO_PAN_VIA_SPACEBAR"` \| `"READY_TO_PAN_VIA_SCROLL_WHEEL"` \| `"PAN"` \| `"INITIAL_PAN"` \| `"PAN_VIA_SCROLL_WHEEL"` \| `"DISABLED"`\>

#### Returns

`void`

#### Inherited from

`TemplateStateMachine.onStateChange`

***

### setContext()

> **setContext**(`context`): `void`

Defined in: [packages/being/src/interface.ts:487](https://github.com/ue-too/ue-too/blob/e468a9961da59c81663192ec8df16ebc8e17abac/packages/being/src/interface.ts#L487)

#### Parameters

##### context

[`KmtInputContext`](../interfaces/KmtInputContext.md)

#### Returns

`void`

#### Inherited from

`TemplateStateMachine.setContext`

***

### switchTo()

> **switchTo**(`state`): `void`

Defined in: [packages/being/src/interface.ts:452](https://github.com/ue-too/ue-too/blob/e468a9961da59c81663192ec8df16ebc8e17abac/packages/being/src/interface.ts#L452)

#### Parameters

##### state

`"IDLE"` | `"READY_TO_PAN_VIA_SPACEBAR"` | `"READY_TO_PAN_VIA_SCROLL_WHEEL"` | `"PAN"` | `"INITIAL_PAN"` | `"PAN_VIA_SCROLL_WHEEL"` | `"DISABLED"`

#### Returns

`void`

#### Inherited from

`TemplateStateMachine.switchTo`
