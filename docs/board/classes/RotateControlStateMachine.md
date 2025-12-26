[@ue-too/board](../globals.md) / RotateControlStateMachine

# Class: RotateControlStateMachine

Defined in: [packages/board/src/camera/camera-mux/animation-and-lock/rotation-control-state-machine.ts:125](https://github.com/ue-too/ue-too/blob/e468a9961da59c81663192ec8df16ebc8e17abac/packages/board/src/camera/camera-mux/animation-and-lock/rotation-control-state-machine.ts#L125)

State machine controlling rotation input flow and animations.

## Remarks

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

## Example

```typescript
const stateMachine = createDefaultRotateControlStateMachine(cameraRig);

// User rotates - accepted in ACCEPTING_USER_INPUT state
const result = stateMachine.notifyRotateByInput(Math.PI / 4);

// Start animation - transitions to TRANSITION state
stateMachine.notifyRotateToAnimationInput(Math.PI);

// User input now blocked while animating
```

## See

[createDefaultRotateControlStateMachine](../functions/createDefaultRotateControlStateMachine.md) for factory function

## Extends

- `TemplateStateMachine`\<[`RotateEventPayloadMapping`](../type-aliases/RotateEventPayloadMapping.md), `BaseContext`, [`RotateControlStates`](../type-aliases/RotateControlStates.md), [`RotateControlOutputMapping`](../type-aliases/RotateControlOutputMapping.md)\>

## Constructors

### Constructor

> **new RotateControlStateMachine**(`states`, `initialState`, `context`): `RotateControlStateMachine`

Defined in: [packages/board/src/camera/camera-mux/animation-and-lock/rotation-control-state-machine.ts:127](https://github.com/ue-too/ue-too/blob/e468a9961da59c81663192ec8df16ebc8e17abac/packages/board/src/camera/camera-mux/animation-and-lock/rotation-control-state-machine.ts#L127)

#### Parameters

##### states

`Record`\<[`RotateControlStates`](../type-aliases/RotateControlStates.md), `State`\<[`RotateEventPayloadMapping`](../type-aliases/RotateEventPayloadMapping.md), `BaseContext`, [`RotateControlStates`](../type-aliases/RotateControlStates.md), [`RotateControlOutputMapping`](../type-aliases/RotateControlOutputMapping.md)\>\>

##### initialState

[`RotateControlStates`](../type-aliases/RotateControlStates.md)

##### context

`BaseContext`

#### Returns

`RotateControlStateMachine`

#### Overrides

`TemplateStateMachine<RotateEventPayloadMapping, BaseContext, RotateControlStates, RotateControlOutputMapping>.constructor`

## Properties

### \_context

> `protected` **\_context**: `BaseContext`

Defined in: [packages/being/src/interface.ts:436](https://github.com/ue-too/ue-too/blob/e468a9961da59c81663192ec8df16ebc8e17abac/packages/being/src/interface.ts#L436)

#### Inherited from

`TemplateStateMachine._context`

***

### \_currentState

> `protected` **\_currentState**: [`RotateControlStates`](../type-aliases/RotateControlStates.md)

Defined in: [packages/being/src/interface.ts:434](https://github.com/ue-too/ue-too/blob/e468a9961da59c81663192ec8df16ebc8e17abac/packages/being/src/interface.ts#L434)

#### Inherited from

`TemplateStateMachine._currentState`

***

### \_happensCallbacks

> `protected` **\_happensCallbacks**: (`args`, `context`) => `void`[]

Defined in: [packages/being/src/interface.ts:439](https://github.com/ue-too/ue-too/blob/e468a9961da59c81663192ec8df16ebc8e17abac/packages/being/src/interface.ts#L439)

#### Parameters

##### args

\[`"userRotateByInput"`, [`RotateByInputEventPayload`](../type-aliases/RotateByInputEventPayload.md)\] | \[`"userRotateToInput"`, [`RotateToInputEventPayload`](../type-aliases/RotateToInputEventPayload.md)\] | \[`"transitionRotateByInput"`, [`RotateByInputEventPayload`](../type-aliases/RotateByInputEventPayload.md)\] | \[`"transitionRotateToInput"`, [`RotateToInputEventPayload`](../type-aliases/RotateToInputEventPayload.md)\] | \[`"lockedOnObjectRotateByInput"`, [`RotateByInputEventPayload`](../type-aliases/RotateByInputEventPayload.md)\] | \[`"lockedOnObjectRotateToInput"`, [`RotateToInputEventPayload`](../type-aliases/RotateToInputEventPayload.md)\] | \[`"unlock"`\] | \[`"initateTransition"`\] | \[`string`, `unknown`\]

##### context

`BaseContext`

#### Returns

`void`

#### Inherited from

`TemplateStateMachine._happensCallbacks`

***

### \_stateChangeCallbacks

> `protected` **\_stateChangeCallbacks**: `StateChangeCallback`\<[`RotateControlStates`](../type-aliases/RotateControlStates.md)\>[]

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

> `protected` **\_statesArray**: [`RotateControlStates`](../type-aliases/RotateControlStates.md)[]

Defined in: [packages/being/src/interface.ts:437](https://github.com/ue-too/ue-too/blob/e468a9961da59c81663192ec8df16ebc8e17abac/packages/being/src/interface.ts#L437)

#### Inherited from

`TemplateStateMachine._statesArray`

***

### \_timeouts

> `protected` **\_timeouts**: `number` \| `undefined` = `undefined`

Defined in: [packages/being/src/interface.ts:440](https://github.com/ue-too/ue-too/blob/e468a9961da59c81663192ec8df16ebc8e17abac/packages/being/src/interface.ts#L440)

#### Inherited from

[`KmtInputStateMachineWebWorkerProxy`](KmtInputStateMachineWebWorkerProxy.md).[`_timeouts`](KmtInputStateMachineWebWorkerProxy.md#timeouts)

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

#### Call Signature

> **happens**\<`K`\>(...`args`): `EventResult`\<[`RotateControlStates`](../type-aliases/RotateControlStates.md), `K` *extends* keyof [`RotateControlOutputMapping`](../type-aliases/RotateControlOutputMapping.md) ? [`RotateControlOutputMapping`](../type-aliases/RotateControlOutputMapping.md)\[`K`\<`K`\>\] : `void`\>

Defined in: [packages/being/src/interface.ts:457](https://github.com/ue-too/ue-too/blob/e468a9961da59c81663192ec8df16ebc8e17abac/packages/being/src/interface.ts#L457)

##### Type Parameters

###### K

`K` *extends* keyof [`RotateEventPayloadMapping`](../type-aliases/RotateEventPayloadMapping.md)

##### Parameters

###### args

...`EventArgs`\<[`RotateEventPayloadMapping`](../type-aliases/RotateEventPayloadMapping.md), `K`\>

##### Returns

`EventResult`\<[`RotateControlStates`](../type-aliases/RotateControlStates.md), `K` *extends* keyof [`RotateControlOutputMapping`](../type-aliases/RotateControlOutputMapping.md) ? [`RotateControlOutputMapping`](../type-aliases/RotateControlOutputMapping.md)\[`K`\<`K`\>\] : `void`\>

##### Inherited from

`TemplateStateMachine.happens`

#### Call Signature

> **happens**\<`K`\>(...`args`): `EventResult`\<[`RotateControlStates`](../type-aliases/RotateControlStates.md), `unknown`\>

Defined in: [packages/being/src/interface.ts:458](https://github.com/ue-too/ue-too/blob/e468a9961da59c81663192ec8df16ebc8e17abac/packages/being/src/interface.ts#L458)

##### Type Parameters

###### K

`K` *extends* `string`

##### Parameters

###### args

...`EventArgs`\<[`RotateEventPayloadMapping`](../type-aliases/RotateEventPayloadMapping.md), `K`\>

##### Returns

`EventResult`\<[`RotateControlStates`](../type-aliases/RotateControlStates.md), `unknown`\>

##### Inherited from

`TemplateStateMachine.happens`

***

### initateTransition()

> **initateTransition**(): `void`

Defined in: [packages/board/src/camera/camera-mux/animation-and-lock/rotation-control-state-machine.ts:166](https://github.com/ue-too/ue-too/blob/e468a9961da59c81663192ec8df16ebc8e17abac/packages/board/src/camera/camera-mux/animation-and-lock/rotation-control-state-machine.ts#L166)

Initiates transition to `TRANSITION` state.

#### Returns

`void`

#### Remarks

Forces state change to begin animation or transition sequence.
Called when starting programmatic camera movements.

***

### notifyRotateByInput()

> **notifyRotateByInput**(`diff`): `EventResult`\<[`RotateControlStates`](../type-aliases/RotateControlStates.md), [`RotateControlOutputEvent`](../type-aliases/RotateControlOutputEvent.md)\>

Defined in: [packages/board/src/camera/camera-mux/animation-and-lock/rotation-control-state-machine.ts:141](https://github.com/ue-too/ue-too/blob/e468a9961da59c81663192ec8df16ebc8e17abac/packages/board/src/camera/camera-mux/animation-and-lock/rotation-control-state-machine.ts#L141)

Notifies the state machine of user rotation input.

#### Parameters

##### diff

`number`

Rotation angle delta in radians

#### Returns

`EventResult`\<[`RotateControlStates`](../type-aliases/RotateControlStates.md), [`RotateControlOutputEvent`](../type-aliases/RotateControlOutputEvent.md)\>

Event handling result with output event

#### Remarks

Dispatches `userRotateByInput` event. Accepted in `ACCEPTING_USER_INPUT` and `TRANSITION` states,
where it may transition back to `ACCEPTING_USER_INPUT` (user interrupting animation).

***

### notifyRotateToAnimationInput()

> **notifyRotateToAnimationInput**(`target`): `EventResult`\<[`RotateControlStates`](../type-aliases/RotateControlStates.md), [`RotateControlOutputEvent`](../type-aliases/RotateControlOutputEvent.md)\>

Defined in: [packages/board/src/camera/camera-mux/animation-and-lock/rotation-control-state-machine.ts:155](https://github.com/ue-too/ue-too/blob/e468a9961da59c81663192ec8df16ebc8e17abac/packages/board/src/camera/camera-mux/animation-and-lock/rotation-control-state-machine.ts#L155)

Initiates a rotation animation to a target angle.

#### Parameters

##### target

`number`

Target rotation angle in radians

#### Returns

`EventResult`\<[`RotateControlStates`](../type-aliases/RotateControlStates.md), [`RotateControlOutputEvent`](../type-aliases/RotateControlOutputEvent.md)\>

Event handling result

#### Remarks

Dispatches `transitionRotateToInput` event, starting a rotation animation.
Transitions to `TRANSITION` state where animation updates occur.

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

`StateChangeCallback`\<[`RotateControlStates`](../type-aliases/RotateControlStates.md)\>

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

`BaseContext`

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

[`RotateControlStates`](../type-aliases/RotateControlStates.md)

#### Returns

`void`

#### Inherited from

`TemplateStateMachine.switchTo`
