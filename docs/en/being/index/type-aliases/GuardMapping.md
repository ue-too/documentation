[@ue-too/being](../../modules.md) / [index](../index.md) / GuardMapping

# Type Alias: GuardMapping\<Context, G, States\>

> **GuardMapping**\<`Context`, `G`, `States`\> = `object`

Defined in: [interface.ts:457](https://github.com/ue-too/ue-too/blob/79a36cf61d861e6b4e3302e81111636c6082a3db/packages/being/src/interface.ts#L457)

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

Defined in: [interface.ts:462](https://github.com/ue-too/ue-too/blob/79a36cf61d861e6b4e3302e81111636c6082a3db/packages/being/src/interface.ts#L462)

***

### target

> **target**: `States`

Defined in: [interface.ts:463](https://github.com/ue-too/ue-too/blob/79a36cf61d861e6b4e3302e81111636c6082a3db/packages/being/src/interface.ts#L463)
