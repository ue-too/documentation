[@ue-too/board](../../modules.md) / [index](../index.md) / KmtInputStateMachineWebWorkerProxy

# 類別: KmtInputStateMachineWebWorkerProxy

定義於: [packages/board/src/input-interpretation/input-state-machine/kmt-input-state-machine.ts:761](https://github.com/ue-too/ue-too/blob/feb7c80222df5d3cd97bfa1933bafe3190c6e48d/packages/board/src/input-interpretation/input-state-machine/kmt-input-state-machine.ts#L761)

## Extends

- `TemplateStateMachine`\<[`KmtInputEventMapping`](../type-aliases/KmtInputEventMapping.md), [`KmtInputContext`](../interfaces/KmtInputContext.md), [`KmtInputStates`](../type-aliases/KmtInputStates.md), [`KmtInputEventOutputMapping`](../type-aliases/KmtInputEventOutputMapping.md)\>

## 建構函式

### 建構函式

> **new KmtInputStateMachineWebWorkerProxy**(`webworker`): `KmtInputStateMachineWebWorkerProxy`

定義於: [packages/board/src/input-interpretation/input-state-machine/kmt-input-state-machine.ts:769](https://github.com/ue-too/ue-too/blob/feb7c80222df5d3cd97bfa1933bafe3190c6e48d/packages/board/src/input-interpretation/input-state-machine/kmt-input-state-machine.ts#L769)

#### 參數

##### webworker

`Worker`

#### 回傳

`KmtInputStateMachineWebWorkerProxy`

#### 覆寫了

`TemplateStateMachine< KmtInputEventMapping, KmtInputContext, KmtInputStates, KmtInputEventOutputMapping >.constructor`

## 屬性

### \_context

> `protected` **\_context**: [`KmtInputContext`](../interfaces/KmtInputContext.md)

定義於: packages/being/dist/interface.d.ts:384

#### 繼承自

`TemplateStateMachine._context`

***

### \_currentState

> `protected` **\_currentState**: `"INITIAL"` \| `"TERMINAL"` \| `"IDLE"` \| `"READY_TO_PAN_VIA_SPACEBAR"` \| `"READY_TO_PAN_VIA_SCROLL_WHEEL"` \| `"PAN"` \| `"INITIAL_PAN"` \| `"PAN_VIA_SCROLL_WHEEL"` \| `"DISABLED"`

定義於: packages/being/dist/interface.d.ts:382

#### 繼承自

`TemplateStateMachine._currentState`

***

### \_happensCallbacks

> `protected` **\_happensCallbacks**: (`args`, `context`) => `void`[]

定義於: packages/being/dist/interface.d.ts:387

#### 參數

##### args

\[`string`, `unknown`\] | \[`"leftPointerDown"`, [`PointerEventPayload`](../type-aliases/PointerEventPayload.md)\] | \[`"leftPointerUp"`, [`PointerEventPayload`](../type-aliases/PointerEventPayload.md)\] | \[`"leftPointerMove"`, [`PointerEventPayload`](../type-aliases/PointerEventPayload.md)\] | \[`"spacebarDown"`\] | \[`"spacebarUp"`\] | \[`"escapeKey"`\] | \[`"stayIdle"`\] | \[`"cursorOnElement"`\] | \[`"scroll"`, [`ScrollWithCtrlEventPayload`](../type-aliases/ScrollWithCtrlEventPayload.md)\] | \[`"scrollWithCtrl"`, [`ScrollWithCtrlEventPayload`](../type-aliases/ScrollWithCtrlEventPayload.md)\] | \[`"middlePointerDown"`, [`PointerEventPayload`](../type-aliases/PointerEventPayload.md)\] | \[`"middlePointerUp"`, [`PointerEventPayload`](../type-aliases/PointerEventPayload.md)\] | \[`"middlePointerMove"`, [`PointerEventPayload`](../type-aliases/PointerEventPayload.md)\] | \[`"disable"`\] | \[`"enable"`\] | \[`"pointerMove"`, [`PointerEventPayload`](../type-aliases/PointerEventPayload.md)\] | \[`"arrowUp"`\] | \[`"arrowDown"`\] | \[`"F"`\] | \[`"G"`\] | \[`"Q"`\]

##### context

[`KmtInputContext`](../interfaces/KmtInputContext.md)

#### 回傳

`void`

#### 繼承自

`TemplateStateMachine._happensCallbacks`

***

### \_initialState

> `protected` **\_initialState**: `"IDLE"` \| `"READY_TO_PAN_VIA_SPACEBAR"` \| `"READY_TO_PAN_VIA_SCROLL_WHEEL"` \| `"PAN"` \| `"INITIAL_PAN"` \| `"PAN_VIA_SCROLL_WHEEL"` \| `"DISABLED"`

定義於: packages/being/dist/interface.d.ts:389

#### 繼承自

`TemplateStateMachine._initialState`

***

### \_stateChangeCallbacks

> `protected` **\_stateChangeCallbacks**: `StateChangeCallback`\<`"IDLE"` \| `"READY_TO_PAN_VIA_SPACEBAR"` \| `"READY_TO_PAN_VIA_SCROLL_WHEEL"` \| `"PAN"` \| `"INITIAL_PAN"` \| `"PAN_VIA_SCROLL_WHEEL"` \| `"DISABLED"`\>[]

定義於: packages/being/dist/interface.d.ts:386

#### 繼承自

`TemplateStateMachine._stateChangeCallbacks`

***

### \_states

> `protected` **\_states**: `Record`\<`States`, `State`\<`EventPayloadMapping`, `Context`, `States`, `EventOutputMapping`\>\>

定義於: packages/being/dist/interface.d.ts:383

#### 繼承自

`TemplateStateMachine._states`

***

### \_statesArray

> `protected` **\_statesArray**: (`"IDLE"` \| `"READY_TO_PAN_VIA_SPACEBAR"` \| `"READY_TO_PAN_VIA_SCROLL_WHEEL"` \| `"PAN"` \| `"INITIAL_PAN"` \| `"PAN_VIA_SCROLL_WHEEL"` \| `"DISABLED"`)[]

定義於: packages/being/dist/interface.d.ts:385

#### 繼承自

`TemplateStateMachine._statesArray`

***

### \_timeouts

> `protected` **\_timeouts**: `number` \| `undefined`

定義於: packages/being/dist/interface.d.ts:388

#### 繼承自

`TemplateStateMachine._timeouts`

## 存取器

### currentState

#### Getter 簽章

> **get** **currentState**(): `States` \| `"INITIAL"` \| `"TERMINAL"`

定義於: packages/being/dist/interface.d.ts:399

##### 回傳

`States` \| `"INITIAL"` \| `"TERMINAL"`

#### 繼承自

`TemplateStateMachine.currentState`

***

### possibleStates

#### Getter 簽章

> **get** **possibleStates**(): `States`[]

定義於: packages/being/dist/interface.d.ts:401

##### 回傳

`States`[]

#### 繼承自

`TemplateStateMachine.possibleStates`

***

### states

#### Getter 簽章

> **get** **states**(): `Record`\<`States`, `State`\<`EventPayloadMapping`, `Context`, `States`, `EventOutputMapping`\>\>

定義於: packages/being/dist/interface.d.ts:402

##### 回傳

`Record`\<`States`, `State`\<`EventPayloadMapping`, `Context`, `States`, `EventOutputMapping`\>\>

#### 繼承自

`TemplateStateMachine.states`

## 方法

### happens()

> **happens**(...`args`): `EventResult`\<`"IDLE"` \| `"READY_TO_PAN_VIA_SPACEBAR"` \| `"READY_TO_PAN_VIA_SCROLL_WHEEL"` \| `"PAN"` \| `"INITIAL_PAN"` \| `"PAN_VIA_SCROLL_WHEEL"` \| `"DISABLED"`\>

定義於: [packages/board/src/input-interpretation/input-state-machine/kmt-input-state-machine.ts:786](https://github.com/ue-too/ue-too/blob/feb7c80222df5d3cd97bfa1933bafe3190c6e48d/packages/board/src/input-interpretation/input-state-machine/kmt-input-state-machine.ts#L786)

#### 參數

##### args

...\[`string`, `unknown`\]

#### 回傳

`EventResult`\<`"IDLE"` \| `"READY_TO_PAN_VIA_SPACEBAR"` \| `"READY_TO_PAN_VIA_SCROLL_WHEEL"` \| `"PAN"` \| `"INITIAL_PAN"` \| `"PAN_VIA_SCROLL_WHEEL"` \| `"DISABLED"`\>

#### 覆寫了

`TemplateStateMachine.happens`

***

### onHappens()

> **onHappens**(`callback`): `void`

定義於: packages/being/dist/interface.d.ts:398

#### 參數

##### callback

(`args`, `context`) => `void`

#### 回傳

`void`

#### 繼承自

`TemplateStateMachine.onHappens`

***

### onStateChange()

> **onStateChange**(`callback`): `void`

定義於: packages/being/dist/interface.d.ts:397

#### 參數

##### callback

`StateChangeCallback`\<`"IDLE"` \| `"READY_TO_PAN_VIA_SPACEBAR"` \| `"READY_TO_PAN_VIA_SCROLL_WHEEL"` \| `"PAN"` \| `"INITIAL_PAN"` \| `"PAN_VIA_SCROLL_WHEEL"` \| `"DISABLED"`\>

#### 回傳

`void`

#### 繼承自

`TemplateStateMachine.onStateChange`

***

### reset()

> **reset**(): `void`

定義於: packages/being/dist/interface.d.ts:391

#### 回傳

`void`

#### 繼承自

`TemplateStateMachine.reset`

***

### setContext()

> **setContext**(`context`): `void`

定義於: packages/being/dist/interface.d.ts:400

#### 參數

##### context

[`KmtInputContext`](../interfaces/KmtInputContext.md)

#### 回傳

`void`

#### 繼承自

`TemplateStateMachine.setContext`

***

### start()

> **start**(): `void`

定義於: packages/being/dist/interface.d.ts:392

#### 回傳

`void`

#### 繼承自

`TemplateStateMachine.start`

***

### switchTo()

> **switchTo**(`state`): `void`

定義於: packages/being/dist/interface.d.ts:394

#### 參數

##### state

`"INITIAL"` | `"TERMINAL"` | `"IDLE"` | `"READY_TO_PAN_VIA_SPACEBAR"` | `"READY_TO_PAN_VIA_SCROLL_WHEEL"` | `"PAN"` | `"INITIAL_PAN"` | `"PAN_VIA_SCROLL_WHEEL"` | `"DISABLED"`

#### 回傳

`void`

#### 繼承自

`TemplateStateMachine.switchTo`

***

### wrapup()

> **wrapup**(): `void`

定義於: packages/being/dist/interface.d.ts:393

#### 回傳

`void`

#### 繼承自

`TemplateStateMachine.wrapup`
