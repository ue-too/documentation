[@ue-too/being](../globals.md) / GuardEvaluation

# Type Alias: GuardEvaluation()\<Context\>

> **GuardEvaluation**\<`Context`\> = (`context`) => `boolean`

Defined in: [interface.ts:135](https://github.com/ue-too/ue-too/blob/c02efc01f7c19f3efc21823d0489e987a3e92427/packages/being/src/interface.ts#L135)

## Type Parameters

### Context

`Context` *extends* [`BaseContext`](../interfaces/BaseContext.md)

## Parameters

### context

`Context`

## Returns

`boolean`

## Description

This is the type for the guard evaluation when a state transition is happening.

Guard evaluations are evaluated after the state has handled the event with the action.
Guard evaluations can be defined in an array and the first guard that evaluates to true will be used to determine the next state.

Generic parameters:
- Context: The context of the state machine. (which can be used by each state to do calculations that would persist across states)
