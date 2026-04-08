[@ue-too/being](../../modules.md) / [index](../index.md) / TemplateStateMachine

# 類別: TemplateStateMachine\<EventPayloadMapping, Context, States, EventOutputMapping\>

定義於: [interface.ts:561](https://github.com/ue-too/ue-too/blob/feb7c80222df5d3cd97bfa1933bafe3190c6e48d/packages/being/src/interface.ts#L561)

Concrete implementation of a finite state machine.

## 備註

This class provides a complete, ready-to-use state machine implementation. It's generic enough
to handle most use cases without requiring custom extensions.

## Features

- **Type-safe events**: Events and their payloads are fully typed via the EventPayloadMapping
- **State transitions**: Automatic state transitions based on event handlers
- **Event outputs**: Handlers can return values that are included in the result
- **Lifecycle hooks**: States can define `uponEnter` and `beforeExit` callbacks
- **State change listeners**: Subscribe to state transitions
- **Shared context**: All states access the same context object for persistent data

## Usage Pattern

1. Define your event payload mapping type
2. Define your states as a string union type
3. Create state classes extending [TemplateState](TemplateState.md)
4. Instantiate TemplateStateMachine with your states and initial state

## 範例

Basic vending machine state machine
```typescript
type Events = {
  insertCoin: { amount: number };
  selectItem: { itemId: string };
  cancel: {};
};

type States = "IDLE" | "PAYMENT" | "DISPENSING";

interface VendingContext extends BaseContext {
  balance: number;
  setup() { this.balance = 0; }
  cleanup() {}
}

const context: VendingContext = {
  balance: 0,
  setup() { this.balance = 0; },
  cleanup() {}
};

const machine = new TemplateStateMachine<Events, VendingContext, States>(
  {
    IDLE: new IdleState(),
    PAYMENT: new PaymentState(),
    DISPENSING: new DispensingState()
  },
  "IDLE",
  context
);

// Trigger events
machine.happens("insertCoin", { amount: 100 });
machine.happens("selectItem", { itemId: "A1" });
```

## 參閱

 - [TemplateState](TemplateState.md) for creating state implementations
 - [StateMachine](../interfaces/StateMachine.md) for the interface definition

## Extended by

- [`HierarchicalStateMachine`](HierarchicalStateMachine.md)

## 型別參數

### EventPayloadMapping

`EventPayloadMapping`

Object mapping event names to their payload types

### Context

`Context` *extends* [`BaseContext`](../interfaces/BaseContext.md)

Context type shared across all states

### States

`States` *extends* `string` = `"IDLE"`

Union of all possible state names (string literals)

### EventOutputMapping

`EventOutputMapping` *extends* `Partial`\<`Record`\<keyof `EventPayloadMapping`, `unknown`\>\> = [`DefaultOutputMapping`](../type-aliases/DefaultOutputMapping.md)\<`EventPayloadMapping`\>

Optional mapping of events to their output types

## 實作

- [`StateMachine`](../interfaces/StateMachine.md)\<`EventPayloadMapping`, `Context`, `States`, `EventOutputMapping`\>

## 建構函式

### 建構函式

> **new TemplateStateMachine**\<`EventPayloadMapping`, `Context`, `States`, `EventOutputMapping`\>(`states`, `initialState`, `context`, `autoStart`): `TemplateStateMachine`\<`EventPayloadMapping`, `Context`, `States`, `EventOutputMapping`\>

定義於: [interface.ts:592](https://github.com/ue-too/ue-too/blob/feb7c80222df5d3cd97bfa1933bafe3190c6e48d/packages/being/src/interface.ts#L592)

#### 參數

##### states

`Record`\<`States`, [`State`](../interfaces/State.md)\<`EventPayloadMapping`, `Context`, `States`, `EventOutputMapping`\>\>

##### initialState

`States`

##### context

`Context`

##### autoStart

`boolean` = `true`

#### 回傳

`TemplateStateMachine`\<`EventPayloadMapping`, `Context`, `States`, `EventOutputMapping`\>

## 屬性

### \_context

> `protected` **\_context**: `Context`

定義於: [interface.ts:579](https://github.com/ue-too/ue-too/blob/feb7c80222df5d3cd97bfa1933bafe3190c6e48d/packages/being/src/interface.ts#L579)

***

### \_currentState

> `protected` **\_currentState**: `"INITIAL"` \| `"TERMINAL"` \| `States`

定義於: [interface.ts:574](https://github.com/ue-too/ue-too/blob/feb7c80222df5d3cd97bfa1933bafe3190c6e48d/packages/being/src/interface.ts#L574)

***

### \_happensCallbacks

> `protected` **\_happensCallbacks**: (`args`, `context`) => `void`[]

定義於: [interface.ts:582](https://github.com/ue-too/ue-too/blob/feb7c80222df5d3cd97bfa1933bafe3190c6e48d/packages/being/src/interface.ts#L582)

#### 參數

##### args

[`EventArgs`](../type-aliases/EventArgs.md)\<`EventPayloadMapping`, `string`\> | [`EventArgs`](../type-aliases/EventArgs.md)\<`EventPayloadMapping`, keyof `EventPayloadMapping`\>

##### context

`Context`

#### 回傳

`void`

***

### \_initialState

> `protected` **\_initialState**: `States`

定義於: [interface.ts:590](https://github.com/ue-too/ue-too/blob/feb7c80222df5d3cd97bfa1933bafe3190c6e48d/packages/being/src/interface.ts#L590)

***

### \_stateChangeCallbacks

> `protected` **\_stateChangeCallbacks**: [`StateChangeCallback`](../type-aliases/StateChangeCallback.md)\<`States`\>[]

定義於: [interface.ts:581](https://github.com/ue-too/ue-too/blob/feb7c80222df5d3cd97bfa1933bafe3190c6e48d/packages/being/src/interface.ts#L581)

***

### \_states

> `protected` **\_states**: `Record`\<`States`, [`State`](../interfaces/State.md)\<`EventPayloadMapping`, `Context`, `States`, `EventOutputMapping`\>\>

定義於: [interface.ts:575](https://github.com/ue-too/ue-too/blob/feb7c80222df5d3cd97bfa1933bafe3190c6e48d/packages/being/src/interface.ts#L575)

***

### \_statesArray

> `protected` **\_statesArray**: `States`[]

定義於: [interface.ts:580](https://github.com/ue-too/ue-too/blob/feb7c80222df5d3cd97bfa1933bafe3190c6e48d/packages/being/src/interface.ts#L580)

***

### \_timeouts

> `protected` **\_timeouts**: `number` \| `undefined` = `undefined`

定義於: [interface.ts:589](https://github.com/ue-too/ue-too/blob/feb7c80222df5d3cd97bfa1933bafe3190c6e48d/packages/being/src/interface.ts#L589)

## 存取器

### currentState

#### Getter 簽章

> **get** **currentState**(): `"INITIAL"` \| `"TERMINAL"` \| `States`

定義於: [interface.ts:723](https://github.com/ue-too/ue-too/blob/feb7c80222df5d3cd97bfa1933bafe3190c6e48d/packages/being/src/interface.ts#L723)

##### 回傳

`"INITIAL"` \| `"TERMINAL"` \| `States`

#### 實作了

[`StateMachine`](../interfaces/StateMachine.md).[`currentState`](../interfaces/StateMachine.md#currentstate)

***

### possibleStates

#### Getter 簽章

> **get** **possibleStates**(): `States`[]

定義於: [interface.ts:731](https://github.com/ue-too/ue-too/blob/feb7c80222df5d3cd97bfa1933bafe3190c6e48d/packages/being/src/interface.ts#L731)

##### 回傳

`States`[]

#### 實作了

[`StateMachine`](../interfaces/StateMachine.md).[`possibleStates`](../interfaces/StateMachine.md#possiblestates)

***

### states

#### Getter 簽章

> **get** **states**(): `Record`\<`States`, [`State`](../interfaces/State.md)\<`EventPayloadMapping`, `Context`, `States`, `EventOutputMapping`\>\>

定義於: [interface.ts:735](https://github.com/ue-too/ue-too/blob/feb7c80222df5d3cd97bfa1933bafe3190c6e48d/packages/being/src/interface.ts#L735)

##### 回傳

`Record`\<`States`, [`State`](../interfaces/State.md)\<`EventPayloadMapping`, `Context`, `States`, `EventOutputMapping`\>\>

#### 實作了

[`StateMachine`](../interfaces/StateMachine.md).[`states`](../interfaces/StateMachine.md#states-1)

## 方法

### happens()

#### 呼叫簽章

> **happens**\<`K`\>(...`args`): [`EventResult`](../type-aliases/EventResult.md)\<`States`, `K` *extends* keyof `EventOutputMapping` ? `EventOutputMapping`\[`K`\<`K`\>\] : `void`\>

定義於: [interface.ts:653](https://github.com/ue-too/ue-too/blob/feb7c80222df5d3cd97bfa1933bafe3190c6e48d/packages/being/src/interface.ts#L653)

##### 型別參數

###### K

`K` *extends* `string` \| `number` \| `symbol`

##### 參數

###### args

...[`EventArgs`](../type-aliases/EventArgs.md)\<`EventPayloadMapping`, `K`\>

##### 回傳

[`EventResult`](../type-aliases/EventResult.md)\<`States`, `K` *extends* keyof `EventOutputMapping` ? `EventOutputMapping`\[`K`\<`K`\>\] : `void`\>

##### 實作了

[`StateMachine`](../interfaces/StateMachine.md).[`happens`](../interfaces/StateMachine.md#happens)

#### 呼叫簽章

> **happens**\<`K`\>(...`args`): [`EventResult`](../type-aliases/EventResult.md)\<`States`, `unknown`\>

定義於: [interface.ts:659](https://github.com/ue-too/ue-too/blob/feb7c80222df5d3cd97bfa1933bafe3190c6e48d/packages/being/src/interface.ts#L659)

##### 型別參數

###### K

`K` *extends* `string`

##### 參數

###### args

...[`EventArgs`](../type-aliases/EventArgs.md)\<`EventPayloadMapping`, `K`\>

##### 回傳

[`EventResult`](../type-aliases/EventResult.md)\<`States`, `unknown`\>

##### 實作了

[`StateMachine`](../interfaces/StateMachine.md).[`happens`](../interfaces/StateMachine.md#happens)

***

### onHappens()

> **onHappens**(`callback`): `void`

定義於: [interface.ts:711](https://github.com/ue-too/ue-too/blob/feb7c80222df5d3cd97bfa1933bafe3190c6e48d/packages/being/src/interface.ts#L711)

#### 參數

##### callback

(`args`, `context`) => `void`

#### 回傳

`void`

#### 實作了

[`StateMachine`](../interfaces/StateMachine.md).[`onHappens`](../interfaces/StateMachine.md#onhappens)

***

### onStateChange()

> **onStateChange**(`callback`): `void`

定義於: [interface.ts:707](https://github.com/ue-too/ue-too/blob/feb7c80222df5d3cd97bfa1933bafe3190c6e48d/packages/being/src/interface.ts#L707)

#### 參數

##### callback

[`StateChangeCallback`](../type-aliases/StateChangeCallback.md)\<`States`\>

#### 回傳

`void`

#### 實作了

[`StateMachine`](../interfaces/StateMachine.md).[`onStateChange`](../interfaces/StateMachine.md#onstatechange)

***

### reset()

> **reset**(): `void`

定義於: [interface.ts:613](https://github.com/ue-too/ue-too/blob/feb7c80222df5d3cd97bfa1933bafe3190c6e48d/packages/being/src/interface.ts#L613)

#### 回傳

`void`

#### 實作了

[`StateMachine`](../interfaces/StateMachine.md).[`reset`](../interfaces/StateMachine.md#reset)

***

### setContext()

> **setContext**(`context`): `void`

定義於: [interface.ts:727](https://github.com/ue-too/ue-too/blob/feb7c80222df5d3cd97bfa1933bafe3190c6e48d/packages/being/src/interface.ts#L727)

#### 參數

##### context

`Context`

#### 回傳

`void`

#### 實作了

[`StateMachine`](../interfaces/StateMachine.md).[`setContext`](../interfaces/StateMachine.md#setcontext)

***

### start()

> **start**(): `void`

定義於: [interface.ts:619](https://github.com/ue-too/ue-too/blob/feb7c80222df5d3cd97bfa1933bafe3190c6e48d/packages/being/src/interface.ts#L619)

#### 回傳

`void`

#### 實作了

[`StateMachine`](../interfaces/StateMachine.md).[`start`](../interfaces/StateMachine.md#start)

***

### switchTo()

> **switchTo**(`state`): `void`

定義於: [interface.ts:648](https://github.com/ue-too/ue-too/blob/feb7c80222df5d3cd97bfa1933bafe3190c6e48d/packages/being/src/interface.ts#L648)

#### 參數

##### state

`"INITIAL"` | `"TERMINAL"` | `States`

#### 回傳

`void`

#### 實作了

[`StateMachine`](../interfaces/StateMachine.md).[`switchTo`](../interfaces/StateMachine.md#switchto)

***

### wrapup()

> **wrapup**(): `void`

定義於: [interface.ts:632](https://github.com/ue-too/ue-too/blob/feb7c80222df5d3cd97bfa1933bafe3190c6e48d/packages/being/src/interface.ts#L632)

#### 回傳

`void`

#### 實作了

[`StateMachine`](../interfaces/StateMachine.md).[`wrapup`](../interfaces/StateMachine.md#wrapup)
