[@ue-too/board](../globals.md) / DefaultBoardCamera

# Class: DefaultBoardCamera

Defined in: [packages/board/src/camera/default-camera.ts:66](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/board/src/camera/default-camera.ts#L66)

Observable camera implementation that extends BaseCamera with event notification.
This is the recommended camera class for most applications.

## Remarks

DefaultBoardCamera wraps BaseCamera and adds an event system via [CameraUpdatePublisher](CameraUpdatePublisher.md).
All camera state changes (pan, zoom, rotate) trigger corresponding events that observers can subscribe to.

Use this class when you need to:
- React to camera changes in your UI or game logic
- Synchronize multiple systems with camera state
- Implement camera-dependent features (minimap, LOD, culling)

For a non-observable camera without event overhead, use BaseCamera directly.

## Example

```typescript
const camera = new DefaultBoardCamera(1920, 1080);

// Subscribe to camera events
camera.on('zoom', (event, state) => {
  console.log(`Zoomed by ${event.deltaZoomAmount}`);
  console.log(`New zoom level: ${state.zoomLevel}`);
});

camera.on('pan', (event, state) => {
  console.log(`Panned by (${event.diff.x}, ${event.diff.y})`);
});

// Camera updates trigger events
camera.setZoomLevel(2.0);
camera.setPosition({ x: 100, y: 200 });
```

## See

 - BaseCamera for non-observable camera
 - [ObservableBoardCamera](../interfaces/ObservableBoardCamera.md) for the interface definition

## Implements

- [`ObservableBoardCamera`](../interfaces/ObservableBoardCamera.md)

## Constructors

### Constructor

> **new DefaultBoardCamera**(`viewPortWidth`, `viewPortHeight`, `position`, `rotation`, `zoomLevel`, `boundaries`, `zoomLevelBoundaries`, `rotationBoundaries`): `DefaultBoardCamera`

Defined in: [packages/board/src/camera/default-camera.ts:102](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/board/src/camera/default-camera.ts#L102)

Creates a new observable camera with event notification capabilities.

#### Parameters

##### viewPortWidth

`number` = `DEFAULT_BOARD_CAMERA_VIEWPORT_WIDTH`

Width of the viewport in CSS pixels (default: 1000)

##### viewPortHeight

`number` = `DEFAULT_BOARD_CAMERA_VIEWPORT_HEIGHT`

Height of the viewport in CSS pixels (default: 1000)

##### position

`Point` = `...`

Initial camera position in world coordinates (default: {x: 0, y: 0})

##### rotation

`number` = `0`

Initial rotation in radians (default: 0)

##### zoomLevel

`number` = `1`

Initial zoom level (default: 1.0)

##### boundaries

[`Boundaries`](../type-aliases/Boundaries.md) = `DEFAULT_BOARD_CAMERA_BOUNDARIES`

Position constraints (default: ±10000 on both axes)

##### zoomLevelBoundaries

[`ZoomLevelLimits`](../type-aliases/ZoomLevelLimits.md) = `DEFAULT_BOARD_CAMERA_ZOOM_BOUNDARIES`

Zoom constraints (default: 0.1 to 10)

##### rotationBoundaries

Optional rotation constraints (default: unrestricted)

[`RotationLimits`](../type-aliases/RotationLimits.md) | `undefined`

#### Returns

`DefaultBoardCamera`

#### Example

```typescript
// Camera with default settings
const camera1 = new DefaultBoardCamera();

// Camera with custom viewport
const camera2 = new DefaultBoardCamera(1920, 1080);

// Camera with all options
const camera3 = new DefaultBoardCamera(
  1920, 1080,
  { x: 0, y: 0 },
  0,
  1.0,
  { min: { x: -5000, y: -5000 }, max: { x: 5000, y: 5000 } },
  { min: 0.5, max: 4 },
  { start: 0, end: Math.PI * 2 }
);
```

## Camera

### boundaries

#### Get Signature

> **get** **boundaries**(): [`Boundaries`](../type-aliases/Boundaries.md) \| `undefined`

Defined in: [packages/board/src/camera/default-camera.ts:112](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/board/src/camera/default-camera.ts#L112)

##### Description

The boundaries of the camera in the world coordinate system.

##### Returns

[`Boundaries`](../type-aliases/Boundaries.md) \| `undefined`

#### Set Signature

> **set** **boundaries**(`boundaries`): `void`

Defined in: [packages/board/src/camera/default-camera.ts:116](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/board/src/camera/default-camera.ts#L116)

Optional position boundaries for the camera in world coordinates

##### Parameters

###### boundaries

[`Boundaries`](../type-aliases/Boundaries.md) | `undefined`

##### Returns

`void`

Optional position boundaries for the camera in world coordinates

#### Implementation of

[`ObservableBoardCamera`](../interfaces/ObservableBoardCamera.md).[`boundaries`](../interfaces/ObservableBoardCamera.md#boundaries)

***

### position

#### Get Signature

> **get** **position**(): `Point`

Defined in: [packages/board/src/camera/default-camera.ts:151](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/board/src/camera/default-camera.ts#L151)

##### Description

The position of the camera in the world coordinate system.

##### Returns

`Point`

Current camera position in world coordinates (center of viewport)

#### Implementation of

[`ObservableBoardCamera`](../interfaces/ObservableBoardCamera.md).[`position`](../interfaces/ObservableBoardCamera.md#position)

***

### rotationBoundaries

#### Get Signature

> **get** **rotationBoundaries**(): [`RotationLimits`](../type-aliases/RotationLimits.md) \| `undefined`

Defined in: [packages/board/src/camera/default-camera.ts:264](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/board/src/camera/default-camera.ts#L264)

##### Description

The boundaries of the rotation of the camera.

##### Returns

[`RotationLimits`](../type-aliases/RotationLimits.md) \| `undefined`

#### Set Signature

> **set** **rotationBoundaries**(`rotationBoundaries`): `void`

Defined in: [packages/board/src/camera/default-camera.ts:268](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/board/src/camera/default-camera.ts#L268)

Optional rotation constraints (start and end angles)

##### Parameters

###### rotationBoundaries

[`RotationLimits`](../type-aliases/RotationLimits.md) | `undefined`

##### Returns

`void`

Optional rotation constraints (start and end angles)

#### Implementation of

[`ObservableBoardCamera`](../interfaces/ObservableBoardCamera.md).[`rotationBoundaries`](../interfaces/ObservableBoardCamera.md#rotationboundaries)

***

### viewPortHeight

#### Get Signature

> **get** **viewPortHeight**(): `number`

Defined in: [packages/board/src/camera/default-camera.ts:138](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/board/src/camera/default-camera.ts#L138)

##### Description

The height of the viewport. (The height of the canvas in css pixels)

##### Returns

`number`

#### Set Signature

> **set** **viewPortHeight**(`height`): `void`

Defined in: [packages/board/src/camera/default-camera.ts:142](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/board/src/camera/default-camera.ts#L142)

Height of the viewport in CSS pixels

##### Parameters

###### height

`number`

##### Returns

`void`

Height of the viewport in CSS pixels

#### Implementation of

[`ObservableBoardCamera`](../interfaces/ObservableBoardCamera.md).[`viewPortHeight`](../interfaces/ObservableBoardCamera.md#viewportheight)

***

### viewPortWidth

#### Get Signature

> **get** **viewPortWidth**(): `number`

Defined in: [packages/board/src/camera/default-camera.ts:125](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/board/src/camera/default-camera.ts#L125)

##### Description

The width of the viewport. (The width of the canvas in css pixels)

##### Returns

`number`

#### Set Signature

> **set** **viewPortWidth**(`width`): `void`

Defined in: [packages/board/src/camera/default-camera.ts:129](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/board/src/camera/default-camera.ts#L129)

Width of the viewport in CSS pixels

##### Parameters

###### width

`number`

##### Returns

`void`

Width of the viewport in CSS pixels

#### Implementation of

[`ObservableBoardCamera`](../interfaces/ObservableBoardCamera.md).[`viewPortWidth`](../interfaces/ObservableBoardCamera.md#viewportwidth)

***

### zoomBoundaries

#### Get Signature

> **get** **zoomBoundaries**(): [`ZoomLevelLimits`](../type-aliases/ZoomLevelLimits.md) \| `undefined`

Defined in: [packages/board/src/camera/default-camera.ts:197](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/board/src/camera/default-camera.ts#L197)

##### Description

The boundaries of the zoom level of the camera.

##### Returns

[`ZoomLevelLimits`](../type-aliases/ZoomLevelLimits.md) \| `undefined`

#### Set Signature

> **set** **zoomBoundaries**(`zoomBoundaries`): `void`

Defined in: [packages/board/src/camera/default-camera.ts:201](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/board/src/camera/default-camera.ts#L201)

Optional zoom level constraints (min and max zoom)

##### Parameters

###### zoomBoundaries

[`ZoomLevelLimits`](../type-aliases/ZoomLevelLimits.md) | `undefined`

##### Returns

`void`

Optional zoom level constraints (min and max zoom)

#### Implementation of

[`ObservableBoardCamera`](../interfaces/ObservableBoardCamera.md).[`zoomBoundaries`](../interfaces/ObservableBoardCamera.md#zoomboundaries)

***

### zoomLevel

#### Get Signature

> **get** **zoomLevel**(): `number`

Defined in: [packages/board/src/camera/default-camera.ts:188](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/board/src/camera/default-camera.ts#L188)

##### Description

The zoom level of the camera.

##### Returns

`number`

Current zoom level (1.0 = 100%, 2.0 = 200%, etc.)

#### Implementation of

[`ObservableBoardCamera`](../interfaces/ObservableBoardCamera.md).[`zoomLevel`](../interfaces/ObservableBoardCamera.md#zoomlevel)

## Other

### rotation

#### Get Signature

> **get** **rotation**(): `number`

Defined in: [packages/board/src/camera/default-camera.ts:255](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/board/src/camera/default-camera.ts#L255)

Gets the current camera rotation in radians.

##### Returns

`number`

Current rotation angle (0 to 2π)

Current rotation in radians (0 to 2π), normalized

#### Implementation of

[`ObservableBoardCamera`](../interfaces/ObservableBoardCamera.md).[`rotation`](../interfaces/ObservableBoardCamera.md#rotation)

***

### convertFromViewPort2WorldSpace()

> **convertFromViewPort2WorldSpace**(`point`): `Point`

Defined in: [packages/board/src/camera/default-camera.ts:334](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/board/src/camera/default-camera.ts#L334)

#### Parameters

##### point

`Point`

The point in the viewport coordinate system.

#### Returns

`Point`

The point in the world coordinate system.

#### Description

Converts a point from the viewport coordinate system to the world coordinate system.

#### Implementation of

[`ObservableBoardCamera`](../interfaces/ObservableBoardCamera.md).[`convertFromViewPort2WorldSpace`](../interfaces/ObservableBoardCamera.md#convertfromviewport2worldspace)

***

### convertFromWorld2ViewPort()

> **convertFromWorld2ViewPort**(`point`): `Point`

Defined in: [packages/board/src/camera/default-camera.ts:344](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/board/src/camera/default-camera.ts#L344)

#### Parameters

##### point

`Point`

The point in the world coordinate system.

#### Returns

`Point`

The point in the viewport coordinate system.

#### Description

Converts a point from the world coordinate system to the viewport coordinate system.

#### Implementation of

[`ObservableBoardCamera`](../interfaces/ObservableBoardCamera.md).[`convertFromWorld2ViewPort`](../interfaces/ObservableBoardCamera.md#convertfromworld2viewport)

***

### ~~getCameraOriginInWindow()~~

> **getCameraOriginInWindow**(`centerInWindow`): `Point`

Defined in: [packages/board/src/camera/default-camera.ts:324](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/board/src/camera/default-camera.ts#L324)

#### Parameters

##### centerInWindow

`Point`

The center of the camera in the window coordinate system.

#### Returns

`Point`

The origin of the camera in the window coordinate system.

#### Description

The origin of the camera in the window coordinate system.

#### Deprecated

#### Implementation of

[`ObservableBoardCamera`](../interfaces/ObservableBoardCamera.md).[`getCameraOriginInWindow`](../interfaces/ObservableBoardCamera.md#getcameraorigininwindow)

***

### getTransform()

> **getTransform**(`devicePixelRatio`, `alignCoorindate`): [`TransformationMatrix`](../type-aliases/TransformationMatrix.md)

Defined in: [packages/board/src/camera/default-camera.ts:284](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/board/src/camera/default-camera.ts#L284)

#### Parameters

##### devicePixelRatio

`number` = `1`

The device pixel ratio of the canvas

##### alignCoorindate

`boolean` = `true`

Whether to align the coordinate system to the camera's position

#### Returns

[`TransformationMatrix`](../type-aliases/TransformationMatrix.md)

The transformation matrix

#### Description

The order of the transformation is as follows:
1. Scale (scale the context using the device pixel ratio)
2. Translation (move the origin of the context to the center of the canvas)
3. Rotation (rotate the context negatively the rotation of the camera)
4. Zoom (scale the context using the zoom level of the camera)
5. Translation (move the origin of the context to the position of the camera in the context coordinate system)

#### Implementation of

[`ObservableBoardCamera`](../interfaces/ObservableBoardCamera.md).[`getTransform`](../interfaces/ObservableBoardCamera.md#gettransform)

***

### getTRS()

> **getTRS**(`devicePixelRatio`, `alignCoordinateSystem`): `object`

Defined in: [packages/board/src/camera/default-camera.ts:458](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/board/src/camera/default-camera.ts#L458)

Decomposes the camera transformation into Translation, Rotation, and Scale components.

#### Parameters

##### devicePixelRatio

`number` = `1`

Device pixel ratio for high-DPI displays

##### alignCoordinateSystem

`boolean` = `true`

If true, uses standard coordinate system (y-up). If false, uses inverted y-axis

#### Returns

`object`

Object containing separate scale, rotation, and translation values

##### cached

> **cached**: `boolean`

##### rotation

> **rotation**: `number`

##### scale

> **scale**: `object`

###### scale.x

> **x**: `number`

###### scale.y

> **y**: `number`

##### translation

> **translation**: `object`

###### translation.x

> **x**: `number`

###### translation.y

> **y**: `number`

#### Implementation of

[`ObservableBoardCamera`](../interfaces/ObservableBoardCamera.md).[`getTRS`](../interfaces/ObservableBoardCamera.md#gettrs)

***

### invertFromWorldSpace2ViewPort()

> **invertFromWorldSpace2ViewPort**(`point`): `Point`

Defined in: [packages/board/src/camera/default-camera.ts:354](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/board/src/camera/default-camera.ts#L354)

#### Parameters

##### point

`Point`

The point in the world coordinate system.

#### Returns

`Point`

The point in the viewport coordinate system.

#### Description

Inverts a point from the world coordinate system to the viewport coordinate system.

***

### on()

> **on**\<`K`\>(`eventName`, `callback`, `options?`): [`UnSubscribe`](../type-aliases/UnSubscribe.md)

Defined in: [packages/board/src/camera/default-camera.ts:454](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/board/src/camera/default-camera.ts#L454)

Subscribes to camera events with optional AbortController for cancellation.

#### Type Parameters

##### K

`K` *extends* keyof [`CameraEventMap`](../type-aliases/CameraEventMap.md)

The event type key from CameraEventMap

#### Parameters

##### eventName

`K`

Event type to listen for: 'pan', 'zoom', 'rotate', or 'all'

##### callback

(`event`, `cameraState`) => `void`

Function called when event occurs, receives event data and camera state

##### options?

[`SubscriptionOptions`](../interfaces/SubscriptionOptions.md)

Optional subscription configuration including AbortController signal

#### Returns

[`UnSubscribe`](../type-aliases/UnSubscribe.md)

Function to unsubscribe from this event

#### Remarks

Available events:
- 'pan': Triggered when camera position changes
- 'zoom': Triggered when zoom level changes
- 'rotate': Triggered when rotation changes
- 'all': Triggered for any camera change (pan, zoom, or rotate)

Use the AbortController pattern to manage multiple subscriptions:

#### Example

```typescript
// Basic subscription
const unsubscribe = camera.on('pan', (event, state) => {
  console.log(`Panned by (${event.diff.x}, ${event.diff.y})`);
  console.log(`New position: (${state.position.x}, ${state.position.y})`);
});

// Later: unsubscribe
unsubscribe();

// Subscribe to all events
camera.on('all', (event, state) => {
  if (event.type === 'pan') {
    console.log('Pan event:', event.diff);
  } else if (event.type === 'zoom') {
    console.log('Zoom event:', event.deltaZoomAmount);
  } else if (event.type === 'rotate') {
    console.log('Rotate event:', event.deltaRotation);
  }
});

// Using AbortController for batch unsubscribe
const controller = new AbortController();
camera.on('pan', handlePan, { signal: controller.signal });
camera.on('zoom', handleZoom, { signal: controller.signal });
camera.on('rotate', handleRotate, { signal: controller.signal });

// Unsubscribe all at once
controller.abort();
```

#### Implementation of

[`ObservableBoardCamera`](../interfaces/ObservableBoardCamera.md).[`on`](../interfaces/ObservableBoardCamera.md#on)

***

### setHorizontalBoundaries()

> **setHorizontalBoundaries**(`min`, `max`): `void`

Defined in: [packages/board/src/camera/default-camera.ts:362](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/board/src/camera/default-camera.ts#L362)

Sets horizontal (x-axis) movement boundaries for the camera.

#### Parameters

##### min

`number`

Minimum x coordinate in world space

##### max

`number`

Maximum x coordinate in world space

#### Returns

`void`

#### Remarks

If min > max, values are automatically swapped.

#### Implementation of

[`ObservableBoardCamera`](../interfaces/ObservableBoardCamera.md).[`setHorizontalBoundaries`](../interfaces/ObservableBoardCamera.md#sethorizontalboundaries)

***

### setMaxZoomLevel()

> **setMaxZoomLevel**(`maxZoomLevel`): `boolean`

Defined in: [packages/board/src/camera/default-camera.ts:205](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/board/src/camera/default-camera.ts#L205)

Updates the maximum allowed zoom level.

#### Parameters

##### maxZoomLevel

`number`

Maximum zoom level constraint

#### Returns

`boolean`

#### Implementation of

[`ObservableBoardCamera`](../interfaces/ObservableBoardCamera.md).[`setMaxZoomLevel`](../interfaces/ObservableBoardCamera.md#setmaxzoomlevel)

***

### setMinZoomLevel()

> **setMinZoomLevel**(`minZoomLevel`): `boolean`

Defined in: [packages/board/src/camera/default-camera.ts:214](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/board/src/camera/default-camera.ts#L214)

Updates the minimum allowed zoom level.

#### Parameters

##### minZoomLevel

`number`

Minimum zoom level constraint

#### Returns

`boolean`

#### Remarks

If current zoom is below the new minimum, camera will zoom in to match the minimum.

#### Implementation of

[`ObservableBoardCamera`](../interfaces/ObservableBoardCamera.md).[`setMinZoomLevel`](../interfaces/ObservableBoardCamera.md#setminzoomlevel)

***

### setPosition()

> **setPosition**(`destination`): `boolean`

Defined in: [packages/board/src/camera/default-camera.ts:174](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/board/src/camera/default-camera.ts#L174)

Sets the camera position and notifies observers if successful.

#### Parameters

##### destination

`Point`

Target position in world coordinates

#### Returns

`boolean`

True if position was updated, false if rejected by boundaries or negligible change

#### Remarks

If the position changes, a 'pan' event is triggered with the position delta and new camera state.
All 'pan' and 'all' event subscribers will be notified.

#### Example

```typescript
camera.on('pan', (event, state) => {
  console.log(`Camera moved by (${event.diff.x}, ${event.diff.y})`);
});

camera.setPosition({ x: 100, y: 200 }); // Triggers pan event
```

#### Implementation of

[`ObservableBoardCamera`](../interfaces/ObservableBoardCamera.md).[`setPosition`](../interfaces/ObservableBoardCamera.md#setposition)

***

### setRotation()

> **setRotation**(`rotation`): `boolean`

Defined in: [packages/board/src/camera/default-camera.ts:308](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/board/src/camera/default-camera.ts#L308)

Sets the camera rotation and notifies observers if successful.

#### Parameters

##### rotation

`number`

Target rotation in radians

#### Returns

`boolean`

True if rotation was updated, false if outside boundaries or already at limit

#### Remarks

If the rotation changes, a 'rotate' event is triggered with the rotation delta and new camera state.
All 'rotate' and 'all' event subscribers will be notified.
Rotation is automatically normalized to 0-2π range.

#### Example

```typescript
camera.on('rotate', (event, state) => {
  console.log(`Camera rotated by ${event.deltaRotation} radians`);
});

camera.setRotation(Math.PI / 4); // Triggers rotate event
```

#### Implementation of

[`ObservableBoardCamera`](../interfaces/ObservableBoardCamera.md).[`setRotation`](../interfaces/ObservableBoardCamera.md#setrotation)

***

### setUsingTransformationMatrix()

> **setUsingTransformationMatrix**(`transformationMatrix`, `devicePixelRatio`): `void`

Defined in: [packages/board/src/camera/default-camera.ts:462](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/board/src/camera/default-camera.ts#L462)

#### Parameters

##### transformationMatrix

[`TransformationMatrix`](../type-aliases/TransformationMatrix.md)

##### devicePixelRatio

`number` = `1`

#### Returns

`void`

***

### setVerticalBoundaries()

> **setVerticalBoundaries**(`min`, `max`): `void`

Defined in: [packages/board/src/camera/default-camera.ts:385](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/board/src/camera/default-camera.ts#L385)

Sets vertical (y-axis) movement boundaries for the camera.

#### Parameters

##### min

`number`

Minimum y coordinate in world space

##### max

`number`

Maximum y coordinate in world space

#### Returns

`void`

#### Remarks

If min > max, values are automatically swapped.

#### Implementation of

[`ObservableBoardCamera`](../interfaces/ObservableBoardCamera.md).[`setVerticalBoundaries`](../interfaces/ObservableBoardCamera.md#setverticalboundaries)

***

### setZoomLevel()

> **setZoomLevel**(`zoomLevel`): `boolean`

Defined in: [packages/board/src/camera/default-camera.ts:241](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/board/src/camera/default-camera.ts#L241)

Sets the camera zoom level and notifies observers if successful.

#### Parameters

##### zoomLevel

`number`

Target zoom level (1.0 = 100%, 2.0 = 200%, etc.)

#### Returns

`boolean`

True if zoom was updated, false if outside boundaries or already at limit

#### Remarks

If the zoom changes, a 'zoom' event is triggered with the zoom delta and new camera state.
All 'zoom' and 'all' event subscribers will be notified.

#### Example

```typescript
camera.on('zoom', (event, state) => {
  console.log(`Zoom changed by ${event.deltaZoomAmount}`);
  console.log(`New zoom: ${state.zoomLevel}`);
});

camera.setZoomLevel(2.0); // Triggers zoom event
```

#### Implementation of

[`ObservableBoardCamera`](../interfaces/ObservableBoardCamera.md).[`setZoomLevel`](../interfaces/ObservableBoardCamera.md#setzoomlevel)

***

### viewPortAABB()

> **viewPortAABB**(`alignCoordinate`): `object`

Defined in: [packages/board/src/camera/default-camera.ts:470](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/board/src/camera/default-camera.ts#L470)

Calculates the axis-aligned bounding box (AABB) of the viewport in world space.

#### Parameters

##### alignCoordinate

`boolean` = `true`

If true, uses standard coordinate system (y-up). If false, uses inverted y-axis

#### Returns

`object`

Object with min and max points defining the bounding box

##### max

> **max**: `Point`

##### min

> **min**: `Point`

#### Remarks

Useful for culling and determining which objects are visible in the current viewport.

#### Implementation of

[`ObservableBoardCamera`](../interfaces/ObservableBoardCamera.md).[`viewPortAABB`](../interfaces/ObservableBoardCamera.md#viewportaabb)

***

### viewPortInWorldSpace()

> **viewPortInWorldSpace**(`alignCoordinate`): `object`

Defined in: [packages/board/src/camera/default-camera.ts:466](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/board/src/camera/default-camera.ts#L466)

Calculates the four corners of the viewport in world space, accounting for rotation.

#### Parameters

##### alignCoordinate

`boolean` = `true`

If true, uses standard coordinate system (y-up). If false, uses inverted y-axis

#### Returns

`object`

Object containing the four corner points (top-left, top-right, bottom-left, bottom-right)

##### bottom

> **bottom**: `object`

###### bottom.left

> **left**: `Point`

###### bottom.right

> **right**: `Point`

##### top

> **top**: `object`

###### top.left

> **left**: `Point`

###### top.right

> **right**: `Point`

#### Remarks

Returns the actual rotated viewport corners, not an AABB. Use this for precise viewport bounds.

#### Implementation of

[`ObservableBoardCamera`](../interfaces/ObservableBoardCamera.md).[`viewPortInWorldSpace`](../interfaces/ObservableBoardCamera.md#viewportinworldspace)
