[@ue-too/board](../globals.md) / ZoomControlStateMachine

# Class: ZoomControlStateMachine

Defined in: [packages/board/src/camera/camera-mux/animation-and-lock/zoom-control-state-machine.ts:216](https://github.com/ue-too/ue-too/blob/95dd78435970713202a67be3986e96a80ff00749/packages/board/src/camera/camera-mux/animation-and-lock/zoom-control-state-machine.ts#L216)

## Description

The zoom control state machine.

## Extends

- `TemplateStateMachine`\<[`ZoomEventPayloadMapping`](../type-aliases/ZoomEventPayloadMapping.md), [`ZoomContext`](../interfaces/ZoomContext.md), [`ZoomControlStates`](../type-aliases/ZoomControlStates.md)\>

## Constructors

### Constructor

> **new ZoomControlStateMachine**(`states`, `initialState`, `context`): `ZoomControlStateMachine`

Defined in: [packages/board/src/camera/camera-mux/animation-and-lock/zoom-control-state-machine.ts:218](https://github.com/ue-too/ue-too/blob/95dd78435970713202a67be3986e96a80ff00749/packages/board/src/camera/camera-mux/animation-and-lock/zoom-control-state-machine.ts#L218)

#### Parameters

##### states

`Record`\<[`ZoomControlStates`](../type-aliases/ZoomControlStates.md), `State`\<[`ZoomEventPayloadMapping`](../type-aliases/ZoomEventPayloadMapping.md), [`ZoomContext`](../interfaces/ZoomContext.md), [`ZoomControlStates`](../type-aliases/ZoomControlStates.md)\>\>

##### initialState

[`ZoomControlStates`](../type-aliases/ZoomControlStates.md)

##### context

[`ZoomContext`](../interfaces/ZoomContext.md)

#### Returns

`ZoomControlStateMachine`

#### Overrides

`TemplateStateMachine<ZoomEventPayloadMapping, ZoomContext, ZoomControlStates>.constructor`

## Properties

### \_context

> `protected` **\_context**: [`ZoomContext`](../interfaces/ZoomContext.md)

Defined in: [packages/being/src/interface.ts:213](https://github.com/ue-too/ue-too/blob/95dd78435970713202a67be3986e96a80ff00749/packages/being/src/interface.ts#L213)

#### Inherited from

`TemplateStateMachine._context`

***

### \_currentState

> `protected` **\_currentState**: [`ZoomControlStates`](../type-aliases/ZoomControlStates.md)

Defined in: [packages/being/src/interface.ts:211](https://github.com/ue-too/ue-too/blob/95dd78435970713202a67be3986e96a80ff00749/packages/being/src/interface.ts#L211)

#### Inherited from

`TemplateStateMachine._currentState`

***

### \_happensCallbacks

> `protected` **\_happensCallbacks**: (`args`, `context`) => `void`[]

Defined in: [packages/being/src/interface.ts:216](https://github.com/ue-too/ue-too/blob/95dd78435970713202a67be3986e96a80ff00749/packages/being/src/interface.ts#L216)

#### Parameters

##### args

\[`string`, `unknown`\] | \[`"unlock"`\] | \[`"userZoomByAtInput"`, [`ZoomByAtInputPayload`](../type-aliases/ZoomByAtInputPayload.md)\] | \[`"userZoomToAtInput"`, [`ZoomToAtInputPayload`](../type-aliases/ZoomToAtInputPayload.md)\] | \[`"transitionZoomByAtInput"`, [`ZoomByAtInputPayload`](../type-aliases/ZoomByAtInputPayload.md)\] | \[`"transitionZoomToAtInput"`, [`ZoomToAtInputPayload`](../type-aliases/ZoomToAtInputPayload.md)\] | \[`"transitionZoomByAtCenterInput"`, [`ZoomByPayload`](../type-aliases/ZoomByPayload.md)\] | \[`"transitionZoomToAtCenterInput"`, [`ZoomToAtInputPayload`](../type-aliases/ZoomToAtInputPayload.md)\] | \[`"transitionZoomToAtWorldInput"`, [`ZoomToAtInputPayload`](../type-aliases/ZoomToAtInputPayload.md)\] | \[`"lockedOnObjectZoomByAtInput"`, [`ZoomByAtInputPayload`](../type-aliases/ZoomByAtInputPayload.md)\] | \[`"lockedOnObjectZoomToAtInput"`, [`ZoomToAtInputPayload`](../type-aliases/ZoomToAtInputPayload.md)\] | \[`"initiateTransition"`\]

##### context

[`ZoomContext`](../interfaces/ZoomContext.md)

#### Returns

`void`

#### Inherited from

`TemplateStateMachine._happensCallbacks`

***

### \_stateChangeCallbacks

> `protected` **\_stateChangeCallbacks**: `StateChangeCallback`\<[`ZoomControlStates`](../type-aliases/ZoomControlStates.md)\>[]

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

> `protected` **\_statesArray**: [`ZoomControlStates`](../type-aliases/ZoomControlStates.md)[]

Defined in: [packages/being/src/interface.ts:214](https://github.com/ue-too/ue-too/blob/95dd78435970713202a67be3986e96a80ff00749/packages/being/src/interface.ts#L214)

#### Inherited from

`TemplateStateMachine._statesArray`

***

### \_timeouts

> `protected` **\_timeouts**: `number` \| `undefined` = `undefined`

Defined in: [packages/being/src/interface.ts:217](https://github.com/ue-too/ue-too/blob/95dd78435970713202a67be3986e96a80ff00749/packages/being/src/interface.ts#L217)

#### Inherited from

`TemplateStateMachine._timeouts`

## Accessors

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

## Methods

### happens()

#### Call Signature

> **happens**\<`K`\>(...`args`): `EventHandledResult`\<[`ZoomControlStates`](../type-aliases/ZoomControlStates.md)\>

Defined in: [packages/being/src/interface.ts:234](https://github.com/ue-too/ue-too/blob/95dd78435970713202a67be3986e96a80ff00749/packages/being/src/interface.ts#L234)

##### Type Parameters

###### K

`K` *extends* keyof [`ZoomEventPayloadMapping`](../type-aliases/ZoomEventPayloadMapping.md)

##### Parameters

###### args

...`EventArgs`\<[`ZoomEventPayloadMapping`](../type-aliases/ZoomEventPayloadMapping.md), `K`\>

##### Returns

`EventHandledResult`\<[`ZoomControlStates`](../type-aliases/ZoomControlStates.md)\>

##### Inherited from

`TemplateStateMachine.happens`

#### Call Signature

> **happens**\<`K`\>(...`args`): `EventHandledResult`\<[`ZoomControlStates`](../type-aliases/ZoomControlStates.md)\>

Defined in: [packages/being/src/interface.ts:235](https://github.com/ue-too/ue-too/blob/95dd78435970713202a67be3986e96a80ff00749/packages/being/src/interface.ts#L235)

##### Type Parameters

###### K

`K` *extends* `string`

##### Parameters

###### args

...`EventArgs`\<[`ZoomEventPayloadMapping`](../type-aliases/ZoomEventPayloadMapping.md), `K`\>

##### Returns

`EventHandledResult`\<[`ZoomControlStates`](../type-aliases/ZoomControlStates.md)\>

##### Inherited from

`TemplateStateMachine.happens`

***

### initateTransition()

> **initateTransition**(): `void`

Defined in: [packages/board/src/camera/camera-mux/animation-and-lock/zoom-control-state-machine.ts:238](https://github.com/ue-too/ue-too/blob/95dd78435970713202a67be3986e96a80ff00749/packages/board/src/camera/camera-mux/animation-and-lock/zoom-control-state-machine.ts#L238)

#### Returns

`void`

***

### notifyZoomByAtInput()

> **notifyZoomByAtInput**(`delta`, `at`): `void`

Defined in: [packages/board/src/camera/camera-mux/animation-and-lock/zoom-control-state-machine.ts:222](https://github.com/ue-too/ue-too/blob/95dd78435970713202a67be3986e96a80ff00749/packages/board/src/camera/camera-mux/animation-and-lock/zoom-control-state-machine.ts#L222)

#### Parameters

##### delta

`number`

##### at

`Point`

#### Returns

`void`

***

### notifyZoomByAtInputAnimation()

> **notifyZoomByAtInputAnimation**(`delta`, `at`): `void`

Defined in: [packages/board/src/camera/camera-mux/animation-and-lock/zoom-control-state-machine.ts:226](https://github.com/ue-too/ue-too/blob/95dd78435970713202a67be3986e96a80ff00749/packages/board/src/camera/camera-mux/animation-and-lock/zoom-control-state-machine.ts#L226)

#### Parameters

##### delta

`number`

##### at

`Point`

#### Returns

`void`

***

### notifyZoomToAtCenterInput()

> **notifyZoomToAtCenterInput**(`targetZoom`, `at`): `void`

Defined in: [packages/board/src/camera/camera-mux/animation-and-lock/zoom-control-state-machine.ts:230](https://github.com/ue-too/ue-too/blob/95dd78435970713202a67be3986e96a80ff00749/packages/board/src/camera/camera-mux/animation-and-lock/zoom-control-state-machine.ts#L230)

#### Parameters

##### targetZoom

`number`

##### at

`Point`

#### Returns

`void`

***

### notifyZoomToAtWorldInput()

> **notifyZoomToAtWorldInput**(`targetZoom`, `at`): `void`

Defined in: [packages/board/src/camera/camera-mux/animation-and-lock/zoom-control-state-machine.ts:234](https://github.com/ue-too/ue-too/blob/95dd78435970713202a67be3986e96a80ff00749/packages/board/src/camera/camera-mux/animation-and-lock/zoom-control-state-machine.ts#L234)

#### Parameters

##### targetZoom

`number`

##### at

`Point`

#### Returns

`void`

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

`StateChangeCallback`\<[`ZoomControlStates`](../type-aliases/ZoomControlStates.md)\>

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

[`ZoomContext`](../interfaces/ZoomContext.md)

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

[`ZoomControlStates`](../type-aliases/ZoomControlStates.md)

#### Returns

`void`

#### Inherited from

`TemplateStateMachine.switchTo`
