[@ue-too/board](../../modules.md) / [index](../index.md) / createDefaultRawUserInputPublisher

# 関数: createDefaultRawUserInputPublisher()

> **createDefaultRawUserInputPublisher**(): [`RawUserInputPublisher`](../classes/RawUserInputPublisher.md)

定義: [packages/board/src/input-interpretation/raw-input-publisher/raw-input-publisher.ts:303](https://github.com/ue-too/ue-too/blob/79a36cf61d861e6b4e3302e81111636c6082a3db/packages/board/src/input-interpretation/raw-input-publisher/raw-input-publisher.ts#L303)

Creates a default raw user input publisher.

## 戻り値

[`RawUserInputPublisher`](../classes/RawUserInputPublisher.md)

A new RawUserInputPublisher instance

## Remarks

Factory function for creating a standard publisher. Useful for dependency injection
and testing scenarios where you want to swap implementations.
