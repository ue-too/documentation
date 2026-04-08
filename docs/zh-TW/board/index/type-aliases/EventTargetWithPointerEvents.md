[@ue-too/board](../../modules.md) / [index](../index.md) / EventTargetWithPointerEvents

# 型別別名: EventTargetWithPointerEvents

> **EventTargetWithPointerEvents** = `object`

定義於: [packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts:105](https://github.com/ue-too/ue-too/blob/79a36cf61d861e6b4e3302e81111636c6082a3db/packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts#L105)

Minimal event target interface for framework interoperability.

## 備註

This interface allows the parser to attach event listeners to different
types of event targets (HTMLElement, Canvas, PixiJS Container, etc.).

## 屬性

### addEventListener()

> **addEventListener**: (`type`, `listener`, `options?`) => `void`

定義於: [packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts:106](https://github.com/ue-too/ue-too/blob/79a36cf61d861e6b4e3302e81111636c6082a3db/packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts#L106)

#### 參數

##### type

`string`

##### listener

(`event`) => `void`

##### options?

###### passive

`boolean`

#### 回傳

`void`

***

### removeEventListener()

> **removeEventListener**: (`type`, `listener`) => `void`

定義於: [packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts:111](https://github.com/ue-too/ue-too/blob/79a36cf61d861e6b4e3302e81111636c6082a3db/packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts#L111)

#### 參數

##### type

`string`

##### listener

(`event`) => `void`

#### 回傳

`void`
