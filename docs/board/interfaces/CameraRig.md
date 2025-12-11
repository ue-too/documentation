[@ue-too/board](../globals.md) / CameraRig

# Interface: CameraRig

Defined in: [packages/board/src/camera/camera-rig/camera-rig.ts:35](https://github.com/ue-too/ue-too/blob/95dd78435970713202a67be3986e96a80ff00749/packages/board/src/camera/camera-rig/camera-rig.ts#L35)

## Description

The context for the pan control state machine.

## Extends

- [`PanContext`](PanContext.md).[`ZoomContext`](ZoomContext.md).[`RotateContext`](RotateContext.md)

## Properties

### camera

> **camera**: [`ObservableBoardCamera`](ObservableBoardCamera.md)

Defined in: [packages/board/src/camera/camera-rig/camera-rig.ts:36](https://github.com/ue-too/ue-too/blob/95dd78435970713202a67be3986e96a80ff00749/packages/board/src/camera/camera-rig/camera-rig.ts#L36)

#### Overrides

[`PanContext`](PanContext.md).[`camera`](PanContext.md#camera)

***

### config

> **config**: [`CameraRigConfig`](../type-aliases/CameraRigConfig.md)

Defined in: [packages/board/src/camera/camera-rig/camera-rig.ts:37](https://github.com/ue-too/ue-too/blob/95dd78435970713202a67be3986e96a80ff00749/packages/board/src/camera/camera-rig/camera-rig.ts#L37)

***

### limitEntireViewPort

> **limitEntireViewPort**: `boolean`

Defined in: [packages/board/src/camera/camera-mux/animation-and-lock/pan-control-state-machine.ts:56](https://github.com/ue-too/ue-too/blob/95dd78435970713202a67be3986e96a80ff00749/packages/board/src/camera/camera-mux/animation-and-lock/pan-control-state-machine.ts#L56)

#### Inherited from

[`PanContext`](PanContext.md).[`limitEntireViewPort`](PanContext.md#limitentireviewport)

***

### panByViewPort()

> **panByViewPort**: (`delta`) => `void`

Defined in: [packages/board/src/camera/camera-mux/animation-and-lock/pan-control-state-machine.ts:57](https://github.com/ue-too/ue-too/blob/95dd78435970713202a67be3986e96a80ff00749/packages/board/src/camera/camera-mux/animation-and-lock/pan-control-state-machine.ts#L57)

#### Parameters

##### delta

`Point`

#### Returns

`void`

#### Inherited from

[`PanContext`](PanContext.md).[`panByViewPort`](PanContext.md#panbyviewport)

***

### panByWorld()

> **panByWorld**: (`delta`) => `void`

Defined in: [packages/board/src/camera/camera-mux/animation-and-lock/pan-control-state-machine.ts:59](https://github.com/ue-too/ue-too/blob/95dd78435970713202a67be3986e96a80ff00749/packages/board/src/camera/camera-mux/animation-and-lock/pan-control-state-machine.ts#L59)

#### Parameters

##### delta

`Point`

#### Returns

`void`

#### Inherited from

[`PanContext`](PanContext.md).[`panByWorld`](PanContext.md#panbyworld)

***

### panToViewPort()

> **panToViewPort**: (`target`) => `void`

Defined in: [packages/board/src/camera/camera-mux/animation-and-lock/pan-control-state-machine.ts:58](https://github.com/ue-too/ue-too/blob/95dd78435970713202a67be3986e96a80ff00749/packages/board/src/camera/camera-mux/animation-and-lock/pan-control-state-machine.ts#L58)

#### Parameters

##### target

`Point`

#### Returns

`void`

#### Inherited from

[`PanContext`](PanContext.md).[`panToViewPort`](PanContext.md#pantoviewport)

***

### panToWorld()

> **panToWorld**: (`target`) => `void`

Defined in: [packages/board/src/camera/camera-mux/animation-and-lock/pan-control-state-machine.ts:60](https://github.com/ue-too/ue-too/blob/95dd78435970713202a67be3986e96a80ff00749/packages/board/src/camera/camera-mux/animation-and-lock/pan-control-state-machine.ts#L60)

#### Parameters

##### target

`Point`

#### Returns

`void`

#### Inherited from

[`PanContext`](PanContext.md).[`panToWorld`](PanContext.md#pantoworld)

***

### rotateBy()

> **rotateBy**: (`delta`) => `void`

Defined in: [packages/board/src/camera/camera-mux/animation-and-lock/rotation-control-state-machine.ts:55](https://github.com/ue-too/ue-too/blob/95dd78435970713202a67be3986e96a80ff00749/packages/board/src/camera/camera-mux/animation-and-lock/rotation-control-state-machine.ts#L55)

#### Parameters

##### delta

`number`

#### Returns

`void`

#### Inherited from

[`RotateContext`](RotateContext.md).[`rotateBy`](RotateContext.md#rotateby)

***

### rotateTo()

> **rotateTo**: (`target`) => `void`

Defined in: [packages/board/src/camera/camera-mux/animation-and-lock/rotation-control-state-machine.ts:56](https://github.com/ue-too/ue-too/blob/95dd78435970713202a67be3986e96a80ff00749/packages/board/src/camera/camera-mux/animation-and-lock/rotation-control-state-machine.ts#L56)

#### Parameters

##### target

`number`

#### Returns

`void`

#### Inherited from

[`RotateContext`](RotateContext.md).[`rotateTo`](RotateContext.md#rotateto)

***

### zoomBy()

> **zoomBy**: (`delta`) => `void`

Defined in: [packages/board/src/camera/camera-mux/animation-and-lock/zoom-control-state-machine.ts:78](https://github.com/ue-too/ue-too/blob/95dd78435970713202a67be3986e96a80ff00749/packages/board/src/camera/camera-mux/animation-and-lock/zoom-control-state-machine.ts#L78)

#### Parameters

##### delta

`number`

#### Returns

`void`

#### Inherited from

[`ZoomContext`](ZoomContext.md).[`zoomBy`](ZoomContext.md#zoomby)

***

### zoomByAt()

> **zoomByAt**: (`delta`, `at`) => `void`

Defined in: [packages/board/src/camera/camera-mux/animation-and-lock/zoom-control-state-machine.ts:76](https://github.com/ue-too/ue-too/blob/95dd78435970713202a67be3986e96a80ff00749/packages/board/src/camera/camera-mux/animation-and-lock/zoom-control-state-machine.ts#L76)

#### Parameters

##### delta

`number`

##### at

`Point`

#### Returns

`void`

#### Inherited from

[`ZoomContext`](ZoomContext.md).[`zoomByAt`](ZoomContext.md#zoombyat)

***

### zoomByAtWorld()

> **zoomByAtWorld**: (`delta`, `at`) => `void`

Defined in: [packages/board/src/camera/camera-mux/animation-and-lock/zoom-control-state-machine.ts:80](https://github.com/ue-too/ue-too/blob/95dd78435970713202a67be3986e96a80ff00749/packages/board/src/camera/camera-mux/animation-and-lock/zoom-control-state-machine.ts#L80)

#### Parameters

##### delta

`number`

##### at

`Point`

#### Returns

`void`

#### Inherited from

[`ZoomContext`](ZoomContext.md).[`zoomByAtWorld`](ZoomContext.md#zoombyatworld)

***

### zoomTo()

> **zoomTo**: (`targetZoom`) => `void`

Defined in: [packages/board/src/camera/camera-mux/animation-and-lock/zoom-control-state-machine.ts:77](https://github.com/ue-too/ue-too/blob/95dd78435970713202a67be3986e96a80ff00749/packages/board/src/camera/camera-mux/animation-and-lock/zoom-control-state-machine.ts#L77)

#### Parameters

##### targetZoom

`number`

#### Returns

`void`

#### Inherited from

[`ZoomContext`](ZoomContext.md).[`zoomTo`](ZoomContext.md#zoomto)

***

### zoomToAt()

> **zoomToAt**: (`targetZoom`, `at`) => `void`

Defined in: [packages/board/src/camera/camera-mux/animation-and-lock/zoom-control-state-machine.ts:75](https://github.com/ue-too/ue-too/blob/95dd78435970713202a67be3986e96a80ff00749/packages/board/src/camera/camera-mux/animation-and-lock/zoom-control-state-machine.ts#L75)

#### Parameters

##### targetZoom

`number`

##### at

`Point`

#### Returns

`void`

#### Inherited from

[`ZoomContext`](ZoomContext.md).[`zoomToAt`](ZoomContext.md#zoomtoat)

***

### zoomToAtWorld()

> **zoomToAtWorld**: (`targetZoom`, `at`) => `void`

Defined in: [packages/board/src/camera/camera-mux/animation-and-lock/zoom-control-state-machine.ts:79](https://github.com/ue-too/ue-too/blob/95dd78435970713202a67be3986e96a80ff00749/packages/board/src/camera/camera-mux/animation-and-lock/zoom-control-state-machine.ts#L79)

#### Parameters

##### targetZoom

`number`

##### at

`Point`

#### Returns

`void`

#### Inherited from

[`ZoomContext`](ZoomContext.md).[`zoomToAtWorld`](ZoomContext.md#zoomtoatworld)

## Methods

### cleanup()

> **cleanup**(): `void`

Defined in: [packages/being/src/interface.ts:3](https://github.com/ue-too/ue-too/blob/95dd78435970713202a67be3986e96a80ff00749/packages/being/src/interface.ts#L3)

#### Returns

`void`

#### Inherited from

[`PanContext`](PanContext.md).[`cleanup`](PanContext.md#cleanup)

***

### configure()

> **configure**(`config`): `void`

Defined in: [packages/board/src/camera/camera-rig/camera-rig.ts:38](https://github.com/ue-too/ue-too/blob/95dd78435970713202a67be3986e96a80ff00749/packages/board/src/camera/camera-rig/camera-rig.ts#L38)

#### Parameters

##### config

`Partial`\<[`CameraRigConfig`](../type-aliases/CameraRigConfig.md)\>

#### Returns

`void`

***

### setup()

> **setup**(): `void`

Defined in: [packages/being/src/interface.ts:2](https://github.com/ue-too/ue-too/blob/95dd78435970713202a67be3986e96a80ff00749/packages/being/src/interface.ts#L2)

#### Returns

`void`

#### Inherited from

[`PanContext`](PanContext.md).[`setup`](PanContext.md#setup)

***

### update()

> **update**(): `void`

Defined in: [packages/board/src/camera/camera-rig/camera-rig.ts:39](https://github.com/ue-too/ue-too/blob/95dd78435970713202a67be3986e96a80ff00749/packages/board/src/camera/camera-rig/camera-rig.ts#L39)

#### Returns

`void`
