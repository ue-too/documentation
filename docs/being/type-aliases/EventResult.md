[@ue-too/being](../globals.md) / EventResult

# Type Alias: EventResult\<States, Output\>

> **EventResult**\<`States`, `Output`\> = [`EventNotHandled`](EventNotHandled.md) \| [`EventHandled`](EventHandled.md)\<`States`, `Output`\>

Defined in: [interface.ts:152](https://github.com/ue-too/ue-too/blob/aabc0f56e9e83141d0fd935ef6ac3e5fe0af0a61/packages/being/src/interface.ts#L152)

Discriminated union representing the result of event handling.

## Type Parameters

### States

`States` *extends* `string`

Union of all possible state names

### Output

`Output` = `void`

The output type for handled events

## Remarks

Every event handler returns an EventResult, which is either:
- [EventHandled](EventHandled.md): The event was processed successfully
- [EventNotHandled](EventNotHandled.md): The event was not recognized/handled

Use the `handled` discriminant to narrow the type in TypeScript.
