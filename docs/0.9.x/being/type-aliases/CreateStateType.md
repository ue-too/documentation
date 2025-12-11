[@ue-too/being](../globals.md) / CreateStateType

# Type Alias: CreateStateType\<ArrayLiteral\>

> **CreateStateType**\<`ArrayLiteral`\> = `ArrayLiteral`\[`number`\]

Defined in: [interface.ts:19](https://github.com/ue-too/ue-too/blob/6e9c66b5f3b3ab9f9b176d974bbf941b3420f5e1/packages/being/src/interface.ts#L19)

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
