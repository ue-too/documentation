[@ue-too/being](../../modules.md) / [index](../index.md) / DefaultOutputMapping

# 型別別名: DefaultOutputMapping\<EventPayloadMapping\>

> **DefaultOutputMapping**\<`EventPayloadMapping`\> = `{ [K in keyof EventPayloadMapping]: void }`

定義於: [interface.ts:169](https://github.com/ue-too/ue-too/blob/feb7c80222df5d3cd97bfa1933bafe3190c6e48d/packages/being/src/interface.ts#L169)

## 型別參數

### EventPayloadMapping

`EventPayloadMapping`

## Description

A default output mapping that maps all events to void.
Used as default when no output mapping is provided.
