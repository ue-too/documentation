[@ue-too/board](../globals.md) / RotateControlStateMachine

# Class: RotateControlStateMachine

Defined in: [packages/board/src/camera/camera-mux/animation-and-lock/rotation-control-state-machine.ts:66](https://github.com/ue-too/ue-too/blob/95dd78435970713202a67be3986e96a80ff00749/packages/board/src/camera/camera-mux/animation-and-lock/rotation-control-state-machine.ts#L66)

## Description

The pan control state machine.
It's not created directly using the TemplateStateMachine class.
A few helper functions are in place to make it easier to use. (user don't have to memorize the event names)

## Extends

- `TemplateStateMachine`\<[`RotateEventPayloadMapping`](../type-aliases/RotateEventPayloadMapping.md), [`RotateContext`](../interfaces/RotateContext.md), [`RotateControlStates`](../type-aliases/RotateControlStates.md)\>

## Constructors

### Constructor

> **new RotateControlStateMachine**(`states`, `initialState`, `context`): `RotateControlStateMachine`

Defined in: [packages/board/src/camera/camera-mux/animation-and-lock/rotation-control-state-machine.ts:68](https://github.com/ue-too/ue-too/blob/95dd78435970713202a67be3986e96a80ff00749/packages/board/src/camera/camera-mux/animation-and-lock/rotation-control-state-machine.ts#L68)

#### Parameters

##### states

`Record`\<[`RotateControlStates`](../type-aliases/RotateControlStates.md), `State`\<[`RotateEventPayloadMapping`](../type-aliases/RotateEventPayloadMapping.md), [`RotateContext`](../interfaces/RotateContext.md), [`RotateControlStates`](../type-aliases/RotateControlStates.md)\>\>

##### initialState

[`RotateControlStates`](../type-aliases/RotateControlStates.md)

##### context

[`RotateContext`](../interfaces/RotateContext.md)

#### Returns

`RotateControlStateMachine`

#### Overrides

`TemplateStateMachine<RotateEventPayloadMapping, RotateContext, RotateControlStates>.constructor`

## Input Flow Control

### initateTransition()

> **initateTransition**(): `void`

Defined in: [packages/board/src/camera/camera-mux/animation-and-lock/rotation-control-state-machine.ts:95](https://github.com/ue-too/ue-too/blob/95dd78435970713202a67be3986e96a80ff00749/packages/board/src/camera/camera-mux/animation-and-lock/rotation-control-state-machine.ts#L95)

#### Returns

`void`

#### Description

Initate the transition.

***

### notifyRotateByInput()

> **notifyRotateByInput**(`diff`): `void`

Defined in: [packages/board/src/camera/camera-mux/animation-and-lock/rotation-control-state-machine.ts:77](https://github.com/ue-too/ue-too/blob/95dd78435970713202a67be3986e96a80ff00749/packages/board/src/camera/camera-mux/animation-and-lock/rotation-control-state-machine.ts#L77)

#### Parameters

##### diff

`number`

#### Returns

`void`

#### Description

Notify the pan input event.

***

### notifyRotateToAnimationInput()

> **notifyRotateToAnimationInput**(`target`): `void`

Defined in: [packages/board/src/camera/camera-mux/animation-and-lock/rotation-control-state-machine.ts:86](https://github.com/ue-too/ue-too/blob/95dd78435970713202a67be3986e96a80ff00749/packages/board/src/camera/camera-mux/animation-and-lock/rotation-control-state-machine.ts#L86)

#### Parameters

##### target

`number`

#### Returns

`void`

#### Description

Notify the rotate to animation input event.

## Other

### \_context

> `protected` **\_context**: [`RotateContext`](../interfaces/RotateContext.md)

Defined in: [packages/being/src/interface.ts:213](https://github.com/ue-too/ue-too/blob/95dd78435970713202a67be3986e96a80ff00749/packages/being/src/interface.ts#L213)

#### Inherited from

`TemplateStateMachine._context`

***

### \_currentState

> `protected` **\_currentState**: [`RotateControlStates`](../type-aliases/RotateControlStates.md)

Defined in: [packages/being/src/interface.ts:211](https://github.com/ue-too/ue-too/blob/95dd78435970713202a67be3986e96a80ff00749/packages/being/src/interface.ts#L211)

#### Inherited from

`TemplateStateMachine._currentState`

***

### \_happensCallbacks

> `protected` **\_happensCallbacks**: (`args`, `context`) => `void`[]

Defined in: [packages/being/src/interface.ts:216](https://github.com/ue-too/ue-too/blob/95dd78435970713202a67be3986e96a80ff00749/packages/being/src/interface.ts#L216)

#### Parameters

##### args

\[`string`, `unknown`\] | \[`"unlock"`\] | \[`"initateTransition"`\] | \[`"userRotateByInput"`, [`RotateByInputEventPayload`](../type-aliases/RotateByInputEventPayload.md)\] | \[`"userRotateToInput"`, [`RotateToInputEventPayload`](../type-aliases/RotateToInputEventPayload.md)\] | \[`"transitionRotateByInput"`, [`RotateByInputEventPayload`](../type-aliases/RotateByInputEventPayload.md)\] | \[`"transitionRotateToInput"`, [`RotateToInputEventPayload`](../type-aliases/RotateToInputEventPayload.md)\] | \[`"lockedOnObjectRotateByInput"`, [`RotateByInputEventPayload`](../type-aliases/RotateByInputEventPayload.md)\] | \[`"lockedOnObjectRotateToInput"`, [`RotateToInputEventPayload`](../type-aliases/RotateToInputEventPayload.md)\]

##### context

[`RotateContext`](../interfaces/RotateContext.md)

#### Returns

`void`

#### Inherited from

`TemplateStateMachine._happensCallbacks`

***

### \_stateChangeCallbacks

> `protected` **\_stateChangeCallbacks**: `StateChangeCallback`\<[`RotateControlStates`](../type-aliases/RotateControlStates.md)\>[]

Defined in: [packages/being/src/interface.ts:215](https://github.com/ue-too/ue-too/blob/95dd78435970713202a67be3986e96a80ff00749/packages/being/src/interface.ts#L215)

#### Inherited from

`TemplateStateMachine._stateChangeCallbacks`

***

### \_states

> `protected` **\_states**: `Record`\<`States`, `State`\<`EventPayloadMapping`, `Context`, `States`\>\>

Defined in: [packages/being/src/interface.ts:212](https://github.com/ue-too/ue-too/blob/95dd78435970713202a67be3986e96a80ff00749/packages/being/src/interface.ts#L212)

#### Inherited from

`TemplateStateMachine._states`

***

### \_statesArray

> `protected` **\_statesArray**: [`RotateControlStates`](../type-aliases/RotateControlStates.md)[]

Defined in: [packages/being/src/interface.ts:214](https://github.com/ue-too/ue-too/blob/95dd78435970713202a67be3986e96a80ff00749/packages/being/src/interface.ts#L214)

#### Inherited from

`TemplateStateMachine._statesArray`

***

### \_timeouts

> `protected` **\_timeouts**: `number` \| `undefined` = `undefined`

Defined in: [packages/being/src/interface.ts:217](https://github.com/ue-too/ue-too/blob/95dd78435970713202a67be3986e96a80ff00749/packages/being/src/interface.ts#L217)

#### Inherited from

`TemplateStateMachine._timeouts`

***

### currentState

#### Get Signature

> **get** **currentState**(): `States`

Defined in: [packages/being/src/interface.ts:260](https://github.com/ue-too/ue-too/blob/95dd78435970713202a67be3986e96a80ff00749/packages/being/src/interface.ts#L260)

##### Returns

`States`

#### Inherited from

`TemplateStateMachine.currentState`

***

### possibleStates

#### Get Signature

> **get** **possibleStates**(): `States`[]

Defined in: [packages/being/src/interface.ts:268](https://github.com/ue-too/ue-too/blob/95dd78435970713202a67be3986e96a80ff00749/packages/being/src/interface.ts#L268)

##### Returns

`States`[]

#### Inherited from

`TemplateStateMachine.possibleStates`

***

### states

#### Get Signature

> **get** **states**(): `Record`\<`States`, `State`\<`EventPayloadMapping`, `Context`, `States`\>\>

Defined in: [packages/being/src/interface.ts:272](https://github.com/ue-too/ue-too/blob/95dd78435970713202a67be3986e96a80ff00749/packages/being/src/interface.ts#L272)

##### Returns

`Record`\<`States`, `State`\<`EventPayloadMapping`, `Context`, `States`\>\>

#### Inherited from

`TemplateStateMachine.states`

***

### happens()

#### Call Signature

> **happens**\<`K`\>(...`args`): `EventHandledResult`\<[`RotateControlStates`](../type-aliases/RotateControlStates.md)\>

Defined in: [packages/being/src/interface.ts:234](https://github.com/ue-too/ue-too/blob/95dd78435970713202a67be3986e96a80ff00749/packages/being/src/interface.ts#L234)

##### Type Parameters

###### K

`K` *extends* keyof [`RotateEventPayloadMapping`](../type-aliases/RotateEventPayloadMapping.md)

##### Parameters

###### args

...`EventArgs`\<[`RotateEventPayloadMapping`](../type-aliases/RotateEventPayloadMapping.md), `K`\>

##### Returns

`EventHandledResult`\<[`RotateControlStates`](../type-aliases/RotateControlStates.md)\>

##### Inherited from

`TemplateStateMachine.happens`

#### Call Signature

> **happens**\<`K`\>(...`args`): `EventHandledResult`\<[`RotateControlStates`](../type-aliases/RotateControlStates.md)\>

Defined in: [packages/being/src/interface.ts:235](https://github.com/ue-too/ue-too/blob/95dd78435970713202a67be3986e96a80ff00749/packages/being/src/interface.ts#L235)

##### Type Parameters

###### K

`K` *extends* `string`

##### Parameters

###### args

...`EventArgs`\<[`RotateEventPayloadMapping`](../type-aliases/RotateEventPayloadMapping.md), `K`\>

##### Returns

`EventHandledResult`\<[`RotateControlStates`](../type-aliases/RotateControlStates.md)\>

##### Inherited from

`TemplateStateMachine.happens`

***

### onHappens()

> **onHappens**(`callback`): `void`

Defined in: [packages/being/src/interface.ts:256](https://github.com/ue-too/ue-too/blob/95dd78435970713202a67be3986e96a80ff00749/packages/being/src/interface.ts#L256)

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

Defined in: [packages/being/src/interface.ts:252](https://github.com/ue-too/ue-too/blob/95dd78435970713202a67be3986e96a80ff00749/packages/being/src/interface.ts#L252)

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

Defined in: [packages/being/src/interface.ts:264](https://github.com/ue-too/ue-too/blob/95dd78435970713202a67be3986e96a80ff00749/packages/being/src/interface.ts#L264)

#### Parameters

##### context

[`RotateContext`](../interfaces/RotateContext.md)

#### Returns

`void`

#### Inherited from

`TemplateStateMachine.setContext`

***

### switchTo()

> **switchTo**(`state`): `void`

Defined in: [packages/being/src/interface.ts:229](https://github.com/ue-too/ue-too/blob/95dd78435970713202a67be3986e96a80ff00749/packages/being/src/interface.ts#L229)

#### Parameters

##### state

[`RotateControlStates`](../type-aliases/RotateControlStates.md)

#### Returns

`void`

#### Inherited from

`TemplateStateMachine.switchTo`
