[@ue-too/board](../globals.md) / PanControlStateMachine

# Class: PanControlStateMachine

Defined in: [packages/board/src/camera/camera-mux/animation-and-lock/pan-control-state-machine.ts:70](https://github.com/ue-too/ue-too/blob/e0ad36978d99a0fba62213691fb721d4dca7c035/packages/board/src/camera/camera-mux/animation-and-lock/pan-control-state-machine.ts#L70)

## Description

The pan control state machine.
It's not created directly using the TemplateStateMachine class.
A few helper functions are in place to make it easier to use. (user don't have to memorize the event names)

## Extends

- `TemplateStateMachine`\<[`PanEventPayloadMapping`](../type-aliases/PanEventPayloadMapping.md), [`PanContext`](../interfaces/PanContext.md), [`PanControlStates`](../type-aliases/PanControlStates.md)\>

## Constructors

### Constructor

> **new PanControlStateMachine**(`states`, `initialState`, `context`): `PanControlStateMachine`

Defined in: [packages/board/src/camera/camera-mux/animation-and-lock/pan-control-state-machine.ts:72](https://github.com/ue-too/ue-too/blob/e0ad36978d99a0fba62213691fb721d4dca7c035/packages/board/src/camera/camera-mux/animation-and-lock/pan-control-state-machine.ts#L72)

#### Parameters

##### states

`Record`\<[`PanControlStates`](../type-aliases/PanControlStates.md), `State`\<[`PanEventPayloadMapping`](../type-aliases/PanEventPayloadMapping.md), [`PanContext`](../interfaces/PanContext.md), [`PanControlStates`](../type-aliases/PanControlStates.md)\>\>

##### initialState

[`PanControlStates`](../type-aliases/PanControlStates.md)

##### context

[`PanContext`](../interfaces/PanContext.md)

#### Returns

`PanControlStateMachine`

#### Overrides

`TemplateStateMachine<PanEventPayloadMapping, PanContext, PanControlStates>.constructor`

## Input Flow Control

### initateTransition()

> **initateTransition**(): `void`

Defined in: [packages/board/src/camera/camera-mux/animation-and-lock/pan-control-state-machine.ts:99](https://github.com/ue-too/ue-too/blob/e0ad36978d99a0fba62213691fb721d4dca7c035/packages/board/src/camera/camera-mux/animation-and-lock/pan-control-state-machine.ts#L99)

#### Returns

`void`

#### Description

Initate the transition.

***

### notifyPanInput()

> **notifyPanInput**(`diff`): `void`

Defined in: [packages/board/src/camera/camera-mux/animation-and-lock/pan-control-state-machine.ts:81](https://github.com/ue-too/ue-too/blob/e0ad36978d99a0fba62213691fb721d4dca7c035/packages/board/src/camera/camera-mux/animation-and-lock/pan-control-state-machine.ts#L81)

#### Parameters

##### diff

`Point`

#### Returns

`void`

#### Description

Notify the pan input event.

***

### notifyPanToAnimationInput()

> **notifyPanToAnimationInput**(`target`): `void`

Defined in: [packages/board/src/camera/camera-mux/animation-and-lock/pan-control-state-machine.ts:90](https://github.com/ue-too/ue-too/blob/e0ad36978d99a0fba62213691fb721d4dca7c035/packages/board/src/camera/camera-mux/animation-and-lock/pan-control-state-machine.ts#L90)

#### Parameters

##### target

`Point`

#### Returns

`void`

#### Description

Notify the pan to animation input event.

## Other

### \_context

> `protected` **\_context**: [`PanContext`](../interfaces/PanContext.md)

Defined in: [packages/being/src/interface.ts:213](https://github.com/ue-too/ue-too/blob/e0ad36978d99a0fba62213691fb721d4dca7c035/packages/being/src/interface.ts#L213)

#### Inherited from

`TemplateStateMachine._context`

***

### \_currentState

> `protected` **\_currentState**: [`PanControlStates`](../type-aliases/PanControlStates.md)

Defined in: [packages/being/src/interface.ts:211](https://github.com/ue-too/ue-too/blob/e0ad36978d99a0fba62213691fb721d4dca7c035/packages/being/src/interface.ts#L211)

#### Inherited from

`TemplateStateMachine._currentState`

***

### \_happensCallbacks

> `protected` **\_happensCallbacks**: (`args`, `context`) => `void`[]

Defined in: [packages/being/src/interface.ts:216](https://github.com/ue-too/ue-too/blob/e0ad36978d99a0fba62213691fb721d4dca7c035/packages/being/src/interface.ts#L216)

#### Parameters

##### args

\[`string`, `unknown`\] | \[`"userPanByInput"`, [`PanByInputEventPayload`](../type-aliases/PanByInputEventPayload.md)\] | \[`"userPanToInput"`, [`PanToInputEventPayload`](../type-aliases/PanToInputEventPayload.md)\] | \[`"transitionPanByInput"`, [`PanByInputEventPayload`](../type-aliases/PanByInputEventPayload.md)\] | \[`"transitionPanToInput"`, [`PanToInputEventPayload`](../type-aliases/PanToInputEventPayload.md)\] | \[`"lockedOnObjectPanByInput"`, [`PanByInputEventPayload`](../type-aliases/PanByInputEventPayload.md)\] | \[`"lockedOnObjectPanToInput"`, [`PanToInputEventPayload`](../type-aliases/PanToInputEventPayload.md)\] | \[`"unlock"`\] | \[`"initateTransition"`\]

##### context

[`PanContext`](../interfaces/PanContext.md)

#### Returns

`void`

#### Inherited from

`TemplateStateMachine._happensCallbacks`

***

### \_stateChangeCallbacks

> `protected` **\_stateChangeCallbacks**: `StateChangeCallback`\<[`PanControlStates`](../type-aliases/PanControlStates.md)\>[]

Defined in: [packages/being/src/interface.ts:215](https://github.com/ue-too/ue-too/blob/e0ad36978d99a0fba62213691fb721d4dca7c035/packages/being/src/interface.ts#L215)

#### Inherited from

`TemplateStateMachine._stateChangeCallbacks`

***

### \_states

> `protected` **\_states**: `Record`\<`States`, `State`\<`EventPayloadMapping`, `Context`, `States`\>\>

Defined in: [packages/being/src/interface.ts:212](https://github.com/ue-too/ue-too/blob/e0ad36978d99a0fba62213691fb721d4dca7c035/packages/being/src/interface.ts#L212)

#### Inherited from

`TemplateStateMachine._states`

***

### \_statesArray

> `protected` **\_statesArray**: [`PanControlStates`](../type-aliases/PanControlStates.md)[]

Defined in: [packages/being/src/interface.ts:214](https://github.com/ue-too/ue-too/blob/e0ad36978d99a0fba62213691fb721d4dca7c035/packages/being/src/interface.ts#L214)

#### Inherited from

`TemplateStateMachine._statesArray`

***

### \_timeouts

> `protected` **\_timeouts**: `number` \| `undefined` = `undefined`

Defined in: [packages/being/src/interface.ts:217](https://github.com/ue-too/ue-too/blob/e0ad36978d99a0fba62213691fb721d4dca7c035/packages/being/src/interface.ts#L217)

#### Inherited from

`TemplateStateMachine._timeouts`

***

### currentState

#### Get Signature

> **get** **currentState**(): `States`

Defined in: [packages/being/src/interface.ts:260](https://github.com/ue-too/ue-too/blob/e0ad36978d99a0fba62213691fb721d4dca7c035/packages/being/src/interface.ts#L260)

##### Returns

`States`

#### Inherited from

`TemplateStateMachine.currentState`

***

### limitEntireViewPort

#### Get Signature

> **get** **limitEntireViewPort**(): `boolean`

Defined in: [packages/board/src/camera/camera-mux/animation-and-lock/pan-control-state-machine.ts:107](https://github.com/ue-too/ue-too/blob/e0ad36978d99a0fba62213691fb721d4dca7c035/packages/board/src/camera/camera-mux/animation-and-lock/pan-control-state-machine.ts#L107)

##### Returns

`boolean`

#### Set Signature

> **set** **limitEntireViewPort**(`limit`): `void`

Defined in: [packages/board/src/camera/camera-mux/animation-and-lock/pan-control-state-machine.ts:103](https://github.com/ue-too/ue-too/blob/e0ad36978d99a0fba62213691fb721d4dca7c035/packages/board/src/camera/camera-mux/animation-and-lock/pan-control-state-machine.ts#L103)

##### Parameters

###### limit

`boolean`

##### Returns

`void`

***

### possibleStates

#### Get Signature

> **get** **possibleStates**(): `States`[]

Defined in: [packages/being/src/interface.ts:268](https://github.com/ue-too/ue-too/blob/e0ad36978d99a0fba62213691fb721d4dca7c035/packages/being/src/interface.ts#L268)

##### Returns

`States`[]

#### Inherited from

`TemplateStateMachine.possibleStates`

***

### states

#### Get Signature

> **get** **states**(): `Record`\<`States`, `State`\<`EventPayloadMapping`, `Context`, `States`\>\>

Defined in: [packages/being/src/interface.ts:272](https://github.com/ue-too/ue-too/blob/e0ad36978d99a0fba62213691fb721d4dca7c035/packages/being/src/interface.ts#L272)

##### Returns

`Record`\<`States`, `State`\<`EventPayloadMapping`, `Context`, `States`\>\>

#### Inherited from

`TemplateStateMachine.states`

***

### happens()

#### Call Signature

> **happens**\<`K`\>(...`args`): `EventHandledResult`\<[`PanControlStates`](../type-aliases/PanControlStates.md)\>

Defined in: [packages/being/src/interface.ts:234](https://github.com/ue-too/ue-too/blob/e0ad36978d99a0fba62213691fb721d4dca7c035/packages/being/src/interface.ts#L234)

##### Type Parameters

###### K

`K` *extends* keyof [`PanEventPayloadMapping`](../type-aliases/PanEventPayloadMapping.md)

##### Parameters

###### args

...`EventArgs`\<[`PanEventPayloadMapping`](../type-aliases/PanEventPayloadMapping.md), `K`\>

##### Returns

`EventHandledResult`\<[`PanControlStates`](../type-aliases/PanControlStates.md)\>

##### Inherited from

`TemplateStateMachine.happens`

#### Call Signature

> **happens**\<`K`\>(...`args`): `EventHandledResult`\<[`PanControlStates`](../type-aliases/PanControlStates.md)\>

Defined in: [packages/being/src/interface.ts:235](https://github.com/ue-too/ue-too/blob/e0ad36978d99a0fba62213691fb721d4dca7c035/packages/being/src/interface.ts#L235)

##### Type Parameters

###### K

`K` *extends* `string`

##### Parameters

###### args

...`EventArgs`\<[`PanEventPayloadMapping`](../type-aliases/PanEventPayloadMapping.md), `K`\>

##### Returns

`EventHandledResult`\<[`PanControlStates`](../type-aliases/PanControlStates.md)\>

##### Inherited from

`TemplateStateMachine.happens`

***

### onHappens()

> **onHappens**(`callback`): `void`

Defined in: [packages/being/src/interface.ts:256](https://github.com/ue-too/ue-too/blob/e0ad36978d99a0fba62213691fb721d4dca7c035/packages/being/src/interface.ts#L256)

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

Defined in: [packages/being/src/interface.ts:252](https://github.com/ue-too/ue-too/blob/e0ad36978d99a0fba62213691fb721d4dca7c035/packages/being/src/interface.ts#L252)

#### Parameters

##### callback

`StateChangeCallback`\<[`PanControlStates`](../type-aliases/PanControlStates.md)\>

#### Returns

`void`

#### Inherited from

`TemplateStateMachine.onStateChange`

***

### setContext()

> **setContext**(`context`): `void`

Defined in: [packages/being/src/interface.ts:264](https://github.com/ue-too/ue-too/blob/e0ad36978d99a0fba62213691fb721d4dca7c035/packages/being/src/interface.ts#L264)

#### Parameters

##### context

[`PanContext`](../interfaces/PanContext.md)

#### Returns

`void`

#### Inherited from

`TemplateStateMachine.setContext`

***

### switchTo()

> **switchTo**(`state`): `void`

Defined in: [packages/being/src/interface.ts:229](https://github.com/ue-too/ue-too/blob/e0ad36978d99a0fba62213691fb721d4dca7c035/packages/being/src/interface.ts#L229)

#### Parameters

##### state

[`PanControlStates`](../type-aliases/PanControlStates.md)

#### Returns

`void`

#### Inherited from

`TemplateStateMachine.switchTo`
