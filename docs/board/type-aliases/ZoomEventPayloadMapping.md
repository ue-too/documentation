[@ue-too/board](../globals.md) / ZoomEventPayloadMapping

# Type Alias: ZoomEventPayloadMapping

> **ZoomEventPayloadMapping** = `object`

Defined in: [packages/board/src/camera/camera-mux/animation-and-lock/zoom-control-state-machine.ts:70](https://github.com/ue-too/ue-too/blob/1055c6abca1ea3a0e952b0825f36e0ca2527df85/packages/board/src/camera/camera-mux/animation-and-lock/zoom-control-state-machine.ts#L70)

Event payload type mapping for the zoom control state machine.

## Remarks

Maps event names to their payload types. Events include:
- User input events (`userZoomByAtInput`, `userZoomToAtInput`)
- Transition/animation events (`transitionZoomByAtInput`, `transitionZoomToAtInput`, etc.)
- Locked object events (`lockedOnObjectZoomByAtInput`, `lockedOnObjectZoomToAtInput`)
- Control events (`unlock`, `initiateTransition`)

## Properties

### initiateTransition

> **initiateTransition**: `object`

Defined in: [packages/board/src/camera/camera-mux/animation-and-lock/zoom-control-state-machine.ts:81](https://github.com/ue-too/ue-too/blob/1055c6abca1ea3a0e952b0825f36e0ca2527df85/packages/board/src/camera/camera-mux/animation-and-lock/zoom-control-state-machine.ts#L81)

***

### lockedOnObjectZoomByAtInput

> **lockedOnObjectZoomByAtInput**: [`ZoomByAtInputPayload`](ZoomByAtInputPayload.md)

Defined in: [packages/board/src/camera/camera-mux/animation-and-lock/zoom-control-state-machine.ts:78](https://github.com/ue-too/ue-too/blob/1055c6abca1ea3a0e952b0825f36e0ca2527df85/packages/board/src/camera/camera-mux/animation-and-lock/zoom-control-state-machine.ts#L78)

***

### lockedOnObjectZoomToAtInput

> **lockedOnObjectZoomToAtInput**: [`ZoomToAtInputPayload`](ZoomToAtInputPayload.md)

Defined in: [packages/board/src/camera/camera-mux/animation-and-lock/zoom-control-state-machine.ts:79](https://github.com/ue-too/ue-too/blob/1055c6abca1ea3a0e952b0825f36e0ca2527df85/packages/board/src/camera/camera-mux/animation-and-lock/zoom-control-state-machine.ts#L79)

***

### transitionZoomByAtCenterInput

> **transitionZoomByAtCenterInput**: [`ZoomByPayload`](ZoomByPayload.md)

Defined in: [packages/board/src/camera/camera-mux/animation-and-lock/zoom-control-state-machine.ts:75](https://github.com/ue-too/ue-too/blob/1055c6abca1ea3a0e952b0825f36e0ca2527df85/packages/board/src/camera/camera-mux/animation-and-lock/zoom-control-state-machine.ts#L75)

***

### transitionZoomByAtInput

> **transitionZoomByAtInput**: [`ZoomByAtInputPayload`](ZoomByAtInputPayload.md)

Defined in: [packages/board/src/camera/camera-mux/animation-and-lock/zoom-control-state-machine.ts:73](https://github.com/ue-too/ue-too/blob/1055c6abca1ea3a0e952b0825f36e0ca2527df85/packages/board/src/camera/camera-mux/animation-and-lock/zoom-control-state-machine.ts#L73)

***

### transitionZoomToAtCenterInput

> **transitionZoomToAtCenterInput**: [`ZoomToAtInputPayload`](ZoomToAtInputPayload.md)

Defined in: [packages/board/src/camera/camera-mux/animation-and-lock/zoom-control-state-machine.ts:76](https://github.com/ue-too/ue-too/blob/1055c6abca1ea3a0e952b0825f36e0ca2527df85/packages/board/src/camera/camera-mux/animation-and-lock/zoom-control-state-machine.ts#L76)

***

### transitionZoomToAtInput

> **transitionZoomToAtInput**: [`ZoomToAtInputPayload`](ZoomToAtInputPayload.md)

Defined in: [packages/board/src/camera/camera-mux/animation-and-lock/zoom-control-state-machine.ts:74](https://github.com/ue-too/ue-too/blob/1055c6abca1ea3a0e952b0825f36e0ca2527df85/packages/board/src/camera/camera-mux/animation-and-lock/zoom-control-state-machine.ts#L74)

***

### transitionZoomToAtWorldInput

> **transitionZoomToAtWorldInput**: [`ZoomToAtInputPayload`](ZoomToAtInputPayload.md)

Defined in: [packages/board/src/camera/camera-mux/animation-and-lock/zoom-control-state-machine.ts:77](https://github.com/ue-too/ue-too/blob/1055c6abca1ea3a0e952b0825f36e0ca2527df85/packages/board/src/camera/camera-mux/animation-and-lock/zoom-control-state-machine.ts#L77)

***

### unlock

> **unlock**: `object`

Defined in: [packages/board/src/camera/camera-mux/animation-and-lock/zoom-control-state-machine.ts:80](https://github.com/ue-too/ue-too/blob/1055c6abca1ea3a0e952b0825f36e0ca2527df85/packages/board/src/camera/camera-mux/animation-and-lock/zoom-control-state-machine.ts#L80)

***

### userZoomByAtInput

> **userZoomByAtInput**: [`ZoomByAtInputPayload`](ZoomByAtInputPayload.md)

Defined in: [packages/board/src/camera/camera-mux/animation-and-lock/zoom-control-state-machine.ts:71](https://github.com/ue-too/ue-too/blob/1055c6abca1ea3a0e952b0825f36e0ca2527df85/packages/board/src/camera/camera-mux/animation-and-lock/zoom-control-state-machine.ts#L71)

***

### userZoomToAtInput

> **userZoomToAtInput**: [`ZoomToAtInputPayload`](ZoomToAtInputPayload.md)

Defined in: [packages/board/src/camera/camera-mux/animation-and-lock/zoom-control-state-machine.ts:72](https://github.com/ue-too/ue-too/blob/1055c6abca1ea3a0e952b0825f36e0ca2527df85/packages/board/src/camera/camera-mux/animation-and-lock/zoom-control-state-machine.ts#L72)
