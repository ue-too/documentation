[@ue-too/board](../globals.md) / CameraRig

# Interface: CameraRig

Defined in: [packages/board/src/camera/camera-rig/camera-rig.ts:59](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/board/src/camera/camera-rig/camera-rig.ts#L59)

High-level camera control interface providing intuitive methods for pan, zoom, and rotation.
The camera rig acts as a facade over the camera, handling coordinate conversions and constraints.

## Remarks

CameraRig provides:
- **Coordinate-aware methods**: Separate methods for viewport and world coordinates
- **Anchor-point zooming**: Keep points stationary during zoom (zoom-to-cursor)
- **Configuration management**: Unified config for all camera operations
- **Handler composition**: Combines pan, zoom, rotation handlers with proper sequencing

The rig ensures correct transformation order when combining operations
(e.g., zoom-at-point requires zoom followed by pan compensation).

## See

 - [DefaultCameraRig](../classes/DefaultCameraRig.md) for the default implementation
 - [createDefaultCameraRig](../functions/createDefaultCameraRig.md) for a factory function

## Extends

- `BaseContext`

## Properties

### camera

> **camera**: [`ObservableBoardCamera`](ObservableBoardCamera.md)

Defined in: [packages/board/src/camera/camera-rig/camera-rig.ts:61](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/board/src/camera/camera-rig/camera-rig.ts#L61)

The underlying observable camera being controlled

***

### config

> **config**: [`CameraRigConfig`](../type-aliases/CameraRigConfig.md)

Defined in: [packages/board/src/camera/camera-rig/camera-rig.ts:64](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/board/src/camera/camera-rig/camera-rig.ts#L64)

Current configuration for all camera operations

***

### panByViewPort()

> **panByViewPort**: (`delta`) => `void`

Defined in: [packages/board/src/camera/camera-rig/camera-rig.ts:81](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/board/src/camera/camera-rig/camera-rig.ts#L81)

Pans the camera by a delta in viewport coordinates.

#### Parameters

##### delta

`Point`

Movement delta in viewport space (CSS pixels, origin at center)

#### Returns

`void`

***

### panByWorld()

> **panByWorld**: (`delta`) => `void`

Defined in: [packages/board/src/camera/camera-rig/camera-rig.ts:93](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/board/src/camera/camera-rig/camera-rig.ts#L93)

Pans the camera by a delta in world coordinates.

#### Parameters

##### delta

`Point`

Movement delta in world space

#### Returns

`void`

***

### panToViewPort()

> **panToViewPort**: (`target`) => `void`

Defined in: [packages/board/src/camera/camera-rig/camera-rig.ts:87](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/board/src/camera/camera-rig/camera-rig.ts#L87)

Pans the camera to a target position in viewport coordinates.

#### Parameters

##### target

`Point`

Target position in viewport space

#### Returns

`void`

***

### panToWorld()

> **panToWorld**: (`target`) => `void`

Defined in: [packages/board/src/camera/camera-rig/camera-rig.ts:99](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/board/src/camera/camera-rig/camera-rig.ts#L99)

Pans the camera to a target position in world coordinates.

#### Parameters

##### target

`Point`

Target position in world space

#### Returns

`void`

***

### rotateBy()

> **rotateBy**: (`delta`) => `void`

Defined in: [packages/board/src/camera/camera-rig/camera-rig.ts:105](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/board/src/camera/camera-rig/camera-rig.ts#L105)

Rotates the camera by a delta angle.

#### Parameters

##### delta

`number`

Rotation delta in radians

#### Returns

`void`

***

### rotateTo()

> **rotateTo**: (`target`) => `void`

Defined in: [packages/board/src/camera/camera-rig/camera-rig.ts:111](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/board/src/camera/camera-rig/camera-rig.ts#L111)

Rotates the camera to a target angle.

#### Parameters

##### target

`number`

Target rotation in radians

#### Returns

`void`

***

### zoomBy()

> **zoomBy**: (`delta`) => `void`

Defined in: [packages/board/src/camera/camera-rig/camera-rig.ts:137](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/board/src/camera/camera-rig/camera-rig.ts#L137)

Zooms by a delta at viewport center.

#### Parameters

##### delta

`number`

Zoom delta

#### Returns

`void`

***

### zoomByAt()

> **zoomByAt**: (`delta`, `at`) => `void`

Defined in: [packages/board/src/camera/camera-rig/camera-rig.ts:125](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/board/src/camera/camera-rig/camera-rig.ts#L125)

Zooms by a delta, keeping a viewport point stationary.

#### Parameters

##### delta

`number`

Zoom delta

##### at

`Point`

Anchor point in viewport coordinates

#### Returns

`void`

***

### zoomByAtWorld()

> **zoomByAtWorld**: (`delta`, `at`) => `void`

Defined in: [packages/board/src/camera/camera-rig/camera-rig.ts:151](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/board/src/camera/camera-rig/camera-rig.ts#L151)

Zooms by a delta, keeping a world point stationary.

#### Parameters

##### delta

`number`

Zoom delta

##### at

`Point`

Anchor point in world coordinates

#### Returns

`void`

***

### zoomTo()

> **zoomTo**: (`targetZoom`) => `void`

Defined in: [packages/board/src/camera/camera-rig/camera-rig.ts:131](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/board/src/camera/camera-rig/camera-rig.ts#L131)

Zooms to a target level at viewport center.

#### Parameters

##### targetZoom

`number`

Target zoom level

#### Returns

`void`

***

### zoomToAt()

> **zoomToAt**: (`targetZoom`, `at`) => `void`

Defined in: [packages/board/src/camera/camera-rig/camera-rig.ts:118](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/board/src/camera/camera-rig/camera-rig.ts#L118)

Zooms to a target level, keeping a viewport point stationary.

#### Parameters

##### targetZoom

`number`

Target zoom level

##### at

`Point`

Anchor point in viewport coordinates

#### Returns

`void`

***

### zoomToAtWorld()

> **zoomToAtWorld**: (`targetZoom`, `at`) => `void`

Defined in: [packages/board/src/camera/camera-rig/camera-rig.ts:144](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/board/src/camera/camera-rig/camera-rig.ts#L144)

Zooms to a target level, keeping a world point stationary.

#### Parameters

##### targetZoom

`number`

Target zoom level

##### at

`Point`

Anchor point in world coordinates

#### Returns

`void`

## Methods

### cleanup()

> **cleanup**(): `void`

Defined in: packages/being/dist/interface.d.ts:31

#### Returns

`void`

#### Inherited from

`BaseContext.cleanup`

***

### configure()

> **configure**(`config`): `void`

Defined in: [packages/board/src/camera/camera-rig/camera-rig.ts:70](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/board/src/camera/camera-rig/camera-rig.ts#L70)

Updates the camera rig configuration.

#### Parameters

##### config

`Partial`\<[`CameraRigConfig`](../type-aliases/CameraRigConfig.md)\>

Partial configuration to merge with current config

#### Returns

`void`

***

### setup()

> **setup**(): `void`

Defined in: packages/being/dist/interface.d.ts:30

#### Returns

`void`

#### Inherited from

`BaseContext.setup`

***

### update()

> **update**(): `void`

Defined in: [packages/board/src/camera/camera-rig/camera-rig.ts:75](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/board/src/camera/camera-rig/camera-rig.ts#L75)

Updates the camera rig state (called per frame if needed).

#### Returns

`void`
