[@ue-too/board](../globals.md) / TouchStates

# Type Alias: TouchStates

> **TouchStates** = `"IDLE"` \| `"PENDING"` \| `"IN_PROGRESS"`

Defined in: [packages/board/src/input-interpretation/input-state-machine/touch-input-state-machine.ts:20](https://github.com/ue-too/ue-too/blob/aabc0f56e9e83141d0fd935ef6ac3e5fe0af0a61/packages/board/src/input-interpretation/input-state-machine/touch-input-state-machine.ts#L20)

Possible states of the touch input state machine.

## Remarks

State transitions:
- **IDLE**: No touches active, or single touch (reserved for UI)
- **PENDING**: Exactly two touches active, waiting for movement to determine gesture type
- **IN_PROGRESS**: Two-finger gesture in progress (pan or zoom)

The state machine only handles two-finger gestures. Single-finger touches are ignored
to avoid interfering with UI interactions (button clicks, text selection, etc.).
