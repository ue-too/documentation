[@ue-too/being](../globals.md) / CreateStateType

# Type Alias: CreateStateType\<ArrayLiteral\>

> **CreateStateType**\<`ArrayLiteral`\> = `ArrayLiteral`\[`number`\]

Defined in: [interface.ts:19](https://github.com/ue-too/ue-too/blob/95dd78435970713202a67be3986e96a80ff00749/packages/being/src/interface.ts#L19)

## Type Parameters

### ArrayLiteral

`ArrayLiteral` *extends* readonly `string`[]

## Description

Utility type to derive a string literal union from a readonly array of string literals.

Example:
```ts
const TEST_STATES = ["one", "two", "three"] as const;
type TestStates = CreateStateType<typeof TEST_STATES>; // "one" | "two" | "three"
```
