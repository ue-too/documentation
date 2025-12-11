[@ue-too/board](../globals.md) / KmtInputStateMachineWebWorkerProxy

# Class: KmtInputStateMachineWebWorkerProxy

Defined in: [packages/board/src/input-interpretation/input-state-machine/kmt-input-state-machine.ts:522](https://github.com/ue-too/ue-too/blob/fdbfb1431206f8d7c812dca3e1d0dcd7389f1d6d/packages/board/src/input-interpretation/input-state-machine/kmt-input-state-machine.ts#L522)

## Extends

- `TemplateStateMachine`\<[`KmtInputEventMapping`](../type-aliases/KmtInputEventMapping.md), [`KmtInputContext`](../interfaces/KmtInputContext.md), [`KmtInputStates`](../type-aliases/KmtInputStates.md)\>

## Constructors

### Constructor

> **new KmtInputStateMachineWebWorkerProxy**(`webworker`): `KmtInputStateMachineWebWorkerProxy`

Defined in: [packages/board/src/input-interpretation/input-state-machine/kmt-input-state-machine.ts:526](https://github.com/ue-too/ue-too/blob/fdbfb1431206f8d7c812dca3e1d0dcd7389f1d6d/packages/board/src/input-interpretation/input-state-machine/kmt-input-state-machine.ts#L526)

#### Parameters

##### webworker

`Worker`

#### Returns

`KmtInputStateMachineWebWorkerProxy`

#### Overrides

`TemplateStateMachine<KmtInputEventMapping, KmtInputContext, KmtInputStates>.constructor`

## Properties

### \_context

> `protected` **\_context**: [`KmtInputContext`](../interfaces/KmtInputContext.md)

Defined in: [packages/being/src/interface.ts:213](https://github.com/ue-too/ue-too/blob/fdbfb1431206f8d7c812dca3e1d0dcd7389f1d6d/packages/being/src/interface.ts#L213)

#### Inherited from

`TemplateStateMachine._context`

***

### \_currentState

> `protected` **\_currentState**: `"IDLE"` \| `"READY_TO_PAN_VIA_SPACEBAR"` \| `"READY_TO_PAN_VIA_SCROLL_WHEEL"` \| `"PAN"` \| `"INITIAL_PAN"` \| `"PAN_VIA_SCROLL_WHEEL"` \| `"DISABLED"`

Defined in: [packages/being/src/interface.ts:211](https://github.com/ue-too/ue-too/blob/fdbfb1431206f8d7c812dca3e1d0dcd7389f1d6d/packages/being/src/interface.ts#L211)

#### Inherited from

`TemplateStateMachine._currentState`

***

### \_happensCallbacks

> `protected` **\_happensCallbacks**: (`args`, `context`) => `void`[]

Defined in: [packages/being/src/interface.ts:216](https://github.com/ue-too/ue-too/blob/fdbfb1431206f8d7c812dca3e1d0dcd7389f1d6d/packages/being/src/interface.ts#L216)

#### Parameters

##### args

\[`string`, `unknown`\] | \[`"leftPointerDown"`, [`PointerEventPayload`](../type-aliases/PointerEventPayload.md)\] | \[`"leftPointerUp"`, [`PointerEventPayload`](../type-aliases/PointerEventPayload.md)\] | \[`"leftPointerMove"`, [`PointerEventPayload`](../type-aliases/PointerEventPayload.md)\] | \[`"spacebarDown"`\] | \[`"spacebarUp"`\] | \[`"stayIdle"`\] | \[`"cursorOnElement"`\] | \[`"scroll"`, [`ScrollEventPayload`](../type-aliases/ScrollEventPayload.md)\] | \[`"scrollWithCtrl"`, [`ScrollWithCtrlEventPayload`](../type-aliases/ScrollWithCtrlEventPayload.md)\] | \[`"middlePointerDown"`, [`PointerEventPayload`](../type-aliases/PointerEventPayload.md)\] | \[`"middlePointerUp"`, [`PointerEventPayload`](../type-aliases/PointerEventPayload.md)\] | \[`"middlePointerMove"`, [`PointerEventPayload`](../type-aliases/PointerEventPayload.md)\] | \[`"disable"`\] | \[`"enable"`\] | \[`"pointerMove"`, [`PointerEventPayload`](../type-aliases/PointerEventPayload.md)\]

##### context

[`KmtInputContext`](../interfaces/KmtInputContext.md)

#### Returns

`void`

#### Inherited from

`TemplateStateMachine._happensCallbacks`

***

### \_stateChangeCallbacks

> `protected` **\_stateChangeCallbacks**: `StateChangeCallback`\<`"IDLE"` \| `"READY_TO_PAN_VIA_SPACEBAR"` \| `"READY_TO_PAN_VIA_SCROLL_WHEEL"` \| `"PAN"` \| `"INITIAL_PAN"` \| `"PAN_VIA_SCROLL_WHEEL"` \| `"DISABLED"`\>[]

Defined in: [packages/being/src/interface.ts:215](https://github.com/ue-too/ue-too/blob/fdbfb1431206f8d7c812dca3e1d0dcd7389f1d6d/packages/being/src/interface.ts#L215)

#### Inherited from

`TemplateStateMachine._stateChangeCallbacks`

***

### \_states

> `protected` **\_states**: `Record`\<`States`, `State`\<`EventPayloadMapping`, `Context`, `States`\>\>

Defined in: [packages/being/src/interface.ts:212](https://github.com/ue-too/ue-too/blob/fdbfb1431206f8d7c812dca3e1d0dcd7389f1d6d/packages/being/src/interface.ts#L212)

#### Inherited from

`TemplateStateMachine._states`

***

### \_statesArray

> `protected` **\_statesArray**: (`"IDLE"` \| `"READY_TO_PAN_VIA_SPACEBAR"` \| `"READY_TO_PAN_VIA_SCROLL_WHEEL"` \| `"PAN"` \| `"INITIAL_PAN"` \| `"PAN_VIA_SCROLL_WHEEL"` \| `"DISABLED"`)[]

Defined in: [packages/being/src/interface.ts:214](https://github.com/ue-too/ue-too/blob/fdbfb1431206f8d7c812dca3e1d0dcd7389f1d6d/packages/being/src/interface.ts#L214)

#### Inherited from

`TemplateStateMachine._statesArray`

***

### \_timeouts

> `protected` **\_timeouts**: `number` \| `undefined` = `undefined`

Defined in: [packages/being/src/interface.ts:217](https://github.com/ue-too/ue-too/blob/fdbfb1431206f8d7c812dca3e1d0dcd7389f1d6d/packages/being/src/interface.ts#L217)

#### Inherited from

`TemplateStateMachine._timeouts`

## Accessors

### currentState

#### Get Signature

> **get** **currentState**(): `States`

Defined in: [packages/being/src/interface.ts:260](https://github.com/ue-too/ue-too/blob/fdbfb1431206f8d7c812dca3e1d0dcd7389f1d6d/packages/being/src/interface.ts#L260)

##### Returns

`States`

#### Inherited from

`TemplateStateMachine.currentState`

***

### possibleStates

#### Get Signature

> **get** **possibleStates**(): `States`[]

Defined in: [packages/being/src/interface.ts:268](https://github.com/ue-too/ue-too/blob/fdbfb1431206f8d7c812dca3e1d0dcd7389f1d6d/packages/being/src/interface.ts#L268)

##### Returns

`States`[]

#### Inherited from

`TemplateStateMachine.possibleStates`

***

### states

#### Get Signature

> **get** **states**(): `Record`\<`States`, `State`\<`EventPayloadMapping`, `Context`, `States`\>\>

Defined in: [packages/being/src/interface.ts:272](https://github.com/ue-too/ue-too/blob/fdbfb1431206f8d7c812dca3e1d0dcd7389f1d6d/packages/being/src/interface.ts#L272)

##### Returns

`Record`\<`States`, `State`\<`EventPayloadMapping`, `Context`, `States`\>\>

#### Inherited from

`TemplateStateMachine.states`

## Methods

### happens()

> **happens**(...`args`): `EventHandledResult`\<`"IDLE"` \| `"READY_TO_PAN_VIA_SPACEBAR"` \| `"READY_TO_PAN_VIA_SCROLL_WHEEL"` \| `"PAN"` \| `"INITIAL_PAN"` \| `"PAN_VIA_SCROLL_WHEEL"` \| `"DISABLED"`\>

Defined in: [packages/board/src/input-interpretation/input-state-machine/kmt-input-state-machine.ts:539](https://github.com/ue-too/ue-too/blob/fdbfb1431206f8d7c812dca3e1d0dcd7389f1d6d/packages/board/src/input-interpretation/input-state-machine/kmt-input-state-machine.ts#L539)

#### Parameters

##### args

...\[`string`, `unknown`\]

#### Returns

`EventHandledResult`\<`"IDLE"` \| `"READY_TO_PAN_VIA_SPACEBAR"` \| `"READY_TO_PAN_VIA_SCROLL_WHEEL"` \| `"PAN"` \| `"INITIAL_PAN"` \| `"PAN_VIA_SCROLL_WHEEL"` \| `"DISABLED"`\>

#### Overrides

`TemplateStateMachine.happens`

***

### onHappens()

> **onHappens**(`callback`): `void`

Defined in: [packages/being/src/interface.ts:256](https://github.com/ue-too/ue-too/blob/fdbfb1431206f8d7c812dca3e1d0dcd7389f1d6d/packages/being/src/interface.ts#L256)

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

Defined in: [packages/being/src/interface.ts:252](https://github.com/ue-too/ue-too/blob/fdbfb1431206f8d7c812dca3e1d0dcd7389f1d6d/packages/being/src/interface.ts#L252)

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

Defined in: [packages/being/src/interface.ts:264](https://github.com/ue-too/ue-too/blob/fdbfb1431206f8d7c812dca3e1d0dcd7389f1d6d/packages/being/src/interface.ts#L264)

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

Defined in: [packages/being/src/interface.ts:229](https://github.com/ue-too/ue-too/blob/fdbfb1431206f8d7c812dca3e1d0dcd7389f1d6d/packages/being/src/interface.ts#L229)

#### Parameters

##### state

`"IDLE"` | `"READY_TO_PAN_VIA_SPACEBAR"` | `"READY_TO_PAN_VIA_SCROLL_WHEEL"` | `"PAN"` | `"INITIAL_PAN"` | `"PAN_VIA_SCROLL_WHEEL"` | `"DISABLED"`

#### Returns

`void`

#### Inherited from

`TemplateStateMachine.switchTo`
