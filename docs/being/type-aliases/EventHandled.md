[@ue-too/being](../globals.md) / EventHandled

# Type Alias: EventHandled\<States, Output\>

> **EventHandled**\<`States`, `Output`\> = `object`

Defined in: [interface.ts:131](https://github.com/ue-too/ue-too/blob/e468a9961da59c81663192ec8df16ebc8e17abac/packages/being/src/interface.ts#L131)

Result type when an event is successfully handled by a state.

## Remarks

This type represents a successful event handling result. It can optionally include:
- `nextState`: The state to transition to (if different from current)
- `output`: A return value from the event handler

## Example

```typescript
// Simple transition without output
const result: EventHandled<"IDLE" | "ACTIVE"> = {
  handled: true,
  nextState: "ACTIVE"
};

// With output value
const resultWithOutput: EventHandled<"IDLE" | "ACTIVE", number> = {
  handled: true,
  nextState: "IDLE",
  output: 42
};
```

## Type Parameters

### States

`States` *extends* `string`

Union of all possible state names in the state machine

### Output

`Output` = `void`

The output type for this event (defaults to void)

## Properties

### handled

> **handled**: `true`

Defined in: [interface.ts:132](https://github.com/ue-too/ue-too/blob/e468a9961da59c81663192ec8df16ebc8e17abac/packages/being/src/interface.ts#L132)

***

### nextState?

> `optional` **nextState**: `States`

Defined in: [interface.ts:133](https://github.com/ue-too/ue-too/blob/e468a9961da59c81663192ec8df16ebc8e17abac/packages/being/src/interface.ts#L133)

***

### output?

> `optional` **output**: `Output`

Defined in: [interface.ts:134](https://github.com/ue-too/ue-too/blob/e468a9961da59c81663192ec8df16ebc8e17abac/packages/being/src/interface.ts#L134)
