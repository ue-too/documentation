[@ue-too/board](../globals.md) / RawUserInputCallback

# Type Alias: RawUserInputCallback()\<K\>

> **RawUserInputCallback**\<`K`\> = (`event`) => `void`

Defined in: [packages/board/src/input-interpretation/raw-input-publisher/raw-input-publisher.ts:97](https://github.com/ue-too/ue-too/blob/c02efc01f7c19f3efc21823d0489e987a3e92427/packages/board/src/input-interpretation/raw-input-publisher/raw-input-publisher.ts#L97)

## Type Parameters

### K

`K` *extends* keyof [`RawUserInputEventMap`](RawUserInputEventMap.md)

## Parameters

### event

[`RawUserInputEventMap`](RawUserInputEventMap.md)\[`K`\]

## Returns

`void`

## Description

The raw user input callback.
This is the function type of callbacks for raw user input events.
