[@ue-too/being](../../modules.md) / [index](../index.md) / GuardEvaluation

# 型別別名: GuardEvaluation()\<Context\>

> **GuardEvaluation**\<`Context`\> = (`context`) => `boolean`

定義於: [interface.ts:392](https://github.com/ue-too/ue-too/blob/68da915137a31a45d7ce8043b13275ff7283045d/packages/being/src/interface.ts#L392)

## 型別參數

### Context

`Context` *extends* [`BaseContext`](../interfaces/BaseContext.md)

## 參數

### context

`Context`

## 回傳

`boolean`

## Description

This is the type for the guard evaluation when a state transition is happening.

Guard evaluations are evaluated after the state has handled the event with the action.
Guard evaluations can be defined in an array and the first guard that evaluates to true will be used to determine the next state.

Generic parameters:
- Context: The context of the state machine. (which can be used by each state to do calculations that would persist across states)
