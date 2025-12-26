[@ue-too/board](../globals.md) / Canvas

# Interface: Canvas

Defined in: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:53](https://github.com/ue-too/ue-too/blob/aabc0f56e9e83141d0fd935ef6ac3e5fe0af0a61/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L53)

Abstraction interface for canvas element access and manipulation.

## Remarks

This interface provides a decoupled way to access canvas properties without direct DOM access.
Multiple implementations exist to support different use cases:
- **CanvasProxy**: Full implementation for HTML canvas elements with dimension tracking
- **SvgProxy**: Implementation for SVG elements
- **DummyCanvas**: No-op implementation for web worker contexts
- **WorkerRelayCanvas**: Relays canvas dimension updates to web workers
- **CanvasCacheInWebWorker**: Caches canvas dimensions within a web worker

The abstraction enables:
- Coordinate system transformations (window → canvas → viewport)
- Canvas dimension tracking without repeated DOM queries
- Cursor style management
- Support for both canvas and SVG rendering contexts

## Properties

### detached

> **detached**: `boolean`

Defined in: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:65](https://github.com/ue-too/ue-too/blob/aabc0f56e9e83141d0fd935ef6ac3e5fe0af0a61/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L65)

Whether the canvas is currently detached from the DOM

***

### dimensions

> **dimensions**: [`CanvasDimensions`](../type-aliases/CanvasDimensions.md)

Defined in: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:63](https://github.com/ue-too/ue-too/blob/aabc0f56e9e83141d0fd935ef6ac3e5fe0af0a61/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L63)

Combined dimensions and position information

***

### height

> **height**: `number`

Defined in: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:57](https://github.com/ue-too/ue-too/blob/aabc0f56e9e83141d0fd935ef6ac3e5fe0af0a61/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L57)

The canvas height in CSS pixels

***

### position

> **position**: `Point`

Defined in: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:59](https://github.com/ue-too/ue-too/blob/aabc0f56e9e83141d0fd935ef6ac3e5fe0af0a61/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L59)

The top-left position of the canvas in window coordinates

***

### setCursor()

> **setCursor**: (`style`) => `void`

Defined in: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:61](https://github.com/ue-too/ue-too/blob/aabc0f56e9e83141d0fd935ef6ac3e5fe0af0a61/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L61)

Sets the CSS cursor style for visual feedback

#### Parameters

##### style

[`CursorStyle`](../enumerations/CursorStyle.md)

#### Returns

`void`

***

### tearDown()

> **tearDown**: () => `void`

Defined in: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:67](https://github.com/ue-too/ue-too/blob/aabc0f56e9e83141d0fd935ef6ac3e5fe0af0a61/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L67)

Cleanup method to dispose of resources and event listeners

#### Returns

`void`

***

### width

> **width**: `number`

Defined in: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:55](https://github.com/ue-too/ue-too/blob/aabc0f56e9e83141d0fd935ef6ac3e5fe0af0a61/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L55)

The canvas width in CSS pixels
