[@ue-too/board](../globals.md) / createDefaultRawUserInputPublisher

# Function: createDefaultRawUserInputPublisher()

> **createDefaultRawUserInputPublisher**(): [`RawUserInputPublisher`](../classes/RawUserInputPublisher.md)

Defined in: [packages/board/src/input-interpretation/raw-input-publisher/raw-input-publisher.ts:261](https://github.com/ue-too/ue-too/blob/aabc0f56e9e83141d0fd935ef6ac3e5fe0af0a61/packages/board/src/input-interpretation/raw-input-publisher/raw-input-publisher.ts#L261)

Creates a default raw user input publisher.

## Returns

[`RawUserInputPublisher`](../classes/RawUserInputPublisher.md)

A new RawUserInputPublisher instance

## Remarks

Factory function for creating a standard publisher. Useful for dependency injection
and testing scenarios where you want to swap implementations.
