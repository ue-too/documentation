[@ue-too/being](../globals.md) / GuardMapping

# Type Alias: GuardMapping\<Context, G, States\>

> **GuardMapping**\<`Context`, `G`, `States`\> = `object`

Defined in: [interface.ts:341](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/being/src/interface.ts#L341)

## Description

This is a mapping of a guard to a target state.

Generic parameters:
- Context: The context of the state machine. (which can be used by each state to do calculations that would persist across states)
- G: The guard type.
- States: All of the possible states that the state machine can be in. e.g. a string literal union like "IDLE" | "SELECTING" | "PAN" | "ZOOM"

You probably don't need to use this type directly.

## See

[\['eventGuards'\]](../classes/TemplateState.md)

## Type Parameters

### Context

`Context` *extends* [`BaseContext`](../interfaces/BaseContext.md)

### G

`G`

### States

`States` *extends* `string`

## Properties

### guard

> **guard**: `G` *extends* [`Guard`](Guard.md)\<`Context`, infer K\> ? `K` : `never`

Defined in: [interface.ts:342](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/being/src/interface.ts#L342)

***

### target

> **target**: `States`

Defined in: [interface.ts:343](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/being/src/interface.ts#L343)
