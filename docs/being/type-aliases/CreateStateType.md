[@ue-too/being](../globals.md) / CreateStateType

# Type Alias: CreateStateType\<ArrayLiteral\>

> **CreateStateType**\<`ArrayLiteral`\> = `ArrayLiteral`\[`number`\]

Defined in: [interface.ts:19](https://github.com/ue-too/ue-too/blob/c02efc01f7c19f3efc21823d0489e987a3e92427/packages/being/src/interface.ts#L19)

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
