[@ue-too/board](../../modules.md) / [index](../index.md) / MinimumWheelEvent

# 型別別名: MinimumWheelEvent

> **MinimumWheelEvent** = `object`

定義於: [packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts:65](https://github.com/ue-too/ue-too/blob/7d57cce875ed7b8a4f4ee4e325a18e34159928f6/packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts#L65)

Minimal wheel event interface for framework interoperability.

## 備註

This subset of the DOM WheelEvent interface allows the parser to work with
both vanilla JavaScript WheelEvents and framework-wrapped events.

## 屬性

### clientX

> **clientX**: `number`

定義於: [packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts:75](https://github.com/ue-too/ue-too/blob/7d57cce875ed7b8a4f4ee4e325a18e34159928f6/packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts#L75)

X coordinate in window space

***

### clientY

> **clientY**: `number`

定義於: [packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts:77](https://github.com/ue-too/ue-too/blob/7d57cce875ed7b8a4f4ee4e325a18e34159928f6/packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts#L77)

Y coordinate in window space

***

### ctrlKey

> **ctrlKey**: `boolean`

定義於: [packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts:73](https://github.com/ue-too/ue-too/blob/7d57cce875ed7b8a4f4ee4e325a18e34159928f6/packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts#L73)

Whether Ctrl key is pressed (for zoom)

***

### deltaX

> **deltaX**: `number`

定義於: [packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts:69](https://github.com/ue-too/ue-too/blob/7d57cce875ed7b8a4f4ee4e325a18e34159928f6/packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts#L69)

Horizontal scroll delta

***

### deltaY

> **deltaY**: `number`

定義於: [packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts:71](https://github.com/ue-too/ue-too/blob/7d57cce875ed7b8a4f4ee4e325a18e34159928f6/packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts#L71)

Vertical scroll delta

***

### preventDefault()

> **preventDefault**: () => `void`

定義於: [packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts:67](https://github.com/ue-too/ue-too/blob/7d57cce875ed7b8a4f4ee4e325a18e34159928f6/packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts#L67)

Prevents default scroll behavior

#### 回傳

`void`
