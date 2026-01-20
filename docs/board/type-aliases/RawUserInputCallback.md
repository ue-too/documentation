[@ue-too/board](../globals.md) / RawUserInputCallback

# Type Alias: RawUserInputCallback()\<K\>

> **RawUserInputCallback**\<`K`\> = (`event`) => `void`

Defined in: [packages/board/src/input-interpretation/raw-input-publisher/raw-input-publisher.ts:122](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/board/src/input-interpretation/raw-input-publisher/raw-input-publisher.ts#L122)

Callback function type for raw user input events.

## Type Parameters

### K

`K` *extends* keyof [`RawUserInputEventMap`](RawUserInputEventMap.md)

The event name key from RawUserInputEventMap

## Parameters

### event

[`RawUserInputEventMap`](RawUserInputEventMap.md)\[`K`\]

## Returns

`void`
