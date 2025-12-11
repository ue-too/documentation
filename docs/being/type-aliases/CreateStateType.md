[@ue-too/being](../globals.md) / CreateStateType

# Type Alias: CreateStateType\<ArrayLiteral\>

> **CreateStateType**\<`ArrayLiteral`\> = `ArrayLiteral`\[`number`\]

Defined in: [interface.ts:19](https://github.com/ue-too/ue-too/blob/fe7fe80879019da785d08f475b37a73725116e88/packages/being/src/interface.ts#L19)

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
