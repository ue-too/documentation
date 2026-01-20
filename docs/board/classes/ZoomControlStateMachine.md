[@ue-too/board](../globals.md) / ZoomControlStateMachine

# Class: ZoomControlStateMachine

Defined in: [packages/board/src/camera/camera-mux/animation-and-lock/zoom-control-state-machine.ts:275](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/board/src/camera/camera-mux/animation-and-lock/zoom-control-state-machine.ts#L275)

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

## Example

```typescript
const stateMachine = createDefaultZoomControlStateMachine(cameraRig);

// User zooms - accepted in ACCEPTING_USER_INPUT state
const result = stateMachine.notifyZoomByAtInput(1.2, { x: 400, y: 300 });

// Start animation - transitions to TRANSITION state
stateMachine.notifyZoomToAtWorldInput(2.0, { x: 1000, y: 500 });

// User input now may interrupt animation
```

## See

[createDefaultZoomControlStateMachine](../functions/createDefaultZoomControlStateMachine.md) for factory function

## Extends

- `TemplateStateMachine`\<[`ZoomEventPayloadMapping`](../type-aliases/ZoomEventPayloadMapping.md), `BaseContext`, [`ZoomControlStates`](../type-aliases/ZoomControlStates.md), [`ZoomControlOutputMapping`](../type-aliases/ZoomControlOutputMapping.md)\>

## Constructors

### Constructor

> **new ZoomControlStateMachine**(`states`, `initialState`, `context`): `ZoomControlStateMachine`

Defined in: [packages/board/src/camera/camera-mux/animation-and-lock/zoom-control-state-machine.ts:277](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/board/src/camera/camera-mux/animation-and-lock/zoom-control-state-machine.ts#L277)

#### Parameters

##### states

`Record`\<[`ZoomControlStates`](../type-aliases/ZoomControlStates.md), `State`\<[`ZoomEventPayloadMapping`](../type-aliases/ZoomEventPayloadMapping.md), `BaseContext`, [`ZoomControlStates`](../type-aliases/ZoomControlStates.md), [`ZoomControlOutputMapping`](../type-aliases/ZoomControlOutputMapping.md)\>\>

##### initialState

[`ZoomControlStates`](../type-aliases/ZoomControlStates.md)

##### context

`BaseContext`

#### Returns

`ZoomControlStateMachine`

#### Overrides

`TemplateStateMachine<ZoomEventPayloadMapping, BaseContext, ZoomControlStates, ZoomControlOutputMapping>.constructor`

## Properties

### \_context

> `protected` **\_context**: `BaseContext`

Defined in: packages/being/dist/interface.d.ts:378

#### Inherited from

`TemplateStateMachine._context`

***

### \_currentState

> `protected` **\_currentState**: [`ZoomControlStates`](../type-aliases/ZoomControlStates.md) \| `"INITIAL"` \| `"TERMINAL"`

Defined in: packages/being/dist/interface.d.ts:376

#### Inherited from

`TemplateStateMachine._currentState`

***

### \_happensCallbacks

> `protected` **\_happensCallbacks**: (`args`, `context`) => `void`[]

Defined in: packages/being/dist/interface.d.ts:381

#### Parameters

##### args

\[`"unlock"`\] | \[`string`, `unknown`\] | \[`"userZoomByAtInput"`, [`ZoomByAtInputPayload`](../type-aliases/ZoomByAtInputPayload.md)\] | \[`"userZoomToAtInput"`, [`ZoomToAtInputPayload`](../type-aliases/ZoomToAtInputPayload.md)\] | \[`"transitionZoomByAtInput"`, [`ZoomByAtInputPayload`](../type-aliases/ZoomByAtInputPayload.md)\] | \[`"transitionZoomToAtInput"`, [`ZoomToAtInputPayload`](../type-aliases/ZoomToAtInputPayload.md)\] | \[`"transitionZoomByAtCenterInput"`, [`ZoomByPayload`](../type-aliases/ZoomByPayload.md)\] | \[`"transitionZoomToAtCenterInput"`, [`ZoomToAtInputPayload`](../type-aliases/ZoomToAtInputPayload.md)\] | \[`"transitionZoomToAtWorldInput"`, [`ZoomToAtInputPayload`](../type-aliases/ZoomToAtInputPayload.md)\] | \[`"lockedOnObjectZoomByAtInput"`, [`ZoomByAtInputPayload`](../type-aliases/ZoomByAtInputPayload.md)\] | \[`"lockedOnObjectZoomToAtInput"`, [`ZoomToAtInputPayload`](../type-aliases/ZoomToAtInputPayload.md)\] | \[`"initiateTransition"`\]

##### context

`BaseContext`

#### Returns

`void`

#### Inherited from

`TemplateStateMachine._happensCallbacks`

***

### \_initialState

> `protected` **\_initialState**: [`ZoomControlStates`](../type-aliases/ZoomControlStates.md)

Defined in: packages/being/dist/interface.d.ts:383

#### Inherited from

`TemplateStateMachine._initialState`

***

### \_stateChangeCallbacks

> `protected` **\_stateChangeCallbacks**: `StateChangeCallback`\<[`ZoomControlStates`](../type-aliases/ZoomControlStates.md)\>[]

Defined in: packages/being/dist/interface.d.ts:380

#### Inherited from

`TemplateStateMachine._stateChangeCallbacks`

***

### \_states

> `protected` **\_states**: `Record`\<`States`, `State`\<`EventPayloadMapping`, `Context`, `States`, `EventOutputMapping`\>\>

Defined in: packages/being/dist/interface.d.ts:377

#### Inherited from

`TemplateStateMachine._states`

***

### \_statesArray

> `protected` **\_statesArray**: [`ZoomControlStates`](../type-aliases/ZoomControlStates.md)[]

Defined in: packages/being/dist/interface.d.ts:379

#### Inherited from

`TemplateStateMachine._statesArray`

***

### \_timeouts

> `protected` **\_timeouts**: `number` \| `undefined`

Defined in: packages/being/dist/interface.d.ts:382

#### Inherited from

`TemplateStateMachine._timeouts`

## Accessors

### currentState

#### Get Signature

> **get** **currentState**(): `States` \| `"INITIAL"` \| `"TERMINAL"`

Defined in: packages/being/dist/interface.d.ts:393

##### Returns

`States` \| `"INITIAL"` \| `"TERMINAL"`

#### Inherited from

`TemplateStateMachine.currentState`

***

### possibleStates

#### Get Signature

> **get** **possibleStates**(): `States`[]

Defined in: packages/being/dist/interface.d.ts:395

##### Returns

`States`[]

#### Inherited from

`TemplateStateMachine.possibleStates`

***

### states

#### Get Signature

> **get** **states**(): `Record`\<`States`, `State`\<`EventPayloadMapping`, `Context`, `States`, `EventOutputMapping`\>\>

Defined in: packages/being/dist/interface.d.ts:396

##### Returns

`Record`\<`States`, `State`\<`EventPayloadMapping`, `Context`, `States`, `EventOutputMapping`\>\>

#### Inherited from

`TemplateStateMachine.states`

## Methods

### happens()

#### Call Signature

> **happens**\<`K`\>(...`args`): `EventResult`\<[`ZoomControlStates`](../type-aliases/ZoomControlStates.md), `K` *extends* keyof [`ZoomControlOutputMapping`](../type-aliases/ZoomControlOutputMapping.md) ? [`ZoomControlOutputMapping`](../type-aliases/ZoomControlOutputMapping.md)\[`K`\<`K`\>\] : `void`\>

Defined in: packages/being/dist/interface.d.ts:389

##### Type Parameters

###### K

`K` *extends* keyof [`ZoomEventPayloadMapping`](../type-aliases/ZoomEventPayloadMapping.md)

##### Parameters

###### args

...`EventArgs`\<[`ZoomEventPayloadMapping`](../type-aliases/ZoomEventPayloadMapping.md), `K`\>

##### Returns

`EventResult`\<[`ZoomControlStates`](../type-aliases/ZoomControlStates.md), `K` *extends* keyof [`ZoomControlOutputMapping`](../type-aliases/ZoomControlOutputMapping.md) ? [`ZoomControlOutputMapping`](../type-aliases/ZoomControlOutputMapping.md)\[`K`\<`K`\>\] : `void`\>

##### Inherited from

`TemplateStateMachine.happens`

#### Call Signature

> **happens**\<`K`\>(...`args`): `EventResult`\<[`ZoomControlStates`](../type-aliases/ZoomControlStates.md), `unknown`\>

Defined in: packages/being/dist/interface.d.ts:390

##### Type Parameters

###### K

`K` *extends* `string`

##### Parameters

###### args

...`EventArgs`\<[`ZoomEventPayloadMapping`](../type-aliases/ZoomEventPayloadMapping.md), `K`\>

##### Returns

`EventResult`\<[`ZoomControlStates`](../type-aliases/ZoomControlStates.md), `unknown`\>

##### Inherited from

`TemplateStateMachine.happens`

***

### initateTransition()

> **initateTransition**(): `EventResult`\<[`ZoomControlStates`](../type-aliases/ZoomControlStates.md), `void`\>

Defined in: [packages/board/src/camera/camera-mux/animation-and-lock/zoom-control-state-machine.ts:344](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/board/src/camera/camera-mux/animation-and-lock/zoom-control-state-machine.ts#L344)

Initiates transition to `TRANSITION` state.

#### Returns

`EventResult`\<[`ZoomControlStates`](../type-aliases/ZoomControlStates.md), `void`\>

#### Remarks

Forces state change to begin animation or transition sequence.
Called when starting programmatic camera movements.

***

### notifyZoomByAtInput()

> **notifyZoomByAtInput**(`delta`, `at`): `EventResult`\<[`ZoomControlStates`](../type-aliases/ZoomControlStates.md), [`ZoomControlOutputEvent`](../type-aliases/ZoomControlOutputEvent.md)\>

Defined in: [packages/board/src/camera/camera-mux/animation-and-lock/zoom-control-state-machine.ts:291](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/board/src/camera/camera-mux/animation-and-lock/zoom-control-state-machine.ts#L291)

Notifies the state machine of user zoom input around an anchor point.

#### Parameters

##### delta

`number`

Zoom delta (multiplier)

##### at

`Point`

Anchor point for zoom

#### Returns

`EventResult`\<[`ZoomControlStates`](../type-aliases/ZoomControlStates.md), [`ZoomControlOutputEvent`](../type-aliases/ZoomControlOutputEvent.md)\>

Event handling result with output event

#### Remarks

Dispatches `userZoomByAtInput` event. Accepted in `ACCEPTING_USER_INPUT` and `TRANSITION` states.

***

### notifyZoomByAtInputAnimation()

> **notifyZoomByAtInputAnimation**(`delta`, `at`): `EventResult`\<[`ZoomControlStates`](../type-aliases/ZoomControlStates.md), [`ZoomControlOutputEvent`](../type-aliases/ZoomControlOutputEvent.md)\>

Defined in: [packages/board/src/camera/camera-mux/animation-and-lock/zoom-control-state-machine.ts:305](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/board/src/camera/camera-mux/animation-and-lock/zoom-control-state-machine.ts#L305)

Initiates a zoom animation around an anchor point.

#### Parameters

##### delta

`number`

Zoom delta (multiplier)

##### at

`Point`

Anchor point for zoom

#### Returns

`EventResult`\<[`ZoomControlStates`](../type-aliases/ZoomControlStates.md), [`ZoomControlOutputEvent`](../type-aliases/ZoomControlOutputEvent.md)\>

Event handling result

#### Remarks

Dispatches `transitionZoomByAtInput` event, starting a zoom animation.

***

### notifyZoomToAtCenterInput()

> **notifyZoomToAtCenterInput**(`targetZoom`, `at`): `EventResult`\<[`ZoomControlStates`](../type-aliases/ZoomControlStates.md), [`ZoomControlOutputEvent`](../type-aliases/ZoomControlOutputEvent.md)\>

Defined in: [packages/board/src/camera/camera-mux/animation-and-lock/zoom-control-state-machine.ts:319](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/board/src/camera/camera-mux/animation-and-lock/zoom-control-state-machine.ts#L319)

Initiates a zoom animation to target level around center anchor.

#### Parameters

##### targetZoom

`number`

Target zoom level

##### at

`Point`

Anchor point for zoom

#### Returns

`EventResult`\<[`ZoomControlStates`](../type-aliases/ZoomControlStates.md), [`ZoomControlOutputEvent`](../type-aliases/ZoomControlOutputEvent.md)\>

Event handling result

#### Remarks

Dispatches `transitionZoomToAtCenterInput` event for center-anchored zoom animation.

***

### notifyZoomToAtWorldInput()

> **notifyZoomToAtWorldInput**(`targetZoom`, `at`): `EventResult`\<[`ZoomControlStates`](../type-aliases/ZoomControlStates.md), [`ZoomControlOutputEvent`](../type-aliases/ZoomControlOutputEvent.md)\>

Defined in: [packages/board/src/camera/camera-mux/animation-and-lock/zoom-control-state-machine.ts:333](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/board/src/camera/camera-mux/animation-and-lock/zoom-control-state-machine.ts#L333)

Initiates a zoom animation to target level around world anchor.

#### Parameters

##### targetZoom

`number`

Target zoom level

##### at

`Point`

World anchor point for zoom

#### Returns

`EventResult`\<[`ZoomControlStates`](../type-aliases/ZoomControlStates.md), [`ZoomControlOutputEvent`](../type-aliases/ZoomControlOutputEvent.md)\>

Event handling result

#### Remarks

Dispatches `transitionZoomToAtWorldInput` event for world-anchored zoom animation.

***

### onHappens()

> **onHappens**(`callback`): `void`

Defined in: packages/being/dist/interface.d.ts:392

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

Defined in: packages/being/dist/interface.d.ts:391

#### Parameters

##### callback

`StateChangeCallback`\<[`ZoomControlStates`](../type-aliases/ZoomControlStates.md)\>

#### Returns

`void`

#### Inherited from

`TemplateStateMachine.onStateChange`

***

### reset()

> **reset**(): `void`

Defined in: packages/being/dist/interface.d.ts:385

#### Returns

`void`

#### Inherited from

`TemplateStateMachine.reset`

***

### setContext()

> **setContext**(`context`): `void`

Defined in: packages/being/dist/interface.d.ts:394

#### Parameters

##### context

`BaseContext`

#### Returns

`void`

#### Inherited from

`TemplateStateMachine.setContext`

***

### start()

> **start**(): `void`

Defined in: packages/being/dist/interface.d.ts:386

#### Returns

`void`

#### Inherited from

`TemplateStateMachine.start`

***

### switchTo()

> **switchTo**(`state`): `void`

Defined in: packages/being/dist/interface.d.ts:388

#### Parameters

##### state

[`ZoomControlStates`](../type-aliases/ZoomControlStates.md) | `"INITIAL"` | `"TERMINAL"`

#### Returns

`void`

#### Inherited from

`TemplateStateMachine.switchTo`

***

### wrapup()

> **wrapup**(): `void`

Defined in: packages/being/dist/interface.d.ts:387

#### Returns

`void`

#### Inherited from

`TemplateStateMachine.wrapup`
