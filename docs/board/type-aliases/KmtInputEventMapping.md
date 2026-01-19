[@ue-too/board](../globals.md) / KmtInputEventMapping

# Type Alias: KmtInputEventMapping

> **KmtInputEventMapping** = `object`

Defined in: [packages/board/src/input-interpretation/input-state-machine/kmt-input-state-machine.ts:90](https://github.com/ue-too/ue-too/blob/1055c6abca1ea3a0e952b0825f36e0ca2527df85/packages/board/src/input-interpretation/input-state-machine/kmt-input-state-machine.ts#L90)

Event mapping for the KMT input state machine.

## Remarks

Maps event names to their payload types. Used by the state machine framework
to provide type-safe event handling.

Key events:
- **leftPointerDown/Up/Move**: Left mouse button interactions
- **middlePointerDown/Up/Move**: Middle mouse button interactions (pan)
- **spacebarDown/Up**: Spacebar for pan mode
- **scroll**: Regular scroll (pan or zoom depending on device)
- **scrollWithCtrl**: Ctrl + scroll (always zoom)
- **disable/enable**: Temporarily disable/enable input processing

## Properties

### cursorOnElement

> **cursorOnElement**: `EmptyPayload`

Defined in: [packages/board/src/input-interpretation/input-state-machine/kmt-input-state-machine.ts:97](https://github.com/ue-too/ue-too/blob/1055c6abca1ea3a0e952b0825f36e0ca2527df85/packages/board/src/input-interpretation/input-state-machine/kmt-input-state-machine.ts#L97)

***

### disable

> **disable**: `EmptyPayload`

Defined in: [packages/board/src/input-interpretation/input-state-machine/kmt-input-state-machine.ts:103](https://github.com/ue-too/ue-too/blob/1055c6abca1ea3a0e952b0825f36e0ca2527df85/packages/board/src/input-interpretation/input-state-machine/kmt-input-state-machine.ts#L103)

***

### enable

> **enable**: `EmptyPayload`

Defined in: [packages/board/src/input-interpretation/input-state-machine/kmt-input-state-machine.ts:104](https://github.com/ue-too/ue-too/blob/1055c6abca1ea3a0e952b0825f36e0ca2527df85/packages/board/src/input-interpretation/input-state-machine/kmt-input-state-machine.ts#L104)

***

### leftPointerDown

> **leftPointerDown**: [`PointerEventPayload`](PointerEventPayload.md)

Defined in: [packages/board/src/input-interpretation/input-state-machine/kmt-input-state-machine.ts:91](https://github.com/ue-too/ue-too/blob/1055c6abca1ea3a0e952b0825f36e0ca2527df85/packages/board/src/input-interpretation/input-state-machine/kmt-input-state-machine.ts#L91)

***

### leftPointerMove

> **leftPointerMove**: [`PointerEventPayload`](PointerEventPayload.md)

Defined in: [packages/board/src/input-interpretation/input-state-machine/kmt-input-state-machine.ts:93](https://github.com/ue-too/ue-too/blob/1055c6abca1ea3a0e952b0825f36e0ca2527df85/packages/board/src/input-interpretation/input-state-machine/kmt-input-state-machine.ts#L93)

***

### leftPointerUp

> **leftPointerUp**: [`PointerEventPayload`](PointerEventPayload.md)

Defined in: [packages/board/src/input-interpretation/input-state-machine/kmt-input-state-machine.ts:92](https://github.com/ue-too/ue-too/blob/1055c6abca1ea3a0e952b0825f36e0ca2527df85/packages/board/src/input-interpretation/input-state-machine/kmt-input-state-machine.ts#L92)

***

### middlePointerDown

> **middlePointerDown**: [`PointerEventPayload`](PointerEventPayload.md)

Defined in: [packages/board/src/input-interpretation/input-state-machine/kmt-input-state-machine.ts:100](https://github.com/ue-too/ue-too/blob/1055c6abca1ea3a0e952b0825f36e0ca2527df85/packages/board/src/input-interpretation/input-state-machine/kmt-input-state-machine.ts#L100)

***

### middlePointerMove

> **middlePointerMove**: [`PointerEventPayload`](PointerEventPayload.md)

Defined in: [packages/board/src/input-interpretation/input-state-machine/kmt-input-state-machine.ts:102](https://github.com/ue-too/ue-too/blob/1055c6abca1ea3a0e952b0825f36e0ca2527df85/packages/board/src/input-interpretation/input-state-machine/kmt-input-state-machine.ts#L102)

***

### middlePointerUp

> **middlePointerUp**: [`PointerEventPayload`](PointerEventPayload.md)

Defined in: [packages/board/src/input-interpretation/input-state-machine/kmt-input-state-machine.ts:101](https://github.com/ue-too/ue-too/blob/1055c6abca1ea3a0e952b0825f36e0ca2527df85/packages/board/src/input-interpretation/input-state-machine/kmt-input-state-machine.ts#L101)

***

### pointerMove

> **pointerMove**: [`PointerEventPayload`](PointerEventPayload.md)

Defined in: [packages/board/src/input-interpretation/input-state-machine/kmt-input-state-machine.ts:105](https://github.com/ue-too/ue-too/blob/1055c6abca1ea3a0e952b0825f36e0ca2527df85/packages/board/src/input-interpretation/input-state-machine/kmt-input-state-machine.ts#L105)

***

### scroll

> **scroll**: [`ScrollWithCtrlEventPayload`](ScrollWithCtrlEventPayload.md)

Defined in: [packages/board/src/input-interpretation/input-state-machine/kmt-input-state-machine.ts:98](https://github.com/ue-too/ue-too/blob/1055c6abca1ea3a0e952b0825f36e0ca2527df85/packages/board/src/input-interpretation/input-state-machine/kmt-input-state-machine.ts#L98)

***

### scrollWithCtrl

> **scrollWithCtrl**: [`ScrollWithCtrlEventPayload`](ScrollWithCtrlEventPayload.md)

Defined in: [packages/board/src/input-interpretation/input-state-machine/kmt-input-state-machine.ts:99](https://github.com/ue-too/ue-too/blob/1055c6abca1ea3a0e952b0825f36e0ca2527df85/packages/board/src/input-interpretation/input-state-machine/kmt-input-state-machine.ts#L99)

***

### spacebarDown

> **spacebarDown**: `EmptyPayload`

Defined in: [packages/board/src/input-interpretation/input-state-machine/kmt-input-state-machine.ts:94](https://github.com/ue-too/ue-too/blob/1055c6abca1ea3a0e952b0825f36e0ca2527df85/packages/board/src/input-interpretation/input-state-machine/kmt-input-state-machine.ts#L94)

***

### spacebarUp

> **spacebarUp**: `EmptyPayload`

Defined in: [packages/board/src/input-interpretation/input-state-machine/kmt-input-state-machine.ts:95](https://github.com/ue-too/ue-too/blob/1055c6abca1ea3a0e952b0825f36e0ca2527df85/packages/board/src/input-interpretation/input-state-machine/kmt-input-state-machine.ts#L95)

***

### stayIdle

> **stayIdle**: `EmptyPayload`

Defined in: [packages/board/src/input-interpretation/input-state-machine/kmt-input-state-machine.ts:96](https://github.com/ue-too/ue-too/blob/1055c6abca1ea3a0e952b0825f36e0ca2527df85/packages/board/src/input-interpretation/input-state-machine/kmt-input-state-machine.ts#L96)
