[@ue-too/board](../globals.md) / RawUserInputPublisher

# Class: RawUserInputPublisher

Defined in: [packages/board/src/input-interpretation/raw-input-publisher/raw-input-publisher.ts:205](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/board/src/input-interpretation/raw-input-publisher/raw-input-publisher.ts#L205)

Publisher for broadcasting raw user input events to observers.

## Remarks

This class implements the observable pattern to distribute user input events
to external subscribers. It operates in parallel to camera control - the
orchestrator both sends events to this publisher AND controls the camera.

**Architecture**:
```
Orchestrator → Publisher → Observers (UI, analytics, etc.)
            ↓
         CameraMux → CameraRig
```

**Event Streams**:
- **Specific streams**: Subscribe to "pan", "zoom", or "rotate" for typed events
- **Unified stream**: Subscribe to "all" for all events with type discriminator

**Use Cases**:
- Update UI elements based on user interactions
- Log analytics about user gestures
- Synchronize secondary views or previews
- Implement custom gesture reactions independent of camera

**Observable Implementation**:
Uses AsyncObservable for asynchronous event delivery, preventing observers
from blocking the input processing pipeline.

## Example

```typescript
const publisher = new RawUserInputPublisher();

// Subscribe to pan events
const unsubscribe = publisher.on("pan", (event) => {
  console.log("User panned by:", event.diff);
  updateMinimap(event.diff);
});

// Subscribe to all events
publisher.on("all", (event) => {
  switch (event.type) {
    case "pan":
      analytics.log("pan", event.diff);
      break;
    case "zoom":
      analytics.log("zoom", event.deltaZoomAmount, event.anchorPoint);
      break;
    case "rotate":
      analytics.log("rotate", event.deltaRotation);
      break;
  }
});

// Later, unsubscribe
unsubscribe();
```

## Implements

- [`UserInputPublisher`](../interfaces/UserInputPublisher.md)

## Constructors

### Constructor

> **new RawUserInputPublisher**(): `RawUserInputPublisher`

Defined in: [packages/board/src/input-interpretation/raw-input-publisher/raw-input-publisher.ts:212](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/board/src/input-interpretation/raw-input-publisher/raw-input-publisher.ts#L212)

#### Returns

`RawUserInputPublisher`

## Methods

### notifyPan()

> **notifyPan**(`diff`): `void`

Defined in: [packages/board/src/input-interpretation/raw-input-publisher/raw-input-publisher.ts:219](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/board/src/input-interpretation/raw-input-publisher/raw-input-publisher.ts#L219)

Notifies subscribers of a pan gesture

#### Parameters

##### diff

`Point`

#### Returns

`void`

#### Implementation of

[`UserInputPublisher`](../interfaces/UserInputPublisher.md).[`notifyPan`](../interfaces/UserInputPublisher.md#notifypan)

***

### notifyRotate()

> **notifyRotate**(`deltaRotation`): `void`

Defined in: [packages/board/src/input-interpretation/raw-input-publisher/raw-input-publisher.ts:229](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/board/src/input-interpretation/raw-input-publisher/raw-input-publisher.ts#L229)

Notifies subscribers of a rotate gesture

#### Parameters

##### deltaRotation

`number`

#### Returns

`void`

#### Implementation of

[`UserInputPublisher`](../interfaces/UserInputPublisher.md).[`notifyRotate`](../interfaces/UserInputPublisher.md#notifyrotate)

***

### notifyZoom()

> **notifyZoom**(`deltaZoomAmount`, `anchorPoint`): `void`

Defined in: [packages/board/src/input-interpretation/raw-input-publisher/raw-input-publisher.ts:224](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/board/src/input-interpretation/raw-input-publisher/raw-input-publisher.ts#L224)

Notifies subscribers of a zoom gesture

#### Parameters

##### deltaZoomAmount

`number`

##### anchorPoint

`Point`

#### Returns

`void`

#### Implementation of

[`UserInputPublisher`](../interfaces/UserInputPublisher.md).[`notifyZoom`](../interfaces/UserInputPublisher.md#notifyzoom)

***

### on()

> **on**\<`K`\>(`eventName`, `callback`): [`UnsubscribeToUserRawInput`](../type-aliases/UnsubscribeToUserRawInput.md)

Defined in: [packages/board/src/input-interpretation/raw-input-publisher/raw-input-publisher.ts:234](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/board/src/input-interpretation/raw-input-publisher/raw-input-publisher.ts#L234)

Subscribes to input events

#### Type Parameters

##### K

`K` *extends* keyof [`RawUserInputEventMap`](../type-aliases/RawUserInputEventMap.md)

#### Parameters

##### eventName

`K`

##### callback

(`event`) => `void`

#### Returns

[`UnsubscribeToUserRawInput`](../type-aliases/UnsubscribeToUserRawInput.md)

#### Implementation of

[`UserInputPublisher`](../interfaces/UserInputPublisher.md).[`on`](../interfaces/UserInputPublisher.md#on)
