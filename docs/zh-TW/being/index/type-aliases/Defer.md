[@ue-too/being](../../modules.md) / [index](../index.md) / Defer

# 型別別名: Defer\<Context, EventPayloadMapping, States, EventOutputMapping\>

> **Defer**\<`Context`, `EventPayloadMapping`, `States`, `EventOutputMapping`\> = `object`

定義於: [interface.ts:173](https://github.com/ue-too/ue-too/blob/68da915137a31a45d7ce8043b13275ff7283045d/packages/being/src/interface.ts#L173)

## 型別參數

### Context

`Context` *extends* [`BaseContext`](../interfaces/BaseContext.md)

### EventPayloadMapping

`EventPayloadMapping`

### States

`States` *extends* `string`

### EventOutputMapping

`EventOutputMapping` *extends* `Partial`\<`Record`\<keyof `EventPayloadMapping`, `unknown`\>\> = [`DefaultOutputMapping`](DefaultOutputMapping.md)\<`EventPayloadMapping`\>

## 屬性

### action()

> **action**: (`context`, `event`, `eventKey`, `stateMachine`) => [`EventResult`](EventResult.md)\<`States`, `any`\>

定義於: [interface.ts:181](https://github.com/ue-too/ue-too/blob/68da915137a31a45d7ce8043b13275ff7283045d/packages/being/src/interface.ts#L181)

#### 參數

##### context

`Context`

##### event

`EventPayloadMapping`\[keyof `EventPayloadMapping`\]

##### eventKey

keyof `EventPayloadMapping`

##### stateMachine

[`StateMachine`](../interfaces/StateMachine.md)\<`EventPayloadMapping`, `Context`, `States`, `EventOutputMapping`\>

#### 回傳

[`EventResult`](EventResult.md)\<`States`, `any`\>

***

### defaultTargetState?

> `optional` **defaultTargetState**: `States`

定義於: [interface.ts:192](https://github.com/ue-too/ue-too/blob/68da915137a31a45d7ce8043b13275ff7283045d/packages/being/src/interface.ts#L192)
