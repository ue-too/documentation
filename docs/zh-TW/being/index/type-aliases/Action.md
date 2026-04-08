[@ue-too/being](../../modules.md) / [index](../index.md) / Action

# 型別別名: Action\<Context, EventPayloadMapping, States, EventOutputMapping, Output\>

> **Action**\<`Context`, `EventPayloadMapping`, `States`, `EventOutputMapping`, `Output`\> = `object`

定義於: [interface.ts:409](https://github.com/ue-too/ue-too/blob/7d57cce875ed7b8a4f4ee4e325a18e34159928f6/packages/being/src/interface.ts#L409)

## 型別參數

### Context

`Context` *extends* [`BaseContext`](../interfaces/BaseContext.md)

### EventPayloadMapping

`EventPayloadMapping`

### States

`States` *extends* `string`

### EventOutputMapping

`EventOutputMapping` *extends* `Partial`\<`Record`\<keyof `EventPayloadMapping`, `unknown`\>\> = [`DefaultOutputMapping`](DefaultOutputMapping.md)\<`EventPayloadMapping`\>

### Output

`Output` = `void`

## 屬性

### action()

> **action**: (`context`, `event`, `stateMachine`) => `Output` \| `void`

定義於: [interface.ts:418](https://github.com/ue-too/ue-too/blob/7d57cce875ed7b8a4f4ee4e325a18e34159928f6/packages/being/src/interface.ts#L418)

#### 參數

##### context

`Context`

##### event

`EventPayloadMapping`\[keyof `EventPayloadMapping`\]

##### stateMachine

[`StateMachine`](../interfaces/StateMachine.md)\<`EventPayloadMapping`, `Context`, `States`, `EventOutputMapping`\>

#### 回傳

`Output` \| `void`

***

### defaultTargetState?

> `optional` **defaultTargetState**: `States`

定義於: [interface.ts:428](https://github.com/ue-too/ue-too/blob/7d57cce875ed7b8a4f4ee4e325a18e34159928f6/packages/being/src/interface.ts#L428)
