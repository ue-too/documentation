[@ue-too/being](../globals.md) / StateDefinition

# Interface: StateDefinition\<Context, EventPayloadMapping, StateNames, EventOutputMapping\>

Defined in: [schema-factory.ts:140](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/being/src/schema-factory.ts#L140)

Definition of a single state in the state machine.

## Example

```typescript
{
  name: "PAYING",
  guards: {
    hasEnoughBalance: (context) => context.balance >= context.itemPrice,
    hasInsufficientBalance: (context) => context.balance < context.itemPrice,
  },
  transitions: [
    {
      event: "pay",
      targetState: "SELECTING",
      guards: [
        { guard: "hasEnoughBalance", targetState: "CONFIRMED" },
        { guard: "hasInsufficientBalance", targetState: "PAYING" },
      ],
    },
  ],
}
```

## Type Parameters

### Context

`Context` *extends* [`BaseContext`](BaseContext.md) = [`BaseContext`](BaseContext.md)

The context type

### EventPayloadMapping

`EventPayloadMapping` = `any`

Mapping of event names to their payload types

### StateNames

`StateNames` *extends* `string` = `string`

Union type of all valid state names

### EventOutputMapping

`EventOutputMapping` *extends* `Partial`\<`Record`\<keyof `EventPayloadMapping`, `unknown`\>\> = [`DefaultOutputMapping`](../type-aliases/DefaultOutputMapping.md)\<`EventPayloadMapping`\>

Optional mapping of events to their output types

## Properties

### guards?

> `optional` **guards**: `Record`\<`string`, [`GuardFunction`](../type-aliases/GuardFunction.md)\<`Context`\>\>

Defined in: [schema-factory.ts:158](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/being/src/schema-factory.ts#L158)

Optional mapping of guard names to guard functions.
Guards defined here can be reused across multiple transitions within this state
by referencing them by name in the transition's guards array.

The guard functions receive the context parameter typed with the Context type parameter,
not BaseContext, so you get full type safety for your context properties.

***

### name

> **name**: `StateNames`

Defined in: [schema-factory.ts:147](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/being/src/schema-factory.ts#L147)

Name of this state

***

### onEnter()?

> `optional` **onEnter**: (`context`, `fromState`) => `void`

Defined in: [schema-factory.ts:160](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/being/src/schema-factory.ts#L160)

Optional callback when entering this state

#### Parameters

##### context

`Context`

##### fromState

`StateNames`

#### Returns

`void`

***

### onExit()?

> `optional` **onExit**: (`context`, `toState`) => `void`

Defined in: [schema-factory.ts:162](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/being/src/schema-factory.ts#L162)

Optional callback when exiting this state

#### Parameters

##### context

`Context`

##### toState

`StateNames`

#### Returns

`void`

***

### transitions

> **transitions**: [`TransitionDefinitionUnion`](../type-aliases/TransitionDefinitionUnion.md)\<`Context`, `EventPayloadMapping`, `StateNames`, `EventOutputMapping`\>[]

Defined in: [schema-factory.ts:149](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/being/src/schema-factory.ts#L149)

Transitions available from this state
