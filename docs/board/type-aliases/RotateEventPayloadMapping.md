[@ue-too/board](../globals.md) / RotateEventPayloadMapping

# Type Alias: RotateEventPayloadMapping

> **RotateEventPayloadMapping** = `object`

Defined in: [packages/board/src/camera/camera-mux/animation-and-lock/rotation-control-state-machine.ts:50](https://github.com/ue-too/ue-too/blob/1055c6abca1ea3a0e952b0825f36e0ca2527df85/packages/board/src/camera/camera-mux/animation-and-lock/rotation-control-state-machine.ts#L50)

Event payload type mapping for the rotation control state machine.

## Remarks

Maps event names to their payload types. Events include:
- User input events (`userRotateByInput`, `userRotateToInput`)
- Transition/animation events (`transitionRotateByInput`, `transitionRotateToInput`)
- Locked object events (`lockedOnObjectRotateByInput`, `lockedOnObjectRotateToInput`)
- Control events (`unlock`, `initateTransition`)

## Properties

### initateTransition

> **initateTransition**: `EmptyPayload`

Defined in: [packages/board/src/camera/camera-mux/animation-and-lock/rotation-control-state-machine.ts:58](https://github.com/ue-too/ue-too/blob/1055c6abca1ea3a0e952b0825f36e0ca2527df85/packages/board/src/camera/camera-mux/animation-and-lock/rotation-control-state-machine.ts#L58)

***

### lockedOnObjectRotateByInput

> **lockedOnObjectRotateByInput**: [`RotateByInputEventPayload`](RotateByInputEventPayload.md)

Defined in: [packages/board/src/camera/camera-mux/animation-and-lock/rotation-control-state-machine.ts:55](https://github.com/ue-too/ue-too/blob/1055c6abca1ea3a0e952b0825f36e0ca2527df85/packages/board/src/camera/camera-mux/animation-and-lock/rotation-control-state-machine.ts#L55)

***

### lockedOnObjectRotateToInput

> **lockedOnObjectRotateToInput**: [`RotateToInputEventPayload`](RotateToInputEventPayload.md)

Defined in: [packages/board/src/camera/camera-mux/animation-and-lock/rotation-control-state-machine.ts:56](https://github.com/ue-too/ue-too/blob/1055c6abca1ea3a0e952b0825f36e0ca2527df85/packages/board/src/camera/camera-mux/animation-and-lock/rotation-control-state-machine.ts#L56)

***

### transitionRotateByInput

> **transitionRotateByInput**: [`RotateByInputEventPayload`](RotateByInputEventPayload.md)

Defined in: [packages/board/src/camera/camera-mux/animation-and-lock/rotation-control-state-machine.ts:53](https://github.com/ue-too/ue-too/blob/1055c6abca1ea3a0e952b0825f36e0ca2527df85/packages/board/src/camera/camera-mux/animation-and-lock/rotation-control-state-machine.ts#L53)

***

### transitionRotateToInput

> **transitionRotateToInput**: [`RotateToInputEventPayload`](RotateToInputEventPayload.md)

Defined in: [packages/board/src/camera/camera-mux/animation-and-lock/rotation-control-state-machine.ts:54](https://github.com/ue-too/ue-too/blob/1055c6abca1ea3a0e952b0825f36e0ca2527df85/packages/board/src/camera/camera-mux/animation-and-lock/rotation-control-state-machine.ts#L54)

***

### unlock

> **unlock**: `EmptyPayload`

Defined in: [packages/board/src/camera/camera-mux/animation-and-lock/rotation-control-state-machine.ts:57](https://github.com/ue-too/ue-too/blob/1055c6abca1ea3a0e952b0825f36e0ca2527df85/packages/board/src/camera/camera-mux/animation-and-lock/rotation-control-state-machine.ts#L57)

***

### userRotateByInput

> **userRotateByInput**: [`RotateByInputEventPayload`](RotateByInputEventPayload.md)

Defined in: [packages/board/src/camera/camera-mux/animation-and-lock/rotation-control-state-machine.ts:51](https://github.com/ue-too/ue-too/blob/1055c6abca1ea3a0e952b0825f36e0ca2527df85/packages/board/src/camera/camera-mux/animation-and-lock/rotation-control-state-machine.ts#L51)

***

### userRotateToInput

> **userRotateToInput**: [`RotateToInputEventPayload`](RotateToInputEventPayload.md)

Defined in: [packages/board/src/camera/camera-mux/animation-and-lock/rotation-control-state-machine.ts:52](https://github.com/ue-too/ue-too/blob/1055c6abca1ea3a0e952b0825f36e0ca2527df85/packages/board/src/camera/camera-mux/animation-and-lock/rotation-control-state-machine.ts#L52)
