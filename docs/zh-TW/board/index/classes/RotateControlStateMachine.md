[@ue-too/board](../../modules.md) / [index](../index.md) / RotateControlStateMachine

# 類別: RotateControlStateMachine

定義於: [packages/board/src/camera/camera-mux/animation-and-lock/rotation-control-state-machine.ts:128](https://github.com/ue-too/ue-too/blob/79a36cf61d861e6b4e3302e81111636c6082a3db/packages/board/src/camera/camera-mux/animation-and-lock/rotation-control-state-machine.ts#L128)

State machine controlling rotation input flow and animations.

## 備註

This state machine manages the lifecycle of rotation operations:
- **User input handling**: Accepts or blocks user rotation gestures based on state
- **Animation control**: Manages smooth rotate-to animations
- **Object tracking**: Supports locking camera to follow objects with rotation

**State transitions:**
- `ACCEPTING_USER_INPUT` → `TRANSITION`: Start animation (`initateTransition`)
- `ACCEPTING_USER_INPUT` → `LOCKED_ON_OBJECT`: Lock to object (`lockedOnObjectRotate...`)
- `TRANSITION` → `ACCEPTING_USER_INPUT`: User input interrupts animation
- `LOCKED_ON_OBJECT` → `ACCEPTING_USER_INPUT`: Unlock (`unlock` event)

Helper methods simplify event dispatching without memorizing event names.

## 範例

```typescript
const stateMachine = createDefaultRotateControlStateMachine(cameraRig);

// User rotates - accepted in ACCEPTING_USER_INPUT state
const result = stateMachine.notifyRotateByInput(Math.PI / 4);

// Start animation - transitions to TRANSITION state
stateMachine.notifyRotateToAnimationInput(Math.PI);

// User input now blocked while animating
```

## 參閱

[createDefaultRotateControlStateMachine](../functions/createDefaultRotateControlStateMachine.md) for factory function

## Extends

- `TemplateStateMachine`\<[`RotateEventPayloadMapping`](../type-aliases/RotateEventPayloadMapping.md), `BaseContext`, [`RotateControlStates`](../type-aliases/RotateControlStates.md), [`RotateControlOutputMapping`](../type-aliases/RotateControlOutputMapping.md)\>

## 建構函式

### 建構函式

> **new RotateControlStateMachine**(`states`, `initialState`, `context`): `RotateControlStateMachine`

定義於: [packages/board/src/camera/camera-mux/animation-and-lock/rotation-control-state-machine.ts:134](https://github.com/ue-too/ue-too/blob/79a36cf61d861e6b4e3302e81111636c6082a3db/packages/board/src/camera/camera-mux/animation-and-lock/rotation-control-state-machine.ts#L134)

#### 參數

##### states

`Record`\<[`RotateControlStates`](../type-aliases/RotateControlStates.md), `State`\<[`RotateEventPayloadMapping`](../type-aliases/RotateEventPayloadMapping.md), `BaseContext`, [`RotateControlStates`](../type-aliases/RotateControlStates.md), [`RotateControlOutputMapping`](../type-aliases/RotateControlOutputMapping.md)\>\>

##### initialState

[`RotateControlStates`](../type-aliases/RotateControlStates.md)

##### context

`BaseContext`

#### 回傳

`RotateControlStateMachine`

#### 覆寫了

`TemplateStateMachine< RotateEventPayloadMapping, BaseContext, RotateControlStates, RotateControlOutputMapping >.constructor`

## 屬性

### \_context

> `protected` **\_context**: `BaseContext`

定義於: packages/being/dist/interface.d.ts:384

#### 繼承自

`TemplateStateMachine._context`

***

### \_currentState

> `protected` **\_currentState**: [`RotateControlStates`](../type-aliases/RotateControlStates.md) \| `"INITIAL"` \| `"TERMINAL"`

定義於: packages/being/dist/interface.d.ts:382

#### 繼承自

`TemplateStateMachine._currentState`

***

### \_happensCallbacks

> `protected` **\_happensCallbacks**: (`args`, `context`) => `void`[]

定義於: packages/being/dist/interface.d.ts:387

#### 參數

##### args

\[`"userRotateByInput"`, [`RotateByInputEventPayload`](../type-aliases/RotateByInputEventPayload.md)\] | \[`"userRotateToInput"`, [`RotateToInputEventPayload`](../type-aliases/RotateToInputEventPayload.md)\] | \[`"transitionRotateByInput"`, [`RotateByInputEventPayload`](../type-aliases/RotateByInputEventPayload.md)\] | \[`"transitionRotateToInput"`, [`RotateToInputEventPayload`](../type-aliases/RotateToInputEventPayload.md)\] | \[`"lockedOnObjectRotateByInput"`, [`RotateByInputEventPayload`](../type-aliases/RotateByInputEventPayload.md)\] | \[`"lockedOnObjectRotateToInput"`, [`RotateToInputEventPayload`](../type-aliases/RotateToInputEventPayload.md)\] | \[`"unlock"`\] | \[`"initateTransition"`\] | \[`string`, `unknown`\]

##### context

`BaseContext`

#### 回傳

`void`

#### 繼承自

`TemplateStateMachine._happensCallbacks`

***

### \_initialState

> `protected` **\_initialState**: [`RotateControlStates`](../type-aliases/RotateControlStates.md)

定義於: packages/being/dist/interface.d.ts:389

#### 繼承自

`TemplateStateMachine._initialState`

***

### \_stateChangeCallbacks

> `protected` **\_stateChangeCallbacks**: `StateChangeCallback`\<[`RotateControlStates`](../type-aliases/RotateControlStates.md)\>[]

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

> `protected` **\_statesArray**: [`RotateControlStates`](../type-aliases/RotateControlStates.md)[]

定義於: packages/being/dist/interface.d.ts:385

#### 繼承自

`TemplateStateMachine._statesArray`

***

### \_timeouts

> `protected` **\_timeouts**: `number` \| `undefined`

定義於: packages/being/dist/interface.d.ts:388

#### 繼承自

[`KmtInputStateMachineWebWorkerProxy`](KmtInputStateMachineWebWorkerProxy.md).[`_timeouts`](KmtInputStateMachineWebWorkerProxy.md#timeouts)

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

#### 呼叫簽章

> **happens**\<`K`\>(...`args`): `EventResult`\<[`RotateControlStates`](../type-aliases/RotateControlStates.md), `K` *extends* keyof [`RotateControlOutputMapping`](../type-aliases/RotateControlOutputMapping.md) ? [`RotateControlOutputMapping`](../type-aliases/RotateControlOutputMapping.md)\[`K`\<`K`\>\] : `void`\>

定義於: packages/being/dist/interface.d.ts:395

##### 型別參數

###### K

`K` *extends* keyof [`RotateEventPayloadMapping`](../type-aliases/RotateEventPayloadMapping.md)

##### 參數

###### args

...`EventArgs`\<[`RotateEventPayloadMapping`](../type-aliases/RotateEventPayloadMapping.md), `K`\>

##### 回傳

`EventResult`\<[`RotateControlStates`](../type-aliases/RotateControlStates.md), `K` *extends* keyof [`RotateControlOutputMapping`](../type-aliases/RotateControlOutputMapping.md) ? [`RotateControlOutputMapping`](../type-aliases/RotateControlOutputMapping.md)\[`K`\<`K`\>\] : `void`\>

##### 繼承自

`TemplateStateMachine.happens`

#### 呼叫簽章

> **happens**\<`K`\>(...`args`): `EventResult`\<[`RotateControlStates`](../type-aliases/RotateControlStates.md), `unknown`\>

定義於: packages/being/dist/interface.d.ts:396

##### 型別參數

###### K

`K` *extends* `string`

##### 參數

###### args

...`EventArgs`\<[`RotateEventPayloadMapping`](../type-aliases/RotateEventPayloadMapping.md), `K`\>

##### 回傳

`EventResult`\<[`RotateControlStates`](../type-aliases/RotateControlStates.md), `unknown`\>

##### 繼承自

`TemplateStateMachine.happens`

***

### initateTransition()

> **initateTransition**(): `void`

定義於: [packages/board/src/camera/camera-mux/animation-and-lock/rotation-control-state-machine.ts:185](https://github.com/ue-too/ue-too/blob/79a36cf61d861e6b4e3302e81111636c6082a3db/packages/board/src/camera/camera-mux/animation-and-lock/rotation-control-state-machine.ts#L185)

Initiates transition to `TRANSITION` state.

#### 回傳

`void`

#### 備註

Forces state change to begin animation or transition sequence.
Called when starting programmatic camera movements.

***

### notifyRotateByInput()

> **notifyRotateByInput**(`diff`): `EventResult`\<[`RotateControlStates`](../type-aliases/RotateControlStates.md), [`RotateControlOutputEvent`](../type-aliases/RotateControlOutputEvent.md)\>

定義於: [packages/board/src/camera/camera-mux/animation-and-lock/rotation-control-state-machine.ts:160](https://github.com/ue-too/ue-too/blob/79a36cf61d861e6b4e3302e81111636c6082a3db/packages/board/src/camera/camera-mux/animation-and-lock/rotation-control-state-machine.ts#L160)

Notifies the state machine of user rotation input.

#### 參數

##### diff

`number`

Rotation angle delta in radians

#### 回傳

`EventResult`\<[`RotateControlStates`](../type-aliases/RotateControlStates.md), [`RotateControlOutputEvent`](../type-aliases/RotateControlOutputEvent.md)\>

Event handling result with output event

#### 備註

Dispatches `userRotateByInput` event. Accepted in `ACCEPTING_USER_INPUT` and `TRANSITION` states,
where it may transition back to `ACCEPTING_USER_INPUT` (user interrupting animation).

***

### notifyRotateToAnimationInput()

> **notifyRotateToAnimationInput**(`target`): `EventResult`\<[`RotateControlStates`](../type-aliases/RotateControlStates.md), [`RotateControlOutputEvent`](../type-aliases/RotateControlOutputEvent.md)\>

定義於: [packages/board/src/camera/camera-mux/animation-and-lock/rotation-control-state-machine.ts:174](https://github.com/ue-too/ue-too/blob/79a36cf61d861e6b4e3302e81111636c6082a3db/packages/board/src/camera/camera-mux/animation-and-lock/rotation-control-state-machine.ts#L174)

Initiates a rotation animation to a target angle.

#### 參數

##### target

`number`

Target rotation angle in radians

#### 回傳

`EventResult`\<[`RotateControlStates`](../type-aliases/RotateControlStates.md), [`RotateControlOutputEvent`](../type-aliases/RotateControlOutputEvent.md)\>

Event handling result

#### 備註

Dispatches `transitionRotateToInput` event, starting a rotation animation.
Transitions to `TRANSITION` state where animation updates occur.

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

`StateChangeCallback`\<[`RotateControlStates`](../type-aliases/RotateControlStates.md)\>

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

`BaseContext`

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

[`RotateControlStates`](../type-aliases/RotateControlStates.md) | `"INITIAL"` | `"TERMINAL"`

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
