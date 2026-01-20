[@ue-too/board](../globals.md) / InputOrchestrator

# Class: InputOrchestrator

Defined in: [packages/board/src/input-interpretation/input-orchestrator.ts:69](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/board/src/input-interpretation/input-orchestrator.ts#L69)

Central orchestrator that coordinates input interpretation and camera control for the infinite canvas.

## Remarks

The InputOrchestrator serves as the mediator between input state machines and camera control systems.
It implements a permission-based architecture where:

1. **Event Flow**: State machines produce high-level gesture events (pan, zoom, rotate)
2. **Permission Check**: Events are sent to CameraMux for permission validation
3. **Execution**: If allowed, gestures are executed on CameraRig
4. **Broadcasting**: Raw events are simultaneously broadcast to observers via UserInputPublisher

**Architecture Pattern**:
```
State Machines → Orchestrator → CameraMux (permission) → CameraRig (execution)
                      ↓
                UserInputPublisher (observers)
```

This design decouples state machines from camera control, allowing state machines to focus solely
on gesture recognition while the orchestrator handles the complexities of camera coordination,
permission management, and event distribution.

**Key Benefits**:
- Single point of control for all camera operations
- State machines remain unaware of camera implementation
- Parallel path for observers to react to raw input events
- Consistent handling of KMT and Touch input modalities

## Example

```typescript
// Create the orchestrator
const cameraMux = new CameraMux();
const cameraRig = new CameraRig(camera, viewport);
const publisher = new RawUserInputPublisher();
const orchestrator = new InputOrchestrator(cameraMux, cameraRig, publisher);

// State machines send their output to the orchestrator
const kmtStateMachine = createKmtInputStateMachine(kmtContext);
const result = kmtStateMachine.happens("leftPointerMove", {x: 100, y: 200});
orchestrator.processInputEventOutput(result.output);

// Observers can subscribe to raw input events
publisher.on("pan", (event) => {
  console.log("Pan gesture detected:", event.diff);
});
```

## Constructors

### Constructor

> **new InputOrchestrator**(`cameraMux`, `cameraRig`, `publisher?`): `InputOrchestrator`

Defined in: [packages/board/src/input-interpretation/input-orchestrator.ts:85](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/board/src/input-interpretation/input-orchestrator.ts#L85)

Creates a new InputOrchestrator instance.

#### Parameters

##### cameraMux

[`CameraMux`](../interfaces/CameraMux.md)

The camera multiplexer that validates and controls camera operation permissions

##### cameraRig

[`CameraRig`](../interfaces/CameraRig.md)

The camera rig that executes camera transformations

##### publisher?

[`UserInputPublisher`](../interfaces/UserInputPublisher.md)

Optional publisher for broadcasting raw input events to observers

#### Returns

`InputOrchestrator`

#### Remarks

The publisher parameter is optional to support scenarios where event broadcasting is not needed.
When provided, all input events are broadcast in parallel to camera control execution.

## Accessors

### cameraMux

#### Get Signature

> **get** **cameraMux**(): [`CameraMux`](../interfaces/CameraMux.md)

Defined in: [packages/board/src/input-interpretation/input-orchestrator.ts:266](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/board/src/input-interpretation/input-orchestrator.ts#L266)

Gets the CameraMux instance for direct access to permission control.

##### Returns

[`CameraMux`](../interfaces/CameraMux.md)

The camera multiplexer instance

#### Set Signature

> **set** **cameraMux**(`cameraMux`): `void`

Defined in: [packages/board/src/input-interpretation/input-orchestrator.ts:278](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/board/src/input-interpretation/input-orchestrator.ts#L278)

Sets a new CameraMux instance.

##### Remarks

Allows dynamic reconfiguration of camera permission logic at runtime.

##### Parameters

###### cameraMux

[`CameraMux`](../interfaces/CameraMux.md)

The new camera multiplexer to use for permission control

##### Returns

`void`

***

### publisher

#### Get Signature

> **get** **publisher**(): [`UserInputPublisher`](../interfaces/UserInputPublisher.md) \| `undefined`

Defined in: [packages/board/src/input-interpretation/input-orchestrator.ts:257](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/board/src/input-interpretation/input-orchestrator.ts#L257)

Gets the UserInputPublisher for direct access to event subscription.

##### Remarks

Allows external code to subscribe to raw input events without going through the orchestrator.

##### Returns

[`UserInputPublisher`](../interfaces/UserInputPublisher.md) \| `undefined`

The publisher instance, or undefined if not configured

## Methods

### processInputEvent()

> **processInputEvent**(`input`): `void`

Defined in: [packages/board/src/input-interpretation/input-orchestrator.ts:126](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/board/src/input-interpretation/input-orchestrator.ts#L126)

#### Parameters

##### input

[`OutputEvent`](../type-aliases/OutputEvent.md)

#### Returns

`void`

***

### processInputEventOutput()

> **processInputEventOutput**(`output`): `void`

Defined in: [packages/board/src/input-interpretation/input-orchestrator.ts:112](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/board/src/input-interpretation/input-orchestrator.ts#L112)

Processes output events from state machines and routes them to camera control and observers.

#### Parameters

##### output

`any`

The output from a state machine, can be a single event, array of events, or any value

#### Returns

`void`

#### Remarks

This method serves as the main entry point for state machine outputs. It:
1. Validates whether the output is a valid OutputEvent
2. Handles both single events and arrays of events
3. Routes each valid event through the camera control pipeline
4. Broadcasts events to observers via the publisher

Called by event parsers after the state machine processes an input and produces output.
The method uses type guards to ensure type safety when handling dynamic output types.

#### Example

```typescript
const result = stateMachine.happens("scroll", {deltaX: 0, deltaY: 10, x: 100, y: 200});
orchestrator.processInputEventOutput(result.output);
```
