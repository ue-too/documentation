[@ue-too/board](../globals.md) / KmtInputStates

# Type Alias: KmtInputStates

> **KmtInputStates** = `CreateStateType`\<*typeof* `KMT_INPUT_STATES`\>

Defined in: [packages/board/src/input-interpretation/input-state-machine/kmt-input-state-machine.ts:23](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/board/src/input-interpretation/input-state-machine/kmt-input-state-machine.ts#L23)

Possible states of the Keyboard/Mouse/Trackpad input state machine.

## Remarks

State transitions:
- **IDLE**: Default state, waiting for user input
- **READY_TO_PAN_VIA_SPACEBAR**: Spacebar pressed, ready to pan with left-click drag
- **INITIAL_PAN**: First frame of pan via spacebar (detects accidental clicks)
- **PAN**: Active panning via spacebar + left-click drag
- **READY_TO_PAN_VIA_SCROLL_WHEEL**: Middle mouse button pressed, ready to pan
- **PAN_VIA_SCROLL_WHEEL**: Active panning via middle-click drag
- **DISABLED**: Input temporarily disabled (e.g., during UI interactions)
