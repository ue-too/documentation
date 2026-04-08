[@ue-too/board](../../modules.md) / [index](../index.md) / AcceptingUserInputState

# クラス: AcceptingUserInputState

定義: [packages/board/src/camera/camera-mux/animation-and-lock/pan-control-state-machine.ts:196](https://github.com/ue-too/ue-too/blob/7d57cce875ed7b8a4f4ee4e325a18e34159928f6/packages/board/src/camera/camera-mux/animation-and-lock/pan-control-state-machine.ts#L196)

State implementation for accepting user pan input (idle/normal state).
Accepts user pan input and can transition to animation or locked states.

## 拡張

- `TemplateState`\<[`PanEventPayloadMapping`](../type-aliases/PanEventPayloadMapping.md), `BaseContext`, [`PanControlStates`](../type-aliases/PanControlStates.md), [`PanControlOutputMapping`](../type-aliases/PanControlOutputMapping.md)\>

## コンストラクター

### コンストラクター

> **new AcceptingUserInputState**(): `AcceptingUserInputState`

定義: [packages/board/src/camera/camera-mux/animation-and-lock/pan-control-state-machine.ts:202](https://github.com/ue-too/ue-too/blob/7d57cce875ed7b8a4f4ee4e325a18e34159928f6/packages/board/src/camera/camera-mux/animation-and-lock/pan-control-state-machine.ts#L202)

#### 戻り値

`AcceptingUserInputState`

#### 上書き

`TemplateState< PanEventPayloadMapping, BaseContext, PanControlStates, PanControlOutputMapping >.constructor`

## プロパティ

### \_defer

> `protected` **\_defer**: `Defer`\<`BaseContext`, [`PanEventPayloadMapping`](../type-aliases/PanEventPayloadMapping.md), [`PanControlStates`](../type-aliases/PanControlStates.md), [`PanControlOutputMapping`](../type-aliases/PanControlOutputMapping.md)\> \| `undefined`

定義: packages/being/dist/interface.d.ts:493

#### 継承元

`TemplateState._defer`

***

### \_delay

> `protected` **\_delay**: `Delay`\<`BaseContext`, [`PanEventPayloadMapping`](../type-aliases/PanEventPayloadMapping.md), [`PanControlStates`](../type-aliases/PanControlStates.md), [`PanControlOutputMapping`](../type-aliases/PanControlOutputMapping.md)\> \| `undefined`

定義: packages/being/dist/interface.d.ts:492

#### 継承元

`TemplateState._delay`

***

### \_eventGuards

> `protected` **\_eventGuards**: `Partial`\<`EventGuards`\<`EventPayloadMapping`, `States`, `Context`, `Guard`\<`Context`\>\>\>

定義: packages/being/dist/interface.d.ts:491

#### 継承元

`TemplateState._eventGuards`

***

### \_eventReactions

> `protected` **\_eventReactions**: `EventReactions`\<[`PanEventPayloadMapping`](../type-aliases/PanEventPayloadMapping.md), `BaseContext`, [`PanControlStates`](../type-aliases/PanControlStates.md), [`PanControlOutputMapping`](../type-aliases/PanControlOutputMapping.md)\>

定義: [packages/board/src/camera/camera-mux/animation-and-lock/pan-control-state-machine.ts:206](https://github.com/ue-too/ue-too/blob/7d57cce875ed7b8a4f4ee4e325a18e34159928f6/packages/board/src/camera/camera-mux/animation-and-lock/pan-control-state-machine.ts#L206)

#### 上書き

`TemplateState._eventReactions`

***

### \_guards

> `protected` **\_guards**: `Guard`\<`Context`\>

定義: packages/being/dist/interface.d.ts:490

#### 継承元

`TemplateState._guards`

## アクセッサー

### delay

#### 署名を取得する

> **get** **delay**(): `Delay`\<`Context`, `EventPayloadMapping`, `States`, `EventOutputMapping`\> \| `undefined`

定義: packages/being/dist/interface.d.ts:498

##### 戻り値

`Delay`\<`Context`, `EventPayloadMapping`, `States`, `EventOutputMapping`\> \| `undefined`

#### 継承元

`TemplateState.delay`

***

### eventGuards

#### 署名を取得する

> **get** **eventGuards**(): `Partial`\<`EventGuards`\<`EventPayloadMapping`, `States`, `Context`, `Guard`\<`Context`\>\>\>

定義: packages/being/dist/interface.d.ts:496

##### 戻り値

`Partial`\<`EventGuards`\<`EventPayloadMapping`, `States`, `Context`, `Guard`\<`Context`\>\>\>

#### 継承元

`TemplateState.eventGuards`

***

### eventReactions

#### 署名を取得する

> **get** **eventReactions**(): `EventReactions`\<`EventPayloadMapping`, `Context`, `States`, `EventOutputMapping`\>

定義: packages/being/dist/interface.d.ts:497

##### 戻り値

`EventReactions`\<`EventPayloadMapping`, `Context`, `States`, `EventOutputMapping`\>

#### 継承元

`TemplateState.eventReactions`

***

### guards

#### 署名を取得する

> **get** **guards**(): `Guard`\<`Context`\>

定義: packages/being/dist/interface.d.ts:495

##### 戻り値

`Guard`\<`Context`\>

#### 継承元

`TemplateState.guards`

***

### handlingEvents

#### 署名を取得する

> **get** **handlingEvents**(): keyof `EventPayloadMapping`[]

定義: packages/being/dist/interface.d.ts:494

##### 戻り値

keyof `EventPayloadMapping`[]

#### 継承元

`TemplateState.handlingEvents`

## メソッド

### beforeExit()

> **beforeExit**(`context`, `stateMachine`, `to`): `void`

定義: packages/being/dist/interface.d.ts:500

#### パラメータ

##### context

`BaseContext`

##### stateMachine

`StateMachine`\<[`PanEventPayloadMapping`](../type-aliases/PanEventPayloadMapping.md), `BaseContext`, [`PanControlStates`](../type-aliases/PanControlStates.md), [`PanControlOutputMapping`](../type-aliases/PanControlOutputMapping.md)\>

##### to

[`PanControlStates`](../type-aliases/PanControlStates.md) | `"TERMINAL"`

#### 戻り値

`void`

#### 継承元

`TemplateState.beforeExit`

***

### handles()

> **handles**\<`K`\>(`args`, `context`, `stateMachine`): `EventResult`\<[`PanControlStates`](../type-aliases/PanControlStates.md), `K` *extends* keyof [`PanControlOutputMapping`](../type-aliases/PanControlOutputMapping.md) ? [`PanControlOutputMapping`](../type-aliases/PanControlOutputMapping.md)\[`K`\<`K`\>\] : `void`\>

定義: packages/being/dist/interface.d.ts:501

#### 型パラメーター

##### K

`K` *extends* `string`

#### パラメータ

##### args

`EventArgs`\<[`PanEventPayloadMapping`](../type-aliases/PanEventPayloadMapping.md), `K`\>

##### context

`BaseContext`

##### stateMachine

`StateMachine`\<[`PanEventPayloadMapping`](../type-aliases/PanEventPayloadMapping.md), `BaseContext`, [`PanControlStates`](../type-aliases/PanControlStates.md), [`PanControlOutputMapping`](../type-aliases/PanControlOutputMapping.md)\>

#### 戻り値

`EventResult`\<[`PanControlStates`](../type-aliases/PanControlStates.md), `K` *extends* keyof [`PanControlOutputMapping`](../type-aliases/PanControlOutputMapping.md) ? [`PanControlOutputMapping`](../type-aliases/PanControlOutputMapping.md)\[`K`\<`K`\>\] : `void`\>

#### 継承元

`TemplateState.handles`

***

### lockedOnObjectPanByInputHandler()

> **lockedOnObjectPanByInputHandler**(`context`, `payload`): [`PanControlOutputEvent`](../type-aliases/PanControlOutputEvent.md)

定義: [packages/board/src/camera/camera-mux/animation-and-lock/pan-control-state-machine.ts:245](https://github.com/ue-too/ue-too/blob/7d57cce875ed7b8a4f4ee4e325a18e34159928f6/packages/board/src/camera/camera-mux/animation-and-lock/pan-control-state-machine.ts#L245)

#### パラメータ

##### context

`BaseContext`

##### payload

[`PanByInputEventPayload`](../type-aliases/PanByInputEventPayload.md)

#### 戻り値

[`PanControlOutputEvent`](../type-aliases/PanControlOutputEvent.md)

***

### lockedOnObjectPanToInputHandler()

> **lockedOnObjectPanToInputHandler**(`context`, `payload`): [`PanControlOutputEvent`](../type-aliases/PanControlOutputEvent.md)

定義: [packages/board/src/camera/camera-mux/animation-and-lock/pan-control-state-machine.ts:252](https://github.com/ue-too/ue-too/blob/7d57cce875ed7b8a4f4ee4e325a18e34159928f6/packages/board/src/camera/camera-mux/animation-and-lock/pan-control-state-machine.ts#L252)

#### パラメータ

##### context

`BaseContext`

##### payload

[`PanToInputEventPayload`](../type-aliases/PanToInputEventPayload.md)

#### 戻り値

[`PanControlOutputEvent`](../type-aliases/PanControlOutputEvent.md)

***

### uponEnter()

> **uponEnter**(`context`, `stateMachine`, `from`): `void`

定義: packages/being/dist/interface.d.ts:499

#### パラメータ

##### context

`BaseContext`

##### stateMachine

`StateMachine`\<[`PanEventPayloadMapping`](../type-aliases/PanEventPayloadMapping.md), `BaseContext`, [`PanControlStates`](../type-aliases/PanControlStates.md), [`PanControlOutputMapping`](../type-aliases/PanControlOutputMapping.md)\>

##### from

[`PanControlStates`](../type-aliases/PanControlStates.md) | `"INITIAL"`

#### 戻り値

`void`

#### 継承元

`TemplateState.uponEnter`

***

### userPanByInputHandler()

> **userPanByInputHandler**(`context`, `payload`): [`PanControlOutputEvent`](../type-aliases/PanControlOutputEvent.md)

定義: [packages/board/src/camera/camera-mux/animation-and-lock/pan-control-state-machine.ts:231](https://github.com/ue-too/ue-too/blob/7d57cce875ed7b8a4f4ee4e325a18e34159928f6/packages/board/src/camera/camera-mux/animation-and-lock/pan-control-state-machine.ts#L231)

#### パラメータ

##### context

`BaseContext`

##### payload

[`PanByInputEventPayload`](../type-aliases/PanByInputEventPayload.md)

#### 戻り値

[`PanControlOutputEvent`](../type-aliases/PanControlOutputEvent.md)

***

### userPanToInputHandler()

> **userPanToInputHandler**(`context`, `payload`): [`PanControlOutputEvent`](../type-aliases/PanControlOutputEvent.md)

定義: [packages/board/src/camera/camera-mux/animation-and-lock/pan-control-state-machine.ts:238](https://github.com/ue-too/ue-too/blob/7d57cce875ed7b8a4f4ee4e325a18e34159928f6/packages/board/src/camera/camera-mux/animation-and-lock/pan-control-state-machine.ts#L238)

#### パラメータ

##### context

`BaseContext`

##### payload

[`PanToInputEventPayload`](../type-aliases/PanToInputEventPayload.md)

#### 戻り値

[`PanControlOutputEvent`](../type-aliases/PanControlOutputEvent.md)
