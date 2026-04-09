[@ue-too/board](../../modules.md) / [index](../index.md) / RawUserInputCallback

# 型エイリアス: RawUserInputCallback()\<K\>

> **RawUserInputCallback**\<`K`\> = (`event`) => `void`

定義: [packages/board/src/input-interpretation/raw-input-publisher/raw-input-publisher.ts:126](https://github.com/ue-too/ue-too/blob/68da915137a31a45d7ce8043b13275ff7283045d/packages/board/src/input-interpretation/raw-input-publisher/raw-input-publisher.ts#L126)

Callback function type for raw user input events.

## 型パラメーター

### K

`K` *extends* keyof [`RawUserInputEventMap`](RawUserInputEventMap.md)

The event name key from RawUserInputEventMap

## パラメータ

### event

[`RawUserInputEventMap`](RawUserInputEventMap.md)\[`K`\]

## 戻り値

`void`
