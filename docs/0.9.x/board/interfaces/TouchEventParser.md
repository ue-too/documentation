[@ue-too/board](../globals.md) / TouchEventParser

# Interface: TouchEventParser

Defined in: [packages/board/src/input-interpretation/raw-input-parser/vanilla-touch-event-parser.ts:10](https://github.com/ue-too/ue-too/blob/fdbfb1431206f8d7c812dca3e1d0dcd7389f1d6d/packages/board/src/input-interpretation/raw-input-parser/vanilla-touch-event-parser.ts#L10)

## Description

The touch event parser.
This is for the interoperability between the vanilla javascript and the pixijs event system.

## Properties

### disabled

> **disabled**: `boolean`

Defined in: [packages/board/src/input-interpretation/raw-input-parser/vanilla-touch-event-parser.ts:11](https://github.com/ue-too/ue-too/blob/fdbfb1431206f8d7c812dca3e1d0dcd7389f1d6d/packages/board/src/input-interpretation/raw-input-parser/vanilla-touch-event-parser.ts#L11)

***

### panDisabled

> **panDisabled**: `boolean`

Defined in: [packages/board/src/input-interpretation/raw-input-parser/vanilla-touch-event-parser.ts:12](https://github.com/ue-too/ue-too/blob/fdbfb1431206f8d7c812dca3e1d0dcd7389f1d6d/packages/board/src/input-interpretation/raw-input-parser/vanilla-touch-event-parser.ts#L12)

***

### rotateDisabled

> **rotateDisabled**: `boolean`

Defined in: [packages/board/src/input-interpretation/raw-input-parser/vanilla-touch-event-parser.ts:14](https://github.com/ue-too/ue-too/blob/fdbfb1431206f8d7c812dca3e1d0dcd7389f1d6d/packages/board/src/input-interpretation/raw-input-parser/vanilla-touch-event-parser.ts#L14)

***

### zoomDisabled

> **zoomDisabled**: `boolean`

Defined in: [packages/board/src/input-interpretation/raw-input-parser/vanilla-touch-event-parser.ts:13](https://github.com/ue-too/ue-too/blob/fdbfb1431206f8d7c812dca3e1d0dcd7389f1d6d/packages/board/src/input-interpretation/raw-input-parser/vanilla-touch-event-parser.ts#L13)

## Methods

### attach()

> **attach**(`canvas`): `void`

Defined in: [packages/board/src/input-interpretation/raw-input-parser/vanilla-touch-event-parser.ts:17](https://github.com/ue-too/ue-too/blob/fdbfb1431206f8d7c812dca3e1d0dcd7389f1d6d/packages/board/src/input-interpretation/raw-input-parser/vanilla-touch-event-parser.ts#L17)

#### Parameters

##### canvas

`HTMLCanvasElement`

#### Returns

`void`

***

### setUp()

> **setUp**(): `void`

Defined in: [packages/board/src/input-interpretation/raw-input-parser/vanilla-touch-event-parser.ts:15](https://github.com/ue-too/ue-too/blob/fdbfb1431206f8d7c812dca3e1d0dcd7389f1d6d/packages/board/src/input-interpretation/raw-input-parser/vanilla-touch-event-parser.ts#L15)

#### Returns

`void`

***

### tearDown()

> **tearDown**(): `void`

Defined in: [packages/board/src/input-interpretation/raw-input-parser/vanilla-touch-event-parser.ts:16](https://github.com/ue-too/ue-too/blob/fdbfb1431206f8d7c812dca3e1d0dcd7389f1d6d/packages/board/src/input-interpretation/raw-input-parser/vanilla-touch-event-parser.ts#L16)

#### Returns

`void`
