[@ue-too/being](../../modules.md) / [index](../index.md) / EventNotHandled

# Type Alias: EventNotHandled

> **EventNotHandled** = `object`

Defined in: [interface.ts:99](https://github.com/ue-too/ue-too/blob/9b787448328cf446379b1ea4cc5f4c79149cbec8/packages/being/src/interface.ts#L99)

Result type indicating an event was not handled by the current state.

## Remarks

When a state doesn't have a handler defined for a particular event, it returns this type.
The state machine will not transition and the event is effectively ignored.

## Properties

### handled

> **handled**: `false`

Defined in: [interface.ts:100](https://github.com/ue-too/ue-too/blob/9b787448328cf446379b1ea4cc5f4c79149cbec8/packages/being/src/interface.ts#L100)
