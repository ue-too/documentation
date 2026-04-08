[@ue-too/board](../../modules.md) / [index](../index.md) / RotationLockedOnObjectState

# 類別: RotationLockedOnObjectState

定義於: [packages/board/src/camera/camera-mux/animation-and-lock/rotation-control-state-machine.ts:354](https://github.com/ue-too/ue-too/blob/79a36cf61d861e6b4e3302e81111636c6082a3db/packages/board/src/camera/camera-mux/animation-and-lock/rotation-control-state-machine.ts#L354)

State implementation for camera locked to follow an object rotation.
Only accepts locked object rotation events until unlocked.

## Extends

- `TemplateState`\<[`RotateEventPayloadMapping`](../type-aliases/RotateEventPayloadMapping.md), `BaseContext`, [`RotateControlStates`](../type-aliases/RotateControlStates.md), [`RotateControlOutputMapping`](../type-aliases/RotateControlOutputMapping.md)\>

## 建構函式

### 建構函式

> **new RotationLockedOnObjectState**(): `RotationLockedOnObjectState`

定義於: [packages/board/src/camera/camera-mux/animation-and-lock/rotation-control-state-machine.ts:360](https://github.com/ue-too/ue-too/blob/79a36cf61d861e6b4e3302e81111636c6082a3db/packages/board/src/camera/camera-mux/animation-and-lock/rotation-control-state-machine.ts#L360)

#### 回傳

`RotationLockedOnObjectState`

#### 覆寫了

`TemplateState< RotateEventPayloadMapping, BaseContext, RotateControlStates, RotateControlOutputMapping >.constructor`

## 屬性

### \_defer

> `protected` **\_defer**: `Defer`\<`BaseContext`, [`RotateEventPayloadMapping`](../type-aliases/RotateEventPayloadMapping.md), [`RotateControlStates`](../type-aliases/RotateControlStates.md), [`RotateControlOutputMapping`](../type-aliases/RotateControlOutputMapping.md)\> \| `undefined`

定義於: packages/being/dist/interface.d.ts:493

#### 繼承自

`TemplateState._defer`

***

### \_delay

> `protected` **\_delay**: `Delay`\<`BaseContext`, [`RotateEventPayloadMapping`](../type-aliases/RotateEventPayloadMapping.md), [`RotateControlStates`](../type-aliases/RotateControlStates.md), [`RotateControlOutputMapping`](../type-aliases/RotateControlOutputMapping.md)\> \| `undefined`

定義於: packages/being/dist/interface.d.ts:492

#### 繼承自

`TemplateState._delay`

***

### \_eventGuards

> `protected` **\_eventGuards**: `Partial`\<`EventGuards`\<`EventPayloadMapping`, `States`, `Context`, `Guard`\<`Context`\>\>\>

定義於: packages/being/dist/interface.d.ts:491

#### 繼承自

`TemplateState._eventGuards`

***

### \_eventReactions

> `protected` **\_eventReactions**: `EventReactions`\<[`RotateEventPayloadMapping`](../type-aliases/RotateEventPayloadMapping.md), `BaseContext`, [`RotateControlStates`](../type-aliases/RotateControlStates.md), [`RotateControlOutputMapping`](../type-aliases/RotateControlOutputMapping.md)\>

定義於: [packages/board/src/camera/camera-mux/animation-and-lock/rotation-control-state-machine.ts:364](https://github.com/ue-too/ue-too/blob/79a36cf61d861e6b4e3302e81111636c6082a3db/packages/board/src/camera/camera-mux/animation-and-lock/rotation-control-state-machine.ts#L364)

#### 覆寫了

`TemplateState._eventReactions`

***

### \_guards

> `protected` **\_guards**: `Guard`\<`Context`\>

定義於: packages/being/dist/interface.d.ts:490

#### 繼承自

`TemplateState._guards`

## 存取器

### delay

#### Getter 簽章

> **get** **delay**(): `Delay`\<`Context`, `EventPayloadMapping`, `States`, `EventOutputMapping`\> \| `undefined`

定義於: packages/being/dist/interface.d.ts:498

##### 回傳

`Delay`\<`Context`, `EventPayloadMapping`, `States`, `EventOutputMapping`\> \| `undefined`

#### 繼承自

`TemplateState.delay`

***

### eventGuards

#### Getter 簽章

> **get** **eventGuards**(): `Partial`\<`EventGuards`\<`EventPayloadMapping`, `States`, `Context`, `Guard`\<`Context`\>\>\>

定義於: packages/being/dist/interface.d.ts:496

##### 回傳

`Partial`\<`EventGuards`\<`EventPayloadMapping`, `States`, `Context`, `Guard`\<`Context`\>\>\>

#### 繼承自

`TemplateState.eventGuards`

***

### eventReactions

#### Getter 簽章

> **get** **eventReactions**(): `EventReactions`\<`EventPayloadMapping`, `Context`, `States`, `EventOutputMapping`\>

定義於: packages/being/dist/interface.d.ts:497

##### 回傳

`EventReactions`\<`EventPayloadMapping`, `Context`, `States`, `EventOutputMapping`\>

#### 繼承自

`TemplateState.eventReactions`

***

### guards

#### Getter 簽章

> **get** **guards**(): `Guard`\<`Context`\>

定義於: packages/being/dist/interface.d.ts:495

##### 回傳

`Guard`\<`Context`\>

#### 繼承自

`TemplateState.guards`

***

### handlingEvents

#### Getter 簽章

> **get** **handlingEvents**(): keyof `EventPayloadMapping`[]

定義於: packages/being/dist/interface.d.ts:494

##### 回傳

keyof `EventPayloadMapping`[]

#### 繼承自

`TemplateState.handlingEvents`

## 方法

### beforeExit()

> **beforeExit**(`context`, `stateMachine`, `to`): `void`

定義於: packages/being/dist/interface.d.ts:500

#### 參數

##### context

`BaseContext`

##### stateMachine

`StateMachine`\<[`RotateEventPayloadMapping`](../type-aliases/RotateEventPayloadMapping.md), `BaseContext`, [`RotateControlStates`](../type-aliases/RotateControlStates.md), [`RotateControlOutputMapping`](../type-aliases/RotateControlOutputMapping.md)\>

##### to

[`RotateControlStates`](../type-aliases/RotateControlStates.md) | `"TERMINAL"`

#### 回傳

`void`

#### 繼承自

`TemplateState.beforeExit`

***

### handles()

> **handles**\<`K`\>(`args`, `context`, `stateMachine`): `EventResult`\<[`RotateControlStates`](../type-aliases/RotateControlStates.md), `K` *extends* keyof [`RotateControlOutputMapping`](../type-aliases/RotateControlOutputMapping.md) ? [`RotateControlOutputMapping`](../type-aliases/RotateControlOutputMapping.md)\[`K`\<`K`\>\] : `void`\>

定義於: packages/being/dist/interface.d.ts:501

#### 型別參數

##### K

`K` *extends* `string`

#### 參數

##### args

`EventArgs`\<[`RotateEventPayloadMapping`](../type-aliases/RotateEventPayloadMapping.md), `K`\>

##### context

`BaseContext`

##### stateMachine

`StateMachine`\<[`RotateEventPayloadMapping`](../type-aliases/RotateEventPayloadMapping.md), `BaseContext`, [`RotateControlStates`](../type-aliases/RotateControlStates.md), [`RotateControlOutputMapping`](../type-aliases/RotateControlOutputMapping.md)\>

#### 回傳

`EventResult`\<[`RotateControlStates`](../type-aliases/RotateControlStates.md), `K` *extends* keyof [`RotateControlOutputMapping`](../type-aliases/RotateControlOutputMapping.md) ? [`RotateControlOutputMapping`](../type-aliases/RotateControlOutputMapping.md)\[`K`\<`K`\>\] : `void`\>

#### 繼承自

`TemplateState.handles`

***

### lockedOnObjectRotateByInputHandler()

> **lockedOnObjectRotateByInputHandler**(`context`, `payload`): [`RotateControlOutputEvent`](../type-aliases/RotateControlOutputEvent.md)

定義於: [packages/board/src/camera/camera-mux/animation-and-lock/rotation-control-state-machine.ts:381](https://github.com/ue-too/ue-too/blob/79a36cf61d861e6b4e3302e81111636c6082a3db/packages/board/src/camera/camera-mux/animation-and-lock/rotation-control-state-machine.ts#L381)

#### 參數

##### context

`BaseContext`

##### payload

[`RotateByInputEventPayload`](../type-aliases/RotateByInputEventPayload.md)

#### 回傳

[`RotateControlOutputEvent`](../type-aliases/RotateControlOutputEvent.md)

***

### lockedOnObjectRotateToInputHandler()

> **lockedOnObjectRotateToInputHandler**(`context`, `payload`): [`RotateControlOutputEvent`](../type-aliases/RotateControlOutputEvent.md)

定義於: [packages/board/src/camera/camera-mux/animation-and-lock/rotation-control-state-machine.ts:388](https://github.com/ue-too/ue-too/blob/79a36cf61d861e6b4e3302e81111636c6082a3db/packages/board/src/camera/camera-mux/animation-and-lock/rotation-control-state-machine.ts#L388)

#### 參數

##### context

`BaseContext`

##### payload

[`RotateToInputEventPayload`](../type-aliases/RotateToInputEventPayload.md)

#### 回傳

[`RotateControlOutputEvent`](../type-aliases/RotateControlOutputEvent.md)

***

### uponEnter()

> **uponEnter**(`context`, `stateMachine`, `from`): `void`

定義於: packages/being/dist/interface.d.ts:499

#### 參數

##### context

`BaseContext`

##### stateMachine

`StateMachine`\<[`RotateEventPayloadMapping`](../type-aliases/RotateEventPayloadMapping.md), `BaseContext`, [`RotateControlStates`](../type-aliases/RotateControlStates.md), [`RotateControlOutputMapping`](../type-aliases/RotateControlOutputMapping.md)\>

##### from

[`RotateControlStates`](../type-aliases/RotateControlStates.md) | `"INITIAL"`

#### 回傳

`void`

#### 繼承自

`TemplateState.uponEnter`
