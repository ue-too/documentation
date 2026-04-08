[@ue-too/being](../../modules.md) / [index](../index.md) / TemplateState

# 抽象 類別: TemplateState\<EventPayloadMapping, Context, States, EventOutputMapping\>

定義於: [interface.ts:826](https://github.com/ue-too/ue-too/blob/7d57cce875ed7b8a4f4ee4e325a18e34159928f6/packages/being/src/interface.ts#L826)

Abstract base class for state machine states.

## 備註

This abstract class provides the foundation for implementing individual states in a state machine.
Each state defines how it responds to events through the `eventReactions` object.

## Key Concepts

- **Event Reactions**: Define handlers for events this state cares about. Unhandled events are ignored.
- **Guards**: Conditional logic that determines which state to transition to based on context
- **Lifecycle Hooks**: `uponEnter` and `beforeExit` callbacks for state transition side effects
- **Selective Handling**: Only define reactions for events relevant to this state

## Implementation Pattern

1. Extend this class for each state in your state machine
2. Implement the `eventReactions` property with handlers for relevant events
3. Optionally override `uponEnter` and `beforeExit` for lifecycle logic
4. Optionally define `guards` and `eventGuards` for conditional transitions

## Examples

Simple state implementation
```typescript
class IdleState extends TemplateState<MyEvents, MyContext, MyStates> {
  eventReactions = {
    start: {
      action: (context, event) => {
        console.log('Starting...');
        context.startTime = Date.now();
      },
      defaultTargetState: "ACTIVE"
    },
    reset: {
      action: (context, event) => {
        context.counter = 0;
      }
      // No state transition - stays in IDLE
    }
  };

  uponEnter(context, stateMachine, fromState) {
    console.log(`Entered IDLE from ${fromState}`);
  }
}
```

State with guards for conditional transitions
```typescript
class PaymentState extends TemplateState<Events, VendingContext, States> {
  guards = {
    hasEnoughMoney: (context) => context.balance >= context.itemPrice,
    needsChange: (context) => context.balance > context.itemPrice
  };

  eventReactions = {
    selectItem: {
      action: (context, event) => {
        context.selectedItem = event.itemId;
        context.itemPrice = getPrice(event.itemId);
      },
      defaultTargetState: "IDLE" // Fallback if no guard matches
    }
  };

  eventGuards = {
    selectItem: [
      { guard: 'hasEnoughMoney', target: 'DISPENSING' },
      // If hasEnoughMoney is false, uses defaultTargetState (IDLE)
    ]
  };
}
```

## 參閱

 - [TemplateStateMachine](TemplateStateMachine.md) for the state machine implementation
 - [EventReactions](../type-aliases/EventReactions.md) for defining event handlers

## Extended by

- [`CompositeState`](CompositeState.md)

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

- [`State`](../interfaces/State.md)\<`EventPayloadMapping`, `Context`, `States`, `EventOutputMapping`\>

## 建構函式

### 建構函式

> **new TemplateState**\<`EventPayloadMapping`, `Context`, `States`, `EventOutputMapping`\>(): `TemplateState`\<`EventPayloadMapping`, `Context`, `States`, `EventOutputMapping`\>

#### 回傳

`TemplateState`\<`EventPayloadMapping`, `Context`, `States`, `EventOutputMapping`\>

## 屬性

### \_defer

> `protected` **\_defer**: [`Defer`](../type-aliases/Defer.md)\<`Context`, `EventPayloadMapping`, `States`, `EventOutputMapping`\> \| `undefined` = `undefined`

定義於: [interface.ts:855](https://github.com/ue-too/ue-too/blob/7d57cce875ed7b8a4f4ee4e325a18e34159928f6/packages/being/src/interface.ts#L855)

***

### \_delay

> `protected` **\_delay**: [`Delay`](../type-aliases/Delay.md)\<`Context`, `EventPayloadMapping`, `States`, `EventOutputMapping`\> \| `undefined` = `undefined`

定義於: [interface.ts:851](https://github.com/ue-too/ue-too/blob/7d57cce875ed7b8a4f4ee4e325a18e34159928f6/packages/being/src/interface.ts#L851)

***

### \_eventGuards

> `protected` **\_eventGuards**: `Partial`\<[`EventGuards`](../type-aliases/EventGuards.md)\<`EventPayloadMapping`, `States`, `Context`, [`Guard`](../type-aliases/Guard.md)\<`Context`\>\>\>

定義於: [interface.ts:846](https://github.com/ue-too/ue-too/blob/7d57cce875ed7b8a4f4ee4e325a18e34159928f6/packages/being/src/interface.ts#L846)

***

### \_eventReactions

> `protected` **\_eventReactions**: [`EventReactions`](../type-aliases/EventReactions.md)\<`EventPayloadMapping`, `Context`, `States`, `EventOutputMapping`\>

定義於: [interface.ts:834](https://github.com/ue-too/ue-too/blob/7d57cce875ed7b8a4f4ee4e325a18e34159928f6/packages/being/src/interface.ts#L834)

***

### \_guards

> `protected` **\_guards**: [`Guard`](../type-aliases/Guard.md)\<`Context`\>

定義於: [interface.ts:845](https://github.com/ue-too/ue-too/blob/7d57cce875ed7b8a4f4ee4e325a18e34159928f6/packages/being/src/interface.ts#L845)

## 存取器

### delay

#### Getter 簽章

> **get** **delay**(): [`Delay`](../type-aliases/Delay.md)\<`Context`, `EventPayloadMapping`, `States`, `EventOutputMapping`\> \| `undefined`

定義於: [interface.ts:884](https://github.com/ue-too/ue-too/blob/7d57cce875ed7b8a4f4ee4e325a18e34159928f6/packages/being/src/interface.ts#L884)

##### 回傳

[`Delay`](../type-aliases/Delay.md)\<`Context`, `EventPayloadMapping`, `States`, `EventOutputMapping`\> \| `undefined`

#### 實作了

[`State`](../interfaces/State.md).[`delay`](../interfaces/State.md#delay)

***

### eventGuards

#### Getter 簽章

> **get** **eventGuards**(): `Partial`\<[`EventGuards`](../type-aliases/EventGuards.md)\<`EventPayloadMapping`, `States`, `Context`, [`Guard`](../type-aliases/Guard.md)\<`Context`\>\>\>

定義於: [interface.ts:869](https://github.com/ue-too/ue-too/blob/7d57cce875ed7b8a4f4ee4e325a18e34159928f6/packages/being/src/interface.ts#L869)

##### 回傳

`Partial`\<[`EventGuards`](../type-aliases/EventGuards.md)\<`EventPayloadMapping`, `States`, `Context`, [`Guard`](../type-aliases/Guard.md)\<`Context`\>\>\>

#### 實作了

[`State`](../interfaces/State.md).[`eventGuards`](../interfaces/State.md#eventguards)

***

### eventReactions

#### Getter 簽章

> **get** **eventReactions**(): [`EventReactions`](../type-aliases/EventReactions.md)\<`EventPayloadMapping`, `Context`, `States`, `EventOutputMapping`\>

定義於: [interface.ts:875](https://github.com/ue-too/ue-too/blob/7d57cce875ed7b8a4f4ee4e325a18e34159928f6/packages/being/src/interface.ts#L875)

##### 回傳

[`EventReactions`](../type-aliases/EventReactions.md)\<`EventPayloadMapping`, `Context`, `States`, `EventOutputMapping`\>

#### 實作了

[`State`](../interfaces/State.md).[`eventReactions`](../interfaces/State.md#eventreactions)

***

### guards

#### Getter 簽章

> **get** **guards**(): [`Guard`](../type-aliases/Guard.md)\<`Context`\>

定義於: [interface.ts:865](https://github.com/ue-too/ue-too/blob/7d57cce875ed7b8a4f4ee4e325a18e34159928f6/packages/being/src/interface.ts#L865)

##### 回傳

[`Guard`](../type-aliases/Guard.md)\<`Context`\>

#### 實作了

[`State`](../interfaces/State.md).[`guards`](../interfaces/State.md#guards)

***

### handlingEvents

#### Getter 簽章

> **get** **handlingEvents**(): keyof `EventPayloadMapping`[]

定義於: [interface.ts:859](https://github.com/ue-too/ue-too/blob/7d57cce875ed7b8a4f4ee4e325a18e34159928f6/packages/being/src/interface.ts#L859)

##### 回傳

keyof `EventPayloadMapping`[]

## 方法

### beforeExit()

> **beforeExit**(`context`, `stateMachine`, `to`): `void`

定義於: [interface.ts:903](https://github.com/ue-too/ue-too/blob/7d57cce875ed7b8a4f4ee4e325a18e34159928f6/packages/being/src/interface.ts#L903)

#### 參數

##### context

`Context`

##### stateMachine

[`StateMachine`](../interfaces/StateMachine.md)\<`EventPayloadMapping`, `Context`, `States`, `EventOutputMapping`\>

##### to

`"TERMINAL"` | `States`

#### 回傳

`void`

#### 實作了

[`State`](../interfaces/State.md).[`beforeExit`](../interfaces/State.md#beforeexit)

***

### handles()

> **handles**\<`K`\>(`args`, `context`, `stateMachine`): [`EventResult`](../type-aliases/EventResult.md)\<`States`, `K` *extends* keyof `EventOutputMapping` ? `EventOutputMapping`\[`K`\<`K`\>\] : `void`\>

定義於: [interface.ts:916](https://github.com/ue-too/ue-too/blob/7d57cce875ed7b8a4f4ee4e325a18e34159928f6/packages/being/src/interface.ts#L916)

#### 型別參數

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### 參數

##### args

[`EventArgs`](../type-aliases/EventArgs.md)\<`EventPayloadMapping`, `K`\>

##### context

`Context`

##### stateMachine

[`StateMachine`](../interfaces/StateMachine.md)\<`EventPayloadMapping`, `Context`, `States`, `EventOutputMapping`\>

#### 回傳

[`EventResult`](../type-aliases/EventResult.md)\<`States`, `K` *extends* keyof `EventOutputMapping` ? `EventOutputMapping`\[`K`\<`K`\>\] : `void`\>

#### 實作了

[`State`](../interfaces/State.md).[`handles`](../interfaces/State.md#handles)

***

### uponEnter()

> **uponEnter**(`context`, `stateMachine`, `from`): `void`

定義於: [interface.ts:890](https://github.com/ue-too/ue-too/blob/7d57cce875ed7b8a4f4ee4e325a18e34159928f6/packages/being/src/interface.ts#L890)

#### 參數

##### context

`Context`

##### stateMachine

[`StateMachine`](../interfaces/StateMachine.md)\<`EventPayloadMapping`, `Context`, `States`, `EventOutputMapping`\>

##### from

`"INITIAL"` | `States`

#### 回傳

`void`

#### 實作了

[`State`](../interfaces/State.md).[`uponEnter`](../interfaces/State.md#uponenter)
