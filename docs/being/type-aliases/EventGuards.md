[@ue-too/being](../globals.md) / EventGuards

# Type Alias: EventGuards\<EventPayloadMapping, States, Context, T\>

> **EventGuards**\<`EventPayloadMapping`, `States`, `Context`, `T`\> = `{ [K in keyof EventPayloadMapping]: GuardMapping<Context, T, States>[] }`

Defined in: [interface.ts:353](https://github.com/ue-too/ue-too/blob/aabc0f56e9e83141d0fd935ef6ac3e5fe0af0a61/packages/being/src/interface.ts#L353)

## Type Parameters

### EventPayloadMapping

`EventPayloadMapping`

### States

`States` *extends* `string`

### Context

`Context` *extends* [`BaseContext`](../interfaces/BaseContext.md)

### T

`T` *extends* [`Guard`](Guard.md)\<`Context`\>

## Description

This is a mapping of an event to a guard evaluation.

Generic parameters:
- EventPayloadMapping: A mapping of events to their payloads.
- States: All of the possible states that the state machine can be in. e.g. a string literal union like "IDLE" | "SELECTING" | "PAN" | "ZOOM"
- Context: The context of the state machine. (which can be used by each state to do calculations that would persist across states)
- T: The guard type.

You probably don't need to use this type directly.
This is a mapping of an event to a guard evaluation.

## See

[\['eventGuards'\]](../classes/TemplateState.md)
