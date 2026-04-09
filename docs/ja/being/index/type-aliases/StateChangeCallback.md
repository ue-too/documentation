[@ue-too/being](../../modules.md) / [index](../index.md) / StateChangeCallback

# 型エイリアス: StateChangeCallback()\<States\>

> **StateChangeCallback**\<`States`\> = (`currentState`, `nextState`) => `void`

定義: [interface.ts:264](https://github.com/ue-too/ue-too/blob/68da915137a31a45d7ce8043b13275ff7283045d/packages/being/src/interface.ts#L264)

## 型パラメーター

### States

`States` *extends* `string` = `"IDLE"`

## パラメータ

### currentState

`States`

### nextState

`States`

## 戻り値

`void`

## Description

This is the type for the callback that is called when the state changes.
