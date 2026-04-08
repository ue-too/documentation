[@ue-too/board](../../modules.md) / [index](../index.md) / InputOrchestrator

# 類別: InputOrchestrator

定義於: [packages/board/src/input-interpretation/input-orchestrator.ts:75](https://github.com/ue-too/ue-too/blob/feb7c80222df5d3cd97bfa1933bafe3190c6e48d/packages/board/src/input-interpretation/input-orchestrator.ts#L75)

Central orchestrator that coordinates input interpretation and camera control for the infinite canvas.

## 備註

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

## 範例

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

## 建構函式

### 建構函式

> **new InputOrchestrator**(`cameraMux`, `cameraRig`, `publisher?`): `InputOrchestrator`

定義於: [packages/board/src/input-interpretation/input-orchestrator.ts:91](https://github.com/ue-too/ue-too/blob/feb7c80222df5d3cd97bfa1933bafe3190c6e48d/packages/board/src/input-interpretation/input-orchestrator.ts#L91)

Creates a new InputOrchestrator instance.

#### 參數

##### cameraMux

[`CameraMux`](../interfaces/CameraMux.md)

The camera multiplexer that validates and controls camera operation permissions

##### cameraRig

[`CameraRig`](../interfaces/CameraRig.md)

The camera rig that executes camera transformations

##### publisher?

[`UserInputPublisher`](../interfaces/UserInputPublisher.md)

Optional publisher for broadcasting raw input events to observers

#### 回傳

`InputOrchestrator`

#### 備註

The publisher parameter is optional to support scenarios where event broadcasting is not needed.
When provided, all input events are broadcast in parallel to camera control execution.

## 存取器

### cameraMux

#### Getter 簽章

> **get** **cameraMux**(): [`CameraMux`](../interfaces/CameraMux.md)

定義於: [packages/board/src/input-interpretation/input-orchestrator.ts:288](https://github.com/ue-too/ue-too/blob/feb7c80222df5d3cd97bfa1933bafe3190c6e48d/packages/board/src/input-interpretation/input-orchestrator.ts#L288)

Gets the CameraMux instance for direct access to permission control.

##### 回傳

[`CameraMux`](../interfaces/CameraMux.md)

The camera multiplexer instance

#### Setter 簽章

> **set** **cameraMux**(`cameraMux`): `void`

定義於: [packages/board/src/input-interpretation/input-orchestrator.ts:300](https://github.com/ue-too/ue-too/blob/feb7c80222df5d3cd97bfa1933bafe3190c6e48d/packages/board/src/input-interpretation/input-orchestrator.ts#L300)

Sets a new CameraMux instance.

##### 備註

Allows dynamic reconfiguration of camera permission logic at runtime.

##### 參數

###### cameraMux

[`CameraMux`](../interfaces/CameraMux.md)

The new camera multiplexer to use for permission control

##### 回傳

`void`

***

### publisher

#### Getter 簽章

> **get** **publisher**(): [`UserInputPublisher`](../interfaces/UserInputPublisher.md) \| `undefined`

定義於: [packages/board/src/input-interpretation/input-orchestrator.ts:279](https://github.com/ue-too/ue-too/blob/feb7c80222df5d3cd97bfa1933bafe3190c6e48d/packages/board/src/input-interpretation/input-orchestrator.ts#L279)

Gets the UserInputPublisher for direct access to event subscription.

##### 備註

Allows external code to subscribe to raw input events without going through the orchestrator.

##### 回傳

[`UserInputPublisher`](../interfaces/UserInputPublisher.md) \| `undefined`

The publisher instance, or undefined if not configured

## 方法

### processInputEvent()

> **processInputEvent**(`input`): `void`

定義於: [packages/board/src/input-interpretation/input-orchestrator.ts:136](https://github.com/ue-too/ue-too/blob/feb7c80222df5d3cd97bfa1933bafe3190c6e48d/packages/board/src/input-interpretation/input-orchestrator.ts#L136)

#### 參數

##### input

[`OutputEvent`](../type-aliases/OutputEvent.md)

#### 回傳

`void`

***

### processInputEventOutput()

> **processInputEventOutput**(`output`): `void`

定義於: [packages/board/src/input-interpretation/input-orchestrator.ts:122](https://github.com/ue-too/ue-too/blob/feb7c80222df5d3cd97bfa1933bafe3190c6e48d/packages/board/src/input-interpretation/input-orchestrator.ts#L122)

Processes output events from state machines and routes them to camera control and observers.

#### 參數

##### output

`any`

The output from a state machine, can be a single event, array of events, or any value

#### 回傳

`void`

#### 備註

This method serves as the main entry point for state machine outputs. It:
1. Validates whether the output is a valid OutputEvent
2. Handles both single events and arrays of events
3. Routes each valid event through the camera control pipeline
4. Broadcasts events to observers via the publisher

Called by event parsers after the state machine processes an input and produces output.
The method uses type guards to ensure type safety when handling dynamic output types.

#### 範例

```typescript
const result = stateMachine.happens("scroll", {deltaX: 0, deltaY: 10, x: 100, y: 200});
orchestrator.processInputEventOutput(result.output);
```
