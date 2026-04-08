[@ue-too/being](../../modules.md) / [index](../index.md) / StateMachine

# 介面: StateMachine\<EventPayloadMapping, Context, States, EventOutputMapping\>

定義於: [interface.ts:212](https://github.com/ue-too/ue-too/blob/79a36cf61d861e6b4e3302e81111636c6082a3db/packages/being/src/interface.ts#L212)

## Description

This is the interface for the state machine. The interface takes in a few generic parameters.

Generic parameters:
- EventPayloadMapping: A mapping of events to their payloads.
- Context: The context of the state machine. (which can be used by each state to do calculations that would persist across states)
- States: All of the possible states that the state machine can be in. e.g. a string literal union like "IDLE" | "SELECTING" | "PAN" | "ZOOM"
- EventOutputMapping: A mapping of events to their output types. Defaults to void for all events.

You can probably get by using the TemplateStateMachine class.
The naming is that an event would "happen" and the state of the state machine would "handle" it.

## 參閱

 - [TemplateStateMachine](../classes/TemplateStateMachine.md)
 - KmtInputStateMachine

## 型別參數

### EventPayloadMapping

`EventPayloadMapping`

### Context

`Context` *extends* [`BaseContext`](BaseContext.md)

### States

`States` *extends* `string` = `"IDLE"`

### EventOutputMapping

`EventOutputMapping` *extends* `Partial`\<`Record`\<keyof `EventPayloadMapping`, `unknown`\>\> = [`DefaultOutputMapping`](../type-aliases/DefaultOutputMapping.md)\<`EventPayloadMapping`\>

## 屬性

### currentState

> **currentState**: `States` \| `"INITIAL"` \| `"TERMINAL"`

定義於: [interface.ts:256](https://github.com/ue-too/ue-too/blob/79a36cf61d861e6b4e3302e81111636c6082a3db/packages/being/src/interface.ts#L256)

***

### possibleStates

> **possibleStates**: `States`[]

定義於: [interface.ts:243](https://github.com/ue-too/ue-too/blob/79a36cf61d861e6b4e3302e81111636c6082a3db/packages/being/src/interface.ts#L243)

***

### states

> **states**: `Record`\<`States`, [`State`](State.md)\<`EventPayloadMapping`, `Context`, `string` *extends* `States` ? `string` : `States`, `EventOutputMapping`\>\>

定義於: [interface.ts:233](https://github.com/ue-too/ue-too/blob/79a36cf61d861e6b4e3302e81111636c6082a3db/packages/being/src/interface.ts#L233)

## 方法

### happens()

#### 呼叫簽章

> **happens**\<`K`\>(...`args`): [`EventResult`](../type-aliases/EventResult.md)\<`States`, `K` *extends* keyof `EventOutputMapping` ? `EventOutputMapping`\[`K`\<`K`\>\] : `void`\>

定義於: [interface.ts:222](https://github.com/ue-too/ue-too/blob/79a36cf61d861e6b4e3302e81111636c6082a3db/packages/being/src/interface.ts#L222)

##### 型別參數

###### K

`K` *extends* `string` \| `number` \| `symbol`

##### 參數

###### args

...[`EventArgs`](../type-aliases/EventArgs.md)\<`EventPayloadMapping`, `K`\>

##### 回傳

[`EventResult`](../type-aliases/EventResult.md)\<`States`, `K` *extends* keyof `EventOutputMapping` ? `EventOutputMapping`\[`K`\<`K`\>\] : `void`\>

#### 呼叫簽章

> **happens**\<`K`\>(...`args`): [`EventResult`](../type-aliases/EventResult.md)\<`States`, `unknown`\>

定義於: [interface.ts:229](https://github.com/ue-too/ue-too/blob/79a36cf61d861e6b4e3302e81111636c6082a3db/packages/being/src/interface.ts#L229)

##### 型別參數

###### K

`K` *extends* `string`

##### 參數

###### args

...[`EventArgs`](../type-aliases/EventArgs.md)\<`EventPayloadMapping`, `K`\>

##### 回傳

[`EventResult`](../type-aliases/EventResult.md)\<`States`, `unknown`\>

***

### onHappens()

> **onHappens**(`callback`): `void`

定義於: [interface.ts:244](https://github.com/ue-too/ue-too/blob/79a36cf61d861e6b4e3302e81111636c6082a3db/packages/being/src/interface.ts#L244)

#### 參數

##### callback

(`args`, `context`) => `void`

#### 回傳

`void`

***

### onStateChange()

> **onStateChange**(`callback`): `void`

定義於: [interface.ts:242](https://github.com/ue-too/ue-too/blob/79a36cf61d861e6b4e3302e81111636c6082a3db/packages/being/src/interface.ts#L242)

#### 參數

##### callback

[`StateChangeCallback`](../type-aliases/StateChangeCallback.md)\<`States`\>

#### 回傳

`void`

***

### reset()

> **reset**(): `void`

定義於: [interface.ts:253](https://github.com/ue-too/ue-too/blob/79a36cf61d861e6b4e3302e81111636c6082a3db/packages/being/src/interface.ts#L253)

#### 回傳

`void`

***

### setContext()

> **setContext**(`context`): `void`

定義於: [interface.ts:232](https://github.com/ue-too/ue-too/blob/79a36cf61d861e6b4e3302e81111636c6082a3db/packages/being/src/interface.ts#L232)

#### 參數

##### context

`Context`

#### 回傳

`void`

***

### start()

> **start**(): `void`

定義於: [interface.ts:254](https://github.com/ue-too/ue-too/blob/79a36cf61d861e6b4e3302e81111636c6082a3db/packages/being/src/interface.ts#L254)

#### 回傳

`void`

***

### switchTo()

> **switchTo**(`state`): `void`

定義於: [interface.ts:220](https://github.com/ue-too/ue-too/blob/79a36cf61d861e6b4e3302e81111636c6082a3db/packages/being/src/interface.ts#L220)

#### 參數

##### state

`States`

#### 回傳

`void`

***

### wrapup()

> **wrapup**(): `void`

定義於: [interface.ts:255](https://github.com/ue-too/ue-too/blob/79a36cf61d861e6b4e3302e81111636c6082a3db/packages/being/src/interface.ts#L255)

#### 回傳

`void`
