[@ue-too/board](../globals.md) / PanEventPayloadMapping

# Type Alias: PanEventPayloadMapping

> **PanEventPayloadMapping** = `object`

Defined in: [packages/board/src/camera/camera-mux/animation-and-lock/pan-control-state-machine.ts:51](https://github.com/ue-too/ue-too/blob/e468a9961da59c81663192ec8df16ebc8e17abac/packages/board/src/camera/camera-mux/animation-and-lock/pan-control-state-machine.ts#L51)

Event payload type mapping for the pan control state machine.

## Remarks

Maps event names to their payload types. Events include:
- User input events (`userPanByInput`, `userPanToInput`)
- Transition/animation events (`transitionPanByInput`, `transitionPanToInput`)
- Locked object events (`lockedOnObjectPanByInput`, `lockedOnObjectPanToInput`)
- Control events (`unlock`, `initateTransition`)

## Properties

### initateTransition

> **initateTransition**: `EmptyPayload`

Defined in: [packages/board/src/camera/camera-mux/animation-and-lock/pan-control-state-machine.ts:59](https://github.com/ue-too/ue-too/blob/e468a9961da59c81663192ec8df16ebc8e17abac/packages/board/src/camera/camera-mux/animation-and-lock/pan-control-state-machine.ts#L59)

***

### lockedOnObjectPanByInput

> **lockedOnObjectPanByInput**: [`PanByInputEventPayload`](PanByInputEventPayload.md)

Defined in: [packages/board/src/camera/camera-mux/animation-and-lock/pan-control-state-machine.ts:56](https://github.com/ue-too/ue-too/blob/e468a9961da59c81663192ec8df16ebc8e17abac/packages/board/src/camera/camera-mux/animation-and-lock/pan-control-state-machine.ts#L56)

***

### lockedOnObjectPanToInput

> **lockedOnObjectPanToInput**: [`PanToInputEventPayload`](PanToInputEventPayload.md)

Defined in: [packages/board/src/camera/camera-mux/animation-and-lock/pan-control-state-machine.ts:57](https://github.com/ue-too/ue-too/blob/e468a9961da59c81663192ec8df16ebc8e17abac/packages/board/src/camera/camera-mux/animation-and-lock/pan-control-state-machine.ts#L57)

***

### transitionPanByInput

> **transitionPanByInput**: [`PanByInputEventPayload`](PanByInputEventPayload.md)

Defined in: [packages/board/src/camera/camera-mux/animation-and-lock/pan-control-state-machine.ts:54](https://github.com/ue-too/ue-too/blob/e468a9961da59c81663192ec8df16ebc8e17abac/packages/board/src/camera/camera-mux/animation-and-lock/pan-control-state-machine.ts#L54)

***

### transitionPanToInput

> **transitionPanToInput**: [`PanToInputEventPayload`](PanToInputEventPayload.md)

Defined in: [packages/board/src/camera/camera-mux/animation-and-lock/pan-control-state-machine.ts:55](https://github.com/ue-too/ue-too/blob/e468a9961da59c81663192ec8df16ebc8e17abac/packages/board/src/camera/camera-mux/animation-and-lock/pan-control-state-machine.ts#L55)

***

### unlock

> **unlock**: `EmptyPayload`

Defined in: [packages/board/src/camera/camera-mux/animation-and-lock/pan-control-state-machine.ts:58](https://github.com/ue-too/ue-too/blob/e468a9961da59c81663192ec8df16ebc8e17abac/packages/board/src/camera/camera-mux/animation-and-lock/pan-control-state-machine.ts#L58)

***

### userPanByInput

> **userPanByInput**: [`PanByInputEventPayload`](PanByInputEventPayload.md)

Defined in: [packages/board/src/camera/camera-mux/animation-and-lock/pan-control-state-machine.ts:52](https://github.com/ue-too/ue-too/blob/e468a9961da59c81663192ec8df16ebc8e17abac/packages/board/src/camera/camera-mux/animation-and-lock/pan-control-state-machine.ts#L52)

***

### userPanToInput

> **userPanToInput**: [`PanToInputEventPayload`](PanToInputEventPayload.md)

Defined in: [packages/board/src/camera/camera-mux/animation-and-lock/pan-control-state-machine.ts:53](https://github.com/ue-too/ue-too/blob/e468a9961da59c81663192ec8df16ebc8e17abac/packages/board/src/camera/camera-mux/animation-and-lock/pan-control-state-machine.ts#L53)
