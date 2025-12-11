[@ue-too/being](../globals.md) / Guard

# Type Alias: Guard\<Context, K\>

> **Guard**\<`Context`, `K`\> = `{ [P in K]: GuardEvaluation<Context> }`

Defined in: [interface.ts:146](https://github.com/ue-too/ue-too/blob/6e9c66b5f3b3ab9f9b176d974bbf941b3420f5e1/packages/being/src/interface.ts#L146)

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
