[@ue-too/board](../globals.md) / OutputEvent

# Type Alias: OutputEvent

> **OutputEvent** = [`KmtOutputEvent`](KmtOutputEvent.md) \| [`TouchOutputEvent`](TouchOutputEvent.md)

Defined in: [packages/board/src/input-interpretation/input-orchestrator.ts:17](https://github.com/ue-too/ue-too/blob/e468a9961da59c81663192ec8df16ebc8e17abac/packages/board/src/input-interpretation/input-orchestrator.ts#L17)

Union type of all output events from state machines.

## Remarks

This type represents the unified output from both KMT (Keyboard/Mouse/Trackpad) and Touch state machines.
By unifying these outputs, the orchestrator can handle events from different input modalities uniformly.
