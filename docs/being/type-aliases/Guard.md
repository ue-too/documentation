[@ue-too/being](../globals.md) / Guard

# Type Alias: Guard\<Context, K\>

> **Guard**\<`Context`, `K`\> = `{ [P in K]: GuardEvaluation<Context> }`

Defined in: [interface.ts:293](https://github.com/ue-too/ue-too/blob/e468a9961da59c81663192ec8df16ebc8e17abac/packages/being/src/interface.ts#L293)

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
