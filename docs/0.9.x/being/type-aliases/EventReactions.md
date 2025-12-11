[@ue-too/being](../globals.md) / EventReactions

# Type Alias: EventReactions\<EventPayloadMapping, Context, States\>

> **EventReactions**\<`EventPayloadMapping`, `Context`, `States`\> = `{ [K in keyof Partial<EventPayloadMapping>]: { action: (context: Context, event: EventPayloadMapping[K], stateMachine: StateMachine<EventPayloadMapping, Context, States>) => void; defaultTargetState?: States } }`

Defined in: [interface.ts:117](https://github.com/ue-too/ue-too/blob/fdbfb1431206f8d7c812dca3e1d0dcd7389f1d6d/packages/being/src/interface.ts#L117)

## Type Parameters

### EventPayloadMapping

`EventPayloadMapping`

### Context

`Context` *extends* [`BaseContext`](../interfaces/BaseContext.md)

### States

`States` *extends* `string`

## Description

This is the type for the event reactions of a state.

Generic parameters:
- EventPayloadMapping: A mapping of events to their payloads.
- Context: The context of the state machine. (which can be used by each state to do calculations that would persist across states)
- States: All of the possible states that the state machine can be in. e.g. a string literal union like "IDLE" | "SELECTING" | "PAN" | "ZOOM"
