[@ue-too/being](../../modules.md) / [index](../index.md) / Guard

# 型エイリアス: Guard\<Context, K\>

> **Guard**\<`Context`, `K`\> = `{ [P in K]: GuardEvaluation<Context> }`

定義: [interface.ts:405](https://github.com/ue-too/ue-too/blob/79a36cf61d861e6b4e3302e81111636c6082a3db/packages/being/src/interface.ts#L405)

## 型パラメーター

### Context

`Context` *extends* [`BaseContext`](../interfaces/BaseContext.md)

### K

`K` *extends* `string` = `string`

## Description

This is the type for the guard of a state.

guard is an object that maps a key to a guard evaluation.
K is all the possible keys that can be used to evaluate the guard.
K is optional but if it is not provided, typescript won't be able to type guard in the EventGuards type.
