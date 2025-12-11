[@ue-too/board](../globals.md) / ZoomContext

# Interface: ZoomContext

Defined in: [packages/board/src/camera/camera-mux/animation-and-lock/zoom-control-state-machine.ts:74](https://github.com/ue-too/ue-too/blob/c02efc01f7c19f3efc21823d0489e987a3e92427/packages/board/src/camera/camera-mux/animation-and-lock/zoom-control-state-machine.ts#L74)

## Description

The context for the zoom control state machine.

## Extends

- `BaseContext`

## Extended by

- [`CameraRig`](CameraRig.md)

## Properties

### zoomBy()

> **zoomBy**: (`delta`) => `void`

Defined in: [packages/board/src/camera/camera-mux/animation-and-lock/zoom-control-state-machine.ts:78](https://github.com/ue-too/ue-too/blob/c02efc01f7c19f3efc21823d0489e987a3e92427/packages/board/src/camera/camera-mux/animation-and-lock/zoom-control-state-machine.ts#L78)

#### Parameters

##### delta

`number`

#### Returns

`void`

***

### zoomByAt()

> **zoomByAt**: (`delta`, `at`) => `void`

Defined in: [packages/board/src/camera/camera-mux/animation-and-lock/zoom-control-state-machine.ts:76](https://github.com/ue-too/ue-too/blob/c02efc01f7c19f3efc21823d0489e987a3e92427/packages/board/src/camera/camera-mux/animation-and-lock/zoom-control-state-machine.ts#L76)

#### Parameters

##### delta

`number`

##### at

`Point`

#### Returns

`void`

***

### zoomByAtWorld()

> **zoomByAtWorld**: (`delta`, `at`) => `void`

Defined in: [packages/board/src/camera/camera-mux/animation-and-lock/zoom-control-state-machine.ts:80](https://github.com/ue-too/ue-too/blob/c02efc01f7c19f3efc21823d0489e987a3e92427/packages/board/src/camera/camera-mux/animation-and-lock/zoom-control-state-machine.ts#L80)

#### Parameters

##### delta

`number`

##### at

`Point`

#### Returns

`void`

***

### zoomTo()

> **zoomTo**: (`targetZoom`) => `void`

Defined in: [packages/board/src/camera/camera-mux/animation-and-lock/zoom-control-state-machine.ts:77](https://github.com/ue-too/ue-too/blob/c02efc01f7c19f3efc21823d0489e987a3e92427/packages/board/src/camera/camera-mux/animation-and-lock/zoom-control-state-machine.ts#L77)

#### Parameters

##### targetZoom

`number`

#### Returns

`void`

***

### zoomToAt()

> **zoomToAt**: (`targetZoom`, `at`) => `void`

Defined in: [packages/board/src/camera/camera-mux/animation-and-lock/zoom-control-state-machine.ts:75](https://github.com/ue-too/ue-too/blob/c02efc01f7c19f3efc21823d0489e987a3e92427/packages/board/src/camera/camera-mux/animation-and-lock/zoom-control-state-machine.ts#L75)

#### Parameters

##### targetZoom

`number`

##### at

`Point`

#### Returns

`void`

***

### zoomToAtWorld()

> **zoomToAtWorld**: (`targetZoom`, `at`) => `void`

Defined in: [packages/board/src/camera/camera-mux/animation-and-lock/zoom-control-state-machine.ts:79](https://github.com/ue-too/ue-too/blob/c02efc01f7c19f3efc21823d0489e987a3e92427/packages/board/src/camera/camera-mux/animation-and-lock/zoom-control-state-machine.ts#L79)

#### Parameters

##### targetZoom

`number`

##### at

`Point`

#### Returns

`void`

## Methods

### cleanup()

> **cleanup**(): `void`

Defined in: [packages/being/src/interface.ts:3](https://github.com/ue-too/ue-too/blob/c02efc01f7c19f3efc21823d0489e987a3e92427/packages/being/src/interface.ts#L3)

#### Returns

`void`

#### Inherited from

`BaseContext.cleanup`

***

### setup()

> **setup**(): `void`

Defined in: [packages/being/src/interface.ts:2](https://github.com/ue-too/ue-too/blob/c02efc01f7c19f3efc21823d0489e987a3e92427/packages/being/src/interface.ts#L2)

#### Returns

`void`

#### Inherited from

`BaseContext.setup`
