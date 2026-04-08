[@ue-too/board](../../modules.md) / [index](../index.md) / RawUserInputCallback

# 型別別名: RawUserInputCallback()\<K\>

> **RawUserInputCallback**\<`K`\> = (`event`) => `void`

定義於: [packages/board/src/input-interpretation/raw-input-publisher/raw-input-publisher.ts:126](https://github.com/ue-too/ue-too/blob/feb7c80222df5d3cd97bfa1933bafe3190c6e48d/packages/board/src/input-interpretation/raw-input-publisher/raw-input-publisher.ts#L126)

Callback function type for raw user input events.

## 型別參數

### K

`K` *extends* keyof [`RawUserInputEventMap`](RawUserInputEventMap.md)

The event name key from RawUserInputEventMap

## 參數

### event

[`RawUserInputEventMap`](RawUserInputEventMap.md)\[`K`\]

## 回傳

`void`
