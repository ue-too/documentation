[@ue-too/board](../globals.md) / Canvas

# Interface: Canvas

Defined in: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:17](https://github.com/ue-too/ue-too/blob/95dd78435970713202a67be3986e96a80ff00749/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L17)

## Description

A proxy for the canvas so that client code that needs to access 
the canvas dimensions and position does not need to access the DOM directly.

## Properties

### detached

> **detached**: `boolean`

Defined in: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:23](https://github.com/ue-too/ue-too/blob/95dd78435970713202a67be3986e96a80ff00749/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L23)

***

### dimensions

> **dimensions**: [`CanvasDimensions`](../type-aliases/CanvasDimensions.md)

Defined in: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:22](https://github.com/ue-too/ue-too/blob/95dd78435970713202a67be3986e96a80ff00749/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L22)

***

### height

> **height**: `number`

Defined in: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:19](https://github.com/ue-too/ue-too/blob/95dd78435970713202a67be3986e96a80ff00749/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L19)

***

### position

> **position**: `Point`

Defined in: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:20](https://github.com/ue-too/ue-too/blob/95dd78435970713202a67be3986e96a80ff00749/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L20)

***

### setCursor()

> **setCursor**: (`style`) => `void`

Defined in: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:21](https://github.com/ue-too/ue-too/blob/95dd78435970713202a67be3986e96a80ff00749/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L21)

#### Parameters

##### style

[`CursorStyle`](../enumerations/CursorStyle.md)

#### Returns

`void`

***

### tearDown()

> **tearDown**: () => `void`

Defined in: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:24](https://github.com/ue-too/ue-too/blob/95dd78435970713202a67be3986e96a80ff00749/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L24)

#### Returns

`void`

***

### width

> **width**: `number`

Defined in: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:18](https://github.com/ue-too/ue-too/blob/95dd78435970713202a67be3986e96a80ff00749/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L18)
