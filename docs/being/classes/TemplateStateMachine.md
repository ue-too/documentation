[@ue-too/being](../globals.md) / TemplateStateMachine

# Class: TemplateStateMachine\<EventPayloadMapping, Context, States, EventOutputMapping\>

Defined in: [interface.ts:436](https://github.com/ue-too/ue-too/blob/1055c6abca1ea3a0e952b0825f36e0ca2527df85/packages/being/src/interface.ts#L436)

Concrete implementation of a finite state machine.

## Remarks

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

## Example

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

## See

 - [TemplateState](TemplateState.md) for creating state implementations
 - [StateMachine](../interfaces/StateMachine.md) for the interface definition

## Extended by

- [`HierarchicalStateMachine`](HierarchicalStateMachine.md)

## Type Parameters

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

## Implements

- [`StateMachine`](../interfaces/StateMachine.md)\<`EventPayloadMapping`, `Context`, `States`, `EventOutputMapping`\>

## Constructors

### Constructor

> **new TemplateStateMachine**\<`EventPayloadMapping`, `Context`, `States`, `EventOutputMapping`\>(`states`, `initialState`, `context`, `autoStart`): `TemplateStateMachine`\<`EventPayloadMapping`, `Context`, `States`, `EventOutputMapping`\>

Defined in: [interface.ts:452](https://github.com/ue-too/ue-too/blob/1055c6abca1ea3a0e952b0825f36e0ca2527df85/packages/being/src/interface.ts#L452)

#### Parameters

##### states

`Record`\<`States`, [`State`](../interfaces/State.md)\<`EventPayloadMapping`, `Context`, `States`, `EventOutputMapping`\>\>

##### initialState

`States`

##### context

`Context`

##### autoStart

`boolean` = `true`

#### Returns

`TemplateStateMachine`\<`EventPayloadMapping`, `Context`, `States`, `EventOutputMapping`\>

## Properties

### \_context

> `protected` **\_context**: `Context`

Defined in: [interface.ts:445](https://github.com/ue-too/ue-too/blob/1055c6abca1ea3a0e952b0825f36e0ca2527df85/packages/being/src/interface.ts#L445)

***

### \_currentState

> `protected` **\_currentState**: `"INITIAL"` \| `"TERMINAL"` \| `States`

Defined in: [interface.ts:443](https://github.com/ue-too/ue-too/blob/1055c6abca1ea3a0e952b0825f36e0ca2527df85/packages/being/src/interface.ts#L443)

***

### \_happensCallbacks

> `protected` **\_happensCallbacks**: (`args`, `context`) => `void`[]

Defined in: [interface.ts:448](https://github.com/ue-too/ue-too/blob/1055c6abca1ea3a0e952b0825f36e0ca2527df85/packages/being/src/interface.ts#L448)

#### Parameters

##### args

[`EventArgs`](../type-aliases/EventArgs.md)\<`EventPayloadMapping`, `string`\> | [`EventArgs`](../type-aliases/EventArgs.md)\<`EventPayloadMapping`, keyof `EventPayloadMapping`\>

##### context

`Context`

#### Returns

`void`

***

### \_initialState

> `protected` **\_initialState**: `States`

Defined in: [interface.ts:450](https://github.com/ue-too/ue-too/blob/1055c6abca1ea3a0e952b0825f36e0ca2527df85/packages/being/src/interface.ts#L450)

***

### \_stateChangeCallbacks

> `protected` **\_stateChangeCallbacks**: [`StateChangeCallback`](../type-aliases/StateChangeCallback.md)\<`States`\>[]

Defined in: [interface.ts:447](https://github.com/ue-too/ue-too/blob/1055c6abca1ea3a0e952b0825f36e0ca2527df85/packages/being/src/interface.ts#L447)

***

### \_states

> `protected` **\_states**: `Record`\<`States`, [`State`](../interfaces/State.md)\<`EventPayloadMapping`, `Context`, `States`, `EventOutputMapping`\>\>

Defined in: [interface.ts:444](https://github.com/ue-too/ue-too/blob/1055c6abca1ea3a0e952b0825f36e0ca2527df85/packages/being/src/interface.ts#L444)

***

### \_statesArray

> `protected` **\_statesArray**: `States`[]

Defined in: [interface.ts:446](https://github.com/ue-too/ue-too/blob/1055c6abca1ea3a0e952b0825f36e0ca2527df85/packages/being/src/interface.ts#L446)

***

### \_timeouts

> `protected` **\_timeouts**: `number` \| `undefined` = `undefined`

Defined in: [interface.ts:449](https://github.com/ue-too/ue-too/blob/1055c6abca1ea3a0e952b0825f36e0ca2527df85/packages/being/src/interface.ts#L449)

## Accessors

### currentState

#### Get Signature

> **get** **currentState**(): `"INITIAL"` \| `"TERMINAL"` \| `States`

Defined in: [interface.ts:528](https://github.com/ue-too/ue-too/blob/1055c6abca1ea3a0e952b0825f36e0ca2527df85/packages/being/src/interface.ts#L528)

##### Returns

`"INITIAL"` \| `"TERMINAL"` \| `States`

***

### possibleStates

#### Get Signature

> **get** **possibleStates**(): `States`[]

Defined in: [interface.ts:536](https://github.com/ue-too/ue-too/blob/1055c6abca1ea3a0e952b0825f36e0ca2527df85/packages/being/src/interface.ts#L536)

##### Returns

`States`[]

#### Implementation of

[`StateMachine`](../interfaces/StateMachine.md).[`possibleStates`](../interfaces/StateMachine.md#possiblestates)

***

### states

#### Get Signature

> **get** **states**(): `Record`\<`States`, [`State`](../interfaces/State.md)\<`EventPayloadMapping`, `Context`, `States`, `EventOutputMapping`\>\>

Defined in: [interface.ts:540](https://github.com/ue-too/ue-too/blob/1055c6abca1ea3a0e952b0825f36e0ca2527df85/packages/being/src/interface.ts#L540)

##### Returns

`Record`\<`States`, [`State`](../interfaces/State.md)\<`EventPayloadMapping`, `Context`, `States`, `EventOutputMapping`\>\>

#### Implementation of

[`StateMachine`](../interfaces/StateMachine.md).[`states`](../interfaces/StateMachine.md#states-1)

## Methods

### happens()

#### Call Signature

> **happens**\<`K`\>(...`args`): [`EventResult`](../type-aliases/EventResult.md)\<`States`, `K` *extends* keyof `EventOutputMapping` ? `EventOutputMapping`\[`K`\<`K`\>\] : `void`\>

Defined in: [interface.ts:497](https://github.com/ue-too/ue-too/blob/1055c6abca1ea3a0e952b0825f36e0ca2527df85/packages/being/src/interface.ts#L497)

##### Type Parameters

###### K

`K` *extends* `string` \| `number` \| `symbol`

##### Parameters

###### args

...[`EventArgs`](../type-aliases/EventArgs.md)\<`EventPayloadMapping`, `K`\>

##### Returns

[`EventResult`](../type-aliases/EventResult.md)\<`States`, `K` *extends* keyof `EventOutputMapping` ? `EventOutputMapping`\[`K`\<`K`\>\] : `void`\>

##### Implementation of

[`StateMachine`](../interfaces/StateMachine.md).[`happens`](../interfaces/StateMachine.md#happens)

#### Call Signature

> **happens**\<`K`\>(...`args`): [`EventResult`](../type-aliases/EventResult.md)\<`States`, `unknown`\>

Defined in: [interface.ts:498](https://github.com/ue-too/ue-too/blob/1055c6abca1ea3a0e952b0825f36e0ca2527df85/packages/being/src/interface.ts#L498)

##### Type Parameters

###### K

`K` *extends* `string`

##### Parameters

###### args

...[`EventArgs`](../type-aliases/EventArgs.md)\<`EventPayloadMapping`, `K`\>

##### Returns

[`EventResult`](../type-aliases/EventResult.md)\<`States`, `unknown`\>

##### Implementation of

[`StateMachine`](../interfaces/StateMachine.md).[`happens`](../interfaces/StateMachine.md#happens)

***

### onHappens()

> **onHappens**(`callback`): `void`

Defined in: [interface.ts:524](https://github.com/ue-too/ue-too/blob/1055c6abca1ea3a0e952b0825f36e0ca2527df85/packages/being/src/interface.ts#L524)

#### Parameters

##### callback

(`args`, `context`) => `void`

#### Returns

`void`

#### Implementation of

[`StateMachine`](../interfaces/StateMachine.md).[`onHappens`](../interfaces/StateMachine.md#onhappens)

***

### onStateChange()

> **onStateChange**(`callback`): `void`

Defined in: [interface.ts:520](https://github.com/ue-too/ue-too/blob/1055c6abca1ea3a0e952b0825f36e0ca2527df85/packages/being/src/interface.ts#L520)

#### Parameters

##### callback

[`StateChangeCallback`](../type-aliases/StateChangeCallback.md)\<`States`\>

#### Returns

`void`

#### Implementation of

[`StateMachine`](../interfaces/StateMachine.md).[`onStateChange`](../interfaces/StateMachine.md#onstatechange)

***

### reset()

> **reset**(): `void`

Defined in: [interface.ts:465](https://github.com/ue-too/ue-too/blob/1055c6abca1ea3a0e952b0825f36e0ca2527df85/packages/being/src/interface.ts#L465)

#### Returns

`void`

#### Implementation of

[`StateMachine`](../interfaces/StateMachine.md).[`reset`](../interfaces/StateMachine.md#reset)

***

### setContext()

> **setContext**(`context`): `void`

Defined in: [interface.ts:532](https://github.com/ue-too/ue-too/blob/1055c6abca1ea3a0e952b0825f36e0ca2527df85/packages/being/src/interface.ts#L532)

#### Parameters

##### context

`Context`

#### Returns

`void`

#### Implementation of

[`StateMachine`](../interfaces/StateMachine.md).[`setContext`](../interfaces/StateMachine.md#setcontext)

***

### start()

> **start**(): `void`

Defined in: [interface.ts:471](https://github.com/ue-too/ue-too/blob/1055c6abca1ea3a0e952b0825f36e0ca2527df85/packages/being/src/interface.ts#L471)

#### Returns

`void`

#### Implementation of

[`StateMachine`](../interfaces/StateMachine.md).[`start`](../interfaces/StateMachine.md#start)

***

### switchTo()

> **switchTo**(`state`): `void`

Defined in: [interface.ts:492](https://github.com/ue-too/ue-too/blob/1055c6abca1ea3a0e952b0825f36e0ca2527df85/packages/being/src/interface.ts#L492)

#### Parameters

##### state

`"INITIAL"` | `"TERMINAL"` | `States`

#### Returns

`void`

#### Implementation of

[`StateMachine`](../interfaces/StateMachine.md).[`switchTo`](../interfaces/StateMachine.md#switchto)

***

### wrapup()

> **wrapup**(): `void`

Defined in: [interface.ts:480](https://github.com/ue-too/ue-too/blob/1055c6abca1ea3a0e952b0825f36e0ca2527df85/packages/being/src/interface.ts#L480)

#### Returns

`void`

#### Implementation of

[`StateMachine`](../interfaces/StateMachine.md).[`wrapup`](../interfaces/StateMachine.md#wrapup)
