[@ue-too/being](../globals.md) / Action

# Type Alias: Action\<Context, EventPayloadMapping, States\>

> **Action**\<`Context`, `EventPayloadMapping`, `States`\> = `object`

Defined in: [interface.ts:150](https://github.com/ue-too/ue-too/blob/407e414f82d0bb1a2a3cfbf5160e331d5a81d8be/packages/being/src/interface.ts#L150)

## Type Parameters

### Context

`Context` *extends* [`BaseContext`](../interfaces/BaseContext.md)

### EventPayloadMapping

`EventPayloadMapping`

### States

`States` *extends* `string`

## Properties

### action()

> **action**: (`context`, `event`, `stateMachine`) => `void`

Defined in: [interface.ts:151](https://github.com/ue-too/ue-too/blob/407e414f82d0bb1a2a3cfbf5160e331d5a81d8be/packages/being/src/interface.ts#L151)

#### Parameters

##### context

`Context`

##### event

`EventPayloadMapping`\[keyof `EventPayloadMapping`\]

##### stateMachine

[`StateMachine`](../interfaces/StateMachine.md)\<`EventPayloadMapping`, `Context`, `States`\>

#### Returns

`void`

***

### defaultTargetState?

> `optional` **defaultTargetState**: `States`

Defined in: [interface.ts:152](https://github.com/ue-too/ue-too/blob/407e414f82d0bb1a2a3cfbf5160e331d5a81d8be/packages/being/src/interface.ts#L152)
