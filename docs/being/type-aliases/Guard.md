[@ue-too/being](../globals.md) / Guard

# Type Alias: Guard\<Context, K\>

> **Guard**\<`Context`, `K`\> = `{ [P in K]: GuardEvaluation<Context> }`

Defined in: [interface.ts:146](https://github.com/ue-too/ue-too/blob/407e414f82d0bb1a2a3cfbf5160e331d5a81d8be/packages/being/src/interface.ts#L146)

## Type Parameters

### Context

`Context` *extends* [`BaseContext`](../interfaces/BaseContext.md)

### K

`K` *extends* `string` = `string`

## Description

This is the type for the guard of a state.

guard is an object that maps a key to a guard evaluation.
K is all the possible keys that can be used to evaluate the guard.
K is optional but if it is not provided, typescript won't be able to type guard in the EventGuards type.
