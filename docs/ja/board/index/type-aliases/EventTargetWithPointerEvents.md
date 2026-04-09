[@ue-too/board](../../modules.md) / [index](../index.md) / EventTargetWithPointerEvents

# 型エイリアス: EventTargetWithPointerEvents

> **EventTargetWithPointerEvents** = `object`

定義: [packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts:105](https://github.com/ue-too/ue-too/blob/68da915137a31a45d7ce8043b13275ff7283045d/packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts#L105)

Minimal event target interface for framework interoperability.

## Remarks

This interface allows the parser to attach event listeners to different
types of event targets (HTMLElement, Canvas, PixiJS Container, etc.).

## プロパティ

### addEventListener()

> **addEventListener**: (`type`, `listener`, `options?`) => `void`

定義: [packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts:106](https://github.com/ue-too/ue-too/blob/68da915137a31a45d7ce8043b13275ff7283045d/packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts#L106)

#### パラメータ

##### type

`string`

##### listener

(`event`) => `void`

##### options?

###### passive

`boolean`

#### 戻り値

`void`

***

### removeEventListener()

> **removeEventListener**: (`type`, `listener`) => `void`

定義: [packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts:111](https://github.com/ue-too/ue-too/blob/68da915137a31a45d7ce8043b13275ff7283045d/packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts#L111)

#### パラメータ

##### type

`string`

##### listener

(`event`) => `void`

#### 戻り値

`void`
