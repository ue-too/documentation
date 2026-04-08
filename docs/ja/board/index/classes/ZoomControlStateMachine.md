[@ue-too/board](../../modules.md) / [index](../index.md) / ZoomControlStateMachine

# クラス: ZoomControlStateMachine

定義: [packages/board/src/camera/camera-mux/animation-and-lock/zoom-control-state-machine.ts:436](https://github.com/ue-too/ue-too/blob/79a36cf61d861e6b4e3302e81111636c6082a3db/packages/board/src/camera/camera-mux/animation-and-lock/zoom-control-state-machine.ts#L436)

State machine controlling zoom input flow and animations.

## Remarks

This state machine manages the lifecycle of zoom operations:
- **User input handling**: Accepts or blocks user zoom gestures based on state
- **Animation control**: Manages smooth zoom-to animations
- **Object tracking**: Supports locking camera to follow objects with zoom

**State transitions:**
- `ACCEPTING_USER_INPUT` → `TRANSITION`: Start animation (`initiateTransition`)
- `ACCEPTING_USER_INPUT` → `LOCKED_ON_OBJECT`: Lock to object (`lockedOnObjectZoom...`)
- `TRANSITION` → `ACCEPTING_USER_INPUT`: User input interrupts animation
- `LOCKED_ON_OBJECT` → `ACCEPTING_USER_INPUT`: User input unlocks

Helper methods simplify event dispatching without memorizing event names.

## 例

```typescript
const stateMachine = createDefaultZoomControlStateMachine(cameraRig);

// User zooms - accepted in ACCEPTING_USER_INPUT state
const result = stateMachine.notifyZoomByAtInput(1.2, { x: 400, y: 300 });

// Start animation - transitions to TRANSITION state
stateMachine.notifyZoomToAtWorldInput(2.0, { x: 1000, y: 500 });

// User input now may interrupt animation
```

## 参照

[createDefaultZoomControlStateMachine](../functions/createDefaultZoomControlStateMachine.md) for factory function

## 拡張

- `TemplateStateMachine`\<[`ZoomEventPayloadMapping`](../type-aliases/ZoomEventPayloadMapping.md), `BaseContext`, [`ZoomControlStates`](../type-aliases/ZoomControlStates.md), [`ZoomControlOutputMapping`](../type-aliases/ZoomControlOutputMapping.md)\>

## コンストラクター

### コンストラクター

> **new ZoomControlStateMachine**(`states`, `initialState`, `context`): `ZoomControlStateMachine`

定義: [packages/board/src/camera/camera-mux/animation-and-lock/zoom-control-state-machine.ts:442](https://github.com/ue-too/ue-too/blob/79a36cf61d861e6b4e3302e81111636c6082a3db/packages/board/src/camera/camera-mux/animation-and-lock/zoom-control-state-machine.ts#L442)

#### パラメータ

##### states

`Record`\<[`ZoomControlStates`](../type-aliases/ZoomControlStates.md), `State`\<[`ZoomEventPayloadMapping`](../type-aliases/ZoomEventPayloadMapping.md), `BaseContext`, [`ZoomControlStates`](../type-aliases/ZoomControlStates.md), [`ZoomControlOutputMapping`](../type-aliases/ZoomControlOutputMapping.md)\>\>

##### initialState

[`ZoomControlStates`](../type-aliases/ZoomControlStates.md)

##### context

`BaseContext`

#### 戻り値

`ZoomControlStateMachine`

#### 上書き

`TemplateStateMachine< ZoomEventPayloadMapping, BaseContext, ZoomControlStates, ZoomControlOutputMapping >.constructor`

## プロパティ

### \_context

> `protected` **\_context**: `BaseContext`

定義: packages/being/dist/interface.d.ts:384

#### 継承元

`TemplateStateMachine._context`

***

### \_currentState

> `protected` **\_currentState**: [`ZoomControlStates`](../type-aliases/ZoomControlStates.md) \| `"INITIAL"` \| `"TERMINAL"`

定義: packages/being/dist/interface.d.ts:382

#### 継承元

`TemplateStateMachine._currentState`

***

### \_happensCallbacks

> `protected` **\_happensCallbacks**: (`args`, `context`) => `void`[]

定義: packages/being/dist/interface.d.ts:387

#### パラメータ

##### args

\[`"unlock"`\] | \[`string`, `unknown`\] | \[`"userZoomByAtInput"`, [`ZoomByAtInputPayload`](../type-aliases/ZoomByAtInputPayload.md)\] | \[`"userZoomToAtInput"`, [`ZoomToAtInputPayload`](../type-aliases/ZoomToAtInputPayload.md)\] | \[`"transitionZoomByAtInput"`, [`ZoomByAtInputPayload`](../type-aliases/ZoomByAtInputPayload.md)\] | \[`"transitionZoomToAtInput"`, [`ZoomToAtInputPayload`](../type-aliases/ZoomToAtInputPayload.md)\] | \[`"transitionZoomByAtCenterInput"`, [`ZoomByPayload`](../type-aliases/ZoomByPayload.md)\] | \[`"transitionZoomToAtCenterInput"`, [`ZoomToAtInputPayload`](../type-aliases/ZoomToAtInputPayload.md)\] | \[`"transitionZoomToAtWorldInput"`, [`ZoomToAtInputPayload`](../type-aliases/ZoomToAtInputPayload.md)\] | \[`"lockedOnObjectZoomByAtInput"`, [`ZoomByAtInputPayload`](../type-aliases/ZoomByAtInputPayload.md)\] | \[`"lockedOnObjectZoomToAtInput"`, [`ZoomToAtInputPayload`](../type-aliases/ZoomToAtInputPayload.md)\] | \[`"initiateTransition"`\]

##### context

`BaseContext`

#### 戻り値

`void`

#### 継承元

`TemplateStateMachine._happensCallbacks`

***

### \_initialState

> `protected` **\_initialState**: [`ZoomControlStates`](../type-aliases/ZoomControlStates.md)

定義: packages/being/dist/interface.d.ts:389

#### 継承元

`TemplateStateMachine._initialState`

***

### \_stateChangeCallbacks

> `protected` **\_stateChangeCallbacks**: `StateChangeCallback`\<[`ZoomControlStates`](../type-aliases/ZoomControlStates.md)\>[]

定義: packages/being/dist/interface.d.ts:386

#### 継承元

`TemplateStateMachine._stateChangeCallbacks`

***

### \_states

> `protected` **\_states**: `Record`\<`States`, `State`\<`EventPayloadMapping`, `Context`, `States`, `EventOutputMapping`\>\>

定義: packages/being/dist/interface.d.ts:383

#### 継承元

`TemplateStateMachine._states`

***

### \_statesArray

> `protected` **\_statesArray**: [`ZoomControlStates`](../type-aliases/ZoomControlStates.md)[]

定義: packages/being/dist/interface.d.ts:385

#### 継承元

`TemplateStateMachine._statesArray`

***

### \_timeouts

> `protected` **\_timeouts**: `number` \| `undefined`

定義: packages/being/dist/interface.d.ts:388

#### 継承元

`TemplateStateMachine._timeouts`

## アクセッサー

### currentState

#### 署名を取得する

> **get** **currentState**(): `States` \| `"INITIAL"` \| `"TERMINAL"`

定義: packages/being/dist/interface.d.ts:399

##### 戻り値

`States` \| `"INITIAL"` \| `"TERMINAL"`

#### 継承元

`TemplateStateMachine.currentState`

***

### possibleStates

#### 署名を取得する

> **get** **possibleStates**(): `States`[]

定義: packages/being/dist/interface.d.ts:401

##### 戻り値

`States`[]

#### 継承元

`TemplateStateMachine.possibleStates`

***

### states

#### 署名を取得する

> **get** **states**(): `Record`\<`States`, `State`\<`EventPayloadMapping`, `Context`, `States`, `EventOutputMapping`\>\>

定義: packages/being/dist/interface.d.ts:402

##### 戻り値

`Record`\<`States`, `State`\<`EventPayloadMapping`, `Context`, `States`, `EventOutputMapping`\>\>

#### 継承元

`TemplateStateMachine.states`

## メソッド

### happens()

#### コールシグネチャ

> **happens**\<`K`\>(...`args`): `EventResult`\<[`ZoomControlStates`](../type-aliases/ZoomControlStates.md), `K` *extends* keyof [`ZoomControlOutputMapping`](../type-aliases/ZoomControlOutputMapping.md) ? [`ZoomControlOutputMapping`](../type-aliases/ZoomControlOutputMapping.md)\[`K`\<`K`\>\] : `void`\>

定義: packages/being/dist/interface.d.ts:395

##### 型パラメーター

###### K

`K` *extends* keyof [`ZoomEventPayloadMapping`](../type-aliases/ZoomEventPayloadMapping.md)

##### パラメータ

###### args

...`EventArgs`\<[`ZoomEventPayloadMapping`](../type-aliases/ZoomEventPayloadMapping.md), `K`\>

##### 戻り値

`EventResult`\<[`ZoomControlStates`](../type-aliases/ZoomControlStates.md), `K` *extends* keyof [`ZoomControlOutputMapping`](../type-aliases/ZoomControlOutputMapping.md) ? [`ZoomControlOutputMapping`](../type-aliases/ZoomControlOutputMapping.md)\[`K`\<`K`\>\] : `void`\>

##### 継承元

`TemplateStateMachine.happens`

#### コールシグネチャ

> **happens**\<`K`\>(...`args`): `EventResult`\<[`ZoomControlStates`](../type-aliases/ZoomControlStates.md), `unknown`\>

定義: packages/being/dist/interface.d.ts:396

##### 型パラメーター

###### K

`K` *extends* `string`

##### パラメータ

###### args

...`EventArgs`\<[`ZoomEventPayloadMapping`](../type-aliases/ZoomEventPayloadMapping.md), `K`\>

##### 戻り値

`EventResult`\<[`ZoomControlStates`](../type-aliases/ZoomControlStates.md), `unknown`\>

##### 継承元

`TemplateStateMachine.happens`

***

### initateTransition()

> **initateTransition**(): `EventResult`\<[`ZoomControlStates`](../type-aliases/ZoomControlStates.md), `void`\>

定義: [packages/board/src/camera/camera-mux/animation-and-lock/zoom-control-state-machine.ts:533](https://github.com/ue-too/ue-too/blob/79a36cf61d861e6b4e3302e81111636c6082a3db/packages/board/src/camera/camera-mux/animation-and-lock/zoom-control-state-machine.ts#L533)

Initiates transition to `TRANSITION` state.

#### 戻り値

`EventResult`\<[`ZoomControlStates`](../type-aliases/ZoomControlStates.md), `void`\>

#### Remarks

Forces state change to begin animation or transition sequence.
Called when starting programmatic camera movements.

***

### notifyZoomByAtInput()

> **notifyZoomByAtInput**(`delta`, `at`): `EventResult`\<[`ZoomControlStates`](../type-aliases/ZoomControlStates.md), [`ZoomControlOutputEvent`](../type-aliases/ZoomControlOutputEvent.md)\>

定義: [packages/board/src/camera/camera-mux/animation-and-lock/zoom-control-state-machine.ts:468](https://github.com/ue-too/ue-too/blob/79a36cf61d861e6b4e3302e81111636c6082a3db/packages/board/src/camera/camera-mux/animation-and-lock/zoom-control-state-machine.ts#L468)

Notifies the state machine of user zoom input around an anchor point.

#### パラメータ

##### delta

`number`

Zoom delta (multiplier)

##### at

`Point`

Anchor point for zoom

#### 戻り値

`EventResult`\<[`ZoomControlStates`](../type-aliases/ZoomControlStates.md), [`ZoomControlOutputEvent`](../type-aliases/ZoomControlOutputEvent.md)\>

Event handling result with output event

#### Remarks

Dispatches `userZoomByAtInput` event. Accepted in `ACCEPTING_USER_INPUT` and `TRANSITION` states.

***

### notifyZoomByAtInputAnimation()

> **notifyZoomByAtInputAnimation**(`delta`, `at`): `EventResult`\<[`ZoomControlStates`](../type-aliases/ZoomControlStates.md), [`ZoomControlOutputEvent`](../type-aliases/ZoomControlOutputEvent.md)\>

定義: [packages/board/src/camera/camera-mux/animation-and-lock/zoom-control-state-machine.ts:485](https://github.com/ue-too/ue-too/blob/79a36cf61d861e6b4e3302e81111636c6082a3db/packages/board/src/camera/camera-mux/animation-and-lock/zoom-control-state-machine.ts#L485)

Initiates a zoom animation around an anchor point.

#### パラメータ

##### delta

`number`

Zoom delta (multiplier)

##### at

`Point`

Anchor point for zoom

#### 戻り値

`EventResult`\<[`ZoomControlStates`](../type-aliases/ZoomControlStates.md), [`ZoomControlOutputEvent`](../type-aliases/ZoomControlOutputEvent.md)\>

Event handling result

#### Remarks

Dispatches `transitionZoomByAtInput` event, starting a zoom animation.

***

### notifyZoomToAtCenterInput()

> **notifyZoomToAtCenterInput**(`targetZoom`, `at`): `EventResult`\<[`ZoomControlStates`](../type-aliases/ZoomControlStates.md), [`ZoomControlOutputEvent`](../type-aliases/ZoomControlOutputEvent.md)\>

定義: [packages/board/src/camera/camera-mux/animation-and-lock/zoom-control-state-machine.ts:502](https://github.com/ue-too/ue-too/blob/79a36cf61d861e6b4e3302e81111636c6082a3db/packages/board/src/camera/camera-mux/animation-and-lock/zoom-control-state-machine.ts#L502)

Initiates a zoom animation to target level around center anchor.

#### パラメータ

##### targetZoom

`number`

Target zoom level

##### at

`Point`

Anchor point for zoom

#### 戻り値

`EventResult`\<[`ZoomControlStates`](../type-aliases/ZoomControlStates.md), [`ZoomControlOutputEvent`](../type-aliases/ZoomControlOutputEvent.md)\>

Event handling result

#### Remarks

Dispatches `transitionZoomToAtCenterInput` event for center-anchored zoom animation.

***

### notifyZoomToAtWorldInput()

> **notifyZoomToAtWorldInput**(`targetZoom`, `at`): `EventResult`\<[`ZoomControlStates`](../type-aliases/ZoomControlStates.md), [`ZoomControlOutputEvent`](../type-aliases/ZoomControlOutputEvent.md)\>

定義: [packages/board/src/camera/camera-mux/animation-and-lock/zoom-control-state-machine.ts:519](https://github.com/ue-too/ue-too/blob/79a36cf61d861e6b4e3302e81111636c6082a3db/packages/board/src/camera/camera-mux/animation-and-lock/zoom-control-state-machine.ts#L519)

Initiates a zoom animation to target level around world anchor.

#### パラメータ

##### targetZoom

`number`

Target zoom level

##### at

`Point`

World anchor point for zoom

#### 戻り値

`EventResult`\<[`ZoomControlStates`](../type-aliases/ZoomControlStates.md), [`ZoomControlOutputEvent`](../type-aliases/ZoomControlOutputEvent.md)\>

Event handling result

#### Remarks

Dispatches `transitionZoomToAtWorldInput` event for world-anchored zoom animation.

***

### onHappens()

> **onHappens**(`callback`): `void`

定義: packages/being/dist/interface.d.ts:398

#### パラメータ

##### callback

(`args`, `context`) => `void`

#### 戻り値

`void`

#### 継承元

`TemplateStateMachine.onHappens`

***

### onStateChange()

> **onStateChange**(`callback`): `void`

定義: packages/being/dist/interface.d.ts:397

#### パラメータ

##### callback

`StateChangeCallback`\<[`ZoomControlStates`](../type-aliases/ZoomControlStates.md)\>

#### 戻り値

`void`

#### 継承元

`TemplateStateMachine.onStateChange`

***

### reset()

> **reset**(): `void`

定義: packages/being/dist/interface.d.ts:391

#### 戻り値

`void`

#### 継承元

`TemplateStateMachine.reset`

***

### setContext()

> **setContext**(`context`): `void`

定義: packages/being/dist/interface.d.ts:400

#### パラメータ

##### context

`BaseContext`

#### 戻り値

`void`

#### 継承元

`TemplateStateMachine.setContext`

***

### start()

> **start**(): `void`

定義: packages/being/dist/interface.d.ts:392

#### 戻り値

`void`

#### 継承元

`TemplateStateMachine.start`

***

### switchTo()

> **switchTo**(`state`): `void`

定義: packages/being/dist/interface.d.ts:394

#### パラメータ

##### state

[`ZoomControlStates`](../type-aliases/ZoomControlStates.md) | `"INITIAL"` | `"TERMINAL"`

#### 戻り値

`void`

#### 継承元

`TemplateStateMachine.switchTo`

***

### wrapup()

> **wrapup**(): `void`

定義: packages/being/dist/interface.d.ts:393

#### 戻り値

`void`

#### 継承元

`TemplateStateMachine.wrapup`
